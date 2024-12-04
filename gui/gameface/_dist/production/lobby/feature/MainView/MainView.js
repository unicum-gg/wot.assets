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
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
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
                        addModelObserver: () => d,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => y,
                        events: () => r.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => w,
                        getFontNames: () => b,
                        getScale: () => f,
                        getSize: () => m,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => B,
                        isFocused: () => C,
                        pxToRem: () => F,
                        remToPx: () => D,
                        resize: () => _,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => T,
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
                function d(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: D(u.x), y: D(u.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function f() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function D(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const b = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    y = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
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
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => r });
                const n = ['args'],
                    a = (e, u) => {
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
                    r = {
                        close(e) {
                            a('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            a(64);
                        },
                        move(e) {
                            a(16, { isMouseEvent: !0, on: e });
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
                t.d(u, {
                    Sw: () => r.Z,
                    B3: () => l,
                    Z5: () => o.Z5,
                    B0: () => s,
                    wU: () => v,
                    ry: () => F,
                    Eu: () => D,
                    SW: () => p,
                    P3: () => B,
                });
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
                var r = t(1358),
                    o = t(8613);
                let s;
                var i;
                ((i = s || (s = {}))[(i.UNDEFINED = 0)] = 'UNDEFINED'),
                    (i[(i.TOOLTIP = 1)] = 'TOOLTIP'),
                    (i[(i.POP_OVER = 2)] = 'POP_OVER'),
                    (i[(i.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (i[(i.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (i[(i.MOVE = 16)] = 'MOVE'),
                    (i[(i.CLOSE = 32)] = 'CLOSE'),
                    (i[(i.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    _ = t(3138);
                const A = ['args'];
                function g(e, u, t, n, a, r, o) {
                    try {
                        var s = e[r](o),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(n, a);
                }
                const f = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                    D = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    h = (e, u) => {
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
                    C = () => h(s.CLOSE),
                    p = () => h(s.POP_OVER, { on: !1 }),
                    B = (e, u, t, n, a = R.invalid('resId'), r) => {
                        const o = _.O.view.getViewGlobalPosition(),
                            i = t.getBoundingClientRect(),
                            l = i.x,
                            c = i.y,
                            d = i.width,
                            E = i.height,
                            m = {
                                x: _.O.view.pxToRem(l) + o.x,
                                y: _.O.view.pxToRem(c) + o.y,
                                width: _.O.view.pxToRem(d),
                                height: _.O.view.pxToRem(E),
                            };
                        h(s.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: a,
                            direction: u,
                            bbox: f(m),
                            on: !0,
                            args: r,
                        });
                    },
                    v = () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                    w = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var b = t(7572);
                const y = a.instance,
                    x = {
                        DataTracker: r.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: E,
                        makeGlobalBoundingBox: f,
                        sendMoveEvent: (e) => h(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: p,
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: B,
                        addEscapeListener: (e) => {
                            const u = (u) => w(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            w(e, C);
                        },
                        handleViewEvent: h,
                        onBindingsReady: F,
                        onLayoutReady: D,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: v,
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
                        ClickOutsideManager: y,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = x;
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
            8693: (e, u, t) => {
                'use strict';
                var n = t(6179),
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
                    d = c.width,
                    E = c.height,
                    m = Object.assign({ width: d, height: E }, l(d, E, s)),
                    _ = (0, n.createContext)(m),
                    A = ['children'],
                    g = (e) => {
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
                            })(e, A);
                        const a = (0, n.useContext)(_),
                            o = a.extraLarge,
                            s = a.large,
                            i = a.medium,
                            l = a.small,
                            c = a.extraSmall,
                            d = a.extraLargeWidth,
                            E = a.largeWidth,
                            m = a.mediumWidth,
                            g = a.smallWidth,
                            f = a.extraSmallWidth,
                            F = a.extraLargeHeight,
                            D = a.largeHeight,
                            h = a.mediumHeight,
                            C = a.smallHeight,
                            p = a.extraSmallHeight,
                            B = { extraLarge: F, large: D, medium: h, small: C, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && o) return u;
                            if (t.large && s) return u;
                            if (t.medium && i) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && d) return r(u, t, B);
                            if (t.largeWidth && E) return r(u, t, B);
                            if (t.mediumWidth && m) return r(u, t, B);
                            if (t.smallWidth && g) return r(u, t, B);
                            if (t.extraSmallWidth && f) return r(u, t, B);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && F) return u;
                                if (t.largeHeight && D) return u;
                                if (t.mediumHeight && h) return u;
                                if (t.smallHeight && C) return u;
                                if (t.extraSmallHeight && p) return u;
                            }
                        }
                        return null;
                    };
                (g.defaultProps = {
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
                    (0, n.memo)(g);
                const f = ({ children: e }) => {
                    const u = (0, n.useContext)(_),
                        t = (0, n.useState)(u),
                        r = t[0],
                        i = t[1],
                        c = (0, n.useCallback)((e, u) => {
                            const t = o.O.view.pxToRem(e),
                                n = o.O.view.pxToRem(u);
                            i(Object.assign({ width: t, height: n }, l(t, n, s)));
                        }, []),
                        d = (0, n.useCallback)(() => {
                            const e = o.O.client.getSize('px');
                            c(e.width, e.height);
                        }, [c]);
                    ((e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        o.O.client.events.on('clientResized', c), o.O.client.events.on('self.onScaleUpdated', d);
                    }),
                        (0, n.useEffect)(
                            () => () => {
                                o.O.client.events.off('clientResized', c),
                                    o.O.client.events.off('self.onScaleUpdated', d);
                            },
                            [c, d],
                        );
                    const E = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                    return a().createElement(_.Provider, { value: E }, e);
                };
                var F = t(6483),
                    D = t.n(F),
                    h = t(926),
                    C = t.n(h);
                let p, B, v;
                !(function (e) {
                    (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(p || (p = {})),
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
                    })(v || (v = {}));
                const w = () => {
                        const e = (0, n.useContext)(_),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
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
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
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
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    b = ['children', 'className'];
                function y() {
                    return (
                        (y = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        y.apply(null, arguments)
                    );
                }
                const x = {
                        [B.ExtraSmall]: '',
                        [B.Small]: C().SMALL_WIDTH,
                        [B.Medium]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH}`,
                        [B.Large]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH}`,
                        [B.ExtraLarge]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH} ${C().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [v.ExtraSmall]: '',
                        [v.Small]: C().SMALL_HEIGHT,
                        [v.Medium]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT}`,
                        [v.Large]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT} ${C().EXTRA_LARGE_HEIGHT}`,
                    },
                    S = {
                        [p.ExtraSmall]: '',
                        [p.Small]: C().SMALL,
                        [p.Medium]: `${C().SMALL} ${C().MEDIUM}`,
                        [p.Large]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE}`,
                        [p.ExtraLarge]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE} ${C().EXTRA_LARGE}`,
                    },
                    O = (e) => {
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
                            })(e, b);
                        const r = w(),
                            o = r.mediaWidth,
                            s = r.mediaHeight,
                            i = r.mediaSize;
                        return a().createElement('div', y({ className: D()(t, x[o], T[s], S[i]) }, n), u);
                    },
                    k = ['children'],
                    P = (e) => {
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
                            })(e, k);
                        return a().createElement(f, null, a().createElement(O, t, u));
                    };
                var I = t(493),
                    N = t.n(I);
                let L, M;
                !(function (e) {
                    (e.CLOSED = 'closed'),
                        (e.OPENED = 'opened'),
                        (e.READY_TO_OPEN = 'readyToOpen'),
                        (e.EXPIRED = 'expired');
                })(L || (L = {})),
                    (function (e) {
                        (e.NONE = 'none'), (e.NY = 'ny'), (e.NY_EVENT = 'nyEvent'), (e.WDR = 'wdr');
                    })(M || (M = {}));
                var H = t(5521),
                    W = t(9916);
                const V = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function $(e = H.n.NONE, u = V, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== H.n.NONE)
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
                const G = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    U = (e) => {
                        (0, n.useEffect)(() => e, []);
                    };
                function j() {
                    const e = (0, n.useRef)(0);
                    return (
                        U(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, n.useMemo)(
                            () => ({
                                run: (u, t) => {
                                    window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            (e.current = 0), u();
                                        }, t));
                                },
                                clear: () => {
                                    window.clearTimeout(e.current), (e.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                function q(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const z = {
                    playHighlight() {
                        q('highlight');
                    },
                    playClick() {
                        q('play');
                    },
                    playYes() {
                        q('yes1');
                    },
                };
                var Y = t(9174),
                    K = t(3403);
                const X = (e) => {
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
                };
                let Q;
                !(function (e) {
                    (e[(e.Pending = 0)] = 'Pending'),
                        (e[(e.Success = 1)] = 'Success'),
                        (e[(e.Failure = 2)] = 'Failure');
                })(Q || (Q = {}));
                const Z = (e) => {
                    const u = (0, n.useState)(Q.Pending),
                        t = u[0],
                        a = u[1];
                    return (
                        (0, n.useEffect)(() => {
                            const u = { errors: 0, loaded: 0 },
                                t = () => {
                                    u.errors + u.loaded === e.length
                                        ? a(u.errors ? Q.Failure : Q.Success)
                                        : a(Q.Pending);
                                };
                            return X(() => {
                                e.forEach((e) => {
                                    const n = new Image();
                                    (n.src = e),
                                        n.addEventListener('load', () => {
                                            (u.loaded += 1), t();
                                        }),
                                        n.addEventListener('error', () => {
                                            (u.errors += 1), t();
                                        });
                                });
                            });
                        }, [e]),
                        t
                    );
                };
                Z.State = Q;
                const J = Object.assign({}, p, { UltraLarge: 2560, UltraSmall: 0 }),
                    ee = () => {
                        const e = w(),
                            u = e.mediaSize,
                            t = e.remScreenWidth,
                            n = e.remScreenHeight;
                        return {
                            mediaSize:
                                ((a = n),
                                t < B.ExtraSmall || a < v.ExtraSmall
                                    ? J.UltraSmall
                                    : ((e, u) => e >= 2560 && u >= 1440)(t, n)
                                      ? J.UltraLarge
                                      : u),
                        };
                        var a;
                    },
                    ue = { [J.UltraLarge]: 'mediaUltraLarge', [J.UltraSmall]: 'mediaUltraSmall' };
                let te;
                function ne() {}
                function ae() {
                    return !1;
                }
                function re(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function oe(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                !(function (e) {
                    e.OPEN_DOOR = 'openDoor';
                })(te || (te = {})),
                    console.log;
                const se = (e) => (0 === e ? window : window.subViews.get(e)),
                    ie = () => (e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: s, children: i, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    d = (t, n, a) => {
                                        var r;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = se,
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
                                                                                    return oe(e, u);
                                                                                var t = {}.toString
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
                                                                                          ? oe(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var n = 0;
                                                                        return function () {
                                                                            return n >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[n++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(a.keys());
                                                            !(e = t()).done;

                                                        )
                                                            r(e.value, u);
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
                                            d = (e) => c.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = Y.LO.box(n, { equals: ae });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Y.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = Y.LO.box(n, { equals: ae });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Y.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, u) => ((e[u] = Y.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Y.aD)((u) => {
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
                                                                    (e, [u, t]) => ((e[t] = Y.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Y.aD)((e) => {
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
                                                cleanup: d,
                                            }),
                                            m = { mode: t, model: E, externalModel: i, cleanup: d };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && a ? a.controls(m) : u(m),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    E = (0, n.useRef)(!1),
                                    m = (0, n.useState)(r),
                                    _ = m[0],
                                    A = m[1],
                                    g = (0, n.useState)(() => d(r, s, l)),
                                    f = g[0],
                                    F = g[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        E.current ? F(d(_, s, l)) : (E.current = !0);
                                    }, [l, _, s]),
                                    (0, n.useEffect)(() => {
                                        A(r);
                                    }, [r]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            f.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [f],
                                    ),
                                    a().createElement(t.Provider, { value: f }, i)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    };
                const le = function (e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                };
                function ce(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                const de = (e, u) =>
                    Object.keys(e).length === Object.keys(u).length &&
                    Object.keys(e).every((t) => Object.prototype.hasOwnProperty.call(u, t) && e[t] === u[t]);
                var Ee = t(3946);
                const me = ie()(
                        ({ observableModel: e, externalModel: u, readByPath: t, cleanup: n }) => {
                            const a = () => {
                                    return (
                                        (e = t('doors')),
                                        (u = ({ dayId: e }) => e),
                                        (n = (e) => Object.assign({}, e)),
                                        (function (e, u, t) {
                                            if (Array.isArray(e)) return e.reduce(u, t);
                                            let n = t;
                                            for (let t = 0; t < e.length; t++) n = u(n, le(e, t));
                                            return n;
                                        })(e, (e, t) => ((e[u(t)] = n(t)), e), {})
                                    );
                                    var e, u, n;
                                },
                                r = e.primitives(['startTime', 'postEventStartDate', 'postEventEndDate']),
                                o = e.primitives(['isCalendarCompleted']).isCalendarCompleted,
                                s = Y.LO.box(o.get()),
                                i = Object.assign(
                                    {
                                        doors: Y.LO.box(a()),
                                        progression: e.primitives(['isCompleted'], 'progressionRewards'),
                                        eventBus: Y.LO.box(null),
                                        progressionRewards: e.array('progressionRewards.rewards'),
                                    },
                                    e.primitives([
                                        'statePhase',
                                        'showBlur',
                                        'doorOpenBlocked',
                                        'isAnimationEnabled',
                                        'isIntroScreenVisible',
                                        'holidayOpsStartTime',
                                    ]),
                                    e.primitives(['isWalletAvailable'], 'balance'),
                                );
                            u.subscribe(
                                (0, Y.aD)(() => i.doors.set(a())),
                                'doors',
                            ),
                                u.subscribe(
                                    (0, Y.aD)(() => {
                                        const e = t('event');
                                        i.eventBus.set({
                                            eventType: e.eventType,
                                            payload: e.payload ? JSON.parse(e.payload) : null,
                                        });
                                    }),
                                    'event',
                                ),
                                n(
                                    (0, Y.U5)(
                                        () => o.get(),
                                        (0, Y.aD)(() => s.set(o.get())),
                                        { delay: 1500 },
                                    ),
                                );
                            const l = (0, Ee.Om)(
                                    (e) => {
                                        const u = i.doors.get()[e];
                                        if (!u) throw new Error(`Door with id ${e} not found`);
                                        return u;
                                    },
                                    { equals: de },
                                ),
                                c = (0, Ee.Om)(() =>
                                    Object.values(i.doors.get()).reduce(
                                        (e, u) =>
                                            u.doorState !== L.READY_TO_OPEN ? e : !e || u.dayId < e ? u.dayId : e,
                                        void 0,
                                    ),
                                ),
                                d = (0, Ee.Om)(() => o.get() && s.get()),
                                E = (0, Ee.Om)(() => ({
                                    startDate: r.startTime.get(),
                                    endDate: r.postEventStartDate.get() - 86400,
                                })),
                                m = (0, Ee.Om)(() => ({
                                    startDate: r.postEventStartDate.get(),
                                    endDate: r.postEventEndDate.get(),
                                }));
                            return Object.assign({}, i, {
                                computes: {
                                    door: l,
                                    activeDay: c,
                                    eventCompleted: d,
                                    activePhase: E,
                                    postActivePhase: m,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            animationCompleted: e.createCallbackNoArgs('onAnimationCompleted'),
                            openDoor: e.createCallback((e) => ({ dayId: e }), 'onOpenDoorAnimStarted'),
                            showReward: e.createCallback((e) => ({ dayId: e }), 'onOpenDoorAnimEnded'),
                            showPurchaseDialog: e.createCallback((e) => ({ dayId: e }), 'onShowPurchaseDialog'),
                            progressionRewardCompleted: e.createCallbackNoArgs(
                                'progressionRewards.onProgressionRewardCompleted',
                            ),
                            openDownloadLink: e.createCallbackNoArgs('onOpenDownloadLink'),
                            infoClick: e.createCallbackNoArgs('onInfoClick'),
                        }),
                    ),
                    _e = me[0],
                    Ae = me[1],
                    ge = () =>
                        (() => {
                            const e = (0, n.useMemo)(() => ({}), []),
                                u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                t = (e, t) => (u(e).set(t, t), () => a(e, t)),
                                a = (e, t) => {
                                    u(e).delete(t);
                                },
                                r = (e, ...t) => {
                                    for (
                                        var n,
                                            a = (function (e, u) {
                                                var t =
                                                    ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                    e['@@iterator'];
                                                if (t) return (t = t.call(e)).next.bind(t);
                                                if (
                                                    Array.isArray(e) ||
                                                    (t = (function (e, u) {
                                                        if (e) {
                                                            if ('string' == typeof e) return re(e, u);
                                                            var t = {}.toString.call(e).slice(8, -1);
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
                                                                      ? re(e, u)
                                                                      : void 0
                                                            );
                                                        }
                                                    })(e)) ||
                                                    (u && e && 'number' == typeof e.length)
                                                ) {
                                                    t && (e = t);
                                                    var n = 0;
                                                    return function () {
                                                        return n >= e.length
                                                            ? { done: !0 }
                                                            : { done: !1, value: e[n++] };
                                                    };
                                                }
                                                throw new TypeError(
                                                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                );
                                            })(u(e).values());
                                        !(n = a()).done;

                                    )
                                        (0, n.value)(...t);
                                };
                            return (0, n.useMemo)(() => ({ on: t, off: a, trigger: r }), []);
                        })(),
                    fe = a().createContext({ on: () => ne, off: ne, trigger: ne }),
                    Fe = (0, K.Pi)(({ children: e }) => {
                        const u = ge(),
                            t = Ae().model;
                        return (
                            G(() =>
                                (0, Y.U5)(
                                    () => t.eventBus.get(),
                                    (e) => {
                                        if (e && e.eventType === te.OPEN_DOOR)
                                            return u.trigger('onOpenDoor', e.payload.doorId);
                                    },
                                ),
                            ),
                            a().createElement(fe.Provider, { value: u }, e)
                        );
                    }),
                    De = () => (0, n.useContext)(fe),
                    he = {
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
                let Ce, pe;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Ce || (Ce = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(pe || (pe = {}));
                const Be = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: o,
                    mixClass: s,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: E,
                    onMouseUp: m,
                    onMouseLeave: _,
                    onClick: A,
                }) => {
                    const g = (0, n.useRef)(null),
                        f = (0, n.useState)(t),
                        F = f[0],
                        h = f[1],
                        C = (0, n.useState)(!1),
                        p = C[0],
                        B = C[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                F && null !== g.current && !g.current.contains(e.target) && h(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [F]),
                        (0, n.useEffect)(() => {
                            h(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: g,
                                className: D()(
                                    he.base,
                                    he[`base__${r}`],
                                    o && he.base__disabled,
                                    u && he[`base__${u}`],
                                    F && he.base__focus,
                                    p && he.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    o || (null !== i && q(i), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    o || (m && m(e), B(!1));
                                },
                                onMouseDown: function (e) {
                                    o ||
                                        (null !== l && q(l),
                                        E && E(e),
                                        t && (o || (g.current && (g.current.focus(), h(!0)))),
                                        B(!0));
                                },
                                onMouseLeave: function (e) {
                                    o || (_ && _(e), B(!1));
                                },
                                onClick: function (e) {
                                    o || (A && A(e));
                                },
                            },
                            r !== Ce.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: he.back }),
                                    a().createElement('span', { className: he.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: D()(he.state, he.state__default) },
                                a().createElement('span', { className: he.stateDisabled }),
                                a().createElement('span', { className: he.stateHighlightHover }),
                                a().createElement('span', { className: he.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: he.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Be.defaultProps = { type: Ce.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const ve = Be;
                var we = t(7030);
                const be = [
                        ['1', '9', '7', '7', '4', '22', '15', '15', '8'],
                        ['1', '16', '11', '29', '2', '22', '10', '30', '8'],
                        ['3', '26', '14', '29', '25', '25', '6', '28', '28'],
                        ['13', '19', '14', '23', '25', '25', '20', '24', '18'],
                        ['21', '21', '17', '27', '5', '12', '31', '31', '31'],
                    ],
                    ye = be.reduce(
                        (e, u, t) =>
                            u.reduce(
                                (e, u, n) => (
                                    e[u]
                                        ? e[u].start.x === n
                                            ? (e[u].end.y = t)
                                            : e[u].start.y === t && (e[u].end.x = n)
                                        : (e[u] = { start: { x: n, y: t }, end: { x: n, y: t } }),
                                    e
                                ),
                                e,
                            ),
                        {},
                    ),
                    xe = Object.fromEntries(
                        Object.keys(ye).map((e) => [
                            e,
                            {
                                x: ye[e].start.x,
                                y: ye[e].start.y,
                                width: ye[e].end.x - ye[e].start.x + 1,
                                height: ye[e].end.y - ye[e].start.y + 1,
                            },
                        ]),
                    ),
                    Te =
                        (J.UltraSmall,
                        J.ExtraSmall,
                        J.Small,
                        J.Medium,
                        J.Large,
                        J.ExtraLarge,
                        J.UltraLarge,
                        'Calendar_base_e0'),
                    Se = 'Calendar_base__layer_52';
                var Re = t(2558),
                    Oe = t(8934);
                const ke = (e, u) => e.toDateString() === u.toDateString();
                let Pe;
                !(function (e) {
                    (e.DayMonthNumeric = 'dayMonthNumeric'),
                        (e.DayMonthFull = 'dayMonthFull'),
                        (e.DayMonthFullTime = 'dayMonthFullTime'),
                        (e.DayMonthAbbreviated = 'dayMonthAbbreviated'),
                        (e.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
                        (e.ShortDate = 'shortDate'),
                        (e.ShortTime = 'ShortTime'),
                        (e.ShortDateTime = 'ShortDateTime'),
                        (e.FullDate = 'fullDate'),
                        (e.FullTime = 'fullTime'),
                        (e.FullDateTime = 'fullDateTime');
                })(Pe || (Pe = {}));
                var Ie = t(1281);
                let Ne;
                function Le(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Ne || (Ne = {}));
                const Me = (e) => e.replace(/&nbsp;/g, ' '),
                    He = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    We = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Ve = (e, u, t = Ne.left) => e.split(u).reduce(t === Ne.left ? He : We, []),
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
                    Ge = ['zh_cn', 'zh_sg', 'zh_tw'];
                var Ue = t(8613);
                const je = 3600,
                    qe = (Date.now(), Ue.Ew.getRegionalDateTime);
                Ue.Ew.getFormattedDateTime;
                const ze = (e, u = !0) => qe(e, Pe.DayMonthFull, u),
                    Ye = (e, u) => ({ startDate: qe(e, Pe.DayMonthFull, !1), endDate: qe(u, Pe.DayMonthFull, !1) });
                let Ke;
                !(function (e) {
                    (e.ACTIVE_PHASE = 'activePhase'), (e.POST_ACTIVE_PHASE = 'postActivePhase');
                })(Ke || (Ke = {}));
                const Xe = (0, K.Pi)(({ dayId: e }) => {
                        const u = Ae().model,
                            t = u.computes.door(e),
                            n = t.isEnoughResources,
                            r = t.price;
                        return u.statePhase.get() === Ke.POST_ACTIVE_PHASE && Boolean(r)
                            ? a().createElement(
                                  'div',
                                  { className: D()('DoorCurrency_base_e2', !n && 'DoorCurrency_base__notEnough_61') },
                                  a().createElement('span', null, r),
                                  a().createElement('img', {
                                      src: R.images.advent_calendar.gui.maps.icons.mainView.resources(),
                                      alt: '',
                                  }),
                              )
                            : null;
                    }),
                    Qe = {
                        doorNumber: 'DoorDay_doorNumber_4f',
                        doorNumber__highlighted: 'DoorDay_doorNumber__highlighted_b4',
                        doorNumber__closed: 'DoorDay_doorNumber__closed_c0',
                        doorNumber__expired: 'DoorDay_doorNumber__expired_35',
                        slideInFadeIn: 'DoorDay_slideInFadeIn_c5',
                        fadeOut: 'DoorDay_fadeOut_19',
                        fadeIn: 'DoorDay_fadeIn_3a',
                        fadeInWithScale: 'DoorDay_fadeInWithScale_e8',
                        slideUp: 'DoorDay_slideUp_c4',
                        scale: 'DoorDay_scale_c6',
                        spin: 'DoorDay_spin_35',
                        blink: 'DoorDay_blink_f6',
                        slideInNotification: 'DoorDay_slideInNotification_aa',
                    },
                    Ze = (0, K.Pi)(({ dayId: e }) => {
                        const u = Ae().model.computes.door(e).doorState,
                            t = 25 === e;
                        return a().createElement(
                            'span',
                            { className: D()(Qe.doorNumber, t && Qe.doorNumber__highlighted, Qe[`doorNumber__${u}`]) },
                            e,
                        );
                    }),
                    Je = ['children', 'className'];
                function eu() {
                    return (
                        (eu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        eu.apply(null, arguments)
                    );
                }
                const uu = a().forwardRef((e, u) => {
                        let t = e.children,
                            n = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Je);
                        return a().createElement(
                            'div',
                            eu({ className: D()('DoorFrontSide_base_bd', n), ref: u }, r),
                            a().createElement('div', { className: 'DoorFrontSide_art_52' }),
                            t,
                        );
                    }),
                    tu = {
                        [M.NONE]: '',
                        [M.NY]: R.images.advent_calendar.gui.maps.icons.mainView.marks.ny(),
                        [M.NY_EVENT]: R.images.advent_calendar.gui.maps.icons.mainView.marks.nyEvent(),
                        [M.WDR]: R.images.advent_calendar.gui.maps.icons.mainView.marks.wdr(),
                    },
                    nu = (0, K.Pi)(({ dayId: e }) => {
                        var u;
                        const t = Ae().model,
                            n = xe[e],
                            r = [
                                t.doors.get()[null == (u = be[n.y]) ? void 0 : u[n.x]],
                                ...Array.from(new Array(n.width + 1)).map((e, u) => {
                                    var a;
                                    return t.doors.get()[null == (a = be[n.y + n.height]) ? void 0 : a[n.x - 1 + u]];
                                }),
                                ...Array.from(new Array(n.height)).map((e, u) => {
                                    var a;
                                    return t.doors.get()[null == (a = be[n.y + u]) ? void 0 : a[n.x - 1]];
                                }),
                            ]
                                .filter(Boolean)
                                .filter((e) => e.mark !== M.NONE);
                        return a().createElement(
                            'div',
                            { className: 'DoorMark_base_41' },
                            a().createElement(
                                'div',
                                { className: 'DoorMark_overlay_79' },
                                r.map((e, u) => {
                                    const t = xe[e.dayId];
                                    return a().createElement('div', {
                                        key: u,
                                        className: 'DoorMark_mark_95',
                                        style: {
                                            '--mark-x-pos': t.x + t.width,
                                            '--mark-y-pos': t.y,
                                            backgroundImage: `url(${tu[e.mark]})`,
                                        },
                                    });
                                }),
                            ),
                        );
                    }),
                    au = [
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
                function ru(e) {
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
                const ou = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: W.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    su = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            f = e.targetId,
                            F = void 0 === f ? 0 : f,
                            D = e.onShow,
                            h = e.onHide,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, au);
                        const p = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            B = (0, n.useMemo)(
                                () =>
                                    F ||
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
                                [F],
                            ),
                            v = (0, n.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (ou(t, _, { isMouseEvent: !0, on: !0, arguments: ru(a) }, B),
                                    D && D(),
                                    (p.current.isVisible = !0));
                            }, [t, _, a, B, D]),
                            w = (0, n.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        ou(t, _, { on: !1 }, B),
                                        p.current.isVisible && h && h(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, _, B, h]),
                            b = (0, n.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = p.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', b, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', b, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === g && w();
                            }, [g, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            ),
                            g
                                ? (0, n.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((y = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((p.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          r && r(e),
                                                          y && y(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  w(), null == o || o(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === E && w(), null == i || i(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === E && w(), null == s || s(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          C,
                                      ),
                                  )
                                : u
                        );
                        var y;
                    },
                    iu = ({ children: e, tooltipArgs: u }) =>
                        u
                            ? a().createElement(
                                  su,
                                  {
                                      args: { payload: JSON.stringify(u) },
                                      contentId:
                                          R.views.advent_calendar.lobby.feature.tooltips.AdventCalendarSimpleTooltip(
                                              'resId',
                                          ),
                                  },
                                  e,
                              )
                            : e,
                    lu = ['children', 'className', 'style', 'tooltipArgs', 'dayId', 'doorState'];
                function cu() {
                    return (
                        (cu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        cu.apply(null, arguments)
                    );
                }
                const du = {
                        Wrapper: (e) => {
                            let u = e.children,
                                t = e.className,
                                n = e.style,
                                r = e.tooltipArgs,
                                o = e.dayId,
                                s = e.doorState,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(e, lu);
                            const l = xe[o],
                                c = a().createElement(
                                    'div',
                                    cu(
                                        {
                                            className: D()('DoorWrapper_base_a7', t, `door-${l.width}x${l.height}`),
                                            style: Object.assign(
                                                {
                                                    width: `calc(${l.width} * var(--width-ratio))`,
                                                    height: `calc(${l.height} * var(--height-ratio))`,
                                                    top: `calc(${l.y} * var(--height-ratio))`,
                                                    left: `calc(${l.x} * var(--width-ratio))`,
                                                    '--door-img': `url("R.images.advent_calendar.gui.maps.icons.mainView.${s}.c_160x${l.width}x${l.height}")`,
                                                    '--x-pos': l.x,
                                                    '--y-pos': l.y,
                                                },
                                                n,
                                            ),
                                        },
                                        i,
                                    ),
                                    u,
                                );
                            return r ? a().createElement(iu, { tooltipArgs: r }, c) : c;
                        },
                        FrontSide: uu,
                        Day: Ze,
                        Currency: Xe,
                        Mark: nu,
                    },
                    Eu = R.strings.advent_calendar.mainView.tooltip,
                    mu = (e, u) => {
                        if (!u) return { body: R.strings.advent_calendar.server_error() };
                        const t = new Date(1e3 * e),
                            n = { date: ze(e), time: ((a = e), qe(a, Pe.ShortTime)) };
                        var a;
                        return ke(new Date(), t)
                            ? { body: Eu.availableToday(), bindings: n }
                            : ke(new Date(Date.now() + 864e5), t)
                              ? { body: Eu.availableTomorrow(), bindings: n }
                              : {
                                    header: Eu.availableSometime.title(),
                                    body: Eu.availableSometime.description(),
                                    bindings: n,
                                };
                    },
                    _u = (0, K.Pi)(({ door: e }) => {
                        const u = Ae().model;
                        return a().createElement(
                            du.Wrapper,
                            {
                                dayId: e.dayId,
                                doorState: e.doorState,
                                tooltipArgs: mu(e.openTimeStamp, u.isWalletAvailable.get()),
                            },
                            a().createElement(
                                du.FrontSide,
                                null,
                                a().createElement(du.Day, { dayId: e.dayId }),
                                a().createElement(du.Currency, { dayId: e.dayId }),
                                a().createElement(du.Mark, { dayId: e.dayId }),
                            ),
                        );
                    }),
                    Au = R.strings.advent_calendar.mainView.tooltip,
                    gu = (0, K.Pi)(({ door: e }) => {
                        const u = Ae().model,
                            t = (() => {
                                if (!u.isWalletAvailable.get())
                                    return { body: R.strings.advent_calendar.server_error() };
                                switch (u.statePhase.get()) {
                                    case Ke.ACTIVE_PHASE:
                                        return {
                                            header: Au.expired.title(),
                                            body: Au.expired.description(),
                                            bindings: Ye(
                                                u.computes.postActivePhase().startDate,
                                                u.computes.postActivePhase().endDate,
                                            ),
                                        };
                                    case Ke.POST_ACTIVE_PHASE:
                                        if (e.isEnoughResources) {
                                            const e = u.computes.activeDay();
                                            if (!e) return;
                                            return {
                                                header: Au.enoughResources.title(),
                                                body: Au.enoughResources.description(),
                                                bindings: { day: e.toString() },
                                            };
                                        }
                                        return {
                                            header: Au.notEnoughResources.title(),
                                            body: Au.notEnoughResources.description(),
                                        };
                                }
                            })();
                        return a().createElement(
                            du.Wrapper,
                            { dayId: e.dayId, doorState: e.doorState, tooltipArgs: t },
                            a().createElement(
                                du.FrontSide,
                                null,
                                a().createElement(du.Day, { dayId: e.dayId }),
                                a().createElement(du.Currency, { dayId: e.dayId }),
                                a().createElement(du.Mark, { dayId: e.dayId }),
                            ),
                        );
                    });
                var fu = t(6112);
                const Fu = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function Du() {
                    return (
                        (Du = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Du.apply(null, arguments)
                    );
                }
                const hu = (0, n.forwardRef)(function (e, u) {
                        let t = e.src,
                            r = e.className,
                            s = e.autoplay,
                            i = void 0 !== s && s,
                            l = e.style,
                            c = e.loop,
                            d = void 0 !== c && c,
                            E = e.isPrebufferKeyframes,
                            m = e.keyframesNameConfig,
                            _ = e.onClick,
                            A = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Fu);
                        const g = u,
                            f = (0, n.useRef)(null);
                        return (
                            G(() =>
                                o.O.view.events.onDisplayChanged((e, u) => {
                                    var t, n;
                                    u === fu.W.hidden && (null == (t = f.current) || t.pause()),
                                        u === fu.W.shown && (null == (n = f.current) || n.play());
                                }),
                            ),
                            (0, n.useEffect)(
                                () =>
                                    X(() => {
                                        const e = f.current;
                                        if (!g || !e || !E)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const u = e.cohGetKeyframeTimestamps();
                                        u.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              u.map((u) => {
                                                  null == e || e.cohPrebufferKeyframe(u);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [E, g],
                            ),
                            (0, n.useEffect)(() => {
                                if (g && f.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: ne,
                                        },
                                        u = () => {
                                            let u = 0;
                                            const t = (function (t) {
                                                    let n = 0;
                                                    return [
                                                        function t() {
                                                            (() => {
                                                                if (f.current) {
                                                                    const t = f.current,
                                                                        n = t.currentTime,
                                                                        a = t.duration;
                                                                    if (
                                                                        (u !== n &&
                                                                            (e.changeTimeHandlers.forEach((e) =>
                                                                                e({ currentTime: n, duration: a }),
                                                                            ),
                                                                            (u = n)),
                                                                        f.current.paused || !g || !E)
                                                                    )
                                                                        return;
                                                                    const r = f.current.cohGetKeyframeTimestamps();
                                                                    r.forEach((u, t) => {
                                                                        n > r[t] - 0.02 &&
                                                                            n < r[t] &&
                                                                            e.changeKeyframeHandlers.forEach((e) => {
                                                                                const n = Object.keys(
                                                                                    null != m ? m : {},
                                                                                )[t];
                                                                                return e({
                                                                                    time: u,
                                                                                    name: `${m ? n : `Point_${t}`}`,
                                                                                });
                                                                            });
                                                                    });
                                                                }
                                                            })(),
                                                                (n = requestAnimationFrame(t));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(n);
                                                        },
                                                    ];
                                                })(),
                                                n = t[0],
                                                a = t[1];
                                            return n(), a;
                                        };
                                    e.changeTimeLoop = u();
                                    const t = (u) => (
                                            e.changeTimeHandlers.push(u),
                                            () => {
                                                const t = e.changeTimeHandlers,
                                                    n = t.indexOf(u);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(n, 1);
                                            }
                                        ),
                                        n = (u) => (
                                            e.changeKeyframeHandlers.push(u),
                                            () => {
                                                const t = e.changeKeyframeHandlers,
                                                    n = t.indexOf(u);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : t.splice(n, 1);
                                            }
                                        ),
                                        a = () => {
                                            var e;
                                            return null == (e = f.current) ? void 0 : e.currentTime;
                                        },
                                        r = () => {
                                            var e;
                                            return null == (e = f.current) ? void 0 : e.duration;
                                        },
                                        o = (e) => {
                                            var u, t;
                                            f.current &&
                                                (f.current.currentTime =
                                                    ((u = f.current.duration), (t = e) < 0 ? 0 : t > u ? u : t));
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = f.current) ? void 0 : e.play();
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = f.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            i(), o(0);
                                        },
                                        c = () => {
                                            var e, u;
                                            return null !=
                                                (e = null == (u = f.current) ? void 0 : u.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        d = (e) => {
                                            o(e), s();
                                        },
                                        _ = (e) => {
                                            o(e), i();
                                        },
                                        A = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        F = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = f.current) || t.addEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = f.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        },
                                        D = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = f.current) || t.removeEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = f.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        };
                                    return (
                                        (g.current = {
                                            on: F,
                                            off: D,
                                            play: s,
                                            pause: i,
                                            stop: l,
                                            cleanup: A,
                                            getCurrentTime: a,
                                            getDuration: r,
                                            getCachedKeyframes: c,
                                            goToAndPlay: d,
                                            goToAndStop: _,
                                            setCurrentTime: o,
                                            domRef: f.current,
                                            onChangeTime: t,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            A(), (g.current = null);
                                        }
                                    );
                                }
                            }, [m, g, E]),
                            (0, n.useEffect)(() => {
                                f.current && i && f.current.play();
                            }, [i, d]),
                            (0, n.useEffect)(() => {
                                if (f.current)
                                    return () => {
                                        f.current && f.current.pause();
                                    };
                            }, []),
                            a().createElement(
                                'video',
                                Du({ src: t, className: r, style: l, loop: d, ref: f, onClick: _ }, A),
                            )
                        );
                    }),
                    Cu = (0, n.memo)(hu),
                    pu = (e) => Math.sin((e * Math.PI) / 2),
                    Bu = (e) => 1 - Math.cos((e * Math.PI) / 2);
                let vu;
                !(function (e) {
                    (e.S1x1 = 's1x1'), (e.S2x1 = 's2x1'), (e.S3x1 = 's3x1'), (e.S1x2 = 's1x2'), (e.S2x2 = 's2x2');
                })(vu || (vu = {}));
                const wu = {
                        width: 80,
                        height: 80,
                        frameCount: 24,
                        chunk: { count: 1, rows: 3, columns: 8 },
                        getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.tearOff',
                    },
                    bu = {
                        width: 80,
                        height: 80,
                        frameCount: 16,
                        chunk: { count: 1, rows: 4, columns: 4 },
                        getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.hover',
                    },
                    yu = [
                        wu,
                        bu,
                        {
                            width: 150,
                            height: 150,
                            frameCount: 14,
                            chunk: { count: 1, rows: 2, columns: 7 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x1_1',
                        },
                        {
                            width: 300,
                            height: 300,
                            frameCount: 8,
                            chunk: { count: 1, rows: 2, columns: 4 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x1_2',
                        },
                        {
                            width: 550,
                            height: 550,
                            frameCount: 8,
                            chunk: { count: 1, rows: 2, columns: 4 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x1_3',
                        },
                    ],
                    xu = [
                        wu,
                        bu,
                        {
                            width: 150,
                            height: 150,
                            frameCount: 14,
                            chunk: { count: 1, rows: 2, columns: 7 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x1_1',
                        },
                        {
                            width: 300,
                            height: 300,
                            frameCount: 7,
                            chunk: { count: 1, rows: 1, columns: 7 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x1_2',
                        },
                        {
                            width: 600,
                            height: 600,
                            frameCount: 7,
                            chunk: { count: 1, rows: 1, columns: 7 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x1_3',
                        },
                        {
                            width: 950,
                            height: 800,
                            frameCount: 5,
                            chunk: { count: 1, rows: 1, columns: 5 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x1_4',
                        },
                    ],
                    Tu = [
                        wu,
                        bu,
                        {
                            width: 150,
                            height: 150,
                            frameCount: 14,
                            chunk: { count: 1, rows: 2, columns: 7 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open3x1_1',
                        },
                        {
                            width: 300,
                            height: 300,
                            frameCount: 7,
                            chunk: { count: 1, rows: 1, columns: 7 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open3x1_2',
                        },
                        {
                            width: 600,
                            height: 500,
                            frameCount: 8,
                            chunk: { count: 1, rows: 2, columns: 4 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open3x1_3',
                        },
                        {
                            width: 900,
                            height: 700,
                            frameCount: 5,
                            chunk: { count: 1, rows: 1, columns: 5 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open3x1_4',
                        },
                        {
                            width: 1270,
                            height: 1010,
                            frameCount: 5,
                            chunk: { count: 1, rows: 1, columns: 5 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open3x1_5',
                        },
                    ],
                    Su = [
                        wu,
                        bu,
                        {
                            width: 150,
                            height: 150,
                            frameCount: 15,
                            chunk: { count: 1, rows: 3, columns: 5 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x2_1',
                        },
                        {
                            width: 300,
                            height: 300,
                            frameCount: 8,
                            chunk: { count: 1, rows: 2, columns: 4 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x2_2',
                        },
                        {
                            width: 600,
                            height: 600,
                            frameCount: 6,
                            chunk: { count: 1, rows: 2, columns: 3 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x2_3',
                        },
                        {
                            width: 850,
                            height: 750,
                            frameCount: 4,
                            chunk: { count: 1, rows: 2, columns: 2 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open1x2_4',
                        },
                    ],
                    Ru = [
                        wu,
                        bu,
                        {
                            width: 150,
                            height: 150,
                            frameCount: 6,
                            chunk: { count: 1, rows: 1, columns: 6 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x2_1',
                        },
                        {
                            width: 300,
                            height: 300,
                            frameCount: 6,
                            chunk: { count: 1, rows: 1, columns: 6 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x2_2',
                        },
                        {
                            width: 600,
                            height: 600,
                            frameCount: 9,
                            chunk: { count: 1, rows: 3, columns: 3 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x2_3',
                        },
                        {
                            width: 985,
                            height: 720,
                            frameCount: 9,
                            chunk: { count: 1, rows: 3, columns: 3 },
                            getChunkPath: () => 'R.images.advent_calendar.gui.maps.icons.mainView.sequence.open2x2_4',
                        },
                    ],
                    Ou = [
                        { angle: 45, offset: 0 },
                        { angle: 45, offset: 0 },
                        { angle: 45, offset: 0 },
                        { angle: 45, offset: 0.05 },
                        { angle: 45, offset: 0.06 },
                        { angle: 45, offset: 0.08 },
                        { angle: 45, offset: 0.09 },
                        { angle: 45, offset: 0.1 },
                        { angle: 45, offset: 0.11 },
                        { angle: 45, offset: 0.12 },
                        { angle: 45, offset: 0.133 },
                        { angle: 45, offset: 0.15 },
                        { angle: 45, offset: 0.16 },
                        { angle: 45, offset: 0.17 },
                        { angle: 45, offset: 0.18 },
                        { angle: 45, offset: 0.18 },
                        { angle: 45, offset: 0.183 },
                        { angle: 45, offset: 0.19 },
                        { angle: 45, offset: 0.19 },
                        { angle: 45, offset: 0.2 },
                        { angle: 45, offset: 0.2 },
                        { angle: 45, offset: 0.2 },
                        { angle: 45, offset: 0.2 },
                        { angle: 45, offset: 0.205 },
                    ],
                    ku = [
                        { angle: 45, offset: 0.205 },
                        { angle: 45, offset: 0.21 },
                        { angle: 45, offset: 0.22 },
                        { angle: 45, offset: 0.22 },
                        { angle: 45, offset: 0.22 },
                        { angle: 45, offset: 0.225 },
                        { angle: 45, offset: 0.23 },
                        { angle: 45, offset: 0.23 },
                        { angle: 45, offset: 0.23 },
                        { angle: 45, offset: 0.23 },
                        { angle: 45, offset: 0.23 },
                        { angle: 45, offset: 0.233 },
                        { angle: 45, offset: 0.233 },
                        { angle: 45, offset: 0.233 },
                        { angle: 45, offset: 0.233 },
                        { angle: 45, offset: 0.233 },
                    ],
                    Pu = [
                        ...Ou,
                        ...ku,
                        { angle: 45, offset: 0.233 },
                        { angle: 45, offset: 0.236 },
                        { angle: 45, offset: 0.245 },
                        { angle: 45, offset: 0.25 },
                        { angle: 45, offset: 0.26 },
                        { angle: 45, offset: 0.275 },
                        { angle: 45, offset: 0.285 },
                        { angle: 45.1, offset: 0.31 },
                        { angle: 45.3, offset: 0.335 },
                        { angle: 45.4, offset: 0.362 },
                        { angle: 45.6, offset: 0.39 },
                        { angle: 45.7, offset: 0.415 },
                        { angle: 45.8, offset: 0.455 },
                        { angle: 46, offset: 0.49 },
                        { angle: 46.1, offset: 0.535 },
                        { angle: 46.2, offset: 0.58 },
                        { angle: 46.4, offset: 0.652 },
                        { angle: 46.5, offset: 0.695 },
                        { angle: 46.7, offset: 0.753 },
                        { angle: 46.8, offset: 2 },
                        { angle: 46.9, offset: 2 },
                        { angle: 47.1, offset: 2 },
                        { angle: 47.2, offset: 2 },
                        { angle: 47.4, offset: 2 },
                        { angle: 47.5, offset: 2 },
                        { angle: 47.6, offset: 2 },
                        { angle: 47.8, offset: 2 },
                        { angle: 47.9, offset: 2 },
                        { angle: 48, offset: 2 },
                        { angle: 48, offset: 2 },
                    ],
                    Iu = [
                        ...Ou,
                        ...ku,
                        { angle: 45, offset: 0.235 },
                        { angle: 45, offset: 0.24 },
                        { angle: 45, offset: 0.24 },
                        { angle: 45, offset: 0.245 },
                        { angle: 45, offset: 0.25 },
                        { angle: 45, offset: 0.255 },
                        { angle: 45, offset: 0.26 },
                        { angle: 45, offset: 0.273 },
                        { angle: 45, offset: 0.29 },
                        { angle: 45, offset: 0.31 },
                        { angle: 45, offset: 0.345 },
                        { angle: 45, offset: 0.37 },
                        { angle: 45, offset: 0.415 },
                        { angle: 45, offset: 0.463 },
                        { angle: 45, offset: 0.523 },
                        { angle: 45.6, offset: 0.586 },
                        { angle: 46.2, offset: 0.66 },
                        { angle: 46.5, offset: 0.735 },
                        { angle: 46.8, offset: 0.813 },
                        { angle: 47.2, offset: 0.91 },
                        { angle: 47.5, offset: 1.005 },
                        { angle: 47.8, offset: 1.105 },
                        { angle: 48, offset: 1.23 },
                        { angle: 48.2, offset: 1.36 },
                        { angle: 48.3, offset: 1.485 },
                        { angle: 48.5, offset: 3 },
                        { angle: 49, offset: 3 },
                        { angle: 50, offset: 3 },
                        { angle: 50, offset: 3 },
                        { angle: 50, offset: 3 },
                        { angle: 50, offset: 3 },
                        { angle: 50, offset: 3 },
                        { angle: 50, offset: 3 },
                    ],
                    Nu = [
                        ...Ou,
                        ...ku,
                        { angle: 45, offset: 0.238 },
                        { angle: 45, offset: 0.238 },
                        { angle: 45, offset: 0.24 },
                        { angle: 45, offset: 0.25 },
                        { angle: 45, offset: 0.258 },
                        { angle: 45, offset: 0.27 },
                        { angle: 45.3, offset: 0.283 },
                        { angle: 45.7, offset: 0.308 },
                        { angle: 46.5, offset: 0.328 },
                        { angle: 46.2, offset: 0.35 },
                        { angle: 45.9, offset: 0.388 },
                        { angle: 45.5, offset: 0.42 },
                        { angle: 45, offset: 0.465 },
                        { angle: 44.5, offset: 0.513 },
                        { angle: 44.4, offset: 0.558 },
                        { angle: 45.4, offset: 0.628 },
                        { angle: 46, offset: 0.69 },
                        { angle: 46.2, offset: 0.76 },
                        { angle: 46.5, offset: 0.823 },
                        { angle: 46.8, offset: 0.908 },
                        { angle: 47, offset: 0.988 },
                        { angle: 47.2, offset: 1.075 },
                        { angle: 47.5, offset: 1.168 },
                        { angle: 47.8, offset: 1.265 },
                        { angle: 48, offset: 1.373 },
                        { angle: 49, offset: 1.523 },
                        { angle: 50, offset: 1.673 },
                        { angle: 51, offset: 1.833 },
                        { angle: 53, offset: 2.008 },
                        { angle: 54, offset: 2.16 },
                        { angle: 55, offset: 2.315 },
                        { angle: 55, offset: 2.453 },
                        { angle: 56, offset: 4 },
                        { angle: 59, offset: 4 },
                        { angle: 60, offset: 4 },
                        { angle: 60, offset: 4 },
                        { angle: 60, offset: 4 },
                        { angle: 60, offset: 4 },
                        { angle: 60, offset: 4 },
                    ],
                    Lu = [
                        ...Ou,
                        ...ku,
                        { angle: 45, offset: 0.233 },
                        { angle: 45, offset: 0.259 },
                        { angle: 45, offset: 0.305 },
                        { angle: 46.5, offset: 0.362 },
                        { angle: 45, offset: 0.426 },
                        { angle: 44, offset: 0.5 },
                        { angle: 43, offset: 0.555 },
                        { angle: 42.5, offset: 0.642 },
                        { angle: 43, offset: 0.722 },
                        { angle: 42.9, offset: 0.807 },
                        { angle: 42.6, offset: 0.9 },
                        { angle: 42.5, offset: 0.975 },
                        { angle: 42.6, offset: 1.055 },
                        { angle: 42.5, offset: 1.16 },
                        { angle: 42.3, offset: 1.255 },
                        { angle: 44.4, offset: 1.38 },
                        { angle: 45, offset: 3 },
                        { angle: 47.7, offset: 3 },
                        { angle: 49.5, offset: 3 },
                        { angle: 50.3, offset: 3 },
                        { angle: 49.4, offset: 3 },
                        { angle: 49.6, offset: 3 },
                        { angle: 48.7, offset: 3 },
                        { angle: 48.4, offset: 3 },
                        { angle: 45.5, offset: 3 },
                        { angle: 47.1, offset: 3 },
                        { angle: 45.6, offset: 3 },
                        { angle: 45.6, offset: 3 },
                        { angle: 45.6, offset: 3 },
                        { angle: 45.6, offset: 3 },
                    ],
                    Mu = [
                        ...Ou,
                        ...ku,
                        { angle: 45, offset: 0.235 },
                        { angle: 45, offset: 0.235 },
                        { angle: 45, offset: 0.24 },
                        { angle: 45, offset: 0.24 },
                        { angle: 45, offset: 0.25 },
                        { angle: 45, offset: 0.258 },
                        { angle: 45, offset: 0.26 },
                        { angle: 45, offset: 0.268 },
                        { angle: 45, offset: 0.278 },
                        { angle: 45, offset: 0.3 },
                        { angle: 45.7, offset: 0.325 },
                        { angle: 45.8, offset: 0.35 },
                        { angle: 45.9, offset: 0.38 },
                        { angle: 46.4, offset: 0.418 },
                        { angle: 46.8, offset: 0.46 },
                        { angle: 46.6, offset: 0.5 },
                        { angle: 46.4, offset: 0.56 },
                        { angle: 46.6, offset: 0.62 },
                        { angle: 46.7, offset: 0.685 },
                        { angle: 42.7, offset: 0.79 },
                        { angle: 42.5, offset: 0.875 },
                        { angle: 42.3, offset: 0.975 },
                        { angle: 42.1, offset: 1.07 },
                        { angle: 42, offset: 1.175 },
                        { angle: 42, offset: 1.3 },
                        { angle: 38.2, offset: 1.6 },
                        { angle: 35.5, offset: 1.9 },
                        { angle: 33, offset: 3 },
                        { angle: 33, offset: 3 },
                        { angle: 33, offset: 3 },
                        { angle: 33, offset: 3 },
                        { angle: 33, offset: 3 },
                        { angle: 33, offset: 3 },
                    ],
                    Hu = wu.frameCount,
                    Wu = wu.frameCount + bu.frameCount - 1,
                    Vu = {
                        [vu.S1x1]: { gridConfigs: yu, frameConfigs: Pu, delays: { rewardShow: 600 } },
                        [vu.S2x1]: { gridConfigs: xu, frameConfigs: Iu, delays: { rewardShow: 800 } },
                        [vu.S3x1]: { gridConfigs: Tu, frameConfigs: Nu, delays: { rewardShow: 850 } },
                        [vu.S1x2]: { gridConfigs: Su, frameConfigs: Mu, delays: { rewardShow: 800 } },
                        [vu.S2x2]: { gridConfigs: Ru, frameConfigs: Lu, delays: { rewardShow: 600 } },
                    },
                    $u = 800,
                    Gu = 800,
                    Uu = 800,
                    ju = 500,
                    qu = 600,
                    zu = [
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
                function Yu() {
                    return (
                        (Yu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Yu.apply(null, arguments)
                    );
                }
                (0, n.memo)(function (e) {
                    let u = e.width,
                        t = e.height,
                        r = e.getImageSource,
                        o = e.frameCount,
                        s = e.onAnimate,
                        i = e.frameTime,
                        l = void 0 === i ? 33 : i,
                        c = e.initialFrameIndex,
                        d = void 0 === c ? 0 : c,
                        E = e.lastFrameIndex,
                        m = void 0 === E ? o - 1 : E,
                        _ = e.loop,
                        A = void 0 === _ || _,
                        g = e.state,
                        f = void 0 === g ? 'play' : g,
                        F = e.onAnimationDone,
                        D = e.onAnimationComplete,
                        h = e.poster,
                        C = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, zu);
                    const p = (0, n.useRef)(null);
                    return (
                        (0, n.useEffect)(() => {
                            const e = p.current;
                            if (!e) return;
                            const u = e.getContext('2d'),
                                t = (t) => {
                                    u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y);
                                };
                            switch (f) {
                                case 'play':
                                    return (function () {
                                        const e = Qu(d, m, r),
                                            u = Ku(d, m),
                                            n = window.setInterval(() => {
                                                const a = u(),
                                                    r = e.get(a);
                                                r
                                                    ? (null == s || s(a, r),
                                                      t(r),
                                                      a === m &&
                                                          (null == D || D(),
                                                          A || (null == F || F(), window.clearInterval(n))))
                                                    : console.error('frameImage was not provided in frameImages Map');
                                            }, l);
                                        return () => window.clearInterval(n);
                                    })();
                                case 'stop':
                                    return (function () {
                                        const e = 0 === d && h ? { path: h, x: 0, y: 0 } : r(d),
                                            u = new Image();
                                        u.src = e.path;
                                        const n = () => t(Xu(e, u));
                                        return u.addEventListener('load', n), () => u.removeEventListener('load', n);
                                    })();
                                default:
                                    return console.error('[CanvasSequence] Unreachable state!');
                            }
                        }, [l, r, d, m, A, s, D, F, h, f]),
                        a().createElement('canvas', Yu({}, C, { width: u, height: t, ref: p }))
                    );
                });
                const Ku = (e, u) => {
                        let t = e;
                        return () => {
                            const n = t;
                            return (t += 1), t > u && (t = e), n;
                        };
                    },
                    Xu = (e, u) => Object.assign({}, e, { img: u }),
                    Qu = (e, u, t) => {
                        const n = new Map(),
                            a = {};
                        for (let r = e; r <= u; r++) {
                            const e = t(r),
                                u = a[e.path];
                            if (u) n.set(r, Xu(e, u));
                            else {
                                const u = new Image();
                                (a[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(r, Xu(e, u));
                            }
                        }
                        return n;
                    };
                const Zu = (e, u) => Object.assign({}, e, { img: u }),
                    Ju = (e, u, t = 0) => {
                        const n = (function (e) {
                            const u = (function (e) {
                                const u = e.chunk,
                                    t = u.rows * u.columns;
                                return (n) => {
                                    const a = n % t,
                                        r = (a % u.columns) * e.width,
                                        o = Math.trunc(a / u.columns) * e.height;
                                    return { path: e.getChunkPath(Math.trunc(n / t)), x: r, y: o };
                                };
                            })(e);
                            return (t) => Object.assign({}, u(t), { width: e.width, height: e.height });
                        })(u);
                        return ((e, u, t, n, a = 0) => {
                            const r = {};
                            for (let o = u; o <= t; o++) {
                                const u = n(o),
                                    t = r[u.path];
                                if (t) e.set(o + a, Zu(u, t));
                                else {
                                    const t = new Image();
                                    (r[u.path] = t),
                                        (t.src = u.path),
                                        (t.onerror = () => {
                                            console.error(
                                                `[CanvasSequence] Error loading image(${o})`,
                                                u.path,
                                                `(${u.x},${u.y})`,
                                            );
                                        }),
                                        e.set(o + a, Zu(u, t));
                                }
                            }
                        })(e, 0, u.frameCount - 1, n, t);
                    };
                function et(e, u, t, n, a, r, o) {
                    try {
                        var s = e[r](o),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(n, a);
                }
                function ut(e) {
                    return function () {
                        var u = this,
                            t = arguments;
                        return new Promise(function (n, a) {
                            var r = e.apply(u, t);
                            function o(e) {
                                et(r, n, a, o, s, 'next', e);
                            }
                            function s(e) {
                                et(r, n, a, o, s, 'throw', e);
                            }
                            o(void 0);
                        });
                    };
                }
                let tt;
                !(function (e) {
                    (e.Init = 'init'), (e.Idle = 'idle'), (e.Hover = 'hover'), (e.Open = 'open');
                })(tt || (tt = {}));
                const nt = (e) => {
                        const u = j(),
                            t = ((e) => {
                                switch (`${e.width}x${e.height}`) {
                                    case '1x1':
                                        return vu.S1x1;
                                    case '2x1':
                                        return vu.S2x1;
                                    case '3x1':
                                        return vu.S3x1;
                                    case '1x2':
                                        return vu.S1x2;
                                    case '2x2':
                                        return vu.S2x2;
                                    default:
                                        return (
                                            console.error(`[DoorSize] Unknown size! (${e.width}x${e.height})`), vu.S1x1
                                        );
                                }
                            })(e),
                            a = Vu[t],
                            r = a.gridConfigs,
                            o = a.frameConfigs,
                            s = a.delays,
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = ((e, u) => {
                                const t = (0, n.useRef)(new Map()),
                                    a = (0, n.useRef)(0),
                                    r = (0, n.useRef)(0);
                                return (
                                    U(() => window.clearInterval(a.current)),
                                    (0, n.useEffect)(() => {
                                        t.current.clear(),
                                            u.reduce(
                                                (e, u) => (
                                                    Ju(t.current, u, e.frameOffset), (e.frameOffset += u.frameCount), e
                                                ),
                                                { frameOffset: 0 },
                                            );
                                    }, [u, e]),
                                    (0, n.useMemo)(() => {
                                        const u = (u) => {
                                            r.current = u;
                                            const n = e.current;
                                            if (n) {
                                                const e = t.current.get(u);
                                                if (!e)
                                                    return void console.error(
                                                        'frameImage was not provided in frameImages Map',
                                                    );
                                                (n.width = e.width),
                                                    (n.height = e.height),
                                                    (n.style.width = `${n.width}rem`),
                                                    (n.style.height = `${n.height}rem`);
                                                const a = n.getContext('2d');
                                                a.clearRect(0, 0, n.width, n.height), a.drawImage(e.img, -e.x, -e.y);
                                            }
                                        };
                                        return {
                                            setFrame: u,
                                            animate: (e) => {
                                                window.clearInterval(a.current);
                                                const n = void 0 !== e.startFrameIndex ? e.startFrameIndex : r.current,
                                                    o =
                                                        void 0 !== e.endFrameIndex
                                                            ? e.endFrameIndex
                                                            : t.current.size - 1,
                                                    s = o > n ? 1 : -1;
                                                let i = n;
                                                return (
                                                    (a.current = window.setInterval(() => {
                                                        var t;
                                                        i === n && (null == e.onStart || e.onStart()),
                                                            null == e.onAnimate || e.onAnimate(i),
                                                            u(i),
                                                            i === o &&
                                                                (e.loop || void 0 === e.loop
                                                                    ? ((t = e.frameTime),
                                                                      window.clearInterval(a.current),
                                                                      (a.current = window.setInterval(() => {
                                                                          u(r.current);
                                                                      }, t)))
                                                                    : window.clearInterval(a.current),
                                                                null == e.onFinish || e.onFinish()),
                                                            (i += s);
                                                    }, e.frameTime)),
                                                    () => window.clearInterval(a.current)
                                                );
                                            },
                                            getCurrentFrame: () => r.current,
                                        };
                                    }, [e])
                                );
                            })(l, r),
                            d = c.animate,
                            E = c.getCurrentFrame,
                            m = (0, n.useRef)(tt.Init),
                            _ = (0, n.useRef)(!1),
                            A = (0, we.useSpring)(() => ({ x: '-50%', y: '-50%', scale: 1, opacity: 0 })),
                            g = A[0],
                            f = A[1],
                            F = (0, we.useSpring)(() => ({ opacity: 0 })),
                            D = F[0],
                            h = F[1],
                            C = (0, we.useSpring)(() => ({
                                opacity: 1,
                                onChange: ({ value: e }) => {
                                    i.current && (i.current.style.opacity = e.opacity.toString()),
                                        l.current && (l.current.style.opacity = e.opacity.toString());
                                },
                            }))[1],
                            p = (0, n.useMemo)(() => {
                                const t = (u) => {
                                        const t = i.current;
                                        if (o[u] && t) {
                                            const n = o[u],
                                                a = n.offset;
                                            ((e, u, t, n) => {
                                                const a = e.getBoundingClientRect(),
                                                    r = a.width,
                                                    o = a.height,
                                                    s = (r / n.width) * t;
                                                e.style.clipPath = ((e, u, t, n) => {
                                                    const a = Math.cos(n),
                                                        r = Math.sin(n),
                                                        o = a * a,
                                                        s = a * r,
                                                        i = r * r,
                                                        l = t * r,
                                                        c = t * a;
                                                    return `polygon(${((e * o + l) / e) * 100}% ${((e * -s + c) / u) * 100}%, ${((e + u * s + l) / e) * 100}% ${((u * o + c) / u) * 100}%, ${((e * i + l) / e) * 100}% ${((u + e * s + c) / u) * 100}%, ${((u * -s + l) / e) * 100}% ${((u * i + c) / u) * 100}%)`;
                                                })(r, o, s, u);
                                            })(t, n.angle * (Math.PI / 180), a, e);
                                        }
                                    },
                                    n = () =>
                                        new Promise((e) => {
                                            f.start({
                                                to: [{ opacity: 1, scale: 1.2 }, { scale: 1 }],
                                                config: { duration: Gu, easing: Bu },
                                                onRest: () => e(),
                                            }),
                                                h.start({
                                                    opacity: 0.8,
                                                    config: { duration: $u, easing: pu },
                                                    delay: Gu,
                                                });
                                        }),
                                    a = (e) => {
                                        d(Object.assign({ frameTime: 33, onAnimate: t }, e));
                                    },
                                    r = () => {
                                        (_.current = !0),
                                            i.current && (i.current.style.pointerEvents = 'none'),
                                            l.current && (l.current.style.display = 'none');
                                    };
                                return {
                                    tearOff: (e, t = !1) => {
                                        t
                                            ? ((m.current = tt.Idle),
                                              g.opacity.set(1),
                                              D.opacity.set(0.8),
                                              a({ startFrameIndex: Hu, endFrameIndex: Hu }))
                                            : u.run(
                                                  ut(function* () {
                                                      if (m.current === tt.Init) {
                                                          m.current = tt.Idle;
                                                          try {
                                                              yield n();
                                                          } finally {
                                                              m.current === tt.Idle &&
                                                                  (q('adv_stamp_highlight'), a({ endFrameIndex: Hu }));
                                                          }
                                                      }
                                                  }),
                                                  e,
                                              );
                                    },
                                    open: (e = !0) => (
                                        (m.current = tt.Open),
                                        q('adv_stamp_get'),
                                        f.start({
                                            to: { opacity: 0, scale: 1.4 },
                                            config: { duration: Uu, easing: Bu },
                                            delay: qu,
                                        }),
                                        h.start({
                                            to: { opacity: 0 },
                                            config: { duration: Uu, easing: Bu },
                                            delay: qu,
                                        }),
                                        e
                                            ? (a({ startFrameIndex: Wu, onFinish: r, loop: !1 }), s.rewardShow)
                                            : (C.start({
                                                  to: { opacity: 0 },
                                                  config: { duration: Uu, easing: Bu },
                                                  delay: qu,
                                                  onRest: r,
                                              }),
                                              qu)
                                    ),
                                    enter: () => {
                                        q('adv_stamp_highlight'),
                                            m.current === tt.Init
                                                ? (n().catch(ne), a({ endFrameIndex: Hu }))
                                                : (f.start({
                                                      to: [{ scale: 1.1 }],
                                                      config: { duration: ju, easing: pu },
                                                  }),
                                                  a({ endFrameIndex: Wu })),
                                            (m.current = tt.Hover);
                                    },
                                    leave: () => {
                                        (m.current = tt.Idle),
                                            f.start({ to: [{ scale: 1 }], config: { duration: ju, easing: Bu } }),
                                            a({ endFrameIndex: Hu });
                                    },
                                    restore: () => {
                                        _.current && r(), t(E());
                                    },
                                };
                            }, [d, s.rewardShow, o, E, f, g.opacity, u, e, h, D.opacity, C]);
                        return { glowStyle: g, shineStyle: D, doorRef: i, canvasRef: l, state: m, api: p };
                    },
                    at = R.strings.advent_calendar.mainView.tooltip,
                    rt = (0, K.Pi)(({ door: e }) => {
                        const u = ee().mediaSize,
                            t = Ae(),
                            n = t.model,
                            r = t.controls,
                            o = De(),
                            s = xe[e.dayId],
                            i = n.showBlur.get(),
                            l = j(),
                            c = nt(s),
                            d = c.shineStyle,
                            E = c.glowStyle,
                            m = c.state,
                            _ = c.doorRef,
                            A = c.canvasRef,
                            g = c.api,
                            f = (e) => () => {
                                m.current !== tt.Open && !n.doorOpenBlocked.get() && n.isWalletAvailable.get() && e();
                            },
                            F = f(() => {
                                if (n.statePhase.get() === Ke.POST_ACTIVE_PHASE) return r.showPurchaseDialog(e.dayId);
                                r.openDoor(e.dayId);
                            }),
                            D = f(g.enter),
                            h = f(g.leave),
                            C = n.isWalletAvailable.get()
                                ? n.statePhase.get() !== Ke.POST_ACTIVE_PHASE || e.isEnoughResources
                                    ? void 0
                                    : {
                                          header: at.notEnoughResources.title(),
                                          body: at.notEnoughResources.description(),
                                      }
                                : { body: R.strings.advent_calendar.server_error() };
                        return (
                            G(() => {
                                e.openAnimationRequired || g.tearOff(0, !0);
                            }),
                            G(() =>
                                o.on('onOpenDoor', (u) => {
                                    u === e.dayId &&
                                        (() => {
                                            const u = g.open(n.isAnimationEnabled.get());
                                            l.run(() => r.showReward(e.dayId), u);
                                        })();
                                }),
                            ),
                            G(() =>
                                o.on('onTearOff', (u, t, n = 0) => {
                                    u === e.dayId && g.tearOff(n + 1e3 * t);
                                }),
                            ),
                            a().useEffect(() => X(g.restore), [g, u, e.isEnoughResources]),
                            a().useEffect(() => {
                                i || m.current !== tt.Hover || g.leave();
                            }, [g, i, m]),
                            a().createElement(
                                du.Wrapper,
                                { dayId: e.dayId, doorState: e.doorState, tooltipArgs: C, key: u },
                                a().createElement(we.animated.div, { className: 'ReadyToOpenDoor_glow_23', style: E }),
                                a().createElement(
                                    we.animated.div,
                                    { className: 'ReadyToOpenDoor_shineWrapper_3e', style: d },
                                    a().createElement(Cu, {
                                        className: 'ReadyToOpenDoor_shine_a1',
                                        src: R.videos.advent_calendar.shine(),
                                        autoplay: !0,
                                        loop: !0,
                                    }),
                                ),
                                a().createElement(
                                    du.FrontSide,
                                    {
                                        ref: _,
                                        onMouseEnter: D,
                                        onMouseLeave: h,
                                        onClick: F,
                                        className: 'ReadyToOpenDoor_frontSide_e5',
                                    },
                                    a().createElement(we.animated.div, {
                                        className: 'ReadyToOpenDoor_glowBorder_f4',
                                        style: { opacity: E.opacity },
                                    }),
                                    a().createElement(du.Day, { dayId: e.dayId }),
                                    a().createElement(du.Currency, { dayId: e.dayId }),
                                    a().createElement(du.Mark, { dayId: e.dayId }),
                                ),
                                a().createElement('canvas', { ref: A, className: 'ReadyToOpenDoor_backSide_fa' }),
                                ';',
                            )
                        );
                    }),
                    ot = (0, K.Pi)(({ dayId: e }) => {
                        const u = Ae().model.computes.door(e),
                            t = u.doorState === L.READY_TO_OPEN ? 2e3 : 300;
                        return a().createElement(
                            Re.Z,
                            { component: a().Fragment },
                            a().createElement(
                                Oe.Z,
                                { classNames: { enter: 'DoorResolver_enter_9c' }, timeout: t, key: u.doorState },
                                (() => {
                                    switch (u.doorState) {
                                        case L.CLOSED:
                                            return a().createElement(_u, { door: u });
                                        case L.EXPIRED:
                                            return a().createElement(gu, { door: u });
                                        case L.READY_TO_OPEN:
                                            return a().createElement(rt, { door: u });
                                        default:
                                            return a().createElement('div', null);
                                    }
                                })(),
                            ),
                        );
                    }),
                    st = R.strings.advent_calendar.mainView,
                    it = (0, K.Pi)(() => {
                        const e = Ae(),
                            u = e.model,
                            t = e.controls,
                            r = De(),
                            o = (0, we.useSpring)(() => ({ opacity: 1 })),
                            s = o[0],
                            i = o[1];
                        G(() =>
                            r.on('onOpenDoor', () => {
                                const e = Object.values(u.doors.get());
                                e.filter((e) => e.doorState === L.OPENED).length === e.length - 1 &&
                                    i.start({ opacity: 0, delay: 2500 });
                            }),
                        ),
                            G(() =>
                                (0, Y.U5)(
                                    () => Object.values(u.doors.get()).every((e) => e.doorState === L.OPENED),
                                    (e, u) => {
                                        u && !e && i.start({ opacity: 1 });
                                    },
                                ),
                            );
                        const l = (0, n.useCallback)(() => {
                            t.openDownloadLink();
                        }, [t]);
                        return a().createElement(
                            'div',
                            {
                                className: D()(
                                    Te,
                                    u.doorOpenBlocked.get() && 'Calendar_base__blocked_57',
                                    !u.computes.eventCompleted() && 'Calendar_base__linkButtonHidden_b7',
                                ),
                            },
                            a().createElement('div', { className: D()(Se, 'Calendar_base__art_bd') }),
                            a().createElement(
                                'div',
                                {
                                    className: D()(
                                        'Calendar_content_bd',
                                        u.computes.eventCompleted() && 'Calendar_content__hidden_f4',
                                    ),
                                },
                                a().createElement(we.animated.div, {
                                    className: D()(Se, 'Calendar_base__artBorders_72'),
                                    style: s,
                                }),
                                a().createElement(we.animated.div, {
                                    className: D()(Se, 'Calendar_base__calendarBorder_de'),
                                    style: s,
                                }),
                                Object.keys(xe).map((e) => a().createElement(ot, { key: e, dayId: Number(e) })),
                            ),
                            a().createElement(
                                'div',
                                { className: 'Calendar_linkButtonContainer_0e' },
                                a().createElement(
                                    ve,
                                    { type: Ce.ghost, size: pe.medium, mixClass: 'Calendar_linkButton_36', onClick: l },
                                    a().createElement(
                                        'span',
                                        { className: 'Calendar_linkButtonTextWrapper_65' },
                                        st.footer.linkButton.text(),
                                    ),
                                    a().createElement(
                                        'span',
                                        { className: 'Calendar_linkButtonIconWrapper_0b' },
                                        a().createElement('span', { className: 'Calendar_linkButtonIcon_93' }),
                                    ),
                                ),
                            ),
                        );
                    });
                let lt, ct;
                !(function (e) {
                    (e.REWARD_RECEIVED = 'rewardReceived'),
                        (e.REWARD_IN_PROGRESS = 'rewardInProgress'),
                        (e.REWARD_LOCKED = 'rewardLocked');
                })(lt || (lt = {})),
                    (function (e) {
                        (e.STYLE_2D = 'style2D'), (e.CREW_MEMBER = 'crewMember'), (e.BIG_LOOTBOX = 'lootBox');
                    })(ct || (ct = {}));
                const dt = {
                        linear: (e) => e,
                        easeInQuad: (e) => e * e,
                        easeOutQuad: (e) => e * (2 - e),
                        easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1),
                        easeInCubic: (e) => e * e * e,
                        easeOutCubic: (e) => --e * e * e + 1,
                        easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                        easeInQuart: (e) => e * e * e * e,
                        easeOutQuart: (e) => 1 - --e * e * e * e,
                        easeInOutQuart: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e),
                        easeInQuint: (e) => e * e * e * e * e,
                        easeOutQuint: (e) => 1 + --e * e * e * e * e,
                        easeInOutQuint: (e) => (e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e),
                        easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
                        easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                        easeInOutCirc(e) {
                            const u = Math.sqrt,
                                t = Math.pow;
                            return e < 0.5 ? (1 - u(1 - t(2 * e, 2))) / 2 : (u(1 - t(-2 * e + 2, 2)) + 1) / 2;
                        },
                        easeOutBack: (e) => 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
                        bezier: (e, u, t, n) => (a) =>
                            (1 - a) * (1 - a) * (1 - a) * e +
                            3 * (1 - a) * (1 - a) * a * u +
                            3 * (1 - a) * a * a * t +
                            a * a * a * n,
                    },
                    Et = () => {};
                let mt;
                W.Sw.instance,
                    (function (e) {
                        (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                    })(mt || (mt = {})),
                    W.Sw.instance;
                const _t = (e, u) => {
                        const t = (0, n.useRef)();
                        return (
                            (0, n.useEffect)(() => {
                                (u && !u(e)) || (t.current = e);
                            }, [u, e]),
                            t.current
                        );
                    },
                    At = (e = 0, u, t = 0, a = Et) => {
                        const r = (0, n.useState)(e),
                            o = r[0],
                            s = r[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    s(e);
                                    const n = Date.now(),
                                        r = setInterval(
                                            () => {
                                                const u = e - Math.floor((Date.now() - n) / 1e3);
                                                null !== t && u <= t ? (s(t), a && a(), clearInterval(r)) : s(u);
                                            },
                                            1e3 * (u || (e > 120 ? 60 : 1)),
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [e, u, t, a]),
                            o
                        );
                    },
                    gt = (e) => 2.70158 * e * e * e - 1.70158 * e * e,
                    ft = '0px 0px 0px #fff0',
                    Ft = '0px 0px 3px #fff',
                    Dt = 'ProgressStatus_check_d7',
                    ht = R.strings.common.common,
                    Ct = (0, K.Pi)(
                        ({
                            isReceived: e,
                            isInProgress: u,
                            actualOpenedDoorsAmount: t,
                            requiredOpenedDoorsAmount: r,
                            completedDelay: o,
                            isPostEvent: s,
                            setTriggerBlurAnimation: i,
                        }) => {
                            const l = Ae(),
                                c = l.model,
                                d = l.controls,
                                E = c.progression.isCompleted.get(),
                                m = _t(E),
                                _ = _t(u),
                                A = _t(t),
                                g = (0, n.useState)(!1),
                                f = g[0],
                                F = g[1],
                                D = (0, we.useSpringRef)(),
                                h = (0, we.useSpring)({
                                    ref: D,
                                    from: { opacity: 1, transform: 'translateY(0rem)' },
                                    to: { opacity: 0, transform: 'translateY(-5rem)' },
                                    transform: 'translateY(0rem)',
                                    config: { duration: 800, easing: gt },
                                    onRest: () => q('adv_fill_in'),
                                }),
                                C = (0, we.useSpringRef)(),
                                p = (0, we.useSpring)({
                                    ref: C,
                                    from: { opacity: 0, transform: 'translateY(5rem)' },
                                    to: { opacity: 1, transform: 'translateY(0rem)' },
                                    config: { duration: 100, easing: dt.easeOutQuad },
                                    onRest: () => i(!0),
                                }),
                                B = (0, we.useSpringRef)(),
                                v = (0, we.useSpring)({
                                    ref: B,
                                    from: { opacity: 0 },
                                    to: { opacity: 1 },
                                    config: { duration: 200, easing: dt.easeOutQuad },
                                    onRest: () => {
                                        B.start({
                                            to: { opacity: 0 },
                                            config: { duration: 500, easing: dt.easeInQuad },
                                            onRest: () => {
                                                F(!1), d.progressionRewardCompleted();
                                            },
                                        });
                                    },
                                });
                            (0, we.useChain)(f ? [D, C, B] : []);
                            const w = (0, we.useSpring)(() => ({ opacity: !u || s ? 1 : 0.5 })),
                                b = w[0],
                                y = w[1],
                                x = (0, we.useSpring)(() => ({ opacity: !u || s ? 0.5 : 1 })),
                                T = x[0],
                                S = x[1],
                                R = (0, we.useSpring)(() => ({ textShadow: ft })),
                                O = R[0],
                                k = R[1],
                                P = (0, we.useSpring)(() => ({ opacity: E ? 0 : 1, transform: 'translateY(0rem)' })),
                                I = P[0],
                                N = P[1];
                            return (
                                (0, n.useEffect)(() => {
                                    u &&
                                        (!1 === _
                                            ? (S.start({
                                                  from: { opacity: 0.5 },
                                                  to: { opacity: 1 },
                                                  delay: 1e3,
                                                  config: { duration: 200, easing: dt.easeInQuad },
                                                  onRest: () => {
                                                      k.start({
                                                          from: { textShadow: ft },
                                                          to: { textShadow: Ft },
                                                          reverse: !0,
                                                          config: { duration: 300, easing: dt.easeInQuad },
                                                      });
                                                  },
                                              }),
                                              y.start({
                                                  from: { opacity: 1 },
                                                  to: { opacity: 0.5 },
                                                  delay: 1e3,
                                                  config: { duration: 200, easing: dt.easeInQuad },
                                              }))
                                            : k.start({
                                                  from: { textShadow: ft },
                                                  to: { textShadow: Ft },
                                                  config: { duration: 300, easing: dt.easeInQuad },
                                                  reverse: !0,
                                                  onRest: () => {
                                                      f ||
                                                          (t === r
                                                              ? F(!0)
                                                              : Number.isInteger(A) && d.animationCompleted());
                                                  },
                                              }));
                                }, [t, S, y, k, u, _, r, d, A]),
                                (0, n.useEffect)(() => {
                                    E &&
                                        !1 === m &&
                                        N.start({
                                            from: { opacity: 1, transform: 'translateY(0rem)' },
                                            to: { opacity: 0, transform: 'translateY(-5rem)' },
                                            delay: o,
                                            config: { duration: 800, easing: gt },
                                        });
                                }, [N, o, E, m]),
                                a().createElement(
                                    we.animated.div,
                                    { style: I, className: 'ProgressStatus_base_ae' },
                                    e
                                        ? a().createElement('span', { className: Dt })
                                        : a().createElement(
                                              a().Fragment,
                                              null,
                                              a().createElement(
                                                  we.animated.div,
                                                  { style: p },
                                                  a().createElement('span', { className: Dt }),
                                              ),
                                              a().createElement(we.animated.div, {
                                                  style: v,
                                                  className: 'ProgressStatus_glow_ef',
                                              }),
                                              a().createElement(
                                                  we.animated.div,
                                                  { style: h },
                                                  a().createElement(
                                                      we.animated.div,
                                                      { style: T, className: 'ProgressStatus_amount_ef' },
                                                      a().createElement(we.animated.div, { style: O }, t),
                                                      a().createElement(
                                                          we.animated.div,
                                                          { style: b, className: 'ProgressStatus_doorsClosed_90' },
                                                          ht.slash(),
                                                          ' ',
                                                          r,
                                                      ),
                                                      a().createElement('div', {
                                                          className: 'ProgressStatus_stage_55',
                                                      }),
                                                  ),
                                              ),
                                          ),
                                )
                            );
                        },
                    ),
                    pt = R.strings.advent_calendar.progressionRewards;
                var Bt;
                !(function (e) {
                    (e.Small = 'small'), (e.Big = 'big');
                })(Bt || (Bt = {}));
                const vt = (e) => (1 == e > p.Medium ? Bt.Big : Bt.Small),
                    wt = (0, K.Pi)(
                        ({
                            isLastReward: e,
                            isReceived: u,
                            isInProgress: t,
                            completedDelay: r,
                            actualOpenedDoorsAmount: o,
                            rewardType: s,
                            requiredOpenedDoorsAmount: i,
                            tooltipContentId: l,
                            tooltipId: c,
                            isPostEvent: d,
                        }) => {
                            const E = Ae(),
                                m = E.model,
                                _ = E.controls,
                                A = w().mediaSize,
                                g = m.progression.isCompleted.get(),
                                f = (0, n.useState)(!1),
                                F = f[0],
                                h = f[1],
                                C = _t(u),
                                p = (0, we.useSpring)(() => ({ opacity: g || u ? 0.5 : 1 })),
                                B = p[0],
                                v = p[1],
                                b = (0, we.useSpring)(() => ({ opacity: g ? 0 : 1 })),
                                y = b[0],
                                x = b[1],
                                T = (0, we.useSpring)(() => ({
                                    opacity: u ? 0 : 0.5,
                                    transform: 'translate(-50%, -50%)',
                                })),
                                S = T[0],
                                R = T[1],
                                O = (0, n.useMemo)(() => ({ tooltipId: c }), [c]);
                            return (
                                (0, n.useEffect)(() => {
                                    F &&
                                        (v.start({
                                            from: { opacity: 1 },
                                            to: { opacity: 0.5 },
                                            config: { duration: 200, easing: dt.easeInQuad },
                                        }),
                                        x.start({
                                            from: { opacity: 1 },
                                            to: { opacity: 0 },
                                            config: { duration: 200, easing: dt.easeInQuad },
                                        }));
                                }, [v, x, F]),
                                (0, n.useEffect)(() => {
                                    u &&
                                        !1 === C &&
                                        (q('adv_progress_level'),
                                        R.start({
                                            from: { opacity: 0.5, transform: 'translate(-50%, -50%)' },
                                            to: { opacity: 0, transform: 'translate(-50%, -100%)' },
                                            config: { duration: 800, easing: gt },
                                            onRest: () => {
                                                g || _.animationCompleted();
                                            },
                                        }));
                                }, [u, R, C, _, g]),
                                a().createElement(
                                    'div',
                                    {
                                        className: D()(
                                            'AnimationReward_base_96',
                                            s === ct.BIG_LOOTBOX && 'AnimationReward_base__lootbox_2a',
                                            u && 'AnimationReward_base__received_58',
                                        ),
                                    },
                                    a().createElement(
                                        'div',
                                        { className: 'AnimationReward_reward_c4' },
                                        a().createElement(
                                            su,
                                            { contentId: l, args: O },
                                            a().createElement(
                                                we.animated.div,
                                                { style: B, className: 'AnimationReward_imageWrapper_be' },
                                                s === ct.BIG_LOOTBOX &&
                                                    a().createElement(we.animated.div, {
                                                        style: y,
                                                        className: 'AnimationReward_lootBoxGlow_26',
                                                    }),
                                                a().createElement('div', {
                                                    className: 'AnimationReward_image_2c',
                                                    style: {
                                                        backgroundImage:
                                                            ((k = s),
                                                            (P = vt(A)),
                                                            `url(R.images.advent_calendar.gui.maps.icons.mainView.progression.${k}_${P})`),
                                                    },
                                                }),
                                            ),
                                        ),
                                        a().createElement(Ct, {
                                            isReceived: u,
                                            isInProgress: t,
                                            actualOpenedDoorsAmount: o,
                                            requiredOpenedDoorsAmount: i,
                                            completedDelay: r,
                                            setTriggerBlurAnimation: h,
                                            isPostEvent: d,
                                        }),
                                    ),
                                    !e &&
                                        a().createElement(
                                            'div',
                                            { className: 'AnimationReward_spacer_76' },
                                            a().createElement(
                                                iu,
                                                {
                                                    tooltipArgs: {
                                                        header: pt.tooltip.lock.title(),
                                                        body: pt.tooltip.lock.description(),
                                                    },
                                                },
                                                a().createElement(we.animated.div, {
                                                    style: S,
                                                    className: 'AnimationReward_lock_8b',
                                                }),
                                            ),
                                        ),
                                )
                            );
                            var k, P;
                        },
                    ),
                    bt = ({ binding: e, text: u = '', classMix: t, alignment: r = Ne.left, formatWithBrackets: o }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const s = o && e ? Le(u, e) : u;
                        return a().createElement(
                            n.Fragment,
                            null,
                            s.split('\n').map((u, o) =>
                                a().createElement(
                                    'div',
                                    { className: D()('FormatText_base_d0', t), key: `${u}-${o}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            t && e in t
                                                ? t[e]
                                                : ((e, u = Ne.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return Ge.includes(t)
                                                          ? $e(e)
                                                          : 'ja' === t
                                                            ? (0, Ie.D4)()
                                                                  .parse(e)
                                                                  .map((e) => Me(e))
                                                            : ((e, u = Ne.left) => {
                                                                  let t = [];
                                                                  const n =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      a = Me(e);
                                                                  return (
                                                                      Ve(a, /( )/, u).forEach(
                                                                          (e) => (t = t.concat(Ve(e, n, Ne.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(e, u);
                                                  })(e, u),
                                        ))(u, r, e).map((e, u) =>
                                        a().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    yt = 'Title_base_3a',
                    xt = 'Title_text_90',
                    Tt = 'Title_check_de',
                    St = R.strings.advent_calendar.mainView,
                    Rt = (0, K.Pi)(({ activePhaseCompleted: e, completed: u }) => {
                        const t = Ae().model,
                            n = t.statePhase.get(),
                            r = t.progression.isCompleted.get();
                        return n === Ke.POST_ACTIVE_PHASE
                            ? a().createElement(
                                  'div',
                                  { className: yt },
                                  r
                                      ? a().createElement(
                                            a().Fragment,
                                            null,
                                            a().createElement('span', { className: Tt }),
                                            a().createElement(bt, {
                                                classMix: xt,
                                                text: St.footer.progressionFinished.title(),
                                            }),
                                        )
                                      : a().createElement(
                                            a().Fragment,
                                            null,
                                            a().createElement('span', { className: 'Title_lock_35' }),
                                            a().createElement(
                                                iu,
                                                {
                                                    tooltipArgs: {
                                                        body: R.strings.advent_calendar.progressionRewards.tooltip.postActivePhase.title(),
                                                        bindings: Ye(
                                                            t.computes.activePhase().startDate,
                                                            t.computes.postActivePhase().startDate,
                                                        ),
                                                    },
                                                },
                                                a().createElement(
                                                    'div',
                                                    null,
                                                    a().createElement(bt, {
                                                        classMix: xt,
                                                        text: St.footer.expired.title(),
                                                    }),
                                                ),
                                            ),
                                        ),
                              )
                            : a().createElement(
                                  'div',
                                  { className: yt },
                                  a().createElement(
                                      we.animated.div,
                                      { style: u, className: 'Title_title_71' },
                                      a().createElement('span', { className: Tt }),
                                      a().createElement(bt, {
                                          classMix: xt,
                                          text: St.footer.progressionFinished.title(),
                                      }),
                                  ),
                                  a().createElement(
                                      we.animated.div,
                                      { style: e },
                                      a().createElement(bt, {
                                          classMix: xt,
                                          text: St.footer.progressionNotFinished.title(),
                                          binding: { endDate: ze(t.computes.postActivePhase().startDate, !1) },
                                      }),
                                  ),
                              );
                    }),
                    Ot = (0, K.Pi)(() => {
                        const e = Ae(),
                            u = e.model,
                            t = e.controls,
                            r = u.progressionRewards.get(),
                            o = u.progression.isCompleted.get(),
                            s = u.statePhase.get(),
                            i = _t(o),
                            l = (0, we.useSpring)(() => ({
                                opacity: o ? 0 : 1,
                                config: { duration: 900, easing: dt.easeInQuad },
                            })),
                            c = l[0],
                            d = l[1],
                            E = (0, we.useSpring)(() => ({ opacity: o ? 1 : 0, transform: 'translateY(-40%)' })),
                            m = E[0],
                            _ = E[1];
                        (0, n.useEffect)(() => {
                            o &&
                                !1 === i &&
                                d.start({
                                    from: { opacity: 1 },
                                    to: { opacity: 0 },
                                    delay: 600,
                                    onRest: () => {
                                        q('adv_progress_full'),
                                            _.start({
                                                from: { opacity: 0, transform: 'translateY(-40%)' },
                                                to: { opacity: 1, transform: 'translateY(-50%)' },
                                                config: { duration: 100, easing: dt.easeOutQuad },
                                                onRest: () => t.animationCompleted(),
                                            });
                                    },
                                });
                        }, [d, _, o, i, t]);
                        const A = u.computes.eventCompleted() || u.isIntroScreenVisible.get();
                        return a().createElement(
                            'div',
                            { className: D()('Footer_base_0d', A && 'Footer_base__hidden_14') },
                            a().createElement(
                                'div',
                                { className: 'Footer_title_23' },
                                a().createElement(Rt, { activePhaseCompleted: c, completed: m }),
                            ),
                            ce(r, (e, u) =>
                                a().createElement(wt, {
                                    key: u,
                                    isReceived: e.state === lt.REWARD_RECEIVED,
                                    isInProgress: e.state === lt.REWARD_IN_PROGRESS,
                                    isPostEvent: s === Ke.POST_ACTIVE_PHASE,
                                    actualOpenedDoorsAmount: e.actualOpenedDoorsAmount,
                                    rewardType: e.rewardType,
                                    requiredOpenedDoorsAmount: e.requiredOpenedDoorsAmount,
                                    tooltipContentId: e.tooltipContentId,
                                    tooltipId: e.tooltipId,
                                    isLastReward: u === r.length - 1,
                                    completedDelay: 300 * u,
                                }),
                            ),
                        );
                    }),
                    kt = {
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
                        parNoWidth: 'FormatTextWithColorTags_parNoWidth_5a',
                    },
                    Pt = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    It = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Nt = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Lt = (0, n.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            o = (0, n.useMemo)(() => u || {}, [u]);
                        let s = Pt.exec(e),
                            i = e,
                            l = 0;
                        for (; s; ) {
                            const t = s[0],
                                n = It.exec(t),
                                c = Nt.exec(t),
                                d = s[1];
                            if (n && c) {
                                const e = n[0],
                                    s = e + l++ + e;
                                (i = i.replace(t, `%(${s})`)),
                                    (o[s] = kt[e]
                                        ? a().createElement(
                                              'span',
                                              { className: kt[e] },
                                              a().createElement(bt, { text: d, binding: u }),
                                          )
                                        : a().createElement(
                                              'span',
                                              { style: r(e) },
                                              a().createElement(bt, { text: d, binding: u }),
                                          ));
                            }
                            s = Pt.exec(e);
                        }
                        return a().createElement(bt, { text: i, classMix: t, binding: o });
                    }),
                    Mt = 'GradientText_text_75',
                    Ht = ({ text: e, className: u }) =>
                        a().createElement(
                            'div',
                            { className: D()('GradientText_base_ce', u) },
                            a().createElement('div', { className: D()(Mt, 'GradientText_text__hidden_01') }, e),
                            a().createElement('div', { className: D()(Mt, 'GradientText_text__basis_50') }, e),
                            a().createElement('div', { className: D()(Mt, 'GradientText_text__secondary_0e') }, e),
                            a().createElement(
                                'div',
                                { className: D()(Mt, 'GradientText_text__gradientColorize_e2') },
                                e,
                            ),
                        ),
                    Wt = R.strings.advent_calendar.mainView,
                    Vt = (0, K.Pi)(() => {
                        const e = Ae().model,
                            u = (() => {
                                switch (e.statePhase.get()) {
                                    case Ke.ACTIVE_PHASE:
                                        return {
                                            text: Wt.activePhase.subTitle(),
                                            binding: Ye(
                                                e.computes.activePhase().startDate,
                                                e.computes.postActivePhase().startDate,
                                            ),
                                        };
                                    case Ke.POST_ACTIVE_PHASE:
                                        return {
                                            text: Wt.postActivePhase.subTitle(),
                                            binding: { date: ze(e.computes.postActivePhase().endDate, !1) },
                                        };
                                }
                            })(),
                            t = e.computes.eventCompleted() || e.isIntroScreenVisible.get();
                        return a().createElement(
                            'span',
                            { className: D()('Header_base_4f', t && 'Header_base__hidden_40') },
                            a().createElement(
                                'div',
                                { className: 'Header_titleWrapper_d4' },
                                a().createElement(Ht, { className: 'Header_title_eb', text: Wt.title() }),
                                e.statePhase.get() === Ke.ACTIVE_PHASE &&
                                    a().createElement(
                                        su,
                                        {
                                            contentId:
                                                R.views.advent_calendar.lobby.feature.tooltips.AdventCalendarAllRewardsTooltip(
                                                    'resId',
                                                ),
                                        },
                                        a().createElement('div', { className: 'Header_infoButton_5e' }),
                                    ),
                            ),
                            a().createElement('div', { className: 'Header_subTitle_15' }, a().createElement(Lt, u)),
                            a().createElement('div', { className: 'Header_shadow_29' }),
                        );
                    }),
                    $t = {
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
                    Gt = [
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
                function Ut() {
                    return (
                        (Ut = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ut.apply(null, arguments)
                    );
                }
                class jt extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && q(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && q(this.props.soundClick);
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
                            d = e.onMouseUp,
                            E =
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
                                })(e, Gt)),
                            m = D()($t.base, $t[`base__${o}`], $t[`base__${r}`], null == s ? void 0 : s.base),
                            _ = D()($t.icon, $t[`icon__${o}`], $t[`icon__${r}`], null == s ? void 0 : s.icon),
                            A = D()($t.glow, null == s ? void 0 : s.glow),
                            g = D()($t.caption, $t[`caption__${o}`], null == s ? void 0 : s.caption),
                            f = D()($t.goto, null == s ? void 0 : s.goto);
                        return a().createElement(
                            'div',
                            Ut(
                                {
                                    className: m,
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
                            'info' !== o && a().createElement('div', { className: $t.shine }),
                            a().createElement('div', { className: _ }, a().createElement('div', { className: A })),
                            a().createElement('div', { className: g }, u),
                            n && a().createElement('div', { className: f }, n),
                        );
                    }
                }
                let qt, zt;
                (jt.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                    })(qt || (qt = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(zt || (zt = {}));
                const Yt = (e) => e.toString().padStart(2, '0'),
                    Kt = R.images.gui.maps.icons.components.countdown,
                    Xt = (e, u) => {
                        const t = 2 === u ? Kt.big : Kt;
                        switch (e) {
                            case qt.Timer:
                                return t.clock();
                            case qt.Countdown:
                                return t.hourglass();
                            case qt.Cooldown:
                                return t.lock();
                        }
                    },
                    Qt = (0, n.memo)(
                        ({
                            duration: e,
                            icon: u = qt.Timer,
                            style: t = zt.Description,
                            onTimeReached: r,
                            className: s = '',
                            classNames: i = {},
                        }) => {
                            const l = t !== zt.Description ? 1 : void 0,
                                c = At(e, l),
                                d = (() => {
                                    const e = (0, n.useState)(o.O.view.getScale()),
                                        u = e[0],
                                        t = e[1];
                                    return (
                                        (0, n.useEffect)(() => {
                                            const e = () => {
                                                t(o.O.view.getScale());
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
                            r && r[c] && r[c]();
                            const E = ((e, u) => {
                                switch (u) {
                                    case zt.Description:
                                        return ((e, u = !0) =>
                                            e.days > 7 && u
                                                ? Le(R.strings.common.duration.days(), { days: e.days })
                                                : e.days >= 1
                                                  ? 0 === e.hours
                                                      ? Le(R.strings.common.duration.days(), { days: e.days })
                                                      : `${Le(R.strings.common.duration.days(), { days: e.days })} ${Le(R.strings.common.duration.hours(), { hours: e.hours })}`
                                                  : e.hours >= 1
                                                    ? 0 === e.minutes
                                                        ? Le(R.strings.common.duration.hours(), { hours: e.hours })
                                                        : `${Le(R.strings.common.duration.hours(), { hours: e.hours })} ${Le(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                                    : Le(R.strings.common.duration.minutes(), {
                                                          minutes: e.minutes || 1,
                                                      }))(e);
                                    case zt.Short:
                                        return `${Yt(e.minutes)}:${Yt(e.seconds)}`;
                                    case zt.Long:
                                        return `${Yt(e.hours)}:${Yt(e.minutes)}:${Yt(e.seconds)}`;
                                    case zt.Extended:
                                        return `${Le(R.strings.common.duration.days(), { days: e.days })} | ${Yt(e.hours)}:${Yt(e.minutes)}:${Yt(e.seconds)}`;
                                }
                            })(
                                (function (e = 0) {
                                    let u = e;
                                    const t = Math.trunc(u / 86400);
                                    u -= 86400 * t;
                                    const n = Math.trunc(u / je);
                                    u -= n * je;
                                    const a = Math.trunc(u / 60);
                                    return (u -= 60 * a), { days: t, hours: n, minutes: a, seconds: u };
                                })(c),
                                t,
                            );
                            return a().createElement(
                                'div',
                                { className: D()('Countdown_base_fe', s) },
                                u !== qt.None &&
                                    a().createElement('div', {
                                        className: D()('Countdown_icon_8b', i.icon),
                                        style: { backgroundImage: `url('${Xt(u, d)}')` },
                                    }),
                                a().createElement('div', { className: D()('Countdown_description_8d', i.text) }, E),
                            );
                        },
                    ),
                    Zt = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Jt() {
                    return (
                        (Jt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Jt.apply(null, arguments)
                    );
                }
                const en = R.views.common.tooltip_window.simple_tooltip_content,
                    un = (e) => {
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
                            })(e, Zt);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: r, note: o, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, r, o, i]);
                        return a().createElement(
                            su,
                            Jt(
                                {
                                    contentId:
                                        ((d = null == i ? void 0 : i.hasHtmlContent),
                                        d ? en.SimpleTooltipHtmlContent('resId') : en.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    },
                    tn = {
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
                var nn;
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(nn || (nn = {}));
                const an = ['__left', '__right', '__top', '__bottom'],
                    rn =
                        ((0, n.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: u, onOutsideClick: t, customStyles: r = {} }, s) => {
                                const i = (0, n.useRef)(null),
                                    l = (0, n.useRef)(null),
                                    c = (0, n.useRef)(null),
                                    d = (0, n.useState)(window.decorator && window.decorator.directionType),
                                    E = d[0],
                                    m = d[1],
                                    _ = (0, n.useCallback)(() => {
                                        z.playClick(), o.O.view.sendEvent.close();
                                    }, []),
                                    A = (0, n.useCallback)(() => {
                                        z.playHighlight();
                                    }, []),
                                    g = D()(tn.arrow, tn[`arrow${an[E]}`]);
                                G(
                                    () => (
                                        o.O.client.events.mouse.enableOutside(),
                                        o.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (t ? t() : o.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const f = (0, n.useCallback)(
                                        (e) => {
                                            let u = e.target;
                                            do {
                                                if (u === i.current || u === c.current) return;
                                                u = u.parentNode;
                                            } while (u);
                                            const n = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = o.O.client.getMouseGlobalPosition(),
                                                    u = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    t =
                                                        e.x < n.boundX ||
                                                        e.x > n.boundX + n.boundWidth ||
                                                        e.y > n.boundY + n.boundHeight ||
                                                        e.y < n.boundY;
                                                if (u && !t) return;
                                            }
                                            t ? t() : o.O.view.sendEvent.close('popover');
                                        },
                                        [i, c, t],
                                    ),
                                    F = (function () {
                                        const e = (0, n.useRef)(0);
                                        return (
                                            U(() => {
                                                window.cancelAnimationFrame(e.current);
                                            }),
                                            (0, n.useMemo)(
                                                () => ({
                                                    run: (u) => {
                                                        window.cancelAnimationFrame(e.current),
                                                            (e.current = window.requestAnimationFrame(() => {
                                                                e.current = window.requestAnimationFrame(() => {
                                                                    u(), (e.current = 0);
                                                                });
                                                            }));
                                                    },
                                                    clear: () => {
                                                        window.cancelAnimationFrame(e.current), (e.current = 0);
                                                    },
                                                    get isRunning() {
                                                        return 0 !== e.current;
                                                    },
                                                }),
                                                [],
                                            )
                                        );
                                    })(),
                                    h = (0, n.useCallback)(() => {
                                        const e = l.current;
                                        if (e)
                                            return (
                                                o.O.view.freezeTextureBeforeResize(),
                                                F.run(() => {
                                                    const u = e.scrollWidth,
                                                        t = e.scrollHeight;
                                                    o.O.view.resize(u, t), m(window.decorator.directionType);
                                                })
                                            );
                                    }, [F]);
                                return (
                                    (0, n.useImperativeHandle)(s, () => ({ updateSize: h })),
                                    G(() => {
                                        o.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, n.useEffect)(() => {
                                        document.addEventListener('mousedown', f, { capture: !0 });
                                        const e = ((e) => {
                                            let u = !1;
                                            return {
                                                promise: new Promise((t, n) => {
                                                    e.then((e) => !u && t(e)).catch((e) => !u && n(e));
                                                }),
                                                cancel() {
                                                    u = !0;
                                                },
                                            };
                                        })((0, W.Eu)());
                                        return (
                                            !u && e.promise.then(() => h()),
                                            () => {
                                                e.cancel(), document.removeEventListener('mousedown', f);
                                            }
                                        );
                                    }, [h, f, u]),
                                    a().createElement(
                                        'div',
                                        { className: tn.base, ref: l },
                                        a().createElement(
                                            'div',
                                            { className: tn.decorator },
                                            a().createElement(
                                                'div',
                                                { className: tn.content, ref: i },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    a().createElement(
                                                        un,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        a().createElement('div', {
                                                            className: tn.closeBtn,
                                                            onClick: _,
                                                            onMouseEnter: A,
                                                            ref: c,
                                                        }),
                                                    ),
                                            ),
                                            a().createElement('div', { className: g, style: r.arrow }),
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
                function on() {
                    return (
                        (on = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        on.apply(null, arguments)
                    );
                }
                const sn = (e) => {
                        let u = e.contentId,
                            t = e.decoratorId,
                            r = e.direction,
                            o = void 0 === r ? nn.Top : r,
                            s = e.targetId,
                            i = e.args,
                            l = e.onClick,
                            c = e.children,
                            d = e.isEnabled,
                            E = void 0 === d || d,
                            m = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, rn);
                        const _ = (0, n.useRef)(null),
                            A = (0, n.useCallback)(() => {
                                if ((0, W.wU)()) return (0, W.SW)();
                                _.current && (0, W.P3)(u, o, _.current, t, s, i);
                            }, [u, o, i, t, s]);
                        return a().createElement(
                            'div',
                            on(
                                {
                                    ref: _,
                                    onMouseDown:
                                        ((g = c.props.onClick),
                                        (e) => {
                                            E && (A(), l && l(e), g && g(e));
                                        }),
                                },
                                m,
                            ),
                            c,
                        );
                        var g;
                    },
                    ln = ['children'];
                function cn() {
                    return (
                        (cn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        cn.apply(null, arguments)
                    );
                }
                const dn = (e) => {
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
                        })(e, ln);
                    return a().createElement(
                        su,
                        cn(
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
                function En() {
                    return (
                        (En = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        En.apply(null, arguments)
                    );
                }
                const mn = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = a().createElement('div', { className: t }, e);
                    if (u.header || u.body) return a().createElement(un, u, n);
                    const r = u.contentId;
                    return r ? a().createElement(su, En({}, u, { contentId: r }), n) : a().createElement(dn, u, n);
                };
                let _n, An, gn, fn, Fn, Dn, hn, Cn, pn;
                !(function (e) {
                    (e.Available = 'available'),
                        (e.AvailableExtra = 'availableExtra'),
                        (e.Collected = 'collected'),
                        (e.Finished = 'finished'),
                        (e.Unavailable = 'unavailable');
                })(_n || (_n = {})),
                    (function (e) {
                        (e.Available = 'available'),
                            (e.AvailableExtra = 'availableExtra'),
                            (e.Collected = 'collected'),
                            (e.Unavailable = 'unavailable'),
                            (e.Finished = 'finished');
                    })(An || (An = {})),
                    (function (e) {
                        (e.Undefined = 'undefined'),
                            (e.NewYear = 'NewYear'),
                            (e.Christmas = 'Christmas'),
                            (e.Fairytale = 'Fairytale'),
                            (e.Oriental = 'Oriental'),
                            (e.Soviet = 'soviet'),
                            (e.TraditionalWestern = 'traditionalWestern'),
                            (e.ModernWestern = 'modernWestern'),
                            (e.Asian = 'asian'),
                            (e.Mega = 'Mega'),
                            (e.GiftSystem = 'GiftSystem'),
                            (e.Cat = 'Cat'),
                            (e.Atm = 'Atm'),
                            (e.Gift2 = 'Gift2'),
                            (e.Bro = 'Bro'),
                            (e.Dog = 'Dog'),
                            (e.Surprise = 'Surprise');
                    })(gn || (gn = {})),
                    (function (e) {
                        (e.Crystal = 'ny_crystal'),
                            (e.Emerald = 'ny_emerald'),
                            (e.Amber = 'ny_amber'),
                            (e.Iron = 'ny_iron'),
                            (e.AnyResource = 'anyResource');
                    })(fn || (fn = {})),
                    (function (e) {
                        (e.XP = 'xpFactor'),
                            (e.TankmenXP = 'tankmenXPFactor'),
                            (e.FreeXp = 'freeXPFactor'),
                            (e.Credits = 'creditsFactor');
                    })(Fn || (Fn = {})),
                    (function (e) {
                        (e.NewYear = 'NewYear'),
                            (e.Christmas = 'Christmas'),
                            (e.Fairytale = 'Fairytale'),
                            (e.Oriental = 'Oriental');
                    })(Dn || (Dn = {})),
                    (function (e) {
                        (e.Level1 = 'level1'), (e.Level2 = 'level2'), (e.Level3 = 'level3'), (e.Level4 = 'level4');
                    })(hn || (hn = {})),
                    (function (e) {
                        (e.Zero = 'zero'), (e.Number = 'number'), (e.Default = 'default');
                    })(Cn || (Cn = {})),
                    (function (e) {
                        (e.Undefined = 'undefined'),
                            (e.ToEvent = 'toEvent'),
                            (e.ToGuestD = 'toGuestD'),
                            (e.ToGuestC = 'toGuestC'),
                            (e.ToMarkertplace = 'toMarkertplace'),
                            (e.ToGiftmachine = 'toGiftmachine'),
                            (e.ToRewards = 'toRewards');
                    })(pn || (pn = {}));
                const Bn = { gold: 'gold', integral: 'integral' },
                    vn = { [Bn.gold]: W.B3.GOLD, [Bn.integral]: W.B3.INTEGRAL };
                function wn(e, u = Bn.integral) {
                    return W.Z5.getNumberFormat(e, vn[u]);
                }
                wn.type = Bn;
                const bn = { number: wn },
                    yn = {
                        base: 'Resource_base_f1',
                        base__reverse: 'Resource_base__reverse_e4',
                        base__ny_crystal: 'Resource_base__ny_crystal_28',
                        base__ny_emerald: 'Resource_base__ny_emerald_55',
                        base__ny_amber: 'Resource_base__ny_amber_da',
                        base__ny_iron: 'Resource_base__ny_iron_99',
                        base__anyResource: 'Resource_base__anyResource_08',
                        valueWrapper: 'Resource_valueWrapper_64',
                        value: 'Resource_value_ac',
                        value__ghost: 'Resource_value__ghost_ba',
                        value__notEnough: 'Resource_value__notEnough_a5',
                        char__reduce: 'Resource_char__reduce_28',
                        icon: 'Resource_icon_76',
                        base__16: 'Resource_base__16_83',
                        base__20: 'Resource_base__20_d8',
                        base__24: 'Resource_base__24_a2',
                        base__28: 'Resource_base__28_7c',
                        base__32: 'Resource_base__32_a6',
                        base__40: 'Resource_base__40_1d',
                        base__48: 'Resource_base__48_9b',
                        iconEffect: 'Resource_iconEffect_a7',
                        iconEffect__reduce: 'Resource_iconEffect__reduce_9e',
                        base__reduce: 'Resource_base__reduce_be',
                        redResource: 'Resource_redResource_c9',
                        iconEffect__increase: 'Resource_iconEffect__increase_99',
                        base__increase: 'Resource_base__increase_18',
                        gainResource: 'Resource_gainResource_14',
                        increaseParticles: 'Resource_increaseParticles_05',
                        showParticles: 'Resource_showParticles_9d',
                    },
                    xn = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    },
                    Tn = { enter: 'translateY(100%)', reduce: 'translateY(-100%)', none: 'translateY(0%)' },
                    Sn = { leave: 'translateY(0%)', reduce: 'translateY(0%)', none: 'translateY(-100%)' },
                    Rn = ({ value: e, enterType: u, exitType: t }) => {
                        const n = a().useState(bn.number(e)),
                            r = n[0],
                            o = n[1];
                        a().useEffect(() => {
                            'none' !== t && o('');
                        }, [t]);
                        const s = a().useMemo(() => r.split('').map((e) => ({ char: e, key: Symbol() })), [r]),
                            i = (0, we.useTransition)(s, {
                                from: { transform: Tn[u], opacity: 'none' === u ? 1 : 0 },
                                enter: { transform: 'translateY(0%)', opacity: 1 },
                                leave: { transform: Sn[t], opacity: 0 },
                                keys: s.map((e) => e.key),
                                trail: 200,
                            });
                        return a().createElement(
                            a().Fragment,
                            null,
                            i((e, u) =>
                                a().createElement(
                                    we.animated.div,
                                    { className: D()(yn.char, yn[`char__${t}`]), style: e },
                                    u.char,
                                ),
                            ),
                        );
                    };
                let On;
                !(function (e) {
                    (e.s16 = '16'),
                        (e.s20 = '20'),
                        (e.s24 = '24'),
                        (e.s28 = '28'),
                        (e.s32 = '32'),
                        (e.s40 = '40'),
                        (e.s48 = '48'),
                        (e.Default = '24');
                })(On || (On = {}));
                const kn = ({
                    type: e,
                    value: u = 0,
                    size: t = On.Default,
                    isReverse: n,
                    classNames: r,
                    className: o,
                }) => {
                    var s;
                    const i = a().useState(u),
                        l = i[0],
                        c = i[1],
                        d = a().useRef(null),
                        E = null != (s = _t(l)) ? s : l,
                        m = a().useMemo(() => Symbol(), [l]);
                    a().useEffect(() => {
                        const e = d.current;
                        if (e)
                            return (
                                e.classList.remove(yn.base__reduce),
                                e.classList.remove(yn.base__increase),
                                X(() =>
                                    E > u
                                        ? (e.classList.add(yn.base__reduce),
                                          xn(() => {
                                              c(u);
                                          }, 50))
                                        : E < u
                                          ? (e.classList.add(yn.base__increase),
                                            xn(() => {
                                                c(u);
                                            }, 200))
                                          : void 0,
                                )
                            );
                    }, [E, u]);
                    const _ = (0, we.useTransition)(l, {
                        from: { opacity: l === E ? 1 : 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        keys: () => m,
                        config: { duration: 1200 },
                    });
                    return a().createElement(
                        'div',
                        {
                            ref: d,
                            className: D()(
                                yn.base,
                                yn[`base__${e}`],
                                yn[`base__${t}`],
                                n && yn.base__reverse,
                                null == r ? void 0 : r.base,
                                o,
                            ),
                        },
                        a().createElement(
                            'div',
                            { className: D()(yn.icon, null == r ? void 0 : r.icon) },
                            a().createElement('div', { className: D()(yn.iconEffect, yn.iconEffect__reduce) }),
                            a().createElement('div', { className: D()(yn.iconEffect, yn.iconEffect__increase) }),
                            a().createElement('div', { className: D()(yn.increaseParticles) }),
                        ),
                        a().createElement(
                            'div',
                            { className: D()(yn.value, null == r ? void 0 : r.value) },
                            _((e, u, t) =>
                                a().createElement(
                                    we.animated.div,
                                    { className: yn.valueWrapper, style: e },
                                    a().createElement(Rn, { value: u, enterType: In(l, E), exitType: Pn(l, u, t) }),
                                ),
                            ),
                            a().createElement('div', { className: yn.value__ghost }, bn.number(l)),
                        ),
                    );
                };
                function Pn(e, u, t) {
                    return e === u || 'mount' === t.phase ? 'none' : u > e ? 'reduce' : 'leave';
                }
                function In(e, u) {
                    return e === u ? 'none' : u > e ? 'reduce' : 'enter';
                }
                const Nn = a().memo((e) => {
                        if (e.withAnimation) return a().createElement(kn, e);
                        const u = e.type,
                            t = e.size,
                            n = void 0 === t ? On.Default : t,
                            r = e.isReverse,
                            o = e.isNotEnough,
                            s = e.classNames,
                            i = e.className,
                            l = e.value,
                            c = e.isError,
                            d = void 0 !== c && c;
                        return a().createElement(
                            'div',
                            {
                                className: D()(
                                    yn.base,
                                    yn[`base__${u}`],
                                    yn[`base__${n}`],
                                    r && yn.base__reverse,
                                    null == s ? void 0 : s.base,
                                    i,
                                ),
                            },
                            a().createElement('div', { className: D()(yn.icon, null == s ? void 0 : s.icon) }),
                            void 0 !== l &&
                                a().createElement(
                                    'div',
                                    {
                                        className: D()(
                                            yn.value,
                                            o && yn.value__notEnough,
                                            null == s ? void 0 : s.value,
                                        ),
                                    },
                                    e.additionalValue,
                                    d ? R.strings.ny.common.dashes() : bn.number(l),
                                ),
                        );
                    }),
                    Ln = R.strings.ny.resourceTooltip.unavailable,
                    Mn = ({ resources: e, isWalletAvailable: u = !0, hasAnimation: t = !1 }) =>
                        a().createElement(
                            un,
                            { header: Ln.header(), body: Ln.body(), isEnabled: !u },
                            a().createElement(
                                'div',
                                { className: 'ResourcePanel_base_1e' },
                                e.map(({ type: e, value: n }) =>
                                    a().createElement(
                                        'div',
                                        { key: e, className: 'ResourcePanel_item_83' },
                                        a().createElement(
                                            su,
                                            {
                                                contentId: R.views.lobby.new_year.tooltips.NyResourceTooltip('resId'),
                                                args: { type: e },
                                                isEnabled: u,
                                            },
                                            a().createElement(
                                                'div',
                                                null,
                                                a().createElement(Nn, {
                                                    withAnimation: t,
                                                    type: e,
                                                    isError: !u,
                                                    value: n,
                                                    size: On.s24,
                                                    classNames: { value: 'ResourcePanel_count_8d' },
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    Hn = {
                        base: 'TriggerHint_base_11',
                        bg: 'TriggerHint_bg_16',
                        base__blue: 'TriggerHint_base__blue_29',
                        content: 'TriggerHint_content_f8',
                        border: 'TriggerHint_border_87',
                        base__visible: 'TriggerHint_base__visible_ba',
                        triggerHolder: 'TriggerHint_triggerHolder_46',
                        base__right: 'TriggerHint_base__right_3e',
                        base__left: 'TriggerHint_base__left_dd',
                        base__up: 'TriggerHint_base__up_bb',
                        text: 'TriggerHint_text_f7',
                        animationArrow: 'TriggerHint_animationArrow_2c',
                        arrow: 'TriggerHint_arrow_fd',
                        blink: 'TriggerHint_blink_26',
                        base__cyan: 'TriggerHint_base__cyan_5d',
                        base__withoutAnimation: 'TriggerHint_base__withoutAnimation_19',
                    };
                let Wn, Vn;
                !(function (e) {
                    (e.Blue = 'blue'), (e.Cyan = 'cyan');
                })(Wn || (Wn = {})),
                    (function (e) {
                        (e.Right = 'right'), (e.Left = 'left'), (e.Up = 'up'), (e.Down = 'down');
                    })(Vn || (Vn = {}));
                const $n = ({
                        direction: e = Vn.Right,
                        text: u,
                        isVisible: t,
                        children: n,
                        hintType: r = Wn.Blue,
                        classNames: s,
                    }) => {
                        const i = o.O.client.graphicsQuality.isLow();
                        return a().createElement(
                            'div',
                            {
                                className: D()(
                                    Hn.base,
                                    Hn[`base__${r}`],
                                    Hn[`base__${e}`],
                                    t && Hn.base__visible,
                                    i && Hn.base__withoutAnimation,
                                    null == s ? void 0 : s.base,
                                ),
                            },
                            a().createElement(
                                'div',
                                { className: D()(Hn.content, null == s ? void 0 : s.content) },
                                a().createElement('div', { className: D()(Hn.border, null == s ? void 0 : s.border) }),
                                n,
                            ),
                            a().createElement(
                                'div',
                                { className: D()(Hn.triggerHolder, null == s ? void 0 : s.holder) },
                                a().createElement('div', { className: D()(Hn.bg, null == s ? void 0 : s.arrowBg) }),
                                a().createElement(
                                    'div',
                                    { className: D()(Hn.animationArrow, null == s ? void 0 : s.arrow) },
                                    a().createElement('div', { className: Hn.arrow }),
                                ),
                                a().createElement('div', { className: D()(Hn.text, null == s ? void 0 : s.text) }, u),
                            ),
                        );
                    },
                    Gn = {
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
                    Un = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function jn() {
                    return (
                        (jn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        jn.apply(null, arguments)
                    );
                }
                const qn = (e) => {
                    let u = e.size,
                        t = e.value,
                        n = e.isEmpty,
                        r = e.fadeInAnimation,
                        o = e.hide,
                        s = e.maximumNumber,
                        i = e.className,
                        l = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, Un);
                    const c = n ? null : t,
                        d = 'string' == typeof c;
                    if ((c && !d && c < 0) || 0 === c) return null;
                    const E = c && !d && c > s,
                        m = D()(
                            Gn.base,
                            Gn[`base__${u}`],
                            r && Gn.base__animated,
                            o && Gn.base__hidden,
                            !c && Gn.base__pattern,
                            n && Gn.base__empty,
                            i,
                        );
                    return a().createElement(
                        'div',
                        jn({ className: m }, l),
                        a().createElement('div', { className: Gn.bg }),
                        a().createElement('div', { className: Gn.pattern }),
                        a().createElement(
                            'div',
                            { className: D()(Gn.value, d && Gn.value__text) },
                            E ? s : c,
                            E && a().createElement('span', { className: Gn.plus }, '+'),
                        ),
                    );
                };
                qn.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const zn = {
                    base: 'BalanceButton_base_de',
                    base__disabled: 'BalanceButton_base__disabled_57',
                    background: 'BalanceButton_background_60',
                    border: 'BalanceButton_border_b2',
                    lightWrapper: 'BalanceButton_lightWrapper_16',
                    light: 'BalanceButton_light_f9',
                    icon: 'BalanceButton_icon_aa',
                    base__convert: 'BalanceButton_base__convert_cc',
                    base__extra: 'BalanceButton_base__extra_ef',
                    bubble: 'BalanceButton_bubble_f3',
                };
                let Yn;
                !(function (e) {
                    (e.Collect = 'collect'), (e.Extra = 'extra'), (e.Convert = 'convert');
                })(Yn || (Yn = {}));
                const Kn = ({ type: e, isBubbleVisible: u, isDisabled: t, onClick: r }) => {
                        const o = w().mediaSize,
                            s = viewEnv.getScale(),
                            i = (0, n.useState)(!1),
                            l = i[0],
                            c = i[1],
                            d = o >= p.Medium ? 6 : 4;
                        return a().createElement(
                            'div',
                            {
                                className: D()(zn.base, t && zn.base__disabled, l && zn.base__hover, zn[`base__${e}`]),
                                onClick: () => {
                                    t || (q(R.sounds.play()), null == r || r());
                                },
                                onMouseEnter: () => {
                                    t || (q(R.sounds.highlight_red_butt()), c(!0));
                                },
                                onMouseLeave: () => c(!1),
                            },
                            a().createElement(
                                'svg',
                                { className: zn.background, viewBox: '0 0 100% 100%' },
                                a().createElement(
                                    'defs',
                                    null,
                                    a().createElement(
                                        'linearGradient',
                                        {
                                            id: 'bg-gradient',
                                            gradientUnits: 'userSpaceOnUse',
                                            x1: '0%',
                                            y1: '0%',
                                            x2: '0%',
                                            y2: '100%',
                                        },
                                        l
                                            ? a().createElement(
                                                  a().Fragment,
                                                  null,
                                                  a().createElement('stop', { offset: '8%', stopColor: '#639DFF' }),
                                                  a().createElement('stop', { offset: '88%', stopColor: '#2A45BB' }),
                                              )
                                            : t
                                              ? a().createElement(
                                                    a().Fragment,
                                                    null,
                                                    a().createElement('stop', { offset: '-4%', stopColor: '#1F2A87' }),
                                                    a().createElement('stop', { offset: '99%', stopColor: '#4160CD' }),
                                                )
                                              : a().createElement(
                                                    a().Fragment,
                                                    null,
                                                    a().createElement('stop', { offset: '8%', stopColor: '#4983E5' }),
                                                    a().createElement('stop', { offset: '88%', stopColor: '#1C36A3' }),
                                                ),
                                    ),
                                ),
                                a().createElement('rect', {
                                    x: '0%',
                                    y: '0%',
                                    width: '100%',
                                    height: '100%',
                                    rx: d * s,
                                    fill: 'url(#bg-gradient)',
                                }),
                            ),
                            a().createElement('div', { className: zn.border }),
                            a().createElement(
                                'div',
                                { className: zn.lightWrapper },
                                a().createElement('div', { className: zn.light }),
                            ),
                            a().createElement('div', { className: zn.icon }),
                            u &&
                                a().createElement(
                                    'div',
                                    { className: zn.bubble },
                                    a().createElement(qn, { size: 'small', isEmpty: !0 }),
                                ),
                        );
                    },
                    Xn = ie()(
                        ({ observableModel: e }) => {
                            const u = { root: e.object(), resources: e.array('resources', []) },
                                t = (0, Ee.Om)(() => ce(u.resources.get(), (e) => ({ type: e.type, value: e.value })));
                            return Object.assign({}, u, {
                                computes: {
                                    getResources: t,
                                    collectState: (0, Ee.Om)(() => u.root.get().collectState),
                                    collectCooldown: (0, Ee.Om)(() => u.root.get().collectCooldown),
                                    isResourcesTabOpen: (0, Ee.Om)(() => u.root.get().isResourcesTabOpen),
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            collectResources: e.createCallbackNoArgs('onCollectResources'),
                            convertResources: e.createCallbackNoArgs('onConvertResources'),
                            goToResources: e.createCallbackNoArgs('onGoToResources'),
                        }),
                    ),
                    Qn = Xn[0],
                    Zn = Xn[1],
                    Jn = R.strings.ny.mainView.balance.convertBtn.tooltip,
                    ea = [_n.Available, _n.AvailableExtra],
                    ua = {
                        [_n.Available]: An.Available,
                        [_n.AvailableExtra]: An.AvailableExtra,
                        [_n.Collected]: An.Collected,
                        [_n.Unavailable]: An.Available,
                        [_n.Finished]: An.Finished,
                    },
                    ta = (e) => ({
                        contentId: R.views.lobby.new_year.tooltips.NyResourceCollectorTooltip('resId'),
                        args: { type: ua[e] },
                    }),
                    na = (0, K.Pi)(({ isFriendHangar: e = !1 }) => {
                        const u = Zn(),
                            t = u.model,
                            n = u.controls,
                            r = t.root.get(),
                            o = r.isWalletAvailable,
                            s = r.isHintVisible,
                            i = t.computes,
                            l = i.collectState,
                            c = i.collectCooldown,
                            d = i.isResourcesTabOpen,
                            E = i.getResources,
                            m = n.collectResources,
                            _ = n.convertResources,
                            A = l() === _n.AvailableExtra ? Yn.Extra : Yn.Collect,
                            g = !d() && !e,
                            f = ea.includes(l()) && o,
                            F = c() > 0 && l() === _n.Collected;
                        return a().createElement(
                            'div',
                            { className: 'Balance_base_93' },
                            !e &&
                                a().createElement(
                                    mn,
                                    { tooltipArgs: ta(l()) },
                                    a().createElement(
                                        'div',
                                        { className: 'Balance_collectWrapper_25' },
                                        F &&
                                            a().createElement(Qt, {
                                                duration: c(),
                                                icon: qt.Timer,
                                                style: zt.Description,
                                                classNames: { text: 'Balance_countdownText_3d' },
                                            }),
                                        a().createElement(
                                            'div',
                                            { className: 'Balance_collectButton_d4' },
                                            a().createElement(
                                                $n,
                                                {
                                                    isVisible: s,
                                                    text: R.strings.ny.triggerHints.Resources(),
                                                    direction: Vn.Left,
                                                    classNames: { border: 'Balance_triggerHintBorder_68' },
                                                },
                                                a().createElement(Kn, {
                                                    type: A,
                                                    isBubbleVisible: f,
                                                    isDisabled: d(),
                                                    onClick: m,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            a().createElement(
                                'div',
                                {
                                    className: D()('Balance_resources_6d', g && 'Balance_resources__clickable_2e'),
                                    onClick: () => g && n.goToResources(),
                                },
                                a().createElement(Mn, { resources: E(), isWalletAvailable: o, hasAnimation: o }),
                            ),
                            a().createElement(
                                sn,
                                {
                                    contentId: R.views.lobby.new_year.popovers.NyResourcesConvertPopover('resId'),
                                    direction: nn.Bottom,
                                },
                                a().createElement(
                                    un,
                                    { header: Jn.header(), body: Jn.body() },
                                    a().createElement(Kn, { type: Yn.Convert, onClick: _ }),
                                ),
                            ),
                        );
                    }),
                    aa = 'Navigation_hidden_09',
                    ra = { context: 'model.balance' },
                    oa = (0, K.Pi)(() => {
                        const e = Ae(),
                            u = e.model,
                            t = e.controls,
                            n = u.isIntroScreenVisible.get(),
                            r = u.computes.eventCompleted(),
                            o = u.statePhase.get() === Ke.ACTIVE_PHASE;
                        return a().createElement(
                            'div',
                            { className: 'Navigation_base_3f' },
                            a().createElement(jt, {
                                caption: R.strings.advent_calendar.mainView.navigation.aboutEventBtn.label(),
                                type: 'info',
                                side: 'left',
                                onClick: t.infoClick,
                                classNames: { base: D()('Navigation_info_60', (n || r) && aa) },
                            }),
                            a().createElement(
                                'div',
                                { className: 'Navigation_right_f4' },
                                a().createElement(
                                    'div',
                                    {
                                        className: D()('Navigation_balance_ae', (n || r || o) && aa),
                                        style: { color: 'white' },
                                    },
                                    a().createElement(
                                        Qn,
                                        { options: ra },
                                        a().createElement(na, { isFriendHangar: !1 }),
                                    ),
                                ),
                                a().createElement(jt, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: t.close,
                                    classNames: { base: D()('Navigation_close_69', n && aa) },
                                }),
                            ),
                        );
                    }),
                    sa = R.images.advent_calendar.gui.maps.icons.mainView,
                    ia = [
                        sa.readyToOpen.c_160x1x1(),
                        sa.readyToOpen.c_160x2x1(),
                        sa.readyToOpen.c_160x3x1(),
                        sa.readyToOpen.c_160x1x2(),
                        sa.sequence.tearOff(),
                        sa.sequence.hover(),
                    ],
                    la = (0, K.Pi)(() => {
                        const e = Ae(),
                            u = e.model,
                            t = e.controls,
                            r = De().trigger,
                            o = j();
                        var s;
                        (s = t.close),
                            $(H.n.ESCAPE, s),
                            (() => {
                                const e = ee().mediaSize;
                                (0, n.useEffect)(() => {
                                    if (ue[e])
                                        return (
                                            document.body.classList.add(ue[e]),
                                            () => document.body.classList.remove(ue[e])
                                        );
                                }, [e]);
                            })();
                        const i = Z(ia) !== Q.Pending,
                            l = (e) => {
                                Object.values(u.doors.get())
                                    .filter((e) => e.openAnimationRequired && e.doorState === L.READY_TO_OPEN)
                                    .sort((e, u) => e.dayId - u.dayId)
                                    .forEach((u, t) => {
                                        r('onTearOff', u.dayId, t, e);
                                    });
                            };
                        return (
                            G(() => (o.run(() => l(0), 1e3), () => o.clear())),
                            G(() => {
                                if (!u.computes.eventCompleted())
                                    return (0, Y.gx)(
                                        () => u.computes.eventCompleted(),
                                        () => q('adv_postcard'),
                                    );
                            }),
                            G(() =>
                                (0, Y.U5)(
                                    () => u.doors.get(),
                                    () => l(0),
                                    { delay: 400 },
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: 'App_base_12', lang: R.strings.settings.LANGUAGE_CODE() },
                                a().createElement(
                                    'div',
                                    {
                                        className: D()(
                                            'App_content_ad',
                                            i && u.isAnimationEnabled.get()
                                                ? 'App_content__ready_be'
                                                : 'App_content__slowReady_51',
                                            u.showBlur.get() && 'App_content__blurred_8c',
                                        ),
                                    },
                                    a().createElement('div', { className: 'App_background_d4' }),
                                    a().createElement('div', { className: 'App_vignette_0c' }),
                                    a().createElement(oa, null),
                                    a().createElement(Vt, null),
                                    i && a().createElement(it, null),
                                    a().createElement(Ot, null),
                                ),
                            )
                        );
                    }),
                    ca = {
                        statePhase: Ke.ACTIVE_PHASE,
                        doors: ((e, u) => {
                            const t = [];
                            for (let e = 0; e < 31; e++) t.push(u(e));
                            return t;
                        })(0, (e) => {
                            const u = e + 1;
                            return {
                                dayId: u,
                                price: 70,
                                mark: [5].includes(u)
                                    ? M.WDR
                                    : [6].includes(u)
                                      ? M.NY
                                      : [31].includes(u)
                                        ? M.NY_EVENT
                                        : M.NONE,
                                doorState: [1, 25].includes(u)
                                    ? L.READY_TO_OPEN
                                    : [5, 6, 13, 18, 8, 21, 31].includes(u)
                                      ? L.CLOSED
                                      : L.OPENED,
                                isEnoughResources: !0,
                                openAnimationRequired: !1,
                                openTimeStamp: Date.now() / 1e3 + 86400 * e,
                            };
                        }),
                        startTime: Date.now() / 1e3,
                        holidayOpsStartTime: Date.now() / 1e3 + 345600,
                        postEventStartDate: Date.now() / 1e3 + 216e4,
                        postEventEndDate: Date.now() / 1e3 + 2678400,
                        showBlur: !1,
                        progression: { isCompleted: !1 },
                        progressionRewards: [
                            {
                                requiredOpenedDoorsAmount: 3,
                                actualOpenedDoorsAmount: 2,
                                state: lt.REWARD_IN_PROGRESS,
                                tooltipContentId: 0,
                                rewardType: ct.GIFT_MACHINE_TOKEN,
                            },
                            {
                                requiredOpenedDoorsAmount: 7,
                                actualOpenedDoorsAmount: 2,
                                state: lt.REWARD_IN_PROGRESS,
                                tooltipContentId: 0,
                                rewardType: ct.CREW_MEMBER,
                            },
                            {
                                requiredOpenedDoorsAmount: 13,
                                actualOpenedDoorsAmount: 2,
                                state: lt.REWARD_IN_PROGRESS,
                                tooltipContentId: 0,
                                rewardType: ct.BIG_LOOTBOX,
                            },
                        ],
                        balance: { isWalletAvailable: !0 },
                        event: { eventType: '', payload: null },
                    },
                    da = {
                        getter: (e) => {
                            switch (e) {
                                case 'doors':
                                    return ca.doors;
                                case 'progressionRewards.rewards':
                                    return ca.progressionRewards;
                                case 'balance':
                                    return ca.balance;
                                case 'event':
                                    return ca.event;
                                case 'progressionRewards':
                                    return ca.progression;
                                default:
                                    return ca;
                            }
                        },
                        controls: ({ model: e }) =>
                            (function (e) {
                                const u = {};
                                for (const t in e)
                                    if (Object.prototype.hasOwnProperty.call(e, t)) {
                                        const n = e[t];
                                        u[t] = (0, Y.aD)(n);
                                    }
                                return u;
                            })({
                                close: () => window.model.onClose(),
                                showReward: ne,
                                showPurchaseDialog: ne,
                                animationCompleted: ne,
                                openDoor: (u) => {
                                    const t = e.doors.get();
                                    (t[5] = Object.assign({}, t[5], {
                                        doorState: L.READY_TO_OPEN,
                                        openAnimationRequired: !0,
                                    })),
                                        (t[u] = Object.assign({}, t[u], { doorState: L.OPENED })),
                                        e.doors.set(Object.assign({}, t));
                                },
                                openDownloadLink: ne,
                                infoClick: ne,
                            }),
                    };
                engine.whenReady.then(() => {
                    N().render(
                        a().createElement(
                            P,
                            null,
                            a().createElement(
                                _e,
                                { mode: 'real', mocks: da },
                                a().createElement(Fe, null, a().createElement(la, null)),
                            ),
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
        (__webpack_require__.j = 159),
        (() => {
            var e = { 159: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(8693));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
