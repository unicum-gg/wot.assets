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
                    t.d(u, { mouse: () => c, off: () => o, on: () => s, onResize: () => r, onScaleUpdated: () => i }));
                var a = t(472),
                    n = t(176);
                const r = (0, a.E)('clientResized'),
                    i = (0, a.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, n.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, n.R)(!0);
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
                                : (0, n.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const r = `mouse${u}`,
                                            i = l[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, s),
                                            a(),
                                            () => {
                                                n &&
                                                    (i(),
                                                    window.removeEventListener(r, s),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (n = !1));
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
                                ((e.enabled = !1), a());
                            },
                            enable() {
                                ((e.enabled = !0), a());
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
            959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => s,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    }));
                var a = t(527),
                    n = t(493);
                function r(e = 'px') {
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
            176: (e, u, t) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            493: (e, u, t) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function n(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => n, G: () => a });
            },
            472: (e, u, t) => {
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
            138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var a = t(959),
                    n = t(514);
                const r = { view: t(641), client: a, sound: n.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => s, hY: () => i });
                var a = t(959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(n).reduce((e, u) => ((e[u] = () => (0, a.playSound)(n[u])), e), {}),
                    i = Object.assign({}, r, { sound: a.playSound }),
                    s = { play: i, setRTPC: a.setRTPC };
            },
            722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => a }));
            },
            112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
                var a = t(472);
                const n = {
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
            641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => y,
                        events: () => r.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => f,
                        getFontNames: () => w,
                        getScale: () => D,
                        getSize: () => m,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => v,
                        isFocused: () => h,
                        pxToRem: () => g,
                        remToPx: () => C,
                        resize: () => A,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => S,
                    }));
                var a = t(722),
                    n = t(112),
                    r = t(538),
                    i = t(566);
                const s = 15;
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function c(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function E(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function _(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: C(u.x), y: C(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function g(e) {
                    return viewEnv.pxToRem(e);
                }
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
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
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    y = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
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
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => r });
                const a = ['args'],
                    n = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(u, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, u]) => {
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
                        var n;
                    },
                    r = {
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
            521: (e, u, t) => {
                'use strict';
                let a, n;
                (t.d(u, { n: () => a }),
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
                    })(n || (n = {})));
            },
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var a = t(138);
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
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, t, n);
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(916);
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
            916: (e, u, t) => {
                'use strict';
                t.d(u, { Sw: () => r.Z, B3: () => l, Z5: () => i.Z5, B0: () => s, ry: () => g });
                class a {
                    constructor() {
                        ((this.entries = []),
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
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            a = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== a)),
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
                const n = a;
                var r = t(358),
                    i = t(613);
                let s;
                var o;
                (((o = s || (s = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE'));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(521),
                    A = t(138);
                const _ = ['args'];
                function F(e, u, t, a, n, r, i) {
                    try {
                        var s = e[r](i),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(a, n);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(u, t);
                                        function i(e) {
                                            F(r, a, n, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            F(r, a, n, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(u, _);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    B = () => C(s.CLOSE),
                    h = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var p = t(572);
                const v = n.instance,
                    b = {
                        DataTracker: r.Z,
                        ViewModel: p.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: d,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => C(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => C(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const i = A.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                E = o.width,
                                d = o.height,
                                m = {
                                    x: A.O.view.pxToRem(l) + i.x,
                                    y: A.O.view.pxToRem(c) + i.y,
                                    width: A.O.view.pxToRem(E),
                                    height: A.O.view.pxToRem(d),
                                };
                            C(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: D(m),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => h(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, B);
                        },
                        handleViewEvent: C,
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
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const n = Object.prototype.toString.call(u[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < n.length; u++) t[a].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = b;
            },
            613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => r, Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            612: (e, u, t) => {
                'use strict';
                var a = t(179),
                    n = t.n(a);
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
                var i = t(138);
                const s = {
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
                        n = (function (e, u) {
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
                        r = Math.min(a, n);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
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
                    E = c.width,
                    d = c.height,
                    m = Object.assign({ width: E, height: d }, l(E, d, s)),
                    A = (0, a.createContext)(m),
                    _ = ['children'],
                    F = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, _);
                        const n = (0, a.useContext)(A),
                            i = n.extraLarge,
                            s = n.large,
                            o = n.medium,
                            l = n.small,
                            c = n.extraSmall,
                            E = n.extraLargeWidth,
                            d = n.largeWidth,
                            m = n.mediumWidth,
                            F = n.smallWidth,
                            D = n.extraSmallWidth,
                            g = n.extraLargeHeight,
                            C = n.largeHeight,
                            B = n.mediumHeight,
                            h = n.smallHeight,
                            p = n.extraSmallHeight,
                            v = { extraLarge: g, large: C, medium: B, small: h, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && i) return u;
                            if (t.large && s) return u;
                            if (t.medium && o) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && E) return r(u, t, v);
                            if (t.largeWidth && d) return r(u, t, v);
                            if (t.mediumWidth && m) return r(u, t, v);
                            if (t.smallWidth && F) return r(u, t, v);
                            if (t.extraSmallWidth && D) return r(u, t, v);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && g) return u;
                                if (t.largeHeight && C) return u;
                                if (t.mediumHeight && B) return u;
                                if (t.smallHeight && h) return u;
                                if (t.extraSmallHeight && p) return u;
                            }
                        }
                        return null;
                    };
                ((F.defaultProps = {
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
                    (0, a.memo)(F));
                const D = ({ children: e }) => {
                    const u = (0, a.useContext)(A),
                        t = (0, a.useState)(u),
                        r = t[0],
                        o = t[1],
                        c = (0, a.useCallback)((e, u) => {
                            const t = i.O.view.pxToRem(e),
                                a = i.O.view.pxToRem(u);
                            o(Object.assign({ width: t, height: a }, l(t, a, s)));
                        }, []),
                        E = (0, a.useCallback)(() => {
                            const e = i.O.client.getSize('px');
                            c(e.width, e.height);
                        }, [c]);
                    (((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        (i.O.client.events.on('clientResized', c), i.O.client.events.on('self.onScaleUpdated', E));
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                (i.O.client.events.off('clientResized', c),
                                    i.O.client.events.off('self.onScaleUpdated', E));
                            },
                            [c, E],
                        ));
                    const d = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return n().createElement(A.Provider, { value: d }, e);
                };
                var g = t(483),
                    C = t.n(g),
                    B = t(926),
                    h = t.n(B);
                let p, v, b;
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
                    })(v || (v = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge'));
                    })(b || (b = {})));
                const f = () => {
                        const e = (0, a.useContext)(A),
                            u = e.width,
                            t = e.height,
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
                            r = ((e) => {
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
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
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
                                        return (console.error('Unreachable media context resolution'), b.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    w = ['children', 'className'];
                function y() {
                    return (
                        (y = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        y.apply(null, arguments)
                    );
                }
                const x = {
                        [v.ExtraSmall]: '',
                        [v.Small]: h().SMALL_WIDTH,
                        [v.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [v.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    S = {
                        [b.ExtraSmall]: '',
                        [b.Small]: h().SMALL_HEIGHT,
                        [b.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [b.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [p.ExtraSmall]: '',
                        [p.Small]: h().SMALL,
                        [p.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [p.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [p.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    k = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, w);
                        const r = f(),
                            i = r.mediaWidth,
                            s = r.mediaHeight,
                            o = r.mediaSize;
                        return n().createElement('div', y({ className: C()(t, x[i], S[s], T[o]) }, a), u);
                    },
                    M = ['children'],
                    O = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, M);
                        return n().createElement(D, null, n().createElement(k, t, u));
                    };
                var L = t(986),
                    P = t.n(L);
                function I(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const N = {
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
                function $() {
                    return (
                        ($ = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        $.apply(null, arguments)
                    );
                }
                class U extends n().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && I(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && I(this.props.soundClick));
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
                            a = e.goto,
                            r = e.side,
                            i = e.type,
                            s = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(e, H)),
                            m = C()(N.base, N[`base__${i}`], N[`base__${r}`], null == s ? void 0 : s.base),
                            A = C()(N.icon, N[`icon__${i}`], N[`icon__${r}`], null == s ? void 0 : s.icon),
                            _ = C()(N.glow, null == s ? void 0 : s.glow),
                            F = C()(N.caption, N[`caption__${i}`], null == s ? void 0 : s.caption),
                            D = C()(N.goto, null == s ? void 0 : s.goto);
                        return n().createElement(
                            'div',
                            $(
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
                                d,
                            ),
                            'info' !== i && n().createElement('div', { className: N.shine }),
                            n().createElement('div', { className: A }, n().createElement('div', { className: _ })),
                            n().createElement('div', { className: F }, u),
                            a && n().createElement('div', { className: D }, a),
                        );
                    }
                }
                U.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var G = t(514),
                    W = t(521),
                    z = t(916);
                const j = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function V(e = W.n.NONE, u = j, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== W.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!n && i.O.view.isEventHandled()) return;
                                (i.O.view.setEventHandled(), u(a), t && a.stopPropagation());
                            }
                        }
                    }, [u, e, t, n]);
                }
                let q, Y, X, K;
                (!(function (e) {
                    ((e.Carrier = 'carrier'), (e.Support = 'support'), (e.Assault = 'assault'));
                })(q || (q = {})),
                    (function (e) {
                        ((e.Common = 'common'), (e.Uncommon = 'uncommon'), (e.Rare = 'rare'), (e.Epic = 'epic'));
                    })(Y || (Y = {})),
                    (function (e) {
                        ((e.NotAvailable = 'notAvailable'), (e.Available = 'available'), (e.Claimed = 'claimed'));
                    })(X || (X = {})),
                    (function (e) {
                        ((e.None = 'none'),
                            (e.Vehicle = 'vehicle'),
                            (e.Coins = 'coins'),
                            (e.Battle = 'battle'),
                            (e.Move = 'move'),
                            (e.Missions = 'missions'),
                            (e.Finish = 'finish'));
                    })(K || (K = {})));
                const Z = {
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
                    bezier: (e, u, t, a) => (n) =>
                        (1 - n) * (1 - n) * (1 - n) * e +
                        3 * (1 - n) * (1 - n) * n * u +
                        3 * (1 - n) * n * n * t +
                        n * n * n * a,
                };
                var Q = t(403),
                    J = t(30);
                function ee() {
                    return !1;
                }
                function ue(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                console.log;
                const te = ue;
                function ae(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function ne(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                function re(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        const a = ae(e[t]);
                        if (u(a, t, e)) return a;
                    }
                }
                function ie(e, u) {
                    for (let t = 0; t < e.length; t++) if (u(ae(e[t]))) return !0;
                    return !1;
                }
                function se(e, u, t) {
                    const a = [];
                    for (let n = 0; n < e.length; n++) {
                        const r = te(e, n);
                        u(r, n, e) && a.push(t(r, n, e));
                    }
                    return a;
                }
                let oe;
                !(function (e) {
                    ((e.Default = 'default'), (e.InBattle = 'inBattle'), (e.InPlatoon = 'inPlatoon'));
                })(oe || (oe = {}));
                var le = t(174);
                function ce(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const Ee = (e) => (0 === e ? window : window.subViews.get(e));
                var de = t(946);
                const me = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: s, mocks: o }) {
                                const l = (0, a.useRef)([]),
                                    c = (e, t, a) => {
                                        var n;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Ee,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = n.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const n = t(u),
                                                        r = a.split('.').reduce((e, u) => e[u], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const o = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = i.O.view.addModelObserver(o, u, !0);
                                                        return (n.set(l, t), e && t(s(r)), l);
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
                                                                                    return ce(e, u);
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
                                                                                          ? ce(e, u)
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
                                                                })(n.keys());
                                                            !(e = t()).done;

                                                        )
                                                            r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(t),
                                            s =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            o = (u) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(u)) : s.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            E = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        chapters: e.array('chapters'),
                                                        missions: e.array('missions'),
                                                        rewards: e.array('rewards'),
                                                        tankCards: e.array('tankCards'),
                                                    },
                                                    t = (0, de.Om)(
                                                        () => {
                                                            var e;
                                                            return null ==
                                                                (e = re(
                                                                    u.tankCards.get(),
                                                                    (e) =>
                                                                        u.root.get().selectedVehicleIntCD === e.intCD,
                                                                ))
                                                                ? void 0
                                                                : e.role;
                                                        },
                                                        { equals: ee },
                                                    ),
                                                    a = (0, de.Om)(
                                                        () =>
                                                            se(
                                                                u.missions.get(),
                                                                (e) => e.role === t() && e.isWeekly,
                                                                (e) => Object.assign({}, e),
                                                            ),
                                                        { equals: ee },
                                                    ),
                                                    n = (0, de.Om)(
                                                        () =>
                                                            se(
                                                                u.missions.get(),
                                                                (e) => !e.isWeekly,
                                                                (e) => Object.assign({}, e),
                                                            ),
                                                        { equals: ee },
                                                    ),
                                                    r = (0, de.Om)(
                                                        () =>
                                                            se(
                                                                u.missions.get(),
                                                                (e) =>
                                                                    e.role === t() &&
                                                                    e.isWeekly &&
                                                                    e.current !== e.target,
                                                                (e) => Object.assign({}, e),
                                                            ),
                                                        { equals: ee },
                                                    ),
                                                    i = (0, de.Om)(
                                                        () =>
                                                            se(
                                                                u.missions.get(),
                                                                (e) => !e.isWeekly && e.current !== e.target,
                                                                (e) => Object.assign({}, e),
                                                            ),
                                                        { equals: ee },
                                                    ),
                                                    s = (0, de.Om)(
                                                        () => ne(u.rewards.get(), (e) => Object.assign({}, e)),
                                                        { equals: ee },
                                                    ),
                                                    o = (0, de.Om)(
                                                        () =>
                                                            ne(u.tankCards.get(), (e) => {
                                                                const t = e.resourceKey,
                                                                    a = e.intCD,
                                                                    n = e.role,
                                                                    r = e.bonusPoints,
                                                                    i = e.vehicleState;
                                                                return {
                                                                    isSelected: u.root.get().selectedVehicleIntCD === a,
                                                                    resourceKey: t,
                                                                    vehicleState: i,
                                                                    intCD: a,
                                                                    role: n,
                                                                    bonusPoints: r,
                                                                    abilities: ne(e.abilities, (e) =>
                                                                        Object.assign({}, e),
                                                                    ),
                                                                };
                                                            }),
                                                        { equals: ee },
                                                    ),
                                                    l = (0, de.Om)(
                                                        () =>
                                                            ie(
                                                                u.tankCards.get(),
                                                                (e) => e.vehicleState === oe.InPlatoon,
                                                            ),
                                                        { equals: ee },
                                                    ),
                                                    c = (0, de.Om)(() =>
                                                        o().find((e) => e.intCD === u.root.get().selectedVehicleIntCD),
                                                    ),
                                                    E = (0, de.Om)(() => u.rewards.get().length, { equals: ee }),
                                                    d = (0, de.Om)(() => ne(u.chapters.get(), (e) => e.chapterId), {
                                                        equals: ee,
                                                    }),
                                                    m = (0, de.Om)(
                                                        () =>
                                                            ne(
                                                                (function (e, u) {
                                                                    if (Array.isArray(e)) return e.filter(u);
                                                                    const t = [];
                                                                    for (let n = 0; n < e.length; n++) {
                                                                        var a;
                                                                        const r = null == (a = e[n]) ? void 0 : a.value;
                                                                        u(r, n, e) && t.push(r);
                                                                    }
                                                                    return t;
                                                                })(u.chapters.get(), (e) => e.isCompleted),
                                                                (e) => e.chapterId,
                                                            ),
                                                        { equals: ee },
                                                    ),
                                                    A = (0, de.Om)((e) => {
                                                        var t;
                                                        return null ==
                                                            (t = re(u.chapters.get(), (u) => u.chapterId === e))
                                                            ? void 0
                                                            : t.isCompleted;
                                                    }),
                                                    _ = (0, de.Om)((e) => {
                                                        var t;
                                                        const a = u.chapters.get();
                                                        return (
                                                            e ===
                                                            (null == (t = ue(a, a.length - 1)) ? void 0 : t.chapterId)
                                                        );
                                                    }),
                                                    F = (0, de.Om)(() => ie(s(), (e) => e.state === X.Available)),
                                                    D = (0, de.Om)((e, t) => {
                                                        const a = u.root.get(),
                                                            n = a.hintState,
                                                            r = a.isHintVisible,
                                                            i = a.currentChapter,
                                                            s = a.isTabSwitching;
                                                        return n === e && r && (!t || (!s && 1 === i));
                                                    }),
                                                    g = (0, de.Om)(
                                                        () =>
                                                            (function (e, u, t) {
                                                                if (Array.isArray(e)) return e.reduce(u, t);
                                                                let a = t;
                                                                for (let t = 0; t < e.length; t++)
                                                                    a = u(a, te(e, t), t, e);
                                                                return a;
                                                            })(
                                                                u.missions.get(),
                                                                (e, u) => (
                                                                    u.current !== u.target &&
                                                                        (u.isWeekly
                                                                            ? (e[u.role] += 1)
                                                                            : (e.random += 1)),
                                                                    e
                                                                ),
                                                                {
                                                                    random: 0,
                                                                    [q.Assault]: 0,
                                                                    [q.Carrier]: 0,
                                                                    [q.Support]: 0,
                                                                },
                                                            ),
                                                        { equals: ee },
                                                    );
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        getWeeklyMissions: a,
                                                        getRandomMission: n,
                                                        getSelectedVehicleRole: t,
                                                        getRewards: s,
                                                        getRewardsLength: E,
                                                        getChaptersKeyList: d,
                                                        getCompletedChaptersKeyList: m,
                                                        getTankCards: o,
                                                        getSelectedCard: c,
                                                        isChapterCompleted: A,
                                                        isLastChapter: _,
                                                        anyInPlatoon: l,
                                                        isNextStepAvailable: F,
                                                        getMissionsStats: g,
                                                        getActiveRandomMission: i,
                                                        getActiveWeeklyMissions: r,
                                                        isHintStateVisible: D,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const a = null != t ? t : o(u),
                                                            n = le.LO.box(a, { equals: ee });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, le.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const a = null != t ? t : o(u),
                                                            n = le.LO.box(a, { equals: ee });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, le.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const a = o(t);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (e, u) => ((e[u] = le.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, le.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                n[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = u,
                                                                r = Object.entries(n),
                                                                i = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = le.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, le.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
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
                                                cleanup: c,
                                            }),
                                            d = { mode: e, model: E, externalModel: s, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === e && a ? a.controls(d) : u(d),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    E = (0, a.useRef)(!1),
                                    d = (0, a.useState)(e),
                                    m = d[0],
                                    A = d[1],
                                    _ = (0, a.useState)(() => c(e, r, o)),
                                    F = _[0],
                                    D = _[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        E.current ? D(c(m, r, o)) : (E.current = !0);
                                    }, [o, m, r]),
                                    (0, a.useEffect)(() => {
                                        A(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    n().createElement(t.Provider, { value: F }, s)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        nextStep: e.createCallbackNoArgs('onNextStep'),
                        showGameBoardInfo: e.createCallbackNoArgs('onShowGameBoardInfo'),
                        close: e.createCallbackNoArgs('onClose'),
                        changeTank: e.createCallback((e) => ({ intCD: e }), 'onChangeTank'),
                        switchChapter: e.createCallback((e) => ({ chapterId: e }), 'onSwitchChapter'),
                        updateContentModel: e.createCallbackNoArgs('onUpdateContentModel'),
                        openStylePreview: e.createCallback((e) => ({ styleId: e }), 'onOpenStylePreview'),
                        completedMissionShown: e.createCallback((e) => ({ questId: e }), 'onCompletedMissionShown'),
                        hideCurrentHint: e.createCallback((e) => ({ hintId: e }), 'onHintViewed'),
                    })),
                    Ae = me[0],
                    _e = me[1],
                    Fe = (e, u) => {
                        const t = e.$dyn(u);
                        if ('string' == typeof t) return t;
                        console.error(`GetResource '${u}' is invalid `);
                    },
                    De = { 1: 'firstChapter', 2: 'secondChapter', 3: 'thirdChapter' },
                    ge = (e, u) => {
                        const t = De[e];
                        return u >= p.Large
                            ? Fe(R.images.grinch_progression.gui.maps.icons.game_board.fields.large, t)
                            : Fe(R.images.grinch_progression.gui.maps.icons.game_board.fields.medium, t);
                    },
                    Ce = (e) =>
                        e >= p.ExtraLarge
                            ? [2560, 1440]
                            : e >= p.Large
                              ? [1920, 1080]
                              : e >= p.Medium
                                ? [1600, 900]
                                : [1366, 768],
                    Be = ({ bgChapter: e }) => {
                        const u = f().mediaSize,
                            t = Ce(u),
                            a = t[0],
                            r = t[1];
                        return n().createElement('div', {
                            className: C()('Background_base_7d'),
                            style: { width: `${a}rem`, height: `${r}rem`, backgroundImage: `url(${ge(e, u)})` },
                        });
                    },
                    he = (0, Q.Pi)(() => {
                        const e = _e().model.root.get().currentChapter,
                            u = (0, J.useTransition)(e, {
                                enter: { from: { opacity: 0 }, to: { opacity: 1 } },
                                leave: { from: { opacity: 1 }, to: { opacity: 0 } },
                                config: { duration: 400 },
                            });
                        return n().createElement(
                            'div',
                            { className: 'BackgroundsStack_base_1f' },
                            n().createElement('div', { className: 'BackgroundsStack_table_4c' }),
                            u((e, u) =>
                                n().createElement(
                                    J.animated.div,
                                    { style: e },
                                    n().createElement(Be, { bgChapter: u }),
                                ),
                            ),
                        );
                    });
                var pe = t(281);
                let ve;
                function be(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(ve || (ve = {}));
                const fe = (e) => e.replace(/&nbsp;/g, ' '),
                    we = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    ye = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    xe = (e, u, t = ve.left) => e.split(u).reduce(t === ve.left ? we : ye, []),
                    Se = (() => {
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
                    Te = ['zh_cn', 'zh_sg', 'zh_tw'];
                var ke = t(613);
                const Me = Date.now() / 1e3,
                    Oe = (ke.Ew.getRegionalDateTime, ke.Ew.getFormattedDateTime);
                let Re;
                (z.Sw.instance,
                    (function (e) {
                        ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                    })(Re || (Re = {})),
                    z.Sw.instance);
                const Le = (e, u) => {
                    const t = (0, a.useRef)();
                    return (
                        (0, a.useEffect)(() => {
                            (u && !u(e)) || (t.current = e);
                        }, [u, e]),
                        t.current
                    );
                };
                let Pe;
                !(function (e) {
                    ((e[(e.Space = 32)] = 'Space'),
                        (e[(e.Enter = 13)] = 'Enter'),
                        (e[(e.A = 65)] = 'A'),
                        (e[(e.B = 66)] = 'B'),
                        (e[(e.C = 67)] = 'C'),
                        (e[(e.D = 68)] = 'D'),
                        (e[(e.E = 69)] = 'E'),
                        (e[(e.F = 70)] = 'F'),
                        (e[(e.G = 71)] = 'G'),
                        (e[(e.H = 72)] = 'H'),
                        (e[(e.I = 73)] = 'I'),
                        (e[(e.J = 74)] = 'J'),
                        (e[(e.K = 75)] = 'K'),
                        (e[(e.L = 76)] = 'L'),
                        (e[(e.M = 77)] = 'M'),
                        (e[(e.N = 78)] = 'N'),
                        (e[(e.O = 79)] = 'O'),
                        (e[(e.P = 80)] = 'P'),
                        (e[(e.Q = 81)] = 'Q'),
                        (e[(e.R = 82)] = 'R'),
                        (e[(e.S = 83)] = 'S'),
                        (e[(e.T = 84)] = 'T'),
                        (e[(e.U = 85)] = 'U'),
                        (e[(e.V = 86)] = 'V'),
                        (e[(e.W = 87)] = 'W'),
                        (e[(e.X = 88)] = 'X'),
                        (e[(e.Y = 89)] = 'Y'),
                        (e[(e.Z = 90)] = 'Z'));
                })(Pe || (Pe = {}));
                function Ie(e, u, t, a) {
                    let n,
                        r = !1,
                        i = 0;
                    function s() {
                        n && clearTimeout(n);
                    }
                    function o(...o) {
                        const l = this,
                            c = Date.now() - i;
                        function E() {
                            ((i = Date.now()), t.apply(l, o));
                        }
                        r ||
                            (a && !n && E(),
                            s(),
                            void 0 === a && c > e
                                ? E()
                                : !0 !== u &&
                                  (n = setTimeout(
                                      a
                                          ? function () {
                                                n = void 0;
                                            }
                                          : E,
                                      void 0 === a ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof u && ((a = t), (t = u), (u = void 0)),
                        (o.cancel = function () {
                            (s(), (r = !0));
                        }),
                        o
                    );
                }
                function Ne(e, u, t, n = !1) {
                    const r = (0, a.useMemo)(
                        () =>
                            (function (e, u, t) {
                                return void 0 === t ? Ie(e, u, !1) : Ie(e, t, !1 !== u);
                            })(t, n, e),
                        u,
                    );
                    return ((0, a.useEffect)(() => r.cancel, [r]), r);
                }
                const He = {
                        [q.Carrier]: [
                            { w: 42, h: 64, x: -62, y: -45 },
                            { w: 38, h: 61, x: -62, y: -47 },
                            { w: 53, h: 30, x: -55, y: -42 },
                            { w: 35, h: 44, x: -51, y: -61 },
                            { w: 40, h: 54, x: -62, y: -34 },
                            { w: 40, h: 48, x: -63, y: -27 },
                            { w: 55, h: 30, x: -56, y: -42 },
                            { w: 36, h: 45, x: -49, y: -62 },
                            { w: 35, h: 45, x: -53, y: -58 },
                            { w: 40, h: 50, x: -61, y: -28 },
                            { w: 50, h: 33, x: -60, y: -40 },
                        ],
                        [q.Support]: [
                            { w: 47, h: 54, x: -50, y: -40 },
                            { w: 43, h: 53, x: -46, y: -41 },
                            { w: 48, h: 37, x: -65, y: -42 },
                            { w: 44, h: 52, x: -53, y: -61 },
                            { w: 46, h: 55, x: -50, y: -40 },
                            { w: 45, h: 55, x: -50, y: -41 },
                            { w: 50, h: 36, x: -65, y: -41 },
                            { w: 44, h: 52, x: -50, y: -59 },
                            { w: 44, h: 50, x: -54, y: -58 },
                            { w: 46, h: 55, x: -48, y: -39 },
                            { w: 50, h: 38, x: -65, y: -42 },
                        ],
                        [q.Assault]: [
                            { w: 52, h: 82, x: -51, y: -62 },
                            { w: 49, h: 80, x: -52, y: -62 },
                            { w: 76, h: 38, x: -47, y: -45 },
                            { w: 46, h: 59, x: -52, y: -52 },
                            { w: 45, h: 58, x: -54, y: -44 },
                            { w: 45, h: 60, x: -55, y: -49 },
                            { w: 74, h: 37, x: -51, y: -44 },
                            { w: 44, h: 55, x: -46, y: -57 },
                            { w: 44, h: 50, x: -53, y: -52 },
                            { w: 42, h: 55, x: -54, y: -39 },
                            { w: 67, h: 40, x: -55, y: -43 },
                        ],
                        empty: [{ w: 70, h: 70, x: -50, y: -50 }],
                    },
                    $e = 300,
                    Ue = { x: 0, y: 0 },
                    Ge = [
                        { x: 241, y: 598 },
                        { x: 375, y: 445 },
                        { x: 535, y: 341 },
                        { x: 620, y: 461 },
                        { x: 646, y: 517 },
                        { x: 730, y: 372 },
                        { x: 980, y: 327 },
                        { x: 1180, y: 359 },
                        { x: 1160, y: 497 },
                        { x: 1190, y: 630 },
                        { x: 1380, y: 498 },
                    ],
                    We = {
                        [p.ExtraSmall]: [
                            { x: 235, y: 370 },
                            { x: 350, y: 260 },
                            { x: 510, y: 270 },
                            { x: 430, y: 420 },
                            { x: 590, y: 340 },
                            { x: 650, y: 210 },
                            { x: 890, y: 210 },
                            { x: 960, y: 330 },
                            { x: 900, y: 460 },
                            { x: 1050, y: 380 },
                        ],
                        [p.Small]: [
                            { x: 230, y: 370 },
                            { x: 350, y: 260 },
                            { x: 520, y: 280 },
                            { x: 450, y: 440 },
                            { x: 590, y: 340 },
                            { x: 730, y: 220 },
                            { x: 870, y: 225 },
                            { x: 960, y: 320 },
                            { x: 890, y: 460 },
                            { x: 1020, y: 400 },
                        ],
                        [p.Medium]: [
                            { x: 270, y: 460 },
                            { x: 433, y: 310 },
                            { x: 609, y: 327 },
                            { x: 527, y: 530 },
                            { x: 700, y: 398 },
                            { x: 855, y: 270 },
                            { x: 1030, y: 260 },
                            { x: 1100, y: 410 },
                            { x: 1071, y: 560 },
                            { x: 1220, y: 480 },
                        ],
                        [p.Large]: [
                            { x: 350, y: 550 },
                            { x: 490, y: 400 },
                            { x: 710, y: 390 },
                            { x: 640, y: 642 },
                            { x: 840, y: 470 },
                            { x: 1e3, y: 325 },
                            { x: 1222, y: 345 },
                            { x: 1365, y: 475 },
                            { x: 1280, y: 660 },
                            { x: 1462, y: 608 },
                        ],
                        [p.ExtraLarge]: [
                            { x: 470, y: 760 },
                            { x: 685, y: 530 },
                            { x: 965, y: 525 },
                            { x: 860, y: 865 },
                            { x: 1110, y: 610 },
                            { x: 1250, y: 430 },
                            { x: 1660, y: 480 },
                            { x: 1811, y: 646 },
                            { x: 1700, y: 890 },
                            { x: 1980, y: 785 },
                        ],
                    },
                    ze = [-7, -5, 8, -5, -8, 9, -5, 7, -5, -8],
                    je = {
                        [p.ExtraSmall]: { w: 200, h: 154 },
                        [p.Small]: { w: 200, h: 154 },
                        [p.Medium]: { w: 200, h: 154 },
                        [p.Large]: { w: 220, h: 170 },
                        [p.ExtraLarge]: { w: 280, h: 220 },
                    },
                    Ve = ['up', 'up', 'right', 'down', 'up', 'up', 'right', 'down', 'down', 'up', 'right'],
                    qe = (e) => je[e],
                    Ye = ({ text: e, className: u }) =>
                        n().createElement(
                            'div',
                            { className: C()('TriggerHint_base_de', u) },
                            n().createElement('div', { className: 'TriggerHint_text_54' }, e),
                            n().createElement('div', { className: 'TriggerHint_arrow_b9' }),
                        ),
                    Xe = (0, Q.Pi)(({ role: e }) => {
                        const u = f().mediaSize,
                            t = _e(),
                            r = t.model,
                            i = t.controls,
                            s = r.root.get(),
                            o = s.currentStep,
                            l = s.maxStep,
                            c = s.hintState,
                            E = ((e, u) =>
                                -1 === e
                                    ? Ue
                                    : ((e, u) => {
                                          const t = Math.max(p.Small, u) / p.Medium;
                                          return { x: (e.x - 0.5 * v.Medium) * t, y: (e.y - 0.5 * b.Medium) * t };
                                      })(Ge[e], u))(o, u),
                            d = qe(u),
                            m = ((e, u, t) => {
                                if (e && u >= 0) {
                                    const a = qe(t),
                                        n = R.images.grinch_progression.gui.maps.icons.game_board.tankMiniatures.$dyn(
                                            `c_${a.w}x${a.h}`,
                                        );
                                    return Fe(n, `${e}_${Ve[u]}`);
                                }
                                return '';
                            })(e, o, u),
                            A = ((e, u) => (e && u >= 0 ? He[e][u] : He.empty[0]))(e, o),
                            _ = (0, J.useTransition)(m, {
                                key: o + u,
                                from: {
                                    left: `${E.x}rem`,
                                    top: `${E.y}rem`,
                                    opacity: 0,
                                    width: `${d.w}rem`,
                                    height: `${d.h}rem`,
                                },
                                initial: {
                                    left: `${E.x}rem`,
                                    top: `${E.y}rem`,
                                    opacity: 1,
                                    width: `${d.w}rem`,
                                    height: `${d.h}rem`,
                                },
                                enter: { opacity: 1, delay: 150, onRest: o === l ? i.nextStep : void 0 },
                                leave: { opacity: 0 },
                                config: { duration: 150, easing: Z.easeOutCubic },
                            }),
                            F = r.computes.isNextStepAvailable(),
                            D = r.computes.isHintStateVisible(K.Move, !0),
                            g = Ne(
                                () => {
                                    F && (i.nextStep(), G.hY.click(), D && i.hideCurrentHint(c));
                                },
                                [i, F, D],
                                $e,
                                !0,
                            ),
                            B = () => {
                                F && G.hY.sound(R.sounds.hangar_newyear_gamemode_highlight());
                            };
                        return (
                            ((e = {}) => {
                                (0, a.useEffect)(() => {
                                    const u = (u) => {
                                        if (!u.altKey && !u.ctrlKey && !u.shiftKey) {
                                            const t = e[u.keyCode];
                                            'function' == typeof t && t(u);
                                        }
                                    };
                                    return (
                                        window.addEventListener('keyup', u),
                                        () => {
                                            window.removeEventListener('keyup', u);
                                        }
                                    );
                                }, [e]);
                            })({ [W.n.ENTER]: g, [W.n.SPACE]: g }),
                            _((e, u) =>
                                n().createElement(
                                    J.animated.div,
                                    {
                                        className: C()('Content_base_f0', F && 'Content_base__available_32'),
                                        style: e,
                                        onClick: g,
                                        onMouseEnter: B,
                                    },
                                    D && n().createElement('div', { className: 'Content_circle_31' }),
                                    n().createElement(
                                        'div',
                                        {
                                            className: 'Content_icon_98',
                                            style: {
                                                backgroundImage: `url('${u}')`,
                                                '--mask-width': `${A.w}%`,
                                                '--mask-height': `${A.h}%`,
                                                '--mask-offset-x': `${A.x}%`,
                                                '--mask-offset-y': `${A.y}%`,
                                            },
                                        },
                                        F && n().createElement('div', { className: 'Content_clickArea_1e' }),
                                    ),
                                    D &&
                                        n().createElement(Ye, {
                                            text: R.strings.grinch_progression.gameBoardView.tutorial.move(),
                                            className: 'Content_miniatureHint_40',
                                        }),
                                ),
                            )
                        );
                    }),
                    Ke = (0, Q.Pi)(() => {
                        var e;
                        const u = null == (e = _e().model.computes.getSelectedCard()) ? void 0 : e.role;
                        return (0, J.useTransition)(u, {
                            from: { y: '-60rem', opacity: 0 },
                            initial: { y: '0rem', opacity: 1 },
                            enter: { y: '0rem', opacity: 1 },
                            leave: { y: '0rem', opacity: 0 },
                            config: { duration: 200, easing: Z.easeOutCirc },
                        })((e, u) =>
                            n().createElement(J.animated.div, { style: e }, n().createElement(Xe, { role: u })),
                        );
                    }),
                    Ze = R.strings.grinch_progression.gameBoardView.notepadMissions,
                    Qe = ({ role: e, currentTab: u }) =>
                        n().createElement(
                            'div',
                            { className: 'Header_base_c6' },
                            ((e, u) => {
                                switch (u) {
                                    case 'weekly':
                                        return Ze.title.$dyn(e);
                                    case 'random':
                                        return Ze.title.random();
                                    default:
                                        return '';
                                }
                            })(e, u),
                        ),
                    Je = [
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
                function eu(e) {
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
                const uu = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: z.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    tu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            m = e.decoratorId,
                            A = void 0 === m ? 0 : m,
                            _ = e.isEnabled,
                            F = void 0 === _ || _,
                            D = e.targetId,
                            g = void 0 === D ? 0 : D,
                            C = e.onShow,
                            B = e.onHide,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, Je);
                        const p = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(
                                () =>
                                    g ||
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
                                [g],
                            ),
                            b = (0, a.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (uu(t, A, { isMouseEvent: !0, on: !0, arguments: eu(n) }, v),
                                    C && C(),
                                    (p.current.isVisible = !0));
                            }, [t, A, n, v, C]),
                            f = (0, a.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        uu(t, A, { on: !1 }, v),
                                        p.current.isVisible && B && B(),
                                        (p.current.isVisible = !1));
                                }
                            }, [t, A, v, B]),
                            w = (0, a.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = p.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ),
                            F
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((y = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((p.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                          r && r(e),
                                                          y && y(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (f(), null == i || i(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === d && f(), null == o || o(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === d && f(), null == s || s(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : u
                        );
                        var y;
                    },
                    au = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function nu() {
                    return (
                        (nu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        nu.apply(null, arguments)
                    );
                }
                const ru = R.views.common.tooltip_window.simple_tooltip_content,
                    iu = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            i = e.note,
                            s = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, au);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: r, note: i, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, r, i, o]);
                        return n().createElement(
                            tu,
                            nu(
                                {
                                    contentId:
                                        ((E = null == o ? void 0 : o.hasHtmlContent),
                                        E ? ru.SimpleTooltipHtmlContent('resId') : ru.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
                const su = (e, u) => window.getComputedStyle(e, null).getPropertyValue(u),
                    ou = (e) => {
                        if (e.start >= e.end - 1) return e.start;
                        const u = Math.floor((e.start + e.end) / 2),
                            t = e.words.slice(0, u).join(' '),
                            a = Math.ceil(
                                ((e, u, t) => {
                                    const a = t.getContext('2d');
                                    return a
                                        ? ((a.font = `${su((n = u), 'font-weight')} ${su(n, 'font-size')} ${su(n, 'font-family')}`),
                                          a.measureText(e).width)
                                        : 0;
                                    var n;
                                })(t, e.element, e.canvas) / e.element.getBoundingClientRect().width,
                            );
                        return ou(a <= 1 ? Object.assign({}, e, { start: u }) : Object.assign({}, e, { end: u }));
                    },
                    lu = ['text', 'lines', 'className', 'onChange'];
                function cu() {
                    return (
                        (cu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        cu.apply(null, arguments)
                    );
                }
                const Eu = (0, a.forwardRef)(function (e, u) {
                    let t = e.text,
                        r = e.lines,
                        i = e.className,
                        s = e.onChange,
                        o = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (u.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, lu);
                    const l = (0, a.useRef)(null),
                        c = (0, a.useRef)(null),
                        E = (0, a.useState)(!1),
                        d = E[0],
                        m = E[1],
                        A = (0, a.useState)([]),
                        _ = A[0],
                        F = A[1],
                        D = (0, a.useState)(0),
                        g = D[0],
                        B = D[1],
                        h = (function () {
                            const e = (0, a.useRef)(0);
                            var u;
                            return (
                                (u = () => {
                                    window.cancelAnimationFrame(e.current);
                                }),
                                (0, a.useEffect)(() => u, []),
                                (0, a.useMemo)(
                                    () => ({
                                        run: (u) => {
                                            (window.cancelAnimationFrame(e.current),
                                                (e.current = window.requestAnimationFrame(() => {
                                                    e.current = window.requestAnimationFrame(() => {
                                                        (u(), (e.current = 0));
                                                    });
                                                })));
                                        },
                                        clear: () => {
                                            (window.cancelAnimationFrame(e.current), (e.current = 0));
                                        },
                                        get isRunning() {
                                            return 0 !== e.current;
                                        },
                                    }),
                                    [],
                                )
                            );
                        })(),
                        p = (0, a.useMemo)(() => document.createElement('canvas'), []),
                        v = (0, a.useCallback)(() => (c.current ? c.current.getBoundingClientRect().height : 0), []),
                        b = (0, a.useCallback)(
                            (e) => {
                                const u = v();
                                return e && u ? Math.round(e.scrollHeight / u) : 0;
                            },
                            [v],
                        ),
                        f = (0, a.useCallback)(() => {
                            if (b(l.current) <= r) return m(!1);
                            m(!0);
                            const e = t.split(' '),
                                u = Array.from(new Array(r)).reduce((u, t, a) => {
                                    if (!l.current) return u;
                                    const n = u.reduce((e, u) => e + u.length, 0),
                                        i = e.slice(n);
                                    if (a === r - 1) return (u.push(i), u);
                                    const s = ou({ start: 0, end: i.length, words: i, element: l.current, canvas: p });
                                    return (u.push(i.slice(0, s)), u);
                                }, []);
                            F(u);
                        }, [p, b, r, t]),
                        w = (0, a.useCallback)(() => {
                            h.run(() => {
                                (B(v() * r), f());
                            });
                        }, [v, r, h, f]);
                    var y, x;
                    return (
                        (0, a.useEffect)(w, [w]),
                        (y = w),
                        (x = [w]),
                        (0, a.useEffect)(
                            () => (window.addEventListener('resize', y), () => window.removeEventListener('resize', y)),
                            x,
                        ),
                        (0, a.useEffect)(() => {
                            null == s || s(d);
                        }, [s, d]),
                        n().createElement(
                            'div',
                            cu({}, o, {
                                ref: u,
                                className: C()(
                                    'MultilineOverflow_base_d9',
                                    i,
                                    d && 'MultilineOverflow_base__truncated_a1',
                                ),
                            }),
                            n().createElement(
                                'div',
                                { ref: l, className: 'MultilineOverflow_text_ce', style: { maxHeight: `${g}rem` } },
                                t,
                            ),
                            n().createElement(
                                'div',
                                { className: 'MultilineOverflow_truncatedContent_da' },
                                _.map((e, u) =>
                                    n().createElement(
                                        'div',
                                        { key: u, className: 'MultilineOverflow_line_51' },
                                        e.join(' '),
                                    ),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { ref: c, className: 'MultilineOverflow_singleLine_bb' },
                                R.strings.common.common.dot(),
                            ),
                        )
                    );
                });
                function du() {
                    return (
                        (du = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        du.apply(null, arguments)
                    );
                }
                const mu = (0, a.forwardRef)(function (e, u) {
                        const t = (0, a.useState)(!1),
                            r = t[0],
                            i = t[1];
                        return n().createElement(
                            iu,
                            { isEnabled: r, body: e.text },
                            n().createElement(Eu, du({}, e, { ref: u, onChange: i })),
                        );
                    }),
                    Au = {
                        base: 'MissionRenderer_base_8e',
                        condition: 'MissionRenderer_condition_b4',
                        description: 'MissionRenderer_description_ee',
                        priceWrapper: 'MissionRenderer_priceWrapper_08',
                        priceIcon: 'MissionRenderer_priceIcon_b7',
                        step: 'MissionRenderer_step_f8',
                        priceAmount: 'MissionRenderer_priceAmount_86',
                        progressbar: 'MissionRenderer_progressbar_99',
                    },
                    _u = ({ description: e, isHovered: u, prize: t, current: a, target: r }) =>
                        n().createElement(
                            'div',
                            { className: C()(Au.base, u && Au.base__hovered) },
                            n().createElement(
                                'div',
                                { className: Au.condition },
                                n().createElement(mu, { className: Au.description, text: e, lines: 2 }),
                                n().createElement('div', {
                                    className: Au.progressbar,
                                    style: { '--notepad-progressbar-done': (100 * a) / r + '%' },
                                }),
                                n().createElement('div', { className: Au.step }, `${a} / ${r}`),
                            ),
                            n().createElement(
                                'div',
                                { className: Au.priceWrapper },
                                n().createElement('div', { className: Au.priceIcon }),
                                n().createElement('div', { className: Au.priceAmount }, `+${t}`),
                            ),
                        );
                function Fu() {
                    return (
                        (Fu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Fu.apply(null, arguments)
                    );
                }
                const Du = (0, Q.Pi)(
                        ({ currentTab: e, isHovered: u, shownCompletedMissions: t, setShownCompletedMissions: a }) => {
                            const r = _e(),
                                i = r.model,
                                s = r.controls,
                                o = 'weekly' === e ? i.computes.getWeeklyMissions() : i.computes.getRandomMission();
                            return n().createElement(
                                'div',
                                { className: C()('MissionsList_base_e3', u && 'MissionsList_base__hovered_28') },
                                o.map((r, i) =>
                                    t.includes(r.questId) && r.current >= r.target
                                        ? null
                                        : n().createElement(
                                              'div',
                                              {
                                                  key: `${e}_${i}`,
                                                  className: C()(
                                                      'MissionsList_listItem_ad',
                                                      r.current >= r.target && 'MissionsList_listItem__done_cf',
                                                  ),
                                                  onAnimationEnd: () => {
                                                      (a([...t, r.questId]), s.completedMissionShown(r.questId));
                                                  },
                                              },
                                              n().createElement(_u, Fu({}, r, { isHovered: u })),
                                          ),
                                ),
                            );
                        },
                    ),
                    gu = R.strings.grinch_progression.gameBoardView.notepadMissions,
                    Cu = ({ type: e, isActive: u, onClick: t }) =>
                        n().createElement(
                            'div',
                            {
                                className: C()('Tab_base_0f', u && 'Tab_base__active_67'),
                                onClick: () => {
                                    u || null == t || t(e);
                                },
                                onMouseEnter: () => G.hY.sound(R.sounds.hangar_newyear_gamemode_highlight()),
                            },
                            gu.tabs.$dyn(e),
                        ),
                    Bu = ({ activeTab: e, onClick: u, tabs: t }) =>
                        n().createElement(
                            'div',
                            { className: C()('Tabs_base_52') },
                            t.map((t) => n().createElement(Cu, { key: t, type: t, isActive: e === t, onClick: u })),
                        ),
                    hu = R.strings.grinch_progression.gameBoardView,
                    pu = ['weekly', 'random'],
                    vu = [q.Assault, q.Carrier, q.Support],
                    bu = (0, Q.Pi)(({ isHovered: e }) => {
                        const u = _e().model,
                            t = (0, a.useState)([]),
                            r = t[0],
                            i = t[1],
                            s = u.root.get().isLastDay,
                            o = u.computes.getWeeklyMissions(),
                            l = u.computes.getRandomMission(),
                            c = u.computes.getActiveWeeklyMissions(),
                            E = u.computes.getActiveRandomMission(),
                            d = (0, a.useState)(o.length ? 'weekly' : 'random'),
                            m = d[0],
                            A = d[1],
                            _ = 'weekly' === m ? c.length : E.length,
                            F = 'weekly' === m ? o.length : l.length,
                            D = (0, J.useTransition)(m, {
                                enter: { from: { opacity: 0 }, to: { opacity: 1 } },
                                leave: { from: { opacity: 1 }, to: { opacity: 0 } },
                                config: { duration: 400 },
                            });
                        return n().createElement(
                            'div',
                            { className: C()('Content_base_38', e && 'Content_base__hovered_b8') },
                            D((t, a) =>
                                n().createElement(
                                    J.animated.div,
                                    { className: 'Content_animatedContent_8a', style: t },
                                    n().createElement(Qe, { role: u.computes.getSelectedVehicleRole(), currentTab: a }),
                                    n().createElement(
                                        'div',
                                        { className: 'Content_content_33' },
                                        n().createElement(Du, {
                                            currentTab: a,
                                            isHovered: e,
                                            shownCompletedMissions: r,
                                            setShownCompletedMissions: i,
                                        }),
                                        0 === _ &&
                                            n().createElement(
                                                'div',
                                                {
                                                    className: C()(
                                                        'Content_emptyMissionsNote_ad',
                                                        F > 0 && 0 === E.length && 'Content_emptyMissionsNote__done_f9',
                                                    ),
                                                },
                                                ((e, u, t) => {
                                                    const a = vu.filter((u) => e[u]);
                                                    return 'random' !== t || e.random
                                                        ? a.length > 1
                                                            ? be(hu.notepadMissions.twoTypesAvailable(), {
                                                                  T1: hu.tanks.name.$dyn(a[0]),
                                                                  T2: hu.tanks.name.$dyn(a[1]),
                                                              })
                                                            : a.length > 0
                                                              ? be(hu.notepadMissions.oneTypeAvailable(), {
                                                                    T3: hu.tanks.name.$dyn(a[0]),
                                                                })
                                                              : e.random
                                                                ? hu.notepadMissions.onlyRandomAvailable()
                                                                : u
                                                                  ? hu.notepadMissions.allMissionsCompletedNoTomorrow()
                                                                  : hu.notepadMissions.allMissionsCompleted()
                                                        : u
                                                          ? hu.notepadMissions.allMissionsCompletedNoTomorrow()
                                                          : hu.notepadMissions.allMissionsCompleted();
                                                })(u.computes.getMissionsStats(), s, a),
                                            ),
                                    ),
                                    E.length > 0 &&
                                        'random' === a &&
                                        n().createElement(
                                            'div',
                                            { className: 'Content_randomBattlesNote_ca' },
                                            hu.notepadMissions.randomBattlesNote(),
                                        ),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { className: 'Content_tabs_68' },
                                n().createElement(Bu, {
                                    activeTab: m,
                                    tabs: pu,
                                    onClick: (e) => {
                                        (A(e), G.hY.sound(R.sounds.hangar_newyear_hud_upper_click()));
                                    },
                                }),
                            ),
                        );
                    });
                function fu(e, u, t, a, n, r, i) {
                    try {
                        var s = e[r](i),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(a, n);
                }
                function wu(e) {
                    return function () {
                        var u = this,
                            t = arguments;
                        return new Promise(function (a, n) {
                            var r = e.apply(u, t);
                            function i(e) {
                                fu(r, a, n, i, s, 'next', e);
                            }
                            function s(e) {
                                fu(r, a, n, i, s, 'throw', e);
                            }
                            i(void 0);
                        });
                    };
                }
                const yu = (e) => {
                        const u = i.O.view.getScale(),
                            t = { rotateX: '32deg', scale: 0.65, rotateZ: '26deg' };
                        switch (e) {
                            case p.ExtraLarge:
                                return Object.assign({}, t, { rotateZ: '26.5deg', x: 285 * u, y: 375 * u });
                            case p.Large:
                                return Object.assign({}, t, { x: 115 * u, y: 190 * u });
                            case p.Medium:
                                return Object.assign({}, t, { x: 90 * u, y: 140 * u });
                            case p.Small:
                            case p.ExtraSmall:
                            default:
                                return Object.assign({}, t, { x: 70 * u, y: 155 * u });
                        }
                    },
                    xu = (e) => {
                        const u = i.O.view.getScale();
                        return e === p.ExtraLarge
                            ? { rotateX: '0deg', scale: 1, rotateZ: '0deg', x: 160 * u, y: 160 * u }
                            : { rotateX: '0deg', scale: 1, rotateZ: '0deg', x: 0, y: 0 };
                    },
                    Su = (0, Q.Pi)(({ isHovered: e, setIsHovered: u }) => {
                        const t = f().mediaSize,
                            r = (0, J.useSpring)(() => ({
                                config: { duration: 400, easing: Z.easeOutCubic },
                                from: e ? xu(t) : yu(t),
                            })),
                            s = r[0],
                            o = r[1];
                        return (
                            (0, a.useEffect)(() => {
                                (u(!1), o.set(yu(t)));
                            }, [t, o, u]),
                            n().createElement(
                                J.animated.div,
                                {
                                    style: s,
                                    className: 'NotepadMissions_base_fd',
                                    onMouseEnter: () => {
                                        var e;
                                        o.start({
                                            to:
                                                ((e = wu(function* (e) {
                                                    (yield e(
                                                        Object.assign(
                                                            {},
                                                            ((e) => {
                                                                const u = i.O.view.getScale(),
                                                                    t = {
                                                                        rotateX: '10deg',
                                                                        scale: 0.9,
                                                                        rotateZ: '8deg',
                                                                    };
                                                                switch (e) {
                                                                    case p.ExtraLarge:
                                                                        return Object.assign({}, t, {
                                                                            x: 245.5 * u,
                                                                            y: 272.5 * u,
                                                                        });
                                                                    case p.Large:
                                                                        return Object.assign({}, t, {
                                                                            x: 34.5 * u,
                                                                            y: 57 * u,
                                                                        });
                                                                    case p.Medium:
                                                                        return Object.assign({}, t, {
                                                                            x: 27 * u,
                                                                            y: 42 * u,
                                                                        });
                                                                    case p.Small:
                                                                    case p.ExtraSmall:
                                                                    default:
                                                                        return Object.assign({}, t, {
                                                                            x: 21 * u,
                                                                            y: 46.5 * u,
                                                                        });
                                                                }
                                                            })(t),
                                                            {
                                                                config: { duration: 0 },
                                                                onStart: () => {
                                                                    (G.hY.sound(
                                                                        R.sounds.hangar_newyear_gamemode_card_hover_long(),
                                                                    ),
                                                                        u(!0));
                                                                },
                                                            },
                                                        ),
                                                    ),
                                                        yield e(
                                                            Object.assign({}, xu(t), {
                                                                config: { duration: 400, easing: Z.easeOutCirc },
                                                            }),
                                                        ));
                                                })),
                                                function (u) {
                                                    return e.apply(this, arguments);
                                                }),
                                        });
                                    },
                                    onMouseLeave: () => {
                                        var e;
                                        o.start({
                                            to:
                                                ((e = wu(function* (e) {
                                                    (yield e(
                                                        Object.assign(
                                                            {},
                                                            ((e) => {
                                                                const u = i.O.view.getScale(),
                                                                    t = {
                                                                        rotateX: '30deg',
                                                                        scale: 0.68,
                                                                        rotateZ: '25deg',
                                                                    };
                                                                switch (e) {
                                                                    case p.ExtraLarge:
                                                                        return Object.assign({}, t, {
                                                                            x: 270 * u,
                                                                            y: 356 * u,
                                                                        });
                                                                    case p.Large:
                                                                        return Object.assign({}, t, {
                                                                            x: 109 * u,
                                                                            y: 180 * u,
                                                                        });
                                                                    case p.Medium:
                                                                        return Object.assign({}, t, {
                                                                            x: 85 * u,
                                                                            y: 133 * u,
                                                                        });
                                                                    case p.Small:
                                                                    case p.ExtraSmall:
                                                                    default:
                                                                        return Object.assign({}, t, {
                                                                            x: 66 * u,
                                                                            y: 147 * u,
                                                                        });
                                                                }
                                                            })(t),
                                                            {
                                                                onStart: () => {
                                                                    G.hY.sound(
                                                                        R.sounds.hangar_newyear_gamemode_card_hover_back(),
                                                                    );
                                                                },
                                                                config: { duration: 400, easing: Z.easeInCirc },
                                                            },
                                                        ),
                                                    ),
                                                        yield e(
                                                            Object.assign({}, yu(t), {
                                                                config: { duration: 0 },
                                                                onRest: () => {
                                                                    u(!1);
                                                                },
                                                            }),
                                                        ));
                                                })),
                                                function (u) {
                                                    return e.apply(this, arguments);
                                                }),
                                        });
                                    },
                                },
                                n().createElement(bu, { isHovered: e }),
                            )
                        );
                    }),
                    Tu = 200 / 3;
                let ku, Mu, Ou;
                (!(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(ku || (ku = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(Mu || (Mu = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(Ou || (Ou = {})));
                class Ru extends n().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? z.B3.GOLD : z.B3.INTEGRAL;
                        const u = z.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Ru.defaultProps = { format: 'integral' };
                const Lu = {
                    base: 'PriceTag_base_11',
                    base__size48: 'PriceTag_base__size48_eb',
                    base__size64: 'PriceTag_base__size64_81',
                    base__size80: 'PriceTag_base__size80_83',
                    base__wide: 'PriceTag_base__wide_ff',
                };
                let Pu;
                !(function (e) {
                    ((e[(e.Small = 48)] = 'Small'), (e[(e.Medium = 64)] = 'Medium'), (e[(e.Large = 80)] = 'Large'));
                })(Pu || (Pu = {}));
                const Iu = ({ price: e, size: u, className: t, scaleCoef: a = 1 }) => {
                        const r = e > 999 ? String(999).slice(1) + '+' : e,
                            i = String(e).length > 2;
                        return n().createElement(
                            'div',
                            {
                                className: C()(Lu.base, Lu[`base__size${u}`], i && Lu.base__wide, t),
                                style: { '--scale-coef': a },
                            },
                            r,
                        );
                    },
                    Nu = 'R.images.grinch_progression.gui.maps.icons.game_board.rewardCard',
                    Hu = (e, u, t = !1) => {
                        if (t) {
                            const t =
                                    u === Y.Common
                                        ? e >= p.Large
                                            ? [256, 256]
                                            : e >= p.Medium
                                              ? [180, 180]
                                              : [96, 96]
                                        : e >= p.Large
                                          ? [400, 560]
                                          : e >= p.Medium
                                            ? [320, 450]
                                            : [240, 340],
                                a = t[0],
                                n = t[1];
                            return { backgroundImage: `url(${Nu}.back_${u}_${u === Y.Common ? a : `${a}x${n}`})` };
                        }
                        if (u === Y.Common)
                            switch (e) {
                                case p.ExtraLarge:
                                    return { backgroundImage: `url(${Nu}.back_common_96)` };
                                case p.Large:
                                case p.Medium:
                                case p.Small:
                                case p.ExtraSmall:
                                default:
                                    return { backgroundImage: `url(${Nu}.back_common_60)` };
                            }
                        switch (e) {
                            case p.ExtraLarge:
                            case p.Large:
                            case p.Medium:
                            case p.Small:
                            case p.ExtraSmall:
                        }
                        return { backgroundImage: `url(${Nu}.back_${u}_88x100)` };
                    },
                    $u = (e) => (e >= p.Large ? Pu.Medium : Pu.Small),
                    Uu = (e, u, t = !1) =>
                        t
                            ? u === Y.Common && e < p.Small
                                ? 0.75
                                : 1
                            : e >= p.Large
                              ? 0.65
                              : e === p.Medium
                                ? 0.85
                                : 0.75,
                    Gu = (e, u, t = !1) =>
                        t
                            ? [
                                  { scale: 0.8, rotateX: '20deg', rotateZ: `${ze[e - 1]}deg` },
                                  { scale: 1.1, rotateX: '0deg', rotateZ: '0deg' },
                              ]
                            : [{ scale: 0.8, rotateX: '20deg', rotateZ: `${ze[e - 1]}deg` }],
                    Wu =
                        (e, u) =>
                        (...t) => {
                            if (e(...t)) return u(...t);
                        };
                let zu;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(zu || (zu = {}));
                const ju = {
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
                    Vu = [
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
                function qu() {
                    return (
                        (qu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        qu.apply(null, arguments)
                    );
                }
                const Yu = (e) => {
                    let u = e.type,
                        t = e.children,
                        r = e.className,
                        i = e.classNames,
                        s = e.disabled,
                        o = void 0 !== s && s,
                        l = e.isVisibleLabel,
                        c = void 0 !== l && l,
                        E = e.soundHover,
                        d = void 0 === E ? R.sounds.highlight() : E,
                        m = e.soundClick,
                        A = void 0 === m ? R.sounds.play() : m,
                        _ = e.size,
                        F = void 0 === _ ? 'normal' : _,
                        D = e.onClick,
                        g = e.onMouseEnter,
                        B = e.onMouseLeave,
                        h = e.onMouseDown,
                        p = e.onMouseUp,
                        v = e.onFocus,
                        b = e.onBlur,
                        f = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (u.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, Vu);
                    const w = (0, a.useState)(!1),
                        y = w[0],
                        x = w[1],
                        S = (0, a.useState)(!1),
                        T = S[0],
                        k = S[1],
                        M = (0, a.useRef)(null),
                        O = () => !1 === o,
                        L = (e) => O() && ((e) => e.button === zu.LEFT)(e),
                        P = Wu(O, (e) => {
                            null == D || D(e);
                        }),
                        N = Wu(L, (e) => {
                            (x(!0), null == h || h(e), A && I(A));
                        }),
                        H = Wu(L, (e) => {
                            (x(!1), null == p || p(e));
                        }),
                        $ = Wu(O, (e) => {
                            (k(!0), null == g || g(e), d && I(d));
                        }),
                        U = Wu(O, (e) => {
                            null == v || v(e);
                        }),
                        G = Wu(O, (e) => {
                            null == b || b(e);
                        });
                    return n().createElement(
                        'div',
                        qu(
                            {
                                ref: M,
                                className: C()(
                                    ju.base,
                                    o && ju.base__disabled,
                                    c && ju.base__visibleLabel,
                                    !o && y && ju.base__mouseDown,
                                    !o && T && ju.base__hovered,
                                    r,
                                ),
                                onClick: P,
                                onMouseEnter: $,
                                onMouseLeave: (e) => {
                                    (k(!1), x(!1), null == B || B(e));
                                },
                                onMouseDown: N,
                                onMouseUp: H,
                                onFocus: U,
                                onBlur: G,
                            },
                            f,
                        ),
                        n().createElement('div', {
                            className: C()(ju.icon, ju[`icon__${F}`], ju[`icon__${u}`], null == i ? void 0 : i.icon),
                        }),
                        t &&
                            n().createElement(
                                'div',
                                { className: C()(ju.label, ju[`label__${F}`], null == i ? void 0 : i.label) },
                                t,
                            ),
                    );
                };
                let Xu, Ku, Zu, Qu, Ju, et, ut, tt;
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
                        (e.Entitlements = 'entitlements'),
                        (e.PremiumUniversal = 'premium_universal'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Crystal = 'crystal'),
                        (e.FreeXp = 'freeXP'),
                        (e.Premium = 'premium'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.BattlePassPoints = 'battlePassPoints'),
                        (e.BattlePassSelectToken = 'battlePassSelectToken'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.NewYearGuestD = 'ny_dog'),
                        (e.EquipCoin = 'equipCoin'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.LootBox = 'lootBox'),
                        (e.BrCoin = 'brcoin'));
                })(Xu || (Xu = {})),
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
                    })(Ku || (Ku = {})),
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
                    })(Zu || (Zu = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Qu || (Qu = {})),
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
                    })(Ju || (Ju = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(et || (et = {})),
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
                    })(ut || (ut = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(tt || (tt = {})));
                const at = {
                        base: 'RewardImage_base_25',
                        base__cardHovered: 'RewardImage_base__cardHovered_b7',
                        base__commonRarity: 'RewardImage_base__commonRarity_19',
                        image: 'RewardImage_image_e7',
                        base__style: 'RewardImage_base__style_e2',
                        previewButtonHolder: 'RewardImage_previewButtonHolder_c1',
                        previewButton: 'RewardImage_previewButton_2f',
                    },
                    nt = (e, u, t, a, n, r = !1, i = '') => {
                        if (t === Y.Common) {
                            const u = r ? (a >= p.Large ? Zu.S232x174 : a >= p.Medium ? Zu.S180x135 : Zu.Big) : Zu.Big;
                            return 'premium_plus' === e
                                ? `R.images.gui.maps.icons.quests.bonuses.${u}.${e}_${n}`
                                : `R.images.gui.maps.icons.quests.bonuses.${u}.${e}`;
                        }
                        const s = r ? (a >= p.Large ? 's360x270' : Zu.S180x135) : a >= p.Medium ? Zu.S180x135 : Zu.Big,
                            o = 'style' === e && 's360x270' === s ? Zu.S400x300 : s;
                        return i && 'attachment' === e
                            ? R.images.gui.maps.vehicles.attachments.$dyn(o).$dyn(i) ||
                                  `R.images.gui.maps.icons.quests.bonuses.${o}.attachment`
                            : R.images.gui.maps.icons.quests.bonuses.$dyn(o).$dyn(e);
                    },
                    rt = (0, Q.Pi)(
                        ({ id: e, name: u, rarity: t, className: a, isCardHovered: r, amount: i, iconName: s }) => {
                            const o = f().mediaSize,
                                l = _e().controls;
                            return n().createElement(
                                'div',
                                {
                                    className: C()(
                                        at.base,
                                        r && at.base__cardHovered,
                                        'style' === u && at.base__style,
                                        at[`base__${t}Rarity`],
                                        a,
                                    ),
                                },
                                n().createElement('div', {
                                    className: at.image,
                                    style: { backgroundImage: `url(${nt(u, 0, t, o, i, r, s)})` },
                                }),
                                t !== Y.Common &&
                                    'style' === u &&
                                    n().createElement(
                                        'div',
                                        { className: at.previewButtonHolder },
                                        n().createElement(Yu, {
                                            className: at.previewButton,
                                            onClick: (u) => {
                                                (u.stopPropagation(), l.openStylePreview(e));
                                            },
                                            soundHover: R.sounds.hangar_newyear_gamemode_highlight(),
                                            type: 'preview',
                                            size: o >= p.Medium ? 'normal' : 'small',
                                        }),
                                    ),
                            );
                        },
                    ),
                    it = {
                        base: 'Content_base_ea',
                        base__hovered: 'Content_base__hovered_a3',
                        base__epicRarity: 'Content_base__epicRarity_43',
                        base__uncommonRarity: 'Content_base__uncommonRarity_b4',
                        base__rareRarity: 'Content_base__rareRarity_66',
                        bg: 'Content_bg_78',
                        priceTagMix: 'Content_priceTagMix_fb',
                        claimedIcon: 'Content_claimedIcon_18',
                        base__claimedState: 'Content_base__claimedState_e9',
                        base__commonRarity: 'Content_base__commonRarity_91',
                        rewardImageMix: 'Content_rewardImageMix_cb',
                        rarityIcon: 'Content_rarityIcon_b7',
                        darkeningEffect: 'Content_darkeningEffect_78',
                        base__notAvailableState: 'Content_base__notAvailableState_04',
                        textHolder: 'Content_textHolder_5f',
                        title: 'Content_title_64',
                        rewardTypeLabel: 'Content_rewardTypeLabel_18',
                        description: 'Content_description_1a',
                        amount: 'Content_amount_5b',
                    },
                    st = R.strings.grinch_progression.gameBoardView.rewardCard,
                    ot = R.strings.vehicle_customization.customization.tooltip.attachmentEarn(),
                    lt = ({
                        id: e,
                        name: u,
                        price: t,
                        amount: a,
                        rarity: r,
                        state: i,
                        label: s,
                        isHovered: o,
                        iconName: l,
                        description: c,
                    }) => {
                        const E = f().mediaSize,
                            d = ((e, u) =>
                                'attachment' === e
                                    ? st.rewardTypeLabel.attachment.$dyn(u)
                                    : 'style' === e
                                      ? st.rewardTypeLabel.style()
                                      : void 0)(u, r),
                            m = o && (c || 'attachment' === u);
                        return n().createElement(
                            'div',
                            {
                                className: C()(
                                    it.base,
                                    o && it.base__hovered,
                                    it[`base__${i}State`],
                                    it[`base__${r}Rarity`],
                                ),
                            },
                            n().createElement('div', { className: it.bg, style: Object.assign({}, Hu(E, r, o)) }),
                            [Y.Rare, Y.Epic].includes(r) &&
                                'attachment' === u &&
                                n().createElement('div', { className: it.rarityIcon }),
                            n().createElement(rt, {
                                className: it.rewardImageMix,
                                id: e,
                                name: u,
                                rarity: r,
                                isCardHovered: o,
                                iconName: l,
                                amount: a,
                            }),
                            n().createElement('div', {
                                className: it.darkeningEffect,
                                style: { transitionTimingFunction: `${Z.easeOutCirc}`, transitionDuration: '100ms' },
                            }),
                            n().createElement('div', { className: it.claimedIcon }),
                            n().createElement(Iu, {
                                size: $u(E),
                                price: t,
                                className: it.priceTagMix,
                                scaleCoef: Uu(E, r, o),
                            }),
                            r !== Y.Common &&
                                n().createElement(
                                    'div',
                                    { className: it.textHolder },
                                    s && n().createElement('div', { className: it.title }, s),
                                    d && n().createElement('div', { className: it.rewardTypeLabel }, d),
                                    m &&
                                        n().createElement(
                                            'div',
                                            { className: it.description },
                                            'attachment' !== u || c ? c : ot,
                                        ),
                                ),
                            r === Y.Common &&
                                a > 1 &&
                                n().createElement(
                                    'div',
                                    { className: it.amount },
                                    n().createElement(Ru, { value: a, format: u === Mu.gold ? 'gold' : 'integral' }),
                                ),
                        );
                    },
                    ct = {
                        base: 'RewardCard_base_ba',
                        base__availableState: 'RewardCard_base__availableState_e8',
                        base__epicRarity: 'RewardCard_base__epicRarity_5a',
                        base__uncommonRarity: 'RewardCard_base__uncommonRarity_c1',
                        base__rareRarity: 'RewardCard_base__rareRarity_43',
                    };
                function Et(e, u, t, a, n, r, i) {
                    try {
                        var s = e[r](i),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(a, n);
                }
                function dt(e) {
                    return function () {
                        var u = this,
                            t = arguments;
                        return new Promise(function (a, n) {
                            var r = e.apply(u, t);
                            function i(e) {
                                Et(r, a, n, i, s, 'next', e);
                            }
                            function s(e) {
                                Et(r, a, n, i, s, 'throw', e);
                            }
                            i(void 0);
                        });
                    };
                }
                const mt = (0, Q.Pi)(
                        ({
                            step: e,
                            id: u,
                            name: t,
                            price: r,
                            amount: i,
                            rarity: s,
                            maxZIndex: o,
                            label: l,
                            state: c,
                            iconName: E,
                            description: d,
                        }) => {
                            const m = f().mediaSize,
                                A = _e(),
                                _ = A.model,
                                F = A.controls,
                                D = _.root.get().hintState,
                                g = (0, a.useState)(!1),
                                B = g[0],
                                h = g[1],
                                p = o,
                                v = p - 1,
                                b = v - 1,
                                w = b - 2,
                                y = (0, J.useSpring)(() => ({ from: Gu(e)[0], config: { easing: Z.easeOutCirc } })),
                                x = y[0],
                                S = y[1],
                                T = (0, J.useSpring)(() => ({
                                    from: { zIndex: w },
                                    config: { easing: Z.easeOutCirc },
                                })),
                                k = T[0],
                                M = T[1];
                            (0, a.useEffect)(() => {
                                S.start({ to: Gu(e), config: { duration: 0 } });
                            }, [S, e, s, m]);
                            const O = _.computes.isHintStateVisible(K.Move, !0),
                                L = Ne(
                                    () => {
                                        c === X.Available && (F.nextStep(), G.hY.click(), O && F.hideCurrentHint(D));
                                    },
                                    [F, D, c, O],
                                    $e,
                                    !0,
                                ),
                                P = We[m][e - 1],
                                I = P.x,
                                N = P.y;
                            return n().createElement(
                                J.animated.div,
                                {
                                    className: C()(
                                        ct.base,
                                        B && ct.base__hovered,
                                        ct[`base__${c}State`],
                                        ct[`base__${s}Rarity`],
                                    ),
                                    onMouseEnter: () => {
                                        var u;
                                        M.start({
                                            to:
                                                ((u = dt(function* (e) {
                                                    (yield e({ zIndex: b, config: { duration: Tu } }),
                                                        yield e({ zIndex: v, config: { duration: Tu } }),
                                                        yield e({ zIndex: p, config: { duration: Tu } }));
                                                })),
                                                function (e) {
                                                    return u.apply(this, arguments);
                                                }),
                                            onChange: ({ value: u }) => {
                                                u.zIndex >= p &&
                                                    (h(!0),
                                                    S.start({
                                                        to: Gu(e, 0, !0),
                                                        config: { duration: 400 },
                                                        onStart: () => {
                                                            G.hY.sound(
                                                                R.sounds.hangar_newyear_gamemode_card_hover_long(),
                                                            );
                                                        },
                                                    }));
                                            },
                                        });
                                    },
                                    onMouseLeave: () => {
                                        var u;
                                        (S.start({
                                            to: Gu(e, 0, !1),
                                            config: { duration: 200 },
                                            onStart: () => {
                                                G.hY.sound(R.sounds.hangar_newyear_gamemode_card_hover_back());
                                            },
                                        }),
                                            M.start({
                                                to:
                                                    ((u = dt(function* (e) {
                                                        (yield e({ zIndex: v, config: { duration: Tu } }),
                                                            yield e({ zIndex: b, config: { duration: Tu } }),
                                                            yield e({ zIndex: w, config: { duration: Tu } }));
                                                    })),
                                                    function (e) {
                                                        return u.apply(this, arguments);
                                                    }),
                                                onStart: () => {
                                                    h(!1);
                                                },
                                            }));
                                    },
                                    onClick: L,
                                    style: Object.assign({}, x, k, { left: `${I}rem`, top: `${N}rem` }),
                                },
                                n().createElement(lt, {
                                    isHovered: B,
                                    rarity: s,
                                    name: t,
                                    label: l,
                                    id: u,
                                    amount: i,
                                    price: r,
                                    state: c,
                                    iconName: E,
                                    description: d,
                                }),
                            );
                        },
                    ),
                    At = (e, u, t) => {
                        switch (u) {
                            case p.ExtraLarge:
                                return {
                                    backgroundImage: `url(${R.images.grinch_progression.gui.maps.icons.game_board.tankCard.abilities.c_64x64.$dyn(e)})`,
                                };
                            case p.Large:
                                return {
                                    backgroundImage: `url(${R.images.grinch_progression.gui.maps.icons.game_board.tankCard.abilities.c_48x48.$dyn(e)})`,
                                };
                            case p.Medium:
                                return t
                                    ? {
                                          backgroundImage: `url(${R.images.grinch_progression.gui.maps.icons.game_board.tankCard.abilities.c_48x48.$dyn(e)})`,
                                      }
                                    : {
                                          backgroundImage: `url(${R.images.grinch_progression.gui.maps.icons.game_board.tankCard.abilities.c_32x32.$dyn(e)})`,
                                      };
                            default:
                                return {
                                    backgroundImage: `url(${R.images.grinch_progression.gui.maps.icons.game_board.tankCard.abilities.c_32x32.$dyn(e)})`,
                                };
                        }
                    },
                    _t = ({ intCD: e, resourceKey: u, keyString: t, isHovered: a }) => {
                        const r = f().mediaSize;
                        return n().createElement(
                            tu,
                            {
                                contentId: R.views.grinch_progression.lobby.tooltips.AbilityTooltipView('resId'),
                                args: { intCD: e, keyString: t },
                            },
                            n().createElement(
                                'div',
                                {
                                    className: C()('Ability_base_68', a && 'Ability_base__hovered_63'),
                                    onMouseEnter: G.hY.highlight,
                                },
                                n().createElement('div', { className: 'Ability_icon_8d', style: At(u, r, a) }),
                            ),
                        );
                    },
                    Ft = {
                        base: 'Content_base_37',
                        base__hovered: 'Content_base__hovered_a1',
                        base__selected: 'Content_base__selected_4f',
                        base__highlighted: 'Content_base__highlighted_ee',
                        contentWrapper: 'Content_contentWrapper_57',
                        insideFrame: 'Content_insideFrame_e4',
                        outsideFrame: 'Content_outsideFrame_53',
                        ability: 'Content_ability_ec',
                        tankImageWrapper: 'Content_tankImageWrapper_09',
                        tankImage: 'Content_tankImage_ac',
                        keyFeature: 'Content_keyFeature_76',
                        bottomText: 'Content_bottomText_8f',
                        tankName: 'Content_tankName_69',
                        description: 'Content_description_07',
                        bonusPoint: 'Content_bonusPoint_61',
                        cover: 'Content_cover_a6',
                        reason: 'Content_reason_28',
                        reason__inBattle: 'Content_reason__inBattle_da',
                        reason__inPlatoon: 'Content_reason__inPlatoon_51',
                    };
                function Dt() {
                    return (
                        (Dt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Dt.apply(null, arguments)
                    );
                }
                const gt = R.strings.grinch_progression.gameBoardView.tanks,
                    Ct = (e, u) => {
                        switch (u) {
                            case p.ExtraLarge:
                                return {
                                    backgroundImage: `url(${R.images.grinch_progression.gui.maps.icons.game_board.tankCard.tanks.extraLarge.$dyn(e)})`,
                                };
                            case p.Large:
                                return {
                                    backgroundImage: `url(${R.images.grinch_progression.gui.maps.icons.game_board.tankCard.tanks.large.$dyn(e)})`,
                                };
                            case p.Medium:
                                return {
                                    backgroundImage: `url(${R.images.grinch_progression.gui.maps.icons.game_board.tankCard.tanks.medium.$dyn(e)})`,
                                };
                            default:
                                return {
                                    backgroundImage: `url(${R.images.grinch_progression.gui.maps.icons.game_board.tankCard.tanks.small.$dyn(e)})`,
                                };
                        }
                    },
                    Bt = ({
                        resourceKey: e,
                        role: u,
                        vehicleState: t,
                        abilities: a,
                        anyInPlatoon: r,
                        isHovered: i,
                        bonusPoints: s,
                        isSelected: o,
                        isHighlighted: l,
                    }) => {
                        const c = f().mediaSize,
                            E = r || t !== oe.Default;
                        return n().createElement(
                            'div',
                            {
                                className: C()(
                                    Ft.base,
                                    i && Ft.base__hovered,
                                    o && Ft.base__selected,
                                    l && Ft.base__highlighted,
                                ),
                            },
                            n().createElement(
                                'div',
                                { className: Ft.contentWrapper },
                                n().createElement(
                                    'div',
                                    { className: Ft.ability },
                                    a.map((e, u) => n().createElement(_t, Dt({ key: u }, e, { isHovered: i }))),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Ft.tankImageWrapper },
                                    n().createElement(
                                        'div',
                                        { className: Ft.tankImage, style: Ct(e, c) },
                                        n().createElement('div', { className: Ft.keyFeature }, gt.keyFeature.$dyn(u)),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Ft.bottomText },
                                    n().createElement('div', { className: Ft.tankName }, gt.name.$dyn(u)),
                                    i &&
                                        n().createElement(mu, {
                                            className: Ft.description,
                                            lines: 2,
                                            text: gt.description.$dyn(u),
                                        }),
                                ),
                            ),
                            E &&
                                n().createElement(
                                    'div',
                                    { className: Ft.cover },
                                    t !== oe.Default &&
                                        n().createElement(
                                            'div',
                                            { className: C()(Ft.reason, Ft[`reason__${t}`]) },
                                            gt.states.$dyn(t),
                                        ),
                                ),
                            l &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: Ft.insideFrame }),
                                    n().createElement('div', { className: Ft.outsideFrame }),
                                ),
                            Boolean(s) && n().createElement('div', { className: Ft.bonusPoint }, `+${s}`),
                        );
                    };
                function ht(e, u, t, a, n, r, i) {
                    try {
                        var s = e[r](i),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(a, n);
                }
                function pt(e) {
                    return function () {
                        var u = this,
                            t = arguments;
                        return new Promise(function (a, n) {
                            var r = e.apply(u, t);
                            function i(e) {
                                ht(r, a, n, i, s, 'next', e);
                            }
                            function s(e) {
                                ht(r, a, n, i, s, 'throw', e);
                            }
                            i(void 0);
                        });
                    };
                }
                const vt = 200 / 3,
                    bt = { rotateX: '20deg', scale: 0.8 },
                    ft = { rotateX: '20deg', scale: 0.9 },
                    wt = { rotateX: '0deg', scale: 1 },
                    yt = (0, Q.Pi)(
                        ({
                            intCD: e,
                            resourceKey: u,
                            vehicleState: t,
                            role: r,
                            abilities: i,
                            bonusPoints: s,
                            isSelected: o,
                            onHover: l,
                            classNames: c,
                        }) => {
                            const E = _e(),
                                d = E.model,
                                m = E.controls,
                                A = d.root.get().hintState,
                                _ = f().mediaSize,
                                F = d.computes.anyInPlatoon(),
                                D = (0, a.useState)(!1),
                                g = D[0],
                                B = D[1],
                                h = (0, J.useSpring)(() => ({
                                    config: { duration: 200, easing: Z.easeInCubic },
                                    from: p.ExtraLarge === _ ? ft : bt,
                                })),
                                v = h[0],
                                b = h[1],
                                w = (0, J.useSpring)(() => ({
                                    from: { zIndex: 1 },
                                    config: { easing: Z.easeInCubic },
                                })),
                                y = w[0],
                                x = w[1],
                                S = d.computes.isHintStateVisible(K.Vehicle, !0),
                                T = d.computes.isHintStateVisible(K.Vehicle, !1),
                                k = (0, a.useCallback)(
                                    (e) => {
                                        (B(e), null == l || l(e));
                                    },
                                    [l],
                                );
                            return (
                                (0, a.useEffect)(() => {
                                    (k(!1), b.set(p.ExtraLarge === _ ? ft : bt));
                                }, [_, b, k]),
                                n().createElement(
                                    J.animated.div,
                                    {
                                        style: Object.assign({}, v, y),
                                        className: C()(
                                            'TankCard_base_09',
                                            null == c ? void 0 : c.base,
                                            !o && g && !F && 'TankCard_base__hovered_f7',
                                        ),
                                        onClick: () => {
                                            (F || o || (m.changeTank(e), G.hY.click()), T && m.hideCurrentHint(A));
                                        },
                                        onMouseEnter: () => {
                                            var e;
                                            (G.hY.sound(R.sounds.hangar_newyear_gamemode_card_hover_short()),
                                                b.start({ to: wt, delay: 100 }),
                                                x.start({
                                                    to:
                                                        ((e = pt(function* (e) {
                                                            (yield e({ zIndex: 2, config: { duration: vt } }),
                                                                yield e({ zIndex: 3, config: { duration: vt } }),
                                                                yield e({ zIndex: 4, config: { duration: vt } }));
                                                        })),
                                                        function (u) {
                                                            return e.apply(this, arguments);
                                                        }),
                                                    onChange: ({ value: e }) => {
                                                        e.zIndex >= 4 && k(!0);
                                                    },
                                                }));
                                        },
                                        onMouseLeave: () => {
                                            var e;
                                            (G.hY.sound(R.sounds.hangar_newyear_gamemode_card_hover_back()),
                                                k(!1),
                                                b.start({ to: p.ExtraLarge === _ ? ft : bt }),
                                                x.start({
                                                    to:
                                                        ((e = pt(function* (e) {
                                                            (yield e({ zIndex: 3, config: { duration: vt } }),
                                                                yield e({ zIndex: 2, config: { duration: vt } }),
                                                                yield e({ zIndex: 1, config: { duration: vt } }));
                                                        })),
                                                        function (u) {
                                                            return e.apply(this, arguments);
                                                        }),
                                                }));
                                        },
                                    },
                                    n().createElement(Bt, {
                                        resourceKey: u,
                                        vehicleState: t,
                                        abilities: i,
                                        anyInPlatoon: F,
                                        role: r,
                                        isHovered: g,
                                        bonusPoints: s,
                                        isSelected: o,
                                        isHighlighted: S,
                                    }),
                                )
                            );
                        },
                    );
                function xt() {
                    return (
                        (xt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        xt.apply(null, arguments)
                    );
                }
                const St = (0, Q.Pi)(() => {
                    const e = _e().model,
                        u = (0, a.useState)(!1),
                        t = u[0],
                        r = u[1],
                        i = (0, a.useCallback)((e) => {
                            r(e);
                        }, []);
                    return n().createElement(
                        'div',
                        { className: 'TankCardList_base_e7' },
                        e.computes
                            .getTankCards()
                            .map((e, u) =>
                                n().createElement(
                                    yt,
                                    xt({ key: u }, e, { onHover: i, classNames: { base: 'TankCardList_card_7a' } }),
                                ),
                            ),
                        e.computes.isHintStateVisible(K.Vehicle, !0) &&
                            !t &&
                            n().createElement(Ye, {
                                text: R.strings.grinch_progression.gameBoardView.tutorial.vehicle(),
                                className: 'TankCardList_tutorialHint_81',
                            }),
                    );
                });
                function Tt() {
                    return (
                        (Tt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Tt.apply(null, arguments)
                    );
                }
                const kt = (0, Q.Pi)(() => {
                        var e;
                        const u = _e(),
                            t = u.model,
                            r = u.controls,
                            i = t.root.get(),
                            s = i.currentChapter,
                            o = i.hintState,
                            l = null != (e = Le(s)) ? e : s,
                            c = (0, a.useState)(!1),
                            E = c[0],
                            d = c[1],
                            m = f().mediaSize,
                            A = Ce(m),
                            _ = A[0],
                            F = A[1],
                            D = Ne((e) => r.switchChapter(e), [r.switchChapter], $e, !0),
                            g = t.computes.isHintStateVisible(K.Missions, !1),
                            B = (0, a.useMemo)(
                                () => t.computes.getRewards().length + t.computes.getTankCards().length + 2,
                                [t.computes],
                            ),
                            h = { '--max-z-index': B };
                        return n().createElement(
                            'div',
                            {
                                className: 'GameField_base_9c',
                                style: Object.assign({ width: `${_}rem`, height: `${F}rem` }, h),
                            },
                            !E && n().createElement('div', { className: 'GameField_idleNotepad_6f' }),
                            t.computes
                                .getRewards()
                                .map((e, u) => n().createElement(mt, Tt({}, e, { key: u, maxZIndex: B }))),
                            !t.computes.isLastChapter(l) &&
                                n().createElement('div', {
                                    className: 'GameField_continueSign_c2',
                                    onClick: () => D(s + 1),
                                    onMouseEnter: () => G.hY.sound(R.sounds.hangar_newyear_gamemode_highlight()),
                                }),
                            n().createElement(
                                'div',
                                {
                                    className: C()('GameField_notepad_98', E && 'GameField_notepad__hovered_b3'),
                                    onMouseEnter: () => g && r.hideCurrentHint(o),
                                },
                                n().createElement(Su, { isHovered: E, setIsHovered: d }),
                            ),
                            n().createElement(
                                'div',
                                { className: 'GameField_cardList_f4' },
                                n().createElement(St, null),
                            ),
                            n().createElement(
                                'div',
                                { className: 'GameField_miniature_a6' },
                                n().createElement(Ke, null),
                            ),
                            g &&
                                n().createElement(Ye, {
                                    text: R.strings.grinch_progression.gameBoardView.tutorial.missions(),
                                    className: 'GameField_missionsHint_6d',
                                }),
                        );
                    }),
                    Mt = ({ binding: e, text: u = '', classMix: t, alignment: r = ve.left, formatWithBrackets: i }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const s = i && e ? ((o = e), u.replace(/\{\w+\}/g, (e) => String(o[e.slice(1, -1)]))) : u;
                        var o;
                        return n().createElement(
                            a.Fragment,
                            null,
                            s.split('\n').map((u, i) =>
                                n().createElement(
                                    'div',
                                    { className: C()('FormatText_base_d0', t), key: `${u}-${i}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            t && e in t
                                                ? t[e]
                                                : ((e, u = ve.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return Te.includes(t)
                                                          ? Se(e)
                                                          : 'ja' === t
                                                            ? (0, pe.D4)()
                                                                  .parse(e)
                                                                  .map((e) => fe(e))
                                                            : ((e, u = ve.left) => {
                                                                  let t = [];
                                                                  const a =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      n = fe(e);
                                                                  return (
                                                                      xe(n, /( )/, u).forEach(
                                                                          (e) => (t = t.concat(xe(e, a, ve.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(e, u);
                                                  })(e, u),
                                        ))(u, r, e).map((e, u) =>
                                        n().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    Ot = {
                        base: 'Header_base_c4',
                        base__completed: 'Header_base__completed_02',
                        base__chapter2: 'Header_base__chapter2_84',
                        base__chapter3: 'Header_base__chapter3_67',
                        title: 'Header_title_fa',
                        chapterName: 'Header_chapterName_ea',
                        status: 'Header_status_79',
                    },
                    Rt = { base: 'Status_base_d6', unavailable: 'Status_unavailable_67', icon: 'Status_icon_4d' },
                    Lt = R.strings.grinch_progression.gameBoardView.header.status,
                    Pt = R.strings.datetime_formats.regionalDate.dayMonthFullTime();
                let It;
                !(function (e) {
                    ((e.WillBeAvailable = 'willBeAvailable'),
                        (e.Available = 'available'),
                        (e.Unavailable = 'unavailable'),
                        (e.Completed = 'completed'));
                })(It || (It = {}));
                const Nt = (0, Q.Pi)(({ chapter: e, className: u }) => {
                        const t = _e().model,
                            a = t.root.get(),
                            r = a.chapterStartDate,
                            i = a.chapterFinishDate,
                            s = t.computes.isChapterCompleted(e),
                            o = ((e, u, t) =>
                                e
                                    ? It.Completed
                                    : Me < u
                                      ? It.WillBeAvailable
                                      : Me < t
                                        ? It.Available
                                        : It.Unavailable)(s, r, i);
                        return n().createElement(
                            'div',
                            { className: C()(Rt.base, u, s && Rt.base__completed) },
                            (() => {
                                switch (o) {
                                    case It.WillBeAvailable:
                                        return n().createElement(Mt, {
                                            text: Lt.willBeAvailable(),
                                            binding: {
                                                icon: n().createElement('div', { className: Rt.icon }),
                                                start: Oe(r, Pt),
                                            },
                                        });
                                    case It.Available:
                                        return n().createElement(Mt, {
                                            text: Lt.available(),
                                            binding: {
                                                icon: n().createElement('div', { className: Rt.icon }),
                                                start: Oe(r, Pt),
                                                end: Oe(i, Pt),
                                            },
                                        });
                                    case It.Unavailable:
                                        return n().createElement(Mt, {
                                            text: Lt.unavailable(),
                                            binding: { icon: n().createElement('div', { className: Rt.icon }) },
                                            classMix: Rt.unavailable,
                                        });
                                    case It.Completed:
                                        return Lt.completed();
                                }
                            })(),
                        );
                    }),
                    Ht = R.strings.grinch_progression.gameBoardView.header,
                    $t = (0, Q.Pi)(({ className: e }) => {
                        const u = _e().model,
                            t = u.root.get(),
                            a = t.currentChapter,
                            r = t.isTabSwitching,
                            i = Le(a),
                            s = r ? i : a;
                        return n().createElement(
                            tu,
                            { contentId: R.views.grinch_progression.lobby.tooltips.ChaptersInfoTooltipView('resId') },
                            n().createElement(
                                'div',
                                {
                                    className: C()(
                                        Ot.base,
                                        Ot[`base__chapter${s}`],
                                        u.computes.isChapterCompleted(s) && Ot.base__completed,
                                        e,
                                    ),
                                },
                                n().createElement(Mt, {
                                    text: Ht.title(),
                                    binding: { chapter: s },
                                    classMix: Ot.title,
                                }),
                                n().createElement('div', { className: Ot.chapterName }, Ht.chapterName.$num(s)),
                                n().createElement(Nt, { chapter: s, className: Ot.status }),
                            ),
                        );
                    }),
                    Ut = (0, Q.Pi)(() => {
                        var e;
                        const u = _e(),
                            t = u.model,
                            r = u.controls,
                            i = t.root.get(),
                            s = i.points,
                            o = i.hintState,
                            l = (0, a.useState)(s),
                            c = l[0],
                            E = l[1],
                            d = null != (e = Le(s)) ? e : s,
                            m = t.computes.isHintStateVisible(K.Coins, !0),
                            A = (0, J.useSpring)(() => ({
                                progress: 0,
                                onStart: () => {
                                    G.hY.sound(R.sounds.hangar_newyear_gamemode_coins_counter());
                                },
                                onChange: (e) => {
                                    E(Math.floor(e.value.progress));
                                },
                            }))[1];
                        return (
                            (0, a.useEffect)(() => {
                                s !== d &&
                                    A.start({
                                        from: { progress: d },
                                        to: { progress: s },
                                        config: { duration: 500, easing: Z.easeInOutCubic },
                                    });
                            }, [A, s, d]),
                            n().createElement(
                                'div',
                                {
                                    className: C()('PointsCounter_base_93', m && 'PointsCounter_base__highlighted_de'),
                                    onMouseEnter: () => m && r.hideCurrentHint(o),
                                },
                                n().createElement(
                                    'div',
                                    { className: 'PointsCounter_value_6d' },
                                    n().createElement(
                                        'div',
                                        { className: 'PointsCounter_valueWrapper_11' },
                                        n().createElement(
                                            'div',
                                            { className: 'PointsCounter_amount_fe' },
                                            ((e) => {
                                                const u = String(e);
                                                return e > 99999
                                                    ? `${String(99999).slice(0, -1)}+`
                                                    : u.padStart(5, '0');
                                            })(c)
                                                .split('')
                                                .map((e, u) =>
                                                    n().createElement(
                                                        'div',
                                                        { key: u, className: 'PointsCounter_char_1b' },
                                                        e,
                                                    ),
                                                ),
                                        ),
                                        n().createElement('div', { className: 'PointsCounter_separator_a4' }),
                                    ),
                                ),
                            )
                        );
                    }),
                    Gt = {
                        base: 'Tab_base_30',
                        base__small: 'Tab_base__small_8e',
                        base__medium: 'Tab_base__medium_9b',
                        base__large: 'Tab_base__large_b0',
                        base__extraLarge: 'Tab_base__extraLarge_ea',
                        base__active: 'Tab_base__active_c7',
                        checkmark: 'Tab_checkmark_be',
                    },
                    Wt = ({ name: e, size: u, isActive: t, isCompleted: a, onClick: r, className: i }) =>
                        n().createElement(
                            'div',
                            {
                                className: C()(
                                    Gt.base,
                                    Gt[`base__${u}`],
                                    t && Gt.base__active,
                                    a && Gt.base__completed,
                                    i,
                                ),
                                onClick: () => {
                                    t || (null == r || r(), G.hY.click());
                                },
                                onMouseEnter: () => G.hY.sound(R.sounds.hangar_newyear_gamemode_highlight()),
                            },
                            e,
                            a && n().createElement('div', { className: Gt.checkmark }),
                        );
                let zt;
                !(function (e) {
                    ((e.ExtraSmall = 'extraSmall'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.ExtraLarge = 'extraLarge'));
                })(zt || (zt = {}));
                const jt = ({
                        tabs: e,
                        activeTab: u,
                        onClick: t,
                        completedTabs: a,
                        size: r = zt.Large,
                        className: i,
                    }) =>
                        n().createElement(
                            'div',
                            { className: C()('Tabs_base_cf', i) },
                            e.map((e) =>
                                n().createElement(
                                    'div',
                                    { className: 'Tabs_tab_b2', key: e },
                                    n().createElement(Wt, {
                                        name: e,
                                        isActive: e === u,
                                        isCompleted: null == a ? void 0 : a.includes(e),
                                        onClick: () => (null == t ? void 0 : t(e)),
                                        size: r,
                                    }),
                                ),
                            ),
                        ),
                    Vt = {
                        [p.ExtraSmall]: zt.Small,
                        [p.Small]: zt.Small,
                        [p.Medium]: zt.Medium,
                        [p.Large]: zt.Large,
                        [p.ExtraLarge]: zt.ExtraLarge,
                    },
                    qt = R.strings.grinch_progression.gameBoardView,
                    Yt = (0, Q.Pi)(() => {
                        const e = _e(),
                            u = e.model,
                            t = e.controls,
                            r = u.root.get(),
                            i = r.currentChapter,
                            s = r.isTabSwitching;
                        var o;
                        (V(W.n.ARROW_RIGHT, t.nextStep), (o = t.close), V(W.n.ESCAPE, o));
                        const l = u.computes.isHintStateVisible(K.Coins, !0),
                            c = f().mediaSize,
                            E = (0, J.useSpring)(() => ({
                                config: { duration: $e, easing: Z.easeInOutCubic },
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                            })),
                            d = E[0],
                            m = E[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (s)
                                    return (
                                        m.start({ opacity: 0 }),
                                        G.hY.sound(R.sounds.hangar_newyear_gamemode_chapter_select()),
                                        ((e, u) => {
                                            let a;
                                            const n = setTimeout(() => {
                                                a = void t.updateContentModel();
                                            }, 300);
                                            return () => {
                                                ('function' == typeof a && a(), clearTimeout(n));
                                            };
                                        })()
                                    );
                                m.start({ opacity: 1 });
                            }, [m, t, s]),
                            n().createElement(
                                'div',
                                { className: 'App_base_89', lang: R.strings.settings.LANGUAGE_CODE() },
                                n().createElement(
                                    'div',
                                    { className: 'App_background_63' },
                                    n().createElement(he, null),
                                ),
                                n().createElement(
                                    'div',
                                    { className: 'App_content_5f' },
                                    n().createElement(
                                        J.animated.div,
                                        { style: d },
                                        n().createElement(
                                            'div',
                                            {
                                                className: C()(
                                                    'App_pointsCounter_4d',
                                                    l && 'App_pointsCounter__withHint_eb',
                                                ),
                                            },
                                            n().createElement(Ut, null),
                                            l &&
                                                n().createElement(Ye, {
                                                    text: qt.tutorial.coins(),
                                                    className: 'App_pointerHint_44',
                                                }),
                                        ),
                                        n().createElement(kt, null),
                                        n().createElement($t, { className: 'App_header_2f' }),
                                    ),
                                    n().createElement(jt, {
                                        tabs: u.computes.getChaptersKeyList(),
                                        completedTabs: u.computes.getCompletedChaptersKeyList(),
                                        activeTab: i,
                                        onClick: t.switchChapter,
                                        size: Vt[c],
                                        className: 'App_tabs_49',
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: 'App_info_16' },
                                    n().createElement(U, {
                                        caption: qt.infoButton.label(),
                                        type: 'info',
                                        onClick: t.showGameBoardInfo,
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: 'App_close_de' },
                                    n().createElement(U, {
                                        caption: qt.closeButton.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: t.close,
                                    }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    P().render(
                        n().createElement(O, null, n().createElement(Ae, null, n().createElement(Yt, null))),
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
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, a] = deferred[o], r = !0, i = 0; i < u.length; i++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
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
        (__webpack_require__.j = 144),
        (() => {
            var e = { 144: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, i, s] = t,
                        o = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); o < r.length; o++)
                        ((n = r[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(612));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
