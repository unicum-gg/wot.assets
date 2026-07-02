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
            527: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, { mouse: () => c, off: () => u, on: () => o, onResize: () => s, onScaleUpdated: () => i }));
                var n = a(2472),
                    r = a(1176);
                const s = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    u = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function a() {
                            e.enabled && (0, r.R)(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', a))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', a))
                                : (0, r.R)(!1);
                        }
                        const s = ['down', 'up', 'move'].reduce(
                            (t, a) => (
                                (t[a] = (function (t) {
                                    return (a) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const s = `mouse${t}`,
                                            i = l[t]((e) => a([e, 'outside']));
                                        function o(e) {
                                            a([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(s, o),
                                            n(),
                                            () => {
                                                r &&
                                                    (i(),
                                                    window.removeEventListener(s, o),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(a)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, s, {
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
            5959: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => s,
                        graphicsQuality: () => o,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var n = a(527),
                    r = a(2493);
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, a) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => n });
            },
            2493: (e, t, a) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((a) => {
                        console.error(`setRTPC('${e}', '${t}'): `, a);
                    });
                }
                a.d(t, { E: () => r, G: () => n });
            },
            2472: (e, t, a) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => n });
            },
            3138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => s });
                var n = a(5959),
                    r = a(514);
                const s = { view: a(7641), client: n, sound: r.ZP };
            },
            514: (e, t, a) => {
                'use strict';
                a.d(t, { ZP: () => i });
                var n = a(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    s = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, n.playSound)(r[t])), e), {}),
                    i = { play: Object.assign({}, s, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, a) => {
                'use strict';
                function n(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function r(e, t, a) {
                    return `url(${n(e, t, a)})`;
                }
                (a.r(t), a.d(t, { getBgUrl: () => r, getTextureUrl: () => n }));
            },
            6112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => r });
                var n = a(2472);
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
            7641: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => u,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => S,
                        events: () => s.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => F,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => w,
                        getFontNames: () => B,
                        getScale: () => v,
                        getSize: () => _,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => D,
                        isFocused: () => C,
                        pxToRem: () => h,
                        remToPx: () => b,
                        resize: () => g,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => A,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => N,
                    }));
                var n = a(3722),
                    r = a(6112),
                    s = a(6538),
                    i = a(8566);
                const o = 15;
                function u(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, o);
                }
                function c(e, t, a, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, n);
                }
                function d(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, o);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function g(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function v() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function A() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function F() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const B = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    S = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    y = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    N = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => s });
                const n = ['args'],
                    r = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var a = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            a[n] = e[n];
                                        }
                                    return a;
                                })(t, n);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, i, {
                                          arguments:
                                              ((r = s),
                                              Object.entries(r).map(([e, t]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: t };
                                                      default:
                                                          return { __Type: a, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var r;
                    },
                    s = {
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
            5521: (e, t, a) => {
                'use strict';
                let n, r;
                (a.d(t, { n: () => n }),
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
            1358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => s });
                var n = a(3138);
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
                    addCallback(e, t, a = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const s = n.O.view.addModelObserver(e, a, r);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(s) : (this._views[a] = [s])))
                                : console.error("Can't add callback for model:", e),
                            s
                        );
                    }
                    removeCallback(e, t = 0) {
                        let a = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((a = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            a || console.error("Can't remove callback by id:", e),
                            a
                        );
                    }
                    _emmitDataChanged(e, t, a) {
                        a.forEach((a) => {
                            const n = this._callbacks[a];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const s = r;
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
            9916: (e, t, a) => {
                'use strict';
                a.d(t, {
                    Sw: () => s.Z,
                    B3: () => l,
                    Gr: () => c,
                    Z5: () => i.Z5,
                    B0: () => o,
                    c9: () => b,
                    ry: () => h,
                });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    a();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const a = e,
                            n = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== n)),
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
                var s = a(1358),
                    i = a(8613);
                let o;
                var u;
                (((u = o || (o = {}))[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                    (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                    (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                    (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (u[(u.MOVE = 16)] = 'MOVE'),
                    (u[(u.CLOSE = 32)] = 'CLOSE'),
                    (u[(u.MINIMIZE = 64)] = 'MINIMIZE'));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = a(5521),
                    g = a(3138);
                const E = ['args'];
                function p(e, t, a, n, r, s, i) {
                    try {
                        var o = e[s](i),
                            u = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(u) : Promise.resolve(u).then(n, r);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
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
                                        a = arguments;
                                    return new Promise(function (n, r) {
                                        var s = e.apply(t, a);
                                        function i(e) {
                                            p(s, n, r, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            p(s, n, r, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var a = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            a[n] = e[n];
                                        }
                                    return a;
                                })(t, E);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, s, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
                                                  const a = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          a.number = t;
                                                          break;
                                                      case 'boolean':
                                                          a.bool = t;
                                                          break;
                                                      default:
                                                          a.string = t.toString();
                                                  }
                                                  return a;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var n;
                    },
                    f = () => b(o.CLOSE),
                    C = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var A = a(7572);
                const D = r.instance,
                    F = {
                        DataTracker: s.Z,
                        ViewModel: A.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => b(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => b(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            b(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, n, r = R.invalid('resId'), s) => {
                            const i = g.O.view.getViewGlobalPosition(),
                                u = a.getBoundingClientRect(),
                                l = u.x,
                                c = u.y,
                                d = u.width,
                                m = u.height,
                                _ = {
                                    x: g.O.view.pxToRem(l) + i.x,
                                    y: g.O.view.pxToRem(c) + i.y,
                                    width: g.O.view.pxToRem(d),
                                    height: g.O.view.pxToRem(m),
                                };
                            b(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: v(_),
                                on: !0,
                                args: s,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => C(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, f);
                        },
                        handleViewEvent: b,
                        onBindingsReady: h,
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
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        a[n] = [];
                                        for (let t = 0; t < r.length; t++) a[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[n] = e(t[n]))
                                            : (a[n] = t[n]);
                                }
                            return a;
                        },
                        ClickOutsideManager: D,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = F;
            },
            8613: (e, t, a) => {
                'use strict';
                a.d(t, { Ew: () => s, Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    },
                    s = {
                        getRegionalDateTime: (e, t, a = !0) => regionalDateTime.getRegionalDateTime(e, t, a),
                        getFormattedDateTime: (e, t, a = !0) => regionalDateTime.getFormattedDateTime(e, t, a),
                    };
            },
            7604: (e, t, a) => {
                'use strict';
                var n = a(7363),
                    r = a.n(n);
                const s = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
                var i = a(3138);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var u;
                function l(e, t, a) {
                    const n = (function (e, t) {
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
                        })(e, a),
                        r = (function (e, t) {
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
                        })(t, a),
                        s = Math.min(n, r);
                    return {
                        extraLarge: s === a.extraLarge.weight,
                        large: s === a.large.weight,
                        medium: s === a.medium.weight,
                        small: s === a.small.weight,
                        extraSmall: s === a.extraSmall.weight,
                        extraLargeWidth: n === a.extraLarge.weight,
                        largeWidth: n === a.large.weight,
                        mediumWidth: n === a.medium.weight,
                        smallWidth: n === a.small.weight,
                        extraSmallWidth: n === a.extraSmall.weight,
                        extraLargeHeight: r === a.extraLarge.weight,
                        largeHeight: r === a.large.weight,
                        mediumHeight: r === a.medium.weight,
                        smallHeight: r === a.small.weight,
                        extraSmallHeight: r === a.extraSmall.weight,
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
                })(u || (u = {}));
                const c = i.O.client.getSize('rem'),
                    d = c.width,
                    m = c.height,
                    _ = Object.assign({ width: d, height: m }, l(d, m, o)),
                    g = (0, n.createContext)(_),
                    E = ['children'],
                    p = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        a[n] = e[n];
                                    }
                                return a;
                            })(e, E);
                        const r = (0, n.useContext)(g),
                            i = r.extraLarge,
                            o = r.large,
                            u = r.medium,
                            l = r.small,
                            c = r.extraSmall,
                            d = r.extraLargeWidth,
                            m = r.largeWidth,
                            _ = r.mediumWidth,
                            p = r.smallWidth,
                            v = r.extraSmallWidth,
                            h = r.extraLargeHeight,
                            b = r.largeHeight,
                            f = r.mediumHeight,
                            C = r.smallHeight,
                            A = r.extraSmallHeight,
                            D = { extraLarge: h, large: b, medium: f, small: C, extraSmall: A };
                        if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                            if (a.extraLarge && i) return t;
                            if (a.large && o) return t;
                            if (a.medium && u) return t;
                            if (a.small && l) return t;
                            if (a.extraSmall && c) return t;
                        } else {
                            if (a.extraLargeWidth && d) return s(t, a, D);
                            if (a.largeWidth && m) return s(t, a, D);
                            if (a.mediumWidth && _) return s(t, a, D);
                            if (a.smallWidth && p) return s(t, a, D);
                            if (a.extraSmallWidth && v) return s(t, a, D);
                            if (!(
                                a.extraLargeWidth ||
                                a.largeWidth ||
                                a.mediumWidth ||
                                a.smallWidth ||
                                a.extraSmallWidth
                            )) {
                                if (a.extraLargeHeight && h) return t;
                                if (a.largeHeight && b) return t;
                                if (a.mediumHeight && f) return t;
                                if (a.smallHeight && C) return t;
                                if (a.extraSmallHeight && A) return t;
                            }
                        }
                        return null;
                    };
                ((p.defaultProps = {
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
                    (0, n.memo)(p));
                const v = ({ children: e }) => {
                    const t = (0, n.useContext)(g),
                        a = (0, n.useState)(t),
                        s = a[0],
                        u = a[1],
                        c = (0, n.useCallback)((e, t) => {
                            const a = i.O.view.pxToRem(e),
                                n = i.O.view.pxToRem(t);
                            u(Object.assign({ width: a, height: n }, l(a, n, o)));
                        }, []),
                        d = (0, n.useCallback)(() => {
                            const e = i.O.client.getSize('px');
                            c(e.width, e.height);
                        }, [c]);
                    (((e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        (i.O.client.events.on('clientResized', c), i.O.client.events.on('self.onScaleUpdated', d));
                    }),
                        (0, n.useEffect)(
                            () => () => {
                                (i.O.client.events.off('clientResized', c),
                                    i.O.client.events.off('self.onScaleUpdated', d));
                            },
                            [c, d],
                        ));
                    const m = (0, n.useMemo)(() => Object.assign({}, s), [s]);
                    return r().createElement(g.Provider, { value: m }, e);
                };
                var h = a(6483),
                    b = a.n(h),
                    f = a(926),
                    C = a.n(f);
                let A, D, F;
                (!(function (e) {
                    ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                })(A || (A = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                    })(D || (D = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge'));
                    })(F || (F = {})));
                const w = () => {
                        const e = (0, n.useContext)(g),
                            t = e.width,
                            a = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return A.ExtraLarge;
                                    case e.large:
                                        return A.Large;
                                    case e.medium:
                                        return A.Medium;
                                    case e.small:
                                        return A.Small;
                                    case e.extraSmall:
                                        return A.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), A.ExtraSmall);
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return D.ExtraLarge;
                                    case e.largeWidth:
                                        return D.Large;
                                    case e.mediumWidth:
                                        return D.Medium;
                                    case e.smallWidth:
                                        return D.Small;
                                    case e.extraSmallWidth:
                                        return D.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), D.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return F.ExtraLarge;
                                    case e.largeHeight:
                                        return F.Large;
                                    case e.mediumHeight:
                                        return F.Medium;
                                    case e.smallHeight:
                                        return F.Small;
                                    case e.extraSmallHeight:
                                        return F.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), F.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: s, mediaHeight: i, remScreenWidth: t, remScreenHeight: a };
                    },
                    B = ['children', 'className'];
                function S() {
                    return (
                        (S = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        S.apply(null, arguments)
                    );
                }
                const y = {
                        [D.ExtraSmall]: '',
                        [D.Small]: C().SMALL_WIDTH,
                        [D.Medium]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH}`,
                        [D.Large]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH}`,
                        [D.ExtraLarge]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH} ${C().EXTRA_LARGE_WIDTH}`,
                    },
                    N = {
                        [F.ExtraSmall]: '',
                        [F.Small]: C().SMALL_HEIGHT,
                        [F.Medium]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT}`,
                        [F.Large]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT}`,
                        [F.ExtraLarge]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT} ${C().EXTRA_LARGE_HEIGHT}`,
                    },
                    P = {
                        [A.ExtraSmall]: '',
                        [A.Small]: C().SMALL,
                        [A.Medium]: `${C().SMALL} ${C().MEDIUM}`,
                        [A.Large]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE}`,
                        [A.ExtraLarge]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE} ${C().EXTRA_LARGE}`,
                    },
                    k = (e) => {
                        let t = e.children,
                            a = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        a[n] = e[n];
                                    }
                                return a;
                            })(e, B);
                        const s = w(),
                            i = s.mediaWidth,
                            o = s.mediaHeight,
                            u = s.mediaSize;
                        return r().createElement('div', S({ className: b()(a, y[i], N[o], P[u]) }, n), t);
                    },
                    x = ['children'],
                    I = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        a[n] = e[n];
                                    }
                                return a;
                            })(e, x);
                        return r().createElement(v, null, r().createElement(k, a, t));
                    };
                var T = a(1533),
                    L = a.n(T);
                function O() {}
                function M() {
                    return !1;
                }
                console.log;
                var $ = a(9174);
                function W(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const H = (e) => (0 === e ? window : window.subViews.get(e)),
                    z = () => (e, t) => {
                        const a = (0, n.createContext)({});
                        return [
                            function ({ mode: s = 'real', options: o, children: u, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    d = (a, n, r) => {
                                        var s;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: a = H,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function s(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, a) => {
                                                        a.forEach((t) => {
                                                            const a = r.get(t);
                                                            void 0 !== a && a(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const r = a(t),
                                                        s = n.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? s
                                                        : e.split('.').reduce((e, t) => {
                                                              const a = e[t];
                                                              return 'function' == typeof a ? a.bind(e) : a;
                                                          }, s);
                                                };
                                                return {
                                                    subscribe: (a, s) => {
                                                        const u = 'string' == typeof s ? `${n}.${s}` : n,
                                                            l = i.O.view.addModelObserver(u, t, !0);
                                                        return (r.set(l, a), e && a(o(s)), l);
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, t) => {
                                                        const a = o(t);
                                                        return (...t) => {
                                                            a(e(...t));
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
                                                                a = (function (e, t) {
                                                                    var a =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (a) return (a = a.call(e)).next.bind(a);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (a = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return W(e, t);
                                                                                var a = {}.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === a &&
                                                                                        e.constructor &&
                                                                                        (a = e.constructor.name),
                                                                                    'Map' === a || 'Set' === a
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === a ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                a,
                                                                                            )
                                                                                          ? W(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        a && (e = a);
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
                                                            !(e = a()).done;
                                                        )
                                                            s(e.value, t);
                                                    },
                                                    unsubscribe: s,
                                                };
                                            })(n),
                                            u =
                                                'real' === a
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (s = null == r ? void 0 : r.getter)
                                                                  ? s
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === a ? (null == r ? void 0 : r.getter(e)) : u.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            m = e({
                                                mode: a,
                                                readByPath: l,
                                                externalModel: u,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : l(e),
                                                            r = $.LO.box(n, { equals: M });
                                                        return (
                                                            'real' === a &&
                                                                u.subscribe(
                                                                    (0, $.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : l(e),
                                                            r = $.LO.box(n, { equals: M });
                                                        return (
                                                            'real' === a &&
                                                                u.subscribe(
                                                                    (0, $.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = l(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = $.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === a &&
                                                                    u.subscribe(
                                                                        (0, $.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                s = Object.entries(r),
                                                                i = s.reduce(
                                                                    (e, [t, a]) => ((e[a] = $.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === a &&
                                                                    u.subscribe(
                                                                        (0, $.aD)((e) => {
                                                                            s.forEach(([t, a]) => {
                                                                                i[a].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            _ = { mode: a, model: m, externalModel: u, cleanup: d };
                                        return {
                                            model: m,
                                            controls: 'mocks' === a && r ? r.controls(_) : t(_),
                                            externalModel: u,
                                            mode: a,
                                        };
                                    },
                                    m = (0, n.useRef)(!1),
                                    _ = (0, n.useState)(s),
                                    g = _[0],
                                    E = _[1],
                                    p = (0, n.useState)(() => d(s, o, l)),
                                    v = p[0],
                                    h = p[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        m.current ? h(d(g, o, l)) : (m.current = !0);
                                    }, [l, g, o]),
                                    (0, n.useEffect)(() => {
                                        E(s);
                                    }, [s]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (v.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [v],
                                    ),
                                    r().createElement(a.Provider, { value: v }, u)
                                );
                            },
                            () => (0, n.useContext)(a),
                        ];
                    },
                    U = z()(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            season: e.primitives(
                                [
                                    'startTimestamp',
                                    'endTimestamp',
                                    'serverTimestamp',
                                    'state',
                                    'name',
                                    'hasTentativeDates',
                                ],
                                'season',
                            ),
                            year: e.primitives(['state'], 'year'),
                        }),
                        ({ externalModel: e }) => ({ pollServerTime: e.createCallbackNoArgs('season.pollServerTime') }),
                    ),
                    V = U[0],
                    G = U[1];
                var q = a(9916);
                class j extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? q.B3.GOLD : q.B3.INTEGRAL;
                        const t = q.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                j.defaultProps = { format: 'integral' };
                const Q = [
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
                function Y(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const a = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                a.number = t;
                                break;
                            case 'boolean':
                                a.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                a.string = t.toString();
                        }
                        return a;
                    });
                }
                const X = (e, t, a = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: q.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                a,
                            ),
                        );
                    },
                    K = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            r = e.args,
                            s = e.onMouseEnter,
                            i = e.onMouseLeave,
                            o = e.onMouseDown,
                            u = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            _ = e.decoratorId,
                            g = void 0 === _ ? 0 : _,
                            E = e.isEnabled,
                            p = void 0 === E || E,
                            v = e.targetId,
                            h = void 0 === v ? 0 : v,
                            b = e.onShow,
                            f = e.onHide,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        a[n] = e[n];
                                    }
                                return a;
                            })(e, Q);
                        const A = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            D = (0, n.useMemo)(
                                () =>
                                    h ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let a,
                                            n = R.invalid('resId'),
                                            r = '';
                                        var s;
                                        return (
                                            t &&
                                                ((r =
                                                    (null == (s = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : s[0]) ||
                                                    ''),
                                                (a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== a &&
                                                    window.subViews[a] &&
                                                    (n = window.subViews[a].id)),
                                            { callerUrl: r, caller: a, stack: t, resId: n }
                                        );
                                    })().resId,
                                [h],
                            ),
                            F = (0, n.useCallback)(() => {
                                (A.current.isVisible && A.current.timeoutId) ||
                                    (X(a, g, { isMouseEvent: !0, on: !0, arguments: Y(r) }, D),
                                    b && b(),
                                    (A.current.isVisible = !0));
                            }, [a, g, r, D, b]),
                            w = (0, n.useCallback)(() => {
                                if (A.current.isVisible || A.current.timeoutId) {
                                    const e = A.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (A.current.timeoutId = 0)),
                                        X(a, g, { on: !1 }, D),
                                        A.current.isVisible && f && f(),
                                        (A.current.isVisible = !1));
                                }
                            }, [a, g, D, f]),
                            B = (0, n.useCallback)((e) => {
                                A.current.isVisible &&
                                    ((A.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (A.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(A.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = A.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', B, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', B, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === p && w();
                            }, [p, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        (window.removeEventListener('mouseleave', w), w());
                                    }
                                ),
                                [w],
                            ),
                            p
                                ? (0, n.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((A.current.timeoutId = window.setTimeout(F, c ? 100 : 400)),
                                                          s && s(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (w(), null == i || i(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === m && w(), null == u || u(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === m && w(), null == o || o(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          C,
                                      ),
                                  )
                                : t
                        );
                        var S;
                    },
                    Z = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function J() {
                    return (
                        (J = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        J.apply(null, arguments)
                    );
                }
                const ee = R.views.common.tooltip_window.simple_tooltip_content,
                    te = (e) => {
                        let t = e.children,
                            a = e.body,
                            s = e.header,
                            i = e.note,
                            o = e.alert,
                            u = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        a[n] = e[n];
                                    }
                                return a;
                            })(e, Z);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, u, { body: a, header: s, note: i, alert: o });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [o, a, s, i, u]);
                        return r().createElement(
                            K,
                            J(
                                {
                                    contentId:
                                        ((d = null == u ? void 0 : u.hasHtmlContent),
                                        d ? ee.SimpleTooltipHtmlContent('resId') : ee.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var d;
                    },
                    ae = {
                        base: 'ClaimRewardsWidget_base_ee',
                        base__big: 'ClaimRewardsWidget_base__big_2b',
                        base__disabled: 'ClaimRewardsWidget_base__disabled_13',
                        base__hasAppearAnimation: 'ClaimRewardsWidget_base__hasAppearAnimation_13',
                        baseAppear: 'ClaimRewardsWidget_baseAppear_92',
                        icon: 'ClaimRewardsWidget_icon_a3',
                        count: 'ClaimRewardsWidget_count_eb',
                        label: 'ClaimRewardsWidget_label_54',
                        shine: 'ClaimRewardsWidget_shine_6e',
                        shine_big: 'ClaimRewardsWidget_shine_big_d5',
                        shine__left: 'ClaimRewardsWidget_shine__left_e3',
                        shine__right: 'ClaimRewardsWidget_shine__right_b0',
                        arrow: 'ClaimRewardsWidget_arrow_f0',
                        blinkShape: 'ClaimRewardsWidget_blinkShape_24',
                        blink: 'ClaimRewardsWidget_blink_ed',
                        blinker: 'ClaimRewardsWidget_blinker_c0',
                    },
                    ne = {
                        base: 'Background_base_1b',
                        bg: 'Background_bg_85',
                        bgDisabled: 'Background_bgDisabled_e4',
                        bgHover: 'Background_bgHover_be',
                        base__big: 'Background_base__big_bf',
                        base__hovered: 'Background_base__hovered_e5',
                    },
                    re = ({ isHover: e, size: t, disabled: a = !1 }) =>
                        r().createElement(
                            'div',
                            { className: b()(ne.base, ne[`base__${t}`], e && ne.base__hovered) },
                            a
                                ? r().createElement('div', { className: ne.bgDisabled })
                                : r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement('div', { className: ne.bg }),
                                      r().createElement('div', { className: ne.bgHover }),
                                  ),
                        ),
                    se = {
                        base: 'Border_base_f7',
                        border: 'Border_border_3b',
                        borderHover: 'Border_borderHover_ed',
                        base__big: 'Border_base__big_b8',
                        base__hovered: 'Border_base__hovered_fb',
                        borderDisabled: 'Border_borderDisabled_ec',
                    },
                    ie = ({ isHover: e, size: t, disabled: a = !1 }) =>
                        r().createElement(
                            'div',
                            { className: b()(se.base, se[`base__${t}`], e && se.base__hovered) },
                            a
                                ? r().createElement('div', { className: se.borderDisabled })
                                : r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement('div', { className: se.border }),
                                      r().createElement('div', { className: se.borderHover }),
                                  ),
                        ),
                    oe = R.strings.comp7_ext.awardsWidget;
                let ue;
                !(function (e) {
                    ((e.Small = 'small'), (e.Big = 'big'));
                })(ue || (ue = {}));
                const le = ({ count: e, disabled: t = !1, size: a, onClick: s }) => {
                    const o = (0, n.useState)(!1),
                        u = o[0],
                        l = o[1],
                        c = t ? oe.description.awardDisabled() : oe.description.award();
                    return r().createElement(
                        te,
                        { body: c },
                        r().createElement(
                            'div',
                            {
                                className: b()(
                                    ae.base,
                                    ae[`base__${a}`],
                                    t ? ae.base__disabled : ae.base__hasAppearAnimation,
                                ),
                                onMouseEnter: () => {
                                    (i.O.sound.play.sound(R.sounds.highlight()), l(!0));
                                },
                                onMouseLeave: () => {
                                    l(!1);
                                },
                                onClick: () => {
                                    t || (i.O.sound.play.click(), s());
                                },
                            },
                            r().createElement(ie, { size: a, isHover: u, disabled: t }),
                            r().createElement(re, { size: a, isHover: u, disabled: t }),
                            r().createElement('div', { className: ae.icon }),
                            r().createElement(
                                'div',
                                { className: ae.count },
                                r().createElement(j, { format: 'integral', value: e }),
                            ),
                            r().createElement('div', { className: ae.label }, oe.title(e)),
                            !t &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: b()(ae.shine, ae.shine__left) }),
                                    r().createElement('div', { className: b()(ae.shine, ae.shine__right) }),
                                    r().createElement('div', { className: ae.arrow }),
                                    r().createElement(
                                        'div',
                                        { className: ae.blinkShape },
                                        r().createElement('div', { className: ae.blink }),
                                    ),
                                ),
                        ),
                    );
                };
                function ce(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const de = {
                        playHighlight() {
                            ce('highlight');
                        },
                        playClick() {
                            ce('play');
                        },
                        playYes() {
                            ce('yes1');
                        },
                    },
                    me = {
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
                    _e = [
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
                function ge() {
                    return (
                        (ge = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        ge.apply(null, arguments)
                    );
                }
                class Ee extends r().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && ce(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                (e && e(t), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && ce(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                (e && e(t), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            a = e.onClick,
                            n = e.goto,
                            s = e.side,
                            i = e.type,
                            o = e.classNames,
                            u = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var a = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            a[n] = e[n];
                                        }
                                    return a;
                                })(e, _e)),
                            _ = b()(me.base, me[`base__${i}`], me[`base__${s}`], null == o ? void 0 : o.base),
                            g = b()(me.icon, me[`icon__${i}`], me[`icon__${s}`], null == o ? void 0 : o.icon),
                            E = b()(me.glow, null == o ? void 0 : o.glow),
                            p = b()(me.caption, me[`caption__${i}`], null == o ? void 0 : o.caption),
                            v = b()(me.goto, null == o ? void 0 : o.goto);
                        return r().createElement(
                            'div',
                            ge(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(u),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                m,
                            ),
                            'info' !== i && r().createElement('div', { className: me.shine }),
                            r().createElement('div', { className: g }, r().createElement('div', { className: E })),
                            r().createElement('div', { className: p }, t),
                            n && r().createElement('div', { className: v }, n),
                        );
                    }
                }
                Ee.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var pe = a(5521);
                const ve = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function he(e = pe.n.NONE, t = ve, a = !1, r = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== pe.n.NONE)
                            return (
                                window.addEventListener('keydown', n, a),
                                () => {
                                    window.removeEventListener('keydown', n, a);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!r && i.O.view.isEventHandled()) return;
                                (i.O.view.setEventHandled(), t(n), a && n.stopPropagation());
                            }
                        }
                    }, [t, e, a, r]);
                }
                const be = 'page_heading_9c',
                    fe = ({ onClose: e, className: t }) => {
                        var a;
                        return (
                            (a = e),
                            he(pe.n.ESCAPE, a),
                            r().createElement(
                                'div',
                                { className: b()('page_close_4e', t) },
                                r().createElement(Ee, {
                                    caption: R.strings.comp7_ext.closeButtonLabel(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: e,
                                }),
                            )
                        );
                    },
                    Ce = () => i.O.client.graphicsQuality.isHigh(),
                    Ae = () => {
                        const e = w(),
                            t = e.mediaSize,
                            a = e.remScreenHeight,
                            n = t >= A.Medium && a >= F.Large ? 'medium' : 'small';
                        return { size: n, isSmall: 'small' === n, isMedium: 'medium' === n };
                    };
                var De = a(3403);
                let Fe, we, Be, Se, ye;
                (!(function (e) {
                    ((e[(e.Progression = 0)] = 'Progression'),
                        (e[(e.RankRewards = 1)] = 'RankRewards'),
                        (e[(e.YearlyRewards = 2)] = 'YearlyRewards'),
                        (e[(e.WeeklyQuests = 3)] = 'WeeklyQuests'),
                        (e[(e.Shop = 4)] = 'Shop'),
                        (e[(e.Leaderboard = 5)] = 'Leaderboard'),
                        (e[(e.YearlyStatistics = 6)] = 'YearlyStatistics'));
                })(Fe || (Fe = {})),
                    (function (e) {
                        ((e[(e.First = 6)] = 'First'),
                            (e[(e.Second = 5)] = 'Second'),
                            (e[(e.Third = 4)] = 'Third'),
                            (e[(e.Fourth = 3)] = 'Fourth'),
                            (e[(e.Fifth = 2)] = 'Fifth'),
                            (e[(e.Sixth = 1)] = 'Sixth'));
                    })(we || (we = {})),
                    (function (e) {
                        ((e.First = 'first'), (e.Second = 'second'), (e.Third = 'third'));
                    })(Be || (Be = {})),
                    (function (e) {
                        ((e[(e.A = 1)] = 'A'),
                            (e[(e.B = 2)] = 'B'),
                            (e[(e.C = 3)] = 'C'),
                            (e[(e.D = 4)] = 'D'),
                            (e[(e.E = 5)] = 'E'));
                    })(Se || (Se = {})),
                    (function (e) {
                        ((e.Achieved = 'achieved'), (e.Possible = 'possible'), (e.NotAchieved = 'notAchieved'));
                    })(ye || (ye = {})));
                const Ne = {
                        [Fe.Progression]: 'progression',
                        [Fe.RankRewards]: 'rankRewards',
                        [Fe.WeeklyQuests]: 'weeklyQuests',
                        [Fe.Leaderboard]: 'leaderboard',
                        [Fe.YearlyRewards]: 'yearlyRewards',
                        [Fe.Shop]: 'shop',
                        [Fe.YearlyStatistics]: 'yearlyStatistics',
                    },
                    Pe = {
                        TABS: { context: 'model.sidebar' },
                        SCHEDULE: { context: 'model.scheduleInfo' },
                        PROGRESSION_PAGE: { context: 'model.progressionModel' },
                        RANK_REWARDS_PAGE: { context: 'model.rankRewardsModel' },
                        WEEKLY_QUESTS_PAGE: { context: 'model.weeklyQuestsModel' },
                        LEADERBOARD_PAGE: { context: 'model.leaderboardModel' },
                        YEARLY_REWARDS_PAGE: { context: 'model.yearlyRewardsModel' },
                        SHOP_PAGE: { context: 'model.shopModel' },
                        YEARLY_STATISTICS_PAGE: { context: 'model.yearlyStatisticsModel' },
                    };
                var ke = a(3946);
                const xe = z()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), claimRewardsModel: e.object('claimRewardsModel') },
                                a = e.object('progressionModel.qualificationModel'),
                                n = (0, ke.Om)(() => t.root.get().pageViewId === Fe.Progression && a.get().isActive);
                            return Object.assign({}, t, { computes: { isProgressionInQualification: n } });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            openInfoPage: e.createCallbackNoArgs('onInfoPageOpen'),
                            openWhatsNewScreen: e.createCallbackNoArgs('onWhatsNewScreenOpen'),
                            openRewardsSelectionScreen: e.createCallbackNoArgs(
                                'claimRewardsModel.onGoToRewardSelection',
                            ),
                        }),
                    ),
                    Re = xe[0],
                    Ie = xe[1];
                function Te(e, t) {
                    var a;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (a = e[t]) ? void 0 : a.value;
                }
                const Le = Te;
                function Oe(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function Me(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, n) => t(null == e ? void 0 : e.value, a, n));
                }
                function $e(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const a = [];
                    for (let r = 0; r < e.length; r++) {
                        var n;
                        const s = null == (n = e[r]) ? void 0 : n.value;
                        t(s, r, e) && a.push(s);
                    }
                    return a;
                }
                function We(e, t = 0, a = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let n = Math.max(t, 0);
                            const r = Math.min(
                                a,
                                (function (e) {
                                    return Math.max(0, e.length - 1);
                                })(e),
                            );
                            return {
                                next: function () {
                                    if (n > r) return { done: !0, value: null };
                                    const t = e[n++];
                                    return t ? { value: Oe(t), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
                function He(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        const n = Oe(e[a]);
                        if (t(n, a, e)) return n;
                    }
                }
                function ze(e, t) {
                    for (let a = 0; a < e.length; a++) if (t(Le(e, a), a, e)) return a;
                }
                function Ue(e, t) {
                    for (let a = e.length - 1; a >= 0; a--) if (t(Le(e, a), a, e)) return a;
                }
                function Ve(e, t, a) {
                    if (Array.isArray(e)) return e.reduce(t, a);
                    let n = a;
                    for (let a = 0; a < e.length; a++) n = t(n, Le(e, a), a, e);
                    return n;
                }
                const Ge = R.images.comp7.gui.maps.icons.metaTabs,
                    qe = (e, t) => {
                        const a = Ne[e];
                        return t ? `${Ge.$dyn(a)}` : `${Ge.small.$dyn(a)}`;
                    },
                    je = z()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() },
                                a = e.array('items'),
                                n = (0, ke.Om)(
                                    (e) => [
                                        {
                                            id: 0,
                                            items: Me(a.get(), ({ id: t, hasNotification: a }) =>
                                                Object.assign(
                                                    { id: t, icon: qe(t, e) },
                                                    a && { notification: { type: 'dot' } },
                                                ),
                                            ),
                                        },
                                    ],
                                    { equals: M },
                                );
                            return Object.assign({}, t, { computes: { tabs: n } });
                        },
                        ({ externalModel: e }) => ({
                            changeSidebarTab: e.createCallback((e) => ({ tabId: e }), 'onSideBarTabChange'),
                        }),
                    ),
                    Qe = je[0],
                    Ye = je[1],
                    Xe = (e) => {
                        let t,
                            a = null;
                        return (
                            (a = requestAnimationFrame(() => {
                                a = requestAnimationFrame(() => {
                                    ((a = null), (t = e()));
                                });
                            })),
                            () => {
                                ('function' == typeof t && t(), null !== a && cancelAnimationFrame(a));
                            }
                        );
                    };
                var Ke = a(7030);
                const Ze = {
                        base: 'Frame_base_af',
                        base__small: 'Frame_base__small_f0',
                        base__medium: 'Frame_base__medium_05',
                        border: 'Frame_border_17',
                        border__top: 'Frame_border__top_f7',
                        border__bottom: 'Frame_border__bottom_52',
                        arrow: 'Frame_arrow_c3',
                    },
                    Je = r().forwardRef(function ({ classNames: e, arrowRef: t, size: a = 'medium', className: n }, s) {
                        return r().createElement(
                            'div',
                            { className: b()(Ze.base, Ze[`base__${a}`], n), ref: s },
                            r().createElement('div', {
                                className: b()(
                                    Ze.border,
                                    Ze.border__top,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderTop,
                                ),
                            }),
                            r().createElement('div', {
                                className: b()(
                                    Ze.border,
                                    Ze.border__bottom,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderBottom,
                                ),
                            }),
                            r().createElement('div', {
                                className: b()(Ze.arrow, null == e ? void 0 : e.arrow),
                                ref: t,
                            }),
                        );
                    }),
                    et = {
                        base: 'Tab_base_cd',
                        base__small: 'Tab_base__small_bf',
                        base__medium: 'Tab_base__medium_96',
                        base__active: 'Tab_base__active_7e',
                        highlight: 'Tab_highlight_b6',
                        icon: 'Tab_icon_28',
                        icon__small: 'Tab_icon__small_48',
                        icon__medium: 'Tab_icon__medium_73',
                        notification: 'Tab_notification_86',
                        notification__symbol: 'Tab_notification__symbol_9b',
                        notification__small: 'Tab_notification__small_92',
                        notification__dot: 'Tab_notification__dot_51',
                        notification__medium: 'Tab_notification__medium_e6',
                        notification__large: 'Tab_notification__large_6b',
                    },
                    tt = { mouseEnter: 'highlight', click: 'play' },
                    at = r().forwardRef(function (
                        {
                            id: e,
                            isActive: t,
                            className: a,
                            classNames: n,
                            sounds: s = tt,
                            notification: i,
                            icon: o,
                            size: u,
                            additionContent: l,
                            onClick: c,
                            onMouseEnter: d,
                            onMouseLeave: m,
                            WrapperElement: _,
                        },
                        g,
                    ) {
                        const E = (e, a) => {
                                !t && s[a] && ce(s[a]);
                            },
                            p = r().createElement(
                                'div',
                                {
                                    className: b()(
                                        et.base,
                                        et[`base__${u}`],
                                        t && b()(et.base__active, null == n ? void 0 : n.activeTab),
                                        a,
                                    ),
                                    onClick: ((e) => () => {
                                        (E(0, 'click'), null == c || c(e));
                                    })(e),
                                    onMouseEnter: ((e) => () => {
                                        (E(0, 'mouseEnter'), null == d || d(e));
                                    })(e),
                                    onMouseLeave: ((e) => () => {
                                        (E(0, 'mouseLeave'), null == m || m(e));
                                    })(e),
                                    ref: t ? g : null,
                                },
                                r().createElement('div', {
                                    className: b()(et.highlight, null == n ? void 0 : n.highlight),
                                }),
                                'function' == typeof o && u
                                    ? o(u)
                                    : r().createElement('div', {
                                          className: b()(et.icon, et[`icon__${u}`], null == n ? void 0 : n.icon),
                                          style: { backgroundImage: `url(${o})` },
                                      }),
                                l && l({ id: e, size: u, isActive: t }),
                                i &&
                                    r().createElement(
                                        'div',
                                        {
                                            className: b()(
                                                et.notification,
                                                et[`notification__${i.type}`],
                                                i.size ? et[`notification__${i.size}`] : et.notification__medium,
                                                null == n ? void 0 : n.notification,
                                            ),
                                        },
                                        'dot' !== i.type && i.value,
                                    ),
                            );
                        return _ ? r().createElement(_, { key: e, id: e }, p) : p;
                    }),
                    nt = {
                        base: 'VerticalTabs_base_41',
                        title: 'VerticalTabs_title_8c',
                        group: 'VerticalTabs_group_08',
                        group__small: 'VerticalTabs_group__small_69',
                        group__medium: 'VerticalTabs_group__medium_68',
                    },
                    rt = r().memo(function ({
                        active: e,
                        tabs: t,
                        sounds: a,
                        className: s,
                        classNames: o,
                        size: u = 'medium',
                        additionContent: l,
                        onClick: c,
                        onMouseEnter: d,
                        onMouseLeave: m,
                        WrapperElement: _,
                    }) {
                        const g = (0, n.useRef)(null),
                            E = (0, n.useRef)(null),
                            p = (0, n.useRef)(null),
                            v = (0, n.useRef)(null),
                            h = (0, Ke.useSpring)(() => ({
                                marginLeft: 0,
                                onChange: (e) => {
                                    const t = g.current;
                                    t && (t.style.marginLeft = `${e.value.marginLeft}rem`);
                                },
                            }))[1],
                            f = (0, Ke.useSpring)(() => ({
                                opacity: 0,
                                onChange: (e) => {
                                    const t = g.current;
                                    t && (t.style.opacity = `${e.value.opacity}`);
                                },
                            }))[1],
                            C = (0, Ke.useSpring)(() => ({
                                position: 0,
                                onChange: (e) => {
                                    const t = E.current;
                                    t &&
                                        (t.style.transform = `translateY(${e.value.position / i.O.view.getScale()}rem)`);
                                },
                                onStart: () => {
                                    (h.start({
                                        from: { marginLeft: 12 },
                                        to: { marginLeft: 0 },
                                        config: { duration: 50 },
                                    }),
                                        f.start({
                                            from: { opacity: 1 },
                                            to: { opacity: 0 },
                                            config: { duration: 50 },
                                        }));
                                },
                                onRest: () => {
                                    (h.start({
                                        from: { marginLeft: 0 },
                                        to: { marginLeft: 12 },
                                        config: { duration: 150 },
                                    }),
                                        f.start({
                                            from: { opacity: 0 },
                                            to: { opacity: 1 },
                                            config: { duration: 150 },
                                        }));
                                },
                            }))[1],
                            A = (0, n.useCallback)((e) => {
                                null !== p.current &&
                                    null !== v.current &&
                                    e(p.current.getBoundingClientRect().top - v.current.getBoundingClientRect().top);
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                A((e) => {
                                    C.start({ position: e, config: { duration: 200 } });
                                });
                            }, [C, e, A]),
                            (0, n.useEffect)(
                                () =>
                                    Xe(() => {
                                        A((e) => {
                                            C.start({ position: e, immediate: !0 });
                                        });
                                    }),
                                [C, A, u],
                            ),
                            r().createElement(
                                'div',
                                { className: b()(nt.base, s), ref: v },
                                t.map(({ id: t, items: n, title: s, groupClassNames: i }) =>
                                    r().createElement(
                                        'div',
                                        {
                                            key: t,
                                            className: b()(nt.group, nt[`group__${u}`], null == i ? void 0 : i.group),
                                        },
                                        s &&
                                            r().createElement(
                                                'div',
                                                { className: b()(nt.title, null == i ? void 0 : i.title) },
                                                s,
                                            ),
                                        n.map(({ id: t, icon: n, notification: s }) =>
                                            r().createElement(at, {
                                                key: t,
                                                id: t,
                                                icon: n,
                                                notification: s,
                                                ref: p,
                                                sounds: a,
                                                isActive: e === t,
                                                size: u,
                                                className: null == o ? void 0 : o.tab,
                                                classNames: o,
                                                additionContent: l,
                                                onMouseEnter: d,
                                                onMouseLeave: m,
                                                onClick: c,
                                                WrapperElement: _,
                                            }),
                                        ),
                                    ),
                                ),
                                r().createElement(Je, {
                                    arrowRef: g,
                                    ref: E,
                                    size: u,
                                    className: null == o ? void 0 : o.frame,
                                    classNames: o,
                                }),
                            )
                        );
                    }),
                    st = R.strings.comp7_ext.sidebar.tabs.tooltip,
                    it = ({ children: e, id: t }) => {
                        const a = Ne[t];
                        return r().createElement(te, { header: `${st.header.$dyn(a)}`, body: `${st.body.$dyn(a)}` }, e);
                    },
                    ot = (0, De.Pi)(({ pageView: e, className: t }) => {
                        const a = Ye(),
                            s = a.model,
                            i = a.controls,
                            o = Ae(),
                            u = (0, n.useCallback)((e) => i.changeSidebarTab(e), [i]),
                            l = s.computes.tabs(o.isMedium);
                        return r().createElement(rt, {
                            tabs: l,
                            onClick: u,
                            active: e,
                            size: o.size,
                            className: t,
                            classNames: { icon: b()('Tabs_icon_9f', o.isMedium && 'Tabs_icon__medium_1c') },
                            WrapperElement: it,
                        });
                    });
                let ut;
                !(function (e) {
                    ((e[(e.Initial = 0)] = 'Initial'), (e[(e.Success = 1)] = 'Success'), (e[(e.Error = 2)] = 'Error'));
                })(ut || (ut = {}));
                const lt = ['children', 'className'];
                function ct() {
                    return (
                        (ct = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        ct.apply(null, arguments)
                    );
                }
                const dt = (e) => {
                        let t = e.children,
                            a = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        a[n] = e[n];
                                    }
                                return a;
                            })(e, lt);
                        return r().createElement('div', ct({ className: b()('Heading_base_4b', a) }, n), t);
                    },
                    mt = ({ message: e, className: t, classNames: a }) =>
                        r().createElement(
                            'div',
                            { className: b()('Spinner_base_87', t) },
                            e &&
                                r().createElement(
                                    'div',
                                    { className: b()('Spinner_caption_cf', null == a ? void 0 : a.caption) },
                                    e,
                                ),
                            r().createElement('div', {
                                className: b()('Spinner_gear_c4', null == a ? void 0 : a.gear),
                            }),
                            r().createElement('div', {
                                className: b()('Spinner_logo_bf', null == a ? void 0 : a.logo),
                            }),
                        ),
                    _t = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 300, config: { duration: 300 } },
                    gt = {
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
                let Et, pt;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Et || (Et = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(pt || (pt = {})));
                const vt = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: s,
                    disabled: i,
                    mixClass: o,
                    soundHover: u,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: g,
                    onClick: E,
                }) => {
                    const p = (0, n.useRef)(null),
                        v = (0, n.useState)(a),
                        h = v[0],
                        f = v[1],
                        C = (0, n.useState)(!1),
                        A = C[0],
                        D = C[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                h && null !== p.current && !p.current.contains(e.target) && f(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [h]),
                        (0, n.useEffect)(() => {
                            f(a);
                        }, [a]),
                        r().createElement(
                            'div',
                            {
                                ref: p,
                                className: b()(
                                    gt.base,
                                    gt[`base__${s}`],
                                    i && gt.base__disabled,
                                    t && gt[`base__${t}`],
                                    h && gt.base__focus,
                                    A && gt.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (e) {
                                    i || (null !== u && ce(u), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    i || (_ && _(e), D(!1));
                                },
                                onMouseDown: function (e) {
                                    i ||
                                        (null !== l && ce(l),
                                        m && m(e),
                                        a && (i || (p.current && (p.current.focus(), f(!0)))),
                                        D(!0));
                                },
                                onMouseLeave: function (e) {
                                    i || (g && g(e), D(!1));
                                },
                                onClick: function (e) {
                                    i || (E && E(e));
                                },
                            },
                            s !== Et.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: gt.back }),
                                    r().createElement('span', { className: gt.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: b()(gt.state, gt.state__default) },
                                r().createElement('span', { className: gt.stateDisabled }),
                                r().createElement('span', { className: gt.stateHighlightHover }),
                                r().createElement('span', { className: gt.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: gt.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                vt.defaultProps = { type: Et.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const ht = vt,
                    bt = (e, t) =>
                        Object.keys(e).length === Object.keys(t).length &&
                        Object.keys(e).every((a) => Object.prototype.hasOwnProperty.call(t, a) && e[a] === t[a]),
                    ft = z()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), items: e.array('items') },
                                a = (0, ke.Om)(
                                    (e) => {
                                        const a = Te(t.items.get(), e);
                                        if (!a) throw new Error(`leaderboard item with index ${e} was not found`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: M },
                                ),
                                n = (0, ke.Om)(() => {
                                    const e = t.root.get(),
                                        a = e.state,
                                        n = e.leaderboardUpdateTimestamp;
                                    return a !== ut.Initial && n > 0;
                                }),
                                r = (0, ke.Om)(() => a(0).rank),
                                s = (0, ke.Om)(() => t.root.get().lastBestUserPosition + 1),
                                i = (0, ke.Om)((e) => t.root.get().ownSpaID === a(e).spaID),
                                o = (0, ke.Om)(() => -1 !== t.root.get().lastBestUserPosition),
                                u = (0, ke.Om)(
                                    () => ({ first: a(0).position, last: a(t.items.get().length - 1).position }),
                                    { equals: bt },
                                ),
                                l = (0, ke.Om)(() => o() && s() >= u().first && s() <= u().last),
                                c = (0, ke.Om)(
                                    (e) => {
                                        const a = Math.ceil(t.root.get().recordsCount / e);
                                        return {
                                            amount: a,
                                            hasPagination: a > 1,
                                            active: Math.floor(u().first / e) + 1,
                                        };
                                    },
                                    { equals: bt },
                                ),
                                d = (0, ke.Om)((e) => a(e).position < 3),
                                m = (0, ke.Om)(() => -1 === t.root.get().personalPosition);
                            return Object.assign({}, t, {
                                computes: {
                                    leaderboardItem: a,
                                    hasUpdateInfo: n,
                                    firstItemRank: r,
                                    rowsDividerPosition: s,
                                    hasRowsDivider: l,
                                    isPersonalRow: i,
                                    hasPositionIcon: d,
                                    isDefaultPersonalPosition: m,
                                    hasLastBestUserPosition: o,
                                    pages: c,
                                    pagePositions: u,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            refresh: e.createCallbackNoArgs('onRefresh'),
                            getTableRecords: e.createCallback((e, t) => ({ limit: e, offset: t }), 'getTableRecords'),
                        }),
                    ),
                    Ct = ft[0],
                    At = ft[1],
                    Dt = R.strings.comp7_ext.leaderboard.error,
                    Ft = (0, De.Pi)(({ className: e }) => {
                        const t = At(),
                            a = t.model,
                            n = t.controls,
                            s = a.root.get().isLoading,
                            i = w().mediaSize;
                        return r().createElement(
                            'div',
                            { className: b()('ErrorState_base_bf', e) },
                            r().createElement(
                                'div',
                                { className: 'ErrorState_titleContainer_bc' },
                                r().createElement('div', { className: 'ErrorState_alertIcon_92' }),
                                r().createElement('div', { className: 'ErrorState_title_49' }, Dt.title()),
                            ),
                            r().createElement('div', { className: 'ErrorState_description_e3' }, Dt.description()),
                            r().createElement(
                                'div',
                                { className: 'ErrorState_buttonWrapper_e1' },
                                r().createElement(
                                    ht,
                                    {
                                        type: Et.secondary,
                                        disabled: s,
                                        size: ((o = i), o >= A.Medium ? pt.medium : pt.small),
                                        mixClass: 'ErrorState_button_5f',
                                        onClick: n.refresh,
                                    },
                                    Dt.buttonText(),
                                ),
                            ),
                        );
                        var o;
                    }),
                    wt = (e, t, a) => (a < e ? e : a > t ? t : a);
                function Bt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const St = () => {
                        const e = (0, n.useMemo)(() => ({}), []),
                            t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                            a = (e, a) => {
                                t(e).set(a, a);
                            },
                            r = (e, a) => {
                                t(e).delete(a);
                            },
                            s = (e, ...a) => {
                                for (
                                    var n,
                                        r = (function (e, t) {
                                            var a =
                                                ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                            if (a) return (a = a.call(e)).next.bind(a);
                                            if (
                                                Array.isArray(e) ||
                                                (a = (function (e, t) {
                                                    if (e) {
                                                        if ('string' == typeof e) return Bt(e, t);
                                                        var a = {}.toString.call(e).slice(8, -1);
                                                        return (
                                                            'Object' === a && e.constructor && (a = e.constructor.name),
                                                            'Map' === a || 'Set' === a
                                                                ? Array.from(e)
                                                                : 'Arguments' === a ||
                                                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                                                                  ? Bt(e, t)
                                                                  : void 0
                                                        );
                                                    }
                                                })(e)) ||
                                                (t && e && 'number' == typeof e.length)
                                            ) {
                                                a && (e = a);
                                                var n = 0;
                                                return function () {
                                                    return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                                                };
                                            }
                                            throw new TypeError(
                                                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                            );
                                        })(t(e).values());
                                    !(n = r()).done;
                                )
                                    (0, n.value)(...a);
                            };
                        return (0, n.useMemo)(() => ({ on: a, off: r, trigger: s }), []);
                    },
                    yt = [];
                function Nt(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), yt)
                    );
                }
                function Pt(e, t, a, n) {
                    let r,
                        s = !1,
                        i = 0;
                    function o() {
                        r && clearTimeout(r);
                    }
                    function u(...u) {
                        const l = this,
                            c = Date.now() - i;
                        function d() {
                            ((i = Date.now()), a.apply(l, u));
                        }
                        s ||
                            (n && !r && d(),
                            o(),
                            void 0 === n && c > e
                                ? d()
                                : !0 !== t &&
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
                        'boolean' != typeof t && ((n = a), (a = t), (t = void 0)),
                        (u.cancel = function () {
                            (o(), (s = !0));
                        }),
                        u
                    );
                }
                let kt;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(kt || (kt = {}));
                const xt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Rt = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: a,
                        getDirection: r,
                        getWrapperSize: s,
                        forceTriggerMouseMove: i,
                    }) => {
                        const o = (e, a) => {
                            const n = t(e),
                                r = n[0],
                                s = n[1];
                            return s <= r ? 0 : wt(r, s, a);
                        };
                        return (u = {}) => {
                            const l = u.settings,
                                c = void 0 === l ? xt : l,
                                d = (0, n.useRef)(null),
                                m = (0, n.useRef)(null),
                                _ = (0, n.useRef)(!1),
                                g = St(),
                                E = (function (e, t, a) {
                                    const r = (0, n.useMemo)(() => Pt(150, e), []);
                                    return ((0, n.useEffect)(() => r.cancel, [r]), r);
                                })(() => {
                                    i && i();
                                }),
                                p = (0, Ke.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (a(t, e), g.trigger('change', e), i && _.current && E());
                                    },
                                    onRest: (e) => g.trigger('rest', e),
                                    onStart: (e) => g.trigger('start', e),
                                    onPause: (e) => g.trigger('pause', e),
                                })),
                                v = p[0],
                                h = p[1],
                                b = (0, n.useCallback)(
                                    (e, t, a) => {
                                        var n;
                                        const r = v.scrollPosition.get(),
                                            s = (null != (n = v.scrollPosition.goal) ? n : 0) - r;
                                        return o(e, t * a + s + r);
                                    },
                                    [v.scrollPosition],
                                ),
                                f = (0, n.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            h.start({
                                                scrollPosition: o(n, e),
                                                immediate: t,
                                                reset: a,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(n, v.scrollPosition.get()) },
                                            });
                                    },
                                    [h, c.animationConfig, v.scrollPosition],
                                ),
                                C = (0, n.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            a = m.current;
                                        if (!t || !a) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return s(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, c.step),
                                            r = b(t, e, n);
                                        f(r);
                                    },
                                    [f, b, c.step],
                                ),
                                A = (0, n.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && C(r(e)),
                                            d.current && g.trigger('mouseWheel', e, v.scrollPosition, t(d.current)));
                                    },
                                    [v.scrollPosition, C, g],
                                ),
                                D = ((e, t = []) => {
                                    const a = (0, n.useRef)(),
                                        r = (0, n.useCallback)((...t) => {
                                            (a.current && a.current(), (a.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, n.useEffect)(
                                            () => () => {
                                                a.current && a.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        Xe(() => {
                                            const e = d.current;
                                            e &&
                                                (f(o(e, v.scrollPosition.goal), { immediate: !0 }),
                                                g.trigger('resizeHandled'));
                                        }),
                                    [f, v.scrollPosition.goal],
                                ),
                                F = Nt(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = o(e, v.scrollPosition.goal);
                                    (t !== v.scrollPosition.goal && f(t, { immediate: !0 }),
                                        g.trigger('recalculateContent'));
                                });
                            return (
                                (0, n.useEffect)(
                                    () => (
                                        window.addEventListener('resize', D),
                                        () => {
                                            window.removeEventListener('resize', D);
                                        }
                                    ),
                                    [D],
                                ),
                                (0, n.useEffect)(() => {
                                    const e = d.current;
                                    if (!e || !i) return;
                                    const t = () => {
                                            _.current = !0;
                                        },
                                        a = () => {
                                            _.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', t),
                                        e.addEventListener('mouseleave', a),
                                        () => {
                                            (e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', a));
                                        }
                                    );
                                }, [d]),
                                (0, n.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (m.current ? s(m.current) : void 0),
                                        getContainerSize: () => (d.current ? e(d.current) : void 0),
                                        getBounds: () =>
                                            d.current
                                                ? t(d.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: c.step.clampedArrowStepTimeout,
                                        clampPosition: o,
                                        handleMouseWheel: A,
                                        applyScroll: f,
                                        applyStepTo: C,
                                        contentRef: d,
                                        wrapperRef: m,
                                        scrollPosition: h,
                                        animationScroll: v,
                                        recalculateContent: F,
                                        events: { on: g.on, off: g.off },
                                    }),
                                    [v.scrollPosition, f, C, g.off, g.on, F, A, h, c.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    It = Rt({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? kt.Next : kt.Prev),
                    }),
                    Tt = {
                        '--pageContentWidth': '78vw',
                        base: 'CurrentPositionPanel_base_ba',
                        base__active: 'CurrentPositionPanel_base__active_a4',
                        cell: 'CurrentPositionPanel_cell_e3',
                        cell__order: 'CurrentPositionPanel_cell__order_65',
                        cell__currentPosition: 'CurrentPositionPanel_cell__currentPosition_f5',
                        cell__battles: 'CurrentPositionPanel_cell__battles_7c',
                        cell__score: 'CurrentPositionPanel_cell__score_ca',
                        screwIcon: 'CurrentPositionPanel_screwIcon_d2',
                        screwIcon__left: 'CurrentPositionPanel_screwIcon__left_87',
                        screwIcon__right: 'CurrentPositionPanel_screwIcon__right_5e',
                    };
                let Lt;
                !(function (e) {
                    ((e.None = 'None'), (e.Active = 'Active'));
                })(Lt || (Lt = {}));
                const Ot = R.strings.comp7_ext.leaderboard.currentPosition,
                    Mt = { [Lt.None]: 'none', [Lt.Active]: 'active' },
                    $t = (0, De.Pi)(({ state: e, height: t, onClick: a, className: n }) => {
                        const s = At().model.root.get(),
                            i = s.personalPosition,
                            o = s.personalBattlesCount,
                            u = s.personalScore;
                        return r().createElement(
                            'div',
                            {
                                className: b()(Tt.base, Tt[`base__${Mt[e]}`], n),
                                onClick: a,
                                style: { '--height': t ? `${t}rem` : 'auto' },
                            },
                            r().createElement('div', { className: b()(Tt.screwIcon, Tt.screwIcon__left) }),
                            {
                                [Lt.None]: r().createElement('div', { className: b()(Tt.cell) }, Ot.none()),
                                [Lt.Active]: r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: b()(Tt.cell, Tt.cell__order) }, i + 1),
                                    r().createElement(
                                        'div',
                                        { className: b()(Tt.cell, Tt.cell__currentPosition) },
                                        Ot.body(),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: b()(Tt.cell, Tt.cell__battles) },
                                        r().createElement(j, { value: o }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: b()(Tt.cell, Tt.cell__score) },
                                        r().createElement(j, { value: u }),
                                    ),
                                ),
                            }[e],
                            r().createElement('div', { className: b()(Tt.screwIcon, Tt.screwIcon__right) }),
                        );
                    });
                function Wt(e, t, a = []) {
                    const r = (0, n.useRef)(0),
                        s = (0, n.useCallback)(() => window.clearInterval(r.current), a || []);
                    (0, n.useEffect)(() => s, [s]);
                    const i = (null != a ? a : []).concat([t]);
                    return [
                        (0, n.useCallback)((a) => {
                            ((r.current = window.setInterval(() => e(a, !0), t)), e(a, !1));
                        }, i),
                        s,
                    ];
                }
                const Ht = 'VerticalBar_base__nonActive_42',
                    zt = 'disable',
                    Ut = () => {},
                    Vt = { pending: !1, offset: 0 },
                    Gt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    qt = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    jt = (e, t) => Math.max(20, e.offsetHeight * t),
                    Qt = (0, n.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = Gt, onDrag: s = Ut }) => {
                        const o = (0, n.useRef)(null),
                            u = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, n.useState)(Vt),
                            g = _[0],
                            E = _[1],
                            p = (0, n.useCallback)(
                                (e) => {
                                    (E(e),
                                        d.current &&
                                            s({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [s],
                            ),
                            v = Nt(() => {
                                const t = d.current,
                                    a = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && a)) return;
                                const s = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${jt(a, s)}px`),
                                    (t.style.display = 'flex'),
                                    o.current &&
                                        (1 === s ? o.current.classList.add(Ht) : o.current.classList.remove(Ht)),
                                    s
                                );
                            }),
                            h = Nt(() => {
                                const t = c.current,
                                    a = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && a && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    o = wt(0, 1, s / (r - n)),
                                    m = (t.offsetHeight - jt(t, i)) * o;
                                ((a.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (u.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    u.current.classList.add(zt),
                                                    void l.current.classList.remove(zt)
                                                );
                                            if (
                                                ((t = c.current),
                                                (a = d.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    u.current.classList.remove(zt),
                                                    void l.current.classList.add(zt)
                                                );
                                            var t, a;
                                            (u.current.classList.remove(zt), l.current.classList.remove(zt));
                                        }
                                    })(m));
                            }),
                            f = Nt(() => {
                                qt(e, () => {
                                    (v(), h());
                                });
                            });
                        ((0, n.useEffect)(() => Xe(f)),
                            (0, n.useEffect)(() => {
                                const t = () => {
                                    qt(e, () => {
                                        h();
                                    });
                                };
                                let a = Ut;
                                const n = () => {
                                    (a(), (a = Xe(f)));
                                };
                                return (
                                    e.events.on('recalculateContent', f),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (a(),
                                            e.events.off('recalculateContent', f),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, n.useEffect)(() => {
                                if (!g.pending) return;
                                const t = i.O.client.events.mouse.up(() => {
                                        p(Vt);
                                    }),
                                    a = i.O.client.events.mouse.move(([t]) => {
                                        qt(e, (a) => {
                                            const n = c.current,
                                                r = d.current,
                                                i = e.getContainerSize();
                                            if (!n || !r || !i) return;
                                            const o = t.screenY - g.offset - n.getBoundingClientRect().y,
                                                u = (o / n.offsetHeight) * i;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, u),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                s({ type: 'dragging', thumb: r, thumbOffset: o, contentOffset: u }));
                                        });
                                    });
                                return () => {
                                    (t(), a());
                                };
                            }, [e, g.offset, g.pending, s, p]));
                        const C = Wt((t) => e.applyStepTo(t), m, [e]),
                            A = C[0],
                            D = C[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', D, !0),
                                () => document.removeEventListener('mouseup', D, !0)
                            ),
                            [D],
                        );
                        const F = (e) => {
                            e.target.classList.contains(zt) || ce('highlight');
                        };
                        return r().createElement(
                            'div',
                            { className: b()('VerticalBar_base_f3', t.base), ref: o, onWheel: e.handleMouseWheel },
                            r().createElement('div', {
                                className: b()('VerticalBar_topButton_d7', t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(zt) || 0 !== e.button || (ce('play'), A(kt.Next));
                                },
                                ref: u,
                                onMouseEnter: F,
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: b()('VerticalBar_track_df', t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        var r;
                                        n &&
                                            0 === t.button &&
                                            (ce('play'),
                                            t.target === n
                                                ? p({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y })
                                                : ((r = t.screenY > n.getBoundingClientRect().y ? kt.Prev : kt.Next),
                                                  d.current &&
                                                      qt(e, (t) => {
                                                          if (!t) return;
                                                          const n = a(e),
                                                              s = e.clampPosition(t, t.scrollTop + n * r);
                                                          e.applyScroll(s);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: F,
                                },
                                r().createElement('div', { ref: d, className: b()('VerticalBar_thumb_32', t.thumb) }),
                                r().createElement('div', { className: b()('VerticalBar_rail_43', t.rail) }),
                            ),
                            r().createElement('div', {
                                className: b()('VerticalBar_bottomButton_06', t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(zt) || 0 !== e.button || (ce('play'), A(kt.Prev));
                                },
                                onMouseUp: D,
                                ref: l,
                                onMouseEnter: F,
                            }),
                        );
                    }),
                    Yt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Xt = ({ className: e, classNames: t, children: a, api: s }) => (
                        (0, n.useEffect)(() => Xe(s.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: b()(Yt.base, e), ref: s.wrapperRef, onWheel: s.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: b()(Yt.content, null == t ? void 0 : t.content), ref: s.contentRef },
                                a,
                            ),
                        )
                    );
                Xt.Default = ({
                    children: e,
                    api: t,
                    className: a,
                    barClassNames: s,
                    areaClassName: i,
                    scrollClassName: o,
                    scrollClassNames: u,
                    getStepByRailClick: l,
                    onDrag: c,
                }) => {
                    const d = (0, n.useMemo)(() => {
                            const e = s || {};
                            return Object.assign({}, e, { base: b()(Yt.base, e.base) });
                        }, [s]),
                        m = (0, n.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return r().createElement(
                        'div',
                        { className: b()(Yt.defaultScroll, a), onWheel: t.handleMouseWheel },
                        r().createElement(
                            'div',
                            { className: b()(Yt.area, i) },
                            r().createElement(Xt, { className: o, classNames: u, api: m }, e),
                        ),
                        r().createElement(Qt, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                    );
                };
                const Kt = (e, t) => {
                    const a = [];
                    for (let n = 0; n < e; n++) a.push(t(n));
                    return a;
                };
                var Zt = a(1281);
                let Jt;
                function ea(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function ta(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                function aa(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(Jt || (Jt = {}));
                const na = (e) => e.replace(/&nbsp;/g, ' '),
                    ra = (e, t, a) => {
                        if (a % 2) {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                        return [...e, t];
                    },
                    sa = (e, t, a) => {
                        if (0 === a) return [t];
                        if (a % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                    },
                    ia = (e, t, a = Jt.left) => e.split(t).reduce(a === Jt.left ? ra : sa, []),
                    oa = (() => {
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
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    ua = ['zh_cn', 'zh_sg', 'zh_tw'],
                    la = R.strings.comp7_ext.division,
                    ca = { [Se.A]: 'A', [Se.B]: 'B', [Se.C]: 'C', [Se.D]: 'D', [Se.E]: 'E' },
                    da = (e) => la.$dyn(ca[e]),
                    ma = (e) => ta(la.text(), { division: da(e) }),
                    _a = {
                        [we.First]: 'first',
                        [we.Second]: 'second',
                        [we.Third]: 'third',
                        [we.Fourth]: 'fourth',
                        [we.Fifth]: 'fifth',
                        [we.Sixth]: 'sixth',
                    },
                    ga = (e) => _a[e],
                    Ea = [we.First, we.Second, we.Third, we.Fourth],
                    pa = (e) => Ea.includes(e);
                let va;
                !(function (e) {
                    ((e[(e.x22 = 22)] = 'x22'),
                        (e[(e.x40 = 40)] = 'x40'),
                        (e[(e.x48 = 48)] = 'x48'),
                        (e[(e.x64 = 64)] = 'x64'),
                        (e[(e.x84 = 84)] = 'x84'),
                        (e[(e.x110 = 110)] = 'x110'),
                        (e[(e.x150 = 150)] = 'x150'),
                        (e[(e.x200 = 200)] = 'x200'),
                        (e[(e.x260 = 260)] = 'x260'),
                        (e[(e.x320 = 320)] = 'x320'),
                        (e[(e.x420 = 420)] = 'x420'),
                        (e[(e.x600 = 600)] = 'x600'));
                })(va || (va = {}));
                const ha = 'RankEmblem_base_2d',
                    ba = ({ rank: e, size: t, division: a, seasonName: s, className: i }) => {
                        const o = (0, n.useMemo)(() => {
                            const n = R.images.comp7.gui.maps.icons.ranks.$dyn(s).$num(t),
                                r = pa(e) && void 0 !== a ? `_${da(a)}` : '';
                            return { backgroundImage: `url(${n.$dyn(`${ga(e)}${r}`)})`, '--imageSize': `${t}rem` };
                        }, [s, t, e, a]);
                        return r().createElement('div', { className: b()(ha, i), style: o });
                    },
                    fa = {
                        [we.First]: 'first',
                        [we.Second]: 'second',
                        [we.Third]: 'third',
                        [we.Fourth]: 'fourth',
                        [we.Fifth]: 'fifth',
                        [we.Sixth]: 'sixth',
                    },
                    Ca = (e, t) => `${e.$dyn(fa[t])}`,
                    Aa = (e) => Ca(R.strings.comp7_ext.rank, e),
                    Da = (e) => ta(R.strings.comp7_ext.rank.text(), { rank: Aa(e) }),
                    Fa = (0, De.Pi)(({ index: e, className: t, onClick: a }) => {
                        const n = At().model,
                            s = G().model,
                            i = n.computes.leaderboardItem(e).rank;
                        return r().createElement(
                            'div',
                            { className: b()('RowsDivider_base_e8', t), onClick: a },
                            r().createElement(ba, { seasonName: s.season.name.get(), rank: i, size: va.x64 }),
                            r().createElement('div', { className: 'RowsDivider_rankText_6c' }, Da(i)),
                        );
                    }),
                    wa = 'Header_separator_e3',
                    Ba = 'Header_cell_27',
                    Sa = 'Header_cell__score_a3',
                    ya = R.strings.comp7_ext.leaderboard.table.header,
                    Na = R.strings.comp7_ext.leaderboard.table.tooltip,
                    Pa = () =>
                        r().createElement(
                            'div',
                            { className: 'Header_base_72' },
                            r().createElement(
                                te,
                                { header: Na.order.header(), body: Na.order.body() },
                                r().createElement('div', { className: b()(Ba, 'Header_cell__order_16') }, ya.order()),
                            ),
                            r().createElement('div', { className: wa }),
                            r().createElement(
                                te,
                                { header: Na.player.header(), body: Na.player.body() },
                                r().createElement('div', { className: b()(Ba, 'Header_cell__player_6e') }, ya.player()),
                            ),
                            r().createElement('div', { className: wa }),
                            r().createElement(
                                te,
                                { header: Na.battlesCount.header(), body: Na.battlesCount.body() },
                                r().createElement('div', { className: b()(Ba, Sa) }, ya.battlesCount()),
                            ),
                            r().createElement('div', { className: wa }),
                            r().createElement(
                                te,
                                { header: Na.score.header(), body: Na.score.body() },
                                r().createElement('div', { className: b()(Ba, Sa) }, ya.score()),
                            ),
                        );
                let ka;
                !(function (e) {
                    ((e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220'));
                })(ka || (ka = {}));
                const xa = ['content', 'classMix', 'className'];
                function Ra() {
                    return (
                        (Ra = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        Ra.apply(null, arguments)
                    );
                }
                const Ia = (e) => {
                        let t = e.content,
                            a = e.classMix,
                            s = e.className,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        a[n] = e[n];
                                    }
                                return a;
                            })(e, xa);
                        const o = (0, n.useRef)(null),
                            u = (0, n.useState)(!0),
                            l = u[0],
                            c = u[1];
                        return (
                            (0, n.useEffect)(() =>
                                Xe(() => {
                                    const e = o.current;
                                    e && e.offsetWidth >= e.scrollWidth && c(!1);
                                }),
                            ),
                            r().createElement(
                                te,
                                { isEnabled: l, body: t },
                                r().createElement(
                                    'div',
                                    Ra({}, i, { ref: o, className: b()('TextOverflow_base_3b', s, a) }),
                                    t,
                                ),
                            )
                        );
                    },
                    Ta = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    La = { [ka.default]: 'c_24x24', [ka.x48]: 'c_48x48', [ka.x80]: 'c_80x80', [ka.x220]: 'c_220x220' },
                    Oa = ({ badgeID: e, size: t = ka.default, className: a }) => {
                        const n = R.images.gui.maps.icons.library.badges.$dyn(La[t]);
                        return r().createElement('div', {
                            className: b()(Ta.base, Ta[`base__${t}`], a),
                            style: { backgroundImage: `url(${n.$dyn(`badge_${e}`)})` },
                        });
                    },
                    Ma = {
                        base: 'PlayerNickname_base_32',
                        userName: 'PlayerNickname_userName_cc',
                        igrIcon: 'PlayerNickname_igrIcon_34',
                        base__default: 'PlayerNickname_base__default_8d',
                        base__x48: 'PlayerNickname_base__x48_84',
                        suffixBadgeWrapper: 'PlayerNickname_suffixBadgeWrapper_cc',
                        suffixBadgeStripe: 'PlayerNickname_suffixBadgeStripe_8a',
                        base__inverted: 'PlayerNickname_base__inverted_34',
                        suffixBadge: 'PlayerNickname_suffixBadge_bd',
                        anonymizedIcon: 'PlayerNickname_anonymizedIcon_80',
                    },
                    $a = (0, n.memo)(({ tooltipHeaderName: e }) => {
                        const t = (0, n.useMemo)(
                                () => ta(R.strings.tooltips.anonymizer.teamStats.header(), { name: e }),
                                [e],
                            ),
                            a = R.strings.tooltips.anonymizer.teamStats.body();
                        return r().createElement(
                            te,
                            { header: t, body: a },
                            r().createElement('div', { className: Ma.anonymizedIcon }),
                        );
                    });
                function Wa() {
                    return (
                        (Wa = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        Wa.apply(null, arguments)
                    );
                }
                const Ha = { [ka.default]: 'c_64x24', [ka.x48]: 'c_68x28' },
                    za = { [ka.default]: 'c_48x48', [ka.x48]: 'c_48x48' },
                    Ua = ({
                        userName: e,
                        clanAbbrev: t = '',
                        igrType: a = 0,
                        badge: s = { badgeID: '' },
                        suffixBadge: i = { badgeID: '' },
                        isInverted: o = !1,
                        isFakeNameVisible: u = !1,
                        isAnonymizerShown: l = !1,
                        hiddenUserName: c = '',
                        size: d = ka.default,
                        userNameClassName: m = '',
                        clanTagClassName: _ = '',
                    }) => {
                        const g = R.images.gui.maps.icons.library.badges.strips.$dyn(Ha[d]),
                            E = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${g.$dyn(`strip_${i.badgeID}`)})` }),
                                [i, g],
                            ),
                            p = R.images.gui.maps.icons.library.badges.$dyn(za[d]),
                            v = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${p.$dyn(`badge_${i.badgeID}`)})` }),
                                [i, p],
                            ),
                            h = t ? `[${t}]` : '',
                            f = b()(Ma.base, Ma[`base__${d}`], o && Ma.base__inverted),
                            C = b()(Ma.userName, m),
                            A = b()(Ma.clanTag, _),
                            D = e !== c,
                            F = u ? `${c}${h}` : c,
                            w = Boolean(s.badgeID) && r().createElement(Oa, Wa({ size: d }, s, { key: 'badge' })),
                            B = Date.now(),
                            S = [
                                w,
                                [
                                    r().createElement(
                                        'div',
                                        { className: C, key: 'userName' },
                                        r().createElement(Ia, { content: e, key: B }),
                                    ),
                                    !u && Boolean(h) && r().createElement('div', { className: A, key: 'clanTag' }, h),
                                ],
                                0 !== a && r().createElement('div', { className: Ma.igrIcon, key: 'igrType' }),
                                Boolean(i.badgeID) &&
                                    r().createElement(
                                        'div',
                                        { className: Ma.suffixBadgeWrapper, key: 'suffixBadge' },
                                        r().createElement('div', { className: Ma.suffixBadgeStripe, style: E }),
                                        r().createElement('div', { className: Ma.suffixBadge, style: v }),
                                    ),
                                l && D && r().createElement($a, { tooltipHeaderName: F, key: 'anonymizer' }),
                            ];
                        return r().createElement('div', { className: f }, o ? S.reverse() : S);
                    };
                let Va;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(Va || (Va = {}));
                const Ga = ({
                        children: e,
                        contentID: t,
                        decoratorID: a = 0,
                        targetId: r = 0,
                        args: s,
                        isEnabled: i = !0,
                        onMouseDown: o,
                    }) => {
                        const u = (0, n.useCallback)(() => {
                                ((0, q.c9)(q.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: r,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: s,
                                }),
                                    de.playYes());
                            }, [s, t, a, r]),
                            l = (0, n.useCallback)(() => {
                                (0, q.c9)(q.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: r,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, a, r]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    (o && o(e), ((e) => e.button === Va.RIGHT)(e) && u());
                                },
                                [o, u],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === i && l();
                            }, [i, l]),
                            i ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    qa = ['children'];
                function ja() {
                    return (
                        (ja = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        ja.apply(null, arguments)
                    );
                }
                const Qa = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        a[n] = e[n];
                                    }
                                return a;
                            })(e, qa);
                        return r().createElement(
                            Ga,
                            ja({}, a, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    Ya = ({ children: e, isEnabled: t, contextMenuArgs: a }) =>
                        t ? r().createElement(Qa, { args: a }, e) : e,
                    Xa = {
                        base: 'Row_base_6d',
                        base__personal: 'Row_base__personal_6b',
                        order: 'Row_order_43',
                        order__first: 'Row_order__first_eb',
                        order__second: 'Row_order__second_b2',
                        order__third: 'Row_order__third_33',
                        playerContainer: 'Row_playerContainer_ef',
                        player: 'Row_player_42',
                        clanTag: 'Row_clanTag_36',
                        battles: 'Row_battles_b9',
                        score: 'Row_score_0e',
                    },
                    Ka = R.strings.comp7_ext.leaderboard.table.tooltip,
                    Za = { 0: 'first', 1: 'second', 2: 'third' },
                    Ja = (0, De.Pi)(({ index: e, className: t }) => {
                        const a = At().model,
                            n = a.computes.leaderboardItem(e),
                            s = n.position,
                            i = n.battlesCount,
                            o = n.userName,
                            u = n.clanTag,
                            l = n.clanTagColor,
                            c = n.score,
                            d = n.spaID,
                            m = a.computes.isPersonalRow(e),
                            _ = a.computes.hasPositionIcon(e);
                        return r().createElement(
                            'div',
                            { className: b()(Xa.base, m && Xa.base__personal, t), style: { '--clanTagColor': l } },
                            r().createElement(
                                te,
                                { header: Ka.order.header(), body: Ka.order.body() },
                                r().createElement(
                                    'div',
                                    { className: b()(Xa.order, _ && Xa[`order__${Za[s]}`]) },
                                    !_ && s + 1,
                                ),
                            ),
                            r().createElement(
                                Ya,
                                { contextMenuArgs: { spaID: d, userName: o }, isEnabled: !m },
                                r().createElement(
                                    'div',
                                    { className: Xa.playerContainer },
                                    r().createElement(
                                        te,
                                        { header: Ka.player.header(), body: Ka.player.body() },
                                        r().createElement(
                                            'div',
                                            { className: Xa.player },
                                            r().createElement(Ua, {
                                                userName: o,
                                                clanAbbrev: u,
                                                clanTagClassName: l && Xa.clanTag,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                            r().createElement(
                                te,
                                { header: Ka.battlesCount.header(), body: Ka.battlesCount.body() },
                                r().createElement('div', { className: Xa.battles }, r().createElement(j, { value: i })),
                            ),
                            r().createElement(
                                te,
                                { header: Ka.score.header(), body: Ka.score.body() },
                                r().createElement('div', { className: Xa.score }, r().createElement(j, { value: c })),
                            ),
                        );
                    }),
                    en = 'Leaderboard_shadowsContainer_04',
                    tn = 'Leaderboard_shadow_34',
                    an = 'Leaderboard_shadow__left_3e',
                    nn = 'Leaderboard_shadow__center_92',
                    rn = 'Leaderboard_shadow__right_4d',
                    sn = { base: 'Leaderboard_bar_35' },
                    on = (0, De.Pi)(({ limit: e, api: t, rowHeight: a = 0, rowsDividerHeight: n = 0 }) => {
                        const s = At().model,
                            i = s.computes.hasRowsDivider(),
                            o = s.computes.rowsDividerPosition() % e;
                        return r().createElement(
                            'div',
                            {
                                className: 'Leaderboard_base_d1',
                                style: { '--rowHeight': a ? `${a}rem` : 'auto', '--rowsDividerHeight': `${n}rem` },
                            },
                            r().createElement(Pa, null),
                            r().createElement(
                                'div',
                                { className: 'Leaderboard_content_12' },
                                r().createElement(
                                    'div',
                                    { className: en },
                                    r().createElement('div', { className: b()(tn, an) }),
                                    r().createElement('div', { className: b()(tn, nn) }),
                                    r().createElement('div', { className: b()(tn, rn) }),
                                ),
                                r().createElement(
                                    Xt,
                                    { api: t, className: 'Leaderboard_area_f8' },
                                    Kt(s.items.get().length, (e) =>
                                        r().createElement(
                                            r().Fragment,
                                            { key: e },
                                            i &&
                                                e === o &&
                                                r().createElement(Fa, {
                                                    index: e,
                                                    className: 'Leaderboard_rowsDivider_b5',
                                                }),
                                            r().createElement(Ja, { className: 'Leaderboard_row_99', index: e }),
                                        ),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: b()(en, 'Leaderboard_shadowsContainer__bottom_0e') },
                                    r().createElement('div', { className: b()(tn, an) }),
                                    r().createElement('div', { className: b()(tn, nn) }),
                                    r().createElement('div', { className: b()(tn, rn) }),
                                ),
                                r().createElement(Qt, { api: t, classNames: sn }),
                            ),
                        );
                    }),
                    un = {
                        base: 'Pagination_base_c3',
                        pageButton: 'Pagination_pageButton_e4',
                        pageButton__active: 'Pagination_pageButton__active_d8',
                        pageButton__inactive: 'Pagination_pageButton__inactive_b6',
                        pageButton__disabled: 'Pagination_pageButton__disabled_82',
                        pageValue: 'Pagination_pageValue_61',
                        control: 'Pagination_control_94',
                        control__active: 'Pagination_control__active_22',
                        control__prev: 'Pagination_control__prev_f3',
                        control__next: 'Pagination_control__next_4b',
                    };
                let ln;
                !(function (e) {
                    ((e.Active = 'active'), (e.Inactive = 'inactive'), (e.Disabled = 'disabled'));
                })(ln || (ln = {}));
                const cn = R.strings.comp7_ext.pagination,
                    dn = Math.trunc(4),
                    mn = ({ pagesAmount: e, activePage: t, className: a, onPageClick: n, onControlEvent: s }) => {
                        const i = t > 1,
                            o = t < e,
                            u = e < 9 ? e : 9,
                            l = (e) => () => {
                                null == s || s(e);
                            };
                        return r().createElement(
                            'div',
                            { className: b()(un.base, a) },
                            r().createElement(
                                'div',
                                {
                                    className: b()(un.control, un.control__prev, i && un.control__active),
                                    onClick: i ? l('prevClick') : void 0,
                                },
                                cn.prev(),
                            ),
                            Kt(u, (a) => {
                                const s = ((e, t, a) => {
                                        const n = t > dn + 1,
                                            r = a > 9 && t + dn < a;
                                        return a <= 9
                                            ? e + 1
                                            : 0 === e
                                              ? 1
                                              : (1 === e && n) || (7 === e && r)
                                                ? cn.dots()
                                                : 8 === e
                                                  ? a
                                                  : n && !r
                                                    ? a - 8 + e
                                                    : !n && r
                                                      ? e + 1
                                                      : e - dn + t;
                                    })(a, t, e),
                                    i = ((e, t) =>
                                        Number.isInteger(e) ? (t === e ? ln.Active : ln.Inactive) : ln.Disabled)(s, t);
                                return r().createElement(
                                    'div',
                                    {
                                        key: a,
                                        className: b()(un.pageButton, un[`pageButton__${i}`]),
                                        onClick:
                                            i !== ln.Disabled && 'number' == typeof s
                                                ? ((o = s),
                                                  () => {
                                                      null == n || n(o);
                                                  })
                                                : void 0,
                                    },
                                    r().createElement('div', { className: un.pageValue }, s),
                                );
                                var o;
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: b()(un.control, un.control__next, o && un.control__active),
                                    onClick: o ? l('nextClick') : void 0,
                                },
                                cn.next(),
                            ),
                        );
                    },
                    _n = {
                        settings: Object.assign({}, xt, {
                            animationConfig: Object.assign({}, xt.animationConfig, { round: 1 }),
                        }),
                    },
                    gn = (0, De.Pi)(
                        ({
                            limit: e,
                            onCurrentRankTabChange: t,
                            positionToScroll: a,
                            onPositionToScrollChange: s,
                            className: o,
                        }) => {
                            const u = At(),
                                l = u.model,
                                c = u.controls,
                                d = l.root.get(),
                                m = d.personalPosition,
                                _ = d.lastBestUserPosition,
                                g = It(_n),
                                E = g.animationScroll.scrollPosition,
                                p = g.applyScroll,
                                v = g.events,
                                h = g.getBounds,
                                f = l.computes.isDefaultPersonalPosition() ? Lt.None : Lt.Active,
                                C = l.computes.pages(e),
                                A = l.computes.pagePositions(),
                                D = l.computes.rowsDividerPosition(),
                                F = l.computes.hasRowsDivider(),
                                w = ((e, t) => i.O.view.remToPx(44) * ((e + 1) % t))(_, e);
                            (0, n.useEffect)(
                                () =>
                                    Xe(() => {
                                        if (void 0 !== a) {
                                            switch (a.type) {
                                                case 'rank': {
                                                    const e = a.rank === we.Fifth ? w : 0;
                                                    p(e);
                                                    break;
                                                }
                                                case 'personalPosition': {
                                                    const t = i.O.view.remToPx(44) * (m % e),
                                                        a = F && m > _ ? t + i.O.view.remToPx(70) : t;
                                                    p(a);
                                                    break;
                                                }
                                                case 'page':
                                                    p(0);
                                            }
                                            s(void 0);
                                        }
                                    }),
                                [p, F, _, e, m, a, w, s],
                            );
                            const B = (0, n.useCallback)(() => {
                                const e = A.first > _ ? we.Fifth : we.Sixth;
                                t(e);
                            }, [A.first, _, t]);
                            ((0, n.useEffect)(() => {
                                B();
                            }, [B]),
                                (0, n.useEffect)(() => {
                                    const e = () => {
                                        if (F && D > A.first) {
                                            const e = h()[1],
                                                a = 0 !== e && E.goal === e && w >= e;
                                            t(E.goal >= w || a ? we.Fifth : we.Sixth);
                                        } else m >= A.first && m <= A.last ? t(m > _ ? we.Fifth : we.Sixth) : B();
                                    };
                                    return (v.on('change', e), () => v.off('change', e));
                                }, [v, A.first, F, _, A.last, e, m, w, D, E.goal, t, B, h]));
                            const S = (0, n.useCallback)(() => {
                                    f !== Lt.None &&
                                        (i.O.sound.play.yes1(),
                                        c.getTableRecords(e, m - (m % e)),
                                        s({ type: 'personalPosition' }));
                                }, [c, e, f, m, s]),
                                y = (0, n.useCallback)(
                                    (t) => {
                                        (i.O.sound.play.yes1(), c.getTableRecords(e, (t - 1) * e), s({ type: 'page' }));
                                    },
                                    [c, e, s],
                                ),
                                N = (0, n.useCallback)(
                                    (t) => {
                                        i.O.sound.play.yes1();
                                        const a = (() => {
                                            switch (t) {
                                                case 'prevClick':
                                                    return C.active - 1;
                                                case 'nextClick':
                                                    return C.active + 1;
                                                default:
                                                    return 1;
                                            }
                                        })();
                                        (c.getTableRecords(e, (a - 1) * e), s({ type: 'page' }));
                                    },
                                    [C.active, c, e, s],
                                );
                            return r().createElement(
                                'div',
                                {
                                    className: b()(
                                        'HasRecordsState_base_3d',
                                        !C.hasPagination && 'HasRecordsState_base__withoutPagination_0f',
                                        o,
                                    ),
                                },
                                r().createElement(
                                    'div',
                                    { className: 'HasRecordsState_tableContainer_3d' },
                                    r().createElement(on, { limit: e, api: g, rowHeight: 44, rowsDividerHeight: 70 }),
                                ),
                                r().createElement($t, { state: f, onClick: S, height: 44 }),
                                C.hasPagination &&
                                    r().createElement(mn, {
                                        pagesAmount: C.amount,
                                        activePage: C.active,
                                        className: 'HasRecordsState_pagination_a4',
                                        onPageClick: y,
                                        onControlEvent: N,
                                    }),
                            );
                        },
                    ),
                    En = R.views.comp7.lobby.tooltips,
                    pn = ['rank', 'divisions', 'from', 'to', 'topPercentage', 'children', 'className'];
                function vn() {
                    return (
                        (vn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        vn.apply(null, arguments)
                    );
                }
                const hn = (e) => {
                        let t = e.rank,
                            a = e.divisions,
                            n = e.from,
                            s = e.to,
                            i = e.topPercentage,
                            o = e.children,
                            u = e.className,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        a[n] = e[n];
                                    }
                                return a;
                            })(e, pn);
                        const c = (({ rank: e, topPercentage: t, from: a, to: n, divisions: r = '' }) => {
                            switch (e) {
                                case we.Sixth:
                                    return { contentId: En.SixthRankTooltip('resId'), args: { topPercentage: t } };
                                case we.Fifth:
                                    return { contentId: En.FifthRankTooltip('resId'), args: { from: a } };
                                default:
                                    return {
                                        contentId: En.GeneralRankTooltip('resId'),
                                        args: { rank: e, divisions: r, from: a, to: n },
                                    };
                            }
                        })({ rank: t, divisions: a, from: n, to: s, topPercentage: i });
                        return r().createElement(K, vn({}, c, l), r().createElement('div', { className: u }, o));
                    },
                    bn = {
                        '--pageContentWidth': '78vw',
                        base: 'RankTabs_base_8f',
                        line: 'RankTabs_line_61',
                        line__toRight: 'RankTabs_line__toRight_b0',
                        line__toLeft: 'RankTabs_line__toLeft_b9',
                        ranksContainer: 'RankTabs_ranksContainer_ac',
                        dividersDot: 'RankTabs_dividersDot_dc',
                        rank: 'RankTabs_rank_f5',
                        rankEmblem: 'RankTabs_rankEmblem_06',
                        rank__disabled: 'RankTabs_rank__disabled_05',
                        label: 'RankTabs_label_07',
                        rank__active: 'RankTabs_rank__active_a9',
                        rankTabHighlight: 'RankTabs_rankTabHighlight_5f',
                        fadeIn: 'RankTabs_fadeIn_31',
                        fadeInThreeQuarters: 'RankTabs_fadeInThreeQuarters_56',
                        fadeInHalf: 'RankTabs_fadeInHalf_6e',
                        fadeOut: 'RankTabs_fadeOut_79',
                        fadeInWithScale: 'RankTabs_fadeInWithScale_da',
                        slideUp: 'RankTabs_slideUp_bf',
                        scale: 'RankTabs_scale_9b',
                        raysAppearance: 'RankTabs_raysAppearance_4f',
                        rotate: 'RankTabs_rotate_2d',
                        'reverse-rotate': 'RankTabs_reverse-rotate_4a',
                        glowAppearance: 'RankTabs_glowAppearance_b1',
                        highlightAppearance: 'RankTabs_highlightAppearance_a2',
                        blink: 'RankTabs_blink_fc',
                        slideUpIn: 'RankTabs_slideUpIn_cd',
                    };
                let fn;
                !(function (e) {
                    ((e.Active = 'active'), (e.Inactive = 'inactive'), (e.Disabled = 'disabled'));
                })(fn || (fn = {}));
                const Cn = ({ tabs: e, seasonName: t, className: a, onTabClick: n }) => {
                        const s = (e) => () => {
                            null == n || n(e);
                        };
                        return r().createElement(
                            'div',
                            { className: b()(bn.base, a) },
                            r().createElement('div', { className: bn.dividersDot }),
                            r().createElement('div', { className: b()(bn.line, bn.line__toRight) }),
                            r().createElement(
                                'div',
                                { className: bn.ranksContainer },
                                e.map(({ rank: e, state: a, args: n = {} }) => {
                                    const o = a !== fn.Disabled;
                                    return r().createElement(
                                        'div',
                                        { className: b()(bn.rank, bn[`rank__${a}`]), key: e },
                                        r().createElement(
                                            hn,
                                            {
                                                rank: e,
                                                from: null == n ? void 0 : n.from,
                                                topPercentage: null == n ? void 0 : n.topPercentage,
                                                onClick: o ? s(e) : void 0,
                                                onMouseEnter: o ? i.O.sound.play.highlight : void 0,
                                            },
                                            r().createElement('div', { className: bn.rankTabHighlight }),
                                            r().createElement(ba, {
                                                seasonName: t,
                                                rank: e,
                                                size: va.x64,
                                                className: bn.rankEmblem,
                                            }),
                                        ),
                                        a !== fn.Disabled && r().createElement('div', { className: bn.label }, Da(e)),
                                    );
                                }),
                            ),
                            r().createElement('div', { className: b()(bn.line, bn.line__toLeft) }),
                        );
                    },
                    An = ({ rank: e, lastBestUserPosition: t, currentRankTab: a, recordsCount: n }) =>
                        (e === we.Sixth && -1 === t) || 0 === n ? fn.Disabled : e === a ? fn.Active : fn.Inactive,
                    Dn = [we.Fifth, we.Sixth],
                    Fn = (0, De.Pi)(({ className: e }) => {
                        const t = At(),
                            a = t.model,
                            s = t.controls,
                            o = G().model,
                            u = a.root.get(),
                            l = u.lastBestUserPosition,
                            c = u.recordsCount,
                            d = u.from,
                            m = u.topPercentage,
                            _ = a.computes.hasLastBestUserPosition(),
                            g = a.computes.rowsDividerPosition(),
                            E = (0, n.useState)(a.computes.firstItemRank()),
                            p = E[0],
                            v = E[1],
                            h = (0, n.useState)(),
                            f = h[0],
                            C = h[1],
                            A = Dn.map((e) => ({
                                rank: e,
                                state: An({ rank: e, lastBestUserPosition: l, currentRankTab: p, recordsCount: c }),
                                args: { from: d, topPercentage: m },
                            })),
                            D = (0, n.useCallback)(
                                (e) => {
                                    const t = e === we.Fifth && _ ? g - (g % 50) : 0;
                                    (i.O.sound.play.click(), s.getTableRecords(50, t), C({ type: 'rank', rank: e }));
                                },
                                [s, g, _, 50],
                            );
                        return r().createElement(
                            'div',
                            { className: b()('HasRecordsStateContainer_base_53', e) },
                            r().createElement(Cn, { tabs: A, seasonName: o.season.name.get(), onTabClick: D }),
                            r().createElement(gn, {
                                limit: 50,
                                positionToScroll: f,
                                onCurrentRankTabChange: v,
                                onPositionToScrollChange: C,
                                className: 'HasRecordsStateContainer_content_36',
                            }),
                        );
                    }),
                    wn = ({ binding: e, text: t = '', classMix: a, alignment: s = Jt.left, formatWithBrackets: i }) => {
                        if (null === t) return (console.error("FormatText was supplied with 'null'"), null);
                        const o = i && e ? ea(t, e) : t;
                        return r().createElement(
                            n.Fragment,
                            null,
                            o.split('\n').map((t, i) =>
                                r().createElement(
                                    'div',
                                    { className: b()('FormatText_base_d0', a), key: `${t}-${i}` },
                                    ((e, t, a) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            a && e in a
                                                ? a[e]
                                                : ((e, t = Jt.left) => {
                                                      const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return ua.includes(a)
                                                          ? oa(e)
                                                          : 'ja' === a
                                                            ? (0, Zt.D4)()
                                                                  .parse(e)
                                                                  .map((e) => na(e))
                                                            : ((e, t = Jt.left) => {
                                                                  let a = [];
                                                                  const n =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      r = na(e);
                                                                  return (
                                                                      ia(r, /( )/, t).forEach(
                                                                          (e) => (a = a.concat(ia(e, n, Jt.left))),
                                                                      ),
                                                                      a
                                                                  );
                                                              })(e, t);
                                                  })(e, t),
                                        ))(t, s, e).map((e, t) =>
                                        r().createElement(n.Fragment, { key: `${t}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    Bn = {
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
                    Sn = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    yn = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Nn = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Pn = (0, n.memo)(({ text: e, binding: t, classMix: a }) => {
                        const s = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            i = (0, n.useMemo)(() => t || {}, [t]);
                        let o = Sn.exec(e),
                            u = e,
                            l = 0;
                        for (; o;) {
                            const a = o[0],
                                n = yn.exec(a),
                                c = Nn.exec(a),
                                d = o[1];
                            if (n && c) {
                                const e = n[0],
                                    o = e + l++ + e;
                                ((u = u.replace(a, `%(${o})`)),
                                    (i[o] = Bn[e]
                                        ? r().createElement(
                                              'span',
                                              { className: Bn[e] },
                                              r().createElement(wn, { text: d, binding: t }),
                                          )
                                        : r().createElement(
                                              'span',
                                              { style: s(e) },
                                              r().createElement(wn, { text: d, binding: t }),
                                          )));
                            }
                            o = Sn.exec(e);
                        }
                        return r().createElement(wn, { text: u, classMix: a, binding: i });
                    }),
                    kn = {
                        base: 'NoRecordsState_base_4c',
                        imageContainer: 'NoRecordsState_imageContainer_e6',
                        image: 'NoRecordsState_image_69',
                        image__season_first: 'NoRecordsState_image__season_first_99',
                        image__season_second: 'NoRecordsState_image__season_second_4d',
                        image__season_third: 'NoRecordsState_image__season_third_9b',
                        title: 'NoRecordsState_title_d5',
                        subtitle: 'NoRecordsState_subtitle_1b',
                    },
                    xn = R.strings.comp7_ext.leaderboard.noRecords,
                    Rn = (0, De.Pi)(({ className: e }) => {
                        const t = At().model.root.get().from,
                            a = G().model;
                        return r().createElement(
                            'div',
                            { className: b()(kn.base, e) },
                            r().createElement(
                                'div',
                                { className: kn.imageContainer },
                                r().createElement('div', {
                                    className: b()(kn.image, kn[`image__season_${a.season.name.get()}`]),
                                }),
                            ),
                            r().createElement('div', { className: kn.title }, xn.title()),
                            r().createElement(Pn, {
                                text: xn.subtitle(),
                                binding: { pointsCount: r().createElement(j, { value: t }) },
                                classMix: kn.subtitle,
                            }),
                        );
                    });
                let In;
                !(function (e) {
                    ((e.DayMonthNumeric = 'dayMonthNumeric'),
                        (e.DayMonthFull = 'dayMonthFull'),
                        (e.DayMonthFullTime = 'dayMonthFullTime'),
                        (e.DayMonthAbbreviated = 'dayMonthAbbreviated'),
                        (e.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
                        (e.ShortDate = 'shortDate'),
                        (e.ShortTime = 'ShortTime'),
                        (e.ShortDateTime = 'ShortDateTime'),
                        (e.FullDate = 'fullDate'),
                        (e.FullTime = 'fullTime'),
                        (e.FullDateTime = 'fullDateTime'));
                })(In || (In = {}));
                var Tn = a(8613);
                const Ln = 60,
                    On = 3600,
                    Mn = 86400,
                    $n = (Date.now(), Tn.Ew.getRegionalDateTime),
                    Wn = Tn.Ew.getFormattedDateTime,
                    Hn = (0, n.memo)(({ datetime: e, format: t = In.ShortDate, isConvertedToLocal: a = !0 }) =>
                        Object.values(In).includes(t) ? $n(e, t, a) : Wn(e, t, a),
                    ),
                    zn = ta(R.strings.comp7_ext.lastUpdateNote.lastBestUserPoints.description(), { count: 5 }),
                    Un = ['timestamp', 'className', 'classNames', 'dateTimeFormat', 'contentId', 'tooltipDescription'];
                function Vn() {
                    return (
                        (Vn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        Vn.apply(null, arguments)
                    );
                }
                const Gn = R.strings.comp7_ext.lastUpdateNote,
                    qn = (e) => {
                        let t = e.timestamp,
                            a = e.className,
                            n = e.classNames,
                            s = e.dateTimeFormat,
                            i = void 0 === s ? In.ShortTime : s,
                            o = e.contentId,
                            u = void 0 === o ? R.views.comp7.lobby.tooltips.LastUpdateTooltip('resId') : o,
                            l = e.tooltipDescription,
                            c = void 0 === l ? zn : l,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        a[n] = e[n];
                                    }
                                return a;
                            })(e, Un);
                        return r().createElement(
                            'div',
                            { className: b()('LastUpdateNote_base_70', a) },
                            r().createElement(wn, {
                                text: Gn.info(),
                                binding: { date: r().createElement(Hn, { datetime: t, format: i }) },
                            }),
                            r().createElement(
                                K,
                                Vn({ ignoreShowDelay: !0, contentId: u, args: { description: c } }, d),
                                r().createElement('div', {
                                    className: b()('LastUpdateNote_infoIcon_6f', null == n ? void 0 : n.icon),
                                }),
                            ),
                        );
                    },
                    jn = R.strings.comp7_ext,
                    Qn = (e) => ((e, t) => String(e.$dyn(t)))(jn.seasonName, e);
                const Yn = ['children'];
                function Xn() {
                    return (
                        (Xn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        Xn.apply(null, arguments)
                    );
                }
                const Kn = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        a[n] = e[n];
                                    }
                                return a;
                            })(e, Yn);
                        return r().createElement(
                            K,
                            Xn(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                a,
                            ),
                            t,
                        );
                    },
                    Zn = R.strings.comp7_ext.season,
                    Jn = (e, t, a = In.ShortDate) => ({
                        startDate: r().createElement(Hn, { datetime: e, format: a }),
                        endDate: r().createElement(Hn, { datetime: t, format: a }),
                    }),
                    er = (e, t, a) => {
                        const n = t - a,
                            s = ((e, t) =>
                                ((e) => {
                                    const t = Math.floor(e);
                                    return {
                                        totalSecondsLeft: t,
                                        seconds: Math.floor(t % 60),
                                        minutes: Math.floor(t / 60) % 60,
                                        hours: Math.floor((t / 3600) % 24),
                                        totalDays: Math.floor(t / 86400),
                                    };
                                })(e - t))(t, a);
                        return n >= 604800
                            ? r().createElement(wn, { text: Zn.range(), binding: Jn(e, t) })
                            : n >= Mn
                              ? r().createElement(wn, { text: Zn.daysLeft(), binding: s })
                              : n >= On
                                ? r().createElement(wn, { text: Zn.hoursLeft(), binding: s })
                                : n >= Ln
                                  ? r().createElement(wn, { text: Zn.minutesLeft(), binding: s })
                                  : n >= 1
                                    ? r().createElement(wn, { text: Zn.secondsLeft(), binding: s })
                                    : void 0;
                    },
                    tr = ({
                        startTimestamp: e,
                        endTimestamp: t,
                        currentTimestamp: a,
                        seasonName: n,
                        tooltipId: s = '',
                        hasSeasonName: i = !0,
                        classNames: o,
                    }) =>
                        r().createElement(
                            Kn,
                            { args: { tooltipId: s }, isEnabled: Boolean(s) },
                            r().createElement(
                                'div',
                                { className: 'ActiveSeasonState_base_07' },
                                r().createElement('div', {
                                    className: b()(
                                        'ActiveSeasonState_calendarIcon_ba',
                                        null == o ? void 0 : o.calendarIcon,
                                    ),
                                }),
                                i &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        Qn(n),
                                        r().createElement('div', { className: 'ActiveSeasonState_divider_db' }),
                                    ),
                                er(e, t, a),
                            ),
                        ),
                    ar = (0, De.Pi)(({ className: e, classNames: t, hasSeasonName: a = !0 }) => {
                        const s = G(),
                            i = s.model,
                            o = s.controls,
                            u = i.season.startTimestamp.get(),
                            l = i.season.endTimestamp.get(),
                            c = i.season.serverTimestamp.get(),
                            d = i.season.name.get();
                        return (
                            (function (e, t, a) {
                                ((e, t) => {
                                    const a = (0, n.useRef)(e);
                                    ((a.current = e),
                                        (0, n.useEffect)(() => {
                                            if (void 0 === t) return;
                                            const e = window.setInterval(() => {
                                                a.current();
                                            }, t);
                                            return () => clearInterval(e);
                                        }, [t]));
                                })(
                                    () => {
                                        a();
                                    },
                                    e < t ? 950 : void 0,
                                );
                            })(c, l, o.pollServerTime),
                            r().createElement(
                                'div',
                                { className: b()('ScheduleSubheading_base_a5', e) },
                                c < l
                                    ? r().createElement(
                                          'div',
                                          { className: null == t ? void 0 : t.activeSeasonState },
                                          r().createElement(tr, {
                                              startTimestamp: u,
                                              endTimestamp: l,
                                              currentTimestamp: c,
                                              seasonName: d,
                                              tooltipId: i.root.get().tooltipId,
                                              hasSeasonName: a,
                                              classNames: null == t ? void 0 : t.scheduleClassNames,
                                          }),
                                      )
                                    : r().createElement(Pn, {
                                          text: R.strings.comp7_ext.season.over(),
                                          binding: { seasonName: Qn(d) },
                                      }),
                            )
                        );
                    }),
                    nr = (0, De.Pi)(({ className: e }) => {
                        const t = At().model,
                            a = t.root.get().leaderboardUpdateTimestamp,
                            n = t.computes.hasUpdateInfo(),
                            s = ta(R.strings.comp7_ext.lastUpdateNote.ratingPositions.description(), { count: 5 });
                        return r().createElement(
                            'div',
                            { className: b()('SubheadingContainer_base_08', e) },
                            r().createElement(ar, null),
                            n &&
                                r().createElement(
                                    'div',
                                    { className: 'SubheadingContainer_updateInfo_73' },
                                    r().createElement(qn, {
                                        timestamp: a,
                                        className: 'SubheadingContainer_updateInfoText_17',
                                        tooltipDescription: s,
                                    }),
                                ),
                        );
                    }),
                    rr = {
                        '--pageContentWidth': '78vw',
                        base: 'LeaderboardPage_base_e6',
                        animationContainer: 'LeaderboardPage_animationContainer_5a',
                        subHeading: 'LeaderboardPage_subHeading_1a',
                        content: 'LeaderboardPage_content_63',
                        base__loading: 'LeaderboardPage_base__loading_47',
                        hasRecords: 'LeaderboardPage_hasRecords_a9',
                        error: 'LeaderboardPage_error_f3',
                        noRecords: 'LeaderboardPage_noRecords_ae',
                        spinner: 'LeaderboardPage_spinner_77',
                        fadeIn: 'LeaderboardPage_fadeIn_88',
                        fadeInThreeQuarters: 'LeaderboardPage_fadeInThreeQuarters_74',
                        fadeInHalf: 'LeaderboardPage_fadeInHalf_ff',
                        fadeOut: 'LeaderboardPage_fadeOut_93',
                        fadeInWithScale: 'LeaderboardPage_fadeInWithScale_b0',
                        slideUp: 'LeaderboardPage_slideUp_eb',
                        scale: 'LeaderboardPage_scale_f6',
                        raysAppearance: 'LeaderboardPage_raysAppearance_4a',
                        rotate: 'LeaderboardPage_rotate_9d',
                        'reverse-rotate': 'LeaderboardPage_reverse-rotate_e8',
                        glowAppearance: 'LeaderboardPage_glowAppearance_a8',
                        highlightAppearance: 'LeaderboardPage_highlightAppearance_82',
                        blink: 'LeaderboardPage_blink_69',
                        slideUpIn: 'LeaderboardPage_slideUpIn_1b',
                    },
                    sr = { [ut.Initial]: 'initial', [ut.Success]: 'success', [ut.Error]: 'error' },
                    ir = (0, De.Pi)(() => {
                        const e = At().model,
                            t = e.root.get(),
                            a = t.state,
                            n = t.isLoading,
                            s = (0, Ke.useSpring)(_t);
                        return r().createElement(
                            'div',
                            { className: b()(rr.base, rr[`base__${sr[a]}`], n && rr.base__loading) },
                            r().createElement(dt, { className: be }, R.strings.comp7_ext.page.heading.leaderboard()),
                            r().createElement(nr, { className: rr.subHeading }),
                            r().createElement(
                                Ke.animated.div,
                                { className: rr.animationContainer, style: s },
                                r().createElement(
                                    'div',
                                    { className: rr.content },
                                    (() => {
                                        switch (a) {
                                            case ut.Initial:
                                                return null;
                                            case ut.Success:
                                                return e.items.get().length > 0
                                                    ? r().createElement(Fn, { className: rr.hasRecords })
                                                    : r().createElement(Rn, { className: rr.noRecords });
                                            case ut.Error:
                                                return r().createElement(Ft, { className: rr.error });
                                            default:
                                                console.error(
                                                    'Unreachable branch: add component for proper leaderboard state',
                                                );
                                        }
                                    })(),
                                ),
                                n &&
                                    r().createElement(mt, {
                                        message: R.strings.comp7_ext.waitingSpinner.message(),
                                        className: rr.spinner,
                                    }),
                            ),
                        );
                    });
                let or;
                !(function (e) {
                    ((e[(e.Achieved = 0)] = 'Achieved'),
                        (e[(e.Current = 1)] = 'Current'),
                        (e[(e.Inactive = 2)] = 'Inactive'));
                })(or || (or = {}));
                const ur = (e) => Me(e, (e) => da(e.name)).join(R.strings.comp7_ext.listSeparator());
                let lr, cr, dr;
                (!(function (e) {
                    ((e[(e.Base = 0)] = 'Base'),
                        (e[(e.Vehicle = 1)] = 'Vehicle'),
                        (e[(e.Style3d = 2)] = 'Style3d'),
                        (e[(e.Reward = 3)] = 'Reward'));
                })(lr || (lr = {})),
                    (function (e) {
                        ((e.Locked = 'locked'),
                            (e.ReadyToRestore = 'readyToRestore'),
                            (e.ReadyToPurchase = 'readyToPurchase'),
                            (e.Purchased = 'purchased'),
                            (e.InProgress = 'inProgress'));
                    })(cr || (cr = {})),
                    (function (e) {
                        ((e.Previous = 'previous'), (e.Current = 'current'), (e.Future = 'future'));
                    })(dr || (dr = {})));
                const mr = [we.Fifth, we.Sixth],
                    _r = z()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    qualificationModel: e.primitives(
                                        ['isActive', 'battlesCount', 'maxBattlesCount', 'isRatingCalculation'],
                                        'qualificationModel',
                                    ),
                                    isRewardLayerVisible: $.LO.box(!1),
                                    isParallaxPreloaded: $.LO.box(!1),
                                },
                                a = e.array('items'),
                                n = e.array('qualificationModel.battles'),
                                r = (0, ke.Om)(
                                    (e) => {
                                        const t = Te(a.get(), e);
                                        if (!t) throw new Error(`item with index ${e} was not found`);
                                        return {
                                            hasRankInactivity: t.hasRankInactivity,
                                            rank: t.rank,
                                            from: t.from,
                                            to: t.to,
                                        };
                                    },
                                    { equals: bt },
                                ),
                                s = (0, ke.Om)(
                                    (e) => {
                                        const t = Te(a.get(), e);
                                        if (!t) throw new Error(`item with index ${e} was not found`);
                                        return Me(t.divisions, (e) => Object.assign({}, e));
                                    },
                                    { equals: M },
                                ),
                                i = (0, ke.Om)(
                                    (e) => {
                                        const t = s(e);
                                        return {
                                            list: ur(t),
                                            count: t.length,
                                            currentDivisionIndex: ze(t, (e) => e.state === or.Current),
                                        };
                                    },
                                    { equals: bt },
                                ),
                                o = (0, ke.Om)(() => {
                                    const e = t.root.get().currentItemIndex,
                                        n = Te(a.get(), e);
                                    if (!n) throw new Error(`current item with currentItemIndex ${e} was not found`);
                                    return n.hasRankInactivity;
                                }),
                                u = (0, ke.Om)(
                                    (e) => {
                                        var a;
                                        const n =
                                            (i = e) > (o = t.root.get().currentItemIndex)
                                                ? dr.Future
                                                : i < o
                                                  ? dr.Previous
                                                  : dr.Current;
                                        var i, o;
                                        return {
                                            state: n,
                                            division:
                                                null == (a = He(s(e), (e) => e.state === or.Current)) ? void 0 : a.name,
                                            hasInfo: n === dr.Current && mr.includes(r(e).rank),
                                        };
                                    },
                                    { equals: bt },
                                ),
                                l = (0, ke.Om)(
                                    (e) => {
                                        const t = Te(n.get(), e);
                                        if (!t) throw new Error(`qualification battle with index ${e} was not found`);
                                        return t;
                                    },
                                    { equals: M },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    item: r,
                                    qualificationBattle: l,
                                    itemsLength: (0, ke.Om)(() => a.get().length),
                                    qualificationBattlesLength: (0, ke.Om)(() => n.get().length),
                                    rankSettings: u,
                                    hasCurrentItemRankInactivity: o,
                                    divisions: s,
                                    divisionsConfig: i,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => {
                            const a = (0, $.aD)((e) => t.isRewardLayerVisible.set(e));
                            return {
                                setIsParallaxPreloaded: (0, $.aD)((e) => t.isParallaxPreloaded.set(e)),
                                setRewardLayerVisible: a,
                                goToRankRewardsPage: e.createCallbackNoArgs('qualificationModel.onRankRewardsPageOpen'),
                            };
                        },
                    ),
                    gr = _r[0],
                    Er = _r[1],
                    pr = ({ currentScore: e, hasRankInactivity: t, rankInactivityCount: a, className: n }) =>
                        r().createElement(
                            'div',
                            { className: b()('RatingScore_base_78', n) },
                            r().createElement(
                                'div',
                                { className: 'RatingScore_rating_12' },
                                r().createElement('div', { className: 'RatingScore_score_01' }, e),
                                t &&
                                    r().createElement(
                                        K,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: R.views.comp7.lobby.tooltips.RankInactivityTooltip('resId'),
                                            args: { rankInactivityCount: a },
                                        },
                                        r().createElement(
                                            'div',
                                            { className: 'RatingScore_rankInactivity_43' },
                                            r().createElement(
                                                'div',
                                                { className: 'RatingScore_rankInactivityCount_b0' },
                                                a,
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: 'RatingScore_rankInactivityIconContainer_c8' },
                                                r().createElement('div', {
                                                    className: 'RatingScore_rankInactivityIcon_d4',
                                                }),
                                            ),
                                        ),
                                    ),
                            ),
                            r().createElement(
                                'div',
                                { className: 'RatingScore_title_0a' },
                                R.strings.comp7_ext.ratingScore.title(),
                            ),
                        ),
                    vr = (0, De.Pi)(({ className: e }) => {
                        const t = Er().model,
                            a = t.root.get(),
                            n = a.currentScore,
                            s = a.rankInactivityCount;
                        return r().createElement(
                            'div',
                            { className: b()('ItemFooter_base_9e', e) },
                            r().createElement('div', { className: 'ItemFooter_background_15' }),
                            r().createElement('div', { className: 'ItemFooter_divider_ef' }),
                            r().createElement('div', { className: 'ItemFooter_light_b0' }),
                            r().createElement(
                                'div',
                                { className: 'ItemFooter_footer_ec' },
                                r().createElement(pr, {
                                    currentScore: n,
                                    hasRankInactivity: t.computes.hasCurrentItemRankInactivity(),
                                    rankInactivityCount: s,
                                    className: 'ItemFooter_rankItemFooter_1b',
                                }),
                            ),
                        );
                    }),
                    hr = [
                        {
                            path: R.images.comp7.gui.maps.icons.qualificationParallax.c_5(),
                            speedX: -0.053,
                            speedY: -0.01,
                        },
                        {
                            path: R.images.comp7.gui.maps.icons.qualificationParallax.c_4(),
                            speedX: -0.037,
                            speedY: -0.0055,
                        },
                        {
                            path: R.images.comp7.gui.maps.icons.qualificationParallax.c_3(),
                            speedX: -0.025,
                            speedY: -0.0016,
                        },
                        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_2(), speedX: 0, speedY: 0 },
                        {
                            path: R.images.comp7.gui.maps.icons.qualificationParallax.c_1(),
                            speedX: 0.015,
                            speedY: 0.002,
                        },
                        {
                            path: R.images.comp7.gui.maps.icons.qualificationParallax.c_1_1(),
                            speedX: 0.015,
                            speedY: 0.002,
                        },
                        {
                            path: R.images.comp7.gui.maps.icons.qualificationParallax.c_0(),
                            speedX: 0.03,
                            speedY: 0.014,
                        },
                        {
                            path: R.images.comp7.gui.maps.icons.qualificationParallax.c_0_1(),
                            speedX: 0.03,
                            speedY: 0.014,
                        },
                    ],
                    br = [
                        R.images.comp7.gui.maps.icons.qualificationParallax.c_1_1(),
                        R.images.comp7.gui.maps.icons.qualificationParallax.c_0_1(),
                    ],
                    fr = hr.reduce((e, t) => {
                        const a = Math.abs(t.speedX);
                        return a > e ? a : e;
                    }, 0),
                    Cr = (0, De.Pi)(({ className: e }) => {
                        const t = Er().model,
                            a = w().remScreenWidth,
                            s = (0, n.createRef)(),
                            o = fr * a,
                            u = (0, Ke.useSpring)({
                                to: { opacity: t.isRewardLayerVisible.get() ? 1 : 0 },
                                config: { duration: 300 },
                            }),
                            l = ((e) => {
                                const t = (0, n.useCallback)(
                                        (t) => {
                                            if (!e.current) return;
                                            const a = e.current.getBoundingClientRect(),
                                                n = a.width,
                                                r = a.height;
                                            return (
                                                0 !== t.clientX &&
                                                0 !== t.clientY &&
                                                t.clientX <= n - 2 &&
                                                t.clientY <= r - 2
                                            );
                                        },
                                        [e],
                                    ),
                                    a = (0, Ke.useSpring)(
                                        () => Object.assign({}, i.O.client.getMouseGlobalPosition('px')),
                                        [],
                                    );
                                return (
                                    (0, n.useEffect)(() => {
                                        const e = (e) => {
                                            t(e) && a[1].start({ x: e.clientX, y: e.clientY });
                                        };
                                        return (
                                            document.addEventListener('mousemove', e),
                                            () => {
                                                document.removeEventListener('mousemove', e);
                                            }
                                        );
                                    }, [t, a]),
                                    a
                                );
                            })(s),
                            c = l[0];
                        return r().createElement(
                            'div',
                            { ref: s, className: b()('Parallax_base_40', e) },
                            hr.map((e, t) =>
                                r().createElement(
                                    Ke.animated.div,
                                    {
                                        key: t,
                                        className: 'Parallax_layer_88',
                                        style: Object.assign(
                                            {
                                                width: `${a + 2 * o}rem`,
                                                left: -o + 'rem',
                                                x: c.x.to((t) => t * e.speedX),
                                                y: c.y.to((t) => t * e.speedY),
                                                backgroundImage: `url(${e.path})`,
                                            },
                                            br.includes(e.path) && u,
                                        ),
                                    },
                                    3 === t &&
                                        r().createElement(Ke.animated.div, {
                                            className: 'Parallax_shadow_24',
                                            style: u,
                                        }),
                                ),
                            ),
                        );
                    }),
                    Ar = hr.map((e) => e.path),
                    Dr = (0, De.Pi)(({ className: e }) => {
                        const t = Er(),
                            a = t.model,
                            s = t.controls,
                            i = a.isParallaxPreloaded.get(),
                            o = (0, Ke.useSpring)({ to: { opacity: i ? 1 : 0 }, config: { duration: 300 } });
                        return (
                            'success' ===
                                ((e) => {
                                    const t = (0, n.useState)('pending'),
                                        a = t[0],
                                        r = t[1];
                                    return (
                                        (0, n.useLayoutEffect)(() => {
                                            let t = 0,
                                                a = 0;
                                            const n = () => {
                                                t + a === e.length && r(0 === t ? 'success' : 'error');
                                            };
                                            e.forEach((e) => {
                                                const r = new Image();
                                                ((r.src = e),
                                                    r.addEventListener('load', () => {
                                                        (a++, n());
                                                    }),
                                                    r.addEventListener('error', () => {
                                                        (t++, n());
                                                    }));
                                            });
                                        }, [e]),
                                        a
                                    );
                                })(Ar) && s.setIsParallaxPreloaded(!0),
                            r().createElement(
                                Ke.animated.div,
                                { className: b()('ParallaxContainer_base_7c', e), style: o },
                                r().createElement(Cr, null),
                            )
                        );
                    });
                function Fr(e, t) {
                    (0, n.useEffect)(
                        () => (window.addEventListener('resize', e), () => window.removeEventListener('resize', e)),
                        t,
                    );
                }
                const wr = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    Br = (e) => {
                        (0, n.useEffect)(() => e, []);
                    },
                    Sr = 0;
                function yr() {
                    const e = (0, n.useRef)(Sr);
                    return (
                        Br(() => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, n.useMemo)(
                            () => ({
                                run: (t) => {
                                    (window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                (t(), (e.current = Sr));
                                            });
                                        })));
                                },
                                clear: () => {
                                    (window.cancelAnimationFrame(e.current), (e.current = Sr));
                                },
                                get isRunning() {
                                    return e.current !== Sr;
                                },
                            }),
                            [],
                        )
                    );
                }
                const Nr = { type: 'idle' };
                function Pr(e, t) {
                    const a = e.contentRef,
                        r = e.wrapperRef,
                        s = e.scrollPosition,
                        o = e.clampPosition,
                        u = e.animationScroll,
                        l = e.events,
                        c = (0, n.useState)(Nr),
                        d = c[0],
                        m = c[1],
                        _ = yr(),
                        g = Nt(() => {
                            _.run(() => {
                                const t = e.contentRef.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                t &&
                                    a &&
                                    n &&
                                    (t.style.cursor = n <= a ? 'auto' : 'dragging' === d.type ? 'move' : 'grab');
                            });
                        });
                    return (
                        (0, n.useEffect)(() => {
                            g();
                        }, [d.type, g]),
                        Fr(() => {
                            g();
                        }, []),
                        (0, n.useEffect)(() => {
                            if ('dragging' !== d.type) return;
                            const e = i.O.client.events.mouse.move(([e, n]) => {
                                    const i = a.current,
                                        l = r.current;
                                    if (!i || !l) return;
                                    if ('inside' === n && e.clientX < 0) return;
                                    const c = 'inside' === n ? e.clientX : e.clientX - l.offsetLeft,
                                        m = d.positionFrom - c,
                                        _ = d.previousScrollPosition + m;
                                    s.start(
                                        Object.assign(
                                            {
                                                scrollPosition: o(i, _),
                                                from: { scrollPosition: u.scrollPosition.get() },
                                            },
                                            t && { config: t },
                                        ),
                                    );
                                }),
                                n = i.O.client.events.mouse.up(function () {
                                    m({ type: 'scrollingToEnd' });
                                });
                            return () => {
                                (e(), n());
                            };
                        }, [u.scrollPosition, o, a, d, s, r, t]),
                        (0, n.useEffect)(() => {
                            if ('scrollingToEnd' !== d.type) return;
                            const e = () => {
                                m(Nr);
                            };
                            return (u.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e));
                        }, [u.scrollPosition, d.type, l]),
                        (0, n.useEffect)(() => {
                            const e = a.current;
                            if (!e) return;
                            const t = (e) => {
                                m({
                                    type: 'dragging',
                                    positionFrom: e.screenX,
                                    previousScrollPosition: u.scrollPosition.get(),
                                });
                            };
                            return (e.addEventListener('mousedown', t), () => e.removeEventListener('mousedown', t));
                        }, [u.scrollPosition, a]),
                        d
                    );
                }
                const kr = (e, t = 100) => ((i.O.view.pxToRem(i.O.client.getSize('px').width) * t) / 100 - e) / 2,
                    xr = Rt({
                        getBounds: (e) => {
                            var t, a;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (a = e.parentElement) ? void 0 : a.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? kt.Next : kt.Prev),
                        forceTriggerMouseMove: i.O.view.forceTriggerMouseMove,
                    }),
                    Rr = 'HorizontalBar_base__nonActive_82',
                    Ir = 'disable',
                    Tr = { pending: !1, offset: 0 },
                    Lr = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Or = () => {},
                    Mr = (e, t) => Math.max(20, e.offsetWidth * t),
                    $r = (0, n.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = Lr, onDrag: s = Or }) => {
                        const o = (0, n.useRef)(null),
                            u = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, n.useState)(Tr),
                            g = _[0],
                            E = _[1],
                            p = (0, n.useCallback)(
                                (e) => {
                                    (E(e),
                                        d.current &&
                                            s({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [s],
                            ),
                            v = () => {
                                const t = c.current,
                                    a = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && a && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    o = wt(0, 1, s / (r - n)),
                                    m = (t.offsetWidth - Mr(t, i)) * o;
                                ((a.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (u.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return (
                                                    u.current.classList.add(Ir),
                                                    void l.current.classList.remove(Ir)
                                                );
                                            if (
                                                ((t = c.current),
                                                (a = d.current),
                                                e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    u.current.classList.remove(Ir),
                                                    void l.current.classList.add(Ir)
                                                );
                                            var t, a;
                                            (u.current.classList.remove(Ir), l.current.classList.remove(Ir));
                                        }
                                    })(m));
                            },
                            h = Nt(() => {
                                ((() => {
                                    const t = d.current,
                                        a = c.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && n && a)) return;
                                    const s = Math.min(1, n / r);
                                    ((t.style.width = `${Mr(a, s)}px`),
                                        (t.style.display = 'flex'),
                                        o.current &&
                                            (1 === s ? o.current.classList.add(Rr) : o.current.classList.remove(Rr)));
                                })(),
                                    v());
                            });
                        ((0, n.useEffect)(() => Xe(h)),
                            (0, n.useEffect)(
                                () =>
                                    Xe(() => {
                                        const t = () => {
                                            v();
                                        };
                                        let a = Or;
                                        const n = () => {
                                            (a(), (a = Xe(h)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', h),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (a(),
                                                    e.events.off('recalculateContent', h),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, n.useEffect)(() => {
                                if (!g.pending) return;
                                const t = i.O.client.events.mouse.move(([t, a]) => {
                                        var n;
                                        const r = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!r || !i) return;
                                        const o = c.current,
                                            u = d.current;
                                        if (!o || !u) return;
                                        if ('inside' === a && t.clientX < 0) return;
                                        const l = t.clientX - g.offset - o.getBoundingClientRect().x,
                                            m = (l / o.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            s({ type: 'dragging', thumb: u, thumbOffset: l, contentOffset: m }));
                                    }),
                                    a = i.O.client.events.mouse.up(() => {
                                        (t(), p(Tr));
                                    });
                                return () => {
                                    (t(), a());
                                };
                            }, [e, g.offset, g.pending, s, p]));
                        const f = Wt((t) => e.applyStepTo(t), m, [e]),
                            C = f[0],
                            A = f[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', A, !0),
                                () => document.removeEventListener('mouseup', A, !0)
                            ),
                            [A],
                        );
                        const D = (e) => {
                            e.target.classList.contains(Ir) || ce('highlight');
                        };
                        return r().createElement(
                            'div',
                            { className: b()('HorizontalBar_base_49', t.base), ref: o, onWheel: e.handleMouseWheel },
                            r().createElement('div', {
                                className: b()('HorizontalBar_leftButton_5f', t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ir) || 0 !== e.button || (ce('play'), C(kt.Next));
                                },
                                onMouseUp: A,
                                ref: u,
                                onMouseEnter: D,
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: b()('HorizontalBar_track_0d', t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        n &&
                                            0 === t.button &&
                                            (ce('play'),
                                            t.target === n
                                                ? p({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x })
                                                : ((t) => {
                                                      const n = d.current,
                                                          r = e.contentRef.current;
                                                      if (!n || !r) return;
                                                      const s = a(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                  })(t.screenX > n.getBoundingClientRect().x ? kt.Prev : kt.Next));
                                    },
                                    ref: c,
                                    onMouseEnter: D,
                                },
                                r().createElement('div', { ref: d, className: b()('HorizontalBar_thumb_fd', t.thumb) }),
                                r().createElement('div', { className: b()('HorizontalBar_rail_32', t.rail) }),
                            ),
                            r().createElement('div', {
                                className: b()('HorizontalBar_rightButton_03', t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ir) || 0 !== e.button || (ce('play'), C(kt.Prev));
                                },
                                onMouseUp: A,
                                ref: l,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    Wr = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Hr = ({ api: e, className: t, classNames: a, children: s }) => (
                        (0, n.useEffect)(() => Xe(e.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: b()(Wr.base, t) },
                            r().createElement(
                                'div',
                                {
                                    className: b()(Wr.wrapper, null == a ? void 0 : a.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                r().createElement(
                                    'div',
                                    { className: b()(Wr.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    s,
                                ),
                            ),
                        )
                    );
                ((Hr.Bar = $r),
                    (Hr.Default = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: s,
                        areaClassName: i,
                        classNames: o,
                        scrollClassName: u,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, n.useMemo)(() => {
                                const e = s || {};
                                return Object.assign({}, e, { base: b()(Wr.base, e.base) });
                            }, [s]),
                            m = (0, n.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return r().createElement(
                            'div',
                            { className: b()(Wr.defaultScroll, a), onWheel: t.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: b()(Wr.defaultScrollArea, i) },
                                r().createElement(Hr, { className: u, api: m, classNames: o }, e),
                            ),
                            r().createElement($r, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    }));
                const zr = ({
                        api: e,
                        stuckIndex: t,
                        itemWidth: a,
                        itemsOffset: s = 0,
                        children: o,
                        onStick: u,
                        className: l,
                        areaClassNames: c,
                        barClassNames: d,
                        staticContent: m,
                    }) => {
                        const _ = i.O.view.remToPx(a),
                            g = e.animationScroll,
                            E = e.events,
                            p = e.applyScroll,
                            v = Pr(e),
                            h = (0, n.useCallback)(
                                (e) => {
                                    p(t * _, e);
                                },
                                [p, _, t],
                            ),
                            f = (0, n.useCallback)(() => {
                                null == u || u(Math.round(g.scrollPosition.goal / _));
                            }, [u, g.scrollPosition, _]);
                        ((0, n.useEffect)(() => (E.on('rest', f), () => E.off('rest', f)), [E, f]),
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    h({ immediate: !0, reset: !0 });
                                };
                                return (
                                    E.on('resizeHandled', e),
                                    () => {
                                        E.off('resizeHandled', e);
                                    }
                                );
                            }, [h, E]),
                            (0, n.useEffect)(
                                () =>
                                    Xe(() => {
                                        'idle' === v.type && g.scrollPosition.idle && h();
                                    }),
                                [g.scrollPosition, v, h],
                            ));
                        const C = (0, n.useCallback)(
                            (e) => {
                                'dragEnd' === e.type && p(t * _);
                            },
                            [p, _, t],
                        );
                        return r().createElement(
                            'div',
                            { className: b()('ProgressionScroll_base_df', l), style: { '--offset': `${s}rem` } },
                            r().createElement(
                                Hr,
                                {
                                    api: e,
                                    className: null == c ? void 0 : c.base,
                                    classNames: {
                                        wrapper: b()(
                                            'ProgressionScroll_areaWrapper_b1',
                                            null == c ? void 0 : c.wrapper,
                                        ),
                                        content: b()(
                                            'ProgressionScroll_areaContent_0c',
                                            null == c ? void 0 : c.content,
                                        ),
                                    },
                                },
                                o,
                            ),
                            m,
                            r().createElement($r, { api: e, onDrag: C, classNames: d }),
                        );
                    },
                    Ur = (e, t = 150, a) => {
                        const r = i.O.view.remToPx(e),
                            s = (0, n.useMemo)(
                                () => ({
                                    settings: {
                                        step: { type: 'fixed', value: r, clampedArrowStepTimeout: t },
                                        animationConfig: Object.assign({ frequency: 0.5 }, a),
                                    },
                                }),
                                [a, r, t],
                            );
                        return xr(s);
                    };
                var Vr = a(6112);
                const Gr = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function qr() {
                    return (
                        (qr = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        qr.apply(null, arguments)
                    );
                }
                const jr = (0, n.forwardRef)(function (e, t) {
                        let a = e.src,
                            s = e.className,
                            o = e.autoplay,
                            u = void 0 !== o && o,
                            l = e.style,
                            c = e.loop,
                            d = void 0 !== c && c,
                            m = e.isPrebufferKeyframes,
                            _ = e.keyframesNameConfig,
                            g = e.onClick,
                            E = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        a[n] = e[n];
                                    }
                                return a;
                            })(e, Gr);
                        const p = t,
                            v = (0, n.useRef)(null);
                        return (
                            wr(() =>
                                i.O.view.events.onDisplayChanged((e, t) => {
                                    var a, n;
                                    (t === Vr.W.hidden && (null == (a = v.current) || a.pause()),
                                        t === Vr.W.shown && (null == (n = v.current) || n.play()));
                                }),
                            ),
                            (0, n.useEffect)(
                                () =>
                                    Xe(() => {
                                        const e = v.current;
                                        if (!p || !e || !m)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const t = e.cohGetKeyframeTimestamps();
                                        t.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              t.map((t) => {
                                                  null == e || e.cohPrebufferKeyframe(t);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [m, p],
                            ),
                            (0, n.useEffect)(() => {
                                if (p && v.current) {
                                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: O },
                                        t = () => {
                                            let t = 0;
                                            const a = (function (a) {
                                                    let n = 0;
                                                    return [
                                                        function a() {
                                                            ((() => {
                                                                if (v.current) {
                                                                    const a = v.current,
                                                                        n = a.currentTime,
                                                                        r = a.duration;
                                                                    if (
                                                                        (t !== n &&
                                                                            (e.changeTimeHandlers.forEach((e) =>
                                                                                e({ currentTime: n, duration: r }),
                                                                            ),
                                                                            (t = n)),
                                                                        v.current.paused || !p || !m)
                                                                    )
                                                                        return;
                                                                    const s = v.current.cohGetKeyframeTimestamps();
                                                                    s.forEach((t, a) => {
                                                                        n > s[a] - 0.02 &&
                                                                            n < s[a] &&
                                                                            e.changeKeyframeHandlers.forEach((e) => {
                                                                                const n = Object.keys(
                                                                                    null != _ ? _ : {},
                                                                                )[a];
                                                                                return e({
                                                                                    time: t,
                                                                                    name: `${_ ? n : `Point_${a}`}`,
                                                                                });
                                                                            });
                                                                    });
                                                                }
                                                            })(),
                                                                (n = requestAnimationFrame(a)));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(n);
                                                        },
                                                    ];
                                                })(),
                                                n = a[0],
                                                r = a[1];
                                            return (n(), r);
                                        };
                                    e.changeTimeLoop = t();
                                    const a = (t) => (
                                            e.changeTimeHandlers.push(t),
                                            () => {
                                                const a = e.changeTimeHandlers,
                                                    n = a.indexOf(t);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : a.splice(n, 1);
                                            }
                                        ),
                                        n = (t) => (
                                            e.changeKeyframeHandlers.push(t),
                                            () => {
                                                const a = e.changeKeyframeHandlers,
                                                    n = a.indexOf(t);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : a.splice(n, 1);
                                            }
                                        ),
                                        r = () => {
                                            var e;
                                            return null == (e = v.current) ? void 0 : e.currentTime;
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = v.current) ? void 0 : e.duration;
                                        },
                                        i = (e) => {
                                            v.current && (v.current.currentTime = wt(0, v.current.duration, e));
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = v.current) ? void 0 : e.play();
                                        },
                                        u = () => {
                                            var e;
                                            return null == (e = v.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            (u(), i(0));
                                        },
                                        c = () => {
                                            var e, t;
                                            return null !=
                                                (e = null == (t = v.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        d = (e) => {
                                            (i(e), o());
                                        },
                                        g = (e) => {
                                            (i(e), u());
                                        },
                                        E = () => {
                                            ((e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop());
                                        },
                                        h = (e, t) => {
                                            var a;
                                            return (
                                                null == (a = v.current) || a.addEventListener(e, t),
                                                () => {
                                                    var a;
                                                    return null == (a = v.current)
                                                        ? void 0
                                                        : a.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        b = (e, t) => {
                                            var a;
                                            return (
                                                null == (a = v.current) || a.removeEventListener(e, t),
                                                () => {
                                                    var a;
                                                    return null == (a = v.current)
                                                        ? void 0
                                                        : a.removeEventListener(e, t);
                                                }
                                            );
                                        };
                                    return (
                                        (p.current = {
                                            on: h,
                                            off: b,
                                            play: o,
                                            pause: u,
                                            stop: l,
                                            cleanup: E,
                                            getCurrentTime: r,
                                            getDuration: s,
                                            getCachedKeyframes: c,
                                            goToAndPlay: d,
                                            goToAndStop: g,
                                            setCurrentTime: i,
                                            domRef: v.current,
                                            onChangeTime: a,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            (E(), (p.current = null));
                                        }
                                    );
                                }
                            }, [_, p, m]),
                            (0, n.useEffect)(() => {
                                v.current && u && v.current.play();
                            }, [u, d]),
                            (0, n.useEffect)(() => {
                                if (v.current)
                                    return () => {
                                        v.current && v.current.pause();
                                    };
                            }, []),
                            r().createElement(
                                'video',
                                qr({ src: a, className: s, style: l, loop: d, ref: v, onClick: g }, E),
                            )
                        );
                    }),
                    Qr = (0, n.memo)(jr),
                    Yr = 'DivineGlow_glow_3e',
                    Xr = ({ className: e, classNames: t, animated: a = !0 }) =>
                        r().createElement(
                            'div',
                            { className: b()('DivineGlow_base_ef', e) },
                            ((e) => !!i.O.client.graphicsQuality.isHigh() && e)(a)
                                ? r().createElement(Qr, {
                                      className: b()(Yr, null == t ? void 0 : t.glow),
                                      src: String(R.videos.comp7.divine_glow()),
                                      autoplay: !0,
                                      loop: !0,
                                  })
                                : r().createElement('div', {
                                      className: b()(Yr, 'DivineGlow_glow__bg_1e', null == t ? void 0 : t.glow),
                                  }),
                        ),
                    Kr = ({ rank: e, from: t, topPercentage: a, className: n }) =>
                        r().createElement(
                            'div',
                            { className: b()('RankInfo_base_df', n) },
                            r().createElement('div', { className: 'RankInfo_highlight_04' }),
                            r().createElement(Pn, {
                                text: String(R.strings.comp7_ext.rankInfo.current.$dyn(ga(e))),
                                binding: { topPercentage: a, fromScore: t },
                                classMix: 'RankInfo_formattedText_17',
                            }),
                        ),
                    Zr = () => r().createElement('div', { className: 'RankItemDivider_base_7a' }),
                    Jr = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let es, ts;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(es || (es = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(ts || (ts = {})));
                const as = ({ size: e = es.Default }) => {
                        const t = b()(Jr.background, Jr[`background__${e}`]);
                        return r().createElement('div', { className: t });
                    },
                    ns = (e, t) => {
                        let a;
                        const n = setTimeout(() => {
                            a = e();
                        }, t);
                        return () => {
                            ('function' == typeof a && a(), clearTimeout(n));
                        };
                    };
                let rs, ss;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(rs || (rs = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(ss || (ss = {})));
                const is = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    os = ({ size: e }) => {
                        const t = b()(is.base, is[`base__${e}`]);
                        return r().createElement('div', { className: t });
                    },
                    us = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: s,
                            size: i,
                            to: o,
                            onEndAnimation: u,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < s,
                                d = (0, n.useState)(ss.Idle),
                                m = d[0],
                                _ = d[1],
                                g = m === ss.In,
                                E = m === ss.End,
                                p = m === ss.Idle,
                                v = (0, n.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, n.useEffect)(() => {
                                if (p && !a)
                                    return ns(() => {
                                        v(ss.In);
                                    }, t);
                            }, [v, a, p, t]),
                                (0, n.useEffect)(() => {
                                    if (g)
                                        return ns(() => {
                                            (u && u(), v(ss.End));
                                        }, e + t);
                                }, [v, g, u, t, e]));
                            const h = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                b = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                f = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(s - o)}%`, left: `${c ? o : s}%` }),
                                    [s, c, o],
                                );
                            return E
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: f },
                                      r().createElement(
                                          'div',
                                          { style: p ? h : b, className: 'ProgressBarDeltaSimple_delta_99' },
                                          r().createElement(os, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    ls = {
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
                    cs = (0, n.memo)(
                        ({ size: e, lineRef: t, disabled: a, baseStyles: n, isComplete: s, withoutBounce: i }) => {
                            const o = b()(
                                    ls.base,
                                    ls[`base__${e}`],
                                    a && ls.base__disabled,
                                    s && ls.base__finished,
                                    i && ls.base__withoutBounce,
                                ),
                                u = !a && !s;
                            return r().createElement(
                                'div',
                                { className: o, style: n, ref: t },
                                r().createElement('div', { className: ls.pattern }),
                                r().createElement('div', { className: ls.gradient }),
                                u && r().createElement(os, { size: e }),
                            );
                        },
                    ),
                    ds = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: s,
                            disabled: i,
                            isComplete: o,
                            animationSettings: u,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${u.line.duration}ms`,
                                    transitionDelay: `${u.line.delay}ms`,
                                }),
                                [u.line.delay, u.line.duration, e],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(cs, {
                                    size: t,
                                    lineRef: s,
                                    disabled: i,
                                    isComplete: o,
                                    baseStyles: d,
                                }),
                                a >= 0 &&
                                    r().createElement(us, {
                                        transitionDuration: u.delta.duration,
                                        transitionDelay: u.delta.delay,
                                        freezed: u.freezed,
                                        from: a,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    ms = (e) => (e ? { left: 0 } : { right: 0 }),
                    _s = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    gs = (e) => ({ transitionDuration: `${e}ms` }),
                    Es = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: s,
                            size: i,
                            to: o,
                            onEndAnimation: u,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const d = o < s,
                                m = (0, n.useState)(rs.Idle),
                                _ = m[0],
                                g = m[1],
                                E = _ === rs.End,
                                p = _ === rs.Idle,
                                v = _ === rs.Grow,
                                h = _ === rs.Shrink,
                                f = (0, n.useCallback)(
                                    (e) => {
                                        (g(e), l && l(e));
                                    },
                                    [l],
                                ),
                                C = (0, n.useCallback)(
                                    (e, t) =>
                                        ns(() => {
                                            f(e);
                                        }, t),
                                    [f],
                                );
                            (0, n.useEffect)(() => {
                                if (!a)
                                    return p
                                        ? C(rs.Grow, t)
                                        : v
                                          ? C(rs.Shrink, e)
                                          : h
                                            ? C(rs.End, e)
                                            : void (E && u && u());
                            }, [C, a, E, v, p, h, u, t, e]);
                            const A = (0, n.useMemo)(() => Object.assign({ width: '100%' }, gs(e), ms(d)), [d, e]),
                                D = (0, n.useMemo)(() => Object.assign({ width: '0%' }, gs(e), ms(d)), [d, e]),
                                F = (0, n.useMemo)(() => Object.assign({ width: '0%' }, _s(d, s), gs(e)), [s, d, e]),
                                w = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - s)}%` }, _s(d, s), gs(e)),
                                    [s, d, o, e],
                                );
                            if (E) return null;
                            const B = b()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                d && 0 === o && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return r().createElement(
                                'div',
                                { style: p ? F : w, className: B },
                                r().createElement(
                                    'div',
                                    { style: h ? D : A, className: 'ProgressBarDeltaGrow_glow_68' },
                                    r().createElement(os, { size: i }),
                                ),
                            );
                        },
                    ),
                    ps = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: s,
                            disabled: i,
                            isComplete: o,
                            animationSettings: u,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < a,
                                m = (0, n.useState)(!1),
                                _ = m[0],
                                g = m[1],
                                E = (0, n.useCallback)(
                                    (e) => {
                                        (e === rs.Shrink && g(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                p = (0, n.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                                v = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${u.line.duration}ms` }),
                                    [u.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(cs, {
                                    size: t,
                                    lineRef: s,
                                    disabled: i,
                                    isComplete: o,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: _ ? v : p,
                                }),
                                a >= 0 &&
                                    r().createElement(Es, {
                                        transitionDuration: u.delta.duration,
                                        transitionDelay: u.delta.delay,
                                        onChangeAnimationState: E,
                                        freezed: u.freezed,
                                        onEndAnimation: l,
                                        from: a,
                                        size: t,
                                        to: e,
                                        className: u.delta.className,
                                    }),
                            );
                        },
                    ),
                    vs = ['onComplete', 'onEndAnimation'];
                function hs() {
                    return (
                        (hs = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        hs.apply(null, arguments)
                    );
                }
                const bs = (0, n.memo)((e) => {
                        let t = e.onComplete,
                            a = e.onEndAnimation,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        a[n] = e[n];
                                    }
                                return a;
                            })(e, vs);
                        const i = (0, n.useState)(!1),
                            o = i[0],
                            u = i[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === s.to;
                                (e !== o && u(e), e && t && t(), a && a());
                            }, [o, t, a, s.to]);
                        switch (s.animationSettings.type) {
                            case ts.Simple:
                                return r().createElement(ds, hs({}, s, { onEndAnimation: l, isComplete: o }));
                            case ts.Growing:
                                return r().createElement(ps, hs({}, s, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    fs = ({ size: e, value: t, lineRef: a, disabled: s, onComplete: i }) => {
                        const o = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            u = 100 === t;
                        return (
                            (0, n.useEffect)(() => {
                                u && i && i();
                            }, [u, i]),
                            r().createElement(cs, { size: e, disabled: s, baseStyles: o, isComplete: u, lineRef: a })
                        );
                    },
                    Cs = ['onEndAnimation'];
                function As() {
                    return (
                        (As = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        As.apply(null, arguments)
                    );
                }
                const Ds = (0, n.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    a[n] = e[n];
                                }
                            return a;
                        })(e, Cs);
                    const s = (0, n.useRef)({}),
                        i = (0, n.useCallback)(() => {
                            ((s.current.from = void 0), t && t());
                        }, [t]),
                        o = 'number' == typeof s.current.from ? s.current.from : a.from;
                    return (
                        (s.current.from = o),
                        r().createElement(
                            bs,
                            As({}, a, {
                                onEndAnimation: i,
                                key: `${o}-${a.to}-${null == a ? void 0 : a.additionalKey}`,
                                from: o,
                            }),
                        )
                    );
                });
                function Fs() {
                    return (
                        (Fs = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        Fs.apply(null, arguments)
                    );
                }
                const ws = (0, n.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: a,
                            disabled: n,
                            deltaFrom: s,
                            additionalKey: i,
                            animationSettings: o,
                            onEndAnimation: u,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (s === t)
                                return r().createElement(fs, {
                                    key: `${s}-${t}-${i}`,
                                    size: e,
                                    value: t,
                                    lineRef: a,
                                    disabled: n,
                                    onComplete: c,
                                });
                            const d = {
                                from: s,
                                to: t,
                                size: e,
                                additionalKey: i,
                                lineRef: a,
                                disabled: n,
                                animationSettings: o,
                                onComplete: c,
                                onEndAnimation: u,
                                onChangeAnimationState: l,
                            };
                            return o.withStack
                                ? r().createElement(Ds, d)
                                : r().createElement(bs, Fs({ key: `${s}-${t}-${i}` }, d));
                        },
                    ),
                    Bs = (e) => ({
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
                    Ss = (e, t, a) => ('number' == typeof a ? (wt(0, t, a) / t) * 100 : e),
                    ys = {
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
                    Ns = {
                        freezed: !1,
                        withStack: !1,
                        type: ts.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Ps = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = ys,
                            size: a = es.Default,
                            animationSettings: s = Ns,
                            disabled: i = !1,
                            withoutBackground: o = !1,
                            value: u,
                            deltaFrom: l,
                            additionalKey: c,
                            lineRef: d,
                            onChangeAnimationState: m,
                            onEndAnimation: _,
                            onComplete: g,
                        }) => {
                            const E = ((e, t, a) =>
                                (0, n.useMemo)(() => {
                                    const n = (wt(0, t, e) / t) * 100;
                                    return { value: n, deltaFrom: Ss(n, t, a) };
                                }, [a, t, e]))(u, e, l);
                            return r().createElement(
                                'div',
                                { className: b()(Jr.base, Jr[`base__${a}`]), style: Bs(t) },
                                !o && r().createElement(as, { size: a }),
                                r().createElement(ws, {
                                    size: a,
                                    lineRef: d,
                                    disabled: i,
                                    value: E.value,
                                    deltaFrom: E.deltaFrom,
                                    additionalKey: c,
                                    animationSettings: s,
                                    onEndAnimation: _,
                                    onChangeAnimationState: m,
                                    onComplete: g,
                                }),
                            );
                        },
                    ),
                    ks = ({ rank: e, division: t, from: a, to: n, className: s, children: i }) =>
                        r().createElement(
                            K,
                            {
                                contentId: R.views.comp7.lobby.tooltips.DivisionTooltip('resId'),
                                args: { rank: e, division: t, from: a, to: n },
                            },
                            r().createElement('div', { className: s }, i),
                        ),
                    xs = 'RankProgressDivisions_bottomLine_1e',
                    Rs = (0, De.Pi)(({ itemIndex: e, rank: t, from: a, step: n }) => {
                        const s = Er().model.computes.divisions(e);
                        return r().createElement(
                            'div',
                            { className: 'RankProgressDivisions_base_c4' },
                            Me(s, (e, s) => {
                                const i = e.state === or.Current;
                                return r().createElement(
                                    ks,
                                    {
                                        key: s,
                                        rank: t,
                                        division: e.name,
                                        from: a + n * s,
                                        to: a + n * (s + 1),
                                        className: b()(
                                            'RankProgressDivisions_divisionItem_e9',
                                            i && 'RankProgressDivisions_divisionItem__current_62',
                                        ),
                                    },
                                    i &&
                                        r().createElement(
                                            'div',
                                            { className: 'RankProgressDivisions_highlightContainer_e1' },
                                            r().createElement('div', {
                                                className: 'RankProgressDivisions_radialBack_69',
                                            }),
                                            r().createElement('div', {
                                                className: 'RankProgressDivisions_mainBack_02',
                                            }),
                                            r().createElement('div', {
                                                className: b()(xs, 'RankProgressDivisions_bottomLine__first_32'),
                                            }),
                                            r().createElement('div', {
                                                className: b()(xs, 'RankProgressDivisions_bottomLine__second_2e'),
                                            }),
                                            r().createElement('div', {
                                                className: b()(xs, 'RankProgressDivisions_bottomLine__third_45'),
                                            }),
                                        ),
                                    r().createElement(
                                        'div',
                                        { className: 'RankProgressDivisions_divisionText_ae' },
                                        i &&
                                            r().createElement(
                                                'div',
                                                { className: 'RankProgressDivisions_note_65' },
                                                R.strings.comp7_ext.division.note(),
                                            ),
                                        da(e.name),
                                    ),
                                );
                            }),
                        );
                    }),
                    Is = {
                        '--pointLineWidth': '1rem',
                        base: 'RankProgressPoints_base_ee',
                        point: 'RankProgressPoints_point_f9',
                        base__top: 'RankProgressPoints_base__top_38',
                        base__bottom: 'RankProgressPoints_base__bottom_78',
                        pointLine: 'RankProgressPoints_pointLine_0d',
                        pointLine__extended: 'RankProgressPoints_pointLine__extended_77',
                        pointValue: 'RankProgressPoints_pointValue_48',
                        pointValue__next: 'RankProgressPoints_pointValue__next_c6',
                    };
                let Ts;
                !(function (e) {
                    ((e.Top = 'top'), (e.Bottom = 'bottom'));
                })(Ts || (Ts = {}));
                const Ls = (e, t) => {
                        const a = t > 0 ? (100 / t) * e + '%' : '0%';
                        return e === t ? { left: a, transform: `translateX(-${Is['--pointLineWidth']})` } : { left: a };
                    },
                    Os = ({ step: e, divisionsCount: t, from: a, currentDivisionIndex: n, direction: s = Ts.Bottom }) =>
                        r().createElement(
                            'div',
                            { className: b()(Is.base, Is[`base__${s}`]) },
                            Kt(t + 1, (s) => {
                                const i = void 0 !== n && s === n + 1,
                                    o = void 0 === a && (s === n || i);
                                return r().createElement(
                                    'div',
                                    { className: Is.point, style: Ls(s, t), key: s },
                                    r().createElement('div', {
                                        className: b()(Is.pointLine, o && Is.pointLine__extended),
                                    }),
                                    void 0 !== a &&
                                        r().createElement(
                                            'div',
                                            { className: b()(Is.pointValue, i && Is.pointValue__next) },
                                            a + e * s,
                                        ),
                                );
                            }),
                        ),
                    Ms = {
                        base: 'RankProgress_base_d7',
                        base__hidden: 'RankProgress_base__hidden_dd',
                        base__inactive: 'RankProgress_base__inactive_d9',
                        base__active: 'RankProgress_base__active_50',
                        progressWrapper: 'RankProgress_progressWrapper_e7',
                    },
                    $s = {
                        freezed: !0,
                        withStack: !1,
                        type: ts.Simple,
                        delta: { duration: 0, delay: 0 },
                        line: { duration: 0, delay: 0 },
                    },
                    Ws = (0, De.Pi)(({ rank: e, state: t, itemIndex: a, from: n, to: s, progressState: i }) => {
                        const o = Er().model,
                            u = o.root.get().currentScore,
                            l = o.computes.divisionsConfig(a),
                            c = s - n,
                            d = ((e, t, a) => Math.round((t - e) / a))(n, s, l.count);
                        return r().createElement(
                            'div',
                            { className: b()(Ms.base, Ms[`base__${i}`]) },
                            r().createElement(Rs, { itemIndex: a, rank: e, from: n, step: d }),
                            r().createElement(Os, {
                                step: d,
                                divisionsCount: l.count,
                                direction: Ts.Top,
                                currentDivisionIndex: l.currentDivisionIndex,
                            }),
                            r().createElement(
                                'div',
                                { className: Ms.progressWrapper },
                                t === dr.Current
                                    ? r().createElement(Ps, { maxValue: c, value: u - n, animationSettings: $s })
                                    : r().createElement(Ps, { maxValue: c, value: u < n ? 0 : c, disabled: u < n }),
                            ),
                            r().createElement(Os, {
                                step: d,
                                divisionsCount: l.count,
                                from: n,
                                currentDivisionIndex: l.currentDivisionIndex,
                            }),
                        );
                    }),
                    Hs = ({ text: e, binding: t, className: a }) => {
                        const n = ((e) =>
                            'number' == typeof (null == e ? void 0 : e.pointsCount)
                                ? Object.assign({}, e, { pointsCount: r().createElement(j, { value: e.pointsCount }) })
                                : e)(t);
                        return r().createElement(Pn, {
                            text: e,
                            binding: n,
                            classMix: b()('RankStatusDescription_base_00', a),
                        });
                    },
                    zs = R.strings.comp7_ext.rankItemStatus.previous,
                    Us = ({ rank: e, rankState: t, itemIndex: a, from: n, to: s, progressState: i }) => {
                        switch (e) {
                            case we.First:
                            case we.Second:
                            case we.Third:
                            case we.Fourth:
                                return r().createElement(Ws, {
                                    rank: e,
                                    state: t,
                                    itemIndex: a,
                                    from: n,
                                    to: s,
                                    progressState: i,
                                });
                            case we.Fifth:
                                return r().createElement(
                                    'div',
                                    { className: 'AchievedRankStatus_base_48' },
                                    r().createElement(Hs, { text: Ca(zs.description, e), binding: { fromScore: n } }),
                                );
                            default:
                                return (
                                    console.warn(`Status for rank '${e}' was not mapped to any react component.`),
                                    null
                                );
                        }
                    },
                    Vs = ({ timestamp: e, isLastBestUserPointsValueLoading: t = !1 }) =>
                        r().createElement(
                            'div',
                            { className: 'LastUpdate_base_4d' },
                            t
                                ? r().createElement(wn, {
                                      text: R.strings.comp7_ext.lastUpdateNote.lastBestUserPoints.update(),
                                      classMix: 'LastUpdate_dataUpdate_f3',
                                  })
                                : r().createElement(qn, { timestamp: e }),
                        ),
                    Gs = (e, t) => e > 0 || t;
                let qs;
                !(function (e) {
                    ((e.Active = 'active'), (e.Inactive = 'inactive'), (e.Hidden = 'hidden'));
                })(qs || (qs = {}));
                const js = R.strings.comp7_ext.rankItemStatus.current,
                    Qs = ({
                        rank: e,
                        rankState: t,
                        itemIndex: a,
                        from: s,
                        to: o,
                        progressState: u,
                        topPercentage: l,
                        pointsCount: c,
                        isLastBestUserPointsValueLoading: d,
                        timestamp: m,
                    }) => {
                        const _ = { topPercentage: l, pointsCount: c };
                        return (
                            (0, n.useEffect)(() => {
                                u === qs.Active && i.O.sound.play.sound(R.sounds.comp_7_progression_rank_active());
                            }, [u]),
                            r().createElement(
                                'div',
                                { className: 'CurrentRankStatus_base_99' },
                                (() => {
                                    switch (e) {
                                        case we.First:
                                        case we.Second:
                                        case we.Third:
                                        case we.Fourth:
                                            return r().createElement(Ws, {
                                                rank: e,
                                                state: t,
                                                itemIndex: a,
                                                from: s,
                                                to: o,
                                                progressState: u,
                                            });
                                        case we.Fifth:
                                        case we.Sixth:
                                            return r().createElement(
                                                r().Fragment,
                                                null,
                                                r().createElement(Hs, {
                                                    text: Gs(c, d)
                                                        ? Ca(js.extendedDescription, e)
                                                        : Ca(js.description, e),
                                                    binding: _,
                                                }),
                                                r().createElement(Vs, {
                                                    timestamp: m,
                                                    isLastBestUserPointsValueLoading: d,
                                                }),
                                            );
                                        default:
                                            return (
                                                console.warn(
                                                    `Status for rank '${e}' was not mapped to any react component.`,
                                                ),
                                                null
                                            );
                                    }
                                })(),
                            )
                        );
                    },
                    Ys = R.strings.comp7_ext.rankItemStatus.future,
                    Xs = [we.Sixth],
                    Ks = ({
                        rank: e,
                        topPercentage: t,
                        from: a,
                        to: s,
                        pointsCount: i,
                        isLastBestUserPointsValueLoading: o,
                        timestamp: u,
                    }) => {
                        const l = (0, n.useMemo)(
                                () =>
                                    e === we.Sixth
                                        ? { topPercentage: t, pointsCount: i }
                                        : e === we.Fifth
                                          ? { fromScore: a }
                                          : { fromScore: a, toScore: s },
                                [t, i, a, s, e],
                            ),
                            c = Xs.includes(e) && Gs(i, o);
                        return r().createElement(
                            'div',
                            { className: 'FutureRankStatus_base_c3' },
                            r().createElement('div', { className: 'FutureRankStatus_lock_c0' }),
                            r().createElement(Hs, {
                                text: Ca(c ? Ys.extendedDescription : Ys.description, e),
                                binding: l,
                            }),
                            c && r().createElement(Vs, { timestamp: u, isLastBestUserPointsValueLoading: o }),
                        );
                    },
                    Zs = ({
                        rankState: e,
                        rank: t,
                        itemIndex: a,
                        from: n,
                        to: s,
                        progressState: i,
                        pointsCount: o,
                        isLastBestUserPointsValueLoading: u,
                        topPercentage: l,
                        timestamp: c,
                    }) => {
                        switch (e) {
                            case dr.Previous:
                                return r().createElement(Us, {
                                    rank: t,
                                    rankState: e,
                                    itemIndex: a,
                                    from: n,
                                    to: s,
                                    progressState: i,
                                });
                            case dr.Current:
                                return r().createElement(Qs, {
                                    rank: t,
                                    rankState: e,
                                    itemIndex: a,
                                    from: n,
                                    to: s,
                                    progressState: i,
                                    pointsCount: o,
                                    isLastBestUserPointsValueLoading: u,
                                    topPercentage: l,
                                    timestamp: c,
                                });
                            case dr.Future:
                                return r().createElement(Ks, {
                                    rank: t,
                                    topPercentage: l,
                                    from: n,
                                    to: s,
                                    pointsCount: o,
                                    isLastBestUserPointsValueLoading: u,
                                    timestamp: c,
                                });
                            default:
                                return (
                                    console.error(`Unreachable code for state '${e}' in RankStatusResolver.`),
                                    null
                                );
                        }
                    };
                let Js;
                !(function (e) {
                    ((e.Progress = 'progress'), (e.Text = 'text'));
                })(Js || (Js = {}));
                const ei = {
                        '--pageContentWidth': '78vw',
                        base: 'RankItem_base_6a',
                        rankEmblemContainer: 'RankItem_rankEmblemContainer_93',
                        glowContainer: 'RankItem_glowContainer_86',
                        rankEmblemContainer__current: 'RankItem_rankEmblemContainer__current_7a',
                        glow: 'RankItem_glow_6a',
                        rankEmblemContainer__future: 'RankItem_rankEmblemContainer__future_cb',
                        rankEmblem: 'RankItem_rankEmblem_e1',
                        rankDescription: 'RankItem_rankDescription_ea',
                        fadeOut: 'RankItem_fadeOut_96',
                        rankDescription__text: 'RankItem_rankDescription__text_65',
                        rankDescription__progress: 'RankItem_rankDescription__progress_8b',
                        rankDescription__viewed: 'RankItem_rankDescription__viewed_52',
                        fadeIn: 'RankItem_fadeIn_3c',
                        rankInfo: 'RankItem_rankInfo_9c',
                        dividerContainer: 'RankItem_dividerContainer_23',
                        fadeInThreeQuarters: 'RankItem_fadeInThreeQuarters_3a',
                        fadeInHalf: 'RankItem_fadeInHalf_5d',
                        fadeInWithScale: 'RankItem_fadeInWithScale_3a',
                        slideUp: 'RankItem_slideUp_34',
                        scale: 'RankItem_scale_49',
                        raysAppearance: 'RankItem_raysAppearance_f9',
                        rotate: 'RankItem_rotate_7d',
                        'reverse-rotate': 'RankItem_reverse-rotate_ef',
                        glowAppearance: 'RankItem_glowAppearance_25',
                        highlightAppearance: 'RankItem_highlightAppearance_63',
                        blink: 'RankItem_blink_9d',
                        slideUpIn: 'RankItem_slideUpIn_20',
                    },
                    ti = (0, De.Pi)(({ itemIndex: e, isViewed: t, hasDivider: a = !0 }) => {
                        const n = Er().model,
                            s = G().model,
                            i = n.root.get(),
                            o = i.topPercentage,
                            u = i.lastBestUserPointsValue,
                            l = i.leaderboardUpdateTimestamp,
                            c = i.isLastBestUserPointsValueLoading,
                            d = w().mediaSize,
                            m = n.computes.item(e),
                            _ = m.rank,
                            g = m.from,
                            E = m.to,
                            p = n.computes.divisionsConfig(e),
                            v = n.computes.rankSettings(e),
                            h = v.state,
                            f = v.division,
                            C = v.hasInfo,
                            D = ((e) => {
                                switch (!0) {
                                    case e >= A.ExtraLarge:
                                        return va.x420;
                                    case e >= A.Large:
                                        return va.x320;
                                    case e >= A.Medium:
                                        return va.x260;
                                    default:
                                        return va.x200;
                                }
                            })(d),
                            F = ((e, t) => (t ? (e === dr.Current ? qs.Active : qs.Inactive) : qs.Hidden))(h, t),
                            B = ((e, t) => {
                                const a = pa(t);
                                switch (e) {
                                    case dr.Previous:
                                    case dr.Current:
                                        return a ? Js.Progress : Js.Text;
                                    default:
                                        return Js.Text;
                                }
                            })(h, _);
                        return r().createElement(
                            'div',
                            { className: ei.base },
                            r().createElement(
                                hn,
                                {
                                    rank: _,
                                    from: g,
                                    to: E,
                                    topPercentage: o,
                                    divisions: p.list,
                                    className: b()(ei.rankEmblemContainer, ei[`rankEmblemContainer__${h}`]),
                                },
                                r().createElement(Xr, { className: ei.glowContainer, classNames: { glow: ei.glow } }),
                                r().createElement(ba, {
                                    seasonName: s.season.name.get(),
                                    size: D,
                                    rank: _,
                                    division: f,
                                    className: ei.rankEmblem,
                                }),
                            ),
                            r().createElement(
                                'div',
                                {
                                    className: b()(
                                        ei.rankDescription,
                                        ei[`rankDescription__${B}`],
                                        t && ei.rankDescription__viewed,
                                    ),
                                },
                                C &&
                                    r().createElement(
                                        'div',
                                        { className: ei.rankInfo },
                                        r().createElement(Kr, { rank: _, from: g, topPercentage: o }),
                                    ),
                                r().createElement(Zs, {
                                    rankState: h,
                                    rank: _,
                                    itemIndex: e,
                                    from: g,
                                    to: E,
                                    progressState: F,
                                    pointsCount: u,
                                    isLastBestUserPointsValueLoading: c,
                                    topPercentage: o,
                                    timestamp: l,
                                }),
                            ),
                            a &&
                                r().createElement(
                                    'div',
                                    { className: ei.dividerContainer, style: { '--emblemSize': `${D}rem` } },
                                    r().createElement(Zr, null),
                                ),
                        );
                    }),
                    ai = (0, De.Pi)(({ itemIndex: e, itemWidth: t, isViewed: a, onMouseDown: n, hasDivider: s }) => {
                        const i = Er().model.computes.item(e);
                        return r().createElement(
                            'div',
                            {
                                className: 'RankItemContainer_base_02',
                                style: { '--itemWidth': `${t}rem` },
                                onMouseDown: n,
                            },
                            r().createElement(
                                'div',
                                {
                                    className: b()(
                                        'RankItemContainer_title_94',
                                        a && 'RankItemContainer_title__active_0d',
                                    ),
                                },
                                Da(i.rank),
                            ),
                            r().createElement(ti, { itemIndex: e, isViewed: a, hasDivider: s }),
                        );
                    }),
                    ni = {
                        base: 'Progression_areaContainer_8d',
                        wrapper: 'Progression_areaWrapper_40',
                        content: 'Progression_areaContent_a5',
                    },
                    ri = { base: 'Progression_bar_a0' },
                    si = (0, De.Pi)(({ staticContent: e, className: t }) => {
                        const a = Er().model,
                            s = a.root.get().currentItemIndex,
                            o = a.computes.itemsLength(),
                            u =
                                (E = w().mediaSize) >= A.ExtraLarge
                                    ? 640
                                    : E >= A.Large
                                      ? 500
                                      : E >= A.Medium
                                        ? 440
                                        : 400,
                            l = kr(u),
                            c = Ur(u),
                            d = (0, n.useState)(s),
                            m = d[0],
                            _ = d[1],
                            g = (0, n.useCallback)(
                                (e) => () => {
                                    (i.O.sound.play.click(), _(e));
                                },
                                [],
                            );
                        var E;
                        return (
                            (0, n.useLayoutEffect)(() => {
                                c.scrollPosition.start({ scrollPosition: i.O.view.remToPx(s * u), immediate: !0 });
                            }, []),
                            (0, n.useLayoutEffect)(() => {
                                _(s);
                            }, [s]),
                            r().createElement(
                                zr,
                                {
                                    api: c,
                                    stuckIndex: m,
                                    itemWidth: u,
                                    itemsOffset: l,
                                    staticContent: e,
                                    onStick: _,
                                    className: b()('Progression_base_5d', t),
                                    areaClassNames: ni,
                                    barClassNames: ri,
                                },
                                Kt(o, (e) =>
                                    r().createElement(ai, {
                                        key: e,
                                        itemIndex: e,
                                        isViewed: m === e,
                                        hasDivider: e < o - 1,
                                        itemWidth: u,
                                        onMouseDown: g(e),
                                    }),
                                ),
                            )
                        );
                    }),
                    ii = R.strings.comp7_ext.qualification,
                    oi = { hasHtmlContent: !0 },
                    ui = ({ maxBattlesCount: e, children: t }) =>
                        r().createElement(
                            te,
                            {
                                header: ii.conditionTooltip.header(),
                                body: ta(ii.conditionTooltip.body(e), { maxBattlesCount: e }),
                                args: oi,
                            },
                            r().createElement('div', null, t),
                        ),
                    li = ({ size: e, seasonName: t, className: a }) => {
                        const n = R.images.comp7.gui.maps.icons.ranks.$dyn(t).$num(e);
                        return r().createElement('div', {
                            className: b()(ha, a),
                            style: { backgroundImage: `url(${n.$dyn('qualification')})`, '--imageSize': `${e}rem` },
                        });
                    },
                    ci = ({ battlesCount: e, maxBattlesCount: t, className: a }) =>
                        r().createElement(wn, {
                            text: R.strings.comp7_ext.qualification.counter(),
                            binding: {
                                battlesCount: r().createElement(
                                    'div',
                                    { className: 'BattlesCounter_battlesCount_8f' },
                                    e,
                                ),
                                maxBattlesCount: t,
                            },
                            classMix: b()('BattlesCounter_base_ac', a),
                        }),
                    di = {
                        '--pageContentWidth': '78vw',
                        base: 'QualificationBattleItem_base_fe',
                        base__size_234: 'QualificationBattleItem_base__size_234_69',
                        battleBackground: 'QualificationBattleItem_battleBackground_a7',
                        base__inProgress: 'QualificationBattleItem_base__inProgress_4b',
                        blink: 'QualificationBattleItem_blink_d0',
                        fadeIn: 'QualificationBattleItem_fadeIn_71',
                        fadeInThreeQuarters: 'QualificationBattleItem_fadeInThreeQuarters_70',
                        fadeInHalf: 'QualificationBattleItem_fadeInHalf_9c',
                        fadeOut: 'QualificationBattleItem_fadeOut_74',
                        fadeInWithScale: 'QualificationBattleItem_fadeInWithScale_3a',
                        slideUp: 'QualificationBattleItem_slideUp_9a',
                        scale: 'QualificationBattleItem_scale_b7',
                        raysAppearance: 'QualificationBattleItem_raysAppearance_12',
                        rotate: 'QualificationBattleItem_rotate_e4',
                        'reverse-rotate': 'QualificationBattleItem_reverse-rotate_26',
                        glowAppearance: 'QualificationBattleItem_glowAppearance_d2',
                        highlightAppearance: 'QualificationBattleItem_highlightAppearance_36',
                        slideUpIn: 'QualificationBattleItem_slideUpIn_b4',
                    },
                    mi = { notPlayed: 'notFinished', inProgress: 'notFinished', victory: 'victory', defeat: 'defeat' },
                    _i = { x173: 173, x234: 234 },
                    gi = ({ className: e, state: t, size: a = 'x173' }) => {
                        const n = _i[a],
                            s = R.images.comp7.gui.maps.icons.icons.$dyn(`battle_${mi[t]}`);
                        return r().createElement(
                            'div',
                            { className: b()(di.base, e, di[`base__${t}`], di[`base__size_${n}`]) },
                            r().createElement('div', {
                                className: di.battleBackground,
                                style: { backgroundImage: `url(${s})`, '--imageSize': `${n}rem` },
                            }),
                        );
                    },
                    Ei = (0, De.Pi)(({ index: e, className: t }) => {
                        const a = Er().model,
                            n = w().mediaSize,
                            s = a.computes.qualificationBattle(e);
                        return r().createElement(gi, {
                            state: s.state,
                            className: t,
                            key: e,
                            size: n >= A.ExtraLarge ? 'x234' : 'x173',
                        });
                    }),
                    pi = (0, De.Pi)(({ className: e }) => {
                        const t = Er().model;
                        return r().createElement(
                            'div',
                            { className: b()('BattlesProgression_base_e6', e) },
                            Kt(t.computes.qualificationBattlesLength(), (e) =>
                                r().createElement(Ei, { index: e, className: 'BattlesProgression_item_30', key: e }),
                            ),
                        );
                    }),
                    vi = (e) => {
                        switch (!0) {
                            case e >= A.ExtraLarge:
                                return va.x600;
                            case e >= A.Large:
                                return va.x420;
                            case e >= A.Medium:
                                return va.x260;
                            default:
                                return va.x200;
                        }
                    },
                    hi = R.strings.comp7_ext.qualification,
                    bi = { base: 'Qualification_rewardsButton_6e', icon: 'Qualification_buttonIcon_8a' },
                    fi = (0, De.Pi)(({ className: e }) => {
                        const t = Er(),
                            a = t.model,
                            n = t.controls,
                            s = G().model,
                            i = w().mediaSize,
                            o = a.qualificationModel.battlesCount.get(),
                            u = a.qualificationModel.maxBattlesCount.get(),
                            l = a.qualificationModel.isRatingCalculation.get(),
                            c = a.isParallaxPreloaded.get(),
                            d = (0, Ke.useSpring)({
                                from: { opacity: 0 },
                                to: Ce() ? { opacity: c ? 1 : 0 } : { opacity: 1 },
                                delay: 300,
                                config: { duration: 300 },
                            });
                        return Ce() && !c
                            ? r().createElement(
                                  'div',
                                  { className: 'Qualification_waiting_73' },
                                  r().createElement(mt, null),
                              )
                            : r().createElement(
                                  Ke.animated.div,
                                  { style: d, className: b()('Qualification_base_6b', e) },
                                  r().createElement(
                                      'div',
                                      { className: 'Qualification_content_fc' },
                                      r().createElement(
                                          'div',
                                          { className: 'Qualification_qualificationEmblemContainer_0e' },
                                          r().createElement(Xr, {
                                              className: 'Qualification_glowContainer_a1',
                                              classNames: { glow: 'Qualification_glow_47' },
                                          }),
                                          r().createElement(li, {
                                              size: vi(i),
                                              seasonName: s.season.name.get(),
                                              className: 'Qualification_qualificationEmblem_5a',
                                          }),
                                      ),
                                      l
                                          ? r().createElement(
                                                r().Fragment,
                                                null,
                                                r().createElement(ci, { battlesCount: o, maxBattlesCount: u }),
                                                r().createElement(
                                                    te,
                                                    {
                                                        body: R.strings.comp7_ext.qualification.ratingCalculationTooltip(),
                                                    },
                                                    r().createElement(
                                                        'div',
                                                        null,
                                                        r().createElement(wn, {
                                                            text: hi.ratingCalculationDescription(),
                                                            binding: {
                                                                timerIcon: r().createElement('div', {
                                                                    className: 'Qualification_timerIcon_66',
                                                                }),
                                                            },
                                                            classMix: 'Qualification_ratingCalculationDescription_e2',
                                                        }),
                                                    ),
                                                ),
                                            )
                                          : r().createElement(Pn, {
                                                text: hi.counterWithDescription(),
                                                classMix: 'Qualification_counterDescription_3f',
                                                binding: {
                                                    counter: r().createElement(ci, {
                                                        battlesCount: o,
                                                        maxBattlesCount: u,
                                                    }),
                                                },
                                            }),
                                      r().createElement(pi, { className: 'Qualification_battlesProgression_1d' }),
                                  ),
                                  r().createElement(
                                      'div',
                                      { className: 'Qualification_footer_84' },
                                      r().createElement(
                                          'div',
                                          { className: 'Qualification_conditionContainer_b2' },
                                          r().createElement(Pn, {
                                              text: hi.condition(u),
                                              classMix: 'Qualification_condition_49',
                                              binding: { maxBattlesCount: u },
                                          }),
                                          r().createElement(
                                              ui,
                                              { maxBattlesCount: u },
                                              r().createElement('div', { className: 'Qualification_infoIcon_90' }),
                                          ),
                                      ),
                                      r().createElement(wn, {
                                          text: hi.rewardsDescription(),
                                          classMix: 'Qualification_rewardsDescription_c8',
                                      }),
                                      r().createElement(Ee, {
                                          caption: hi.rewardsButton(),
                                          classNames: bi,
                                          onMouseEnter: () => n.setRewardLayerVisible(!0),
                                          onMouseLeave: () => n.setRewardLayerVisible(!1),
                                          onClick: () => n.goToRankRewardsPage(),
                                          soundHover: 'comp_7_rank_rewards_hover',
                                      }),
                                  ),
                              );
                    }),
                    Ci = 'ProgressionPage_contentWrapper_ae',
                    Ai = 'ProgressionPage_content_9a',
                    Di = R.strings.comp7_ext.page.heading,
                    Fi = (0, De.Pi)(() => {
                        const e = Er().model.qualificationModel.isActive.get(),
                            t = (0, Ke.useSpring)(_t);
                        return r().createElement(
                            'div',
                            { className: 'ProgressionPage_base_c4' },
                            Ce() && e && r().createElement(Dr, { className: 'ProgressionPage_parallaxContainer_b2' }),
                            r().createElement(
                                dt,
                                { className: b()(be, 'ProgressionPage_heading_89') },
                                e ? Di.qualification() : Di.progression(),
                            ),
                            r().createElement(ar, { className: 'ProgressionPage_scheduleSubheading_ce' }),
                            e
                                ? r().createElement('div', { className: Ci }, r().createElement(fi, { className: Ai }))
                                : r().createElement(
                                      Ke.animated.div,
                                      { style: t, className: Ci },
                                      r().createElement(si, {
                                          className: b()(Ai, 'ProgressionPage_content__progression_52'),
                                          staticContent: r().createElement(vr, {
                                              className: 'ProgressionPage_footer_b7',
                                          }),
                                      }),
                                  ),
                        );
                    }),
                    wi = z()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    qualification: e.primitives(['isActive'], 'qualificationModel'),
                                },
                                a = e.array('items'),
                                n = (0, ke.Om)(() => a.get().length),
                                r = (0, ke.Om)(
                                    (e) => {
                                        const t = Te(a.get(), e);
                                        if (!t) throw new Error(`rank rewards item with index ${e} was not found`);
                                        return {
                                            hasRewardsReceived: t.hasRewardsReceived,
                                            rank: t.rank,
                                            from: t.from,
                                            to: t.to,
                                        };
                                    },
                                    { equals: M },
                                ),
                                s = (0, ke.Om)(
                                    (e) => {
                                        const t = Te(a.get(), e);
                                        if (!t) throw new Error(`rank rewards item with index ${e} was not found`);
                                        return Me(t.rewards, (e) => Object.assign({}, e));
                                    },
                                    { equals: M },
                                ),
                                i = (0, ke.Om)(
                                    (e) => {
                                        const t = Te(s(e), 0);
                                        if (!t)
                                            throw new Error(
                                                `rank rewards item with index ${e} has no any main reward at index: 0`,
                                            );
                                        return t;
                                    },
                                    { equals: M },
                                ),
                                o = (0, ke.Om)((e) => [...We(s(e), 1)], { equals: M }),
                                u = (0, ke.Om)((e) => {
                                    const t = Te(a.get(), e);
                                    if (!t) throw new Error(`item with index ${e} was not found`);
                                    const n = Me(t.divisions, (e) => Object.assign({}, e));
                                    return ur(n);
                                }),
                                l = (0, ke.Om)(
                                    (e) => !t.qualification.isActive.get() && e === t.root.get().currentItemIndex,
                                ),
                                c = (0, ke.Om)(
                                    () => {
                                        const e = ze(a.get(), (e) => !e.hasRewardsReceived);
                                        return {
                                            nextNotAchievedItemIndex: null != e ? e : n(),
                                            hasForceScroll: -1 !== t.root.get().initialItemIndex,
                                        };
                                    },
                                    { equals: bt },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    rankRewardsItemsLength: n,
                                    rankRewardsItem: r,
                                    mainReward: i,
                                    additionalRewards: o,
                                    additionalRewardsCount: (0, ke.Om)((e) => o(e).length),
                                    divisionsString: u,
                                    isCurrentRank: l,
                                    scrollingSettings: c,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => {
                            const a = e.createCallback((e, t) => ({ rank: e, index: t }), 'onPreviewOpen');
                            return {
                                goToPreview: (0, $.aD)((e, n) => {
                                    const r = t.computes.rankRewardsItem(e).rank;
                                    a(r, n);
                                }),
                            };
                        },
                    ),
                    Bi = wi[0],
                    Si = wi[1];
                let yi, Ni, Pi, ki, xi, Ri, Ii, Ti;
                function Li() {
                    return (
                        (Li = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        Li.apply(null, arguments)
                    );
                }
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
                })(yi || (yi = {})),
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
                    })(Ni || (Ni = {})),
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
                    })(Pi || (Pi = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(ki || (ki = {})),
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
                    })(xi || (xi = {})),
                    (function (e) {
                        ((e.BATTLE_BOOSTER = 'battleBooster'), (e.LOOT_BOX = 'lootBox'));
                    })(Ri || (Ri = {})),
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
                    })(Ii || (Ii = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(Ti || (Ti = {})));
                const Oi = ({ children: e, tooltipArgs: t, className: a }) => {
                        if (!t) return e;
                        const n = r().createElement('div', { className: a }, e);
                        if (t.header || t.body) return r().createElement(te, t, n);
                        const s = t.contentId;
                        return s ? r().createElement(K, Li({}, t, { contentId: s }), n) : r().createElement(Kn, t, n);
                    },
                    Mi = [
                        yi.Items,
                        yi.Equipment,
                        yi.Xp,
                        yi.XpFactor,
                        yi.Blueprints,
                        yi.BlueprintsAny,
                        yi.Goodies,
                        yi.Berths,
                        yi.Slots,
                        yi.Tokens,
                        yi.CrewSkins,
                        yi.CrewBooks,
                        yi.Customizations,
                        yi.CreditsFactor,
                        yi.TankmenXp,
                        yi.TankmenXpFactor,
                        yi.FreeXpFactor,
                        yi.BattleToken,
                        yi.LootBox,
                        yi.PremiumUniversal,
                        yi.NaturalCover,
                        yi.BpCoin,
                        yi.BattlePassSelectToken,
                        yi.BattlaPassFinalAchievement,
                        yi.BattleBadge,
                        yi.BattlePassTicket,
                        yi.BonusX5,
                        yi.CrewBonusX3,
                        yi.EpicSelectToken,
                        yi.Comp7TokenWeeklyReward,
                        yi.DeluxeGift,
                        yi.BattleBoosterGift,
                        yi.OptionalDevice,
                        yi.Lootbox,
                    ],
                    $i = [yi.Gold, yi.Credits, yi.Crystal, yi.FreeXp, yi.StpCoin],
                    Wi = [yi.BattlePassPoints, yi.EquipCoin],
                    Hi = [yi.PremiumPlus, yi.Premium],
                    zi = ['engravings', 'backgrounds'],
                    Ui = ['engraving', 'background'],
                    Vi = (e, t, a) => {
                        const n = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            n,
                            a,
                        );
                    },
                    Gi = [Pi.Small, Pi.Big],
                    qi = {
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
                    ji = ({
                        name: e,
                        image: t,
                        isPeriodic: a = !1,
                        size: n = Pi.Big,
                        special: s,
                        value: i,
                        valueType: o,
                        title: u,
                        style: l,
                        className: c,
                        classNames: d,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const g = ((e, t) => {
                                if (void 0 === t || !Gi.includes(e)) return null;
                                switch (t) {
                                    case xi.BATTLE_BOOSTER:
                                    case xi.BATTLE_BOOSTER_REPLACE:
                                        return Ri.BATTLE_BOOSTER;
                                    case xi.LOOT_BOX:
                                        return Ri.LOOT_BOX;
                                }
                            })(n, s),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case xi.BATTLE_BOOSTER:
                                        return Ii.BATTLE_BOOSTER;
                                    case xi.BATTLE_BOOSTER_REPLACE:
                                        return Ii.BATTLE_BOOSTER_REPLACE;
                                    case xi.BUILT_IN_EQUIPMENT:
                                        return Ii.BUILT_IN_EQUIPMENT;
                                    case xi.EQUIPMENT_PLUS:
                                        return Ii.EQUIPMENT_PLUS;
                                    case xi.EQUIPMENT_TROPHY_BASIC:
                                        return Ii.EQUIPMENT_TROPHY_BASIC;
                                    case xi.EQUIPMENT_TROPHY_UPGRADED:
                                        return Ii.EQUIPMENT_TROPHY_UPGRADED;
                                    case xi.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Ii.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case xi.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Ii.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case xi.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Ii.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case xi.PROGRESSION_STYLE_UPGRADED_1:
                                        return Ii.PROGRESSION_STYLE_UPGRADED_1;
                                    case xi.PROGRESSION_STYLE_UPGRADED_2:
                                        return Ii.PROGRESSION_STYLE_UPGRADED_2;
                                    case xi.PROGRESSION_STYLE_UPGRADED_3:
                                        return Ii.PROGRESSION_STYLE_UPGRADED_3;
                                    case xi.PROGRESSION_STYLE_UPGRADED_4:
                                        return Ii.PROGRESSION_STYLE_UPGRADED_4;
                                    case xi.PROGRESSION_STYLE_UPGRADED_5:
                                        return Ii.PROGRESSION_STYLE_UPGRADED_5;
                                    case xi.PROGRESSION_STYLE_UPGRADED_6:
                                        return Ii.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(s),
                            p = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case ki.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case ki.CURRENCY:
                                    case ki.NUMBER:
                                        return r().createElement(j, { format: 'integral', value: Number(e) });
                                    case ki.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(i, o);
                        return r().createElement(
                            'div',
                            { className: b()(qi.base, qi[`base__${n}`], c), style: l },
                            r().createElement(
                                Oi,
                                { tooltipArgs: m, className: qi.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: b()(qi.image, null == d ? void 0 : d.image) },
                                        g &&
                                            r().createElement('div', {
                                                className: b()(qi.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${g}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            r().createElement('div', {
                                                className: b()(qi.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            r().createElement('div', {
                                                className: b()(qi.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    p &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: b()(
                                                    qi.info,
                                                    qi[`info__${e}`],
                                                    o === ki.MULTI && qi.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            p,
                                        ),
                                    u && r().createElement('div', { className: qi.title }, u),
                                ),
                            ),
                            a &&
                                r().createElement(
                                    Oi,
                                    { tooltipArgs: _ },
                                    r().createElement('div', {
                                        className: b()(qi.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function Qi() {
                    return (
                        (Qi = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        Qi.apply(null, arguments)
                    );
                }
                const Yi = r().memo(
                        ({
                            data: e,
                            size: t = Pi.Big,
                            isVertical: a = !1,
                            count: s,
                            classMix: i,
                            rewardItemClassMix: o,
                            boxRewardTooltip: u,
                            boxRewardValue: l,
                            boxRewardClassName: c,
                            boxRewardClassNames: d,
                        }) => {
                            const m = (0, n.useMemo)(
                                    () =>
                                        s && s < e.length ? `R.images.gui.maps.icons.quests.bonuses.${t}.default` : '',
                                    [s, e.length, t],
                                ),
                                _ =
                                    l ||
                                    ta(R.strings.tooltips.quests.awards.additional.bottom(), {
                                        count: e.length - (s || 0),
                                    }),
                                g = b()('Rewards_base_26', a && 'Rewards_base__vertical_9f', i),
                                E = b()('Rewards_reward_7b', a && 'Rewards_reward__vertical_c6', o);
                            return r().createElement(
                                'div',
                                { className: g },
                                m
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          e
                                              .slice(0, s)
                                              .map((e, a) =>
                                                  r().createElement(
                                                      'div',
                                                      { key: a, className: E },
                                                      r().createElement(ji, Qi({ size: t }, e)),
                                                  ),
                                              ),
                                          r().createElement(
                                              'div',
                                              { className: E },
                                              r().createElement(ji, {
                                                  name: 'more',
                                                  image: m,
                                                  size: t,
                                                  value: _,
                                                  tooltipArgs: u,
                                                  className: c,
                                                  classNames: d,
                                              }),
                                          ),
                                      )
                                    : e.map((e, a) =>
                                          r().createElement(
                                              'div',
                                              { key: a, className: E },
                                              r().createElement(ji, Qi({ size: t }, e)),
                                          ),
                                      ),
                            );
                        },
                    ),
                    Xi = [Pi.Big, Pi.Small],
                    Ki = [Pi.S232x174, Pi.S296x222, Pi.S400x300, Pi.S600x450],
                    Zi = R.images.comp7.gui.maps.icons.rewards,
                    Ji = (e, t) => 'styleProgress' === e.name && Xi.includes(t),
                    eo = (e, t) =>
                        'progressLevel' in e && Ji(e, t)
                            ? `progressionStyleUpgraded_${e.progressLevel}`
                            : e.overlayType,
                    to = (e) => ('vehicles_rent' === e.name ? e.label : e.value),
                    ao = ({ reward: e, rank: t, index: a }) => {
                        const n = e.tooltipId,
                            r = e.tooltipContentId;
                        return Vi(
                            Object.assign({ tooltipId: n }, void 0 !== t && { rank: t }, void 0 !== a && { index: a }),
                            Number(r),
                            { ignoreShowDelay: !0 },
                        );
                    },
                    no = (e, t) => {
                        if ('tankman' === e.name) {
                            var a;
                            const n =
                                null == (a = R.images.comp7.gui.maps.icons.crew.$dyn(t)) ? void 0 : a.$dyn(e.groupName);
                            if (n) return `${n}`;
                            console.info(
                                `Folder for reward size ${t} was not found for crew with groupName: ${e.groupName}`,
                            );
                        }
                        if (Ji(e, t)) return `R.images.gui.maps.icons.quests.bonuses.${t}.camouflage`;
                        if ('customizations' === e.name && Ki.includes(t)) {
                            const a = Zi.$dyn(t),
                                n =
                                    (null == a ? void 0 : a.$dyn(`style_${e.styleID}`)) ||
                                    (null == a ? void 0 : a.$dyn(e.icon));
                            if (n) return `${n}`;
                            console.info(
                                `asset with styleID: ${e.styleID}, size:${t} was not found, using common icon`,
                            );
                        }
                        return ((e, t = Pi.Small) => {
                            const a = e.name,
                                n = e.type,
                                r = e.value,
                                s = e.icon,
                                i = e.item,
                                o = e.dogTagType,
                                u = ((e) => {
                                    switch (e) {
                                        case Pi.S600x450:
                                            return 'c_600x450';
                                        case Pi.S400x300:
                                            return 'c_400x300';
                                        case Pi.S296x222:
                                            return 'c_296x222';
                                        case Pi.S232x174:
                                            return 'c_232x174';
                                        case Pi.Big:
                                            return 'c_80x80';
                                        case Pi.Small:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(t);
                            switch (a) {
                                case 'basic':
                                case 'plus':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${r}`;
                                case 'premium':
                                case 'premium_plus':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${r}`;
                                case 'items':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.${i}`;
                                case 'blueprints':
                                case 'blueprintsAny':
                                case 'finalBlueprints':
                                    return `R.images.gui.maps.icons.blueprints.fragment.${t}.${s}`;
                                case 'tokens':
                                case 'lootBox':
                                case 'battleToken':
                                    return 'big' === t
                                        ? e.iconBig.replace('..', 'img://gui')
                                        : e.iconSmall.replace('..', 'img://gui');
                                case 'customizations':
                                case 'styleProgress':
                                case 'crewSkins':
                                case 'goodies':
                                case 'groups':
                                case 'tmanToken':
                                case 'battlePassSelectToken':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                                case 'crewBooks':
                                    return `R.images.gui.maps.icons.crewBooks.books.${t}.${s}`;
                                case 'dogTagComponents':
                                    return ((e, t, a) => {
                                        const n = zi[e];
                                        if (n) {
                                            const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                                s = r.$dyn(a);
                                            return s ? `${s}` : `${r.$dyn(Ui[e])}`;
                                        }
                                        return (
                                            console.error(
                                                'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                            ),
                                            ''
                                        );
                                    })(o, t, s);
                                case 'dossier_badge':
                                    return `R.images.gui.maps.icons.quests.bonuses.badges.${u}.${s}`;
                                case 'dossier_achievement':
                                    return `R.images.gui.maps.icons.achievement.${u}.${s}`;
                                case 'xp':
                                case 'xpFactor':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                                case 'creditsFactor':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                                case 'tankmenXPFactor':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                                case 'dailyXPFactor':
                                case 'freeXPFactor':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                                case 'premiumTank':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                                case 'styleProgressToken':
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                                case 'collectionItem':
                                    return `R.images.gui.maps.icons.collectionItems.${u}.${s}`;
                                default:
                                    return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
                            }
                        })(e, t);
                    },
                    ro = ({ reward: e, size: t, rank: a, index: n }) => {
                        const r = ((e, t) => {
                            if ('dogTagComponents' === e.name) {
                                if (t === Pi.Big) return Pi.S80x80;
                                if (t === Pi.Small) return Pi.S48x48;
                            }
                            return t;
                        })(e, t);
                        return Object.assign({}, e, {
                            size: r,
                            image: no(e, r),
                            value: to(e),
                            valueType:
                                ((s = e.name),
                                Mi.includes(s)
                                    ? ki.MULTI
                                    : $i.includes(s)
                                      ? ki.CURRENCY
                                      : Wi.includes(s)
                                        ? ki.NUMBER
                                        : Hi.includes(s)
                                          ? ki.PREMIUM_PLUS
                                          : ki.STRING),
                            special: eo(e, r),
                            tooltipArgs: ao({ reward: e, rank: a, index: n }),
                            periodicIconTooltipArgs: {
                                header: R.strings.tooltips.periodicReward.header(),
                                body: R.strings.tooltips.periodicReward.comp7.body(),
                            },
                        });
                        var s;
                    },
                    so = ({ rewards: e, size: t, rank: a, index: n }) =>
                        Me(e, (e) => ro({ reward: e, size: t, rank: a, index: n })),
                    io = (e, t) => (e > t ? t - 1 : void 0),
                    oo = Pi.Small,
                    uo = (0, De.Pi)(({ rank: e, itemIndex: t, visibleRewardsCount: a, className: n }) => {
                        const s = Si().model,
                            i = s.computes.additionalRewards(t),
                            o = s.computes.additionalRewardsCount(t),
                            u = Me(i, (t) => {
                                const a = 'vehicles_rent' === t.name;
                                return Object.assign({}, ro({ reward: t, size: oo, rank: e }), {
                                    className: b()(a && 'AdditionalRewards_vehiclesRentBase_ad'),
                                    classNames: { info: b()(a && 'AdditionalRewards_vehiclesRentLabel_f4') },
                                });
                            });
                        return r().createElement(Yi, {
                            data: u,
                            size: oo,
                            count: io(o, a),
                            rewardItemClassMix: 'AdditionalRewards_reward_72',
                            boxRewardTooltip: {
                                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                args: { fromIndex: a, rank: e },
                            },
                            classMix: n,
                        });
                    });
                let lo;
                !(function (e) {
                    ((e[(e.NotStarted = 0)] = 'NotStarted'),
                        (e[(e.Active = 1)] = 'Active'),
                        (e[(e.OffSeason = 3)] = 'OffSeason'),
                        (e[(e.Finished = 4)] = 'Finished'));
                })(lo || (lo = {}));
                const co = {
                        base: 'Heading_base_ba',
                        rankEmblemContainer: 'Heading_rankEmblemContainer_eb',
                        godRays: 'Heading_godRays_b4',
                        rankEmblem__inactive: 'Heading_rankEmblem__inactive_6e',
                        lock: 'Heading_lock_72',
                        description: 'Heading_description_5f',
                        rankName: 'Heading_rankName_b7',
                        rankStatus: 'Heading_rankStatus_c1',
                    },
                    mo = (0, De.Pi)(({ index: e, rankEmblemSize: t }) => {
                        const a = Si().model,
                            n = G().model,
                            s = a.root.get().topPercentage,
                            i = a.computes.rankRewardsItem(e),
                            o = i.rank,
                            u = i.from,
                            l = i.to,
                            c = i.hasRewardsReceived,
                            d = a.computes.divisionsString(e),
                            m = a.computes.isCurrentRank(e);
                        return r().createElement(
                            'div',
                            { className: co.base },
                            r().createElement(
                                hn,
                                {
                                    rank: o,
                                    from: u,
                                    to: l,
                                    topPercentage: s,
                                    divisions: d,
                                    className: co.rankEmblemContainer,
                                    ignoreShowDelay: !0,
                                },
                                m &&
                                    r().createElement(Qr, {
                                        className: co.godRays,
                                        src: String(R.videos.comp7.godRaysNew_130x130()),
                                        autoplay: !0,
                                        loop: !0,
                                    }),
                                r().createElement(ba, {
                                    seasonName: n.season.name.get(),
                                    size: t,
                                    rank: o,
                                    className: b()(co.rankEmblem, !c && co.rankEmblem__inactive),
                                }),
                                !c && r().createElement('div', { className: co.lock }),
                            ),
                            r().createElement(
                                'div',
                                { className: co.description },
                                r().createElement('div', { className: co.rankName }, Da(o)),
                                m &&
                                    r().createElement(
                                        'div',
                                        { className: co.rankStatus },
                                        ((e) => {
                                            switch (e) {
                                                case lo.OffSeason:
                                                case lo.Finished:
                                                    return R.strings.comp7_ext.rank.achieved();
                                                case lo.Active:
                                                    return R.strings.comp7_ext.rank.current();
                                                default:
                                                    return '';
                                            }
                                        })(n.year.state.get()),
                                    ),
                            ),
                        );
                    }),
                    _o =
                        (e, t) =>
                        (...a) => {
                            if (e(...a)) return t(...a);
                        },
                    go = {
                        base: 'IconButton_base_d0',
                        base__hovered: 'IconButton_base__hovered_26',
                        base__disabled: 'IconButton_base__disabled_7d',
                        icon: 'IconButton_icon_26',
                        icon__preview: 'IconButton_icon__preview_58',
                        icon__compare: 'IconButton_icon__compare_4d',
                        icon__small: 'IconButton_icon__small_b8',
                        icon__normal: 'IconButton_icon__normal_d3',
                        base__mouseDown: 'IconButton_base__mouseDown_06',
                        label: 'IconButton_label_73',
                        label__small: 'IconButton_label__small_3a',
                        label__normal: 'IconButton_label__normal_ef',
                        base__visibleLabel: 'IconButton_base__visibleLabel_3a',
                    },
                    Eo = [
                        'type',
                        'children',
                        'className',
                        'classNames',
                        'disabled',
                        'isVisibleLabel',
                        'soundHover',
                        'soundClick',
                        'size',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function po() {
                    return (
                        (po = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        po.apply(null, arguments)
                    );
                }
                const vo = (e) => {
                        let t = e.type,
                            a = e.children,
                            s = e.className,
                            i = e.classNames,
                            o = e.disabled,
                            u = void 0 !== o && o,
                            l = e.isVisibleLabel,
                            c = void 0 !== l && l,
                            d = e.soundHover,
                            m = void 0 === d ? R.sounds.highlight() : d,
                            _ = e.soundClick,
                            g = void 0 === _ ? R.sounds.play() : _,
                            E = e.size,
                            p = void 0 === E ? 'normal' : E,
                            v = e.onClick,
                            h = e.onMouseEnter,
                            f = e.onMouseLeave,
                            C = e.onMouseDown,
                            A = e.onMouseUp,
                            D = e.onFocus,
                            F = e.onBlur,
                            w = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        a[n] = e[n];
                                    }
                                return a;
                            })(e, Eo);
                        const B = (0, n.useState)(!1),
                            S = B[0],
                            y = B[1],
                            N = (0, n.useState)(!1),
                            P = N[0],
                            k = N[1],
                            x = (0, n.useRef)(null),
                            I = () => !1 === u,
                            T = (e) => I() && ((e) => e.button === Va.LEFT)(e),
                            L = _o(I, (e) => {
                                null == v || v(e);
                            }),
                            O = _o(T, (e) => {
                                (y(!0), null == C || C(e), g && ce(g));
                            }),
                            M = _o(T, (e) => {
                                (y(!1), null == A || A(e));
                            }),
                            $ = _o(I, (e) => {
                                (k(!0), null == h || h(e), m && ce(m));
                            }),
                            W = _o(I, (e) => {
                                null == D || D(e);
                            }),
                            H = _o(I, (e) => {
                                null == F || F(e);
                            });
                        return r().createElement(
                            'div',
                            po(
                                {
                                    ref: x,
                                    className: b()(
                                        go.base,
                                        u && go.base__disabled,
                                        c && go.base__visibleLabel,
                                        !u && S && go.base__mouseDown,
                                        !u && P && go.base__hovered,
                                        s,
                                    ),
                                    onClick: L,
                                    onMouseEnter: $,
                                    onMouseLeave: (e) => {
                                        (k(!1), y(!1), null == f || f(e));
                                    },
                                    onMouseDown: O,
                                    onMouseUp: M,
                                    onFocus: W,
                                    onBlur: H,
                                },
                                w,
                            ),
                            r().createElement('div', {
                                className: b()(
                                    go.icon,
                                    go[`icon__${p}`],
                                    go[`icon__${t}`],
                                    null == i ? void 0 : i.icon,
                                ),
                            }),
                            a &&
                                r().createElement(
                                    'div',
                                    { className: b()(go.label, go[`label__${p}`], null == i ? void 0 : i.label) },
                                    a,
                                ),
                        );
                    },
                    ho = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    bo = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    fo = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Co = (e) =>
                        fo
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let a = bo.length - 1; a >= 0; a--)
                                      for (; e >= bo[a];) ((t += ho[a]), (e -= bo[a]));
                                  return t;
                              })(e),
                    Ao = (0, De.Pi)(
                        ({ index: e, rank: t, size: a, hasHighlight: n, onPreviewClick: s, className: i }) => {
                            const o = Si().model.computes.mainReward(e);
                            return r().createElement(
                                'div',
                                { className: b()('MainReward_base_f4', i) },
                                r().createElement(
                                    'div',
                                    { className: 'MainReward_imageContainer_0e' },
                                    n &&
                                        r().createElement(Xr, {
                                            className: 'MainReward_glowContainer_42',
                                            classNames: { glow: 'MainReward_glow_75' },
                                        }),
                                    r().createElement(ji, ro({ reward: o, size: a, rank: t })),
                                    ((e) => 'styleProgress' === e.name)(o) &&
                                        r().createElement(
                                            'div',
                                            { className: 'MainReward_preview_9a' },
                                            r().createElement(
                                                vo,
                                                { type: 'preview', onClick: s },
                                                R.strings.comp7_ext.rewards.preview(),
                                            ),
                                        ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'MainReward_info_3c' },
                                    r().createElement('div', { className: 'MainReward_title_f2' }, o.label),
                                    r().createElement(Pn, {
                                        text: String(R.strings.comp7_ext.rewards.subtitle.$dyn(o.name)),
                                        binding: { vehicleLevel: Co(10) },
                                        classMix: 'MainReward_subTitle_6d',
                                    }),
                                ),
                            );
                        },
                    ),
                    Do = (0, De.Pi)(
                        ({
                            itemIndex: e,
                            itemWidth: t,
                            mainRewardSize: a,
                            hasHighlight: n,
                            visibleRewardsCount: s,
                            rankEmblemSize: i,
                            onPreviewClick: o,
                        }) => {
                            const u = Si().model.computes.rankRewardsItem(e),
                                l = u.rank,
                                c = u.hasRewardsReceived;
                            return r().createElement(
                                'div',
                                { className: 'RankRewardsItem_base_47', style: { '--itemWidth': `${t}rem` } },
                                r().createElement(mo, { index: e, rankEmblemSize: i }),
                                r().createElement(Ao, {
                                    index: e,
                                    rank: l,
                                    size: a,
                                    hasHighlight: n,
                                    onPreviewClick: o,
                                    className: 'RankRewardsItem_mainRewardContainer_6d',
                                }),
                                r().createElement(
                                    'div',
                                    { className: 'RankRewardsItem_rewardsContainer_67' },
                                    r().createElement(uo, { itemIndex: e, visibleRewardsCount: s, rank: l }),
                                ),
                                r().createElement(
                                    'div',
                                    {
                                        className: b()(
                                            'RankRewardsItem_statusContainer_19',
                                            !c && 'RankRewardsItem_statusContainer__hidden_ef',
                                        ),
                                    },
                                    r().createElement('div', { className: 'RankRewardsItem_icon_47' }),
                                    R.strings.comp7_ext.rewards.status.achieved(),
                                ),
                            );
                        },
                    ),
                    Fo = (e) => (e >= A.Large ? va.x110 : e >= A.Medium ? va.x64 : va.x48),
                    wo = (e) =>
                        e >= A.ExtraLarge
                            ? Pi.S600x450
                            : e >= A.Large
                              ? Pi.S400x300
                              : e >= A.Medium
                                ? Pi.S296x222
                                : Pi.S232x174,
                    Bo = (e) => (e >= D.Medium ? 5 : 4),
                    So = { duration: 700, easing: (e) => Math.pow(e, 4) },
                    yo = (0, De.Pi)(() => {
                        const e = w(),
                            t = e.mediaSize,
                            a = e.mediaWidth,
                            s = Si(),
                            o = s.model,
                            u = s.controls,
                            l = o.root.get().initialItemIndex,
                            c = o.computes.rankRewardsItemsLength(),
                            d = o.computes.scrollingSettings(),
                            m = d.nextNotAchievedItemIndex,
                            _ = d.hasForceScroll,
                            g = (0, n.useState)(_ ? 'idle' : 'initial'),
                            E = g[0],
                            p = g[1],
                            v = (0, n.useState)(_ ? l : m),
                            h = v[0],
                            b = v[1],
                            f = ((e) =>
                                e >= A.ExtraLarge
                                    ? 600
                                    : e >= A.Large
                                      ? 460
                                      : e >= A.Medium
                                        ? 400
                                        : e >= A.Small
                                          ? 340
                                          : 300)(t),
                            C = c * f,
                            D = Ur(f),
                            F = D.scrollPosition,
                            B = D.clampPosition,
                            S = D.contentRef,
                            y = (function () {
                                const e = (0, n.useRef)(!1);
                                return (
                                    (0, n.useEffect)(
                                        () => () => {
                                            e.current = !0;
                                        },
                                        [],
                                    ),
                                    e
                                );
                            })();
                        ((0, n.useLayoutEffect)(() => {
                            'idle' === E
                                ? F.start({ scrollPosition: i.O.view.remToPx(l * f), immediate: !0 })
                                : 'initial' === E && F.start({ scrollPosition: i.O.view.remToPx(C), immediate: !0 });
                        }, []),
                            (0, n.useEffect)(
                                () =>
                                    Xe(() => {
                                        const e = S.current;
                                        if (e && 'initial' === E) {
                                            const t = B(e, i.O.view.remToPx(m * f)),
                                                a = B(e, i.O.view.remToPx(C));
                                            if (t === a) return void p('idle');
                                            F.start({
                                                scrollPosition: t,
                                                from: { scrollPosition: a },
                                                config: So,
                                                onStart: () => {
                                                    p('scrolling');
                                                },
                                                onRest: () => {
                                                    y.current || p('idle');
                                                },
                                            });
                                        }
                                    }),
                                [B, S, y, f, m, E, C, F],
                            ));
                        const N = (e) => 'idle' === E && e === m,
                            P = (0, Ke.useSpring)(_t);
                        return r().createElement(
                            'div',
                            { className: 'RankRewardsPage_base_71' },
                            r().createElement(dt, { className: be }, R.strings.comp7_ext.page.heading.rankRewards()),
                            r().createElement(ar, null),
                            r().createElement(
                                Ke.animated.div,
                                { className: 'RankRewardsPage_content_45', style: P },
                                r().createElement(
                                    zr,
                                    {
                                        api: D,
                                        stuckIndex: h,
                                        itemWidth: f,
                                        itemsOffset: kr(f),
                                        onStick: b,
                                        className: 'RankRewardsPage_scrollContainer_85',
                                        areaClassNames: {
                                            base: 'RankRewardsPage_areaContainer_58',
                                            wrapper: 'RankRewardsPage_areaWrapper_eb',
                                        },
                                        barClassNames: { base: 'RankRewardsPage_bar_95' },
                                    },
                                    Kt(c, (e) =>
                                        r().createElement(Do, {
                                            key: e,
                                            itemIndex: e,
                                            visibleRewardsCount: Bo(a),
                                            rankEmblemSize: Fo(t),
                                            mainRewardSize: wo(t),
                                            itemWidth: f,
                                            hasHighlight: N(e),
                                            onPreviewClick: () => u.goToPreview(e, h),
                                        }),
                                    ),
                                ),
                            ),
                        );
                    });
                let No;
                !(function (e) {
                    ((e[(e.Initial = 0)] = 'Initial'), (e[(e.Success = 1)] = 'Success'), (e[(e.Error = 2)] = 'Error'));
                })(No || (No = {}));
                const Po = [cr.Locked, cr.ReadyToPurchase],
                    ko = [lr.Vehicle, lr.Style3d],
                    xo = z()(
                        ({ observableModel: e, mode: t }) => {
                            const a = e.array('rankDiscounts'),
                                n = e.array('products'),
                                r = { root: e.object() },
                                s = (0, ke.Om)(
                                    () =>
                                        Me(n.get(), (e) =>
                                            Object.assign(
                                                {},
                                                e,
                                                { price: Object.assign({}, e.price) },
                                                'vehicleInfo' in e && { vehicleInfo: Object.assign({}, e.vehicleInfo) },
                                                'reward' in e && { reward: Object.assign({}, e.reward) },
                                            ),
                                        ),
                                    { equals: M },
                                ),
                                i = (0, ke.Om)(
                                    (e) => {
                                        const t = Te(s(), e);
                                        if (!t) throw new Error(`product with index ${e} is not found`);
                                        return t;
                                    },
                                    { equals: M },
                                ),
                                o = (0, ke.Om)(
                                    () => {
                                        const e = new Set(),
                                            t = Ve(
                                                s(),
                                                (t, a, n) => {
                                                    const r = a.rank,
                                                        s = t.get(r);
                                                    return void 0 === s
                                                        ? (0 !== n && e.add(n), t.set(r, 1))
                                                        : t.set(r, s + 1);
                                                },
                                                new Map(),
                                            );
                                        return { recordsArray: Array.from(t.entries()), groupIndexesSet: e };
                                    },
                                    { equals: M },
                                ),
                                u = (0, ke.Om)(
                                    (e) => {
                                        const t = i(e);
                                        return {
                                            hasDiscount: t.state === cr.ReadyToPurchase && t.price.discountValue > 0,
                                            isEnough: !Po.includes(t.state) || t.price.isEnough,
                                        };
                                    },
                                    { equals: bt },
                                ),
                                l = (0, ke.Om)(() => {
                                    const e = r.root.get().selectedProductId,
                                        t = ze(s(), (t) => t.id === e);
                                    if (void 0 === t)
                                        throw new Error(`selectedProductId: ${e} is not found in products array`);
                                    return t;
                                }),
                                c = (0, ke.Om)(
                                    () => {
                                        const e = l(),
                                            t = i(e);
                                        if (!t)
                                            throw new Error(
                                                `product with selected index ${e} is not found in products array`,
                                            );
                                        return t;
                                    },
                                    { equals: M },
                                ),
                                d = (0, ke.Om)(() => r.root.get().shopState === No.Success && c().type !== lr.Reward),
                                m = (0, ke.Om)(() => {
                                    const e = c();
                                    return e.type === lr.Vehicle && e.state !== cr.ReadyToRestore && e.description;
                                }),
                                _ = (0, ke.Om)(() => c().type === lr.Reward),
                                g = (0, ke.Om)(
                                    () => {
                                        const e = c(),
                                            t = e.type === lr.Vehicle && e.state !== cr.Purchased;
                                        return {
                                            hasControls: ko.includes(e.type),
                                            hasAddToCompare: e.type === lr.Vehicle,
                                            hasPreview: t || e.type === lr.Style3d,
                                        };
                                    },
                                    { equals: bt },
                                ),
                                E = (0, ke.Om)(
                                    () =>
                                        Me(a.get(), (e) =>
                                            Object.assign({}, e, {
                                                divisions: ur(Me(e.divisions, (e) => Object.assign({}, e))),
                                            }),
                                        ),
                                    { equals: M },
                                ),
                                p = (0, ke.Om)(
                                    (e) => {
                                        const t = Te(E(), e);
                                        if (!t) throw new Error(`rank discount with index ${e} is not found`);
                                        return t;
                                    },
                                    { equals: M },
                                );
                            return Object.assign(
                                {},
                                r,
                                {
                                    computes: {
                                        productsLength: (0, ke.Om)(() => s().length),
                                        rankDiscountsLength: (0, ke.Om)(() => E().length),
                                        product: i,
                                        productsDividersConfig: o,
                                        priceConfig: u,
                                        selectedProductIndex: l,
                                        selectedProduct: c,
                                        hasSceneWrapper: d,
                                        hasVehicleDescription: m,
                                        hasLimitedQuantity: _,
                                        controlsConfig: g,
                                        rankDiscount: p,
                                    },
                                },
                                'mocks' === t && { internal: { rankDiscounts: a, computes: { products: s } } },
                            );
                        },
                        ({ externalModel: e }) => ({
                            markProductSeen: e.createCallback((e) => ({ cd: e }), 'onProductSeen'),
                            selectProduct: e.createCallback((e) => ({ cd: e }), 'onProductSelect'),
                            purchase: e.createCallbackNoArgs('onProductPurchase'),
                            restore: e.createCallbackNoArgs('onProductRestore'),
                            goToHangar: e.createCallbackNoArgs('onGoToHangar'),
                            goToPreview: e.createCallbackNoArgs('onGoToPreview'),
                            goToCustomization: e.createCallbackNoArgs('onGoToCustomization'),
                            addToVehicleCompare: e.createCallbackNoArgs('onAddToVehicleCompare'),
                            mouseOver3dScene: e.createCallback(
                                ({ isOver3dScene: e }) => ({ isOver3dScene: e }),
                                'onMouseOver3dScene',
                            ),
                            moveSpace: e.createCallback(
                                ({ dx: e, dy: t, dz: a }) => ({ dx: e, dy: t, dz: a }),
                                'onMoveSpace',
                            ),
                        }),
                    ),
                    Ro = xo[0],
                    Io = xo[1],
                    To = R.strings.comp7_ext.dataError,
                    Lo = ({ className: e, classNames: t, title: a = To.title(), description: n = To.description() }) =>
                        r().createElement(
                            'div',
                            { className: b()('ErrorState_base_67', e) },
                            r().createElement(
                                'div',
                                {
                                    className: b()(
                                        'ErrorState_titleContainer_9f',
                                        null == t ? void 0 : t.titleContainer,
                                    ),
                                },
                                r().createElement('div', {
                                    className: b()('ErrorState_alertIcon_8c', null == t ? void 0 : t.alertIcon),
                                }),
                                r().createElement(
                                    'div',
                                    { className: b()('ErrorState_title_e6', null == t ? void 0 : t.title) },
                                    a,
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: b()('ErrorState_description_4a', null == t ? void 0 : t.description) },
                                n,
                            ),
                        ),
                    Oo = ({
                        children: e,
                        moveSpace: t,
                        onMouseOver3dScene: a,
                        onDragStateChange: s,
                        isMoveSpaceEnabled: i = !0,
                    }) => {
                        const o = (0, n.useState)(!1),
                            u = o[0],
                            l = o[1],
                            c = (0, n.useState)({ x: 0, y: 0 }),
                            d = c[0],
                            m = c[1],
                            _ = (0, n.createRef)(),
                            g = (0, n.useCallback)(() => {
                                (l(!1), null == s || s(!1));
                            }, [s]);
                        (0, n.useEffect)(
                            () => (
                                window.addEventListener('mouseup', g),
                                () => window.removeEventListener('mouseup', g)
                            ),
                            [g],
                        );
                        const E = (0, n.useCallback)(
                                (e) => {
                                    if (!_.current) return;
                                    const t = _.current.getBoundingClientRect(),
                                        a = t.width,
                                        n = t.height;
                                    return !(
                                        0 === e.clientX ||
                                        0 === e.clientY ||
                                        e.clientX >= a - 1 ||
                                        e.clientY >= n - 1
                                    );
                                },
                                [_],
                            ),
                            p = (0, n.useCallback)(
                                (e) => {
                                    (e.preventDefault(),
                                        0 === e.button &&
                                            E(e) &&
                                            i &&
                                            (l(!0), null == s || s(!0), m({ x: e.clientX, y: e.clientY })));
                                },
                                [E, i, s],
                            ),
                            v = (0, n.useCallback)(
                                (e) => {
                                    if ((e.preventDefault(), u)) {
                                        if (!E(e)) return;
                                        const a = e.clientX !== d.x ? e.clientX - d.x : 0,
                                            n = e.clientY !== d.y ? e.clientY - d.y : 0;
                                        (m({ x: e.clientX, y: e.clientY }), t({ dx: a, dy: n, dz: 0 }));
                                    }
                                },
                                [E, u, d.x, d.y, t],
                            ),
                            h = (0, n.useCallback)(
                                (e) => {
                                    if ((e.preventDefault(), !i || !E(e))) return;
                                    const a = e.deltaY < 0;
                                    t({ dx: 0, dy: 0, dz: a ? -600 : 600 });
                                },
                                [E, i, t],
                            ),
                            f = (0, n.useCallback)(() => {
                                (l(!1), null == s || s(!1));
                            }, [s]),
                            C = (0, n.useCallback)(() => {
                                a({ isOver3dScene: !0 });
                            }, [a]),
                            A = (0, n.useCallback)(() => {
                                a({ isOver3dScene: !1 });
                            }, [a]);
                        return r().createElement(
                            'div',
                            {
                                ref: _,
                                className: b()(
                                    'SceneWrapper_base_99',
                                    u && 'SceneWrapper_base__down_65',
                                    !i && 'SceneWrapper_base__moveSpaceDisabled_fe',
                                ),
                                onMouseDown: p,
                                onMouseMove: v,
                                onMouseUp: f,
                                onWheel: h,
                                onMouseOver: C,
                                onMouseOut: A,
                            },
                            e,
                        );
                    },
                    Mo = {
                        base: 'CarouselScroll_base_91',
                        areaWrapper: 'CarouselScroll_areaWrapper_3f',
                        areaWrapper__hasScroll: 'CarouselScroll_areaWrapper__hasScroll_d9',
                        areaContent: 'CarouselScroll_areaContent_6d',
                        arrow: 'CarouselScroll_arrow_b9',
                        arrow__prev: 'CarouselScroll_arrow__prev_02',
                        arrow__next: 'CarouselScroll_arrow__next_df',
                        arrow__hidden: 'CarouselScroll_arrow__hidden_ad',
                        arrow__prevDisabled: 'CarouselScroll_arrow__prevDisabled_0c',
                        arrow__nextDisabled: 'CarouselScroll_arrow__nextDisabled_45',
                    },
                    $o = ({ api: e, className: t, classNames: a, children: s }) => {
                        const o = e.events,
                            u = e.getBounds,
                            l = e.getWrapperSize,
                            c = e.getContainerSize,
                            d = e.applyStepTo,
                            m = e.animationScroll.scrollPosition,
                            _ = (0, n.useRef)(null),
                            g = (0, n.useState)('visible'),
                            E = g[0],
                            p = g[1],
                            v = yr();
                        Pr(e);
                        const h = Nt(() => {
                                v.run(() => {
                                    const e = u(),
                                        t = e[0],
                                        a = e[1],
                                        n = l(),
                                        r = c();
                                    if (n && r)
                                        return r <= n
                                            ? p('hidden')
                                            : m.goal === t
                                              ? p('prevDisabled')
                                              : m.goal === a
                                                ? p('nextDisabled')
                                                : p('visible');
                                });
                            }),
                            f = Wt((e) => d(e), 150, [d]),
                            C = f[0],
                            A = f[1],
                            D = (0, n.useCallback)(
                                (e) => () => {
                                    const t = e === kt.Next && 'prevDisabled' === E,
                                        a = e === kt.Prev && 'nextDisabled' === E;
                                    t || a || (i.O.sound.play.click(), C(e));
                                },
                                [E, C],
                            );
                        return (
                            wr(() => {
                                h();
                            }),
                            Fr(() => {
                                h();
                            }, [h]),
                            (0, n.useEffect)(() => {
                                const e = Pt(200, h);
                                return (o.on('change', e), () => o.off('change', e));
                            }, [o, h]),
                            (0, n.useEffect)(
                                () => (
                                    document.addEventListener('mouseup', A, !0),
                                    () => document.removeEventListener('mouseup', A, !0)
                                ),
                                [A],
                            ),
                            r().createElement(
                                'div',
                                { className: b()(Mo.base, t), ref: _ },
                                r().createElement(
                                    Hr,
                                    {
                                        api: e,
                                        classNames: {
                                            wrapper: b()(
                                                Mo.areaWrapper,
                                                null == a ? void 0 : a.areaWrapper,
                                                'hidden' !== E && Mo.areaWrapper__hasScroll,
                                            ),
                                            content: b()(Mo.areaContent, null == a ? void 0 : a.areaContent),
                                        },
                                    },
                                    s,
                                ),
                                r().createElement('div', {
                                    className: b()(Mo.arrow, Mo.arrow__prev, Mo[`arrow__${E}`]),
                                    onMouseEnter: 'prevDisabled' === E ? void 0 : i.O.sound.play.highlight,
                                    onMouseDown: D(kt.Next),
                                    onMouseUp: A,
                                }),
                                r().createElement('div', {
                                    className: b()(Mo.arrow, Mo.arrow__next, Mo[`arrow__${E}`]),
                                    onMouseEnter: 'nextDisabled' === E ? void 0 : i.O.sound.play.highlight,
                                    onMouseDown: D(kt.Prev),
                                    onMouseUp: A,
                                }),
                            )
                        );
                    },
                    Wo = {
                        '--pageContentWidth': '78vw',
                        base: 'ProductCard_base_8c',
                        base__selected: 'ProductCard_base__selected_d1',
                        background: 'ProductCard_background_f1',
                        backgroundGradient: 'ProductCard_backgroundGradient_84',
                        imageContainer: 'ProductCard_imageContainer_5c',
                        corners: 'ProductCard_corners_dd',
                        discountBackground: 'ProductCard_discountBackground_27',
                        stroke: 'ProductCard_stroke_bc',
                        base__purchased: 'ProductCard_base__purchased_c5',
                        corner: 'ProductCard_corner_6d',
                        corner__top: 'ProductCard_corner__top_94',
                        corner__bottom: 'ProductCard_corner__bottom_31',
                        corner__left: 'ProductCard_corner__left_10',
                        corner__right: 'ProductCard_corner__right_e4',
                        container: 'ProductCard_container_b7',
                        name: 'ProductCard_name_b9',
                        lock: 'ProductCard_lock_80',
                        bottomString: 'ProductCard_bottomString_f7',
                        notification: 'ProductCard_notification_b9',
                    },
                    Ho = R.images.comp7.gui.maps.icons.products,
                    zo = (0, De.Pi)(({ index: e, className: t }) => {
                        const a = Io().model.computes.product(e);
                        return r().createElement('div', {
                            className: b()('ProductCardImage_base_91', t),
                            style: { backgroundImage: `url('${Ho.$num(a.id)}')` },
                        });
                    }),
                    Uo = {
                        base: 'VehicleName_base_cd',
                        base__24x24: 'VehicleName_base__24x24_c2',
                        base__24x24_metal: 'VehicleName_base__24x24_metal_e6',
                        base__48x48: 'VehicleName_base__48x48_ed',
                        base__64x64: 'VehicleName_base__64x64_43',
                        base__83x74: 'VehicleName_base__83x74_a7',
                        vehicleTypeContainer: 'VehicleName_vehicleTypeContainer_9f',
                        base__60x54: 'VehicleName_base__60x54_e2',
                        vehicleType: 'VehicleName_vehicleType_93',
                    };
                let Vo;
                !(function (e) {
                    ((e.x24 = '24x24'),
                        (e.x24Metal = '24x24_metal'),
                        (e.x48 = '48x48'),
                        (e.x60 = '60x54'),
                        (e.x64 = '64x64'),
                        (e.x80 = '80x80'),
                        (e.x83 = '83x74'),
                        (e.x180 = '180x135'));
                })(Vo || (Vo = {}));
                const Go = R.images.gui.maps.icons.vehicleTypes,
                    qo = (e) => {
                        switch (e) {
                            case Vo.x80:
                                return Go.large;
                            case Vo.x83:
                                return Go.big;
                            case Vo.x180:
                                return Go.huge;
                            default:
                                return Go.$dyn(`c_${e}`);
                        }
                    },
                    jo = (0, n.memo)(
                        ({
                            name: e,
                            tier: t,
                            type: a,
                            size: n = Vo.x24Metal,
                            typeIconFolderPath: s = qo(n),
                            isPremium: i = !1,
                            className: o,
                            classNames: u,
                        }) => {
                            const l = `${aa(a)}${i ? '_elite' : ''}`;
                            return r().createElement(
                                'div',
                                { className: b()(Uo.base, Uo[`base__${n}`], o) },
                                r().createElement('div', { className: null == u ? void 0 : u.level }, Co(t)),
                                r().createElement(
                                    'div',
                                    {
                                        className: b()(
                                            Uo.vehicleTypeContainer,
                                            null == u ? void 0 : u.vehicleTypeContainer,
                                        ),
                                    },
                                    r().createElement('div', {
                                        className: b()(Uo.vehicleType, null == u ? void 0 : u.type),
                                        style: { backgroundImage: `url(${null == s ? void 0 : s.$dyn(l)})` },
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: b()(Uo.shortName, null == u ? void 0 : u.shortName) },
                                    e,
                                ),
                            );
                        },
                    ),
                    Qo = 'ProductCardName_base_71',
                    Yo = R.images.gui.maps.icons.flags.c_20x12,
                    Xo = (0, De.Pi)(({ index: e, className: t }) => {
                        const a = Io().model.computes.product(e),
                            n = w().mediaSize;
                        switch (a.type) {
                            case lr.Vehicle: {
                                const e = a.vehicleInfo,
                                    n = e.name,
                                    s = e.tier,
                                    i = e.type,
                                    o = e.nation,
                                    u = e.isPremium;
                                return r().createElement(
                                    'div',
                                    { className: b()(Qo, t) },
                                    r().createElement('div', {
                                        className: 'ProductCardName_nation_b4',
                                        style: { backgroundImage: `url('${Yo.$dyn(o)}')` },
                                    }),
                                    r().createElement(jo, { name: n, tier: s, type: i, isPremium: u }),
                                );
                            }
                            case lr.Style3d: {
                                const e = a.name,
                                    s = a.vehicleInfo,
                                    i = ta(R.strings.comp7_ext.products.style3d(), {
                                        name: ta(R.strings.comp7_ext.quotesWrapper(), { name: e }),
                                    });
                                return r().createElement(
                                    'div',
                                    { className: b()(Qo, 'ProductCardName_style3dContainer_f7', t) },
                                    r().createElement(Ia, {
                                        classMix: 'ProductCardName_overflowedName_6b',
                                        content: i,
                                        key: n,
                                    }),
                                    r().createElement(wn, {
                                        text: R.strings.comp7_ext.forVehicle(),
                                        binding: { vehicleName: s.name },
                                        classMix: 'ProductCardName_style3dDescription_ec',
                                    }),
                                );
                            }
                            case lr.Reward:
                                return r().createElement(wn, { text: a.reward.label, classMix: b()(Qo, t) });
                            default:
                                return (console.error(`Provide ProductCardName for ProductType:${a.type}`), null);
                        }
                    }),
                    Ko = {
                        base: 'Currency_base_57',
                        icon: 'Currency_icon_c5',
                        base__small: 'Currency_base__small_af',
                        base__big: 'Currency_base__big_bc',
                        base__large: 'Currency_base__large_65',
                        base__extraLarge: 'Currency_base__extraLarge_4d',
                        'icon__credits-small': 'Currency_icon__credits-small_9b',
                        'icon__credits-big': 'Currency_icon__credits-big_96',
                        'icon__credits-large': 'Currency_icon__credits-large_ac',
                        'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                        'icon__gold-small': 'Currency_icon__gold-small_86',
                        'icon__gold-big': 'Currency_icon__gold-big_15',
                        'icon__gold-large': 'Currency_icon__gold-large_36',
                        'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                        'icon__crystal-small': 'Currency_icon__crystal-small_27',
                        'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                        'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                        'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                        'icon__xp-small': 'Currency_icon__xp-small_a7',
                        'icon__xp-big': 'Currency_icon__xp-big_97',
                        'icon__xp-large': 'Currency_icon__xp-large_6b',
                        'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                        'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                        'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                        'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                        'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                        'icon__eliteXP-small': 'Currency_icon__eliteXP-small_45',
                        'icon__eliteXP-big': 'Currency_icon__eliteXP-big_c0',
                        'icon__eliteXP-large': 'Currency_icon__eliteXP-large_1b',
                        'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_9b',
                        'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                        'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                        'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                        'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                        'icon__stpCoin-small': 'Currency_icon__stpCoin-small_6b',
                        'icon__stpCoin-big': 'Currency_icon__stpCoin-big_da',
                        'icon__stpCoin-large': 'Currency_icon__stpCoin-large_ee',
                        'icon__stpCoin-extraLarge': 'Currency_icon__stpCoin-extraLarge_fa',
                        value: 'Currency_value_e1',
                        value__freeXP: 'Currency_value__freeXP_cb',
                        value__credits: 'Currency_value__credits_76',
                        value__gold: 'Currency_value__gold_dd',
                        value__xp: 'Currency_value__xp_b0',
                        value__crystal: 'Currency_value__crystal_19',
                        value__equipCoin: 'Currency_value__equipCoin_d0',
                        value__eliteXP: 'Currency_value__eliteXP_62',
                        value__stpCoin: 'Currency_value__stpCoin_38',
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    };
                let Zo, Jo, eu;
                (!(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(Zo || (Zo = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin'),
                            (e.stpCoin = 'stpcoin'));
                    })(Jo || (Jo = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(eu || (eu = {})));
                const tu = (0, n.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: t,
                            size: a,
                            type: n,
                            value: s,
                            discountValue: i,
                            showPlus: o,
                            isEnough: u = !0,
                            stockBackgroundName: l = eu.Red,
                            className: c,
                            classNames: d,
                        }) =>
                            r().createElement(
                                'span',
                                { className: b()(Ko.base, Ko[`base__${a}`], c) },
                                r().createElement(
                                    'span',
                                    {
                                        className: b()(
                                            Ko.value,
                                            Ko[`value__${n}`],
                                            !u && Ko.value__notEnough,
                                            null == d ? void 0 : d.value,
                                        ),
                                    },
                                    o && s > 0 && '+',
                                    r().createElement(j, { value: s, format: n === Jo.gold ? 'gold' : 'integral' }),
                                ),
                                r().createElement('span', {
                                    className: b()(Ko.icon, Ko[`icon__${n}-${a}`], null == d ? void 0 : d.icon),
                                }),
                                e &&
                                    r().createElement(
                                        'span',
                                        {
                                            className: b()(
                                                Ko.stock,
                                                i && Ko.stock__indent,
                                                t && Ko.stock__interactive,
                                                null == d ? void 0 : d.stock,
                                            ),
                                        },
                                        r().createElement('span', {
                                            className: Ko.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                        }),
                                        Boolean(i) && i,
                                    ),
                            ),
                    ),
                    au = {
                        base: 'ProductCardPrice_base_62',
                        currencyValue: 'ProductCardPrice_currencyValue_c4',
                        discount: 'ProductCardPrice_discount_cf',
                        discount__freeXP: 'ProductCardPrice_discount__freeXP_f1',
                        discount__credits: 'ProductCardPrice_discount__credits_a1',
                        discount__gold: 'ProductCardPrice_discount__gold_39',
                        discount__xp: 'ProductCardPrice_discount__xp_35',
                        discount__crystal: 'ProductCardPrice_discount__crystal_fe',
                        discount__equipCoin: 'ProductCardPrice_discount__equipCoin_b5',
                        discountLine: 'ProductCardPrice_discountLine_45',
                    },
                    nu = { value: au.currencyValue },
                    ru = (0, De.Pi)(({ index: e, className: t }) => {
                        const a = Io().model,
                            n = a.computes.product(e).price,
                            s = a.computes.priceConfig(e).hasDiscount;
                        return r().createElement(
                            'div',
                            { className: b()(au.base, t) },
                            s &&
                                r().createElement(
                                    'div',
                                    { className: b()(au.discount, au[`discount__${n.name}`]) },
                                    r().createElement(j, { value: n.value }),
                                    r().createElement('div', { className: au.discountLine }),
                                ),
                            r().createElement(tu, {
                                size: Zo.small,
                                type: n.name,
                                value: s ? n.discountValue : n.value,
                                classNames: nu,
                            }),
                        );
                    }),
                    su = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: b()('ProductCardPurchased_base_e8', e) },
                            r().createElement('div', { className: 'ProductCardPurchased_icon_30' }),
                            r().createElement(
                                'div',
                                { className: 'ProductCardPurchased_text_1a' },
                                R.strings.comp7_ext.products.purchased(),
                            ),
                        ),
                    iu = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: b()('ProductCardReadyToRestore_base_70', e) },
                            r().createElement(wn, { text: R.strings.comp7_ext.products.readyToRestore() }),
                        ),
                    ou = {
                        [lr.Vehicle]: 'comp_7_shop_carousel_click_tank',
                        [lr.Style3d]: 'comp_7_shop_carousel_click_style',
                        [lr.Reward]: 'comp_7_shop_carousel_click_module',
                        [lr.Base]: '',
                    },
                    uu = (0, De.Pi)(({ index: e, className: t, classNames: a }) => {
                        const n = Io(),
                            s = n.model,
                            o = n.controls,
                            u = s.computes.product(e),
                            l = u.id,
                            c = u.state,
                            d = u.isNew,
                            m = u.rank,
                            _ = u.type,
                            g = u.tooltipId,
                            E = s.computes.priceConfig(e).hasDiscount,
                            p = s.computes.selectedProductIndex(),
                            v = e === p;
                        return r().createElement(
                            Kn,
                            { args: { id: l, tooltipId: g }, ignoreShowDelay: !0 },
                            r().createElement(
                                'div',
                                {
                                    className: b()(Wo.base, v && Wo.base__selected, Wo[`base__${c}`], t),
                                    onClick: () => {
                                        v ||
                                            (i.O.sound.play.click(),
                                            i.O.sound.play.sound(ou[_]),
                                            o.selectProduct(l),
                                            o.markProductSeen(l));
                                    },
                                },
                                r().createElement('div', {
                                    className: b()(Wo.background, null == a ? void 0 : a.background),
                                    style: {
                                        backgroundImage: `url(${Ca(R.images.comp7.gui.maps.icons.products.cardsBackgrounds, m)})`,
                                    },
                                }),
                                r().createElement(
                                    'div',
                                    { className: Wo.corners },
                                    r().createElement('div', {
                                        className: b()(
                                            Wo.corner,
                                            Wo.corner__top,
                                            Wo.corner__left,
                                            null == a ? void 0 : a.corner,
                                        ),
                                    }),
                                    r().createElement('div', {
                                        className: b()(
                                            Wo.corner,
                                            Wo.corner__top,
                                            Wo.corner__right,
                                            null == a ? void 0 : a.corner,
                                        ),
                                    }),
                                    r().createElement('div', {
                                        className: b()(
                                            Wo.corner,
                                            Wo.corner__bottom,
                                            Wo.corner__left,
                                            null == a ? void 0 : a.corner,
                                        ),
                                    }),
                                    r().createElement('div', {
                                        className: b()(
                                            Wo.corner,
                                            Wo.corner__bottom,
                                            Wo.corner__right,
                                            null == a ? void 0 : a.corner,
                                        ),
                                    }),
                                ),
                                r().createElement('div', { className: b()(Wo.stroke, null == a ? void 0 : a.stroke) }),
                                r().createElement(zo, {
                                    index: e,
                                    className: b()(Wo.imageContainer, null == a ? void 0 : a.imageContainer),
                                }),
                                r().createElement('div', { className: Wo.backgroundGradient }),
                                E && r().createElement('div', { className: Wo.discountBackground }),
                                d &&
                                    r().createElement(
                                        'div',
                                        { className: b()(Wo.notification, null == a ? void 0 : a.notification) },
                                        R.strings.comp7_ext.products.newLabel(),
                                    ),
                                r().createElement(
                                    'div',
                                    { className: Wo.container },
                                    r().createElement(Xo, { index: e, className: Wo.name }),
                                    (() => {
                                        switch (c) {
                                            case cr.ReadyToRestore:
                                                return r().createElement(iu, { className: Wo.bottomString });
                                            case cr.Purchased:
                                                return r().createElement(su, { className: Wo.bottomString });
                                            default:
                                                return r().createElement(ru, { index: e, className: Wo.bottomString });
                                        }
                                    })(),
                                ),
                                c === cr.Locked && r().createElement('div', { className: Wo.lock }),
                            ),
                        );
                    }),
                    lu = 'RankSection_dividerContainer_dc',
                    cu = 'RankSection_verticalDivider_dc',
                    du = 'RankSection_horizontalDivider_8a',
                    mu = 'RankSection_peak_11',
                    _u = 'RankSection_peak__right_f6',
                    gu = 'RankSection_line_07',
                    Eu = ({ rank: e, seasonName: t, className: a }) =>
                        r().createElement(
                            'div',
                            { className: b()('RankSection_base_c0', a) },
                            r().createElement(
                                'div',
                                { className: lu },
                                r().createElement('div', { className: cu }),
                                r().createElement(
                                    'div',
                                    { className: du },
                                    r().createElement('div', { className: mu }),
                                    r().createElement('div', { className: gu }),
                                    r().createElement('div', { className: b()(mu, _u) }),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: 'RankSection_centralContainer_81' },
                                r().createElement(ba, {
                                    rank: e,
                                    size: va.x40,
                                    seasonName: t,
                                    className: 'RankSection_rankImage_79',
                                }),
                                r().createElement(wn, {
                                    classMix: 'RankSection_rankDescription_ba',
                                    text: R.strings.comp7_ext.products.rankAccess(),
                                    binding: {
                                        rank: r().createElement(
                                            'div',
                                            { className: 'RankSection_rankString_1f' },
                                            ta(R.strings.comp7_ext.quotesWrapper(), { name: Aa(e) }),
                                        ),
                                    },
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: b()(lu, 'RankSection_dividerContainer__right_1c') },
                                r().createElement('div', { className: cu }),
                                r().createElement(
                                    'div',
                                    { className: du },
                                    r().createElement('div', { className: mu }),
                                    r().createElement('div', { className: gu }),
                                    r().createElement('div', { className: b()(mu, _u) }),
                                ),
                            ),
                        ),
                    pu = { areaWrapper: 'Carousel_areaWrapper_81', areaContent: 'Carousel_areaContent_64' },
                    vu = (0, De.Pi)(({ className: e }) => {
                        const t = Io().model,
                            a = G().model,
                            s = w().mediaSize,
                            o = (0, n.useRef)(null),
                            u = t.computes.selectedProductIndex(),
                            l = t.computes.productsDividersConfig(),
                            c = ((e) => (e >= A.Medium ? 180 : e >= A.Small ? 150 : 120))(s),
                            d = ((e) => {
                                const t = (0, n.useMemo)(
                                    () => ({
                                        settings: {
                                            step: { type: 'proportional', factor: 8 },
                                            animationConfig: Object.assign({ tension: 120, friction: 20 }, e),
                                        },
                                    }),
                                    [e],
                                );
                                return xr(t);
                            })(),
                            m = yr(),
                            _ = s >= A.Large ? { width: 260, offset: 20 } : { width: 226, offset: 14 },
                            g = Nt((e) => {
                                m.run(() => {
                                    if (o && o.current) {
                                        const t = o.current.offsetLeft - i.O.view.remToPx(c);
                                        d.applyScroll(t, e);
                                    }
                                });
                            });
                        return (
                            wr(() => {
                                g();
                            }),
                            Fr(() => {
                                g({ immediate: !0, reset: !0 });
                            }, [g]),
                            r().createElement(
                                'div',
                                {
                                    style: {
                                        '--shopOffset': `${c}rem`,
                                        '--itemOffset': `${_.offset}rem`,
                                        '--groupOffset': 2 * _.offset + 'rem',
                                        '--itemWidth': `${_.width}rem`,
                                    },
                                },
                                r().createElement(
                                    $o,
                                    { api: d, className: e, classNames: pu },
                                    r().createElement(
                                        'div',
                                        { className: 'Carousel_dividersSections_15' },
                                        l.recordsArray.map(([e, t]) =>
                                            r().createElement(
                                                'div',
                                                {
                                                    key: e,
                                                    className: 'Carousel_section_e6',
                                                    style: { width: _.width * t + _.offset * (t - 1) + 'rem' },
                                                },
                                                r().createElement(Eu, { rank: e, seasonName: a.season.name.get() }),
                                            ),
                                        ),
                                    ),
                                    Kt(t.computes.productsLength(), (e) =>
                                        r().createElement(
                                            'div',
                                            {
                                                key: e,
                                                className: b()(
                                                    'Carousel_scrollItem_1f',
                                                    l.groupIndexesSet.has(e) && 'Carousel_scrollItem__group_89',
                                                ),
                                                onMouseEnter: u === e ? void 0 : i.O.sound.play.highlight,
                                                ref: u === e ? o : void 0,
                                            },
                                            r().createElement('div', {
                                                className: b()(
                                                    'Carousel_selectedHighlight_15',
                                                    e === u && 'Carousel_selectedHighlight__active_84',
                                                ),
                                            }),
                                            r().createElement(uu, { index: e, className: 'Carousel_productCard_30' }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    hu = 'ProductControls_control_c3',
                    bu = R.strings.comp7_ext.controls,
                    fu = { label: 'ProductControls_label_9f' },
                    Cu = (0, De.Pi)(() => {
                        const e = w().mediaSize,
                            t = Io(),
                            a = t.model,
                            n = t.controls,
                            s = a.root.get(),
                            i = s.isVehiclesCompareEnabled,
                            o = s.vehicleCompareTooltipId,
                            u = a.computes.controlsConfig(),
                            l = u.hasAddToCompare,
                            c = u.hasPreview,
                            d = e >= A.Medium ? 'normal' : 'small';
                        return r().createElement(
                            r().Fragment,
                            null,
                            l &&
                                r().createElement(
                                    Kn,
                                    { args: { tooltipId: o }, isEnabled: !i },
                                    r().createElement(
                                        'div',
                                        { className: hu },
                                        r().createElement(
                                            vo,
                                            {
                                                type: 'compare',
                                                disabled: !i,
                                                onClick: n.addToVehicleCompare,
                                                size: d,
                                                classNames: fu,
                                            },
                                            bu.compare(),
                                        ),
                                    ),
                                ),
                            c &&
                                r().createElement(
                                    vo,
                                    { type: 'preview', onClick: n.goToPreview, size: d, className: hu, classNames: fu },
                                    bu.preview(),
                                ),
                        );
                    }),
                    Au = 'PeaksContainer_venzel_74',
                    Du = 'PeaksContainer_icon_98',
                    Fu = 'PeaksContainer_line_5d',
                    wu = ({ className: e, classNames: t, children: a }) => {
                        const s = n.Children.toArray(a).length;
                        return r().createElement(
                            'div',
                            { className: b()('PeaksContainer_base_dc', e) },
                            0 === s &&
                                r().createElement(
                                    'div',
                                    { className: b()(Au, null == t ? void 0 : t.venzel) },
                                    r().createElement('div', { className: b()(Du, null == t ? void 0 : t.icon) }),
                                    r().createElement('div', { className: b()(Fu, null == t ? void 0 : t.line) }),
                                ),
                            s > 0 &&
                                r().createElement(
                                    'div',
                                    { className: b()('PeaksContainer_content_c3', null == t ? void 0 : t.content) },
                                    a,
                                ),
                            r().createElement(
                                'div',
                                {
                                    className: b()(
                                        Au,
                                        null == t ? void 0 : t.venzel,
                                        'PeaksContainer_venzel__right_55',
                                    ),
                                },
                                r().createElement('div', { className: b()(Du, null == t ? void 0 : t.icon) }),
                                r().createElement('div', { className: b()(Fu, null == t ? void 0 : t.line) }),
                            ),
                        );
                    },
                    Bu = (0, De.Pi)(({ index: e }) => {
                        const t = Io().model,
                            a = t.root.get().maxAchievedRank,
                            n = t.computes.rankDiscount(e),
                            s = t.computes.selectedProduct(),
                            i = n.rank === a;
                        return n.rank === s.rank
                            ? r().createElement(
                                  'div',
                                  { className: b()('RankDiscount_rankAccessString_50') },
                                  r().createElement(wn, { text: R.strings.comp7_ext.products.productAccess() }),
                              )
                            : n.value > 0
                              ? r().createElement(
                                    'div',
                                    { className: 'RankDiscount_valueContainer_45' },
                                    i && r().createElement('div', { className: 'RankDiscount_discountBackground_15' }),
                                    r().createElement(wn, {
                                        text: R.strings.comp7_ext.products.discount(),
                                        binding: { discountPercentage: n.value },
                                    }),
                                )
                              : null;
                    }),
                    Su = (0, De.Pi)(({ index: e, className: t }) => {
                        const a = Io().model,
                            n = G().model,
                            s = a.root.get(),
                            i = s.currentRank,
                            o = s.maxAchievedRank,
                            u = a.computes.rankDiscount(e),
                            l = u.rank === o,
                            c = !u.wasUnlocked;
                        return r().createElement(
                            'div',
                            { className: b()('RankDiscount_base_0c', t) },
                            u.rank === i &&
                                r().createElement(Qr, {
                                    className: 'RankDiscount_godRays_e6',
                                    src: String(R.videos.comp7.godRaysNew_130x130()),
                                    autoplay: !0,
                                    loop: !0,
                                }),
                            r().createElement(
                                hn,
                                {
                                    rank: u.rank,
                                    from: u.from,
                                    to: u.to,
                                    divisions: u.divisions,
                                    className: 'RankDiscount_rank_b9',
                                    ignoreShowDelay: !0,
                                },
                                r().createElement(ba, {
                                    seasonName: n.season.name.get(),
                                    size: va.x48,
                                    rank: u.rank,
                                    className: b()(c && 'RankDiscount_disabledRankEmblem_e7'),
                                }),
                            ),
                            c && r().createElement('div', { className: 'RankDiscount_lock_63' }),
                            r().createElement(
                                'div',
                                { className: b()('RankDiscount_footer_65', l && 'RankDiscount_footer__maxRank_e5') },
                                r().createElement(Bu, { index: e }),
                            ),
                        );
                    }),
                    yu = (0, De.Pi)(({ className: e }) => {
                        const t = Io().model;
                        return r().createElement(
                            'div',
                            { className: b()('DiscountSection_base_01', e) },
                            r().createElement(wu, null, R.strings.comp7_ext.products.discountSectionName()),
                            r().createElement(
                                'div',
                                { className: 'DiscountSection_discounts_1b' },
                                Kt(t.computes.rankDiscountsLength(), (e) =>
                                    r().createElement(Su, {
                                        key: e,
                                        index: e,
                                        className: 'DiscountSection_rankDiscount_79',
                                    }),
                                ),
                            ),
                            r().createElement(Pn, {
                                text: R.strings.comp7_ext.products.discountDescription(),
                                classMix: 'DiscountSection_discountDescription_da',
                            }),
                        );
                    }),
                    Nu = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: b()('InProgressSection_base_27', e) },
                            r().createElement(wu, null),
                            r().createElement(
                                'div',
                                { className: 'InProgressSection_content_66' },
                                r().createElement('div', { className: 'InProgressSection_background_8d' }),
                                r().createElement('div', { className: 'InProgressSection_highlight_dd' }),
                                r().createElement(
                                    'div',
                                    { className: 'InProgressSection_state_de' },
                                    r().createElement(
                                        'div',
                                        { className: 'InProgressSection_inProgressString_23' },
                                        r().createElement('div', {
                                            className: 'InProgressSection_inProgressStringIcon_c7',
                                        }),
                                        R.strings.comp7_ext.products.inProgress(),
                                    ),
                                ),
                            ),
                            r().createElement(wu, null),
                        ),
                    Pu = ({ name: e, className: t }) =>
                        r().createElement(
                            'span',
                            { className: t },
                            ta(R.strings.comp7_ext.quotesWrapper(), { name: e }),
                        ),
                    ku = {
                        base: 'VehicleRole_base_47',
                        base__22x22: 'VehicleRole_base__22x22_59',
                        iconContainer: 'VehicleRole_iconContainer_07',
                        icon: 'VehicleRole_icon_f1',
                    };
                let xu;
                !(function (e) {
                    e.x22 = '22x22';
                })(xu || (xu = {}));
                const Ru = R.images.gui.maps.icons.roleExp.roles,
                    Iu = R.strings.menu.roleExp,
                    Tu = (0, n.memo)(
                        ({
                            role: e,
                            size: t = xu.x22,
                            roleIconFolderPath: a = Ru.$dyn(`c_${t}`),
                            className: n,
                            classNames: s,
                        }) => {
                            const i = aa(e);
                            return r().createElement(
                                'div',
                                { className: b()(ku.base, ku[`base__${t}`], n) },
                                r().createElement(
                                    'div',
                                    { className: b()(ku.iconContainer, null == s ? void 0 : s.iconContainer) },
                                    r().createElement('div', {
                                        className: b()(ku.icon, null == s ? void 0 : s.icon),
                                        style: { backgroundImage: `url(${null == a ? void 0 : a.$dyn(i)})` },
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: b()(ku.label, null == s ? void 0 : s.label) },
                                    r().createElement(wn, {
                                        text: `${Iu.roleName.$dyn(i)}`,
                                        binding: { groupName: Iu.roleGroupName.$dyn(i) },
                                    }),
                                ),
                            );
                        },
                    ),
                    Lu = 'NationFlag_nationFlag_99',
                    Ou = R.images.gui.maps.icons.eventBoards.flagsOverlay,
                    Mu = ({ nation: e, className: t }) =>
                        r().createElement(
                            'div',
                            { className: b()('NationFlag_base_1b', t) },
                            r().createElement('div', {
                                className: Lu,
                                style: { backgroundImage: `url(${Ou.$dyn(e)})` },
                            }),
                            r().createElement('div', {
                                className: Lu,
                                style: { backgroundImage: `url(${Ou.$dyn(e)})` },
                            }),
                        ),
                    $u = 'NameSection_base_cc',
                    Wu = 'NameSection_productName_dd',
                    Hu = (e) => (e >= A.Medium ? Vo.x64 : Vo.x48),
                    zu = R.strings.comp7_ext.products,
                    Uu = { label: 'NameSection_vehicleRoleLabel_79' },
                    Vu = (0, De.Pi)(({ className: e }) => {
                        const t = Io().model,
                            a = w().mediaSize,
                            n = t.computes.selectedProduct(),
                            s = { id: n.id, tooltipId: n.tooltipId };
                        switch (n.type) {
                            case lr.Vehicle: {
                                const i = n.vehicleInfo,
                                    o = i.tier,
                                    u = i.name,
                                    l = i.type,
                                    c = i.isPremium,
                                    d = i.roleKey,
                                    m = i.nation,
                                    _ = i.vehicleCD;
                                return r().createElement(
                                    'div',
                                    { className: b()($u, e) },
                                    r().createElement(Mu, { nation: m, className: 'NameSection_nationFlag_16' }),
                                    r().createElement(
                                        'div',
                                        { className: 'NameSection_vehicleNameContainer_42' },
                                        r().createElement(
                                            Kn,
                                            { args: s },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(jo, {
                                                    tier: o,
                                                    name: u,
                                                    type: l,
                                                    isPremium: c,
                                                    size: Hu(a),
                                                    className: Wu,
                                                }),
                                            ),
                                        ),
                                    ),
                                    r().createElement(
                                        K,
                                        {
                                            contentId:
                                                R.views.lobby.ranked.tooltips.RankedBattlesRolesTooltipView('resId'),
                                            args: { vehicleCD: _ },
                                        },
                                        r().createElement(
                                            'div',
                                            null,
                                            r().createElement(Tu, {
                                                role: d,
                                                className: 'NameSection_vehicleRole_a1',
                                                classNames: Uu,
                                            }),
                                        ),
                                    ),
                                    t.computes.hasVehicleDescription() &&
                                        r().createElement(wn, {
                                            text: n.description,
                                            classMix: 'NameSection_vehicleDescription_d3',
                                        }),
                                );
                            }
                            case lr.Style3d: {
                                const t = n.vehicleInfo,
                                    a = t.tier,
                                    i = t.name,
                                    o = t.type,
                                    u = t.isPremium;
                                return r().createElement(
                                    'div',
                                    { className: b()($u, e) },
                                    r().createElement(
                                        Kn,
                                        { args: s },
                                        r().createElement(
                                            'div',
                                            null,
                                            r().createElement(wn, {
                                                text: zu.style3d(),
                                                binding: { name: r().createElement(Pu, { name: n.name }) },
                                                classMix: Wu,
                                            }),
                                        ),
                                    ),
                                    r().createElement(wn, {
                                        text: R.strings.comp7_ext.forVehicle(),
                                        binding: {
                                            vehicleName: r().createElement(jo, {
                                                name: i,
                                                tier: a,
                                                type: o,
                                                isPremium: u,
                                                className: 'NameSection_style3dSubtitleVehicleText_dc',
                                            }),
                                        },
                                        classMix: 'NameSection_style3dSubtitle_3e',
                                    }),
                                );
                            }
                            case lr.Reward:
                                return r().createElement(
                                    'div',
                                    { className: b()($u, e) },
                                    r().createElement(
                                        Kn,
                                        { args: s },
                                        r().createElement('div', { className: Wu }, n.reward.label),
                                    ),
                                );
                            default:
                                return (console.error(`Provide NameSection case for ProductTypes:${n.type}`), null);
                        }
                    }),
                    Gu = {
                        base: 'PriceSection_base_6c',
                        container: 'PriceSection_container_e9',
                        priceContainer: 'PriceSection_priceContainer_e4',
                        price: 'PriceSection_price_81',
                        limitString: 'PriceSection_limitString_e1',
                        count: 'PriceSection_count_03',
                        separator: 'PriceSection_separator_e8',
                        accessContainer: 'PriceSection_accessContainer_3a',
                        rankBackground: 'PriceSection_rankBackground_f6',
                        accessBlock: 'PriceSection_accessBlock_33',
                        lock: 'PriceSection_lock_32',
                        accessString: 'PriceSection_accessString_c3',
                        rankString: 'PriceSection_rankString_b6',
                        currencyValue: 'PriceSection_currencyValue_c5',
                        discount: 'PriceSection_discount_e5',
                        discount__freeXP: 'PriceSection_discount__freeXP_8f',
                        discount__credits: 'PriceSection_discount__credits_e0',
                        discount__gold: 'PriceSection_discount__gold_33',
                        discount__xp: 'PriceSection_discount__xp_ce',
                        discount__crystal: 'PriceSection_discount__crystal_0f',
                        discount__equipCoin: 'PriceSection_discount__equipCoin_3b',
                        discountLine: 'PriceSection_discountLine_93',
                        buttonContainer: 'PriceSection_buttonContainer_b4',
                        button: 'PriceSection_button_ab',
                    },
                    qu = R.strings.comp7_ext.products,
                    ju = (0, De.Pi)(() => {
                        const e = Io(),
                            t = e.model,
                            a = e.controls,
                            n = t.computes.selectedProductIndex(),
                            s = t.computes.selectedProduct(),
                            o = t.computes.priceConfig(n).isEnough,
                            u = () => {
                                (i.O.sound.play.sound(R.sounds.comp_7_shop_purchase_preview()), a.purchase());
                            };
                        switch (s.state) {
                            case cr.Locked:
                                return r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: Gu.separator }),
                                    r().createElement(
                                        'div',
                                        { className: Gu.accessContainer },
                                        r().createElement('div', {
                                            className: Gu.rankBackground,
                                            style: {
                                                backgroundImage: `url(${Ca(R.images.comp7.gui.maps.icons.products.accessBackgrounds, s.rank)})`,
                                            },
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: Gu.accessBlock },
                                            r().createElement('div', { className: Gu.lock }),
                                            r().createElement(wn, {
                                                text: R.strings.comp7_ext.products.message.rankAccess(),
                                                binding: {
                                                    rank: r().createElement(
                                                        'span',
                                                        { className: Gu.rankString },
                                                        Da(s.rank),
                                                    ),
                                                },
                                                classMix: Gu.accessString,
                                            }),
                                        ),
                                    ),
                                );
                            case cr.ReadyToPurchase:
                                return r().createElement(
                                    te,
                                    { isEnabled: !o, body: qu.message.notEnough() },
                                    r().createElement(
                                        'div',
                                        { className: Gu.buttonContainer },
                                        r().createElement(
                                            ht,
                                            { type: 'main', onClick: u, mixClass: Gu.button, disabled: !o },
                                            qu.actions.buy(),
                                        ),
                                    ),
                                );
                            default:
                                return (
                                    console.error(
                                        `ActionsContainer in PriceSection was called for unappropriated state ${s.state}`,
                                    ),
                                    null
                                );
                        }
                    }),
                    Qu = { value: Gu.currencyValue },
                    Yu = (0, De.Pi)(({ className: e }) => {
                        const t = Io().model,
                            a = t.computes.selectedProduct(),
                            n = t.computes.selectedProductIndex(),
                            s = t.computes.priceConfig(n),
                            i = s.hasDiscount,
                            o = s.isEnough;
                        return r().createElement(
                            'div',
                            { className: b()(Gu.base, e) },
                            r().createElement(wu, null, R.strings.comp7_ext.products.priceSectionName()),
                            r().createElement(
                                'div',
                                { className: Gu.container },
                                r().createElement(
                                    'div',
                                    { className: Gu.priceContainer },
                                    r().createElement(
                                        'div',
                                        { className: Gu.price },
                                        i &&
                                            r().createElement(
                                                'div',
                                                { className: b()(Gu.discount, Gu[`discount__${a.price.name}`]) },
                                                r().createElement(j, { value: a.price.value }),
                                                r().createElement('div', { className: Gu.discountLine }),
                                            ),
                                        r().createElement(tu, {
                                            size: Zo.large,
                                            type: a.price.name,
                                            value: i ? a.price.discountValue : a.price.value,
                                            isEnough: o,
                                            classNames: Qu,
                                        }),
                                    ),
                                    t.computes.hasLimitedQuantity() &&
                                        r().createElement(
                                            'div',
                                            { className: Gu.limitString },
                                            r().createElement(wn, {
                                                text: R.strings.comp7_ext.products.limitedQuantitySeason(),
                                                binding: {
                                                    count: r().createElement(
                                                        'span',
                                                        { className: Gu.count },
                                                        a.limitedQuantity,
                                                    ),
                                                },
                                            }),
                                        ),
                                ),
                                r().createElement(ju, null),
                            ),
                        );
                    }),
                    Xu = 'PurchasedSection_buttonContainer_5b',
                    Ku = 'PurchasedSection_button_94',
                    Zu = R.strings.comp7_ext.products,
                    Ju = (0, De.Pi)(() => {
                        const e = Io(),
                            t = e.model,
                            a = e.controls,
                            n = t.computes.selectedProduct();
                        switch (n.type) {
                            case lr.Vehicle:
                                return n.canGoToHangar
                                    ? r().createElement(
                                          'div',
                                          { className: Xu },
                                          r().createElement(
                                              ht,
                                              { onClick: a.goToHangar, mixClass: Ku },
                                              Zu.actions.toHangar(),
                                          ),
                                      )
                                    : null;
                            case lr.Style3d: {
                                const e = !n.canGoToCustomization;
                                return r().createElement(
                                    te,
                                    {
                                        isEnabled: e,
                                        header: Zu.customizationUnavailable.title(),
                                        body: Zu.customizationUnavailable.body(),
                                    },
                                    r().createElement(
                                        'div',
                                        { className: Xu },
                                        r().createElement(
                                            ht,
                                            { onClick: a.goToCustomization, mixClass: Ku, disabled: e },
                                            Zu.actions.toCustomization(),
                                        ),
                                    ),
                                );
                            }
                            default:
                                return null;
                        }
                    }),
                    el = R.strings.comp7_ext.products,
                    tl = (0, De.Pi)(({ className: e }) => {
                        const t = Io().model.computes.selectedProduct();
                        return r().createElement(
                            'div',
                            { className: b()('PurchasedSection_base_cd', e) },
                            r().createElement(wu, null),
                            r().createElement(
                                'div',
                                { className: 'PurchasedSection_content_47' },
                                r().createElement('div', { className: 'PurchasedSection_background_34' }),
                                r().createElement('div', { className: 'PurchasedSection_highlight_91' }),
                                r().createElement(
                                    'div',
                                    { className: 'PurchasedSection_state_a8' },
                                    r().createElement(
                                        'div',
                                        { className: 'PurchasedSection_purchasedString_11' },
                                        r().createElement('div', {
                                            className: 'PurchasedSection_purchasedStringIcon_53',
                                        }),
                                        R.strings.comp7_ext.products.purchased(),
                                    ),
                                    t.type === lr.Reward &&
                                        r().createElement(
                                            'div',
                                            { className: 'PurchasedSection_quantityOfferString_a3' },
                                            ta(el.limitedQuantitySeason(), { count: t.limitedQuantity }),
                                        ),
                                ),
                            ),
                            r().createElement(wu, null),
                            r().createElement(Ju, null),
                        );
                    }),
                    al = (0, De.Pi)(({ className: e }) => {
                        const t = Io().controls;
                        return r().createElement(
                            'div',
                            { className: b()('ReadyToRestoreSection_base_6c', e) },
                            r().createElement(wu, null),
                            r().createElement(
                                'div',
                                { className: 'ReadyToRestoreSection_content_0a' },
                                r().createElement(
                                    'div',
                                    { className: 'ReadyToRestoreSection_description_ef' },
                                    r().createElement(wn, {
                                        text: R.strings.comp7_ext.products.readyToRestoreDescription(),
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'ReadyToRestoreSection_buttonContainer_9a' },
                                    r().createElement(
                                        ht,
                                        {
                                            type: 'primary',
                                            onClick: () => {
                                                (i.O.sound.play.sound(R.sounds.comp_7_shop_purchase_preview()),
                                                    t.restore());
                                            },
                                            mixClass: 'ReadyToRestoreSection_button_81',
                                        },
                                        R.strings.comp7_ext.products.actions.restore(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    nl = 'ProductDetails_section_42',
                    rl = [cr.Locked, cr.ReadyToPurchase],
                    sl = (0, De.Pi)(({ className: e }) => {
                        const t = Io().model.computes.selectedProduct();
                        return r().createElement(
                            'div',
                            { className: b()('ProductDetails_base_6b', e) },
                            r().createElement(Vu, { className: nl }),
                            rl.includes(t.state) && r().createElement(yu, { className: nl }),
                            (() => {
                                switch (t.state) {
                                    case cr.Purchased:
                                        return r().createElement(tl, { className: nl });
                                    case cr.InProgress:
                                        return r().createElement(Nu, { className: nl });
                                    case cr.ReadyToRestore:
                                        return r().createElement(al, { className: nl });
                                    default:
                                        return r().createElement(Yu, { className: nl });
                                }
                            })(),
                        );
                    }),
                    il = { from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 300 } },
                    ol = {
                        from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.9)' },
                        to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
                        config: { duration: 100 },
                    };
                function ul() {
                    return (
                        (ul = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        ul.apply(null, arguments)
                    );
                }
                const ll = (e) => (e >= A.Large ? Pi.S600x450 : e >= A.Small ? Pi.S400x300 : Pi.S296x222),
                    cl = (0, De.Pi)(() => {
                        const e = Io().model,
                            t = w().mediaSize,
                            a = (0, Ke.useSpring)(_t),
                            s = e.computes.selectedProduct(),
                            i = e.computes.controlsConfig().hasControls,
                            o = (0, Ke.useSpring)(() => il),
                            u = o[0],
                            l = o[1],
                            c = (0, Ke.useSpring)(() => ol),
                            d = c[0],
                            m = c[1];
                        return (
                            (0, n.useLayoutEffect)(() => {
                                (m.set(ol.from), l.set(il.from));
                            }, [m, l, s.id, s.state]),
                            (0, n.useEffect)(() => {
                                (m.start(Object.assign({}, ol, { delay: 300 })),
                                    l.start(Object.assign({}, il, { delay: 100 })));
                            }, [m, l, s.id, s.state]),
                            r().createElement(
                                r().Fragment,
                                null,
                                s.type === lr.Reward &&
                                    r().createElement(
                                        'div',
                                        { className: 'ShopPage_rewardContainer_4f' },
                                        r().createElement('div', { className: 'ShopPage_rewardHighlight_21' }),
                                        r().createElement(
                                            Ke.animated.div,
                                            { style: u },
                                            r().createElement(
                                                ji,
                                                ul({}, ro({ reward: s.reward, size: ll(t) }), {
                                                    tooltipArgs: Vi({ tooltipId: s.tooltipId, id: s.id }),
                                                    className: 'ShopPage_rewardBase_69',
                                                }),
                                            ),
                                        ),
                                    ),
                                i &&
                                    r().createElement(
                                        Ke.animated.div,
                                        { style: d, className: 'ShopPage_controls_1c' },
                                        r().createElement(Cu, { key: s.id }),
                                    ),
                                r().createElement(
                                    Ke.animated.div,
                                    { style: u, className: 'ShopPage_mainContainer_1f' },
                                    r().createElement(sl, { className: 'ShopPage_details_9b' }),
                                ),
                                r().createElement(
                                    Ke.animated.div,
                                    { style: a },
                                    r().createElement(vu, { className: 'ShopPage_carousel_93' }),
                                ),
                            )
                        );
                    }),
                    dl = R.strings.comp7_ext.page.heading,
                    ml = { activeSeasonState: 'ShopPage_activeSeasonState_48' },
                    _l = { [No.Initial]: () => r().createElement('div', null), [No.Success]: cl, [No.Error]: Lo },
                    gl = (0, De.Pi)(() => {
                        const e = (0, Ke.useSpring)(_t),
                            t = Io(),
                            a = t.model,
                            n = t.controls,
                            s = a.root.get().shopState,
                            i = a.computes.hasSceneWrapper(),
                            o = _l[s];
                        return o
                            ? r().createElement(
                                  'div',
                                  { className: 'ShopPage_base_c6' },
                                  i &&
                                      r().createElement(
                                          'div',
                                          { className: 'ShopPage_sceneWrapper_9d' },
                                          r().createElement(Oo, {
                                              moveSpace: n.moveSpace,
                                              onMouseOver3dScene: n.mouseOver3dScene,
                                          }),
                                      ),
                                  s !== No.Error && r().createElement('div', { className: 'ShopPage_vignette_ad' }),
                                  r().createElement(
                                      'div',
                                      { className: 'ShopPage_headersWrapper_c7' },
                                      r().createElement(dt, { className: be }, dl.shop()),
                                      r().createElement(ar, { classNames: ml }),
                                  ),
                                  r().createElement(
                                      Ke.animated.div,
                                      { className: 'ShopPage_contentWrapper_c2', style: e },
                                      r().createElement(o, null),
                                  ),
                              )
                            : (console.error('Unreachable code: ShopPage.tsx'), null);
                    });
                let El;
                !(function (e) {
                    ((e.LOCKED_BY_NO_X_VEHICLES = 'lockedByNoXVehicles'),
                        (e.LOCKED_BY_INACTIVE_SEASON = 'lockedByInactiveSeason'),
                        (e.LOCKED_BY_PREVIOUS_QUEST = 'lockedByPreviousQuest'),
                        (e.ACTIVE = 'active'),
                        (e.COMPLETED = 'completed'));
                })(El || (El = {}));
                const pl = [El.LOCKED_BY_NO_X_VEHICLES, El.LOCKED_BY_INACTIVE_SEASON, El.LOCKED_BY_PREVIOUS_QUEST],
                    vl = z()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    questCards: e.array('questCards'),
                                    progressPoints: e.array('progressPoints'),
                                },
                                a = (0, ke.Om)(
                                    (e) => {
                                        const a = 5 * e,
                                            n = [...We(t.questCards.get(), a, a + 5 - 1)];
                                        if (5 !== n.length)
                                            throw new Error(`Unexpected weekly list length: ${n.length} expected: 5`);
                                        return n;
                                    },
                                    { equals: M },
                                ),
                                n = (0, ke.Om)(
                                    (e, t) => {
                                        const n = Te(a(e), t);
                                        if (!n) throw new Error(`Unexpected card index: ${t}`);
                                        return Object.assign({}, n);
                                    },
                                    { equals: M },
                                ),
                                r = (0, ke.Om)(
                                    (e, t, a) => {
                                        const r = n(e, t).rewards;
                                        return so({ rewards: r, size: a });
                                    },
                                    { equals: M },
                                ),
                                s = (0, ke.Om)((e, t) => pl.includes(n(e, t).state));
                            return Object.assign({}, t, {
                                computes: {
                                    questCardsLength: (0, ke.Om)((e) => a(e).length),
                                    questCard: n,
                                    questRewards: r,
                                    isQuestLocked: s,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            animationStart: e.createCallbackNoArgs('onAnimationStart'),
                            animationEnd: e.createCallbackNoArgs('onAnimationEnd'),
                        }),
                    ),
                    hl = vl[0],
                    bl = vl[1],
                    fl = () => {};
                let Cl;
                (q.Sw.instance,
                    (function (e) {
                        ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                    })(Cl || (Cl = {})),
                    q.Sw.instance);
                const Al = (e = 0, t, a = 0, r = fl) => {
                    const s = (0, n.useState)(e),
                        i = s[0],
                        o = s[1];
                    return (
                        (0, n.useEffect)(() => {
                            if (e > 0) {
                                o(e);
                                const n = Date.now(),
                                    s = setInterval(
                                        () => {
                                            const t = e - Math.floor((Date.now() - n) / 1e3);
                                            null !== a && t <= a ? (o(a), r && r(), clearInterval(s)) : o(t);
                                        },
                                        1e3 * (t || (e > 120 ? Ln : 1)),
                                    );
                                return () => {
                                    clearInterval(s);
                                };
                            }
                        }, [e, t, a, r]),
                        i
                    );
                };
                let Dl, Fl;
                (!(function (e) {
                    ((e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none'));
                })(Dl || (Dl = {})),
                    (function (e) {
                        ((e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended'));
                    })(Fl || (Fl = {})));
                const wl = (e) => e.toString().padStart(2, '0'),
                    Bl = R.images.gui.maps.icons.components.countdown,
                    Sl = (e, t) => {
                        const a = 2 === t ? Bl.big : Bl;
                        switch (e) {
                            case Dl.Timer:
                                return a.clock();
                            case Dl.Countdown:
                                return a.hourglass();
                            case Dl.Cooldown:
                                return a.lock();
                        }
                    },
                    yl = (0, n.memo)(
                        ({
                            duration: e,
                            icon: t = Dl.Timer,
                            style: a = Fl.Description,
                            onTimeReached: s,
                            refreshRate: o,
                            className: u = '',
                            classNames: l = {},
                        }) => {
                            const c = null != o ? o : a !== Fl.Description ? 1 : void 0,
                                d = Al(e, c),
                                m = (() => {
                                    const e = (0, n.useState)(i.O.view.getScale()),
                                        t = e[0],
                                        a = e[1];
                                    return (
                                        (0, n.useEffect)(() => {
                                            const e = () => {
                                                a(i.O.view.getScale());
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
                                })();
                            s && s[d] && s[d]();
                            const _ = ((e, t) => {
                                switch (t) {
                                    case Fl.Description:
                                        return ((e, t = !0) =>
                                            e.days > 7 && t
                                                ? ea(R.strings.common.duration.days(), { days: e.days })
                                                : e.days >= 1
                                                  ? 0 === e.hours
                                                      ? ea(R.strings.common.duration.days(), { days: e.days })
                                                      : `${ea(R.strings.common.duration.days(), { days: e.days })} ${ea(R.strings.common.duration.hours(), { hours: e.hours })}`
                                                  : e.hours >= 1
                                                    ? 0 === e.minutes
                                                        ? ea(R.strings.common.duration.hours(), { hours: e.hours })
                                                        : `${ea(R.strings.common.duration.hours(), { hours: e.hours })} ${ea(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                                    : ea(R.strings.common.duration.minutes(), {
                                                          minutes: e.minutes || 1,
                                                      }))(e);
                                    case Fl.Short:
                                        return `${wl(e.minutes)}:${wl(e.seconds)}`;
                                    case Fl.Long:
                                        return `${wl(e.hours)}:${wl(e.minutes)}:${wl(e.seconds)}`;
                                    case Fl.Extended:
                                        return `${ea(R.strings.common.duration.days(), { days: e.days })} | ${wl(e.hours)}:${wl(e.minutes)}:${wl(e.seconds)}`;
                                }
                            })(
                                (function (e = 0) {
                                    let t = e;
                                    const a = Math.trunc(t / Mn);
                                    t -= a * Mn;
                                    const n = Math.trunc(t / On);
                                    t -= n * On;
                                    const r = Math.trunc(t / Ln);
                                    return ((t -= r * Ln), { days: a, hours: n, minutes: r, seconds: t });
                                })(d),
                                a,
                            );
                            return r().createElement(
                                'div',
                                { className: b()('Countdown_base_fe', u) },
                                t !== Dl.None &&
                                    r().createElement('div', {
                                        className: b()('Countdown_icon_8b', l.icon),
                                        style: { backgroundImage: `url('${Sl(t, m)}')` },
                                    }),
                                r().createElement('div', { className: b()('Countdown_description_8d', l.text) }, _),
                            );
                        },
                    ),
                    Nl = 'CountdownStatus_text_74',
                    Pl = R.strings.comp7_ext.weeklyQuests.CountdownStatus,
                    kl = { text: 'CountdownStatus_timer_04', icon: 'CountdownStatus_icon_50' },
                    xl = (0, De.Pi)(({ className: e }) => {
                        const t = bl().model.root.get().timeToNewQuests;
                        return r().createElement(
                            'div',
                            { className: b()('CountdownStatus_base_1f', e) },
                            r().createElement(
                                'div',
                                { className: 'CountdownStatus_content_a0' },
                                r().createElement('div', { className: 'CountdownStatus_shine_05' }),
                                -1 === t
                                    ? r().createElement('div', { className: Nl }, Pl.done())
                                    : r().createElement(wn, {
                                          text: Pl.active(5),
                                          binding: {
                                              value: 5,
                                              countdown: r().createElement(yl, {
                                                  duration: t,
                                                  className: 'CountdownStatus_countdown_7d',
                                                  classNames: kl,
                                              }),
                                          },
                                          classMix: Nl,
                                      }),
                            ),
                        );
                    }),
                    Rl = R.strings.comp7_ext.weeklyQuests.card.progress,
                    Il = ({ current: e, total: t, isDisabled: a, className: n }) =>
                        r().createElement(
                            'div',
                            { className: b()('Progress_base_49', n) },
                            r().createElement(wn, {
                                classMix: 'Progress_counter_3a',
                                text: Rl.counter(),
                                binding: {
                                    current: r().createElement(
                                        'div',
                                        { className: 'Progress_current_03' },
                                        r().createElement(j, { value: e }),
                                    ),
                                    total: r().createElement(j, { value: t }),
                                },
                            }),
                            r().createElement(
                                'div',
                                { className: 'Progress_progressBar_6d' },
                                r().createElement(Ps, { size: es.Small, value: e, maxValue: t, disabled: a }),
                            ),
                        ),
                    Tl = {
                        '--pageContentWidth': '78vw',
                        base: 'QuestCard_base_6e',
                        highlightContainer: 'QuestCard_highlightContainer_16',
                        highlight: 'QuestCard_highlight_c9',
                        glowContainer: 'QuestCard_glowContainer_18',
                        glow: 'QuestCard_glow_88',
                        glowAppearance: 'QuestCard_glowAppearance_07',
                        icon: 'QuestCard_icon_15',
                        base__completed: 'QuestCard_base__completed_46',
                        base__locked: 'QuestCard_base__locked_f3',
                        content: 'QuestCard_content_73',
                        progress: 'QuestCard_progress_e2',
                        description: 'QuestCard_description_05',
                        reward: 'QuestCard_reward_19',
                        status: 'QuestCard_status_40',
                        fadeIn: 'QuestCard_fadeIn_d9',
                        fadeInThreeQuarters: 'QuestCard_fadeInThreeQuarters_45',
                        fadeInHalf: 'QuestCard_fadeInHalf_84',
                        fadeOut: 'QuestCard_fadeOut_94',
                        fadeInWithScale: 'QuestCard_fadeInWithScale_c1',
                        slideUp: 'QuestCard_slideUp_b6',
                        scale: 'QuestCard_scale_a6',
                        raysAppearance: 'QuestCard_raysAppearance_2e',
                        rotate: 'QuestCard_rotate_34',
                        'reverse-rotate': 'QuestCard_reverse-rotate_11',
                        highlightAppearance: 'QuestCard_highlightAppearance_77',
                        blink: 'QuestCard_blink_73',
                        slideUpIn: 'QuestCard_slideUpIn_86',
                    },
                    Ll = {
                        base: 'Status_base_58',
                        base__locked: 'Status_base__locked_0c',
                        icon: 'Status_icon_25',
                        base__completed: 'Status_base__completed_63',
                        text: 'Status_text_2b',
                    },
                    Ol = R.strings.comp7_ext.weeklyQuests.card,
                    Ml = (0, De.Pi)(({ weeklyIndex: e, index: t, className: a }) => {
                        const n = bl().model,
                            s = n.computes.questCard(e, t).state,
                            i = n.computes.isQuestLocked(e, t);
                        return r().createElement(
                            te,
                            {
                                isEnabled: i,
                                header: Ol.statusLockedTooltip.header(),
                                body: String(Ol.statusLockedTooltip.body.$dyn(s)),
                            },
                            r().createElement(
                                'div',
                                { className: b()(Ll.base, i ? Ll.base__locked : Ll[`base__${s}`], a) },
                                r().createElement('div', { className: Ll.icon }),
                                r().createElement(
                                    'div',
                                    { className: Ll.text },
                                    i ? Ol.status.locked() : Ol.status.$dyn(s),
                                ),
                            ),
                        );
                    }),
                    $l = (e) => (pl.includes(e) ? 'locked' : e),
                    Wl = (0, De.Pi)(({ weeklyIndex: e, index: t }) => {
                        const a = bl().model,
                            n = a.computes.questCard(e, t),
                            s = n.state,
                            i = n.currentProgress,
                            o = n.totalProgress,
                            u = n.description,
                            l = n.iconKey,
                            c = w().mediaSize > A.Large ? Pi.Big : Pi.Small;
                        return r().createElement(
                            'div',
                            { className: b()(Tl.base, Tl[`base__${$l(s)}`]) },
                            s === El.ACTIVE &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: Tl.highlightContainer },
                                        r().createElement('div', { className: Tl.highlight }),
                                    ),
                                    r().createElement(Xr, {
                                        className: Tl.glowContainer,
                                        classNames: { glow: Tl.glow },
                                    }),
                                ),
                            r().createElement('div', {
                                className: Tl.icon,
                                style: { backgroundImage: `url(R.images.comp7.gui.maps.icons.weekly_quests.${l})` },
                            }),
                            r().createElement(
                                'div',
                                { className: Tl.content },
                                r().createElement(Il, {
                                    current: i,
                                    total: o,
                                    isDisabled: s !== El.ACTIVE,
                                    className: Tl.progress,
                                }),
                                r().createElement('div', { className: Tl.description }, u),
                                r().createElement(Yi, {
                                    data: a.computes.questRewards(e, t, c),
                                    size: c,
                                    rewardItemClassMix: Tl.reward,
                                }),
                            ),
                            r().createElement(Ml, { weeklyIndex: e, index: t, className: Tl.status }),
                        );
                    }),
                    Hl = {
                        base: 'Separator_base_b5',
                        line: 'Separator_line_e9',
                        line__top: 'Separator_line__top_f0',
                        line__bottom: 'Separator_line__bottom_42',
                        shine: 'Separator_shine_17',
                        shine__sideRight: 'Separator_shine__sideRight_3c',
                        arrowContainer: 'Separator_arrowContainer_00',
                        arrow: 'Separator_arrow_ab',
                        base__highlighted: 'Separator_base__highlighted_ea',
                    };
                let zl;
                !(function (e) {
                    ((e.Normal = 'normal'),
                        (e.Highlighted = 'highlighted'),
                        (e.SideLeft = 'sideLeft'),
                        (e.SideRight = 'sideRight'));
                })(zl || (zl = {}));
                const Ul = ({ type: e }) =>
                        e === zl.SideLeft || e === zl.SideRight
                            ? r().createElement(
                                  'div',
                                  { className: Hl.line },
                                  r().createElement('div', { className: b()(Hl.shine, Hl[`shine__${e}`]) }),
                              )
                            : r().createElement(
                                  'div',
                                  { className: b()(Hl.base, Hl[`base__${e}`]) },
                                  r().createElement('div', { className: b()(Hl.line, Hl.line__top) }),
                                  r().createElement(
                                      'div',
                                      { className: Hl.arrowContainer },
                                      r().createElement('div', { className: Hl.arrow }),
                                  ),
                                  r().createElement('div', { className: b()(Hl.line, Hl.line__bottom) }),
                              ),
                    Vl = (0, De.Pi)(({ weeklyIndex: e, className: t }) => {
                        const a = bl().model.computes;
                        return r().createElement(
                            'div',
                            { className: b()('WeeklyList_base_b9', t) },
                            r().createElement(Ul, { type: zl.SideLeft }),
                            Kt(5, (t) =>
                                r().createElement(
                                    n.Fragment,
                                    { key: t },
                                    t > 0 &&
                                        r().createElement(Ul, {
                                            type: a.isQuestLocked(e, t) ? zl.Normal : zl.Highlighted,
                                        }),
                                    r().createElement(Wl, { weeklyIndex: e, index: t }),
                                ),
                            ),
                            r().createElement(Ul, { type: zl.SideRight }),
                        );
                    }),
                    Gl = { wrapper: 'QuestsList_contentWrapper_0a', content: 'QuestsList_scrollContent_e3' },
                    ql = (0, De.Pi)(({ className: e }) => {
                        const t = (0, n.useState)(!1),
                            a = t[0],
                            s = t[1],
                            i = bl().model,
                            o = Math.floor(i.questCards.get().length / 5),
                            u = o > 1,
                            l = xr();
                        return (
                            Pr(l),
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    const e = l.getBounds()[1];
                                    s(e - l.animationScroll.scrollPosition.get() < 20);
                                };
                                return (
                                    l.events.on('change', e),
                                    l.events.on('resizeHandled', e),
                                    l.events.on('recalculateContent', e),
                                    () => {
                                        (l.events.off('change', e),
                                            l.events.off('resizeHandled', e),
                                            l.events.off('recalculateContent', e));
                                    }
                                );
                            }, [l]),
                            r().createElement(
                                'div',
                                { className: b()('QuestsList_base_56', e) },
                                r().createElement(
                                    Hr,
                                    { api: l, className: 'QuestsList_scrollWrapper_86', classNames: Gl },
                                    Kt(o, (e) =>
                                        r().createElement(Vl, {
                                            weeklyIndex: e,
                                            key: e,
                                            className: 'QuestsList_weeklyList_eb',
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    {
                                        className: b()(
                                            'QuestsList_countdownStatus_e8',
                                            (a || !u) && 'QuestsList_countdownStatus__show_3a',
                                        ),
                                    },
                                    r().createElement(xl, null),
                                ),
                            )
                        );
                    }),
                    jl = { from: { opacity: 0 }, to: { opacity: 0.6 }, delay: 500, config: { duration: 300 } },
                    Ql = R.strings.comp7_ext.claimRewards,
                    Yl = ({ isDisabled: e, onClick: t, className: a }) => {
                        const n = (0, Ke.useSpring)(jl);
                        return r().createElement(
                            te,
                            { isEnabled: e, body: Ql.rewardsUnavailable() },
                            r().createElement(
                                'div',
                                { className: b()('ClaimRewardsButton_base_67', a) },
                                !e &&
                                    r().createElement(Ke.animated.div, {
                                        className: 'ClaimRewardsButton_light_69',
                                        style: n,
                                    }),
                                r().createElement(
                                    'div',
                                    {
                                        className: b()(
                                            'ClaimRewardsButton_inner_ec',
                                            e && 'ClaimRewardsButton_inner__disabled_cd',
                                        ),
                                    },
                                    r().createElement(
                                        ht,
                                        {
                                            type: Et.ghost,
                                            size: pt.small,
                                            disabled: e,
                                            onClick: t,
                                            mixClass: b()(
                                                'ClaimRewardsButton_button_47',
                                                e && 'ClaimRewardsButton_button__disabled_71',
                                            ),
                                        },
                                        !e &&
                                            r().createElement('div', {
                                                className: 'ClaimRewardsButton_buttonBlink_7f',
                                            }),
                                        r().createElement(
                                            'div',
                                            { className: 'ClaimRewardsButton_buttonText_72' },
                                            Ql.button(),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Xl = {
                        base: 'AnimatedReward_base_31',
                        claimRewardsButton: 'AnimatedReward_claimRewardsButton_2c',
                        shine: 'AnimatedReward_shine_28',
                    };
                function Kl() {
                    return (
                        (Kl = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        Kl.apply(null, arguments)
                    );
                }
                const Zl = {
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                        delay: 600,
                        config: { duration: 300 },
                        onStart: () => {
                            i.O.sound.play.sound(R.sounds.bp_pick_up_award());
                        },
                    },
                    Jl = ({ reward: e, onClick: t, isDisabled: a, className: n }) => {
                        const s = (0, Ke.useSpring)(Zl);
                        return r().createElement(
                            'div',
                            { className: b()(Xl.base, n) },
                            r().createElement(Ke.animated.div, { className: Xl.shine, style: s }),
                            r().createElement(
                                'div',
                                { className: Xl.claimRewardsButton },
                                r().createElement(Yl, { isDisabled: a, onClick: t }),
                            ),
                            r().createElement(ji, Kl({}, e, { className: Xl.reward })),
                        );
                    },
                    ec = 'FinalRewards_reward_3d';
                function tc() {
                    return (
                        (tc = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        tc.apply(null, arguments)
                    );
                }
                const ac = (0, De.Pi)(({ rewards: e, maxValue: t, questsPassed: a, className: n }) => {
                        const s = Ie(),
                            i = s.model,
                            o = s.controls,
                            u = i.claimRewardsModel.get(),
                            l = u.isDisabled,
                            c = u.rewardsCount,
                            d = a === t;
                        return r().createElement(
                            'div',
                            { className: b()('FinalRewards_base_ef', n) },
                            Me(e, (e, t) =>
                                r().createElement(
                                    'div',
                                    { key: t, className: 'FinalRewards_wrapper_8d' },
                                    'deluxe_gift' === e.name && c > 0 && d
                                        ? r().createElement(Jl, {
                                              reward: e,
                                              onClick: o.openRewardsSelectionScreen,
                                              isDisabled: l,
                                              className: ec,
                                          })
                                        : r().createElement(
                                              ji,
                                              tc({}, e, {
                                                  className: b()(ec, d && 'FinalRewards_reward__achieved_5a'),
                                              }),
                                          ),
                                ),
                            ),
                            d && 0 === c && r().createElement('div', { className: 'FinalRewards_check_6e' }),
                        );
                    }),
                    nc = Pi.Small,
                    rc = (0, De.Pi)(({ tokenValue: e, rewards: t }) => {
                        const a = bl().model.root.get().questsPassed >= e;
                        return r().createElement(
                            'div',
                            { className: 'TokenPoint_base_8a' },
                            r().createElement(
                                'div',
                                { className: b()('TokenPoint_tokenValue_32', a && 'TokenPoint_tokenValue__passed_41') },
                                e,
                            ),
                            r().createElement('div', { className: 'TokenPoint_serif_80' }),
                            t &&
                                r().createElement(Yi, {
                                    data: so({ rewards: t, size: nc }),
                                    size: nc,
                                    classMix: b()('TokenPoint_rewards_e1', a && 'TokenPoint_rewards__passed_61'),
                                    rewardItemClassMix: 'TokenPoint_reward_18',
                                }),
                            a && 0 !== e && t && r().createElement('div', { className: 'TokenPoint_check_84' }),
                        );
                    }),
                    sc = 'TokenProgress_point_d9',
                    ic = (e, t) => ({ left: (100 / e) * t + '%' }),
                    oc = R.strings.comp7_ext.weeklyQuests.TokenProgress,
                    uc = Pi.Big,
                    lc = (0, De.Pi)(({ className: e }) => {
                        var t;
                        const a = bl(),
                            s = a.model,
                            i = a.controls,
                            o = s.root.get(),
                            u = o.previousQuestsPassed,
                            l = o.questsPassed,
                            c = s.progressPoints.get(),
                            d = Te(c, c.length - 1),
                            m = null != (t = null == d ? void 0 : d.count) ? t : 0,
                            _ = (0, n.useRef)(rs.Idle);
                        return r().createElement(
                            'div',
                            { className: b()('TokenProgress_base_f9', e) },
                            r().createElement(Pn, {
                                text: oc.header(),
                                binding: { passed: l, total: m },
                                classMix: 'TokenProgress_header_8d',
                            }),
                            r().createElement(wn, {
                                text: oc.subheader(5),
                                binding: { value: 5 },
                                classMix: 'TokenProgress_subheader_ae',
                            }),
                            r().createElement(
                                'div',
                                { className: 'TokenProgress_content_83' },
                                r().createElement(
                                    'div',
                                    { className: 'TokenProgress_progress_0b' },
                                    r().createElement(
                                        'div',
                                        { className: 'TokenProgress_progressBar_d5' },
                                        r().createElement(Ps, {
                                            value: l,
                                            maxValue: m,
                                            deltaFrom: u,
                                            onChangeAnimationState: (e) => {
                                                ((_.current = e), e === rs.Shrink && i.animationStart());
                                            },
                                            onEndAnimation: i.animationEnd,
                                        }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: 'TokenProgress_points_73' },
                                        r().createElement(
                                            'div',
                                            { className: sc },
                                            r().createElement(rc, { tokenValue: 0 }),
                                        ),
                                        Me(c, (e, t) =>
                                            r().createElement(
                                                'div',
                                                { key: t, className: sc, style: ic(m, e.count) },
                                                r().createElement(rc, {
                                                    tokenValue: e.count,
                                                    rewards: t === c.length - 1 ? void 0 : e.rewards,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                                d &&
                                    r().createElement(ac, {
                                        rewards: so({ rewards: d.rewards, size: uc }),
                                        maxValue: m,
                                        questsPassed: l,
                                        className: 'TokenProgress_finalRewards_0c',
                                    }),
                            ),
                        );
                    }),
                    cc = () => {
                        const e = (0, Ke.useSpring)(_t);
                        return r().createElement(
                            'div',
                            { className: 'WeeklyQuestsPage_base_66' },
                            r().createElement(dt, { className: be }, R.strings.comp7_ext.page.heading.weeklyQuests()),
                            r().createElement(ar, null),
                            r().createElement(
                                Ke.animated.div,
                                { className: 'WeeklyQuestsPage_content_48', style: e },
                                r().createElement(ql, { className: 'WeeklyQuestsPage_questsList_6c' }),
                                r().createElement(lc, { className: 'WeeklyQuestsPage_progression_dd' }),
                            ),
                        );
                    },
                    dc = {
                        inactiveProgression: { name: 'inactiveProgression', delay: 600 },
                        firstStageSeasonPoints: { name: 'firstStageSeasonPoints', delay: 100 },
                        firstStage: { name: 'firstStage', delay: 800 },
                        secondStageSeasonPoints: { name: 'secondStageSeasonPoints', delay: 100 },
                        secondStage: { name: 'secondStage', delay: 800 },
                        thirdStageSeasonPoints: { name: 'thirdStageSeasonPoints', delay: 100 },
                        thirdStage: { name: 'thirdStage', delay: 800 },
                        fourthStageSeasonPoints: { name: 'fourthStageSeasonPoints', delay: 100 },
                        fourthStage: { name: 'fourthStage', delay: 800 },
                        fifthStageSeasonPoints: { name: 'fifthStageSeasonPoints', delay: 100 },
                        fifthStage: { name: 'fifthStage', delay: 800 },
                        sixthStageSeasonPoints: { name: 'sixthStageSeasonPoints', delay: 100 },
                        sixthStage: { name: 'sixthStage', delay: 800 },
                        showLegend: { name: 'showLegend', delay: 700 },
                        transitionToRealData: { name: 'transitionToRealData', delay: 1e3 },
                        realData: { name: 'realData', delay: 0 },
                    },
                    mc = [dc.firstStage, dc.secondStage, dc.thirdStage, dc.fourthStage, dc.fifthStage, dc.sixthStage],
                    _c = mc.map((e) => e.name),
                    gc = (0, n.createContext)(null),
                    Ec = () => {
                        const e = (0, n.useContext)(gc);
                        if (null === e)
                            throw new Error(
                                'useAnimationApi was called in component, which is not wrapped in YearlyRewardsPageAnimationContext',
                            );
                        return e;
                    },
                    pc =
                        ((vc = {
                            steps: [
                                dc.inactiveProgression,
                                dc.firstStageSeasonPoints,
                                dc.firstStage,
                                dc.secondStageSeasonPoints,
                                dc.secondStage,
                                dc.thirdStageSeasonPoints,
                                dc.thirdStage,
                                dc.fourthStageSeasonPoints,
                                dc.fourthStage,
                                dc.fifthStageSeasonPoints,
                                dc.fifthStage,
                                dc.sixthStageSeasonPoints,
                                dc.sixthStage,
                                dc.showLegend,
                                dc.transitionToRealData,
                                dc.realData,
                            ],
                        }),
                        () => {
                            const e = vc.steps,
                                t = vc.autoStart,
                                a = void 0 === t || t,
                                r = (0, n.useRef)(null),
                                s = (0, n.useRef)('idle'),
                                i = St(),
                                o = (function () {
                                    const e = (0, n.useRef)(0);
                                    return (
                                        Br(() => {
                                            window.clearTimeout(e.current);
                                        }),
                                        (0, n.useMemo)(
                                            () => ({
                                                run: (t, a) => {
                                                    (window.clearTimeout(e.current),
                                                        (e.current = window.setTimeout(() => {
                                                            ((e.current = 0), t());
                                                        }, a)));
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
                                u = yr(),
                                l = (0, n.useMemo)(() => {
                                    const t = e[Symbol.iterator](),
                                        a = () => {
                                            const e = t.next();
                                            if (e.done) return ((s.current = 'end'), void i.trigger('end'));
                                            (o.run(() => {
                                                if (r.current) {
                                                    if (
                                                        (r.current.classList.add(e.value.name),
                                                        i.trigger('change', e.value),
                                                        e.value.stopNextSteps)
                                                    )
                                                        return ((s.current = 'paused'), void i.trigger('pause'));
                                                    a();
                                                } else
                                                    console.error(
                                                        `${e.value.name} step don't know on what rootRef it should be set`,
                                                    );
                                            }, e.value.delay),
                                                (s.current = 'running'));
                                        };
                                    return {
                                        rootRef: r,
                                        steps: e,
                                        delayUntilStep: (t) => {
                                            let a = 0;
                                            for (let n = 0; n < e.length; n++)
                                                if (((a += e[n].delay), e[n] === t)) return a;
                                            throw new Error(`delayUntilStep didn't find step: ${t.name}`);
                                        },
                                        events: { on: i.on, off: i.off },
                                        start: () => {
                                            (a(), i.trigger('start'));
                                        },
                                        resume: () => {
                                            'paused' === s.current
                                                ? (a(), i.trigger('resume'))
                                                : console.warn(
                                                      'api.resume() should be called only after paused animation, ignore resume() call',
                                                  );
                                        },
                                        skipAll: () => {
                                            (o.clear(),
                                                u.run(() => {
                                                    (e.forEach((e) => {
                                                        r.current
                                                            ? r.current.classList.add(e.name)
                                                            : console.error(
                                                                  `${e} tried to be set, but rootRef was not received in api`,
                                                              );
                                                    }),
                                                        (s.current = 'end'),
                                                        i.trigger('end'));
                                                }));
                                        },
                                    };
                                }, [o, i, u, e]);
                            return (
                                wr(() => {
                                    a && l.start();
                                }),
                                l
                            );
                        });
                var vc;
                const hc = ({ children: e }) => {
                    const t = pc();
                    return r().createElement(gc.Provider, { value: t }, e);
                };
                let bc;
                !(function (e) {
                    ((e.Guaranteed = 'guaranteed'),
                        (e.Possible = 'possible'),
                        (e.NotAvailable = 'notAvailable'),
                        (e.Claimed = 'claimed'));
                })(bc || (bc = {}));
                const fc = [
                        'customizations',
                        'modernized_devices_t1_gift',
                        'modernized_devices_t2_gift',
                        'modernized_devices_t3_gift',
                    ],
                    Cc = ['vehicles', 'premiumTank'],
                    Ac = ['styleProgressToken'],
                    Dc = (e) => fc.includes(e.name),
                    Fc = (e) => Cc.includes(e.name),
                    wc = (e) => Ac.includes(e.name),
                    Bc = z()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    cards: e.array('cards'),
                                    ranks: e.array('ranks'),
                                    hoveredCardIndex: $.LO.box(-1),
                                },
                                a = (0, ke.Om)(
                                    (e) => {
                                        const a = Te(t.cards.get(), e);
                                        if (!a) throw new Error(`card with index ${e} was not found`);
                                        return { rewardsState: a.rewardsState };
                                    },
                                    { equals: bt },
                                ),
                                n = (0, ke.Om)(
                                    (e) => {
                                        const a = Te(t.cards.get(), e);
                                        if (!a) throw new Error(`rewards: card with index ${e} was not found`);
                                        return Me(a.rewards, (e) => Object.assign({}, e));
                                    },
                                    { equals: M },
                                ),
                                r = (0, ke.Om)(
                                    (e) => {
                                        const a = Te(t.cards.get(), e);
                                        if (!a) throw new Error(`card with index ${e} was not found`);
                                        return Me(a.seasonPoints, (e) => Object.assign({}, e));
                                    },
                                    { equals: M },
                                ),
                                s = (0, ke.Om)(
                                    (e, t) => {
                                        const a = r(e);
                                        if (!a)
                                            throw new Error(`season points array with card index ${e} was not found`);
                                        const n = Te(a, t);
                                        if (!n)
                                            throw new Error(
                                                `season point with index ${t} in card with index ${e} was not found`,
                                            );
                                        return n;
                                    },
                                    { equals: M },
                                ),
                                i = (0, ke.Om)((e) =>
                                    [...We(t.cards.get(), 0, e)].reduce((e, t) => e + t.seasonPoints.length, 0),
                                ),
                                o = (0, ke.Om)((e) =>
                                    Ve(
                                        t.cards.get(),
                                        (t, a) =>
                                            t + ((e, t) => $e(e, ({ season: e }) => e === t).length)(a.seasonPoints, e),
                                        0,
                                    ),
                                ),
                                u = (0, ke.Om)(
                                    () => {
                                        const e = t.cards.get();
                                        return {
                                            possible: Ue(e, (e) => e.rewardsState === bc.Possible),
                                            guaranteed: Ue(e, (e) => e.rewardsState === bc.Guaranteed),
                                        };
                                    },
                                    { equals: bt },
                                ),
                                l = (0, ke.Om)(
                                    () => {
                                        const e = ((e, t) => {
                                            for (let a = 0; a < e.length; a++) {
                                                const n = He(Le(e, a).rewards, t);
                                                if (n) return n;
                                            }
                                        })(t.cards.get(), Fc);
                                        if (!e)
                                            throw new Error(
                                                'no one card consists vehicle, please change config with rewards',
                                            );
                                        return Object.assign({}, e);
                                    },
                                    { equals: M },
                                ),
                                c = (0, ke.Om)(
                                    () => {
                                        const e = He(t.cards.get(), (e) => void 0 !== He(e.rewards, Fc));
                                        if (!e)
                                            throw new Error(
                                                'no one card consists vehicle, please change config with rewards',
                                            );
                                        return Object.assign({}, e.vehicle);
                                    },
                                    { equals: M },
                                ),
                                d = (0, ke.Om)(() => {
                                    const e = u(),
                                        a = e.possible,
                                        n = e.guaranteed;
                                    return (({ maxIndex: e, possible: t, guaranteed: a }) =>
                                        void 0 !== t ? wt(0, e, t + 1) : void 0 !== a ? wt(0, e, a + 1) : 0)({
                                        maxIndex: t.cards.get().length - 1,
                                        possible: a,
                                        guaranteed: n,
                                    });
                                }),
                                m = (0, ke.Om)((e) => He(n(e), Dc), { equals: M }),
                                _ = (0, ke.Om)((e) => {
                                    const a = Te(t.ranks.get(), e);
                                    if (!a) throw new Error(`rank with index ${e} was not found`);
                                    return Object.assign({}, a);
                                }),
                                g = (0, ke.Om)((e) => ur(Me(_(e).divisions, (e) => Object.assign({}, e))), {
                                    equals: M,
                                }),
                                E = (0, ke.Om)(
                                    (e) => {
                                        const t = n(e),
                                            a = ze(t, Dc);
                                        return void 0 === a ? t : $e(t, (e, t) => t !== a);
                                    },
                                    { equals: M },
                                ),
                                p = (0, ke.Om)(
                                    (e) => {
                                        const t = n(e),
                                            a = ze(t, Fc),
                                            r = ze(t, wc);
                                        return {
                                            hasStyle3d: void 0 !== r,
                                            showPlus: void 0 !== a && void 0 !== r && r - a == 1 && a % 2 == 0,
                                            vehicleIndex: a,
                                            style3dIndex: r,
                                        };
                                    },
                                    { equals: bt },
                                ),
                                v = (0, ke.Om)(() => {
                                    const e = t.root.get().currentRank,
                                        a = ze(t.ranks.get(), (t) => t.rank === e);
                                    if (void 0 === a)
                                        throw new Error(
                                            'currentRankIndex computed is not applicable, there is no currentRank among ranks array',
                                        );
                                    return a;
                                }),
                                h = (0, ke.Om)((e) => !t.root.get().isQualificationActive && e <= v());
                            return Object.assign({}, t, {
                                computes: {
                                    card: a,
                                    seasonPoint: s,
                                    mainReward: m,
                                    additionalRewards: E,
                                    bestRewardsCardIndex: u,
                                    additionalRewardsConfig: p,
                                    activeCardIndex: d,
                                    currentSeasonPointsCount: o,
                                    seasonPointsTotalByIndex: i,
                                    seasonPointsLength: (0, ke.Om)((e) => r(e).length),
                                    isActiveLegendItem: h,
                                    vehicleReward: l,
                                    vehicle: c,
                                    rankItem: _,
                                    divisions: g,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => ({
                            setHoveredCardIndex: (0, $.aD)((e) => t.hoveredCardIndex.set(e)),
                            goToStylePreview: e.createCallback((e) => ({ cardIndex: e }), 'onGoToStylePreview'),
                            goToVehiclePreview: e.createCallback(
                                (e, t) => ({ cd: e, cardIndex: t }),
                                'onGoToVehiclePreview',
                            ),
                            goToSelectionRewards: e.createCallbackNoArgs('onGoToRewardsSelection'),
                            setIntroViewed: e.createCallbackNoArgs('onIntroViewed'),
                        }),
                    ),
                    Sc = Bc[0],
                    yc = Bc[1],
                    Nc = {
                        '--pageContentWidth': '78vw',
                        base: 'Background_base_05',
                        inactiveBackground: 'Background_inactiveBackground_f1',
                        overlay: 'Background_overlay_35',
                        'base__hoveredCardIndex_-1': 'Background_base__hoveredCardIndex_-1_10',
                        overlay__full: 'Background_overlay__full_06',
                        base__hoveredCardIndex_0: 'Background_base__hoveredCardIndex_0_25',
                        overlay__firstStage: 'Background_overlay__firstStage_b3',
                        base__hoveredCardIndex_1: 'Background_base__hoveredCardIndex_1_92',
                        overlay__secondStage: 'Background_overlay__secondStage_55',
                        base__hoveredCardIndex_2: 'Background_base__hoveredCardIndex_2_27',
                        overlay__thirdStage: 'Background_overlay__thirdStage_71',
                        base__hoveredCardIndex_3: 'Background_base__hoveredCardIndex_3_29',
                        overlay__fourthStage: 'Background_overlay__fourthStage_1d',
                        base__hoveredCardIndex_4: 'Background_base__hoveredCardIndex_4_f1',
                        overlay__fifthStage: 'Background_overlay__fifthStage_04',
                        base__hoveredCardIndex_5: 'Background_base__hoveredCardIndex_5_1c',
                        overlay__sixthStage: 'Background_overlay__sixthStage_7a',
                        base__withIntro: 'Background_base__withIntro_4c',
                        fadeIn: 'Background_fadeIn_64',
                        fadeInThreeQuarters: 'Background_fadeInThreeQuarters_6c',
                        fadeInHalf: 'Background_fadeInHalf_2f',
                        fadeOut: 'Background_fadeOut_43',
                        fadeInWithScale: 'Background_fadeInWithScale_86',
                        slideUp: 'Background_slideUp_3a',
                        scale: 'Background_scale_03',
                        raysAppearance: 'Background_raysAppearance_48',
                        rotate: 'Background_rotate_74',
                        'reverse-rotate': 'Background_reverse-rotate_3b',
                        glowAppearance: 'Background_glowAppearance_2b',
                        highlightAppearance: 'Background_highlightAppearance_00',
                        blink: 'Background_blink_cc',
                        slideUpIn: 'Background_slideUpIn_c2',
                    },
                    Pc = (0, De.Pi)(({ className: e }) => {
                        const t = yc().model,
                            a = t.root.get().withIntro,
                            n = t.hoveredCardIndex.get(),
                            s = (0, Ke.useSpring)(_t);
                        return r().createElement(
                            Ke.animated.div,
                            {
                                className: b()(Nc.base, a && Nc.base__withIntro, Nc[`base__hoveredCardIndex_${n}`], e),
                                style: s,
                            },
                            r().createElement(
                                'div',
                                { className: Nc.inactiveBackground },
                                Kt(t.cards.get().length, (e) =>
                                    r().createElement('div', {
                                        key: e,
                                        className: b()(Nc.overlay, Nc[`overlay__${_c[e]}`]),
                                    }),
                                ),
                                r().createElement('div', { className: b()(Nc.overlay, Nc.overlay__full) }),
                            ),
                        );
                    });
                function kc() {
                    const e = (0, n.useRef)(!0);
                    return (
                        wr(() => {
                            e.current = !1;
                        }),
                        e.current
                    );
                }
                const xc = _t.delay + _t.config.duration + 500,
                    Rc = ({ isAnimated: e, visible: t, hasDelay: a, className: n }) => {
                        const s = (0, Ke.useSpring)({
                            from: { opacity: 0 },
                            to: { opacity: t ? 1 : 0 },
                            delay: a ? xc : 0,
                            config: { duration: 300 },
                        });
                        return r().createElement(
                            Ke.animated.div,
                            { className: b()('ActiveCardHighlight_base_de', n), style: s },
                            r().createElement(Xr, { className: 'ActiveCardHighlight_glow_c9', animated: e }),
                        );
                    },
                    Ic = Pi.Small,
                    Tc = { info: 'AdditionalRewards_info_c4' },
                    Lc = {
                        className: 'AdditionalRewards_rewardWithPlus_48',
                        classNames: Object.assign({}, Tc, { image: 'AdditionalRewards_rewardWithPlusImage_60' }),
                    },
                    Oc = (0, De.Pi)(({ cardIndex: e, visibleRewardsCount: t, className: a, rewardItemClassMix: n }) => {
                        const s = yc().model,
                            i = s.computes.additionalRewards(e),
                            o = s.computes.additionalRewardsConfig(e),
                            u = Me(i, (a, n) => {
                                const r = o.showPlus && n === o.vehicleIndex && t >= 3;
                                return Object.assign(
                                    {},
                                    ro({ reward: a, size: Ic, index: e }),
                                    { classNames: Tc },
                                    r && Lc,
                                );
                            });
                        return r().createElement(Yi, {
                            data: u,
                            size: Ic,
                            count: io(i.length, t),
                            rewardItemClassMix: b()('AdditionalRewards_reward_94', n),
                            boxRewardTooltip: {
                                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                args: { fromIndex: t, index: e },
                            },
                            classMix: a,
                            boxRewardClassNames: Tc,
                        });
                    }),
                    Mc = {
                        base__x16: 'SeasonPoint_base__x16_b8',
                        base__x24: 'SeasonPoint_base__x24_0a',
                        base__x32: 'SeasonPoint_base__x32_a1',
                        base__x48: 'SeasonPoint_base__x48_fb',
                        icon: 'SeasonPoint_icon_8e',
                    };
                let $c;
                !(function (e) {
                    ((e.x16 = 'x16'), (e.x24 = 'x24'), (e.x32 = 'x32'), (e.x48 = 'x48'));
                })($c || ($c = {}));
                const Wc = R.images.comp7.gui.maps.icons.icons,
                    Hc = ({ state: e, season: t, className: a, size: n = $c.x48 }) =>
                        r().createElement(
                            'div',
                            { className: b()(Mc.base, Mc[`base__${n}`], Mc[`base__${e}`], a) },
                            r().createElement('div', {
                                className: Mc.icon,
                                style: {
                                    backgroundImage:
                                        'notAchieved' === e
                                            ? `url(${Wc.$dyn(`season_point_notAchieved_${n}`)})`
                                            : `url(${Wc.$dyn(`season_point_${t}_${n}`)})`,
                                },
                            }),
                        );
                function zc() {
                    return (
                        (zc = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        zc.apply(null, arguments)
                    );
                }
                const Uc = (0, De.Pi)(({ cardIndex: e, pointIndex: t, size: a, className: n, classNames: s }) => {
                        const i = yc().model.computes.seasonPoint(e, t);
                        return r().createElement(
                            K,
                            {
                                contentId: R.views.comp7.lobby.tooltips.SeasonPointTooltip('resId'),
                                args: { state: i.state },
                                ignoreShowDelay: !0,
                            },
                            r().createElement(
                                'div',
                                { className: n },
                                r().createElement(Hc, zc({}, i, { className: null == s ? void 0 : s.point, size: a })),
                            ),
                        );
                    }),
                    Vc = (0, De.Pi)(({ cardIndex: e, size: t, className: a, classNames: n }) => {
                        const s = yc().model;
                        return r().createElement(
                            'div',
                            { className: b()('CardSeasonPoints_base_40', a) },
                            Kt(s.computes.seasonPointsLength(e), (a) =>
                                r().createElement(Uc, {
                                    cardIndex: e,
                                    pointIndex: a,
                                    size: t,
                                    className: null == n ? void 0 : n.pointWrapper,
                                    classNames: { point: null == n ? void 0 : n.point },
                                    key: a,
                                }),
                            ),
                        );
                    }),
                    Gc = [
                        [{ season: Be.First }, { season: Be.First }, { season: Be.First }],
                        [{ season: Be.First }, { season: Be.First }, { season: Be.First }],
                        [{ season: Be.Second }, { season: Be.Second }, { season: Be.Second }],
                        [{ season: Be.Second }, { season: Be.Second }, { season: Be.Second }],
                        [{ season: Be.Third }, { season: Be.Third }, { season: Be.Third }],
                        [{ season: Be.Third }, { season: Be.Third }, { season: Be.Third }],
                    ],
                    qc = {
                        '--pageContentWidth': '78vw',
                        base: 'FakeCardSeasonPoints_base_04',
                        notAchievedSeasonPoints: 'FakeCardSeasonPoints_notAchievedSeasonPoints_7d',
                        achievedSeasonPoints: 'FakeCardSeasonPoints_achievedSeasonPoints_b4',
                        notAchievedPoint: 'FakeCardSeasonPoints_notAchievedPoint_4f',
                        achievedPoint: 'FakeCardSeasonPoints_achievedPoint_da',
                        notAchievedPoint__first: 'FakeCardSeasonPoints_notAchievedPoint__first_3a',
                        achievedPoint__first: 'FakeCardSeasonPoints_achievedPoint__first_9e',
                        notAchievedPoint__second: 'FakeCardSeasonPoints_notAchievedPoint__second_01',
                        achievedPoint__second: 'FakeCardSeasonPoints_achievedPoint__second_8b',
                        notAchievedPoint__third: 'FakeCardSeasonPoints_notAchievedPoint__third_c0',
                        achievedPoint__third: 'FakeCardSeasonPoints_achievedPoint__third_1b',
                        base__firstStage: 'FakeCardSeasonPoints_base__firstStage_4f',
                        base__secondStage: 'FakeCardSeasonPoints_base__secondStage_6d',
                        base__thirdStage: 'FakeCardSeasonPoints_base__thirdStage_4b',
                        base__fourthStage: 'FakeCardSeasonPoints_base__fourthStage_46',
                        base__fifthStage: 'FakeCardSeasonPoints_base__fifthStage_cc',
                        base__sixthStage: 'FakeCardSeasonPoints_base__sixthStage_5a',
                        fadeIn: 'FakeCardSeasonPoints_fadeIn_4f',
                        fadeInThreeQuarters: 'FakeCardSeasonPoints_fadeInThreeQuarters_7a',
                        fadeInHalf: 'FakeCardSeasonPoints_fadeInHalf_3a',
                        fadeOut: 'FakeCardSeasonPoints_fadeOut_ee',
                        fadeInWithScale: 'FakeCardSeasonPoints_fadeInWithScale_a6',
                        slideUp: 'FakeCardSeasonPoints_slideUp_c5',
                        scale: 'FakeCardSeasonPoints_scale_da',
                        raysAppearance: 'FakeCardSeasonPoints_raysAppearance_68',
                        rotate: 'FakeCardSeasonPoints_rotate_b0',
                        'reverse-rotate': 'FakeCardSeasonPoints_reverse-rotate_45',
                        glowAppearance: 'FakeCardSeasonPoints_glowAppearance_3c',
                        highlightAppearance: 'FakeCardSeasonPoints_highlightAppearance_26',
                        blink: 'FakeCardSeasonPoints_blink_33',
                        slideUpIn: 'FakeCardSeasonPoints_slideUpIn_b5',
                    },
                    jc = ['first', 'second', 'third'],
                    Qc = ({ cardIndex: e, size: t, className: a, classNames: n }) => {
                        const s = Gc[e];
                        return r().createElement(
                            'div',
                            { className: b()(qc.base, qc[`base__${_c[e]}`], a) },
                            r().createElement(
                                'div',
                                { className: qc.notAchievedSeasonPoints },
                                s.map(({ season: e }, a) =>
                                    r().createElement(
                                        'div',
                                        { key: a, className: null == n ? void 0 : n.pointWrapper },
                                        r().createElement(Hc, {
                                            state: ye.NotAchieved,
                                            season: e,
                                            size: t,
                                            className: b()(
                                                qc.notAchievedPoint,
                                                qc[`notAchievedPoint__${jc[a]}`],
                                                null == n ? void 0 : n.point,
                                            ),
                                        }),
                                    ),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: qc.achievedSeasonPoints },
                                s.map(({ season: e }, a) =>
                                    r().createElement(
                                        'div',
                                        { key: a, className: null == n ? void 0 : n.pointWrapper },
                                        r().createElement(Hc, {
                                            state: ye.Achieved,
                                            season: e,
                                            size: t,
                                            className: b()(
                                                qc.achievedPoint,
                                                qc[`achievedPoint__${jc[a]}`],
                                                null == n ? void 0 : n.point,
                                            ),
                                        }),
                                    ),
                                ),
                            ),
                        );
                    };
                function Yc() {
                    return (
                        (Yc = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        Yc.apply(null, arguments)
                    );
                }
                const Xc = (0, De.Pi)(({ cardIndex: e, size: t, className: a, classNames: n }) => {
                        const s = yc().model.computes.mainReward(e);
                        if (!s) throw new Error(`no mainReward in card with index ${e}`);
                        return r().createElement(
                            ji,
                            Yc({}, ro({ reward: s, size: t, index: e }), {
                                className: a,
                                classNames: {
                                    rewardIcon: null == n ? void 0 : n.icon,
                                    image: null == n ? void 0 : n.iconContainer,
                                },
                            }),
                        );
                    }),
                    Kc = {
                        '--pageContentWidth': '78vw',
                        base: 'RewardsStatus_base_a0',
                        description: 'RewardsStatus_description_75',
                        base__guaranteed: 'RewardsStatus_base__guaranteed_bb',
                        base__claimed: 'RewardsStatus_base__claimed_59',
                        base__notAvailable: 'RewardsStatus_base__notAvailable_de',
                        base__possible: 'RewardsStatus_base__possible_29',
                        shadow: 'RewardsStatus_shadow_71',
                        statusIcon: 'RewardsStatus_statusIcon_3d',
                    },
                    Zc = R.strings.comp7_ext.yearlyRewards.rewardsState,
                    Jc = ({ seasonPointsCount: e, rewardsState: t, className: a }) =>
                        r().createElement(
                            'div',
                            { className: b()(Kc.base, Kc[`base__${t}`], a) },
                            r().createElement(
                                te,
                                { body: `${Zc.tooltip.$dyn(t)}`, isEnabled: t !== bc.Claimed },
                                r().createElement(
                                    'div',
                                    { className: Kc.description },
                                    t === bc.NotAvailable && r().createElement('div', { className: Kc.shadow }),
                                    r().createElement('div', { className: Kc.statusIcon }),
                                    ta(`${R.strings.comp7_ext.yearlyRewards.rewardsState.$dyn(t)}`, { count: e }),
                                ),
                            ),
                        ),
                    ed = (0, De.Pi)(({ index: e, className: t, classNames: a }) => {
                        const n = w().mediaSize,
                            s = yc(),
                            i = s.model,
                            o = s.controls,
                            u = i.root.get().style3dAvailable,
                            l = i.computes.mainReward(e),
                            c = i.computes.vehicle(),
                            d = n >= A.Large;
                        return l && 'customizations' === l.name
                            ? r().createElement(
                                  'div',
                                  { className: t },
                                  r().createElement(
                                      vo,
                                      {
                                          type: 'preview',
                                          onClick: () => o.goToStylePreview(e),
                                          isVisibleLabel: d,
                                          className: null == a ? void 0 : a.preview,
                                      },
                                      d ? R.strings.comp7_ext.yearlyRewards.preview.style2d() : '',
                                  ),
                              )
                            : u && i.computes.additionalRewardsConfig(e).hasStyle3d
                              ? r().createElement(
                                    'div',
                                    { className: t },
                                    r().createElement(
                                        vo,
                                        {
                                            type: 'preview',
                                            onClick: () => o.goToVehiclePreview(c.vehicleCD, e),
                                            isVisibleLabel: d,
                                            className: null == a ? void 0 : a.preview,
                                        },
                                        d ? R.strings.comp7_ext.yearlyRewards.preview.style3d() : '',
                                    ),
                                )
                              : null;
                    }),
                    td = {
                        '--pageContentWidth': '78vw',
                        base: 'Column_base_b5',
                        mainRewardContainer: 'Column_mainRewardContainer_3e',
                        mainRewardContainer__big: 'Column_mainRewardContainer__big_62',
                        mainRewardContainer__s232x174: 'Column_mainRewardContainer__s232x174_99',
                        mainRewardContainer__s296x222: 'Column_mainRewardContainer__s296x222_b4',
                        base__grayscale: 'Column_base__grayscale_b7',
                        mainReward: 'Column_mainReward_77',
                        previewContainer: 'Column_previewContainer_57',
                        preview: 'Column_preview_d6',
                        fakeSeasonPointsContainer: 'Column_fakeSeasonPointsContainer_11',
                        seasonPointsContainer: 'Column_seasonPointsContainer_f3',
                        base__withIntro: 'Column_base__withIntro_fb',
                        divider: 'Column_divider_f3',
                        divider__highlighted: 'Column_divider__highlighted_00',
                        seasonPointWrapper: 'Column_seasonPointWrapper_2d',
                        rewardsStatus: 'Column_rewardsStatus_08',
                        additionalRewards: 'Column_additionalRewards_ff',
                        description: 'Column_description_76',
                        description__visible: 'Column_description__visible_6f',
                        glowContainer: 'Column_glowContainer_ee',
                        hoverArea: 'Column_hoverArea_22',
                        hoverArea__last: 'Column_hoverArea__last_32',
                    },
                    ad = { preview: td.preview },
                    nd = { pointWrapper: td.seasonPointWrapper },
                    rd = (0, De.Pi)(
                        ({
                            index: e,
                            mainRewardSize: t,
                            seasonPointSize: a,
                            visibleAdditionalRewardsCount: s,
                            hasHighlightDelay: o,
                            highlightVisible: u,
                            className: l,
                        }) => {
                            const c = yc(),
                                d = c.model,
                                m = c.controls,
                                _ = G().model,
                                g = d.root.get().withIntro,
                                E = d.computes.card(e).rewardsState,
                                p = d.computes.mainReward(e),
                                v = d.computes.seasonPointsTotalByIndex(e),
                                h = d.computes.activeCardIndex(),
                                f = d.hoveredCardIndex.get(),
                                C = e === d.cards.get().length - 1,
                                A = (g || -1 !== f) && e > f,
                                D = !g && _.year.state.get() !== lo.Finished && e === h;
                            return (
                                (0, n.useEffect)(() => {
                                    e === f && i.O.sound.play.sound(R.sounds.comp_7_annual_reward_column());
                                }, [f, e]),
                                r().createElement(
                                    'div',
                                    {
                                        className: b()(td.base, A && td.base__grayscale, g && td.base__withIntro, l),
                                        onMouseEnter: () => m.setHoveredCardIndex(e),
                                        onMouseLeave: () => m.setHoveredCardIndex(-1),
                                    },
                                    r().createElement('div', { className: b()(td.hoverArea, C && td.hoverArea__last) }),
                                    r().createElement(
                                        'div',
                                        { className: td.fakeSeasonPointsContainer },
                                        r().createElement(Qc, { cardIndex: e, size: a, classNames: nd }),
                                        !C &&
                                            r().createElement(wu, {
                                                className: b()(td.divider, e <= f && td.divider__highlighted),
                                            }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: td.seasonPointsContainer },
                                        r().createElement(Vc, { cardIndex: e, size: a, classNames: nd }),
                                        !C &&
                                            r().createElement(wu, {
                                                className: b()(td.divider, e < h && td.divider__highlighted),
                                            }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: b()(td.mainRewardContainer, td[`mainRewardContainer__${t}`]) },
                                        p && r().createElement(Xc, { cardIndex: e, size: t, className: td.mainReward }),
                                    ),
                                    r().createElement(ed, { index: e, className: td.previewContainer, classNames: ad }),
                                    r().createElement(Jc, {
                                        seasonPointsCount: v,
                                        rewardsState: E,
                                        className: td.rewardsStatus,
                                    }),
                                    r().createElement(Oc, {
                                        cardIndex: e,
                                        visibleRewardsCount: s,
                                        className: td.additionalRewards,
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: b()(td.description, D && td.description__visible) },
                                        r().createElement(Rc, {
                                            hasDelay: o,
                                            visible: u,
                                            isAnimated: D,
                                            className: td.glowContainer,
                                        }),
                                        R.strings.comp7_ext.yearlyRewards.stageDescription.active(),
                                    ),
                                )
                            );
                        },
                    ),
                    sd = (0, De.Pi)(({ className: e }) => {
                        const t = w().mediaSize,
                            a = yc().model,
                            s = a.root.get().withIntro,
                            o = Ec(),
                            u = ((e) => (e >= A.Large ? Pi.S296x222 : e >= A.Small ? Pi.S232x174 : Pi.Big))(t),
                            l = ((e) => (e >= A.Medium ? 5 : 2))(t),
                            c = ((e) => (e >= A.ExtraLarge ? $c.x32 : $c.x24))(t),
                            d = (0, Ke.useSpring)(_t),
                            m = (({ api: e, withIntro: t }) => {
                                const a = (0, n.useState)(!1),
                                    r = a[0],
                                    s = a[1],
                                    o = kc(),
                                    u = !t && o;
                                return (
                                    wr(() => {
                                        const t = () => {
                                            s(!0);
                                        };
                                        return (
                                            e.events.on('end', t),
                                            () => {
                                                e.events.off('end', t);
                                            }
                                        );
                                    }),
                                    wr(() => {
                                        if (u)
                                            return ns(() => {
                                                s(!0);
                                            }, xc);
                                    }),
                                    (0, n.useEffect)(() => {
                                        r && i.O.sound.play.sound(R.sounds.comp_7_ranks_shine());
                                    }, [r]),
                                    [u, r]
                                );
                            })({ api: o, withIntro: s }),
                            _ = m[0],
                            g = m[1];
                        return r().createElement(
                            Ke.animated.div,
                            { className: b()('Columns_base_56', e), style: d },
                            Kt(a.cards.get().length, (e) =>
                                r().createElement(rd, {
                                    index: e,
                                    mainRewardSize: u,
                                    seasonPointSize: c,
                                    hasHighlightDelay: _,
                                    highlightVisible: g,
                                    visibleAdditionalRewardsCount: l,
                                    key: e,
                                }),
                            ),
                        );
                    }),
                    id = (e) => (e >= A.Large ? $c.x32 : $c.x24),
                    od = R.strings.comp7_ext.yearlyRewards,
                    ud = {
                        '--pageContentWidth': '78vw',
                        base: 'Legend_base_95',
                        inner: 'Legend_inner_47',
                        item: 'Legend_item_61',
                        description: 'Legend_description_77',
                        rankWrapper: 'Legend_rankWrapper_1e',
                        highlight: 'Legend_highlight_9a',
                        rankWrapper__withIntro: 'Legend_rankWrapper__withIntro_80',
                        rankEmblem: 'Legend_rankEmblem_5a',
                        rankEmblem__active: 'Legend_rankEmblem__active_e1',
                        arrowContainer: 'Legend_arrowContainer_f1',
                        arrow: 'Legend_arrow_dc',
                        pointsCount: 'Legend_pointsCount_cc',
                        countContainer: 'Legend_countContainer_43',
                        fakeCount: 'Legend_fakeCount_21',
                        count: 'Legend_count_26',
                        base__withIntro: 'Legend_base__withIntro_fd',
                        seasonPoint: 'Legend_seasonPoint_74',
                        status: 'Legend_status_a8',
                        rank: 'Legend_rank_eb',
                        verticalSeparator: 'Legend_verticalSeparator_64',
                        seasonPointIcon: 'Legend_seasonPointIcon_ca',
                        schedule: 'Legend_schedule_c3',
                        calendarIcon: 'Legend_calendarIcon_39',
                        fadeIn: 'Legend_fadeIn_4f',
                        fadeInThreeQuarters: 'Legend_fadeInThreeQuarters_d2',
                        fadeInHalf: 'Legend_fadeInHalf_d6',
                        fadeOut: 'Legend_fadeOut_cc',
                        fadeInWithScale: 'Legend_fadeInWithScale_d6',
                        slideUp: 'Legend_slideUp_47',
                        scale: 'Legend_scale_f8',
                        raysAppearance: 'Legend_raysAppearance_c1',
                        rotate: 'Legend_rotate_1d',
                        'reverse-rotate': 'Legend_reverse-rotate_68',
                        glowAppearance: 'Legend_glowAppearance_d3',
                        highlightAppearance: 'Legend_highlightAppearance_f6',
                        blink: 'Legend_blink_79',
                        slideUpIn: 'Legend_slideUpIn_e2',
                    },
                    ld = (0, De.Pi)(({ index: e, size: t, seasonName: a, className: n }) => {
                        const s = yc().model,
                            i = s.root.get(),
                            o = i.currentRank,
                            u = i.topPercentage,
                            l = i.withIntro,
                            c = s.computes.isActiveLegendItem(e),
                            d = s.computes.rankItem(e);
                        return r().createElement(
                            'div',
                            { className: n, key: e },
                            r().createElement(
                                'div',
                                { className: b()(ud.rankWrapper, l && ud.rankWrapper__withIntro) },
                                d.rank === o &&
                                    r().createElement(Qr, {
                                        className: ud.highlight,
                                        src: String(R.videos.comp7.godRaysNew_130x130()),
                                        autoplay: !0,
                                        loop: !0,
                                    }),
                                r().createElement(
                                    hn,
                                    {
                                        rank: d.rank,
                                        from: d.from,
                                        to: d.to,
                                        topPercentage: u,
                                        divisions: s.computes.divisions(e),
                                        className: ud.tooltipArea,
                                        ignoreShowDelay: !0,
                                    },
                                    r().createElement(ba, {
                                        seasonName: a,
                                        rank: d.rank,
                                        size: t,
                                        className: b()(ud.rankEmblem, c && ud.rankEmblem__active),
                                    }),
                                ),
                            ),
                        );
                    }),
                    cd = 'possible',
                    dd = { state: cd, ignoreState: !0 },
                    md = { scheduleClassNames: { calendarIcon: ud.calendarIcon } },
                    _d = (0, De.Pi)(({ className: e }) => {
                        const t = w().mediaSize,
                            a = yc().model,
                            n = G().model,
                            s = a.root.get(),
                            i = s.currentRank,
                            o = s.isQualificationActive,
                            u = s.withIntro,
                            l = n.season.name.get(),
                            c = n.year.state.get(),
                            d = a.computes.currentSeasonPointsCount(n.season.name.get()),
                            m = ((e) => {
                                switch (e) {
                                    case lo.Active:
                                        return { rank: od.rank.current(), description: od.description.current() };
                                    case lo.OffSeason:
                                    case lo.Finished:
                                        return { rank: od.rank.achieved(), description: od.description.achieved() };
                                    default:
                                        return (
                                            console.error(
                                                `Provide text strings for current/achieved rank for YearState: ${e}`,
                                            ),
                                            { rank: '', description: '' }
                                        );
                                }
                            })(c),
                            _ = ((e) => (e >= A.Large ? va.x64 : va.x48))(t);
                        return r().createElement(
                            'div',
                            { className: b()(ud.base, u && ud.base__withIntro, e) },
                            r().createElement(
                                'div',
                                { className: ud.status },
                                !o &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(wn, {
                                            text: m.rank,
                                            binding: {
                                                rank: r().createElement(
                                                    'div',
                                                    { className: ud.rank },
                                                    ta(R.strings.comp7_ext.quotesWrapper(), { name: Aa(i) }),
                                                ),
                                            },
                                            classMix: ud.secondaryText,
                                        }),
                                        r().createElement('div', { className: ud.verticalSeparator }),
                                    ),
                                r().createElement(wn, {
                                    text: m.description,
                                    binding: {
                                        seasonPointIcon: r().createElement(
                                            K,
                                            {
                                                contentId: R.views.comp7.lobby.tooltips.SeasonPointTooltip('resId'),
                                                args: dd,
                                                ignoreShowDelay: !0,
                                            },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(Hc, {
                                                    state: cd,
                                                    season: l,
                                                    size: $c.x16,
                                                    className: ud.seasonPointIcon,
                                                }),
                                            ),
                                        ),
                                    },
                                }),
                                r().createElement('div', { className: ud.verticalSeparator }),
                                r().createElement(ar, { hasSeasonName: !1, className: ud.schedule, classNames: md }),
                            ),
                            r().createElement(
                                'div',
                                { className: ud.inner },
                                Kt(a.ranks.get().length, (e) =>
                                    r().createElement(ld, {
                                        key: e,
                                        index: e,
                                        size: _,
                                        seasonName: l,
                                        className: ud.item,
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: ud.arrowContainer },
                                    r().createElement('div', { className: ud.arrow }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: ud.pointsCount },
                                    r().createElement(
                                        'div',
                                        { className: ud.countContainer },
                                        r().createElement('div', { className: ud.fakeCount }, '0'),
                                        r().createElement('div', { className: ud.count }, d),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: ud.seasonPoint },
                                        r().createElement(
                                            K,
                                            {
                                                contentId: R.views.comp7.lobby.tooltips.SeasonPointTooltip('resId'),
                                                args: dd,
                                                ignoreShowDelay: !0,
                                            },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(Hc, { state: cd, season: l, size: id(t) }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                let gd;
                !(function (e) {
                    ((e.Default = 'default'),
                        (e.NotAccruedRewards = 'notAccruedRewards'),
                        (e.RewardsSelectionAvailable = 'rewardsSelectionAvailable'),
                        (e.RewardsReceived = 'rewardsReceived'));
                })(gd || (gd = {}));
                const Ed = R.strings.comp7_ext.yearlyRewards.banner,
                    pd = (0, De.Pi)(({ className: e }) => {
                        const t = yc(),
                            a = t.model,
                            n = t.controls,
                            s = w().mediaSize;
                        switch (a.root.get().bannerState) {
                            case gd.NotAccruedRewards:
                                return r().createElement('div', { className: e }, Ed.notAccruedRewards());
                            case gd.RewardsSelectionAvailable:
                                return r().createElement(
                                    'div',
                                    { className: b()(e, 'StatusBanner_selectionContainer_c1') },
                                    r().createElement('div', null, Ed.rewardsSelectionAvailable()),
                                    r().createElement(
                                        ht,
                                        {
                                            size: s >= A.Large ? 'small' : 'extraSmall',
                                            onClick: n.goToSelectionRewards,
                                            type: 'primary',
                                            mixClass: 'StatusBanner_selectionButton_9a',
                                        },
                                        Ed.selectButtonLabel(),
                                    ),
                                );
                            case gd.RewardsReceived:
                                return r().createElement('div', { className: e }, Ed.rewardsReceived());
                            default:
                                return r().createElement('div', { className: e }, Ed.default());
                        }
                    }),
                    vd = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: b()('StatusBanner_base_a2', e) },
                            r().createElement(pd, { className: 'StatusBanner_description_48' }),
                        ),
                    hd = {
                        '--pageContentWidth': '78vw',
                        base: 'Vehicle_base_5a',
                        vehicleBg: 'Vehicle_vehicleBg_13',
                        vehicleBg__inactive: 'Vehicle_vehicleBg__inactive_bd',
                        vehicleBg__2: 'Vehicle_vehicleBg__2_2c',
                        base__selectedIndex_2: 'Vehicle_base__selectedIndex_2_1f',
                        vehicleBg__3: 'Vehicle_vehicleBg__3_ef',
                        base__selectedIndex_3: 'Vehicle_base__selectedIndex_3_c9',
                        vehicleBg__4: 'Vehicle_vehicleBg__4_60',
                        base__selectedIndex_4: 'Vehicle_base__selectedIndex_4_2a',
                        vehicleBg__5: 'Vehicle_vehicleBg__5_d2',
                        base__selectedIndex_5: 'Vehicle_base__selectedIndex_5_aa',
                        fadeIn: 'Vehicle_fadeIn_27',
                        fadeInThreeQuarters: 'Vehicle_fadeInThreeQuarters_4d',
                        fadeInHalf: 'Vehicle_fadeInHalf_43',
                        fadeOut: 'Vehicle_fadeOut_3b',
                        fadeInWithScale: 'Vehicle_fadeInWithScale_5b',
                        slideUp: 'Vehicle_slideUp_c0',
                        scale: 'Vehicle_scale_7b',
                        raysAppearance: 'Vehicle_raysAppearance_24',
                        rotate: 'Vehicle_rotate_72',
                        'reverse-rotate': 'Vehicle_reverse-rotate_02',
                        glowAppearance: 'Vehicle_glowAppearance_79',
                        highlightAppearance: 'Vehicle_highlightAppearance_19',
                        blink: 'Vehicle_blink_c7',
                        slideUpIn: 'Vehicle_slideUpIn_41',
                    },
                    bd = [2, 3, 4, 5],
                    fd = (0, De.Pi)(({ className: e }) => {
                        const t = yc().model,
                            a = t.root.get().withIntro,
                            s = t.hoveredCardIndex.get(),
                            o = t.computes.activeCardIndex(),
                            u = kc(),
                            l = !a && bd.includes(o) && -1 === s ? o : s,
                            c = (0, Ke.useSpring)(_t);
                        return (
                            (0, n.useEffect)(() => {
                                !u &&
                                    bd.includes(l) &&
                                    i.O.sound.play.sound(R.sounds.comp_7_annual_reward_tank_emergence_style());
                            }, [u, l, a]),
                            r().createElement(
                                Ke.animated.div,
                                { className: b()(hd.base, hd[`base__selectedIndex_${l}`], e), style: c },
                                r().createElement('div', { className: b()(hd.vehicleBg, hd.vehicleBg__inactive) }),
                                bd.map((e) =>
                                    r().createElement('div', {
                                        className: b()(hd.vehicleBg, hd[`vehicleBg__${e}`]),
                                        key: e,
                                    }),
                                ),
                            )
                        );
                    });
                function Cd() {
                    return (
                        (Cd = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                  }
                                  return e;
                              }),
                        Cd.apply(null, arguments)
                    );
                }
                const Ad = (e) => (e >= A.Medium ? Vo.x48 : Vo.x24Metal),
                    Dd = { vehicleTypeContainer: 'VehicleInfo_vehicleTypeContainer_35', type: 'VehicleInfo_type_22' },
                    Fd = (0, De.Pi)(({ className: e, classNames: t }) => {
                        const a = w().mediaSize,
                            n = yc().model,
                            s = n.computes.vehicleReward(),
                            i = n.computes.vehicle();
                        return r().createElement(
                            'div',
                            { className: b()('VehicleInfo_base_a0', e) },
                            r().createElement('div', { className: 'VehicleInfo_background_79' }),
                            r().createElement(
                                'div',
                                { className: 'VehicleInfo_content_59' },
                                r().createElement(wn, {
                                    text: R.strings.comp7_ext.yearlyRewards.mainYearlyRewardTitle(),
                                    binding: {
                                        vehicle: r().createElement(
                                            Kn,
                                            { args: { tooltipId: s.tooltipId }, ignoreShowDelay: !0 },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(
                                                    jo,
                                                    Cd({}, i, {
                                                        size: Ad(a),
                                                        className: 'VehicleInfo_vehicleName_d8',
                                                        classNames: Dd,
                                                    }),
                                                ),
                                            ),
                                        ),
                                    },
                                    classMix: b()('VehicleInfo_title_3b', null == t ? void 0 : t.title),
                                }),
                            ),
                        );
                    }),
                    wd = R.strings.comp7_ext.page.heading,
                    Bd = (e) =>
                        window.setTimeout(() => i.O.sound.play.sound(R.sounds.comp_7_annual_reward_rank_points()), e),
                    Sd = (0, De.Pi)(() => {
                        const e = yc(),
                            t = e.model,
                            a = e.controls,
                            s = t.root.get(),
                            o = s.hasDataError,
                            u = s.withIntro,
                            l = (0, Ke.useSpring)(_t),
                            c = Ec();
                        return (
                            he(pe.n.ESCAPE, () => c.skipAll(), u),
                            wr(() =>
                                i.O.client.events.mouse.move(([, e]) => {
                                    'outside' !== e || u || a.setHoveredCardIndex(-1);
                                }),
                            ),
                            (0, n.useEffect)(() => {
                                c.rootRef.current && (c.rootRef.current.style.pointerEvents = u ? 'none' : 'auto');
                            }, [c.rootRef, u]),
                            (0, n.useEffect)(() => {
                                if (!u) return;
                                const e = [],
                                    t = (t) => {
                                        switch (
                                            (mc.includes(t) && a.setHoveredCardIndex(mc.findIndex((e) => e === t)), t)
                                        ) {
                                            case dc.firstStageSeasonPoints:
                                            case dc.secondStageSeasonPoints:
                                            case dc.thirdStageSeasonPoints:
                                            case dc.fourthStageSeasonPoints:
                                            case dc.fifthStageSeasonPoints:
                                            case dc.sixthStageSeasonPoints:
                                                e.push(Bd(0), Bd(200), Bd(400));
                                        }
                                    };
                                return (
                                    c.events.on('change', t),
                                    () => {
                                        (c.events.off('change', t), e.forEach((e) => clearTimeout(e)));
                                    }
                                );
                            }, [c.events, a, u]),
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    u && (a.setHoveredCardIndex(-1), a.setIntroViewed());
                                };
                                return (
                                    c.events.on('end', e),
                                    () => {
                                        c.events.off('end', e);
                                    }
                                );
                            }, [c.events, c.rootRef, a, u]),
                            r().createElement(
                                'div',
                                { className: 'YearlyRewardsPage_base_cc', ref: c.rootRef },
                                r().createElement(Pc, null),
                                r().createElement(
                                    dt,
                                    { className: b()(be, 'YearlyRewardsPage_heading_3d') },
                                    wd.yearlyRewards(),
                                ),
                                !o &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(fd, { className: 'YearlyRewardsPage_vehicle_1c' }),
                                        r().createElement(sd, { className: 'YearlyRewardsPage_columns_19' }),
                                    ),
                                r().createElement(
                                    Ke.animated.div,
                                    {
                                        style: l,
                                        className: b()(
                                            'YearlyRewardsPage_contentWrapper_7e',
                                            u && 'YearlyRewardsPage_contentWrapper__withIntro_f1',
                                        ),
                                    },
                                    o
                                        ? r().createElement(Lo, null)
                                        : r().createElement(
                                              r().Fragment,
                                              null,
                                              r().createElement(
                                                  'div',
                                                  { className: 'YearlyRewardsPage_legend_e9' },
                                                  r().createElement(_d, null),
                                              ),
                                              r().createElement(
                                                  'div',
                                                  { className: 'YearlyRewardsPage_vehicleInfoContainer_e7' },
                                                  r().createElement(Fd, {
                                                      className: 'YearlyRewardsPage_vehicleInfo_91',
                                                  }),
                                              ),
                                              r().createElement(
                                                  'div',
                                                  { className: 'YearlyRewardsPage_status_14' },
                                                  r().createElement(vd, null),
                                              ),
                                          ),
                                ),
                            )
                        );
                    });
                let yd;
                !(function (e) {
                    ((e[(e.NotStarted = 0)] = 'NotStarted'),
                        (e[(e.JustStarted = 1)] = 'JustStarted'),
                        (e[(e.Active = 2)] = 'Active'),
                        (e[(e.EndSoon = 3)] = 'EndSoon'),
                        (e[(e.End = 4)] = 'End'),
                        (e[(e.Disabled = 5)] = 'Disabled'));
                })(yd || (yd = {}));
                const Nd = z()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), seasonCards: e.array('seasonCards') },
                                a = (0, ke.Om)(
                                    (e) => {
                                        const a = Te(t.seasonCards.get(), e);
                                        if (!a) throw new Error(`Unexpected card index: ${e}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: M },
                                ),
                                n = (0, ke.Om)((e) => a(e).season, { equals: M }),
                                r = (0, ke.Om)((e) => n(e).state),
                                s = (0, ke.Om)((e) => r(e) === yd.NotStarted),
                                i = (0, ke.Om)((e) => a(e).rank),
                                o = (0, ke.Om)((e) => a(e).hasRankReceived);
                            return Object.assign({}, t, {
                                computes: {
                                    seasonCardsLength: (0, ke.Om)(() => t.seasonCards.get().length),
                                    seasonCard: a,
                                    seasonState: r,
                                    seasonScheduleInfo: n,
                                    isSeasonNotStarted: s,
                                    rank: i,
                                    hasRankReceived: o,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            goToSeasonStatistics: e.createCallback(
                                (e) => ({ seasonName: e }),
                                'onGoToSeasonStatistics',
                            ),
                        }),
                    ),
                    Pd = Nd[0],
                    kd = Nd[1],
                    xd = R.images.comp7.gui.maps.icons.backgrounds,
                    Rd = (0, De.Pi)(({ index: e, className: t }) => {
                        const a = kd().model,
                            n = a.computes.seasonScheduleInfo(e).name,
                            s = a.computes.hasRankReceived(e),
                            i = xd.$dyn(n),
                            o = s ? fa[a.computes.rank(e)] : 'qualification';
                        return r().createElement('div', {
                            className: b()('Background_base_bf', t),
                            style: { backgroundImage: `url(${i.$dyn(o)})` },
                        });
                    }),
                    Id = {
                        base: 'LaceDivider_base_55',
                        lace: 'LaceDivider_lace_f6',
                        peak: 'LaceDivider_peak_c0',
                        peak__right: 'LaceDivider_peak__right_a7',
                        line: 'LaceDivider_line_20',
                    },
                    Td = ({ children: e, className: t, classNames: a }) =>
                        r().createElement(
                            'div',
                            { className: b()(Id.base, t) },
                            r().createElement(
                                'div',
                                {
                                    className: b()(
                                        Id.lace,
                                        Id.lace__left,
                                        null == a ? void 0 : a.lace,
                                        null == a ? void 0 : a.leftLace,
                                    ),
                                },
                                r().createElement('div', {
                                    className: b()(
                                        Id.peak,
                                        Id.peak__left,
                                        null == a ? void 0 : a.peak,
                                        null == a ? void 0 : a.leftPeak,
                                    ),
                                }),
                                r().createElement('div', {
                                    className: b()(
                                        Id.line,
                                        Id.line__left,
                                        null == a ? void 0 : a.line,
                                        null == a ? void 0 : a.leftLine,
                                    ),
                                }),
                            ),
                            e,
                            r().createElement(
                                'div',
                                {
                                    className: b()(
                                        Id.lace,
                                        Id.lace__right,
                                        null == a ? void 0 : a.lace,
                                        null == a ? void 0 : a.rightLace,
                                    ),
                                },
                                r().createElement('div', {
                                    className: b()(
                                        Id.line,
                                        Id.line__right,
                                        null == a ? void 0 : a.line,
                                        null == a ? void 0 : a.rightLine,
                                    ),
                                }),
                                r().createElement('div', {
                                    className: b()(
                                        Id.peak,
                                        Id.peak__right,
                                        null == a ? void 0 : a.peak,
                                        null == a ? void 0 : a.rightPeak,
                                    ),
                                }),
                            ),
                        ),
                    Ld = R.strings.comp7_ext.yearlyStatistics,
                    Od = (0, De.Pi)(({ index: e, className: t }) => {
                        const a = kd(),
                            n = a.model,
                            s = a.controls,
                            i = n.computes.seasonCard(e).hasStatisticsCalculated,
                            o = n.computes.seasonScheduleInfo(e).name;
                        return r().createElement(
                            'div',
                            { className: b()('CardFooter_base_b1', t) },
                            i
                                ? r().createElement(
                                      'div',
                                      { onClick: () => s.goToSeasonStatistics(o) },
                                      r().createElement(wn, {
                                          text: Ld.goToSeasonStatistics(),
                                          classMix: 'CardFooter_statisticsAvailability_5a',
                                          binding: {
                                              icon: r().createElement('div', { className: 'CardFooter_icon_20' }),
                                          },
                                      }),
                                  )
                                : r().createElement(wn, {
                                      text: Ld.generationOfStatistics(),
                                      classMix: 'CardFooter_generationOfStatistics_2a',
                                  }),
                        );
                    }),
                    Md = 'RankStatus_rank_13',
                    $d = R.strings.comp7_ext.yearlyStatistics.rankStatus,
                    Wd = (0, De.Pi)(({ index: e }) => {
                        const t = kd().model.computes.seasonCard(e),
                            a = t.hasRankReceived,
                            n = t.rank,
                            s = t.division;
                        return r().createElement(
                            'div',
                            { className: 'RankStatus_base_61' },
                            a
                                ? r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement(wn, {
                                          classMix: Md,
                                          text: $d.received(),
                                          binding: { rank: Aa(n) },
                                      }),
                                      pa(n) &&
                                          r().createElement(wn, { classMix: 'RankStatus_division_18', text: ma(s) }),
                                  )
                                : r().createElement('div', { className: Md }, $d.notReceived()),
                        );
                    }),
                    Hd = R.strings.comp7_ext.yearlyStatistics,
                    zd = (0, De.Pi)(({ index: e }) => {
                        const t = kd().model.computes.seasonScheduleInfo(e),
                            a = t.endTimestamp,
                            n = t.startTimestamp,
                            s = t.state,
                            i = t.hasTentativeDates;
                        return r().createElement(
                            'div',
                            { className: b()('SeasonStatus_base_45') },
                            (() => {
                                switch (s) {
                                    case yd.NotStarted:
                                        return r().createElement(
                                            'div',
                                            null,
                                            i
                                                ? Hd.seasonDate.$num(e)
                                                : r().createElement(wn, {
                                                      text: R.strings.comp7_ext.season.range(),
                                                      binding: Jn(n, a),
                                                  }),
                                        );
                                    case yd.JustStarted:
                                    case yd.EndSoon:
                                    case yd.Active:
                                        return r().createElement('div', null, Hd.seasonStatus.active());
                                    case yd.End:
                                        return r().createElement('div', null, Hd.seasonStatus.end());
                                    default:
                                        return (console.error(`Unreachable season state ${s}`), null);
                                }
                            })(),
                        );
                    }),
                    Ud = R.strings.comp7_ext,
                    Vd = ({ text: e, value: t, isPercentage: a = !1 }) =>
                        r().createElement(
                            'div',
                            { className: b()('Row_base_fb', a && 'Row_base__percentage_02') },
                            e,
                            r().createElement('div', { className: 'Row_dashes_9b' }),
                            r().createElement(
                                'div',
                                { className: 'Row_value_4c' },
                                (({ value: e, isPercentage: t = !1, fractionDigits: a = 2 }) =>
                                    -1 === e
                                        ? Ud.dash()
                                        : ((e, t, a) => {
                                              const n =
                                                  Number.isInteger(e) || Number.isInteger(10 * e)
                                                      ? q.Z5.getRealFormat(e, q.Gr.WO_ZERO_DIGITS)
                                                      : q.Z5.getRealFormat(parseFloat(e.toFixed(a)), q.Gr.FRACTIONAL);
                                              return t ? ta(Ud.percentage(), { percentageValue: n }) : n;
                                          })(e, t, a))({ value: t, isPercentage: a }),
                            ),
                        ),
                    Gd = 'Table_container_e0',
                    qd = R.strings.comp7_ext.yearlyStatistics,
                    jd = (0, De.Pi)(({ index: e }) => {
                        const t = kd().model.computes.seasonCard(e),
                            a = t.rating,
                            n = t.singleBattlesCount,
                            s = t.singleBattlesWinRate,
                            i = t.superPlatoonBattlesCount,
                            o = t.superPlatoonBattlesWinRate;
                        return r().createElement(
                            'div',
                            { className: b()('Table_base_e3') },
                            r().createElement(
                                'div',
                                { className: Gd },
                                r().createElement(Vd, { text: qd.rating(), value: a }),
                            ),
                            r().createElement(
                                'div',
                                { className: Gd },
                                r().createElement(Vd, { text: qd.battles(), value: n }),
                                r().createElement(Vd, { text: qd.wins(), value: s, isPercentage: !0 }),
                            ),
                            r().createElement(
                                'div',
                                { className: Gd },
                                r().createElement(Vd, { text: qd.superPlatoonBattles(), value: i }),
                                r().createElement(Vd, { text: qd.wins(), value: o, isPercentage: !0 }),
                            ),
                        );
                    }),
                    Qd = (e) => {
                        switch (!0) {
                            case e >= A.ExtraLarge:
                                return va.x420;
                            case e >= A.Large:
                                return va.x260;
                            case e >= A.Medium:
                                return va.x200;
                            default:
                                return va.x150;
                        }
                    },
                    Yd = 'SeasonCard_rankImage_d9',
                    Xd = 'SeasonCard_divider_3e',
                    Kd = R.strings.comp7_ext.yearlyStatistics,
                    Zd = [yd.JustStarted, yd.Active, yd.EndSoon],
                    Jd = (0, De.Pi)(({ index: e, className: t }) => {
                        const a = kd().model,
                            n = a.computes.seasonCard(e),
                            s = n.rank,
                            i = n.division,
                            o = n.hasRankReceived,
                            u = a.computes.seasonScheduleInfo(e),
                            l = u.state,
                            c = u.name,
                            d = w().mediaSize,
                            m = Zd.includes(l);
                        return r().createElement(
                            'div',
                            { className: b()('SeasonCard_base_34', t) },
                            0 === e && r().createElement('div', { className: b()(Xd, 'SeasonCard_divider__left_58') }),
                            r().createElement('div', { className: 'SeasonCard_name_b2' }, Kd.seasonName.$num(e)),
                            r().createElement(zd, { index: e }),
                            o
                                ? r().createElement(ba, {
                                      rank: s,
                                      size: Qd(d),
                                      seasonName: c,
                                      division: i,
                                      className: Yd,
                                  })
                                : r().createElement(li, { size: Qd(d), seasonName: c, className: Yd }),
                            r().createElement(Wd, { index: e }),
                            r().createElement(jd, { index: e }),
                            r().createElement(Td, {
                                className: 'SeasonCard_laceBase_32',
                                classNames: {
                                    lace: b()(
                                        'SeasonCard_laceContainer_be',
                                        m && 'SeasonCard_laceContainer__active_46',
                                    ),
                                },
                            }),
                            m && r().createElement('div', { className: 'SeasonCard_glow_8b' }),
                            l === yd.End &&
                                o &&
                                r().createElement(Od, { index: e, className: 'SeasonCard_cardFooter_74' }),
                            r().createElement('div', { className: b()(Xd, 'SeasonCard_divider__right_0a') }),
                        );
                    }),
                    em = {
                        base: 'YearlyStatisticsPage_base_35',
                        heading: 'YearlyStatisticsPage_heading_64',
                        contentWrapper: 'YearlyStatisticsPage_contentWrapper_ec',
                        cardWrapper: 'YearlyStatisticsPage_cardWrapper_45',
                        cardWrapper__left: 'YearlyStatisticsPage_cardWrapper__left_4e',
                        cardWrapper__right: 'YearlyStatisticsPage_cardWrapper__right_2f',
                        bg__disabled: 'YearlyStatisticsPage_bg__disabled_1e',
                        seasonCard__disabled: 'YearlyStatisticsPage_seasonCard__disabled_d5',
                        seasonCard: 'YearlyStatisticsPage_seasonCard_64',
                    },
                    tm = (0, De.Pi)(() => {
                        const e = kd().model.computes,
                            t = (0, Ke.useSpring)(_t);
                        return r().createElement(
                            'div',
                            { className: em.base },
                            r().createElement(
                                'div',
                                { className: em.heading },
                                r().createElement(
                                    dt,
                                    { className: be },
                                    R.strings.comp7_ext.page.heading.yearlyStatistics(),
                                ),
                                r().createElement(ar, null),
                            ),
                            r().createElement(
                                Ke.animated.div,
                                { style: t, className: em.contentWrapper },
                                Kt(e.seasonCardsLength(), (t) => {
                                    const a = e.isSeasonNotStarted(t);
                                    return r().createElement(
                                        'div',
                                        {
                                            key: t,
                                            className: b()(
                                                em.cardWrapper,
                                                0 === t && em.cardWrapper__left,
                                                t === e.seasonCardsLength() - 1 && em.cardWrapper__right,
                                            ),
                                        },
                                        r().createElement(Rd, {
                                            index: t,
                                            className: b()(em.bg, a && em.bg__disabled),
                                        }),
                                        r().createElement(Jd, {
                                            index: t,
                                            className: b()(em.seasonCard, a && em.seasonCard__disabled),
                                        }),
                                    );
                                }),
                            ),
                        );
                    }),
                    am = {
                        [Fe.Progression]: () =>
                            r().createElement(gr, { options: Pe.PROGRESSION_PAGE }, r().createElement(Fi, null)),
                        [Fe.RankRewards]: () =>
                            r().createElement(Bi, { options: Pe.RANK_REWARDS_PAGE }, r().createElement(yo, null)),
                        [Fe.WeeklyQuests]: () =>
                            r().createElement(hl, { options: Pe.WEEKLY_QUESTS_PAGE }, r().createElement(cc, null)),
                        [Fe.Leaderboard]: () =>
                            r().createElement(Ct, { options: Pe.LEADERBOARD_PAGE }, r().createElement(ir, null)),
                        [Fe.YearlyRewards]: () =>
                            r().createElement(
                                Sc,
                                { options: Pe.YEARLY_REWARDS_PAGE },
                                r().createElement(hc, null, r().createElement(Sd, null)),
                            ),
                        [Fe.Shop]: () => r().createElement(Ro, { options: Pe.SHOP_PAGE }, r().createElement(gl, null)),
                        [Fe.YearlyStatistics]: () =>
                            r().createElement(Pd, { options: Pe.YEARLY_STATISTICS_PAGE }, r().createElement(tm, null)),
                    },
                    nm = ({ pageView: e }) => {
                        const t = am[e];
                        return t ? r().createElement(t, null) : (console.error('Unreachable code: ViewResolver'), null);
                    },
                    rm = {
                        '--pageContentWidth': '78vw',
                        base: 'App_base_ae',
                        base__qualification: 'App_base__qualification_7e',
                        base__progression: 'App_base__progression_a4',
                        base__leaderboard: 'App_base__leaderboard_54',
                        season__first: 'App_season__first_fd',
                        season__second: 'App_season__second_df',
                        season__third: 'App_season__third_b3',
                        base__rankRewards: 'App_base__rankRewards_6b',
                        base__weeklyQuests: 'App_base__weeklyQuests_ad',
                        base__shop: 'App_base__shop_2a',
                        viewContainer: 'App_viewContainer_a6',
                        sidebar: 'App_sidebar_a2',
                        sidebar__medium: 'App_sidebar__medium_e4',
                        info: 'App_info_01',
                        whatsNewButton: 'App_whatsNewButton_0f',
                        whatsNewIcon: 'App_whatsNewIcon_ad',
                        whatsNewGlow: 'App_whatsNewGlow_99',
                        choiceAward: 'App_choiceAward_da',
                    },
                    sm = { base: rm.whatsNewButton, icon: rm.whatsNewIcon, glow: rm.whatsNewGlow },
                    im = (0, De.Pi)(() => {
                        const e = Ie(),
                            t = e.model,
                            a = e.controls,
                            n = G().model,
                            s = Ae(),
                            i = t.root.get().pageViewId,
                            o = t.claimRewardsModel.get(),
                            u = o.isDisabled,
                            l = o.rewardsCount,
                            c = w().mediaSize,
                            d = t.computes.isProgressionInQualification();
                        return r().createElement(
                            'div',
                            {
                                className: b()(
                                    rm.base,
                                    d && !Ce() && rm.base__qualification,
                                    !d && rm[`base__${Ne[i]}`],
                                    rm[`season__${n.season.name.get()}`],
                                ),
                            },
                            r().createElement(
                                'div',
                                { className: rm.viewContainer },
                                r().createElement(nm, { pageView: i }),
                            ),
                            r().createElement(
                                Qe,
                                { options: Pe.TABS },
                                r().createElement(ot, {
                                    pageView: i,
                                    className: b()(rm.sidebar, s.isMedium && rm.sidebar__medium),
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: rm.info },
                                r().createElement(Ee, {
                                    caption: R.strings.comp7_ext.infoPageButtonLabel(),
                                    type: 'info',
                                    side: 'left',
                                    onClick: a.openInfoPage,
                                }),
                                r().createElement(Ee, {
                                    caption: R.strings.comp7_ext.whatsNewButtonLabel(),
                                    type: 'info',
                                    side: 'left',
                                    onClick: a.openWhatsNewScreen,
                                    classNames: sm,
                                }),
                            ),
                            r().createElement(fe, { onClose: a.close }),
                            l > 0 &&
                                r().createElement(
                                    'div',
                                    { className: rm.choiceAward },
                                    r().createElement(le, {
                                        size: c >= A.Large ? ue.Big : ue.Small,
                                        count: l,
                                        disabled: u,
                                        onClick: a.openRewardsSelectionScreen,
                                    }),
                                ),
                        );
                    });
                engine.whenReady.then(() => {
                    L().render(
                        r().createElement(
                            I,
                            null,
                            r().createElement(
                                Re,
                                null,
                                r().createElement(V, { options: Pe.SCHEDULE }, r().createElement(im, null)),
                            ),
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
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](a, a.exports, __webpack_require__), a.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, n) => {
            if (!t) {
                var r = 1 / 0;
                for (u = 0; u < deferred.length; u++) {
                    for (var [t, a, n] = deferred[u], s = !0, i = 0; i < t.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((s = !1), n < r && (r = n));
                    if (s) {
                        deferred.splice(u--, 1);
                        var o = a();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var u = deferred.length; u > 0 && deferred[u - 1][2] > n; u--) deferred[u] = deferred[u - 1];
            deferred[u] = [t, a, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var a in t)
                __webpack_require__.o(t, a) &&
                    !__webpack_require__.o(e, a) &&
                    Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
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
        (__webpack_require__.j = 157),
        (() => {
            var e = { 157: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var n,
                        r,
                        [s, i, o] = a,
                        u = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(a); u < s.length; u++)
                        ((r = s[u]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(7604));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
