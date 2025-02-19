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
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => i, on: () => s, onResize: () => r, onScaleUpdated: () => o });
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    i = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, a.R)(!0);
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
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${u}`,
                                        o = l[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        n(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(r, s),
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
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
                        },
                        enableOutside() {
                            e.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => r,
                        graphicsQuality: () => s,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = t(527),
                    a = t(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
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
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2493: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function a(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => a, G: () => n });
            },
            2472: (e, u, t) => {
                'use strict';
                function n(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => n });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var n = t(5959),
                    a = t(514);
                const r = { view: t(7641), client: n, sound: a.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => o });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    o = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => a });
                var n = t(2472);
                const a = {
                    onTextureFrozen: (0, n.E)('self.onTextureFrozen'),
                    onTextureReady: (0, n.E)('self.onTextureReady'),
                    onDomBuilt: (0, n.E)('self.onDomBuilt'),
                    onLoaded: (0, n.E)('self.onLoaded'),
                    onDisplayChanged: (0, n.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, n.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, n.E)('children.onAdded'),
                        onLoaded: (0, n.E)('children.onLoaded'),
                        onRemoved: (0, n.E)('children.onRemoved'),
                        onAttached: (0, n.E)('children.onAttached'),
                        onTextureReady: (0, n.E)('children.onTextureReady'),
                        onRequestPosition: (0, n.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => x,
                        events: () => r.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => w,
                        getFontNames: () => v,
                        getScale: () => F,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => f,
                        isFocused: () => D,
                        pxToRem: () => h,
                        remToPx: () => p,
                        resize: () => E,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => y,
                    });
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    o = t(8566);
                const s = 15;
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function _(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function g(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: p(u.x), y: p(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function D() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function B() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const v = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    x = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    k = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    o = 32,
                    s = 64,
                    i = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? a : o);
                        },
                        minimize() {
                            i(s);
                        },
                        move(e) {
                            i(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let n, a;
                t.d(u, { n: () => n }),
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9');
                    })(n || (n = {})),
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
                    })(a || (a = {}));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(3138);
                class a {
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
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
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
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9916);
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
            9916: (e, u, t) => {
                'use strict';
                t.d(u, { Sw: () => r.Z, B3: () => i, Z5: () => o.Z5, B0: () => s, ry: () => F, Eu: () => h });
                class n {
                    constructor() {
                        (this.entries = []),
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
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                n.__instance = void 0;
                const a = n;
                var r = t(1358);
                var o = t(8613);
                let s;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(s || (s = {}));
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    m = t(3138);
                const E = ['args'];
                function g(e, u, t, n, a, r, o) {
                    try {
                        var s = e[r](o),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(n, a);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    F = (function () {
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
                                        function o(e) {
                                            g(r, n, a, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            g(r, n, a, o, s, 'throw', e);
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
                    p = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, E);
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
                    b = () => p(s.CLOSE),
                    D = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var C = t(7572);
                const f = a.instance,
                    B = {
                        DataTracker: r.Z,
                        ViewModel: C.Z,
                        ViewEventType: s,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => p(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => p(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                _ = i.width,
                                d = i.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + o.x,
                                    y: m.O.view.pxToRem(c) + o.y,
                                    width: m.O.view.pxToRem(_),
                                    height: m.O.view.pxToRem(d),
                                };
                            p(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: A(E),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => D(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            D(e, b);
                        },
                        handleViewEvent: p,
                        onBindingsReady: F,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
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
                        ClickOutsideManager: f,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = B;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            8159: (e, u, t) => {
                'use strict';
                var n = t(7363),
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
                var o = t(3138);
                const s = {
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
                })(i || (i = {}));
                const c = o.O.client.getSize('rem'),
                    _ = c.width,
                    d = c.height,
                    m = Object.assign({ width: _, height: d }, l(_, d, s)),
                    E = (0, n.createContext)(m),
                    g = ['children'];
                const A = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, g);
                    const a = (0, n.useContext)(E),
                        o = a.extraLarge,
                        s = a.large,
                        i = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        _ = a.extraLargeWidth,
                        d = a.largeWidth,
                        m = a.mediumWidth,
                        A = a.smallWidth,
                        F = a.extraSmallWidth,
                        h = a.extraLargeHeight,
                        p = a.largeHeight,
                        b = a.mediumHeight,
                        D = a.smallHeight,
                        C = a.extraSmallHeight,
                        f = { extraLarge: h, large: p, medium: b, small: D, extraSmall: C };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && s) return u;
                        if (t.medium && i) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && _) return r(u, t, f);
                        if (t.largeWidth && d) return r(u, t, f);
                        if (t.mediumWidth && m) return r(u, t, f);
                        if (t.smallWidth && A) return r(u, t, f);
                        if (t.extraSmallWidth && F) return r(u, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && h) return u;
                            if (t.largeHeight && p) return u;
                            if (t.mediumHeight && b) return u;
                            if (t.smallHeight && D) return u;
                            if (t.extraSmallHeight && C) return u;
                        }
                    }
                    return null;
                };
                A.defaultProps = {
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
                (0, n.memo)(A);
                const F = (e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    h = ({ children: e }) => {
                        const u = (0, n.useContext)(E),
                            t = (0, n.useState)(u),
                            r = t[0],
                            i = t[1],
                            c = (0, n.useCallback)((e, u) => {
                                const t = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(u);
                                i(Object.assign({ width: t, height: n }, l(t, n, s)));
                            }, []),
                            _ = (0, n.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                c(e.width, e.height);
                            }, [c]);
                        F(() => {
                            o.O.client.events.on('clientResized', c), o.O.client.events.on('self.onScaleUpdated', _);
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', c),
                                        o.O.client.events.off('self.onScaleUpdated', _);
                                },
                                [c, _],
                            );
                        const d = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                        return a().createElement(E.Provider, { value: d }, e);
                    };
                var p = t(6483),
                    b = t.n(p),
                    D = t(926),
                    C = t.n(D);
                let f, B, w;
                !(function (e) {
                    (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(f || (f = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(B || (B = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(w || (w = {}));
                const v = () => {
                        const e = (0, n.useContext)(E),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return f.ExtraLarge;
                                    case e.large:
                                        return f.Large;
                                    case e.medium:
                                        return f.Medium;
                                    case e.small:
                                        return f.Small;
                                    case e.extraSmall:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return B.ExtraLarge;
                                    case e.largeWidth:
                                        return B.Large;
                                    case e.mediumWidth:
                                        return B.Medium;
                                    case e.smallWidth:
                                        return B.Small;
                                    case e.extraSmallWidth:
                                        return B.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), B.ExtraSmall;
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
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    x = ['children', 'className'];
                function k() {
                    return (
                        (k = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        k.apply(null, arguments)
                    );
                }
                const y = {
                        [B.ExtraSmall]: '',
                        [B.Small]: C().SMALL_WIDTH,
                        [B.Medium]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH}`,
                        [B.Large]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH}`,
                        [B.ExtraLarge]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH} ${C().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [w.ExtraSmall]: '',
                        [w.Small]: C().SMALL_HEIGHT,
                        [w.Medium]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT}`,
                        [w.Large]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT} ${C().EXTRA_LARGE_HEIGHT}`,
                    },
                    S = {
                        [f.ExtraSmall]: '',
                        [f.Small]: C().SMALL,
                        [f.Medium]: `${C().SMALL} ${C().MEDIUM}`,
                        [f.Large]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE}`,
                        [f.ExtraLarge]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE} ${C().EXTRA_LARGE}`,
                    },
                    L = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, x);
                        const r = v(),
                            o = r.mediaWidth,
                            s = r.mediaHeight,
                            i = r.mediaSize;
                        return a().createElement('div', k({ className: b()(t, y[o], T[s], S[i]) }, n), u);
                    },
                    O = ['children'];
                const I = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, O);
                    return a().createElement(h, null, a().createElement(L, t, u));
                };
                var M = t(1533),
                    N = t.n(M);
                t(1281);
                let P;
                function H(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(P || (P = {}));
                const W = (e) => e.replace(/&nbsp;/g, ' '),
                    j =
                        ((() => {
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
                        })(),
                        (e) => {
                            return (
                                (u = R.strings.common.percentValue()),
                                (t = { value: e }),
                                u.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]))
                            );
                            var u, t;
                        });
                var $ = t(9916),
                    V = t(8613);
                Date.now(), V.Ew.getRegionalDateTime, V.Ew.getFormattedDateTime;
                const U = (e = 1) => {
                        const u = new Error().stack;
                        let t,
                            n = R.invalid('resId'),
                            a = '';
                        var r;
                        u &&
                            ((a = (null == (r = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                            (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (n = window.subViews[t].id));
                        return { callerUrl: a, caller: t, stack: u, resId: n };
                    },
                    G = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    z = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    q = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    K = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = G(`${e}.${t}`, window);
                                return z(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    Z = (e) => {
                        const u = ((e) => {
                                const u = U(),
                                    t = u.caller,
                                    n = u.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: q(a, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const a = G(q(t, `${u}.${n}`), window);
                                    return z(a) ? (e.push(a.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    };
                const Y = () => (window.injected || (window.injected = new Map()), window.injected);
                const X = $.Sw.instance;
                let J;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(J || (J = {}));
                const Q = (e = 'model', u = J.Deep) => {
                    const t = (0, n.useState)(0),
                        a = (t[0], t[1]),
                        r = (0, n.useMemo)(() => U(), []),
                        o = r.callerUrl,
                        s = r.caller,
                        i = r.resId,
                        l = (0, n.useMemo)(() => {
                            const u = (function (e) {
                                return Y().has(e);
                            })(o.replace('.js', '.html'));
                            return window.__feature && window.__feature !== s && !u ? `subViews.${s}.${e}` : e;
                        }, [o, s, e]),
                        c = (0, n.useState)(() =>
                            ((e) => {
                                const u = G(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return z(u) ? u.value : u;
                            })(K(l)),
                        ),
                        _ = c[0],
                        d = c[1],
                        m = (0, n.useRef)(-1);
                    return (
                        F(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? J.Deep : J.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== J.None)
                            ) {
                                const t = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        u === J.Deep
                                            ? (e === _ && a((e) => e + 1), d(e))
                                            : d(Object.assign([], e));
                                    },
                                    n = Z(e);
                                m.current = X.addCallback(n, t, i, u === J.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (u !== J.None)
                                return () => {
                                    X.removeCallback(m.current, i);
                                };
                        }, [i, u]),
                        _
                    );
                };
                $.Sw.instance;
                var ee = t(5521);
                const ue = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function te(e = ee.n.NONE, u = ue, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== ee.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t, a]);
                }
                const ne = /<link.*?>/g,
                    ae = /\.\.\//g,
                    re = /<script.*?>/g,
                    oe = 'default.css',
                    se = (e) => {
                        const u = e.match(ae);
                        return u && u.join('');
                    },
                    ie = () => {
                        for (
                            var e = 0, u = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < u.length;
                            e++
                        ) {
                            const t = u[e];
                            if (!t.href.includes(oe)) return t.href;
                        }
                        return '';
                    },
                    le = (e) => {
                        const u = ie(),
                            t = se(u);
                        let n,
                            a = e;
                        for (; null !== (n = re.exec(e)); ) {
                            const e = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const u = t + e[2].replace(ae, '');
                                a = a.replace(e[2], u);
                            }
                        }
                        return a;
                    },
                    ce = () => {
                        const e = [];
                        let u = !1;
                        const t = () => {
                            if (!e.length) return void (u = !1);
                            const n = e.shift();
                            n && ((u = !0), n().then(() => t()));
                        };
                        return {
                            add: (n) => {
                                e.push(n), u || t();
                            },
                        };
                    },
                    _e = 'SubView_base_df',
                    de = 'subViews.onChanged',
                    me = 'subView:inject->',
                    Ee = ce(),
                    ge = (0, n.memo)(({ id: e, fallback: u, onLoadCallback: t, mixClass: r }) => {
                        const o = (0, n.useState)(''),
                            s = o[0],
                            i = o[1],
                            l = (0, n.useMemo)(() => ({ __html: le(s) }), [s]),
                            c = (0, n.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            _ = (0, n.useState)(!1),
                            d = _[0],
                            m = _[1],
                            E = (0, n.useCallback)(
                                (e) => {
                                    e.includes(c) &&
                                        (m(!0), engine.off(de, E), window.subViews.removeChildChangedCallback(c));
                                },
                                [c],
                            ),
                            g = (0, n.useCallback)((e) => {
                                Ee.add(
                                    () =>
                                        new Promise((u) => {
                                            i(e);
                                            const t = new MutationObserver(() => {
                                                    t.disconnect(), u();
                                                }),
                                                n = document.getElementById('root');
                                            n && t.observe(n, { childList: !0 });
                                        }),
                                );
                            }, []);
                        (0, n.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const u = window.subViews.get(e),
                                    t = u.path;
                                let n;
                                if ((n = t.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, u)),
                                        engine.on(`${me}${n}`, g),
                                        (({ path: e, name: u }) => {
                                            const t = new XMLHttpRequest();
                                            (t.onreadystatechange = () => {
                                                4 === t.readyState &&
                                                    (200 === t.status
                                                        ? (0, $.Eu)().then(() => {
                                                              console.info(`Sub view ${u} loaded: ${e}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${u}`,
                                                                      t.responseText,
                                                                  );
                                                          })
                                                        : console.error(
                                                              `subView: status: ${t.status} - can't get bundle`,
                                                          ));
                                            }),
                                                t.open('GET', e),
                                                t.send();
                                        })({ name: n, path: t }),
                                        () => {
                                            n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                engine.off(`${me}${n}`, g),
                                                console.info(`Sub view ${n} is destroyed: ${t}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(de, E);
                        }, [E, g, e, d]),
                            (0, n.useEffect)(
                                () => () => {
                                    s &&
                                        ((e) => {
                                            const u = se(ie());
                                            let t;
                                            for (; null !== (t = ne.exec(e)); ) {
                                                const e = t[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const t = u + e[1].replace(ae, ''),
                                                        n = document.head.querySelector(`[href="${t}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(s);
                                },
                                [s],
                            );
                        const A = b()(_e, r);
                        if (s) {
                            let u;
                            return (
                                (u = document.getElementById('root')) && u.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let u;
                                    const t = ie(),
                                        n = se(t);
                                    for (; null !== (u = ne.exec(e)); ) {
                                        const e = u[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(oe) && n) {
                                            const u = n + e[1].replace(ae, ''),
                                                t = document.createElement('link');
                                            (t.href = u), (t.rel = 'stylesheet'), document.head.appendChild(t);
                                        }
                                    }
                                })(s),
                                t && t(e),
                                a().createElement('div', { className: A, dangerouslySetInnerHTML: l })
                            );
                        }
                        return u ? a().createElement('div', { className: A }, a().createElement(u, null)) : null;
                    }),
                    Ae = 'subViews.onChanged',
                    Fe = '.html',
                    he = /^coui:\/\/gui\/.*/,
                    pe = ce(),
                    be = (e) => {
                        const u = document.createElement('script');
                        (u.src = e), (u.defer = !0), document.head.appendChild(u);
                    };
                (0, n.memo)(({ id: e, bundleLevelPath: u = 3, mixClass: t, children: r }) => {
                    const o = (0, n.useRef)(null),
                        s = (0, n.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                        i = (0, n.useState)(!1),
                        l = i[0],
                        c = i[1],
                        _ = (0, n.useState)(!0),
                        d = _[0],
                        m = _[1],
                        E = (0, n.useCallback)(
                            (e) => {
                                e.includes(s) &&
                                    (c(!0), engine.off(Ae, E), window.subViews.removeChildChangedCallback(s));
                            },
                            [s],
                        ),
                        g = (0, n.useCallback)(
                            (e) => {
                                pe.add(
                                    () =>
                                        new Promise((t) => {
                                            const n = new MutationObserver(() => {
                                                m(!1), n.disconnect(), t();
                                            });
                                            if (o.current) {
                                                const t = document.getElementById('root');
                                                t && t.setAttribute('id', 'bugSubView'),
                                                    o.current.setAttribute('id', 'root');
                                                const a = document.createElement('link');
                                                (a.href = e.replace(Fe, '.css')),
                                                    (a.rel = 'stylesheet'),
                                                    document.head.appendChild(a),
                                                    he.test(e) &&
                                                        be(
                                                            e
                                                                .split('/')
                                                                .slice(0, -u)
                                                                .concat(['vendors.js'])
                                                                .join('/')
                                                                .replace('/production/', '/production/lib/'),
                                                        ),
                                                    be(e.replace(Fe, '.js')),
                                                    n.observe(o.current, { childList: !0 });
                                            }
                                        }),
                                );
                            },
                            [u],
                        );
                    return (
                        (0, n.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const u = window.subViews.get(e),
                                    t = u.path;
                                let n = t.split('/').pop();
                                if (n)
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, u)),
                                        g(t),
                                        () => {
                                            n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                console.info(`Sub view ${n} is destroyed: ${t}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(Ae, E);
                        }, [E, g, e, l]),
                        a().createElement(
                            'div',
                            { className: b()(_e, t) },
                            d && r,
                            a().createElement('div', { ref: o }),
                        )
                    );
                });
                function De(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const Ce = {
                        playHighlight() {
                            De('highlight');
                        },
                        playClick() {
                            De('play');
                        },
                        playYes() {
                            De('yes1');
                        },
                    },
                    fe = {
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
                        base__large: 'CButton_base__large_5c',
                        base__disabled: 'CButton_base__disabled_d9',
                        back: 'CButton_back_e5',
                        texture: 'CButton_texture_fe',
                        state: 'CButton_state_11',
                        base__focus: 'CButton_base__focus_83',
                        stateHighlightHover: 'CButton_stateHighlightHover_ff',
                        stateHighlightActive: 'CButton_stateHighlightActive_35',
                        stateDisabled: 'CButton_stateDisabled_54',
                        base__highlightActive: 'CButton_base__highlightActive_b2',
                        content: 'CButton_content_cc',
                    };
                let Be, we;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Be || (Be = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(we || (we = {}));
                const ve = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: o,
                    mixClass: s,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: d,
                    onMouseUp: m,
                    onMouseLeave: E,
                    onClick: g,
                }) => {
                    const A = (0, n.useRef)(null),
                        F = (0, n.useState)(t),
                        h = F[0],
                        p = F[1],
                        D = (0, n.useState)(!1),
                        C = D[0],
                        f = D[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                h && null !== A.current && !A.current.contains(e.target) && p(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [h]),
                        (0, n.useEffect)(() => {
                            p(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: A,
                                className: b()(
                                    fe.base,
                                    fe[`base__${r}`],
                                    o && fe.base__disabled,
                                    u && fe[`base__${u}`],
                                    h && fe.base__focus,
                                    C && fe.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    o || (null !== i && De(i), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    o || (m && m(e), f(!1));
                                },
                                onMouseDown: function (e) {
                                    o ||
                                        (null !== l && De(l),
                                        d && d(e),
                                        t && (o || (A.current && (A.current.focus(), p(!0)))),
                                        f(!0));
                                },
                                onMouseLeave: function (e) {
                                    o || (E && E(e), f(!1));
                                },
                                onClick: function (e) {
                                    o || (g && g(e));
                                },
                            },
                            r !== Be.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: fe.back }),
                                    a().createElement('span', { className: fe.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: b()(fe.state, fe.state__default) },
                                a().createElement('span', { className: fe.stateDisabled }),
                                a().createElement('span', { className: fe.stateHighlightHover }),
                                a().createElement('span', { className: fe.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: fe.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ve.defaultProps = { type: Be.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const xe = ve,
                    ke = [
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
                function ye(e) {
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
                const Te = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: $.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Se = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            m = e.decoratorId,
                            E = void 0 === m ? 0 : m,
                            g = e.isEnabled,
                            A = void 0 === g || g,
                            F = e.targetId,
                            h = void 0 === F ? 0 : F,
                            p = e.onShow,
                            b = e.onHide,
                            D = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, ke);
                        const C = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, n.useMemo)(() => h || U().resId, [h]),
                            B = (0, n.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (Te(t, E, { isMouseEvent: !0, on: !0, arguments: ye(a) }, f),
                                    p && p(),
                                    (C.current.isVisible = !0));
                            }, [t, E, a, f, p]),
                            w = (0, n.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        Te(t, E, { on: !1 }, f),
                                        C.current.isVisible && b && b(),
                                        (C.current.isVisible = !1);
                                }
                            }, [t, E, f, b]),
                            v = (0, n.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(C.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = C.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', v, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', v, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === A && w();
                            }, [A, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            );
                        return A
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((C.current.timeoutId = window.setTimeout(B, c ? 100 : 400)),
                                                      r && r(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              w(), null == o || o(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === d && w(), null == i || i(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === d && w(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      D,
                                  ),
                              )
                            : u;
                        var x;
                    },
                    Le = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Oe() {
                    return (
                        (Oe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Oe.apply(null, arguments)
                    );
                }
                const Ie = R.views.common.tooltip_window.simple_tooltip_content,
                    Me = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            o = e.note,
                            s = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Le);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: r, note: o, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, r, o, i]);
                        return a().createElement(
                            Se,
                            Oe(
                                {
                                    contentId:
                                        ((_ = null == i ? void 0 : i.hasHtmlContent),
                                        _ ? Ie.SimpleTooltipHtmlContent('resId') : Ie.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    },
                    Ne = 'TextOverflow_base_3b',
                    Re = ['content', 'classMix', 'className'];
                function Pe() {
                    return (
                        (Pe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Pe.apply(null, arguments)
                    );
                }
                const He = (e) => {
                    let u = e.content,
                        t = e.classMix,
                        r = e.className,
                        o = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, Re);
                    const s = (0, n.useRef)(null),
                        i = (0, n.useState)(!0),
                        l = i[0],
                        c = i[1];
                    return (
                        (0, n.useEffect)(() =>
                            ((e) => {
                                let u,
                                    t = null;
                                return (
                                    (t = requestAnimationFrame(() => {
                                        t = requestAnimationFrame(() => {
                                            (t = null), (u = e());
                                        });
                                    })),
                                    () => {
                                        'function' == typeof u && u(), null !== t && cancelAnimationFrame(t);
                                    }
                                );
                            })(() => {
                                const e = s.current;
                                e && e.offsetWidth >= e.scrollWidth && c(!1);
                            }),
                        ),
                        a().createElement(
                            Me,
                            { isEnabled: l, body: u },
                            a().createElement('div', Pe({}, o, { ref: s, className: b()(Ne, r, t) }), u),
                        )
                    );
                };
                let We;
                !(function (e) {
                    (e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent');
                })(We || (We = {}));
                const je = 'DialogTemplateButton_base_0b',
                    $e = 'DialogTemplateButton_label_83',
                    Ve = 'DialogTemplateButton_label__noTooltip_14',
                    Ue = (0, n.memo)(
                        ({ onClick: e, isFocused: u, buttonID: t, isDisabled: r, label: o, tooltip: s, type: i }) => {
                            const l = (0, n.useCallback)(() => {
                                    e({ buttonID: t });
                                }, [e, t]),
                                c = (0, n.useMemo)(() => {
                                    return (
                                        (e = s.type),
                                        (u = { buttonID: t }),
                                        {
                                            isEnabled: e !== We.absent,
                                            args: u,
                                            contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                            decoratorId:
                                                e === We.normal
                                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow(
                                                          'resId',
                                                      )
                                                    : void 0,
                                            ignoreShowDelay: e === We.backport,
                                            ignoreMouseClick: !0,
                                        }
                                    );
                                    var e, u;
                                }, [s.type, t]),
                                _ = b()($e, s.type !== We.absent && Ve);
                            return a().createElement(
                                Se,
                                c,
                                a().createElement(
                                    'div',
                                    { className: je },
                                    a().createElement(
                                        xe,
                                        { size: we.medium, type: i, disabled: r, onClick: l, isFocused: u },
                                        a().createElement(He, { classMix: _, content: o || '' }),
                                    ),
                                ),
                            );
                        },
                    ),
                    Ge = 'DialogTemplateButtonList_base_8e';
                function ze() {
                    return (
                        (ze = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ze.apply(null, arguments)
                    );
                }
                const qe = (0, n.memo)(() => {
                        const e = Q('model').onButtonClicked,
                            u = Q('model.focus'),
                            t = u.focusedIndex,
                            r = u.onTabPressed,
                            o = Q('model.buttons'),
                            s = (0, n.useCallback)(
                                (e) => {
                                    r({ shift: e.shiftKey });
                                },
                                [r],
                            );
                        te(ee.n.TAB, s);
                        const i = (0, n.useCallback)(
                            (u) => {
                                if (t < 0 || t >= o.length) return;
                                const n = o[t].value;
                                u.altKey || n.isDisabled || e({ buttonID: n.buttonID });
                            },
                            [o, t, e],
                        );
                        return (
                            te(ee.n.ENTER, i),
                            a().createElement(
                                'div',
                                { className: Ge },
                                o.map(({ value: u }, n) =>
                                    a().createElement(Ue, ze({ key: u.buttonID, isFocused: n === t, onClick: e }, u)),
                                ),
                            )
                        );
                    }),
                    Ke = 'DialogTemplateWrapper_base_f7',
                    Ze = 'DialogTemplateWrapper_base__hidden_5f',
                    Ye = 'DialogTemplateWrapper_subView_30';
                function Xe() {
                    return (
                        (Xe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Xe.apply(null, arguments)
                    );
                }
                const Je = (0, n.memo)(({ Template: e }) => {
                    const u = Q('model', J.None),
                        t = u.onCloseClicked,
                        r = u.placeHolders,
                        o = u.background,
                        s = u.dimmerAlpha,
                        i = u.displayFlags;
                    (0, n.useEffect)(() => {
                        const e = document.getElementById('root');
                        e && e.setAttribute('id', 'stubDialogTemplate');
                    }, []);
                    const l = i.map(({ value: e }) => e),
                        c = (0, n.useRef)(r.map(({ value: e }) => e.resourceID)),
                        _ = (0, n.useState)(0 !== c.current.length),
                        d = _[0],
                        m = _[1],
                        E = (0, n.useCallback)(
                            (e = 'default') => {
                                t({ reason: e });
                            },
                            [t],
                        ),
                        g = (0, n.useCallback)(() => {
                            E('escape');
                        }, [E]);
                    var A;
                    (A = g), te(ee.n.ESCAPE, A);
                    const F = (0, n.useCallback)((e) => {
                            const u = c.current,
                                t = u.indexOf(e);
                            t > -1 && (u.splice(t, 1), 0 === u.length && m(!1));
                        }, []),
                        p = (0, n.useMemo)(() => {
                            const e = { backgroundColor: `rgba(19, 18, 16, ${s})` };
                            return o && (e.backgroundImage = `url(${o})`), e;
                        }, [o, s]),
                        D = (0, n.useMemo)(
                            () =>
                                r.reduce(
                                    (e, { value: u }) => (
                                        (e[u.placeHolder] = a().createElement(ge, {
                                            key: u.placeHolder,
                                            id: u.resourceID,
                                            mixClass: Ye,
                                            onLoadCallback: F,
                                        })),
                                        e
                                    ),
                                    {},
                                ),
                            [F, r],
                        ),
                        C = b()(Ke, d && Ze);
                    return a().createElement(
                        h,
                        null,
                        a().createElement(
                            'div',
                            { className: C, style: p },
                            a().createElement(
                                e,
                                Xe(
                                    { onClose: E, buttons: a().createElement(qe, null), displayFlags: l, isShown: !d },
                                    D,
                                ),
                            ),
                        ),
                    );
                });
                var Qe = t(3403);
                const eu = {
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
                    uu = [
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
                function tu() {
                    return (
                        (tu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        tu.apply(null, arguments)
                    );
                }
                class nu extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && De(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && De(this.props.soundClick);
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
                            n = e.goto,
                            r = e.side,
                            o = e.type,
                            s = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(e, uu)),
                            m = b()(eu.base, eu[`base__${o}`], eu[`base__${r}`], null == s ? void 0 : s.base),
                            E = b()(eu.icon, eu[`icon__${o}`], eu[`icon__${r}`], null == s ? void 0 : s.icon),
                            g = b()(eu.glow, null == s ? void 0 : s.glow),
                            A = b()(eu.caption, eu[`caption__${o}`], null == s ? void 0 : s.caption),
                            F = b()(eu.goto, null == s ? void 0 : s.goto);
                        return a().createElement(
                            'div',
                            tu(
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
                            'info' !== o && a().createElement('div', { className: eu.shine }),
                            a().createElement('div', { className: E }, a().createElement('div', { className: g })),
                            a().createElement('div', { className: A }, u),
                            n && a().createElement('div', { className: F }, n),
                        );
                    }
                }
                let au;
                (nu.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e.responsiveHeader = 'responsiveHeader'),
                            (e.responsiveClosePosition = 'responsiveClosePosition'),
                            (e.disableResponsiveContentPosition = 'disableResponsiveContentPosition');
                    })(au || (au = {}));
                const ru = {
                        base: 'DefaultDialogTemplate_base_d2',
                        topRight: 'DefaultDialogTemplate_topRight_eb',
                        center: 'DefaultDialogTemplate_center_b4',
                        center__shown: 'DefaultDialogTemplate_center__shown_e1',
                        windowIn: 'DefaultDialogTemplate_windowIn_3b',
                        center__withIcon: 'DefaultDialogTemplate_center__withIcon_f9',
                        base__extraSmallHeight: 'DefaultDialogTemplate_base__extraSmallHeight_f5',
                        center__responsive: 'DefaultDialogTemplate_center__responsive_21',
                        base__smallHeight: 'DefaultDialogTemplate_base__smallHeight_52',
                        icon: 'DefaultDialogTemplate_icon_36',
                        icon__responsive: 'DefaultDialogTemplate_icon__responsive_e0',
                        title: 'DefaultDialogTemplate_title_c6',
                        title__responsive: 'DefaultDialogTemplate_title__responsive_6e',
                        content: 'DefaultDialogTemplate_content_22',
                        footer: 'DefaultDialogTemplate_footer_4e',
                        buttons: 'DefaultDialogTemplate_buttons_f7',
                        divider: 'DefaultDialogTemplate_divider_d5',
                        divider__noContent: 'DefaultDialogTemplate_divider__noContent_3f',
                        divider__noFooter: 'DefaultDialogTemplate_divider__noFooter_10',
                        closeBtn: 'DefaultDialogTemplate_closeBtn_5e',
                        closeBtn__responsive: 'DefaultDialogTemplate_closeBtn__responsive_49',
                    },
                    ou = (0, n.memo)(
                        ({
                            isShown: e = !0,
                            classMix: u,
                            onClose: t,
                            icon: r,
                            topRight: o,
                            title: s,
                            content: l,
                            buttons: c,
                            footer: _,
                            displayFlags: d,
                            classNames: m,
                        }) => {
                            const g = ((e, u) => Object.keys(u).reduce((u, t) => ((u[t] = e.includes(t)), u), {}))(
                                    d,
                                    au,
                                ),
                                A = g.responsiveHeader,
                                F = g.responsiveClosePosition,
                                h = g.disableResponsiveContentPosition,
                                p = (function (e, u, t) {
                                    const a = (0, n.useContext)(E);
                                    let r = Object.entries(a).filter(([e, u]) => !0 === u && e in i);
                                    return (
                                        t && (r = r.filter((e) => t.includes(e[0]))),
                                        e.reduce((e, t) => {
                                            const n = r.map((e) =>
                                                b()(
                                                    u[((e, u) => e + '__' + u)(t, e[0])],
                                                    u[
                                                        ((e, u) => {
                                                            return e + ((t = u)[0].toUpperCase() + t.slice(1));
                                                            var t;
                                                        })(t, e[0])
                                                    ],
                                                ),
                                            );
                                            return (e[t] = b()(u[t], ...n)), e;
                                        }, {})
                                    );
                                })(['base'], ru),
                                D = (0, n.useCallback)(() => {
                                    t && t();
                                }, [t]),
                                C = b()(p.base, u),
                                f = b()(
                                    ru.center,
                                    r && ru.center__withIcon,
                                    e && ru.center__shown,
                                    !h && ru.center__responsive,
                                    null == m ? void 0 : m.center,
                                ),
                                B = b()(ru.icon, A && ru.icon__responsive, null == m ? void 0 : m.icon),
                                w = b()(ru.title, A && ru.title__responsive, null == m ? void 0 : m.title),
                                v = b()(ru.closeBtn, F && ru.closeBtn__responsive),
                                x = b()(
                                    ru.divider,
                                    !l && ru.divider__noContent,
                                    !_ && ru.divider__noFooter,
                                    null == m ? void 0 : m.divider,
                                );
                            return a().createElement(
                                'div',
                                { className: C },
                                a().createElement(
                                    'div',
                                    { className: ru.topRight },
                                    o,
                                    a().createElement(
                                        'div',
                                        { className: v },
                                        a().createElement(nu, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: D,
                                        }),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: f },
                                    r && a().createElement('div', { className: B }, r),
                                    s && a().createElement('div', { className: w }, s),
                                    l && a().createElement('div', { className: ru.content }, l),
                                    a().createElement('div', { className: x }),
                                    _ && a().createElement('div', { className: ru.footer }, _),
                                    c && a().createElement('div', { className: ru.buttons }, c),
                                ),
                            );
                        },
                    ),
                    su = {
                        base: 'FlagIcon_base_25',
                        base__c_1080x454: 'FlagIcon_base__c_1080x454_6c',
                        base__c_240x118: 'FlagIcon_base__c_240x118_92',
                        base__c_155x31: 'FlagIcon_base__c_155x31_41',
                    };
                let iu;
                !(function (e) {
                    (e.c1080x454 = 'c_1080x454'), (e.c240x118 = 'c_240x118'), (e.c155x31 = 'c_155x31');
                })(iu || (iu = {}));
                const lu = {
                        [iu.c1080x454]: R.images.gui.maps.icons.crew.flags,
                        [iu.c240x118]: R.images.gui.maps.icons.tankmen.card.nations,
                        [iu.c155x31]: R.images.gui.maps.icons.nations.c_155x31,
                    },
                    cu = a().memo(({ nation: e, size: u = iu.c1080x454, className: t }) =>
                        a().createElement('div', {
                            className: b()(su.base, su[`base__${u}`], t),
                            style: { backgroundImage: `url('${lu[u].$dyn(e)}')` },
                        }),
                    );
                function _u() {
                    return !1;
                }
                console.log;
                var du = t(9174);
                function mu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return Eu(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? Eu(e, u)
                                          : void 0
                                );
                            }
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
                function Eu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const gu = (e) => (0 === e ? window : window.subViews.get(e));
                var Au = t(3946);
                const Fu = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: s, children: i, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    _ = (t, n, a) => {
                                        var r;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = gu,
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
                                                const s = (e) => {
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
                                                            l = o.O.view.addModelObserver(i, u, !0);
                                                        return a.set(l, t), e && t(s(r)), l;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, u) => {
                                                        const t = s(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = s(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = mu(a.keys()); !(e = t()).done; ) r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            i =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(e)) : i.readByPath(e),
                                            _ = (e) => c.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = du.LO.box(n, { equals: _u });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, du.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = du.LO.box(n, { equals: _u });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, du.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, u) => ((e[u] = du.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, du.aD)((u) => {
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
                                                                o = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = du.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, du.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
                                                                                o[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: _,
                                            }),
                                            m = { mode: t, model: d, externalModel: i, cleanup: _ };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && a ? a.controls(m) : u(m),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    d = (0, n.useRef)(!1),
                                    m = (0, n.useState)(r),
                                    E = m[0],
                                    g = m[1],
                                    A = (0, n.useState)(() => _(r, s, l)),
                                    F = A[0],
                                    h = A[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        d.current ? h(_(E, s, l)) : (d.current = !0);
                                    }, [l, E, s]),
                                    (0, n.useEffect)(() => {
                                        g(r);
                                    }, [r]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            F.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [F],
                                    ),
                                    a().createElement(t.Provider, { value: F }, i)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = Object.assign(
                                    {},
                                    e.primitives([
                                        'xpTransfer',
                                        'xpLose',
                                        'nation',
                                        'isConfirmRequire',
                                        'isSourceMaxXp',
                                        'isTargetMaxXp',
                                    ]),
                                    {
                                        sourceTankman: e.object('sourceTankman'),
                                        targetTankman: e.object('targetTankman'),
                                        sourceTankmanSkills: e.array('sourceTankman.majorSkills'),
                                        targetTankmanSkills: e.array('targetTankman.majorSkills'),
                                    },
                                ),
                                t = (0, Au.Om)(
                                    () => {
                                        const e = u.sourceTankmanSkills.get(),
                                            t = u.targetTankmanSkills.get();
                                        return e.length <= 3 && t.length <= 3;
                                    },
                                    { equals: _u },
                                );
                            return Object.assign({}, u, { computes: { isSingleRow: t } });
                        },
                        ({ externalModel: e }) => ({
                            changeInput: e.createCallback((e) => ({ input: e }), 'onInputChange'),
                        }),
                    ),
                    hu = Fu[0],
                    pu = Fu[1],
                    bu = 'Arrow_base_22',
                    Du = 'Arrow_icon_ae',
                    Cu = 'Arrow_shineAnim_4e',
                    fu = 'Arrow_shine_fc',
                    Bu = 'Arrow_xpToTransfer_0c',
                    wu = 'Arrow_xpCount_58',
                    vu = 'Arrow_xpIcon_19',
                    xu = a().memo(({ xpTransfer: e, className: u }) =>
                        a().createElement(
                            'div',
                            { className: b()(bu, u) },
                            a().createElement('div', { className: Du }),
                            a().createElement('div', { className: Cu }, a().createElement('div', { className: fu })),
                            a().createElement(
                                'div',
                                { className: Bu },
                                a().createElement('div', { className: wu }, $.Z5.getNumberFormat(e, $.B3.INTEGRAL)),
                                a().createElement('div', { className: vu }),
                            ),
                        ),
                    );
                const ku = 'new_skill';
                let yu;
                !(function (e) {
                    (e.BlackReal = 'blackReal'),
                        (e.WhiteReal = 'whiteReal'),
                        (e.White = 'white'),
                        (e.WhiteOrange = 'whiteOrange'),
                        (e.WhiteSpanish = 'whiteSpanish'),
                        (e.Par = 'par'),
                        (e.ParSecondary = 'parSecondary'),
                        (e.ParTertiary = 'parTertiary'),
                        (e.Red = 'red'),
                        (e.RedDark = 'redDark'),
                        (e.Yellow = 'yellow'),
                        (e.Orange = 'orange'),
                        (e.Cream = 'cream'),
                        (e.Brown = 'brown'),
                        (e.GreenBright = 'greenBright'),
                        (e.Green = 'green'),
                        (e.GreenDark = 'greenDark'),
                        (e.BlueBooster = 'blueBooster'),
                        (e.BlueTeamkiller = 'blueTeamkiller'),
                        (e.Cred = 'cred'),
                        (e.Gold = 'gold'),
                        (e.Bond = 'bond'),
                        (e.Prom = 'prom');
                })(yu || (yu = {}));
                const Tu = {
                    base: 'SkillIcon_base_43',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__c_80x80: 'SkillIcon_base__c_80x80_79',
                    base__c_120x90: 'SkillIcon_base__c_120x90_8c',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
                let Su;
                !(function (e) {
                    (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs');
                })(Su || (Su = {}));
                const Lu = a().memo(function ({ iconName: e, size: u = Su.c24x24, className: t }) {
                        var n;
                        const r = null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(u)) ? void 0 : n.$dyn(e);
                        return a().createElement('div', {
                            style: null !== r ? { backgroundImage: `url(${r})` } : void 0,
                            className: b()(Tu.base, Tu[`base__${u}`], t),
                        });
                    }),
                    Ou = ['children'];
                function Iu() {
                    return (
                        (Iu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Iu.apply(null, arguments)
                    );
                }
                const Mu = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, Ou);
                    return a().createElement(
                        Se,
                        Iu(
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
                };
                function Nu() {
                    return (
                        (Nu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Nu.apply(null, arguments)
                    );
                }
                const Ru = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = a().createElement('div', { className: t }, e);
                        if (u.header || u.body) return a().createElement(Me, u, n);
                        const r = u.contentId;
                        return r ? a().createElement(Se, Nu({}, u, { contentId: r }), n) : a().createElement(Mu, u, n);
                    },
                    Pu = {
                        base: 'EfficiencyIndicator_base_34',
                        base__big: 'EfficiencyIndicator_base__big_a1',
                        base__large: 'EfficiencyIndicator_base__large_dc',
                        base__untrained: 'EfficiencyIndicator_base__untrained_cd',
                        percent: 'EfficiencyIndicator_percent_6b',
                        percent__full: 'EfficiencyIndicator_percent__full_30',
                        icon: 'EfficiencyIndicator_icon_da',
                    };
                let Hu;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Big = 'big'), (e.Large = 'large');
                })(Hu || (Hu = {}));
                (0, n.memo)(
                    ({
                        efficiencyValue: e,
                        tankmanID: u = -1,
                        className: t,
                        targetId: n = R.views.lobby.crew.widgets.CrewWidget('resId'),
                        size: r = Hu.Normal,
                    }) => {
                        const o = -1 === e,
                            s = o
                                ? { tooltipId: 'crewSkillUntrained' }
                                : { tooltipId: 'skillsEfficiency', skillEfficiency: e, tankmanID: u };
                        return a().createElement(
                            Mu,
                            { targetId: n, args: s, isEnabled: -1 !== u },
                            a().createElement(
                                'div',
                                { className: b()(Pu.base, Pu[`base__${r}`], o && Pu.base__untrained, t) },
                                o
                                    ? a().createElement('div', { className: Pu.icon })
                                    : a().createElement(
                                          'div',
                                          { className: b()(Pu.percent, 1 === e && Pu.percent__full) },
                                          j($.Z5.getNumberFormat(100 * e, $.B3.INTEGRAL)),
                                      ),
                            ),
                        );
                    },
                ),
                    R.strings.common.percentValue(),
                    R.strings.common.plusPercentValue();
                let Wu;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(Wu || (Wu = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let ju;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.CREW_POST_PROGRESSION_START = 'crew_pb_start'),
                        (e.CREW_POST_PROGRESSION_STOP = 'crew_pb_stop'),
                        (e.CREW_POST_PROGRESSION_REWARD = 'crew_postprog_reward'),
                        (e.CREW_RETRAIN_DOWN = 'crew_retrain_down'),
                        (e.CREW_RETRAIN_UP = 'crew_retrain_up'),
                        (e.CREW_PROFILE_UPGRADE = 'crew_profile_upgrade'),
                        (e.CREW_POSTPROG_WIDGET = 'crew_postprog_widget'),
                        (e.CREW_UNLOCK_MAJOR_PERK_START = 'crew_unlock_major_perk_start'),
                        (e.CREW_UNLOCK_MAJOR_PERK_STOP = 'crew_unlock_major_perk_stop'),
                        (e.CREW_SETTING_UP_MAJOR_PERK = 'crew_setting_up_major_perk'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(ju || (ju = {}));
                let $u;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })($u || ($u = {}));
                let Vu, Uu, Gu, zu, qu, Ku, Zu;
                !(function (e) {
                    (e.None = 'none'),
                        (e.Default = 'default'),
                        (e.Overlap = 'overlap'),
                        (e.ExtraOverlap = 'extraOverlap');
                })(Vu || (Vu = {})),
                    (function (e) {
                        (e.None = 'none'),
                            (e.SlideOutAndBlink = 'slideOutAndBlink'),
                            (e.SlideOut = 'slideOut'),
                            (e.FadeIn = 'fadeIn'),
                            (e.Blink = 'blink'),
                            (e.ScaleUp = 'ScaleUp');
                    })(Uu || (Uu = {})),
                    (function (e) {
                        (e.None = 'none'),
                            (e.NoMargins = 'noMargins'),
                            (e.ReducedMargins = 'reducedMargins'),
                            (e.OnlyLearningOverlap = 'onlyLearningOverlap'),
                            (e.Overlap = 'overlap'),
                            (e.ExtraOverlap = 'extraOverlap'),
                            (e.ExtraOverlapWithLevel = 'extraOverlapWithLevel'),
                            (e.ExtraOverlapWithEfficiency = 'extraOverlapWithEfficiency'),
                            (e.ExtraOverlapWithLevelAndEfficiency = 'extraOverlapWithLevelAndEfficiency');
                    })(Gu || (Gu = {})),
                    (function (e) {
                        (e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red');
                    })(zu || (zu = {})),
                    (function (e) {
                        (e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44');
                    })(qu || (qu = {})),
                    (function (e) {
                        (e.Major = 'major'), (e.Bonus = 'bonus');
                    })(Ku || (Ku = {})),
                    (function (e) {
                        (e.Learned = 'learned'), (e.Learning = 'learning');
                    })(Zu || (Zu = {}));
                const Yu = ({
                        name: e,
                        roleName: u,
                        level: t,
                        customName: n,
                        skillType: a,
                        skillIndex: r,
                        tooltipData: o,
                    }) => {
                        const s = { targetId: o.targetId, isEnabled: o.isEnabled };
                        return e === ku
                            ? a === Ku.Major
                                ? Object.assign(
                                      {
                                          contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                          args: Object.assign({ tankmanID: o.tankmanID, skillIndex: r }, o.args),
                                      },
                                      s,
                                  )
                                : Object.assign(
                                      {
                                          header: R.strings.crew.matrix.skillTooltip.bonus.available.header(),
                                          body: R.strings.crew.matrix.skillTooltip.bonus.available.text(),
                                      },
                                      s,
                                  )
                            : Object.assign(
                                  {
                                      contentId:
                                          R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                              'resId',
                                          ),
                                      args: Object.assign(
                                          {
                                              tooltipId: 'crewPerkGf',
                                              tankmanID: o.tankmanID,
                                              skillName: e,
                                              roleName: u,
                                              isBonus: a === Ku.Bonus,
                                              level: t,
                                              customName: n,
                                              skillIndex: r,
                                          },
                                          o.args,
                                      ),
                                  },
                                  s,
                              );
                    },
                    Xu = ['className', 'children'];
                const Ju = (e) => {
                    let u = e.className,
                        t = e.children,
                        n = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, Xu);
                    return a().createElement(Ru, { tooltipArgs: Yu(n), className: u }, t);
                };
                let Qu;
                !(function (e) {
                    (e.SelectedFull = 'selectedFull'),
                        (e.SelectedProgress = 'selectedProgress'),
                        (e.UnselectedFull = 'unselectedFull'),
                        (e.UnselectedProgress = 'unselectedProgress');
                })(Qu || (Qu = {}));
                const et = (e, u, t) => (e < 100 ? t : u),
                    ut = (e, u) =>
                        e === ku
                            ? et(u, Qu.UnselectedFull, Qu.UnselectedProgress)
                            : et(u, Qu.SelectedFull, Qu.SelectedProgress),
                    tt = {
                        base: 'Skill_base_1a',
                        bg: 'Skill_bg_54',
                        base__unselectedProgress: 'Skill_base__unselectedProgress_b5',
                        base__unselectedFull: 'Skill_base__unselectedFull_ef',
                        base__selectedProgress: 'Skill_base__selectedProgress_f0',
                        base__selectedFull: 'Skill_base__selectedFull_75',
                        progress: 'Skill_progress_8a',
                        plusIcon: 'Skill_plusIcon_6a',
                        topContent: 'Skill_topContent_65',
                        zeroIcon: 'Skill_zeroIcon_5a',
                        levelLabel: 'Skill_levelLabel_1f',
                    },
                    nt = a().memo(function ({
                        name: e,
                        customName: u,
                        index: t,
                        isDonor: n = !1,
                        iconName: r,
                        isZero: o,
                        level: s,
                        roleName: i,
                        tankmanID: l,
                        className: c,
                    }) {
                        return a().createElement(
                            Ju,
                            {
                                key: t,
                                skillIndex: t,
                                name: e,
                                roleName: i,
                                level: s,
                                tooltipData: { tankmanID: l, args: { isDonor: n } },
                                customName: u,
                                skillType: Ku.Major,
                                className: c,
                            },
                            a().createElement(
                                'div',
                                { className: b()(tt.base, tt[`base__${ut(r, s)}`]) },
                                a().createElement('div', { className: tt.bg }),
                                a().createElement('div', { style: { width: `${s}%` }, className: tt.progress }),
                                e === ku
                                    ? a().createElement('div', { className: tt.plusIcon })
                                    : a().createElement(Lu, { size: Su.c52x52, iconName: r }),
                                a().createElement(
                                    'div',
                                    { className: tt.topContent },
                                    o
                                        ? a().createElement('div', { className: tt.zeroIcon })
                                        : a().createElement('div', { className: b()(tt.levelLabel) }, j(s)),
                                ),
                            ),
                        );
                    }),
                    at = 'SkillList_base_88',
                    rt = 'SkillList_skill_06';
                function ot() {
                    return (
                        (ot = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ot.apply(null, arguments)
                    );
                }
                const st = ({ skills: e, tankmanID: u, isDonor: t, className: n }) => {
                        return a().createElement(
                            'div',
                            { className: b()(at, n) },
                            ((r = e),
                            (o = (e, n) =>
                                a().createElement(
                                    nt,
                                    ot({ key: `${n}_${e.iconName}_${e.level}` }, e, {
                                        tankmanID: u,
                                        index: n,
                                        isDonor: t,
                                        className: rt,
                                    }),
                                )),
                            Array.isArray(r) ? r.map(o) : r.map((e, u, t) => o(null == e ? void 0 : e.value, u, t))),
                        );
                        var r, o;
                    },
                    it = 'Divider_base_0a',
                    lt = 'Divider_line_c9',
                    ct = a().memo(function ({ className: e }) {
                        return a().createElement(
                            'div',
                            { className: b()(it, e) },
                            a().createElement('div', { className: lt }),
                        );
                    }),
                    _t = {
                        base: 'RoleIcon_base_51',
                        base__small: 'RoleIcon_base__small_68',
                        base__c_14x14: 'RoleIcon_base__c_14x14_8f',
                        base__c_18x18: 'RoleIcon_base__c_18x18_0b',
                        base__c_24x24_new: 'RoleIcon_base__c_24x24_new_fe',
                        base__c_24x24: 'RoleIcon_base__c_24x24_52',
                        base__c_30x30_red: 'RoleIcon_base__c_30x30_red_85',
                        base__c_30x30: 'RoleIcon_base__c_30x30_e9',
                        base__c_40x40: 'RoleIcon_base__c_40x40_99',
                        base__medium: 'RoleIcon_base__medium_5d',
                        base__white: 'RoleIcon_base__white_2a',
                        base__big: 'RoleIcon_base__big_b4',
                    };
                let dt;
                !(function (e) {
                    (e.small = 'small'),
                        (e.c14x14 = 'c_14x14'),
                        (e.c18x18 = 'c_18x18'),
                        (e.c24x24 = 'c_24x24'),
                        (e.c24x24_new = 'c_24x24_new'),
                        (e.c30x30 = 'c_30x30'),
                        (e.c40x40 = 'c_40x40'),
                        (e.c30x30_red = 'c_30x30_red'),
                        (e.medium = 'medium'),
                        (e.white = 'white'),
                        (e.big = 'big');
                })(dt || (dt = {}));
                const mt = a().memo(function ({ role: e, size: u = dt.c30x30, className: t }) {
                        const r = (0, n.useMemo)(() => {
                            try {
                                var t;
                                const n =
                                    null == (t = R.images.gui.maps.icons.tankmen.roles.$dyn(u)) ? void 0 : t.$dyn(H(e));
                                if (!n) throw Error;
                                return { backgroundImage: `url(${n})` };
                            } catch (u) {
                                console.error('Cant find resource in RoleIcon: ', e);
                            }
                        }, [e, u]);
                        return a().createElement('div', { style: r, className: b()(_t.base, _t[`base__${u}`], t) });
                    }),
                    Et = {
                        base: 'TankmanIcon_base_f9',
                        base__big: 'TankmanIcon_base__big_98',
                        base__small: 'TankmanIcon_base__small_b2',
                        base__barracks: 'TankmanIcon_base__barracks_62',
                        base__special: 'TankmanIcon_base__special_3f',
                        base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                    };
                let gt;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(gt || (gt = {}));
                const At = (0, n.memo)(function ({ name: e, size: u = gt.c100x60, classMix: t, isSkin: n = !1 }) {
                        let r = R.images.gui.maps.icons.tankmen.icons.$dyn(u);
                        n && (r = r.$dyn('crewSkins'));
                        const o = r.$dyn(H(e));
                        return (
                            o ||
                                console.error(
                                    `Can't find ${H(e)} in R.images.gui.maps.icons.tankmen.icons.${u}${n ? '.crewSkins' : ''}`,
                                ),
                            a().createElement('div', {
                                style: { backgroundImage: `url(${o})` },
                                className: b()(Et.base, Et[`base__${u}`], t),
                            })
                        );
                    }),
                    Ft = 'Tankman_base_5d',
                    ht = 'Tankman_info_71',
                    pt = 'Tankman_tankman_27',
                    bt = 'Tankman_tankman__donor_21',
                    Dt = 'Tankman_glow_a6',
                    Ct = 'Tankman_divider_ac',
                    ft = 'Tankman_divider__acceptor_97',
                    Bt = 'Tankman_roleWrapper_a9',
                    wt = 'Tankman_role_a9',
                    vt = 'Tankman_userName_da',
                    xt = 'Tankman_userName__maxSkills_e5',
                    kt = a().memo(
                        ({ iconName: e, userName: u, isInSkin: t, role: n, isDonor: r, maxSkills: o, className: s }) =>
                            a().createElement(
                                'div',
                                { className: b()(Ft, s) },
                                a().createElement(
                                    'div',
                                    { className: ht },
                                    !r && a().createElement('div', { className: Dt }),
                                    a().createElement(At, {
                                        name: e,
                                        size: gt.c158x118,
                                        isSkin: t,
                                        classMix: b()(pt, r && bt),
                                    }),
                                    a().createElement(ct, { className: b()(Ct, !r && ft) }),
                                    a().createElement(
                                        'div',
                                        { className: Bt },
                                        a().createElement(mt, { role: n, className: wt }),
                                    ),
                                ),
                                a().createElement('div', { className: b()(vt, o && xt) }, u),
                            ),
                    ),
                    yt = 'default',
                    Tt = 'search',
                    St = 'email',
                    Lt = 'password',
                    Ot = 'normal',
                    It = 'disabled',
                    Mt = 'alert',
                    Nt = 'error',
                    Rt = 'medium',
                    Pt = 'large',
                    Ht = {
                        [yt]: '',
                        [St]: R.strings.common.input.placeholder.email(),
                        [Tt]: R.strings.common.input.placeholder.search(),
                        [Lt]: R.strings.common.input.placeholder.password(),
                    },
                    Wt = { [yt]: 'text', [St]: 'text', [Tt]: 'text', [Lt]: 'password' },
                    jt = { [yt]: '', [St]: 'Invalid email', [Tt]: '', [Lt]: '' },
                    $t = R.images.gui.maps.icons.components.input;
                function Vt(e, u) {
                    return (
                        u !== St ||
                        (function (e) {
                            const u = e.match(
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            );
                            return Boolean(u);
                        })(e)
                    );
                }
                const Ut = {
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
                    Gt = a().memo(
                        ({
                            componentId: e,
                            value: u = '',
                            type: t = yt,
                            size: r = Rt,
                            variant: o = Ot,
                            placeholder: s = '',
                            highlighted: i,
                            withClear: l,
                            selectOnFocus: c = !0,
                            maxLength: _,
                            iconSource: d,
                            classMix: m,
                            onMouseEnter: E,
                            onMouseLeave: g,
                            onMouseDown: A,
                            onMouseUp: F,
                            onClick: h,
                            onChange: p,
                            onClear: D,
                            onFocus: C,
                            onBlur: f,
                        }) => {
                            const B = (0, n.useState)(!1),
                                w = B[0],
                                v = B[1],
                                x = (0, n.useRef)(null),
                                k = (0, n.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                y = o !== It,
                                T = (0, n.useCallback)(
                                    (e) => {
                                        y && (v(!0), C && C(e));
                                    },
                                    [y, C],
                                ),
                                S = (0, n.useCallback)(
                                    (e) => {
                                        y && !k.current.mouseOver && (v(!1), f && f(e));
                                    },
                                    [y, f],
                                );
                            (0, n.useEffect)(() => {
                                y && w && c && x.current && x.current.select();
                            }, [c, w, y]);
                            const L = (0, n.useCallback)(
                                    (e) => {
                                        y && p && p(e.target.value);
                                    },
                                    [y, p],
                                ),
                                O = (0, n.useCallback)(
                                    (e) => {
                                        y && ((k.current.mouseOver = !0), E && E(e));
                                    },
                                    [y, E],
                                ),
                                I = (0, n.useCallback)(
                                    (e) => {
                                        y &&
                                            x.current &&
                                            (k.current.mouseDown && x.current.focus(),
                                            (k.current.mouseOver = !1),
                                            g && g(e));
                                    },
                                    [y, g],
                                ),
                                M = (0, n.useCallback)(
                                    (e) => {
                                        y && ((k.current.mouseDown = !0), A && A(e));
                                    },
                                    [y, A],
                                ),
                                N = (0, n.useCallback)(
                                    (e) => {
                                        y && ((k.current.mouseDown = !1), F && F(e));
                                    },
                                    [y, F],
                                ),
                                R = (0, n.useCallback)(
                                    (e) => {
                                        if (y && x.current) {
                                            (!w || (w && e.target !== x.current)) && x.current.focus(), h && h(e);
                                        }
                                    },
                                    [w, y, h],
                                ),
                                P = s || Ht[t],
                                H = Boolean(d),
                                W = b()(
                                    Ut.base,
                                    Ut[`base__${r}`],
                                    i && Ut[`base__${o}`],
                                    w && Ut.base__focused,
                                    H && Ut.base__withIcon,
                                    m,
                                ),
                                j = (0, n.useMemo)(() => (d ? { backgroundImage: `url(${d})` } : null), [d]),
                                $ = b()(Ut.input, Ut[`input__${t}`]),
                                V = b()(Ut.icon, Ut[`icon__${t}`]),
                                U = b()(Ut.placeholder, Ut[`placeholder__${t}`]);
                            return a().createElement(
                                'div',
                                {
                                    id: e,
                                    className: W,
                                    onMouseEnter: O,
                                    onMouseDown: M,
                                    onMouseUp: N,
                                    onMouseLeave: I,
                                    onClick: R,
                                },
                                !y && a().createElement('div', { className: Ut.disabled }),
                                j && a().createElement('div', { style: j, className: V }),
                                a().createElement('input', {
                                    ref: x,
                                    className: $,
                                    type: Wt[t],
                                    value: u,
                                    onChange: L,
                                    disabled: !y,
                                    onFocus: T,
                                    onBlur: S,
                                    maxLength: _,
                                }),
                                P && !u && !w && a().createElement('div', { className: U }, P),
                                l &&
                                    a().createElement('div', {
                                        className: Ut.clear,
                                        onClick: (e) => {
                                            Ce.playClick(), D && D(e);
                                        },
                                        onMouseEnter: Ce.playHighlight,
                                    }),
                            );
                        },
                    ),
                    zt = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    qt = ({ variant: e, show: u = !0, helperText: t, helperIcon: r, classMix: o }) => {
                        const s = (0, n.useMemo)(() => {
                                const u =
                                    r ||
                                    (function (e) {
                                        return e === Mt ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return u && { backgroundImage: `url(${u})` };
                            }, [r, e]),
                            i = b()(zt.base, u && zt.base__shown),
                            l = b()(zt.message, zt[`message__${e}`], o);
                        return a().createElement(
                            'div',
                            { className: i },
                            s && a().createElement('div', { className: zt.icon, style: s }),
                            a().createElement('div', { className: l }, t),
                        );
                    },
                    Kt = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    Zt = [
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
                function Yt() {
                    return (
                        (Yt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Yt.apply(null, arguments)
                    );
                }
                const Xt = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    Jt = (e) => {
                        let u = e.componentId,
                            t = e.type,
                            r = void 0 === t ? yt : t,
                            o = e.variant,
                            s = void 0 === o ? Ot : o,
                            i = e.size,
                            l = void 0 === i ? Rt : i,
                            c = e.value,
                            _ = e.tooltipArgs,
                            d = e.helperText,
                            m = void 0 === d ? '' : d,
                            E = e.isValidated,
                            g = void 0 === E || E,
                            A = e.showHelper,
                            F = void 0 === A || A,
                            h = e.error,
                            p = e.options,
                            D = e.onFocus,
                            C = e.onMouseEnter,
                            f = e.onMouseLeave,
                            B = e.onMouseUp,
                            w = e.onMouseDown,
                            v = e.onChange,
                            x = e.classMix,
                            k = e.controlClassMix,
                            y = e.helperClassMix,
                            T = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Zt);
                        const S = (0, n.useState)(c),
                            L = S[0],
                            O = S[1],
                            I = (0, n.useState)(g),
                            M = I[0],
                            N = I[1],
                            R = (0, n.useMemo)(() => Object.assign({}, Xt, p), [p]),
                            P = (0, n.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: c, type: r }),
                            H = (0, n.useCallback)((e) => {
                                e !== P.current.value &&
                                    ((P.current.value = e), (P.current.isChangeHandled = !1), O(e));
                            }, []),
                            W = (0, n.useCallback)(
                                (e) => {
                                    let u = !0;
                                    R.performChangeValidation &&
                                        (u = R.changesValidator ? R.changesValidator(e) : Vt(e, P.current.type)),
                                        v && v(e, u);
                                },
                                [v, R],
                            ),
                            j = (0, n.useCallback)(() => {
                                P.current.debounceTimeout &&
                                    (window.clearTimeout(P.current.debounceTimeout), (P.current.debounceTimeout = 0));
                            }, []),
                            $ = (0, n.useCallback)(() => H(''), [H]);
                        (0, n.useEffect)(() => () => j(), [j]);
                        const V = (0, n.useCallback)(
                            (e) => {
                                j(),
                                    R.debounceTime
                                        ? (P.current.debounceTimeout = window.setTimeout(() => {
                                              W(e);
                                          }, R.debounceTime))
                                        : W(e);
                            },
                            [W, j, R.debounceTime],
                        );
                        (0, n.useEffect)(() => {
                            P.current.isChangeHandled ||
                                P.current.value !== L ||
                                (V(P.current.value), (P.current.isChangeHandled = !0));
                        }, [L, V]),
                            (0, n.useEffect)(() => {
                                P.current.isChangeHandled && c !== P.current.value && ((P.current.value = c), O(c)),
                                    (P.current.type = r);
                            }, [c, r]),
                            (0, n.useEffect)(() => {
                                N(g);
                            }, [g, s]);
                        const U = (0, n.useCallback)((e) => C && C(e), [C]),
                            G = (0, n.useCallback)(
                                (e) => {
                                    R.disableHighlightOnFocus && M && N(!1), D && D(e);
                                },
                                [M, D, R.disableHighlightOnFocus],
                            ),
                            z = (0, n.useCallback)((e) => B && B(e), [B]),
                            q = (0, n.useCallback)((e) => w && w(e), [w]),
                            K = (0, n.useCallback)((e) => f && f(e), [f]),
                            Z = (0, n.useMemo)(
                                () =>
                                    R.withTypeIcon
                                        ? (function (e, u) {
                                              return e === Tt ? $t.$dyn(`search_${u}`) : '';
                                          })(r, l)
                                        : '',
                                [r, l, R.withTypeIcon],
                            ),
                            Y = m || jt[r],
                            X = Boolean(L),
                            J = h ? Nt : s,
                            Q = Boolean(h) || M,
                            ee = (0, n.useMemo)(
                                () => ('boolean' == typeof R.withClear ? X && R.withClear : X && r === Tt),
                                [r, X, R],
                            ),
                            ue = b()(Kt.base, Kt[`base__${l}`], Kt[`base__${s}`], x);
                        return a().createElement(
                            'div',
                            { id: u, className: ue, onMouseEnter: U, onMouseDown: q, onMouseUp: z, onMouseLeave: K },
                            a().createElement(
                                Ru,
                                { tooltipArgs: _ },
                                a().createElement(
                                    Gt,
                                    Yt(
                                        {
                                            componentId: u ? `${u}-inputControl` : void 0,
                                            iconSource: Z,
                                            size: l,
                                            type: r,
                                            variant: J,
                                            value: L,
                                            withClear: ee,
                                            highlighted: Q,
                                            selectOnFocus: R.selectOnFocus,
                                            maxLength: R.maxLength,
                                            classMix: k,
                                            onFocus: G,
                                            onChange: H,
                                            onClear: $,
                                        },
                                        T,
                                    ),
                                ),
                            ),
                            Y &&
                                a().createElement(
                                    'div',
                                    { className: Kt.helper },
                                    a().createElement(qt, {
                                        variant: J,
                                        show: F && (R.isPermanentHelper || Q),
                                        helperText: h || Y,
                                        helperIcon: R.helperIconSource,
                                        classMix: y,
                                    }),
                                ),
                        );
                    },
                    Qt = 'ValidateInput_base_9e',
                    en = 'ValidateInput_confirm_dc',
                    un = 'ValidateInput_input_2c',
                    tn = a().memo(({ onChange: e, className: u }) =>
                        a().createElement(
                            'div',
                            { className: b()(Qt, u) },
                            a().createElement(
                                'div',
                                { className: en },
                                R.strings.mentoring_license.assignmentDialog.confirm(),
                            ),
                            a().createElement(Jt, {
                                onChange: e,
                                classMix: un,
                                options: { debounceTime: 0 },
                                size: Pt,
                            }),
                        ),
                    );
                var nn = t(8045);
                const an = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                    tooltip: 'ExtendedText_tooltip_91',
                    'tooltip__justify-flex-start': 'ExtendedText_tooltip__justify-flex-start_00',
                    'tooltip__justify-center': 'ExtendedText_tooltip__justify-center_08',
                    'tooltip__justify-flex-end': 'ExtendedText_tooltip__justify-flex-end_90',
                    'tooltip__align-flex-start': 'ExtendedText_tooltip__align-flex-start_40',
                    'tooltip__align-center': 'ExtendedText_tooltip__align-center_54',
                    'tooltip__align-flex-end': 'ExtendedText_tooltip__align-flex-end_d2',
                };
                let rn, on, sn;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(rn || (rn = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(on || (on = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(sn || (sn = {}));
                const ln = { [sn.NBSP]: rn.NoBreakSymbol, [sn.ZWNBSP]: rn.NoBreakSymbol, [sn.NEW_LINE]: rn.LineBreak },
                    cn = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    _n = {
                        blackReal: 'colors_blackReal_fc',
                        whiteReal: 'colors_whiteReal_31',
                        white: 'colors_white_45',
                        whiteOrange: 'colors_whiteOrange_81',
                        whiteSpanish: 'colors_whiteSpanish_c3',
                        par: 'colors_par_5b',
                        parSecondary: 'colors_parSecondary_fd',
                        parTertiary: 'colors_parTertiary_97',
                        red: 'colors_red_79',
                        redDark: 'colors_redDark_73',
                        yellow: 'colors_yellow_76',
                        orange: 'colors_orange_cd',
                        cream: 'colors_cream_0f',
                        brown: 'colors_brown_82',
                        greenBright: 'colors_greenBright_68',
                        green: 'colors_green_fa',
                        greenDark: 'colors_greenDark_a9',
                        blueBooster: 'colors_blueBooster_26',
                        blueTeamkiller: 'colors_blueTeamkiller_86',
                        cred: 'colors_cred_35',
                        gold: 'colors_gold_c3',
                        bond: 'colors_bond_ce',
                        prom: 'colors_prom_83',
                    },
                    dn = 'renderers_noBreakWrapper_10',
                    mn = 'renderers_lineBreak_b5',
                    En = 'renderers_newLine_bd',
                    gn = 'renderers_word_f3',
                    An = (e) => ({ color: `#${e}` }),
                    Fn = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? _n[n]
                                ? a().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: b()(gn, _n[n]) },
                                      e,
                                  )
                                : a().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: gn, style: An(n) },
                                      e,
                                  )
                            : a().createElement('span', { key: t, 'data-block-type': u.blockType, className: gn }, e);
                    },
                    hn = {
                        [rn.Word]: Fn,
                        [rn.NoBreakSymbol]: Fn,
                        [rn.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            a().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => a().createElement(a().Fragment, { key: t }, e)),
                            ),
                        [rn.LineBreak]: ({ key: e }) =>
                            a().createElement('span', { key: e, 'data-block-type': rn.LineBreak, className: mn }),
                        [rn.NewLine]: ({ elementList: e, key: u }) =>
                            a().createElement('span', { key: u, 'data-block-type': rn.NewLine, className: En }, e),
                        [rn.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            a().createElement(
                                'span',
                                { key: u, 'data-block-type': rn.NoBreakWrapper, className: dn },
                                e,
                            ),
                    },
                    pn = (e, u, t) => {
                        const n = [];
                        return (
                            e.childList.forEach((a, r) => {
                                const o = `${t}_${r}`;
                                if (((e) => void 0 !== e.childList)(a)) {
                                    const e = a,
                                        u = e.blockType,
                                        t = pn(e, hn[u], o);
                                    n.push(...t);
                                } else n.push(u({ elementList: [a], textBlock: e, key: o }));
                            }),
                            n
                        );
                    },
                    bn = (e) => {
                        const u = [];
                        return (
                            e.forEach((e, t) => {
                                u.push(
                                    ...((e, u) => {
                                        const t = [],
                                            n = e.blockType,
                                            a = hn[n],
                                            r = pn(e, a, u);
                                        return (
                                            n === rn.NoBreakWrapper
                                                ? t.push(a({ elementList: r, textBlock: e, key: `${u}` }))
                                                : t.push(...r),
                                            t
                                        );
                                    })(e, t),
                                );
                            }),
                            u
                        );
                    },
                    Dn = (e, u, t, n) => {
                        let a = u.exec(e),
                            r = 0;
                        for (; a; ) r !== a.index && t(e.slice(r, a.index)), n(a), (r = u.lastIndex), (a = u.exec(e));
                        r !== e.length && t(e.slice(r));
                    },
                    Cn = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    fn = (e) => {
                        const u = [];
                        return (
                            Dn(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var t;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? u.push(...((t = e), t.match(Cn) || []))
                                        : u.push(...e.split(''));
                                },
                                (e) => {
                                    u.push(e[0]);
                                },
                            ),
                            u
                        );
                    },
                    Bn = cn
                        ? (e) => {
                              const u = [];
                              return (
                                  Dn(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          u.push(e);
                                      },
                                      (e) => {
                                          u.push(...fn(e[0]));
                                      },
                                  ),
                                  u
                              );
                          }
                        : (e, u) => {
                              const t = /[\s\u002d]/g;
                              let n = t.exec(e);
                              if (!n) return [e];
                              const a = [];
                              let r = 0;
                              for (; n; ) {
                                  const o = u.justifyContent === on.FlexEnd ? n.index : t.lastIndex;
                                  a.push(e.slice(r, o)), (r = o), (n = t.exec(e));
                              }
                              return r !== e.length && a.push(e.slice(r)), a;
                          },
                    wn = (e, u = '', t) => {
                        const n = [];
                        return (
                            Dn(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: rn.Word, colorTag: u, childList: Bn(e, t) });
                                },
                                (e) => {
                                    const t = e[0],
                                        a = ln[t.charAt(0)];
                                    a === rn.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: rn.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: rn.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(t),
                                          )
                                        : n.push({ blockType: a, colorTag: u, childList: [t] });
                                },
                            ),
                            n
                        );
                    },
                    vn = (e, u, t = '', n) => {
                        const a = [];
                        return (
                            Dn(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...wn(e, t, n));
                                },
                                (e) => {
                                    const r = e[1],
                                        o = void 0 === u[r] ? e[0] : u[r];
                                    'string' == typeof o || 'number' == typeof o
                                        ? a.push(...wn(String(o), t, n))
                                        : a.push({ blockType: rn.Binding, colorTag: t, childList: [o] });
                                },
                            ),
                            a
                        );
                    },
                    xn = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === rn.NoBreakWrapper) e.childList.push(n), t.push(e);
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && t.push(e),
                                t.push({ blockType: rn.NoBreakWrapper, colorTag: '', childList: [u, n] });
                        }
                        return u.childList.length > 0 && t.push(u), t;
                    },
                    kn = (e, u = {}, t) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === rn.NoBreakSymbol
                                        ? ((t = !0), u.push(...xn(u.pop(), e)))
                                        : (t ? u.push(...xn(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u, t) => {
                                const n = [];
                                return (
                                    Dn(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...vn(e, u, '', t));
                                        },
                                        (e) => {
                                            n.push(...vn(e[2] + e[3], u, e[1], t));
                                        },
                                    ),
                                    n
                                );
                            })(W(e).replace(/&zwnbsp;/g, '\ufeff'), u, t),
                        );
                        return bn(n);
                    },
                    yn = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    Tn = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    Sn = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = Tn(e, u),
                            a = e.textContent.length,
                            r = e.offsetWidth / a,
                            o = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / r);
                            return n >= t ? [!0, t + o] : [!1, n];
                        }
                        const s = Math.max(t + o, 0);
                        return a < s ? [!1, 0] : [!0, s];
                    },
                    Ln = (e, u, t, n, r, o) => {
                        let s = -1,
                            i = null;
                        for (let l = t; l >= 0; l--) {
                            const t = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === rn.LineBreak || c === rn.NewLine || c === rn.Binding) continue;
                            const _ = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = Sn(t, n, r),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (r -= d);
                                    continue;
                                }
                                const m = _.slice(0, _.length - d) + o,
                                    E = u[l];
                                (i = a().cloneElement(E, E.props, m)), (s = l);
                                break;
                            }
                            {
                                const e = t.children,
                                    c = u[l],
                                    d = c.props.children,
                                    m = Ln(e, d, e.length - 1, n, r, o),
                                    E = m[0],
                                    g = m[1];
                                if (!(E < 0)) {
                                    const e = d.slice(0, E);
                                    (i = a().cloneElement(c, c.props, e, g)), (s = l);
                                    break;
                                }
                                r -= _.length;
                            }
                        }
                        return [s, i];
                    },
                    On = (e, u, t, n = '...') => {
                        const a = [...u],
                            r = e.current;
                        if (!r) return [a, !1];
                        const o = t.height,
                            s = t.width,
                            i = r.lastElementChild;
                        if (!yn(i, o) && Tn(i, s) <= 0) return [a, !1];
                        const l = r.children,
                            c = ((e, u) => {
                                let t = 0,
                                    n = e.length - 1;
                                for (; n - t >= 0; ) {
                                    const a = t + Math.ceil(0.5 * (n - t));
                                    yn(e[a], u) ? (n = a - 1) : (t = a + 1);
                                }
                                return t - 1;
                            })(l, o);
                        if (c < 0) return [a, !1];
                        const _ = Ln(l, a, c, s, n.length, n),
                            d = _[0],
                            m = _[1];
                        return m && (a.splice(d, 1, m), a.splice(d + 1)), [a, !0];
                    },
                    In = a().memo(
                        ({
                            text: e,
                            classMix: u,
                            onSizeChanged: t,
                            binding: r,
                            isTooltipEnable: o = !1,
                            isTruncationAvailable: s = !1,
                            customTooltipArgs: i,
                            targetId: l,
                            justifyContent: c = on.FlexStart,
                            alignContent: _ = on.FlexStart,
                            truncateIdentify: d = '...',
                        }) => {
                            const m = (0, n.useRef)(null),
                                E = (0, n.useRef)({ height: 0, width: 0 }),
                                g = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                A = g[0],
                                F = g[1],
                                h = (0, n.useMemo)(() => kn(e, r, { justifyContent: c }), [r, c, e]),
                                p = (0, n.useMemo)(() => {
                                    if (
                                        o &&
                                        A.isTruncated &&
                                        (!r || !Object.values(r).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, i, {
                                                stringifyKwargs: r ? JSON.stringify(r) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [r, o, l, e, i, A.isTruncated]),
                                D = (0, n.useCallback)(
                                    (e) => {
                                        (E.current.width = e.contentRect.width),
                                            (E.current.height = e.contentRect.height);
                                        const u = On(m, h, E.current, d),
                                            n = u[0],
                                            a = u[1];
                                        F({ elementList: n, isTruncated: a, isTruncateFinished: !0 }), t && t(a);
                                    },
                                    [t, d, h],
                                ),
                                C = (0, n.useMemo)(() => ({ justifyContent: c, alignContent: _ }), [_, c]);
                            return (
                                ((e, u, t = !0) => {
                                    const a = (0, n.useCallback)(
                                        (e) => {
                                            const t = e[0];
                                            u && u(t);
                                        },
                                        [u],
                                    );
                                    (0, n.useEffect)(() => {
                                        if (!e.current || !t) return;
                                        const u = new nn.Z((e) => a(e));
                                        return (
                                            u.observe(e.current),
                                            () => {
                                                u.disconnect();
                                            }
                                        );
                                    }, [a, t, e]);
                                })(m, D, s),
                                a().createElement(
                                    'div',
                                    {
                                        className: b()(
                                            an.base,
                                            u,
                                            an.base__zeroPadding,
                                            s && an.base__isTruncationAvailable,
                                        ),
                                        style: C,
                                    },
                                    a().createElement('div', { className: an.unTruncated, ref: m }, h),
                                    a().createElement(
                                        Ru,
                                        {
                                            tooltipArgs: p,
                                            className: b()(
                                                an.tooltip,
                                                an[`tooltip__justify-${c}`],
                                                an[`tooltip__align-${_}`],
                                            ),
                                        },
                                        a().createElement(
                                            'div',
                                            {
                                                className: b()(
                                                    an.truncated,
                                                    !A.isTruncateFinished && s && an.truncated__hide,
                                                ),
                                                style: C,
                                            },
                                            A.isTruncateFinished && s ? A.elementList : h,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Mn = 'WarningText_base_10',
                    Nn = 'WarningText_alertIcon_8f',
                    Rn = (0, n.memo)(({ showIcon: e = !0, className: u, children: t }) =>
                        a().createElement(
                            'div',
                            { className: b()(Mn, u) },
                            e && a().createElement('div', { className: Nn }),
                            t,
                        ),
                    ),
                    Pn = 'Warning_base_68',
                    Hn = 'Warning_xpLoseBind_81',
                    Wn = 'Warning_xpLoseIcon_75',
                    jn = 'Warning_oneWay_88',
                    $n = a().memo(({ isDonor: e, xpLose: u, className: t }) =>
                        e
                            ? a().createElement(
                                  Rn,
                                  { className: b()(Pn, t) },
                                  a().createElement(
                                      'div',
                                      { className: jn },
                                      R.strings.mentoring_license.assignmentDialog.warning.oneWay(),
                                  ),
                              )
                            : a().createElement(
                                  Rn,
                                  { className: b()(Pn, t) },
                                  a().createElement(In, {
                                      text: R.strings.mentoring_license.assignmentDialog.warning.xpLose(),
                                      binding: {
                                          xpLose: a().createElement(
                                              'div',
                                              { className: Hn },
                                              $.Z5.getNumberFormat(u, $.B3.INTEGRAL),
                                              a().createElement('div', { className: Wn }),
                                          ),
                                      },
                                  }),
                              ),
                    ),
                    Vn = {
                        base: 'Content_base_2d',
                        base__withConfirm: 'Content_base__withConfirm_f9',
                        base__singleRow: 'Content_base__singleRow_b0',
                        row: 'Content_row_07',
                        row__skills: 'Content_row__skills_68',
                        column: 'Content_column_8d',
                        arrow: 'Content_arrow_b7',
                        slideIn: 'Content_slideIn_7b',
                        warningWrapper: 'Content_warningWrapper_be',
                        warning: 'Content_warning_d3',
                        xpLoseBind: 'Content_xpLoseBind_86',
                        xpLoseIcon: 'Content_xpLoseIcon_0a',
                        input: 'Content_input_51',
                    };
                function Un() {
                    return (
                        (Un = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Un.apply(null, arguments)
                    );
                }
                const Gn = (0, Qe.Pi)(() => {
                        const e = pu(),
                            u = e.model,
                            t = e.controls,
                            r = u.xpTransfer,
                            o = u.isSourceMaxXp,
                            s = u.isTargetMaxXp,
                            i = u.xpLose.get(),
                            l = u.isConfirmRequire.get(),
                            c = u.sourceTankman.get(),
                            _ = u.targetTankman.get(),
                            d = (0, n.useCallback)((e) => t.changeInput(e), [t]),
                            m = u.sourceTankmanSkills.get(),
                            E = u.targetTankmanSkills.get();
                        return a().createElement(
                            'div',
                            {
                                className: b()(
                                    Vn.base,
                                    u.computes.isSingleRow() && Vn.base__singleRow,
                                    l && Vn.base__withConfirm,
                                ),
                            },
                            a().createElement(
                                'div',
                                { className: b()(Vn.row, Vn.row__tankmen) },
                                a().createElement(
                                    kt,
                                    Un({ isDonor: !0, maxSkills: o.get() }, c, { className: Vn.column }),
                                ),
                                a().createElement(kt, Un({ maxSkills: s.get() }, _, { className: Vn.column })),
                            ),
                            a().createElement(
                                'div',
                                { className: b()(Vn.row, Vn.row__skills) },
                                a().createElement(
                                    'div',
                                    { className: Vn.column },
                                    a().createElement(st, { skills: m, tankmanID: c.invId, isDonor: !0 }),
                                    a().createElement(
                                        'div',
                                        { className: Vn.warningWrapper },
                                        a().createElement($n, { isDonor: !0, className: Vn.warning }),
                                    ),
                                ),
                                a().createElement(xu, { xpTransfer: r.get(), className: Vn.arrow }),
                                a().createElement(
                                    'div',
                                    { className: Vn.column },
                                    a().createElement(st, { skills: E, tankmanID: _.invId }),
                                    i > 0 &&
                                        a().createElement(
                                            'div',
                                            { className: Vn.warningWrapper },
                                            a().createElement($n, { xpLose: i, className: Vn.warning }),
                                        ),
                                ),
                            ),
                            l && a().createElement(tn, { onChange: d, className: Vn.input }),
                        );
                    }),
                    zn = 'Footer_base_8a',
                    qn = 'Footer_label_36',
                    Kn = 'Footer_price_fc',
                    Zn = 'Footer_priceIcon_cb',
                    Yn = a().memo(() =>
                        a().createElement(
                            'div',
                            { className: zn },
                            a().createElement(
                                'div',
                                { className: qn },
                                R.strings.mentoring_license.assignmentDialog.price(),
                            ),
                            a().createElement('div', { className: Kn }, 1),
                            a().createElement('div', { className: Zn }),
                        ),
                    ),
                    Xn = 'Title_base_47',
                    Jn = 'Title_title_bf',
                    Qn = 'Title_subtitle_2b',
                    ea = a().memo(() =>
                        a().createElement(
                            'div',
                            { className: Xn },
                            a().createElement(
                                'div',
                                { className: Jn },
                                R.strings.mentoring_license.assignmentDialog.title(),
                            ),
                            a().createElement(
                                'div',
                                { className: Qn },
                                R.strings.mentoring_license.assignmentDialog.subtitle(),
                            ),
                        ),
                    ),
                    ua = 'MentorAssignmentDialogApp_flag_a6',
                    ta = 'MentorAssignmentDialogApp_center_5d',
                    na = 'MentorAssignmentDialogApp_center__singleRow_50',
                    aa = 'MentorAssignmentDialogApp_center__withConfirm_d4',
                    ra = 'MentorAssignmentDialogApp_icon_e9',
                    oa = 'MentorAssignmentDialogApp_divider_03',
                    sa = ['onClose', 'buttons', 'isShown', 'displayFlags'];
                function ia() {
                    return (
                        (ia = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ia.apply(null, arguments)
                    );
                }
                const la = (0, Qe.Pi)((e) => {
                    let u = e.onClose,
                        t = e.buttons,
                        n = e.isShown,
                        r = e.displayFlags,
                        o = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, sa);
                    const s = pu().model,
                        i = s.isConfirmRequire.get();
                    return a().createElement(
                        ou,
                        ia({ onClose: u, buttons: t, displayFlags: r, isShown: n }, o, {
                            icon: a().createElement(cu, { nation: s.nation.get(), className: ua }),
                            title: a().createElement(ea, null),
                            content: a().createElement(Gn, null),
                            footer: a().createElement(Yn, null),
                            classNames: {
                                center: b()(ta, i && aa, s.computes.isSingleRow() && na),
                                icon: ra,
                                divider: oa,
                            },
                        }),
                    );
                });
                engine.whenReady.then(() => {
                    N().render(
                        a().createElement(
                            hu,
                            null,
                            a().createElement(I, null, a().createElement(Je, { Template: la })),
                        ),
                        document.getElementById('root'),
                    );
                });
            },
            7363: (e) => {
                'use strict';
                e.exports = React;
            },
            1533: (e) => {
                'use strict';
                e.exports = ReactDOM;
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
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], r = !0, o = 0; o < u.length; o++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
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
        (__webpack_require__.j = 2773),
        (() => {
            var e = { 2773: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, o, s] = t,
                        i = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); i < r.length; i++)
                        (a = r[i]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(8159));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
