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
                    t.d(u, { mouse: () => c, off: () => o, on: () => s, onResize: () => a, onScaleUpdated: () => i }));
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
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
                                        i = l[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        n(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(a, s),
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
                        getMouseGlobalPosition: () => i,
                        getSize: () => a,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var n = t(527),
                    r = t(2493);
                function a(e = 'px') {
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
                t.d(u, { ZP: () => s, hY: () => i });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, n.playSound)(r[u])), e), {}),
                    i = Object.assign({}, a, { sound: n.playSound }),
                    s = { play: i, setRTPC: n.setRTPC };
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
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => y,
                        events: () => a.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => p,
                        getFontNames: () => w,
                        getScale: () => g,
                        getSize: () => m,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => f,
                        isFocused: () => v,
                        pxToRem: () => h,
                        remToPx: () => D,
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => x,
                    }));
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    i = t(8566);
                const s = 15;
                function o(e) {
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
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function D(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function v() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function p() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    y = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    S = {
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
                t.d(u, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    i = 32,
                    s = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                i = (function (e, u) {
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
                                      Object.assign({ __Type: t, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? r : i);
                        },
                        minimize() {
                            o(s);
                        },
                        move(e) {
                            o(a, { isMouseEvent: !0, on: e });
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
                t.d(u, { c1: () => C, Sw: () => a.Z, B0: () => s, ry: () => g });
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
                var a = t(1358);
                var i = t(8613);
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
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    m = t(3138);
                const _ = ['args'];
                function A(e, u, t, n, r, a, i) {
                    try {
                        var s = e[a](i),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(n, r);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                        function i(e) {
                                            A(a, n, r, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            A(a, n, r, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    h = (e, u) => {
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
                                })(u, _);
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
                    D = () => h(s.CLOSE),
                    B = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var v = t(7572);
                const C = r.instance,
                    f = {
                        DataTracker: a.Z,
                        ViewModel: v.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => h(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                E = o.height,
                                _ = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(c) + i.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(E),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: F(_),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => B(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, D);
                        },
                        handleViewEvent: h,
                        onBindingsReady: g,
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
                        ClickOutsideManager: C,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = f;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => a, Z5: () => n, cy: () => r });
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
                    },
                    a = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            7939: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    r = t.n(n);
                const a = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var i = t(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
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
                })(o || (o = {}));
                const c = i.O.client.getSize('rem'),
                    d = c.width,
                    E = c.height,
                    m = Object.assign({ width: d, height: E }, l(d, E, s)),
                    _ = (0, n.createContext)(m),
                    A = ['children'];
                const F = (e) => {
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
                    const r = (0, n.useContext)(_),
                        i = r.extraLarge,
                        s = r.large,
                        o = r.medium,
                        l = r.small,
                        c = r.extraSmall,
                        d = r.extraLargeWidth,
                        E = r.largeWidth,
                        m = r.mediumWidth,
                        F = r.smallWidth,
                        g = r.extraSmallWidth,
                        h = r.extraLargeHeight,
                        D = r.largeHeight,
                        B = r.mediumHeight,
                        v = r.smallHeight,
                        C = r.extraSmallHeight,
                        f = { extraLarge: h, large: D, medium: B, small: v, extraSmall: C };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return u;
                        if (t.large && s) return u;
                        if (t.medium && o) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return a(u, t, f);
                        if (t.largeWidth && E) return a(u, t, f);
                        if (t.mediumWidth && m) return a(u, t, f);
                        if (t.smallWidth && F) return a(u, t, f);
                        if (t.extraSmallWidth && g) return a(u, t, f);
                        if (!(
                            t.extraLargeWidth ||
                            t.largeWidth ||
                            t.mediumWidth ||
                            t.smallWidth ||
                            t.extraSmallWidth
                        )) {
                            if (t.extraLargeHeight && h) return u;
                            if (t.largeHeight && D) return u;
                            if (t.mediumHeight && B) return u;
                            if (t.smallHeight && v) return u;
                            if (t.extraSmallHeight && C) return u;
                        }
                    }
                    return null;
                };
                F.defaultProps = {
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
                (0, n.memo)(F);
                const g = (e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    h = ({ children: e }) => {
                        const u = (0, n.useContext)(_),
                            t = (0, n.useState)(u),
                            a = t[0],
                            o = t[1],
                            c = (0, n.useCallback)((e, u) => {
                                const t = i.O.view.pxToRem(e),
                                    n = i.O.view.pxToRem(u);
                                o(Object.assign({ width: t, height: n }, l(t, n, s)));
                            }, []),
                            d = (0, n.useCallback)(() => {
                                const e = i.O.client.getSize('px');
                                c(e.width, e.height);
                            }, [c]);
                        (g(() => {
                            (i.O.client.events.on('clientResized', c), i.O.client.events.on('self.onScaleUpdated', d));
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    (i.O.client.events.off('clientResized', c),
                                        i.O.client.events.off('self.onScaleUpdated', d));
                                },
                                [c, d],
                            ));
                        const E = (0, n.useMemo)(() => Object.assign({}, a), [a]);
                        return r().createElement(_.Provider, { value: E }, e);
                    };
                var D = t(6483),
                    B = t.n(D),
                    v = t(926),
                    C = t.n(v);
                let f, b, p;
                (!(function (e) {
                    ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                })(f || (f = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                    })(b || (b = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge'));
                    })(p || (p = {})));
                const w = () => {
                        const e = (0, n.useContext)(_),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
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
                                        return (console.error('Unreachable media context resolution'), f.ExtraSmall);
                                }
                            })(e),
                            a = ((e) => {
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
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return p.ExtraLarge;
                                    case e.largeHeight:
                                        return p.Large;
                                    case e.mediumHeight:
                                        return p.Medium;
                                    case e.smallHeight:
                                        return p.Small;
                                    case e.extraSmallHeight:
                                        return p.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), p.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: a, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
                function S() {
                    return (
                        (S = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        S.apply(null, arguments)
                    );
                }
                const x = {
                        [b.ExtraSmall]: '',
                        [b.Small]: C().SMALL_WIDTH,
                        [b.Medium]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH}`,
                        [b.Large]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH} ${C().EXTRA_LARGE_WIDTH}`,
                    },
                    L = {
                        [p.ExtraSmall]: '',
                        [p.Small]: C().SMALL_HEIGHT,
                        [p.Medium]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT}`,
                        [p.Large]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT}`,
                        [p.ExtraLarge]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT} ${C().EXTRA_LARGE_HEIGHT}`,
                    },
                    O = {
                        [f.ExtraSmall]: '',
                        [f.Small]: C().SMALL,
                        [f.Medium]: `${C().SMALL} ${C().MEDIUM}`,
                        [f.Large]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE}`,
                        [f.ExtraLarge]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE} ${C().EXTRA_LARGE}`,
                    },
                    P = (e) => {
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
                            })(e, y);
                        const a = w(),
                            i = a.mediaWidth,
                            s = a.mediaHeight,
                            o = a.mediaSize;
                        return r().createElement('div', S({ className: B()(t, x[i], L[s], O[o]) }, n), u);
                    },
                    N = ['children'];
                const T = (e) => {
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
                        })(e, N);
                    return r().createElement(h, null, r().createElement(P, t, u));
                };
                var I = t(493),
                    M = t.n(I);
                var k = t(9916);
                const H = [
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
                function W(e) {
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
                const G = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: k.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    U = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            a = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            g = e.targetId,
                            h = void 0 === g ? 0 : g,
                            D = e.onShow,
                            B = e.onHide,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, H);
                        const C = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, n.useMemo)(
                                () =>
                                    h ||
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
                                [h],
                            ),
                            b = (0, n.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (G(t, _, { isMouseEvent: !0, on: !0, arguments: W(r) }, f),
                                    D && D(),
                                    (C.current.isVisible = !0));
                            }, [t, _, r, f, D]),
                            p = (0, n.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        G(t, _, { on: !1 }, f),
                                        C.current.isVisible && B && B(),
                                        (C.current.isVisible = !1));
                                }
                            }, [t, _, f, B]),
                            w = (0, n.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(C.current.prevTarget) && p();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = C.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && p();
                            }, [F, p]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', p),
                                    () => {
                                        (window.removeEventListener('mouseleave', p), p());
                                    }
                                ),
                                [p],
                            ));
                        return F
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((C.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                      a && a(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (p(), null == i || i(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === E && p(), null == o || o(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === E && p(), null == s || s(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      v,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    V = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function $() {
                    return (
                        ($ = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        $.apply(null, arguments)
                    );
                }
                const j = R.views.common.tooltip_window.simple_tooltip_content,
                    z = (e) => {
                        let u = e.children,
                            t = e.body,
                            a = e.header,
                            i = e.note,
                            s = e.alert,
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
                            })(e, V);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: a, note: i, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, a, i, o]);
                        return r().createElement(
                            U,
                            $(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? j.SimpleTooltipHtmlContent('resId') : j.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    };
                function q(e, u, t, n) {
                    let r,
                        a = !1,
                        i = 0;
                    function s() {
                        r && clearTimeout(r);
                    }
                    function o(...o) {
                        const l = this,
                            c = Date.now() - i;
                        function d() {
                            ((i = Date.now()), t.apply(l, o));
                        }
                        a ||
                            (n && !r && d(),
                            s(),
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
                        (o.cancel = function () {
                            (s(), (a = !0));
                        }),
                        o
                    );
                }
                function Y(e, u, t, r = !1) {
                    const a = (0, n.useMemo)(
                        () =>
                            (function (e, u, t) {
                                return void 0 === t ? q(e, u, !1) : q(e, t, !1 !== u);
                            })(t, r, e),
                        u,
                    );
                    return ((0, n.useEffect)(() => a.cancel, [a]), a);
                }
                function K(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const X = {
                    playHighlight() {
                        K('highlight');
                    },
                    playClick() {
                        K('play');
                    },
                    playYes() {
                        K('yes1');
                    },
                };
                var Q = t(3403);
                let Z;
                !(function (e) {
                    ((e[(e.Ultra = 0)] = 'Ultra'),
                        (e[(e.Max = 1)] = 'Max'),
                        (e[(e.Height = 2)] = 'Height'),
                        (e[(e.Medium = 3)] = 'Medium'),
                        (e[(e.Low = 4)] = 'Low'),
                        (e[(e.Min = 5)] = 'Min'),
                        (e[(e.PerfLevelCount = 6)] = 'PerfLevelCount'));
                })(Z || (Z = {}));
                const J = Z.Ultra,
                    ee = () => J >= Z.Low,
                    ue = '#fff',
                    te = '#8ab9ff',
                    ne = {
                        base: 'HangarName_base_bd',
                        base__large: 'HangarName_base__large_a1',
                        description: 'HangarName_description_83',
                        base__dynamic: 'HangarName_base__dynamic_6f',
                        base__small: 'HangarName_base__small_b6',
                        base__middle: 'HangarName_base__middle_4f',
                        base__additionalEffects: 'HangarName_base__additionalEffects_3a',
                        titleBox: 'HangarName_titleBox_d7',
                        title: 'HangarName_title_70',
                        gradient: 'HangarName_gradient_9e',
                        gradient__title: 'HangarName_gradient__title_cb',
                        gradient__description: 'HangarName_gradient__description_de',
                        line: 'HangarName_line_9d',
                        svg: 'HangarName_svg_8f',
                        slideInFadeIn: 'HangarName_slideInFadeIn_51',
                        fadeOut: 'HangarName_fadeOut_12',
                        fadeIn: 'HangarName_fadeIn_d3',
                        fadeInWithScale: 'HangarName_fadeInWithScale_8e',
                        slideUp: 'HangarName_slideUp_cb',
                        scale: 'HangarName_scale_d2',
                        spin: 'HangarName_spin_c6',
                        blink: 'HangarName_blink_a8',
                        slideInNotification: 'HangarName_slideInNotification_a8',
                    };
                let re, ae;
                (!(function (e) {
                    ((e.Small = 'small'),
                        (e.Middle = 'middle'),
                        (e.Large = 'large'),
                        (e.Dynamic = 'dynamic'),
                        (e.Custom = 'custom'),
                        (e.Default = 'small'));
                })(re || (re = {})),
                    (function (e) {
                        ((e.Simple = 'simple'), (e.Gradient = 'gradient'), (e.Default = 'simple'));
                    })(ae || (ae = {})));
                const ie = r().forwardRef(
                    (
                        {
                            title: e,
                            description: u,
                            size: t = re.Default,
                            type: n = ae.Default,
                            hasLine: a = !0,
                            classNames: i,
                        },
                        s,
                    ) => {
                        const o = n === ae.Gradient,
                            l = !ee(),
                            c = o ? te : ue;
                        return r().createElement(
                            'div',
                            {
                                ref: s,
                                className: B()(
                                    ne.base,
                                    ne[`base__${n}`],
                                    ne[`base__${t}`],
                                    l && ne.base__additionalEffects,
                                    null == i ? void 0 : i.base,
                                ),
                            },
                            r().createElement(
                                'div',
                                { className: B()(ne.description, null == i ? void 0 : i.description) },
                                u,
                                l &&
                                    o &&
                                    r().createElement(
                                        'div',
                                        { className: B()(ne.gradient, ne.gradient__description) },
                                        u,
                                    ),
                            ),
                            r().createElement(
                                'div',
                                { className: B()(ne.titleBox, null == i ? void 0 : i.titleBox) },
                                r().createElement(
                                    'div',
                                    { className: B()(ne.title, null == i ? void 0 : i.title) },
                                    e,
                                    l &&
                                        o &&
                                        r().createElement(
                                            'div',
                                            { className: B()(ne.gradient, ne.gradient__title) },
                                            e,
                                        ),
                                ),
                                a &&
                                    r().createElement(
                                        'div',
                                        { className: B()(ne.line, null == i ? void 0 : i.line) },
                                        r().createElement(
                                            'svg',
                                            {
                                                className: ne.svg,
                                                viewBox: '0 0 302 7',
                                                fill: 'none',
                                                preserveAspectRatio: 'none meet',
                                            },
                                            r().createElement('path', {
                                                d: 'M301.384 1.01395C301.349 1.49453 300.953 1.86827 300.471 1.87651L2.76092 6.96329C1.55303 6.98393 0.556593 6.0184 0.539109 4.81042C0.521633 3.60338 1.48832 2.61399 2.69543 2.60348L300.443 0.00972535C300.99 0.00496359 301.425 0.468857 301.384 1.01395Z',
                                                fill: c,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    },
                );
                let se, oe;
                ((ie.Size = re),
                    (function (e) {
                        ((e.Offline = 'Offline'), (e.Online = 'Online'));
                    })(se || (se = {})),
                    (function (e) {
                        ((e[(e.Default = 0)] = 'Default'), (e[(e.Best = 1)] = 'Best'));
                    })(oe || (oe = {})));
                const le = ['children'];
                function ce() {
                    return (
                        (ce = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        ce.apply(null, arguments)
                    );
                }
                const de = (e) => {
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
                        })(e, le);
                    return r().createElement(
                        U,
                        ce(
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
                function Ee() {
                    return (
                        (Ee = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ee.apply(null, arguments)
                    );
                }
                const me = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = r().createElement('div', { className: t }, e);
                        if (u.header || u.body) return r().createElement(z, u, n);
                        const a = u.contentId;
                        return a ? r().createElement(U, Ee({}, u, { contentId: a }), n) : r().createElement(de, u, n);
                    },
                    _e = (e) => {
                        const u = R.strings.ny_hangar_name.title.$num(e);
                        return u || '';
                    },
                    Ae = (e) => {
                        const u = R.strings.ny_hangar_name.description.$num(e);
                        return u || '';
                    },
                    Fe = {
                        base: 'OnlineStatus_base_ce',
                        base__online: 'OnlineStatus_base__online_1f',
                        base__offline: 'OnlineStatus_base__offline_66',
                        base__busy: 'OnlineStatus_base__busy_27',
                    };
                let ge;
                !(function (e) {
                    ((e.Online = 'online'), (e.Offline = 'offline'), (e.Busy = 'busy'));
                })(ge || (ge = {}));
                const he = ({ status: e }) => r().createElement('div', { className: B()(Fe.base, Fe[`base__${e}`]) });
                he.Status = ge;
                const De = (e) => {
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
                    Be = 'TextOverflow_base_3b',
                    ve = ['content', 'classMix', 'className'];
                function Ce() {
                    return (
                        (Ce = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ce.apply(null, arguments)
                    );
                }
                const fe = (e) => {
                        let u = e.content,
                            t = e.classMix,
                            a = e.className,
                            i = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, ve);
                        const s = (0, n.useRef)(null),
                            o = (0, n.useState)(!0),
                            l = o[0],
                            c = o[1];
                        return (
                            (0, n.useEffect)(() =>
                                De(() => {
                                    const e = s.current;
                                    e && e.offsetWidth >= e.scrollWidth && c(!1);
                                }),
                            ),
                            r().createElement(
                                z,
                                { isEnabled: l, body: u },
                                r().createElement('div', Ce({}, i, { ref: s, className: B()(Be, a, t) }), u),
                            )
                        );
                    },
                    be = ['args', 'children', 'ignoreShowDelay', 'isEnabled'];
                function pe() {
                    return (
                        (pe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        pe.apply(null, arguments)
                    );
                }
                const we = (e) => {
                        var u;
                        let t = e.args,
                            n = e.children,
                            a = e.ignoreShowDelay,
                            i = void 0 === a || a,
                            s = e.isEnabled,
                            o = void 0 === s || s,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, be);
                        return o && t
                            ? r().createElement(
                                  U,
                                  pe({}, l, {
                                      ignoreShowDelay: i,
                                      contentId: R.views.lobby.new_year.tooltips.NyFriendsTooltips('resId'),
                                      args: { type: t.type, payload: JSON.stringify(null != (u = t.payload) ? u : {}) },
                                  }),
                                  n,
                              )
                            : n;
                    },
                    ye = {
                        base: 'PlayerWithStatus_base_a9',
                        base__absoluteStatus: 'PlayerWithStatus_base__absoluteStatus_8b',
                        status: 'PlayerWithStatus_status_25',
                        name: 'PlayerWithStatus_name_8a',
                        base__simple: 'PlayerWithStatus_base__simple_ad',
                        base__primary: 'PlayerWithStatus_base__primary_34',
                        slideInFadeIn: 'PlayerWithStatus_slideInFadeIn_81',
                        fadeOut: 'PlayerWithStatus_fadeOut_da',
                        fadeIn: 'PlayerWithStatus_fadeIn_db',
                        fadeInWithScale: 'PlayerWithStatus_fadeInWithScale_bb',
                        slideUp: 'PlayerWithStatus_slideUp_ac',
                        scale: 'PlayerWithStatus_scale_9e',
                        spin: 'PlayerWithStatus_spin_3c',
                        blink: 'PlayerWithStatus_blink_d3',
                        slideInNotification: 'PlayerWithStatus_slideInNotification_ad',
                    };
                let Se;
                !(function (e) {
                    ((e.Primary = 'primary'), (e.Simple = 'simple'), (e.Default = 'primary'));
                })(Se || (Se = {}));
                const xe = ({
                    status: e,
                    className: u,
                    classNames: t,
                    name: n,
                    tooltipArgs: a,
                    theme: i = Se.Default,
                    isIconAbsolute: s = !1,
                }) =>
                    r().createElement(
                        we,
                        { args: a },
                        r().createElement(
                            'div',
                            { className: B()(ye.base, ye[`base__${i}`], u, s && ye.base__absoluteStatus) },
                            r().createElement(
                                'div',
                                { className: B()(ye.status, null == t ? void 0 : t.status) },
                                r().createElement(he, { status: e }),
                            ),
                            r().createElement(
                                'div',
                                { className: B()(ye.name, null == t ? void 0 : t.name) },
                                r().createElement(fe, { content: n }),
                            ),
                        ),
                    );
                ((xe.Status = he.Status), (xe.Theme = Se));
                const Le = 33,
                    Oe = 0,
                    Pe = !0,
                    Ne = 'play';
                const Te = [
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
                function Ie() {
                    return (
                        (Ie = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ie.apply(null, arguments)
                    );
                }
                const Me = (0, n.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            a = e.getImageSource,
                            i = e.frameCount,
                            s = e.onAnimate,
                            o = e.frameTime,
                            l = void 0 === o ? Le : o,
                            c = e.initialFrameIndex,
                            d = void 0 === c ? Oe : c,
                            E = e.lastFrameIndex,
                            m = void 0 === E ? i - 1 : E,
                            _ = e.loop,
                            A = void 0 === _ ? Pe : _,
                            F = e.state,
                            g = void 0 === F ? Ne : F,
                            h = e.onAnimationDone,
                            D = e.onAnimationComplete,
                            B = e.poster,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Te);
                        const C = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = C.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        (u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y));
                                    };
                                switch (g) {
                                    case 'play':
                                        return (function () {
                                            const e = He(d, m, a),
                                                u = Re(d, m),
                                                n = window.setInterval(() => {
                                                    const r = u(),
                                                        a = e.get(r);
                                                    a
                                                        ? (null == s || s(r, a),
                                                          t(a),
                                                          r === m &&
                                                              (null == D || D(),
                                                              A || (null == h || h(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === d && B ? { path: B, x: 0, y: 0 } : a(d),
                                                u = new Image();
                                            u.src = e.path;
                                            const n = () => t(ke(e, u));
                                            return (
                                                u.addEventListener('load', n),
                                                () => u.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, a, d, m, A, s, D, h, B, g]),
                            r().createElement('canvas', Ie({}, v, { width: u, height: t, ref: C }))
                        );
                    }),
                    Re = (e, u) => {
                        let t = e;
                        return () => {
                            const n = t;
                            return ((t += 1), t > u && (t = e), n);
                        };
                    },
                    ke = (e, u) => Object.assign({}, e, { img: u }),
                    He = (e, u, t) => {
                        const n = new Map(),
                            r = {};
                        for (let a = e; a <= u; a++) {
                            const e = t(a),
                                u = r[e.path];
                            if (u) n.set(a, ke(e, u));
                            else {
                                const u = new Image();
                                ((r[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${a})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(a, ke(e, u)));
                            }
                        }
                        return n;
                    },
                    We = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(n));
                        };
                    };
                t(1281);
                let Ge;
                function Ue(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(Ge || (Ge = {}));
                (() => {
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
                })();
                var Ve = t(8613);
                (Date.now(), Ve.Ew.getRegionalDateTime, Ve.Ew.getFormattedDateTime);
                const $e = (e, u) => {
                    const t = (0, n.useRef)();
                    return (
                        (0, n.useEffect)(() => {
                            (u && !u(e)) || (t.current = e);
                        }, [u, e]),
                        t.current
                    );
                };
                k.Sw.instance;
                let je;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(je || (je = {}));
                k.Sw.instance;
                const ze = $e,
                    qe = () => {
                        const e = (0, n.useState)(i.O.view.getScale()),
                            u = e[0],
                            t = e[1];
                        return (
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    t(i.O.view.getScale());
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
                    };
                var Ye = t(7030);
                const Ke = {
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
                    easeOutBack(e) {
                        const u = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + u * Math.pow(e - 1, 2);
                    },
                    bezier: (e, u, t, n) => (r) =>
                        (1 - r) * (1 - r) * (1 - r) * e +
                        3 * (1 - r) * (1 - r) * r * u +
                        3 * (1 - r) * r * r * t +
                        r * r * r * n,
                };
                let Xe, Qe;
                (!(function (e) {
                    ((e.ExtraSmall = 'extraSmall'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.ExtraLarge = 'extraLarge'));
                })(Xe || (Xe = {})),
                    (function (e) {
                        ((e.Ru = 'RU'),
                            (e.Eu = 'EU'),
                            (e.Na = 'NA'),
                            (e.Asia = 'ASIA'),
                            (e.Cn = 'CN'),
                            (e.Kr = 'KR'),
                            (e.Ct = 'CT'),
                            (e.St = 'ST'),
                            (e.QA = 'QA'),
                            (e.Dev = 'DEV'),
                            (e.Sb = 'SB'));
                    })(Qe || (Qe = {})));
                const Ze = () => {},
                    Je = {
                        base: 'CircleProgressBar_base_3d',
                        light: 'CircleProgressBar_light_6f',
                        base__additionalEffects: 'CircleProgressBar_base__additionalEffects_ec',
                        light__hidden: 'CircleProgressBar_light__hidden_c9',
                        circleSizeCentered: 'CircleProgressBar_circleSizeCentered_3b',
                        lightTip: 'CircleProgressBar_lightTip_16',
                        lightGlow: 'CircleProgressBar_lightGlow_89',
                        lightGlow__start: 'CircleProgressBar_lightGlow__start_50',
                        lightGlow__hidden: 'CircleProgressBar_lightGlow__hidden_8a',
                        bgLight: 'CircleProgressBar_bgLight_ae',
                        progressLightContainer: 'CircleProgressBar_progressLightContainer_2c',
                        progressLight: 'CircleProgressBar_progressLight_5d',
                        fadeIn: 'CircleProgressBar_fadeIn_35',
                        progressLight__quarter: 'CircleProgressBar_progressLight__quarter_45',
                        progressLight__threeQuarter: 'CircleProgressBar_progressLight__threeQuarter_15',
                        pulse: 'CircleProgressBar_pulse_b0',
                    },
                    eu = 'rgba(255, 255, 255, 0.2)',
                    uu = 'rgba(255, 255, 255, 0.2)',
                    tu = 'rgba(255, 255, 255, 0.2)',
                    nu = '#94bffb',
                    ru = '#5877ef',
                    au = 360,
                    iu = 270,
                    su = (e) => (Math.PI / 180) * e,
                    ou = (e, u) => (au / u) * e,
                    lu = (e, u) => (e.style.transform = `rotate(${u}deg)`),
                    cu = (e, u, t) => {
                        const n = e.createLinearGradient(u, 0, 0, u);
                        return (
                            t
                                ? (n.addColorStop(0, nu), n.addColorStop(0.6, ru), n.addColorStop(1, nu))
                                : (n.addColorStop(0, eu), n.addColorStop(1, uu)),
                            n
                        );
                    },
                    du = (e, u, t, n, r) => {
                        const a = u.width / 2,
                            i = u.height / 2;
                        (e.clearRect(0, 0, u.width, u.height),
                            (e.fillStyle = nu),
                            e.beginPath(),
                            e.arc(a, i - t / 2 - n / 2, Math.floor((t - n) / 2), 0, 2 * Math.PI),
                            e.fill(),
                            e.closePath(),
                            (e.fillStyle = cu(e, t)),
                            e.beginPath(),
                            e.arc(a, i, t, su(iu), su(630)),
                            e.arc(a, i, n, su(180), su(630), !0),
                            e.fill(),
                            (e.fillStyle = cu(e, t, !0)),
                            (e.strokeStyle = tu),
                            e.beginPath(),
                            e.arc(a, i, t, su(iu), su(iu + r)),
                            e.arc(a, i, n, su(iu + r), su(iu), !0),
                            e.stroke(),
                            e.fill(),
                            e.closePath());
                    },
                    Eu = (e) => {
                        const u = (() => {
                                const e = (0, n.useState)(viewEnv.getScale()),
                                    u = e[0],
                                    t = e[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        const e = () => {
                                            t(viewEnv.getScale());
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
                            t = ((e, u) => e * (u / 2))(u, e),
                            r = ((e, u) => e - 5 * u)(t, u),
                            a = (0, n.useRef)({ value: t, inner: r });
                        return ((a.current.value = t), (a.current.inner = r), { scale: u, radiusRef: a });
                    };
                var mu;
                !(function (e) {
                    ((e.Default = 'default'), (e.Simple = 'simple'));
                })(mu || (mu = {}));
                const _u = ({
                    maxValue: e,
                    prevValue: u,
                    currentValue: t,
                    size: a = 64,
                    className: i,
                    theme: s = mu.Default,
                    onAnimationEnd: o = Ze,
                }) => {
                    const l = ou(u, e),
                        c = ou(t, e),
                        d = (0, n.useState)(!1),
                        E = d[0],
                        m = d[1],
                        _ = (0, n.useRef)(null),
                        A = (0, n.useRef)(null),
                        F = !ee(),
                        g = Eu(a),
                        h = g.scale,
                        D = g.radiusRef,
                        v = c >= 90,
                        C = c >= 270,
                        f = Math.floor(1.48 * a * h),
                        b = (0, Ye.useSpring)(() => ({
                            degrees: c,
                            onChange: (e) => {
                                const u = Math.round(e.value.degrees),
                                    t = _.current,
                                    n = A.current,
                                    r = D.current;
                                if (!t || !n) return;
                                const a = t.getContext('2d');
                                (du(a, t, r.value, r.inner, u), lu(n, u));
                            },
                            onRest: (e) => {
                                const u = Math.round(e.value.degrees);
                                (m(u >= au), o());
                            },
                        })),
                        p = b[0],
                        w = b[1];
                    ((0, n.useEffect)(() => {
                        const e = _.current;
                        if (!e) return;
                        const u = e.getContext('2d');
                        du(u, e, D.current.value, D.current.inner, p.degrees.get());
                    }, [D.current.value, D.current.inner, D, p.degrees]),
                        (0, n.useEffect)(() => {
                            if (l === c) {
                                const e = A.current;
                                if (!e) return;
                                lu(e, Math.round(c));
                            }
                            w.start({
                                from: { degrees: l },
                                to: { degrees: c },
                                config: { duration: 800, easing: Ke.easeInOutCubic },
                            });
                        }, [w, c, l]));
                    const y = a >= 64 ? { transform: `rotate(${0.2 * a}deg)` } : void 0;
                    return r().createElement(
                        'div',
                        {
                            className: B()(Je.base, Je[`base__${s}`], F && Je.base__additionalEffects, i),
                            style: { '--bar-size': `${a}rem` },
                        },
                        s === mu.Default && r().createElement('div', { className: Je.bgLight }),
                        r().createElement('canvas', { width: f, height: f, ref: _ }),
                        r().createElement(
                            'div',
                            { className: Je.circleSizeCentered },
                            r().createElement(
                                'div',
                                { className: Je.progressLightContainer },
                                v &&
                                    r().createElement('div', {
                                        className: B()(Je.progressLight, Je.progressLight__quarter),
                                        style: y,
                                    }),
                                C &&
                                    r().createElement('div', {
                                        className: B()(Je.progressLight, Je.progressLight__threeQuarter),
                                        style: y,
                                    }),
                            ),
                        ),
                        r().createElement(
                            'div',
                            { ref: A, className: B()(Je.light, E && Je.light__hidden) },
                            r().createElement(
                                'div',
                                { className: Je.circleSizeCentered },
                                r().createElement('div', { className: Je.lightTip }),
                                r().createElement('div', { className: Je.lightGlow }),
                            ),
                        ),
                    );
                };
                _u.Theme = mu;
                const Au = {
                        base: 'LightLevel_base_ae',
                        base__roman: 'LightLevel_base__roman_e3',
                        base__arabic: 'LightLevel_base__arabic_00',
                        base__light: 'LightLevel_base__light_33',
                    },
                    Fu = ['theme', 'level', 'type', 'className', 'style'];
                function gu() {
                    return (
                        (gu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        gu.apply(null, arguments)
                    );
                }
                let hu;
                !(function (e) {
                    ((e.Light = 'light'), (e.Simple = 'simple'));
                })(hu || (hu = {}));
                const Du = (e) => {
                    let u = e.theme,
                        t = void 0 === u ? hu.Light : u,
                        n = e.level,
                        a = e.type,
                        i = e.className,
                        s = e.style,
                        o = void 0 === s ? {} : s,
                        l = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, Fu);
                    const c = Object.assign({}, o, { backgroundPosition: `-${n - 1}em 0%` });
                    return r().createElement(
                        'div',
                        gu({}, l, { className: B()(Au.base, Au[`base__${a}`], Au[`base__${t}`], i), style: c }),
                    );
                };
                Du.Theme = hu;
                Symbol('arabicLevel');
                function Bu(e) {
                    if ('string' == typeof e) {
                        const u = Number(e);
                        if (Number.isNaN(u)) {
                            const u = `ArabianLevel: value ${e} is not valid, available: 1 - 10`;
                            console.error(u);
                        }
                        return Bu(u);
                    }
                    if (e < 1 || e > 10 || e !== Math.floor(e)) {
                        const u = `ArabicLevel: value ${e} is out of range [1, 10]`;
                        console.error(u);
                    }
                    return e;
                }
                (['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()), Symbol('romanLevel'));
                const vu = 10,
                    Cu = 1,
                    fu = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8, IX: 9, X: 10 };
                function bu(e) {
                    if ('string' == typeof e) {
                        const u = fu[e];
                        if (void 0 === u) {
                            const u = `RomanLevel: value ${e} is not valid, available: ${Object.keys(fu)}`;
                            console.error(u);
                        }
                        return bu(u);
                    }
                    if (e < Cu || e > vu || e !== Math.floor(e)) {
                        const u = `RomanLevel: value ${e} is out of range [${Cu}, ${vu}]`;
                        console.error(u);
                    }
                    return e;
                }
                const pu = (e, u) => (e ? { type: 'roman', level: bu(u) } : { type: 'arabic', level: Bu(u) }),
                    wu = (e, u) => {
                        const t = u / 2,
                            n = e - t;
                        return `M ${e + t} ${e + t} m -${n}, 0 a ${n},${n} 0 1,0 ${2 * n},0 a ${n},${n} 0 1,0 -${2 * n},0`;
                    },
                    yu = 'GlowingProgressBar_base_f6',
                    Su = 'GlowingProgressBar_base__levelUp_ba',
                    xu = ({ progressBarSize: e, prevPoints: u, currentPoints: t, maxPoints: a, isActive: i }) => {
                        const s = (0, n.useRef)(null),
                            o = 5 * qe(),
                            l = (0, Ye.useSpring)(() => ({
                                progress: t,
                                onChange: (u) => {
                                    if (!s.current) return;
                                    var t, n;
                                    const r = `${((t = e / 2 - o), (n = ((e, u) => (100 * e) / u)(u.value.progress, a) + o), ((Math.PI * (2 * t)) / 100) * n)}, 314`;
                                    s.current.setAttribute('stroke-dasharray', r);
                                },
                            }))[1];
                        return (
                            (0, n.useEffect)(() => {
                                t > u &&
                                    l.start({
                                        from: { progress: u },
                                        to: { progress: t },
                                        config: { duration: 800, easing: Ke.easeInOutCubic },
                                    });
                            }, [l, u, t, e, o, a]),
                            r().createElement(
                                'svg',
                                { className: B()(yu, i && Su) },
                                r().createElement('path', {
                                    ref: s,
                                    d: `${wu(e / 2, o)}`,
                                    fill: 'transparent',
                                    stroke: 'rgba(255, 255, 255, 0.8)',
                                    strokeWidth: o,
                                    strokeLinecap: 'round',
                                }),
                            )
                        );
                    },
                    Lu = {
                        base: 'LevelProgress_base_7a',
                        base__main: 'LevelProgress_base__main_7b',
                        base__navigation: 'LevelProgress_base__navigation_87',
                        levelWrapper: 'LevelProgress_levelWrapper_39',
                        level: 'LevelProgress_level_4c',
                        base__increase: 'LevelProgress_base__increase_a4',
                        levelUp: 'LevelProgress_levelUp_37',
                        level__ghost: 'LevelProgress_level__ghost_78',
                        levelUpGhost: 'LevelProgress_levelUpGhost_e7',
                        levelGlow: 'LevelProgress_levelGlow_a1',
                        animateBox: 'LevelProgress_animateBox_41',
                        particles: 'LevelProgress_particles_7d',
                        circles: 'LevelProgress_circles_25',
                        circle: 'LevelProgress_circle_df',
                        circle__1: 'LevelProgress_circle__1_f1',
                        circle__2: 'LevelProgress_circle__2_2d',
                        circle__3: 'LevelProgress_circle__3_63',
                        circle__4: 'LevelProgress_circle__4_62',
                        splash: 'LevelProgress_splash_71',
                        glowProgressbar: 'LevelProgress_glowProgressbar_da',
                    };
                function Ou() {
                    return (
                        (Ou = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ou.apply(null, arguments)
                    );
                }
                const Pu = {
                    width: 180,
                    height: 250,
                    frameCount: 86,
                    chunk: { count: 2, rows: 6, columns: 8 },
                    getChunkPath:
                        ((Nu = 'R.images.gui.maps.icons.newYear.sequence.main_widget.particles.sprite_'),
                        (e) => `${Nu}${e}`),
                };
                var Nu;
                const Tu = (function (e) {
                        const u = e.chunk,
                            t = u.rows * u.columns;
                        return (n) => {
                            const r = n % t,
                                a = (r % u.columns) * e.width,
                                i = Math.trunc(r / u.columns) * e.height;
                            return { path: e.getChunkPath(Math.trunc(n / t)), x: a, y: i };
                        };
                    })(Pu),
                    Iu = ({
                        type: e,
                        level: u,
                        maxPoints: t,
                        currentPoints: a,
                        progressBarSize: i,
                        isRomanNumbersAllowed: s = !0,
                        hasAnimation: o,
                        isSkipAnimation: l,
                        isFriendHangar: c = !1,
                        onAnimationEnd: d,
                    }) => {
                        var E, m, _;
                        const A = (0, n.useState)(u),
                            F = A[0],
                            g = A[1],
                            h = (0, n.useState)(a),
                            D = h[0],
                            v = h[1],
                            C = (0, n.useState)(t),
                            f = C[0],
                            b = C[1],
                            p = (0, n.useState)(!1),
                            w = p[0],
                            y = p[1],
                            S = !ee(),
                            x = null != (E = ze(F)) ? E : F,
                            L = null != (m = ze(D)) ? m : D,
                            O = null != (_ = ze(f)) ? _ : f,
                            P = r().useRef(null),
                            N = e === Wu.Main,
                            T = a > L,
                            I = u > x,
                            M = qe();
                        ((0, n.useEffect)(() => {
                            if (N) g(u);
                            else if (o)
                                return l
                                    ? (v(a), b(t), void y(!1))
                                    : I
                                      ? (y(!0),
                                        v(O),
                                        We(() => {
                                            (v(a), b(t), y(!1), null == d || d());
                                        }, 3e3))
                                      : T
                                        ? (y(!0),
                                          v(a),
                                          We(() => {
                                              (y(!1), null == d || d());
                                          }, 1500))
                                        : void 0;
                        }, [a, o, I, N, T, l, u, t, d, O]),
                            (0, n.useEffect)(() => {
                                c && (F !== u && g(u), D !== a && v(a));
                            }, [F, a, o, c, u, D]),
                            (0, n.useEffect)(() => {
                                const e = P.current;
                                if (e && o)
                                    return (
                                        e.classList.remove(Lu.base__increase),
                                        De(() => {
                                            if (I)
                                                return (
                                                    e.classList.add(Lu.base__increase),
                                                    We(() => {
                                                        g(u);
                                                    }, 50)
                                                );
                                        })
                                    );
                            }, [o, I, u, x]));
                        const R = { '--circle-size': `${i + 5}rem` };
                        return r().createElement(
                            'div',
                            { ref: P, style: R, className: B()(Lu.base, Lu[`base__${e}`]) },
                            S && r().createElement('div', { className: Lu.levelGlow }),
                            r().createElement(
                                'div',
                                { className: Lu.animateBox },
                                o &&
                                    r().createElement(Me, {
                                        className: Lu.particles,
                                        width: Pu.width,
                                        height: Pu.height,
                                        loop: !1,
                                        frameCount: Pu.frameCount,
                                        getImageSource: Tu,
                                    }),
                                r().createElement(
                                    'div',
                                    { className: Lu.circles },
                                    r().createElement('div', { className: B()(Lu.circle, Lu.circle__1) }),
                                    r().createElement('div', { className: B()(Lu.circle, Lu.circle__2) }),
                                    r().createElement('div', { className: B()(Lu.circle, Lu.circle__3) }),
                                    r().createElement('div', { className: B()(Lu.circle, Lu.circle__4) }),
                                ),
                                S &&
                                    r().createElement(
                                        'div',
                                        { className: Lu.glowProgressbar },
                                        r().createElement(xu, {
                                            progressBarSize: i * M,
                                            prevPoints: L,
                                            currentPoints: D,
                                            maxPoints: f,
                                            isActive: w,
                                        }),
                                    ),
                            ),
                            r().createElement(_u, {
                                theme: _u.Theme.Default,
                                prevValue: N ? a : L,
                                currentValue: N ? a : D,
                                maxValue: N ? t : f,
                                size: i,
                            }),
                            r().createElement(
                                'div',
                                { className: Lu.levelWrapper },
                                r().createElement(
                                    Ye.animated.div,
                                    { className: Lu.level },
                                    r().createElement(Du, Ou({ theme: hu.Simple }, pu(s, null != x ? x : 1))),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: Lu.levelWrapper },
                                r().createElement(
                                    'div',
                                    { className: B()(Lu.level, Lu.level__ghost) },
                                    r().createElement(Du, Ou({ theme: hu.Simple }, pu(s, F))),
                                ),
                            ),
                        );
                    },
                    Mu = {
                        base: 'Widget_base_b3',
                        glow: 'Widget_glow_4f',
                        base__main: 'Widget_base__main_ff',
                        base__additionalEffects: 'Widget_base__additionalEffects_f4',
                        base__navigation: 'Widget_base__navigation_e4',
                        bigGlow: 'Widget_bigGlow_5d',
                        hangarName: 'Widget_hangarName_61',
                        title: 'Widget_title_7d',
                        description: 'Widget_description_9b',
                        line: 'Widget_line_9b',
                        status: 'Widget_status_4a',
                        hangarNameWrapper: 'Widget_hangarNameWrapper_76',
                        statusName: 'Widget_statusName_39',
                    },
                    Ru = R.strings.ny.navigation.widget,
                    ku = (e, u) => {
                        if (e !== Wu.Main)
                            return u
                                ? { body: Ru.hangarName.friendView.tooltip.body() }
                                : {
                                      header: Ru.hangarName.mainView.tooltip.header(),
                                      body: Ru.hangarName.mainView.tooltip.body(),
                                  };
                    },
                    Hu = (e, u) => {
                        if (e !== Wu.Main)
                            return u
                                ? { body: Ru.progressBar.friendView.tooltip.body() }
                                : { contentId: R.views.lobby.new_year.tooltips.NyMainWidgetTooltip('resId') };
                    };
                let Wu;
                !(function (e) {
                    ((e.Main = 'main'), (e.Navigation = 'navigation'));
                })(Wu || (Wu = {}));
                const Gu = { [se.Online]: ge.Online, [se.Offline]: ge.Offline },
                    Uu = ({
                        type: e,
                        title: u,
                        description: t,
                        level: n,
                        maxPoints: a,
                        currentPoints: i,
                        progressBarSize: s,
                        isRomanNumbersAllowed: o = !0,
                        hangarNameType: l = ae.Default,
                        hasAnimation: c,
                        isSkipAnimation: d,
                        onAnimationEnd: E,
                        isFriendHangar: m,
                        friendStatusInfo: _,
                    }) => {
                        const A = _ ? Gu[_.userStatus] : Gu[se.Offline],
                            F = _ && {
                                type: 'playerStatus',
                                payload: {
                                    name: null == _ ? void 0 : _.nickname,
                                    serverName: null == _ ? void 0 : _.serverName,
                                    status: A,
                                },
                            },
                            g = !ee();
                        return r().createElement(
                            'div',
                            { className: B()(Mu.base, Mu[`base__${e}`], g && Mu.base__additionalEffects) },
                            r().createElement('div', { className: Mu.glow }),
                            g && e === Wu.Main && r().createElement('div', { className: Mu.bigGlow }),
                            r().createElement(
                                me,
                                { tooltipArgs: Hu(e, m) },
                                r().createElement(Iu, {
                                    type: e,
                                    level: n,
                                    maxPoints: a,
                                    currentPoints: i,
                                    progressBarSize: s,
                                    isRomanNumbersAllowed: o,
                                    hasAnimation: c,
                                    isSkipAnimation: d,
                                    isFriendHangar: m,
                                    onAnimationEnd: E,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: Mu.hangarNameWrapper },
                                r().createElement(
                                    me,
                                    { tooltipArgs: ku(e, m) },
                                    r().createElement(
                                        'div',
                                        { className: Mu.hangarName },
                                        r().createElement(ie, {
                                            classNames: { title: Mu.title, description: Mu.description, line: Mu.line },
                                            title: _e(u),
                                            description: Ae(t),
                                            size: ie.Size.Dynamic,
                                            type: l,
                                        }),
                                    ),
                                ),
                                m &&
                                    _ &&
                                    (null == _ ? void 0 : _.isShow) &&
                                    r().createElement(
                                        'div',
                                        { className: Mu.status },
                                        r().createElement(xe, {
                                            name: null == _ ? void 0 : _.nickname,
                                            status: A,
                                            tooltipArgs: F,
                                            classNames: { name: Mu.statusName },
                                        }),
                                    ),
                            ),
                        );
                    };
                let Vu, $u, ju, zu, qu, Yu, Ku;
                (!(function (e) {
                    ((e.Undefined = 'undefined'),
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
                        (e.Surprise = 'Surprise'));
                })(Vu || (Vu = {})),
                    (function (e) {
                        ((e.Crystal = 'ny_crystal'),
                            (e.Emerald = 'ny_emerald'),
                            (e.Amber = 'ny_amber'),
                            (e.Iron = 'ny_iron'),
                            (e.AnyResource = 'anyResource'));
                    })($u || ($u = {})),
                    (function (e) {
                        ((e.XP = 'xpFactor'),
                            (e.TankmenXP = 'tankmenXPFactor'),
                            (e.FreeXp = 'freeXPFactor'),
                            (e.Credits = 'creditsFactor'));
                    })(ju || (ju = {})),
                    (function (e) {
                        ((e.NewYear = 'NewYear'),
                            (e.Christmas = 'Christmas'),
                            (e.Fairytale = 'Fairytale'),
                            (e.Oriental = 'Oriental'));
                    })(zu || (zu = {})),
                    (function (e) {
                        ((e.Level1 = 'level1'), (e.Level2 = 'level2'), (e.Level3 = 'level3'), (e.Level4 = 'level4'));
                    })(qu || (qu = {})),
                    (function (e) {
                        ((e.Zero = 'zero'), (e.Number = 'number'), (e.Default = 'default'));
                    })(Yu || (Yu = {})),
                    (function (e) {
                        ((e.Undefined = 'undefined'),
                            (e.ToEvent = 'toEvent'),
                            (e.ToGuestD = 'toGuestD'),
                            (e.ToGuestC = 'toGuestC'),
                            (e.ToMarkertplace = 'toMarkertplace'),
                            (e.ToGiftmachine = 'toGiftmachine'),
                            (e.ToRewards = 'toRewards'));
                    })(Ku || (Ku = {})));
                function Xu() {
                    return !1;
                }
                console.log;
                var Qu = t(9174);
                function Zu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return Ju(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? Ju(e, u)
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
                function Ju(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const et = (e) => (0 === e ? window : window.subViews.get(e));
                var ut = t(3946);
                function tt(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                function nt(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const rt = nt;
                function at(e, u) {
                    return (function (e, u, t) {
                        const n = [];
                        for (let r = 0; r < e.length; r++) {
                            const a = rt(e, r);
                            u(a, r, e) && n.push(t(a, r, e));
                        }
                        return n;
                    })(e, tt, u);
                }
                const it = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: s, children: o, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    d = (t, n, r) => {
                                        var a;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = et,
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
                                                const s = (e) => {
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
                                                        const o = 'string' == typeof a ? `${n}.${a}` : n,
                                                            l = i.O.view.addModelObserver(o, u, !0);
                                                        return (r.set(l, t), e && t(s(a)), l);
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
                                                        for (var e, t = Zu(r.keys()); !(e = t()).done;) a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            o =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : o.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = Qu.LO.box(n, { equals: Xu });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Qu.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = Qu.LO.box(n, { equals: Xu });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Qu.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = Qu.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, Qu.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                a = Object.entries(r),
                                                                i = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = Qu.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, Qu.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                i[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            m = { mode: t, model: E, externalModel: o, cleanup: d };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && r ? r.controls(m) : u(m),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    E = (0, n.useRef)(!1),
                                    m = (0, n.useState)(a),
                                    _ = m[0],
                                    A = m[1],
                                    F = (0, n.useState)(() => d(a, s, l)),
                                    g = F[0],
                                    h = F[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        E.current ? h(d(_, s, l)) : (E.current = !0);
                                    }, [l, _, s]),
                                    (0, n.useEffect)(() => {
                                        A(a);
                                    }, [a]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (g.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [g],
                                    ),
                                    r().createElement(t.Provider, { value: g }, o)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    economicBonuses: e.array('economicBonuses', []),
                                    widgetLevelProgress: e.object('widgetLevelProgress'),
                                    hangarName: e.object('widgetLevelProgress.hangarName'),
                                },
                                t = (0, ut.Om)(() =>
                                    at(u.economicBonuses.get(), (e) => ({
                                        bonusName: e.bonusName,
                                        bonusValue: e.bonusValue,
                                    })),
                                ),
                                n = (0, ut.Om)(() => {
                                    var e, u;
                                    const n = t().find((e) => e.bonusName === ju.Credits);
                                    return {
                                        name: null != (e = null == n ? void 0 : n.bonusName) ? e : ju.Credits,
                                        value: null != (u = null == n ? void 0 : n.bonusValue) ? u : 0,
                                    };
                                }),
                                r = (0, ut.Om)(() => t().filter((e) => e.bonusName !== ju.Credits)),
                                a = (0, ut.Om)(() => {
                                    var e, n;
                                    const r = t().find((e) => e.bonusName === u.root.get().selectedBonus);
                                    return {
                                        name: null != (e = null == r ? void 0 : r.bonusName) ? e : '',
                                        value: null != (n = null == r ? void 0 : r.bonusValue) ? n : 0,
                                    };
                                }),
                                i = (0, ut.Om)(() => Boolean(t().find((e) => e.bonusValue > 0))),
                                s = (0, ut.Om)(() => u.root.get().isLobbyMode && u.root.get().isInited);
                            return Object.assign({}, u, {
                                computes: {
                                    isLobbyMode: s,
                                    findCreditsBonus: n,
                                    selectableBonuses: r,
                                    selectedBonus: a,
                                    hasBonuses: i,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            goToGladeView: e.createCallbackNoArgs('onGoToGladeView'),
                            goToChallenge: e.createCallbackNoArgs('onGoToChallenge'),
                            changeBonus: e.createCallback((e) => ({ bonusType: e }), 'onChangeBonus'),
                            editName: e.createCallbackNoArgs('onEditName'),
                        }),
                    ),
                    st = it[0],
                    ot = it[1],
                    lt = 'BonusesPanel_base_31',
                    ct = 'BonusesPanel_panel_ac',
                    dt = 'BonusesPanel_challengeIcon_aa',
                    Et = 'BonusesPanel_message_62',
                    mt = 'BonusesPanel_base__additionalEffects_82',
                    _t = 'BonusesPanel_messageGlow_b4',
                    At = 'BonusesPanel_glow_ae',
                    Ft = 'BonusesPanel_content_22',
                    gt = 'BonusesPanel_separator_77',
                    ht = 'BonusesPanel_dropDownWrapper_65';
                var Dt = t(514);
                const Bt = {
                        base: 'BonusItem_base_33',
                        base__interactive: 'BonusItem_base__interactive_01',
                        base__error: 'BonusItem_base__error_7d',
                        controlIcon: 'BonusItem_controlIcon_5f',
                        error: 'BonusItem_error_1b',
                        icon: 'BonusItem_icon_0d',
                        base__xpFactor: 'BonusItem_base__xpFactor_26',
                        base__creditsFactor: 'BonusItem_base__creditsFactor_fb',
                        base__tankmenXPFactor: 'BonusItem_base__tankmenXPFactor_cc',
                        base__freeXPFactor: 'BonusItem_base__freeXPFactor_1b',
                        bonus: 'BonusItem_bonus_a8',
                        textHolder: 'BonusItem_textHolder_55',
                        text: 'BonusItem_text_e7',
                        text__gradient: 'BonusItem_text__gradient_b9',
                    },
                    vt = R.strings.ny.widget.economicBonus,
                    Ct = R.strings.ny.percentageValue,
                    ft = ({ name: e, value: u, onClick: t, isError: n = !1 }) => {
                        const a = ju.Credits !== e,
                            i = Ue(Ct.withPlus(), { value: u });
                        return r().createElement(
                            me,
                            {
                                tooltipArgs:
                                    ((s = e),
                                    ju.Credits === s
                                        ? { body: vt.creditTooltip.description(), header: vt.creditTooltip.title() }
                                        : { contentId: R.views.lobby.new_year.tooltips.NyWidgetBonusTooltip('resId') }),
                            },
                            r().createElement(
                                'div',
                                {
                                    className: B()(
                                        Bt.base,
                                        Bt[`base__${e}`],
                                        a && (n ? Bt.base__error : Bt.base__interactive),
                                    ),
                                    onMouseDown: () => {
                                        a && (null == t || t(), Dt.hY.sound(R.sounds.hangar_newyear_hud_side_click()));
                                    },
                                    onMouseEnter: () => a && Dt.hY.sound('highlight'),
                                },
                                r().createElement(
                                    'div',
                                    { className: Bt.bonus },
                                    n && a && r().createElement('div', { className: B()(Bt.error) }),
                                    r().createElement('div', { className: Bt.icon }),
                                    r().createElement(
                                        'div',
                                        { className: Bt.textHolder },
                                        r().createElement('div', { className: Bt.text }, i),
                                        r().createElement('div', { className: B()(Bt.text, Bt.text__gradient) }, i),
                                    ),
                                    a && r().createElement('div', { className: Bt.controlIcon }),
                                ),
                            ),
                        );
                        var s;
                    },
                    bt = {
                        base: 'DropDownItem_base_24',
                        bonus: 'DropDownItem_bonus_28',
                        bonusIcon: 'DropDownItem_bonusIcon_ea',
                        base__xpFactor: 'DropDownItem_base__xpFactor_36',
                        base__tankmenXPFactor: 'DropDownItem_base__tankmenXPFactor_3b',
                        base__freeXPFactor: 'DropDownItem_base__freeXPFactor_02',
                        textHolder: 'DropDownItem_textHolder_68',
                        text: 'DropDownItem_text_ee',
                        text__gradient: 'DropDownItem_text__gradient_1e',
                    },
                    pt = R.strings.ny.widget.economicBonus,
                    wt = R.strings.ny.percentageValue,
                    yt = ({ name: e, value: u, onBonusClick: t }) => {
                        const n = Ue(wt.withPlus(), { value: u });
                        return r().createElement(
                            z,
                            { body: pt.bonusesTooltip.$dyn(e) },
                            r().createElement(
                                'div',
                                {
                                    className: B()(bt.base, bt[`base__${e}`]),
                                    onClick: () => {
                                        (t(e), Dt.hY.sound(R.sounds.hangar_newyear_slot_fill_in()));
                                    },
                                    onMouseEnter: () => Dt.hY.sound('highlight'),
                                },
                                r().createElement(
                                    'div',
                                    { className: B()(bt.bonus) },
                                    r().createElement('div', { className: bt.bonusIcon }),
                                    r().createElement(
                                        'div',
                                        { className: bt.textHolder },
                                        r().createElement('div', { className: bt.text }, n),
                                        r().createElement('div', { className: B()(bt.text, bt.text__gradient) }, n),
                                    ),
                                ),
                            ),
                        );
                    },
                    St = 'DropDownBonus_base_58',
                    xt = (0, Q.Pi)(({ onSelectBonus: e, onCloseDropDown: u }) => {
                        const t = ot().model.computes;
                        i.O.view.events.onFocusUpdated(u);
                        const a = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = a.current;
                                if (e) return (k.c1.register(e, u), () => k.c1.unregister(e, u));
                            }, [a, u]),
                            r().createElement(
                                'div',
                                { className: B()(St), ref: a },
                                t.selectableBonuses().map((u, t) =>
                                    r().createElement(yt, {
                                        key: t,
                                        name: u.bonusName,
                                        value: u.bonusValue,
                                        onBonusClick: e,
                                    }),
                                ),
                            )
                        );
                    });
                function Lt() {
                    return (
                        (Lt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Lt.apply(null, arguments)
                    );
                }
                const Ot = R.strings.ny.widget.economicBonus,
                    Pt = (0, Q.Pi)(({ onShowDropdown: e, onStateChange: u }) => {
                        const t = ot(),
                            a = t.model,
                            i = t.controls,
                            s = a.root.get().bonusError,
                            o = a.computes,
                            l = !ee(),
                            c = (0, n.useState)(!1),
                            d = c[0],
                            E = c[1];
                        (0, n.useEffect)(() => {
                            null == u || u(d);
                        }, [d, u]);
                        const m = (u) => {
                            (E(u), null == e || e(u));
                        };
                        return r().createElement(
                            'div',
                            { className: B()(lt, l && mt) },
                            r().createElement(
                                'div',
                                { className: ct },
                                l && r().createElement('div', { className: At }),
                                o.hasBonuses()
                                    ? r().createElement(
                                          'div',
                                          { className: Ft },
                                          r().createElement(ft, o.findCreditsBonus()),
                                          r().createElement('div', { className: gt }),
                                          r().createElement(
                                              ft,
                                              Lt({}, o.selectedBonus(), { onClick: () => m(!d), isError: s }),
                                          ),
                                      )
                                    : r().createElement(
                                          z,
                                          { header: Ot.infoTooltip.title(), body: Ot.infoTooltip.description() },
                                          r().createElement(
                                              'div',
                                              {
                                                  className: Et,
                                                  onClick: () => {
                                                      (i.goToChallenge(), K(R.sounds.yes()));
                                                  },
                                                  onMouseEnter: () => {
                                                      X.playHighlight();
                                                  },
                                              },
                                              r().createElement('div', { className: dt }),
                                              l && r().createElement('div', { className: _t }),
                                              Ot.info(),
                                          ),
                                      ),
                            ),
                            d &&
                                !s &&
                                r().createElement(
                                    'div',
                                    { className: ht },
                                    r().createElement(xt, {
                                        onSelectBonus: (e) => {
                                            (i.changeBonus(e), m(!1));
                                        },
                                        onCloseDropDown: () => m(!1),
                                    }),
                                ),
                        );
                    }),
                    Nt = 'App_base_82',
                    Tt = 'App_base__hidden_25',
                    It = 'App_base__additionalEffects_4e',
                    Mt = 'App_widgetBox_33',
                    Rt = 'App_widget_9b',
                    kt = 'App_buttonBox_4b',
                    Ht = 'App_button_1e',
                    Wt = (e, u) =>
                        e <= f.Small
                            ? u
                                ? { left: 90, right: 90, top: 30, bottom: 85 }
                                : { left: 90, right: 90, top: 30, bottom: 100 }
                            : { left: 40, right: 40, top: 30, bottom: 50 },
                    Gt = (e) => (e === f.ExtraSmall ? 60 : e === f.Medium ? 58 : 69),
                    Ut = (0, Q.Pi)(() => {
                        const e = ot(),
                            u = e.model,
                            t = e.controls,
                            a = u.root.get(),
                            s = a.isEnabled,
                            o = a.hasEditButton,
                            l = u.widgetLevelProgress.get(),
                            c = l.level,
                            d = l.currentPoints,
                            E = l.maxPoints,
                            m = l.isRomanNumbersAllowed,
                            _ = u.hangarName.get(),
                            A = _.title,
                            F = _.description,
                            g = !ee(),
                            h = ot().model.computes,
                            D = (0, n.useState)(!1),
                            v = D[0],
                            C = D[1],
                            f = w().mediaSize,
                            b = (0, n.useCallback)(
                                (e) => {
                                    (C(e), i.O.view.setSidePaddingsRem(Wt(f, e)));
                                },
                                [f],
                            ),
                            p = Y(
                                () => {
                                    (t.editName(), K(R.sounds.play()));
                                },
                                [t.editName],
                                300,
                                !0,
                            );
                        return (
                            (0, n.useEffect)(() => {
                                i.O.view.setSidePaddingsRem(Wt(f, v));
                            }, [f, v]),
                            r().createElement(
                                'div',
                                {
                                    className: B()(Nt, !h.isLobbyMode() && Tt, g && It),
                                    lang: R.strings.settings.LANGUAGE_CODE(),
                                },
                                r().createElement(Pt, { onShowDropdown: b, onStateChange: C }),
                                r().createElement(
                                    'div',
                                    { className: Mt },
                                    r().createElement(
                                        U,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: R.views.lobby.new_year.tooltips.NyMainWidgetTooltip('resId'),
                                        },
                                        r().createElement(
                                            'div',
                                            { className: Rt, onClick: () => s && t.goToGladeView() },
                                            r().createElement(Uu, {
                                                hangarNameType: ae.Gradient,
                                                type: Wu.Main,
                                                level: c,
                                                title: A,
                                                description: F,
                                                maxPoints: E,
                                                currentPoints: d,
                                                progressBarSize: Gt(f),
                                                isRomanNumbersAllowed: m,
                                            }),
                                        ),
                                    ),
                                    o &&
                                        r().createElement(
                                            z,
                                            {
                                                header: R.strings.ny.widgetAtmosphere.editTooltip.header(),
                                                body: R.strings.ny.widgetAtmosphere.editTooltip.body(),
                                            },
                                            r().createElement(
                                                'div',
                                                { className: kt },
                                                r().createElement('div', {
                                                    className: Ht,
                                                    onClick: p,
                                                    onMouseEnter: () => {
                                                        K(R.sounds.gui_hangar_hover());
                                                    },
                                                }),
                                            ),
                                        ),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    M().render(
                        r().createElement(T, null, r().createElement(st, null, r().createElement(Ut, null))),
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
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], a = !0, i = 0; i < u.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, n];
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
        (__webpack_require__.j = 9291),
        (() => {
            var e = { 9291: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, i, s] = t,
                        o = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); o < a.length; o++)
                        ((r = a[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [8360], () => __webpack_require__(7939));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
