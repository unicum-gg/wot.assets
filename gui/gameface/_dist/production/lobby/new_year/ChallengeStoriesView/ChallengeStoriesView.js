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
            527: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, { mouse: () => u, off: () => l, on: () => s, onResize: () => o, onScaleUpdated: () => i }));
                var r = n(2472),
                    a = n(1176);
                const o = (0, r.E)('clientResized'),
                    i = (0, r.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const u = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, a.R)(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const o = `mouse${t}`,
                                        i = c[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, s),
                                        r(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(o, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, o, {
                        disable() {
                            ((e.enabled = !1), r());
                        },
                        enable() {
                            ((e.enabled = !0), r());
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
            5959: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => i,
                        getSize: () => o,
                        graphicsQuality: () => s,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var r = n(527),
                    a = n(2493);
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => r });
            },
            2493: (e, t, n) => {
                'use strict';
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function a(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => a, G: () => r });
            },
            2472: (e, t, n) => {
                'use strict';
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => r });
            },
            3138: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => o });
                var r = n(5959),
                    a = n(514);
                const o = { view: n(7641), client: r, sound: a.ZP };
            },
            514: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => i });
                var r = n(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    o = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, r.playSound)(a[t])), e), {}),
                    i = { play: Object.assign({}, o, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            3722: (e, t, n) => {
                'use strict';
                function r(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function a(e, t, n) {
                    return `url(${r(e, t, n)})`;
                }
                (n.r(t), n.d(t, { getBgUrl: () => a, getTextureUrl: () => r }));
            },
            6112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => a });
                var r = n(2472);
                const a = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => l,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => M,
                        events: () => o.U,
                        extraSize: () => T,
                        forceTriggerMouseMove: () => x,
                        freezeTextureBeforeResize: () => f,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => L,
                        getFontNames: () => O,
                        getScale: () => v,
                        getSize: () => _,
                        getViewGlobalPosition: () => h,
                        isEventHandled: () => S,
                        isFocused: () => b,
                        pxToRem: () => p,
                        remToPx: () => w,
                        resize: () => g,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => E,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => C,
                    }));
                var r = n(3722),
                    a = n(6112),
                    o = n(6538),
                    i = n(8566);
                const s = 15;
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function u(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function g(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function h(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: w(t.x), y: w(t.y) };
                }
                function f() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function v() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function w(e) {
                    return viewEnv.remToPx(e);
                }
                function E(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function y() {
                    return viewEnv.setEventHandled();
                }
                function S() {
                    return viewEnv.isEventHandled();
                }
                function x() {
                    viewEnv.forceTriggerMouseMove();
                }
                function L() {
                    return viewEnv.getShowingStatus();
                }
                const O = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    M = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
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
                    C = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => c });
                const r = ['args'];
                const a = 2,
                    o = 16,
                    i = 32,
                    s = 64,
                    l = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(t, r);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((a = o),
                                              Object.entries(a).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    c = {
                        close(e) {
                            l('popover' === e ? a : i);
                        },
                        minimize() {
                            l(s);
                        },
                        move(e) {
                            l(o, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, n) => {
                'use strict';
                let r, a;
                (n.d(t, { n: () => r }),
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
                    })(r || (r = {})),
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
                    })(a || (a = {})));
            },
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => o });
                var r = n(3138);
                class a {
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
                        return (window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, t, n = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const o = r.O.view.addModelObserver(e, n, a);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(o) : (this._views[n] = [o])))
                                : console.error("Can't add callback for model:", e),
                            o
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
                            const r = this._callbacks[n];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const o = a;
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
            9916: (e, t, n) => {
                'use strict';
                n.d(t, { B0: () => s, ry: () => v, Sy: () => w });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    n();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const n = e,
                            r = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== r)),
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
                r.__instance = void 0;
                const a = r;
                var o = n(1358);
                var i = n(8613);
                let s;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(s || (s = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(5521),
                    _ = n(3138);
                const g = ['args'];
                function h(e, t, n, r, a, o, i) {
                    try {
                        var s = e[o](i),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, a);
                }
                const f = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    v = (function () {
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
                                    return new Promise(function (r, a) {
                                        var o = e.apply(t, n);
                                        function i(e) {
                                            h(o, r, a, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            h(o, r, a, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    p = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(t, g);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, o));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    w = () => p(s.CLOSE),
                    E = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var b = n(7572);
                const y = a.instance,
                    S = {
                        DataTracker: o.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: u,
                        DateFormatType: d,
                        makeGlobalBoundingBox: f,
                        sendMoveEvent: (e) => p(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: w,
                        sendClosePopOverEvent: () => p(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            p(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, a = R.invalid('resId'), o) => {
                            const i = _.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                c = l.x,
                                u = l.y,
                                d = l.width,
                                m = l.height,
                                g = {
                                    x: _.O.view.pxToRem(c) + i.x,
                                    y: _.O.view.pxToRem(u) + i.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(m),
                                };
                            p(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: f(g),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => E(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            E(e, w);
                        },
                        handleViewEvent: p,
                        onBindingsReady: v,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const a = Object.prototype.toString.call(t[r]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[r];
                                        n[r] = [];
                                        for (let t = 0; t < a.length; t++) n[r].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[r] = e(t[r]))
                                            : (n[r] = t[r]);
                                }
                            return n;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = S;
            },
            8613: (e, t, n) => {
                'use strict';
                n.d(t, { Z5: () => r, cy: () => a });
                const r = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            2283: (e, t, n) => {
                'use strict';
                var r = {};
                (n.r(r), n.d(r, { Area: () => lt, Bar: () => ot, Default: () => st, useVerticalScrollApi: () => je }));
                var a = {};
                (n.r(a),
                    n.d(a, {
                        Area: () => Lt,
                        Bar: () => yt,
                        DefaultScroll: () => xt,
                        Direction: () => Ue,
                        defaultSettings: () => Ve,
                        useHorizontalScrollApi: () => ct,
                    }));
                var o = n(6179),
                    i = n.n(o);
                const s = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
                var l = n(3138);
                const c = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var u;
                function d(e, t, n) {
                    const r = (function (e, t) {
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
                        })(e, n),
                        a = (function (e, t) {
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
                        })(t, n),
                        o = Math.min(r, a);
                    return {
                        extraLarge: o === n.extraLarge.weight,
                        large: o === n.large.weight,
                        medium: o === n.medium.weight,
                        small: o === n.small.weight,
                        extraSmall: o === n.extraSmall.weight,
                        extraLargeWidth: r === n.extraLarge.weight,
                        largeWidth: r === n.large.weight,
                        mediumWidth: r === n.medium.weight,
                        smallWidth: r === n.small.weight,
                        extraSmallWidth: r === n.extraSmall.weight,
                        extraLargeHeight: a === n.extraLarge.weight,
                        largeHeight: a === n.large.weight,
                        mediumHeight: a === n.medium.weight,
                        smallHeight: a === n.small.weight,
                        extraSmallHeight: a === n.extraSmall.weight,
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
                const m = l.O.client.getSize('rem'),
                    _ = m.width,
                    g = m.height,
                    h = Object.assign({ width: _, height: g }, d(_, g, c)),
                    f = (0, o.createContext)(h),
                    v = ['children'];
                const p = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (t.indexOf(r) >= 0) continue;
                                    n[r] = e[r];
                                }
                            return n;
                        })(e, v);
                    const r = (0, o.useContext)(f),
                        a = r.extraLarge,
                        i = r.large,
                        l = r.medium,
                        c = r.small,
                        u = r.extraSmall,
                        d = r.extraLargeWidth,
                        m = r.largeWidth,
                        _ = r.mediumWidth,
                        g = r.smallWidth,
                        h = r.extraSmallWidth,
                        p = r.extraLargeHeight,
                        w = r.largeHeight,
                        E = r.mediumHeight,
                        b = r.smallHeight,
                        y = r.extraSmallHeight,
                        S = { extraLarge: p, large: w, medium: E, small: b, extraSmall: y };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && a) return t;
                        if (n.large && i) return t;
                        if (n.medium && l) return t;
                        if (n.small && c) return t;
                        if (n.extraSmall && u) return t;
                    } else {
                        if (n.extraLargeWidth && d) return s(t, n, S);
                        if (n.largeWidth && m) return s(t, n, S);
                        if (n.mediumWidth && _) return s(t, n, S);
                        if (n.smallWidth && g) return s(t, n, S);
                        if (n.extraSmallWidth && h) return s(t, n, S);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && p) return t;
                            if (n.largeHeight && w) return t;
                            if (n.mediumHeight && E) return t;
                            if (n.smallHeight && b) return t;
                            if (n.extraSmallHeight && y) return t;
                        }
                    }
                    return null;
                };
                p.defaultProps = {
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
                (0, o.memo)(p);
                const w = (e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    E = ({ children: e }) => {
                        const t = (0, o.useContext)(f),
                            n = (0, o.useState)(t),
                            r = n[0],
                            a = n[1],
                            s = (0, o.useCallback)((e, t) => {
                                const n = l.O.view.pxToRem(e),
                                    r = l.O.view.pxToRem(t);
                                a(Object.assign({ width: n, height: r }, d(n, r, c)));
                            }, []),
                            u = (0, o.useCallback)(() => {
                                const e = l.O.client.getSize('px');
                                s(e.width, e.height);
                            }, [s]);
                        (w(() => {
                            (l.O.client.events.on('clientResized', s), l.O.client.events.on('self.onScaleUpdated', u));
                        }),
                            (0, o.useEffect)(
                                () => () => {
                                    (l.O.client.events.off('clientResized', s),
                                        l.O.client.events.off('self.onScaleUpdated', u));
                                },
                                [s, u],
                            ));
                        const m = (0, o.useMemo)(() => Object.assign({}, r), [r]);
                        return i().createElement(f.Provider, { value: m }, e);
                    };
                var b = n(6483),
                    y = n.n(b),
                    S = n(926),
                    x = n.n(S);
                let L, O, M;
                (!(function (e) {
                    ((e[(e.ExtraSmall = c.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = c.small.width)] = 'Small'),
                        (e[(e.Medium = c.medium.width)] = 'Medium'),
                        (e[(e.Large = c.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = c.extraLarge.width)] = 'ExtraLarge'));
                })(L || (L = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = c.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = c.small.width)] = 'Small'),
                            (e[(e.Medium = c.medium.width)] = 'Medium'),
                            (e[(e.Large = c.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = c.extraLarge.width)] = 'ExtraLarge'));
                    })(O || (O = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = c.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = c.small.height)] = 'Small'),
                            (e[(e.Medium = c.medium.height)] = 'Medium'),
                            (e[(e.Large = c.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = c.extraLarge.height)] = 'ExtraLarge'));
                    })(M || (M = {})));
                const T = () => {
                        const e = (0, o.useContext)(f),
                            t = e.width,
                            n = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return L.ExtraLarge;
                                    case e.large:
                                        return L.Large;
                                    case e.medium:
                                        return L.Medium;
                                    case e.small:
                                        return L.Small;
                                    case e.extraSmall:
                                        return L.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), L.ExtraSmall);
                                }
                            })(e),
                            a = ((e) => {
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
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return M.ExtraLarge;
                                    case e.largeHeight:
                                        return M.Large;
                                    case e.mediumHeight:
                                        return M.Medium;
                                    case e.smallHeight:
                                        return M.Small;
                                    case e.extraSmallHeight:
                                        return M.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), M.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: a, mediaHeight: i, remScreenWidth: t, remScreenHeight: n };
                    },
                    C = ['children', 'className'];
                function k() {
                    return (
                        (k = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        k.apply(null, arguments)
                    );
                }
                const P = {
                        [O.ExtraSmall]: '',
                        [O.Small]: x().SMALL_WIDTH,
                        [O.Medium]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH}`,
                        [O.Large]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH} ${x().LARGE_WIDTH}`,
                        [O.ExtraLarge]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH} ${x().LARGE_WIDTH} ${x().EXTRA_LARGE_WIDTH}`,
                    },
                    N = {
                        [M.ExtraSmall]: '',
                        [M.Small]: x().SMALL_HEIGHT,
                        [M.Medium]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT}`,
                        [M.Large]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT} ${x().LARGE_HEIGHT}`,
                        [M.ExtraLarge]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT} ${x().LARGE_HEIGHT} ${x().EXTRA_LARGE_HEIGHT}`,
                    },
                    H = {
                        [L.ExtraSmall]: '',
                        [L.Small]: x().SMALL,
                        [L.Medium]: `${x().SMALL} ${x().MEDIUM}`,
                        [L.Large]: `${x().SMALL} ${x().MEDIUM} ${x().LARGE}`,
                        [L.ExtraLarge]: `${x().SMALL} ${x().MEDIUM} ${x().LARGE} ${x().EXTRA_LARGE}`,
                    },
                    A = (e) => {
                        let t = e.children,
                            n = e.className,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, C);
                        const a = T(),
                            o = a.mediaWidth,
                            s = a.mediaHeight,
                            l = a.mediaSize;
                        return i().createElement('div', k({ className: y()(n, P[o], N[s], H[l]) }, r), t);
                    },
                    I = ['children'];
                const W = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (t.indexOf(r) >= 0) continue;
                                    n[r] = e[r];
                                }
                            return n;
                        })(e, I);
                    return i().createElement(E, null, i().createElement(A, n, t));
                };
                var D = n(493),
                    B = n.n(D);
                function z(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const F = {
                        playHighlight() {
                            z('highlight');
                        },
                        playClick() {
                            z('play');
                        },
                        playYes() {
                            z('yes1');
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
                    V = [
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
                function G() {
                    return (
                        (G = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        G.apply(null, arguments)
                    );
                }
                class j extends i().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && z(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                (e && e(t), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && z(this.props.soundClick));
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
                            n = e.onClick,
                            r = e.goto,
                            a = e.side,
                            o = e.type,
                            s = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            u = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(e, V)),
                            _ = y()(U.base, U[`base__${o}`], U[`base__${a}`], null == s ? void 0 : s.base),
                            g = y()(U.icon, U[`icon__${o}`], U[`icon__${a}`], null == s ? void 0 : s.icon),
                            h = y()(U.glow, null == s ? void 0 : s.glow),
                            f = y()(U.caption, U[`caption__${o}`], null == s ? void 0 : s.caption),
                            v = y()(U.goto, null == s ? void 0 : s.goto);
                        return i().createElement(
                            'div',
                            G(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(u),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                m,
                            ),
                            'info' !== o && i().createElement('div', { className: U.shine }),
                            i().createElement('div', { className: g }, i().createElement('div', { className: h })),
                            i().createElement('div', { className: f }, t),
                            r && i().createElement('div', { className: v }, r),
                        );
                    }
                }
                j.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const $ = (e) => {
                    let t,
                        n = null;
                    return (
                        (n = requestAnimationFrame(() => {
                            n = requestAnimationFrame(() => {
                                ((n = null), (t = e()));
                            });
                        })),
                        () => {
                            ('function' == typeof t && t(), null !== n && cancelAnimationFrame(n));
                        }
                    );
                };
                var K = n(5521),
                    q = n(9916);
                const Y = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function X(e = K.n.NONE, t = Y, n = !1, r = !1) {
                    (0, o.useEffect)(() => {
                        if (e !== K.n.NONE)
                            return (
                                window.addEventListener('keydown', a, n),
                                () => {
                                    window.removeEventListener('keydown', a, n);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!r && l.O.view.isEventHandled()) return;
                                (l.O.view.setEventHandled(), t(a), n && a.stopPropagation());
                            }
                        }
                    }, [t, e, n, r]);
                }
                function Q() {
                    !(function (e = K.n.ESCAPE) {
                        X(e, q.Sy, !0);
                    })(K.n.ESCAPE);
                }
                const Z = (e) => {
                    (0, o.useEffect)(e, []);
                };
                var J = n(3403);
                const ee = 'PaginationList_base_04',
                    te = 'PaginationList_item_48',
                    ne = [
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
                function re(e) {
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
                const ae = (e, t, n = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: q.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                n,
                            ),
                        );
                    },
                    oe = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            a = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            c = e.ignoreShowDelay,
                            u = void 0 !== c && c,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            _ = e.decoratorId,
                            g = void 0 === _ ? 0 : _,
                            h = e.isEnabled,
                            f = void 0 === h || h,
                            v = e.targetId,
                            p = void 0 === v ? 0 : v,
                            w = e.onShow,
                            E = e.onHide,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, ne);
                        const y = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, o.useMemo)(
                                () =>
                                    p ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let n,
                                            r = R.invalid('resId');
                                        return (
                                            t &&
                                                ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== n &&
                                                    window.subViews[n] &&
                                                    (r = window.subViews[n].id)),
                                            { caller: n, stack: t, resId: r }
                                        );
                                    })().resId,
                                [p],
                            ),
                            x = (0, o.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (ae(n, g, { isMouseEvent: !0, on: !0, arguments: re(r) }, S),
                                    w && w(),
                                    (y.current.isVisible = !0));
                            }, [n, g, r, S, w]),
                            L = (0, o.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        ae(n, g, { on: !1 }, S),
                                        y.current.isVisible && E && E(),
                                        (y.current.isVisible = !1));
                                }
                            }, [n, g, S, E]),
                            O = (0, o.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && L();
                                    }, 200)));
                            }, []);
                        ((0, o.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', O, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', O, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, o.useEffect)(() => {
                                !1 === f && L();
                            }, [f, L]),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', L),
                                    () => {
                                        (window.removeEventListener('mouseleave', L), L());
                                    }
                                ),
                                [L],
                            ));
                        return f
                            ? (0, o.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((M = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(x, u ? 100 : 400)),
                                                      a && a(e),
                                                      M && M(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (L(), null == i || i(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === m && L(), null == l || l(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === m && L(), null == s || s(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : t;
                        var M;
                    },
                    ie = ({ tooltipArgs: e, children: t }) => (e ? i().createElement(oe, e, t) : t),
                    se = {
                        base: 'PaginationRenderer_base_de',
                        base__selected: 'PaginationRenderer_base__selected_5a',
                        base__disabled: 'PaginationRenderer_base__disabled_ba',
                        label: 'PaginationRenderer_label_0e',
                    },
                    le = (0, o.memo)(
                        ({ className: e, index: t, onClick: n, isSelected: r, isDisabled: a, tooltipArgs: o }) => {
                            const s = r || a;
                            return i().createElement(
                                ie,
                                { tooltipArgs: o },
                                i().createElement(
                                    'div',
                                    {
                                        className: y()(se.base, r && se.base__selected, a && se.base__disabled, e),
                                        onClick: () => {
                                            s || (n(t), z('hangar_newyear_hud_upper_click'));
                                        },
                                        onMouseEnter: () => {
                                            s || F.playHighlight();
                                        },
                                    },
                                    i().createElement(
                                        'div',
                                        { className: y()(se.label, r && se.label__selected) },
                                        t + 1,
                                    ),
                                ),
                            );
                        },
                    );
                function ce() {
                    return (
                        (ce = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        ce.apply(null, arguments)
                    );
                }
                const ue = ({ className: e, selectedIndex: t, data: n, onChange: r }) =>
                        i().createElement(
                            'div',
                            { className: y()(ee, e) },
                            n.map((e, n) =>
                                i().createElement(
                                    le,
                                    ce({ onClick: r, index: n, className: te, isSelected: t === n, key: n }, e),
                                ),
                            ),
                        ),
                    de = (e, t, n) => (n < e ? e : n > t ? t : n);
                var me = n(6112);
                function _e() {}
                function ge() {
                    return !1;
                }
                console.log;
                const he = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function fe() {
                    return (
                        (fe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        fe.apply(null, arguments)
                    );
                }
                const ve = (0, o.forwardRef)(function (e, t) {
                        let n = e.src,
                            r = e.className,
                            a = e.autoplay,
                            s = void 0 !== a && a,
                            c = e.style,
                            u = e.loop,
                            d = void 0 !== u && u,
                            m = e.isPrebufferKeyframes,
                            _ = e.keyframesNameConfig,
                            g = e.onClick,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, he);
                        const f = t,
                            v = (0, o.useRef)(null);
                        return (
                            Z(() =>
                                l.O.view.events.onDisplayChanged((e, t) => {
                                    var n, r;
                                    t === me.W.hidden && (null == (n = v.current) || n.pause());
                                    t === me.W.shown && (null == (r = v.current) || r.play());
                                }),
                            ),
                            (0, o.useEffect)(
                                () =>
                                    $(() => {
                                        const e = v.current;
                                        if (!f || !e || !m)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const t = e.cohGetKeyframeTimestamps();
                                        t.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              t.map((t) => {
                                                  null == e || e.cohPrebufferKeyframe(t);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [m, f],
                            ),
                            (0, o.useEffect)(() => {
                                if (f && v.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: _e,
                                        },
                                        t = () => {
                                            let t = 0;
                                            const n = (function (e) {
                                                    let t = 0;
                                                    return [
                                                        function n() {
                                                            (e(), (t = requestAnimationFrame(n)));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(t);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (v.current) {
                                                        const n = v.current,
                                                            r = n.currentTime,
                                                            a = n.duration;
                                                        if (
                                                            (t !== r &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: r, duration: a }),
                                                                ),
                                                                (t = r)),
                                                            v.current.paused || !f || !m)
                                                        )
                                                            return;
                                                        const o = v.current.cohGetKeyframeTimestamps();
                                                        o.forEach((t, n) => {
                                                            r > o[n] - 0.02 &&
                                                                r < o[n] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const r = Object.keys(null != _ ? _ : {})[n];
                                                                    return e({
                                                                        time: t,
                                                                        name: `${_ ? r : `Point_${n}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                r = n[0],
                                                a = n[1];
                                            return (r(), a);
                                        };
                                    e.changeTimeLoop = t();
                                    const n = (t) => (
                                            e.changeTimeHandlers.push(t),
                                            () => {
                                                const n = e.changeTimeHandlers,
                                                    r = n.indexOf(t);
                                                r < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : n.splice(r, 1);
                                            }
                                        ),
                                        r = (t) => (
                                            e.changeKeyframeHandlers.push(t),
                                            () => {
                                                const n = e.changeKeyframeHandlers,
                                                    r = n.indexOf(t);
                                                r < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : n.splice(r, 1);
                                            }
                                        ),
                                        a = () => {
                                            var e;
                                            return null == (e = v.current) ? void 0 : e.currentTime;
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = v.current) ? void 0 : e.duration;
                                        },
                                        i = (e) => {
                                            v.current && (v.current.currentTime = de(0, v.current.duration, e));
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = v.current) ? void 0 : e.play();
                                        },
                                        l = () => {
                                            var e;
                                            return null == (e = v.current) ? void 0 : e.pause();
                                        },
                                        c = () => {
                                            (l(), i(0));
                                        },
                                        u = () => {
                                            var e, t;
                                            return null !=
                                                (e = null == (t = v.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        d = (e) => {
                                            (i(e), s());
                                        },
                                        g = (e) => {
                                            (i(e), l());
                                        },
                                        h = () => {
                                            ((e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop());
                                        },
                                        p = (e, t) => {
                                            var n;
                                            return (
                                                null == (n = v.current) || n.addEventListener(e, t),
                                                () => {
                                                    var n;
                                                    return null == (n = v.current)
                                                        ? void 0
                                                        : n.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        w = (e, t) => {
                                            var n;
                                            return (
                                                null == (n = v.current) || n.removeEventListener(e, t),
                                                () => {
                                                    var n;
                                                    return null == (n = v.current)
                                                        ? void 0
                                                        : n.removeEventListener(e, t);
                                                }
                                            );
                                        };
                                    return (
                                        (f.current = {
                                            on: p,
                                            off: w,
                                            play: s,
                                            pause: l,
                                            stop: c,
                                            cleanup: h,
                                            getCurrentTime: a,
                                            getDuration: o,
                                            getCachedKeyframes: u,
                                            goToAndPlay: d,
                                            goToAndStop: g,
                                            setCurrentTime: i,
                                            domRef: v.current,
                                            onChangeTime: n,
                                            onKeyframes: r,
                                        }),
                                        () => {
                                            (h(), (f.current = null));
                                        }
                                    );
                                }
                            }, [_, f, m]),
                            (0, o.useEffect)(() => {
                                v.current && s && v.current.play();
                            }, [s, d]),
                            (0, o.useEffect)(() => {
                                if (v.current)
                                    return () => {
                                        v.current && v.current.pause();
                                    };
                            }, []),
                            i().createElement(
                                'video',
                                fe({ src: n, className: r, style: c, loop: d, ref: v, onClick: g }, h),
                            )
                        );
                    }),
                    pe = (0, o.memo)(ve),
                    we = 'SnowFallVideo_base_cf',
                    Ee = 'SnowFallVideo_wrapperContent_eb',
                    be = 'SnowFallVideo_content_a3',
                    ye = 'SnowFallVideo_content__lowPreset_0d',
                    Se = ({ className: e }) =>
                        i().createElement(
                            'div',
                            { className: y()(we, e) },
                            i().createElement(
                                'div',
                                { className: Ee },
                                l.O.client.graphicsQuality.isLow()
                                    ? i().createElement('div', { className: y()(be, ye) })
                                    : i().createElement(pe, {
                                          src: R.videos.new_year.snowfall.snowfall(),
                                          className: be,
                                          autoplay: !0,
                                          loop: !0,
                                      }),
                            ),
                        );
                var xe = n(9174);
                function Le(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return Oe(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? Oe(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Oe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const Me = (e) => (0 === e ? window : window.subViews.get(e));
                function Te(e, t) {
                    var n;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
                }
                const Ce = Te;
                var ke = n(3946);
                const Pe = ((e, t) => {
                        const n = (0, o.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: a, children: s, mocks: c }) {
                                const u = (0, o.useRef)([]),
                                    d = (n, r, a) => {
                                        var o;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = Me,
                                                context: r = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function o(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = a.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const a = n(t),
                                                        o = r.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? o
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, o);
                                                };
                                                return {
                                                    subscribe: (n, o) => {
                                                        const s = 'string' == typeof o ? `${r}.${o}` : r,
                                                            c = l.O.view.addModelObserver(s, t, !0);
                                                        return (a.set(c, n), e && n(i(o)), c);
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, t) => {
                                                        const n = i(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = i(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, n = Le(a.keys()); !(e = n()).done; ) o(e.value, t);
                                                    },
                                                    unsubscribe: o,
                                                };
                                            })(r),
                                            s =
                                                'real' === n
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (o = null == a ? void 0 : a.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === n ? (null == a ? void 0 : a.getter(e)) : s.readByPath(e),
                                            d = (e) => u.current.push(e),
                                            m = e({
                                                mode: n,
                                                readByPath: c,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            a = xe.LO.box(r, { equals: ge });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, xe.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            a = xe.LO.box(r, { equals: ge });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, xe.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = c(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = xe.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, xe.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                o = Object.entries(a),
                                                                i = o.reduce(
                                                                    (e, [t, n]) => ((e[n] = xe.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, xe.aD)((e) => {
                                                                            o.forEach(([t, n]) => {
                                                                                i[n].set(e[t]);
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
                                            _ = { mode: n, model: m, externalModel: s, cleanup: d };
                                        return {
                                            model: m,
                                            controls: 'mocks' === n && a ? a.controls(_) : t(_),
                                            externalModel: s,
                                            mode: n,
                                        };
                                    },
                                    m = (0, o.useRef)(!1),
                                    _ = (0, o.useState)(r),
                                    g = _[0],
                                    h = _[1],
                                    f = (0, o.useState)(() => d(r, a, c)),
                                    v = f[0],
                                    p = f[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        m.current ? p(d(g, a, c)) : (m.current = !0);
                                    }, [c, g, a]),
                                    (0, o.useEffect)(() => {
                                        h(r);
                                    }, [r]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            (v.externalModel.dispose(), u.current.forEach((e) => e()));
                                        },
                                        [v],
                                    ),
                                    i().createElement(n.Provider, { value: v }, s)
                                );
                            },
                            () => (0, o.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = e.object(),
                                n = {
                                    root: t,
                                    stories: e.array('stories'),
                                    currentStoryIndex: xe.LO.box(t.get().selectIndex),
                                    nextStoryIndex: xe.LO.box(t.get().selectIndex),
                                },
                                r = (0, ke.Om)(() => n.stories.get().length),
                                a = (0, ke.Om)((e) => Ce(n.stories.get(), e), { equals: ge }),
                                o = (0, ke.Om)(() => {
                                    return (
                                        (e = n.stories.get()),
                                        (t = (e) => {
                                            const t = 0 === e.length;
                                            return {
                                                isDisabled: t,
                                                tooltipArgs: t
                                                    ? {
                                                          contentId:
                                                              R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                                                  'resId',
                                                              ),
                                                          decoratorId:
                                                              R.views.common.tooltip_window.tooltip_window.TooltipWindow(
                                                                  'resId',
                                                              ),
                                                          args: {
                                                              body: R.strings.ny.newYear.challenge.stories.tooltips.unavailable.body(),
                                                          },
                                                      }
                                                    : void 0,
                                            };
                                        }),
                                        Array.isArray(e)
                                            ? e.map(t)
                                            : e.map((e, n, r) => t(null == e ? void 0 : e.value, n, r))
                                    );
                                    var e, t;
                                });
                            return Object.assign({}, n, {
                                computes: { getStoryByIndex: a, getStoriesLength: r, getStoriesPaginationData: o },
                            });
                        },
                        ({ model: e }) => ({
                            setCurrentStoryIndex: (0, xe.aD)((t) => e.currentStoryIndex.set(t)),
                            setNextStoryIndex: (0, xe.aD)((t) => e.nextStoryIndex.set(t)),
                        }),
                    ),
                    Re = Pe[0],
                    Ne = Pe[1],
                    He = {
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
                            const t = Math.sqrt,
                                n = Math.pow;
                            return e < 0.5 ? (1 - t(1 - n(2 * e, 2))) / 2 : (t(1 - n(-2 * e + 2, 2)) + 1) / 2;
                        },
                        easeOutBack(e) {
                            const t = 1.70158;
                            return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                        },
                        bezier: (e, t, n, r) => (a) =>
                            (1 - a) * (1 - a) * (1 - a) * e +
                            3 * (1 - a) * (1 - a) * a * t +
                            3 * (1 - a) * a * a * n +
                            a * a * a * r,
                    };
                var Ae = n(7030);
                const Ie = [];
                function We(e) {
                    const t = (0, o.useRef)(e);
                    return (
                        (0, o.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, o.useCallback)((...e) => (0, t.current)(...e), Ie)
                    );
                }
                function De(e, t, n = []) {
                    const r = (0, o.useRef)(0),
                        a = (0, o.useCallback)(() => window.clearInterval(r.current), n || []);
                    (0, o.useEffect)(() => a, [a]);
                    const i = (null != n ? n : []).concat([t]);
                    return [
                        (0, o.useCallback)((n) => {
                            ((r.current = window.setInterval(() => e(n, !0), t)), e(n, !1));
                        }, i),
                        a,
                    ];
                }
                function Be(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return ze(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? ze(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function ze(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                function Fe(e, t, n) {
                    const r = (0, o.useMemo)(
                        () =>
                            (function (e, t, n, r) {
                                let a,
                                    o = !1,
                                    i = 0;
                                function s() {
                                    a && clearTimeout(a);
                                }
                                function l(...l) {
                                    const c = this,
                                        u = Date.now() - i;
                                    function d() {
                                        ((i = Date.now()), n.apply(c, l));
                                    }
                                    o ||
                                        (r && !a && d(),
                                        s(),
                                        void 0 === r && u > e
                                            ? d()
                                            : !0 !== t &&
                                              (a = setTimeout(
                                                  r
                                                      ? function () {
                                                            a = void 0;
                                                        }
                                                      : d,
                                                  void 0 === r ? e - u : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((r = n), (n = t), (t = void 0)),
                                    (l.cancel = function () {
                                        (s(), (o = !0));
                                    }),
                                    l
                                );
                            })(n, e),
                        t,
                    );
                    return ((0, o.useEffect)(() => r.cancel, [r]), r);
                }
                let Ue;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Ue || (Ue = {}));
                const Ve = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Ge = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: r,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const s = (e, n) => {
                            const r = t(e),
                                a = r[0],
                                o = r[1];
                            return o <= a ? 0 : de(a, o, n);
                        };
                        return (c = {}) => {
                            const u = c.settings,
                                d = void 0 === u ? Ve : u,
                                m = (0, o.useRef)(null),
                                _ = (0, o.useRef)(null),
                                g = (() => {
                                    const e = (0, o.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        r = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        a = (e, ...n) => {
                                            for (var r, a = Be(t(e).values()); !(r = a()).done; ) (0, r.value)(...n);
                                        };
                                    return (0, o.useMemo)(() => ({ on: n, off: r, trigger: a }), []);
                                })(),
                                h = Fe(
                                    () => {
                                        l.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                f = (0, Ae.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (n(t, e), g.trigger('change', e), i && h());
                                    },
                                    onRest: (e) => g.trigger('rest', e),
                                    onStart: (e) => g.trigger('start', e),
                                    onPause: (e) => g.trigger('pause', e),
                                })),
                                v = f[0],
                                p = f[1],
                                w = (0, o.useCallback)(
                                    (e, t, n) => {
                                        var r;
                                        const a = v.scrollPosition.get(),
                                            o = (null != (r = v.scrollPosition.goal) ? r : 0) - a;
                                        return s(e, t * n + o + a);
                                    },
                                    [v.scrollPosition],
                                ),
                                E = (0, o.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const r = m.current;
                                        r &&
                                            p.start({
                                                scrollPosition: s(r, e),
                                                immediate: t,
                                                reset: n,
                                                config: d.animationConfig,
                                                from: { scrollPosition: s(r, v.scrollPosition.get()) },
                                            });
                                    },
                                    [p, d.animationConfig, v.scrollPosition],
                                ),
                                b = (0, o.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            n = _.current;
                                        if (!t || !n) return;
                                        const r = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return a(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, d.step),
                                            o = w(t, e, r);
                                        E(o);
                                    },
                                    [E, w, d.step],
                                ),
                                y = (0, o.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && b(r(e)),
                                            m.current && g.trigger('mouseWheel', e, v.scrollPosition, t(m.current)));
                                    },
                                    [v.scrollPosition, b, g],
                                ),
                                S = ((e, t = []) => {
                                    const n = (0, o.useRef)(),
                                        r = (0, o.useCallback)((...t) => {
                                            (n.current && n.current(), (n.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, o.useEffect)(
                                            () => () => {
                                                n.current && n.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        $(() => {
                                            const e = m.current;
                                            e &&
                                                (E(s(e, v.scrollPosition.goal), { immediate: !0 }),
                                                g.trigger('resizeHandled'));
                                        }),
                                    [E, v.scrollPosition.goal],
                                ),
                                x = We(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = s(e, v.scrollPosition.goal);
                                    (t !== v.scrollPosition.goal && E(t, { immediate: !0 }),
                                        g.trigger('recalculateContent'));
                                });
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('resize', S),
                                    () => {
                                        window.removeEventListener('resize', S);
                                    }
                                ),
                                [S],
                            );
                            return (0, o.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? a(_.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? t(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: y,
                                    applyScroll: E,
                                    applyStepTo: b,
                                    contentRef: m,
                                    wrapperRef: _,
                                    scrollPosition: p,
                                    animationScroll: v,
                                    recalculateContent: x,
                                    events: { on: g.on, off: g.off },
                                }),
                                [v.scrollPosition, E, b, g.off, g.on, x, y, p, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    je = Ge({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Ue.Next : Ue.Prev),
                    }),
                    $e = 'VerticalBar_base_f3',
                    Ke = 'VerticalBar_base__nonActive_42',
                    qe = 'VerticalBar_topButton_d7',
                    Ye = 'VerticalBar_bottomButton_06',
                    Xe = 'VerticalBar_track_df',
                    Qe = 'VerticalBar_thumb_32',
                    Ze = 'VerticalBar_rail_43',
                    Je = 'disable',
                    et = () => {},
                    tt = { pending: !1, offset: 0 },
                    nt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    rt = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    at = (e, t) => Math.max(20, e.offsetHeight * t),
                    ot = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = nt, onDrag: r = et }) => {
                        const a = (0, o.useRef)(null),
                            s = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            u = (0, o.useRef)(null),
                            d = (0, o.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, o.useState)(tt),
                            g = _[0],
                            h = _[1],
                            f = (0, o.useCallback)(
                                (e) => {
                                    (h(e),
                                        d.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [r],
                            ),
                            v = We(() => {
                                const t = d.current,
                                    n = u.current,
                                    r = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(r && o && t && n)) return;
                                const i = Math.min(1, r / o);
                                return (
                                    (t.style.height = `${at(n, i)}px`),
                                    (t.style.display = 'flex'),
                                    a.current &&
                                        (1 === i ? a.current.classList.add(Ke) : a.current.classList.remove(Ke)),
                                    i
                                );
                            }),
                            p = We(() => {
                                const t = u.current,
                                    n = d.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && t && n && a)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / a),
                                    l = de(0, 1, o / (a - r)),
                                    m = (t.offsetHeight - at(t, i)) * l;
                                ((n.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (s.current && c.current && u.current && d.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    s.current.classList.add(Je),
                                                    void c.current.classList.remove(Je)
                                                );
                                            if (
                                                ((t = u.current),
                                                (n = d.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(Je),
                                                    void c.current.classList.add(Je)
                                                );
                                            var t, n;
                                            (s.current.classList.remove(Je), c.current.classList.remove(Je));
                                        }
                                    })(m));
                            }),
                            w = We(() => {
                                rt(e, () => {
                                    (v(), p());
                                });
                            });
                        ((0, o.useEffect)(() => $(w)),
                            (0, o.useEffect)(() => {
                                const t = () => {
                                    rt(e, () => {
                                        p();
                                    });
                                };
                                let n = et;
                                const r = () => {
                                    (n(), (n = $(w)));
                                };
                                return (
                                    e.events.on('recalculateContent', w),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        (n(),
                                            e.events.off('recalculateContent', w),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', r));
                                    }
                                );
                            }, [e]),
                            (0, o.useEffect)(() => {
                                if (!g.pending) return;
                                const t = l.O.client.events.mouse.up(() => {
                                        f(tt);
                                    }),
                                    n = l.O.client.events.mouse.move(([t]) => {
                                        rt(e, (n) => {
                                            const a = u.current,
                                                o = d.current,
                                                i = e.getContainerSize();
                                            if (!a || !o || !i) return;
                                            const s = t.screenY - g.offset - a.getBoundingClientRect().y,
                                                l = (s / a.offsetHeight) * i;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: o, thumbOffset: s, contentOffset: l }));
                                        });
                                    });
                                return () => {
                                    (t(), n());
                                };
                            }, [e, g.offset, g.pending, r, f]));
                        const E = De((t) => e.applyStepTo(t), m, [e]),
                            b = E[0],
                            S = E[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', S, !0),
                                () => document.removeEventListener('mouseup', S, !0)
                            ),
                            [S],
                        );
                        const x = (e) => {
                            e.target.classList.contains(Je) || z('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: y()($e, t.base), ref: a, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: y()(qe, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Je) || 0 !== e.button || (z('play'), b(Ue.Next));
                                },
                                ref: s,
                                onMouseEnter: x,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: y()(Xe, t.track),
                                    onMouseDown: (t) => {
                                        const r = d.current;
                                        if (r && 0 === t.button)
                                            if ((z('play'), t.target === r))
                                                f({ pending: !0, offset: t.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        rt(e, (r) => {
                                                            if (!r) return;
                                                            const a = n(e),
                                                                o = e.clampPosition(r, r.scrollTop + a * t);
                                                            e.applyScroll(o);
                                                        });
                                                })(t.screenY > r.getBoundingClientRect().y ? Ue.Prev : Ue.Next);
                                            }
                                    },
                                    ref: u,
                                    onMouseEnter: x,
                                },
                                i().createElement('div', { ref: d, className: y()(Qe, t.thumb) }),
                                i().createElement('div', { className: y()(Ze, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: y()(Ye, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Je) || 0 !== e.button || (z('play'), b(Ue.Prev));
                                },
                                onMouseUp: S,
                                ref: c,
                                onMouseEnter: x,
                            }),
                        );
                    }),
                    it = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    st = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: r,
                        areaClassName: a,
                        scrollClassName: s,
                        scrollClassNames: l,
                        getStepByRailClick: c,
                        onDrag: u,
                    }) => {
                        const d = (0, o.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: y()(it.base, e.base) });
                            }, [r]),
                            m = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: y()(it.defaultScroll, n), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: y()(it.area, a) },
                                i().createElement(lt, { className: s, classNames: l, api: m }, e),
                            ),
                            i().createElement(ot, { getStepByRailClick: c, api: t, onDrag: u, classNames: d }),
                        );
                    },
                    lt = ({ className: e, classNames: t, children: n, api: r }) => (
                        (0, o.useEffect)(() => $(r.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: y()(it.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: y()(it.content, null == t ? void 0 : t.content), ref: r.contentRef },
                                n,
                            ),
                        )
                    );
                lt.Default = st;
                const ct = Ge({
                        getBounds: (e) => {
                            var t, n;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (n = e.parentElement) ? void 0 : n.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Ue.Next : Ue.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    ut = 'HorizontalBar_base_49',
                    dt = 'HorizontalBar_base__nonActive_82',
                    mt = 'HorizontalBar_leftButton_5f',
                    _t = 'HorizontalBar_rightButton_03',
                    gt = 'HorizontalBar_track_0d',
                    ht = 'HorizontalBar_thumb_fd',
                    ft = 'HorizontalBar_rail_32',
                    vt = 'disable',
                    pt = { pending: !1, offset: 0 },
                    wt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Et = () => {},
                    bt = (e, t) => Math.max(20, e.offsetWidth * t),
                    yt = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = wt, onDrag: r = Et }) => {
                        const a = (0, o.useRef)(null),
                            s = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            u = (0, o.useRef)(null),
                            d = (0, o.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, o.useState)(pt),
                            g = _[0],
                            h = _[1],
                            f = (0, o.useCallback)(
                                (e) => {
                                    (h(e),
                                        d.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [r],
                            ),
                            v = () => {
                                const t = u.current,
                                    n = d.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && t && n && a)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / a),
                                    l = de(0, 1, o / (a - r)),
                                    m = (t.offsetWidth - bt(t, i)) * l;
                                ((n.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (s.current && c.current && u.current && d.current) {
                                            if (0 === e)
                                                return (
                                                    s.current.classList.add(vt),
                                                    void c.current.classList.remove(vt)
                                                );
                                            if (
                                                ((t = u.current),
                                                (n = d.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    s.current.classList.remove(vt),
                                                    void c.current.classList.add(vt)
                                                );
                                            var t, n;
                                            (s.current.classList.remove(vt), c.current.classList.remove(vt));
                                        }
                                    })(m));
                            },
                            p = We(() => {
                                ((() => {
                                    const t = d.current,
                                        n = u.current,
                                        r = e.getWrapperSize(),
                                        o = e.getContainerSize();
                                    if (!(o && t && r && n)) return;
                                    const i = Math.min(1, r / o);
                                    ((t.style.width = `${bt(n, i)}px`),
                                        (t.style.display = 'flex'),
                                        a.current &&
                                            (1 === i ? a.current.classList.add(dt) : a.current.classList.remove(dt)));
                                })(),
                                    v());
                            });
                        ((0, o.useEffect)(() => $(p)),
                            (0, o.useEffect)(
                                () =>
                                    $(() => {
                                        const t = () => {
                                            v();
                                        };
                                        let n = Et;
                                        const r = () => {
                                            (n(), (n = $(p)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', p),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                (n(),
                                                    e.events.off('recalculateContent', p),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, o.useEffect)(() => {
                                if (!g.pending) return;
                                const t = l.O.client.events.mouse.move(([t, n]) => {
                                        var a;
                                        const o = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!o || !i) return;
                                        const s = u.current,
                                            l = d.current;
                                        if (!s || !l) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const c = t.clientX - g.offset - s.getBoundingClientRect().x,
                                            m = (c / s.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(o, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: l, thumbOffset: c, contentOffset: m }));
                                    }),
                                    n = l.O.client.events.mouse.up(() => {
                                        (t(), f(pt));
                                    });
                                return () => {
                                    (t(), n());
                                };
                            }, [e, g.offset, g.pending, r, f]));
                        const w = De((t) => e.applyStepTo(t), m, [e]),
                            E = w[0],
                            b = w[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', b, !0),
                                () => document.removeEventListener('mouseup', b, !0)
                            ),
                            [b],
                        );
                        const S = (e) => {
                            e.target.classList.contains(vt) || z('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: y()(ut, t.base), ref: a, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: y()(mt, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(vt) || 0 !== e.button || (z('play'), E(Ue.Next));
                                },
                                onMouseUp: b,
                                ref: s,
                                onMouseEnter: S,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: y()(gt, t.track),
                                    onMouseDown: (t) => {
                                        const r = d.current;
                                        if (r && 0 === t.button)
                                            if ((z('play'), t.target === r))
                                                f({ pending: !0, offset: t.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const r = d.current,
                                                        a = e.contentRef.current;
                                                    if (!r || !a) return;
                                                    const o = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + o * t);
                                                })(t.screenX > r.getBoundingClientRect().x ? Ue.Prev : Ue.Next);
                                            }
                                    },
                                    ref: u,
                                    onMouseEnter: S,
                                },
                                i().createElement('div', { ref: d, className: y()(ht, t.thumb) }),
                                i().createElement('div', { className: y()(ft, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: y()(_t, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(vt) || 0 !== e.button || (z('play'), E(Ue.Prev));
                                },
                                onMouseUp: b,
                                ref: c,
                                onMouseEnter: S,
                            }),
                        );
                    }),
                    St = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    xt = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: r,
                        areaClassName: a,
                        classNames: s,
                        scrollClassName: l,
                        getStepByRailClick: c,
                        onDrag: u,
                    }) => {
                        const d = (0, o.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: y()(St.base, e.base) });
                            }, [r]),
                            m = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: y()(St.defaultScroll, n), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: y()(St.defaultScrollArea, a) },
                                i().createElement(Lt, { className: l, api: m, classNames: s }, e),
                            ),
                            i().createElement(yt, { getStepByRailClick: c, api: t, onDrag: u, classNames: d }),
                        );
                    },
                    Lt = ({ api: e, className: t, classNames: n, children: r }) => (
                        (0, o.useEffect)(() => $(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: y()(St.base, t) },
                            i().createElement(
                                'div',
                                {
                                    className: y()(St.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: y()(St.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                ((Lt.Bar = yt), (Lt.Default = xt));
                const Ot = { Vertical: r, Horizontal: a },
                    Mt = ['barClassNames'],
                    Tt = ['barClassNames'];
                function Ct() {
                    return (
                        (Ct = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        Ct.apply(null, arguments)
                    );
                }
                function kt(e, t) {
                    if (null == e) return {};
                    var n = {};
                    for (var r in e)
                        if ({}.hasOwnProperty.call(e, r)) {
                            if (t.indexOf(r) >= 0) continue;
                            n[r] = e[r];
                        }
                    return n;
                }
                const Pt = {
                    topButton: 'NYScroll_topButton_10',
                    rail: 'NYScroll_rail_2d',
                    thumb: 'NYScroll_thumb_dc',
                    bottomButton: 'NYScroll_bottomButton_e7',
                };
                const Rt = Pt;
                const Nt = {
                        Vertical: function (e) {
                            let t = e.barClassNames,
                                n = void 0 === t ? {} : t,
                                r = kt(e, Mt);
                            return i().createElement(
                                Ot.Vertical.Default,
                                Ct({}, r, { barClassNames: Object.assign({}, Pt, n) }),
                            );
                        },
                        Horizontal: function (e) {
                            let t = e.barClassNames,
                                n = void 0 === t ? {} : t,
                                r = kt(e, Tt);
                            return i().createElement(
                                Ot.Horizontal.DefaultScroll,
                                Ct({}, r, { barClassNames: Object.assign({}, Rt, n) }),
                            );
                        },
                        useVerticalApi: je,
                        useHorizontalApi: ct,
                    },
                    Ht = 'Story_base_9c',
                    At = 'Story_title_da',
                    It = 'Story_box_98',
                    Wt = 'Story_text_92',
                    Dt = 'Story_scrollBar_3f',
                    Bt = 'Story_scrollRail_87',
                    zt = 'Story_scrollButton_f9',
                    Ft = R.strings.ny.newYear.challenge.stories,
                    Ut = ({ storyId: e, className: t }) => {
                        const n = Nt.useVerticalApi(),
                            r = Ft.$dyn(e) || '';
                        return i().createElement(
                            'div',
                            { className: y()(Ht, t) },
                            i().createElement('div', { className: At }, R.strings.ny.guestQuest.rewardItem.$dyn(e)),
                            i().createElement(
                                'div',
                                { className: It },
                                i().createElement(lt, { api: n }, i().createElement('div', { className: Wt }, r)),
                            ),
                            i().createElement(ot, {
                                api: n,
                                classNames: { base: Dt, rail: Bt, topButton: zt, bottomButton: zt },
                            }),
                        );
                    },
                    Vt = 'Book_base_b7',
                    Gt = 'Book_contentArea_0e',
                    jt = 'Book_holder_12',
                    $t = 'Book_picture_50',
                    Kt = 'Book_story_df',
                    qt = (0, J.Pi)(({ className: e }) => {
                        const t = Ne(),
                            n = t.model,
                            r = t.controls,
                            a = n.computes.getStoryByIndex,
                            s = n.currentStoryIndex.get(),
                            l = n.nextStoryIndex.get(),
                            c = a(s),
                            u = (0, Ae.useSpring)(() => ({
                                config: { duration: 500, easing: He.easeInOutCirc },
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                            })),
                            d = u[0],
                            m = u[1];
                        return (
                            (0, o.useEffect)(
                                () =>
                                    l === s
                                        ? void 0
                                        : (m.start({ from: { opacity: 1 }, to: { opacity: 0 } }),
                                          ((e, t) => {
                                              let n;
                                              const r = setTimeout(() => {
                                                  n = e();
                                              }, t);
                                              return () => {
                                                  ('function' == typeof n && n(), clearTimeout(r));
                                              };
                                          })(() => {
                                              (m.start({ from: { opacity: 0 }, to: { opacity: 1 } }),
                                                  r.setCurrentStoryIndex(l));
                                          }, 500)),
                                [m, r, s, l],
                            ),
                            i().createElement(
                                'div',
                                { className: y()(Vt, e) },
                                i().createElement(
                                    Ae.animated.div,
                                    { className: Gt, style: d },
                                    i().createElement(
                                        'div',
                                        { className: jt },
                                        i().createElement('div', {
                                            className: $t,
                                            style: {
                                                backgroundImage: `url('R.images.gui.maps.icons.newYear.celebrity_challenge.rewardItem.${c}')`,
                                            },
                                        }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: jt },
                                        i().createElement(Ut, { storyId: c, className: Kt }),
                                    ),
                                ),
                            )
                        );
                    }),
                    Yt = {
                        base: 'App_base_c5',
                        fadeIn: 'App_fadeIn_98',
                        close: 'App_close_81',
                        snowFall: 'App_snowFall_f8',
                        content: 'App_content_1b',
                        arrowBox: 'App_arrowBox_7b',
                        arrowBox__prev: 'App_arrowBox__prev_34',
                        arrowBox__next: 'App_arrowBox__next_b1',
                        arrow: 'App_arrow_c6',
                        arrow__prev: 'App_arrow__prev_0e',
                        arrow__disabled: 'App_arrow__disabled_07',
                        book: 'App_book_db',
                        slideUp: 'App_slideUp_ae',
                        paginationBox: 'App_paginationBox_ad',
                        pagination: 'App_pagination_ea',
                    },
                    Xt = (0, J.Pi)(() => {
                        const e = Ne(),
                            t = e.model,
                            n = e.controls,
                            r = t.root.get().amountOfCompletedStories,
                            a = t.computes,
                            o = a.getStoriesLength,
                            s = a.getStoriesPaginationData,
                            c = t.currentStoryIndex.get();
                        Q();
                        const u = 0 === c,
                            d = c + 1 === r,
                            m = () => {
                                d || (z('hangar_newyear_hud_upper_click'), n.setNextStoryIndex(c + 1));
                            },
                            _ = () => {
                                u || (z('hangar_newyear_hud_upper_click'), n.setNextStoryIndex(c - 1));
                            };
                        return (
                            X(K.n.ARROW_RIGHT, m),
                            X(K.n.ARROW_LEFT, _),
                            Z(() => $(() => z(R.sounds.hangar_newyear_book_appear()))),
                            i().createElement(
                                'div',
                                { className: Yt.base },
                                i().createElement(Se, { className: Yt.snowFall }),
                                i().createElement(
                                    'div',
                                    { className: Yt.close },
                                    i().createElement(j, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: () => l.O.view.sendEvent.close(),
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Yt.content },
                                    i().createElement(qt, { className: Yt.book }),
                                    i().createElement(
                                        'div',
                                        { className: y()(Yt.arrowBox, Yt.arrowBox__prev) },
                                        i().createElement('div', {
                                            className: y()(Yt.arrow, u && Yt.arrow__disabled, Yt.arrow__prev),
                                            onClick: _,
                                        }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: y()(Yt.arrowBox, Yt.arrowBox__next) },
                                        i().createElement('div', {
                                            className: y()(Yt.arrow, d && Yt.arrow__disabled, Yt.arrow__next),
                                            onClick: m,
                                        }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: Yt.paginationBox },
                                        o() > 1 &&
                                            i().createElement(ue, {
                                                selectedIndex: c,
                                                data: s(),
                                                onChange: n.setNextStoryIndex,
                                                className: Yt.pagination,
                                            }),
                                    ),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    B().render(
                        i().createElement(Re, null, i().createElement(W, null, i().createElement(Xt, null))),
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
        (__webpack_require__.O = (e, t, n, r) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, r] = deferred[l], o = !0, i = 0; i < t.length; i++)
                        (!1 & r || a >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((o = !1), r < a && (a = r));
                    if (o) {
                        deferred.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, r];
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
        (__webpack_require__.j = 5486),
        (() => {
            var e = { 5486: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        a,
                        [o, i, s] = n,
                        l = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < o.length; l++)
                        ((a = o[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [8360], () => __webpack_require__(2283));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
