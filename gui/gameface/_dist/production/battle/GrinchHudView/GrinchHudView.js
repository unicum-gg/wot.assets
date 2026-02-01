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
                    t.d(u, { mouse: () => _, off: () => o, on: () => i, onResize: () => n, onScaleUpdated: () => l }));
                var a = t(472),
                    r = t(176);
                const n = (0, a.E)('clientResized'),
                    l = (0, a.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    s = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    _ = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, r.R)(!0);
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
                                : (0, r.R)(!1);
                        }
                        const n = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const n = `mouse${u}`,
                                            l = s[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, i),
                                            a(),
                                            () => {
                                                r &&
                                                    (l(),
                                                    window.removeEventListener(n, i),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, n, {
                            disable() {
                                ((e.enabled = !1), a());
                            },
                            enable() {
                                ((e.enabled = !0), a());
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
            959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => l,
                        getSize: () => n,
                        graphicsQuality: () => i,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var a = t(527),
                    r = t(493);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function l(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
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
                function r(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => r, G: () => a });
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
                t.d(u, { O: () => n });
                var a = t(959),
                    r = t(514);
                const n = { view: t(641), client: a, sound: r.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => l });
                var a = t(959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    n = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, a.playSound)(r[u])), e), {}),
                    l = { play: Object.assign({}, n, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => a }));
            },
            112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var a = t(472);
                const r = {
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
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => f,
                        events: () => n.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => y,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => _,
                        getDisplayStatus: () => p,
                        getFontNames: () => S,
                        getScale: () => D,
                        getSize: () => m,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => C,
                        isFocused: () => b,
                        pxToRem: () => g,
                        remToPx: () => h,
                        resize: () => E,
                        sendEvent: () => l.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => k,
                    }));
                var a = t(722),
                    r = t(112),
                    n = t(538),
                    l = t(566);
                const i = 15;
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, i);
                }
                function _(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, i);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: h(u.x), y: h(u.y) };
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
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function y() {
                    viewEnv.forceTriggerMouseMove();
                }
                function p() {
                    return viewEnv.getShowingStatus();
                }
                const S = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    f = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => n });
                const a = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                l = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(u, a);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, l, {
                                          arguments:
                                              ((r = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, l));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    n = {
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
            521: (e, u, t) => {
                'use strict';
                let a, r;
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
                    })(r || (r = {})));
            },
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var a = t(138);
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
                        const n = a.O.view.addModelObserver(e, t, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(n) : (this._views[t] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
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
                r.__instance = void 0;
                const n = r;
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
                t.d(u, { ry: () => g });
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
                const r = a;
                var n = t(358),
                    l = t(613);
                let i;
                var o;
                (((o = i || (i = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE'));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(521),
                    E = t(138);
                const A = ['args'];
                function F(e, u, t, a, r, n, l) {
                    try {
                        var i = e[n](l),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(a, r);
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
                                    return new Promise(function (a, r) {
                                        var n = e.apply(u, t);
                                        function l(e) {
                                            F(n, a, r, l, i, 'next', e);
                                        }
                                        function i(e) {
                                            F(n, a, r, l, i, 'throw', e);
                                        }
                                        l(void 0);
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
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(u, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
                                          arguments:
                                              ((a = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    B = () => h(i.CLOSE),
                    b = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var v = t(572);
                const C = r.instance,
                    y = {
                        DataTracker: n.Z,
                        ViewModel: v.Z,
                        ViewEventType: i,
                        NumberFormatType: s,
                        RealFormatType: _,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => h(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => h(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), n) => {
                            const l = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                s = o.x,
                                _ = o.y,
                                c = o.width,
                                d = o.height,
                                m = {
                                    x: E.O.view.pxToRem(s) + l.x,
                                    y: E.O.view.pxToRem(_) + l.y,
                                    width: E.O.view.pxToRem(c),
                                    height: E.O.view.pxToRem(d),
                                };
                            h(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: D(m),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => b(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, B);
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const r = Object.prototype.toString.call(u[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < r.length; u++) t[a].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: C,
                        SystemLocale: l.Z5,
                        UserLocale: l.cy,
                    };
                window.ViewEnvHelper = y;
            },
            613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => n, Z5: () => a, cy: () => r });
                const a = {
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
                    n = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            853: (e, u, t) => {
                'use strict';
                var a = t(942),
                    r = t(601),
                    n = t.n(r);
                var l = t(282);
                const i = {
                    mt_4: 'TeamScores_mt_4_a5',
                    base: 'TeamScores_base_e3',
                    scoreLimit: 'TeamScores_scoreLimit_fc',
                    teamScores: 'TeamScores_teamScores_00',
                    teamScore: 'TeamScores_teamScore_66',
                    teamScore__current: 'TeamScores_teamScore__current_ea',
                    teamScore_numberDelta: 'TeamScores_teamScore_numberDelta_d7',
                    teamScore_numberDelta_delta: 'TeamScores_teamScore_numberDelta_delta_38',
                    teamScore_numberDelta_delta__hidden: 'TeamScores_teamScore_numberDelta_delta__hidden_6d',
                    teamScore__even: 'TeamScores_teamScore__even_43',
                    teamScore__yellow: 'TeamScores_teamScore__yellow_9e',
                    teamScore__blue: 'TeamScores_teamScore__blue_0f',
                    teamScore__magenta: 'TeamScores_teamScore__magenta_66',
                    teamScore_numberDelta__negative: 'TeamScores_teamScore_numberDelta__negative_16',
                    teamScore_number: 'TeamScores_teamScore_number_b3',
                    teamScore_number_icon: 'TeamScores_teamScore_number_icon_48',
                    teamScore_number_shadow: 'TeamScores_teamScore_number_shadow_61',
                    teamScore_railBorder: 'TeamScores_teamScore_railBorder_66',
                    teamScore_rail: 'TeamScores_teamScore_rail_3d',
                    teamScore_currentBar: 'TeamScores_teamScore_currentBar_85',
                    teamScore_deltaBar: 'TeamScores_teamScore_deltaBar_0c',
                    teamScore_deltaBar__positive: 'TeamScores_teamScore_deltaBar__positive_71',
                    teamScore_deltaBar__negative: 'TeamScores_teamScore_deltaBar__negative_51',
                    teamScore_deltaBar__evenChange: 'TeamScores_teamScore_deltaBar__evenChange_91',
                    deltaChange1: 'TeamScores_deltaChange1_d9',
                    teamScore_deltaBar__oddChange: 'TeamScores_teamScore_deltaBar__oddChange_f9',
                    deltaChange2: 'TeamScores_deltaChange2_c5',
                    score: 'TeamScores_score_b5',
                    delta: 'TeamScores_delta_85',
                };
                var o = t(483),
                    s = t.n(o);
                function _(e) {
                    return e;
                }
                function c() {
                    return !1;
                }
                console.log;
                var d = t(915),
                    m = t(138);
                function E(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const A = (e) => (0 === e ? window : window.subViews.get(e));
                function F(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                var D = t(517);
                const g = (e) => Object.assign({}, e),
                    h = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: u, children: r, mocks: n }) {
                                const l = (0, a.useRef)([]),
                                    i = (e, u, t) => {
                                        var a;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = A,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function n(e, u = 0) {
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
                                                const l = (e) => {
                                                    const r = t(u),
                                                        n = a.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (t, n) => {
                                                        const i = 'string' == typeof n ? `${a}.${n}` : a,
                                                            o = m.O.view.addModelObserver(i, u, !0);
                                                        return (r.set(o, t), e && t(l(n)), o);
                                                    },
                                                    readByPath: l,
                                                    createCallback: (e, u) => {
                                                        const t = l(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = l(e);
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
                                                                                    return E(e, u);
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
                                                                                          ? E(e, u)
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
                                                                })(r.keys());
                                                            !(e = t()).done;
                                                        )
                                                            n(e.value, u);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(u),
                                            n =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (a = null == t ? void 0 : t.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            i = (u) =>
                                                'mocks' === e ? (null == t ? void 0 : t.getter(u)) : n.readByPath(u),
                                            o = (e) => l.current.push(e),
                                            s = (({ observableModel: e }) => {
                                                const u = Object.assign(
                                                        { root: e.object(), abilities: e.array('abilities', []) },
                                                        e.primitives([
                                                            'announcementCountdownTargetTime',
                                                            'turretStackReloadTime',
                                                            'turretStackReloadTimeLeft',
                                                            'turretsAvailable',
                                                            'isGameStarting',
                                                        ]),
                                                    ),
                                                    t = (0, D.computedFn)(() => F(e.array('teamScore').get(), g)),
                                                    a = (0, D.computedFn)(() => F(u.abilities.get(), _)),
                                                    r = (0, D.computedFn)(
                                                        (e) =>
                                                            (function (e, u) {
                                                                var t;
                                                                if (!(u >= e.length))
                                                                    return Array.isArray(e)
                                                                        ? e[u]
                                                                        : null == (t = e[u])
                                                                          ? void 0
                                                                          : t.value;
                                                            })(a(), e),
                                                        { equals: c },
                                                    );
                                                return Object.assign({}, u, {
                                                    computes: { getTeamScores: t, getAbilities: a, getAbility: r },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: i,
                                                externalModel: n,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const a = null != t ? t : i(u),
                                                            r = d.observable.box(a, { equals: c });
                                                        return (
                                                            'real' === e &&
                                                                n.subscribe(
                                                                    (0, d.action)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const a = null != t ? t : i(u),
                                                            r = d.observable.box(a, { equals: c });
                                                        return (
                                                            'real' === e &&
                                                                n.subscribe(
                                                                    (0, d.action)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const a = i(t);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (e, u) => ((e[u] = d.observable.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    n.subscribe(
                                                                        (0, d.action)((e) => {
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
                                                                l = Object.entries(r),
                                                                i = l.reduce(
                                                                    (e, [u, t]) => (
                                                                        (e[t] = d.observable.box(a[u], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    n.subscribe(
                                                                        (0, d.action)((e) => {
                                                                            l.forEach(([u, t]) => {
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
                                                cleanup: o,
                                            }),
                                            h = { mode: e, model: s, externalModel: n, cleanup: o };
                                        return {
                                            model: s,
                                            controls: 'mocks' === e && t ? t.controls(h) : {},
                                            externalModel: n,
                                            mode: e,
                                        };
                                    },
                                    o = (0, a.useRef)(!1),
                                    s = (0, a.useState)(e),
                                    h = s[0],
                                    B = s[1],
                                    b = (0, a.useState)(() => i(e, u, n)),
                                    v = b[0],
                                    C = b[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        o.current ? C(i(h, u, n)) : (o.current = !0);
                                    }, [n, h, u]),
                                    (0, a.useEffect)(() => {
                                        B(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (v.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [v],
                                    ),
                                    a.createElement(t.Provider, { value: v }, r)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(),
                    B = h[0],
                    b = h[1];
                let v;
                !(function (e) {
                    ((e.Yellow = 'yellow'), (e.Blue = 'blue'), (e.Magenta = 'magenta'), (e.Neutral = 'neutral'));
                })(v || (v = {}));
                const C = {
                        [v.Yellow]: i.teamScore__yellow,
                        [v.Blue]: i.teamScore__blue,
                        [v.Magenta]: i.teamScore__magenta,
                        [v.Neutral]: i.teamScore__neutral,
                    },
                    y = [i.teamScore_deltaBar__evenChange, i.teamScore_deltaBar__oddChange],
                    p = ({ className: e, score: u = 0, teamColor: t, scoreLimit: r, isCurrent: n, isEven: l }) => {
                        const o = a.useState(u),
                            _ = o[0],
                            c = o[1],
                            d = a.useState([]),
                            m = d[0],
                            E = d[1],
                            A = m.reduce((e, u) => e + u, 0),
                            F = a.useRef(A);
                        0 !== A && (F.current = A);
                        const D = F.current,
                            g = a.useRef(u);
                        a.useEffect(() => {
                            const e = u - g.current;
                            0 !== e && ((g.current = u), E((u) => [...u, e]));
                        }, [u]);
                        const h = a.useRef(!0),
                            B = h.current;
                        return (
                            a.useEffect(() => {
                                if (0 === A) return;
                                h.current = !h.current;
                                const e = setTimeout(() => {
                                    (c((e) => e + A), E([]));
                                }, 2e3);
                                return () => clearTimeout(e);
                            }, [A]),
                            r
                                ? a.createElement(
                                      'div',
                                      {
                                          className: s()(
                                              i.teamScore,
                                              n && i.teamScore__current,
                                              l && i.teamScore__even,
                                              C[t],
                                              e,
                                          ),
                                      },
                                      a.createElement(
                                          'div',
                                          { className: i.teamScore_numberDelta },
                                          a.createElement(
                                              'div',
                                              {
                                                  className: s()(
                                                      i.teamScore_numberDelta_delta,
                                                      D < 0 && i.teamScore_numberDelta_delta__negative,
                                                      0 === A && i.teamScore_numberDelta_delta__hidden,
                                                  ),
                                              },
                                              (D > 0 ? '+' : '') + String(D),
                                          ),
                                      ),
                                      a.createElement(
                                          'div',
                                          { className: i.teamScore_number },
                                          a.createElement('div', { className: i.teamScore_number_icon }),
                                          _ + A,
                                          a.createElement('div', { className: i.teamScore_number_shadow }),
                                      ),
                                      a.createElement(
                                          'div',
                                          { className: i.teamScore_railBorder },
                                          a.createElement(
                                              'div',
                                              { className: i.teamScore_rail, style: { width: 5 * r + 'rem' } },
                                              a.createElement('div', {
                                                  className: i.teamScore_currentBar,
                                                  style: { width: ((_ + A) / r) * 100 + '%' },
                                              }),
                                              a.createElement('div', {
                                                  className: s()(
                                                      i.teamScore_deltaBar,
                                                      D > 0 && i.teamScore_deltaBar__positive,
                                                      D < 0 && i.teamScore_deltaBar__negative,
                                                      0 !== A && y[B ? 0 : 1],
                                                  ),
                                                  style: {
                                                      width: (Math.abs(A) / r) * 100 + '%',
                                                      left: ((A < 0 ? _ + A : _) / r) * 100 + '%',
                                                  },
                                              }),
                                          ),
                                      ),
                                  )
                                : null
                        );
                    };
                function S() {
                    return (
                        (S = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        S.apply(null, arguments)
                    );
                }
                const f = (0, l.observer)(({ className: e }) => {
                        const u = b().model,
                            t = u.computes,
                            r = u.root,
                            n = t.getTeamScores(),
                            l = r.get().scoreLimit;
                        return l
                            ? a.createElement(
                                  'div',
                                  { className: s()(i.base, e) },
                                  a.createElement(
                                      'div',
                                      { className: i.teamScores },
                                      n.map((e, u) =>
                                          a.createElement(
                                              p,
                                              S({ key: e.teamColor }, e, {
                                                  scoreLimit: e.scoreLimit,
                                                  isCurrent: 0 === u,
                                                  isEven: u % 2 == 1,
                                              }),
                                          ),
                                      ),
                                  ),
                                  a.createElement('div', { className: i.scoreLimit }, l),
                              )
                            : null;
                    }),
                    w = {
                        mt_4: 'PlayerList_mt_4_79',
                        base: 'PlayerList_base_cf',
                        header: 'PlayerList_header_9d',
                        header_backgroundShadow: 'PlayerList_header_backgroundShadow_24',
                        header_background: 'PlayerList_header_background_92',
                        base__yellow: 'PlayerList_base__yellow_76',
                        base__magenta: 'PlayerList_base__magenta_02',
                        base__blue: 'PlayerList_base__blue_02',
                        header_text: 'PlayerList_header_text_50',
                        header_shadow: 'PlayerList_header_shadow_96',
                        header_decoration: 'PlayerList_header_decoration_ac',
                        enemies: 'PlayerList_enemies_8b',
                        playerList: 'PlayerList_playerList_e9',
                        playerList_background: 'PlayerList_playerList_background_40',
                        playerList_bottomShadow: 'PlayerList_playerList_bottomShadow_31',
                        player: 'PlayerList_player_79',
                        player__current: 'PlayerList_player__current_e3',
                        player_slot_background: 'PlayerList_player_slot_background_44',
                        player_slot_userName: 'PlayerList_player_slot_userName_47',
                        player_slot_score: 'PlayerList_player_slot_score_54',
                        player__dead: 'PlayerList_player__dead_f3',
                        player_slot_platoon: 'PlayerList_player_slot_platoon_4b',
                        player_slot_vehicle: 'PlayerList_player_slot_vehicle_5c',
                        player_slot: 'PlayerList_player_slot_12',
                        player_slot_platoon__1: 'PlayerList_player_slot_platoon__1_60',
                        player_slot_platoon__2: 'PlayerList_player_slot_platoon__2_09',
                        player_slot_platoon__3: 'PlayerList_player_slot_platoon__3_52',
                        player_slot_platoon__4: 'PlayerList_player_slot_platoon__4_da',
                        player_slot_platoon__5: 'PlayerList_player_slot_platoon__5_5d',
                        player_slot_platoon__6: 'PlayerList_player_slot_platoon__6_72',
                        player_slot_platoon__7: 'PlayerList_player_slot_platoon__7_db',
                        player_gift: 'PlayerList_player_gift_9b',
                        player_gift__disappearing: 'PlayerList_player_gift__disappearing_3d',
                        player_gift__background: 'PlayerList_player_gift__background_1f',
                        player_gift__icon: 'PlayerList_player_gift__icon_a3',
                        player_gift__count: 'PlayerList_player_gift__count_bc',
                        decorationCorner: 'PlayerList_decorationCorner_7e',
                        decorationBottom: 'PlayerList_decorationBottom_de',
                        player_slot_vehicle__lightTank: 'PlayerList_player_slot_vehicle__lightTank_83',
                        player_slot_vehicle__mediumTank: 'PlayerList_player_slot_vehicle__mediumTank_e4',
                        player_slot_vehicle__heavyTank: 'PlayerList_player_slot_vehicle__heavyTank_2d',
                    };
                let k, T;
                (!(function (e) {
                    ((e.LightTank = 'lightTank'), (e.MediumTank = 'mediumTank'), (e.HeavyTank = 'heavyTank'));
                })(k || (k = {})),
                    (function (e) {
                        ((e.None = ''),
                            (e.Platoon1 = 'platoon1'),
                            (e.Platoon2 = 'platoon2'),
                            (e.Platoon3 = 'platoon3'),
                            (e.Platoon4 = 'platoon4'),
                            (e.Platoon5 = 'platoon5'),
                            (e.Platoon6 = 'platoon6'),
                            (e.Platoon7 = 'platoon7'));
                    })(T || (T = {})));
                const L = {
                        never: w.base__never,
                        [v.Yellow]: w.base__yellow,
                        [v.Magenta]: w.base__magenta,
                        [v.Blue]: w.base__blue,
                    },
                    x = {
                        [v.Yellow]: R.strings.grinch.common.teams.yellow(),
                        [v.Magenta]: R.strings.grinch.common.teams.magenta(),
                        [v.Blue]: R.strings.grinch.common.teams.blue(),
                    },
                    P = Object.entries({
                        [w.player_slot_platoon__1]: T.Platoon1,
                        [w.player_slot_platoon__2]: T.Platoon2,
                        [w.player_slot_platoon__3]: T.Platoon3,
                        [w.player_slot_platoon__4]: T.Platoon4,
                        [w.player_slot_platoon__5]: T.Platoon5,
                        [w.player_slot_platoon__6]: T.Platoon6,
                        [w.player_slot_platoon__7]: T.Platoon7,
                    })
                        .map(([e, u]) => `${e}:{{player.value.platoon}} === "${u}"`)
                        .join(';'),
                    N = [
                        `${w.player__dead}:{{player.value.isKilled}};`,
                        `${w.player__current}:{{player.value.isCurrentPlayer}}`,
                    ].join(';'),
                    O = [
                        `${w.player_slot_vehicle__mediumTank}:{{player.value.vehicleType}} === "${k.MediumTank}"`,
                        `${w.player_slot_vehicle__heavyTank}:{{player.value.vehicleType}} === "${k.HeavyTank}"`,
                        `${w.player_slot_vehicle__lightTank}:{{player.value.vehicleType}} === "${k.LightTank}"`,
                    ].join(';'),
                    M = a.memo(({ className: e, modelPath: u, isAllies: t }) => {
                        const r = JSON.stringify(L) + '[{{' + u + '.teamColor}}]';
                        return a.createElement(
                            'div',
                            {
                                className: s()(w.base, e, { [w.allies]: t }, { [w.enemies]: !t }),
                                'data-bind-if': `{{${u}.players}}.length > 0`,
                            },
                            a.createElement(
                                'div',
                                { 'data-bind-class': r },
                                a.createElement(
                                    'div',
                                    { className: w.header },
                                    a.createElement('div', { className: w.header_backgroundShadow }),
                                    a.createElement('div', { className: w.header_background }),
                                    a.createElement('div', {
                                        className: w.header_text,
                                        'data-bind-value': `${JSON.stringify(x)}[{{${u}.teamColor}}]`,
                                    }),
                                    a.createElement('div', { className: w.header_decoration }),
                                    a.createElement('div', { className: w.header_shadow }),
                                ),
                                a.createElement(
                                    'div',
                                    { className: w.playerList },
                                    a.createElement('div', { className: w.playerList_background }),
                                    a.createElement(
                                        'div',
                                        { 'data-bind-for': `index, player:{{${u}.players}}` },
                                        a.createElement(
                                            'div',
                                            { className: w.player, 'data-bind-class-toggle': N },
                                            a.createElement(
                                                'div',
                                                { className: w.player_slot },
                                                a.createElement('div', { className: w.player_slot_background }),
                                                t
                                                    ? a.createElement(
                                                          a.Fragment,
                                                          null,
                                                          a.createElement('div', {
                                                              className: w.player_slot_platoon,
                                                              'data-bind-class-toggle': P,
                                                          }),
                                                          a.createElement('div', {
                                                              className: w.player_slot_vehicle,
                                                              'data-bind-class-toggle': O,
                                                          }),
                                                          a.createElement('div', {
                                                              className: w.player_slot_userName,
                                                              'data-bind-value': '{{player.value.userName}}',
                                                          }),
                                                          a.createElement('div', {
                                                              className: w.player_slot_score,
                                                              'data-bind-value': '{{player.value.score}}',
                                                          }),
                                                      )
                                                    : a.createElement(
                                                          a.Fragment,
                                                          null,
                                                          a.createElement('div', {
                                                              className: w.player_slot_vehicle,
                                                              'data-bind-class-toggle': O,
                                                          }),
                                                          a.createElement('div', {
                                                              className: w.player_slot_userName,
                                                              'data-bind-value': '{{player.value.userName}}',
                                                          }),
                                                          a.createElement('div', {
                                                              className: w.player_slot_platoon,
                                                              'data-bind-class-toggle': P,
                                                          }),
                                                      ),
                                            ),
                                            a.createElement(
                                                'div',
                                                {
                                                    className: w.player_gift,
                                                    'data-bind-class-toggle':
                                                        w.player_gift__disappearing +
                                                        ':{{player.value.carryingItems}} === 0',
                                                },
                                                a.createElement('div', { className: w.player_gift__background }),
                                                a.createElement('div', { className: w.player_gift__icon }),
                                                a.createElement('div', {
                                                    className: w.player_gift__count,
                                                    'data-bind-value': '{{player.value.carryingItems}}',
                                                }),
                                            ),
                                        ),
                                    ),
                                    a.createElement('div', { className: w.playerList_bottomShadow }),
                                ),
                                a.createElement('div', { className: w.decorationCorner }),
                                a.createElement('div', { className: w.decorationBottom }),
                            ),
                        );
                    });
                let H;
                !(function (e) {
                    ((e.None = ''), (e.Gift = 'gift'), (e.First = 'first'), (e.Second = 'second'), (e.Third = 'third'));
                })(H || (H = {}));
                const I = 'Announcement_number_89',
                    W = 'Announcement_number_1_76',
                    G = 'Announcement_number_2_be',
                    $ = 'Announcement_number_3_4c';
                var U = t(959);
                const j = [
                        'Announcement_number_0_ff',
                        W,
                        G,
                        $,
                        'Announcement_number_4_e3',
                        'Announcement_number_5_e9',
                        'Announcement_number_6_66',
                        'Announcement_number_7_4b',
                        'Announcement_number_8_60',
                        'Announcement_number_9_ba',
                    ],
                    V = (0, l.observer)(() => {
                        const e = (0, a.useState)(-1),
                            u = e[0],
                            t = e[1],
                            r = b().model.announcementCountdownTargetTime.get();
                        (0, a.useEffect)(() => {
                            if (r <= 0) return;
                            const e = r - Math.round(Date.now() / 1e3);
                            if ((t(Math.max(e, 0)), (0, U.playSound)('ev_grinch_ui_count_down'), e <= 0)) return;
                            const u = setInterval(() => {
                                const e = r - Math.floor(Date.now() / 1e3);
                                (e <= 0 && clearInterval(u), t(e), (0, U.playSound)('ev_grinch_ui_count_down'));
                            }, 1e3);
                            return () => clearInterval(u);
                        }, [r]);
                        const n = String(u)
                            .padStart(2, '0')
                            .split('')
                            .map((e) => j[Number(e)]);
                        return a.createElement(
                            'div',
                            {
                                className: s()(
                                    'Announcement_countdown_eb',
                                    u > 0 && 'Announcement_countdown__running_d0',
                                    r > 0 && 'Announcement_countdown__enabled_45',
                                ),
                            },
                            n.map((e, u) => a.createElement('div', { className: s()(I, e), key: u })),
                        );
                    }),
                    z = JSON.stringify([H.First, H.Second, H.Third]) + '.includes({{model.announcementIcon}})',
                    K = `(${JSON.stringify({ [H.First]: W, [H.Second]: G, [H.Third]: $ })})[{{model.announcementIcon}}]`,
                    q = a.memo(({ className: e }) =>
                        a.createElement(
                            'div',
                            {
                                className: s()('Announcement_base_5e', e),
                                'data-bind-class-toggle': 'Announcement_base__show_ad: {{model.isAnnouncementVisible}}',
                            },
                            a.createElement('div', {
                                className: 'Announcement_headingAbove_db',
                                'data-bind-value': "{{model.announcementHeadingAbove}} || ' '",
                                'data-bind-class-toggle':
                                    "Announcement_headingAbove__show_4e:{{model.announcementHeadingAbove}} !== '';Announcement_headingAbove__only_b7:{{model.announcementHeading}} === ''",
                            }),
                            a.createElement(
                                'div',
                                {
                                    className: 'Announcement_heading_a3',
                                    'data-bind-class-toggle':
                                        "Announcement_heading__show_7d:{{model.announcementHeading}} !== ''",
                                },
                                a.createElement('div', { 'data-bind-value': '{{model.announcementHeading}}' }),
                                a.createElement('div', { className: 'Announcement_heading_left_d0' }),
                                a.createElement('div', { className: 'Announcement_heading_center_a7' }),
                                a.createElement('div', { className: 'Announcement_heading_right_73' }),
                            ),
                            a.createElement('div', {
                                className: 'Announcement_gift_23',
                                'data-bind-if': `{{model.announcementIcon}} === '${H.Gift}'`,
                            }),
                            a.createElement(
                                'div',
                                { className: 'Announcement_place_0d', 'data-bind-if': z },
                                a.createElement('div', { className: 'Announcement_place_decorationLeft_8d' }),
                                a.createElement('div', { className: I, 'data-bind-class': K }),
                                a.createElement('div', { className: 'Announcement_place_decorationRight_a5' }),
                            ),
                            a.createElement(V, null),
                        ),
                    ),
                    Y = ({ className: e }) =>
                        a.createElement(
                            'div',
                            {
                                className: s()('GiftsWidget_base_f3', e),
                                'data-bind-class-toggle': 'GiftsWidget_base__respawning_0c:{{model.isRespawning}}',
                            },
                            a.createElement(
                                'div',
                                { 'data-bind-for': 'index, _:Array.from({length:{{model.itemsLimit}}})' },
                                a.createElement('div', {
                                    className: 'GiftsWidget_slot_19',
                                    'data-bind-class-toggle':
                                        'GiftsWidget_slot__active_d9:{{index}}<{{model.carryingItems}}',
                                }),
                            ),
                        ),
                    Z = 'AbilityPanel_deployedTurrets_turret_f8',
                    X = 'AbilityPanel_deployedTurrets_turret__deployed_01',
                    J = {
                        mt_4: 'AbilitySlot_mt_4_5c',
                        abilitySlot: 'AbilitySlot_abilitySlot_ef',
                        abilitySlot__ready: 'AbilitySlot_abilitySlot__ready_99',
                        abilitySlot_keyBind: 'AbilitySlot_abilitySlot_keyBind_c0',
                        abilitySlot_keyBind__text: 'AbilitySlot_abilitySlot_keyBind__text_a0',
                        abilitySlot__reloading: 'AbilitySlot_abilitySlot__reloading_bf',
                        abilitySlot__active: 'AbilitySlot_abilitySlot__active_48',
                        abilitySlot__noTurretsAvailable: 'AbilitySlot_abilitySlot__noTurretsAvailable_10',
                        abilitySlot__disabled: 'AbilitySlot_abilitySlot__disabled_91',
                        abilitySlot_background: 'AbilitySlot_abilitySlot_background_ac',
                        abilitySlot_bar: 'AbilitySlot_abilitySlot_bar_0d',
                        abilitySlot__turretReloading: 'AbilitySlot_abilitySlot__turretReloading_87',
                        abilitySlot__turret: 'AbilitySlot_abilitySlot__turret_ff',
                        abilitySlot_icon: 'AbilitySlot_abilitySlot_icon_7d',
                        abilitySlot__blizzard: 'AbilitySlot_abilitySlot__blizzard_3f',
                        abilitySlot__flare: 'AbilitySlot_abilitySlot__flare_6b',
                        abilitySlot__heal: 'AbilitySlot_abilitySlot__heal_82',
                        abilitySlot__rage: 'AbilitySlot_abilitySlot__rage_22',
                        abilitySlot__repairKit: 'AbilitySlot_abilitySlot__repairKit_30',
                        abilitySlot__shellAssault: 'AbilitySlot_abilitySlot__shellAssault_d6',
                        abilitySlot__shellCarrier: 'AbilitySlot_abilitySlot__shellCarrier_ad',
                        abilitySlot__shellSupport: 'AbilitySlot_abilitySlot__shellSupport_34',
                        abilitySlot__stealth: 'AbilitySlot_abilitySlot__stealth_13',
                        abilitySlot_time: 'AbilitySlot_abilitySlot_time_ca',
                        abilitySlot_turretsAvailable: 'AbilitySlot_abilitySlot_turretsAvailable_47',
                        abilitySlot_effect: 'AbilitySlot_abilitySlot_effect_ee',
                        flash: 'AbilitySlot_flash_95',
                        abilitySlot__targeting: 'AbilitySlot_abilitySlot__targeting_c1',
                        abilitySlot_confetti: 'AbilitySlot_abilitySlot_confetti_ac',
                        chargeUp: 'AbilitySlot_chargeUp_b9',
                        deplete: 'AbilitySlot_deplete_65',
                    };
                let Q;
                (t(948),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(Q || (Q = {})),
                    new RegExp(
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
                    t(916));
                var ee = t(613);
                (Date.now(), ee.Ew.getRegionalDateTime, ee.Ew.getFormattedDateTime);
                const ue = (0, l.observer)(({ abilityIndex: e, isTurret: u }) => {
                    const t = b().model,
                        r = t.computes.getAbility(e),
                        n = u && 0 === t.turretsAvailable.get(),
                        l = n ? t.turretStackReloadTime.get() : null == r ? void 0 : r.reloadTime,
                        i = n ? t.turretStackReloadTimeLeft.get() : (null == r ? void 0 : r.reloadTimeLeft) || 0,
                        o = (0, a.useState)(Math.round(i)),
                        s = o[0],
                        _ = o[1];
                    if (
                        ((0, a.useEffect)(() => {
                            _(Math.round(i));
                            const e = Date.now(),
                                u = setInterval(() => {
                                    const t = Date.now() - e,
                                        a = i - t / 1e3;
                                    return a <= 0 ? (clearInterval(u), _(0)) : _(Math.round(a));
                                }, 100);
                            return () => clearInterval(u);
                        }, [i]),
                        s <= 0)
                    )
                        return null;
                    const c = s > 0 ? s : l;
                    return a.createElement('div', { className: J.abilitySlot_time }, (c || 0).toString());
                });
                let te;
                !(function (e) {
                    ((e.None = 'none'),
                        (e.ShellAssault = 'shellAssault'),
                        (e.ShellCarrier = 'shellCarrier'),
                        (e.ShellSupport = 'shellSupport'),
                        (e.RepairKit = 'repairKit'),
                        (e.Turret = 'turret'),
                        (e.Heal = 'heal'),
                        (e.Stealth = 'stealth'),
                        (e.Flare = 'flare'),
                        (e.Blizzard = 'blizzard'),
                        (e.Rage = 'rage'));
                })(te || (te = {}));
                const ae = ['className'];
                function re() {
                    return (
                        (re = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        re.apply(null, arguments)
                    );
                }
                const ne = (e) => {
                        let u = e.className,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, ae);
                        return a.createElement(
                            'div',
                            re({ className: s()('Confetti_base_39', u) }, t),
                            a.createElement('div', { className: 'Confetti_confetti_1_63' }),
                            a.createElement('div', { className: 'Confetti_confetti_2_8f' }),
                            a.createElement('div', { className: 'Confetti_confetti_3_94' }),
                        );
                    },
                    le = {
                        [te.None]: J.abilitySlot__none,
                        [te.RepairKit]: J.abilitySlot__repairKit,
                        [te.ShellAssault]: J.abilitySlot__shellAssault,
                        [te.Blizzard]: J.abilitySlot__blizzard,
                        [te.Rage]: J.abilitySlot__rage,
                        [te.ShellSupport]: J.abilitySlot__shellSupport,
                        [te.Heal]: J.abilitySlot__heal,
                        [te.Turret]: J.abilitySlot__turret,
                        [te.ShellCarrier]: J.abilitySlot__shellCarrier,
                        [te.Stealth]: J.abilitySlot__stealth,
                        [te.Flare]: J.abilitySlot__flare,
                    },
                    ie = [te.ShellAssault, te.ShellSupport, te.ShellCarrier],
                    oe = /\s/g,
                    se = a.memo(
                        ({
                            isActive: e,
                            isEnabled: u,
                            isTargeting: t,
                            keyBind: r,
                            reloadTime: n,
                            reloadTimeLeft: l,
                            turretStackReloadTime: i,
                            turretStackReloadTimeLeft: o,
                            turretsAvailable: _,
                            type: c,
                            abilityIndex: d,
                            isGameStarting: m,
                        }) => {
                            const E = le[c],
                                A = 0 === l && c !== te.None,
                                F = l > 0 && c !== te.None,
                                D = 0 === d,
                                g = c === te.Turret,
                                h = 0 === _,
                                B = e && c !== te.Turret,
                                b = o > 0 && g && !F,
                                v = (0, a.useRef)(_);
                            (0, a.useEffect)(() => {
                                (A &&
                                    u &&
                                    !ie.includes(c) &&
                                    !m &&
                                    (g
                                        ? _ > v.current && (0, U.playSound)('ev_grinch_ui_ability_button_ready')
                                        : (0, U.playSound)('ev_grinch_ui_ability_button_ready')),
                                    (v.current = _));
                            }, [A, u, g, _, c, m]);
                            const C = (0, a.useMemo)(
                                    () =>
                                        F && !g
                                            ? {
                                                  animation: `${B ? J.deplete : J.chargeUp} ${n}s linear`,
                                                  animationDelay: `-${n - l}s`,
                                              }
                                            : g && F && !h
                                              ? {
                                                    animation: `${J.chargeUp} ${n}s linear`,
                                                    animationDelay: `-${n - l}s`,
                                                }
                                              : g && h && (F || o > 0)
                                                ? {
                                                      animation: `${J.chargeUp} ${i}s linear`,
                                                      animationDelay: `-${i - o}s`,
                                                  }
                                                : void 0,
                                    [F, g, B, n, l, i, o, h],
                                ),
                                y = (0, a.useRef)(_),
                                p = a.useState(!1),
                                S = p[0],
                                f = p[1];
                            (0, a.useEffect)(() => {
                                if (!m && 0 === y.current && _ > 0) {
                                    f(!0);
                                    const e = setTimeout(() => f(!1), 1e3);
                                    return () => clearTimeout(e);
                                }
                                y.current = _;
                            }, [_, m]);
                            const w = r.slice(0, 7).replace(oe, '_');
                            return a.createElement(
                                'div',
                                {
                                    className: s()(
                                        J.abilitySlot,
                                        E,
                                        !u && J.abilitySlot__disabled,
                                        B && J.abilitySlot__active,
                                        t && J.abilitySlot__targeting,
                                        A && J.abilitySlot__ready,
                                        F && J.abilitySlot__reloading,
                                        b && h && !m && J.abilitySlot__turretReloading,
                                        h && g && !m && J.abilitySlot__noTurretsAvailable,
                                    ),
                                },
                                !D &&
                                    a.createElement(
                                        'div',
                                        { className: J.abilitySlot_keyBind },
                                        a.createElement('div', { className: J.abilitySlot_keyBind__text }, w),
                                    ),
                                a.createElement('div', { className: J.abilitySlot_bar, style: C }),
                                a.createElement('div', { className: J.abilitySlot_background }),
                                a.createElement('div', { className: J.abilitySlot_icon }),
                                a.createElement(ue, { abilityIndex: d, isTurret: g }),
                                a.createElement('div', { className: J.abilitySlot_effect }),
                                g &&
                                    a.createElement('div', {
                                        className: J.abilitySlot_turretsAvailable,
                                        'data-bind-value': '{{model.turretsAvailable}}',
                                    }),
                                A && !m && a.createElement(ne, { className: J.abilitySlot_confetti }),
                                g && S && a.createElement(ne, { className: J.abilitySlot_confetti }),
                            );
                        },
                    );
                function _e() {
                    return (
                        (_e = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        _e.apply(null, arguments)
                    );
                }
                const ce = (0, l.observer)(({ abilityIndex: e, AbilitySlotComponent: u = se }) => {
                        const t = b().model,
                            r = t.computes.getAbility(e),
                            n = t.root.get(),
                            l = n.turretStackReloadTime,
                            i = n.turretStackReloadTimeLeft,
                            o = n.turretsAvailable,
                            s = n.isGameStarting;
                        return void 0 !== r && null != r && r.type
                            ? a.createElement(
                                  u,
                                  _e({}, r, {
                                      turretStackReloadTime: l,
                                      turretStackReloadTimeLeft: i,
                                      turretsAvailable: o,
                                      abilityIndex: e,
                                      isGameStarting: s,
                                  }),
                              )
                            : null;
                    }),
                    de = ['className'];
                function me() {
                    return (
                        (me = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        me.apply(null, arguments)
                    );
                }
                const Ee = (e) => {
                    let u = e.className,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (u.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, de);
                    return a.createElement(
                        'div',
                        me({ className: s()('AbilityPanel_base_47', u) }, t, {
                            'data-bind-class-toggle':
                                'AbilityPanel_base__respawning_dd:{{model.isRespawning}};AbilityPanel_base__gameStarting_91:{{model.isGameStarting}}',
                        }),
                        a.createElement(
                            'div',
                            { className: 'AbilityPanel_abilityWrapper_7e' },
                            a.createElement(ce, { abilityIndex: 0 }),
                            a.createElement(ce, { abilityIndex: 1 }),
                            a.createElement(ce, { abilityIndex: 2 }),
                            a.createElement(ce, { abilityIndex: 3 }),
                        ),
                        a.createElement(
                            'div',
                            {
                                className: 'AbilityPanel_deployedTurrets_66',
                                'data-bind-if': '{{model.turretLimit}} > 0',
                            },
                            a.createElement('div', {
                                className: Z,
                                'data-bind-class-toggle': `${X}: {{model.deployedTurrets}} > 1`,
                            }),
                            a.createElement('div', {
                                className: Z,
                                'data-bind-class-toggle': `${X}: {{model.deployedTurrets}} > 0`,
                            }),
                        ),
                    );
                };
                let Ae;
                !(function (e) {
                    ((e.None = 'none'), (e.Penetration = 'penetration'), (e.Ricochet = 'ricochet'));
                })(Ae || (Ae = {}));
                const Fe = [
                        `DamageIndicator_indicator__penetration_21:{{indicator.value.type}} === "${Ae.Penetration}"`,
                        `DamageIndicator_indicator__ricochet_4f:{{indicator.value.type}} === "${Ae.Ricochet}"`,
                    ].join(';'),
                    De = ({ className: e }) =>
                        a.createElement(
                            'div',
                            { className: s()('DamageIndicator_base_85', e) },
                            a.createElement(
                                'div',
                                { 'data-bind-for': 'index, indicator:{{model.damageIndicators}}' },
                                a.createElement('div', {
                                    className: 'DamageIndicator_indicator_90',
                                    'data-bind-class-toggle': Fe,
                                    'data-bind-style-transform-rotate': '{{indicator.value.angle}}',
                                }),
                            ),
                        ),
                    ge = {
                        mt_4: 'BaseMarkers_mt_4_f5',
                        marker: 'BaseMarkers_marker_be',
                        marker__central: 'BaseMarkers_marker__central_26',
                        marker__hidden: 'BaseMarkers_marker__hidden_91',
                        marker__yellow: 'BaseMarkers_marker__yellow_c5',
                        marker__blue: 'BaseMarkers_marker__blue_a0',
                        marker__magenta: 'BaseMarkers_marker__magenta_e0',
                        marker__offScreen: 'BaseMarkers_marker__offScreen_e0',
                        marker__isEnemy: 'BaseMarkers_marker__isEnemy_f2',
                        marker__carryingHome: 'BaseMarkers_marker__carryingHome_91',
                        marker_presentCount: 'BaseMarkers_marker_presentCount_4a',
                        marker_distance: 'BaseMarkers_marker_distance_1b',
                        marker_angle: 'BaseMarkers_marker_angle_81',
                    };
                let he;
                !(function (e) {
                    ((e.None = 'none'),
                        (e.Central = 'central'),
                        (e.Yellow = 'yellow'),
                        (e.Blue = 'blue'),
                        (e.Magenta = 'magenta'));
                })(he || (he = {}));
                const Be = [
                        `${ge.marker__central}:{{marker.value.type}} === "${he.Central}"`,
                        `${ge.marker__yellow}:{{marker.value.type}} === "${he.Yellow}"`,
                        `${ge.marker__blue}:{{marker.value.type}} === "${he.Blue}"`,
                        `${ge.marker__magenta}:{{marker.value.type}} === "${he.Magenta}"`,
                        `${ge.marker__offScreen}:!{{marker.value.isVisible}}`,
                        `${ge.marker__isEnemy}:{{marker.value.isEnemy}}`,
                        `${ge.marker__carryingHome}:{{model.carryingItems}} > 0 && !{{marker.value.isEnemy}}`,
                        `${ge.marker__hidden}:{{marker.value.type}} != "${he.Central}" && !({{model.carryingItems}} && !{{marker.value.isEnemy}}) || {{marker.value.type}} === "${he.Central}" && {{marker.value.score}} === 0`,
                    ].join(';'),
                    be = ({ className: e }) =>
                        a.createElement(
                            'div',
                            { className: s()(ge.base, e) },
                            a.createElement(
                                'div',
                                { 'data-bind-for': 'index, marker:{{model.baseMarkers}}' },
                                a.createElement(
                                    'div',
                                    {
                                        className: ge.marker,
                                        'data-bind-class-toggle': Be,
                                        'data-bind-style-transform-scale': '{{marker.value.scale}}',
                                        'data-bind-style-left': "{{marker.value.posx}} +'rem'",
                                        'data-bind-style-top': "{{marker.value.posy}} +'rem'",
                                    },
                                    a.createElement('div', {
                                        className: ge.marker_presentCount,
                                        'data-bind-value': '{{marker.value.score}}',
                                    }),
                                    a.createElement('div', {
                                        className: ge.marker_angle,
                                        'data-bind-style-transform-rotate': '{{marker.value.angle}}',
                                    }),
                                    a.createElement('div', {
                                        className: ge.marker_distance,
                                        'data-bind-value':
                                            "{{model.carryingItems}} > 0 && !{{marker.value.isEnemy}} ? ({{marker.value.distance}} - 50) +'m' : ''",
                                    }),
                                ),
                            ),
                        ),
                    ve = ({ className: e }) =>
                        a.createElement(
                            'div',
                            {
                                className: s()('TankPanel_base_9f', e),
                                'data-bind-class-toggle': 'TankPanel_base__respawning_e7:{{model.isRespawning}}',
                            },
                            a.createElement(
                                'div',
                                { className: 'TankPanel_tank_09' },
                                a.createElement('div', { className: 'TankPanel_tank_shadow_3d' }),
                                a.createElement(
                                    'div',
                                    { className: 'TankPanel_tank_normal_2e' },
                                    a.createElement('div', { className: 'TankPanel_tank_normal_doll_right_83' }),
                                    a.createElement('div', { className: 'TankPanel_tank_normal_doll_left_4a' }),
                                ),
                                a.createElement(
                                    'div',
                                    { className: 'TankPanel_tank_shock_57' },
                                    a.createElement('div', {
                                        'data-bind-if':
                                            '{{model.tankPanel.rightTrackDestroyed}} || {{model.isRespawning}}',
                                        className: 'TankPanel_tank_shock_doll_right_8b',
                                    }),
                                    a.createElement('div', {
                                        'data-bind-if':
                                            '{{model.tankPanel.leftTrackDestroyed}} || {{model.isRespawning}}',
                                        className: 'TankPanel_tank_shock_doll_left_2e',
                                    }),
                                ),
                                a.createElement('div', { className: 'TankPanel_tank_doll_98' }),
                                a.createElement('div', { className: 'TankPanel_tank_turret_cf' }),
                            ),
                            a.createElement(
                                'div',
                                { className: 'TankPanel_speed_18' },
                                a.createElement('div', {
                                    'data-bind-value': '{{model.tankPanel.speed}}',
                                    className: 'TankPanel_speed_amount_c3',
                                }),
                                a.createElement('div', { className: 'TankPanel_speed_hours_37' }, 'km/h'),
                            ),
                            a.createElement(
                                'div',
                                { className: 'TankPanel_bar_0b' },
                                a.createElement('div', { className: 'TankPanel_bar_shadow_51' }),
                                a.createElement(
                                    'div',
                                    { className: 'TankPanel_bar_inner_c5' },
                                    a.createElement(
                                        'div',
                                        {
                                            'data-bind-class-toggle':
                                                'TankPanel_bar_inner_progress__dead_7d:{{model.isRespawning}};TankPanel_bar_inner_progress__rage_ae:{{model.tankPanel.rageMode}};TankPanel_bar_inner_progress__undead_b6:{{model.tankPanel.isUndead}}',
                                            className: 'TankPanel_bar_inner_progress_4c',
                                            'data-bind-style-width':
                                                "{{model.tankPanel.isUndead}} ? '100%' : (Math.ceil(({{model.tankPanel.health}} || 0) / ({{model.tankPanel.maxHealth}} || 1) * 100) + '%')",
                                        },
                                        a.createElement('div', {
                                            'data-bind-class-toggle':
                                                'TankPanel_bar_inner_separator_e7:{{model.tankPanel.maxHealth}} !== {{model.tankPanel.health}};TankPanel_bar_inner_separator_disabled_fd:{{model.isRespawning}} || {{model.tankPanel.rageMode}}',
                                        }),
                                    ),
                                    a.createElement(
                                        'div',
                                        {
                                            className: 'TankPanel_bar_inner_amount_ca',
                                            'data-bind-class-toggle':
                                                'TankPanel_bar_inner_amount_dead_0d:{{model.isRespawning}}',
                                        },
                                        a.createElement('div', {
                                            'data-bind-value':
                                                "({{model.tankPanel.isUndead}} ? 0 : {{model.tankPanel.health}}) + '/' + {{model.tankPanel.maxHealth}}",
                                        }),
                                    ),
                                ),
                            ),
                        ),
                    Ce = () =>
                        a.createElement(
                            'div',
                            { className: 'GrinchHudViewApp_base_24' },
                            a.createElement(
                                'div',
                                { className: 'GrinchHudViewApp_score_8e' },
                                a.createElement(f, null),
                            ),
                            a.createElement(
                                'div',
                                {
                                    className: 'GrinchHudViewApp_allies_f2',
                                    'data-bind-if': '{{model.allies.players}}.length > 0',
                                },
                                a.createElement(M, { key: 'allies', modelPath: 'model.allies', isAllies: !0 }),
                            ),
                            a.createElement(
                                'div',
                                { className: 'GrinchHudViewApp_enemies_a8' },
                                a.createElement(M, { key: 'enemies1', modelPath: 'model.enemies1', isAllies: !1 }),
                                a.createElement(M, {
                                    key: 'enemies2',
                                    modelPath: 'model.enemies2',
                                    className: 'GrinchHudViewApp_mt_4_e0',
                                    isAllies: !1,
                                }),
                                a.createElement('div', { className: 'GrinchHudViewApp_enemies_decoration_3f' }),
                            ),
                            a.createElement(
                                'div',
                                { className: 'GrinchHudViewApp_abilityPanel_37' },
                                a.createElement(Y, { className: 'GrinchHudViewApp_gifts_31' }),
                                a.createElement(Ee, null),
                            ),
                            a.createElement(q, { className: 'GrinchHudViewApp_announcement_63' }),
                            a.createElement(De, { className: 'GrinchHudViewApp_damageIndicator_d2' }),
                            a.createElement(ve, { className: 'GrinchHudViewApp_tankPanel_c3' }),
                            a.createElement(be, { className: 'GrinchHudViewApp_baseMarkers_ee' }),
                        ),
                    ye = (e, u, t) =>
                        u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                            ? (u.extraLargeHeight && t.extraLarge) ||
                              (u.largeHeight && t.large) ||
                              (u.mediumHeight && t.medium) ||
                              (u.smallHeight && t.small) ||
                              (u.extraSmallHeight && t.extraSmall)
                                ? e
                                : null
                            : e,
                    pe = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var Se;
                function fe(e, u, t) {
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
                        n = Math.min(a, r);
                    return {
                        extraLarge: n === t.extraLarge.weight,
                        large: n === t.large.weight,
                        medium: n === t.medium.weight,
                        small: n === t.small.weight,
                        extraSmall: n === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
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
                })(Se || (Se = {}));
                const we = m.O.client.getSize('rem'),
                    ke = we.width,
                    Te = we.height,
                    Le = Object.assign({ width: ke, height: Te }, fe(ke, Te, pe)),
                    xe = (0, a.createContext)(Le),
                    Pe = ['children'],
                    Ne = (e) => {
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
                            })(e, Pe);
                        const r = (0, a.useContext)(xe),
                            n = r.extraLarge,
                            l = r.large,
                            i = r.medium,
                            o = r.small,
                            s = r.extraSmall,
                            _ = r.extraLargeWidth,
                            c = r.largeWidth,
                            d = r.mediumWidth,
                            m = r.smallWidth,
                            E = r.extraSmallWidth,
                            A = r.extraLargeHeight,
                            F = r.largeHeight,
                            D = r.mediumHeight,
                            g = r.smallHeight,
                            h = r.extraSmallHeight,
                            B = { extraLarge: A, large: F, medium: D, small: g, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return u;
                            if (t.large && l) return u;
                            if (t.medium && i) return u;
                            if (t.small && o) return u;
                            if (t.extraSmall && s) return u;
                        } else {
                            if (t.extraLargeWidth && _) return ye(u, t, B);
                            if (t.largeWidth && c) return ye(u, t, B);
                            if (t.mediumWidth && d) return ye(u, t, B);
                            if (t.smallWidth && m) return ye(u, t, B);
                            if (t.extraSmallWidth && E) return ye(u, t, B);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && A) return u;
                                if (t.largeHeight && F) return u;
                                if (t.mediumHeight && D) return u;
                                if (t.smallHeight && g) return u;
                                if (t.extraSmallHeight && h) return u;
                            }
                        }
                        return null;
                    };
                ((Ne.defaultProps = {
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
                    (0, a.memo)(Ne));
                const Oe = ({ children: e }) => {
                    const u = (0, a.useContext)(xe),
                        t = (0, a.useState)(u),
                        r = t[0],
                        n = t[1],
                        l = (0, a.useCallback)((e, u) => {
                            const t = m.O.view.pxToRem(e),
                                a = m.O.view.pxToRem(u);
                            n(Object.assign({ width: t, height: a }, fe(t, a, pe)));
                        }, []),
                        i = (0, a.useCallback)(() => {
                            const e = m.O.client.getSize('px');
                            l(e.width, e.height);
                        }, [l]);
                    (((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        (m.O.client.events.on('clientResized', l), m.O.client.events.on('self.onScaleUpdated', i));
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                (m.O.client.events.off('clientResized', l),
                                    m.O.client.events.off('self.onScaleUpdated', i));
                            },
                            [l, i],
                        ));
                    const o = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return a.createElement(xe.Provider, { value: o }, e);
                };
                var Me = t(926),
                    Re = t.n(Me);
                let He, Ie, We;
                (!(function (e) {
                    ((e[(e.ExtraSmall = pe.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = pe.small.width)] = 'Small'),
                        (e[(e.Medium = pe.medium.width)] = 'Medium'),
                        (e[(e.Large = pe.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = pe.extraLarge.width)] = 'ExtraLarge'));
                })(He || (He = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = pe.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = pe.small.width)] = 'Small'),
                            (e[(e.Medium = pe.medium.width)] = 'Medium'),
                            (e[(e.Large = pe.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = pe.extraLarge.width)] = 'ExtraLarge'));
                    })(Ie || (Ie = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = pe.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = pe.small.height)] = 'Small'),
                            (e[(e.Medium = pe.medium.height)] = 'Medium'),
                            (e[(e.Large = pe.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = pe.extraLarge.height)] = 'ExtraLarge'));
                    })(We || (We = {})));
                const Ge = ['children', 'className'];
                function $e() {
                    return (
                        ($e = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        $e.apply(null, arguments)
                    );
                }
                const Ue = {
                        [Ie.ExtraSmall]: '',
                        [Ie.Small]: Re().SMALL_WIDTH,
                        [Ie.Medium]: `${Re().SMALL_WIDTH} ${Re().MEDIUM_WIDTH}`,
                        [Ie.Large]: `${Re().SMALL_WIDTH} ${Re().MEDIUM_WIDTH} ${Re().LARGE_WIDTH}`,
                        [Ie.ExtraLarge]: `${Re().SMALL_WIDTH} ${Re().MEDIUM_WIDTH} ${Re().LARGE_WIDTH} ${Re().EXTRA_LARGE_WIDTH}`,
                    },
                    je = {
                        [We.ExtraSmall]: '',
                        [We.Small]: Re().SMALL_HEIGHT,
                        [We.Medium]: `${Re().SMALL_HEIGHT} ${Re().MEDIUM_HEIGHT}`,
                        [We.Large]: `${Re().SMALL_HEIGHT} ${Re().MEDIUM_HEIGHT} ${Re().LARGE_HEIGHT}`,
                        [We.ExtraLarge]: `${Re().SMALL_HEIGHT} ${Re().MEDIUM_HEIGHT} ${Re().LARGE_HEIGHT} ${Re().EXTRA_LARGE_HEIGHT}`,
                    },
                    Ve = {
                        [He.ExtraSmall]: '',
                        [He.Small]: Re().SMALL,
                        [He.Medium]: `${Re().SMALL} ${Re().MEDIUM}`,
                        [He.Large]: `${Re().SMALL} ${Re().MEDIUM} ${Re().LARGE}`,
                        [He.ExtraLarge]: `${Re().SMALL} ${Re().MEDIUM} ${Re().LARGE} ${Re().EXTRA_LARGE}`,
                    },
                    ze = (e) => {
                        let u = e.children,
                            t = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, Ge);
                        const n = (() => {
                                const e = (0, a.useContext)(xe),
                                    u = e.width,
                                    t = e.height,
                                    r = ((e) => {
                                        switch (!0) {
                                            case e.extraLarge:
                                                return He.ExtraLarge;
                                            case e.large:
                                                return He.Large;
                                            case e.medium:
                                                return He.Medium;
                                            case e.small:
                                                return He.Small;
                                            case e.extraSmall:
                                                return He.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    He.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    n = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeWidth:
                                                return Ie.ExtraLarge;
                                            case e.largeWidth:
                                                return Ie.Large;
                                            case e.mediumWidth:
                                                return Ie.Medium;
                                            case e.smallWidth:
                                                return Ie.Small;
                                            case e.extraSmallWidth:
                                                return Ie.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    Ie.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    l = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeHeight:
                                                return We.ExtraLarge;
                                            case e.largeHeight:
                                                return We.Large;
                                            case e.mediumHeight:
                                                return We.Medium;
                                            case e.smallHeight:
                                                return We.Small;
                                            case e.extraSmallHeight:
                                                return We.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    We.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: r,
                                    mediaWidth: n,
                                    mediaHeight: l,
                                    remScreenWidth: u,
                                    remScreenHeight: t,
                                };
                            })(),
                            l = n.mediaWidth,
                            i = n.mediaHeight,
                            o = n.mediaSize;
                        return a.createElement('div', $e({ className: s()(t, Ue[l], je[i], Ve[o]) }, r), u);
                    },
                    Ke = ['children'],
                    qe = (e) => {
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
                            })(e, Ke);
                        return a.createElement(Oe, null, a.createElement(ze, t, u));
                    };
                engine.whenReady.then(() => {
                    (document.documentElement.setAttribute('keep-esc-propagation', ''),
                        n().render(
                            a.createElement(qe, null, a.createElement(B, null, a.createElement(Ce, null))),
                            document.getElementById('root'),
                        ));
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e].call(t.exports, t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, a] = deferred[o], n = !0, l = 0; l < u.length; l++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[l]))
                            ? u.splice(l--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
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
        (() => {
            var e = { 333: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [n, l, i] = t,
                        o = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (a in l) __webpack_require__.o(l, a) && (__webpack_require__.m[a] = l[a]);
                        if (i) var s = i(__webpack_require__);
                    }
                    for (u && u(t); o < n.length; o++)
                        ((r = n[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(s);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(853));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
