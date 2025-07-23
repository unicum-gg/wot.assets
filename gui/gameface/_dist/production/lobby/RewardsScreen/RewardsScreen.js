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
                    t.d(u, { mouse: () => c, off: () => o, on: () => i, onResize: () => r, onScaleUpdated: () => s }));
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
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
                                            s = l[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, i),
                                            a(),
                                            () => {
                                                n &&
                                                    (s(),
                                                    window.removeEventListener(r, i),
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
            5959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => s,
                        getSize: () => r,
                        graphicsQuality: () => i,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    }));
                var a = t(527),
                    n = t(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
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
                function n(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => n, G: () => a });
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
                t.d(u, { O: () => r });
                var a = t(5959),
                    n = t(514);
                const r = { view: t(7641), client: a, sound: n.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => s });
                var a = t(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(n).reduce((e, u) => ((e[u] = () => (0, a.playSound)(n[u])), e), {}),
                    s = { play: Object.assign({}, r, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => a }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
                var a = t(2472);
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
            7641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => o,
                        arabic2roman: () => R,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => y,
                        events: () => s.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => w,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => v,
                        getFontNames: () => b,
                        getScale: () => D,
                        getSize: () => m,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => f,
                        isFocused: () => p,
                        pxToRem: () => g,
                        remToPx: () => h,
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => T,
                    }));
                var a = t(9690),
                    n = t(3722),
                    r = t(6112),
                    s = t(6538),
                    i = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function d(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
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
                function p() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function w() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const b = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    R = a.cg,
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
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => r });
                const a = ['args'],
                    n = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
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
            5521: (e, u, t) => {
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
            9690: (e, u, t) => {
                'use strict';
                t.d(u, { HG: () => i, cg: () => r });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let u = '';
                    for (let t = n.length - 1; t >= 0; t--) for (; e >= n[t]; ) ((u += a[t]), (e -= n[t]));
                    return u;
                }
                const s = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    i = (e) => (s ? `${e}` : r(e));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var a = t(3138);
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
                t.d(u, { B3: () => l, Z5: () => s.Z5, B0: () => i, ry: () => g });
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
                var r = t(1358),
                    s = t(8613);
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    _ = t(3138);
                const A = ['args'];
                function F(e, u, t, a, n, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(a, n);
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
                                        function s(e) {
                                            F(r, a, n, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            F(r, a, n, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    h = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, A);
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
                    B = () => h(i.CLOSE),
                    p = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var C = t(7572);
                const f = n.instance,
                    w = {
                        DataTracker: r.Z,
                        ViewModel: C.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => h(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => h(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const s = _.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                E = o.height,
                                m = {
                                    x: _.O.view.pxToRem(l) + s.x,
                                    y: _.O.view.pxToRem(c) + s.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(E),
                                };
                            h(i.POP_OVER, {
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
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, B);
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
                        ClickOutsideManager: f,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = w;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Z5: () => a, cy: () => n });
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
                    };
            },
            4078: (e, u, t) => {
                'use strict';
                var a = t(7363),
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
                var s = t(3138);
                const i = {
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
                const c = s.O.client.getSize('rem'),
                    d = c.width,
                    E = c.height,
                    m = Object.assign({ width: d, height: E }, l(d, E, i)),
                    _ = (0, a.createContext)(m),
                    A = ['children'],
                    F = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, A);
                        const n = (0, a.useContext)(_),
                            s = n.extraLarge,
                            i = n.large,
                            o = n.medium,
                            l = n.small,
                            c = n.extraSmall,
                            d = n.extraLargeWidth,
                            E = n.largeWidth,
                            m = n.mediumWidth,
                            F = n.smallWidth,
                            D = n.extraSmallWidth,
                            g = n.extraLargeHeight,
                            h = n.largeHeight,
                            B = n.mediumHeight,
                            p = n.smallHeight,
                            C = n.extraSmallHeight,
                            f = { extraLarge: g, large: h, medium: B, small: p, extraSmall: C };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && s) return u;
                            if (t.large && i) return u;
                            if (t.medium && o) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && d) return r(u, t, f);
                            if (t.largeWidth && E) return r(u, t, f);
                            if (t.mediumWidth && m) return r(u, t, f);
                            if (t.smallWidth && F) return r(u, t, f);
                            if (t.extraSmallWidth && D) return r(u, t, f);
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
                                if (t.largeHeight && h) return u;
                                if (t.mediumHeight && B) return u;
                                if (t.smallHeight && p) return u;
                                if (t.extraSmallHeight && C) return u;
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
                    const u = (0, a.useContext)(_),
                        t = (0, a.useState)(u),
                        r = t[0],
                        o = t[1],
                        c = (0, a.useCallback)((e, u) => {
                            const t = s.O.view.pxToRem(e),
                                a = s.O.view.pxToRem(u);
                            o(Object.assign({ width: t, height: a }, l(t, a, i)));
                        }, []),
                        d = (0, a.useCallback)(() => {
                            const e = s.O.client.getSize('px');
                            c(e.width, e.height);
                        }, [c]);
                    (((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        (s.O.client.events.on('clientResized', c), s.O.client.events.on('self.onScaleUpdated', d));
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                (s.O.client.events.off('clientResized', c),
                                    s.O.client.events.off('self.onScaleUpdated', d));
                            },
                            [c, d],
                        ));
                    const E = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return n().createElement(_.Provider, { value: E }, e);
                };
                var g = t(6483),
                    h = t.n(g),
                    B = t(926),
                    p = t.n(B);
                let C, f, w;
                (!(function (e) {
                    ((e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.small.width)] = 'Small'),
                        (e[(e.Medium = i.medium.width)] = 'Medium'),
                        (e[(e.Large = i.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'));
                })(C || (C = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.width)] = 'Small'),
                            (e[(e.Medium = i.medium.width)] = 'Medium'),
                            (e[(e.Large = i.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'));
                    })(f || (f = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.height)] = 'Small'),
                            (e[(e.Medium = i.medium.height)] = 'Medium'),
                            (e[(e.Large = i.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge'));
                    })(w || (w = {})));
                const v = () => {
                        const e = (0, a.useContext)(_),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return C.ExtraLarge;
                                    case e.large:
                                        return C.Large;
                                    case e.medium:
                                        return C.Medium;
                                    case e.small:
                                        return C.Small;
                                    case e.extraSmall:
                                        return C.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), C.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return f.ExtraLarge;
                                    case e.largeWidth:
                                        return f.Large;
                                    case e.mediumWidth:
                                        return f.Medium;
                                    case e.smallWidth:
                                        return f.Small;
                                    case e.extraSmallWidth:
                                        return f.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), f.ExtraSmall);
                                }
                            })(e),
                            s = ((e) => {
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
                                        return (console.error('Unreachable media context resolution'), w.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    b = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const S = {
                        [f.ExtraSmall]: '',
                        [f.Small]: p().SMALL_WIDTH,
                        [f.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [f.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [w.ExtraSmall]: '',
                        [w.Small]: p().SMALL_HEIGHT,
                        [w.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [w.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    x = {
                        [C.ExtraSmall]: '',
                        [C.Small]: p().SMALL,
                        [C.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [C.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [C.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    k = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, b);
                        const r = v(),
                            s = r.mediaWidth,
                            i = r.mediaHeight,
                            o = r.mediaSize;
                        return n().createElement('div', y({ className: h()(t, S[s], T[i], x[o]) }, a), u);
                    },
                    N = ['children'],
                    L = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, N);
                        return n().createElement(D, null, n().createElement(k, t, u));
                    };
                var P = t(1533),
                    O = t.n(P);
                let M, I, H;
                (!(function (e) {
                    ((e[(e.Rank = 0)] = 'Rank'),
                        (e[(e.Division = 1)] = 'Division'),
                        (e[(e.RankRewards = 2)] = 'RankRewards'),
                        (e[(e.TokensRewards = 3)] = 'TokensRewards'),
                        (e[(e.QualificationRewards = 4)] = 'QualificationRewards'),
                        (e[(e.QualificationRank = 5)] = 'QualificationRank'),
                        (e[(e.YearlyVehicle = 6)] = 'YearlyVehicle'),
                        (e[(e.YearlyRewards = 7)] = 'YearlyRewards'),
                        (e[(e.SelectedRewards = 8)] = 'SelectedRewards'));
                })(M || (M = {})),
                    (function (e) {
                        ((e.None = 'none'), (e.Open = 'open'), (e.Discount = 'discount'));
                    })(I || (I = {})),
                    (function (e) {
                        ((e[(e.NotStarted = 0)] = 'NotStarted'),
                            (e[(e.Started = 1)] = 'Started'),
                            (e[(e.Paused = 2)] = 'Paused'),
                            (e[(e.Resumed = 3)] = 'Resumed'),
                            (e[(e.Ended = 4)] = 'Ended'));
                    })(H || (H = {})));
                var U = t(3403),
                    $ = t(1281);
                let G;
                function W(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(G || (G = {}));
                const q = (e) => e.replace(/&nbsp;/g, ' '),
                    z = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    V = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Y = (e, u, t = G.left) => e.split(u).reduce(t === G.left ? z : V, []),
                    j = (() => {
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
                    Q = ['zh_cn', 'zh_sg', 'zh_tw'],
                    X = ({ binding: e, text: u = '', classMix: t, alignment: r = G.left, formatWithBrackets: s }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const i = s && e ? ((o = e), u.replace(/\{\w+\}/g, (e) => String(o[e.slice(1, -1)]))) : u;
                        var o;
                        return n().createElement(
                            a.Fragment,
                            null,
                            i.split('\n').map((u, s) =>
                                n().createElement(
                                    'div',
                                    { className: h()('FormatText_base_d0', t), key: `${u}-${s}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            t && e in t
                                                ? t[e]
                                                : ((e, u = G.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return Q.includes(t)
                                                          ? j(e)
                                                          : 'ja' === t
                                                            ? (0, $.D4)()
                                                                  .parse(e)
                                                                  .map((e) => q(e))
                                                            : ((e, u = G.left) => {
                                                                  let t = [];
                                                                  const a =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      n = q(e);
                                                                  return (
                                                                      Y(n, /( )/, u).forEach(
                                                                          (e) => (t = t.concat(Y(e, a, G.left))),
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
                    K = {
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
                    Z = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    J = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    ee = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    ue = (0, a.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            s = (0, a.useMemo)(() => u || {}, [u]);
                        let i = Z.exec(e),
                            o = e,
                            l = 0;
                        for (; i; ) {
                            const t = i[0],
                                a = J.exec(t),
                                c = ee.exec(t),
                                d = i[1];
                            if (a && c) {
                                const e = a[0],
                                    i = e + l++ + e;
                                ((o = o.replace(t, `%(${i})`)),
                                    (s[i] = K[e]
                                        ? n().createElement(
                                              'span',
                                              { className: K[e] },
                                              n().createElement(X, { text: d, binding: u }),
                                          )
                                        : n().createElement(
                                              'span',
                                              { style: r(e) },
                                              n().createElement(X, { text: d, binding: u }),
                                          )));
                            }
                            i = Z.exec(e);
                        }
                        return n().createElement(X, { text: o, classMix: t, binding: s });
                    });
                let te, ae, ne, re, se;
                (!(function (e) {
                    ((e[(e.Progression = 0)] = 'Progression'),
                        (e[(e.RankRewards = 1)] = 'RankRewards'),
                        (e[(e.YearlyRewards = 2)] = 'YearlyRewards'),
                        (e[(e.WeeklyQuests = 3)] = 'WeeklyQuests'),
                        (e[(e.Shop = 4)] = 'Shop'),
                        (e[(e.Leaderboard = 5)] = 'Leaderboard'),
                        (e[(e.YearlyStatistics = 6)] = 'YearlyStatistics'));
                })(te || (te = {})),
                    (function (e) {
                        ((e[(e.First = 6)] = 'First'),
                            (e[(e.Second = 5)] = 'Second'),
                            (e[(e.Third = 4)] = 'Third'),
                            (e[(e.Fourth = 3)] = 'Fourth'),
                            (e[(e.Fifth = 2)] = 'Fifth'),
                            (e[(e.Sixth = 1)] = 'Sixth'));
                    })(ae || (ae = {})),
                    (function (e) {
                        ((e.First = 'first'), (e.Second = 'second'), (e.Third = 'third'));
                    })(ne || (ne = {})),
                    (function (e) {
                        ((e[(e.A = 1)] = 'A'),
                            (e[(e.B = 2)] = 'B'),
                            (e[(e.C = 3)] = 'C'),
                            (e[(e.D = 4)] = 'D'),
                            (e[(e.E = 5)] = 'E'));
                    })(re || (re = {})),
                    (function (e) {
                        ((e.Achieved = 'achieved'), (e.Possible = 'possible'), (e.NotAchieved = 'notAchieved'));
                    })(se || (se = {})));
                const ie = R.strings.comp7_ext.division,
                    oe = { [re.A]: 'A', [re.B]: 'B', [re.C]: 'C', [re.D]: 'D', [re.E]: 'E' },
                    le = (e) => ie.$dyn(oe[e]),
                    ce = (e) => W(ie.text(), { division: le(e) }),
                    de = {
                        [ae.First]: 'first',
                        [ae.Second]: 'second',
                        [ae.Third]: 'third',
                        [ae.Fourth]: 'fourth',
                        [ae.Fifth]: 'fifth',
                        [ae.Sixth]: 'sixth',
                    },
                    Ee = (e, u) => `${e.$dyn(de[u])}`,
                    me = (e, u = { upperCase: !1 }) => {
                        const t = u.upperCase ? R.strings.comp7_ext.rankUpper : R.strings.comp7_ext.rank;
                        return Ee(t, e);
                    };
                var _e = t(7030);
                function Ae() {}
                function Fe() {
                    return !1;
                }
                console.log;
                var De = t(9174);
                function ge(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const he = (e) => (0 === e ? window : window.subViews.get(e));
                function Be(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const pe = Be;
                function Ce(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function fe(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                function we(e, u = 0, t = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let a = Math.max(u, 0);
                            const n = Math.min(
                                t,
                                (function (e) {
                                    return Math.max(0, e.length - 1);
                                })(e),
                            );
                            return {
                                next: function () {
                                    if (a > n) return { done: !0, value: null };
                                    const u = e[a++];
                                    return u ? { value: Ce(u), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
                var ve = t(3946);
                const be = {
                        0: 'comp_7_rank_iron',
                        2: 'comp_7_rank_bronze',
                        4: 'comp_7_rank_silver',
                        6: 'comp_7_rank_gold',
                        9: 'comp_7_rank_champion',
                        12: 'comp_7_rank_legend',
                    },
                    Re = {
                        [ae.First]: { start: 0, end: 2 },
                        [ae.Second]: { start: 2, end: 4 },
                        [ae.Third]: { start: 4, end: 6 },
                        [ae.Fourth]: { start: 6, end: 9 },
                        [ae.Fifth]: { start: 9, end: 12 },
                        [ae.Sixth]: { start: 12, end: 15 },
                    },
                    ye = {
                        [M.Rank]: 'rank',
                        [M.Division]: 'division',
                        [M.RankRewards]: 'rankRewards',
                        [M.TokensRewards]: 'tokensRewards',
                        [M.QualificationRewards]: 'qualificationRewards',
                        [M.QualificationRank]: 'qualificationRank',
                        [M.YearlyVehicle]: 'yearlyVehicle',
                        [M.YearlyRewards]: 'yearlyRewards',
                        [M.SelectedRewards]: 'selectedRewards',
                    },
                    Se = R.strings.comp7_ext.rewardsScreen,
                    Te = R.images.comp7.gui.maps.icons.backgrounds,
                    xe = [M.RankRewards, M.QualificationRewards],
                    ke = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: i, mocks: o }) {
                                const l = (0, a.useRef)([]),
                                    c = (e, t, a) => {
                                        var n;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = he,
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
                                                const i = (e) => {
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
                                                            l = s.O.view.addModelObserver(o, u, !0);
                                                        return (n.set(l, t), e && t(i(r)), l);
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, u) => {
                                                        const t = i(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = i(e);
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
                                                                                    return ge(e, u);
                                                                                var t = Object.prototype.toString
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
                                                                                          ? ge(e, u)
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
                                            i =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            o = (u) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(u)) : i.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            d = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        additionalRewards: e.array('additionalRewards'),
                                                        mainRewards: e.array('mainRewards'),
                                                        qualificationBattles: e.array('qualificationBattles'),
                                                        rankList: e.array('rankList'),
                                                        seasonsResults: e.array('seasonsResults'),
                                                        vehicle: e.object('vehicle'),
                                                    },
                                                    t = (0, ve.Om)((e) => {
                                                        const t = Be(u.qualificationBattles.get(), e);
                                                        if (!t)
                                                            throw new Error(
                                                                `qualification battle with index ${e} was not found`,
                                                            );
                                                        return t.state;
                                                    }),
                                                    a = (0, ve.Om)(
                                                        (e) => {
                                                            const t = Be(u.seasonsResults.get(), e);
                                                            if (!t)
                                                                throw new Error(
                                                                    `seasonResult with index ${e} was not found`,
                                                                );
                                                            return Object.assign({}, t);
                                                        },
                                                        { equals: Fe },
                                                    ),
                                                    n = (0, ve.Om)(() =>
                                                        (function (e, u, t) {
                                                            if (Array.isArray(e)) return e.reduce(u, t);
                                                            let a = t;
                                                            for (let t = 0; t < e.length; t++) a = u(a, pe(e, t), t, e);
                                                            return a;
                                                        })(
                                                            u.seasonsResults.get(),
                                                            (e, u) => e + u.seasonPointsCount,
                                                            0,
                                                        ),
                                                    ),
                                                    r = (0, ve.Om)(() => {
                                                        const e = u.root.get(),
                                                            t = e.type,
                                                            a = e.shopInfoType;
                                                        return xe.includes(t) && a !== I.None;
                                                    }),
                                                    s = (0, ve.Om)(() =>
                                                        fe(u.rankList.get(), (e) => me(e)).join(
                                                            Se.subtitle.qualificationRewardsSeparator(),
                                                        ),
                                                    ),
                                                    i = (0, ve.Om)(() =>
                                                        1 !== u.mainRewards.get().length || r()
                                                            ? r()
                                                                ? 'shopInfo'
                                                                : ''
                                                            : 'singleMainReward',
                                                    );
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        ranksList: s,
                                                        qualificationBattleState: t,
                                                        seasonResult: a,
                                                        seasonPointsAmount: n,
                                                        hasShopInfo: r,
                                                        styleModifier: i,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const a = null != t ? t : o(u),
                                                            n = De.LO.box(a, { equals: Fe });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, De.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const a = null != t ? t : o(u),
                                                            n = De.LO.box(a, { equals: Fe });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, De.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const a = o(t);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (e, u) => ((e[u] = De.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, De.aD)((e) => {
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
                                                                s = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = De.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, De.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            E = { mode: e, model: d, externalModel: i, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && a ? a.controls(E) : u(E),
                                            externalModel: i,
                                            mode: e,
                                        };
                                    },
                                    d = (0, a.useRef)(!1),
                                    E = (0, a.useState)(e),
                                    m = E[0],
                                    _ = E[1],
                                    A = (0, a.useState)(() => c(e, r, o)),
                                    F = A[0],
                                    D = A[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        d.current ? D(c(m, r, o)) : (d.current = !0);
                                    }, [o, m, r]),
                                    (0, a.useEffect)(() => {
                                        _(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    n().createElement(t.Provider, { value: F }, i)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        close: e.createCallbackNoArgs('onClose'),
                        openShop: e.createCallbackNoArgs('onOpenShop'),
                        openNextScreen: e.createCallbackNoArgs('onOpenNextScreen'),
                        changeType: e.createCallback((e) => ({ newType: e }), 'onChangeType'),
                        changeVideoState: e.createCallback((e) => ({ state: e }), 'onVideoStateChange'),
                    })),
                    Ne = ke[0],
                    Le = ke[1],
                    Pe = (e) => de[e],
                    Oe = [ae.First, ae.Second, ae.Third, ae.Fourth],
                    Me = (e) => Oe.includes(e);
                let Ie;
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
                })(Ie || (Ie = {}));
                const He = 'RankEmblem_base_2d',
                    Ue = ({ rank: e, size: u, division: t, seasonName: r, className: s }) => {
                        const i = (0, a.useMemo)(() => {
                            const a = R.images.comp7.gui.maps.icons.ranks.$dyn(r).$num(u),
                                n = Me(e) && void 0 !== t ? `_${le(t)}` : '';
                            return { backgroundImage: `url(${a.$dyn(`${Pe(e)}${n}`)})`, '--imageSize': `${u}rem` };
                        }, [r, u, e, t]);
                        return n().createElement('div', { className: h()(He, s), style: i });
                    },
                    $e = [
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
                function Ge() {
                    return (
                        (Ge =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ge.apply(this, arguments)
                    );
                }
                const We = (0, a.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            r = e.getImageSource,
                            s = e.frameCount,
                            i = e.onAnimate,
                            o = e.frameTime,
                            l = void 0 === o ? 33 : o,
                            c = e.initialFrameIndex,
                            d = void 0 === c ? 0 : c,
                            E = e.lastFrameIndex,
                            m = void 0 === E ? s - 1 : E,
                            _ = e.loop,
                            A = void 0 === _ || _,
                            F = e.state,
                            D = void 0 === F ? 'play' : F,
                            g = e.onAnimationDone,
                            h = e.onAnimationComplete,
                            B = e.poster,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, $e);
                        const C = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = C.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        (u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y));
                                    };
                                switch (D) {
                                    case 'play':
                                        return (function () {
                                            const e = Ve(d, m, r),
                                                u = qe(d, m),
                                                a = window.setInterval(() => {
                                                    const n = u(),
                                                        r = e.get(n);
                                                    r
                                                        ? (null == i || i(n, r),
                                                          t(r),
                                                          n === m &&
                                                              (null == h || h(),
                                                              A || (null == g || g(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === d && B ? { path: B, x: 0, y: 0 } : r(d),
                                                u = new Image();
                                            u.src = e.path;
                                            const a = () => t(ze(e, u));
                                            return (
                                                u.addEventListener('load', a),
                                                () => u.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, r, d, m, A, i, h, g, B, D]),
                            n().createElement('canvas', Ge({}, p, { width: u, height: t, ref: C }))
                        );
                    }),
                    qe = (e, u) => {
                        let t = e;
                        return () => {
                            const a = t;
                            return ((t += 1), t > u && (t = e), a);
                        };
                    },
                    ze = (e, u) => Object.assign({}, e, { img: u }),
                    Ve = (e, u, t) => {
                        const a = new Map(),
                            n = {};
                        for (let r = e; r <= u; r++) {
                            const e = t(r),
                                u = n[e.path];
                            if (u) a.set(r, ze(e, u));
                            else {
                                const u = new Image();
                                ((n[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    a.set(r, ze(e, u)));
                            }
                        }
                        return a;
                    },
                    Ye = {
                        width: 400,
                        height: 400,
                        frameCount: 50,
                        chunk: { count: 2, rows: 5, columns: 5 },
                        getChunkPath:
                            ('R.images.gui.maps.icons.sequence.sun_shine_big_sprite.sprite_',
                            (e) => `R.images.gui.maps.icons.sequence.sun_shine_big_sprite.sprite_${e}`),
                    };
                const je = (function (e) {
                        const u = e.chunk,
                            t = u.rows * u.columns;
                        return (a) => {
                            const n = a % t,
                                r = (n % u.columns) * e.width,
                                s = Math.trunc(n / u.columns) * e.height;
                            return { path: e.getChunkPath(Math.trunc(a / t)), x: r, y: s };
                        };
                    })(Ye),
                    Qe = ({ className: e }) =>
                        n().createElement(
                            'div',
                            { className: h()('AnimatedBackground_base_fb', e) },
                            s.O.client.graphicsQuality.isHigh()
                                ? n().createElement(
                                      n().Fragment,
                                      null,
                                      n().createElement(We, {
                                          onAnimationDone: Ae,
                                          width: Ye.width,
                                          height: Ye.height,
                                          frameCount: Ye.frameCount,
                                          getImageSource: je,
                                          frameTime: 50,
                                          className: 'AnimatedBackground_sunShineCanvas_eb',
                                      }),
                                      n().createElement('div', { className: 'AnimatedBackground_rays_a8' }),
                                  )
                                : n().createElement('div', { className: 'AnimatedBackground_staticHighlight_15' }),
                        ),
                    Xe = (0, U.Pi)(({ rankClassname: e }) => {
                        const u = Le().model.root.get(),
                            t = u.rank,
                            a = u.division,
                            r = u.seasonName;
                        return n().createElement(
                            'div',
                            { className: 'DivisionAchievement_base_d2' },
                            n().createElement(Qe, { className: 'DivisionAchievement_backLayer_f9' }),
                            n().createElement(Ue, { seasonName: r, rank: t, division: a, size: Ie.x600, className: e }),
                        );
                    }),
                    Ke = R.strings.comp7_ext.rewardsScreen.notice,
                    Ze = ({ className: e }) =>
                        n().createElement(
                            'div',
                            { className: h()('Notice_base_d3', e) },
                            n().createElement(
                                'div',
                                { className: 'Notice_noticeTitle_7c' },
                                n().createElement('span', { className: 'Notice_noticeIcon_ed' }),
                                Ke.title(),
                            ),
                            Ke.subTitle(),
                        );
                var Je = t(6112);
                const eu = (e) => {
                        (0, a.useEffect)(e, []);
                    },
                    uu = (e) => {
                        (0, a.useEffect)(() => e, []);
                    },
                    tu = [
                        'src',
                        'className',
                        'autoplay',
                        'style',
                        'loop',
                        'isPrebufferKeyframes',
                        'keyframesNameConfig',
                        'onClick',
                    ];
                function au() {
                    return (
                        (au =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        au.apply(this, arguments)
                    );
                }
                const nu = (0, a.forwardRef)(function (e, u) {
                        let t = e.src,
                            r = e.className,
                            i = e.autoplay,
                            o = void 0 !== i && i,
                            l = e.style,
                            c = e.loop,
                            d = void 0 !== c && c,
                            E = e.isPrebufferKeyframes,
                            m = e.keyframesNameConfig,
                            _ = e.onClick,
                            A = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, tu);
                        const F = u,
                            D = (0, a.useRef)(null);
                        return (
                            eu(() =>
                                s.O.view.events.onDisplayChanged((e, u) => {
                                    var t, a;
                                    (u === Je.W.hidden && (null == (t = D.current) || t.pause()),
                                        u === Je.W.shown && (null == (a = D.current) || a.play()));
                                }),
                            ),
                            (0, a.useEffect)(
                                () =>
                                    ((e) => {
                                        let u,
                                            t = null;
                                        return (
                                            (t = requestAnimationFrame(() => {
                                                t = requestAnimationFrame(() => {
                                                    ((t = null),
                                                        (u = (() => {
                                                            const e = D.current;
                                                            if (!F || !e || !E)
                                                                return void (
                                                                    null != e &&
                                                                    e.cohFastSeek &&
                                                                    (e.cohFastSeek = !1)
                                                                );
                                                            const u = e.cohGetKeyframeTimestamps();
                                                            u.length > 0
                                                                ? ((e.cohFastSeek = !0),
                                                                  u.map((u) => {
                                                                      null == e || e.cohPrebufferKeyframe(u);
                                                                  }))
                                                                : console.warn(
                                                                      "Can't prebuffered keyframes, keyframes was not found",
                                                                  );
                                                        })()));
                                                });
                                            })),
                                            () => {
                                                ('function' == typeof u && u(), null !== t && cancelAnimationFrame(t));
                                            }
                                        );
                                    })(),
                                [E, F],
                            ),
                            (0, a.useEffect)(() => {
                                if (F && D.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: Ae,
                                        },
                                        u = () => {
                                            let u = 0;
                                            const t = (function (t) {
                                                    let a = 0;
                                                    return [
                                                        function t() {
                                                            ((() => {
                                                                if (D.current) {
                                                                    const t = D.current,
                                                                        a = t.currentTime,
                                                                        n = t.duration;
                                                                    if (
                                                                        (u !== a &&
                                                                            (e.changeTimeHandlers.forEach((e) =>
                                                                                e({ currentTime: a, duration: n }),
                                                                            ),
                                                                            (u = a)),
                                                                        D.current.paused || !F || !E)
                                                                    )
                                                                        return;
                                                                    const r = D.current.cohGetKeyframeTimestamps();
                                                                    r.forEach((u, t) => {
                                                                        a > r[t] - 0.02 &&
                                                                            a < r[t] &&
                                                                            e.changeKeyframeHandlers.forEach((e) => {
                                                                                const a = Object.keys(
                                                                                    null != m ? m : {},
                                                                                )[t];
                                                                                return e({
                                                                                    time: u,
                                                                                    name: `${m ? a : `Point_${t}`}`,
                                                                                });
                                                                            });
                                                                    });
                                                                }
                                                            })(),
                                                                (a = requestAnimationFrame(t)));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(a);
                                                        },
                                                    ];
                                                })(),
                                                a = t[0],
                                                n = t[1];
                                            return (a(), n);
                                        };
                                    e.changeTimeLoop = u();
                                    const t = (u) => (
                                            e.changeTimeHandlers.push(u),
                                            () => {
                                                const t = e.changeTimeHandlers,
                                                    a = t.indexOf(u);
                                                a < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(a, 1);
                                            }
                                        ),
                                        a = (u) => (
                                            e.changeKeyframeHandlers.push(u),
                                            () => {
                                                const t = e.changeKeyframeHandlers,
                                                    a = t.indexOf(u);
                                                a < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : t.splice(a, 1);
                                            }
                                        ),
                                        n = () => {
                                            var e;
                                            return null == (e = D.current) ? void 0 : e.currentTime;
                                        },
                                        r = () => {
                                            var e;
                                            return null == (e = D.current) ? void 0 : e.duration;
                                        },
                                        s = (e) => {
                                            var u, t;
                                            D.current &&
                                                (D.current.currentTime =
                                                    (0, (u = D.current.duration), (t = e) < 0 ? 0 : t > u ? u : t));
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = D.current) ? void 0 : e.play();
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = D.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            (o(), s(0));
                                        },
                                        c = () => {
                                            var e, u;
                                            return null !=
                                                (e = null == (u = D.current) ? void 0 : u.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        d = (e) => {
                                            (s(e), i());
                                        },
                                        _ = (e) => {
                                            (s(e), o());
                                        },
                                        A = () => {
                                            ((e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop());
                                        },
                                        g = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = D.current) || t.addEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = D.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        },
                                        h = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = D.current) || t.removeEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = D.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        };
                                    return (
                                        (F.current = {
                                            on: g,
                                            off: h,
                                            play: i,
                                            pause: o,
                                            stop: l,
                                            cleanup: A,
                                            getCurrentTime: n,
                                            getDuration: r,
                                            getCachedKeyframes: c,
                                            goToAndPlay: d,
                                            goToAndStop: _,
                                            setCurrentTime: s,
                                            domRef: D.current,
                                            onChangeTime: t,
                                            onKeyframes: a,
                                        }),
                                        () => {
                                            (A(), (F.current = null));
                                        }
                                    );
                                }
                            }, [m, F, E]),
                            (0, a.useEffect)(() => {
                                D.current && o && D.current.play();
                            }, [o, d]),
                            (0, a.useEffect)(() => {
                                if (D.current)
                                    return () => {
                                        D.current && D.current.pause();
                                    };
                            }, []),
                            n().createElement(
                                'video',
                                au({ src: t, className: r, style: l, loop: d, ref: D, onClick: _ }, A),
                            )
                        );
                    }),
                    ru = (0, a.memo)(nu),
                    su = (e) => {
                        const u = (0, a.useRef)(0);
                        return (
                            (0, a.useEffect)(() => () => cancelAnimationFrame(u.current), []),
                            [
                                () => {
                                    const t = () => {
                                        e() && (u.current = requestAnimationFrame(t));
                                    };
                                    t();
                                },
                                () => cancelAnimationFrame(u.current),
                            ]
                        );
                    },
                    iu = 'RankAnimation_rank_07',
                    ou = new Set(),
                    lu = (0, U.Pi)(
                        ({
                            playerRef: e,
                            onKeyframesLoaded: u,
                            onAnimationComplete: t,
                            className: r,
                            classNames: i,
                        }) => {
                            const o = Le().model.root.get(),
                                l = o.rank,
                                c = o.division,
                                d = o.seasonName,
                                E = Re[l],
                                m = Me(l),
                                _ = (0, a.useState)(!1),
                                A = _[0],
                                F = _[1],
                                D = (0, a.useRef)(!1),
                                g = (0, a.useCallback)(() => {
                                    var u;
                                    (null == (u = e.current) || u.goToAndStop(E.end),
                                        F(!0),
                                        null == t || t(),
                                        (D.current = !0));
                                }, [t, e, E.end]),
                                B = su(() => {
                                    var t;
                                    const a = null == (t = e.current) ? void 0 : t.getCachedKeyframes();
                                    return null == a || !a.length || (null == u || u(), !1);
                                }),
                                p = B[0],
                                C = B[1];
                            return (
                                eu(() => (p(), C)),
                                (0, a.useEffect)(() => {
                                    var u;
                                    null == (u = e.current) ||
                                        u.onChangeTime((e) => {
                                            if (D && !D.current) {
                                                const u = Math.trunc(e.currentTime),
                                                    t = be[u];
                                                if (u >= E.end) return void g();
                                                t && !ou.has(t) && (s.O.sound.play.sound(t), ou.add(t));
                                            }
                                        });
                                }, [g, e, E.end]),
                                (0, a.useEffect)(() => {
                                    A && s.O.sound.play.sound(R.sounds.comp_7_ranks_shine());
                                }, [A]),
                                n().createElement(
                                    'div',
                                    { className: h()('RankAnimation_base_76', r) },
                                    n().createElement(Qe, {
                                        className: h()(
                                            'RankAnimation_backLayer_da',
                                            A && 'RankAnimation_backLayer__visible_fb',
                                            null == i ? void 0 : i.backLayer,
                                        ),
                                    }),
                                    n().createElement(ru, {
                                        className: h()(iu, null == i ? void 0 : i.rank),
                                        src: String(R.videos.comp7.$dyn(`rankAnimation_${d}`)),
                                        ref: e,
                                        autoplay: !1,
                                        preload: 'auto',
                                    }),
                                    m &&
                                        n().createElement(Ue, {
                                            seasonName: d,
                                            rank: l,
                                            division: c,
                                            size: Ie.x600,
                                            className: h()(
                                                iu,
                                                'RankAnimation_rankEmblemGhost_20',
                                                A && 'RankAnimation_rankEmblemGhost__visible_85',
                                                null == i ? void 0 : i.rank,
                                            ),
                                        }),
                                )
                            );
                        },
                    ),
                    cu = (0, U.Pi)(({ className: e }) => {
                        const u = Le().model.root.get().rank,
                            t = (0, a.useRef)(null);
                        return n().createElement(lu, {
                            playerRef: t,
                            onKeyframesLoaded: () => {
                                var e;
                                return null == (e = t.current) ? void 0 : e.goToAndPlay(Re[u].start);
                            },
                            classNames: { rank: e },
                        });
                    }),
                    du = 'Achievement_rank_73',
                    Eu = (0, U.Pi)(() => {
                        const e = Le().model.root.get(),
                            u = e.type,
                            t = e.hasRankInactivity;
                        (0, a.useEffect)(() => s.O.sound.play.sound(R.sounds.comp_7_new_rank()), []);
                        const r = (0, _e.useSpring)({
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                            delay: 400,
                            config: { duration: 400 },
                        });
                        return n().createElement(
                            'div',
                            { className: 'Achievement_base_f0' },
                            n().createElement(
                                _e.animated.div,
                                {
                                    className: h()(
                                        'Achievement_container_63',
                                        t && 'Achievement_container__withNotice_15',
                                    ),
                                    style: r,
                                },
                                (() => {
                                    switch (u) {
                                        case M.Rank:
                                            return n().createElement(cu, { className: du });
                                        case M.Division:
                                            return n().createElement(Xe, { rankClassname: du });
                                        default:
                                            return (
                                                console.error(
                                                    '[Achievement] Unreachable branch: add separate Achievement type',
                                                ),
                                                null
                                            );
                                    }
                                })(),
                            ),
                            t && n().createElement(Ze, { className: 'Achievement_notice_5e' }),
                        );
                    });
                function mu(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const _u = {
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
                    Au = [
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
                function Fu() {
                    return (
                        (Fu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Fu.apply(this, arguments)
                    );
                }
                class Du extends n().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && mu(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && mu(this.props.soundClick));
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
                            s = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(e, Au)),
                            m = h()(_u.base, _u[`base__${s}`], _u[`base__${r}`], null == i ? void 0 : i.base),
                            _ = h()(_u.icon, _u[`icon__${s}`], _u[`icon__${r}`], null == i ? void 0 : i.icon),
                            A = h()(_u.glow, null == i ? void 0 : i.glow),
                            F = h()(_u.caption, _u[`caption__${s}`], null == i ? void 0 : i.caption),
                            D = h()(_u.goto, null == i ? void 0 : i.goto);
                        return n().createElement(
                            'div',
                            Fu(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== s && n().createElement('div', { className: _u.shine }),
                            n().createElement('div', { className: _ }, n().createElement('div', { className: A })),
                            n().createElement('div', { className: F }, u),
                            a && n().createElement('div', { className: D }, a),
                        );
                    }
                }
                Du.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var gu = t(5521),
                    hu = t(9916);
                const Bu = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function pu(e = gu.n.NONE, u = Bu, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== gu.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!n && s.O.view.isEventHandled()) return;
                                (s.O.view.setEventHandled(), u(a), t && a.stopPropagation());
                            }
                        }
                    }, [u, e, t, n]);
                }
                const Cu = (0, U.Pi)(
                        ({ children: e, className: u, classNames: t, closeCallback: a }, r) => {
                            const s = Le().controls;
                            var i;
                            return (
                                (i = null != a ? a : s.close),
                                pu(gu.n.ESCAPE, i),
                                n().createElement(
                                    'div',
                                    { className: h()('AppContainer_base_95', u), ref: r },
                                    e,
                                    n().createElement(
                                        'div',
                                        { className: h()('AppContainer_close_4b', null == t ? void 0 : t.closeButton) },
                                        n().createElement(Du, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: null != a ? a : s.close,
                                        }),
                                    ),
                                )
                            );
                        },
                        { forwardRef: !0 },
                    ),
                    fu = ({ description: e, title: u, subTitle: t, className: a, classNames: r }) =>
                        n().createElement(
                            'div',
                            { className: h()('AppHeader_base_42', a) },
                            e &&
                                n().createElement(
                                    'div',
                                    { className: h()('AppHeader_description_71', null == r ? void 0 : r.description) },
                                    e,
                                ),
                            u &&
                                n().createElement(
                                    'div',
                                    { className: h()('AppHeader_title_4f', null == r ? void 0 : r.title) },
                                    u,
                                ),
                            t &&
                                n().createElement(
                                    'div',
                                    { className: h()('AppHeader_subTitle_20', null == r ? void 0 : r.subTitle) },
                                    t,
                                ),
                        ),
                    wu = (e) => `${Se.title.$dyn(ye[e])}`,
                    vu = (e) => `${Se.subtitle.$dyn(ye[e])}`,
                    bu = {
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
                let Ru, yu;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Ru || (Ru = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(yu || (yu = {})));
                const Su = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: s,
                    mixClass: i,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: E,
                    onMouseUp: m,
                    onMouseLeave: _,
                    onClick: A,
                }) => {
                    const F = (0, a.useRef)(null),
                        D = (0, a.useState)(t),
                        g = D[0],
                        B = D[1],
                        p = (0, a.useState)(!1),
                        C = p[0],
                        f = p[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                g && null !== F.current && !F.current.contains(e.target) && B(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [g]),
                        (0, a.useEffect)(() => {
                            B(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: F,
                                className: h()(
                                    bu.base,
                                    bu[`base__${r}`],
                                    s && bu.base__disabled,
                                    u && bu[`base__${u}`],
                                    g && bu.base__focus,
                                    C && bu.base__highlightActive,
                                    i,
                                ),
                                onMouseEnter: function (e) {
                                    s || (null !== o && mu(o), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    s || (m && m(e), f(!1));
                                },
                                onMouseDown: function (e) {
                                    s ||
                                        (null !== l && mu(l),
                                        E && E(e),
                                        t && (s || (F.current && (F.current.focus(), B(!0)))),
                                        f(!0));
                                },
                                onMouseLeave: function (e) {
                                    s || (_ && _(e), f(!1));
                                },
                                onClick: function (e) {
                                    s || (A && A(e));
                                },
                            },
                            r !== Ru.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: bu.back }),
                                    n().createElement('span', { className: bu.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: h()(bu.state, bu.state__default) },
                                n().createElement('span', { className: bu.stateDisabled }),
                                n().createElement('span', { className: bu.stateHighlightHover }),
                                n().createElement('span', { className: bu.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: bu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Su.defaultProps = { type: Ru.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Tu = Su,
                    xu = 'Buttons_button_de',
                    ku = (0, U.Pi)(({ className: e, mainButtonText: u = Se.button(), onClick: t }) => {
                        const a = Le(),
                            r = a.model,
                            s = a.controls;
                        return n().createElement(
                            'div',
                            { className: h()('Buttons_base_41', e) },
                            n().createElement(
                                Tu,
                                { type: Ru.primary, size: 'medium', onClick: null != t ? t : s.close, mixClass: xu },
                                u,
                            ),
                            r.computes.hasShopInfo() &&
                                n().createElement(
                                    Tu,
                                    { type: Ru.secondary, size: 'medium', onClick: s.openShop, mixClass: xu },
                                    Se.buttonToShop(),
                                ),
                        );
                    });
                var Nu = t(9738);
                const Lu = ({ children: e, className: u }) => {
                        const t = (0, _e.useSpring)({
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                            leave: { opacity: 0 },
                            config: Nu.config.molasses,
                        });
                        return n().createElement(_e.animated.div, { className: u, style: Object.assign({}, t) }, e);
                    },
                    Pu = ({ bgImage: e, isBlurred: u = !1, className: t, classNames: a }) =>
                        n().createElement(
                            'div',
                            { className: h()('ScreenBackground_base_21', t) },
                            n().createElement('div', {
                                className: h()(
                                    'ScreenBackground_layer_ea',
                                    u && 'ScreenBackground_layer__blurred_88',
                                    null == a ? void 0 : a.layer,
                                ),
                                style: { backgroundImage: `url(${e})` },
                            }),
                        ),
                    Ou = (e, u) => {
                        var t;
                        const a = null == (t = Te.$dyn(e)) ? void 0 : t.$dyn(Pe(u));
                        return a
                            ? `${a}`
                            : (console.error(`no background was found for rank ${u}, season ${e}`), R.invalid());
                    },
                    Mu = (0, U.Pi)(() => {
                        const e = Le().model.root.get(),
                            u = e.type,
                            t = e.seasonName,
                            a = e.rank,
                            r = e.division;
                        return n().createElement(
                            Cu,
                            null,
                            n().createElement(Pu, { bgImage: Ou(t, a), isBlurred: !0 }),
                            n().createElement(
                                Lu,
                                { className: 'DivisionApp_content_5d' },
                                n().createElement(fu, {
                                    description: `${Se.description.season.$dyn(t)}`,
                                    title: n().createElement(X, { text: wu(u), binding: { division: le(r) } }),
                                    subTitle: n().createElement(ue, { text: vu(u), binding: { rank: me(a) } }),
                                }),
                                n().createElement(
                                    'div',
                                    { className: 'DivisionApp_achievement_b3' },
                                    n().createElement(Eu, null),
                                ),
                                n().createElement(ku, null),
                            ),
                        );
                    });
                function Iu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                function Hu() {
                    const e = (0, a.useRef)(0);
                    return (
                        uu(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, a.useMemo)(
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
                }
                const Uu = (e) => () => {
                        const u = e.steps,
                            t = e.autoStart,
                            n = void 0 === t || t,
                            r = (0, a.useRef)(null),
                            s = (0, a.useRef)('idle'),
                            i = (() => {
                                const e = (0, a.useMemo)(() => ({}), []),
                                    u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                    t = (e, t) => {
                                        u(e).set(t, t);
                                    },
                                    n = (e, t) => {
                                        u(e).delete(t);
                                    },
                                    r = (e, ...t) => {
                                        for (
                                            var a,
                                                n = (function (e, u) {
                                                    var t =
                                                        ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                        e['@@iterator'];
                                                    if (t) return (t = t.call(e)).next.bind(t);
                                                    if (
                                                        Array.isArray(e) ||
                                                        (t = (function (e, u) {
                                                            if (e) {
                                                                if ('string' == typeof e) return Iu(e, u);
                                                                var t = Object.prototype.toString.call(e).slice(8, -1);
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
                                                                          ? Iu(e, u)
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
                                                })(u(e).values());
                                            !(a = n()).done;

                                        )
                                            (0, a.value)(...t);
                                    };
                                return (0, a.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                            })(),
                            o = Hu(),
                            l = (function () {
                                const e = (0, a.useRef)(0);
                                return (
                                    uu(() => {
                                        window.cancelAnimationFrame(e.current);
                                    }),
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
                            c = (0, a.useMemo)(() => {
                                const e = u[Symbol.iterator](),
                                    t = () => {
                                        const u = e.next();
                                        if (u.done) return ((s.current = 'end'), void i.trigger('end'));
                                        (o.run(() => {
                                            if (r.current) {
                                                if (
                                                    (r.current.classList.add(u.value.name),
                                                    i.trigger('change', u.value),
                                                    u.value.stopNextSteps)
                                                )
                                                    return ((s.current = 'paused'), void i.trigger('pause'));
                                                t();
                                            } else
                                                console.error(
                                                    `${u.value.name} step don't know on what rootRef it should be set`,
                                                );
                                        }, u.value.delay),
                                            (s.current = 'running'));
                                    };
                                return {
                                    rootRef: r,
                                    stateRef: s,
                                    steps: u,
                                    delayUntilStep: (e) => {
                                        let t = 0;
                                        for (let a = 0; a < u.length; a++)
                                            if (((t += u[a].delay), u[a] === e)) return t;
                                        throw new Error(`delayUntilStep didn't find step: ${e.name}`);
                                    },
                                    events: { on: i.on, off: i.off },
                                    start: () => {
                                        (t(), i.trigger('start'));
                                    },
                                    resume: () => {
                                        'paused' === s.current
                                            ? (t(), i.trigger('resume'))
                                            : console.warn(
                                                  'api.resume() should be called only after paused animation, ignore resume() call',
                                              );
                                    },
                                    skipAll: () => {
                                        (o.clear(),
                                            l.run(() => {
                                                (u.forEach((e) => {
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
                            }, [o, i, l, u]);
                        return (
                            eu(() => {
                                n && c.start();
                            }),
                            c
                        );
                    },
                    $u = {
                        OpeningContent: { name: 'openingContent', delay: 100 },
                        ShowBattlesList: { name: 'showBattlesList', delay: 400 },
                        FillBattles: { name: 'fillBattles', delay: 500 },
                        PauseBeforeRank: { name: 'pauseBeforeShowRank', delay: 1e3 },
                        ShowRank: { name: 'showRank', delay: 200, stopNextSteps: !0 },
                        ChangeBack: { name: 'changeBack', delay: 0 },
                        ShowHeader: { name: 'showHeader', delay: 1e3 },
                        ShowFooter: { name: 'showFooter', delay: 700 },
                    },
                    Gu = Uu({
                        steps: [
                            $u.OpeningContent,
                            $u.ShowBattlesList,
                            $u.FillBattles,
                            $u.PauseBeforeRank,
                            $u.ShowRank,
                            $u.ChangeBack,
                            $u.ShowHeader,
                            $u.ShowFooter,
                        ],
                    }),
                    Wu = (0, a.createContext)(null),
                    qu = () => {
                        const e = (0, a.useContext)(Wu);
                        if (null === e)
                            throw new Error(
                                'useAnimationApi was called in component, which is not wrapped in AnimationProvider',
                            );
                        return e;
                    },
                    zu = ({ children: e }) => {
                        const u = Gu();
                        return n().createElement(Wu.Provider, { value: u }, e);
                    },
                    Vu = (0, U.Pi)(() => {
                        var e;
                        const u = Le().model.root.get(),
                            t = u.seasonName,
                            r = u.rank,
                            s = u.type,
                            i = (0, a.useState)(!1),
                            o = i[0],
                            l = i[1],
                            c = `url(${null == (e = Te.$dyn(t)) ? void 0 : e.$dyn('qualification')})`,
                            d = `url(${Ou(t, r)})`,
                            E = qu();
                        return (
                            (0, a.useEffect)(() => {
                                const e = (e) => {
                                    e === $u.ChangeBack && l(!0);
                                };
                                return (
                                    E.events.on('change', e),
                                    () => {
                                        E.events.off('change', e);
                                    }
                                );
                            }, [E.events]),
                            n().createElement(
                                n().Fragment,
                                null,
                                n().createElement('div', {
                                    className: 'QualificationBackground_qualification_d7',
                                    style: { backgroundImage: c },
                                }),
                                n().createElement('div', {
                                    className: h()(
                                        'QualificationBackground_rankBg_5b',
                                        s === M.QualificationRank && 'QualificationBackground_rankBg__blurred_b9',
                                        o && 'QualificationBackground_rankBg__active_34',
                                    ),
                                    style: { backgroundImage: d },
                                }),
                            )
                        );
                    }),
                    Yu = {
                        header: 'QualificationApp_header_82',
                        qualificationRank: 'QualificationApp_qualificationRank_11',
                        rewardList: 'QualificationApp_rewardList_f9',
                        rewardList__singleMainReward: 'QualificationApp_rewardList__singleMainReward_de',
                        buttons: 'QualificationApp_buttons_1e',
                    },
                    ju = (e, u) => {
                        const t = [];
                        for (let a = 0; a < e; a++) t.push(u(a));
                        return t;
                    };
                var Qu = t(7006);
                let Xu;
                !(function (e) {
                    ((e.NotPlayed = 'notPlayed'),
                        (e.InProgress = 'inProgress'),
                        (e.Victory = 'victory'),
                        (e.Defeat = 'defeat'));
                })(Xu || (Xu = {}));
                const Ku = {
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
                    Zu = { notPlayed: 'notFinished', inProgress: 'notFinished', victory: 'victory', defeat: 'defeat' },
                    Ju = { x173: 173, x234: 234 },
                    et = ({ className: e, state: u, size: t = 'x173' }) => {
                        const a = Ju[t],
                            r = R.images.comp7.gui.maps.icons.icons.$dyn(`battle_${Zu[u]}`);
                        return n().createElement(
                            'div',
                            { className: h()(Ku.base, e, Ku[`base__${u}`], Ku[`base__size_${a}`]) },
                            n().createElement('div', {
                                className: Ku.battleBackground,
                                style: { backgroundImage: `url(${r})`, '--imageSize': `${a}rem` },
                            }),
                        );
                    },
                    ut = (0, U.Pi)(({ index: e, className: u }) => {
                        const t = Le().model,
                            r = v().mediaSize,
                            i = qu(),
                            o = 100 * e,
                            l = Hu(),
                            c = t.computes.qualificationBattleState(e),
                            d = (0, a.useState)('notPlayed'),
                            E = d[0],
                            m = d[1],
                            _ = (0, _e.useTransition)(E, {
                                from: { opacity: 0 },
                                enter: { opacity: 1 },
                                leave: { opacity: 0 },
                                config: Object.assign({}, _e.config.molasses, { duration: 100 }),
                                initial: { opacity: 1 },
                            });
                        return (
                            (0, a.useEffect)(() => {
                                const e = (e) => {
                                    e === $u.FillBattles &&
                                        l.run(() => {
                                            (s.O.sound.play.sound(
                                                ((e) => {
                                                    switch (e) {
                                                        case Xu.Victory:
                                                            return 'comp_7_rank_swords_green';
                                                        case Xu.Defeat:
                                                            return 'comp_7_rank_swords_red';
                                                        default:
                                                            return (
                                                                console.error(
                                                                    `sound for battleState ${e} was not implemented`,
                                                                ),
                                                                ''
                                                            );
                                                    }
                                                })(c),
                                            ),
                                                m(c));
                                        }, o);
                                };
                                return (
                                    i.events.on('change', e),
                                    () => {
                                        (i.events.off('change', e), l.clear());
                                    }
                                );
                            }, [i.events, c, l, o]),
                            n().createElement(
                                'div',
                                { className: h()('BattleItem_base_a6', u) },
                                _((e, u) =>
                                    n().createElement(
                                        Qu.animated.div,
                                        { style: e, className: 'BattleItem_item_79' },
                                        n().createElement(et, { state: u, size: r >= C.Medium ? 'x234' : 'x173' }),
                                    ),
                                ),
                            )
                        );
                    }),
                    tt = { rank: 'QualificationRank_rankAnimation_c8' },
                    at = (0, U.Pi)(() => {
                        const e = Le().model,
                            u = e.root.get().hasRankInactivity,
                            t = (0, a.useRef)(null),
                            r = qu();
                        return (
                            (0, a.useEffect)(() => {
                                const e = (e) => {
                                    var u;
                                    switch (e) {
                                        case $u.OpeningContent:
                                            s.O.sound.play.sound(R.sounds.comp_7_rank_appear());
                                            break;
                                        case $u.ShowRank:
                                            null == (u = t.current) || u.goToAndPlay(0);
                                    }
                                };
                                return (
                                    r.events.on('change', e),
                                    () => {
                                        r.events.off('change', e);
                                    }
                                );
                            }, [r.events]),
                            n().createElement(
                                'div',
                                { className: 'QualificationRank_base_28' },
                                n().createElement(
                                    'div',
                                    { className: 'QualificationRank_rank_f6' },
                                    n().createElement(lu, {
                                        playerRef: t,
                                        onAnimationComplete: r.resume,
                                        classNames: tt,
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: 'QualificationRank_battleList_6e' },
                                    ju(e.qualificationBattles.get().length, (e) =>
                                        n().createElement(ut, {
                                            index: e,
                                            key: e,
                                            className: 'QualificationRank_battleItem_3e',
                                        }),
                                    ),
                                ),
                                u && n().createElement(Ze, { className: 'QualificationRank_notice_e2' }),
                            )
                        );
                    }),
                    nt = (0, U.Pi)(() => {
                        const e = Le().model.root.get(),
                            u = e.type,
                            t = e.rank,
                            a = e.division;
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(fu, {
                                className: Yu.header,
                                description: Se.description.qualificationEnded(),
                                title: n().createElement(ue, {
                                    text: wu(u),
                                    binding: { rankUpperName: Ee(R.strings.comp7_ext.rankUpper, t) },
                                }),
                                subTitle: Me(t) ? ce(a) : void 0,
                            }),
                            n().createElement('div', { className: Yu.qualificationRank }, n().createElement(at, null)),
                        );
                    }),
                    rt = (e, u) => {
                        let t;
                        const a = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(a));
                        };
                    };
                let st, it, ot, lt, ct, dt, Et, mt;
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
                        (e.ModernizedDevicesT1Gift = 'modernized_devices_t1_gift'),
                        (e.ModernizedDevicesT2Gift = 'modernized_devices_t2_gift'),
                        (e.ModernizedDevicesT3Gift = 'modernized_devices_t3_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.EquipCoin = 'equipCoin'),
                        (e.LootBox = 'lootBox'),
                        (e.BrCoin = 'brcoin'),
                        (e.Attachment = 'attachment'));
                })(st || (st = {})),
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
                    })(it || (it = {})),
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
                    })(ot || (ot = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(lt || (lt = {})),
                    (function (e) {
                        ((e.ATTACHMENT_RARE = 'rare'),
                            (e.ATTACHMENT_EPIC = 'epic'),
                            (e.ATTACHMENT_LEGENDARY = 'legendary'),
                            (e.BATTLE_BOOSTER = 'battleBooster'),
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
                    })(ct || (ct = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(dt || (dt = {})),
                    (function (e) {
                        ((e.ATTACHMENT_RARE = 'rare'),
                            (e.ATTACHMENT_EPIC = 'epic'),
                            (e.ATTACHMENT_LEGENDARY = 'legendary'),
                            (e.BATTLE_BOOSTER = 'battleBooster'),
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
                    })(Et || (Et = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(mt || (mt = {})));
                const _t = [st.Attachment],
                    At = [
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
                function Ft(e) {
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
                const Dt = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: hu.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    gt = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            g = void 0 === D ? 0 : D,
                            h = e.onShow,
                            B = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, At);
                        const C = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, a.useMemo)(
                                () =>
                                    g ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            a = R.invalid('resId'),
                                            n = '';
                                        var r;
                                        return (
                                            u &&
                                                ((n =
                                                    (null == (r = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) ||
                                                    ''),
                                                (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (a = window.subViews[t].id)),
                                            { callerUrl: n, caller: t, stack: u, resId: a }
                                        );
                                    })().resId,
                                [g],
                            ),
                            w = (0, a.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (Dt(t, _, { isMouseEvent: !0, on: !0, arguments: Ft(n) }, f),
                                    h && h(),
                                    (C.current.isVisible = !0));
                            }, [t, _, n, f, h]),
                            v = (0, a.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        Dt(t, _, { on: !1 }, f),
                                        C.current.isVisible && B && B(),
                                        (C.current.isVisible = !1));
                                }
                            }, [t, _, f, B]),
                            b = (0, a.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(C.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = C.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', b, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', b, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && v();
                            }, [F, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        (window.removeEventListener('mouseleave', v), v());
                                    }
                                ),
                                [v],
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
                                                          ((C.current.timeoutId = window.setTimeout(w, c ? 100 : 400)),
                                                          r && r(e),
                                                          y && y(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (v(), null == s || s(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === E && v(), null == o || o(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === E && v(), null == i || i(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          p,
                                      ),
                                  )
                                : u
                        );
                        var y;
                    },
                    ht = ['children'];
                function Bt() {
                    return (
                        (Bt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Bt.apply(this, arguments)
                    );
                }
                const pt = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, ht);
                        return n().createElement(
                            gt,
                            Bt(
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
                    Ct = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ft() {
                    return (
                        (ft =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ft.apply(this, arguments)
                    );
                }
                const wt = R.views.common.tooltip_window.simple_tooltip_content,
                    vt = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            s = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Ct);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: r, note: s, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, r, s, o]);
                        return n().createElement(
                            gt,
                            ft(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? wt.SimpleTooltipHtmlContent('resId') : wt.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    };
                function bt() {
                    return (
                        (bt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        bt.apply(this, arguments)
                    );
                }
                const Rt = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const a = n().createElement('div', { className: t }, e);
                    if (u.header || u.body) return n().createElement(vt, u, a);
                    const r = u.contentId;
                    return r ? n().createElement(gt, bt({}, u, { contentId: r }), a) : n().createElement(pt, u, a);
                };
                class yt extends n().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? hu.B3.GOLD : hu.B3.INTEGRAL;
                        const u = hu.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                yt.defaultProps = { format: 'integral' };
                const St = [
                        st.Items,
                        st.Equipment,
                        st.Xp,
                        st.XpFactor,
                        st.Blueprints,
                        st.BlueprintsAny,
                        st.Goodies,
                        st.Berths,
                        st.Slots,
                        st.Tokens,
                        st.CrewSkins,
                        st.CrewBooks,
                        st.Customizations,
                        st.CreditsFactor,
                        st.TankmenXp,
                        st.TankmenXpFactor,
                        st.FreeXpFactor,
                        st.BattleToken,
                        st.LootBox,
                        st.PremiumUniversal,
                        st.NaturalCover,
                        st.BpCoin,
                        st.BattlePassSelectToken,
                        st.BattlaPassFinalAchievement,
                        st.BattleBadge,
                        st.BattlePassTicket,
                        st.BonusX5,
                        st.CrewBonusX3,
                        st.EpicSelectToken,
                        st.Comp7TokenWeeklyReward,
                        st.DeluxeGift,
                        st.ModernizedDevicesT1Gift,
                        st.ModernizedDevicesT2Gift,
                        st.ModernizedDevicesT3Gift,
                        st.BattleBoosterGift,
                        st.OptionalDevice,
                        st.Attachment,
                    ],
                    Tt = [st.Gold, st.Credits, st.Crystal, st.FreeXp],
                    xt = [st.BattlePassPoints, st.EquipCoin],
                    kt = [st.PremiumPlus, st.Premium],
                    Nt = (e) =>
                        St.includes(e)
                            ? lt.MULTI
                            : Tt.includes(e)
                              ? lt.CURRENCY
                              : xt.includes(e)
                                ? lt.NUMBER
                                : kt.includes(e)
                                  ? lt.PREMIUM_PLUS
                                  : lt.STRING,
                    Lt = ['engravings', 'backgrounds'],
                    Pt = ['engraving', 'background'],
                    Ot = [ot.Small, ot.Big],
                    Mt = {
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
                        base__normalize: 'Reward_base__normalize_a6',
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
                    It = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = ot.Big,
                        special: r,
                        value: s,
                        valueType: i,
                        title: o,
                        style: l,
                        className: c,
                        classNames: d,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const _ = ((e, u) => {
                                if (void 0 === u || !Ot.includes(e)) return null;
                                switch (u) {
                                    case ct.BATTLE_BOOSTER:
                                    case ct.BATTLE_BOOSTER_REPLACE:
                                        return dt.BATTLE_BOOSTER;
                                }
                            })(a, r),
                            A = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ct.BATTLE_BOOSTER:
                                        return Et.BATTLE_BOOSTER;
                                    case ct.BATTLE_BOOSTER_REPLACE:
                                        return Et.BATTLE_BOOSTER_REPLACE;
                                    case ct.BUILT_IN_EQUIPMENT:
                                        return Et.BUILT_IN_EQUIPMENT;
                                    case ct.EQUIPMENT_PLUS:
                                        return Et.EQUIPMENT_PLUS;
                                    case ct.EQUIPMENT_TROPHY_BASIC:
                                        return Et.EQUIPMENT_TROPHY_BASIC;
                                    case ct.EQUIPMENT_TROPHY_UPGRADED:
                                        return Et.EQUIPMENT_TROPHY_UPGRADED;
                                    case ct.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Et.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ct.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Et.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ct.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Et.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ct.PROGRESSION_STYLE_UPGRADED_1:
                                        return Et.PROGRESSION_STYLE_UPGRADED_1;
                                    case ct.PROGRESSION_STYLE_UPGRADED_2:
                                        return Et.PROGRESSION_STYLE_UPGRADED_2;
                                    case ct.PROGRESSION_STYLE_UPGRADED_3:
                                        return Et.PROGRESSION_STYLE_UPGRADED_3;
                                    case ct.PROGRESSION_STYLE_UPGRADED_4:
                                        return Et.PROGRESSION_STYLE_UPGRADED_4;
                                    case ct.PROGRESSION_STYLE_UPGRADED_5:
                                        return Et.PROGRESSION_STYLE_UPGRADED_5;
                                    case ct.PROGRESSION_STYLE_UPGRADED_6:
                                        return Et.PROGRESSION_STYLE_UPGRADED_6;
                                    case ct.ATTACHMENT_RARE:
                                        return Et.ATTACHMENT_RARE;
                                    case ct.ATTACHMENT_EPIC:
                                        return Et.ATTACHMENT_EPIC;
                                    case ct.ATTACHMENT_LEGENDARY:
                                        return Et.ATTACHMENT_LEGENDARY;
                                }
                            })(r),
                            F = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case lt.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case lt.CURRENCY:
                                    case lt.NUMBER:
                                        return n().createElement(yt, { format: 'integral', value: Number(e) });
                                    case lt.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, i);
                        return n().createElement(
                            'div',
                            {
                                className: h()(Mt.base, Mt[`base__${a}`], _t.includes(e) && Mt.base__normalize, c),
                                style: l,
                            },
                            n().createElement(
                                Rt,
                                { tooltipArgs: E, className: Mt.tooltipWrapper },
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement(
                                        'div',
                                        { className: h()(Mt.image, null == d ? void 0 : d.image) },
                                        _ &&
                                            n().createElement('div', {
                                                className: h()(Mt.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${_}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            n().createElement('div', {
                                                className: h()(Mt.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        A &&
                                            n().createElement('div', {
                                                className: h()(Mt.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${A}_overlay)`,
                                                },
                                            }),
                                    ),
                                    F &&
                                        n().createElement(
                                            'div',
                                            {
                                                className: h()(
                                                    Mt.info,
                                                    Mt[`info__${e}`],
                                                    i === lt.MULTI && Mt.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            F,
                                        ),
                                    o && n().createElement('div', { className: Mt.title }, o),
                                ),
                            ),
                            t &&
                                n().createElement(
                                    Rt,
                                    { tooltipArgs: m },
                                    n().createElement('div', {
                                        className: h()(Mt.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Ht = [ot.Big, ot.Small],
                    Ut = [ot.S232x174, ot.S296x222, ot.S400x300, ot.S600x450],
                    $t = R.images.comp7.gui.maps.icons.rewards,
                    Gt = (e, u) => 'styleProgress' === e.name && Ht.includes(u),
                    Wt = (e, u) =>
                        'progressLevel' in e && Gt(e, u)
                            ? `progressionStyleUpgraded_${e.progressLevel}`
                            : e.overlayType,
                    qt = (e) => ('vehicles_rent' === e.name ? e.label : e.value),
                    zt = ({ reward: e, rank: u, index: t }) => {
                        const a = e.tooltipId,
                            n = e.tooltipContentId;
                        return ((e, u, t) => {
                            const a = u && { contentId: u };
                            return Object.assign(
                                {
                                    args: e,
                                    isEnabled: Boolean((e && e.tooltipId) || u),
                                    ignoreMouseClick: !0,
                                    ignoreShowDelay: !u,
                                },
                                a,
                                { ignoreShowDelay: !0 },
                            );
                        })(
                            Object.assign({ tooltipId: a }, void 0 !== u && { rank: u }, void 0 !== t && { index: t }),
                            Number(n),
                        );
                    },
                    Vt = (e, u) => {
                        if ('tankman' === e.name) {
                            var t;
                            const a =
                                null == (t = R.images.comp7.gui.maps.icons.crew.$dyn(u)) ? void 0 : t.$dyn(e.groupName);
                            if (a) return `${a}`;
                            console.info(
                                `Folder for reward size ${u} was not found for crew with groupName: ${e.groupName}`,
                            );
                        }
                        if (Gt(e, u)) return `R.images.gui.maps.icons.quests.bonuses.${u}.camouflage`;
                        if ('customizations' === e.name && Ut.includes(u)) {
                            const t = $t.$dyn(u),
                                a =
                                    (null == t ? void 0 : t.$dyn(`style_${e.styleID}`)) ||
                                    (null == t ? void 0 : t.$dyn(e.icon));
                            if (a) return `${a}`;
                            console.info(
                                `asset with styleID: ${e.styleID}, size:${u} was not found, using common icon`,
                            );
                        }
                        return ((e, u = ot.Small) => {
                            const t = e.name,
                                a = e.type,
                                n = e.value,
                                r = e.icon,
                                s = e.item,
                                i = e.dogTagType,
                                o = ((e) => {
                                    switch (e) {
                                        case ot.S600x450:
                                            return 'c_600x450';
                                        case ot.S400x300:
                                            return 'c_400x300';
                                        case ot.S296x222:
                                            return 'c_296x222';
                                        case ot.S232x174:
                                            return 'c_232x174';
                                        case ot.Big:
                                            return 'c_80x80';
                                        case ot.Small:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(u);
                            switch (t) {
                                case 'basic':
                                case 'plus':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}_${n}`;
                                case 'premium':
                                case 'premium_plus':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${n}`;
                                case 'items':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                                case 'blueprints':
                                case 'blueprintsAny':
                                case 'finalBlueprints':
                                    return `R.images.gui.maps.icons.blueprints.fragment.${u}.${r}`;
                                case 'tokens':
                                case 'lootBox':
                                case 'battleToken':
                                    return 'big' === u
                                        ? e.iconBig.replace('..', 'img://gui')
                                        : e.iconSmall.replace('..', 'img://gui');
                                case 'customizations':
                                case 'styleProgress':
                                case 'crewSkins':
                                case 'goodies':
                                case 'groups':
                                case 'tmanToken':
                                case 'battlePassSelectToken':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}`;
                                case 'crewBooks':
                                    return `R.images.gui.maps.icons.crewBooks.books.${u}.${r}`;
                                case 'dogTagComponents':
                                    return ((e, u, t) => {
                                        const a = Lt[e];
                                        if (a) {
                                            const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(a),
                                                r = n.$dyn(t);
                                            return r ? `${r}` : `${n.$dyn(Pt[e])}`;
                                        }
                                        return (
                                            console.error(
                                                'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                            ),
                                            ''
                                        );
                                    })(i, u, r);
                                case 'dossier_badge':
                                    return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${r}`;
                                case 'dossier_achievement':
                                    return `R.images.gui.maps.icons.achievement.${o}.${r}`;
                                case 'xp':
                                case 'xpFactor':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                                case 'creditsFactor':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                                case 'tankmenXPFactor':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                                case 'dailyXPFactor':
                                case 'freeXPFactor':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                                case 'premiumTank':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                                case 'styleProgressToken':
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                                case 'collectionItem':
                                    return `R.images.gui.maps.icons.collectionItems.${o}.${r}`;
                                case 'attachment':
                                    return `R.images.gui.maps.vehicles.attachments.${u}.${r}`;
                                case 'statTracker':
                                    return `R.images.gui.maps.vehicles.statTrackers.${u}.${r}`;
                                default:
                                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                            }
                        })(e, u);
                    },
                    Yt = ({ reward: e, size: u, rank: t, index: a }) => {
                        const n = ((e, u) => {
                            if ('dogTagComponents' === e.name) {
                                if (u === ot.Big) return ot.S80x80;
                                if (u === ot.Small) return ot.S48x48;
                            }
                            return u;
                        })(e, u);
                        return Object.assign({}, e, {
                            size: n,
                            image: Vt(e, n),
                            value: qt(e),
                            valueType: Nt(e.name),
                            special: Wt(e, n),
                            tooltipArgs: zt({ reward: e, rank: t, index: a }),
                            periodicIconTooltipArgs: {
                                header: R.strings.tooltips.periodicReward.header(),
                                body: R.strings.tooltips.periodicReward.comp7.body(),
                            },
                        });
                    };
                var jt = t(9272);
                const Qt = {
                        '--pageContentWidth': '78vw',
                        base: 'AnimatedReward_base_62',
                        entering: 'AnimatedReward_entering_4a',
                        entered: 'AnimatedReward_entered_56',
                        fadeIn: 'AnimatedReward_fadeIn_64',
                        fadeInThreeQuarters: 'AnimatedReward_fadeInThreeQuarters_36',
                        fadeInHalf: 'AnimatedReward_fadeInHalf_f1',
                        fadeOut: 'AnimatedReward_fadeOut_d7',
                        fadeInWithScale: 'AnimatedReward_fadeInWithScale_f4',
                        slideUp: 'AnimatedReward_slideUp_3d',
                        scale: 'AnimatedReward_scale_31',
                        raysAppearance: 'AnimatedReward_raysAppearance_fc',
                        rotate: 'AnimatedReward_rotate_9d',
                        'reverse-rotate': 'AnimatedReward_reverse-rotate_50',
                        glowAppearance: 'AnimatedReward_glowAppearance_f1',
                        highlightAppearance: 'AnimatedReward_highlightAppearance_20',
                        blink: 'AnimatedReward_blink_6a',
                        slideUpIn: 'AnimatedReward_slideUpIn_00',
                    },
                    Xt = (e, u = 0) => ({ appear: u + 400 + 200 * e, enter: 600 }),
                    Kt = () => {
                        s.O.sound.play.sound(R.sounds.bp_reward());
                    },
                    Zt = ({ rewardIndex: e, delay: u = 0, children: t }) =>
                        n().createElement(jt.ZP, { appear: !0, in: !0, timeout: Xt(e, u), onEntered: Kt }, (e) =>
                            n().createElement('div', { className: h()(Qt.base, Qt[e]) }, t),
                        ),
                    Jt = 'AdditionalRewards_reward_59';
                function ea() {
                    return (
                        (ea =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ea.apply(this, arguments)
                    );
                }
                const ua = ({ delay: e, onAnimationComplete: u, className: t, classNames: r }) => {
                        const s = Le().model,
                            i = v().mediaSize >= C.Medium ? ot.Big : ot.Small,
                            o = s.additionalRewards.get().length,
                            l = o > 10,
                            c = Xt(Math.min(s.additionalRewards.get().length, 10), e),
                            d = c.appear,
                            E = c.enter + d;
                        (0, a.useEffect)(
                            () =>
                                rt(() => {
                                    null == u || u();
                                }, E),
                            [E, u],
                        );
                        const m = l ? [...we(s.additionalRewards.get(), 0, 8)] : s.additionalRewards.get();
                        return n().createElement(
                            'div',
                            { className: h()('AdditionalRewards_base_9f', t) },
                            fe(m, (u, t) => {
                                const a = 'vehicles_rent' === u.name;
                                return n().createElement(
                                    Zt,
                                    { key: t, rewardIndex: t, delay: e },
                                    n().createElement(
                                        'div',
                                        { className: h()(Jt, null == r ? void 0 : r.reward) },
                                        n().createElement(
                                            It,
                                            ea({}, Yt({ reward: u, size: i }), {
                                                className: h()(a && 'AdditionalRewards_vehiclesRentBase_54'),
                                                classNames: {
                                                    info: h()(a && 'AdditionalRewards_vehiclesRentLabel_2b'),
                                                },
                                            }),
                                        ),
                                    ),
                                );
                            }),
                            l &&
                                n().createElement(
                                    Zt,
                                    { rewardIndex: m.length, delay: e },
                                    n().createElement(
                                        'div',
                                        { className: Jt },
                                        n().createElement(It, {
                                            name: '',
                                            image: `R.images.gui.maps.icons.quests.bonuses.${i}.default`,
                                            size: i,
                                            value: W(R.strings.tooltips.quests.awards.additional.bottom(), {
                                                count: o - 10 + 1,
                                            }),
                                            tooltipArgs: {
                                                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                                args: { showCount: 9 },
                                            },
                                        }),
                                    ),
                                ),
                        );
                    },
                    ta = {
                        '--pageContentWidth': '78vw',
                        base: 'MainRewards_base_85',
                        ribbon: 'MainRewards_ribbon_10',
                        fadeIn: 'MainRewards_fadeIn_16',
                        base__singleMainReward: 'MainRewards_base__singleMainReward_d2',
                        base__shopInfo: 'MainRewards_base__shopInfo_75',
                        rewardWrapper: 'MainRewards_rewardWrapper_65',
                        reward: 'MainRewards_reward_4d',
                        rewardTimer: 'MainRewards_rewardTimer_1d',
                        rewardLabel: 'MainRewards_rewardLabel_4c',
                        rewardLabel__multi: 'MainRewards_rewardLabel__multi_4e',
                        rewardLabel__credits: 'MainRewards_rewardLabel__credits_a4',
                        rewardLabel__gold: 'MainRewards_rewardLabel__gold_d4',
                        rewardLabel__crystal: 'MainRewards_rewardLabel__crystal_dd',
                        rewardLabel__currency: 'MainRewards_rewardLabel__currency_ef',
                        fadeInThreeQuarters: 'MainRewards_fadeInThreeQuarters_f8',
                        fadeInHalf: 'MainRewards_fadeInHalf_ba',
                        fadeOut: 'MainRewards_fadeOut_a1',
                        fadeInWithScale: 'MainRewards_fadeInWithScale_9d',
                        slideUp: 'MainRewards_slideUp_6d',
                        scale: 'MainRewards_scale_75',
                        raysAppearance: 'MainRewards_raysAppearance_99',
                        rotate: 'MainRewards_rotate_9d',
                        'reverse-rotate': 'MainRewards_reverse-rotate_b1',
                        glowAppearance: 'MainRewards_glowAppearance_08',
                        highlightAppearance: 'MainRewards_highlightAppearance_d4',
                        blink: 'MainRewards_blink_e6',
                        slideUpIn: 'MainRewards_slideUpIn_2c',
                    };
                function aa() {
                    return (
                        (aa =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        aa.apply(this, arguments)
                    );
                }
                const na = { periodicIcon: ta.rewardTimer },
                    ra = (0, U.Pi)(({ className: e, classNames: u, rewardClassNames: t, onAnimationComplete: r }) => {
                        const s = Le().model,
                            i = s.mainRewards.get(),
                            o =
                                ((c = v().mediaSize),
                                (d = i.length),
                                (E = s.computes.hasShopInfo()),
                                1 !== d || E
                                    ? c >= C.Large
                                        ? ot.S400x300
                                        : c >= C.Small
                                          ? ot.S296x222
                                          : ot.S232x174
                                    : c >= C.Large
                                      ? ot.S600x450
                                      : ot.S400x300),
                            l = Xt(i.length).appear;
                        var c, d, E;
                        return (
                            (0, a.useEffect)(() => rt(() => (null == r ? void 0 : r()), l), [l, r]),
                            n().createElement(
                                'div',
                                { className: h()(ta.base, e, ta[`base__${s.computes.styleModifier()}`]) },
                                n().createElement('div', { className: h()(ta.ribbon, null == u ? void 0 : u.ribbon) }),
                                fe(i, (e, a) => {
                                    const r = Nt(e.name);
                                    return n().createElement(
                                        Zt,
                                        { key: a, rewardIndex: a },
                                        n().createElement(
                                            'div',
                                            { className: ta.rewardWrapper },
                                            n().createElement(
                                                It,
                                                aa({}, Yt({ reward: e, size: o }), {
                                                    className: ta.reward,
                                                    classNames: Object.assign({}, na, t),
                                                }),
                                            ),
                                            n().createElement(
                                                'div',
                                                {
                                                    className: h()(
                                                        ta.rewardLabel,
                                                        ta[`rewardLabel__${e.name}`],
                                                        ta[`rewardLabel__${r}`],
                                                        null == u ? void 0 : u.rewardLabel,
                                                    ),
                                                },
                                                e.label,
                                            ),
                                        ),
                                    );
                                }),
                            )
                        );
                    }),
                    sa = {
                        base: 'ShopInfo_base_3f',
                        icon: 'ShopInfo_icon_a6',
                        icon__open: 'ShopInfo_icon__open_2d',
                        icon__discount: 'ShopInfo_icon__discount_f1',
                        content: 'ShopInfo_content_cc',
                        header: 'ShopInfo_header_3f',
                        text: 'ShopInfo_text_d7',
                    },
                    ia = R.strings.comp7_ext.rewardsScreen.shopInfo,
                    oa = (0, U.Pi)(({ className: e }) => {
                        const u = Le().model.root.get().shopInfoType;
                        return n().createElement(
                            'div',
                            { className: h()(sa.base, e) },
                            n().createElement('div', { className: h()(sa.icon, sa[`icon__${u}`]) }),
                            n().createElement(
                                'div',
                                { className: sa.content },
                                n().createElement('div', { className: sa.header }, ia.header.$dyn(u)),
                                n().createElement('div', { className: sa.text }, ia.text.$dyn(u)),
                            ),
                        );
                    }),
                    la = R.strings.comp7_ext.rewardsScreen,
                    ca = (0, U.Pi)(
                        ({
                            className: e,
                            mainRewardsClassName: u,
                            mainRewardsClassNames: t,
                            rewardClassNames: r,
                            additionalContainerClassName: i,
                            additionalTitleClassName: o,
                            additionalRewardsClassNames: l,
                            onMainRewardsAnimationComplete: c,
                            onAdditionalRewardsAnimationComplete: d,
                        }) => {
                            const E = Le().model,
                                m = E.mainRewards.get(),
                                _ = E.additionalRewards.get().length,
                                A = E.computes.hasShopInfo(),
                                F = Xt(m.length),
                                D = Xt(Math.min(10, _)),
                                g = F.enter + F.appear,
                                B = g + (D.enter + D.appear);
                            return (
                                (0, a.useEffect)(
                                    () => rt(() => s.O.sound.play.sound(R.sounds.gui_reward_screen_general()), 400),
                                    [],
                                ),
                                (0, a.useEffect)(
                                    () =>
                                        rt(() => {
                                            A && s.O.sound.play.sound(R.sounds.comp_7_shop_info());
                                        }, B - 300),
                                    [A, B],
                                ),
                                n().createElement(
                                    'div',
                                    {
                                        className: h()('RewardList_base_53', e),
                                        style: {
                                            '--additionalTitleDelay': `${g}ms`,
                                            '--additionalTitleDuration': '300ms',
                                            '--shopInfoDelay': `${B}ms`,
                                            '--shopInfoDuration': '300ms',
                                        },
                                    },
                                    n().createElement(ra, {
                                        className: u,
                                        classNames: t,
                                        rewardClassNames: r,
                                        onAnimationComplete: c,
                                    }),
                                    n().createElement(
                                        'div',
                                        { className: h()('RewardList_additional_a3', i) },
                                        Boolean(_) &&
                                            n().createElement(
                                                n().Fragment,
                                                null,
                                                n().createElement(
                                                    'div',
                                                    { className: h()('RewardList_additionalTitle_d3', o) },
                                                    la.additionalRewards(),
                                                ),
                                                n().createElement(ua, {
                                                    delay: g,
                                                    classNames: l,
                                                    onAnimationComplete: d,
                                                }),
                                            ),
                                    ),
                                    A && n().createElement(oa, { className: 'RewardList_shopInfoContainer_74' }),
                                )
                            );
                        },
                    ),
                    da = {
                        base: 'BaseRewardList_base_29',
                        base__singleMainReward: 'BaseRewardList_base__singleMainReward_e1',
                        base__shopInfo: 'BaseRewardList_base__shopInfo_fd',
                        additionalContainer: 'BaseRewardList_additionalContainer_2c',
                        additionalTitle: 'BaseRewardList_additionalTitle_6a',
                    },
                    Ea = (0, U.Pi)(() => {
                        const e = Le().model;
                        return n().createElement(ca, {
                            className: h()(da.base, da[`base__${e.computes.styleModifier()}`]),
                            additionalContainerClassName: da.additionalContainer,
                            additionalTitleClassName: da.additionalTitle,
                        });
                    }),
                    ma = (0, U.Pi)(() => {
                        const e = Le().model,
                            u = e.root.get().type;
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(fu, {
                                className: Yu.header,
                                description: Se.description.qualificationEnded(),
                                title: wu(u),
                                subTitle: n().createElement(ue, {
                                    text: String(Se.subtitle.qualificationRewards()),
                                    binding: { ranks: e.computes.ranksList() },
                                }),
                            }),
                            n().createElement(
                                'div',
                                { className: h()(Yu.rewardList, Yu[`rewardList__${e.computes.styleModifier()}`]) },
                                n().createElement(Ea, null),
                            ),
                        );
                    }),
                    _a = (0, U.Pi)(() => {
                        const e = Le(),
                            u = e.model,
                            t = e.controls,
                            r = u.root.get().type,
                            s = qu(),
                            i = (0, a.useCallback)(() => {
                                (t.close(), s.skipAll());
                            }, [s, t]);
                        return n().createElement(
                            Cu,
                            { closeCallback: i, ref: s.rootRef },
                            n().createElement(Vu, null),
                            r === M.QualificationRank && n().createElement(nt, null),
                            r === M.QualificationRewards && n().createElement(ma, null),
                            n().createElement(ku, { className: Yu.buttons, onClick: i }),
                        );
                    }),
                    Aa = {
                        content: 'RankApp_content_ed',
                        achievement: 'RankApp_achievement_fd',
                        rewardList: 'RankApp_rewardList_5e',
                        rewardList__singleMainReward: 'RankApp_rewardList__singleMainReward_2c',
                    },
                    Fa = (0, U.Pi)(() => {
                        const e = Le().model.root.get(),
                            u = e.type,
                            t = e.rank,
                            a = e.division,
                            r = e.seasonName;
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(fu, {
                                description: `${Se.description.season.$dyn(r)}`,
                                title: n().createElement(ue, {
                                    text: wu(u),
                                    binding: { rankUpperName: Ee(R.strings.comp7_ext.rankUpper, t) },
                                }),
                                subTitle: Me(t) ? ce(a) : void 0,
                            }),
                            n().createElement('div', { className: Aa.achievement }, n().createElement(Eu, null)),
                        );
                    }),
                    Da = (0, U.Pi)(() => {
                        const e = Le().model,
                            u = e.root.get(),
                            t = u.type,
                            a = u.rank,
                            r = u.seasonName;
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(fu, {
                                description: `${Se.description.season.$dyn(r)}`,
                                title: n().createElement(ue, { text: wu(t) }),
                                subTitle: n().createElement(ue, { text: vu(t), binding: { rank: me(a) } }),
                            }),
                            n().createElement(
                                'div',
                                { className: h()(Aa.rewardList, Aa[`rewardList__${e.computes.styleModifier()}`]) },
                                n().createElement(Ea, null),
                            ),
                        );
                    }),
                    ga = (0, U.Pi)(() => {
                        const e = Le().model.root.get(),
                            u = e.type,
                            t = e.seasonName,
                            a = e.rank;
                        return n().createElement(
                            Cu,
                            null,
                            n().createElement(Pu, { bgImage: Ou(t, a), isBlurred: u === M.Rank }),
                            n().createElement(
                                Lu,
                                { className: Aa.content },
                                u === M.Rank && n().createElement(Fa, null),
                                u === M.RankRewards && n().createElement(Da, null),
                                n().createElement(ku, {
                                    mainButtonText: u === M.Rank ? Se.buttonToRewards() : Se.button(),
                                }),
                            ),
                        );
                    }),
                    ha = {
                        content: 'SelectedRewardsApp_content_8d',
                        rewardList: 'SelectedRewardsApp_rewardList_06',
                        mainRewards: 'SelectedRewardsApp_mainRewards_76',
                        rewardList__singleMainReward: 'SelectedRewardsApp_rewardList__singleMainReward_a4',
                        rewardLabel: 'SelectedRewardsApp_rewardLabel_1c',
                    },
                    Ba = (0, U.Pi)(() => {
                        const e = Le().model,
                            u = e.mainRewards.get().length;
                        return (
                            eu(() => {
                                s.O.sound.play.sound(R.sounds.comp_7_shop_purchase_module());
                            }),
                            n().createElement(
                                Cu,
                                null,
                                n().createElement(Pu, { bgImage: Te.yearly_rewards_screen_bg() }),
                                n().createElement(
                                    Lu,
                                    { className: ha.content },
                                    n().createElement(fu, {
                                        description: R.strings.comp7_ext.featureName(),
                                        title: Se.title.selectedRewards(u),
                                    }),
                                    n().createElement(
                                        'div',
                                        {
                                            className: h()(
                                                ha.rewardList,
                                                ha[`rewardList__${e.computes.styleModifier()}`],
                                            ),
                                        },
                                        e.additionalRewards.get().length > 0
                                            ? n().createElement(Ea, null)
                                            : n().createElement(ra, {
                                                  className: ha.mainRewards,
                                                  classNames: { rewardLabel: ha.rewardLabel },
                                              }),
                                    ),
                                    n().createElement(ku, null),
                                ),
                            )
                        );
                    }),
                    pa = {
                        content: 'TokensRewardsApp_content_4b',
                        rewardList: 'TokensRewardsApp_rewardList_d7',
                        rewardList__singleMainReward: 'TokensRewardsApp_rewardList__singleMainReward_61',
                    },
                    Ca = (0, U.Pi)(() => {
                        const e = Le(),
                            u = e.model,
                            t = e.controls,
                            a = u.root.get(),
                            r = a.type,
                            s = a.tokensCount,
                            i = a.hasNextScreen;
                        return n().createElement(
                            Cu,
                            null,
                            n().createElement(Pu, { bgImage: Te.tokens() }),
                            n().createElement(
                                Lu,
                                { className: pa.content },
                                n().createElement(fu, {
                                    description: R.strings.comp7_ext.featureName(),
                                    title: wu(r),
                                    subTitle: n().createElement(ue, {
                                        text: String(Se.subtitle.tokensRewards(s)),
                                        binding: { tokensCount: s },
                                    }),
                                }),
                                n().createElement(
                                    'div',
                                    { className: h()(pa.rewardList, pa[`rewardList__${u.computes.styleModifier()}`]) },
                                    n().createElement(Ea, null),
                                ),
                                n().createElement(ku, {
                                    mainButtonText: i ? Se.buttonToSelectedRewards() : Se.button(),
                                    onClick: i ? t.openNextScreen : t.close,
                                }),
                            ),
                        );
                    }),
                    fa = {
                        ShowHeader: { name: 'showHeader', delay: 500 },
                        ShowResultsRanks: { name: 'showResultsRanks', delay: 400 },
                        HideResultsRanks: { name: 'hideResultsRanks', delay: 900 },
                        ShowSeasonPoints: { name: 'showSeasonPoints', delay: 400 },
                        YearResult: { name: 'yearResult', delay: 800 },
                        ShowYearlyRewardsContent: { name: 'showYearlyRewardsContent', delay: 600, stopNextSteps: !0 },
                        ShowButtons: { name: 'showButtons', delay: 0 },
                    },
                    wa = (0, a.createContext)(null),
                    va = {
                        steps: [
                            fa.ShowHeader,
                            fa.ShowResultsRanks,
                            fa.HideResultsRanks,
                            fa.ShowSeasonPoints,
                            fa.YearResult,
                            fa.ShowYearlyRewardsContent,
                            fa.ShowButtons,
                        ],
                    },
                    ba = { steps: [fa.ShowHeader, fa.ShowYearlyRewardsContent, fa.ShowButtons] },
                    Ra = (0, U.Pi)(({ children: e }) => {
                        const u = Le().model.root.get().showSeasonResults,
                            t = Uu(u ? va : ba)();
                        return n().createElement(wa.Provider, { value: t }, e);
                    }),
                    ya = {
                        base: 'LaceDivider_base_55',
                        lace: 'LaceDivider_lace_f6',
                        peak: 'LaceDivider_peak_c0',
                        peak__right: 'LaceDivider_peak__right_a7',
                        line: 'LaceDivider_line_20',
                    },
                    Sa = ({ children: e, className: u, classNames: t }) =>
                        n().createElement(
                            'div',
                            { className: h()(ya.base, u) },
                            n().createElement(
                                'div',
                                {
                                    className: h()(
                                        ya.lace,
                                        ya.lace__left,
                                        null == t ? void 0 : t.lace,
                                        null == t ? void 0 : t.leftLace,
                                    ),
                                },
                                n().createElement('div', {
                                    className: h()(
                                        ya.peak,
                                        ya.peak__left,
                                        null == t ? void 0 : t.peak,
                                        null == t ? void 0 : t.leftPeak,
                                    ),
                                }),
                                n().createElement('div', {
                                    className: h()(
                                        ya.line,
                                        ya.line__left,
                                        null == t ? void 0 : t.line,
                                        null == t ? void 0 : t.leftLine,
                                    ),
                                }),
                            ),
                            e,
                            n().createElement(
                                'div',
                                {
                                    className: h()(
                                        ya.lace,
                                        ya.lace__right,
                                        null == t ? void 0 : t.lace,
                                        null == t ? void 0 : t.rightLace,
                                    ),
                                },
                                n().createElement('div', {
                                    className: h()(
                                        ya.line,
                                        ya.line__right,
                                        null == t ? void 0 : t.line,
                                        null == t ? void 0 : t.rightLine,
                                    ),
                                }),
                                n().createElement('div', {
                                    className: h()(
                                        ya.peak,
                                        ya.peak__right,
                                        null == t ? void 0 : t.peak,
                                        null == t ? void 0 : t.rightPeak,
                                    ),
                                }),
                            ),
                        ),
                    Ta = ({ className: e }) =>
                        n().createElement(fu, {
                            description: R.strings.comp7_ext.featureName(),
                            title: n().createElement(
                                Sa,
                                { className: 'Header_laceBase_7b', classNames: { lace: 'Header_laceContainer_f4' } },
                                n().createElement(
                                    'div',
                                    { className: 'Header_titleInner_0d' },
                                    Se.title.yearlyRewards(),
                                ),
                            ),
                            className: e,
                        }),
                    xa = ({ size: e, seasonName: u, className: t }) => {
                        const a = R.images.comp7.gui.maps.icons.ranks.$dyn(u).$num(e);
                        return n().createElement('div', {
                            className: h()(He, t),
                            style: { backgroundImage: `url(${a.$dyn('qualification')})`, '--imageSize': `${e}rem` },
                        });
                    },
                    ka = R.strings.comp7_ext,
                    Na = 'SeasonResult_rank_96',
                    La = Ie.x40,
                    Pa = (0, U.Pi)(({ index: e, className: u }) => {
                        const t = Le().model.computes.seasonResult(e),
                            a = t.rank,
                            r = t.seasonName,
                            s = t.seasonPointsCount,
                            i = 0 === s;
                        return n().createElement(
                            'div',
                            { className: h()('SeasonResult_base_f0', u) },
                            n().createElement(
                                'div',
                                { className: 'SeasonResult_animatedContainer_e4' },
                                i
                                    ? n().createElement(xa, { size: La, seasonName: r, className: Na })
                                    : n().createElement(Ue, { rank: a, size: La, seasonName: r, className: Na }),
                                n().createElement(
                                    'div',
                                    { className: 'SeasonResult_seasonPointsCounter_80' },
                                    n().createElement('div', { className: 'SeasonResult_count_ef' }, s),
                                    n().createElement('div', {
                                        className: 'SeasonResult_icon_e7',
                                        style: {
                                            backgroundImage: `url(${R.images.comp7.gui.maps.icons.icons.$dyn(`season_point_${r}_x48`)})`,
                                        },
                                    }),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { className: 'SeasonResult_container_7f' },
                                n().createElement(
                                    'div',
                                    { className: 'SeasonResult_result_ee' },
                                    i
                                        ? Se.noSeasonResult()
                                        : ((e, u = { upperCase: !1 }) =>
                                              W(
                                                  u.upperCase
                                                      ? R.strings.comp7_ext.rankUpper.text()
                                                      : R.strings.comp7_ext.rank.text(),
                                                  { rank: me(e, u) },
                                              ))(a),
                                ),
                                n().createElement(
                                    'div',
                                    { className: 'SeasonResult_seasonName_91' },
                                    ((o = r), ((e, u) => String(e.$dyn(u)))(ka.shortSeasonName, o)),
                                ),
                            ),
                        );
                        var o;
                    }),
                    Oa = (0, U.Pi)(({ className: e }) => {
                        const u = Le().model.computes.seasonPointsAmount();
                        return n().createElement(
                            'div',
                            { className: h()('YearResult_base_5a', e) },
                            n().createElement(
                                'div',
                                { className: 'YearResult_counter_52' },
                                n().createElement('div', { className: 'YearResult_count_9f' }, u),
                                n().createElement(
                                    'div',
                                    { className: 'YearResult_icon_1b' },
                                    n().createElement('div', { className: 'YearResult_iconBg_7a' }),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { className: 'YearResult_description_1c' },
                                n().createElement(ue, { text: Se.seasonPointsAmount() }),
                            ),
                        );
                    }),
                    Ma = (0, U.Pi)(({ className: e }) => {
                        const u = Le().model.seasonsResults.get().length;
                        return n().createElement(
                            'div',
                            { className: h()('SeasonsResultsHeading_base_1a', e) },
                            ju(u, (e) =>
                                n().createElement(
                                    n().Fragment,
                                    { key: e },
                                    n().createElement(Pa, { index: e }),
                                    e !== u - 1 &&
                                        n().createElement('div', { className: 'SeasonsResultsHeading_plus_f0' }),
                                ),
                            ),
                            n().createElement('div', { className: 'SeasonsResultsHeading_divider_3a' }),
                            n().createElement(Oa, { className: 'SeasonsResultsHeading_yearResult_2c' }),
                        );
                    }),
                    Ia = {
                        content: 'sharedStyles_content_2f',
                        header: 'sharedStyles_header_2d',
                        close: 'sharedStyles_close_10',
                        background: 'sharedStyles_background_7a',
                        backgroundImage: 'sharedStyles_backgroundImage_57',
                        yearlyVehicleContent: 'sharedStyles_yearlyVehicleContent_89',
                        rewardList: 'sharedStyles_rewardList_aa',
                        mainRewards: 'sharedStyles_mainRewards_fa',
                        rewardInfo: 'sharedStyles_rewardInfo_e1',
                        rewardList__singleMainReward: 'sharedStyles_rewardList__singleMainReward_be',
                        ribbon: 'sharedStyles_ribbon_63',
                        additionalRewardsContainer: 'sharedStyles_additionalRewardsContainer_9e',
                        additionalTitle: 'sharedStyles_additionalTitle_2d',
                        yearlyVehicleAdditionalRewards: 'sharedStyles_yearlyVehicleAdditionalRewards_92',
                        reward: 'sharedStyles_reward_f9',
                        vehicleName: 'sharedStyles_vehicleName_a1',
                        buttons: 'sharedStyles_buttons_ad',
                    },
                    Ha = (e, u) => (e ? Se.goToVehicle() : u ? Se.buttonToSelectedRewards() : Se.button()),
                    Ua = (0, U.Pi)(() => {
                        const e = (0, a.useState)(!1),
                            u = e[0],
                            t = e[1],
                            r = Le(),
                            i = r.model,
                            o = r.controls,
                            l = i.root.get(),
                            c = l.hasYearlyVehicle,
                            d = l.showSeasonResults,
                            E = l.hasNextScreen,
                            m = (() => {
                                const e = (0, a.useContext)(wa);
                                if (null === e)
                                    throw new Error(
                                        'useYearlyRewardsApi was called in component, which is not wrapped in YearlyRewardsAnimationContext',
                                    );
                                return e;
                            })(),
                            _ = i.additionalRewards.get().length > 0,
                            A = (0, a.useCallback)(() => (c ? o.changeType(M.YearlyVehicle) : o.close()), [o, c]);
                        return (
                            (0, a.useEffect)(() => {
                                let e = 0;
                                const u = (u) => {
                                    switch (u) {
                                        case fa.ShowHeader:
                                            s.O.sound.play.sound(R.sounds.comp_7_ranks_shine());
                                            break;
                                        case fa.ShowSeasonPoints:
                                            s.O.sound.play.sound(R.sounds.comp_7_annual_reward_rank_points());
                                            break;
                                        case fa.YearResult:
                                            e = window.setTimeout(
                                                () => s.O.sound.play.sound(R.sounds.comp_7_annual_reward_rank_points()),
                                                300,
                                            );
                                            break;
                                        case fa.ShowYearlyRewardsContent:
                                            t(!0);
                                    }
                                };
                                return (
                                    m.events.on('change', u),
                                    () => {
                                        (m.events.off('change', u), window.clearTimeout(e));
                                    }
                                );
                            }, [m.events]),
                            n().createElement(
                                Cu,
                                { ref: m.rootRef, closeCallback: A, classNames: { closeButton: Ia.close } },
                                n().createElement(
                                    'div',
                                    { className: Ia.background },
                                    n().createElement('div', {
                                        className: Ia.backgroundImage,
                                        style: { backgroundImage: `url(${Te.yearly_rewards_screen_bg()})` },
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Ia.content },
                                    n().createElement(Ta, { className: Ia.header }),
                                    d && n().createElement(Ma, null),
                                    u &&
                                        n().createElement(ca, {
                                            className: h()(
                                                Ia.rewardList,
                                                Ia[`rewardList__${i.computes.styleModifier()}`],
                                            ),
                                            mainRewardsClassName: Ia.mainRewards,
                                            mainRewardsClassNames: { ribbon: Ia.ribbon },
                                            rewardClassNames: { info: Ia.rewardInfo },
                                            additionalContainerClassName: Ia.additionalRewardsContainer,
                                            additionalTitleClassName: Ia.additionalTitle,
                                            onMainRewardsAnimationComplete: _ ? void 0 : m.resume,
                                            onAdditionalRewardsAnimationComplete: _ ? m.resume : void 0,
                                        }),
                                    n().createElement(ku, {
                                        className: Ia.buttons,
                                        mainButtonText: Ha(c, E),
                                        onClick: c ? () => o.changeType(M.YearlyVehicle) : o.close,
                                    }),
                                ),
                            )
                        );
                    }),
                    $a = {
                        ShowHeader: { name: 'showHeader', delay: 500 },
                        ShowPoints: { name: 'showPoints', delay: 1200 },
                        ShowContent: { name: 'showContent', delay: 1e3 },
                        ShowCrew: { name: 'showCrew', delay: 700, stopNextSteps: !0 },
                        ShowButtons: { name: 'showButtons', delay: 0 },
                    },
                    Ga = (0, a.createContext)(null),
                    Wa = () => {
                        const e = (0, a.useContext)(Ga);
                        if (null === e)
                            throw new Error(
                                'useYearlyVehicleApi was called in component, which is not wrapped in YearlyVehicleAnimationContext',
                            );
                        return e;
                    },
                    qa = {
                        steps: [$a.ShowHeader, $a.ShowPoints, $a.ShowContent, $a.ShowCrew, $a.ShowButtons],
                        autoStart: !1,
                    },
                    za = { steps: [$a.ShowHeader, $a.ShowContent, $a.ShowCrew, $a.ShowButtons], autoStart: !1 },
                    Va = (0, U.Pi)(({ children: e }) => {
                        const u = Le().model.root.get().showSeasonResults,
                            t = Uu(u ? qa : za)();
                        return n().createElement(Ga.Provider, { value: t }, e);
                    });
                var Ya = t(9690);
                const ja = {
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
                let Qa;
                !(function (e) {
                    ((e.x24 = '24x24'),
                        (e.x24Metal = '24x24_metal'),
                        (e.x48 = '48x48'),
                        (e.x60 = '60x54'),
                        (e.x64 = '64x64'),
                        (e.x80 = '80x80'),
                        (e.x83 = '83x74'),
                        (e.x180 = '180x135'));
                })(Qa || (Qa = {}));
                const Xa = R.images.gui.maps.icons.vehicleTypes,
                    Ka = (e) => {
                        switch (e) {
                            case Qa.x80:
                                return Xa.large;
                            case Qa.x83:
                                return Xa.big;
                            case Qa.x180:
                                return Xa.huge;
                            default:
                                return Xa.$dyn(`c_${e}`);
                        }
                    },
                    Za = (0, a.memo)(
                        ({
                            name: e,
                            tier: u,
                            type: t,
                            size: a = Qa.x24Metal,
                            typeIconFolderPath: r = Ka(a),
                            isPremium: s = !1,
                            className: i,
                            classNames: o,
                        }) => {
                            const l = `${((c = t), c.replace(/-/g, '_'))}${s ? '_elite' : ''}`;
                            var c;
                            return n().createElement(
                                'div',
                                { className: h()(ja.base, ja[`base__${a}`], i) },
                                n().createElement('div', { className: null == o ? void 0 : o.level }, (0, Ya.HG)(u)),
                                n().createElement(
                                    'div',
                                    {
                                        className: h()(
                                            ja.vehicleTypeContainer,
                                            null == o ? void 0 : o.vehicleTypeContainer,
                                        ),
                                    },
                                    n().createElement('div', {
                                        className: h()(ja.vehicleType, null == o ? void 0 : o.type),
                                        style: { backgroundImage: `url(${null == r ? void 0 : r.$dyn(l)})` },
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: h()(ja.shortName, null == o ? void 0 : o.shortName) },
                                    e,
                                ),
                            );
                        },
                    ),
                    Ja = 16 / 9,
                    en = ['rank', 'playerRef', 'className', 'onEnded'];
                function un() {
                    return (
                        (un =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        un.apply(this, arguments)
                    );
                }
                const tn = (0, U.Pi)((e) => {
                    let u = e.rank,
                        t = e.playerRef,
                        r = e.className,
                        s = e.onEnded,
                        i = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, en);
                    const o = Le(),
                        l = o.model,
                        c = o.controls,
                        d = l.root.get().videoState,
                        E = Wa(),
                        m = (0, a.useRef)(null),
                        _ = v(),
                        A = _.remScreenWidth,
                        F = _.remScreenHeight,
                        D = `yearly_style_${Pe(u)}`,
                        g = d === H.Ended,
                        B = (0, a.useMemo)(
                            () =>
                                (({ remScreenWidth: e, remScreenHeight: u }) => {
                                    let t, a;
                                    return (
                                        e / u > Ja ? ((t = e), (a = e / Ja)) : ((t = u * Ja), (a = u)),
                                        { width: `${t}rem`, height: `${a}rem` }
                                    );
                                })({ remScreenWidth: A, remScreenHeight: F }),
                            [F, A],
                        ),
                        p = (0, a.useCallback)(() => {
                            var e;
                            (null == (e = t.current) || e.play(), c.changeVideoState(H.Started));
                        }, [c, t]),
                        C = (0, a.useCallback)(() => {
                            c.changeVideoState(H.Ended);
                        }, [c]),
                        f = (0, a.useCallback)(() => {
                            var e;
                            null == (e = t.current) || e.pause();
                        }, [t]),
                        w = (0, a.useCallback)(() => {
                            var e;
                            null == (e = t.current) || e.play();
                        }, [t]),
                        b = (0, a.useCallback)(
                            (e) => {
                                var u;
                                (null == s || s(e), C(), null == (u = m.current) || u.play());
                            },
                            [C, s],
                        ),
                        y = su(() => {
                            var e;
                            const u = null == (e = t.current) ? void 0 : e.getCachedKeyframes();
                            return null == u || !u.length || (p(), !1);
                        }),
                        S = y[0],
                        T = y[1];
                    return (
                        eu(() => (S(), T)),
                        (0, a.useLayoutEffect)(() => {
                            switch (d) {
                                case H.Paused:
                                    return f();
                                case H.Resumed:
                                    return w();
                            }
                        }, [f, w, d]),
                        (0, a.useLayoutEffect)(() => {
                            const e = (e) => (e ? f() : w());
                            return (
                                engine.on('clientMinimized', e),
                                () => {
                                    engine.off('clientMinimized', e);
                                }
                            );
                        }, [f, w]),
                        (0, a.useEffect)(() => {
                            g && E.start();
                        }, [g, E]),
                        n().createElement(
                            'div',
                            { className: h()('VehicleVideo_base_49', r) },
                            !g &&
                                n().createElement(
                                    ru,
                                    un({}, i, {
                                        className: 'VehicleVideo_video_a1',
                                        ref: t,
                                        autoplay: !1,
                                        preload: 'auto',
                                        src: String(R.videos.comp7.$dyn(D)),
                                        style: B,
                                        onEnded: b,
                                    }),
                                ),
                            n().createElement(ru, {
                                className: h()(
                                    'VehicleVideo_loopedVideo_eb',
                                    g && 'VehicleVideo_loopedVideo__visible_c4',
                                ),
                                autoplay: !1,
                                ref: m,
                                loop: !0,
                                preload: 'auto',
                                src: String(R.videos.comp7.$dyn(`${D}_loop`)),
                                style: B,
                            }),
                        )
                    );
                });
                function an() {
                    return (
                        (an =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        an.apply(this, arguments)
                    );
                }
                const nn = (0, U.Pi)(() => {
                        const e = (0, a.useState)(!1),
                            u = e[0],
                            t = e[1],
                            r = Le(),
                            i = r.model,
                            o = r.controls,
                            l = i.root.get(),
                            c = l.showSeasonResults,
                            d = l.hasNextScreen,
                            E = l.rank,
                            m = i.vehicle.get(),
                            _ = (0, a.useRef)(null),
                            A = Wa(),
                            F = (0, a.useCallback)(() => {
                                var e, u;
                                const t = null == (e = _.current) ? void 0 : e.getCurrentTime(),
                                    a = null == (u = _.current) ? void 0 : u.getDuration();
                                var n;
                                return 'number' == typeof t && 'number' == typeof a && t <= a
                                    ? null == (n = _.current)
                                        ? void 0
                                        : n.setCurrentTime(a)
                                    : d
                                      ? o.openNextScreen()
                                      : o.close();
                            }, [o, d]);
                        return (
                            (0, a.useEffect)(() => {
                                const e = (e) => {
                                    switch (e) {
                                        case $a.ShowHeader:
                                            s.O.sound.play.sound(R.sounds.comp_7_ranks_shine());
                                            break;
                                        case $a.ShowPoints:
                                        case $a.ShowContent:
                                            s.O.sound.play.sound(R.sounds.comp_7_annual_reward_rank_points());
                                            break;
                                        case $a.ShowCrew:
                                            t(!0);
                                    }
                                };
                                return (
                                    A.events.on('change', e),
                                    () => {
                                        A.events.off('change', e);
                                    }
                                );
                            }, [A.events]),
                            n().createElement(
                                Cu,
                                { ref: A.rootRef, closeCallback: F, classNames: { closeButton: Ia.close } },
                                n().createElement(
                                    'div',
                                    { className: Ia.background },
                                    n().createElement(tn, { rank: E, playerRef: _ }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Ia.content },
                                    n().createElement(Ta, { className: Ia.header }),
                                    c && n().createElement(Ma, null),
                                    n().createElement(
                                        'div',
                                        { className: Ia.yearlyVehicleContent },
                                        n().createElement(
                                            pt,
                                            {
                                                args: { vehicleCD: m.vehicleCD, tooltipId: 'shopVehicle' },
                                                ignoreShowDelay: !0,
                                            },
                                            n().createElement(
                                                'div',
                                                null,
                                                n().createElement(
                                                    Za,
                                                    an({}, m, { size: Qa.x48, className: Ia.vehicleName }),
                                                ),
                                            ),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: Ia.additionalTitle },
                                            Se.yearlyVehicleCrew(),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: Ia.yearlyVehicleAdditionalRewards },
                                            u &&
                                                n().createElement(ua, {
                                                    delay: 0,
                                                    onAnimationComplete: A.resume,
                                                    classNames: { reward: Ia.reward },
                                                }),
                                        ),
                                    ),
                                    n().createElement(ku, {
                                        className: Ia.buttons,
                                        mainButtonText: d ? Se.selectEquipment() : Se.button(),
                                        onClick: d ? o.openNextScreen : o.close,
                                    }),
                                ),
                            )
                        );
                    }),
                    rn = (0, U.Pi)(() => {
                        const e = Le().model.root.get().type;
                        switch (e) {
                            case M.QualificationRank:
                            case M.QualificationRewards:
                                return n().createElement(zu, null, n().createElement(_a, null));
                            case M.Rank:
                            case M.RankRewards:
                                return n().createElement(ga, null);
                            case M.Division:
                                return n().createElement(Mu, null);
                            case M.TokensRewards:
                                return n().createElement(Ca, null);
                            case M.YearlyRewards:
                                return n().createElement(Ra, null, n().createElement(Ua, null));
                            case M.YearlyVehicle:
                                return n().createElement(Va, null, n().createElement(nn, null));
                            case M.SelectedRewards:
                                return n().createElement(Ba, null);
                            default:
                                return (
                                    console.error('[AppFactory]: Provide application for reward screen type: ', e),
                                    null
                                );
                        }
                    });
                engine.whenReady.then(() => {
                    O().render(
                        n().createElement(L, null, n().createElement(Ne, null, n().createElement(rn, null))),
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
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, a] = deferred[o], r = !0, s = 0; s < u.length; s++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
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
        (__webpack_require__.j = 'lobby/RewardsScreen/RewardsScreen'),
        (() => {
            var e = { 'lobby/RewardsScreen/RewardsScreen': 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, s, i] = t,
                        o = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < r.length; o++)
                        ((n = r[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/comp7.vendors'], () => __webpack_require__(4078));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
