(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, n) => {
                (n.r(t), n.d(t, { mouse: () => r, onResize: () => s }));
                var a = n(2472),
                    i = n(1176);
                const s = (0, a.E)('clientResized'),
                    o = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    r = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, i.R)(!1);
                        }
                        function n() {
                            e.enabled && (0, i.R)(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', n))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', n))
                                : (0, i.R)(!1);
                        }
                        const s = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let i = !0;
                                        const s = `mouse${t}`,
                                            r = o[t]((e) => n([e, 'outside']));
                                        function l(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(s, l),
                                            a(),
                                            () => {
                                                i &&
                                                    (r(),
                                                    window.removeEventListener(s, l),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (i = !1));
                                            }
                                        );
                                    };
                                })(n)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, s, {
                            disable() {
                                ((e.enabled = !1), a());
                            },
                            enable() {
                                ((e.enabled = !0), a());
                            },
                            enableOutside() {
                                e.enabled && (0, i.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, i.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, t, n) => {
                (n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => s,
                        getSize: () => i,
                        graphicsQuality: () => o,
                    }));
                var a = n(527);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => a });
            },
            2472: (e, t, n) => {
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => a });
            },
            3138: (e, t, n) => {
                n.d(t, { O: () => i });
                var a = n(5959);
                const i = { view: n(7641), client: a };
            },
            3722: (e, t, n) => {
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function i(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                (n.r(t), n.d(t, { getBgUrl: () => i, getTextureUrl: () => a }));
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => i });
                var a = n(2472);
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
            7641: (e, t, n) => {
                (n.r(t),
                    n.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => r,
                        children: () => a,
                        displayStatus: () => i.W,
                        displayStatusIs: () => O,
                        events: () => s.U,
                        extraSize: () => A,
                        forceTriggerMouseMove: () => y,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => S,
                        getScale: () => b,
                        getSize: () => _,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => P,
                        isFocused: () => w,
                        pxToRem: () => v,
                        remToPx: () => E,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => D,
                    }));
                var a = n(3722),
                    i = n(6112),
                    s = n(6538),
                    o = n(8566);
                function r(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: E(t.x), y: E(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function v(e) {
                    return viewEnv.pxToRem(e);
                }
                function E(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function w() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function P() {
                    return viewEnv.isEventHandled();
                }
                function y() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const O = Object.keys(i.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === i.W[t]), e),
                        {},
                    ),
                    A = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    D = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => s });
                const a = ['args'],
                    i = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        i = {},
                                        s = Object.keys(e);
                                    for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                    return i;
                                })(t, a);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((i = s),
                                              Object.entries(i).map(([e, t]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: n, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: n, name: e, bool: t };
                                                      default:
                                                          return { __Type: n, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var i;
                    },
                    s = {
                        close(e) {
                            i('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            i(64);
                        },
                        move(e) {
                            i(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, n) => {
                let a, i;
                (n.d(t, { n: () => a }),
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
                    })(i || (i = {})));
            },
            1358: (e, t, n) => {
                n.d(t, { Z: () => s });
                var a = n(3138);
                class i {
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
                        return (window.__dataTracker || (window.__dataTracker = new i()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, t, n = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const s = a.O.view.addModelObserver(e, n, i);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(s) : (this._views[n] = [s])))
                                : console.error("Can't add callback for model:", e),
                            s
                        );
                    }
                    removeCallback(e, t = 0) {
                        let n = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((n = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            n || console.error("Can't remove callback by id:", e),
                            n
                        );
                    }
                    _emmitDataChanged(e, t, n) {
                        n.forEach((n) => {
                            const a = this._callbacks[n];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                i.__instance = void 0;
                const s = i;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
            4179: (e, t, n) => {
                n.d(t, { B0: () => l, ry: () => f });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    n();
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
                        const n = e,
                            a = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== a)),
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
                var s = n(1358);
                const o = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
                let l;
                var c;
                (((c = l || (l = {}))[(c.UNDEFINED = 0)] = 'UNDEFINED'),
                    (c[(c.TOOLTIP = 1)] = 'TOOLTIP'),
                    (c[(c.POP_OVER = 2)] = 'POP_OVER'),
                    (c[(c.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (c[(c.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (c[(c.MOVE = 16)] = 'MOVE'),
                    (c[(c.CLOSE = 32)] = 'CLOSE'),
                    (c[(c.MINIMIZE = 64)] = 'MINIMIZE'));
                const d = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    u = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var g = n(5521),
                    p = n(3138);
                const b = ['args'];
                function v(e, t, n, a, i, s, o) {
                    try {
                        var r = e[s](o),
                            l = r.value;
                    } catch (e) {
                        return void n(e);
                    }
                    r.done ? t(l) : Promise.resolve(l).then(a, i);
                }
                const E = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    f = (function () {
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
                                        n = arguments;
                                    return new Promise(function (a, i) {
                                        var s = e.apply(t, n);
                                        function o(e) {
                                            v(s, a, i, o, r, 'next', e);
                                        }
                                        function r(e) {
                                            v(s, a, i, o, r, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    w = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        i = {},
                                        s = Object.keys(e);
                                    for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                    return i;
                                })(t, b);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
                                          arguments:
                                              ((a = i),
                                              Object.entries(a).map(([e, t]) => {
                                                  const n = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          n.number = t;
                                                          break;
                                                      case 'boolean':
                                                          n.bool = t;
                                                          break;
                                                      default:
                                                          n.string = t.toString();
                                                  }
                                                  return n;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    h = () => w(l.CLOSE),
                    P = (e, t) => {
                        e.keyCode === g.n.ESCAPE && t();
                    };
                var y = n(7572);
                const S = i.instance,
                    O = {
                        DataTracker: s.Z,
                        ViewModel: y.Z,
                        ViewEventType: l,
                        NumberFormatType: d,
                        RealFormatType: u,
                        TimeFormatType: _,
                        DateFormatType: m,
                        makeGlobalBoundingBox: E,
                        sendMoveEvent: (e) => w(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => w(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            w(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, a, i = R.invalid('resId'), s) => {
                            const o = p.O.view.getViewGlobalPosition(),
                                r = n.getBoundingClientRect(),
                                c = r.x,
                                d = r.y,
                                u = r.width,
                                _ = r.height,
                                m = {
                                    x: p.O.view.pxToRem(c) + o.x,
                                    y: p.O.view.pxToRem(d) + o.y,
                                    width: p.O.view.pxToRem(u),
                                    height: p.O.view.pxToRem(_),
                                };
                            w(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: i,
                                direction: t,
                                bbox: E(m),
                                on: !0,
                                args: s,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => P(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            P(e, h);
                        },
                        handleViewEvent: w,
                        onBindingsReady: f,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const i = Object.prototype.toString.call(t[a]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = t[a];
                                        n[a] = [];
                                        for (let t = 0; t < i.length; t++) n[a].push({ value: e(i[t].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[a] = e(t[a]))
                                            : (n[a] = t[a]);
                                }
                            return n;
                        },
                        ClickOutsideManager: S,
                        SystemLocale: o,
                        UserLocale: r,
                    };
                window.ViewEnvHelper = O;
            },
            8932: (e, t, n) => {
                var a = n(6179),
                    i = n.n(a),
                    s = n(493),
                    o = n.n(s),
                    r = n(6483),
                    l = n.n(r);
                function c(e) {
                    engine.call('PlaySound', e);
                }
                const d = {
                    playHighlight() {
                        c('highlight');
                    },
                    playClick() {
                        c('play');
                    },
                    playYes() {
                        c('yes1');
                    },
                };
                var u = n(3403),
                    _ = n(3138),
                    m = n(4179);
                const g = [
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
                function p(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const b = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: m.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    v = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            i = e.args,
                            s = e.onMouseEnter,
                            o = e.onMouseLeave,
                            r = e.onMouseDown,
                            l = e.onClick,
                            c = e.ignoreShowDelay,
                            d = void 0 !== c && c,
                            u = e.ignoreMouseClick,
                            _ = void 0 !== u && u,
                            m = e.decoratorId,
                            v = void 0 === m ? 0 : m,
                            E = e.isEnabled,
                            f = void 0 === E || E,
                            w = e.targetId,
                            h = void 0 === w ? 0 : w,
                            P = e.onShow,
                            y = e.onHide,
                            S = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    i = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                return i;
                            })(e, g);
                        const O = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            A = (0, a.useMemo)(
                                () =>
                                    h ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let n,
                                            a = R.invalid('resId');
                                        return (
                                            t &&
                                                ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== n &&
                                                    window.subViews[n] &&
                                                    (a = window.subViews[n].id)),
                                            { caller: n, stack: t, resId: a }
                                        );
                                    })().resId,
                                [h],
                            ),
                            D = (0, a.useCallback)(() => {
                                (O.current.isVisible && O.current.timeoutId) ||
                                    (b(n, v, { isMouseEvent: !0, on: !0, arguments: p(i) }, A),
                                    P && P(),
                                    (O.current.isVisible = !0));
                            }, [n, v, i, A, P]),
                            k = (0, a.useCallback)(() => {
                                if (O.current.isVisible || O.current.timeoutId) {
                                    const e = O.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (O.current.timeoutId = 0)),
                                        b(n, v, { on: !1 }, A),
                                        O.current.isVisible && y && y(),
                                        (O.current.isVisible = !1));
                                }
                            }, [n, v, A, y]),
                            M = (0, a.useCallback)((e) => {
                                O.current.isVisible &&
                                    ((O.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (O.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(O.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = O.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', M, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', M, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === f && k();
                            }, [f, k]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        (window.removeEventListener('mouseleave', k), k());
                                    }
                                ),
                                [k],
                            ),
                            f
                                ? (0, a.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((C = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((O.current.timeoutId = window.setTimeout(D, d ? 100 : 400)),
                                                          s && s(e),
                                                          C && C(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (k(), null == o || o(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === _ && k(), null == l || l(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === _ && k(), null == r || r(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          S,
                                      ),
                                  )
                                : t
                        );
                        var C;
                    },
                    E = {
                        base: 'ModifierDomainIcon_base_74',
                        image: 'ModifierDomainIcon_image_62',
                        iconOut: 'ModifierDomainIcon_iconOut_c6',
                        image__big: 'ModifierDomainIcon_image__big_3c',
                        image__large: 'ModifierDomainIcon_image__large_f1',
                        iconHover: 'ModifierDomainIcon_iconHover_69',
                    };
                let f;
                !(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'));
                })(f || (f = {}));
                const w = (e, t) => {
                        const n = t === f.large ? '80x80' : '64x64';
                        return {
                            backgroundImage: `url(${R.images.battle_modifiers.gui.maps.icons.feature.domains.$dyn(`c_${n}`).$dyn(e)})`,
                        };
                    },
                    h = ({ modifiersDomain: e, subModeId: t, className: n, size: a = f.small }) => {
                        const s = t ? { modifiersDomain: e, subModeId: t } : { modifiersDomain: e };
                        return i().createElement(
                            'div',
                            { className: E.base },
                            i().createElement(
                                v,
                                {
                                    contentId:
                                        R.views.battle_modifiers.lobby.tooltips.ModifiersDomainTooltipView('resId'),
                                    args: s,
                                },
                                i().createElement('div', {
                                    className: l()(E.image, E[`image__${a}`], n),
                                    style: w(e, a),
                                }),
                            ),
                        );
                    };
                function P() {
                    return !1;
                }
                console.log;
                var y = n(9174);
                function S(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const O = (e) => (0 === e ? window : window.subViews.get(e)),
                    A = ((e, t) => {
                        const n = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: s, children: o, mocks: r }) {
                                const l = (0, a.useRef)([]),
                                    c = (e, n, a) => {
                                        var i;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = O,
                                                context: a = 'model',
                                            } = {}) {
                                                const i = new Map();
                                                function s(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? i.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = i.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const i = n(t),
                                                        s = a.split('.').reduce((e, t) => e[t], i);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? s
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, s);
                                                };
                                                return {
                                                    subscribe: (n, s) => {
                                                        const r = 'string' == typeof s ? `${a}.${s}` : a,
                                                            l = _.O.view.addModelObserver(r, t, !0);
                                                        return (i.set(l, n), e && n(o(s)), l);
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, t) => {
                                                        const n = o(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = o(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                n = (function (e, t) {
                                                                    var n =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (n) return (n = n.call(e)).next.bind(n);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (n = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return S(e, t);
                                                                                var n = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === n &&
                                                                                        e.constructor &&
                                                                                        (n = e.constructor.name),
                                                                                    'Map' === n || 'Set' === n
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === n ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                n,
                                                                                            )
                                                                                          ? S(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        n && (e = n);
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
                                                                })(i.keys());
                                                            !(e = n()).done;
                                                        )
                                                            s(e.value, t);
                                                    },
                                                    unsubscribe: s,
                                                };
                                            })(n),
                                            o =
                                                'real' === e
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (i = null == a ? void 0 : a.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            r = (t) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(t)) : o.readByPath(t),
                                            c = (e) => l.current.push(e),
                                            d = (({ observableModel: e }) =>
                                                Object.assign({}, e.primitives(['activeModeResName']), {
                                                    progressionState: e.object('progressionState'),
                                                    currentProgressionStage: e.object('currentProgressionStage'),
                                                    modifiersDomains: e.array('modifiersDomains', []),
                                                }))({
                                                mode: e,
                                                readByPath: r,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (t, n) => {
                                                        const a = null != n ? n : r(t),
                                                            i = y.LO.box(a, { equals: P });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, y.aD)((e) => i.set(e)),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const a = null != n ? n : r(t),
                                                            i = y.LO.box(a, { equals: P });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, y.aD)((e) => i.set(e)),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const a = r(n);
                                                        if (Array.isArray(t)) {
                                                            const i = t.reduce(
                                                                (e, t) => ((e[t] = y.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, y.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                i[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                        {
                                                            const i = t,
                                                                s = Object.entries(i),
                                                                r = s.reduce(
                                                                    (e, [t, n]) => ((e[n] = y.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, y.aD)((e) => {
                                                                            s.forEach(([t, n]) => {
                                                                                r[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            u = { mode: e, model: d, externalModel: o, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && a ? a.controls(u) : t(u),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    d = (0, a.useRef)(!1),
                                    u = (0, a.useState)(e),
                                    m = u[0],
                                    g = u[1],
                                    p = (0, a.useState)(() => c(e, s, r)),
                                    b = p[0],
                                    v = p[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        d.current ? v(c(m, s, r)) : (d.current = !0);
                                    }, [r, m, s]),
                                    (0, a.useEffect)(() => {
                                        g(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (b.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [b],
                                    ),
                                    i().createElement(n.Provider, { value: b }, o)
                                );
                            },
                            () => (0, a.useContext)(n),
                        ];
                    })(0, ({ externalModel: e }) => ({ showInfo: e.createCallbackNoArgs('onShowInfo') })),
                    D = A[0],
                    k = A[1],
                    M = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let C, T;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(C || (C = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(T || (T = {})));
                const x = ({ size: e = C.Default, classMix: t }) =>
                        i().createElement('div', { className: l()(M.background, M[`background__${e}`], t) }),
                    I = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    L = ({ size: e }) => {
                        const t = l()(I.base, I[`base__${e}`]);
                        return i().createElement('div', { className: t });
                    },
                    N = {
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
                    F = (0, a.memo)(
                        ({ size: e, lineRef: t, disabled: n, baseStyles: a, isComplete: s, withoutBounce: o }) => {
                            const r = l()(
                                    N.base,
                                    N[`base__${e}`],
                                    n && N.base__disabled,
                                    s && N.base__finished,
                                    o && N.base__withoutBounce,
                                ),
                                c = !n && !s;
                            return i().createElement(
                                'div',
                                { className: r, style: a, ref: t },
                                i().createElement('div', { className: N.pattern }),
                                i().createElement('div', { className: N.gradient }),
                                c && i().createElement(L, { size: e }),
                            );
                        },
                    ),
                    U = ({ size: e, value: t, lineRef: n, disabled: s, onComplete: o }) => {
                        const r = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            l = 100 === t;
                        return (
                            (0, a.useEffect)(() => {
                                l && o && o();
                            }, [l, o]),
                            i().createElement(F, { size: e, disabled: s, baseStyles: r, isComplete: l, lineRef: n })
                        );
                    },
                    B = (e, t) => {
                        let n;
                        const a = setTimeout(() => {
                            n = e();
                        }, t);
                        return () => {
                            ('function' == typeof n && n(), clearTimeout(a));
                        };
                    };
                let W, z;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(W || (W = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(z || (z = {})));
                const V = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: s,
                            size: o,
                            to: r,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = r < s,
                                u = (0, a.useState)(z.Idle),
                                _ = u[0],
                                m = u[1],
                                g = _ === z.In,
                                p = _ === z.End,
                                b = _ === z.Idle,
                                v = (0, a.useCallback)(
                                    (e) => {
                                        (m(e), c && c(e));
                                    },
                                    [c],
                                );
                            ((0, a.useEffect)(() => {
                                if (b && !n)
                                    return B(() => {
                                        v(z.In);
                                    }, t);
                            }, [v, n, b, t]),
                                (0, a.useEffect)(() => {
                                    if (g)
                                        return B(() => {
                                            (l && l(), v(z.End));
                                        }, e + t);
                                }, [v, g, l, t, e]));
                            const E = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [d ? 'left' : 'right']: '0',
                                    }),
                                    [d, t, e],
                                ),
                                f = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [d ? 'left' : 'right']: '0',
                                    }),
                                    [d, t, e],
                                ),
                                w = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(s - r)}%`, left: `${d ? r : s}%` }),
                                    [s, d, r],
                                );
                            return p
                                ? null
                                : i().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: w },
                                      i().createElement(
                                          'div',
                                          { style: b ? E : f, className: 'ProgressBarDeltaSimple_delta_99' },
                                          i().createElement(L, { size: o }),
                                      ),
                                  );
                        },
                    ),
                    j = (0, a.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: s,
                            disabled: o,
                            isComplete: r,
                            animationSettings: l,
                            onChangeAnimationState: c,
                            onEndAnimation: d,
                        }) => {
                            const u = (0, a.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${l.line.duration}ms`,
                                    transitionDelay: `${l.line.delay}ms`,
                                }),
                                [l.line.delay, l.line.duration, e],
                            );
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(F, {
                                    size: t,
                                    lineRef: s,
                                    disabled: o,
                                    isComplete: r,
                                    baseStyles: u,
                                }),
                                n >= 0 &&
                                    i().createElement(V, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        freezed: l.freezed,
                                        from: n,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: c,
                                        onEndAnimation: d,
                                    }),
                            );
                        },
                    ),
                    $ = (e) => (e ? { left: 0 } : { right: 0 }),
                    G = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    H = (e) => ({ transitionDuration: `${e}ms` }),
                    K = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: s,
                            size: o,
                            to: r,
                            onEndAnimation: c,
                            onChangeAnimationState: d,
                            className: u,
                        }) => {
                            const _ = r < s,
                                m = (0, a.useState)(W.Idle),
                                g = m[0],
                                p = m[1],
                                b = g === W.End,
                                v = g === W.Idle,
                                E = g === W.Grow,
                                f = g === W.Shrink,
                                w = (0, a.useCallback)(
                                    (e) => {
                                        (p(e), d && d(e));
                                    },
                                    [d],
                                ),
                                h = (0, a.useCallback)(
                                    (e, t) =>
                                        B(() => {
                                            w(e);
                                        }, t),
                                    [w],
                                );
                            (0, a.useEffect)(() => {
                                if (!n)
                                    return v
                                        ? h(W.Grow, t)
                                        : E
                                          ? h(W.Shrink, e)
                                          : f
                                            ? h(W.End, e)
                                            : void (b && c && c());
                            }, [h, n, b, E, v, f, c, t, e]);
                            const P = (0, a.useMemo)(() => Object.assign({ width: '100%' }, H(e), $(_)), [_, e]),
                                y = (0, a.useMemo)(() => Object.assign({ width: '0%' }, H(e), $(_)), [_, e]),
                                S = (0, a.useMemo)(() => Object.assign({ width: '0%' }, G(_, s), H(e)), [s, _, e]),
                                O = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(r - s)}%` }, G(_, s), H(e)),
                                    [s, _, r, e],
                                );
                            if (b) return null;
                            const A = l()(
                                'ProgressBarDeltaGrow_base_7e',
                                u,
                                _ && 0 === r && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return i().createElement(
                                'div',
                                { style: v ? S : O, className: A },
                                i().createElement(
                                    'div',
                                    { style: f ? y : P, className: 'ProgressBarDeltaGrow_glow_68' },
                                    i().createElement(L, { size: o }),
                                ),
                            );
                        },
                    ),
                    q = (0, a.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: s,
                            disabled: o,
                            isComplete: r,
                            animationSettings: l,
                            onEndAnimation: c,
                            onChangeAnimationState: d,
                        }) => {
                            const u = e < n,
                                _ = (0, a.useState)(!1),
                                m = _[0],
                                g = _[1],
                                p = (0, a.useCallback)(
                                    (e) => {
                                        (e === W.Shrink && g(!0), d && d(e));
                                    },
                                    [d],
                                ),
                                b = (0, a.useMemo)(() => ({ width: `${n}%`, transitionProperty: 'none' }), [n]),
                                v = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${l.line.duration}ms` }),
                                    [l.line.duration, e],
                                );
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(F, {
                                    size: t,
                                    lineRef: s,
                                    disabled: o,
                                    isComplete: r,
                                    withoutBounce: u && 0 === e,
                                    baseStyles: m ? v : b,
                                }),
                                n >= 0 &&
                                    i().createElement(K, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        onChangeAnimationState: p,
                                        freezed: l.freezed,
                                        onEndAnimation: c,
                                        from: n,
                                        size: t,
                                        to: e,
                                        className: l.delta.className,
                                    }),
                            );
                        },
                    ),
                    Y = ['onComplete', 'onEndAnimation'];
                function X() {
                    return (
                        (X =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        X.apply(this, arguments)
                    );
                }
                const Z = (0, a.memo)((e) => {
                        let t = e.onComplete,
                            n = e.onEndAnimation,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    i = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                return i;
                            })(e, Y);
                        const o = (0, a.useState)(!1),
                            r = o[0],
                            l = o[1],
                            c = (0, a.useCallback)(() => {
                                const e = 100 === s.to;
                                (e !== r && l(e), e && t && t(), n && n());
                            }, [r, t, n, s.to]);
                        switch (s.animationSettings.type) {
                            case T.Simple:
                                return i().createElement(j, X({}, s, { onEndAnimation: c, isComplete: r }));
                            case T.Growing:
                                return i().createElement(q, X({}, s, { onEndAnimation: c, isComplete: r }));
                            default:
                                return null;
                        }
                    }),
                    Q = ['onEndAnimation'];
                function J() {
                    return (
                        (J =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        J.apply(this, arguments)
                    );
                }
                const ee = (0, a.memo)((e) => {
                    let t = e.onEndAnimation,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                i = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) ((n = s[a]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                            return i;
                        })(e, Q);
                    const s = (0, a.useRef)({}),
                        o = (0, a.useCallback)(() => {
                            ((s.current.from = void 0), t && t());
                        }, [t]),
                        r = 'number' == typeof s.current.from ? s.current.from : n.from;
                    return (
                        (s.current.from = r),
                        i().createElement(Z, J({}, n, { onEndAnimation: o, key: `${r}-${n.to}`, from: r }))
                    );
                });
                function te() {
                    return (
                        (te =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        te.apply(this, arguments)
                    );
                }
                const ne = (0, a.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: n,
                            disabled: a,
                            deltaFrom: s,
                            animationSettings: o,
                            onEndAnimation: r,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (s === t)
                                return i().createElement(U, {
                                    key: `${s}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: n,
                                    disabled: a,
                                    onComplete: c,
                                });
                            const d = {
                                from: s,
                                to: t,
                                size: e,
                                lineRef: n,
                                disabled: a,
                                animationSettings: o,
                                onComplete: c,
                                onEndAnimation: r,
                                onChangeAnimationState: l,
                            };
                            return o.withStack
                                ? i().createElement(ee, d)
                                : i().createElement(Z, te({ key: `${s}-${t}` }, d));
                        },
                    ),
                    ae = (e) => ({
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
                    ie = (e, t, n) => (n < e ? e : n > t ? t : n),
                    se = (e, t, n) => ('number' == typeof n ? (ie(0, t, n) / t) * 100 : e),
                    oe = {
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
                    re = {
                        freezed: !1,
                        withStack: !1,
                        type: T.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    le = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = oe,
                            size: n = C.Default,
                            animationSettings: s = re,
                            disabled: o = !1,
                            withoutBackground: r = !1,
                            progressBarBackgroundClassMix: c,
                            value: d,
                            deltaFrom: u,
                            lineRef: _,
                            onChangeAnimationState: m,
                            onEndAnimation: g,
                            onComplete: p,
                        }) => {
                            const b = ((e, t, n) =>
                                (0, a.useMemo)(() => {
                                    const a = (ie(0, t, e) / t) * 100;
                                    return { value: a, deltaFrom: se(a, t, n) };
                                }, [n, t, e]))(d, e, u);
                            return i().createElement(
                                'div',
                                { className: l()(M.base, M[`base__${n}`]), style: ae(t) },
                                !r && i().createElement(x, { size: n, classMix: c }),
                                i().createElement(ne, {
                                    size: n,
                                    lineRef: _,
                                    disabled: o,
                                    value: b.value,
                                    deltaFrom: b.deltaFrom,
                                    animationSettings: s,
                                    onEndAnimation: g,
                                    onChangeAnimationState: m,
                                    onComplete: p,
                                }),
                            );
                        },
                    );
                let ce;
                !(function (e) {
                    ((e.DISABLED = 'disabled'),
                        (e.ACTIVE_FINAL = 'activeFinal'),
                        (e.ACTIVE_RESETTABLE = 'activeResettable'),
                        (e.COMPLETED_FINAL = 'completedFinal'),
                        (e.COMPLETED_RESETTABLE = 'completedResettable'));
                })(ce || (ce = {}));
                var de = n(9459),
                    ue = n(9762),
                    _e = n(6457);
                let me, ge;
                (!(function (e) {
                    ((e.Init = 'init'),
                        (e.Active = 'active'),
                        (e.NonActive = 'nonActive'),
                        (e.UpdateState = 'updateState'));
                })(me || (me = {})),
                    (function (e) {
                        ((e.CheckDataUpdate = 'checkDataUpdate'),
                            (e.UpdateStageData = 'updateStageData'),
                            (e.SwitchState = 'switchState'));
                    })(ge || (ge = {})));
                const pe = (e) => e === ce.ACTIVE_RESETTABLE || e === ce.ACTIVE_FINAL,
                    be = (e) => pe(e.status),
                    ve = (e) => !pe(e.status),
                    Ee = (e, t) => e.status !== t.status && fe(e, t),
                    fe = (e, t) =>
                        t.stage === e.stage &&
                        t.currentPoints === e.currentPoints &&
                        t.maximumPoints === e.maximumPoints &&
                        0 === e.earnedPoints,
                    we = (e, t) =>
                        pe(t.status) &&
                        ((1 === t.stage && 0 === t.currentPoints) ||
                            (t.stage === e.stage && e.maximumPoints !== t.maximumPoints)),
                    he = (e, t) =>
                        t.stage === e.stage &&
                        t.currentPoints === e.currentPoints &&
                        t.maximumPoints === e.maximumPoints &&
                        0 !== e.earnedPoints,
                    Pe = (e, t) =>
                        t.stage === e.stage &&
                        t.currentPoints !== e.currentPoints &&
                        t.maximumPoints === e.maximumPoints,
                    ye = (e, t) => t.stage > e.stage && e.currentPoints < e.maximumPoints,
                    Se = (e, t) => t.stage > e.stage && e.currentPoints === e.maximumPoints,
                    Oe = (e, t) => t.stage < e.stage && e.currentPoints > 0,
                    Ae = (e, t) => t.stage < e.stage && 0 === e.currentPoints,
                    De = (e, t) => e.status !== t.status && pe(t.status),
                    ke = (e) => {
                        e.isSoundEnabled && 0 !== e.earnedPoints && c('ev_fep_progress_bar');
                    },
                    Me = {
                        base: 'Status_base_a8',
                        base__noDomains: 'Status_base__noDomains_92',
                        base__completedResettable: 'Status_base__completedResettable_61',
                        base__completedFinal: 'Status_base__completedFinal_81',
                        progress: 'Status_progress_f1',
                        base__disabled: 'Status_base__disabled_e2',
                        progressLevel: 'Status_progressLevel_9a',
                        progressBar: 'Status_progressBar_68',
                        statusIcon: 'Status_statusIcon_bf',
                        base__completedFinal__noDomains: 'Status_base__completedFinal__noDomains_d3',
                        base__completedResettable__noDomains: 'Status_base__completedResettable__noDomains_cd',
                        fadeInWithScale: 'Status_fadeInWithScale_9b',
                        slideDown: 'Status_slideDown_d6',
                    },
                    Ce = (0, u.Pi)(({ className: e, onStatusUpdate: t, isWithoutDomains: n }) => {
                        const s = k().model,
                            o = s.progressionState.get(),
                            r = o.status,
                            c = o.currentStage,
                            d = s.currentProgressionStage.get(),
                            u = d.currentPoints,
                            _ = d.maximumPoints,
                            m = i().useMemo(() => {
                                return (
                                    'widget-fsm',
                                    (e = {
                                        status: r,
                                        stage: c,
                                        currentPoints: u,
                                        maximumPoints: _,
                                        earnedPoints: 0,
                                        isSoundEnabled: !1,
                                    }),
                                    300,
                                    (n = t),
                                    (0, ue.C)(
                                        {
                                            preserveActionOrder: !0,
                                            id: 'widget-fsm',
                                            initial: me.Init,
                                            context: e,
                                            states: {
                                                [me.Init]: { always: { target: me.UpdateState } },
                                                [me.UpdateState]: {
                                                    always: [
                                                        { target: me.Active, cond: be },
                                                        { target: me.NonActive, cond: ve },
                                                    ],
                                                },
                                                [me.Active]: {
                                                    on: {
                                                        [ge.CheckDataUpdate]: [
                                                            {
                                                                target: me.Active,
                                                                actions: [
                                                                    (0, _e.lW)((e, t) => ({
                                                                        type: ge.SwitchState,
                                                                        status: t.status,
                                                                    })),
                                                                ],
                                                                cond: Ee,
                                                            },
                                                            { target: me.Active, cond: fe },
                                                            {
                                                                target: me.UpdateState,
                                                                actions: [
                                                                    (0, _e.f0)({
                                                                        status: (e, t) => t.status,
                                                                        stage: (e, t) => t.stage,
                                                                        currentPoints: (e, t) => t.currentPoints,
                                                                        maximumPoints: (e, t) => t.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    }),
                                                                    () => {},
                                                                ],
                                                                cond: we,
                                                            },
                                                            {
                                                                target: me.Active,
                                                                actions: [
                                                                    (0, _e.lW)((e) => ({
                                                                        type: ge.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: e.maximumPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: e.maximumPoints - e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: ye,
                                                            },
                                                            {
                                                                target: me.Active,
                                                                actions: [
                                                                    (0, _e.lW)((e, t) => ({
                                                                        type: ge.UpdateStageData,
                                                                        stage: t.stage,
                                                                        currentPoints: 0,
                                                                        maximumPoints: t.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    })),
                                                                    () => {},
                                                                    (0, _e.lW)(
                                                                        (e, t) => ({
                                                                            type: ge.UpdateStageData,
                                                                            stage: t.stage,
                                                                            currentPoints: t.currentPoints,
                                                                            maximumPoints: t.maximumPoints,
                                                                            earnedPoints: t.currentPoints,
                                                                        }),
                                                                        { delay: 300 },
                                                                    ),
                                                                ],
                                                                cond: Se,
                                                            },
                                                            {
                                                                target: me.Active,
                                                                actions: [
                                                                    (0, _e.lW)((e, t) => ({
                                                                        type: ge.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: t.currentPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: t.currentPoints - e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: Pe,
                                                            },
                                                            {
                                                                target: me.Active,
                                                                actions: [
                                                                    (0, _e.lW)((e) => ({
                                                                        type: ge.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: e.currentPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    })),
                                                                    (0, _e.lW)((e, t) => ({
                                                                        type: ge.SwitchState,
                                                                        status: t.status,
                                                                    })),
                                                                ],
                                                                cond: he,
                                                            },
                                                            {
                                                                target: me.Active,
                                                                actions: [
                                                                    (0, _e.lW)((e) => ({
                                                                        type: ge.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: 0,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: -e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: Oe,
                                                            },
                                                            {
                                                                target: me.Active,
                                                                actions: [
                                                                    (0, _e.lW)((e, t) => ({
                                                                        type: ge.UpdateStageData,
                                                                        stage: t.stage,
                                                                        currentPoints: t.currentPoints,
                                                                        maximumPoints: t.maximumPoints,
                                                                        earnedPoints: t.currentPoints - t.maximumPoints,
                                                                    })),
                                                                    () => {},
                                                                ],
                                                                cond: Ae,
                                                            },
                                                        ],
                                                        [ge.UpdateStageData]: {
                                                            target: me.Active,
                                                            actions: [
                                                                (0, _e.f0)({
                                                                    stage: (e, t) => t.stage,
                                                                    currentPoints: (e, t) => t.currentPoints,
                                                                    maximumPoints: (e, t) => t.maximumPoints,
                                                                    earnedPoints: (e, t) => t.earnedPoints,
                                                                }),
                                                                ke,
                                                            ],
                                                        },
                                                        [ge.SwitchState]: {
                                                            target: me.UpdateState,
                                                            actions: [
                                                                (e, t) => n(t.status),
                                                                (0, _e.f0)({ status: (e, t) => t.status }),
                                                            ],
                                                        },
                                                    },
                                                },
                                                [me.NonActive]: {
                                                    on: {
                                                        [ge.CheckDataUpdate]: {
                                                            target: me.UpdateState,
                                                            actions: [
                                                                (0, _e.f0)({
                                                                    status: (e, t) => t.status,
                                                                    stage: (e, t) => t.stage,
                                                                    currentPoints: (e, t) => t.currentPoints,
                                                                    maximumPoints: (e, t) => t.maximumPoints,
                                                                    earnedPoints: 0,
                                                                }),
                                                                () => {},
                                                            ],
                                                            cond: De,
                                                        },
                                                        [ge.SwitchState]: {
                                                            target: me.UpdateState,
                                                            actions: (0, _e.f0)({ status: (e, t) => t.status }),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            guards: {
                                                hasActiveStatus: be,
                                                hasNonActiveStatus: ve,
                                                isStatusUpdate: Ee,
                                                isTaskSwitchingUpdate: we,
                                                isNoUpdate: fe,
                                                isUpdateCurrentStageWithZeroEarnPoints: he,
                                                isUpdateCurrentStageWithCurrentPoints: Pe,
                                                isUpdateToNextStageWithoutFillMax: Se,
                                                isUpdateToNextStageWithFillMax: ye,
                                                isUpdateToPrevStageWithReset: Oe,
                                                isUpdateToPrevStageWithoutReset: Ae,
                                                isUpdateWithActiveSwitch: De,
                                            },
                                        },
                                    )
                                );
                                var e, n;
                            }, []),
                            g = (0, de.eO)(m),
                            p = g[0],
                            b = g[1],
                            E = p.context.status === ce.DISABLED;
                        (0, a.useEffect)(() => {
                            b({ type: ge.CheckDataUpdate, status: r, stage: c, currentPoints: u, maximumPoints: _ });
                        }, [r, u, _, c, b]);
                        const f = (0, a.useCallback)(() => {
                                b({
                                    type: ge.CheckDataUpdate,
                                    status: r,
                                    stage: c,
                                    currentPoints: u,
                                    maximumPoints: _,
                                });
                            }, [u, _, c, r, b]),
                            w = l()(
                                Me.base,
                                Me[`base__${p.context.status}`],
                                e,
                                n && Me.base__noDomains,
                                n && Me[`base__${p.context.status}__noDomains`],
                            );
                        return i().createElement(
                            v,
                            {
                                contentId: R.views.fun_random.lobby.tooltips.FunRandomProgressionTooltipView('resId'),
                                isEnabled: !E,
                            },
                            i().createElement(
                                'div',
                                { className: w },
                                i().createElement('div', { className: Me.statusIcon }),
                                i().createElement(
                                    'div',
                                    { className: Me.progress },
                                    i().createElement('div', { className: Me.progressLevel }, p.context.stage),
                                    i().createElement(
                                        'div',
                                        { className: Me.progressBar },
                                        i().createElement(le, {
                                            value: p.context.currentPoints,
                                            maxValue: p.context.maximumPoints,
                                            size: C.Small,
                                            animationSettings: re,
                                            deltaFrom: p.context.currentPoints - p.context.earnedPoints,
                                            onEndAnimation: f,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Te = {
                        base: 'App_base_59',
                        animContainer: 'App_animContainer_b4',
                        slideDown: 'App_slideDown_0e',
                        base__completedResettable: 'App_base__completedResettable_78',
                        base__completedFinal: 'App_base__completedFinal_76',
                        base__disabled: 'App_base__disabled_e8',
                        backgroundWrapper: 'App_backgroundWrapper_0b',
                        modifications: 'App_modifications_5f',
                        title: 'App_title_31',
                        title__noDomains: 'App_title__noDomains_56',
                        status: 'App_status_1c',
                        fadeInWithScale: 'App_fadeInWithScale_72',
                    },
                    Re = R.images.fun_random.gui.maps.icons.feature.asset_packs,
                    xe = (e, t) => {
                        var n;
                        const a = t ? 'sub_modes' : 'modes',
                            i = Re.$dyn(a);
                        return null != (n = i.$dyn(e)) ? n : i.$dyn('undefined');
                    },
                    Ie = R.strings.fun_random.sub_modes,
                    Le = (e) => Math.round(50 * (e - 1)),
                    Ne = (0, u.Pi)(() => {
                        const e = k(),
                            t = e.model,
                            n = e.controls,
                            s = t.progressionState.get().status,
                            o = t.modifiersDomains.get(),
                            r = (() => {
                                const e = (0, a.useState)(_.O.view.getScale()),
                                    t = e[0],
                                    n = e[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        const e = () => {
                                            n(_.O.view.getScale());
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
                            })(),
                            u = t.activeModeResName.get(),
                            m = Ie.$dyn(u) ? u : 'undefined',
                            g = Ie.$dyn(m).capsUserName(),
                            p = (0, a.useState)(s),
                            b = p[0],
                            v = p[1],
                            E = (0, a.useCallback)((e) => {
                                v(e);
                            }, []);
                        var f;
                        ((f = () => {
                            _.O.view.setSidePaddingsRem({ left: 186, right: 186, top: 0, bottom: 0 });
                        }),
                            (0, a.useEffect)(f, []),
                            (0, a.useEffect)(() => {
                                s !== b && pe(s) && v(s);
                            }, [s, b]));
                        const w = 0 === o.length;
                        return i().createElement(
                            'div',
                            { className: l()(Te.base, Te[`base__${b}`]) },
                            i().createElement(
                                'div',
                                {
                                    className: Te.animContainer,
                                    onClick: () => {
                                        (c(R.sounds.yes()), n.showInfo());
                                    },
                                    onMouseEnter: d.playHighlight,
                                },
                                i().createElement(
                                    'div',
                                    { className: Te.backgroundWrapper },
                                    i().createElement('img', {
                                        style: { transform: `translate(-50%, ${Le(r)}%) scale(${r})` },
                                        src: xe(m, !0).hangar_widget.ribbon(),
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Te.modifications },
                                    (function (e, t) {
                                        return Array.isArray(e)
                                            ? e.map(t)
                                            : e.map((e, n, a) => t(null == e ? void 0 : e.value, n));
                                    })(o, (e, t) => i().createElement(h, { key: t, modifiersDomain: e })),
                                ),
                                i().createElement('div', { className: l()(Te.title, w && Te.title__noDomains) }, g),
                                i().createElement(Ce, { className: Te.status, onStatusUpdate: E, isWithoutDomains: w }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    o().render(
                        i().createElement(D, null, i().createElement(Ne, null)),
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
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](n, n.exports, __webpack_require__), n.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, a) => {
            if (!t) {
                var i = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, a] = deferred[l], s = !0, o = 0; o < t.length; o++)
                        (!1 & a || i >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((s = !1), a < i && (i = a));
                    if (s) {
                        deferred.splice(l--, 1);
                        var r = n();
                        void 0 !== r && (e = r);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > a; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var n in t)
                __webpack_require__.o(t, n) &&
                    !__webpack_require__.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        (__webpack_require__.j = 808),
        (() => {
            var e = { 808: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        i,
                        [s, o, r] = n,
                        l = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (r) var c = r(__webpack_require__);
                    }
                    for (t && t(n); l < s.length; l++)
                        ((i = s[l]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(8932));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
