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
            527: (e, t, r) => {
                'use strict';
                (r.r(t), r.d(t, { mouse: () => s, onResize: () => a }));
                var i = r(2472),
                    n = r(1176);
                const a = (0, i.E)('clientResized'),
                    o = { down: (0, i.E)('mousedown'), up: (0, i.E)('mouseup'), move: (0, i.E)('mousemove') },
                    s = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, n.R)(!1);
                        }
                        function r() {
                            e.enabled && (0, n.R)(!0);
                        }
                        function i() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', r))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', r))
                                : (0, n.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (t, r) => (
                                (t[r] = (function (t) {
                                    return (r) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const a = `mouse${t}`,
                                            s = o[t]((e) => r([e, 'outside']));
                                        function l(e) {
                                            r([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, l),
                                            i(),
                                            () => {
                                                n &&
                                                    (s(),
                                                    window.removeEventListener(a, l),
                                                    (e.listeners -= 1),
                                                    i(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(r)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, a, {
                            disable() {
                                ((e.enabled = !1), i());
                            },
                            enable() {
                                ((e.enabled = !0), i());
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
            5959: (e, t, r) => {
                'use strict';
                (r.r(t),
                    r.d(t, {
                        events: () => i,
                        getMouseGlobalPosition: () => a,
                        getSize: () => n,
                        graphicsQuality: () => o,
                    }));
                var i = r(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, r) => {
                'use strict';
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                r.d(t, { R: () => i });
            },
            2472: (e, t, r) => {
                'use strict';
                function i(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                r.d(t, { E: () => i });
            },
            3138: (e, t, r) => {
                'use strict';
                r.d(t, { O: () => n });
                var i = r(5959);
                const n = { view: r(7641), client: i };
            },
            3722: (e, t, r) => {
                'use strict';
                function i(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function n(e, t, r) {
                    return `url(${i(e, t, r)})`;
                }
                (r.r(t), r.d(t, { getBgUrl: () => n, getTextureUrl: () => i }));
            },
            6112: (e, t, r) => {
                'use strict';
                r.d(t, { W: () => i });
                const i = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, r) => {
                'use strict';
                r.d(t, { U: () => n });
                var i = r(2472);
                const n = {
                    onTextureFrozen: (0, i.E)('self.onTextureFrozen'),
                    onTextureReady: (0, i.E)('self.onTextureReady'),
                    onDomBuilt: (0, i.E)('self.onDomBuilt'),
                    onLoaded: (0, i.E)('self.onLoaded'),
                    onDisplayChanged: (0, i.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, i.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, i.E)('children.onAdded'),
                        onLoaded: (0, i.E)('children.onLoaded'),
                        onRemoved: (0, i.E)('children.onRemoved'),
                        onAttached: (0, i.E)('children.onAttached'),
                        onTextureReady: (0, i.E)('children.onTextureReady'),
                        onRequestPosition: (0, i.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, r) => {
                'use strict';
                (r.r(t),
                    r.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => i,
                        displayStatus: () => n.W,
                        displayStatusIs: () => O,
                        events: () => a.U,
                        extraSize: () => T,
                        forceTriggerMouseMove: () => S,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => M,
                        getScale: () => E,
                        getSize: () => m,
                        getViewGlobalPosition: () => h,
                        isClientAccessible: () => L,
                        isEventHandled: () => x,
                        isFocused: () => f,
                        pxToRem: () => w,
                        remToPx: () => v,
                        resize: () => _,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => y,
                    }));
                var i = r(3722),
                    n = r(6112),
                    a = r(6538),
                    o = r(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function d(e, t, r, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, i);
                }
                function c(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function h(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: v(t.x), y: v(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function E() {
                    return viewEnv.getScale();
                }
                function w(e) {
                    return viewEnv.pxToRem(e);
                }
                function v(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function L() {
                    return viewEnv.isClientAccessible();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function x() {
                    return viewEnv.isEventHandled();
                }
                function S() {
                    viewEnv.forceTriggerMouseMove();
                }
                function M() {
                    return viewEnv.getShowingStatus();
                }
                const O = Object.keys(n.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === n.W[t]), e),
                        {},
                    ),
                    T = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, r) => {
                'use strict';
                r.d(t, { qP: () => a });
                const i = ['args'],
                    n = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        i,
                                        n = {},
                                        a = Object.keys(e);
                                    for (i = 0; i < a.length; i++) ((r = a[i]), t.indexOf(r) >= 0 || (n[r] = e[r]));
                                    return n;
                                })(t, i);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, o, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const r = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: r, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: r, name: e, bool: t };
                                                      default:
                                                          return { __Type: r, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var n;
                    },
                    a = {
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
            5521: (e, t, r) => {
                'use strict';
                let i, n;
                (r.d(t, { n: () => i }),
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
                    })(i || (i = {})),
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
            1358: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => a });
                var i = r(3138);
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
                    addCallback(e, t, r = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = i.O.view.addModelObserver(e, r, n);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  r > 0 && (this._views[r] ? this._views[r].push(a) : (this._views[r] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
                        );
                    }
                    removeCallback(e, t = 0) {
                        let r = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((r = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            r || console.error("Can't remove callback by id:", e),
                            r
                        );
                    }
                    _emmitDataChanged(e, t, r) {
                        r.forEach((r) => {
                            const i = this._callbacks[r];
                            void 0 !== i && i(e, t);
                        });
                    }
                }
                n.__instance = void 0;
                const a = n;
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
            4179: (e, t, r) => {
                'use strict';
                r.d(t, { B0: () => l, ry: () => b });
                class i {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: r }) => {
                                    let i = e.target;
                                    do {
                                        if (i === t) return;
                                        i = i.parentNode;
                                    } while (i);
                                    r();
                                });
                            }));
                    }
                    static get instance() {
                        return (i.__instance || (i.__instance = new i()), i.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const r = e,
                            i = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== r || t !== i)),
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
                i.__instance = void 0;
                const n = i;
                var a = r(1358);
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
                        getTimeFormat: (e, t, r) => userLocale.getTimeFormat(e, t, void 0 === r || r),
                        getTimeString: (e, t, r) => userLocale.getTimeString(e, t, void 0 === r || r),
                    };
                let l;
                var d;
                (((d = l || (l = {}))[(d.UNDEFINED = 0)] = 'UNDEFINED'),
                    (d[(d.TOOLTIP = 1)] = 'TOOLTIP'),
                    (d[(d.POP_OVER = 2)] = 'POP_OVER'),
                    (d[(d.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (d[(d.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (d[(d.MOVE = 16)] = 'MOVE'),
                    (d[(d.CLOSE = 32)] = 'CLOSE'),
                    (d[(d.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    u = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var h = r(5521),
                    g = r(3138);
                const E = ['args'];
                function w(e, t, r, i, n, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value;
                    } catch (e) {
                        return void r(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(i, n);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
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
                                        r = arguments;
                                    return new Promise(function (i, n) {
                                        var a = e.apply(t, r);
                                        function o(e) {
                                            w(a, i, n, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            w(a, i, n, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    f = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        i,
                                        n = {},
                                        a = Object.keys(e);
                                    for (i = 0; i < a.length; i++) ((r = a[i]), t.indexOf(r) >= 0 || (n[r] = e[r]));
                                    return n;
                                })(t, E);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, a, {
                                          arguments:
                                              ((i = n),
                                              Object.entries(i).map(([e, t]) => {
                                                  const r = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          r.number = t;
                                                          break;
                                                      case 'boolean':
                                                          r.bool = t;
                                                          break;
                                                      default:
                                                          r.string = t.toString();
                                                  }
                                                  return r;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: r, type: e });
                        var i;
                    },
                    L = () => f(l.CLOSE),
                    p = (e, t) => {
                        e.keyCode === h.n.ESCAPE && t();
                    };
                var x = r(7572);
                const S = n.instance,
                    M = {
                        DataTracker: a.Z,
                        ViewModel: x.Z,
                        ViewEventType: l,
                        NumberFormatType: c,
                        RealFormatType: u,
                        TimeFormatType: m,
                        DateFormatType: _,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => f(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: L,
                        sendClosePopOverEvent: () => f(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, r = 0) => {
                            f(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: r, args: t });
                        },
                        sendShowPopOverEvent: (e, t, r, i, n = R.invalid('resId'), a) => {
                            const o = g.O.view.getViewGlobalPosition(),
                                s = r.getBoundingClientRect(),
                                d = s.x,
                                c = s.y,
                                u = s.width,
                                m = s.height,
                                _ = {
                                    x: g.O.view.pxToRem(d) + o.x,
                                    y: g.O.view.pxToRem(c) + o.y,
                                    width: g.O.view.pxToRem(u),
                                    height: g.O.view.pxToRem(m),
                                };
                            f(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: i || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: v(_),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => p(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, L);
                        },
                        handleViewEvent: f,
                        onBindingsReady: b,
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
                            const r = {};
                            if ('object' != typeof t) return t;
                            for (const i in t)
                                if (Object.prototype.hasOwnProperty.call(t, i)) {
                                    const n = Object.prototype.toString.call(t[i]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[i];
                                        r[i] = [];
                                        for (let t = 0; t < n.length; t++) r[i].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (r[i] = e(t[i]))
                                            : (r[i] = t[i]);
                                }
                            return r;
                        },
                        ClickOutsideManager: S,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = M;
            },
            1366: (e, t, r) => {
                'use strict';
                var i = r(6179),
                    n = r.n(i);
                const a = (e, t, r) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && r.extraLarge) ||
                          (t.largeHeight && r.large) ||
                          (t.mediumHeight && r.medium) ||
                          (t.smallHeight && r.small) ||
                          (t.extraSmallHeight && r.extraSmall)
                            ? e
                            : null
                        : e;
                var o = r(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function d(e, t, r) {
                    const i = (function (e, t) {
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
                        })(e, r),
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
                        })(t, r),
                        a = Math.min(i, n);
                    return {
                        extraLarge: a === r.extraLarge.weight,
                        large: a === r.large.weight,
                        medium: a === r.medium.weight,
                        small: a === r.small.weight,
                        extraSmall: a === r.extraSmall.weight,
                        extraLargeWidth: i === r.extraLarge.weight,
                        largeWidth: i === r.large.weight,
                        mediumWidth: i === r.medium.weight,
                        smallWidth: i === r.small.weight,
                        extraSmallWidth: i === r.extraSmall.weight,
                        extraLargeHeight: n === r.extraLarge.weight,
                        largeHeight: n === r.large.weight,
                        mediumHeight: n === r.medium.weight,
                        smallHeight: n === r.small.weight,
                        extraSmallHeight: n === r.extraSmall.weight,
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
                })(l || (l = {}));
                const c = o.O.client.getSize('rem'),
                    u = c.width,
                    m = c.height,
                    _ = Object.assign({ width: u, height: m }, d(u, m, s)),
                    h = (0, i.createContext)(_),
                    g = ['children'],
                    E = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    i,
                                    n = {},
                                    a = Object.keys(e);
                                for (i = 0; i < a.length; i++) ((r = a[i]), t.indexOf(r) >= 0 || (n[r] = e[r]));
                                return n;
                            })(e, g);
                        const n = (0, i.useContext)(h),
                            o = n.extraLarge,
                            s = n.large,
                            l = n.medium,
                            d = n.small,
                            c = n.extraSmall,
                            u = n.extraLargeWidth,
                            m = n.largeWidth,
                            _ = n.mediumWidth,
                            E = n.smallWidth,
                            w = n.extraSmallWidth,
                            v = n.extraLargeHeight,
                            b = n.largeHeight,
                            f = n.mediumHeight,
                            L = n.smallHeight,
                            p = n.extraSmallHeight,
                            x = { extraLarge: v, large: b, medium: f, small: L, extraSmall: p };
                        if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                            if (r.extraLarge && o) return t;
                            if (r.large && s) return t;
                            if (r.medium && l) return t;
                            if (r.small && d) return t;
                            if (r.extraSmall && c) return t;
                        } else {
                            if (r.extraLargeWidth && u) return a(t, r, x);
                            if (r.largeWidth && m) return a(t, r, x);
                            if (r.mediumWidth && _) return a(t, r, x);
                            if (r.smallWidth && E) return a(t, r, x);
                            if (r.extraSmallWidth && w) return a(t, r, x);
                            if (!(
                                r.extraLargeWidth ||
                                r.largeWidth ||
                                r.mediumWidth ||
                                r.smallWidth ||
                                r.extraSmallWidth
                            )) {
                                if (r.extraLargeHeight && v) return t;
                                if (r.largeHeight && b) return t;
                                if (r.mediumHeight && f) return t;
                                if (r.smallHeight && L) return t;
                                if (r.extraSmallHeight && p) return t;
                            }
                        }
                        return null;
                    };
                ((E.defaultProps = {
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
                    (0, i.memo)(E));
                const w = (0, i.memo)(({ children: e }) => {
                    const t = (0, i.useContext)(h),
                        r = (0, i.useState)(t),
                        a = r[0],
                        l = r[1],
                        c = (0, i.useCallback)((e, t) => {
                            const r = o.O.view.pxToRem(e),
                                i = o.O.view.pxToRem(t);
                            l(Object.assign({ width: r, height: i }, d(r, i, s)));
                        }, []);
                    (((e) => {
                        const t = (0, i.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        engine.on('clientResized', c);
                    }),
                        (0, i.useEffect)(() => () => engine.off('clientResized', c), [c]));
                    const u = (0, i.useMemo)(() => Object.assign({}, a), [a]);
                    return n().createElement(h.Provider, { value: u }, e);
                });
                var v = r(6483),
                    b = r.n(v),
                    f = r(926),
                    L = r.n(f);
                let p, x, S;
                (!(function (e) {
                    ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                })(p || (p = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                    })(x || (x = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge'));
                    })(S || (S = {})));
                const M = () => {
                        const e = (0, i.useContext)(h),
                            t = e.width,
                            r = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return p.ExtraLarge;
                                    case e.large:
                                        return p.Large;
                                    case e.medium:
                                        return p.Medium;
                                    case e.small:
                                        return p.Small;
                                    case e.extraSmall:
                                        return p.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), p.ExtraSmall);
                                }
                            })(e),
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return x.ExtraLarge;
                                    case e.largeWidth:
                                        return x.Large;
                                    case e.mediumWidth:
                                        return x.Medium;
                                    case e.smallWidth:
                                        return x.Small;
                                    case e.extraSmallWidth:
                                        return x.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), x.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return S.ExtraLarge;
                                    case e.largeHeight:
                                        return S.Large;
                                    case e.mediumHeight:
                                        return S.Medium;
                                    case e.smallHeight:
                                        return S.Small;
                                    case e.extraSmallHeight:
                                        return S.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), S.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: o, remScreenWidth: t, remScreenHeight: r };
                    },
                    O = ['children', 'className'];
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const y = {
                        [x.ExtraSmall]: '',
                        [x.Small]: L().SMALL_WIDTH,
                        [x.Medium]: `${L().SMALL_WIDTH} ${L().MEDIUM_WIDTH}`,
                        [x.Large]: `${L().SMALL_WIDTH} ${L().MEDIUM_WIDTH} ${L().LARGE_WIDTH}`,
                        [x.ExtraLarge]: `${L().SMALL_WIDTH} ${L().MEDIUM_WIDTH} ${L().LARGE_WIDTH} ${L().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [S.ExtraSmall]: '',
                        [S.Small]: L().SMALL_HEIGHT,
                        [S.Medium]: `${L().SMALL_HEIGHT} ${L().MEDIUM_HEIGHT}`,
                        [S.Large]: `${L().SMALL_HEIGHT} ${L().MEDIUM_HEIGHT} ${L().LARGE_HEIGHT}`,
                        [S.ExtraLarge]: `${L().SMALL_HEIGHT} ${L().MEDIUM_HEIGHT} ${L().LARGE_HEIGHT} ${L().EXTRA_LARGE_HEIGHT}`,
                    },
                    A = {
                        [p.ExtraSmall]: '',
                        [p.Small]: L().SMALL,
                        [p.Medium]: `${L().SMALL} ${L().MEDIUM}`,
                        [p.Large]: `${L().SMALL} ${L().MEDIUM} ${L().LARGE}`,
                        [p.ExtraLarge]: `${L().SMALL} ${L().MEDIUM} ${L().LARGE} ${L().EXTRA_LARGE}`,
                    },
                    k = (e) => {
                        let t = e.children,
                            r = e.className,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    i,
                                    n = {},
                                    a = Object.keys(e);
                                for (i = 0; i < a.length; i++) ((r = a[i]), t.indexOf(r) >= 0 || (n[r] = e[r]));
                                return n;
                            })(e, O);
                        const a = M(),
                            o = a.mediaWidth,
                            s = a.mediaHeight,
                            l = a.mediaSize;
                        return n().createElement('div', T({ className: b()(r, y[o], P[s], A[l]) }, i), t);
                    },
                    H = ['children'],
                    D = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    i,
                                    n = {},
                                    a = Object.keys(e);
                                for (i = 0; i < a.length; i++) ((r = a[i]), t.indexOf(r) >= 0 || (n[r] = e[r]));
                                return n;
                            })(e, H);
                        return n().createElement(w, null, n().createElement(k, r, t));
                    };
                var I = r(493),
                    C = r.n(I),
                    W = r(4179);
                const N = [
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
                function U(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const r = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                r.number = t;
                                break;
                            case 'boolean':
                                r.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                r.string = t.toString();
                        }
                        return r;
                    });
                }
                const F = (e, t, r = {}, i = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: W.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: i,
                                },
                                r,
                            ),
                        );
                    },
                    G = (e) => {
                        let t = e.children,
                            r = e.contentId,
                            n = e.args,
                            a = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            d = e.ignoreShowDelay,
                            c = void 0 !== d && d,
                            u = e.ignoreMouseClick,
                            m = void 0 !== u && u,
                            _ = e.decoratorId,
                            h = void 0 === _ ? 0 : _,
                            g = e.isEnabled,
                            E = void 0 === g || g,
                            w = e.targetId,
                            v = void 0 === w ? 0 : w,
                            b = e.onShow,
                            f = e.onHide,
                            L = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    i,
                                    n = {},
                                    a = Object.keys(e);
                                for (i = 0; i < a.length; i++) ((r = a[i]), t.indexOf(r) >= 0 || (n[r] = e[r]));
                                return n;
                            })(e, N);
                        const p = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            x = (0, i.useMemo)(
                                () =>
                                    v ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let r,
                                            i = R.invalid('resId');
                                        return (
                                            t &&
                                                ((r = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== r &&
                                                    window.subViews[r] &&
                                                    (i = window.subViews[r].id)),
                                            { caller: r, stack: t, resId: i }
                                        );
                                    })().resId,
                                [v],
                            ),
                            S = (0, i.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (F(r, h, { isMouseEvent: !0, on: !0, arguments: U(n) }, x),
                                    b && b(),
                                    (p.current.isVisible = !0));
                            }, [r, h, n, x, b]),
                            M = (0, i.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        F(r, h, { on: !1 }, x),
                                        p.current.isVisible && f && f(),
                                        (p.current.isVisible = !1));
                                }
                            }, [r, h, x, f]),
                            O = (0, i.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(p.current.prevTarget) && M();
                                    }, 200)));
                            }, []);
                        return (
                            (0, i.useEffect)(() => {
                                const e = p.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', O, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', O, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, i.useEffect)(() => {
                                !1 === E && M();
                            }, [E, M]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', M),
                                    () => {
                                        (window.removeEventListener('mouseleave', M), M());
                                    }
                                ),
                                [M],
                            ),
                            E
                                ? (0, i.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((T = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((p.current.timeoutId = window.setTimeout(S, c ? 100 : 400)),
                                                          a && a(e),
                                                          T && T(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (M(), null == o || o(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === m && M(), null == l || l(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === m && M(), null == s || s(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          L,
                                      ),
                                  )
                                : t
                        );
                        var T;
                    };
                let V;
                !(function (e) {
                    ((e.InProgress = 'inProgress'), (e.Completed = 'completed'));
                })(V || (V = {}));
                var j = r(3403);
                const B = ({ iconPath: e, iconName: t, iconPostfix: r = '' }) => ({
                    backgroundImage: t ? `url('${e}.${t}${r}')` : '',
                });
                function z() {
                    return !1;
                }
                console.log;
                var K = r(9174);
                function $(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
                    return i;
                }
                const q = (e) => (0 === e ? window : window.subViews.get(e)),
                    Y = ((e, t) => {
                        const r = (0, i.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: s, mocks: l }) {
                                const d = (0, i.useRef)([]),
                                    c = (e, r, i) => {
                                        var n;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = q,
                                                context: i = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function a(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, r) => {
                                                        r.forEach((t) => {
                                                            const r = n.get(t);
                                                            void 0 !== r && r(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const n = r(t),
                                                        a = i.split('.').reduce((e, t) => e[t], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (r, a) => {
                                                        const l = 'string' == typeof a ? `${i}.${a}` : i,
                                                            d = o.O.view.addModelObserver(l, t, !0);
                                                        return (n.set(d, r), e && r(s(a)), d);
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const r = s(t);
                                                        return (...t) => {
                                                            r(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = s(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                r = (function (e, t) {
                                                                    var r =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (r) return (r = r.call(e)).next.bind(r);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (r = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return $(e, t);
                                                                                var r = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === r &&
                                                                                        e.constructor &&
                                                                                        (r = e.constructor.name),
                                                                                    'Map' === r || 'Set' === r
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === r ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                r,
                                                                                            )
                                                                                          ? $(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        r && (e = r);
                                                                        var i = 0;
                                                                        return function () {
                                                                            return i >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[i++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(n.keys());
                                                            !(e = r()).done;
                                                        )
                                                            a(e.value, t);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(r),
                                            s =
                                                'real' === e
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (n = null == i ? void 0 : i.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            l = (t) =>
                                                'mocks' === e ? (null == i ? void 0 : i.getter(t)) : s.readByPath(t),
                                            c = (e) => d.current.push(e),
                                            u = (({ observableModel: e }) => ({ root: e.object() }))({
                                                mode: e,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (t, r) => {
                                                        const i = null != r ? r : l(t),
                                                            n = K.LO.box(i, { equals: z });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, K.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (t, r) => {
                                                        const i = null != r ? r : l(t),
                                                            n = K.LO.box(i, { equals: z });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, K.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (t, r) => {
                                                        const i = l(r);
                                                        if (Array.isArray(t)) {
                                                            const n = t.reduce(
                                                                (e, t) => ((e[t] = K.LO.box(i[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, K.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                n[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = t,
                                                                a = Object.entries(n),
                                                                o = a.reduce(
                                                                    (e, [t, r]) => ((e[r] = K.LO.box(i[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, K.aD)((e) => {
                                                                            a.forEach(([t, r]) => {
                                                                                o[r].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            m = { mode: e, model: u, externalModel: s, cleanup: c };
                                        return {
                                            model: u,
                                            controls: 'mocks' === e && i ? i.controls(m) : t(m),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    u = (0, i.useRef)(!1),
                                    m = (0, i.useState)(e),
                                    _ = m[0],
                                    h = m[1],
                                    g = (0, i.useState)(() => c(e, a, l)),
                                    E = g[0],
                                    w = g[1];
                                return (
                                    (0, i.useEffect)(() => {
                                        u.current ? w(c(_, a, l)) : (u.current = !0);
                                    }, [l, _, a]),
                                    (0, i.useEffect)(() => {
                                        h(e);
                                    }, [e]),
                                    (0, i.useEffect)(
                                        () => () => {
                                            (E.externalModel.dispose(), d.current.forEach((e) => e()));
                                        },
                                        [E],
                                    ),
                                    n().createElement(r.Provider, { value: E }, s)
                                );
                            },
                            () => (0, i.useContext)(r),
                        ];
                    })(0, function () {}),
                    X = Y[0],
                    Z = Y[1],
                    Q = 'Label_text_52',
                    J = 'Label_textGlow_4e',
                    ee = ({ level: e, inProgress: t }) =>
                        n().createElement(
                            'div',
                            { className: b()('Label_base_b1', t && 'Label_base__inProgress_ba') },
                            n().createElement('div', { className: b()(Q, J) }, e),
                            n().createElement('div', { className: b()(Q, J, 'Label_textGlow__inner_7b') }, e),
                            n().createElement(
                                'div',
                                { className: 'Label_textWithBlend_07' },
                                n().createElement('div', { className: Q }, e),
                                n().createElement('div', { className: 'Label_textMask_f7' }),
                            ),
                        );
                var te;
                !(function (e) {
                    ((e.InProgress = 'in_progress'), (e.Completed = 'completed'), (e.Curfew = 'curfew'));
                })(te || (te = {}));
                const re = (0, j.Pi)(() => {
                        const e = Z().model.root.get(),
                            t = e.battleStatus,
                            r = e.currentProgression,
                            i = e.isAlertMode,
                            a = e.iconPostfix,
                            s = M().mediaSize,
                            l = s >= p.Small ? 150 : 130,
                            d = t === V.InProgress ? te.InProgress : te.Completed,
                            c = i ? te.Curfew : d;
                        return (
                            n().useEffect(() => {
                                s >= p.Small
                                    ? (o.O.view.setSidePaddingsRem({ left: 40, right: 40, top: 0, bottom: 17 }),
                                      o.O.view.resize(152, 152, 'rem'))
                                    : (o.O.view.setSidePaddingsRem({ left: 30, right: 30, top: 0, bottom: 12 }),
                                      o.O.view.resize(132, 132, 'rem'));
                            }, [s]),
                            n().createElement(
                                'div',
                                { className: 'Widget_base_55' },
                                n().createElement(
                                    'div',
                                    {
                                        className: 'Widget_icon_de',
                                        style: B({
                                            iconPath: 'R.images.battle_royale.gui.maps.widget',
                                            iconName: `${c}.main_icon_${l}`,
                                            iconPostfix: a,
                                        }),
                                    },
                                    t === V.InProgress &&
                                        n().createElement(
                                            'div',
                                            { className: b()('Widget_label_be', 'Widget_label__inProgress_c4') },
                                            n().createElement(ee, { level: r, inProgress: !i }),
                                        ),
                                ),
                            )
                        );
                    }),
                    ie = () =>
                        n().createElement(
                            G,
                            { contentId: R.views.battle_royale.lobby.tooltips.WidgetTooltipView('resId') },
                            n().createElement('div', { className: 'App_base_06' }, n().createElement(re, null)),
                        );
                engine.whenReady.then(() => {
                    C().render(
                        n().createElement(D, null, n().createElement(X, null, n().createElement(ie, null))),
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
        var r = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](r, r.exports, __webpack_require__), r.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, r, i) => {
            if (!t) {
                var n = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, r, i] = deferred[l], a = !0, o = 0; o < t.length; o++)
                        (!1 & i || n >= i) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((a = !1), i < n && (n = i));
                    if (a) {
                        deferred.splice(l--, 1);
                        var s = r();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            i = i || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > i; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, r, i];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var r in t)
                __webpack_require__.o(t, r) &&
                    !__webpack_require__.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
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
        (__webpack_require__.j = 22),
        (() => {
            var e = { 22: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var i,
                        n,
                        [a, o, s] = r,
                        l = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (i in o) __webpack_require__.o(o, i) && (__webpack_require__.m[i] = o[i]);
                        if (s) var d = s(__webpack_require__);
                    }
                    for (t && t(r); l < a.length; l++)
                        ((n = a[l]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(d);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(1366));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
