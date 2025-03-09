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
                t.r(e),
                    t.d(e, { mouse: () => E, off: () => s, on: () => o, onResize: () => a, onScaleUpdated: () => i });
                var n = t(472),
                    r = t(176);
                const a = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    o = (u, e) => engine.on(u, e),
                    s = (u, e) => engine.off(u, e),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    E = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            u.enabled && (0, r.R)(!0);
                        }
                        function n() {
                            u.enabled
                                ? u.listeners < 1
                                    ? ((u.initialized = !1),
                                      document.body.removeEventListener('mouseenter', e),
                                      document.body.removeEventListener('mouseleave', t))
                                    : u.initialized ||
                                      ((u.initialized = !0),
                                      document.body.addEventListener('mouseenter', e),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, r.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let r = !0;
                                        const a = `mouse${e}`,
                                            i = l[e]((u) => t([u, 'outside']));
                                        function o(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, o),
                                            n(),
                                            () => {
                                                r &&
                                                    (i(),
                                                    window.removeEventListener(a, o),
                                                    (u.listeners -= 1),
                                                    n(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                e
                            ),
                            {},
                        );
                        return Object.assign({}, a, {
                            disable() {
                                (u.enabled = !1), n();
                            },
                            enable() {
                                (u.enabled = !0), n();
                            },
                            enableOutside() {
                                u.enabled && (0, r.R)(!0);
                            },
                            disableOutside() {
                                u.enabled && (0, r.R)(!1);
                            },
                        });
                    })();
            },
            959: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => a,
                        graphicsQuality: () => o,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = t(527),
                    r = t(493);
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (u, e, t) => {
                'use strict';
                function n(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => n });
            },
            493: (u, e, t) => {
                'use strict';
                function n(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function r(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                t.d(e, { E: () => r, G: () => n });
            },
            472: (u, e, t) => {
                'use strict';
                function n(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => n });
            },
            138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => a });
                var n = t(959),
                    r = t(514);
                const a = { view: t(641), client: n, sound: r.ZP };
            },
            514: (u, e, t) => {
                'use strict';
                t.d(e, { ZP: () => i });
                var n = t(959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((u, e) => ((u[e] = () => (0, n.playSound)(r[e])), u), {}),
                    i = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            722: (u, e, t) => {
                'use strict';
                function n(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function r(u, e, t) {
                    return `url(${n(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => r });
                var n = t(472);
                const r = {
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
            641: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => S,
                        events: () => a.U,
                        extraSize: () => T,
                        forceTriggerMouseMove: () => w,
                        freezeTextureBeforeResize: () => _,
                        getBrowserTexturePath: () => E,
                        getDisplayStatus: () => b,
                        getFontNames: () => f,
                        getScale: () => m,
                        getSize: () => d,
                        getViewGlobalPosition: () => D,
                        isEventHandled: () => v,
                        isFocused: () => h,
                        pxToRem: () => B,
                        remToPx: () => C,
                        resize: () => F,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => x,
                    });
                var n = t(722),
                    r = t(112),
                    a = t(538),
                    i = t(566);
                const o = 15;
                function s(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function l(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, o);
                }
                function E(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function c(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function A(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, o);
                }
                function d(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function D(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: C(e.x), y: C(e.y) };
                }
                function _() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function m() {
                    return viewEnv.getScale();
                }
                function B(u) {
                    return viewEnv.pxToRem(u);
                }
                function C(u) {
                    return viewEnv.remToPx(u);
                }
                function g(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function w() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const f = (() => {
                        let u = [];
                        return () => (0 === u.length && (u = Object.keys(viewEnv.getFontsConfig())), u);
                    })(),
                    S = Object.keys(r.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === r.W[e]), u),
                        {},
                    ),
                    T = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    x = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : a.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => a });
                const n = ['args'],
                    r = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    a = {
                        close(u) {
                            r('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(u) {
                            r(16, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            521: (u, e, t) => {
                'use strict';
                let n, r;
                t.d(e, { n: () => n }),
                    (function (u) {
                        (u[(u.NONE = -1)] = 'NONE'),
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
                            (u[(u.KEY_9 = 57)] = 'KEY_9');
                    })(n || (n = {})),
                    (function (u) {
                        (u.ALT = 'Alt'),
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
                            (u.SYMBOL_LOCK = 'SymbolLock');
                    })(r || (r = {}));
            },
            358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => a });
                var n = t(138);
                class r {
                    constructor() {
                        (this._callbacks = void 0),
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
                            (this._updateHandler = void 0);
                    }
                    static get instance() {
                        return window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(u, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", u),
                            a
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(u, e);
                        });
                    }
                }
                r.__instance = void 0;
                const a = r;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(916);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(u) {
                        this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data);
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            916: (u, e, t) => {
                'use strict';
                t.d(e, { B3: () => l, Z5: () => i.Z5, B0: () => o, ry: () => B });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let n = u.target;
                                    do {
                                        if (n === e) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            n = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== n)),
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
                const r = n;
                var a = t(358),
                    i = t(613);
                let o;
                var s;
                ((s = o || (o = {}))[(s.UNDEFINED = 0)] = 'UNDEFINED'),
                    (s[(s.TOOLTIP = 1)] = 'TOOLTIP'),
                    (s[(s.POP_OVER = 2)] = 'POP_OVER'),
                    (s[(s.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (s[(s.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (s[(s.MOVE = 16)] = 'MOVE'),
                    (s[(s.CLOSE = 32)] = 'CLOSE'),
                    (s[(s.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(521),
                    F = t(138);
                const D = ['args'];
                function _(u, e, t, n, r, a, i) {
                    try {
                        var o = u[a](i),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(n, r);
                }
                const m = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    B = (function () {
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
                                    return new Promise(function (n, r) {
                                        var a = u.apply(e, t);
                                        function i(u) {
                                            _(a, n, r, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            _(a, n, r, i, o, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, D);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    g = () => C(o.CLOSE),
                    h = (u, e) => {
                        u.keyCode === d.n.ESCAPE && e();
                    };
                var p = t(572);
                const v = r.instance,
                    w = {
                        DataTracker: a.Z,
                        ViewModel: p.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: E,
                        TimeFormatType: c,
                        DateFormatType: A,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (u) => C(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => C(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            C(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, r = R.invalid('resId'), a) => {
                            const i = F.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                E = s.y,
                                c = s.width,
                                A = s.height,
                                d = {
                                    x: F.O.view.pxToRem(l) + i.x,
                                    y: F.O.view.pxToRem(E) + i.y,
                                    width: F.O.view.pxToRem(c),
                                    height: F.O.view.pxToRem(A),
                                };
                            C(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: e,
                                bbox: m(d),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => h(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            h(u, g);
                        },
                        handleViewEvent: C,
                        onBindingsReady: B,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const r = Object.prototype.toString.call(e[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < r.length; e++) t[n].push({ value: u(r[e].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = w;
            },
            613: (u, e, t) => {
                'use strict';
                t.d(e, { Ew: () => a, Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    r = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    a = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            228: (u, e, t) => {
                'use strict';
                var n = {};
                t.r(n);
                var r = t(363),
                    a = t.n(r);
                const i = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var o = t(138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function E(u, e, t) {
                    const n = (function (u, e) {
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
                        r = (function (u, e) {
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
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
                    };
                }
                !(function (u) {
                    (u.extraLarge = 'extraLarge'),
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
                        (u.extraSmallHeight = 'extraSmallHeight');
                })(l || (l = {}));
                const c = o.O.client.getSize('rem'),
                    A = c.width,
                    d = c.height,
                    F = Object.assign({ width: A, height: d }, E(A, d, s)),
                    D = (0, r.createContext)(F),
                    _ = ['children'],
                    m = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, _);
                        const n = (0, r.useContext)(D),
                            a = n.extraLarge,
                            o = n.large,
                            s = n.medium,
                            l = n.small,
                            E = n.extraSmall,
                            c = n.extraLargeWidth,
                            A = n.largeWidth,
                            d = n.mediumWidth,
                            F = n.smallWidth,
                            m = n.extraSmallWidth,
                            B = n.extraLargeHeight,
                            C = n.largeHeight,
                            g = n.mediumHeight,
                            h = n.smallHeight,
                            p = n.extraSmallHeight,
                            v = { extraLarge: B, large: C, medium: g, small: h, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && a) return e;
                            if (t.large && o) return e;
                            if (t.medium && s) return e;
                            if (t.small && l) return e;
                            if (t.extraSmall && E) return e;
                        } else {
                            if (t.extraLargeWidth && c) return i(e, t, v);
                            if (t.largeWidth && A) return i(e, t, v);
                            if (t.mediumWidth && d) return i(e, t, v);
                            if (t.smallWidth && F) return i(e, t, v);
                            if (t.extraSmallWidth && m) return i(e, t, v);
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
                                if (t.extraSmallHeight && p) return e;
                            }
                        }
                        return null;
                    };
                (m.defaultProps = {
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
                    (0, r.memo)(m);
                const B = ({ children: u }) => {
                    const e = (0, r.useContext)(D),
                        t = (0, r.useState)(e),
                        n = t[0],
                        i = t[1],
                        l = (0, r.useCallback)((u, e) => {
                            const t = o.O.view.pxToRem(u),
                                n = o.O.view.pxToRem(e);
                            i(Object.assign({ width: t, height: n }, E(t, n, s)));
                        }, []),
                        c = (0, r.useCallback)(() => {
                            const u = o.O.client.getSize('px');
                            l(u.width, u.height);
                        }, [l]);
                    ((u) => {
                        const e = (0, r.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    })(() => {
                        o.O.client.events.on('clientResized', l), o.O.client.events.on('self.onScaleUpdated', c);
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                o.O.client.events.off('clientResized', l),
                                    o.O.client.events.off('self.onScaleUpdated', c);
                            },
                            [l, c],
                        );
                    const A = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                    return a().createElement(D.Provider, { value: A }, u);
                };
                var C = t(483),
                    g = t.n(C),
                    h = t(926),
                    p = t.n(h);
                let v, w, b;
                var f;
                ((f = v || (v = {}))[(f.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                    (f[(f.Small = s.small.width)] = 'Small'),
                    (f[(f.Medium = s.medium.width)] = 'Medium'),
                    (f[(f.Large = s.large.width)] = 'Large'),
                    (f[(f.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'),
                    (function (u) {
                        (u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.width)] = 'Small'),
                            (u[(u.Medium = s.medium.width)] = 'Medium'),
                            (u[(u.Large = s.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(w || (w = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.height)] = 'Small'),
                            (u[(u.Medium = s.medium.height)] = 'Medium'),
                            (u[(u.Large = s.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(b || (b = {}));
                const S = () => {
                        const u = (0, r.useContext)(D),
                            e = u.width,
                            t = u.height,
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return v.ExtraLarge;
                                    case u.large:
                                        return v.Large;
                                    case u.medium:
                                        return v.Medium;
                                    case u.small:
                                        return v.Small;
                                    case u.extraSmall:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(u),
                            a = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return w.ExtraLarge;
                                    case u.largeWidth:
                                        return w.Large;
                                    case u.mediumWidth:
                                        return w.Medium;
                                    case u.smallWidth:
                                        return w.Small;
                                    case u.extraSmallWidth:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(u),
                            i = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return b.ExtraLarge;
                                    case u.largeHeight:
                                        return b.Large;
                                    case u.mediumHeight:
                                        return b.Medium;
                                    case u.smallHeight:
                                        return b.Small;
                                    case u.extraSmallHeight:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: i, remScreenWidth: e, remScreenHeight: t };
                    },
                    T = ['children', 'className'];
                function x() {
                    return (
                        (x = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        x.apply(null, arguments)
                    );
                }
                const y = {
                        [w.ExtraSmall]: '',
                        [w.Small]: p().SMALL_WIDTH,
                        [w.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [w.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    O = {
                        [b.ExtraSmall]: '',
                        [b.Small]: p().SMALL_HEIGHT,
                        [b.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [b.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    P = {
                        [v.ExtraSmall]: '',
                        [v.Small]: p().SMALL,
                        [v.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [v.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [v.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    L = (u) => {
                        let e = u.children,
                            t = u.className,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, T);
                        const r = S(),
                            i = r.mediaWidth,
                            o = r.mediaHeight,
                            s = r.mediaSize;
                        return a().createElement('div', x({ className: g()(t, y[i], O[o], P[s]) }, n), e);
                    },
                    M = ['children'],
                    I = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, M);
                        return a().createElement(B, null, a().createElement(L, t, e));
                    };
                var k = t(533),
                    N = t.n(k);
                function U(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const H = {
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
                    G = [
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
                function W() {
                    return (
                        (W = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        W.apply(null, arguments)
                    );
                }
                class $ extends a().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && U(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && U(this.props.soundClick);
                            }),
                            (this._onMouseUp = (u) => (e) => {
                                u && u(e), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const u = this.props,
                            e = u.caption,
                            t = u.onClick,
                            n = u.goto,
                            r = u.side,
                            i = u.type,
                            o = u.classNames,
                            s = u.onMouseEnter,
                            l = u.onMouseLeave,
                            E = u.onMouseDown,
                            c = u.onMouseUp,
                            A =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(u, G)),
                            d = g()(H.base, H[`base__${i}`], H[`base__${r}`], null == o ? void 0 : o.base),
                            F = g()(H.icon, H[`icon__${i}`], H[`icon__${r}`], null == o ? void 0 : o.icon),
                            D = g()(H.glow, null == o ? void 0 : o.glow),
                            _ = g()(H.caption, H[`caption__${i}`], null == o ? void 0 : o.caption),
                            m = g()(H.goto, null == o ? void 0 : o.goto);
                        return a().createElement(
                            'div',
                            W(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(c),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== i && a().createElement('div', { className: H.shine }),
                            a().createElement('div', { className: F }, a().createElement('div', { className: D })),
                            a().createElement('div', { className: _ }, e),
                            n && a().createElement('div', { className: m }, n),
                        );
                    }
                }
                let q, z;
                ($.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (u) {
                        (u.RegularDay = 'regularDay'),
                            (u.SpecialDay = 'specialDay'),
                            (u.ProgressionQuest = 'progressionQuest');
                    })(q || (q = {})),
                    (function (u) {
                        (u.OPEN_DOOR_SUCCESS = 'openDoorSuccess'),
                            (u.OPEN_DOOR_FAILED = 'openDoorFailed'),
                            (u.OPEN_DOOR_UNDEFINED = 'openDoorUndefined');
                    })(z || (z = {}));
                var V = t(521),
                    j = t(916);
                const Y = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function X(u = V.n.NONE, e = Y, t = !1, n = !1) {
                    (0, r.useEffect)(() => {
                        if (u !== V.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === u) {
                                if (!n && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), e(r), t && r.stopPropagation();
                            }
                        }
                    }, [e, u, t, n]);
                }
                const Q = (u) => {
                    (0, r.useEffect)(u, []);
                };
                var K = t(174),
                    Z = t(403),
                    J = t(30);
                const uu = Object.assign({}, v, { UltraLarge: 2560, UltraSmall: 0 }),
                    eu = () => {
                        const u = S(),
                            e = u.mediaSize,
                            t = u.remScreenWidth,
                            n = u.remScreenHeight;
                        return {
                            mediaSize:
                                ((r = n),
                                t < w.ExtraSmall || r < b.ExtraSmall
                                    ? uu.UltraSmall
                                    : ((u, e) => u >= 2560 && e >= 1440)(t, n)
                                      ? uu.UltraLarge
                                      : e),
                        };
                        var r;
                    },
                    tu = [
                        ['1', '9', '7', '7', '4', '22', '15', '15', '8'],
                        ['1', '16', '11', '29', '2', '22', '10', '30', '8'],
                        ['3', '26', '14', '29', '25', '25', '6', '28', '28'],
                        ['13', '19', '14', '23', '25', '25', '20', '24', '18'],
                        ['21', '21', '17', '27', '5', '12', '31', '31', '31'],
                    ],
                    nu = tu.reduce(
                        (u, e, t) =>
                            e.reduce(
                                (u, e, n) => (
                                    u[e]
                                        ? u[e].start.x === n
                                            ? (u[e].end.y = t)
                                            : u[e].start.y === t && (u[e].end.x = n)
                                        : (u[e] = { start: { x: n, y: t }, end: { x: n, y: t } }),
                                    u
                                ),
                                u,
                            ),
                        {},
                    ),
                    ru = Object.fromEntries(
                        Object.keys(nu).map((u) => [
                            u,
                            {
                                x: nu[u].start.x,
                                y: nu[u].start.y,
                                width: nu[u].end.x - nu[u].start.x + 1,
                                height: nu[u].end.y - nu[u].start.y + 1,
                            },
                        ]),
                    ),
                    au = {
                        [uu.UltraSmall]: { widthRatio: 105, heightRatio: 92, topOffset: 40 },
                        [uu.ExtraSmall]: { widthRatio: 105, heightRatio: 92, topOffset: 25 },
                        [uu.Small]: { widthRatio: 105, heightRatio: 92, topOffset: 25 },
                        [uu.Medium]: { widthRatio: 136, heightRatio: 119, topOffset: 35 },
                        [uu.Large]: { widthRatio: 160, heightRatio: 140, topOffset: 4 },
                        [uu.ExtraLarge]: { widthRatio: 160, heightRatio: 140, topOffset: 0 },
                        [uu.UltraLarge]: { widthRatio: 200, heightRatio: 175, topOffset: 0 },
                    },
                    iu = 800,
                    ou = 1e3,
                    su = (u) => {
                        let e,
                            t = !1;
                        return function (...n) {
                            return t || ((t = !0), (e = u(...n))), e;
                        };
                    },
                    lu = (u) => Math.sin((u * Math.PI) / 2),
                    Eu = (u) => 1 - Math.cos((u * Math.PI) / 2),
                    cu = (u) => 1 - Math.pow(1 - u, 3),
                    Au = (u) => 2.70158 * u * u * u - 1.70158 * u * u,
                    du = { [uu.UltraLarge]: 'mediaUltraLarge', [uu.UltraSmall]: 'mediaUltraSmall' };
                function Fu() {}
                function Du(u) {
                    return u;
                }
                function _u() {
                    return !1;
                }
                function mu(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                console.log;
                const Bu = () =>
                        (() => {
                            const u = (0, r.useMemo)(() => ({}), []),
                                e = (e) => (u[e] || (u[e] = new Map()), u[e]),
                                t = (u, t) => (e(u).set(t, t), () => n(u, t)),
                                n = (u, t) => {
                                    e(u).delete(t);
                                },
                                a = (u, ...t) => {
                                    for (
                                        var n,
                                            r = (function (u, e) {
                                                var t =
                                                    ('undefined' != typeof Symbol && u[Symbol.iterator]) ||
                                                    u['@@iterator'];
                                                if (t) return (t = t.call(u)).next.bind(t);
                                                if (
                                                    Array.isArray(u) ||
                                                    (t = (function (u, e) {
                                                        if (u) {
                                                            if ('string' == typeof u) return mu(u, e);
                                                            var t = {}.toString.call(u).slice(8, -1);
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
                                                                      ? mu(u, e)
                                                                      : void 0
                                                            );
                                                        }
                                                    })(u)) ||
                                                    (e && u && 'number' == typeof u.length)
                                                ) {
                                                    t && (u = t);
                                                    var n = 0;
                                                    return function () {
                                                        return n >= u.length
                                                            ? { done: !0 }
                                                            : { done: !1, value: u[n++] };
                                                    };
                                                }
                                                throw new TypeError(
                                                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                );
                                            })(e(u).values());
                                        !(n = r()).done;

                                    )
                                        (0, n.value)(...t);
                                };
                            return (0, r.useMemo)(() => ({ on: t, off: n, trigger: a }), []);
                        })(),
                    Cu = a().createContext({ on: () => Fu, off: Fu, trigger: Fu }),
                    gu = ({ children: u }) => {
                        const e = Bu();
                        return a().createElement(Cu.Provider, { value: e }, u);
                    },
                    hu = () => (0, r.useContext)(Cu);
                function pu(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const vu = (u) => (0 === u ? window : window.subViews.get(u));
                var wu = t(946);
                const bu = ((u, e) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: n, children: i, mocks: s }) {
                                const l = (0, r.useRef)([]),
                                    E = (u, t, n) => {
                                        var r;
                                        const a = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = vu,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? r.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = r.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const i = (u) => {
                                                    const r = t(e),
                                                        a = n.split('.').reduce((u, e) => u[e], r);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? a
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const s = 'string' == typeof a ? `${n}.${a}` : n,
                                                            l = o.O.view.addModelObserver(s, e, !0);
                                                        return r.set(l, t), u && t(i(a)), l;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (u, e) => {
                                                        const t = i(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = i(u);
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
                                                                                    return pu(u, e);
                                                                                var t = {}.toString
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
                                                                                          ? pu(u, e)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(u)) ||
                                                                        (e && u && 'number' == typeof u.length)
                                                                    ) {
                                                                        t && (u = t);
                                                                        var n = 0;
                                                                        return function () {
                                                                            return n >= u.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: u[n++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(r.keys());
                                                            !(u = t()).done;

                                                        )
                                                            a(u.value, e);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(t),
                                            i =
                                                'real' === u
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            s = (e) =>
                                                'mocks' === u ? (null == n ? void 0 : n.getter(e)) : i.readByPath(e),
                                            E = (u) => l.current.push(u),
                                            c = (({ observableModel: u, externalModel: e, readByPath: t }) => {
                                                const n = () => {
                                                        return (
                                                            (u = t('bonuses')),
                                                            (e = Du),
                                                            Array.isArray(u)
                                                                ? u.map(e)
                                                                : u.map((u, t, n) =>
                                                                      e(null == u ? void 0 : u.value, t, n),
                                                                  )
                                                        );
                                                        var u, e;
                                                    },
                                                    r = Object.assign(
                                                        { bonuses: K.LO.box(n()) },
                                                        u.primitives({
                                                            dayId: 'dayId',
                                                            showBoxesButton: 'showBoxesButton',
                                                            awardDayState: 'awardDayState',
                                                            doorsOpenedAm: 'openedDoorsCount',
                                                            openDoorStatus: 'openDoorStatus',
                                                            isAnimationEnabled: 'isAnimationEnabled',
                                                        }),
                                                    );
                                                return (
                                                    e.subscribe(
                                                        (0, K.aD)(() => r.bonuses.set(n())),
                                                        'bonuses',
                                                    ),
                                                    Object.assign({}, r, {
                                                        computes: {
                                                            readyToClose: (0, wu.Om)(() =>
                                                                [z.OPEN_DOOR_SUCCESS, z.OPEN_DOOR_FAILED].includes(
                                                                    r.openDoorStatus.get(),
                                                                ),
                                                            ),
                                                        },
                                                    })
                                                );
                                            })({
                                                mode: u,
                                                readByPath: s,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : s(e),
                                                            r = K.LO.box(n, { equals: _u });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, K.aD)((u) => r.set(u)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : s(e),
                                                            r = K.LO.box(n, { equals: _u });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, K.aD)((u) => r.set(u)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = s(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (u, e) => ((u[e] = K.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, K.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                a = Object.entries(r),
                                                                o = a.reduce(
                                                                    (u, [e, t]) => ((u[t] = K.LO.box(n[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, K.aD)((u) => {
                                                                            a.forEach(([e, t]) => {
                                                                                o[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            A = { mode: u, model: c, externalModel: i, cleanup: E };
                                        return {
                                            model: c,
                                            controls: 'mocks' === u && n ? n.controls(A) : e(A),
                                            externalModel: i,
                                            mode: u,
                                        };
                                    },
                                    c = (0, r.useRef)(!1),
                                    A = (0, r.useState)(u),
                                    d = A[0],
                                    F = A[1],
                                    D = (0, r.useState)(() => E(u, n, s)),
                                    _ = D[0],
                                    m = D[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        c.current ? m(E(d, n, s)) : (c.current = !0);
                                    }, [s, d, n]),
                                    (0, r.useEffect)(() => {
                                        F(u);
                                    }, [u]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            _.externalModel.dispose(), l.current.forEach((u) => u());
                                        },
                                        [_],
                                    ),
                                    a().createElement(t.Provider, { value: _ }, i)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(0, ({ externalModel: u, model: e }) => ({
                        close: u.createCallbackNoArgs('onCloseBtnClick'),
                        rewardsShown: u.createCallback(() => ({ dayId: e.dayId.get() }), 'onRewardsShown'),
                        setBlur: u.createCallback((u) => ({ setBlur: u }), 'onSetBlur'),
                    })),
                    fu = bu[0],
                    Su = bu[1],
                    Tu = {
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
                let xu, yu;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(xu || (xu = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large');
                    })(yu || (yu = {}));
                const Ru = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: n,
                    disabled: i,
                    mixClass: o,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: E,
                    onMouseMove: c,
                    onMouseDown: A,
                    onMouseUp: d,
                    onMouseLeave: F,
                    onClick: D,
                }) => {
                    const _ = (0, r.useRef)(null),
                        m = (0, r.useState)(t),
                        B = m[0],
                        C = m[1],
                        h = (0, r.useState)(!1),
                        p = h[0],
                        v = h[1];
                    return (
                        (0, r.useEffect)(() => {
                            function u(u) {
                                B && null !== _.current && !_.current.contains(u.target) && C(!1);
                            }
                            return (
                                document.addEventListener('mousedown', u),
                                () => {
                                    document.removeEventListener('mousedown', u);
                                }
                            );
                        }, [B]),
                        (0, r.useEffect)(() => {
                            C(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: _,
                                className: g()(
                                    Tu.base,
                                    Tu[`base__${n}`],
                                    i && Tu.base__disabled,
                                    e && Tu[`base__${e}`],
                                    B && Tu.base__focus,
                                    p && Tu.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (u) {
                                    i || (null !== s && U(s), E && E(u));
                                },
                                onMouseMove: function (u) {
                                    c && c(u);
                                },
                                onMouseUp: function (u) {
                                    i || (d && d(u), v(!1));
                                },
                                onMouseDown: function (u) {
                                    i ||
                                        (null !== l && U(l),
                                        A && A(u),
                                        t && (i || (_.current && (_.current.focus(), C(!0)))),
                                        v(!0));
                                },
                                onMouseLeave: function (u) {
                                    i || (F && F(u), v(!1));
                                },
                                onClick: function (u) {
                                    i || (D && D(u));
                                },
                            },
                            n !== xu.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: Tu.back }),
                                    a().createElement('span', { className: Tu.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: g()(Tu.state, Tu.state__default) },
                                a().createElement('span', { className: Tu.stateDisabled }),
                                a().createElement('span', { className: Tu.stateHighlightHover }),
                                a().createElement('span', { className: Tu.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: Tu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                Ru.defaultProps = { type: xu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ou = Ru;
                function Pu() {
                    return (
                        (Pu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Pu.apply(null, arguments)
                    );
                }
                const Lu = (u) =>
                        a().createElement('div', Pu({}, u, { className: g()('Spinner_base_50', u.className) })),
                    Mu = 'Footer_button_4a',
                    Iu = 'Footer_loadingText_8d',
                    ku = R.strings.advent_calendar.rewardView,
                    Nu = (0, Z.Pi)(() => {
                        const u = Su(),
                            e = u.model,
                            t = u.controls,
                            n = hu(),
                            i = n.on,
                            o = n.trigger,
                            s = (function () {
                                const u = (0, r.useRef)(0);
                                var e;
                                return (
                                    (e = () => {
                                        window.clearTimeout(u.current);
                                    }),
                                    (0, r.useEffect)(() => e, []),
                                    (0, r.useMemo)(
                                        () => ({
                                            run: (e, t) => {
                                                window.clearTimeout(u.current),
                                                    (u.current = window.setTimeout(() => {
                                                        (u.current = 0), e();
                                                    }, t));
                                            },
                                            clear: () => {
                                                window.clearTimeout(u.current), (u.current = 0);
                                            },
                                            get isRunning() {
                                                return 0 !== u.current;
                                            },
                                        }),
                                        [],
                                    )
                                );
                            })(),
                            l = (0, J.useSpring)(() => ({ opacity: 0, y: '20rem', visibility: 'hidden' })),
                            E = l[0],
                            c = l[1],
                            A = (0, J.useSpring)(() => ({ opacity: 0, y: '20rem', visibility: 'hidden' })),
                            d = A[0],
                            F = A[1];
                        return (
                            Q(() =>
                                i('onHeaderAnimationStart', () => {
                                    s.run(() => {
                                        t.rewardsShown();
                                    }, iu),
                                        c.start({
                                            to: { opacity: 1, y: '0rem', visibility: 'visible' },
                                            config: { duration: 200, easing: Eu },
                                        });
                                }),
                            ),
                            Q(() =>
                                i(
                                    'onCloseStart',
                                    su(() => {
                                        F.start({
                                            to: { opacity: 0, y: '20rem', visibility: 'hidden' },
                                            config: { duration: 200, easing: Eu },
                                            delay: e.awardDayState.get() === q.RegularDay ? 600 : 0,
                                        });
                                    }),
                                ),
                            ),
                            Q(() =>
                                (0, K.gx)(
                                    () => e.computes.readyToClose(),
                                    () => {
                                        c.start({
                                            to: { opacity: 0, y: '-20rem', visibility: 'hidden' },
                                            onRest: () => {
                                                (e.awardDayState.get() !== q.RegularDay &&
                                                    e.openDoorStatus.get() !== z.OPEN_DOOR_FAILED) ||
                                                    o('onCloseStart');
                                            },
                                            config: { duration: 200, easing: lu },
                                        });
                                    },
                                ),
                            ),
                            Q(() =>
                                (0, K.gx)(
                                    () => e.openDoorStatus.get() === z.OPEN_DOOR_SUCCESS,
                                    () => {
                                        F.start({
                                            to: { opacity: 1, y: '0rem', visibility: 'visible' },
                                            config: { duration: 200, easing: lu },
                                        });
                                    },
                                ),
                            ),
                            a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(
                                    J.animated.div,
                                    { className: 'Footer_loading_a2', style: E },
                                    a().createElement(Lu, null),
                                    a().createElement(
                                        'span',
                                        { className: Iu },
                                        R.strings.advent_calendar.rewardView.loading(),
                                    ),
                                ),
                                a().createElement(
                                    J.animated.div,
                                    { className: 'Footer_base_be', style: d },
                                    (() => {
                                        const u = e.awardDayState.get();
                                        return u === q.SpecialDay ||
                                            (u === q.ProgressionQuest && !e.showBoxesButton.get())
                                            ? a().createElement(
                                                  Ou,
                                                  {
                                                      type: xu.primary,
                                                      size: 'medium',
                                                      onClick: () => o('onCloseStart'),
                                                      mixClass: Mu,
                                                  },
                                                  ku.confirm(),
                                              )
                                            : u === q.ProgressionQuest
                                              ? a().createElement(
                                                    a().Fragment,
                                                    null,
                                                    a().createElement(
                                                        Ou,
                                                        {
                                                            type: xu.primary,
                                                            size: 'medium',
                                                            onClick: () => o('onCloseStart', 'boxes'),
                                                            mixClass: Mu,
                                                            disabled: !0,
                                                        },
                                                        ku.goToBoxes(),
                                                    ),
                                                    a().createElement(
                                                        Ou,
                                                        {
                                                            type: xu.secondary,
                                                            size: 'medium',
                                                            onClick: () => o('onCloseStart'),
                                                            mixClass: Mu,
                                                        },
                                                        ku.confirm(),
                                                    ),
                                                )
                                              : u === q.RegularDay
                                                ? a().createElement(
                                                      'div',
                                                      { className: Iu },
                                                      R.strings.advent_calendar.rewardView.title.progression(),
                                                  )
                                                : null;
                                    })(),
                                ),
                            )
                        );
                    });
                var Uu = t(797);
                let Hu;
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(Hu || (Hu = {}));
                const Gu = (u) => u.replace(/&nbsp;/g, ' '),
                    Wu = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    $u = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    qu = (u, e, t = Hu.left) => u.split(e).reduce(t === Hu.left ? Wu : $u, []),
                    zu = (() => {
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
                    Vu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ju = ({ binding: u, text: e = '', classMix: t, alignment: n = Hu.left, formatWithBrackets: i }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const o = i && u ? ((s = u), e.replace(/\{\w+\}/g, (u) => String(s[u.slice(1, -1)]))) : e;
                        var s;
                        return a().createElement(
                            r.Fragment,
                            null,
                            o.split('\n').map((e, i) =>
                                a().createElement(
                                    'div',
                                    { className: g()('FormatText_base_d0', t), key: `${e}-${i}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                            t && u in t
                                                ? t[u]
                                                : ((u, e = Hu.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return Vu.includes(t)
                                                          ? zu(u)
                                                          : 'ja' === t
                                                            ? (0, Uu.D4)()
                                                                  .parse(u)
                                                                  .map((u) => Gu(u))
                                                            : ((u, e = Hu.left) => {
                                                                  let t = [];
                                                                  const n =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      r = Gu(u);
                                                                  return (
                                                                      qu(r, /( )/, e).forEach(
                                                                          (u) => (t = t.concat(qu(u, n, Hu.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(u, e);
                                                  })(u, e),
                                        ))(e, n, u).map((u, e) =>
                                        a().createElement(r.Fragment, { key: `${e}-${u}` }, u),
                                    ),
                                ),
                            ),
                        );
                    },
                    Yu = {
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
                    Xu = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Qu = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Ku = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Zu = (0, r.memo)(({ text: u, binding: e, classMix: t }) => {
                        const n = (0, r.useCallback)((u) => ({ color: `#${u}` }), []),
                            i = (0, r.useMemo)(() => e || {}, [e]);
                        let o = Xu.exec(u),
                            s = u,
                            l = 0;
                        for (; o; ) {
                            const t = o[0],
                                r = Qu.exec(t),
                                E = Ku.exec(t),
                                c = o[1];
                            if (r && E) {
                                const u = r[0],
                                    o = u + l++ + u;
                                (s = s.replace(t, `%(${o})`)),
                                    (i[o] = Yu[u]
                                        ? a().createElement(
                                              'span',
                                              { className: Yu[u] },
                                              a().createElement(ju, { text: c, binding: e }),
                                          )
                                        : a().createElement(
                                              'span',
                                              { style: n(u) },
                                              a().createElement(ju, { text: c, binding: e }),
                                          ));
                            }
                            o = Xu.exec(u);
                        }
                        return a().createElement(ju, { text: s, classMix: t, binding: i });
                    }),
                    Ju = R.strings.advent_calendar.rewardView,
                    ue = (0, Z.Pi)(() => {
                        const u = Su().model,
                            e = hu(),
                            t = e.on,
                            n = e.trigger,
                            r = (0, J.useSpring)(() => ({ opacity: 0, y: '-20rem' })),
                            i = r[0],
                            o = r[1];
                        Q(() =>
                            t('onLastRewardAnimationStart', () => {
                                o.start({
                                    to: { opacity: 1, y: '0rem' },
                                    config: { duration: 200, easing: lu },
                                    delay: 600,
                                    onStart: () => {
                                        n('onHeaderAnimationStart');
                                    },
                                });
                            }),
                        ),
                            Q(() =>
                                t(
                                    'onCloseStart',
                                    su(() => {
                                        o.start({
                                            to: { opacity: 0, y: '-20rem' },
                                            config: { duration: 200, easing: Eu },
                                            delay: 200,
                                        });
                                    }),
                                ),
                            );
                        const s = (() => {
                            switch (u.awardDayState.get()) {
                                case q.RegularDay:
                                    return null;
                                case q.SpecialDay: {
                                    const e = u.openedDoorsCount.get();
                                    return {
                                        title: Ju.title.specialDoor(),
                                        subTitle:
                                            u.openedDoorsCount.get() === Object.keys(ru).length
                                                ? Ju.subTitle.allDoors()
                                                : Ju.subTitle.specialDoor(),
                                        binding: { count: e.toString() },
                                    };
                                }
                                case q.ProgressionQuest: {
                                    const e = u.openedDoorsCount.get();
                                    return {
                                        title: u.showBoxesButton.get() ? Ju.title.box() : Ju.title.progression(),
                                        subTitle: Ju.subTitle.progression(),
                                        binding: { count: e.toString() },
                                    };
                                }
                            }
                        })();
                        return s
                            ? a().createElement(
                                  J.animated.div,
                                  { className: 'Header_base_85', style: i },
                                  a().createElement('div', { className: 'Header_shadow_bc' }),
                                  a().createElement(Zu, {
                                      classMix: 'Header_title_09',
                                      text: s.title,
                                      binding: s.binding,
                                  }),
                                  a().createElement(Zu, {
                                      classMix: 'Header_subTitle_b0',
                                      text: s.subTitle,
                                      binding: s.binding,
                                  }),
                              )
                            : null;
                    });
                let ee, te, ne, re, ae, ie, oe, se;
                !(function (u) {
                    (u.Items = 'items'),
                        (u.Equipment = 'equipment'),
                        (u.Xp = 'xp'),
                        (u.XpFactor = 'xpFactor'),
                        (u.Blueprints = 'blueprints'),
                        (u.BlueprintsAny = 'blueprintsAny'),
                        (u.Goodies = 'goodies'),
                        (u.Berths = 'berths'),
                        (u.Slots = 'slots'),
                        (u.Tokens = 'tokens'),
                        (u.CrewSkins = 'crewSkins'),
                        (u.CrewBooks = 'crewBooks'),
                        (u.Customizations = 'customizations'),
                        (u.CreditsFactor = 'creditsFactor'),
                        (u.Tankman = 'tankman'),
                        (u.Tankwoman = 'tankwoman'),
                        (u.TankmenXp = 'tankmenXP'),
                        (u.TankmenXpFactor = 'tankmenXPFactor'),
                        (u.FreeXpFactor = 'freeXPFactor'),
                        (u.BattleToken = 'battleToken'),
                        (u.PremiumUniversal = 'premium_universal'),
                        (u.Gold = 'gold'),
                        (u.Credits = 'credits'),
                        (u.Crystal = 'crystal'),
                        (u.FreeXp = 'freeXP'),
                        (u.Premium = 'premium'),
                        (u.PremiumPlus = 'premium_plus'),
                        (u.BattlePassPoints = 'battlePassPoints'),
                        (u.BattlePassSelectToken = 'battlePassSelectToken'),
                        (u.BattlePassTicket = 'lootBox_commonTicket'),
                        (u.BattlePassTaler = 'bptaler'),
                        (u.StyleProgressToken = 'styleProgressToken'),
                        (u.TmanToken = 'tmanToken'),
                        (u.NaturalCover = 'naturalCover'),
                        (u.BpCoin = 'bpcoin'),
                        (u.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (u.BattleBadge = 'dossier_badge'),
                        (u.BonusX5 = 'battle_bonus_x5'),
                        (u.CrewBonusX3 = 'crew_bonus_x3'),
                        (u.Vehicles = 'vehicles'),
                        (u.EpicSelectToken = 'epicSelectToken'),
                        (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (u.DeluxeGift = 'deluxe_gift'),
                        (u.BattleBoosterGift = 'battleBooster_gift'),
                        (u.OptionalDevice = 'optionalDevice'),
                        (u.EquipCoin = 'equipCoin'),
                        (u.LootBox = 'lootBox'),
                        (u.BrCoin = 'brcoin'),
                        (u.StpCoin = 'stpcoin');
                })(ee || (ee = {})),
                    (function (u) {
                        (u.Gold = 'gold'),
                            (u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.Premium = 'premium'),
                            (u.PremiumPlus = 'premium_plus'),
                            (u.Vehicles = 'vehicles'),
                            (u.Customizations = 'customizations'),
                            (u.Blueprints = 'blueprints'),
                            (u.BlueprintsAny = 'blueprintsAny'),
                            (u.BlueprintsFinal = 'finalBlueprints'),
                            (u.Goodies = 'goodies'),
                            (u.CrewSkins = 'crewSkins'),
                            (u.Xp = 'xp'),
                            (u.XpFactor = 'xpFactor'),
                            (u.FreeXp = 'freeXP'),
                            (u.FreeXPFactor = 'freeXPFactor'),
                            (u.TankmenXP = 'tankmenXP'),
                            (u.TankmenXPFactor = 'tankmenXPFactor'),
                            (u.DailyXPFactor = 'dailyXPFactor'),
                            (u.CreditsFactor = 'creditsFactor'),
                            (u.Items = 'items'),
                            (u.StrBonus = 'strBonus'),
                            (u.Groups = 'groups'),
                            (u.Berths = 'berths'),
                            (u.Slots = 'slots'),
                            (u.Meta = 'meta'),
                            (u.Tokens = 'tokens'),
                            (u.Dossier = 'dossier'),
                            (u.OneOf = 'oneof'),
                            (u.PremiumUniversal = 'premium_universal'),
                            (u.BadgesGroup = 'badgesGroup'),
                            (u.Entitlements = 'entitlements'),
                            (u.RankedDailyBattles = 'rankedDailyBattles'),
                            (u.RankedBonusBattles = 'rankedBonusBattles'),
                            (u.BattlePassPoints = 'battlePassPoints'),
                            (u.BattleBadge = 'dossier_badge'),
                            (u.BattleAchievement = 'dossier_achievement'),
                            (u.EquipCoin = 'equipCoin');
                    })(te || (te = {})),
                    (function (u) {
                        (u.Big = 'big'),
                            (u.Small = 'small'),
                            (u.Mini = 'mini'),
                            (u.S600x450 = 's600x450'),
                            (u.S400x300 = 's400x300'),
                            (u.S296x222 = 's296x222'),
                            (u.S232x174 = 's232x174'),
                            (u.S180x135 = 's180x135'),
                            (u.S128x100 = 's128x100'),
                            (u.S80x80 = 's80x80'),
                            (u.S64x64 = 's64x64'),
                            (u.S48x48 = 's48x48');
                    })(ne || (ne = {})),
                    (function (u) {
                        (u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string');
                    })(re || (re = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
                            (u.LOOT_BOX = 'eventLootBoxes');
                    })(ae || (ae = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'), (u.LOOT_BOX = 'lootBox');
                    })(ie || (ie = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(oe || (oe = {})),
                    (function (u) {
                        (u[(u.Engraving = 0)] = 'Engraving'), (u[(u.Background = 1)] = 'Background');
                    })(se || (se = {}));
                const le = [
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
                function Ee(u) {
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
                const ce = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: j.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Ae = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            a = u.onMouseEnter,
                            i = u.onMouseLeave,
                            o = u.onMouseDown,
                            s = u.onClick,
                            l = u.ignoreShowDelay,
                            E = void 0 !== l && l,
                            c = u.ignoreMouseClick,
                            A = void 0 !== c && c,
                            d = u.decoratorId,
                            F = void 0 === d ? 0 : d,
                            D = u.isEnabled,
                            _ = void 0 === D || D,
                            m = u.targetId,
                            B = void 0 === m ? 0 : m,
                            C = u.onShow,
                            g = u.onHide,
                            h = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, le);
                        const p = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, r.useMemo)(
                                () =>
                                    B ||
                                    ((u = 1) => {
                                        const e = new Error().stack;
                                        let t,
                                            n = R.invalid('resId'),
                                            r = '';
                                        var a;
                                        return (
                                            e &&
                                                ((r =
                                                    (null == (a = e.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) ||
                                                    ''),
                                                (t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { callerUrl: r, caller: t, stack: e, resId: n }
                                        );
                                    })().resId,
                                [B],
                            ),
                            w = (0, r.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (ce(t, F, { isMouseEvent: !0, on: !0, arguments: Ee(n) }, v),
                                    C && C(),
                                    (p.current.isVisible = !0));
                            }, [t, F, n, v, C]),
                            b = (0, r.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const u = p.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (p.current.timeoutId = 0)),
                                        ce(t, F, { on: !1 }, v),
                                        p.current.isVisible && g && g(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, F, v, g]),
                            f = (0, r.useCallback)((u) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(p.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const u = p.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', f, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', f, { capture: !0 }),
                                            u && window.clearTimeout(u);
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === _ && b();
                            }, [_, b]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            ),
                            _
                                ? (0, r.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((p.current.timeoutId = window.setTimeout(w, E ? 100 : 400)),
                                                          a && a(u),
                                                          S && S(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  b(), null == i || i(e), null == u || u(e);
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  !1 === A && b(), null == s || s(e), null == u || u(e);
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  !1 === A && b(), null == o || o(e), null == u || u(e);
                                              })(e.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : e
                        );
                        var S;
                    },
                    de = ['children'];
                function Fe() {
                    return (
                        (Fe = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Fe.apply(null, arguments)
                    );
                }
                const De = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, de);
                        return a().createElement(
                            Ae,
                            Fe(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                t,
                            ),
                            e,
                        );
                    },
                    _e = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function me() {
                    return (
                        (me = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        me.apply(null, arguments)
                    );
                }
                const Be = R.views.common.tooltip_window.simple_tooltip_content,
                    Ce = (u) => {
                        let e = u.children,
                            t = u.body,
                            n = u.header,
                            i = u.note,
                            o = u.alert,
                            s = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, _e);
                        const E = (0, r.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: n, note: i, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, n, i, s]);
                        return a().createElement(
                            Ae,
                            me(
                                {
                                    contentId:
                                        ((c = null == s ? void 0 : s.hasHtmlContent),
                                        c ? Be.SimpleTooltipHtmlContent('resId') : Be.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            e,
                        );
                        var c;
                    };
                function ge() {
                    return (
                        (ge = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        ge.apply(null, arguments)
                    );
                }
                const he = ({ children: u, tooltipArgs: e, className: t }) => {
                    if (!e) return u;
                    const n = a().createElement('div', { className: t }, u);
                    if (e.header || e.body) return a().createElement(Ce, e, n);
                    const r = e.contentId;
                    return r ? a().createElement(Ae, ge({}, e, { contentId: r }), n) : a().createElement(De, e, n);
                };
                class pe extends a().PureComponent {
                    render() {
                        let u;
                        u = 'gold' === this.props.format ? j.B3.GOLD : j.B3.INTEGRAL;
                        const e = j.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                pe.defaultProps = { format: 'integral' };
                const ve = [
                        ee.Items,
                        ee.Equipment,
                        ee.Xp,
                        ee.XpFactor,
                        ee.Blueprints,
                        ee.BlueprintsAny,
                        ee.Goodies,
                        ee.Berths,
                        ee.Slots,
                        ee.Tokens,
                        ee.CrewSkins,
                        ee.CrewBooks,
                        ee.Customizations,
                        ee.CreditsFactor,
                        ee.TankmenXp,
                        ee.TankmenXpFactor,
                        ee.FreeXpFactor,
                        ee.BattleToken,
                        ee.LootBox,
                        ee.PremiumUniversal,
                        ee.NaturalCover,
                        ee.BpCoin,
                        ee.BattlePassSelectToken,
                        ee.BattlaPassFinalAchievement,
                        ee.BattleBadge,
                        ee.BattlePassTicket,
                        ee.BonusX5,
                        ee.CrewBonusX3,
                        ee.EpicSelectToken,
                        ee.Comp7TokenWeeklyReward,
                        ee.DeluxeGift,
                        ee.BattleBoosterGift,
                        ee.OptionalDevice,
                        ee.Lootbox,
                    ],
                    we = [ee.Gold, ee.Credits, ee.Crystal, ee.FreeXp, ee.StpCoin],
                    be = [ee.BattlePassPoints, ee.EquipCoin],
                    fe = [ee.PremiumPlus, ee.Premium],
                    Se = ['engravings', 'backgrounds'],
                    Te = ['engraving', 'background'],
                    xe = (u, e, t) => {
                        const n = e && { contentId: e };
                        return Object.assign(
                            {
                                args: u,
                                isEnabled: Boolean((u && u.tooltipId) || e),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !e,
                            },
                            n,
                            t,
                        );
                    },
                    ye = [ne.Small, ne.Big],
                    Re = (u, e) => {
                        if (void 0 === u) return null;
                        switch (e) {
                            case re.MULTI: {
                                const e = Number(u);
                                return isFinite(e) && e > 1 ? `x${Math.floor(e)}` : null;
                            }
                            case re.CURRENCY:
                            case re.NUMBER:
                                return a().createElement(pe, { format: 'integral', value: Number(u) });
                            case re.PREMIUM_PLUS: {
                                const e = Number(u);
                                return isNaN(e) ? u : null;
                            }
                            default:
                                return u;
                        }
                    },
                    Oe = {
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
                        info__bptaler: 'Reward_info__bptaler_82',
                        info__crystal: 'Reward_info__crystal_36',
                        info__premiumTank: 'Reward_info__premiumTank_d3',
                        title: 'Reward_title_36',
                        timer: 'Reward_timer_d3',
                    },
                    Pe = ({
                        name: u,
                        image: e,
                        isPeriodic: t = !1,
                        size: n = ne.Big,
                        special: r,
                        value: i,
                        valueType: o,
                        title: s,
                        style: l,
                        className: E,
                        classNames: c,
                        tooltipArgs: A,
                        periodicIconTooltipArgs: d,
                    }) => {
                        const F = ((u, e) => {
                                if (void 0 === e || !ye.includes(u)) return null;
                                switch (e) {
                                    case ae.BATTLE_BOOSTER:
                                    case ae.BATTLE_BOOSTER_REPLACE:
                                        return ie.BATTLE_BOOSTER;
                                    case ae.LOOT_BOX:
                                        return ie.LOOT_BOX;
                                }
                            })(n, r),
                            D = ((u) => {
                                if (void 0 === u) return null;
                                switch (u) {
                                    case ae.BATTLE_BOOSTER:
                                        return oe.BATTLE_BOOSTER;
                                    case ae.BATTLE_BOOSTER_REPLACE:
                                        return oe.BATTLE_BOOSTER_REPLACE;
                                    case ae.BUILT_IN_EQUIPMENT:
                                        return oe.BUILT_IN_EQUIPMENT;
                                    case ae.EQUIPMENT_PLUS:
                                        return oe.EQUIPMENT_PLUS;
                                    case ae.EQUIPMENT_TROPHY_BASIC:
                                        return oe.EQUIPMENT_TROPHY_BASIC;
                                    case ae.EQUIPMENT_TROPHY_UPGRADED:
                                        return oe.EQUIPMENT_TROPHY_UPGRADED;
                                    case ae.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return oe.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ae.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return oe.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ae.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return oe.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ae.PROGRESSION_STYLE_UPGRADED_1:
                                        return oe.PROGRESSION_STYLE_UPGRADED_1;
                                    case ae.PROGRESSION_STYLE_UPGRADED_2:
                                        return oe.PROGRESSION_STYLE_UPGRADED_2;
                                    case ae.PROGRESSION_STYLE_UPGRADED_3:
                                        return oe.PROGRESSION_STYLE_UPGRADED_3;
                                    case ae.PROGRESSION_STYLE_UPGRADED_4:
                                        return oe.PROGRESSION_STYLE_UPGRADED_4;
                                    case ae.PROGRESSION_STYLE_UPGRADED_5:
                                        return oe.PROGRESSION_STYLE_UPGRADED_5;
                                    case ae.PROGRESSION_STYLE_UPGRADED_6:
                                        return oe.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(r),
                            _ = Re(i, o);
                        return a().createElement(
                            'div',
                            { className: g()(Oe.base, Oe[`base__${n}`], E), style: l },
                            a().createElement(
                                he,
                                { tooltipArgs: A, className: Oe.tooltipWrapper },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: g()(Oe.image, null == c ? void 0 : c.image) },
                                        F &&
                                            a().createElement('div', {
                                                className: g()(Oe.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${F}_highlight)`,
                                                },
                                            }),
                                        e &&
                                            a().createElement('div', {
                                                className: g()(Oe.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${e})` },
                                            }),
                                        D &&
                                            a().createElement('div', {
                                                className: g()(Oe.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${D}_overlay)`,
                                                },
                                            }),
                                    ),
                                    _ &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: g()(
                                                    Oe.info,
                                                    Oe[`info__${u}`],
                                                    o === re.MULTI && Oe.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            _,
                                        ),
                                    s && a().createElement('div', { className: Oe.title }, s),
                                ),
                            ),
                            t &&
                                a().createElement(
                                    he,
                                    { tooltipArgs: d },
                                    a().createElement('div', {
                                        className: g()(Oe.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    };
                var Le;
                !(function (u) {
                    (u.GiftMachineToken = 'battleToken'),
                        (u.LootBox = 'lootBox'),
                        (u.Tman = 'tmanToken'),
                        (u.WdrCoin = 'wdrcoin'),
                        (u.Toys = 'ny25Toys'),
                        (u.AchievementReward = 'dossier_achievement'),
                        (u.Customizations = 'customizations'),
                        (u.VariadicDiscount = 'variadicDiscount'),
                        (u.AddcEconomicBonuses = 'addcEconomicBonuses'),
                        (u.Vehicles = 'vehicles'),
                        (u.MarketplaceToken = 'ny_marketplace'),
                        (u.RandomBooklet = 'randomNyBooklet'),
                        (u.RandomGuide = 'randomNyGuide'),
                        (u.RandomDecoration = 'randomNyToy'),
                        (u.RandomInstruction = 'randomNyInstruction');
                })(Le || (Le = {}));
                const Me = (u) => {
                        switch (u) {
                            case Le.Tman:
                            case Le.GiftMachineToken:
                            case Le.LootBox:
                            case Le.AddcEconomicBonuses:
                            case Le.RandomBooklet:
                            case Le.RandomGuide:
                            case Le.RandomDecoration:
                            case Le.RandomInstruction:
                            case Le.WdrCoin:
                            case Le.Toys:
                                return re.MULTI;
                            default:
                                return (
                                    (e = u),
                                    ve.includes(e)
                                        ? re.MULTI
                                        : we.includes(e)
                                          ? re.CURRENCY
                                          : be.includes(e)
                                            ? re.NUMBER
                                            : fe.includes(e)
                                              ? re.PREMIUM_PLUS
                                              : re.STRING
                                );
                        }
                        var e;
                    },
                    Ie = (u, e = ne.Small) =>
                        'lootBox' === u.name || 'battleToken' === u.name || 'items' === u.name
                            ? `R.images.gui.maps.icons.quests.bonuses.${e}.${u.icon}`
                            : ((u, e = ne.Small) => {
                                  const t = u.name,
                                      n = u.type,
                                      r = u.value,
                                      a = u.icon,
                                      i = u.item,
                                      o = u.dogTagType,
                                      s = ((u) => {
                                          switch (u) {
                                              case ne.S600x450:
                                                  return 'c_600x450';
                                              case ne.S400x300:
                                                  return 'c_400x300';
                                              case ne.S296x222:
                                                  return 'c_296x222';
                                              case ne.S232x174:
                                                  return 'c_232x174';
                                              case ne.Big:
                                                  return 'c_80x80';
                                              case ne.Small:
                                                  return 'c_48x48';
                                              default:
                                                  return u;
                                          }
                                      })(e);
                                  switch (t) {
                                      case 'basic':
                                      case 'plus':
                                          return `R.images.gui.maps.icons.quests.bonuses.${e}.${n}_${r}`;
                                      case 'premium':
                                      case 'premium_plus':
                                          return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_${r}`;
                                      case 'items':
                                          return `R.images.gui.maps.icons.quests.bonuses.${e}.${i}`;
                                      case 'blueprints':
                                      case 'blueprintsAny':
                                      case 'finalBlueprints':
                                          return `R.images.gui.maps.icons.blueprints.fragment.${e}.${a}`;
                                      case 'tokens':
                                      case 'lootBox':
                                      case 'battleToken':
                                          return 'big' === e
                                              ? u.iconBig.replace('..', 'img://gui')
                                              : u.iconSmall.replace('..', 'img://gui');
                                      case 'customizations':
                                      case 'styleProgress':
                                      case 'crewSkins':
                                      case 'goodies':
                                      case 'groups':
                                      case 'tmanToken':
                                      case 'battlePassSelectToken':
                                          return `R.images.gui.maps.icons.quests.bonuses.${e}.${a}`;
                                      case 'crewBooks':
                                          return `R.images.gui.maps.icons.crewBooks.books.${e}.${a}`;
                                      case 'dogTagComponents':
                                          return ((u, e, t) => {
                                              const n = Se[u];
                                              if (n) {
                                                  const r = R.images.gui.maps.icons.dogtags.$dyn(e).$dyn(n),
                                                      a = r.$dyn(t);
                                                  return a ? `${a}` : `${r.$dyn(Te[u])}`;
                                              }
                                              return (
                                                  console.error(
                                                      'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                                  ),
                                                  ''
                                              );
                                          })(o, e, a);
                                      case 'dossier_badge':
                                          return `R.images.gui.maps.icons.quests.bonuses.badges.${s}.${a}`;
                                      case 'dossier_achievement':
                                          return `R.images.gui.maps.icons.achievement.${s}.${a}`;
                                      case 'xp':
                                      case 'xpFactor':
                                          return `R.images.gui.maps.icons.quests.bonuses.${e}.exp`;
                                      case 'creditsFactor':
                                          return `R.images.gui.maps.icons.quests.bonuses.${e}.credits`;
                                      case 'tankmenXPFactor':
                                          return `R.images.gui.maps.icons.quests.bonuses.${e}.tankmenXP`;
                                      case 'dailyXPFactor':
                                      case 'freeXPFactor':
                                          return `R.images.gui.maps.icons.quests.bonuses.${e}.freeXP`;
                                      case 'premiumTank':
                                          return `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
                                      case 'styleProgressToken':
                                          return `R.images.gui.maps.icons.quests.bonuses.${e}.style_3d`;
                                      case 'collectionItem':
                                          return `R.images.gui.maps.icons.collectionItems.${s}.${a}`;
                                      default:
                                          return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}`;
                                  }
                              })(u, e),
                    ke = {
                        base: 'Reward_base_a9',
                        info: 'Reward_info_e9',
                        info__credits: 'Reward_info__credits_25',
                        info__gold: 'Reward_info__gold_4a',
                        info__crystal: 'Reward_info__crystal_89',
                        info__premiumTank: 'Reward_info__premiumTank_ae',
                        counter: 'Reward_counter_f8',
                        shadow: 'Reward_shadow_ce',
                        base__highlighted: 'Reward_base__highlighted_5d',
                        label: 'Reward_label_41',
                        base__s600x450: 'Reward_base__s600x450_df',
                        base__s400x300: 'Reward_base__s400x300_0c',
                        base__s296x222: 'Reward_base__s296x222_d4',
                        base__s232x174: 'Reward_base__s232x174_a0',
                    };
                function Ne(u, e, t, n, r, a, i) {
                    try {
                        var o = u[a](i),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(n, r);
                }
                const Ue = (0, Z.Pi)(({ bonus: u, dayId: e, index: t, size: n }) => {
                        const i = Su().model,
                            o = eu().mediaSize,
                            s = hu(),
                            l = s.on,
                            E = s.trigger,
                            c = (0, r.useRef)(null),
                            A = (0, r.useRef)(!1),
                            d = i.awardDayState.get() === q.RegularDay,
                            F = (0, J.useSpring)(() => ({ opacity: 0, scale: 0.25, x: '-50%', y: '-50%' })),
                            D = F[0],
                            _ = F[1],
                            m = (0, J.useSpring)(() => ({
                                x: '0rem',
                                y: '0rem',
                                opacity: 0,
                                scale: 0.25,
                                brightness: 3,
                                onChange: ({ value: { opacity: u, x: e, y: t, scale: n, brightness: r } }) => {
                                    const a = c.current;
                                    a &&
                                        ((a.style.opacity = u),
                                        (a.style.transform = `translateX(${e}) translateY(${t}) scale(${n})`),
                                        (a.style.filter = `brightness(${r * r})`));
                                },
                            }))[1],
                            B = (0, J.useSpring)(() => ({ opacity: 0, y: '2rem' })),
                            C = B[0],
                            h = B[1],
                            p = () => {
                                var u;
                                const r = ru[e],
                                    a = viewEnv.remToPx(au[o].widthRatio),
                                    s = viewEnv.remToPx(au[o].heightRatio),
                                    l = viewEnv.remToPx(au[o].topOffset),
                                    E = (() => {
                                        const u = (() => {
                                                switch (n) {
                                                    case ne.S232x174:
                                                        return { width: 232, height: 174 };
                                                    case ne.S296x222:
                                                        return { width: 296, height: 222 };
                                                    case ne.S400x300:
                                                        return { width: 400, height: 300 };
                                                    case ne.S600x450:
                                                        return { width: 600, height: 450 };
                                                    default:
                                                        return (
                                                            console.error(`[ImageSize] Unknown size! (${n})`),
                                                            { width: 232, height: 174 }
                                                        );
                                                }
                                            })(),
                                            e = viewEnv.remToPx(u.width),
                                            r = viewEnv.remToPx(u.height),
                                            a = viewEnv.getClientSizePx(),
                                            o = a.width;
                                        return {
                                            width: e,
                                            height: r,
                                            top: a.height / 2 - r / 2,
                                            left: o / 2 - (e * i.bonuses.get().length) / 2 + e * t,
                                        };
                                    })(),
                                    c = E.width,
                                    A = E.height,
                                    d = E.top,
                                    F = E.left,
                                    D = viewEnv.getClientSizePx(),
                                    _ = D.width,
                                    m = D.height,
                                    B = F + c / 2,
                                    C = d + A / 2;
                                if (!r || i.awardDayState.get() === q.ProgressionQuest)
                                    return {
                                        startX: '0rem',
                                        startY: '100%',
                                        endX: `${viewEnv.pxToRem(_ - B)}rem`,
                                        endY: `${viewEnv.pxToRem(m - C)}rem`,
                                    };
                                const g = _ / 2 - (((null == (u = tu[0]) ? void 0 : u.length) || 0) * a) / 2,
                                    h = m / 2 - (tu.length * s) / 2 + l,
                                    p = g + r.x * a + (r.width * a) / 2,
                                    v = h + r.y * s + (r.height * s) / 2;
                                return {
                                    startX: `${viewEnv.pxToRem(p - B)}rem`,
                                    startY: `${viewEnv.pxToRem(v - C)}rem`,
                                    endX: `${viewEnv.pxToRem(_ - B)}rem`,
                                    endY: `${viewEnv.pxToRem(m - C)}rem`,
                                };
                            },
                            v = () => {
                                const u = p();
                                u &&
                                    m.start({
                                        from: { x: u.startX, y: u.startY },
                                        to: { opacity: 1, scale: 0.35 },
                                        config: { duration: 100, easing: lu },
                                        delay: 300 * t,
                                        onStart: () => {
                                            U('adv_reward_icon'),
                                                _.start({
                                                    to: { opacity: 1, scale: 1 },
                                                    config: { duration: ou, easing: lu },
                                                });
                                        },
                                        onRest: () => {
                                            var u, e;
                                            A.current ||
                                                m.start({
                                                    to: { opacity: 1, scale: 1, brightness: 1, x: '0rem', y: '0rem' },
                                                    config: { duration: 800, easing: cu },
                                                    delay: 100,
                                                    onStart: () => {
                                                        i.bonuses.get().length - 1 === t &&
                                                            E('onLastRewardAnimationStart');
                                                    },
                                                    onRest:
                                                        ((u = function* () {
                                                            A.current ||
                                                                h.start({
                                                                    to: { opacity: 1, y: '0rem' },
                                                                    config: { duration: 100, easing: lu },
                                                                });
                                                        }),
                                                        (e = function () {
                                                            var e = this,
                                                                t = arguments;
                                                            return new Promise(function (n, r) {
                                                                var a = u.apply(e, t);
                                                                function i(u) {
                                                                    Ne(a, n, r, i, o, 'next', u);
                                                                }
                                                                function o(u) {
                                                                    Ne(a, n, r, i, o, 'throw', u);
                                                                }
                                                                i(void 0);
                                                            });
                                                        }),
                                                        function () {
                                                            return e.apply(this, arguments);
                                                        }),
                                                });
                                        },
                                    });
                            };
                        return (
                            Q(
                                () => (
                                    i.awardDayState.get() !== q.ProgressionQuest && i.isAnimationEnabled.get()
                                        ? v()
                                        : m.start({
                                              from: { opacity: -2, scale: 0.35, brightness: 1, x: '0rem', y: '100%' },
                                              to: { opacity: 1, scale: 1, brightness: 1, x: '0rem', y: '0rem' },
                                              config: { duration: 800, easing: cu },
                                              onStart: () => {
                                                  U('adv_reward_icon'),
                                                      i.bonuses.get().length - 1 === t &&
                                                          E('onLastRewardAnimationStart');
                                              },
                                              onRest: () => {
                                                  A.current ||
                                                      h.start({
                                                          to: { opacity: 1, y: '0rem' },
                                                          config: { duration: 100, easing: lu },
                                                      });
                                              },
                                          }),
                                    l(
                                        'onCloseStart',
                                        su(() => {
                                            (A.current = !0),
                                                i.isAnimationEnabled.get()
                                                    ? (() => {
                                                          const u = p();
                                                          u &&
                                                              h.start({
                                                                  to: { opacity: -0.1 },
                                                                  config: { duration: 100, easing: Eu },
                                                                  delay: 200 * t,
                                                                  onRest: () => {
                                                                      m.start({
                                                                          to: {
                                                                              opacity: 0,
                                                                              scale: 0.25,
                                                                              x: u.endX,
                                                                              y: u.endY,
                                                                          },
                                                                          config: { duration: iu, easing: Au },
                                                                          onRest: () => {
                                                                              i.bonuses.get().length - 1 === t &&
                                                                                  E('onCloseEnd');
                                                                          },
                                                                      });
                                                                  },
                                                              });
                                                      })()
                                                    : h.start({
                                                          to: { opacity: -0.1 },
                                                          config: { duration: 100, easing: Eu },
                                                          delay: 200 * t,
                                                          onRest: () => {
                                                              m.start({
                                                                  to: { opacity: 0, scale: 1, x: '0', y: '100%' },
                                                                  config: { duration: iu, easing: Au },
                                                                  onRest: () => {
                                                                      i.bonuses.get().length - 1 === t &&
                                                                          E('onCloseEnd');
                                                                  },
                                                              });
                                                          },
                                                      });
                                        }),
                                    )
                                ),
                            ),
                            a().createElement(
                                'div',
                                {
                                    ref: c,
                                    className: g()(ke.base, ke[`base__${n}`], d && ke.base__highlighted),
                                    style: { zIndex: i.bonuses.get().length - t },
                                },
                                d && a().createElement(J.animated.div, { className: ke.shadow, style: D }),
                                a().createElement(Pe, {
                                    name: u.name,
                                    image: Ie(u, n),
                                    size: n,
                                    tooltipArgs:
                                        ((w = i.awardDayState.get()),
                                        (b = u),
                                        w === q.RegularDay
                                            ? void 0
                                            : xe({ tooltipId: b.tooltipId }, Number(b.tooltipContentId), {
                                                  ignoreShowDelay: !0,
                                              })),
                                }),
                                a().createElement(
                                    J.animated.div,
                                    { className: g()(ke.info, ke[`info__${u.name}`]), style: C },
                                    a().createElement(
                                        'div',
                                        { className: ke.label },
                                        ((u) => {
                                            const e = Me(u.name);
                                            return [re.MULTI, re.PREMIUM_PLUS].includes(e) ? u.label : Re(u.value, e);
                                        })(u),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: ke.counter },
                                        ((u) => (Me(u.name) === re.MULTI ? Re(u.value, re.MULTI) : null))(u),
                                    ),
                                ),
                            )
                        );
                        var w, b;
                    }),
                    He = {
                        [uu.UltraSmall]: { small: ne.S232x174, big: ne.S400x300 },
                        [uu.ExtraSmall]: { small: ne.S232x174, big: ne.S400x300 },
                        [uu.Small]: { small: ne.S296x222, big: ne.S400x300 },
                        [uu.Medium]: { small: ne.S400x300, big: ne.S400x300 },
                        [uu.Large]: { small: ne.S400x300, big: ne.S600x450 },
                        [uu.ExtraLarge]: { small: ne.S400x300, big: ne.S600x450 },
                        [uu.UltraLarge]: { small: ne.S400x300, big: ne.S600x450 },
                    },
                    Ge = (0, Z.Pi)(() => {
                        const u = Su().model,
                            e = u.bonuses.get(),
                            t = eu().mediaSize,
                            n = He[t],
                            r = n.small,
                            i = n.big,
                            o = e.length > 1 ? r : i;
                        return a().createElement(
                            'div',
                            { className: 'Rewards_base_85' },
                            e.map((e, t) =>
                                a().createElement(Ue, { key: t, dayId: u.dayId.get(), bonus: e, index: t, size: o }),
                            ),
                        );
                    });
                function We(u) {
                    const e = u.chunk,
                        t = e.rows * e.columns;
                    return (n) => {
                        const r = n % t,
                            a = (r % e.columns) * u.width,
                            i = Math.trunc(r / e.columns) * u.height;
                        return { path: u.getChunkPath(Math.trunc(n / t)), x: a, y: i };
                    };
                }
                const $e = [
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
                function qe() {
                    return (
                        (qe = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        qe.apply(null, arguments)
                    );
                }
                const ze = (0, r.memo)(function (u) {
                        let e = u.width,
                            t = u.height,
                            n = u.getImageSource,
                            i = u.frameCount,
                            o = u.onAnimate,
                            s = u.frameTime,
                            l = void 0 === s ? 33 : s,
                            E = u.initialFrameIndex,
                            c = void 0 === E ? 0 : E,
                            A = u.lastFrameIndex,
                            d = void 0 === A ? i - 1 : A,
                            F = u.loop,
                            D = void 0 === F || F,
                            _ = u.state,
                            m = void 0 === _ ? 'play' : _,
                            B = u.onAnimationDone,
                            C = u.onAnimationComplete,
                            g = u.poster,
                            h = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, $e);
                        const p = (0, r.useRef)(null);
                        return (
                            (0, r.useEffect)(() => {
                                const u = p.current;
                                if (!u) return;
                                const e = u.getContext('2d'),
                                    t = (t) => {
                                        e.clearRect(0, 0, u.width, u.height), e.drawImage(t.img, -t.x, -t.y);
                                    };
                                switch (m) {
                                    case 'play':
                                        return (function () {
                                            const u = Ye(c, d, n),
                                                e = Ve(c, d),
                                                r = window.setInterval(() => {
                                                    const n = e(),
                                                        a = u.get(n);
                                                    a
                                                        ? (null == o || o(n, a),
                                                          t(a),
                                                          n === d &&
                                                              (null == C || C(),
                                                              D || (null == B || B(), window.clearInterval(r))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(r);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const u = 0 === c && g ? { path: g, x: 0, y: 0 } : n(c),
                                                e = new Image();
                                            e.src = u.path;
                                            const r = () => t(je(u, e));
                                            return (
                                                e.addEventListener('load', r), () => e.removeEventListener('load', r)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, n, c, d, D, o, C, B, g, m]),
                            a().createElement('canvas', qe({}, h, { width: e, height: t, ref: p }))
                        );
                    }),
                    Ve = (u, e) => {
                        let t = u;
                        return () => {
                            const n = t;
                            return (t += 1), t > e && (t = u), n;
                        };
                    },
                    je = (u, e) => Object.assign({}, u, { img: e }),
                    Ye = (u, e, t) => {
                        const n = new Map(),
                            r = {};
                        for (let a = u; a <= e; a++) {
                            const u = t(a),
                                e = r[u.path];
                            if (e) n.set(a, je(u, e));
                            else {
                                const e = new Image();
                                (r[u.path] = e),
                                    (e.src = u.path),
                                    (e.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${a})`,
                                            u.path,
                                            `(${u.x},${u.y})`,
                                        );
                                    }),
                                    n.set(a, je(u, e));
                            }
                        }
                        return n;
                    },
                    Xe = {
                        width: 400,
                        height: 400,
                        frameCount: 50,
                        chunk: { count: 2, rows: 5, columns: 5 },
                        getChunkPath: (u) => `R.images.gui.maps.icons.sequence.sun_shine_big_sprite.sprite_${u}`,
                    };
                const Qe = (0, Z.Pi)(() => {
                        const u = Su().model,
                            e = hu().on,
                            t = u.bonuses.get().length,
                            n = (0, J.useSpring)(() => ({ opacity: 0, y: '20rem' })),
                            r = n[0],
                            i = n[1];
                        return (
                            Q(() =>
                                e('onHeaderAnimationStart', () => {
                                    i.start({
                                        to: { opacity: 1, y: '0rem' },
                                        config: { duration: 200, easing: lu },
                                        delay: 100,
                                        onStart: () => {
                                            u.awardDayState.get() !== q.RegularDay && U('adv_reward_ribbon');
                                        },
                                    });
                                }),
                            ),
                            Q(() =>
                                e(
                                    'onCloseStart',
                                    su(() => {
                                        i.start({
                                            to: { opacity: 0, y: '20rem' },
                                            config: { duration: 200, easing: Eu },
                                            delay: 100,
                                        });
                                    }),
                                ),
                            ),
                            u.awardDayState.get() === q.RegularDay
                                ? null
                                : a().createElement(
                                      J.animated.div,
                                      { className: 'Ribbon_base_87', style: r },
                                      a().createElement('div', { className: 'Ribbon_rays_34' }),
                                      a().createElement(
                                          'div',
                                          { className: 'Ribbon_glowWrapper_ff' },
                                          (1 === t || 3 === t) &&
                                              a().createElement('div', { className: 'Ribbon_glowBackground_36' }),
                                          t % 2 == 1 &&
                                              a().createElement(ze, {
                                                  width: Xe.width,
                                                  height: Xe.height,
                                                  frameCount: Xe.frameCount,
                                                  getImageSource: We(Xe),
                                                  frameTime: 50,
                                                  className: 'Ribbon_glow_8b',
                                              }),
                                      ),
                                      a().createElement('div', { className: 'Ribbon_ribbon_e0' }),
                                  )
                        );
                    }),
                    Ke = (0, Z.Pi)(() => {
                        const u = Su(),
                            e = u.model,
                            t = u.controls,
                            n = hu(),
                            i = n.on,
                            o = n.off,
                            s = n.trigger,
                            l = (0, J.useSpring)(() => ({ opacity: 0 })),
                            E = l[0],
                            c = l[1],
                            A = (0, J.useSpring)(() => ({ opacity: 0, visibility: 'hidden' })),
                            d = A[0],
                            F = A[1],
                            D = () => {
                                e.computes.readyToClose() && s('onCloseStart');
                            };
                        var _;
                        return (
                            (_ = D),
                            X(V.n.ESCAPE, _),
                            (() => {
                                const u = eu().mediaSize;
                                (0, r.useEffect)(() => {
                                    if (du[u])
                                        return (
                                            document.body.classList.add(du[u]),
                                            () => document.body.classList.remove(du[u])
                                        );
                                }, [u]);
                            })(),
                            Q(() => {
                                if (!e.bonuses.get().length) return t.close();
                            }),
                            Q(() =>
                                i('onLastRewardAnimationStart', () => {
                                    t.setBlur(!0),
                                        c.start({ to: { opacity: 1 }, config: { duration: ou, easing: cu } });
                                }),
                            ),
                            Q(() => {
                                const u = su(() => {
                                        U('adv_whoosh'),
                                            t.setBlur(!1),
                                            c.start({
                                                to: { opacity: 0 },
                                                config: {
                                                    duration: 200 * (e.bonuses.get().length - 1) + iu,
                                                    easing: Eu,
                                                },
                                            });
                                    }),
                                    n = () => {
                                        t.close();
                                    };
                                return (
                                    i('onCloseStart', u),
                                    i('onCloseEnd', n),
                                    () => {
                                        o('onCloseStart', u), o('onCloseEnd', n);
                                    }
                                );
                            }),
                            Q(() =>
                                (0, K.gx)(
                                    () => e.computes.readyToClose(),
                                    () => {
                                        F.start({
                                            to: { opacity: 1, visibility: 'visible' },
                                            config: { duration: ou, easing: cu },
                                        });
                                    },
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: 'App_base_45', lang: R.strings.settings.LANGUAGE_CODE() },
                                a().createElement(J.animated.div, { className: 'App_background_47', style: E }),
                                e.awardDayState.get() !== q.RegularDay &&
                                    a().createElement(
                                        J.animated.div,
                                        { className: 'App_close_99', style: d },
                                        a().createElement($, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: D,
                                        }),
                                    ),
                                a().createElement(ue, null),
                                a().createElement(Qe, null),
                                a().createElement(Ge, null),
                                a().createElement(Nu, null),
                            )
                        );
                    });
                let Ze;
                var Je;
                let ut, et;
                ((Je = Ze || (Ze = {})).Done = 'done'),
                    (Je.Locked = 'notAvailable'),
                    (Je.Active = ''),
                    (function (u) {
                        (u.WELCOME = 'welcome'),
                            (u.PROGRESSION_STEP = 'progressionStep'),
                            (u.SELECTED_REWARDS = 'selectedRewards'),
                            (u.WINBACK_PROGRESSION_COMPLETED = 'winbackProgressionCompleted'),
                            (u.REGULAR_PROGRESSION_COMPLETED = 'regularProgressionCompleted');
                    })(ut || (ut = {})),
                    (function (u) {
                        (u.VEHICLE_FOR_GIFT = 'vehicleForGift'),
                            (u.VEHICLE_DISCOUNT = 'vehicleDiscount'),
                            (u.VEHICLE_FOR_RENT = 'vehicleForRent'),
                            (u.SELECTABLE_VEHICLE_FOR_GIFT = 'selectableVehicleForGift'),
                            (u.SELECTABLE_VEHICLE_DISCOUNT = 'selectableVehicleDiscount');
                    })(et || (et = {}));
                var tt = t(613);
                let nt, rt;
                Date.now(),
                    tt.Ew.getRegionalDateTime,
                    tt.Ew.getFormattedDateTime,
                    (function (u) {
                        (u[(u.ExtraSmall = 32)] = 'ExtraSmall'),
                            (u[(u.Small = 48)] = 'Small'),
                            (u[(u.Medium = 64)] = 'Medium'),
                            (u[(u.Large = 80)] = 'Large'),
                            (u[(u.ExtraLarge = 100)] = 'ExtraLarge');
                    })(nt || (nt = {})),
                    (function (u) {
                        (u[(u.DailyQuests = 0)] = 'DailyQuests'), (u[(u.PremiumQuests = 1)] = 'PremiumQuests');
                    })(rt || (rt = {})),
                    rt.DailyQuests,
                    rt.PremiumQuests,
                    Object.values(ae),
                    et.VEHICLE_FOR_GIFT,
                    et.VEHICLE_DISCOUNT,
                    et.VEHICLE_FOR_RENT,
                    et.SELECTABLE_VEHICLE_FOR_GIFT,
                    et.SELECTABLE_VEHICLE_DISCOUNT,
                    et.VEHICLE_DISCOUNT,
                    et.SELECTABLE_VEHICLE_DISCOUNT;
                const at = {
                        dayId: '21',
                        awardDayState: q.SpecialDay,
                        doorsOpenedAm: 10,
                        showBoxesButton: !0,
                        bonuses: [
                            {
                                icon: 'booster_xp',
                                label: 'Дополнительный опыт за бой',
                                tooltipContentId: '',
                                tooltipId: '0',
                                isCompensation: !1,
                                value: '5',
                                name: 'goodies',
                                index: 0,
                            },
                            {
                                icon: 'booster_credits',
                                label: 'Дополнительные кредиты за бой',
                                tooltipContentId: '',
                                tooltipId: '1',
                                isCompensation: !1,
                                value: '5',
                                name: 'goodies',
                                index: 1,
                            },
                            {
                                icon: 'booster_credits',
                                label: 'Дополнительные кредиты за бой',
                                tooltipContentId: '',
                                tooltipId: '1',
                                isCompensation: !1,
                                value: '5',
                                name: 'goodies',
                                index: 2,
                            },
                        ],
                    },
                    it = {
                        getter: (0, n.makeDefaultGetter)(at),
                        controls: () =>
                            (function (u) {
                                const e = {};
                                for (const t in u)
                                    if (Object.prototype.hasOwnProperty.call(u, t)) {
                                        const n = u[t];
                                        e[t] = (0, K.aD)(n);
                                    }
                                return e;
                            })({ close: Fu, rewardsShown: Fu, setBlur: Fu }),
                    };
                engine.whenReady.then(() => {
                    N().render(
                        a().createElement(
                            I,
                            null,
                            a().createElement(
                                gu,
                                null,
                                a().createElement(fu, { mode: 'real', mocks: it }, a().createElement(Ke, null)),
                            ),
                        ),
                        document.getElementById('root'),
                    );
                });
            },
            363: (u) => {
                'use strict';
                u.exports = React;
            },
            533: (u) => {
                'use strict';
                u.exports = ReactDOM;
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return __webpack_modules__[u](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, n) => {
            if (!e) {
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, n] = deferred[s], a = !0, i = 0; i < e.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, n];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return __webpack_require__.d(e, { a: e }), e;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 237),
        (() => {
            var u = { 237: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        r,
                        [a, i, o] = t,
                        s = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (e && e(t); s < a.length; s++)
                        (r = a[s]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(228));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
