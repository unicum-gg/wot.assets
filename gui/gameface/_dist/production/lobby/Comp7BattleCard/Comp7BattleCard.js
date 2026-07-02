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
                    t.d(u, { mouse: () => l, off: () => o, on: () => i, onResize: () => _, onScaleUpdated: () => n }));
                var a = t(2472),
                    r = t(1176);
                const _ = (0, a.E)('clientResized'),
                    n = (0, a.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    s = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    l = (function () {
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
                        const _ = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const _ = `mouse${u}`,
                                            n = s[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(_, i),
                                            a(),
                                            () => {
                                                r &&
                                                    (n(),
                                                    window.removeEventListener(_, i),
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
                        return Object.assign({}, _, {
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
            5959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => n,
                        getSize: () => _,
                        graphicsQuality: () => i,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var a = t(527),
                    r = t(2493);
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function n(e = 'px') {
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
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            2493: (e, u, t) => {
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
            2472: (e, u, t) => {
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
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => _ });
                var a = t(5959),
                    r = t(514);
                const _ = { view: t(7641), client: a, sound: r.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => n });
                var a = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    _ = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, a.playSound)(r[u])), e), {}),
                    n = { play: Object.assign({}, _, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => a }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var a = t(2472);
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
            7641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => m,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => _.U,
                        extraSize: () => N,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getFontNames: () => x,
                        getScale: () => b,
                        getSize: () => d,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => p,
                        isFocused: () => B,
                        pxToRem: () => C,
                        remToPx: () => g,
                        resize: () => E,
                        sendEvent: () => n.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => k,
                    }));
                var a = t(3722),
                    r = t(6112),
                    _ = t(6538),
                    n = t(8566);
                const i = 15;
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, i);
                }
                function l(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function m(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, i);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: g(u.x), y: g(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function C(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const x = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    w = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    N = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : _.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => _ });
                const a = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const _ = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (u.indexOf(a) >= 0) continue;
                                            t[a] = e[a];
                                        }
                                    return t;
                                })(u, a);
                            return void 0 !== _
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
                                          arguments:
                                              ((r = _),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    _ = {
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
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => _ });
                var a = t(3138);
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
                        const _ = a.O.view.addModelObserver(e, t, r);
                        return (
                            _ > 0
                                ? ((this._callbacks[_] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(_) : (this._views[t] = [_])))
                                : console.error("Can't add callback for model:", e),
                            _
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
                const _ = r;
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
                t.d(u, { Sw: () => _.Z, B0: () => i, ry: () => C });
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
                var _ = t(1358),
                    n = t(8613);
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
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    E = t(3138);
                const A = ['args'];
                function F(e, u, t, a, r, _, n) {
                    try {
                        var i = e[_](n),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(a, r);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
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
                                        var _ = e.apply(u, t);
                                        function n(e) {
                                            F(_, a, r, n, i, 'next', e);
                                        }
                                        function i(e) {
                                            F(_, a, r, n, i, 'throw', e);
                                        }
                                        n(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    g = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                _ = (function (e, u) {
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
                                      Object.assign({ __Type: t, type: e }, _, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, _));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    D = () => g(i.CLOSE),
                    B = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var h = t(7572);
                const p = r.instance,
                    f = {
                        DataTracker: _.Z,
                        ViewModel: h.Z,
                        ViewEventType: i,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: m,
                        DateFormatType: c,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => g(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => g(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), _) => {
                            const n = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                s = o.x,
                                l = o.y,
                                m = o.width,
                                c = o.height,
                                d = {
                                    x: E.O.view.pxToRem(s) + n.x,
                                    y: E.O.view.pxToRem(l) + n.y,
                                    width: E.O.view.pxToRem(m),
                                    height: E.O.view.pxToRem(c),
                                };
                            g(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: b(d),
                                on: !0,
                                args: _,
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
                        handleViewEvent: g,
                        onBindingsReady: C,
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
                        ClickOutsideManager: p,
                        SystemLocale: n.Z5,
                        UserLocale: n.cy,
                    };
                window.ViewEnvHelper = f;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => _, Z5: () => a, cy: () => r });
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
                    _ = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            81: (e, u, t) => {
                'use strict';
                var a = t(6483),
                    r = t.n(a),
                    _ = t(1281);
                let n;
                function i(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(n || (n = {}));
                const o = (e) => e.replace(/&nbsp;/g, ' '),
                    s = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    l = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    m = (e, u, t = n.left) => e.split(u).reduce(t === n.left ? s : l, []),
                    c = (() => {
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
                    d = ['zh_cn', 'zh_sg', 'zh_tw'];
                var E = t(9916),
                    A = t(8613);
                (Date.now(), A.Ew.getRegionalDateTime, A.Ew.getFormattedDateTime);
                var F = t(7363),
                    b = t.n(F),
                    C = t(3138);
                const g = (e = 1) => {
                        const u = new Error().stack;
                        let t,
                            a = R.invalid('resId'),
                            r = '';
                        var _;
                        return (
                            u &&
                                ((r = (null == (_ = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : _[0]) || ''),
                                (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (a = window.subViews[t].id)),
                            { callerUrl: r, caller: t, stack: u, resId: a }
                        );
                    },
                    D = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    B = (e) => {
                        const u = (0, F.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    h = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    p = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    f = () => (window.injected || (window.injected = new Map()), window.injected),
                    v = E.Sw.instance;
                let x;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(x || (x = {}));
                const w = (e = 'model', u = x.Deep) => {
                        const t = (0, F.useState)(0),
                            a = (t[0], t[1]),
                            r = (0, F.useMemo)(() => g(), []),
                            _ = r.callerUrl,
                            n = r.caller,
                            i = r.resId,
                            o = (0, F.useMemo)(() => {
                                const u = (function (e) {
                                    return f().has(e);
                                })(_.replace('.js', '.html'));
                                return window.__feature && window.__feature !== n && !u ? `subViews.${n}.${e}` : e;
                            }, [_, n, e]),
                            s = (0, F.useState)(() =>
                                ((e) => {
                                    const u = D(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return h(u) ? u.value : u;
                                })(
                                    ((e) =>
                                        ((e, u) =>
                                            e.split('.').reduce((e, u) => {
                                                const t = D(`${e}.${u}`, window);
                                                return h(t) ? ((e, u) => `${e}.${u}.value`)(e, u) : `${e}.${u}`;
                                            }))(e))(o),
                                ),
                            ),
                            l = s[0],
                            m = s[1],
                            c = (0, F.useRef)(-1);
                        return (
                            B(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? x.Deep : x.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== x.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === x.Deep
                                                ? (e === l && a((e) => e + 1), m(e))
                                                : m(Object.assign([], e));
                                        },
                                        r = ((e) => {
                                            const u = ((e) => {
                                                    const u = g(),
                                                        t = u.caller,
                                                        a = u.resId,
                                                        r =
                                                            window.__feature && window.__feature !== t && t
                                                                ? `subViews.${t}`
                                                                : '';
                                                    return { modelPrefix: r, modelPath: p(r, ''), resId: a };
                                                })(),
                                                t = u.modelPrefix,
                                                a = e.split('.');
                                            if (a.length > 0) {
                                                const e = [a[0]];
                                                return (
                                                    a.reduce((u, a) => {
                                                        const r = D(p(t, `${u}.${a}`), window);
                                                        return h(r)
                                                            ? (e.push(r.id), `${u}.${a}.value`)
                                                            : (e.push(a), `${u}.${a}`);
                                                    }),
                                                    e.reduce((e, u) => e + '.' + u)
                                                );
                                            }
                                            return '';
                                        })(e);
                                    c.current = v.addCallback(r, t, i, u === x.Deep);
                                }
                            }),
                            (0, F.useEffect)(() => {
                                if (u !== x.None)
                                    return () => {
                                        v.removeCallback(c.current, i);
                                    };
                            }, [i, u]),
                            l
                        );
                    },
                    N =
                        (E.Sw.instance,
                        (e, u, t) =>
                            u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                                ? (u.extraLargeHeight && t.extraLarge) ||
                                  (u.largeHeight && t.large) ||
                                  (u.mediumHeight && t.medium) ||
                                  (u.smallHeight && t.small) ||
                                  (u.extraSmallHeight && t.extraSmall)
                                    ? e
                                    : null
                                : e),
                    k = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var T;
                function L(e, u, t) {
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
                        _ = Math.min(a, r);
                    return {
                        extraLarge: _ === t.extraLarge.weight,
                        large: _ === t.large.weight,
                        medium: _ === t.medium.weight,
                        small: _ === t.small.weight,
                        extraSmall: _ === t.extraSmall.weight,
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
                })(T || (T = {}));
                const y = C.O.client.getSize('rem'),
                    S = y.width,
                    O = y.height,
                    M = Object.assign({ width: S, height: O }, L(S, O, k)),
                    I = (0, F.createContext)(M),
                    P = ['children'],
                    W = (e) => {
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
                            })(e, P);
                        const a = (0, F.useContext)(I),
                            r = a.extraLarge,
                            _ = a.large,
                            n = a.medium,
                            i = a.small,
                            o = a.extraSmall,
                            s = a.extraLargeWidth,
                            l = a.largeWidth,
                            m = a.mediumWidth,
                            c = a.smallWidth,
                            d = a.extraSmallWidth,
                            E = a.extraLargeHeight,
                            A = a.largeHeight,
                            b = a.mediumHeight,
                            C = a.smallHeight,
                            g = a.extraSmallHeight,
                            D = { extraLarge: E, large: A, medium: b, small: C, extraSmall: g };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && r) return u;
                            if (t.large && _) return u;
                            if (t.medium && n) return u;
                            if (t.small && i) return u;
                            if (t.extraSmall && o) return u;
                        } else {
                            if (t.extraLargeWidth && s) return N(u, t, D);
                            if (t.largeWidth && l) return N(u, t, D);
                            if (t.mediumWidth && m) return N(u, t, D);
                            if (t.smallWidth && c) return N(u, t, D);
                            if (t.extraSmallWidth && d) return N(u, t, D);
                            if (!(
                                t.extraLargeWidth ||
                                t.largeWidth ||
                                t.mediumWidth ||
                                t.smallWidth ||
                                t.extraSmallWidth
                            )) {
                                if (t.extraLargeHeight && E) return u;
                                if (t.largeHeight && A) return u;
                                if (t.mediumHeight && b) return u;
                                if (t.smallHeight && C) return u;
                                if (t.extraSmallHeight && g) return u;
                            }
                        }
                        return null;
                    };
                ((W.defaultProps = {
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
                    (0, F.memo)(W));
                const $ = ({ children: e }) => {
                    const u = (0, F.useContext)(I),
                        t = (0, F.useState)(u),
                        a = t[0],
                        r = t[1],
                        _ = (0, F.useCallback)((e, u) => {
                            const t = C.O.view.pxToRem(e),
                                a = C.O.view.pxToRem(u);
                            r(Object.assign({ width: t, height: a }, L(t, a, k)));
                        }, []),
                        n = (0, F.useCallback)(() => {
                            const e = C.O.client.getSize('px');
                            _(e.width, e.height);
                        }, [_]);
                    (B(() => {
                        (C.O.client.events.on('clientResized', _), C.O.client.events.on('self.onScaleUpdated', n));
                    }),
                        (0, F.useEffect)(
                            () => () => {
                                (C.O.client.events.off('clientResized', _),
                                    C.O.client.events.off('self.onScaleUpdated', n));
                            },
                            [_, n],
                        ));
                    const i = (0, F.useMemo)(() => Object.assign({}, a), [a]);
                    return b().createElement(I.Provider, { value: i }, e);
                };
                function H(e, u, t) {
                    const a = (0, F.useContext)(I);
                    let _ = Object.entries(a).filter(([e, u]) => !0 === u && e in T);
                    return (
                        t && (_ = _.filter((e) => t.includes(e[0]))),
                        e.reduce((e, t) => {
                            const a = _.map((e) =>
                                r()(
                                    u[((e, u) => e + '__' + u)(t, e[0])],
                                    u[
                                        ((e, u) => {
                                            return e + ((t = u)[0].toUpperCase() + t.slice(1));
                                            var t;
                                        })(t, e[0])
                                    ],
                                ),
                            );
                            return ((e[t] = r()(u[t], ...a)), e);
                        }, {})
                    );
                }
                const z = ({ binding: e, text: u = '', classMix: t, alignment: a = n.left, formatWithBrackets: i }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const s = i && e ? ((l = e), u.replace(/\{\w+\}/g, (e) => String(l[e.slice(1, -1)]))) : u;
                        var l;
                        return b().createElement(
                            F.Fragment,
                            null,
                            s.split('\n').map((u, i) =>
                                b().createElement(
                                    'div',
                                    { className: r()('FormatText_base_d0', t), key: `${u}-${i}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            t && e in t
                                                ? t[e]
                                                : ((e, u = n.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return d.includes(t)
                                                          ? c(e)
                                                          : 'ja' === t
                                                            ? (0, _.D4)()
                                                                  .parse(e)
                                                                  .map((e) => o(e))
                                                            : ((e, u = n.left) => {
                                                                  let t = [];
                                                                  const a =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      r = o(e);
                                                                  return (
                                                                      m(r, /( )/, u).forEach(
                                                                          (e) => (t = t.concat(m(e, a, n.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(e, u);
                                                  })(e, u),
                                        ))(u, a, e).map((e, u) =>
                                        b().createElement(F.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    j = {
                        blackReal: 'FormatTextWithColorTags_blackReal_d5',
                        whiteReal: 'FormatTextWithColorTags_whiteReal_d8',
                        white: 'FormatTextWithColorTags_white_b9',
                        whiteOrange: 'FormatTextWithColorTags_whiteOrange_ea',
                        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_54',
                        par: 'FormatTextWithColorTags_par_c1',
                        parSecondary: 'FormatTextWithColorTags_parSecondary_4e',
                        parTertiary: 'FormatTextWithColorTags_parTertiary_14',
                        red: 'FormatTextWithColorTags_red_d9',
                        redDark: 'FormatTextWithColorTags_redDark_ea',
                        yellow: 'FormatTextWithColorTags_yellow_48',
                        orange: 'FormatTextWithColorTags_orange_ad',
                        cream: 'FormatTextWithColorTags_cream_96',
                        brown: 'FormatTextWithColorTags_brown_27',
                        greenBright: 'FormatTextWithColorTags_greenBright_04',
                        green: 'FormatTextWithColorTags_green_58',
                        greenDark: 'FormatTextWithColorTags_greenDark_af',
                        blueBooster: 'FormatTextWithColorTags_blueBooster_b3',
                        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_ab',
                        cred: 'FormatTextWithColorTags_cred_d3',
                        gold: 'FormatTextWithColorTags_gold_28',
                        bond: 'FormatTextWithColorTags_bond_74',
                        prom: 'FormatTextWithColorTags_prom_58',
                    },
                    G = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    U = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    V = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    q = ({ text: e, binding: u, classMix: t }) => {
                        const a = (0, F.useCallback)((e) => ({ color: `#${e}` }), []),
                            r = u || {};
                        let _ = G.exec(e),
                            n = e;
                        for (; _;) {
                            const t = _[0],
                                i = U.exec(t),
                                o = V.exec(t),
                                s = _[1];
                            if (i && o) {
                                const e = i[0],
                                    _ = e + o[0].length + e;
                                ((n = n.replace(t, `%(${_})`)),
                                    (r[_] = j[e]
                                        ? b().createElement(
                                              'span',
                                              { className: j[e] },
                                              b().createElement(z, { text: s, binding: u }),
                                          )
                                        : b().createElement(
                                              'span',
                                              { style: a(e) },
                                              b().createElement(z, { text: s, binding: u }),
                                          )));
                            }
                            _ = G.exec(e);
                        }
                        return b().createElement(z, { text: n, classMix: t, binding: r });
                    },
                    K = (e) => (e ? R.images.gui.maps.icons.mode_selector.mode.$dyn(e) : null);
                let Y, Z;
                (!(function (e) {
                    ((e.B0 = 'b0'),
                        (e.B1 = 'b1'),
                        (e.B2 = 'b2'),
                        (e.B3 = 'b3'),
                        (e.B4 = 'b4'),
                        (e.B5 = 'b5'),
                        (e.B6 = 'b6'));
                })(Y || (Y = {})),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'));
                    })(Z || (Z = {})));
                const X = (e, u = !1) => (u && 1 === e ? Y.B0 : `b${Math.min(Math.max(Math.floor(e), 0), 6)}`),
                    Q = {},
                    J = (...e) => {
                        let u = [];
                        for (var t = 0, a = e; t < a.length; t++) {
                            const e = a[t];
                            if (e in Q) u = u.concat(Q[e]);
                            else {
                                const t = [e];
                                for (let u = 0; u <= 6; u++) t.push(`${e}__${X(u)}`);
                                ((Q[e] = t), (u = u.concat(Q[e])));
                            }
                        }
                        return u;
                    },
                    ee = (e) => {
                        const u = (0, F.useState)(!1),
                            t = u[0],
                            a = u[1],
                            r = (0, F.useCallback)(
                                (u) => {
                                    (a(u), e && e(u));
                                },
                                [e],
                            );
                        return [t, r];
                    },
                    ue = () => {
                        const e = (0, F.useContext)(I),
                            u = e.extraSmall,
                            t = e.small,
                            a = e.medium;
                        return (0, F.useMemo)(() => {
                            switch (!0) {
                                case t:
                                case u:
                                    return Z.Small;
                                case a:
                                    return Z.Medium;
                                default:
                                    return Z.Big;
                            }
                        }, [u, a, t]);
                    },
                    te = {
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
                    ae = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
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
                const _e = (e) => {
                    let u = e.size,
                        t = e.value,
                        a = e.isEmpty,
                        _ = e.fadeInAnimation,
                        n = e.hide,
                        i = e.maximumNumber,
                        o = e.className,
                        s = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (u.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, ae);
                    const l = a ? null : t,
                        m = 'string' == typeof l;
                    if ((l && !m && l < 0) || 0 === l) return null;
                    const c = l && !m && l > i,
                        d = r()(
                            te.base,
                            te[`base__${u}`],
                            _ && te.base__animated,
                            n && te.base__hidden,
                            !l && te.base__pattern,
                            a && te.base__empty,
                            o,
                        );
                    return b().createElement(
                        'div',
                        re({ className: d }, s),
                        b().createElement('div', { className: te.bg }),
                        b().createElement('div', { className: te.pattern }),
                        b().createElement(
                            'div',
                            { className: r()(te.value, m && te.value__text) },
                            c ? i : l,
                            c && b().createElement('span', { className: te.plus }, '+'),
                        ),
                    );
                };
                _e.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const ne = [
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
                function ie(e) {
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
                const oe = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: E.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    se = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            _ = e.onMouseLeave,
                            n = e.onMouseDown,
                            i = e.onClick,
                            o = e.ignoreShowDelay,
                            s = void 0 !== o && o,
                            l = e.ignoreMouseClick,
                            m = void 0 !== l && l,
                            c = e.decoratorId,
                            d = void 0 === c ? 0 : c,
                            E = e.isEnabled,
                            A = void 0 === E || E,
                            b = e.targetId,
                            C = void 0 === b ? 0 : b,
                            D = e.onShow,
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
                            })(e, ne);
                        const p = (0, F.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, F.useMemo)(() => C || g().resId, [C]),
                            v = (0, F.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (oe(t, d, { isMouseEvent: !0, on: !0, arguments: ie(a) }, f),
                                    D && D(),
                                    (p.current.isVisible = !0));
                            }, [t, d, a, f, D]),
                            x = (0, F.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        oe(t, d, { on: !1 }, f),
                                        p.current.isVisible && B && B(),
                                        (p.current.isVisible = !1));
                                }
                            }, [t, d, f, B]),
                            w = (0, F.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        return (
                            (0, F.useEffect)(() => {
                                const e = p.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, F.useEffect)(() => {
                                !1 === A && x();
                            }, [A, x]),
                            (0, F.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        (window.removeEventListener('mouseleave', x), x());
                                    }
                                ),
                                [x],
                            ),
                            A
                                ? (0, F.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((N = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((p.current.timeoutId = window.setTimeout(v, s ? 100 : 400)),
                                                          r && r(e),
                                                          N && N(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (x(), null == _ || _(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === m && x(), null == i || i(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === m && x(), null == n || n(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : u
                        );
                        var N;
                    },
                    le = ['children'];
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
                const ce = (e) => {
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
                            })(e, le);
                        return b().createElement(
                            se,
                            me(
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
                    },
                    de = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ee() {
                    return (
                        (Ee = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Ee.apply(null, arguments)
                    );
                }
                const Ae = R.views.common.tooltip_window.simple_tooltip_content,
                    Fe = (e) => {
                        let u = e.children,
                            t = e.body,
                            a = e.header,
                            r = e.note,
                            _ = e.alert,
                            n = e.args,
                            i = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, de);
                        const o = (0, F.useMemo)(() => {
                            const e = Object.assign({}, n, { body: t, header: a, note: r, alert: _ });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [_, t, a, r, n]);
                        return b().createElement(
                            se,
                            Ee(
                                {
                                    contentId:
                                        ((s = null == n ? void 0 : n.hasHtmlContent),
                                        s ? Ae.SimpleTooltipHtmlContent('resId') : Ae.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: o,
                                },
                                i,
                            ),
                            u,
                        );
                        var s;
                    };
                function be(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const Ce = {
                        playHighlight() {
                            be('highlight');
                        },
                        playClick() {
                            be('play');
                        },
                        playYes() {
                            be('yes1');
                        },
                    },
                    ge = {
                        base: 'CardWrapper_base_b7',
                        base__disabled: 'CardWrapper_base__disabled_4f',
                        base__isNotStarted: 'CardWrapper_base__isNotStarted_29',
                        mask: 'CardWrapper_mask_f7',
                        border: 'CardWrapper_border_a3',
                        hover: 'CardWrapper_hover_af',
                        hover__anim: 'CardWrapper_hover__anim_10',
                        animBg: 'CardWrapper_animBg_f3',
                        animBg__wide: 'CardWrapper_animBg__wide_16',
                        selection: 'CardWrapper_selection_35',
                        check: 'CardWrapper_check_c1',
                        check__extraSmall: 'CardWrapper_check__extraSmall_fa',
                        check__small: 'CardWrapper_check__small_33',
                        checkBackground: 'CardWrapper_checkBackground_bd',
                        checkBackground__extraSmall: 'CardWrapper_checkBackground__extraSmall_ff',
                        checkBackground__small: 'CardWrapper_checkBackground__small_d8',
                        disabling: 'CardWrapper_disabling_63',
                        background: 'CardWrapper_background_34',
                        background__anim: 'CardWrapper_background__anim_34',
                        background__empty: 'CardWrapper_background__empty_bb',
                        novelty: 'CardWrapper_novelty_ae',
                        info: 'CardWrapper_info_49',
                        info__anim: 'CardWrapper_info__anim_81',
                        info__extraSmall: 'CardWrapper_info__extraSmall_fc',
                        info__small: 'CardWrapper_info__small_9c',
                        info__medium: 'CardWrapper_info__medium_9f',
                        infoCorner: 'CardWrapper_infoCorner_49',
                        infoCorner__anim: 'CardWrapper_infoCorner__anim_ba',
                        children: 'CardWrapper_children_88',
                    },
                    De = ({
                        index: e,
                        size: u,
                        isSelected: t,
                        isDisabled: a,
                        isNew: _ = !1,
                        isInfoIconVisible: n,
                        resourcesFolderName: i,
                        children: o,
                        onHoverChanged: s,
                        onItemClicked: l,
                        onInfoClicked: m,
                        resourceFolderGetter: c,
                        id: d,
                        modeName: E,
                        isNotStarted: A,
                    }) => {
                        const C = ue(),
                            g = (0, F.useCallback)(
                                (u) => {
                                    (u.stopPropagation(), Ce.playYes(), m({ index: e }));
                                },
                                [m, e],
                            ),
                            D = ee(s),
                            B = D[0],
                            h = D[1],
                            p = (0, F.useCallback)(() => {
                                (be(
                                    [Y.B4, Y.B5, Y.B6].includes(u)
                                        ? 'ev_mode_selector_hover_simple'
                                        : 'ev_mode_selector_hover',
                                ),
                                    h(!0));
                            }, [h, u]),
                            f = (0, F.useCallback)(() => {
                                h(!1);
                            }, [h]),
                            v = H(['info', 'check', 'checkBackground'], ge),
                            x = C !== Z.Big;
                        let w;
                        const N = c(i);
                        if (null !== N) {
                            const e = N.$dyn(`bg_${u}_${C}`);
                            null !== e && (w = { backgroundImage: `url(${e})` });
                            const t = N.$dyn(`bg_${u}`);
                            null !== t && (w = { backgroundImage: `url(${t})`, backgroundSize: 'cover' });
                        }
                        const k = n && (B || t);
                        return b().createElement(
                            ce,
                            { isEnabled: a, args: { index: e, modeName: E, tooltipId: 'disabledTooltip' } },
                            b().createElement(
                                'div',
                                null,
                                b().createElement(
                                    'div',
                                    {
                                        id: d,
                                        className: r()(ge.base, a && ge.base__disabled, A && ge.base__isNotStarted),
                                        onClick: () => {
                                            (l({ index: e, size: u, cardMediaSize: C }), Ce.playClick());
                                        },
                                        onMouseEnter: p,
                                        onMouseLeave: f,
                                    },
                                    b().createElement(
                                        'div',
                                        { className: ge.mask },
                                        b().createElement('div', {
                                            className: r()(
                                                ge.background,
                                                void 0 === w && ge.background__empty,
                                                B && ge.background__anim,
                                            ),
                                            style: w,
                                        }),
                                    ),
                                    b().createElement('div', { className: ge.border }),
                                    t &&
                                        b().createElement(
                                            b().Fragment,
                                            null,
                                            b().createElement('div', { className: ge.selection }),
                                            b().createElement('div', {
                                                className: r()(ge.animBg, u === Y.B0 && ge.animBg__wide),
                                            }),
                                            b().createElement('div', { className: v.checkBackground }),
                                            b().createElement('div', { className: v.check }),
                                        ),
                                    b().createElement('div', { className: r()(ge.hover, B && !A && ge.hover__anim) }),
                                    b().createElement('div', { className: ge.children }, o),
                                    _ &&
                                        !a &&
                                        b().createElement(
                                            'div',
                                            { className: ge.novelty },
                                            b().createElement(_e, {
                                                value: R.strings.mode_selector.novelty(),
                                                size: x ? 'small' : 'big',
                                            }),
                                        ),
                                    b().createElement('div', {
                                        className: r()(ge.infoCorner, k && ge.infoCorner__anim),
                                    }),
                                    b().createElement(
                                        Fe,
                                        { body: R.strings.tooltips.mode_selector.info.body(), isEnabled: k },
                                        b().createElement('div', {
                                            className: r()(v.info, k && ge.info__anim),
                                            onClick: g,
                                        }),
                                    ),
                                    a && b().createElement('div', { className: ge.disabling }),
                                ),
                            ),
                        );
                    };
                let Be;
                !(function (e) {
                    ((e.LowRisk = 'lowRisk'), (e.MediumRisk = 'mediumRisk'), (e.HighRisk = 'highRisk'));
                })(Be || (Be = {}));
                const he = {
                    base: 'Performance_base_fd',
                    base__b2: 'Performance_base__b2_73',
                    text: 'Performance_text_2f',
                    base__mediumRisk: 'Performance_base__mediumRisk_ad',
                    base__highRisk: 'Performance_base__highRisk_ab',
                    icon: 'Performance_icon_69',
                    iconBig: 'Performance_iconBig_d5',
                    iconBig__mediumRisk: 'Performance_iconBig__mediumRisk_59',
                    iconBig__highRisk: 'Performance_iconBig__highRisk_5a',
                };
                let pe;
                function fe() {
                    return (
                        (fe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        fe.apply(null, arguments)
                    );
                }
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Attention = 'attention'), (e.Alert = 'alert'), (e.Blocker = 'blocker'));
                })(pe || (pe = {}));
                const ve = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const a = b().createElement('div', { className: t }, e);
                    if (u.header || u.body) return b().createElement(Fe, u, a);
                    const r = u.contentId;
                    return r ? b().createElement(se, fe({}, u, { contentId: r }), a) : b().createElement(ce, u, a);
                };
                var xe = t(8045);
                const we = {
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
                let Ne, ke, Te;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(Ne || (Ne = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(ke || (ke = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(Te || (Te = {})));
                const Le = { [Te.NBSP]: Ne.NoBreakSymbol, [Te.ZWNBSP]: Ne.NoBreakSymbol, [Te.NEW_LINE]: Ne.LineBreak },
                    ye = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    Se = {
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
                    Re = 'renderers_word_f3',
                    Oe = (e) => ({ color: `#${e}` }),
                    Me = ({ elementList: e, textBlock: u, key: t }) => {
                        const a = u.colorTag;
                        return a
                            ? Se[a]
                                ? b().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: r()(Re, Se[a]) },
                                      e,
                                  )
                                : b().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: Re, style: Oe(a) },
                                      e,
                                  )
                            : b().createElement('span', { key: t, 'data-block-type': u.blockType, className: Re }, e);
                    },
                    Ie = {
                        [Ne.Word]: Me,
                        [Ne.NoBreakSymbol]: Me,
                        [Ne.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            b().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => b().createElement(b().Fragment, { key: t }, e)),
                            ),
                        [Ne.LineBreak]: ({ key: e }) =>
                            b().createElement('span', {
                                key: e,
                                'data-block-type': Ne.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [Ne.NewLine]: ({ elementList: e, key: u }) =>
                            b().createElement(
                                'span',
                                { key: u, 'data-block-type': Ne.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [Ne.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            b().createElement(
                                'span',
                                {
                                    key: u,
                                    'data-block-type': Ne.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    Pe = (e, u, t) => {
                        const a = [];
                        return (
                            e.childList.forEach((r, _) => {
                                const n = `${t}_${_}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        u = e.blockType,
                                        t = Pe(e, Ie[u], n);
                                    a.push(...t);
                                } else a.push(u({ elementList: [r], textBlock: e, key: n }));
                            }),
                            a
                        );
                    },
                    We = (e, u, t, a) => {
                        let r = u.exec(e),
                            _ = 0;
                        for (; r;) (_ !== r.index && t(e.slice(_, r.index)), a(r), (_ = u.lastIndex), (r = u.exec(e)));
                        _ !== e.length && t(e.slice(_));
                    },
                    $e = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    He = ye
                        ? (e) => {
                              const u = [];
                              return (
                                  We(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          u.push(e);
                                      },
                                      (e) => {
                                          u.push(
                                              ...((e) => {
                                                  const u = [];
                                                  return (
                                                      We(
                                                          e,
                                                          /\S\s+/g,
                                                          (e) => {
                                                              var t;
                                                              'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                                                  ? u.push(...((t = e), t.match($e) || []))
                                                                  : u.push(...e.split(''));
                                                          },
                                                          (e) => {
                                                              u.push(e[0]);
                                                          },
                                                      ),
                                                      u
                                                  );
                                              })(e[0]),
                                          );
                                      },
                                  ),
                                  u
                              );
                          }
                        : (e, u) => {
                              const t = /[\s\u002d]/g;
                              let a = t.exec(e);
                              if (!a) return [e];
                              const r = [];
                              let _ = 0;
                              for (; a;) {
                                  const n = u.justifyContent === ke.FlexEnd ? a.index : t.lastIndex;
                                  (r.push(e.slice(_, n)), (_ = n), (a = t.exec(e)));
                              }
                              return (_ !== e.length && r.push(e.slice(_)), r);
                          },
                    ze = (e, u = '', t) => {
                        const a = [];
                        return (
                            We(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    a.push({ blockType: Ne.Word, colorTag: u, childList: He(e, t) });
                                },
                                (e) => {
                                    const t = e[0],
                                        r = Le[t.charAt(0)];
                                    r === Ne.LineBreak
                                        ? a.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: Ne.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: Ne.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(t),
                                          )
                                        : a.push({ blockType: r, colorTag: u, childList: [t] });
                                },
                            ),
                            a
                        );
                    },
                    je = (e, u, t = '', a) => {
                        const r = [];
                        return (
                            We(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...ze(e, t, a));
                                },
                                (e) => {
                                    const _ = e[1],
                                        n = void 0 === u[_] ? e[0] : u[_];
                                    'string' == typeof n || 'number' == typeof n
                                        ? r.push(...ze(String(n), t, a))
                                        : r.push({ blockType: Ne.Binding, colorTag: t, childList: [n] });
                                },
                            ),
                            r
                        );
                    },
                    Ge = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            a = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === Ne.NoBreakWrapper) (e.childList.push(a), t.push(e));
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && t.push(e),
                                t.push({ blockType: Ne.NoBreakWrapper, colorTag: '', childList: [u, a] }));
                        }
                        return (u.childList.length > 0 && t.push(u), t);
                    },
                    Ue = (e, u = {}, t) => {
                        if (!e) return [];
                        const a = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Ne.NoBreakSymbol
                                        ? ((t = !0), u.push(...Ge(u.pop(), e)))
                                        : (t ? u.push(...Ge(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u, t) => {
                                const a = [];
                                return (
                                    We(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            a.push(...je(e, u, '', t));
                                        },
                                        (e) => {
                                            a.push(...je(e[2] + e[3], u, e[1], t));
                                        },
                                    ),
                                    a
                                );
                            })(o(e).replace(/&zwnbsp;/g, '\ufeff'), u, t),
                        );
                        return ((e) => {
                            const u = [];
                            return (
                                e.forEach((e, t) => {
                                    u.push(
                                        ...((e, u) => {
                                            const t = [],
                                                a = e.blockType,
                                                r = Ie[a],
                                                _ = Pe(e, r, u);
                                            return (
                                                a === Ne.NoBreakWrapper
                                                    ? t.push(r({ elementList: _, textBlock: e, key: `${u}` }))
                                                    : t.push(..._),
                                                t
                                            );
                                        })(e, t),
                                    );
                                }),
                                u
                            );
                        })(a);
                    },
                    Ve = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    qe = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    Ke = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const a = qe(e, u),
                            r = e.textContent.length,
                            _ = e.offsetWidth / r,
                            n = Math.ceil(a / _);
                        if (a > 0) {
                            const a = Math.floor((u - e.offsetLeft) / _);
                            return a >= t ? [!0, t + n] : [!1, a];
                        }
                        const i = Math.max(t + n, 0);
                        return r < i ? [!1, 0] : [!0, i];
                    },
                    Ye = (e, u, t, a, r, _) => {
                        let n = -1,
                            i = null;
                        for (let o = t; o >= 0; o--) {
                            const t = e[o],
                                s = Number(e[o].getAttribute('data-block-type'));
                            if (s === Ne.LineBreak || s === Ne.NewLine || s === Ne.Binding) continue;
                            const l = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = Ke(t, a, r),
                                    s = e[0],
                                    m = e[1];
                                if (!s) {
                                    m > 0 && (r -= m);
                                    continue;
                                }
                                const c = l.slice(0, l.length - m) + _,
                                    d = u[o];
                                ((i = b().cloneElement(d, d.props, c)), (n = o));
                                break;
                            }
                            {
                                const e = t.children,
                                    s = u[o],
                                    m = s.props.children,
                                    c = Ye(e, m, e.length - 1, a, r, _),
                                    d = c[0],
                                    E = c[1];
                                if (!(d < 0)) {
                                    const e = m.slice(0, d);
                                    ((i = b().cloneElement(s, s.props, e, E)), (n = o));
                                    break;
                                }
                                r -= l.length;
                            }
                        }
                        return [n, i];
                    },
                    Ze = b().memo(
                        ({
                            text: e,
                            classMix: u,
                            onSizeChanged: t,
                            binding: a,
                            isTooltipEnable: _ = !1,
                            isTruncationAvailable: n = !1,
                            customTooltipArgs: i,
                            targetId: o,
                            justifyContent: s = ke.FlexStart,
                            alignContent: l = ke.FlexStart,
                            truncateIdentify: m = '...',
                        }) => {
                            const c = (0, F.useRef)(null),
                                d = (0, F.useRef)({ height: 0, width: 0 }),
                                E = (0, F.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                A = E[0],
                                C = E[1],
                                g = (0, F.useMemo)(() => Ue(e, a, { justifyContent: s }), [a, s, e]),
                                D = (0, F.useMemo)(() => {
                                    if (
                                        _ &&
                                        A.isTruncated &&
                                        (!a || !Object.values(a).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, i, {
                                                stringifyKwargs: a ? JSON.stringify(a) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: o,
                                        };
                                }, [a, _, o, e, i, A.isTruncated]),
                                B = (0, F.useCallback)(
                                    (e) => {
                                        ((d.current.width = e.contentRect.width),
                                            (d.current.height = e.contentRect.height));
                                        const u = ((e, u, t, a = '...') => {
                                                const r = [...u],
                                                    _ = e.current;
                                                if (!_) return [r, !1];
                                                const n = t.height,
                                                    i = t.width,
                                                    o = _.lastElementChild;
                                                if (!Ve(o, n) && qe(o, i) <= 0) return [r, !1];
                                                const s = _.children,
                                                    l = ((e, u) => {
                                                        let t = 0,
                                                            a = e.length - 1;
                                                        for (; a - t >= 0;) {
                                                            const r = t + Math.ceil(0.5 * (a - t));
                                                            Ve(e[r], u) ? (a = r - 1) : (t = r + 1);
                                                        }
                                                        return t - 1;
                                                    })(s, n);
                                                if (l < 0) return [r, !1];
                                                const m = Ye(s, r, l, i, a.length, a),
                                                    c = m[0],
                                                    d = m[1];
                                                return (d && (r.splice(c, 1, d), r.splice(c + 1)), [r, !0]);
                                            })(c, g, d.current, m),
                                            a = u[0],
                                            r = u[1];
                                        (C({ elementList: a, isTruncated: r, isTruncateFinished: !0 }), t && t(r));
                                    },
                                    [t, m, g],
                                ),
                                h = (0, F.useMemo)(() => ({ justifyContent: s, alignContent: l }), [l, s]);
                            return (
                                ((e, u, t = !0) => {
                                    const a = (0, F.useCallback)(
                                        (e) => {
                                            const t = e[0];
                                            u && u(t);
                                        },
                                        [u],
                                    );
                                    (0, F.useEffect)(() => {
                                        if (!e.current || !t) return;
                                        const u = new xe.Z((e) => a(e));
                                        return (
                                            u.observe(e.current),
                                            () => {
                                                u.disconnect();
                                            }
                                        );
                                    }, [a, t, e]);
                                })(c, B, n),
                                b().createElement(
                                    'div',
                                    {
                                        className: r()(
                                            we.base,
                                            u,
                                            we.base__zeroPadding,
                                            n && we.base__isTruncationAvailable,
                                        ),
                                        style: h,
                                    },
                                    b().createElement('div', { className: we.unTruncated, ref: c }, g),
                                    b().createElement(
                                        ve,
                                        {
                                            tooltipArgs: D,
                                            className: r()(
                                                we.tooltip,
                                                we[`tooltip__justify-${s}`],
                                                we[`tooltip__align-${l}`],
                                            ),
                                        },
                                        b().createElement(
                                            'div',
                                            {
                                                className: r()(
                                                    we.truncated,
                                                    !A.isTruncateFinished && n && we.truncated__hide,
                                                ),
                                                style: h,
                                            },
                                            A.isTruncateFinished && n ? A.elementList : g,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                function Xe() {
                    return (
                        (Xe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Xe.apply(null, arguments)
                    );
                }
                const Qe = { [Be.LowRisk]: pe.Normal, [Be.MediumRisk]: pe.Alert, [Be.HighRisk]: pe.Blocker },
                    Je = ({ size: e, performanceRisk: u = Be.LowRisk, modeName: t, cut: a }) => {
                        var _;
                        const n = R.strings.mode_selector.mode.$dyn(t),
                            i = (0, F.useMemo)(() => {
                                if (n && n.performance) {
                                    const e = n.performance.$dyn(u);
                                    if (e) {
                                        const t = e.header(),
                                            r = e.description(),
                                            _ = a
                                                ? R.views.lobby.common.tooltips.SimpleIconTooltip('resId')
                                                : R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                                      'resId',
                                                  ),
                                            n = a
                                                ? 0
                                                : R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId');
                                        return {
                                            args: { header: t, body: r, headerType: a ? Qe[u] : pe.Normal },
                                            contentId: _,
                                            decoratorId: n,
                                        };
                                    }
                                }
                            }, [n, u, a]);
                        if (u === Be.LowRisk || !n || null == n || !n.performance) return null;
                        const o = (null == (_ = n.performance) ? void 0 : _.$dyn(u)).headerIcon();
                        return b().createElement(
                            se,
                            Xe({}, i, { isEnabled: Boolean(i) }),
                            a
                                ? b().createElement('div', { className: r()(he.iconBig, he[`iconBig__${u}`]) })
                                : b().createElement(
                                      'div',
                                      { className: r()(he.base, he[`base__${e}`], he[`base__${u}`]) },
                                      b().createElement(Ze, {
                                          classMix: he.text,
                                          text: o,
                                          isTruncationAvailable: e === Y.B2,
                                          binding: { icon: b().createElement('div', { className: he.icon }) },
                                          justifyContent: ke.Center,
                                      }),
                                  ),
                        );
                    },
                    eu = ({ index: e, text: u, isSmall: t = !1, classMix: a, tooltipId: _, modeName: n = '' }) =>
                        b().createElement(
                            ce,
                            { args: _ ? { tooltipId: _, modeName: n } : { tooltipId: 'calendarTooltip', index: e } },
                            b().createElement(
                                'div',
                                { className: r()('TimeLeft_base_cf', t && 'TimeLeft_base__small_7c', a) },
                                b().createElement('div', { className: 'TimeLeft_icon_5d' }),
                                u,
                            ),
                        );
                let uu;
                !(function (e) {
                    ((e[(e.NONE = 0)] = 'NONE'), (e[(e.STATIC = 1)] = 'STATIC'), (e[(e.NEW = 2)] = 'NEW'));
                })(uu || (uu = {}));
                const tu = {
                        base: 'BattlePassIcon_base_bf',
                        bpIcon: 'BattlePassIcon_bpIcon_18',
                        bpIcon__extraLarge: 'BattlePassIcon_bpIcon__extraLarge_b3',
                        bpIcon__large: 'BattlePassIcon_bpIcon__large_c2',
                        bpAnim: 'BattlePassIcon_bpAnim_01',
                        bpAnim__extraLarge: 'BattlePassIcon_bpAnim__extraLarge_38',
                        bpAnim__large: 'BattlePassIcon_bpAnim__large_1e',
                    },
                    au = ({ modeName: e, isDisabled: u, battlePassState: t }) => {
                        const a = H([...J('bpIcon', 'bpAnim')], tu);
                        return (
                            (0, F.useEffect)(() => {
                                t !== uu.NEW || u || be('ev_mode_selector_bp_points_icon_appear');
                            }, [t, u]),
                            t === uu.NONE || u
                                ? null
                                : b().createElement(
                                      'div',
                                      { className: tu.base },
                                      b().createElement(
                                          se,
                                          {
                                              contentId:
                                                  R.views.lobby.mode_selector.tooltips.SimplyFormatTooltip('resId'),
                                              args: { modeName: e },
                                              ignoreShowDelay: !0,
                                          },
                                          b().createElement('div', { className: a.bpIcon }),
                                      ),
                                      t === uu.NEW && b().createElement('div', { className: a.bpAnim }),
                                  )
                        );
                    },
                    ru = {
                        base: 'Reward_base_80',
                        header: 'Reward_header_7c',
                        vehicleType: 'Reward_vehicleType_fa',
                        icon: 'Reward_icon_93',
                        base__small: 'Reward_base__small_cb',
                        'base__small-b0': 'Reward_base__small-b0_c5',
                        'base__small-b1': 'Reward_base__small-b1_16',
                        base__medium: 'Reward_base__medium_ce',
                        'base__medium-b1': 'Reward_base__medium-b1_3f',
                        name: 'Reward_name_17',
                    },
                    _u = R.images.gui.maps.icons.mode_selector.rewards,
                    nu = R.images.gui.maps.icons.vehicleTypes.c_24x24,
                    iu = ['small', 'small-b0', 'small-b1', 'medium'],
                    ou = [Y.B0, Y.B1],
                    su = ({
                        mediaSize: e,
                        cardSize: u,
                        iconName: t,
                        name: a,
                        description: _,
                        tooltipID: n,
                        vehicleLevel: i,
                        vehicleType: o,
                        isPremium: s,
                    }) => {
                        const l = `${e}${ou.includes(u) ? `-${u}` : ''}`,
                            m = (0, F.useMemo)(() => {
                                const e = iu.includes(l) ? 'c_48x48' : 'c_64x64';
                                return { backgroundImage: `url(${_u.$dyn(e).$dyn(t)})` };
                            }, [l, t]);
                        return b().createElement(
                            ve,
                            {
                                tooltipArgs: {
                                    args: { tooltipId: n },
                                    body: n ? '' : _,
                                    header: n ? '' : a,
                                    ignoreShowDelay: !0,
                                },
                            },
                            b().createElement(
                                'div',
                                { className: r()(ru.base, ru[`base__${l}`]) },
                                b().createElement(
                                    'div',
                                    { className: ru.header },
                                    b().createElement('div', {
                                        className: ru.vehicleType,
                                        style: o
                                            ? {
                                                  backgroundImage: `url(${nu.$dyn(`${((c = o), c.replace(/-/g, '_'))}${s ? '_elite' : ''}`)})`,
                                              }
                                            : void 0,
                                    }),
                                    b().createElement('div', null, i),
                                ),
                                b().createElement('div', { className: ru.icon, style: m }),
                                a && b().createElement(z, { text: a, classMix: ru.name }),
                            ),
                        );
                        var c;
                    },
                    lu = {
                        base: 'Rewards_base_c8',
                        base__extraSmall: 'Rewards_base__extraSmall_9b',
                        base__small: 'Rewards_base__small_78',
                        base__medium: 'Rewards_base__medium_75',
                    };
                function mu() {
                    return (
                        (mu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        mu.apply(null, arguments)
                    );
                }
                const cu = ({ size: e, rewardsList: u }) => {
                        const t = ue(),
                            a = H(['base'], lu);
                        return b().createElement(
                            'div',
                            { className: a.base },
                            u &&
                                u.map(
                                    (u) =>
                                        u &&
                                        u.value &&
                                        b().createElement(
                                            su,
                                            mu({ key: u.value.iconName, mediaSize: t, cardSize: e }, u.value),
                                        ),
                                ),
                        );
                    },
                    du = {
                        base: 'NormalCard_base_7a',
                        base__medium: 'NormalCard_base__medium_34',
                        base__extraLarge: 'NormalCard_base__extraLarge_87',
                        base__large: 'NormalCard_base__large_a8',
                        base__b0: 'NormalCard_base__b0_17',
                        base__b0__medium: 'NormalCard_base__b0__medium_8c',
                        base__b0__extraLarge: 'NormalCard_base__b0__extraLarge_bc',
                        base__b0__large: 'NormalCard_base__b0__large_ff',
                        base__b1: 'NormalCard_base__b1_ff',
                        base__b1__medium: 'NormalCard_base__b1__medium_63',
                        base__b1__extraLarge: 'NormalCard_base__b1__extraLarge_b0',
                        base__b1__large: 'NormalCard_base__b1__large_f9',
                        base__b2: 'NormalCard_base__b2_54',
                        base__b2__medium: 'NormalCard_base__b2__medium_57',
                        base__b2__extraLarge: 'NormalCard_base__b2__extraLarge_c0',
                        base__b2__large: 'NormalCard_base__b2__large_22',
                        base__b3: 'NormalCard_base__b3_50',
                        base__b3__medium: 'NormalCard_base__b3__medium_25',
                        base__b3__extraLarge: 'NormalCard_base__b3__extraLarge_8f',
                        base__b3__large: 'NormalCard_base__b3__large_18',
                        base__b4: 'NormalCard_base__b4_d9',
                        base__b4__medium: 'NormalCard_base__b4__medium_5c',
                        base__b4__extraLarge: 'NormalCard_base__b4__extraLarge_c3',
                        base__b4__large: 'NormalCard_base__b4__large_52',
                        base__b5: 'NormalCard_base__b5_f3',
                        base__b5__medium: 'NormalCard_base__b5__medium_30',
                        base__b5__extraLarge: 'NormalCard_base__b5__extraLarge_2b',
                        base__b5__large: 'NormalCard_base__b5__large_df',
                        base__b6: 'NormalCard_base__b6_8b',
                        base__b6__medium: 'NormalCard_base__b6__medium_10',
                        base__b6__extraLarge: 'NormalCard_base__b6__extraLarge_35',
                        base__b6__large: 'NormalCard_base__b6__large_5c',
                        name: 'NormalCard_name_ce',
                        name__b0: 'NormalCard_name__b0_98',
                        name__b1: 'NormalCard_name__b1_a6',
                        name__b0__medium: 'NormalCard_name__b0__medium_d2',
                        name__b1__medium: 'NormalCard_name__b1__medium_e3',
                        name__b0__extraLarge: 'NormalCard_name__b0__extraLarge_0e',
                        name__b0__large: 'NormalCard_name__b0__large_d2',
                        name__b1__extraLarge: 'NormalCard_name__b1__extraLarge_a3',
                        name__b1__large: 'NormalCard_name__b1__large_20',
                        name__b2: 'NormalCard_name__b2_73',
                        name__b2__medium: 'NormalCard_name__b2__medium_1c',
                        name__b2__extraLarge: 'NormalCard_name__b2__extraLarge_76',
                        name__b2__large: 'NormalCard_name__b2__large_53',
                        name__b3: 'NormalCard_name__b3_49',
                        name__b3__medium: 'NormalCard_name__b3__medium_78',
                        name__b3__extraLarge: 'NormalCard_name__b3__extraLarge_e9',
                        name__b3__large: 'NormalCard_name__b3__large_68',
                        name__b4: 'NormalCard_name__b4_ac',
                        name__b4__medium: 'NormalCard_name__b4__medium_e4',
                        name__b4__extraLarge: 'NormalCard_name__b4__extraLarge_2b',
                        name__b4__large: 'NormalCard_name__b4__large_a3',
                        name__b5: 'NormalCard_name__b5_2b',
                        name__b5__medium: 'NormalCard_name__b5__medium_c3',
                        name__b5__extraLarge: 'NormalCard_name__b5__extraLarge_78',
                        name__b5__large: 'NormalCard_name__b5__large_9b',
                        name__b6: 'NormalCard_name__b6_49',
                        name__b6__medium: 'NormalCard_name__b6__medium_dc',
                        name__b6__extraLarge: 'NormalCard_name__b6__extraLarge_83',
                        name__b6__large: 'NormalCard_name__b6__large_89',
                        formatText: 'NormalCard_formatText_cb',
                        formatText__b0__extraSmall: 'NormalCard_formatText__b0__extraSmall_7b',
                        formatText__b0__small: 'NormalCard_formatText__b0__small_65',
                        formatText__b1__extraSmall: 'NormalCard_formatText__b1__extraSmall_e4',
                        formatText__b1__small: 'NormalCard_formatText__b1__small_1e',
                        formatText__b2__extraSmall: 'NormalCard_formatText__b2__extraSmall_e0',
                        formatText__b2__small: 'NormalCard_formatText__b2__small_e4',
                        formatText__b3__extraSmall: 'NormalCard_formatText__b3__extraSmall_13',
                        formatText__b3__small: 'NormalCard_formatText__b3__small_8c',
                        formatText__b4__extraSmall: 'NormalCard_formatText__b4__extraSmall_f5',
                        formatText__b4__small: 'NormalCard_formatText__b4__small_49',
                        formatText__b5__extraSmall: 'NormalCard_formatText__b5__extraSmall_04',
                        formatText__b5__small: 'NormalCard_formatText__b5__small_b6',
                        formatText__b6__extraSmall: 'NormalCard_formatText__b6__extraSmall_a3',
                        formatText__b6__small: 'NormalCard_formatText__b6__small_e0',
                        subtitle: 'NormalCard_subtitle_75',
                        subtitle__b0: 'NormalCard_subtitle__b0_bf',
                        subtitle__b1: 'NormalCard_subtitle__b1_2e',
                        subtitle__b0__medium: 'NormalCard_subtitle__b0__medium_42',
                        subtitle__b1__medium: 'NormalCard_subtitle__b1__medium_95',
                        subtitle__b0__extraLarge: 'NormalCard_subtitle__b0__extraLarge_f2',
                        subtitle__b0__large: 'NormalCard_subtitle__b0__large_76',
                        subtitle__b1__extraLarge: 'NormalCard_subtitle__b1__extraLarge_8f',
                        subtitle__b1__large: 'NormalCard_subtitle__b1__large_d1',
                        subtitle__b2: 'NormalCard_subtitle__b2_98',
                        subtitle__b2__medium: 'NormalCard_subtitle__b2__medium_86',
                        subtitle__b2__extraLarge: 'NormalCard_subtitle__b2__extraLarge_44',
                        subtitle__b2__large: 'NormalCard_subtitle__b2__large_77',
                        subtitle__b3: 'NormalCard_subtitle__b3_7e',
                        subtitle__b3__medium: 'NormalCard_subtitle__b3__medium_57',
                        subtitle__b3__extraLarge: 'NormalCard_subtitle__b3__extraLarge_f3',
                        subtitle__b3__large: 'NormalCard_subtitle__b3__large_00',
                        subtitle__b4: 'NormalCard_subtitle__b4_b1',
                        subtitle__b4__medium: 'NormalCard_subtitle__b4__medium_64',
                        subtitle__b4__extraLarge: 'NormalCard_subtitle__b4__extraLarge_44',
                        subtitle__b4__large: 'NormalCard_subtitle__b4__large_6d',
                        subtitle__b5: 'NormalCard_subtitle__b5_4a',
                        subtitle__b5__medium: 'NormalCard_subtitle__b5__medium_03',
                        subtitle__b5__extraLarge: 'NormalCard_subtitle__b5__extraLarge_04',
                        subtitle__b5__large: 'NormalCard_subtitle__b5__large_14',
                        subtitle__b6: 'NormalCard_subtitle__b6_51',
                        subtitle__b6__medium: 'NormalCard_subtitle__b6__medium_94',
                        subtitle__b6__extraLarge: 'NormalCard_subtitle__b6__extraLarge_34',
                        subtitle__b6__large: 'NormalCard_subtitle__b6__large_f3',
                        subtitle__normal: 'NormalCard_subtitle__normal_23',
                        subtitle__noReward: 'NormalCard_subtitle__noReward_9c',
                        subtitle__statusActive: 'NormalCard_subtitle__statusActive_8c',
                        subtitle__staticPrepare: 'NormalCard_subtitle__staticPrepare_7c',
                        subtitle__anim: 'NormalCard_subtitle__anim_07',
                        subtitle__disable: 'NormalCard_subtitle__disable_9d',
                        statusDescription: 'NormalCard_statusDescription_9b',
                        statusDescription__position: 'NormalCard_statusDescription__position_e1',
                        statusDescription__color: 'NormalCard_statusDescription__color_b5',
                        belowStatus: 'NormalCard_belowStatus_05',
                        calendarIcon: 'NormalCard_calendarIcon_c1',
                        calendarIcon__hover: 'NormalCard_calendarIcon__hover_7c',
                        calendarIcon__extraSmall: 'NormalCard_calendarIcon__extraSmall_9a',
                        calendarIcon__small: 'NormalCard_calendarIcon__small_3d',
                        timeLeft: 'NormalCard_timeLeft_28',
                        timeLeft__small: 'NormalCard_timeLeft__small_a5',
                        footer: 'NormalCard_footer_ba',
                        footer__medium: 'NormalCard_footer__medium_77',
                        footer__extraLarge: 'NormalCard_footer__extraLarge_5e',
                        footer__large: 'NormalCard_footer__large_69',
                        footer__anim: 'NormalCard_footer__anim_73',
                        mask: 'NormalCard_mask_ee',
                        mask__b0: 'NormalCard_mask__b0_e9',
                        mask__b1: 'NormalCard_mask__b1_02',
                        mask__b0__medium: 'NormalCard_mask__b0__medium_ac',
                        mask__b1__medium: 'NormalCard_mask__b1__medium_26',
                        mask__b0__extraLarge: 'NormalCard_mask__b0__extraLarge_28',
                        mask__b0__large: 'NormalCard_mask__b0__large_d1',
                        mask__b1__extraLarge: 'NormalCard_mask__b1__extraLarge_74',
                        mask__b1__large: 'NormalCard_mask__b1__large_74',
                        mask__b2: 'NormalCard_mask__b2_71',
                        mask__b2__medium: 'NormalCard_mask__b2__medium_b2',
                        mask__b2__extraLarge: 'NormalCard_mask__b2__extraLarge_6c',
                        mask__b2__large: 'NormalCard_mask__b2__large_b2',
                        mask__b3: 'NormalCard_mask__b3_f4',
                        mask__b3__medium: 'NormalCard_mask__b3__medium_d1',
                        mask__b3__extraLarge: 'NormalCard_mask__b3__extraLarge_3a',
                        mask__b3__large: 'NormalCard_mask__b3__large_17',
                        mask__b4: 'NormalCard_mask__b4_3c',
                        mask__b4__medium: 'NormalCard_mask__b4__medium_b1',
                        mask__b4__extraLarge: 'NormalCard_mask__b4__extraLarge_4c',
                        mask__b4__large: 'NormalCard_mask__b4__large_ed',
                        mask__b5: 'NormalCard_mask__b5_85',
                        mask__b5__medium: 'NormalCard_mask__b5__medium_99',
                        mask__b5__extraLarge: 'NormalCard_mask__b5__extraLarge_8a',
                        mask__b5__large: 'NormalCard_mask__b5__large_cc',
                        mask__b6: 'NormalCard_mask__b6_90',
                        mask__b6__medium: 'NormalCard_mask__b6__medium_fe',
                        mask__b6__extraLarge: 'NormalCard_mask__b6__extraLarge_97',
                        mask__b6__large: 'NormalCard_mask__b6__large_bc',
                        mask__static: 'NormalCard_mask__static_ae',
                        mask__anim: 'NormalCard_mask__anim_b6',
                        icon: 'NormalCard_icon_cb',
                        icon__animPrepare: 'NormalCard_icon__animPrepare_a2',
                        icon__static__b0: 'NormalCard_icon__static__b0_3c',
                        icon__static__b1: 'NormalCard_icon__static__b1_36',
                        icon__static__b2: 'NormalCard_icon__static__b2_13',
                        icon__static__b3: 'NormalCard_icon__static__b3_6d',
                        icon__anim__b0: 'NormalCard_icon__anim__b0_e3',
                        icon__anim__b1: 'NormalCard_icon__anim__b1_04',
                        icon__static__b0__medium: 'NormalCard_icon__static__b0__medium_64',
                        icon__static__b1__medium: 'NormalCard_icon__static__b1__medium_b9',
                        icon__anim__b0__medium: 'NormalCard_icon__anim__b0__medium_a6',
                        icon__anim__b1__medium: 'NormalCard_icon__anim__b1__medium_6c',
                        icon__static__b0__extraLarge: 'NormalCard_icon__static__b0__extraLarge_0b',
                        icon__static__b0__large: 'NormalCard_icon__static__b0__large_7c',
                        icon__static__b1__extraLarge: 'NormalCard_icon__static__b1__extraLarge_8b',
                        icon__static__b1__large: 'NormalCard_icon__static__b1__large_f0',
                        icon__anim__b0__extraLarge: 'NormalCard_icon__anim__b0__extraLarge_2c',
                        icon__anim__b0__large: 'NormalCard_icon__anim__b0__large_07',
                        icon__anim__b1__extraLarge: 'NormalCard_icon__anim__b1__extraLarge_a7',
                        icon__anim__b1__large: 'NormalCard_icon__anim__b1__large_0a',
                        icon__anim__b2: 'NormalCard_icon__anim__b2_19',
                        icon__static__b2__medium: 'NormalCard_icon__static__b2__medium_92',
                        icon__anim__b2__medium: 'NormalCard_icon__anim__b2__medium_da',
                        icon__static__b2__extraLarge: 'NormalCard_icon__static__b2__extraLarge_99',
                        icon__static__b2__large: 'NormalCard_icon__static__b2__large_e3',
                        icon__anim__b2__extraLarge: 'NormalCard_icon__anim__b2__extraLarge_8e',
                        icon__anim__b2__large: 'NormalCard_icon__anim__b2__large_94',
                        icon__anim__b3: 'NormalCard_icon__anim__b3_e8',
                        icon__static__b3__medium: 'NormalCard_icon__static__b3__medium_1a',
                        icon__anim__b3__medium: 'NormalCard_icon__anim__b3__medium_eb',
                        icon__static__b3__extraLarge: 'NormalCard_icon__static__b3__extraLarge_a0',
                        icon__static__b3__large: 'NormalCard_icon__static__b3__large_e3',
                        icon__anim__b3__extraLarge: 'NormalCard_icon__anim__b3__extraLarge_92',
                        icon__anim__b3__large: 'NormalCard_icon__anim__b3__large_7a',
                        icon__huge: 'NormalCard_icon__huge_56',
                        icon__big: 'NormalCard_icon__big_c9',
                        icon__medium: 'NormalCard_icon__medium_87',
                        icon__small: 'NormalCard_icon__small_a6',
                        icon__b0: 'NormalCard_icon__b0_f2',
                        icon__b1: 'NormalCard_icon__b1_50',
                        icon__b0__medium: 'NormalCard_icon__b0__medium_d8',
                        icon__b1__medium: 'NormalCard_icon__b1__medium_d4',
                        icon__b0__extraLarge: 'NormalCard_icon__b0__extraLarge_3b',
                        icon__b0__large: 'NormalCard_icon__b0__large_32',
                        icon__b1__extraLarge: 'NormalCard_icon__b1__extraLarge_db',
                        icon__b1__large: 'NormalCard_icon__b1__large_53',
                        icon__b2: 'NormalCard_icon__b2_ae',
                        icon__b2__medium: 'NormalCard_icon__b2__medium_17',
                        icon__b2__extraLarge: 'NormalCard_icon__b2__extraLarge_b9',
                        icon__b2__large: 'NormalCard_icon__b2__large_a7',
                        icon__b3: 'NormalCard_icon__b3_28',
                        icon__b3__medium: 'NormalCard_icon__b3__medium_74',
                        icon__b3__extraLarge: 'NormalCard_icon__b3__extraLarge_64',
                        icon__b3__large: 'NormalCard_icon__b3__large_89',
                        icon__b4: 'NormalCard_icon__b4_f8',
                        icon__b4__medium: 'NormalCard_icon__b4__medium_c6',
                        icon__b4__extraLarge: 'NormalCard_icon__b4__extraLarge_eb',
                        icon__b4__large: 'NormalCard_icon__b4__large_90',
                        icon__b5: 'NormalCard_icon__b5_e9',
                        icon__b5__medium: 'NormalCard_icon__b5__medium_df',
                        icon__b5__extraLarge: 'NormalCard_icon__b5__extraLarge_e3',
                        icon__b5__large: 'NormalCard_icon__b5__large_2d',
                        icon__b6: 'NormalCard_icon__b6_dc',
                        icon__b6__medium: 'NormalCard_icon__b6__medium_73',
                        icon__b6__extraLarge: 'NormalCard_icon__b6__extraLarge_63',
                        icon__b6__large: 'NormalCard_icon__b6__large_c3',
                        statusNotActive: 'NormalCard_statusNotActive_9c',
                        statusNotActive__b0: 'NormalCard_statusNotActive__b0_4f',
                        statusNotActive__b1: 'NormalCard_statusNotActive__b1_78',
                        statusNotActive__b0__medium: 'NormalCard_statusNotActive__b0__medium_8f',
                        statusNotActive__b1__medium: 'NormalCard_statusNotActive__b1__medium_f6',
                        statusNotActive__b0__extraLarge: 'NormalCard_statusNotActive__b0__extraLarge_33',
                        statusNotActive__b0__large: 'NormalCard_statusNotActive__b0__large_bf',
                        statusNotActive__b1__extraLarge: 'NormalCard_statusNotActive__b1__extraLarge_d8',
                        statusNotActive__b1__large: 'NormalCard_statusNotActive__b1__large_10',
                        statusNotActive__b2: 'NormalCard_statusNotActive__b2_35',
                        statusNotActive__b2__medium: 'NormalCard_statusNotActive__b2__medium_f9',
                        statusNotActive__b2__extraLarge: 'NormalCard_statusNotActive__b2__extraLarge_09',
                        statusNotActive__b2__large: 'NormalCard_statusNotActive__b2__large_a0',
                        statusNotActive__b3: 'NormalCard_statusNotActive__b3_fe',
                        statusNotActive__b3__medium: 'NormalCard_statusNotActive__b3__medium_88',
                        statusNotActive__b3__extraLarge: 'NormalCard_statusNotActive__b3__extraLarge_b2',
                        statusNotActive__b3__large: 'NormalCard_statusNotActive__b3__large_69',
                        statusNotActive__b4: 'NormalCard_statusNotActive__b4_dd',
                        statusNotActive__b4__medium: 'NormalCard_statusNotActive__b4__medium_ae',
                        statusNotActive__b4__extraLarge: 'NormalCard_statusNotActive__b4__extraLarge_78',
                        statusNotActive__b4__large: 'NormalCard_statusNotActive__b4__large_d5',
                        statusNotActive__b5: 'NormalCard_statusNotActive__b5_02',
                        statusNotActive__b5__medium: 'NormalCard_statusNotActive__b5__medium_24',
                        statusNotActive__b5__extraLarge: 'NormalCard_statusNotActive__b5__extraLarge_f4',
                        statusNotActive__b5__large: 'NormalCard_statusNotActive__b5__large_1f',
                        statusNotActive__b6: 'NormalCard_statusNotActive__b6_9d',
                        statusNotActive__b6__medium: 'NormalCard_statusNotActive__b6__medium_cd',
                        statusNotActive__b6__extraLarge: 'NormalCard_statusNotActive__b6__extraLarge_09',
                        statusNotActive__b6__large: 'NormalCard_statusNotActive__b6__large_09',
                        widgetOverlay: 'NormalCard_widgetOverlay_09',
                        widgetOverlay__hide: 'NormalCard_widgetOverlay__hide_7e',
                        darken__show: 'NormalCard_darken__show_3f',
                    };
                let Eu;
                !(function (e) {
                    ((e.Huge = 'huge'), (e.Big = 'big'), (e.Medium = 'medium'), (e.Small = 'small'));
                })(Eu || (Eu = {}));
                const Au = [Y.B4, Y.B5, Y.B6],
                    Fu = [Y.B0, Y.B1, Y.B2],
                    bu = {
                        [Y.B0]: { [Z.Big]: Eu.Huge, [Z.Medium]: Eu.Huge, [Z.Small]: Eu.Big },
                        [Y.B1]: { [Z.Big]: Eu.Huge, [Z.Medium]: Eu.Huge, [Z.Small]: Eu.Big },
                        [Y.B2]: { [Z.Big]: Eu.Huge, [Z.Medium]: Eu.Huge, [Z.Small]: Eu.Big },
                        [Y.B3]: { [Z.Big]: Eu.Huge, [Z.Medium]: Eu.Big, [Z.Small]: Eu.Big },
                        [Y.B4]: { [Z.Big]: Eu.Big, [Z.Medium]: Eu.Big, [Z.Small]: Eu.Medium },
                        [Y.B5]: { [Z.Big]: Eu.Medium, [Z.Medium]: Eu.Medium, [Z.Small]: Eu.Small },
                        [Y.B6]: { [Z.Big]: Eu.Medium, [Z.Medium]: Eu.Small, [Z.Small]: Eu.Small },
                    },
                    Cu = [
                        'name',
                        'eventName',
                        'statusNotActive',
                        'description',
                        'conditions',
                        'children',
                        'onHoverChanged',
                        'calendarTooltip',
                        'widgetComponent',
                        'battlePassState',
                        'isDisabled',
                        'timeLeft',
                        'rewardList',
                        'statusActive',
                        'divider',
                        'belowStatusComponent',
                        'nameSuffixComponent',
                        'forceShowIcon',
                        'hideStatus',
                        'noWidgetSizes',
                        'classNames',
                        'resourceFolderGetter',
                    ];
                function gu() {
                    return (
                        (gu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        gu.apply(null, arguments)
                    );
                }
                const Du = (e) => {
                    let u = e.name,
                        t = e.eventName,
                        a = e.statusNotActive,
                        _ = e.description,
                        n = e.conditions,
                        i = e.children,
                        s = e.onHoverChanged,
                        l = e.calendarTooltip,
                        m = void 0 === l ? '' : l,
                        c = e.widgetComponent,
                        d = e.battlePassState,
                        E = e.isDisabled,
                        A = e.timeLeft,
                        C = e.rewardList,
                        g = e.statusActive,
                        D = e.divider,
                        B = void 0 === D ? ' ' : D,
                        h = e.belowStatusComponent,
                        p = e.nameSuffixComponent,
                        f = e.forceShowIcon,
                        v = void 0 !== f && f,
                        N = e.hideStatus,
                        k = void 0 !== N && N,
                        T = e.noWidgetSizes,
                        L = void 0 === T ? [Y.B5, Y.B6] : T,
                        y = e.classNames,
                        S = e.resourceFolderGetter,
                        O = void 0 === S ? K : S,
                        M = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (u.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, Cu);
                    const I = ue(),
                        P = H(
                            [
                                ...J(
                                    'base',
                                    'icon',
                                    'footer',
                                    'name',
                                    'subtitle',
                                    'mask',
                                    'formatText',
                                    'icon__anim',
                                    'icon__static',
                                    'statusNotActive',
                                ),
                                'calendarIcon',
                            ],
                            du,
                        ),
                        W = w('model', x.None),
                        $ = W.onItemClicked,
                        z = W.onInfoClicked,
                        j = M.resourcesFolderName,
                        G = M.size,
                        U = M.isSelected,
                        V = M.showWidget,
                        X = M.isNew,
                        Q = M.modeName,
                        te = M.index,
                        ae = M.performance,
                        re = ee(s),
                        _e = re[0],
                        ne = re[1],
                        ie = (0, F.useMemo)(() => bu[G][I], [G, I]),
                        oe = (0, F.useMemo)(() => {
                            const e = O(j);
                            if (null !== e) {
                                const u = e.$dyn(`icon_${ie}`);
                                if (void 0 !== u) return { backgroundImage: `url(${u})` };
                            }
                        }, [O, j, ie]),
                        se = V || U,
                        le = Au.includes(G),
                        me = G === Y.B0,
                        ce = G === Y.B1,
                        de = G === Y.B2,
                        Ee = G === Y.B3,
                        Ae = Fu.includes(G),
                        Fe = !L.includes(G) && V && c,
                        be = se && !le,
                        Ce = _e && !le && !se,
                        ge = _e || (U && g),
                        Be = I !== Z.Big,
                        he = C && C.length > 0 && !a && Ae,
                        pe = ae && ae.showPerfRisk,
                        fe = (0, F.useMemo)(
                            () =>
                                E
                                    ? R.strings.ranked_battles.rankedBattlesUnreachableView.subtitleText()
                                    : g || t || void 0,
                            [E, g, t],
                        ),
                        ve = (0, F.useMemo)(
                            () => (Ae || Ee ? a || '' : void 0 === a ? '' : a.replace('\n', ' ')),
                            [Ae, a, Ee],
                        );
                    let xe = '';
                    ce && _ === fe ? n && (xe = o(n)) : (me && _ === fe) || (xe = o(_ + B + n));
                    const we = r()(
                            du.icon,
                            du[`icon__${ie}`],
                            P[`icon__${G}`],
                            !le && du.icon__animPrepare,
                            be && P[`icon__static__${G}`],
                            Ce && P[`icon__anim__${G}`],
                        ),
                        Ne = r()(du.mask, P[`mask__${G}`], be && du.mask__static, Ce && du.mask__anim),
                        ke = r()(
                            P.subtitle,
                            P[`subtitle__${G}`],
                            (t || !le) && du.subtitle__normal,
                            !Ae && du.subtitle__noReward,
                            g && le && du.subtitle__statusActive,
                            g && se && du.subtitle__staticPrepare,
                            ge && du.subtitle__anim,
                            E && du.subtitle__disable,
                            null == y ? void 0 : y.subtitle,
                        ),
                        Te = r()(
                            du.statusDescription,
                            de && du.statusDescription__position,
                            Ae && du.statusDescription__color,
                        ),
                        Le = r()(P.footer, (_e || U) && !V && Ee && du.footer__anim, null == y ? void 0 : y.footer),
                        ye = r()(P.formatText, P[`formatText__${G}`]),
                        Se = r()(du.darken, V && du.darken__show),
                        Re = r()(du.widgetOverlay, !Fe && du.widgetOverlay__hide, null == y ? void 0 : y.widgetOverlay);
                    return b().createElement(
                        'div',
                        { className: r()(P.base, P[`base__${G}`]) },
                        b().createElement(
                            De,
                            gu({ onHoverChanged: ne, isDisabled: E }, M, {
                                onItemClicked: $,
                                onInfoClicked: z,
                                resourceFolderGetter: O,
                            }),
                            he && b().createElement(cu, { size: G, rewardsList: C }),
                            a &&
                                b().createElement(
                                    'div',
                                    { className: r()(P.statusNotActive, P[`statusNotActive__${G}`]) },
                                    b().createElement(q, { text: ve, classMix: ye }),
                                ),
                            b().createElement('div', { className: Se }),
                            c && b().createElement('div', { className: Re }, c),
                            i,
                            (!Fe || v) &&
                                b().createElement(
                                    'div',
                                    { className: Ne },
                                    b().createElement('div', { className: we, style: oe }),
                                ),
                            b().createElement('div', { className: r()(du.name, P.name, P[`name__${G}`]) }, u, p),
                            b().createElement(
                                'div',
                                { className: ke },
                                !k && (!de || E) && b().createElement(q, { classMix: ye, text: fe || '' }),
                                xe &&
                                    Ae &&
                                    !E &&
                                    (!Fe || Ae) &&
                                    b().createElement(
                                        'div',
                                        { className: Te },
                                        b().createElement(q, { classMix: ye, text: xe }),
                                    ),
                                pe &&
                                    Ae &&
                                    b().createElement(Je, {
                                        size: G,
                                        modeName: Q,
                                        performanceRisk: ae.performanceRisk,
                                        cut: !1,
                                    }),
                                b().createElement(
                                    'div',
                                    { className: r()(du.belowStatus, null == y ? void 0 : y.belowStatus) },
                                    h,
                                ),
                            ),
                            n &&
                                b().createElement(
                                    'div',
                                    { className: Le },
                                    b().createElement(q, { classMix: ye, text: o(n) }),
                                ),
                            A &&
                                !X &&
                                b().createElement(eu, {
                                    index: te,
                                    text: A,
                                    isSmall: Be,
                                    classMix: r()(du.timeLeft, Be && du.timeLeft__small),
                                    tooltipId: m,
                                    modeName: Q,
                                }),
                            b().createElement(au, { modeName: Q, isDisabled: E, battlePassState: d }),
                            pe &&
                                !Ae &&
                                b().createElement(Je, {
                                    size: G,
                                    modeName: Q,
                                    performanceRisk: ae.performanceRisk,
                                    cut: !0,
                                }),
                        ),
                    );
                };
                let Bu, hu, pu, fu, vu;
                (!(function (e) {
                    ((e[(e.Progression = 0)] = 'Progression'),
                        (e[(e.RankRewards = 1)] = 'RankRewards'),
                        (e[(e.YearlyRewards = 2)] = 'YearlyRewards'),
                        (e[(e.WeeklyQuests = 3)] = 'WeeklyQuests'),
                        (e[(e.Shop = 4)] = 'Shop'),
                        (e[(e.Leaderboard = 5)] = 'Leaderboard'),
                        (e[(e.YearlyStatistics = 6)] = 'YearlyStatistics'));
                })(Bu || (Bu = {})),
                    (function (e) {
                        ((e[(e.First = 6)] = 'First'),
                            (e[(e.Second = 5)] = 'Second'),
                            (e[(e.Third = 4)] = 'Third'),
                            (e[(e.Fourth = 3)] = 'Fourth'),
                            (e[(e.Fifth = 2)] = 'Fifth'),
                            (e[(e.Sixth = 1)] = 'Sixth'));
                    })(hu || (hu = {})),
                    (function (e) {
                        ((e.First = 'first'), (e.Second = 'second'), (e.Third = 'third'));
                    })(pu || (pu = {})),
                    (function (e) {
                        ((e[(e.A = 1)] = 'A'),
                            (e[(e.B = 2)] = 'B'),
                            (e[(e.C = 3)] = 'C'),
                            (e[(e.D = 4)] = 'D'),
                            (e[(e.E = 5)] = 'E'));
                    })(fu || (fu = {})),
                    (function (e) {
                        ((e.Achieved = 'achieved'), (e.Possible = 'possible'), (e.NotAchieved = 'notAchieved'));
                    })(vu || (vu = {})));
                const xu = R.strings.comp7_ext.division,
                    wu = { [fu.A]: 'A', [fu.B]: 'B', [fu.C]: 'C', [fu.D]: 'D', [fu.E]: 'E' },
                    Nu = (e) => xu.$dyn(wu[e]),
                    ku = {
                        [hu.First]: 'first',
                        [hu.Second]: 'second',
                        [hu.Third]: 'third',
                        [hu.Fourth]: 'fourth',
                        [hu.Fifth]: 'fifth',
                        [hu.Sixth]: 'sixth',
                    },
                    Tu = [hu.First, hu.Second, hu.Third, hu.Fourth],
                    Lu = (e) => Tu.includes(e);
                var yu = t(926),
                    Su = t.n(yu);
                let Ru, Ou, Mu;
                (!(function (e) {
                    ((e[(e.ExtraSmall = k.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = k.small.width)] = 'Small'),
                        (e[(e.Medium = k.medium.width)] = 'Medium'),
                        (e[(e.Large = k.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = k.extraLarge.width)] = 'ExtraLarge'));
                })(Ru || (Ru = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = k.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = k.small.width)] = 'Small'),
                            (e[(e.Medium = k.medium.width)] = 'Medium'),
                            (e[(e.Large = k.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = k.extraLarge.width)] = 'ExtraLarge'));
                    })(Ou || (Ou = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = k.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = k.small.height)] = 'Small'),
                            (e[(e.Medium = k.medium.height)] = 'Medium'),
                            (e[(e.Large = k.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = k.extraLarge.height)] = 'ExtraLarge'));
                    })(Mu || (Mu = {})));
                const Iu = () => {
                        const e = (0, F.useContext)(I),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return Ru.ExtraLarge;
                                    case e.large:
                                        return Ru.Large;
                                    case e.medium:
                                        return Ru.Medium;
                                    case e.small:
                                        return Ru.Small;
                                    case e.extraSmall:
                                        return Ru.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Ru.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return Ou.ExtraLarge;
                                    case e.largeWidth:
                                        return Ou.Large;
                                    case e.mediumWidth:
                                        return Ou.Medium;
                                    case e.smallWidth:
                                        return Ou.Small;
                                    case e.extraSmallWidth:
                                        return Ou.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Ou.ExtraSmall);
                                }
                            })(e),
                            _ = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return Mu.ExtraLarge;
                                    case e.largeHeight:
                                        return Mu.Large;
                                    case e.mediumHeight:
                                        return Mu.Medium;
                                    case e.smallHeight:
                                        return Mu.Small;
                                    case e.extraSmallHeight:
                                        return Mu.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Mu.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: _, remScreenWidth: u, remScreenHeight: t };
                    },
                    Pu = ['children', 'className'];
                function Wu() {
                    return (
                        (Wu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Wu.apply(null, arguments)
                    );
                }
                const $u = {
                        [Ou.ExtraSmall]: '',
                        [Ou.Small]: Su().SMALL_WIDTH,
                        [Ou.Medium]: `${Su().SMALL_WIDTH} ${Su().MEDIUM_WIDTH}`,
                        [Ou.Large]: `${Su().SMALL_WIDTH} ${Su().MEDIUM_WIDTH} ${Su().LARGE_WIDTH}`,
                        [Ou.ExtraLarge]: `${Su().SMALL_WIDTH} ${Su().MEDIUM_WIDTH} ${Su().LARGE_WIDTH} ${Su().EXTRA_LARGE_WIDTH}`,
                    },
                    Hu = {
                        [Mu.ExtraSmall]: '',
                        [Mu.Small]: Su().SMALL_HEIGHT,
                        [Mu.Medium]: `${Su().SMALL_HEIGHT} ${Su().MEDIUM_HEIGHT}`,
                        [Mu.Large]: `${Su().SMALL_HEIGHT} ${Su().MEDIUM_HEIGHT} ${Su().LARGE_HEIGHT}`,
                        [Mu.ExtraLarge]: `${Su().SMALL_HEIGHT} ${Su().MEDIUM_HEIGHT} ${Su().LARGE_HEIGHT} ${Su().EXTRA_LARGE_HEIGHT}`,
                    },
                    zu = {
                        [Ru.ExtraSmall]: '',
                        [Ru.Small]: Su().SMALL,
                        [Ru.Medium]: `${Su().SMALL} ${Su().MEDIUM}`,
                        [Ru.Large]: `${Su().SMALL} ${Su().MEDIUM} ${Su().LARGE}`,
                        [Ru.ExtraLarge]: `${Su().SMALL} ${Su().MEDIUM} ${Su().LARGE} ${Su().EXTRA_LARGE}`,
                    },
                    ju = (e) => {
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
                            })(e, Pu);
                        const _ = Iu(),
                            n = _.mediaWidth,
                            i = _.mediaHeight,
                            o = _.mediaSize;
                        return b().createElement('div', Wu({ className: r()(t, $u[n], Hu[i], zu[o]) }, a), u);
                    },
                    Gu = ['children'],
                    Uu = (e) => {
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
                            })(e, Gu);
                        return b().createElement($, null, b().createElement(ju, t, u));
                    },
                    Vu = {
                        widget: 'Comp7BattleCard_widget_db',
                        base__b0: 'Comp7BattleCard_base__b0_98',
                        base__b1: 'Comp7BattleCard_base__b1_61',
                        base__b2: 'Comp7BattleCard_base__b2_b8',
                        belowStatus: 'Comp7BattleCard_belowStatus_dc',
                    },
                    qu = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Ku, Yu;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(Ku || (Ku = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(Yu || (Yu = {})));
                const Zu = ({ size: e = Ku.Default }) => {
                        const u = r()(qu.background, qu[`background__${e}`]);
                        return b().createElement('div', { className: u });
                    },
                    Xu = (e, u) => {
                        let t;
                        const a = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(a));
                        };
                    };
                let Qu, Ju;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(Qu || (Qu = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(Ju || (Ju = {})));
                const et = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    ut = ({ size: e }) => {
                        const u = r()(et.base, et[`base__${e}`]);
                        return b().createElement('div', { className: u });
                    },
                    tt = (0, F.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: r,
                            to: _,
                            onEndAnimation: n,
                            onChangeAnimationState: i,
                        }) => {
                            const o = _ < a,
                                s = (0, F.useState)(Ju.Idle),
                                l = s[0],
                                m = s[1],
                                c = l === Ju.In,
                                d = l === Ju.End,
                                E = l === Ju.Idle,
                                A = (0, F.useCallback)(
                                    (e) => {
                                        (m(e), i && i(e));
                                    },
                                    [i],
                                );
                            ((0, F.useEffect)(() => {
                                if (E && !t)
                                    return Xu(() => {
                                        A(Ju.In);
                                    }, u);
                            }, [A, t, E, u]),
                                (0, F.useEffect)(() => {
                                    if (c)
                                        return Xu(() => {
                                            (n && n(), A(Ju.End));
                                        }, e + u);
                                }, [A, c, n, u, e]));
                            const C = (0, F.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [o ? 'left' : 'right']: '0',
                                    }),
                                    [o, u, e],
                                ),
                                g = (0, F.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [o ? 'left' : 'right']: '0',
                                    }),
                                    [o, u, e],
                                ),
                                D = (0, F.useMemo)(
                                    () => ({ width: `${Math.abs(a - _)}%`, left: `${o ? _ : a}%` }),
                                    [a, o, _],
                                );
                            return d
                                ? null
                                : b().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: D },
                                      b().createElement(
                                          'div',
                                          { style: E ? C : g, className: 'ProgressBarDeltaSimple_delta_99' },
                                          b().createElement(ut, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    at = {
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
                    rt = (0, F.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: _, withoutBounce: n }) => {
                            const i = r()(
                                    at.base,
                                    at[`base__${e}`],
                                    t && at.base__disabled,
                                    _ && at.base__finished,
                                    n && at.base__withoutBounce,
                                ),
                                o = !t && !_;
                            return b().createElement(
                                'div',
                                { className: i, style: a, ref: u },
                                b().createElement('div', { className: at.pattern }),
                                b().createElement('div', { className: at.gradient }),
                                o && b().createElement(ut, { size: e }),
                            );
                        },
                    ),
                    _t = (0, F.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: r,
                            isComplete: _,
                            animationSettings: n,
                            onChangeAnimationState: i,
                            onEndAnimation: o,
                        }) => {
                            const s = (0, F.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${n.line.duration}ms`,
                                    transitionDelay: `${n.line.delay}ms`,
                                }),
                                [n.line.delay, n.line.duration, e],
                            );
                            return b().createElement(
                                b().Fragment,
                                null,
                                b().createElement(rt, {
                                    size: u,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: _,
                                    baseStyles: s,
                                }),
                                t >= 0 &&
                                    b().createElement(tt, {
                                        transitionDuration: n.delta.duration,
                                        transitionDelay: n.delta.delay,
                                        freezed: n.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: i,
                                        onEndAnimation: o,
                                    }),
                            );
                        },
                    ),
                    nt = (e) => (e ? { left: 0 } : { right: 0 }),
                    it = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    ot = (e) => ({ transitionDuration: `${e}ms` }),
                    st = (0, F.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: _,
                            to: n,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            className: s,
                        }) => {
                            const l = n < a,
                                m = (0, F.useState)(Qu.Idle),
                                c = m[0],
                                d = m[1],
                                E = c === Qu.End,
                                A = c === Qu.Idle,
                                C = c === Qu.Grow,
                                g = c === Qu.Shrink,
                                D = (0, F.useCallback)(
                                    (e) => {
                                        (d(e), o && o(e));
                                    },
                                    [o],
                                ),
                                B = (0, F.useCallback)(
                                    (e, u) =>
                                        Xu(() => {
                                            D(e);
                                        }, u),
                                    [D],
                                );
                            (0, F.useEffect)(() => {
                                if (!t)
                                    return A
                                        ? B(Qu.Grow, u)
                                        : C
                                          ? B(Qu.Shrink, e)
                                          : g
                                            ? B(Qu.End, e)
                                            : void (E && i && i());
                            }, [B, t, E, C, A, g, i, u, e]);
                            const h = (0, F.useMemo)(() => Object.assign({ width: '100%' }, ot(e), nt(l)), [l, e]),
                                p = (0, F.useMemo)(() => Object.assign({ width: '0%' }, ot(e), nt(l)), [l, e]),
                                f = (0, F.useMemo)(() => Object.assign({ width: '0%' }, it(l, a), ot(e)), [a, l, e]),
                                v = (0, F.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(n - a)}%` }, it(l, a), ot(e)),
                                    [a, l, n, e],
                                );
                            if (E) return null;
                            const x = r()(
                                'ProgressBarDeltaGrow_base_7e',
                                s,
                                l && 0 === n && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return b().createElement(
                                'div',
                                { style: A ? f : v, className: x },
                                b().createElement(
                                    'div',
                                    { style: g ? p : h, className: 'ProgressBarDeltaGrow_glow_68' },
                                    b().createElement(ut, { size: _ }),
                                ),
                            );
                        },
                    ),
                    lt = (0, F.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: r,
                            isComplete: _,
                            animationSettings: n,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                        }) => {
                            const s = e < t,
                                l = (0, F.useState)(!1),
                                m = l[0],
                                c = l[1],
                                d = (0, F.useCallback)(
                                    (e) => {
                                        (e === Qu.Shrink && c(!0), o && o(e));
                                    },
                                    [o],
                                ),
                                E = (0, F.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                A = (0, F.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${n.line.duration}ms` }),
                                    [n.line.duration, e],
                                );
                            return b().createElement(
                                b().Fragment,
                                null,
                                b().createElement(rt, {
                                    size: u,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: _,
                                    withoutBounce: s && 0 === e,
                                    baseStyles: m ? A : E,
                                }),
                                t >= 0 &&
                                    b().createElement(st, {
                                        transitionDuration: n.delta.duration,
                                        transitionDelay: n.delta.delay,
                                        onChangeAnimationState: d,
                                        freezed: n.freezed,
                                        onEndAnimation: i,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: n.delta.className,
                                    }),
                            );
                        },
                    ),
                    mt = ['onComplete', 'onEndAnimation'];
                function ct() {
                    return (
                        (ct = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        ct.apply(null, arguments)
                    );
                }
                const dt = (0, F.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, mt);
                        const r = (0, F.useState)(!1),
                            _ = r[0],
                            n = r[1],
                            i = (0, F.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== _ && n(e), e && u && u(), t && t());
                            }, [_, u, t, a.to]);
                        switch (a.animationSettings.type) {
                            case Yu.Simple:
                                return b().createElement(_t, ct({}, a, { onEndAnimation: i, isComplete: _ }));
                            case Yu.Growing:
                                return b().createElement(lt, ct({}, a, { onEndAnimation: i, isComplete: _ }));
                            default:
                                return null;
                        }
                    }),
                    Et = ({ size: e, value: u, lineRef: t, disabled: a, onComplete: r }) => {
                        const _ = (0, F.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            n = 100 === u;
                        return (
                            (0, F.useEffect)(() => {
                                n && r && r();
                            }, [n, r]),
                            b().createElement(rt, { size: e, disabled: a, baseStyles: _, isComplete: n, lineRef: t })
                        );
                    },
                    At = ['onEndAnimation'];
                function Ft() {
                    return (
                        (Ft = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Ft.apply(null, arguments)
                    );
                }
                const bt = (0, F.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (u.indexOf(a) >= 0) continue;
                                    t[a] = e[a];
                                }
                            return t;
                        })(e, At);
                    const a = (0, F.useRef)({}),
                        r = (0, F.useCallback)(() => {
                            ((a.current.from = void 0), u && u());
                        }, [u]),
                        _ = 'number' == typeof a.current.from ? a.current.from : t.from;
                    return (
                        (a.current.from = _),
                        b().createElement(
                            dt,
                            Ft({}, t, {
                                onEndAnimation: r,
                                key: `${_}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                                from: _,
                            }),
                        )
                    );
                });
                function Ct() {
                    return (
                        (Ct = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Ct.apply(null, arguments)
                    );
                }
                const gt = (0, F.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: a,
                            deltaFrom: r,
                            additionalKey: _,
                            animationSettings: n,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            onComplete: s,
                        }) => {
                            if (r === u)
                                return b().createElement(Et, {
                                    key: `${r}-${u}-${_}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: a,
                                    onComplete: s,
                                });
                            const l = {
                                from: r,
                                to: u,
                                size: e,
                                additionalKey: _,
                                lineRef: t,
                                disabled: a,
                                animationSettings: n,
                                onComplete: s,
                                onEndAnimation: i,
                                onChangeAnimationState: o,
                            };
                            return n.withStack
                                ? b().createElement(bt, l)
                                : b().createElement(dt, Ct({ key: `${r}-${u}-${_}` }, l));
                        },
                    ),
                    Dt = (e) => ({
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
                    Bt = (e, u, t) => (t < e ? e : t > u ? u : t),
                    ht = (e, u, t) => ('number' == typeof t ? (Bt(0, u, t) / u) * 100 : e),
                    pt = {
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
                    ft = {
                        freezed: !1,
                        withStack: !1,
                        type: Yu.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    vt = (0, F.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = pt,
                            size: t = Ku.Default,
                            animationSettings: a = ft,
                            disabled: _ = !1,
                            withoutBackground: n = !1,
                            value: i,
                            deltaFrom: o,
                            additionalKey: s,
                            lineRef: l,
                            onChangeAnimationState: m,
                            onEndAnimation: c,
                            onComplete: d,
                        }) => {
                            const E = ((e, u, t) =>
                                (0, F.useMemo)(() => {
                                    const a = (Bt(0, u, e) / u) * 100;
                                    return { value: a, deltaFrom: ht(a, u, t) };
                                }, [t, u, e]))(i, e, o);
                            return b().createElement(
                                'div',
                                { className: r()(qu.base, qu[`base__${t}`]), style: Dt(u) },
                                !n && b().createElement(Zu, { size: t }),
                                b().createElement(gt, {
                                    size: t,
                                    lineRef: l,
                                    disabled: _,
                                    value: E.value,
                                    deltaFrom: E.deltaFrom,
                                    additionalKey: s,
                                    animationSettings: a,
                                    onEndAnimation: c,
                                    onChangeAnimationState: m,
                                    onComplete: d,
                                }),
                            );
                        },
                    ),
                    xt = 'Progress_dash_e0',
                    wt = ({ rank: e, currentScore: u, prevScore: t, divisionInfo: a, className: _ }) =>
                        Lu(e)
                            ? b().createElement(
                                  'div',
                                  { className: r()('Progress_base_ef', _) },
                                  b().createElement(
                                      'div',
                                      { className: 'Progress_progress_b0' },
                                      b().createElement(vt, {
                                          size: Ku.Small,
                                          value: u - a.from,
                                          maxValue: a.to - a.from,
                                          deltaFrom: t - a.from,
                                      }),
                                  ),
                                  b().createElement(
                                      'div',
                                      { className: 'Progress_status_01' },
                                      b().createElement(z, {
                                          text: R.strings.comp7_ext.mainWidget.status(),
                                          binding: {
                                              score: b().createElement(
                                                  'span',
                                                  { className: 'Progress_statusPoints_c2' },
                                                  u,
                                              ),
                                              scoreToNextDivision: a.to,
                                          },
                                      }),
                                  ),
                              )
                            : b().createElement(
                                  'div',
                                  { className: 'Progress_points_a1' },
                                  b().createElement('div', { className: xt }),
                                  b().createElement('div', { className: 'Progress_score_06' }, u),
                                  b().createElement('div', { className: r()(xt, 'Progress_dash__right_b4') }),
                              ),
                    Nt = {
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
                    kt = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Tt = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Lt = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    yt = (0, F.memo)(({ text: e, binding: u, classMix: t }) => {
                        const a = (0, F.useCallback)((e) => ({ color: `#${e}` }), []),
                            r = (0, F.useMemo)(() => u || {}, [u]);
                        let _ = kt.exec(e),
                            n = e,
                            i = 0;
                        for (; _;) {
                            const t = _[0],
                                o = Tt.exec(t),
                                s = Lt.exec(t),
                                l = _[1];
                            if (o && s) {
                                const e = o[0],
                                    _ = e + i++ + e;
                                ((n = n.replace(t, `%(${_})`)),
                                    (r[_] = Nt[e]
                                        ? b().createElement(
                                              'span',
                                              { className: Nt[e] },
                                              b().createElement(z, { text: l, binding: u }),
                                          )
                                        : b().createElement(
                                              'span',
                                              { style: a(e) },
                                              b().createElement(z, { text: l, binding: u }),
                                          )));
                            }
                            _ = kt.exec(e);
                        }
                        return b().createElement(z, { text: n, classMix: t, binding: r });
                    }),
                    St = 'QualificationCounter_dash_64',
                    Rt = ({ battlesCount: e, maxBattlesCount: u, className: t }) =>
                        b().createElement(
                            'div',
                            { className: r()('QualificationCounter_base_0f', t) },
                            b().createElement('div', { className: St }),
                            b().createElement(yt, {
                                text: R.strings.comp7_ext.qualification.battlesCounter(),
                                binding: {
                                    battleIcon: b().createElement(
                                        'div',
                                        { className: 'QualificationCounter_iconContainer_1b' },
                                        b().createElement('div', { className: 'QualificationCounter_battleIcon_64' }),
                                    ),
                                    battlesCount: e,
                                    maxBattlesCount: u,
                                },
                                classMix: 'QualificationCounter_score_31',
                            }),
                            b().createElement('div', { className: r()(St, 'QualificationCounter_dash__right_f9') }),
                        ),
                    Ot = 'Warning_lighting_17',
                    Mt = ({ rankInactivityCount: e, warningText: u, className: t }) => {
                        const a = 0 === e;
                        return b().createElement(
                            'div',
                            { className: r()('Warning_base_28', a && 'Warning_base__text_7e', t) },
                            !a && b().createElement('div', { className: Ot }),
                            b().createElement('div', { className: 'Warning_value_38' }, a ? u : e),
                            b().createElement(
                                'div',
                                { className: 'Warning_timer_37' },
                                a && b().createElement('div', { className: Ot }),
                            ),
                        );
                    },
                    It = {
                        base: 'Progression_base_88',
                        progress: 'Progression_progress_5f',
                        warning: 'Progression_warning_21',
                        battlesCounter__b0: 'Progression_battlesCounter__b0_e6',
                        battlesCounter__b1: 'Progression_battlesCounter__b1_12',
                        battlesCounter__b2: 'Progression_battlesCounter__b2_43',
                        battlesCounter: 'Progression_battlesCounter_7c',
                    },
                    Pt = R.strings.comp7_ext.scoreTooltip,
                    Wt = ({
                        rankInactivityCount: e,
                        hasRankInactivityWarning: u,
                        rank: t,
                        currentScore: a,
                        prevScore: _,
                        divisionInfo: n,
                        size: i,
                        qualificationModel: o,
                    }) =>
                        b().createElement(
                            b().Fragment,
                            null,
                            b().createElement(
                                'div',
                                { className: It.base },
                                o.isActive
                                    ? b().createElement(
                                          'div',
                                          { className: r()(It.battlesCounter, It[`battlesCounter__${i}`]) },
                                          b().createElement(Rt, {
                                              battlesCount: o.battlesCount,
                                              maxBattlesCount: o.maxBattlesCount,
                                          }),
                                      )
                                    : b().createElement(
                                          Fe,
                                          { header: Pt.header(), body: Pt.body() },
                                          b().createElement(wt, {
                                              rank: t,
                                              currentScore: a,
                                              prevScore: _,
                                              divisionInfo: n,
                                              className: It.progress,
                                          }),
                                      ),
                            ),
                            u &&
                                b().createElement(
                                    se,
                                    {
                                        contentId: R.views.comp7.lobby.tooltips.RankInactivityTooltip('resId'),
                                        ignoreShowDelay: !0,
                                    },
                                    b().createElement(
                                        'div',
                                        null,
                                        b().createElement(Mt, {
                                            rankInactivityCount: e,
                                            warningText: R.strings.mode_selector.mode.comp7.warning(),
                                            className: It.warning,
                                        }),
                                    ),
                                ),
                        );
                let $t;
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
                })($t || ($t = {}));
                const Ht = 'RankEmblem_base_2d',
                    zt = ({ size: e, seasonName: u, className: t }) => {
                        const a = R.images.comp7.gui.maps.icons.ranks.$dyn(u).$num(e);
                        return b().createElement('div', {
                            className: r()(Ht, t),
                            style: { backgroundImage: `url(${a.$dyn('qualification')})`, '--imageSize': `${e}rem` },
                        });
                    },
                    jt = {
                        [hu.First]: 'first',
                        [hu.Second]: 'second',
                        [hu.Third]: 'third',
                        [hu.Fourth]: 'fourth',
                        [hu.Fifth]: 'fifth',
                        [hu.Sixth]: 'sixth',
                    },
                    Gt = (e) => jt[e],
                    Ut = ({ rank: e, size: u, division: t, seasonName: a, className: _ }) => {
                        const n = (0, F.useMemo)(() => {
                            const r = R.images.comp7.gui.maps.icons.ranks.$dyn(a).$num(u),
                                _ = Lu(e) && void 0 !== t ? `_${Nu(t)}` : '';
                            return { backgroundImage: `url(${r.$dyn(`${Gt(e)}${_}`)})`, '--imageSize': `${u}rem` };
                        }, [a, u, e, t]);
                        return b().createElement('div', { className: r()(Ht, _), style: n });
                    },
                    Vt = ({ widget: e, className: u }) => {
                        const t = Iu().mediaSize < Ru.Medium,
                            a = e.qualificationModel.isActive;
                        return b().createElement(
                            se,
                            { contentId: R.views.comp7.lobby.tooltips.MainWidgetTooltip('resId') },
                            b().createElement(
                                'div',
                                { onMouseEnter: C.O.sound.play.highlight },
                                a
                                    ? b().createElement(zt, {
                                          size: t ? $t.x64 : $t.x150,
                                          seasonName: e.seasonName,
                                          className: u,
                                      })
                                    : b().createElement(Ut, {
                                          seasonName: e.seasonName,
                                          rank: e.rank,
                                          division: t ? void 0 : e.divisionInfo.name,
                                          size: t ? $t.x64 : $t.x150,
                                          className: u,
                                      }),
                            ),
                        );
                    },
                    qt = ['size', 'description', 'showWidget', 'widget'];
                function Kt() {
                    return (
                        (Kt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var a in t) ({}).hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                  }
                                  return e;
                              }),
                        Kt.apply(null, arguments)
                    );
                }
                const Yt = R.strings.mode_selector.mode.comp7.widgetDescription,
                    Zt = [Y.B0, Y.B1],
                    Xt = (e) => {
                        if (e.qualificationModel.isActive) {
                            const u = e.qualificationModel.maxBattlesCount;
                            return i(Yt.qualification(u), { maxBattlesCount: u });
                        }
                        const u = ((t = e.rank), ((e, u) => `${e.$dyn(ku[u])}`)(R.strings.comp7_ext.rank, t));
                        var t, a;
                        return Lu(e.rank)
                            ? i(Yt.status(), {
                                  rank: u,
                                  division: ((a = e.divisionInfo.name), i(xu.text(), { division: Nu(a) })),
                              })
                            : u;
                    },
                    Qt = R.images.gui.maps.icons.mode_selector.mode.comp7;
                var Jt, ea;
                ((Jt = R.views.comp7.lobby.Comp7BattleCard()),
                    (ea = (e) => {
                        let u = e.size,
                            t = e.description,
                            a = e.showWidget,
                            r = e.widget,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (u.indexOf(a) >= 0) continue;
                                        t[a] = e[a];
                                    }
                                return t;
                            })(e, qt);
                        const n = r && r.isEnabled,
                            i = a && n && Zt.includes(u);
                        return b().createElement(
                            Uu,
                            null,
                            b().createElement(
                                'div',
                                { className: Vu[`base__${u}`] },
                                b().createElement(
                                    Du,
                                    Kt(
                                        {
                                            widgetComponent:
                                                n && b().createElement(Vt, { widget: r, className: Vu.widget }),
                                            showWidget: a,
                                            size: u,
                                            belowStatusComponent: i && b().createElement(Wt, Kt({}, r, { size: u })),
                                            description: a && n ? Xt(r) : t,
                                            classNames: { belowStatus: Vu.belowStatus },
                                            widget: r,
                                        },
                                        _,
                                        {
                                            calendarTooltip: 'comp7CalendarDayExtendedInfo',
                                            resourceFolderGetter: () => (r ? Qt.$dyn(r.seasonName) : null),
                                        },
                                    ),
                                ),
                            ),
                        );
                    }),
                    f().set(Jt, ea),
                    document.dispatchEvent(new CustomEvent(Jt)));
            },
            7363: (e) => {
                'use strict';
                e.exports = React;
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
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, a] = deferred[o], _ = !0, n = 0; n < u.length; n++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[n]))
                            ? u.splice(n--, 1)
                            : ((_ = !1), a < r && (r = a));
                    if (_) {
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
        (__webpack_require__.j = 809),
        (() => {
            var e = { 809: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [_, n, i] = t,
                        o = 0;
                    if (_.some((u) => 0 !== e[u])) {
                        for (a in n) __webpack_require__.o(n, a) && (__webpack_require__.m[a] = n[a]);
                        if (i) var s = i(__webpack_require__);
                    }
                    for (u && u(t); o < _.length; o++)
                        ((r = _[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(s);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(81));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
