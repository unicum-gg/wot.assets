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
                (t.r(u),
                    t.d(u, { mouse: () => c, off: () => s, on: () => i, onResize: () => a, onScaleUpdated: () => o }));
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    s = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, r.R)(!0);
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
                                : (0, r.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const a = `mouse${u}`,
                                            o = l[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, i),
                                            n(),
                                            () => {
                                                r &&
                                                    (o(),
                                                    window.removeEventListener(a, i),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
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
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => a,
                        graphicsQuality: () => i,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var n = t(527),
                    r = t(2493);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
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
                function r(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => r, G: () => n });
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
                t.d(u, { O: () => a });
                var n = t(5959),
                    r = t(514);
                const a = { view: t(7641), client: n, sound: r.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => o });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, n.playSound)(r[u])), e), {}),
                    o = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var n = t(2472);
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
            7641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => S,
                        events: () => a.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => b,
                        getFontNames: () => w,
                        getScale: () => g,
                        getSize: () => _,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => f,
                        isFocused: () => C,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => x,
                    }));
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    o = t(8566);
                const i = 15;
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, i);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function d(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, i);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    S = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    y = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => a });
                const n = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
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
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((r = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    a = {
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
                let n, r;
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
                            (e[(e.KEY_1 = 49)] = 'KEY_1'),
                            (e[(e.KEY_2 = 50)] = 'KEY_2'),
                            (e[(e.KEY_3 = 51)] = 'KEY_3'),
                            (e[(e.KEY_4 = 52)] = 'KEY_4'),
                            (e[(e.KEY_5 = 53)] = 'KEY_5'),
                            (e[(e.KEY_6 = 54)] = 'KEY_6'),
                            (e[(e.KEY_7 = 55)] = 'KEY_7'),
                            (e[(e.KEY_8 = 56)] = 'KEY_8'),
                            (e[(e.KEY_9 = 57)] = 'KEY_9'));
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
                    })(r || (r = {})));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(3138);
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
                        const a = n.O.view.addModelObserver(e, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                r.__instance = void 0;
                const a = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9916);
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
            9916: (e, u, t) => {
                'use strict';
                t.d(u, { B0: () => i, ry: () => D });
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
                const r = n;
                var a = t(1358),
                    o = t(8613);
                let i;
                var s;
                (((s = i || (i = {}))[(s.UNDEFINED = 0)] = 'UNDEFINED'),
                    (s[(s.TOOLTIP = 1)] = 'TOOLTIP'),
                    (s[(s.POP_OVER = 2)] = 'POP_OVER'),
                    (s[(s.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (s[(s.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (s[(s.MOVE = 16)] = 'MOVE'),
                    (s[(s.CLOSE = 32)] = 'CLOSE'),
                    (s[(s.MINIMIZE = 64)] = 'MINIMIZE'));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    m = t(3138);
                const A = ['args'];
                function F(e, u, t, n, r, a, o) {
                    try {
                        var i = e[a](o),
                            s = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(s) : Promise.resolve(s).then(n, r);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function o(e) {
                                            F(a, n, r, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            F(a, n, r, o, i, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    p = () => B(i.CLOSE),
                    C = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var h = t(7572);
                const f = r.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: h.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: E,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => B(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => B(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                d = s.width,
                                E = s.height,
                                _ = {
                                    x: m.O.view.pxToRem(l) + o.x,
                                    y: m.O.view.pxToRem(c) + o.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(E),
                                };
                            B(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: g(_),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => C(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, p);
                        },
                        handleViewEvent: B,
                        onBindingsReady: D,
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
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
            },
            6913: (e, u, t) => {
                'use strict';
                var n = {};
                (t.r(n),
                    t.d(n, {
                        Area: () => $e,
                        Bar: () => Ge,
                        DefaultScroll: () => Ve,
                        Direction: () => Le,
                        defaultSettings: () => Pe,
                        useHorizontalScrollApi: () => ke,
                    }));
                var r = {};
                function a() {
                    return !1;
                }
                (t.r(r),
                    t.d(r, { Area: () => nu, Bar: () => eu, Default: () => tu, useVerticalScrollApi: () => je }),
                    console.log);
                var o = t(9174),
                    i = t(7363),
                    s = t.n(i),
                    l = t(3138);
                function c(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const d = (e) => (0 === e ? window : window.subViews.get(e));
                const E = function (e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                };
                var _ = t(3946);
                let m;
                !(function (e) {
                    ((e.None = 'none'), (e.Accepting = 'accepting'));
                })(m || (m = {}));
                const A = ((e, u) => {
                        const t = (0, i.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: r, mocks: A }) {
                                const F = (0, i.useRef)([]),
                                    g = (e, t, n) => {
                                        var r;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = d,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(e, u = 0) {
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
                                                const o = (e) => {
                                                    const r = t(u),
                                                        a = n.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const i = 'string' == typeof a ? `${n}.${a}` : n,
                                                            s = l.O.view.addModelObserver(i, u, !0);
                                                        return (r.set(s, t), e && t(o(a)), s);
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
                                                                                    return c(e, u);
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
                                                                                          ? c(e, u)
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
                                                                })(r.keys());
                                                            !(e = t()).done;
                                                        )
                                                            a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(t),
                                            s =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            A = (u) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(u)) : s.readByPath(u),
                                            g = (e) => F.current.push(e),
                                            D = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        tabs: e.array('tabs'),
                                                        rewards: e.array('rewards'),
                                                        animationState: o.LO.box(m.None),
                                                    },
                                                    t = (0, _.Om)((e) => E(u.tabs.get(), e), { equals: a }),
                                                    n = (0, _.Om)((e) => E(u.rewards.get(), e), { equals: a }),
                                                    r = (0, _.Om)(() =>
                                                        (function (e, u, t) {
                                                            if (Array.isArray(e)) return e.reduce(u, t);
                                                            let n = t;
                                                            for (let t = 0; t < e.length; t++) n = u(n, E(e, t), t, e);
                                                            return n;
                                                        })(u.tabs.get(), (e, u) => e + u.limit, 0),
                                                    );
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        tabByIndex: t,
                                                        rewardByIndex: n,
                                                        rewardsToClaimTotal: r,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: A,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const n = null != t ? t : A(u),
                                                            r = o.LO.box(n, { equals: a });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, o.aD)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const n = null != t ? t : A(u),
                                                            r = o.LO.box(n, { equals: a });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, o.aD)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const n = A(t);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (e, u) => ((e[u] = o.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, o.aD)((e) => {
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
                                                                a = Object.entries(r),
                                                                i = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = o.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, o.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                i[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: g,
                                            }),
                                            B = { mode: e, model: D, externalModel: s, cleanup: g };
                                        return {
                                            model: D,
                                            controls: 'mocks' === e && n ? n.controls(B) : u(B),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    D = (0, i.useRef)(!1),
                                    B = (0, i.useState)(e),
                                    p = B[0],
                                    C = B[1],
                                    h = (0, i.useState)(() => g(e, n, A)),
                                    f = h[0],
                                    v = h[1];
                                return (
                                    (0, i.useEffect)(() => {
                                        D.current ? v(g(p, n, A)) : (D.current = !0);
                                    }, [A, p, n]),
                                    (0, i.useEffect)(() => {
                                        C(e);
                                    }, [e]),
                                    (0, i.useEffect)(
                                        () => () => {
                                            (f.externalModel.dispose(), F.current.forEach((e) => e()));
                                        },
                                        [f],
                                    ),
                                    s().createElement(t.Provider, { value: f }, r)
                                );
                            },
                            () => (0, i.useContext)(t),
                        ];
                    })(0, ({ externalModel: e, model: u }) => {
                        const t = (0, o.aD)((e) => u.animationState.set(e));
                        return {
                            close: e.createCallbackNoArgs('onCloseClick'),
                            submit: e.createCallbackNoArgs('onOkClick'),
                            reduceReward: e.createCallback((e) => ({ type: e }), 'onRewardReduce'),
                            addReward: e.createCallback((e) => ({ type: e }), 'onRewardAdd'),
                            openTab: e.createCallback((e) => ({ type: e }), 'onTabClick'),
                            setAnimationState: t,
                        };
                    }),
                    F = A[0],
                    g = A[1],
                    D = (e, u, t) =>
                        u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                            ? (u.extraLargeHeight && t.extraLarge) ||
                              (u.largeHeight && t.large) ||
                              (u.mediumHeight && t.medium) ||
                              (u.smallHeight && t.small) ||
                              (u.extraSmallHeight && t.extraSmall)
                                ? e
                                : null
                            : e,
                    B = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var p;
                function C(e, u, t) {
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
                })(p || (p = {}));
                const h = l.O.client.getSize('rem'),
                    f = h.width,
                    v = h.height,
                    b = Object.assign({ width: f, height: v }, C(f, v, B)),
                    w = (0, i.createContext)(b),
                    S = ['children'],
                    y = (e) => {
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
                            })(e, S);
                        const n = (0, i.useContext)(w),
                            r = n.extraLarge,
                            a = n.large,
                            o = n.medium,
                            s = n.small,
                            l = n.extraSmall,
                            c = n.extraLargeWidth,
                            d = n.largeWidth,
                            E = n.mediumWidth,
                            _ = n.smallWidth,
                            m = n.extraSmallWidth,
                            A = n.extraLargeHeight,
                            F = n.largeHeight,
                            g = n.mediumHeight,
                            B = n.smallHeight,
                            p = n.extraSmallHeight,
                            C = { extraLarge: A, large: F, medium: g, small: B, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && r) return u;
                            if (t.large && a) return u;
                            if (t.medium && o) return u;
                            if (t.small && s) return u;
                            if (t.extraSmall && l) return u;
                        } else {
                            if (t.extraLargeWidth && c) return D(u, t, C);
                            if (t.largeWidth && d) return D(u, t, C);
                            if (t.mediumWidth && E) return D(u, t, C);
                            if (t.smallWidth && _) return D(u, t, C);
                            if (t.extraSmallWidth && m) return D(u, t, C);
                            if (!(
                                t.extraLargeWidth ||
                                t.largeWidth ||
                                t.mediumWidth ||
                                t.smallWidth ||
                                t.extraSmallWidth
                            )) {
                                if (t.extraLargeHeight && A) return u;
                                if (t.largeHeight && F) return u;
                                if (t.mediumHeight && g) return u;
                                if (t.smallHeight && B) return u;
                                if (t.extraSmallHeight && p) return u;
                            }
                        }
                        return null;
                    };
                ((y.defaultProps = {
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
                    (0, i.memo)(y));
                const x = ({ children: e }) => {
                    const u = (0, i.useContext)(w),
                        t = (0, i.useState)(u),
                        n = t[0],
                        r = t[1],
                        a = (0, i.useCallback)((e, u) => {
                            const t = l.O.view.pxToRem(e),
                                n = l.O.view.pxToRem(u);
                            r(Object.assign({ width: t, height: n }, C(t, n, B)));
                        }, []),
                        o = (0, i.useCallback)(() => {
                            const e = l.O.client.getSize('px');
                            a(e.width, e.height);
                        }, [a]);
                    (((e) => {
                        const u = (0, i.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        (l.O.client.events.on('clientResized', a), l.O.client.events.on('self.onScaleUpdated', o));
                    }),
                        (0, i.useEffect)(
                            () => () => {
                                (l.O.client.events.off('clientResized', a),
                                    l.O.client.events.off('self.onScaleUpdated', o));
                            },
                            [a, o],
                        ));
                    const c = (0, i.useMemo)(() => Object.assign({}, n), [n]);
                    return s().createElement(w.Provider, { value: c }, e);
                };
                var T = t(6483),
                    L = t.n(T),
                    P = t(926),
                    M = t.n(P);
                let k, O, N;
                (!(function (e) {
                    ((e[(e.ExtraSmall = B.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = B.small.width)] = 'Small'),
                        (e[(e.Medium = B.medium.width)] = 'Medium'),
                        (e[(e.Large = B.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = B.extraLarge.width)] = 'ExtraLarge'));
                })(k || (k = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = B.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = B.small.width)] = 'Small'),
                            (e[(e.Medium = B.medium.width)] = 'Medium'),
                            (e[(e.Large = B.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = B.extraLarge.width)] = 'ExtraLarge'));
                    })(O || (O = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = B.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = B.small.height)] = 'Small'),
                            (e[(e.Medium = B.medium.height)] = 'Medium'),
                            (e[(e.Large = B.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = B.extraLarge.height)] = 'ExtraLarge'));
                    })(N || (N = {})));
                const I = () => {
                        const e = (0, i.useContext)(w),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return k.ExtraLarge;
                                    case e.large:
                                        return k.Large;
                                    case e.medium:
                                        return k.Medium;
                                    case e.small:
                                        return k.Small;
                                    case e.extraSmall:
                                        return k.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), k.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return O.ExtraLarge;
                                    case e.largeWidth:
                                        return O.Large;
                                    case e.mediumWidth:
                                        return O.Medium;
                                    case e.smallWidth:
                                        return O.Small;
                                    case e.extraSmallWidth:
                                        return O.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), O.ExtraSmall);
                                }
                            })(e),
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return N.ExtraLarge;
                                    case e.largeHeight:
                                        return N.Large;
                                    case e.mediumHeight:
                                        return N.Medium;
                                    case e.smallHeight:
                                        return N.Small;
                                    case e.extraSmallHeight:
                                        return N.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), N.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: a, remScreenWidth: u, remScreenHeight: t };
                    },
                    H = ['children', 'className'];
                function W() {
                    return (
                        (W = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        W.apply(null, arguments)
                    );
                }
                const U = {
                        [O.ExtraSmall]: '',
                        [O.Small]: M().SMALL_WIDTH,
                        [O.Medium]: `${M().SMALL_WIDTH} ${M().MEDIUM_WIDTH}`,
                        [O.Large]: `${M().SMALL_WIDTH} ${M().MEDIUM_WIDTH} ${M().LARGE_WIDTH}`,
                        [O.ExtraLarge]: `${M().SMALL_WIDTH} ${M().MEDIUM_WIDTH} ${M().LARGE_WIDTH} ${M().EXTRA_LARGE_WIDTH}`,
                    },
                    G = {
                        [N.ExtraSmall]: '',
                        [N.Small]: M().SMALL_HEIGHT,
                        [N.Medium]: `${M().SMALL_HEIGHT} ${M().MEDIUM_HEIGHT}`,
                        [N.Large]: `${M().SMALL_HEIGHT} ${M().MEDIUM_HEIGHT} ${M().LARGE_HEIGHT}`,
                        [N.ExtraLarge]: `${M().SMALL_HEIGHT} ${M().MEDIUM_HEIGHT} ${M().LARGE_HEIGHT} ${M().EXTRA_LARGE_HEIGHT}`,
                    },
                    z = {
                        [k.ExtraSmall]: '',
                        [k.Small]: M().SMALL,
                        [k.Medium]: `${M().SMALL} ${M().MEDIUM}`,
                        [k.Large]: `${M().SMALL} ${M().MEDIUM} ${M().LARGE}`,
                        [k.ExtraLarge]: `${M().SMALL} ${M().MEDIUM} ${M().LARGE} ${M().EXTRA_LARGE}`,
                    },
                    V = (e) => {
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
                            })(e, H);
                        const r = I(),
                            a = r.mediaWidth,
                            o = r.mediaHeight,
                            i = r.mediaSize;
                        return s().createElement('div', W({ className: L()(t, U[a], G[o], z[i]) }, n), u);
                    },
                    $ = ['children'],
                    j = (e) => {
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
                            })(e, $);
                        return s().createElement(x, null, s().createElement(V, t, u));
                    };
                var q = t(1533),
                    Y = t.n(q);
                function X(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const K = {
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
                    Z = [
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
                function Q() {
                    return (
                        (Q = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Q.apply(null, arguments)
                    );
                }
                class J extends s().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && X(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && X(this.props.soundClick));
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
                            a = e.type,
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
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(e, Z)),
                            _ = L()(K.base, K[`base__${a}`], K[`base__${r}`], null == o ? void 0 : o.base),
                            m = L()(K.icon, K[`icon__${a}`], K[`icon__${r}`], null == o ? void 0 : o.icon),
                            A = L()(K.glow, null == o ? void 0 : o.glow),
                            F = L()(K.caption, K[`caption__${a}`], null == o ? void 0 : o.caption),
                            g = L()(K.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            Q(
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
                            'info' !== a && s().createElement('div', { className: K.shine }),
                            s().createElement('div', { className: m }, s().createElement('div', { className: A })),
                            s().createElement('div', { className: F }, u),
                            n && s().createElement('div', { className: g }, n),
                        );
                    }
                }
                J.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var ee = t(3403);
                const ue = (e, u) => {
                    const t = [];
                    for (let n = 0; n < e; n++) t.push(u(n));
                    return t;
                };
                let te, ne, re, ae, oe, ie, se, le;
                (!(function (e) {
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
                        (e.Tankman = 'tankman'),
                        (e.Tankwoman = 'tankwoman'),
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
                        (e.BattlePassTicket = 'lootBox_commonTicket'),
                        (e.BattlePassTaler = 'bptaler'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.EquipCoin = 'equipCoin'),
                        (e.LootBox = 'lootBox'),
                        (e.BrCoin = 'brcoin'),
                        (e.StpCoin = 'stpcoin'));
                })(te || (te = {})),
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
                            (e.Entitlements = 'entitlements'),
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement'),
                            (e.EquipCoin = 'equipCoin'));
                    })(ne || (ne = {})),
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
                            (e.S64x64 = 's64x64'),
                            (e.S48x48 = 's48x48'));
                    })(re || (re = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(ae || (ae = {})),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
                            (e.LOOT_BOX = 'eventLootBoxes'));
                    })(oe || (oe = {})),
                    (function (e) {
                        ((e.BATTLE_BOOSTER = 'battleBooster'), (e.LOOT_BOX = 'lootBox'));
                    })(ie || (ie = {})),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(se || (se = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(le || (le = {})));
                var ce = t(9916);
                const de = [
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
                function Ee(e) {
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
                const _e = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: ce.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    me = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            a = e.onMouseLeave,
                            o = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            _ = e.decoratorId,
                            m = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            g = e.targetId,
                            D = void 0 === g ? 0 : g,
                            B = e.onShow,
                            p = e.onHide,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, de);
                        const h = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, i.useMemo)(
                                () =>
                                    D ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId'),
                                            r = '';
                                        var a;
                                        return (
                                            u &&
                                                ((r =
                                                    (null == (a = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) ||
                                                    ''),
                                                (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { callerUrl: r, caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [D],
                            ),
                            v = (0, i.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (_e(t, m, { isMouseEvent: !0, on: !0, arguments: Ee(n) }, f),
                                    B && B(),
                                    (h.current.isVisible = !0));
                            }, [t, m, n, f, B]),
                            b = (0, i.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        _e(t, m, { on: !1 }, f),
                                        h.current.isVisible && p && p(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, m, f, p]),
                            w = (0, i.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        return (
                            (0, i.useEffect)(() => {
                                const e = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, i.useEffect)(() => {
                                !1 === F && b();
                            }, [F, b]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        (window.removeEventListener('mouseleave', b), b());
                                    }
                                ),
                                [b],
                            ),
                            F
                                ? (0, i.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          r && r(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (b(), null == a || a(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === E && b(), null == s || s(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === E && b(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          C,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    Ae = ['children'];
                function Fe() {
                    return (
                        (Fe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Fe.apply(null, arguments)
                    );
                }
                const ge = (e) => {
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
                        })(e, Ae);
                    return s().createElement(
                        me,
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
                        u,
                    );
                };
                let De;
                function Be(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                (t(1281),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(De || (De = {})));
                const pe =
                        (new RegExp(
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
                        ),
                        (e, u = re.Small) => `R.images.gui.maps.icons.quests.bonuses.${u}.${e}_gift`),
                    Ce = (e, u = 's180x135', t = 'R.images.gui.maps.icons.selectableReward.reward') => `${t}.${u}.${e}`,
                    he = {
                        base: 'Category_base_01',
                        glow: 'Category_glow_8a',
                        glow__show: 'Category_glow__show_c1',
                        title: 'Category_title_e6',
                        base__selected: 'Category_base__selected_75',
                        imageContainer: 'Category_imageContainer_a0',
                        image: 'Category_image_12',
                        base__completed: 'Category_base__completed_fb',
                        base__accepting: 'Category_base__accepting_71',
                        blink: 'Category_blink_4f',
                        check: 'Category_check_13',
                        counter: 'Category_counter_1f',
                        slideUp: 'Category_slideUp_bf',
                        show: 'Category_show_c1',
                    },
                    fe = R.strings.selectable_reward.tabs,
                    ve = (0, ee.Pi)(({ index: e, className: u, classNames: t }) => {
                        const n = I().mediaSize,
                            r = g(),
                            a = r.model,
                            o = r.controls,
                            i = a.animationState.get(),
                            l = a.computes.tabByIndex(e),
                            c = l.count === l.limit,
                            d = a.root.get().selectedTab === l.type,
                            E = n >= k.Medium ? re.Big : re.Small;
                        return s().createElement(
                            'div',
                            {
                                className: L()(
                                    he.base,
                                    c && he.base__completed,
                                    d ? he.base__selected : l.count && he[`base__${i}`],
                                    u,
                                ),
                                onClick: () => {
                                    (X('bp_click'), o.openTab(l.type));
                                },
                                onMouseEnter: () => X('bp_highlight'),
                            },
                            s().createElement('div', { className: L()(he.glow, d && he.glow__show) }),
                            s().createElement(
                                'div',
                                { className: L()(he.title, null == t ? void 0 : t.title) },
                                ((_ = l.type), R.strings.selectable_reward.tabs.items.$dyn(_)),
                            ),
                            s().createElement(
                                ge,
                                { args: { type: l.type } },
                                s().createElement(
                                    'div',
                                    { className: he.imageContainer },
                                    s().createElement('div', {
                                        className: he.image,
                                        style: { backgroundImage: `url(${pe(l.type, E)})` },
                                    }),
                                    s().createElement('div', { className: he.check }),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: he.counter },
                                Be(fe.counter(), { count: l.count, limit: l.limit }),
                            ),
                        );
                        var _;
                    }),
                    be = (e) => {
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
                    we = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Se = [];
                function ye(e) {
                    const u = (0, i.useRef)(e);
                    return (
                        (0, i.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, i.useCallback)((...e) => (0, u.current)(...e), Se)
                    );
                }
                function xe(e, u, t = []) {
                    const n = (0, i.useRef)(0),
                        r = (0, i.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, i.useEffect)(() => r, [r]);
                    const a = (null != t ? t : []).concat([u]);
                    return [
                        (0, i.useCallback)((t) => {
                            ((n.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, a),
                        r,
                    ];
                }
                function Te(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                var Re = t(7030);
                let Le;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Le || (Le = {}));
                const Pe = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Me = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        forceTriggerMouseMove: a,
                    }) => {
                        const o = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : we(r, a, t);
                        };
                        return (s = {}) => {
                            const l = s.settings,
                                c = void 0 === l ? Pe : l,
                                d = (0, i.useRef)(null),
                                E = (0, i.useRef)(null),
                                _ = (0, i.useRef)(!1),
                                m = (() => {
                                    const e = (0, i.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (
                                                var n,
                                                    r = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return Te(e, u);
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
                                                                              ? Te(e, u)
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
                                                !(n = r()).done;
                                            )
                                                (0, n.value)(...t);
                                        };
                                    return (0, i.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                A = (function (e, u, t) {
                                    const n = (0, i.useMemo)(
                                        () =>
                                            (function (e, u, t, n) {
                                                let r,
                                                    a = !1,
                                                    o = 0;
                                                function i() {
                                                    r && clearTimeout(r);
                                                }
                                                function s(...s) {
                                                    const l = this,
                                                        c = Date.now() - o;
                                                    function d() {
                                                        ((o = Date.now()), t.apply(l, s));
                                                    }
                                                    a ||
                                                        (n && !r && d(),
                                                        i(),
                                                        void 0 === n && c > e
                                                            ? d()
                                                            : !0 !== u &&
                                                              (r = setTimeout(
                                                                  n
                                                                      ? function () {
                                                                            r = void 0;
                                                                        }
                                                                      : d,
                                                                  void 0 === n ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                                    (s.cancel = function () {
                                                        (i(), (a = !0));
                                                    }),
                                                    s
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return ((0, i.useEffect)(() => n.cancel, [n]), n);
                                })(
                                    () => {
                                        a && a();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, Re.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), m.trigger('change', e), a && _.current && A());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                g = F[0],
                                D = F[1],
                                B = (0, i.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = g.scrollPosition.get(),
                                            a = (null != (n = g.scrollPosition.goal) ? n : 0) - r;
                                        return o(e, u * t + a + r);
                                    },
                                    [g.scrollPosition],
                                ),
                                p = (0, i.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            D.start({
                                                scrollPosition: o(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(n, g.scrollPosition.get()) },
                                            });
                                    },
                                    [D, c.animationConfig, g.scrollPosition],
                                ),
                                C = (0, i.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = E.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            a = B(u, e, n);
                                        p(a);
                                    },
                                    [p, B, c.step],
                                ),
                                h = (0, i.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && C(n(e)),
                                            d.current && m.trigger('mouseWheel', e, g.scrollPosition, u(d.current)));
                                    },
                                    [g.scrollPosition, C, m],
                                ),
                                f = ((e, u = []) => {
                                    const t = (0, i.useRef)(),
                                        n = (0, i.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, i.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        be(() => {
                                            const e = d.current;
                                            e &&
                                                (p(o(e, g.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [p, g.scrollPosition.goal],
                                ),
                                v = ye(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = o(e, g.scrollPosition.goal);
                                    (u !== g.scrollPosition.goal && p(u, { immediate: !0 }),
                                        m.trigger('recalculateContent'));
                                });
                            return (
                                (0, i.useEffect)(
                                    () => (
                                        window.addEventListener('resize', f),
                                        () => {
                                            window.removeEventListener('resize', f);
                                        }
                                    ),
                                    [f],
                                ),
                                (0, i.useEffect)(() => {
                                    const e = d.current;
                                    if (!e || !a) return;
                                    const u = () => {
                                            _.current = !0;
                                        },
                                        t = () => {
                                            _.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', u),
                                        e.addEventListener('mouseleave', t),
                                        () => {
                                            (e.removeEventListener('mouseenter', u),
                                                e.removeEventListener('mouseleave', t));
                                        }
                                    );
                                }, [d]),
                                (0, i.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (E.current ? r(E.current) : void 0),
                                        getContainerSize: () => (d.current ? e(d.current) : void 0),
                                        getBounds: () =>
                                            d.current
                                                ? u(d.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: c.step.clampedArrowStepTimeout,
                                        clampPosition: o,
                                        handleMouseWheel: h,
                                        applyScroll: p,
                                        applyStepTo: C,
                                        contentRef: d,
                                        wrapperRef: E,
                                        scrollPosition: D,
                                        animationScroll: g,
                                        recalculateContent: v,
                                        events: { on: m.on, off: m.off },
                                    }),
                                    [g.scrollPosition, p, C, m.off, m.on, v, h, D, c.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    ke = Me({
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
                        getDirection: (e) => (e.deltaY > 1 ? Le.Next : Le.Prev),
                        forceTriggerMouseMove: l.O.view.forceTriggerMouseMove,
                    }),
                    Oe = 'HorizontalBar_base__nonActive_82',
                    Ne = 'disable',
                    Ie = { pending: !1, offset: 0 },
                    He = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    We = () => {},
                    Ue = (e, u) => Math.max(20, e.offsetWidth * u),
                    Ge = (0, i.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = He, onDrag: n = We }) => {
                        const r = (0, i.useRef)(null),
                            a = (0, i.useRef)(null),
                            o = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            d = (0, i.useRef)(null),
                            E = e.stepTimeout || 100,
                            _ = (0, i.useState)(Ie),
                            m = _[0],
                            A = _[1],
                            F = (0, i.useCallback)(
                                (e) => {
                                    (A(e),
                                        d.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [n],
                            ),
                            g = () => {
                                const u = c.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    l = we(0, 1, i / (r - n)),
                                    E = (u.offsetWidth - Ue(u, s)) * l;
                                ((t.style.transform = `translateX(${0 | E}px)`),
                                    ((e) => {
                                        if (a.current && o.current && c.current && d.current) {
                                            if (0 === e)
                                                return (
                                                    a.current.classList.add(Ne),
                                                    void o.current.classList.remove(Ne)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    a.current.classList.remove(Ne),
                                                    void o.current.classList.add(Ne)
                                                );
                                            var u, t;
                                            (a.current.classList.remove(Ne), o.current.classList.remove(Ne));
                                        }
                                    })(E));
                            },
                            D = ye(() => {
                                ((() => {
                                    const u = d.current,
                                        t = c.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const o = Math.min(1, n / a);
                                    ((u.style.width = `${Ue(t, o)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 === o ? r.current.classList.add(Oe) : r.current.classList.remove(Oe)));
                                })(),
                                    g());
                            });
                        ((0, i.useEffect)(() => be(D)),
                            (0, i.useEffect)(
                                () =>
                                    be(() => {
                                        const u = () => {
                                            g();
                                        };
                                        let t = We;
                                        const n = () => {
                                            (t(), (t = be(D)));
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
                            (0, i.useEffect)(() => {
                                if (!m.pending) return;
                                const u = l.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!a || !o) return;
                                        const i = c.current,
                                            s = d.current;
                                        if (!i || !s) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - m.offset - i.getBoundingClientRect().x,
                                            E = (l / i.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, E),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: l, contentOffset: E }));
                                    }),
                                    t = l.O.client.events.mouse.up(() => {
                                        (u(), F(Ie));
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, m.offset, m.pending, n, F]));
                        const B = xe((u) => e.applyStepTo(u), E, [e]),
                            p = B[0],
                            C = B[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const h = (e) => {
                            e.target.classList.contains(Ne) || X('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: L()('HorizontalBar_base_49', u.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: L()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ne) || 0 !== e.button || (X('play'), p(Le.Next));
                                },
                                onMouseUp: C,
                                ref: a,
                                onMouseEnter: h,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: L()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        n &&
                                            0 === u.button &&
                                            (X('play'),
                                            u.target === n
                                                ? F({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const n = d.current,
                                                          r = e.contentRef.current;
                                                      if (!n || !r) return;
                                                      const a = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                  })(u.screenX > n.getBoundingClientRect().x ? Le.Prev : Le.Next));
                                    },
                                    ref: c,
                                    onMouseEnter: h,
                                },
                                s().createElement('div', { ref: d, className: L()('HorizontalBar_thumb_fd', u.thumb) }),
                                s().createElement('div', { className: L()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: L()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ne) || 0 !== e.button || (X('play'), p(Le.Prev));
                                },
                                onMouseUp: C,
                                ref: o,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    ze = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Ve = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: a,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, i.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: L()(ze.base, e.base) });
                            }, [n]),
                            E = (0, i.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: L()(ze.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: L()(ze.defaultScrollArea, r) },
                                s().createElement($e, { className: o, api: E, classNames: a }, e),
                            ),
                            s().createElement(Ge, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    $e = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, i.useEffect)(() => be(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: L()(ze.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: L()(ze.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: L()(ze.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (($e.Bar = Ge), ($e.Default = Ve));
                const je = Me({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Le.Next : Le.Prev),
                    }),
                    qe = 'VerticalBar_base__nonActive_42',
                    Ye = 'disable',
                    Xe = () => {},
                    Ke = { pending: !1, offset: 0 },
                    Ze = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Qe = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Je = (e, u) => Math.max(20, e.offsetHeight * u),
                    eu = (0, i.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Ze, onDrag: n = Xe }) => {
                        const r = (0, i.useRef)(null),
                            a = (0, i.useRef)(null),
                            o = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            d = (0, i.useRef)(null),
                            E = e.stepTimeout || 100,
                            _ = (0, i.useState)(Ke),
                            m = _[0],
                            A = _[1],
                            F = (0, i.useCallback)(
                                (e) => {
                                    (A(e),
                                        d.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [n],
                            ),
                            g = ye(() => {
                                const u = d.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && u && t)) return;
                                const o = Math.min(1, n / a);
                                return (
                                    (u.style.height = `${Je(t, o)}px`),
                                    (u.style.display = 'flex'),
                                    r.current &&
                                        (1 === o ? r.current.classList.add(qe) : r.current.classList.remove(qe)),
                                    o
                                );
                            }),
                            D = ye(() => {
                                const u = c.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    l = we(0, 1, i / (r - n)),
                                    E = (u.offsetHeight - Je(u, s)) * l;
                                ((t.style.transform = `translateY(${0 | E}px)`),
                                    ((e) => {
                                        if (a.current && o.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    a.current.classList.add(Ye),
                                                    void o.current.classList.remove(Ye)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    a.current.classList.remove(Ye),
                                                    void o.current.classList.add(Ye)
                                                );
                                            var u, t;
                                            (a.current.classList.remove(Ye), o.current.classList.remove(Ye));
                                        }
                                    })(E));
                            }),
                            B = ye(() => {
                                Qe(e, () => {
                                    (g(), D());
                                });
                            });
                        ((0, i.useEffect)(() => be(B)),
                            (0, i.useEffect)(() => {
                                const u = () => {
                                    Qe(e, () => {
                                        D();
                                    });
                                };
                                let t = Xe;
                                const n = () => {
                                    (t(), (t = be(B)));
                                };
                                return (
                                    e.events.on('recalculateContent', B),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', B),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, i.useEffect)(() => {
                                if (!m.pending) return;
                                const u = l.O.client.events.mouse.up(() => {
                                        F(Ke);
                                    }),
                                    t = l.O.client.events.mouse.move(([u]) => {
                                        Qe(e, (t) => {
                                            const r = c.current,
                                                a = d.current,
                                                o = e.getContainerSize();
                                            if (!r || !a || !o) return;
                                            const i = u.screenY - m.offset - r.getBoundingClientRect().y,
                                                s = (i / r.offsetHeight) * o;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: s }));
                                        });
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, m.offset, m.pending, n, F]));
                        const p = xe((u) => e.applyStepTo(u), E, [e]),
                            C = p[0],
                            h = p[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const f = (e) => {
                            e.target.classList.contains(Ye) || X('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: L()('VerticalBar_base_f3', u.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: L()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ye) || 0 !== e.button || (X('play'), C(Le.Next));
                                },
                                ref: a,
                                onMouseEnter: f,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: L()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        var r;
                                        n &&
                                            0 === u.button &&
                                            (X('play'),
                                            u.target === n
                                                ? F({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y })
                                                : ((r = u.screenY > n.getBoundingClientRect().y ? Le.Prev : Le.Next),
                                                  d.current &&
                                                      Qe(e, (u) => {
                                                          if (!u) return;
                                                          const n = t(e),
                                                              a = e.clampPosition(u, u.scrollTop + n * r);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                s().createElement('div', { ref: d, className: L()('VerticalBar_thumb_32', u.thumb) }),
                                s().createElement('div', { className: L()('VerticalBar_rail_43', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: L()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ye) || 0 !== e.button || (X('play'), C(Le.Prev));
                                },
                                onMouseUp: h,
                                ref: o,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    uu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    tu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: a,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, i.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: L()(uu.base, e.base) });
                            }, [n]),
                            E = (0, i.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: L()(uu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: L()(uu.area, r) },
                                s().createElement(nu, { className: a, classNames: o, api: E }, e),
                            ),
                            s().createElement(eu, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    nu = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, i.useEffect)(() => be(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: L()(uu.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: L()(uu.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                nu.Default = tu;
                const ru = { Vertical: r, Horizontal: n },
                    au = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ou() {
                    return (
                        (ou = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ou.apply(null, arguments)
                    );
                }
                const iu = R.views.common.tooltip_window.simple_tooltip_content,
                    su = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            a = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, au);
                        const c = (0, i.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: n, note: r, alert: a });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [a, t, n, r, o]);
                        return s().createElement(
                            me,
                            ou(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? iu.SimpleTooltipHtmlContent('resId') : iu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    },
                    lu = 'state_normal',
                    cu = 'state_limited',
                    du = {
                        base: 'Reward_base_fc',
                        base__selected: 'Reward_base__selected_6d',
                        reward: 'Reward_reward_3f',
                        image: 'Reward_image_5e',
                        base__stateReceived: 'Reward_base__stateReceived_ff',
                        base__stateLimited: 'Reward_base__stateLimited_6e',
                        base__accepting: 'Reward_base__accepting_9d',
                        blink: 'Reward_blink_2d',
                        optDeviceType: 'Reward_optDeviceType_7f',
                        disabled: 'Reward_disabled_31',
                        packSize: 'Reward_packSize_63',
                        label: 'Reward_label_e6',
                        storage: 'Reward_storage_0b',
                        storage__hidden: 'Reward_storage__hidden_0a',
                        storageIcon: 'Reward_storageIcon_45',
                        countText: 'Reward_countText_61',
                        select: 'Reward_select_89',
                        state: 'Reward_state_19',
                        stateText: 'Reward_stateText_4b',
                        stateIcon: 'Reward_stateIcon_c6',
                        glow: 'Reward_glow_dc',
                        base__stateNormal: 'Reward_base__stateNormal_99',
                        slideUp: 'Reward_slideUp_f1',
                        show: 'Reward_show_0f',
                    },
                    Eu = {
                        base: 'SelectButton_base_1c',
                        base__plus: 'SelectButton_base__plus_01',
                        base__disabled: 'SelectButton_base__disabled_f4',
                        base__minus: 'SelectButton_base__minus_13',
                    };
                let _u;
                !(function (e) {
                    ((e.Plus = 'plus'), (e.Minus = 'minus'));
                })(_u || (_u = {}));
                const mu = ({ type: e = _u.Plus, isEnabled: u = !0, onClick: t }) =>
                    s().createElement('div', {
                        className: L()(Eu.base, Eu[`base__${e}`], !u && Eu.base__disabled),
                        onClick: (e) => {
                            (e.stopPropagation(), u && t(e));
                        },
                    });
                var Au;
                !(function (e) {
                    ((e.None = 'none'),
                        (e.Trophy = 'trophy'),
                        (e.Deluxe = 'delux'),
                        (e.Modernized = 'modernized'),
                        (e.BattleBooster = 'battleBooster'));
                })(Au || (Au = {}));
                const Fu = R.strings.selectable_reward.reward,
                    gu = (0, ee.Pi)(({ index: e }) => {
                        const u = g(),
                            t = u.model,
                            n = u.controls,
                            r = t.animationState.get(),
                            a = t.computes.rewardByIndex(e),
                            o = a.type,
                            i = a.count,
                            l = a.state,
                            c = a.storageCount,
                            d = a.packSize,
                            E = n.addReward,
                            _ = n.reduceReward,
                            A = i > 0 && 'state_received' !== l,
                            F = r === m.Accepting && A,
                            D = (function (e) {
                                return e.startsWith(Au.Trophy)
                                    ? Au.Trophy
                                    : e.startsWith(Au.Deluxe)
                                      ? Au.Deluxe
                                      : e.startsWith(Au.Modernized)
                                        ? Au.Modernized
                                        : e.toLowerCase().endsWith(Au.BattleBooster.toLowerCase())
                                          ? Au.BattleBooster
                                          : Au.None;
                            })(o);
                        return s().createElement(
                            'div',
                            {
                                className: L()(
                                    du.base,
                                    A && du.base__selected,
                                    F && du.base__accepting,
                                    du[`base__${((B = l), B.replace(/_\w/g, (e) => e[1].toUpperCase()))}`],
                                ),
                                onClick: () => {
                                    l === lu
                                        ? (X(R.sounds.bp_click()), E(o))
                                        : l === cu && X(R.sounds.bp_click_limit());
                                },
                                onMouseEnter: () => X(R.sounds.bp_highlight()),
                            },
                            s().createElement(
                                'div',
                                { className: L()(du.storage, c <= 0 && du.storage__hidden) },
                                s().createElement('div', { className: du.storageIcon }),
                                c,
                            ),
                            s().createElement(
                                ge,
                                { args: { type: o } },
                                s().createElement(
                                    'div',
                                    { className: du.reward },
                                    s().createElement('div', {
                                        className: du.image,
                                        style: { backgroundImage: `url(${Ce(o)})` },
                                    }),
                                    D !== Au.None &&
                                        s().createElement('div', {
                                            className: du.optDeviceType,
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.selectableReward.reward.optDeviceType.${D})`,
                                            },
                                        }),
                                    !A &&
                                        l !== lu &&
                                        s().createElement('div', {
                                            className: du.disabled,
                                            style: { maskImage: `url(${Ce(o)})` },
                                        }),
                                    d > 1 &&
                                        s().createElement(
                                            'div',
                                            { className: du.packSize },
                                            Be(Fu.packSizeCount(), { packSize: d }),
                                        ),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: du.label },
                                ((e) => {
                                    var u;
                                    const t = e.split('_')[1],
                                        n = t && R.strings.blueprints.nations.$dyn(t),
                                        r = null == (u = R.strings.artefacts.$dyn(e)) ? void 0 : u.$dyn('name');
                                    return (
                                        n ||
                                        (r
                                            ? ((e) => e.replace(/&nbsp;/g, ' '))(r)
                                            : void console.error('title for reward is not provided'))
                                    );
                                })(o),
                            ),
                            A || l === lu
                                ? s().createElement(
                                      s().Fragment,
                                      null,
                                      s().createElement('span', { className: du.countText }, i),
                                      s().createElement(
                                          'div',
                                          { className: du.select },
                                          s().createElement(mu, {
                                              type: _u.Minus,
                                              isEnabled: A,
                                              onClick: () => {
                                                  (X(R.sounds.bp_click_minus()), _(o));
                                              },
                                          }),
                                          s().createElement(mu, {
                                              type: _u.Plus,
                                              isEnabled: l === lu,
                                              onClick: () => {
                                                  l === lu && (X(R.sounds.bp_click_plus()), E(o));
                                              },
                                          }),
                                      ),
                                  )
                                : s().createElement(
                                      su,
                                      l === cu && 0 === i
                                          ? {
                                                header: Fu.tooltip.state_limited.header(),
                                                body: Fu.tooltip.state_limited.body(),
                                            }
                                          : { isEnabled: !1 },
                                      s().createElement(
                                          'div',
                                          { className: du.state },
                                          s().createElement('div', { className: du.stateText }, Fu.$dyn(l)),
                                          s().createElement('div', { className: du.stateIcon }),
                                      ),
                                  ),
                            s().createElement('div', { className: du.glow }),
                        );
                        var B;
                    }),
                    Du = {
                        base: 'Lip_base_57',
                        base__top: 'Lip_base__top_11',
                        base__bottom: 'Lip_base__bottom_a5',
                        base__show: 'Lip_base__show_65',
                    };
                let Bu;
                !(function (e) {
                    ((e.Top = 'top'), (e.Bottom = 'bottom'));
                })(Bu || (Bu = {}));
                const pu = ({ position: e, visible: u }) =>
                        s().createElement('div', { className: L()(Du.base, Du[`base__${e}`], u && Du.base__show) }),
                    Cu = (0, ee.Pi)(({ className: e }) => {
                        const u = g().model,
                            t = u.root.get().selectedTab,
                            n = u.rewards.get(),
                            r = je(),
                            a = (0, i.useState)('default'),
                            o = a[0],
                            l = a[1],
                            c = ye(() => {
                                const e = r.getBounds(),
                                    u = e[0],
                                    t = e[1],
                                    n = r.animationScroll.scrollPosition.goal,
                                    a = r.getContainerSize(),
                                    o = r.getWrapperSize();
                                if (a && o)
                                    if (a !== o)
                                        switch (n) {
                                            case u:
                                                l('start');
                                                break;
                                            case t:
                                                l('end');
                                                break;
                                            default:
                                                l('default');
                                        }
                                    else l('hidden');
                            });
                        return (
                            (0, i.useEffect)(
                                () => (
                                    r.events.on('change', c),
                                    r.events.on('recalculateContent', c),
                                    r.events.on('resizeHandled', c),
                                    () => {
                                        (r.events.off('change', c),
                                            r.events.off('recalculateContent', c),
                                            r.events.off('resizeHandled', c));
                                    }
                                ),
                                [r.events, c],
                            ),
                            (0, i.useEffect)(
                                () =>
                                    be(() => {
                                        r.applyScroll(0);
                                    }),
                                [r, t],
                            ),
                            s().createElement(
                                'div',
                                { className: L()('ContentGrid_base_59', e) },
                                s().createElement(
                                    ru.Vertical.Area.Default,
                                    { api: r, key: 'area', className: 'ContentGrid_scrollArea_e0' },
                                    s().createElement(
                                        'div',
                                        { className: 'ContentGrid_scrollAreaInner_ba' },
                                        ue(n.length, (e) =>
                                            s().createElement(
                                                'div',
                                                { key: e, className: 'ContentGrid_reward_68' },
                                                s().createElement(gu, { index: e }),
                                            ),
                                        ),
                                    ),
                                ),
                                'hidden' !== o &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(pu, { position: Bu.Top, visible: 'start' !== o }),
                                        s().createElement(pu, { position: Bu.Bottom, visible: 'end' !== o }),
                                    ),
                            )
                        );
                    }),
                    hu = {
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
                let fu, vu;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(fu || (fu = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(vu || (vu = {})));
                const bu = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: r,
                    mixClass: a,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: E,
                    onMouseUp: _,
                    onMouseLeave: m,
                    onClick: A,
                }) => {
                    const F = (0, i.useRef)(null),
                        g = (0, i.useState)(t),
                        D = g[0],
                        B = g[1],
                        p = (0, i.useState)(!1),
                        C = p[0],
                        h = p[1];
                    return (
                        (0, i.useEffect)(() => {
                            function e(e) {
                                D && null !== F.current && !F.current.contains(e.target) && B(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [D]),
                        (0, i.useEffect)(() => {
                            B(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: F,
                                className: L()(
                                    hu.base,
                                    hu[`base__${n}`],
                                    r && hu.base__disabled,
                                    u && hu[`base__${u}`],
                                    D && hu.base__focus,
                                    C && hu.base__highlightActive,
                                    a,
                                ),
                                onMouseEnter: function (e) {
                                    r || (null !== o && X(o), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    r || (_ && _(e), h(!1));
                                },
                                onMouseDown: function (e) {
                                    r ||
                                        (null !== l && X(l),
                                        E && E(e),
                                        t && (r || (F.current && (F.current.focus(), B(!0)))),
                                        h(!0));
                                },
                                onMouseLeave: function (e) {
                                    r || (m && m(e), h(!1));
                                },
                                onClick: function (e) {
                                    r || (A && A(e));
                                },
                            },
                            n !== fu.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: hu.back }),
                                    s().createElement('span', { className: hu.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: L()(hu.state, hu.state__default) },
                                s().createElement('span', { className: hu.stateDisabled }),
                                s().createElement('span', { className: hu.stateHighlightHover }),
                                s().createElement('span', { className: hu.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: hu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                bu.defaultProps = { type: fu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const wu = bu;
                const Su = (0, ee.Pi)(({ buttonsSize: e, classNames: u }) => {
                        const t = g(),
                            n = t.model,
                            r = t.controls,
                            a = n.root.get().totalRewardCount,
                            o = a > 0,
                            l = I().mediaSize,
                            c = null != e ? e : ((e) => (e > k.Small ? vu.medium : vu.small))(l),
                            d = L()('Footer_cButton_fe', null == u ? void 0 : u.button),
                            E = (function () {
                                const e = (0, i.useRef)(0);
                                var u;
                                return (
                                    (u = () => {
                                        window.clearTimeout(e.current);
                                    }),
                                    (0, i.useEffect)(() => u, []),
                                    (0, i.useMemo)(
                                        () => ({
                                            run: (u, t) => {
                                                (window.clearTimeout(e.current),
                                                    (e.current = window.setTimeout(() => {
                                                        ((e.current = 0), u());
                                                    }, t)));
                                            },
                                            clear: () => {
                                                (window.clearTimeout(e.current), (e.current = 0));
                                            },
                                            get isRunning() {
                                                return 0 !== e.current;
                                            },
                                        }),
                                        [],
                                    )
                                );
                            })(),
                            _ = n.computes.rewardsToClaimTotal();
                        return s().createElement(
                            'div',
                            { className: 'Footer_base_78' },
                            s().createElement(
                                'div',
                                { className: 'Footer_description_7a' },
                                o
                                    ? s().createElement(
                                          'div',
                                          { className: 'Footer_rewardsSelected_06' },
                                          R.strings.selectable_reward.footer.rewardsSelected(),
                                          s().createElement('span', { className: 'Footer_rewardsSelectedCount_af' }, a),
                                          s().createElement(
                                              me,
                                              {
                                                  contentId:
                                                      R.views.lobby.common.tooltips.SelectedRewardsTooltipView('resId'),
                                              },
                                              s().createElement('div', { className: 'Footer_rewardsSelectedIcon_83' }),
                                          ),
                                      )
                                    : s().createElement(
                                          'div',
                                          { className: 'Footer_selectRewards_b0' },
                                          1 === n.tabs.get().length
                                              ? R.strings.selectable_reward.footer.singleCategory.selectRewards(_)
                                              : R.strings.selectable_reward.footer.multipleCategories.selectRewards(_),
                                      ),
                            ),
                            s().createElement(
                                'div',
                                { className: 'Footer_buttons_10' },
                                s().createElement(
                                    wu,
                                    {
                                        size: c,
                                        type: fu.primary,
                                        disabled: !o,
                                        mixClass: d,
                                        onClick: () => {
                                            (r.setAnimationState(m.Accepting), E.run(r.submit, 600));
                                        },
                                    },
                                    R.strings.selectable_reward.footer.okBtn.label(),
                                ),
                                s().createElement(
                                    wu,
                                    { size: c, type: fu.secondary, mixClass: d, onClick: r.close },
                                    R.strings.selectable_reward.footer.closeBtn.label(),
                                ),
                            ),
                        );
                    }),
                    yu = {
                        base: 'Content_base_8e',
                        base__accepting: 'Content_base__accepting_d1',
                        heading: 'Content_heading_b3',
                        slideUp: 'Content_slideUp_84',
                        title: 'Content_title_aa',
                        subTitle: 'Content_subTitle_61',
                        wrapper: 'Content_wrapper_b8',
                        show: 'Content_show_00',
                        wrapper__shown: 'Content_wrapper__shown_e4',
                        categories: 'Content_categories_54',
                        footer: 'Content_footer_ec',
                        base__windowed: 'Content_base__windowed_4a',
                        blink: 'Content_blink_95',
                    },
                    xu = (0, ee.Pi)(({ title: e, subTitle: u, classNames: t, buttonsSize: n }) => {
                        const r = (0, i.useState)(!1),
                            a = r[0],
                            o = r[1],
                            l = g().model,
                            c = l.tabs.get(),
                            d = l.animationState.get();
                        return (
                            (0, i.useEffect)(() => {
                                if (!a)
                                    return ((e, u) => {
                                        let t;
                                        const n = setTimeout(() => {
                                            t = void o(!0);
                                        }, 600);
                                        return () => {
                                            ('function' == typeof t && t(), clearTimeout(n));
                                        };
                                    })();
                            }, [a]),
                            s().createElement(
                                'div',
                                { className: L()(yu.base, yu[`base__${d}`]) },
                                s().createElement(
                                    'div',
                                    { className: L()(yu.heading, null == t ? void 0 : t.heading) },
                                    s().createElement(
                                        'div',
                                        { className: L()(yu.title, null == t ? void 0 : t.title) },
                                        e,
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: L()(yu.subTitle, null == t ? void 0 : t.subTitle) },
                                        u,
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: L()(yu.wrapper, a && yu.wrapper__shown) },
                                    s().createElement(
                                        'div',
                                        { className: yu.categories },
                                        ue(c.length, (e) =>
                                            s().createElement(ve, {
                                                key: e,
                                                index: e,
                                                className: null == t ? void 0 : t.category,
                                                classNames: { title: null == t ? void 0 : t.categoryTitle },
                                            }),
                                        ),
                                    ),
                                    s().createElement(Cu, { className: null == t ? void 0 : t.contentGrid }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: L()(yu.footer, null == t ? void 0 : t.footer) },
                                    s().createElement(Su, {
                                        buttonsSize: n,
                                        classNames: null == t ? void 0 : t.footerClassNames,
                                    }),
                                ),
                            )
                        );
                    }),
                    Tu = R.strings.selectable_reward.error,
                    Ru = (0, ee.Pi)(() => {
                        const e = g().controls;
                        return s().createElement(
                            'div',
                            { className: 'Error_base_71' },
                            s().createElement('div', { className: 'Error_image_a8' }),
                            s().createElement('div', { className: 'Error_title_49' }, Tu.title()),
                            s().createElement('div', { className: 'Error_description_4f' }, Tu.description()),
                            s().createElement(
                                'div',
                                { className: 'Error_footer_2d' },
                                s().createElement(
                                    wu,
                                    {
                                        mixClass: 'Error_button_4d',
                                        type: fu.primary,
                                        size: vu.medium,
                                        onClick: e.close,
                                    },
                                    Tu.button(),
                                ),
                            ),
                        );
                    }),
                    Lu = (0, ee.Pi)(({ title: e, subTitle: u, classNames: t, buttonsSize: n }) => {
                        const r = g().model.tabs.get();
                        return s().createElement(
                            j,
                            { className: 'RewardSelection_base_0f' },
                            r.length > 0
                                ? s().createElement(xu, { title: e, subTitle: u, classNames: t, buttonsSize: n })
                                : s().createElement(Ru, null),
                        );
                    });
                var Pu = t(5521);
                const Mu = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ku(e = Pu.n.NONE, u = Mu, t = !1, n = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== Pu.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && l.O.view.isEventHandled()) return;
                                (l.O.view.setEventHandled(), u(r), t && r.stopPropagation());
                            }
                        }
                    }, [u, e, t, n]);
                }
                const Ou = R.strings.comp7_ext.rewardsSelectionScreen,
                    Nu = {
                        title: 'App_title_c3',
                        subTitle: 'App_subTitle_fe',
                        contentGrid: 'App_contentGridClassName_96',
                        heading: 'App_heading_43',
                        footer: 'App_footer_da',
                        footerClassNames: { button: 'App_button_f4' },
                        category: 'App_category_2d',
                    },
                    Iu = (0, ee.Pi)(() => {
                        const e = g(),
                            u = e.model,
                            t = e.controls;
                        var n;
                        ((n = t.close), ku(Pu.n.ESCAPE, n));
                        const r = 1 === u.tabs.get().length;
                        return s().createElement(
                            'div',
                            { className: 'App_base_d2' },
                            s().createElement(
                                'div',
                                { className: 'App_background_82' },
                                s().createElement('div', { className: 'App_backgroundImage_06' }),
                            ),
                            s().createElement('div', { className: 'App_shadow_0b' }),
                            s().createElement(
                                'div',
                                { className: 'App_content_53' },
                                s().createElement(
                                    'div',
                                    { className: 'App_close_e4' },
                                    s().createElement(J, {
                                        caption: R.strings.comp7_ext.closeButtonLabel(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: t.close,
                                    }),
                                ),
                                s().createElement(Lu, {
                                    title: Ou.description(),
                                    subTitle: Ou.title(u.computes.rewardsToClaimTotal()),
                                    classNames: Object.assign(
                                        {},
                                        Nu,
                                        r && { categoryTitle: 'App_extendedCategoryTitle_b8' },
                                    ),
                                    buttonsSize: vu.medium,
                                }),
                            ),
                        );
                    }),
                    Hu = { context: 'model.selectableRewardModel' };
                engine.whenReady.then(() => {
                    Y().render(
                        s().createElement(j, null, s().createElement(F, { options: Hu }, s().createElement(Iu, null))),
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
        return (__webpack_modules__[e](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], a = !0, o = 0; o < u.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(s--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, n];
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
        (__webpack_require__.j = 563),
        (() => {
            var e = { 563: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, o, i] = t,
                        s = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); s < a.length; s++)
                        ((r = a[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(6913));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
