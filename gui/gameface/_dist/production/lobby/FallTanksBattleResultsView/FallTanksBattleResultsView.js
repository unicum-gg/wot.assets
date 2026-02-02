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
                var a = t(472),
                    n = t(176);
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
            959: (e, u, t) => {
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
                    n = t(493);
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
                t.d(u, { ZP: () => s });
                var a = t(959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(n).reduce((e, u) => ((e[u] = () => (0, a.playSound)(n[u])), e), {}),
                    s = { play: Object.assign({}, r, { sound: a.playSound }), setRTPC: a.setRTPC };
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
                        addModelObserver: () => d,
                        addPreloadTexture: () => o,
                        arabic2roman: () => w,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => S,
                        events: () => s.U,
                        extraSize: () => T,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => v,
                        getFontNames: () => y,
                        getScale: () => F,
                        getSize: () => E,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => C,
                        isFocused: () => b,
                        pxToRem: () => D,
                        remToPx: () => p,
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => P,
                    }));
                var a = t(690),
                    n = t(722),
                    r = t(112),
                    s = t(538),
                    i = t(566);
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
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function g(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: p(u.x), y: p(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function B() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    w = a.cg,
                    S = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    T = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    P = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
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
            690: (e, u, t) => {
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
                t.d(u, {
                    B3: () => l,
                    Gr: () => c,
                    Z5: () => s.Z5,
                    lf: () => d,
                    B0: () => i,
                    c9: () => p,
                    ry: () => D,
                });
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
                    s = t(613);
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
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(521),
                    _ = t(138);
                const g = ['args'];
                function A(e, u, t, a, n, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(a, n);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(u, t);
                                        function s(e) {
                                            A(r, a, n, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(r, a, n, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    p = (e, u) => {
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
                                })(u, g);
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
                    f = () => p(i.CLOSE),
                    b = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var h = t(572);
                const C = n.instance,
                    B = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => p(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => p(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const s = _.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                m = o.height,
                                E = {
                                    x: _.O.view.pxToRem(l) + s.x,
                                    y: _.O.view.pxToRem(c) + s.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(m),
                                };
                            p(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: F(E),
                                on: !0,
                                args: r,
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
                            b(e, f);
                        },
                        handleViewEvent: p,
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
                        ClickOutsideManager: C,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = B;
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
            969: (e, u, t) => {
                'use strict';
                var a = {};
                (t.r(a),
                    t.d(a, {
                        Area: () => vt,
                        Bar: () => ht,
                        DefaultScroll: () => Bt,
                        Direction: () => mt,
                        defaultSettings: () => Et,
                        useHorizontalScrollApi: () => gt,
                    }));
                var n = {};
                (t.r(n), t.d(n, { Area: () => Mt, Bar: () => It, Default: () => Ot, useVerticalScrollApi: () => yt }));
                var r = t(363),
                    s = t.n(r);
                const i = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var o = t(138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e, u, t) {
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
                })(c || (c = {}));
                const m = o.O.client.getSize('rem'),
                    E = m.width,
                    _ = m.height,
                    g = Object.assign({ width: E, height: _ }, d(E, _, l)),
                    A = (0, r.createContext)(g),
                    F = ['children'],
                    D = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, F);
                        const a = (0, r.useContext)(A),
                            n = a.extraLarge,
                            s = a.large,
                            o = a.medium,
                            l = a.small,
                            c = a.extraSmall,
                            d = a.extraLargeWidth,
                            m = a.largeWidth,
                            E = a.mediumWidth,
                            _ = a.smallWidth,
                            g = a.extraSmallWidth,
                            D = a.extraLargeHeight,
                            p = a.largeHeight,
                            f = a.mediumHeight,
                            b = a.smallHeight,
                            h = a.extraSmallHeight,
                            C = { extraLarge: D, large: p, medium: f, small: b, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return u;
                            if (t.large && s) return u;
                            if (t.medium && o) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && d) return i(u, t, C);
                            if (t.largeWidth && m) return i(u, t, C);
                            if (t.mediumWidth && E) return i(u, t, C);
                            if (t.smallWidth && _) return i(u, t, C);
                            if (t.extraSmallWidth && g) return i(u, t, C);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && D) return u;
                                if (t.largeHeight && p) return u;
                                if (t.mediumHeight && f) return u;
                                if (t.smallHeight && b) return u;
                                if (t.extraSmallHeight && h) return u;
                            }
                        }
                        return null;
                    };
                ((D.defaultProps = {
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
                    (0, r.memo)(D));
                const p = ({ children: e }) => {
                    const u = (0, r.useContext)(A),
                        t = (0, r.useState)(u),
                        a = t[0],
                        n = t[1],
                        i = (0, r.useCallback)((e, u) => {
                            const t = o.O.view.pxToRem(e),
                                a = o.O.view.pxToRem(u);
                            n(Object.assign({ width: t, height: a }, d(t, a, l)));
                        }, []),
                        c = (0, r.useCallback)(() => {
                            const e = o.O.client.getSize('px');
                            i(e.width, e.height);
                        }, [i]);
                    (((e) => {
                        const u = (0, r.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        (o.O.client.events.on('clientResized', i), o.O.client.events.on('self.onScaleUpdated', c));
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                (o.O.client.events.off('clientResized', i),
                                    o.O.client.events.off('self.onScaleUpdated', c));
                            },
                            [i, c],
                        ));
                    const m = (0, r.useMemo)(() => Object.assign({}, a), [a]);
                    return s().createElement(A.Provider, { value: m }, e);
                };
                var f = t(483),
                    b = t.n(f),
                    h = t(926),
                    C = t.n(h);
                let B, v, y;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(B || (B = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(v || (v = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(y || (y = {})));
                const w = () => {
                        const e = (0, r.useContext)(A),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return B.ExtraLarge;
                                    case e.large:
                                        return B.Large;
                                    case e.medium:
                                        return B.Medium;
                                    case e.small:
                                        return B.Small;
                                    case e.extraSmall:
                                        return B.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), B.ExtraSmall);
                                }
                            })(e),
                            n = ((e) => {
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
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return y.ExtraLarge;
                                    case e.largeHeight:
                                        return y.Large;
                                    case e.mediumHeight:
                                        return y.Medium;
                                    case e.smallHeight:
                                        return y.Small;
                                    case e.extraSmallHeight:
                                        return y.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), y.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: n, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    S = ['children', 'className'];
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const P = {
                        [v.ExtraSmall]: '',
                        [v.Small]: C().SMALL_WIDTH,
                        [v.Medium]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH}`,
                        [v.Large]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH} ${C().EXTRA_LARGE_WIDTH}`,
                    },
                    N = {
                        [y.ExtraSmall]: '',
                        [y.Small]: C().SMALL_HEIGHT,
                        [y.Medium]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT}`,
                        [y.Large]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT} ${C().EXTRA_LARGE_HEIGHT}`,
                    },
                    x = {
                        [B.ExtraSmall]: '',
                        [B.Small]: C().SMALL,
                        [B.Medium]: `${C().SMALL} ${C().MEDIUM}`,
                        [B.Large]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE}`,
                        [B.ExtraLarge]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE} ${C().EXTRA_LARGE}`,
                    },
                    I = (e) => {
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
                            })(e, S);
                        const n = w(),
                            r = n.mediaWidth,
                            i = n.mediaHeight,
                            o = n.mediaSize;
                        return s().createElement('div', T({ className: b()(t, P[r], N[i], x[o]) }, a), u);
                    },
                    k = ['children'],
                    O = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, k);
                        return s().createElement(p, null, s().createElement(I, t, u));
                    };
                var M = t(533),
                    L = t.n(M);
                function U(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const G = {
                        playHighlight() {
                            U('highlight');
                        },
                        playClick() {
                            U('play');
                        },
                        playYes() {
                            U('yes1');
                        },
                    },
                    H = {
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
                    $ = [
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
                        (W =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        W.apply(this, arguments)
                    );
                }
                class z extends s().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && U(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && U(this.props.soundClick));
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
                            n = e.side,
                            r = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
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
                                })(e, $)),
                            E = b()(H.base, H[`base__${r}`], H[`base__${n}`], null == i ? void 0 : i.base),
                            _ = b()(H.icon, H[`icon__${r}`], H[`icon__${n}`], null == i ? void 0 : i.icon),
                            g = b()(H.glow, null == i ? void 0 : i.glow),
                            A = b()(H.caption, H[`caption__${r}`], null == i ? void 0 : i.caption),
                            F = b()(H.goto, null == i ? void 0 : i.goto);
                        return s().createElement(
                            'div',
                            W(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                m,
                            ),
                            'info' !== r && s().createElement('div', { className: H.shine }),
                            s().createElement('div', { className: _ }, s().createElement('div', { className: g })),
                            s().createElement('div', { className: A }, u),
                            a && s().createElement('div', { className: F }, a),
                        );
                    }
                }
                z.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var V = t(521),
                    j = t(916);
                const q = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function X(e = V.n.NONE, u = q, t = !1, a = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== V.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && o.O.view.isEventHandled()) return;
                                (o.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t, a]);
                }
                function K(e) {
                    X(V.n.ESCAPE, e);
                }
                var Y = t(515);
                const Z = 'finishTime',
                    Q = 'finishPosition',
                    J = 'squad',
                    ee = 'player',
                    ue = 'damage',
                    te = 'frag',
                    ae = 'xp',
                    ne = 'tank',
                    re = R.images.fun_random.gui.maps.icons.feature.asset_packs,
                    se = 'undefined';
                function ie(e, u) {
                    return e
                        ? 'string' == typeof u
                            ? e.$dyn(u)
                            : u.reduce((e, u) => e.$dyn(u), e)
                        : (console.warn('FunRandom.combineRPaths: base folder empty: '), null);
                }
                function oe(e, { poFileName: u, assetsPointer: t, isSubMode: a = !1 } = {}) {
                    const n = u ? R.strings.$dyn(u) : R.strings.fun_random;
                    if (!n || 'string' == typeof n) throw Error("Incorrect 'poFileName' argument");
                    const r = a ? 'sub_modes' : 'modes',
                        s = n.$dyn(r),
                        i = (t ? (null == s ? void 0 : s.$dyn(t)) : n) || (null == s ? void 0 : s.$dyn(se));
                    return e ? { staticTexts: ie(n, e), dynamicTexts: ie(i, e) } : { staticTexts: n, dynamicTexts: i };
                }
                function le(e, u) {
                    var t;
                    const a = u ? 'sub_modes' : 'modes',
                        n = re.$dyn(a);
                    return null != (t = n.$dyn(e)) ? t : n.$dyn(se);
                }
                class ce extends s().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? j.B3.GOLD : j.B3.INTEGRAL;
                        const u = j.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                let de, me, Ee, _e, ge, Ae, Fe, De;
                ((ce.defaultProps = { format: 'integral' }),
                    (function (e) {
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
                            (e.BrCoin = 'brcoin'));
                    })(de || (de = {})),
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
                    })(me || (me = {})),
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
                    })(Ee || (Ee = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(_e || (_e = {})),
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
                    })(ge || (ge = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Ae || (Ae = {})),
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
                    })(Fe || (Fe = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(De || (De = {})));
                const pe = [
                        de.Items,
                        de.Equipment,
                        de.Xp,
                        de.XpFactor,
                        de.Blueprints,
                        de.BlueprintsAny,
                        de.Goodies,
                        de.Berths,
                        de.Slots,
                        de.Tokens,
                        de.CrewSkins,
                        de.CrewBooks,
                        de.Customizations,
                        de.CreditsFactor,
                        de.TankmenXp,
                        de.TankmenXpFactor,
                        de.FreeXpFactor,
                        de.BattleToken,
                        de.LootBox,
                        de.PremiumUniversal,
                        de.NaturalCover,
                        de.BpCoin,
                        de.BattlePassSelectToken,
                        de.BattlaPassFinalAchievement,
                        de.BattleBadge,
                        de.BattlePassTicket,
                        de.BonusX5,
                        de.CrewBonusX3,
                        de.EpicSelectToken,
                        de.Comp7TokenWeeklyReward,
                        de.DeluxeGift,
                        de.ModernizedDevicesT1Gift,
                        de.ModernizedDevicesT2Gift,
                        de.ModernizedDevicesT3Gift,
                        de.BattleBoosterGift,
                        de.OptionalDevice,
                    ],
                    fe = [de.Gold, de.Credits, de.Crystal, de.FreeXp],
                    be = [de.BattlePassPoints, de.EquipCoin],
                    he = [de.PremiumPlus, de.Premium],
                    Ce = ['engravings', 'backgrounds'],
                    Be = ['engraving', 'background'],
                    ve = (e, u = Ee.Small) => {
                        const t = e.name,
                            a = e.type,
                            n = e.value,
                            r = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case Ee.S600x450:
                                        return 'c_600x450';
                                    case Ee.S400x300:
                                        return 'c_400x300';
                                    case Ee.S296x222:
                                        return 'c_296x222';
                                    case Ee.S232x174:
                                        return 'c_232x174';
                                    case Ee.Big:
                                        return 'c_80x80';
                                    case Ee.Small:
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
                                    const a = Ce[e];
                                    if (a) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(a),
                                            r = n.$dyn(t);
                                        return r ? `${r}` : `${n.$dyn(Be[e])}`;
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
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    ye = (e, u, t) => {
                        const a = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            a,
                            t,
                        );
                    },
                    we = [Ee.Small, Ee.Big];
                function Se(e) {
                    return e;
                }
                function Te() {
                    return !1;
                }
                console.log;
                var Pe = t(174);
                function Re(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const Ne = (e) => (0 === e ? window : window.subViews.get(e));
                function xe(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const Ie = xe;
                function ke(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                function Oe(e, u) {
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) if (u(Ie(e, t), t, e)) return !0;
                    return !1;
                }
                function Me(e, u) {
                    for (let n = 0; n < e.length; n++) {
                        const r =
                            ((t = e[n]),
                            (a = void 0),
                            t && 'value' in t && null != (a = t.constructor) && a.name.includes('ArrayItem')
                                ? null == t
                                    ? void 0
                                    : t.value
                                : t);
                        if (u(r, n, e)) return r;
                    }
                    var t, a;
                }
                function Le(e, u) {
                    for (let t = 0; t < e.length; t++) if (u(Ie(e, t), t, e)) return t;
                }
                var Ue = t(946);
                let Ge;
                !(function (e) {
                    ((e[(e.DESCENDING = -1)] = 'DESCENDING'), (e[(e.ASCENDING = 1)] = 'ASCENDING'));
                })(Ge || (Ge = {}));
                const He = (e) => (u) => (t, a) => e.call(null, t, a) * u,
                    $e =
                        (...e) =>
                        (u, t) => {
                            for (let a = 0; a < e.length; a++) {
                                const n = e[a].call(null, u, t);
                                if (0 !== n) return n;
                            }
                            return 0;
                        },
                    We = (e, u) => {
                        const t = e.toUpperCase(),
                            a = u.toUpperCase();
                        return t === a ? 0 : t > a ? 1 : -1;
                    },
                    ze = (e) => (u, t) => {
                        const a = u[e],
                            n = t[e];
                        return 'string' == typeof a && 'string' == typeof n
                            ? We(a, n)
                            : 'number' == typeof a && 'number' == typeof n
                              ? a - n
                              : 0;
                    };
                let Ve;
                !(function (e) {
                    ((e.Asc = 'ascending'), (e.Desc = 'descending'));
                })(Ve || (Ve = {}));
                const je = { [Ve.Asc]: Ge.ASCENDING, [Ve.Desc]: Ge.DESCENDING },
                    qe = { heavyTank: 4, mediumTank: 3, 'AT-SPG': 2, lightTank: 1, SPG: 0 };
                function Xe({ userNames: e }, { userNames: u }) {
                    return We(e.userName, u.userName);
                }
                function Ke(e) {
                    const u = ze(e);
                    return (e, t) => u(e, t);
                }
                function Ye(e) {
                    const u = ze(e);
                    return ({ efficiencyValues: e }, { efficiencyValues: t }) => u(e, t);
                }
                function Ze(e) {
                    const u = ze(e);
                    return ({ vehicle: e }, { vehicle: t }) => u(e, t);
                }
                function Qe(e, u) {
                    return (function (e, u) {
                        const t = qe[e],
                            a = qe[u];
                        return t === a ? 0 : t > a ? 1 : -1;
                    })(e.vehicle.type, u.vehicle.type);
                }
                const Je =
                        (e, ...u) =>
                        (t, a) => {
                            for (let n = 0; n < u.length; n++) {
                                const r = e[n],
                                    s = (0 !== r ? r : Ge.ASCENDING) * u[n].call(null, t, a);
                                if (0 !== s) return s;
                            }
                            return 0;
                        },
                    eu = {
                        [ue]: He($e(Ye('damageDealt'), Xe)),
                        [te]: He($e(Ye('kills'), Xe)),
                        [ae]: He($e(Ye('earnedXp'), Xe)),
                        [J]: He($e(Ke('squadIndex'), Xe)),
                        [ne]: He(Je([0, 0, Ge.DESCENDING, Ge.DESCENDING], Ze('tier'), Qe, Ze('name'), Xe)),
                        [ee]: He(Xe),
                    };
                function uu(e, u, t, a = eu, n = ee) {
                    var r;
                    const s = je[t],
                        i = null != (r = a[u]) ? r : a[n];
                    return ke(e, Se).sort(i(s));
                }
                const tu = 'allies',
                    au = 'enemies',
                    nu = 'empty',
                    ru = (0, r.createContext)(null),
                    su = (0, r.createContext)(null),
                    iu = '1',
                    ou = ((e, u) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: n, mocks: i }) {
                                const l = (0, r.useRef)([]),
                                    c = (e, t, a) => {
                                        var n;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Ne,
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
                                                        const i = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = o.O.view.addModelObserver(i, u, !0);
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
                                                                                    return Re(e, u);
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
                                                                                          ? Re(e, u)
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
                                            i = (u) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(u)) : s.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            d = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        userStatus: e.object('userStatus'),
                                                        user: e.object('userNames'),
                                                        killer: e.object('userStatus.killer'),
                                                        battleInfo: e.object('battleInfo'),
                                                        efficiency: e.array('efficiency'),
                                                        rewards: e.array('rewards'),
                                                        premiumPlus: e.object('premiumPlus'),
                                                        detailsColumns: e.array('teamStats.shownValueColumns'),
                                                        singleTeamMode: e.object('teamStats.isSingleTeamPostbattle'),
                                                        sortType: e.object('teamStats.sortingColumn'),
                                                        sortDirection: e.object('teamStats.sortingOrder'),
                                                        selectedTeam: Pe.LO.box(nu),
                                                        selectedPlayerId: Pe.LO.box(-1),
                                                        currentTabId: Pe.LO.box(iu),
                                                        allies: e.array('teamStats.allies'),
                                                        enemies: e.array('teamStats.enemies'),
                                                        progressRewards: e.array('progress.rewards'),
                                                        stageRequiredCounters: e.array(
                                                            'progress.stageRequiredCounters',
                                                        ),
                                                        progress: e.object('progress'),
                                                        animationStatus: Pe.LO.box(!0),
                                                    },
                                                    t = (0, Ue.Om)(() => {
                                                        const e = Oe(
                                                                u.allies.get(),
                                                                (e) => void 0 !== e.squadIndex && e.squadIndex > 0,
                                                            ),
                                                            t = Oe(
                                                                u.enemies.get(),
                                                                (e) => void 0 !== e.squadIndex && e.squadIndex > 0,
                                                            );
                                                        return e || t;
                                                    }),
                                                    a = (0, Ue.Om)(() => {
                                                        const e = u.sortType.get();
                                                        return e !== J || t() ? e : ae;
                                                    }),
                                                    n = (0, Ue.Om)(() => {
                                                        const e = Me(u.allies.get(), (e) => e.isPersonal);
                                                        return e ? e.squadIndex : -1;
                                                    }),
                                                    r = (0, Ue.Om)((e, t) =>
                                                        uu(u.enemies.get(), a(), u.sortDirection.get(), e, t),
                                                    ),
                                                    s = (0, Ue.Om)((e, t) =>
                                                        uu(u.allies.get(), a(), u.sortDirection.get(), e, t),
                                                    ),
                                                    i = (0, Ue.Om)(() => {
                                                        const e = u.selectedTeam.get() === tu,
                                                            t = u.selectedPlayerId.get();
                                                        return Me(
                                                            e ? u.allies.get() : u.enemies.get(),
                                                            (e) => e.playerIndex === t,
                                                        );
                                                    }),
                                                    o = (0, Ue.Om)(() =>
                                                        Me(
                                                            u.singleTeamMode.get() ? u.enemies.get() : u.allies.get(),
                                                            (e) => e.isPersonal,
                                                        ),
                                                    ),
                                                    l = (0, Ue.Om)((e) => {
                                                        const u = i();
                                                        return (
                                                            !!u &&
                                                            (function (e, u, t) {
                                                                if (Array.isArray(e)) return e.reduce(u, t);
                                                                let a = t;
                                                                for (let t = 0; t < e.length; t++)
                                                                    a = u(a, Ie(e, t), t, e);
                                                                return a;
                                                            })(
                                                                u.detailedStatistics,
                                                                (e, u) => e + 1 + u.details.length,
                                                                0,
                                                            ) > e
                                                        );
                                                    }),
                                                    c = (0, Ue.Om)(
                                                        () =>
                                                            ke(u.progressRewards.get(), (e) => {
                                                                return {
                                                                    name: e.name,
                                                                    image: ve(e),
                                                                    value: e.value,
                                                                    special: e.overlayType,
                                                                    valueType:
                                                                        ((u = e.name),
                                                                        pe.includes(u)
                                                                            ? _e.MULTI
                                                                            : fe.includes(u)
                                                                              ? _e.CURRENCY
                                                                              : be.includes(u)
                                                                                ? _e.NUMBER
                                                                                : he.includes(u)
                                                                                  ? _e.PREMIUM_PLUS
                                                                                  : _e.STRING),
                                                                    tooltipArgs: ye(
                                                                        { tooltipId: e.tooltipId },
                                                                        Number(e.tooltipContentId),
                                                                    ),
                                                                };
                                                                var u;
                                                            }),
                                                        { equals: Te },
                                                    ),
                                                    d = (0, Ue.Om)((e) => {
                                                        const t = u.progress.get(),
                                                            a = t.previousPoints;
                                                        let n = t.maximumPoints;
                                                        if (!1 === t.isInUnlimitedProgression) {
                                                            var r;
                                                            const t = u.stageRequiredCounters.get(),
                                                                a = xe(t, e - 1),
                                                                s = null != (r = xe(t, e - 2)) ? r : 0;
                                                            void 0 === a || a < 0
                                                                ? console.warn(
                                                                      `Progression stage's required points have a value ${a} for stage number ${e}`,
                                                                  )
                                                                : (n = a - s);
                                                        }
                                                        return {
                                                            previous: { value: n, deltaFrom: a, maxValue: n },
                                                            fromZeroToEnd: { value: n, deltaFrom: 0, maxValue: n },
                                                        };
                                                    }),
                                                    m = (0, Ue.Om)(() => {
                                                        const e = u.progress.get(),
                                                            t = e.maximumPoints,
                                                            a = e.currentPoints,
                                                            n = e.earnedPoints;
                                                        return {
                                                            current: {
                                                                value: a,
                                                                deltaFrom: a - n < 0 ? 0 : a - n,
                                                                maxValue: t,
                                                            },
                                                            withoutAnimation: { value: a, deltaFrom: a, maxValue: t },
                                                        };
                                                    });
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        personalSquadIndex: n,
                                                        enemiesSorted: r,
                                                        alliesSorted: s,
                                                        selectedPlayer: i,
                                                        currentPlayer: o,
                                                        hasDetailedInfoScroll: l,
                                                        hasSquads: t,
                                                        activeSortingType: a,
                                                        progressionValues: m,
                                                        progressionValuesWithStageMaximum: d,
                                                        rewards: c,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: i,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const a = null != t ? t : i(u),
                                                            n = Pe.LO.box(a, { equals: Te });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, Pe.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const a = null != t ? t : i(u),
                                                            n = Pe.LO.box(a, { equals: Te });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, Pe.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const a = i(t);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (e, u) => ((e[u] = Pe.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, Pe.aD)((e) => {
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
                                                                    (e, [u, t]) => ((e[t] = Pe.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, Pe.aD)((e) => {
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
                                            m = { mode: e, model: d, externalModel: s, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && a ? a.controls(m) : u(m),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    d = (0, r.useRef)(!1),
                                    m = (0, r.useState)(e),
                                    E = m[0],
                                    _ = m[1],
                                    g = (0, r.useState)(() => c(e, a, i)),
                                    A = g[0],
                                    F = g[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        d.current ? F(c(E, a, i)) : (d.current = !0);
                                    }, [i, E, a]),
                                    (0, r.useEffect)(() => {
                                        _(e);
                                    }, [e]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (A.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [A],
                                    ),
                                    s().createElement(t.Provider, { value: A }, n)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(
                        0,
                        ({
                            externalModel: e,
                            model: {
                                currentTabId: u,
                                sortType: t,
                                sortDirection: a,
                                selectedTeam: n,
                                selectedPlayerId: r,
                                animationStatus: s,
                            },
                        }) =>
                            Object.assign(
                                {
                                    closeWindow: e.createCallbackNoArgs('onClose'),
                                    riseRewards: e.createCallbackNoArgs('premiumPlus.onPremiumXpBonusApplied'),
                                    changeTab: e.createCallback((e) => ({ tabId: e }), 'onTabChanged'),
                                    saveStatsSorting: e.createCallback(
                                        (e, u) => ({ column: e, sortDirection: u }),
                                        'teamStats.onStatsSorted',
                                    ),
                                },
                                (function (e) {
                                    const u = {};
                                    for (const t in e)
                                        if (Object.prototype.hasOwnProperty.call(e, t)) {
                                            const a = e[t];
                                            u[t] = (0, Pe.aD)(a);
                                        }
                                    return u;
                                })({
                                    updateTeamTableSelectedPlayer: (e, u) => {
                                        (n.set(e), r.set(u));
                                    },
                                    updateTeamTableSorting: (e, u) => {
                                        (t.set(e), a.set(u));
                                    },
                                    updateCurrentTabId: (e) => {
                                        u.set(e);
                                    },
                                    setAnimationEnabled: (e) => {
                                        s.set(e);
                                    },
                                }),
                            ),
                    ),
                    lu = ou[0],
                    cu = ou[1],
                    du = {
                        base: 'App_base_89',
                        background: 'App_background_e3',
                        background__team: 'App_background__team_3e',
                        bgDarken: 'App_bgDarken_f6',
                        bgDarken__personal: 'App_bgDarken__personal_fd',
                        bgGlow: 'App_bgGlow_a4',
                        bigShine: 'App_bigShine_1e',
                        closeButton: 'App_closeButton_4c',
                        wrapper: 'App_wrapper_a2',
                        content: 'App_content_4c',
                        footer: 'App_footer_42',
                        navigation: 'App_navigation_d1',
                        navigationItem: 'App_navigationItem_54',
                    },
                    mu = [];
                function Eu(e) {
                    const u = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, u.current)(...e), mu)
                    );
                }
                const _u = (0, r.createContext)(null);
                function gu() {
                    const e = (0, r.useContext)(_u);
                    if (null === e) throw new Error('You can use tabs hooks only with Tabs component');
                    return e;
                }
                const Au = {
                    base: 'Switch_base_22',
                    base__inactive: 'Switch_base__inactive_ae',
                    base__active: 'Switch_base__active_17',
                    highlight: 'Switch_highlight_33',
                    border: 'Switch_border_3a',
                    border__left: 'Switch_border__left_b2',
                    border__right: 'Switch_border__right_93',
                    separator: 'Switch_separator_f2',
                    separator__left: 'Switch_separator__left_40',
                    separator__right: 'Switch_separator__right_bf',
                };
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
                const Du = s().forwardRef(function (e, u) {
                        let t = Fu({}, e);
                        return s().createElement('div', Fu({ className: 'Switcher_base_2f', ref: u }, t));
                    }),
                    pu = (e) => {
                        const u = e.active,
                            t = e.children,
                            a = e.onActiveChange,
                            n = (0, r.useState)(u),
                            i = n[0],
                            o = n[1],
                            l = Eu((e) => {
                                null == a || a(e);
                            }),
                            c = (0, r.useMemo)(() => ({ active: i, change: o }), [i]);
                        return (
                            (0, r.useLayoutEffect)(() => {
                                o(u);
                            }, [u]),
                            (0, r.useEffect)(() => {
                                u !== i && a && l(i);
                            }, [i, u, l, a]),
                            s().createElement(_u.Provider, { value: c }, t)
                        );
                    };
                let fu;
                ((pu.Switcher = Du),
                    (pu.Switch = ({ tabId: e, children: u }) => {
                        const t = gu();
                        return s().createElement(
                            'div',
                            {
                                className: b()(
                                    Au.base,
                                    Au['base__' + ((n = t.active === e), n ? 'active' : 'inactive')],
                                ),
                                onClick: () => t.change(e),
                            },
                            s().createElement('div', {
                                className: b()(
                                    Au.separator,
                                    Au['separator__' + ((a = t.active < e), a ? 'right' : 'left')],
                                ),
                            }),
                            t.active === e &&
                                s().createElement(
                                    r.Fragment,
                                    null,
                                    s().createElement('div', { className: Au.highlight }),
                                    s().createElement('div', { className: b()(Au.border, Au.border__left) }),
                                    s().createElement('div', { className: b()(Au.border, Au.border__right) }),
                                ),
                            u,
                        );
                        var a, n;
                    }),
                    (pu.Content = ({ children: e }) => {
                        const u = gu();
                        return s().createElement(r.Fragment, { key: u.active }, e(u.active));
                    }),
                    (function (e) {
                        ((e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220'));
                    })(fu || (fu = {})));
                const bu = [
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
                function hu(e) {
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
                const Cu = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: j.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    Bu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            E = e.decoratorId,
                            _ = void 0 === E ? 0 : E,
                            g = e.isEnabled,
                            A = void 0 === g || g,
                            F = e.targetId,
                            D = void 0 === F ? 0 : F,
                            p = e.onShow,
                            f = e.onHide,
                            b = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, bu);
                        const h = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, r.useMemo)(
                                () =>
                                    D ||
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
                                [D],
                            ),
                            B = (0, r.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Cu(t, _, { isMouseEvent: !0, on: !0, arguments: hu(a) }, C),
                                    p && p(),
                                    (h.current.isVisible = !0));
                            }, [t, _, a, C, p]),
                            v = (0, r.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Cu(t, _, { on: !1 }, C),
                                        h.current.isVisible && f && f(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, _, C, f]),
                            y = (0, r.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', y, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', y, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === A && v();
                            }, [A, v]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        (window.removeEventListener('mouseleave', v), v());
                                    }
                                ),
                                [v],
                            ),
                            A
                                ? (0, r.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((w = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(B, c ? 100 : 400)),
                                                          n && n(e),
                                                          w && w(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (v(), null == s || s(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === m && v(), null == o || o(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === m && v(), null == i || i(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          b,
                                      ),
                                  )
                                : u
                        );
                        var w;
                    },
                    vu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function yu() {
                    return (
                        (yu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        yu.apply(this, arguments)
                    );
                }
                const wu = R.views.common.tooltip_window.simple_tooltip_content,
                    Su = (e) => {
                        let u = e.children,
                            t = e.body,
                            a = e.header,
                            n = e.note,
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
                            })(e, vu);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: a, note: n, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, a, n, o]);
                        return s().createElement(
                            Bu,
                            yu(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? wu.SimpleTooltipHtmlContent('resId') : wu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    },
                    Tu = (e) => {
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
                    Pu = ['content', 'classMix', 'className'];
                function Ru() {
                    return (
                        (Ru =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ru.apply(this, arguments)
                    );
                }
                const Nu = (e) => {
                        let u = e.content,
                            t = e.classMix,
                            a = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Pu);
                        const i = (0, r.useRef)(null),
                            o = (0, r.useState)(!0),
                            l = o[0],
                            c = o[1];
                        return (
                            (0, r.useEffect)(() =>
                                Tu(() => {
                                    const e = i.current;
                                    e && e.offsetWidth >= e.scrollWidth && c(!1);
                                }),
                            ),
                            s().createElement(
                                Su,
                                { isEnabled: l, body: u },
                                s().createElement(
                                    'div',
                                    Ru({}, n, { ref: i, className: b()('TextOverflow_base_3b', a, t) }),
                                    u,
                                ),
                            )
                        );
                    },
                    xu = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    Iu = { [fu.default]: 'c_24x24', [fu.x48]: 'c_48x48', [fu.x80]: 'c_80x80', [fu.x220]: 'c_220x220' },
                    ku = ({ badgeID: e, size: u = fu.default, className: t }) => {
                        const a = R.images.gui.maps.icons.library.badges.$dyn(Iu[u]);
                        return s().createElement('div', {
                            className: b()(xu.base, xu[`base__${u}`], t),
                            style: { backgroundImage: `url(${a.$dyn(`badge_${e}`)})` },
                        });
                    };
                var Ou = t(281);
                let Mu;
                function Lu(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function Uu(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(Mu || (Mu = {}));
                const Gu = (e) => e.replace(/&nbsp;/g, ' '),
                    Hu = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    $u = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Wu = (e, u, t = Mu.left) => e.split(u).reduce(t === Mu.left ? Hu : $u, []),
                    zu = (() => {
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
                    Vu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ju = {
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
                    qu = (0, r.memo)(({ tooltipHeaderName: e }) => {
                        const u = (0, r.useMemo)(
                                () => Uu(R.strings.tooltips.anonymizer.teamStats.header(), { name: e }),
                                [e],
                            ),
                            t = R.strings.tooltips.anonymizer.teamStats.body();
                        return s().createElement(
                            Su,
                            { header: u, body: t },
                            s().createElement('div', { className: ju.anonymizedIcon }),
                        );
                    });
                function Xu() {
                    return (
                        (Xu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Xu.apply(this, arguments)
                    );
                }
                const Ku = { [fu.default]: 'c_64x24', [fu.x48]: 'c_68x28' },
                    Yu = { [fu.default]: 'c_48x48', [fu.x48]: 'c_48x48' },
                    Zu = ({
                        userName: e,
                        clanAbbrev: u = '',
                        igrType: t = 0,
                        badge: a = { badgeID: '' },
                        suffixBadge: n = { badgeID: '' },
                        isInverted: i = !1,
                        isFakeNameVisible: o = !1,
                        isAnonymizerShown: l = !1,
                        hiddenUserName: c = '',
                        size: d = fu.default,
                        userNameClassName: m = '',
                        clanTagClassName: E = '',
                    }) => {
                        const _ = R.images.gui.maps.icons.library.badges.strips.$dyn(Ku[d]),
                            g = (0, r.useMemo)(
                                () => ({ backgroundImage: `url(${_.$dyn(`strip_${n.badgeID}`)})` }),
                                [n, _],
                            ),
                            A = R.images.gui.maps.icons.library.badges.$dyn(Yu[d]),
                            F = (0, r.useMemo)(
                                () => ({ backgroundImage: `url(${A.$dyn(`badge_${n.badgeID}`)})` }),
                                [n, A],
                            ),
                            D = u ? `[${u}]` : '',
                            p = b()(ju.base, ju[`base__${d}`], i && ju.base__inverted),
                            f = b()(ju.userName, m),
                            h = b()(ju.clanTag, E),
                            C = e !== c,
                            B = o ? `${c}${D}` : c,
                            v = Boolean(a.badgeID) && s().createElement(ku, Xu({ size: d }, a, { key: 'badge' })),
                            y = Date.now(),
                            w = [
                                v,
                                [
                                    s().createElement(
                                        'div',
                                        { className: f, key: 'userName' },
                                        s().createElement(Nu, { content: e, key: y }),
                                    ),
                                    !o && Boolean(D) && s().createElement('div', { className: h, key: 'clanTag' }, D),
                                ],
                                0 !== t && s().createElement('div', { className: ju.igrIcon, key: 'igrType' }),
                                Boolean(n.badgeID) &&
                                    s().createElement(
                                        'div',
                                        { className: ju.suffixBadgeWrapper, key: 'suffixBadge' },
                                        s().createElement('div', { className: ju.suffixBadgeStripe, style: g }),
                                        s().createElement('div', { className: ju.suffixBadge, style: F }),
                                    ),
                                l && C && s().createElement(qu, { tooltipHeaderName: B, key: 'anonymizer' }),
                            ];
                        return s().createElement('div', { className: p }, i ? w.reverse() : w);
                    };
                let Qu;
                var Ju;
                (((Ju = Qu || (Qu = {})).Base = '#ced9d9'),
                    (Ju.Killed = '#8c8c7e'),
                    (Ju.Highlighted = '#feab34'),
                    (Ju.KilledHighlighted = '#b58136'),
                    (Ju.TeamKiller = '#09e2ff'),
                    (Ju.KilledTeamKiller = '#0c8fa0'),
                    (Ju.DetailedInfoPlayerBase = '#f2f2f7'));
                const et = ['isTeamKiller'],
                    ut = (e) => {
                        let u = e.isTeamKiller,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, et);
                        return u
                            ? t.isKilled
                                ? Qu.KilledTeamKiller
                                : Qu.TeamKiller
                            : (({ isPersonal: e, isSameSquad: u, isKilled: t }) =>
                                  e || u ? (t ? Qu.KilledHighlighted : Qu.Highlighted) : t ? Qu.Killed : Qu.Base)(t);
                    },
                    tt = ['isTeamKiller', 'isKilled', 'isPersonal', 'isSameSquad'],
                    at = (e) => {
                        let u = e.isTeamKiller,
                            t = e.isKilled,
                            a = e.isPersonal,
                            n = e.isSameSquad,
                            i = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, tt);
                        const o = ut({ isTeamKiller: u, isKilled: t, isPersonal: a, isSameSquad: n }),
                            l = (0, r.useMemo)(() => ({ color: o }), [o]);
                        return s().createElement('div', { style: l }, s().createElement(Zu, i));
                    },
                    nt = ({ binding: e, text: u = '', classMix: t, alignment: a = Mu.left, formatWithBrackets: n }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const i = n && e ? Lu(u, e) : u;
                        return s().createElement(
                            r.Fragment,
                            null,
                            i.split('\n').map((u, n) =>
                                s().createElement(
                                    'div',
                                    { className: b()('FormatText_base_d0', t), key: `${u}-${n}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            t && e in t
                                                ? t[e]
                                                : ((e, u = Mu.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return Vu.includes(t)
                                                          ? zu(e)
                                                          : 'ja' === t
                                                            ? (0, Ou.D4)()
                                                                  .parse(e)
                                                                  .map((e) => Gu(e))
                                                            : ((e, u = Mu.left) => {
                                                                  let t = [];
                                                                  const a =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      n = Gu(e);
                                                                  return (
                                                                      Wu(n, /( )/, u).forEach(
                                                                          (e) => (t = t.concat(Wu(e, a, Mu.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(e, u);
                                                  })(e, u),
                                        ))(u, a, e).map((e, u) =>
                                        s().createElement(r.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    rt = 'LifeStatus_killer_4b',
                    st = R.strings.battle_results.common.vehicleState,
                    it = ({ player: e }) => {
                        const u = e.userStatus,
                            t = u.isLeftBattle,
                            a = u.deathReason,
                            n = u.killer,
                            i = e.userNames,
                            o = i.userName,
                            l = i.isKilled,
                            c = t && e.isPersonal ? st.prematureLeave() : st.alive();
                        return s().createElement(
                            'div',
                            { className: 'LifeStatus_base_03' },
                            !t && l
                                ? s().createElement(
                                      'div',
                                      { className: rt },
                                      st.$dyn(`dead${a}`),
                                      n.userName !== o &&
                                          s().createElement(
                                              r.Fragment,
                                              null,
                                              s().createElement(nt, { text: R.strings.common.common.nbsp() }),
                                              s().createElement(at, n),
                                          ),
                                  )
                                : s().createElement('div', { className: rt }, c),
                        );
                    },
                    ot = (e, u, t) => (t < e ? e : t > u ? u : t);
                function lt(e, u, t = []) {
                    const a = (0, r.useRef)(0),
                        n = (0, r.useCallback)(() => window.clearInterval(a.current), t || []);
                    (0, r.useEffect)(() => n, [n]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, r.useCallback)((t) => {
                            ((a.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, s),
                        n,
                    ];
                }
                function ct(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                var dt = t(30);
                let mt;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(mt || (mt = {}));
                const Et = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    _t = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: a,
                        getWrapperSize: n,
                        forceTriggerMouseMove: s,
                    }) => {
                        const i = (e, t) => {
                            const a = u(e),
                                n = a[0],
                                r = a[1];
                            return r <= n ? 0 : ot(n, r, t);
                        };
                        return (o = {}) => {
                            const l = o.settings,
                                c = void 0 === l ? Et : l,
                                d = (0, r.useRef)(null),
                                m = (0, r.useRef)(null),
                                E = (0, r.useRef)(!1),
                                _ = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        a = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        n = (e, ...t) => {
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
                                                                    if ('string' == typeof e) return ct(e, u);
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
                                                                              ? ct(e, u)
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
                                    return (0, r.useMemo)(() => ({ on: t, off: a, trigger: n }), []);
                                })(),
                                g = (function (e, u, t) {
                                    const a = (0, r.useMemo)(
                                        () =>
                                            (function (e, u, t, a) {
                                                let n,
                                                    r = !1,
                                                    s = 0;
                                                function i() {
                                                    n && clearTimeout(n);
                                                }
                                                function o(...o) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function d() {
                                                        ((s = Date.now()), t.apply(l, o));
                                                    }
                                                    r ||
                                                        (a && !n && d(),
                                                        i(),
                                                        void 0 === a && c > e
                                                            ? d()
                                                            : !0 !== u &&
                                                              (n = setTimeout(
                                                                  a
                                                                      ? function () {
                                                                            n = void 0;
                                                                        }
                                                                      : d,
                                                                  void 0 === a ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((a = t), (t = u), (u = void 0)),
                                                    (o.cancel = function () {
                                                        (i(), (r = !0));
                                                    }),
                                                    o
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return ((0, r.useEffect)(() => a.cancel, [a]), a);
                                })(
                                    () => {
                                        s && s();
                                    },
                                    [],
                                    150,
                                ),
                                A = (0, dt.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), _.trigger('change', e), s && E.current && g());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                F = A[0],
                                D = A[1],
                                p = (0, r.useCallback)(
                                    (e, u, t) => {
                                        var a;
                                        const n = F.scrollPosition.get(),
                                            r = (null != (a = F.scrollPosition.goal) ? a : 0) - n;
                                        return i(e, u * t + r + n);
                                    },
                                    [F.scrollPosition],
                                ),
                                f = (0, r.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            D.start({
                                                scrollPosition: i(a, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(a, F.scrollPosition.get()) },
                                            });
                                    },
                                    [D, c.animationConfig, F.scrollPosition],
                                ),
                                b = (0, r.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const a = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            r = p(u, e, a);
                                        f(r);
                                    },
                                    [f, p, c.step],
                                ),
                                h = (0, r.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && b(a(e)),
                                            d.current && _.trigger('mouseWheel', e, F.scrollPosition, u(d.current)));
                                    },
                                    [F.scrollPosition, b, _],
                                ),
                                C = ((e, u = []) => {
                                    const t = (0, r.useRef)(),
                                        a = (0, r.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        Tu(() => {
                                            const e = d.current;
                                            e &&
                                                (f(i(e, F.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [f, F.scrollPosition.goal],
                                ),
                                B = Eu(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = i(e, F.scrollPosition.goal);
                                    (u !== F.scrollPosition.goal && f(u, { immediate: !0 }),
                                        _.trigger('recalculateContent'));
                                });
                            return (
                                (0, r.useEffect)(
                                    () => (
                                        window.addEventListener('resize', C),
                                        () => {
                                            window.removeEventListener('resize', C);
                                        }
                                    ),
                                    [C],
                                ),
                                (0, r.useEffect)(() => {
                                    const e = d.current;
                                    if (!e || !s) return;
                                    const u = () => {
                                            E.current = !0;
                                        },
                                        t = () => {
                                            E.current = !1;
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
                                (0, r.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (m.current ? n(m.current) : void 0),
                                        getContainerSize: () => (d.current ? e(d.current) : void 0),
                                        getBounds: () =>
                                            d.current
                                                ? u(d.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: c.step.clampedArrowStepTimeout,
                                        clampPosition: i,
                                        handleMouseWheel: h,
                                        applyScroll: f,
                                        applyStepTo: b,
                                        contentRef: d,
                                        wrapperRef: m,
                                        scrollPosition: D,
                                        animationScroll: F,
                                        recalculateContent: B,
                                        events: { on: _.on, off: _.off },
                                    }),
                                    [F.scrollPosition, f, b, _.off, _.on, B, h, D, c.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    gt = _t({
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
                        getDirection: (e) => (e.deltaY > 1 ? mt.Next : mt.Prev),
                        forceTriggerMouseMove: o.O.view.forceTriggerMouseMove,
                    }),
                    At = 'HorizontalBar_base__nonActive_82',
                    Ft = 'disable',
                    Dt = { pending: !1, offset: 0 },
                    pt = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    ft = () => {},
                    bt = (e, u) => Math.max(20, e.offsetWidth * u),
                    ht = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = pt, onDrag: a = ft }) => {
                        const n = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            m = e.stepTimeout || 100,
                            E = (0, r.useState)(Dt),
                            _ = E[0],
                            g = E[1],
                            A = (0, r.useCallback)(
                                (e) => {
                                    (g(e),
                                        d.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [a],
                            ),
                            F = () => {
                                const u = c.current,
                                    t = d.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / n),
                                    o = ot(0, 1, r / (n - a)),
                                    m = (u.offsetWidth - bt(u, s)) * o;
                                ((t.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return (
                                                    i.current.classList.add(Ft),
                                                    void l.current.classList.remove(Ft)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(Ft),
                                                    void l.current.classList.add(Ft)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(Ft), l.current.classList.remove(Ft));
                                        }
                                    })(m));
                            },
                            D = Eu(() => {
                                ((() => {
                                    const u = d.current,
                                        t = c.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && a && t)) return;
                                    const s = Math.min(1, a / r);
                                    ((u.style.width = `${bt(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === s ? n.current.classList.add(At) : n.current.classList.remove(At)));
                                })(),
                                    F());
                            });
                        ((0, r.useEffect)(() => Tu(D)),
                            (0, r.useEffect)(
                                () =>
                                    Tu(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = ft;
                                        const a = () => {
                                            (t(), (t = Tu(D)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', D),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', D),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', a));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!_.pending) return;
                                const u = o.O.client.events.mouse.move(([u, t]) => {
                                        var n;
                                        const r = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!r || !s) return;
                                        const i = c.current,
                                            o = d.current;
                                        if (!i || !o) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - _.offset - i.getBoundingClientRect().x,
                                            m = (l / i.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: m }));
                                    }),
                                    t = o.O.client.events.mouse.up(() => {
                                        (u(), A(Dt));
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, _.offset, _.pending, a, A]));
                        const p = lt((u) => e.applyStepTo(u), m, [e]),
                            f = p[0],
                            h = p[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const C = (e) => {
                            e.target.classList.contains(Ft) || U('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: b()('HorizontalBar_base_49', u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: b()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ft) || 0 !== e.button || (U('play'), f(mt.Next));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: C,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: b()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const a = d.current;
                                        a &&
                                            0 === u.button &&
                                            (U('play'),
                                            u.target === a
                                                ? A({ pending: !0, offset: u.screenX - a.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const a = d.current,
                                                          n = e.contentRef.current;
                                                      if (!a || !n) return;
                                                      const r = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + r * u);
                                                  })(u.screenX > a.getBoundingClientRect().x ? mt.Prev : mt.Next));
                                    },
                                    ref: c,
                                    onMouseEnter: C,
                                },
                                s().createElement('div', { ref: d, className: b()('HorizontalBar_thumb_fd', u.thumb) }),
                                s().createElement('div', { className: b()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: b()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ft) || 0 !== e.button || (U('play'), f(mt.Prev));
                                },
                                onMouseUp: h,
                                ref: l,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    Ct = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Bt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: n,
                        classNames: i,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: b()(Ct.base, e.base) });
                            }, [a]),
                            m = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: b()(Ct.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: b()(Ct.defaultScrollArea, n) },
                                s().createElement(vt, { className: o, api: m, classNames: i }, e),
                            ),
                            s().createElement(ht, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    vt = ({ api: e, className: u, classNames: t, children: a }) => (
                        (0, r.useEffect)(() => Tu(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: b()(Ct.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: b()(Ct.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: b()(Ct.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                ((vt.Bar = ht), (vt.Default = Bt));
                const yt = _t({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? mt.Next : mt.Prev),
                    }),
                    wt = 'VerticalBar_base__nonActive_42',
                    St = 'disable',
                    Tt = () => {},
                    Pt = { pending: !1, offset: 0 },
                    Rt = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Nt = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    xt = (e, u) => Math.max(20, e.offsetHeight * u),
                    It = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Rt, onDrag: a = Tt }) => {
                        const n = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            m = e.stepTimeout || 100,
                            E = (0, r.useState)(Pt),
                            _ = E[0],
                            g = E[1],
                            A = (0, r.useCallback)(
                                (e) => {
                                    (g(e),
                                        d.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [a],
                            ),
                            F = Eu(() => {
                                const u = d.current,
                                    t = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && r && u && t)) return;
                                const s = Math.min(1, a / r);
                                return (
                                    (u.style.height = `${xt(t, s)}px`),
                                    (u.style.display = 'flex'),
                                    n.current &&
                                        (1 === s ? n.current.classList.add(wt) : n.current.classList.remove(wt)),
                                    s
                                );
                            }),
                            D = Eu(() => {
                                const u = c.current,
                                    t = d.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / n),
                                    o = ot(0, 1, r / (n - a)),
                                    m = (u.offsetHeight - xt(u, s)) * o;
                                ((t.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    i.current.classList.add(St),
                                                    void l.current.classList.remove(St)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(St),
                                                    void l.current.classList.add(St)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(St), l.current.classList.remove(St));
                                        }
                                    })(m));
                            }),
                            p = Eu(() => {
                                Nt(e, () => {
                                    (F(), D());
                                });
                            });
                        ((0, r.useEffect)(() => Tu(p)),
                            (0, r.useEffect)(() => {
                                const u = () => {
                                    Nt(e, () => {
                                        D();
                                    });
                                };
                                let t = Tt;
                                const a = () => {
                                    (t(), (t = Tu(p)));
                                };
                                return (
                                    e.events.on('recalculateContent', p),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', p),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', a));
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!_.pending) return;
                                const u = o.O.client.events.mouse.up(() => {
                                        A(Pt);
                                    }),
                                    t = o.O.client.events.mouse.move(([u]) => {
                                        Nt(e, (t) => {
                                            const n = c.current,
                                                r = d.current,
                                                s = e.getContainerSize();
                                            if (!n || !r || !s) return;
                                            const i = u.screenY - _.offset - n.getBoundingClientRect().y,
                                                o = (i / n.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: o }));
                                        });
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, _.offset, _.pending, a, A]));
                        const f = lt((u) => e.applyStepTo(u), m, [e]),
                            h = f[0],
                            C = f[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const B = (e) => {
                            e.target.classList.contains(St) || U('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: b()('VerticalBar_base_f3', u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: b()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(St) || 0 !== e.button || (U('play'), h(mt.Next));
                                },
                                ref: i,
                                onMouseEnter: B,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: b()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const a = d.current;
                                        var n;
                                        a &&
                                            0 === u.button &&
                                            (U('play'),
                                            u.target === a
                                                ? A({ pending: !0, offset: u.screenY - a.getBoundingClientRect().y })
                                                : ((n = u.screenY > a.getBoundingClientRect().y ? mt.Prev : mt.Next),
                                                  d.current &&
                                                      Nt(e, (u) => {
                                                          if (!u) return;
                                                          const a = t(e),
                                                              r = e.clampPosition(u, u.scrollTop + a * n);
                                                          e.applyScroll(r);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: B,
                                },
                                s().createElement('div', { ref: d, className: b()('VerticalBar_thumb_32', u.thumb) }),
                                s().createElement('div', { className: b()('VerticalBar_rail_43', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: b()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(St) || 0 !== e.button || (U('play'), h(mt.Prev));
                                },
                                onMouseUp: C,
                                ref: l,
                                onMouseEnter: B,
                            }),
                        );
                    }),
                    kt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Ot = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: n,
                        scrollClassName: i,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: b()(kt.base, e.base) });
                            }, [a]),
                            m = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: b()(kt.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: b()(kt.area, n) },
                                s().createElement(Mt, { className: i, classNames: o, api: m }, e),
                            ),
                            s().createElement(It, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    Mt = ({ className: e, classNames: u, children: t, api: a }) => (
                        (0, r.useEffect)(() => Tu(a.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: b()(kt.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: b()(kt.content, null == u ? void 0 : u.content), ref: a.contentRef },
                                t,
                            ),
                        )
                    );
                Mt.Default = Ot;
                const Lt = { Vertical: n, Horizontal: a },
                    Ut = {
                        row: 'StatisticsInfoRow_row_6e',
                        row__subgroup: 'StatisticsInfoRow_row__subgroup_7c',
                        separator: 'StatisticsInfoRow_separator_1b',
                        description: 'StatisticsInfoRow_description_5e',
                        icon: 'StatisticsInfoRow_icon_98',
                    };
                let Gt, Ht;
                (!(function (e) {
                    ((e[(e.Integer = 0)] = 'Integer'), (e[(e.Float = 1)] = 'Float'), (e[(e.Time = 2)] = 'Time'));
                })(Gt || (Gt = {})),
                    (function (e) {
                        ((e.Shots = 'shots'),
                            (e.Hits = 'hits'),
                            (e.ExplosionHits = 'explosionHits'),
                            (e.DamageDealt = 'damageDealt'),
                            (e.SniperDamageDealt = 'sniperDamageDealt'),
                            (e.DirectHitsReceived = 'directHitsReceived'),
                            (e.PiercingsReceived = 'piercingsReceived'),
                            (e.NoDamageDirectHitsReceived = 'noDamageDirectHitsReceived'),
                            (e.ExplosionHitsReceived = 'explosionHitsReceived'),
                            (e.DamageBlockedByArmor = 'damageBlockedByArmor'),
                            (e.TeamHitsDamage = 'teamHitsDamage'),
                            (e.Spotted = 'spotted'),
                            (e.DamagedKilled = 'damagedKilled'),
                            (e.DamageAssisted = 'damageAssisted'),
                            (e.DamageAssistedSelf = 'damageAssistedSelf'),
                            (e.StunDuration = 'stunDuration'),
                            (e.DamageAssistedStun = 'damageAssistedStun'),
                            (e.DamageAssistedStunSelf = 'damageAssistedStunSelf'),
                            (e.StunNum = 'stunNum'),
                            (e.CapturePointsVal = 'capturePointsVal'),
                            (e.Mileage = 'mileage'));
                    })(Ht || (Ht = {})));
                const $t = ({ label: e, value: u, paramValueType: t, isSubgroup: a = !1 }) => {
                        const n = ke(u, (e) =>
                                ((e, u) => {
                                    switch (e) {
                                        case Gt.Integer:
                                            return j.Z5.getNumberFormat(u, j.B3.INTEGRAL);
                                        case Gt.Float:
                                            return j.Z5.getRealFormat(u, j.Gr.FRACTIONAL);
                                        case Gt.Time:
                                            return j.Z5.getTimeFormat(u, j.lf.SHORT_FORMAT);
                                        default:
                                            return u;
                                    }
                                })(t, e),
                            ).join(' / '),
                            r = b()(Ut.row, a && Ut.row__subgroup);
                        return s().createElement(
                            'div',
                            { className: r },
                            e,
                            s().createElement('span', { className: Ut.separator }),
                            s().createElement('span', { className: Ut.value }, n),
                        );
                    },
                    Wt = { group__last: 'StatisticsInfoGroup_group__last_7a' };
                function zt() {
                    return (
                        (zt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        zt.apply(this, arguments)
                    );
                }
                const Vt = ({ item: e }) =>
                        s().createElement(
                            'div',
                            { className: Wt.group },
                            s().createElement($t, zt({ isSubgroup: !1 }, e)),
                            e.details.length > 0 &&
                                ke(e.details, (e, u) => s().createElement($t, zt({ key: u, isSubgroup: !0 }, e))),
                        ),
                    jt = (0, Y.Pi)(() => {
                        const e = cu().model.computes.selectedPlayer();
                        return s().createElement(
                            'div',
                            { className: 'StatisticsInfoRows_base_cc' },
                            ke(e.detailedStatistics, (e, u) => s().createElement(Vt, { key: u, item: e })),
                        );
                    }),
                    qt = [J, ne, ee],
                    Xt = {
                        tableWidth: [498, 770],
                        fixedCells: { [J]: [34, 34], [ee]: [178, 273], [ne]: [142, 283] },
                        configurableCells: [144, 180],
                        playerCellOffset: 16,
                    },
                    Kt = [B.Large, B.ExtraLarge],
                    Yt = (0, Y.Pi)(() => {
                        const e = cu().model,
                            u = yt(),
                            t = e.computes.hasDetailedInfoScroll(23);
                        return s().createElement(
                            'div',
                            { className: 'StatisticsInfo_base_d9' },
                            t
                                ? s().createElement(
                                      Lt.Vertical.Area.Default,
                                      { className: 'StatisticsInfo_content_e4', api: u },
                                      s().createElement(jt, null),
                                  )
                                : s().createElement(jt, null),
                        );
                    });
                var Zt = t(690);
                let Qt;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'), (e[(e.RIGHT = 1)] = 'RIGHT'));
                })(Qt || (Qt = {}));
                const Jt = (e, u) => {
                        const t = e.replace(':', '_').replace(/-/g, '_');
                        return {
                            maskImage: `url(${R.images.fun_random.gui.maps.icons.feature.battle_results.team_table.types.$dyn(t)})`,
                            backgroundColor: u,
                        };
                    },
                    ea = (0, r.memo)(
                        ({
                            vehicleLevel: e,
                            vehicleType: u,
                            vehicleShortName: t,
                            userNames: a,
                            isPersonal: n = !1,
                            isSameSquad: r = !1,
                            killed: i = !1,
                            isIGR: o = !1,
                            alignment: l = Qt.RIGHT,
                        }) => {
                            const c = a.isTeamKiller,
                                d = ut({ isTeamKiller: c, isKilled: i, isPersonal: n, isSameSquad: r }),
                                m = (0, Zt.HG)(e);
                            return s().createElement(
                                'div',
                                { className: 'PlayerVehicleInfo_base_f3', style: { color: d } },
                                s().createElement(
                                    'div',
                                    {
                                        className: b()(
                                            'PlayerVehicleInfo_level_01',
                                            l === Qt.LEFT && 'PlayerVehicleInfo_level__left_b9',
                                        ),
                                    },
                                    m,
                                ),
                                s().createElement('div', { className: 'PlayerVehicleInfo_type_59', style: Jt(u, d) }),
                                s().createElement('div', { className: 'PlayerVehicleInfo_vehicleName_c1' }, t),
                                o && s().createElement('div', { className: 'PlayerVehicleInfo_igr_11' }),
                            );
                        },
                    ),
                    ua = R.images.gui.maps.icons.vehicle;
                function ta(e) {
                    const u = ua.c_420x307.$dyn(e.toLowerCase());
                    return u
                        ? { backgroundImage: `url(${u})` }
                        : { backgroundImage: `url(${ua.c_420x307.default_image()})` };
                }
                function aa(e, u) {
                    const t = ua.$dyn(
                        (function (e, u) {
                            return `${e}_${u}`.replace('-', '_');
                        })(u, e),
                    );
                    return t ? { backgroundImage: `url(${t})` } : { backgroundImage: `url(${ua.noImage()})` };
                }
                function na(e, u, t = '') {
                    var a;
                    return t && '' !== t ? (null != (a = null == e ? void 0 : e.$dyn(t)) ? a : u.$dyn(t)) : null;
                }
                function ra() {
                    return (
                        (ra =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ra.apply(this, arguments)
                    );
                }
                const sa = (0, Y.Pi)(() => {
                        const e = cu(),
                            u = e.model,
                            t = e.controls,
                            a = u.computes.personalSquadIndex(),
                            n = u.computes.selectedPlayer(),
                            r = n.userNames,
                            i = n.squadIndex,
                            l = n.isPersonal,
                            c = n.vehicle,
                            d = r.isKilled,
                            m = c.tier,
                            E = c.type,
                            _ = c.name,
                            g = c.techName,
                            A = a === i && a > 0,
                            F = c.tags.indexOf('premiumIGR') > -1,
                            D = () => {
                                (o.O.sound.play.sound('play'), t.updateTeamTableSelectedPlayer(nu, -1));
                            };
                        return (
                            X(V.n.ESCAPE, D),
                            s().createElement(
                                'div',
                                { className: 'DetailedStats_base_2d' },
                                s().createElement(
                                    'div',
                                    { className: 'DetailedStats_header_5e' },
                                    s().createElement('div', {
                                        className: 'DetailedStats_vehicleIcon_ef',
                                        style: ta(g),
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: 'DetailedStats_vehicleInfo_f5' },
                                        s().createElement(
                                            'div',
                                            { className: 'DetailedStats_playerName_3c' },
                                            s().createElement(
                                                at,
                                                ra({}, n.userNames, {
                                                    isTeamKiller: !1,
                                                    isAnonymizerShown: !0,
                                                    isKilled: d,
                                                    isSameSquad: A,
                                                }),
                                            ),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: 'DetailedStats_playerSummary_a1' },
                                            s().createElement(ea, {
                                                vehicleLevel: m,
                                                vehicleType: E,
                                                vehicleShortName: _,
                                                userNames: r,
                                                alignment: Qt.LEFT,
                                                isIGR: F,
                                                isPersonal: l,
                                                killed: d,
                                            }),
                                            s().createElement(it, { player: n }),
                                        ),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: 'DetailedStats_close_53', onClick: D },
                                        s().createElement(
                                            'div',
                                            { className: 'DetailedStats_closeText_f1' },
                                            R.strings.fun_battle_results.closeBtn(),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'DetailedStats_stats_97' },
                                    s().createElement(Yt, null),
                                ),
                            )
                        );
                    }),
                    ia = {
                        base: 'TeamTable_base_65',
                        hidden: 'TeamTable_hidden_1e',
                        head: 'TeamTable_head_11',
                        body: 'TeamTable_body_ac',
                        bodyWrapper: 'TeamTable_bodyWrapper_33',
                        bodyWrapper__shortened: 'TeamTable_bodyWrapper__shortened_9d',
                        content: 'TeamTable_content_41',
                        headRow: 'TeamTable_headRow_a4',
                        bodyRow: 'TeamTable_bodyRow_29',
                        bodyRow__isFirst: 'TeamTable_bodyRow__isFirst_cd',
                        bodyRow__isActive: 'TeamTable_bodyRow__isActive_9d',
                        bodyRow__nonSelectable: 'TeamTable_bodyRow__nonSelectable_43',
                        bodyRow__isKilled: 'TeamTable_bodyRow__isKilled_ed',
                        cell: 'TeamTable_cell_65',
                        headCell: 'TeamTable_headCell_b7',
                        cell__icon: 'TeamTable_cell__icon_28',
                        cell__vehicle: 'TeamTable_cell__vehicle_09',
                        headCell__sortDisabled: 'TeamTable_headCell__sortDisabled_bb',
                        headHover: 'TeamTable_headHover_58',
                        headCell__active: 'TeamTable_headCell__active_62',
                        headIcon: 'TeamTable_headIcon_37',
                        headDivider: 'TeamTable_headDivider_43',
                        glow: 'TeamTable_glow_19',
                        activeArrow: 'TeamTable_activeArrow_f6',
                        activeArrow__last: 'TeamTable_activeArrow__last_e4',
                    },
                    oa = (0, Y.Pi)(({ alias: e, shortened: u = !1 }) => {
                        const t = cu().model,
                            a = t.selectedPlayerId.get(),
                            n = t.selectedTeam.get() === e,
                            i = (0, r.useContext)(ru),
                            o = i.comparatorsMap,
                            l = i.defaultColumn,
                            c = i.TableRowComponent,
                            d = e === tu ? t.computes.alliesSorted(o, l) : t.computes.enemiesSorted(o, l);
                        return s().createElement(
                            'div',
                            { className: ia.body },
                            s().createElement(
                                'div',
                                { className: b()(ia.bodyWrapper, u && ia.bodyWrapper__shortened) },
                                ke(d, (u, t) =>
                                    s().createElement(c, {
                                        key: t,
                                        player: u,
                                        selected: n && a === u.playerIndex,
                                        alias: e,
                                        isFirst: 0 === t,
                                    }),
                                ),
                            ),
                        );
                    }),
                    la = (0, Y.Pi)(({ alias: e }) => {
                        const u = cu().model,
                            t = (e === tu ? u.allies.get().length : u.enemies.get().length) > 15,
                            a = yt();
                        return s().createElement(
                            'div',
                            { className: ia.body },
                            t
                                ? s().createElement(
                                      Lt.Vertical.Area.Default,
                                      { className: ia.content, api: a },
                                      s().createElement(oa, { alias: e }),
                                  )
                                : s().createElement(oa, { alias: e, shortened: !0 }),
                        );
                    }),
                    ca = {
                        base: 'ActiveArrow_base_5b',
                        line: 'ActiveArrow_line_22',
                        arrow: 'ActiveArrow_arrow_80',
                        arrow__top: 'ActiveArrow_arrow__top_54',
                    },
                    da = (0, r.memo)(({ direction: e }) =>
                        s().createElement(
                            'div',
                            { className: ca.base },
                            s().createElement('div', { className: ca.line }),
                            s().createElement('div', { className: b()(ca.arrow, ca[`arrow__${e}`]) }),
                            s().createElement('div', { className: ca.line }),
                        ),
                    ),
                    ma = ({
                        className: e,
                        children: u,
                        onSort: t,
                        sortType: a,
                        tooltip: n,
                        reversed: r = !1,
                        active: i = !1,
                        last: l = !1,
                        sortDisabled: c = !1,
                        columnWidthSmall: d = 0,
                        columnWidthLarge: m = 0,
                    }) => {
                        const E = w().mediaSize;
                        return s().createElement(
                            Su,
                            n,
                            s().createElement(
                                'div',
                                {
                                    className: b()(
                                        ia.headCell,
                                        e,
                                        i && ia.headCell__active,
                                        r && ia.headCell__reverse,
                                        c && ia.headCell__sortDisabled,
                                    ),
                                    style: { width: `${Kt.includes(E) ? m : d}rem` },
                                    onClick: () => {
                                        c || (o.O.sound.play.sound('play'), t(a));
                                    },
                                    onMouseEnter: () => o.O.sound.play.sound('highlight'),
                                },
                                u,
                                i &&
                                    s().createElement(
                                        'div',
                                        { className: b()(ia.activeArrow, l && ia.activeArrow__last) },
                                        s().createElement(da, { direction: r ? 'top' : 'bottom' }),
                                    ),
                            ),
                        );
                    };
                function Ea(e, u = Xt, t = 3) {
                    return u.fixedCells[e] ? u.fixedCells[e] : [u.configurableCells[0] / t, u.configurableCells[1] / t];
                }
                function _a(e, u = Xt, t, a = 3) {
                    const n = Ea(e, u, a);
                    return { width: `${Kt.includes(t) ? n[1] : n[0]}rem` };
                }
                function ga(e, u, t) {
                    const a = t[u];
                    return a ? e[a] : -1;
                }
                const Aa = R.strings.battle_results.team,
                    Fa = R.images.fun_random.gui.maps.icons.feature.battle_results.team_table.header;
                function Da(e, u) {
                    var t, a;
                    const n = `${e}Header`,
                        r = null != (t = null == u || null == (a = u.team) ? void 0 : a.$dyn(n)) ? t : Aa.$dyn(n);
                    return { header: null == r ? void 0 : r.$dyn('header'), body: null == r ? void 0 : r.$dyn('body') };
                }
                const pa = (0, Y.Pi)(({ isAllies: e = !0, onSort: u }) => {
                        var t, a;
                        const n = cu().model,
                            i = n.battleInfo.get().subModeAssetsPointer,
                            o = n.detailsColumns.get(),
                            l = n.sortDirection.get(),
                            c = n.computes.activeSortingType(),
                            d = n.singleTeamMode.get(),
                            m = n.computes.hasSquads(),
                            E = l === Ve.Asc,
                            _ = oe(null, {
                                poFileName: 'fun_battle_results',
                                assetsPointer: i,
                                isSubMode: !0,
                            }).dynamicTexts,
                            g =
                                null == (t = le(i, !0)) || null == (a = t.battle_results)
                                    ? void 0
                                    : a.team_table.header,
                            A = (0, r.useContext)(ru),
                            F = A.columnsOrder,
                            D = A.headerIconMapping,
                            p = A.tableCellsConfig;
                        return s().createElement(
                            'div',
                            { className: ia.head },
                            s().createElement(
                                'div',
                                { className: ia.headRow },
                                F.map((t, a, n) => {
                                    const r = qt.findIndex((e) => e === t),
                                        i = Le(o, (e) => e === t);
                                    if (-1 === r && (-1 === i || void 0 === i)) return;
                                    const l = t === ee,
                                        A = d ? _.team.singleTeam() : Aa.stats.$dyn(e ? 'ownTeam' : 'enemyTeam'),
                                        F = 0 === o.length ? 3 : o.length,
                                        f = l
                                            ? ia.headCell__name
                                            : (function (e) {
                                                  switch (e) {
                                                      case ne:
                                                          return ia.headCell__vehicle;
                                                      case J:
                                                          return ia.headCell__squad;
                                                      default:
                                                          return ia.headCell__icon;
                                                  }
                                              })(t),
                                        b = !l && D[t],
                                        h = na(g, Fa, b),
                                        C = Ea(t, p, F);
                                    return s().createElement(
                                        ma,
                                        {
                                            key: t,
                                            className: f,
                                            active: c === t,
                                            reversed: E,
                                            last: a === n.length - 1,
                                            sortType: t,
                                            onSort: u,
                                            tooltip: Da(t, _),
                                            sortDisabled: t === J && !m,
                                            columnWidthSmall: C[0],
                                            columnWidthLarge: C[1],
                                        },
                                        l
                                            ? s().createElement('span', { className: ia.playerName }, A)
                                            : s().createElement('div', {
                                                  className: ia.headIcon,
                                                  style: { backgroundImage: `url('${h}')` },
                                              }),
                                        s().createElement('div', { className: ia.headHover }),
                                        a < n.length - 1 && s().createElement('div', { className: ia.headDivider }),
                                    );
                                }),
                            ),
                        );
                    }),
                    fa = (0, Y.Pi)(({ onSort: e, alias: u = 'allies' }) => {
                        const t = cu().model.selectedTeam.get(),
                            a = t !== nu && u !== t;
                        return s().createElement(
                            'div',
                            { className: a ? ia.hidden : '' },
                            s().createElement(
                                'div',
                                { className: ia.base },
                                s().createElement(pa, { isAllies: u === tu, onSort: e }),
                                s().createElement(la, { alias: u }),
                            ),
                        );
                    }),
                    ba = (0, Y.Pi)(() => {
                        const e = cu(),
                            u = e.model,
                            t = e.controls,
                            a = u.sortDirection.get(),
                            n = u.computes.activeSortingType(),
                            i = u.singleTeamMode.get(),
                            o = u.selectedTeam.get(),
                            l = o !== nu,
                            c = o === tu && u.allies.get().length <= 15,
                            d = (0, r.useContext)(ru).tableCellsConfig,
                            m = (0, r.useCallback)(
                                (e) => {
                                    if (e === n) {
                                        const e = a === Ve.Desc ? Ve.Asc : Ve.Desc;
                                        (t.saveStatsSorting(n, e), t.updateTeamTableSorting(n, e));
                                    } else (t.saveStatsSorting(e, Ve.Desc), t.updateTeamTableSorting(e, Ve.Desc));
                                },
                                [a, n, t],
                            );
                        return s().createElement(
                            'div',
                            {
                                className: 'TeamTab_base_d1',
                                style: {
                                    '--tableWidthSmall': `${d.tableWidth[0]}rem`,
                                    '--tableWidthLarge': `${d.tableWidth[1]}rem`,
                                },
                            },
                            s().createElement(
                                'div',
                                { className: b()('TeamTab_teams_3c', i && 'TeamTab_teams__single_49') },
                                s().createElement(fa, { alias: i ? au : tu, onSort: m }),
                                l &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: b()(
                                                'TeamTab_detailsWrapper_83',
                                                c && 'TeamTab_detailsWrapper__extra_4a',
                                            ),
                                        },
                                        s().createElement(sa, null),
                                    ),
                                !i && s().createElement(fa, { alias: au, onSort: m }),
                            ),
                        );
                    });
                function ha(e, u) {
                    const t = ((e, u) => (t, a) => {
                        const n = t[e],
                            r = a[e];
                        if ('number' == typeof n && 'number' == typeof r) {
                            if (n > u && r > u) return n - r;
                            if (n <= u && r > u) return 1;
                            if (n > u && r <= u) return -1;
                        }
                        return 0;
                    })(e, u);
                    return ({ efficiencyValues: e }, { efficiencyValues: u }) => t(e, u);
                }
                const Ca = {
                        [ue]: He($e(Ye('damageDealt'), Xe)),
                        [te]: He($e(Ye('kills'), Xe)),
                        [ae]: He($e(Ye('earnedXp'), Xe)),
                        [Q]: He(Je([0, Ge.DESCENDING, 0], ha('finishPosition', 0), Ye('checkpointsPassed'), Xe)),
                        [Z]: He(Je([0, Ge.DESCENDING, 0], ha('finishTime', 0), Ye('checkpointsPassed'), Xe)),
                        [J]: He($e(Ke('squadIndex'), Xe)),
                        [ne]: He(Je([0, 0, Ge.DESCENDING, Ge.DESCENDING], Ze('tier'), Qe, Ze('name'), Xe)),
                        [ee]: He(Xe),
                    },
                    Ba = 'finishTime',
                    va = 'finishPosition',
                    ya = [J, va, ee, Ba, te, ne],
                    wa = {
                        [J]: 'platoon',
                        [te]: 'kills',
                        [ae]: 'xp',
                        [ne]: 'vehicle',
                        [ue]: 'damage',
                        [va]: 'finishPosition',
                        [Ba]: 'finishTime',
                    },
                    Sa = { [te]: 'kills', [ae]: 'earnedXp', [ue]: 'damageDealt', [va]: 'finishPosition' },
                    Ta = {
                        tableWidth: [532, 815],
                        fixedCells: {
                            [J]: [34, 34],
                            [ee]: [179, 288],
                            [ne]: [143, 293],
                            [va]: [48, 60],
                            [Ba]: [80, 80],
                            [te]: [48, 60],
                        },
                        configurableCells: [
                            [144, 180],
                            [72, 90],
                            [48, 60],
                        ],
                        playerCellOffset: 16,
                    },
                    Pa = {
                        tableWidth: [498, 780],
                        fixedCells: {
                            [J]: [34, 34],
                            [ee]: [179, 288],
                            [ne]: [143, 292],
                            [va]: [34, 34],
                            [Ba]: [60, 72],
                            [te]: [48, 60],
                        },
                        configurableCells: [144, 180],
                        playerCellOffset: 16,
                    };
                let Ra;
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
                })(Ra || (Ra = {}));
                var Na = t(613);
                const xa = 1e3,
                    Ia = (Date.now(), Na.Ew.getRegionalDateTime),
                    ka = Na.Ew.getFormattedDateTime,
                    Oa = (0, r.memo)(({ datetime: e, format: u = Ra.ShortDate, isConvertedToLocal: t = !0 }) =>
                        Object.values(Ra).includes(u) ? Ia(e, u, t) : ka(e, u, t),
                    ),
                    Ma = 'Footer_top_8f',
                    La = 'Footer_bottom_dd',
                    Ua = 'Footer_dot_f8',
                    Ga = 'finished',
                    Ha = R.strings.fun_battle_results,
                    $a = R.strings.fall_tanks,
                    Wa = (0, Y.Pi)(() => {
                        const e = cu(),
                            u = e.model,
                            t = e.controls,
                            a = '2' === u.currentTabId.get(),
                            n = u.computes.currentPlayer(),
                            r = u.battleInfo.get(),
                            i = r.subModeAssetsPointer,
                            o = r.arenaName,
                            l = r.battleStartTime,
                            c = r.battleDuration,
                            d = r.finishReason,
                            m =
                                'notFinished' === r.winStatus
                                    ? $a.battleResults.footerSubtitle.notFinished()
                                    : $a.battleResults.footerSubtitle.$dyn(
                                          n.efficiencyValues.finishPosition > 3 ? Ga : 'top',
                                      ),
                            E = oe(null, { assetsPointer: i, isSubMode: !0 }).dynamicTexts;
                        return (
                            K(t.closeWindow),
                            s().createElement(
                                'div',
                                { className: b()('Footer_base_c2', a && 'Footer_base__teams_cd') },
                                s().createElement(
                                    'div',
                                    { className: 'Footer_left_32' },
                                    s().createElement(
                                        'div',
                                        { className: Ma },
                                        E.capsUserName(),
                                        s().createElement('div', { className: Ua }),
                                        systemLocale.toUpperCase(o),
                                        s().createElement('div', { className: Ua }),
                                        systemLocale.toUpperCase(n.vehicle.name),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: La },
                                        s().createElement('div', null, Ha.finish()),
                                        s().createElement(
                                            'div',
                                            { className: 'Footer_accent_a2' },
                                            s().createElement(Oa, { datetime: l + c, format: Ra.ShortDateTime }),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'Footer_right_17' },
                                    s().createElement('div', { className: Ma }, systemLocale.toUpperCase(d)),
                                    s().createElement(
                                        'div',
                                        { className: La },
                                        s().createElement('div', { className: 'Footer_killer_fd' }, m),
                                    ),
                                ),
                            )
                        );
                    }),
                    za = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Va, ja;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(Va || (Va = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(ja || (ja = {})));
                const qa = ({ size: e = Va.Default }) => {
                        const u = b()(za.background, za[`background__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    Xa = (e, u) => {
                        let t;
                        const a = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(a));
                        };
                    };
                let Ka, Ya;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(Ka || (Ka = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(Ya || (Ya = {})));
                const Za = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Qa = ({ size: e }) => {
                        const u = b()(Za.base, Za[`base__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    Ja = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: n,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < a,
                                d = (0, r.useState)(Ya.Idle),
                                m = d[0],
                                E = d[1],
                                _ = m === Ya.In,
                                g = m === Ya.End,
                                A = m === Ya.Idle,
                                F = (0, r.useCallback)(
                                    (e) => {
                                        (E(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, r.useEffect)(() => {
                                if (A && !t)
                                    return Xa(() => {
                                        F(Ya.In);
                                    }, u);
                            }, [F, t, A, u]),
                                (0, r.useEffect)(() => {
                                    if (_)
                                        return Xa(() => {
                                            (o && o(), F(Ya.End));
                                        }, e + u);
                                }, [F, _, o, u, e]));
                            const D = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                p = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                f = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(a - i)}%`, left: `${c ? i : a}%` }),
                                    [a, c, i],
                                );
                            return g
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: f },
                                      s().createElement(
                                          'div',
                                          { style: A ? D : p, className: 'ProgressBarDeltaSimple_delta_99' },
                                          s().createElement(Qa, { size: n }),
                                      ),
                                  );
                        },
                    ),
                    en = {
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
                    un = (0, r.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: n, withoutBounce: r }) => {
                            const i = b()(
                                    en.base,
                                    en[`base__${e}`],
                                    t && en.base__disabled,
                                    n && en.base__finished,
                                    r && en.base__withoutBounce,
                                ),
                                o = !t && !n;
                            return s().createElement(
                                'div',
                                { className: i, style: a, ref: u },
                                s().createElement('div', { className: en.pattern }),
                                s().createElement('div', { className: en.gradient }),
                                o && s().createElement(Qa, { size: e }),
                            );
                        },
                    ),
                    tn = (0, r.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: n,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(un, {
                                    size: u,
                                    lineRef: a,
                                    disabled: n,
                                    isComplete: i,
                                    baseStyles: d,
                                }),
                                t >= 0 &&
                                    s().createElement(Ja, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    an = (e) => (e ? { left: 0 } : { right: 0 }),
                    nn = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    rn = (e) => ({ transitionDuration: `${e}ms` }),
                    sn = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: n,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const d = i < a,
                                m = (0, r.useState)(Ka.Idle),
                                E = m[0],
                                _ = m[1],
                                g = E === Ka.End,
                                A = E === Ka.Idle,
                                F = E === Ka.Grow,
                                D = E === Ka.Shrink,
                                p = (0, r.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                ),
                                f = (0, r.useCallback)(
                                    (e, u) =>
                                        Xa(() => {
                                            p(e);
                                        }, u),
                                    [p],
                                );
                            (0, r.useEffect)(() => {
                                if (!t)
                                    return A
                                        ? f(Ka.Grow, u)
                                        : F
                                          ? f(Ka.Shrink, e)
                                          : D
                                            ? f(Ka.End, e)
                                            : void (g && o && o());
                            }, [f, t, g, F, A, D, o, u, e]);
                            const h = (0, r.useMemo)(() => Object.assign({ width: '100%' }, rn(e), an(d)), [d, e]),
                                C = (0, r.useMemo)(() => Object.assign({ width: '0%' }, rn(e), an(d)), [d, e]),
                                B = (0, r.useMemo)(() => Object.assign({ width: '0%' }, nn(d, a), rn(e)), [a, d, e]),
                                v = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - a)}%` }, nn(d, a), rn(e)),
                                    [a, d, i, e],
                                );
                            if (g) return null;
                            const y = b()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                d && 0 === i && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return s().createElement(
                                'div',
                                { style: A ? B : v, className: y },
                                s().createElement(
                                    'div',
                                    { style: D ? C : h, className: 'ProgressBarDeltaGrow_glow_68' },
                                    s().createElement(Qa, { size: n }),
                                ),
                            );
                        },
                    ),
                    on = (0, r.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: n,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < t,
                                m = (0, r.useState)(!1),
                                E = m[0],
                                _ = m[1],
                                g = (0, r.useCallback)(
                                    (e) => {
                                        (e === Ka.Shrink && _(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                A = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                F = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(un, {
                                    size: u,
                                    lineRef: a,
                                    disabled: n,
                                    isComplete: i,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: E ? F : A,
                                }),
                                t >= 0 &&
                                    s().createElement(sn, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: g,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    ln = ['onComplete', 'onEndAnimation'];
                function cn() {
                    return (
                        (cn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        cn.apply(this, arguments)
                    );
                }
                const dn = (0, r.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, ln);
                        const n = (0, r.useState)(!1),
                            i = n[0],
                            o = n[1],
                            l = (0, r.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== i && o(e), e && u && u(), t && t());
                            }, [i, u, t, a.to]);
                        switch (a.animationSettings.type) {
                            case ja.Simple:
                                return s().createElement(tn, cn({}, a, { onEndAnimation: l, isComplete: i }));
                            case ja.Growing:
                                return s().createElement(on, cn({}, a, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    mn = ({ size: e, value: u, lineRef: t, disabled: a, onComplete: n }) => {
                        const i = (0, r.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            o = 100 === u;
                        return (
                            (0, r.useEffect)(() => {
                                o && n && n();
                            }, [o, n]),
                            s().createElement(un, { size: e, disabled: a, baseStyles: i, isComplete: o, lineRef: t })
                        );
                    },
                    En = ['onEndAnimation'];
                function _n() {
                    return (
                        (_n =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        _n.apply(this, arguments)
                    );
                }
                const gn = (0, r.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, En);
                    const a = (0, r.useRef)({}),
                        n = (0, r.useCallback)(() => {
                            ((a.current.from = void 0), u && u());
                        }, [u]),
                        i = 'number' == typeof a.current.from ? a.current.from : t.from;
                    return (
                        (a.current.from = i),
                        s().createElement(
                            dn,
                            _n({}, t, {
                                onEndAnimation: n,
                                key: `${i}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                                from: i,
                            }),
                        )
                    );
                });
                function An() {
                    return (
                        (An =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        An.apply(this, arguments)
                    );
                }
                const Fn = (0, r.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: a,
                            deltaFrom: n,
                            additionalKey: r,
                            animationSettings: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (n === u)
                                return s().createElement(mn, {
                                    key: `${n}-${u}-${r}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: a,
                                    onComplete: c,
                                });
                            const d = {
                                from: n,
                                to: u,
                                size: e,
                                additionalKey: r,
                                lineRef: t,
                                disabled: a,
                                animationSettings: i,
                                onComplete: c,
                                onEndAnimation: o,
                                onChangeAnimationState: l,
                            };
                            return i.withStack
                                ? s().createElement(gn, d)
                                : s().createElement(dn, An({ key: `${n}-${u}-${r}` }, d));
                        },
                    ),
                    Dn = (e) => ({
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
                    pn = (e, u, t) => ('number' == typeof t ? (ot(0, u, t) / u) * 100 : e),
                    fn = {
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
                    bn = {
                        freezed: !1,
                        withStack: !1,
                        type: ja.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    hn = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = fn,
                            size: t = Va.Default,
                            animationSettings: a = bn,
                            disabled: n = !1,
                            withoutBackground: i = !1,
                            value: o,
                            deltaFrom: l,
                            additionalKey: c,
                            lineRef: d,
                            onChangeAnimationState: m,
                            onEndAnimation: E,
                            onComplete: _,
                        }) => {
                            const g = ((e, u, t) =>
                                (0, r.useMemo)(() => {
                                    const a = (ot(0, u, e) / u) * 100;
                                    return { value: a, deltaFrom: pn(a, u, t) };
                                }, [t, u, e]))(o, e, l);
                            return s().createElement(
                                'div',
                                { className: b()(za.base, za[`base__${t}`]), style: Dn(u) },
                                !i && s().createElement(qa, { size: t }),
                                s().createElement(Fn, {
                                    size: t,
                                    lineRef: d,
                                    disabled: n,
                                    value: g.value,
                                    deltaFrom: g.deltaFrom,
                                    additionalKey: c,
                                    animationSettings: a,
                                    onEndAnimation: E,
                                    onChangeAnimationState: m,
                                    onComplete: _,
                                }),
                            );
                        },
                    ),
                    Cn = {
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
                    Bn = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    vn = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    yn = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    wn = (0, r.memo)(({ text: e, binding: u, classMix: t }) => {
                        const a = (0, r.useCallback)((e) => ({ color: `#${e}` }), []),
                            n = (0, r.useMemo)(() => u || {}, [u]);
                        let i = Bn.exec(e),
                            o = e,
                            l = 0;
                        for (; i; ) {
                            const t = i[0],
                                r = vn.exec(t),
                                c = yn.exec(t),
                                d = i[1];
                            if (r && c) {
                                const e = r[0],
                                    i = e + l++ + e;
                                ((o = o.replace(t, `%(${i})`)),
                                    (n[i] = Cn[e]
                                        ? s().createElement(
                                              'span',
                                              { className: Cn[e] },
                                              s().createElement(nt, { text: d, binding: u }),
                                          )
                                        : s().createElement(
                                              'span',
                                              { style: a(e) },
                                              s().createElement(nt, { text: d, binding: u }),
                                          )));
                            }
                            i = Bn.exec(e);
                        }
                        return s().createElement(nt, { text: o, classMix: t, binding: n });
                    });
                const Sn = {
                        freezed: !1,
                        withStack: !1,
                        type: ja.Growing,
                        delta: { duration: 2e3, delay: 100 },
                        line: { duration: 2e3, delay: 100 },
                    },
                    Tn = ['children'];
                function Pn() {
                    return (
                        (Pn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Pn.apply(this, arguments)
                    );
                }
                const Rn = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, Tn);
                    return s().createElement(
                        Bu,
                        Pn(
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
                function Nn() {
                    return (
                        (Nn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Nn.apply(this, arguments)
                    );
                }
                const xn = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const a = s().createElement('div', { className: t }, e);
                        if (u.header || u.body) return s().createElement(Su, u, a);
                        const n = u.contentId;
                        return n ? s().createElement(Bu, Nn({}, u, { contentId: n }), a) : s().createElement(Rn, u, a);
                    },
                    In = {
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
                    kn = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = Ee.Big,
                        special: n,
                        value: r,
                        valueType: i,
                        title: o,
                        style: l,
                        className: c,
                        classNames: d,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: E,
                    }) => {
                        const _ = ((e, u) => {
                                if (void 0 === u || !we.includes(e)) return null;
                                switch (u) {
                                    case ge.BATTLE_BOOSTER:
                                    case ge.BATTLE_BOOSTER_REPLACE:
                                        return Ae.BATTLE_BOOSTER;
                                }
                            })(a, n),
                            g = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ge.BATTLE_BOOSTER:
                                        return Fe.BATTLE_BOOSTER;
                                    case ge.BATTLE_BOOSTER_REPLACE:
                                        return Fe.BATTLE_BOOSTER_REPLACE;
                                    case ge.BUILT_IN_EQUIPMENT:
                                        return Fe.BUILT_IN_EQUIPMENT;
                                    case ge.EQUIPMENT_PLUS:
                                        return Fe.EQUIPMENT_PLUS;
                                    case ge.EQUIPMENT_TROPHY_BASIC:
                                        return Fe.EQUIPMENT_TROPHY_BASIC;
                                    case ge.EQUIPMENT_TROPHY_UPGRADED:
                                        return Fe.EQUIPMENT_TROPHY_UPGRADED;
                                    case ge.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Fe.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ge.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Fe.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ge.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Fe.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ge.PROGRESSION_STYLE_UPGRADED_1:
                                        return Fe.PROGRESSION_STYLE_UPGRADED_1;
                                    case ge.PROGRESSION_STYLE_UPGRADED_2:
                                        return Fe.PROGRESSION_STYLE_UPGRADED_2;
                                    case ge.PROGRESSION_STYLE_UPGRADED_3:
                                        return Fe.PROGRESSION_STYLE_UPGRADED_3;
                                    case ge.PROGRESSION_STYLE_UPGRADED_4:
                                        return Fe.PROGRESSION_STYLE_UPGRADED_4;
                                    case ge.PROGRESSION_STYLE_UPGRADED_5:
                                        return Fe.PROGRESSION_STYLE_UPGRADED_5;
                                    case ge.PROGRESSION_STYLE_UPGRADED_6:
                                        return Fe.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(n),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case _e.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case _e.CURRENCY:
                                    case _e.NUMBER:
                                        return s().createElement(ce, { format: 'integral', value: Number(e) });
                                    case _e.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(r, i);
                        return s().createElement(
                            'div',
                            { className: b()(In.base, In[`base__${a}`], c), style: l },
                            s().createElement(
                                xn,
                                { tooltipArgs: m, className: In.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: b()(In.image, null == d ? void 0 : d.image) },
                                        _ &&
                                            s().createElement('div', {
                                                className: b()(In.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${_}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: b()(In.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        g &&
                                            s().createElement('div', {
                                                className: b()(In.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${g}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: b()(
                                                    In.info,
                                                    In[`info__${e}`],
                                                    i === _e.MULTI && In.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            A,
                                        ),
                                    o && s().createElement('div', { className: In.title }, o),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    xn,
                                    { tooltipArgs: E },
                                    s().createElement('div', {
                                        className: b()(In.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    On = 'Rewards_checkmark_c6';
                function Mn() {
                    return (
                        (Mn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Mn.apply(this, arguments)
                    );
                }
                const Ln = ({
                        data: e,
                        size: u = Ee.Big,
                        count: t,
                        classMix: a,
                        rewardItemClassMix: n,
                        boxRewardTooltip: i,
                        boxRewardValue: o,
                    }) => {
                        const l = (0, r.useMemo)(
                                () => (t && t < e.length ? `R.images.gui.maps.icons.quests.bonuses.${u}.default` : ''),
                                [t, e.length, u],
                            ),
                            c =
                                o ||
                                Uu(R.strings.tooltips.quests.awards.additional.bottom(), {
                                    count: e.length - (t || 0),
                                }),
                            d = b()('Rewards_base_86', a),
                            m = b()('Rewards_reward_3c', n);
                        return s().createElement(
                            'div',
                            { className: d },
                            l
                                ? s().createElement(
                                      s().Fragment,
                                      null,
                                      e
                                          .slice(0, t)
                                          .map((e, t) =>
                                              s().createElement(
                                                  'div',
                                                  { key: t, className: m },
                                                  s().createElement(kn, Mn({ size: u }, e)),
                                                  s().createElement('div', { className: On }),
                                              ),
                                          ),
                                      s().createElement(
                                          'div',
                                          { className: m },
                                          s().createElement(kn, {
                                              name: 'more',
                                              image: l,
                                              size: u,
                                              value: c,
                                              tooltipArgs: i,
                                              className: 'Rewards_item_cf',
                                              classNames: { image: 'Rewards_image_e9' },
                                          }),
                                          s().createElement('div', { className: On }),
                                      ),
                                  )
                                : e.map((e, t) =>
                                      s().createElement(
                                          'div',
                                          { key: t, className: m },
                                          s().createElement(kn, Mn({ size: u }, e)),
                                          s().createElement('div', { className: On }),
                                      ),
                                  ),
                        );
                    },
                    Un = {
                        base: 'Progress_base_81',
                        title: 'Progress_title_be',
                        description: 'Progress_description_d5',
                        bar: 'Progress_bar_b5',
                        counter: 'Progress_counter_d1',
                        currentCount: 'Progress_currentCount_e3',
                        slash: 'Progress_slash_fe',
                        value: 'Progress_value_4f',
                        footer: 'Progress_footer_bd',
                        rewards: 'Progress_rewards_30',
                        header: 'Progress_header_16',
                        reward: 'Progress_reward_78',
                        infiniteIcon: 'Progress_infiniteIcon_4d',
                    },
                    Gn = R.strings.fun_battle_results.progress,
                    Hn = (0, Y.Pi)(() => {
                        const e = cu(),
                            u = e.model,
                            t = e.controls,
                            a = u.progress.get(),
                            n = a.description,
                            i = a.assetsPointer,
                            l = a.currentStage,
                            c = a.maximumStage,
                            d = a.isInUnlimitedProgression,
                            m = a.previousStage,
                            E = a.earnedPoints,
                            _ = oe(null, { assetsPointer: i }).dynamicTexts,
                            g = l !== m,
                            A = g
                                ? u.computes.progressionValuesWithStageMaximum(m).previous
                                : u.computes.progressionValues().current,
                            F = (function () {
                                const e = (0, r.useRef)(!0);
                                var u;
                                return (
                                    (u = () => {
                                        e.current = !1;
                                    }),
                                    (0, r.useEffect)(u, []),
                                    e.current
                                );
                            })(),
                            D = u.animationStatus.get(),
                            p = (0, r.useState)(D ? A : u.computes.progressionValues().withoutAnimation),
                            f = p[0],
                            b = p[1],
                            h = (0, r.useState)(g ? m : l),
                            C = h[0],
                            B = h[1];
                        return (
                            (0, r.useEffect)(() => {
                                if ((D && o.O.sound.play.sound('ev_fep_pb_start'), F)) return;
                                const e = (0, Pe.EH)(() => {
                                    b(
                                        C < l
                                            ? u.computes.progressionValuesWithStageMaximum(C).fromZeroToEnd
                                            : u.computes.progressionValues().current,
                                    );
                                });
                                return () => e();
                            }, [l, u.computes, C, D, F]),
                            s().createElement(
                                'div',
                                { className: Un.base },
                                s().createElement(
                                    'div',
                                    { className: Un.header },
                                    s().createElement(
                                        'div',
                                        { className: Un.title },
                                        s().createElement(wn, {
                                            text: d ? Gn.unlimitedProgression.title() : Gn.title(),
                                            binding: { modeName: _.userName(), done: D ? C : l, total: d ? '' : c },
                                        }),
                                    ),
                                    s().createElement('div', { className: Un.description }, n),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Un.bar },
                                    s().createElement(hn, {
                                        animationSettings: Sn,
                                        size: Va.Default,
                                        deltaFrom: f.deltaFrom,
                                        value: f.value,
                                        maxValue: f.maxValue,
                                        additionalKey: C,
                                        onChangeAnimationState: (e) => {
                                            e === Ya.End &&
                                                (o.O.sound.play.sound('ev_fep_pb_stop'),
                                                C < l ? B(C + 1) : t.setAnimationEnabled(!1));
                                        },
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Un.footer },
                                    s().createElement(
                                        'div',
                                        { className: Un.counter },
                                        s().createElement('div', { className: Un.currentCount }, f.value),
                                        s().createElement(
                                            'div',
                                            { className: Un.slash },
                                            s().createElement(nt, { text: R.strings.common.common.slash() }),
                                        ),
                                        s().createElement('div', { className: Un.total }, f.maxValue),
                                    ),
                                    s().createElement(Ln, {
                                        classMix: Un.rewards,
                                        data: u.computes.rewards(),
                                        size: Ee.Small,
                                        count: u.computes.rewards().length > 4 ? 3 : void 0,
                                        boxRewardTooltip: {
                                            contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                            args: { showCount: 4 },
                                        },
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: Un.value },
                                        E > 0 ? Uu(R.strings.common.plusValue(), { value: E }) : E,
                                    ),
                                ),
                            )
                        );
                    });
                let $n;
                !(function (e) {
                    ((e.UNDEFINED = 'undefined'),
                        (e.MUL = 'mul'),
                        (e.ADD = 'add'),
                        (e.SUB = 'sub'),
                        (e.PROCENT = 'procent'),
                        (e.SHOW_NEGATIVE_IMPACT = 'showNegativeImpact'));
                })($n || ($n = {}));
                const Wn = {
                        base: 'Profit_base_51',
                        base__big: 'Profit_base__big_52',
                        base__large: 'Profit_base__large_70',
                        icon: 'Profit_icon_75',
                        'icon__tankmenXP-small': 'Profit_icon__tankmenXP-small_3f',
                        'icon__tankmenXP-big': 'Profit_icon__tankmenXP-big_a7',
                        'icon__tankmenXP-large': 'Profit_icon__tankmenXP-large_ef',
                        'icon__credits-small': 'Profit_icon__credits-small_5d',
                        base__small: 'Profit_base__small_4e',
                        'icon__credits-big': 'Profit_icon__credits-big_02',
                        'icon__credits-large': 'Profit_icon__credits-large_6b',
                        'icon__gold-small': 'Profit_icon__gold-small_87',
                        'icon__gold-big': 'Profit_icon__gold-big_d4',
                        'icon__gold-large': 'Profit_icon__gold-large_b8',
                        'icon__crystal-small': 'Profit_icon__crystal-small_8d',
                        'icon__crystal-big': 'Profit_icon__crystal-big_74',
                        'icon__crystal-large': 'Profit_icon__crystal-large_6f',
                        'icon__multyXp-small': 'Profit_icon__multyXp-small_34',
                        'icon__multyFreeXp-small': 'Profit_icon__multyFreeXp-small_cc',
                        'icon__xp-small': 'Profit_icon__xp-small_88',
                        'icon__xp-big': 'Profit_icon__xp-big_7f',
                        'icon__xp-large': 'Profit_icon__xp-large_37',
                        'icon__freeXP-small': 'Profit_icon__freeXP-small_26',
                        'icon__freeXP-big': 'Profit_icon__freeXP-big_36',
                        'icon__freeXP-large': 'Profit_icon__freeXP-large_b0',
                        value: 'Profit_value_c4',
                        value__notEnough: 'Profit_value__notEnough_0f',
                    },
                    zn = (e, u) =>
                        (function (e, u) {
                            for (let t = 0; t < e.length; t++) if (Ie(e, t) === u) return !0;
                            return !1;
                        })(u, e),
                    Vn = ({ type: e, value: u, showPlus: t, size: a, modifiers: n = [] }) =>
                        s().createElement(
                            'span',
                            { className: b()(Wn.base, Wn[`base__${a}`]) },
                            s().createElement(
                                'span',
                                {
                                    className: b()(
                                        Wn.value,
                                        Wn[`value__${e}`],
                                        (u < 0 || zn($n.SHOW_NEGATIVE_IMPACT, n)) && Wn.value__notEnough,
                                    ),
                                },
                                (t || zn($n.ADD, n)) && u > 0 && '+',
                                zn($n.MUL, n) && R.strings.common.multiplier(),
                                Number.isInteger(u) ? s().createElement(ce, { value: u }) : u,
                                zn($n.PROCENT, n) && R.strings.common.common.percent(),
                            ),
                            s().createElement('span', { className: b()(Wn.icon, Wn[`icon__${e}-${a}`]) }),
                        ),
                    jn = ({ type: e, value: u }) => {
                        const t = w();
                        return s().createElement(
                            Bu,
                            {
                                contentId:
                                    R.views.fun_random.lobby.tooltips.FunRandomBattleResultsEconomicTooltipView(
                                        'resId',
                                    ),
                                args: { currencyType: e },
                            },
                            s().createElement(
                                'div',
                                { className: 'Reward_base_1a' },
                                s().createElement(Vn, {
                                    type: e,
                                    value: u,
                                    size: [B.Large, B.ExtraLarge].includes(t.mediaSize) ? 'large' : 'big',
                                }),
                            ),
                        );
                    },
                    qn = { base: 'RewardList_base_bc' },
                    Xn = (0, Y.Pi)(() => {
                        const e = cu().model.rewards.get();
                        return s().createElement(
                            'div',
                            { className: qn.base },
                            ke(e, (e, u) =>
                                s().createElement('div', { className: qn.item, key: u }, s().createElement(jn, e)),
                            ),
                        );
                    }),
                    Kn = (e = 0, u = 1, t, a, n = !1) => {
                        const s = (0, r.useState)(e),
                            i = s[0],
                            o = s[1];
                        return (
                            (0, r.useEffect)(() => {
                                o(e);
                            }, [e]),
                            (0, r.useEffect)(() => {
                                const r = Date.now(),
                                    s = setInterval(() => {
                                        const u = e + (n ? 1 : -1) * Math.floor((Date.now() - r) / xa);
                                        void 0 !== t && (n ? u >= t : u <= t)
                                            ? (o(t), a && a(), clearInterval(s))
                                            : o(u);
                                    }, u * xa);
                                return () => {
                                    clearInterval(s);
                                };
                            }, [e, u, t, a, n]),
                            i
                        );
                    },
                    Yn = ({
                        className: e,
                        hourFormat: u = R.strings.quests.general.countdown.timer_hrs(),
                        minuteFormat: t = R.strings.quests.general.countdown.timer_min(),
                        roundUpHours: a = !1,
                        startingSeconds: n = 0,
                        refreshRate: r = 1,
                        onFinish: i,
                        targetTime: o,
                        useTimeUpdateHook: l = Kn,
                        isCountUp: c = !1,
                    }) => {
                        const d = l(n, r, o, i, c),
                            m = Math.abs(d) < 3600 ? t : u;
                        return s().createElement(
                            'span',
                            { className: e },
                            ((e, u, t) => {
                                const a = u < 0,
                                    n = Math.abs(u),
                                    r = Math.floor(n / 86400).toString(),
                                    s = Math.floor(n / 3600).toString(),
                                    i = Math.floor((n % 3600) / 60).toString(),
                                    o = Math.floor(n % 60).toString(),
                                    l = e
                                        .replace('%D', r.padStart(1, '0'))
                                        .replace('%HH', s.padStart(2, '0'))
                                        .replace('%H', t && Number(i) >= 30 ? (Number(s) + 1).toString() : s)
                                        .replace('%MM', i.padStart(2, '0'))
                                        .replace('%M', i.toString())
                                        .replace('%SS', o.padStart(2, '0'))
                                        .replace('%S', o);
                                return a ? `-${l}` : l;
                            })(m, d, a),
                        );
                    };
                let Zn, Qn, Jn, er, ur;
                var tr, ar, nr;
                let rr;
                (!(function (e) {
                    ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                })(Zn || (Zn = {})),
                    (function (e) {
                        ((e[(e.Equipped = 0)] = 'Equipped'),
                            (e[(e.Locked = 1)] = 'Locked'),
                            (e[(e.Open = 2)] = 'Open'));
                    })(Qn || (Qn = {})),
                    ((nr = Jn || (Jn = {})).Engraving = 'engraving'),
                    (nr.Background = 'background'),
                    (nr.All = 'all'),
                    ((ar = er || (er = {})).Dedication = 'dedication'),
                    (ar.Skill = 'skill'),
                    (ar.RankedSkill = 'ranked_skill'),
                    (ar.Triumph = 'triumph'),
                    (ar.Medal = 'triumph_medal'),
                    (ar.Base = 'base'),
                    ((tr = ur || (ur = {})).Dedication = 'dedication'),
                    (tr.Triumph = 'triumph'),
                    (tr.Season = 'season'),
                    ur.Dedication,
                    er.Dedication,
                    ur.Triumph,
                    er.Triumph,
                    ur.Season,
                    er.Skill,
                    er.RankedSkill,
                    (function (e) {
                        ((e.NUMBER = 'NUMBER'), (e.PERCENTAGE = 'PERCENTAGE'));
                    })(rr || (rr = {})),
                    R.images.gui.maps.icons.dogtags,
                    R.strings.dogtags.component,
                    Zn.Engraving,
                    Zn.Background,
                    Zn.Engraving,
                    Zn.Background);
                const sr = (e, u = rr.NUMBER) => {
                    const t = j.Z5.getRealFormat(e, j.Gr.WO_ZERO_DIGITS).replace(/\s/g, ' ');
                    return u === rr.PERCENTAGE ? `${t} %` : t;
                };
                let ir;
                !(function (e) {
                    ((e[(e.NoRestriction = 0)] = 'NoRestriction'),
                        (e[(e.IsApplied = 1)] = 'IsApplied'),
                        (e[(e.InvalidBattleType = 2)] = 'InvalidBattleType'),
                        (e[(e.IsNotVictory = 3)] = 'IsNotVictory'),
                        (e[(e.DeprecatedResults = 4)] = 'DeprecatedResults'),
                        (e[(e.NoVehicle = 5)] = 'NoVehicle'),
                        (e[(e.NoCrew = 6)] = 'NoCrew'),
                        (e[(e.FasterEducationCrewNotActive = 7)] = 'FasterEducationCrewNotActive'),
                        (e[(e.FasterEducationCrewActive = 8)] = 'FasterEducationCrewActive'),
                        (e[(e.NotApplyingError = 9)] = 'NotApplyingError'));
                })(ir || (ir = {}));
                const or = 'Upgrade_icon_32',
                    lr = 'Upgrade_error_2b';
                let cr;
                !(function (e) {
                    ((e[(e.IsNotVictory = ir.IsNotVictory)] = 'IsNotVictory'),
                        (e[(e.DeprecatedResults = ir.DeprecatedResults)] = 'DeprecatedResults'),
                        (e[(e.NoVehicle = ir.NoVehicle)] = 'NoVehicle'),
                        (e[(e.NoCrew = ir.NoCrew)] = 'NoCrew'),
                        (e[(e.FasterEducationCrewNotActive = ir.FasterEducationCrewNotActive)] =
                            'FasterEducationCrewNotActive'),
                        (e[(e.FasterEducationCrewActive = ir.FasterEducationCrewActive)] =
                            'FasterEducationCrewActive'));
                })(cr || (cr = {}));
                const dr = R.strings.fun_battle_results.ribbon,
                    mr = [ir.IsApplied, ir.NotApplyingError, ir.IsNotVictory],
                    Er = [ir.IsApplied, ir.NoRestriction],
                    _r = (0, Y.Pi)(() => {
                        const e = cu(),
                            u = e.model,
                            t = e.controls,
                            a = u.premiumPlus.get(),
                            n = a.nextBonusTime,
                            r = a.xpDiff,
                            i = a.restriction,
                            o = a.bonusMultiplier,
                            l = a.leftBonusCount,
                            c = a.isUndefinedLeftBonusCount,
                            d = !mr.includes(i),
                            m = Er.includes(i),
                            E = i === ir.IsNotVictory,
                            _ = i === ir.NoRestriction && (l > 0 || c),
                            g = () => {
                                _ && t.riseRewards();
                            };
                        return s().createElement(
                            'div',
                            { className: b()('Upgrade_base_25', _ && 'Upgrade_base__column_02') },
                            s().createElement('div', { className: 'Upgrade_highlight_44' }),
                            _ &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: 'Upgrade_flash_e0' }),
                                    s().createElement('div', {
                                        className: 'Upgrade_multiplier_81',
                                        style: {
                                            backgroundImage: `url(${R.images.fun_random.gui.maps.icons.feature.battle_results.ribbon.multiplaers.$dyn('x' + String(o))})`,
                                        },
                                    }),
                                ),
                            n > 0 && !E
                                ? s().createElement(
                                      'div',
                                      { className: 'Upgrade_timerWrapper_6a' },
                                      s().createElement('div', { className: 'Upgrade_timerText_27' }, dr.timeLeft()),
                                      s().createElement(
                                          'div',
                                          { className: b()('Upgrade_state_ee', 'Upgrade_state__timer_2d') },
                                          s().createElement('div', { className: b()(or, 'Upgrade_icon__timer_eb') }),
                                          s().createElement(Yn, {
                                              startingSeconds: n,
                                              refreshRate: 1,
                                              targetTime: 0,
                                              hourFormat: '%HH:%MM:%SS',
                                              className: 'Upgrade_timer_06',
                                          }),
                                      ),
                                  )
                                : s().createElement(
                                      s().Fragment,
                                      null,
                                      (() => {
                                          switch (i) {
                                              case ir.NotApplyingError:
                                                  return s().createElement(
                                                      'div',
                                                      { className: lr },
                                                      s().createElement('div', {
                                                          className: b()(or, 'Upgrade_icon__attention_a6'),
                                                      }),
                                                      s().createElement('span', null, dr.errorState()),
                                                  );
                                              case ir.IsApplied:
                                                  return s().createElement(
                                                      s().Fragment,
                                                      null,
                                                      s().createElement('div', { className: 'Upgrade_accepter_0d' }),
                                                      s().createElement(
                                                          'div',
                                                          { className: 'Upgrade_applied_b3' },
                                                          dr.applied(),
                                                      ),
                                                  );
                                              case ir.NoRestriction:
                                                  return s().createElement(
                                                      'div',
                                                      {
                                                          className: b()(
                                                              'Upgrade_button_d7',
                                                              d && 'Upgrade_button__cursor_eb',
                                                          ),
                                                          onClick: g,
                                                      },
                                                      s().createElement(
                                                          'div',
                                                          {
                                                              className: b()(
                                                                  'Upgrade_content_a5',
                                                                  'Upgrade_content__normal_7d',
                                                              ),
                                                          },
                                                          s().createElement(nt, {
                                                              text: dr.expBonus(),
                                                              classMix: 'Upgrade_defaultState_a0',
                                                              binding: {
                                                                  count: sr(r),
                                                                  icon: s().createElement('img', {
                                                                      className: 'Upgrade_xpIcon_df',
                                                                      src: 'R.images.gui.maps.icons.library.XpIcon_1',
                                                                      alt: 'bubble',
                                                                  }),
                                                              },
                                                          }),
                                                      ),
                                                  );
                                              default:
                                                  return s().createElement(
                                                      'div',
                                                      { className: lr },
                                                      s().createElement('div', {
                                                          className: b()(or, 'Upgrade_icon__information_50'),
                                                      }),
                                                      s().createElement(
                                                          'span',
                                                          null,
                                                          R.strings.fun_battle_results.premiumBonus.$dyn(cr[i]),
                                                      ),
                                                  );
                                          }
                                      })(),
                                  ),
                            l >= 0 &&
                                m &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    !_ && s().createElement('div', { className: 'Upgrade_devider_63' }),
                                    s().createElement(
                                        'div',
                                        { className: 'Upgrade_usesLeft_a2' },
                                        s().createElement(nt, {
                                            text: dr.usesLeft(),
                                            binding: {
                                                count: s().createElement(
                                                    'div',
                                                    { className: 'Upgrade_points_73' },
                                                    i === ir.NotApplyingError || c ? R.strings.common.common.dash() : l,
                                                ),
                                            },
                                        }),
                                    ),
                                ),
                        );
                    }),
                    gr = {
                        base: 'Ribbon_base_51',
                        base__upgradable: 'Ribbon_base__upgradable_36',
                        ribbon: 'Ribbon_ribbon_03',
                        ribbon__win: 'Ribbon_ribbon__win_b4',
                        ribbon__prem: 'Ribbon_ribbon__prem_92',
                        ribbon__lose: 'Ribbon_ribbon__lose_0f',
                        ribbon__lose_prem: 'Ribbon_ribbon__lose_prem_97',
                        ribbon__draw: 'Ribbon_ribbon__draw_0e',
                        ribbon__draw_prem: 'Ribbon_ribbon__draw_prem_80',
                        upgrade: 'Ribbon_upgrade_13',
                        icon: 'Ribbon_icon_d4',
                        icon__1: 'Ribbon_icon__1_95',
                        icon__2: 'Ribbon_icon__2_71',
                        icon__3: 'Ribbon_icon__3_28',
                        icon__4: 'Ribbon_icon__4_f2',
                        icon__5: 'Ribbon_icon__5_30',
                    },
                    Ar = (0, Y.Pi)(() => {
                        const e = cu().model,
                            u = e.battleInfo.get().winStatus,
                            t = e.premiumPlus.get(),
                            a = t.hasPremium,
                            n = t.isXpBonusEnabled,
                            r = 'win' === u;
                        return s().createElement(
                            'div',
                            { className: b()(gr.base, n && gr.base__upgradable) },
                            s().createElement('div', {
                                className: b()(
                                    gr.ribbon,
                                    r && (a ? gr.ribbon__prem : gr.ribbon__win),
                                    !r && (a ? gr.ribbon__lose_prem : gr.ribbon__lose),
                                ),
                            }),
                            s().createElement(Xn, null),
                            s().createElement('div', { className: gr.shadow }),
                            n && s().createElement('div', { className: gr.upgrade }, s().createElement(_r, null)),
                        );
                    }),
                    Fr = R.images.fun_random.gui.maps.icons.feature.battle_results.stat_list.big,
                    Dr = ({ paramType: e, value: u, assetsPointer: t }) => {
                        var a;
                        const n = oe('efficiency', {
                                poFileName: 'fun_battle_results',
                                assetsPointer: t,
                                isSubMode: !0,
                            }),
                            i = n.staticTexts,
                            o = n.dynamicTexts,
                            l = null == (a = le(t, !0).battle_results) ? void 0 : a.stat_list.big,
                            c = (0, r.useContext)(su),
                            d = c.personalEfficiencyEmptyReplace,
                            m = c.statItemValueFormatter;
                        return s().createElement(
                            Bu,
                            {
                                contentId: R.views.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
                                args: { paramType: e },
                            },
                            s().createElement(
                                'div',
                                { className: 'StatItem_base_11' },
                                s().createElement('div', {
                                    className: 'StatItem_statImage_27',
                                    style: { backgroundImage: `url(${na(l, Fr, e)})` },
                                }),
                                s().createElement('div', { className: 'StatItem_statText_7b' }, m(e, u, d, o, i)),
                                s().createElement(
                                    'div',
                                    { className: 'StatItem_titleText_ed' },
                                    s().createElement(nt, { text: na(o, i, e) }),
                                ),
                            ),
                        );
                    };
                function pr() {
                    return (
                        (pr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        pr.apply(this, arguments)
                    );
                }
                const fr = (0, Y.Pi)(() => {
                        const e = cu().model,
                            u = e.efficiency.get(),
                            t = e.battleInfo.get().subModeAssetsPointer;
                        return s().createElement(
                            'div',
                            { className: 'StatList_base_58' },
                            ke(u, (e, u) =>
                                s().createElement(
                                    'div',
                                    { className: 'StatList_item_0e', key: u },
                                    s().createElement(Dr, pr({}, e, { assetsPointer: t })),
                                ),
                            ),
                        );
                    }),
                    br = {
                        base: 'PersonalTab_base_b7',
                        content: 'PersonalTab_content_0e',
                        header: 'PersonalTab_header_7c',
                        ribbon: 'PersonalTab_ribbon_54',
                        statistics: 'PersonalTab_statistics_9b',
                        statistics__topPlace: 'PersonalTab_statistics__topPlace_16',
                        progress: 'PersonalTab_progress_32',
                        title: 'PersonalTab_title_7d',
                    },
                    hr = {
                        base: 'TopPlace_base_ce',
                        winRibbon: 'TopPlace_winRibbon_4e',
                        position: 'TopPlace_position_ed',
                        subtitle: 'TopPlace_subtitle_b9',
                        positionOverlay: 'TopPlace_positionOverlay_71',
                        subtitleOverlay: 'TopPlace_subtitleOverlay_86',
                        base__place1: 'TopPlace_base__place1_b6',
                        gradientBase: 'TopPlace_gradientBase_63',
                        base__place2: 'TopPlace_base__place2_b6',
                        base__place3: 'TopPlace_base__place3_be',
                        gradientOverlay: 'TopPlace_gradientOverlay_f8',
                        winShine: 'TopPlace_winShine_81',
                    },
                    Cr = ({ position: e }) => {
                        const u = R.strings.fall_tanks.battleResults.battleStatus.inTop();
                        return s().createElement(
                            'div',
                            { className: b()(hr.base, hr[`base__place${e}`]) },
                            s().createElement('div', {
                                className: hr.winRibbon,
                                style: {
                                    backgroundImage: `url(R.images.fall_tanks.gui.maps.icons.feature.battle_results.personal.wreath${e})`,
                                },
                            }),
                            s().createElement('div', { className: b()(hr.position, hr.gradientBase) }, e),
                            s().createElement(
                                'div',
                                { className: b()(hr.position, hr.positionOverlay, hr.gradientOverlay) },
                                e,
                            ),
                            s().createElement('div', { className: b()(hr.subtitle, hr.gradientBase) }, u),
                            s().createElement(
                                'div',
                                { className: b()(hr.subtitle, hr.subtitleOverlay, hr.gradientOverlay) },
                                u,
                            ),
                            s().createElement('div', {
                                className: hr.winShine,
                                style: {
                                    backgroundImage: `url(R.images.fall_tanks.gui.maps.icons.feature.battle_results.personal.shineLine${e})`,
                                },
                            }),
                        );
                    },
                    Br = R.strings.fall_tanks.battleResults.battleStatus,
                    vr = (0, Y.Pi)(() => {
                        const e = cu().model,
                            u = e.battleInfo.get().winStatus,
                            t = e.efficiency.get(),
                            a = e.rewards.get(),
                            n = e.computes.currentPlayer().efficiencyValues.finishPosition,
                            r = u === Ga && n <= 3,
                            i = e.progress.get().hasProgress;
                        return s().createElement(
                            'div',
                            { className: br.base },
                            s().createElement(
                                'div',
                                { className: br.content },
                                r
                                    ? s().createElement(
                                          'div',
                                          { className: b()(br.header, br[`header__${u}`]) },
                                          s().createElement(Cr, { position: n }),
                                      )
                                    : s().createElement(
                                          'div',
                                          { className: b()(br.header, br[`header__${u}`]) },
                                          s().createElement(nt, { text: Br.$dyn(u), classMix: br.title }),
                                      ),
                                t.length >= 3 &&
                                    s().createElement(
                                        'div',
                                        { className: b()(br.statistics, r && br.statistics__topPlace) },
                                        s().createElement(fr, null),
                                    ),
                                a.length > 0 &&
                                    s().createElement('div', { className: br.ribbon }, s().createElement(Ar, null)),
                                i && s().createElement('div', { className: br.progress }, s().createElement(Hn, null)),
                            ),
                        );
                    });
                let yr;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(yr || (yr = {}));
                const wr = ({
                        children: e,
                        contentID: u,
                        decoratorID: t = 0,
                        targetId: a = 0,
                        args: n,
                        isEnabled: s = !0,
                        onMouseDown: i,
                    }) => {
                        const o = (0, r.useCallback)(() => {
                                ((0, j.c9)(j.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: n,
                                }),
                                    G.playYes());
                            }, [n, u, t, a]),
                            l = (0, r.useCallback)(() => {
                                (0, j.c9)(j.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, t, a]),
                            c = (0, r.useCallback)(
                                (e) => {
                                    (i && i(e), ((e) => e.button === yr.RIGHT)(e) && o());
                                },
                                [i, o],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, r.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Sr = ['children'];
                function Tr() {
                    return (
                        (Tr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Tr.apply(this, arguments)
                    );
                }
                const Pr = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Sr);
                        return s().createElement(
                            wr,
                            Tr({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                            u,
                        );
                    },
                    Rr = ({ squadIndex: e, currentSquadIndex: u }) =>
                        s().createElement(
                            'div',
                            {
                                className: b()(
                                    'TableRendererSquad_base_96',
                                    u === e && 'TableRendererSquad_base__highlighted_a0',
                                ),
                            },
                            e,
                        ),
                    Nr = ({ vehicle: e, userNames: u, isPersonal: t = !1, isSameSquad: a = !1, killed: n = !1 }) => {
                        const r = e.techName,
                            i = e.name,
                            o = e.tier,
                            l = e.type,
                            c = e.nation,
                            d = e.tags.indexOf('premiumIGR') > -1;
                        return s().createElement(
                            'div',
                            { className: 'TableRendererVehicleInfo_base_1c' },
                            s().createElement('div', {
                                className: b()(
                                    'TableRendererVehicleInfo_vehicleImage_d3',
                                    n && 'TableRendererVehicleInfo_vehicleImage__isKilled_9d',
                                ),
                                style: aa(r, c),
                            }),
                            s().createElement(ea, {
                                vehicleLevel: o,
                                vehicleType: l,
                                vehicleShortName: i,
                                userNames: u,
                                isPersonal: t,
                                isSameSquad: a,
                                isIGR: d,
                                killed: n,
                            }),
                        );
                    },
                    xr = {
                        base: 'ActiveGlow_base_82',
                        base__active: 'ActiveGlow_base__active_ad',
                        activeGlow: 'ActiveGlow_activeGlow_a7',
                        activeGlow__left: 'ActiveGlow_activeGlow__left_34',
                        activeGlow__right: 'ActiveGlow_activeGlow__right_38',
                    },
                    Ir = 'left',
                    kr = ({ position: e = 'left', isActive: u = !1 }) =>
                        s().createElement(
                            'div',
                            { className: b()(xr.base, u && xr.base__active) },
                            s().createElement('div', { className: b()(xr.activeGlow, xr[`activeGlow__${e}`]) }),
                        ),
                    Or = (e) => e.toString().padStart(2, '0');
                function Mr(e, u = '{minutes}:{seconds}.{milliseconds}', t = 0, a = '-') {
                    if (e <= t) return a;
                    let n = 10 * Math.round((e * xa) / 10);
                    const r = Math.trunc(n / 6e4);
                    n -= 6e4 * r;
                    const s = Math.trunc(n / xa);
                    n -= s * xa;
                    const i = Math.round(n / 10);
                    return Lu(u, { minutes: Or(r), seconds: Or(s), milliseconds: Or(i) });
                }
                function Lr() {
                    return (
                        (Lr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Lr.apply(this, arguments)
                    );
                }
                const Ur = ({ userNames: e, isPersonal: u, isKilled: t, isSameSquad: a, cellsConfig: n }) => {
                        const r = w().mediaSize,
                            i = Ea(ee, n),
                            o = Kt.includes(r) ? i[1] : i[0];
                        return s().createElement(
                            'div',
                            { className: ia.cell, style: { width: `${o}rem` } },
                            s().createElement(
                                'div',
                                {
                                    style: {
                                        width: o - n.playerCellOffset + 'rem',
                                        marginLeft: `${n.playerCellOffset}rem`,
                                    },
                                },
                                s().createElement(
                                    at,
                                    Lr({}, e, { isAnonymizerShown: u, isPersonal: u, isKilled: t, isSameSquad: a }),
                                ),
                            ),
                        );
                    },
                    Gr = ({ baseStyles: e, columnName: u, value: t, columnsCount: a, cellsConfig: n }) => {
                        const r = w().mediaSize;
                        return s().createElement(
                            'div',
                            { className: e, style: _a(u, n, r, a) },
                            s().createElement('div', { className: ia.value }, t),
                        );
                    };
                function Hr() {
                    return (
                        (Hr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Hr.apply(this, arguments)
                    );
                }
                const $r = (0, Y.Pi)(({ player: e, selected: u, alias: t, first: a = !1 }) => {
                    const n = cu(),
                        i = n.model,
                        l = n.controls,
                        c = i.battleInfo.get().subModeAssetsPointer,
                        d = i.selectedPlayerId.get(),
                        m = i.computes.personalSquadIndex(),
                        E = i.detailsColumns.get(),
                        _ = e.userNames,
                        g = e.squadIndex,
                        A = e.playerIndex,
                        F = e.isPersonal,
                        D = e.databaseID,
                        p = e.vehicle.vehicleCD,
                        f = _.isTeamKiller,
                        h = e.efficiencyValues.finishPosition <= 0,
                        C = m === g && m > 0,
                        B = i.singleTeamMode.get(),
                        v = w().mediaSize,
                        y = (0, r.useContext)(ru).tableCellsConfig,
                        S = 0 === E.length ? 3 : E.length,
                        T = oe('team', {
                            poFileName: 'fun_battle_results',
                            assetsPointer: c,
                            isSubMode: !0,
                        }).dynamicTexts,
                        P = ut({ isTeamKiller: f, isKilled: h, isPersonal: F, isSameSquad: C });
                    return s().createElement(
                        Pr,
                        { args: { databaseID: D, vehicleCD: p } },
                        s().createElement(
                            'div',
                            {
                                className: b()(
                                    ia.bodyRow,
                                    u && ia.bodyRow__isActive,
                                    B && ia.bodyRow__nonSelectable,
                                    a && ia.bodyRow__isFirst,
                                ),
                                style: { color: P },
                                onClick: function () {
                                    if (B) return;
                                    o.O.sound.play.sound('yes1');
                                    const e = d === A;
                                    l.updateTeamTableSelectedPlayer(e ? nu : t, e ? -1 : A);
                                },
                                onMouseEnter: function () {
                                    B || o.O.sound.play.sound('highlight');
                                },
                            },
                            ya.map((u, t) => {
                                var a, n;
                                const r = qt.findIndex((e) => e === u),
                                    i = Le(E, (e) => e === u);
                                if (-1 !== r || (-1 !== i && void 0 !== i))
                                    switch (u) {
                                        case J:
                                            return s().createElement(
                                                'div',
                                                { className: b()(ia.cell, ia.cell__icon), key: t, style: _a(J, y, v) },
                                                e.squadIndex > 0 &&
                                                    s().createElement(Rr, {
                                                        squadIndex: e.squadIndex,
                                                        currentSquadIndex: m,
                                                    }),
                                            );
                                        case ne:
                                            return s().createElement(
                                                'div',
                                                {
                                                    className: b()(ia.cell, ia.cell__vehicle),
                                                    key: t,
                                                    style: _a(ne, y, v),
                                                },
                                                s().createElement(Nr, Hr({}, e, { isSameSquad: C, killed: h })),
                                            );
                                        case ee:
                                            return s().createElement(Ur, {
                                                key: t,
                                                userNames: _,
                                                isPersonal: F,
                                                isKilled: h,
                                                isSameSquad: C,
                                                cellsConfig: y,
                                            });
                                        case Ba:
                                            return s().createElement(Gr, {
                                                key: t,
                                                columnName: u,
                                                baseStyles: b()(ia.cell, ia.cell__icon),
                                                value: Mr(
                                                    e.efficiencyValues.finishTime,
                                                    null == (a = T.format) ? void 0 : a.finishTime(),
                                                    0,
                                                    null == (n = T.empty) ? void 0 : n.finishTime(),
                                                ),
                                                columnsCount: S,
                                                cellsConfig: y,
                                            });
                                        case va:
                                            return s().createElement(Gr, {
                                                key: t,
                                                columnName: u,
                                                baseStyles: b()(ia.cell, ia.cell__icon),
                                                value:
                                                    e.efficiencyValues.finishPosition > 0
                                                        ? e.efficiencyValues.finishPosition
                                                        : '',
                                                columnsCount: S,
                                                cellsConfig: y,
                                            });
                                        default:
                                            return s().createElement(Gr, {
                                                key: t,
                                                columnName: u,
                                                baseStyles: b()(ia.cell, ia.cell__icon),
                                                value: ga(e.efficiencyValues, u, Sa),
                                                columnsCount: S,
                                                cellsConfig: y,
                                            });
                                    }
                            }),
                            s().createElement(
                                'div',
                                { className: ia.glow },
                                s().createElement(kr, { position: t === au ? Ir : 'right', isActive: u }),
                            ),
                        ),
                    );
                });
                function Wr(e, u, t = [], a, n) {
                    return u <= 0 && t.includes(e)
                        ? na(a.empty, n.empty, e)
                        : e === Z
                          ? Mr(
                                u,
                                null == (r = a.format) ? void 0 : r.finishTime(),
                                0,
                                null == (s = a.empty) ? void 0 : s.finishTime(),
                            )
                          : u;
                    var r, s;
                }
                const zr = (0, Y.Pi)(() => {
                    const e = cu(),
                        u = e.model,
                        t = e.controls,
                        a = t.closeWindow,
                        n = u.battleInfo.get(),
                        r = n.assetsPointer,
                        i = n.subModeAssetsPointer,
                        l = n.winStatus,
                        c = u.computes.currentPlayer().efficiencyValues.finishPosition,
                        d = u.currentTabId.get(),
                        m = d === iu,
                        E = u.singleTeamMode.get();
                    K(a);
                    const _ = oe(null, {
                            assetsPointer: i,
                            isSubMode: !0,
                            poFileName: 'fun_battle_results',
                        }).dynamicTexts,
                        g = { personalEfficiencyEmptyReplace: [Q, Z], statItemValueFormatter: Wr },
                        A = {
                            comparatorsMap: Ca,
                            defaultColumn: ee,
                            columnsOrder: ya,
                            headerIconMapping: wa,
                            TableRowComponent: $r,
                            tableCellsConfig: E ? Ta : Pa,
                        };
                    return s().createElement(
                        'div',
                        { className: du.base },
                        s().createElement('div', {
                            className: b()(du.background, !m && du.background__team),
                            style: { backgroundImage: `url('${le(r).library.battle_results_bg()}')` },
                        }),
                        s().createElement('div', { className: b()(du.bgDarken, m && du.bgDarken__personal) }),
                        m &&
                            l === Ga &&
                            c <= 3 &&
                            s().createElement('div', {
                                className: du.bigShine,
                                style: {
                                    backgroundImage: `url(R.images.fall_tanks.gui.maps.icons.feature.battle_results.personal.bigShine${c})`,
                                },
                            }),
                        !m && s().createElement('div', { className: du.bgGlow }),
                        s().createElement(
                            'div',
                            { className: du.closeButton },
                            s().createElement(z, {
                                caption: R.strings.fun_battle_results.closeBtn(),
                                type: 'close',
                                side: 'right',
                                onClick: a,
                            }),
                        ),
                        s().createElement(
                            'div',
                            { className: du.wrapper },
                            s().createElement(
                                'div',
                                { className: du.content },
                                s().createElement(
                                    pu,
                                    {
                                        active: d,
                                        onActiveChange: (e) => {
                                            (o.O.sound.play.sound('yes1'),
                                                t.updateCurrentTabId(e),
                                                t.changeTab(Number(e)));
                                        },
                                    },
                                    s().createElement(
                                        'div',
                                        { className: du.navigation },
                                        s().createElement(
                                            pu.Switcher,
                                            null,
                                            s().createElement(
                                                pu.Switch,
                                                { tabId: iu },
                                                s().createElement(
                                                    'div',
                                                    { className: du.navigationItem },
                                                    _.navigation.battleResults(),
                                                ),
                                            ),
                                            s().createElement('div', { className: du.navigationSeparator }),
                                            s().createElement(
                                                pu.Switch,
                                                { tabId: '2' },
                                                s().createElement(
                                                    'div',
                                                    { className: du.navigationItem },
                                                    _.navigation.teamEfficiency(),
                                                ),
                                            ),
                                        ),
                                    ),
                                    s().createElement(pu.Content, null, (e) => {
                                        switch (e) {
                                            case iu:
                                                return s().createElement(
                                                    su.Provider,
                                                    { value: g },
                                                    s().createElement(vr, null),
                                                );
                                            case '2':
                                                return s().createElement(
                                                    ru.Provider,
                                                    { value: A },
                                                    s().createElement(ba, null),
                                                );
                                            default:
                                                return (console.error('Unreachable branch in tabs'), null);
                                        }
                                    }),
                                ),
                            ),
                            s().createElement('div', { className: du.footer }, s().createElement(Wa, null)),
                        ),
                    );
                });
                engine.whenReady.then(() => {
                    L().render(
                        s().createElement(lu, null, s().createElement(O, null, s().createElement(zr, null))),
                        document.getElementById('root'),
                    );
                });
            },
            363: (e) => {
                'use strict';
                e.exports = React;
            },
            533: (e) => {
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
        (__webpack_require__.j = 'lobby/FallTanksBattleResultsView/FallTanksBattleResultsView'),
        (() => {
            var e = { 'lobby/FallTanksBattleResultsView/FallTanksBattleResultsView': 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/fall_tanks.vendors'], () => __webpack_require__(969));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
