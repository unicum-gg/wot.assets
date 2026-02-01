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
                    t.d(u, { mouse: () => c, off: () => s, on: () => o, onResize: () => r, onScaleUpdated: () => i }));
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    o = (e, u) => engine.on(e, u),
                    s = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, a.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, a.R)(!0);
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
                                : (0, a.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const r = `mouse${u}`,
                                            i = l[u]((e) => t([e, 'outside']));
                                        function o(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, o),
                                            n(),
                                            () => {
                                                a &&
                                                    (i(),
                                                    window.removeEventListener(r, o),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (a = !1));
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
                                ((e.enabled = !1), n());
                            },
                            enable() {
                                ((e.enabled = !0), n());
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
            5959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => o,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = t(527),
                    a = t(2493);
                function r(e = 'px') {
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
                function a(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => a, G: () => n });
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
                t.d(u, { O: () => r });
                var n = t(5959),
                    a = t(514);
                const r = { view: t(7641), client: n, sound: a.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => i });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    i = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => a });
                var n = t(2472);
                const a = {
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
                        addModelObserver: () => E,
                        addPreloadTexture: () => s,
                        arabic2roman: () => x,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => y,
                        events: () => i.U,
                        extraSize: () => T,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => b,
                        getFontNames: () => w,
                        getScale: () => _,
                        getSize: () => d,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => p,
                        isFocused: () => g,
                        pxToRem: () => C,
                        remToPx: () => B,
                        resize: () => F,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => S,
                    }));
                var n = t(9690),
                    a = t(3722),
                    r = t(6112),
                    i = t(6538),
                    o = t(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function E(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function A(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function m(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function _() {
                    return viewEnv.getScale();
                }
                function C(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function p() {
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
                    x = n.cg,
                    y = Object.keys(r.W).reduce(
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
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => r });
                const n = ['args'],
                    a = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(u, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
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
                        var a;
                    },
                    r = {
                        close(e) {
                            a('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            a(64);
                        },
                        move(e) {
                            a(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let n, a;
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
                    })(a || (a = {})));
            },
            9690: (e, u, t) => {
                'use strict';
                t.d(u, { HG: () => o, cg: () => r });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let u = '';
                    for (let t = a.length - 1; t >= 0; t--) for (; e >= a[t]; ) ((u += n[t]), (e -= a[t]));
                    return u;
                }
                const i = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    o = (e) => (i ? `${e}` : r(e));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(3138);
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
                    addCallback(e, u, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, t, a);
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                a.__instance = void 0;
                const r = a;
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
                t.d(u, { B0: () => o, ry: () => C });
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
                const a = n;
                var r = t(1358),
                    i = t(8613);
                let o;
                var s;
                (((s = o || (o = {}))[(s.UNDEFINED = 0)] = 'UNDEFINED'),
                    (s[(s.TOOLTIP = 1)] = 'TOOLTIP'),
                    (s[(s.POP_OVER = 2)] = 'POP_OVER'),
                    (s[(s.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (s[(s.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (s[(s.MOVE = 16)] = 'MOVE'),
                    (s[(s.CLOSE = 32)] = 'CLOSE'),
                    (s[(s.MINIMIZE = 64)] = 'MINIMIZE'));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    F = t(3138);
                const m = ['args'];
                function D(e, u, t, n, a, r, i) {
                    try {
                        var o = e[r](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(n, a);
                }
                const _ = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(u, t);
                                        function i(e) {
                                            D(r, n, a, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            D(r, n, a, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(u, m);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    h = () => B(o.CLOSE),
                    g = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var f = t(7572);
                const p = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: f.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: A,
                        makeGlobalBoundingBox: _,
                        sendMoveEvent: (e) => B(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => B(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const i = F.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                E = s.width,
                                A = s.height,
                                d = {
                                    x: F.O.view.pxToRem(l) + i.x,
                                    y: F.O.view.pxToRem(c) + i.y,
                                    width: F.O.view.pxToRem(E),
                                    height: F.O.view.pxToRem(A),
                                };
                            B(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: _(d),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => g(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, h);
                        },
                        handleViewEvent: B,
                        onBindingsReady: C,
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
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const a = Object.prototype.toString.call(u[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < a.length; u++) t[n].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            3634: (e, u, t) => {
                'use strict';
                var n = {};
                (t.r(n),
                    t.d(n, {
                        Area: () => $e,
                        Bar: () => We,
                        DefaultScroll: () => Ve,
                        Direction: () => Te,
                        defaultSettings: () => Se,
                        useHorizontalScrollApi: () => Ne,
                    }));
                var a = {};
                (t.r(a), t.d(a, { Area: () => eu, Bar: () => Ze, Default: () => Je, useVerticalScrollApi: () => ze }));
                var r = t(7363),
                    i = t.n(r);
                const o = (e, u, t) =>
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
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function E(e, u, t) {
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
                        a = (function (e, u) {
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
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: a === t.extraLarge.weight,
                        largeHeight: a === t.large.weight,
                        mediumHeight: a === t.medium.weight,
                        smallHeight: a === t.small.weight,
                        extraSmallHeight: a === t.extraSmall.weight,
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
                const A = s.O.client.getSize('rem'),
                    d = A.width,
                    F = A.height,
                    m = Object.assign({ width: d, height: F }, E(d, F, l)),
                    D = (0, r.createContext)(m),
                    _ = ['children'],
                    C = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, _);
                        const n = (0, r.useContext)(D),
                            a = n.extraLarge,
                            i = n.large,
                            s = n.medium,
                            l = n.small,
                            c = n.extraSmall,
                            E = n.extraLargeWidth,
                            A = n.largeWidth,
                            d = n.mediumWidth,
                            F = n.smallWidth,
                            m = n.extraSmallWidth,
                            C = n.extraLargeHeight,
                            B = n.largeHeight,
                            h = n.mediumHeight,
                            g = n.smallHeight,
                            f = n.extraSmallHeight,
                            p = { extraLarge: C, large: B, medium: h, small: g, extraSmall: f };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && a) return u;
                            if (t.large && i) return u;
                            if (t.medium && s) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && E) return o(u, t, p);
                            if (t.largeWidth && A) return o(u, t, p);
                            if (t.mediumWidth && d) return o(u, t, p);
                            if (t.smallWidth && F) return o(u, t, p);
                            if (t.extraSmallWidth && m) return o(u, t, p);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && C) return u;
                                if (t.largeHeight && B) return u;
                                if (t.mediumHeight && h) return u;
                                if (t.smallHeight && g) return u;
                                if (t.extraSmallHeight && f) return u;
                            }
                        }
                        return null;
                    };
                ((C.defaultProps = {
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
                    (0, r.memo)(C));
                const B = ({ children: e }) => {
                    const u = (0, r.useContext)(D),
                        t = (0, r.useState)(u),
                        n = t[0],
                        a = t[1],
                        o = (0, r.useCallback)((e, u) => {
                            const t = s.O.view.pxToRem(e),
                                n = s.O.view.pxToRem(u);
                            a(Object.assign({ width: t, height: n }, E(t, n, l)));
                        }, []),
                        c = (0, r.useCallback)(() => {
                            const e = s.O.client.getSize('px');
                            o(e.width, e.height);
                        }, [o]);
                    (((e) => {
                        const u = (0, r.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        (s.O.client.events.on('clientResized', o), s.O.client.events.on('self.onScaleUpdated', c));
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                (s.O.client.events.off('clientResized', o),
                                    s.O.client.events.off('self.onScaleUpdated', c));
                            },
                            [o, c],
                        ));
                    const A = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                    return i().createElement(D.Provider, { value: A }, e);
                };
                var h = t(6483),
                    g = t.n(h),
                    f = t(926),
                    p = t.n(f);
                let v, b, w;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(v || (v = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(b || (b = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(w || (w = {})));
                const x = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const T = {
                        [b.ExtraSmall]: '',
                        [b.Small]: p().SMALL_WIDTH,
                        [b.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [b.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    S = {
                        [w.ExtraSmall]: '',
                        [w.Small]: p().SMALL_HEIGHT,
                        [w.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [w.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    M = {
                        [v.ExtraSmall]: '',
                        [v.Small]: p().SMALL,
                        [v.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [v.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [v.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    N = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, x);
                        const a = (() => {
                                const e = (0, r.useContext)(D),
                                    u = e.width,
                                    t = e.height,
                                    n = ((e) => {
                                        switch (!0) {
                                            case e.extraLarge:
                                                return v.ExtraLarge;
                                            case e.large:
                                                return v.Large;
                                            case e.medium:
                                                return v.Medium;
                                            case e.small:
                                                return v.Small;
                                            case e.extraSmall:
                                                return v.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    v.ExtraSmall
                                                );
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
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    b.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    i = ((e) => {
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
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    w.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: n,
                                    mediaWidth: a,
                                    mediaHeight: i,
                                    remScreenWidth: u,
                                    remScreenHeight: t,
                                };
                            })(),
                            o = a.mediaWidth,
                            s = a.mediaHeight,
                            l = a.mediaSize;
                        return i().createElement('div', y({ className: g()(t, T[o], S[s], M[l]) }, n), u);
                    },
                    L = ['children'],
                    k = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, L);
                        return i().createElement(B, null, i().createElement(N, t, u));
                    };
                var O = t(1533),
                    P = t.n(O);
                function H() {}
                function W() {
                    return !1;
                }
                console.log;
                var I = t(9174);
                function V(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const $ = (e) => (0 === e ? window : window.subViews.get(e)),
                    z = () => (e, u) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: a, children: o, mocks: l }) {
                                const c = (0, r.useRef)([]),
                                    E = (t, n, a) => {
                                        var r;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = $,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function r(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = a.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const a = t(u),
                                                        r = n.split('.').reduce((e, u) => e[u], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const o = 'string' == typeof r ? `${n}.${r}` : n,
                                                            l = s.O.view.addModelObserver(o, u, !0);
                                                        return (a.set(l, t), e && t(i(r)), l);
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
                                                                                    return V(e, u);
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
                                                                                          ? V(e, u)
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
                                                                })(a.keys());
                                                            !(e = t()).done;
                                                        )
                                                            r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            o =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(e)) : o.readByPath(e),
                                            E = (e) => c.current.push(e),
                                            A = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = I.LO.box(n, { equals: W });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, I.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = I.LO.box(n, { equals: W });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, I.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, u) => ((e[u] = I.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, I.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                r = Object.entries(a),
                                                                i = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = I.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, I.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
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
                                                cleanup: E,
                                            }),
                                            d = { mode: t, model: A, externalModel: o, cleanup: E };
                                        return {
                                            model: A,
                                            controls: 'mocks' === t && a ? a.controls(d) : u(d),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    A = (0, r.useRef)(!1),
                                    d = (0, r.useState)(n),
                                    F = d[0],
                                    m = d[1],
                                    D = (0, r.useState)(() => E(n, a, l)),
                                    _ = D[0],
                                    C = D[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        A.current ? C(E(F, a, l)) : (A.current = !0);
                                    }, [l, F, a]),
                                    (0, r.useEffect)(() => {
                                        m(n);
                                    }, [n]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (_.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [_],
                                    ),
                                    i().createElement(t.Provider, { value: _ }, o)
                                );
                            },
                            () => (0, r.useContext)(t),
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
                    G = U[0],
                    j = U[1];
                function K(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const q = {
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
                    Y = [
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
                function X() {
                    return (
                        (X =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        X.apply(this, arguments)
                    );
                }
                class Z extends i().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && K(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && K(this.props.soundClick));
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
                            a = e.side,
                            r = e.type,
                            o = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            A =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(e, Y)),
                            d = g()(q.base, q[`base__${r}`], q[`base__${a}`], null == o ? void 0 : o.base),
                            F = g()(q.icon, q[`icon__${r}`], q[`icon__${a}`], null == o ? void 0 : o.icon),
                            m = g()(q.glow, null == o ? void 0 : o.glow),
                            D = g()(q.caption, q[`caption__${r}`], null == o ? void 0 : o.caption),
                            _ = g()(q.goto, null == o ? void 0 : o.goto);
                        return i().createElement(
                            'div',
                            X(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== r && i().createElement('div', { className: q.shine }),
                            i().createElement('div', { className: F }, i().createElement('div', { className: m })),
                            i().createElement('div', { className: D }, u),
                            n && i().createElement('div', { className: _ }, n),
                        );
                    }
                }
                Z.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var Q = t(5521),
                    J = t(9916);
                const ee = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ue(e = Q.n.NONE, u = ee, t = !1, n = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== Q.n.NONE)
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
                function te(e) {
                    ue(Q.n.ESCAPE, e);
                }
                const ne = ({ onClose: e, className: u }) => (
                    te(e),
                    i().createElement(
                        'div',
                        { className: g()('page_close_4e', u) },
                        i().createElement(Z, {
                            caption: R.strings.comp7_ext.closeButtonLabel(),
                            type: 'close',
                            side: 'right',
                            onClick: e,
                        }),
                    )
                );
                var ae = t(3403),
                    re = t(7030);
                const ie = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 300, config: { duration: 300 } };
                var oe = t(3946);
                const se = z()(
                        ({ observableModel: e }) => {
                            const u = Object.assign({}, e.primitives(['topPercentage']), {
                                    vehicles: e.array('vehicles'),
                                }),
                                t = (0, oe.Om)(
                                    (e) => {
                                        const t = (function (e, u) {
                                            var t;
                                            if (!(u >= e.length))
                                                return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                                        })(u.vehicles.get(), e);
                                        if (!t) throw new Error(`vehicle with index ${e} is not found`);
                                        return Object.assign({}, t);
                                    },
                                    { equals: W },
                                );
                            return Object.assign({}, u, { computes: { vehicle: t } });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            openVideo: e.createCallbackNoArgs('onVideoOpen'),
                        }),
                    ),
                    le = se[0],
                    ce = se[1],
                    Ee = ({ message: e, className: u, classNames: t }) =>
                        i().createElement(
                            'div',
                            { className: g()('Spinner_base_87', u) },
                            e &&
                                i().createElement(
                                    'div',
                                    { className: g()('Spinner_caption_cf', null == t ? void 0 : t.caption) },
                                    e,
                                ),
                            i().createElement('div', {
                                className: g()('Spinner_gear_c4', null == t ? void 0 : t.gear),
                            }),
                            i().createElement('div', {
                                className: g()('Spinner_logo_bf', null == t ? void 0 : t.logo),
                            }),
                        ),
                    Ae = ({ className: e, onClose: u }) => (
                        te(u),
                        i().createElement('div', { className: g()(e) }, i().createElement(Ee, null))
                    );
                let de, Fe, me, De, _e;
                (!(function (e) {
                    ((e[(e.Progression = 0)] = 'Progression'),
                        (e[(e.RankRewards = 1)] = 'RankRewards'),
                        (e[(e.YearlyRewards = 2)] = 'YearlyRewards'),
                        (e[(e.WeeklyQuests = 3)] = 'WeeklyQuests'),
                        (e[(e.Shop = 4)] = 'Shop'),
                        (e[(e.Leaderboard = 5)] = 'Leaderboard'),
                        (e[(e.YearlyStatistics = 6)] = 'YearlyStatistics'));
                })(de || (de = {})),
                    (function (e) {
                        ((e[(e.First = 6)] = 'First'),
                            (e[(e.Second = 5)] = 'Second'),
                            (e[(e.Third = 4)] = 'Third'),
                            (e[(e.Fourth = 3)] = 'Fourth'),
                            (e[(e.Fifth = 2)] = 'Fifth'),
                            (e[(e.Sixth = 1)] = 'Sixth'));
                    })(Fe || (Fe = {})),
                    (function (e) {
                        ((e.First = 'first'), (e.Second = 'second'), (e.Third = 'third'));
                    })(me || (me = {})),
                    (function (e) {
                        ((e[(e.A = 1)] = 'A'),
                            (e[(e.B = 2)] = 'B'),
                            (e[(e.C = 3)] = 'C'),
                            (e[(e.D = 4)] = 'D'),
                            (e[(e.E = 5)] = 'E'));
                    })(De || (De = {})),
                    (function (e) {
                        ((e.Achieved = 'achieved'), (e.Possible = 'possible'), (e.NotAchieved = 'notAchieved'));
                    })(_e || (_e = {})));
                const Ce = {
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
                let Be, he;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Be || (Be = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(he || (he = {})));
                const ge = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: a,
                    mixClass: o,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: A,
                    onMouseUp: d,
                    onMouseLeave: F,
                    onClick: m,
                }) => {
                    const D = (0, r.useRef)(null),
                        _ = (0, r.useState)(t),
                        C = _[0],
                        B = _[1],
                        h = (0, r.useState)(!1),
                        f = h[0],
                        p = h[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                C && null !== D.current && !D.current.contains(e.target) && B(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [C]),
                        (0, r.useEffect)(() => {
                            B(t);
                        }, [t]),
                        i().createElement(
                            'div',
                            {
                                ref: D,
                                className: g()(
                                    Ce.base,
                                    Ce[`base__${n}`],
                                    a && Ce.base__disabled,
                                    u && Ce[`base__${u}`],
                                    C && Ce.base__focus,
                                    f && Ce.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (e) {
                                    a || (null !== s && K(s), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    E && E(e);
                                },
                                onMouseUp: function (e) {
                                    a || (d && d(e), p(!1));
                                },
                                onMouseDown: function (e) {
                                    a ||
                                        (null !== l && K(l),
                                        A && A(e),
                                        t && (a || (D.current && (D.current.focus(), B(!0)))),
                                        p(!0));
                                },
                                onMouseLeave: function (e) {
                                    a || (F && F(e), p(!1));
                                },
                                onClick: function (e) {
                                    a || (m && m(e));
                                },
                            },
                            n !== Be.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: Ce.back }),
                                    i().createElement('span', { className: Ce.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: g()(Ce.state, Ce.state__default) },
                                i().createElement('span', { className: Ce.stateDisabled }),
                                i().createElement('span', { className: Ce.stateHighlightHover }),
                                i().createElement('span', { className: Ce.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: Ce.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ge.defaultProps = { type: Be.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const fe = ge,
                    pe = (e) => {
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
                    ve = (e, u, t) => (t < e ? e : t > u ? u : t),
                    be = [];
                function we(e) {
                    const u = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, u.current)(...e), be)
                    );
                }
                function xe(e, u, t = []) {
                    const n = (0, r.useRef)(0),
                        a = (0, r.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, r.useEffect)(() => a, [a]);
                    const i = (null != t ? t : []).concat([u]);
                    return [
                        (0, r.useCallback)((t) => {
                            ((n.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, i),
                        a,
                    ];
                }
                function ye(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                let Te;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Te || (Te = {}));
                const Se = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Me = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: a,
                        forceTriggerMouseMove: i,
                    }) => {
                        const o = (e, t) => {
                            const n = u(e),
                                a = n[0],
                                r = n[1];
                            return r <= a ? 0 : ve(a, r, t);
                        };
                        return (s = {}) => {
                            const l = s.settings,
                                c = void 0 === l ? Se : l,
                                E = (0, r.useRef)(null),
                                A = (0, r.useRef)(null),
                                d = (0, r.useRef)(!1),
                                F = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        a = (e, ...t) => {
                                            for (
                                                var n,
                                                    a = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return ye(e, u);
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
                                                                              ? ye(e, u)
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
                                                !(n = a()).done;
                                            )
                                                (0, n.value)(...t);
                                        };
                                    return (0, r.useMemo)(() => ({ on: t, off: n, trigger: a }), []);
                                })(),
                                m = (function (e, u, t) {
                                    const n = (0, r.useMemo)(
                                        () =>
                                            (function (e, u, t, n) {
                                                let a,
                                                    r = !1,
                                                    i = 0;
                                                function o() {
                                                    a && clearTimeout(a);
                                                }
                                                function s(...s) {
                                                    const l = this,
                                                        c = Date.now() - i;
                                                    function E() {
                                                        ((i = Date.now()), t.apply(l, s));
                                                    }
                                                    r ||
                                                        (n && !a && E(),
                                                        o(),
                                                        void 0 === n && c > e
                                                            ? E()
                                                            : !0 !== u &&
                                                              (a = setTimeout(
                                                                  n
                                                                      ? function () {
                                                                            a = void 0;
                                                                        }
                                                                      : E,
                                                                  void 0 === n ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                                    (s.cancel = function () {
                                                        (o(), (r = !0));
                                                    }),
                                                    s
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return ((0, r.useEffect)(() => n.cancel, [n]), n);
                                })(
                                    () => {
                                        i && i();
                                    },
                                    [],
                                    150,
                                ),
                                D = (0, re.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), F.trigger('change', e), i && d.current && m());
                                    },
                                    onRest: (e) => F.trigger('rest', e),
                                    onStart: (e) => F.trigger('start', e),
                                    onPause: (e) => F.trigger('pause', e),
                                })),
                                _ = D[0],
                                C = D[1],
                                B = (0, r.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const a = _.scrollPosition.get(),
                                            r = (null != (n = _.scrollPosition.goal) ? n : 0) - a;
                                        return o(e, u * t + r + a);
                                    },
                                    [_.scrollPosition],
                                ),
                                h = (0, r.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = E.current;
                                        n &&
                                            C.start({
                                                scrollPosition: o(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(n, _.scrollPosition.get()) },
                                            });
                                    },
                                    [C, c.animationConfig, _.scrollPosition],
                                ),
                                g = (0, r.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = A.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return a(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            r = B(u, e, n);
                                        h(r);
                                    },
                                    [h, B, c.step],
                                ),
                                f = (0, r.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && g(n(e)),
                                            E.current && F.trigger('mouseWheel', e, _.scrollPosition, u(E.current)));
                                    },
                                    [_.scrollPosition, g, F],
                                ),
                                p = ((e, u = []) => {
                                    const t = (0, r.useRef)(),
                                        n = (0, r.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        pe(() => {
                                            const e = E.current;
                                            e &&
                                                (h(o(e, _.scrollPosition.goal), { immediate: !0 }),
                                                F.trigger('resizeHandled'));
                                        }),
                                    [h, _.scrollPosition.goal],
                                ),
                                v = we(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = o(e, _.scrollPosition.goal);
                                    (u !== _.scrollPosition.goal && h(u, { immediate: !0 }),
                                        F.trigger('recalculateContent'));
                                });
                            return (
                                (0, r.useEffect)(
                                    () => (
                                        window.addEventListener('resize', p),
                                        () => {
                                            window.removeEventListener('resize', p);
                                        }
                                    ),
                                    [p],
                                ),
                                (0, r.useEffect)(() => {
                                    const e = E.current;
                                    if (!e || !i) return;
                                    const u = () => {
                                            d.current = !0;
                                        },
                                        t = () => {
                                            d.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', u),
                                        e.addEventListener('mouseleave', t),
                                        () => {
                                            (e.removeEventListener('mouseenter', u),
                                                e.removeEventListener('mouseleave', t));
                                        }
                                    );
                                }, [E]),
                                (0, r.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (A.current ? a(A.current) : void 0),
                                        getContainerSize: () => (E.current ? e(E.current) : void 0),
                                        getBounds: () =>
                                            E.current
                                                ? u(E.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: c.step.clampedArrowStepTimeout,
                                        clampPosition: o,
                                        handleMouseWheel: f,
                                        applyScroll: h,
                                        applyStepTo: g,
                                        contentRef: E,
                                        wrapperRef: A,
                                        scrollPosition: C,
                                        animationScroll: _,
                                        recalculateContent: v,
                                        events: { on: F.on, off: F.off },
                                    }),
                                    [_.scrollPosition, h, g, F.off, F.on, v, f, C, c.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    Ne = Me({
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
                        getDirection: (e) => (e.deltaY > 1 ? Te.Next : Te.Prev),
                        forceTriggerMouseMove: s.O.view.forceTriggerMouseMove,
                    }),
                    Le = 'HorizontalBar_base__nonActive_82',
                    ke = 'disable',
                    Re = { pending: !1, offset: 0 },
                    Oe = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Pe = () => {},
                    He = (e, u) => Math.max(20, e.offsetWidth * u),
                    We = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Oe, onDrag: n = Pe }) => {
                        const a = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            E = (0, r.useRef)(null),
                            A = e.stepTimeout || 100,
                            d = (0, r.useState)(Re),
                            F = d[0],
                            m = d[1],
                            D = (0, r.useCallback)(
                                (e) => {
                                    (m(e),
                                        E.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [n],
                            ),
                            _ = () => {
                                const u = c.current,
                                    t = E.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && u && t && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / a),
                                    s = ve(0, 1, r / (a - n)),
                                    A = (u.offsetWidth - He(u, i)) * s;
                                ((t.style.transform = `translateX(${0 | A}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && E.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(ke),
                                                    void l.current.classList.remove(ke)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(ke),
                                                    void l.current.classList.add(ke)
                                                );
                                            var u, t;
                                            (o.current.classList.remove(ke), l.current.classList.remove(ke));
                                        }
                                    })(A));
                            },
                            C = we(() => {
                                ((() => {
                                    const u = E.current,
                                        t = c.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && n && t)) return;
                                    const i = Math.min(1, n / r);
                                    ((u.style.width = `${He(t, i)}px`),
                                        (u.style.display = 'flex'),
                                        a.current &&
                                            (1 === i ? a.current.classList.add(Le) : a.current.classList.remove(Le)));
                                })(),
                                    _());
                            });
                        ((0, r.useEffect)(() => pe(C)),
                            (0, r.useEffect)(
                                () =>
                                    pe(() => {
                                        const u = () => {
                                            _();
                                        };
                                        let t = Pe;
                                        const n = () => {
                                            (t(), (t = pe(C)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', C),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', C),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!F.pending) return;
                                const u = s.O.client.events.mouse.move(([u, t]) => {
                                        var a;
                                        const r = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!r || !i) return;
                                        const o = c.current,
                                            s = E.current;
                                        if (!o || !s) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - F.offset - o.getBoundingClientRect().x,
                                            A = (l / o.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, A),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: l, contentOffset: A }));
                                    }),
                                    t = s.O.client.events.mouse.up(() => {
                                        (u(), D(Re));
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, F.offset, F.pending, n, D]));
                        const B = xe((u) => e.applyStepTo(u), A, [e]),
                            h = B[0],
                            f = B[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const p = (e) => {
                            e.target.classList.contains(ke) || K('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: g()('HorizontalBar_base_49', u.base), ref: a, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: g()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ke) || 0 !== e.button || (K('play'), h(Te.Next));
                                },
                                onMouseUp: f,
                                ref: o,
                                onMouseEnter: p,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: g()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const n = E.current;
                                        n &&
                                            0 === u.button &&
                                            (K('play'),
                                            u.target === n
                                                ? D({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const n = E.current,
                                                          a = e.contentRef.current;
                                                      if (!n || !a) return;
                                                      const r = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + r * u);
                                                  })(u.screenX > n.getBoundingClientRect().x ? Te.Prev : Te.Next));
                                    },
                                    ref: c,
                                    onMouseEnter: p,
                                },
                                i().createElement('div', { ref: E, className: g()('HorizontalBar_thumb_fd', u.thumb) }),
                                i().createElement('div', { className: g()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            i().createElement('div', {
                                className: g()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ke) || 0 !== e.button || (K('play'), h(Te.Prev));
                                },
                                onMouseUp: f,
                                ref: l,
                                onMouseEnter: p,
                            }),
                        );
                    }),
                    Ie = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Ve = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: a,
                        classNames: o,
                        scrollClassName: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: g()(Ie.base, e.base) });
                            }, [n]),
                            A = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: g()(Ie.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: g()(Ie.defaultScrollArea, a) },
                                i().createElement($e, { className: s, api: A, classNames: o }, e),
                            ),
                            i().createElement(We, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    $e = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, r.useEffect)(() => pe(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: g()(Ie.base, u) },
                            i().createElement(
                                'div',
                                {
                                    className: g()(Ie.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: g()(Ie.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (($e.Bar = We), ($e.Default = Ve));
                const ze = Me({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Te.Next : Te.Prev),
                    }),
                    Ue = 'VerticalBar_base__nonActive_42',
                    Ge = 'disable',
                    je = () => {},
                    Ke = { pending: !1, offset: 0 },
                    qe = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Ye = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Xe = (e, u) => Math.max(20, e.offsetHeight * u),
                    Ze = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = qe, onDrag: n = je }) => {
                        const a = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            E = (0, r.useRef)(null),
                            A = e.stepTimeout || 100,
                            d = (0, r.useState)(Ke),
                            F = d[0],
                            m = d[1],
                            D = (0, r.useCallback)(
                                (e) => {
                                    (m(e),
                                        E.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [n],
                            ),
                            _ = we(() => {
                                const u = E.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && u && t)) return;
                                const i = Math.min(1, n / r);
                                return (
                                    (u.style.height = `${Xe(t, i)}px`),
                                    (u.style.display = 'flex'),
                                    a.current &&
                                        (1 === i ? a.current.classList.add(Ue) : a.current.classList.remove(Ue)),
                                    i
                                );
                            }),
                            C = we(() => {
                                const u = c.current,
                                    t = E.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && u && t && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / a),
                                    s = ve(0, 1, r / (a - n)),
                                    A = (u.offsetHeight - Xe(u, i)) * s;
                                ((t.style.transform = `translateY(${0 | A}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && E.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    o.current.classList.add(Ge),
                                                    void l.current.classList.remove(Ge)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(Ge),
                                                    void l.current.classList.add(Ge)
                                                );
                                            var u, t;
                                            (o.current.classList.remove(Ge), l.current.classList.remove(Ge));
                                        }
                                    })(A));
                            }),
                            B = we(() => {
                                Ye(e, () => {
                                    (_(), C());
                                });
                            });
                        ((0, r.useEffect)(() => pe(B)),
                            (0, r.useEffect)(() => {
                                const u = () => {
                                    Ye(e, () => {
                                        C();
                                    });
                                };
                                let t = je;
                                const n = () => {
                                    (t(), (t = pe(B)));
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
                            (0, r.useEffect)(() => {
                                if (!F.pending) return;
                                const u = s.O.client.events.mouse.up(() => {
                                        D(Ke);
                                    }),
                                    t = s.O.client.events.mouse.move(([u]) => {
                                        Ye(e, (t) => {
                                            const a = c.current,
                                                r = E.current,
                                                i = e.getContainerSize();
                                            if (!a || !r || !i) return;
                                            const o = u.screenY - F.offset - a.getBoundingClientRect().y,
                                                s = (o / a.offsetHeight) * i;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: o, contentOffset: s }));
                                        });
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, F.offset, F.pending, n, D]));
                        const h = xe((u) => e.applyStepTo(u), A, [e]),
                            f = h[0],
                            p = h[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const v = (e) => {
                            e.target.classList.contains(Ge) || K('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: g()('VerticalBar_base_f3', u.base), ref: a, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: g()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ge) || 0 !== e.button || (K('play'), f(Te.Next));
                                },
                                ref: o,
                                onMouseEnter: v,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: g()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const n = E.current;
                                        var a;
                                        n &&
                                            0 === u.button &&
                                            (K('play'),
                                            u.target === n
                                                ? D({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y })
                                                : ((a = u.screenY > n.getBoundingClientRect().y ? Te.Prev : Te.Next),
                                                  E.current &&
                                                      Ye(e, (u) => {
                                                          if (!u) return;
                                                          const n = t(e),
                                                              r = e.clampPosition(u, u.scrollTop + n * a);
                                                          e.applyScroll(r);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                i().createElement('div', { ref: E, className: g()('VerticalBar_thumb_32', u.thumb) }),
                                i().createElement('div', { className: g()('VerticalBar_rail_43', u.rail) }),
                            ),
                            i().createElement('div', {
                                className: g()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ge) || 0 !== e.button || (K('play'), f(Te.Prev));
                                },
                                onMouseUp: p,
                                ref: l,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Qe = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Je = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: a,
                        scrollClassName: o,
                        scrollClassNames: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: g()(Qe.base, e.base) });
                            }, [n]),
                            A = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: g()(Qe.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: g()(Qe.area, a) },
                                i().createElement(eu, { className: o, classNames: s, api: A }, e),
                            ),
                            i().createElement(Ze, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    eu = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, r.useEffect)(() => pe(n.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: g()(Qe.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: g()(Qe.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                eu.Default = Je;
                const uu = { Vertical: a, Horizontal: n },
                    tu = 'grid_container_6b',
                    nu = 'grid_header_49',
                    au = 'grid_row_46',
                    ru = 'grid_cell_e8';
                var iu = t(6112);
                const ou = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function su() {
                    return (
                        (su =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        su.apply(this, arguments)
                    );
                }
                const lu = (0, r.forwardRef)(function (e, u) {
                        let t = e.src,
                            n = e.className,
                            a = e.autoplay,
                            o = void 0 !== a && a,
                            l = e.style,
                            c = e.loop,
                            E = void 0 !== c && c,
                            A = e.isPrebufferKeyframes,
                            d = e.keyframesNameConfig,
                            F = e.onClick,
                            m = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, ou);
                        const D = u,
                            _ = (0, r.useRef)(null);
                        var C;
                        return (
                            (C = () =>
                                s.O.view.events.onDisplayChanged((e, u) => {
                                    var t, n;
                                    (u === iu.W.hidden && (null == (t = _.current) || t.pause()),
                                        u === iu.W.shown && (null == (n = _.current) || n.play()));
                                })),
                            (0, r.useEffect)(C, []),
                            (0, r.useEffect)(
                                () =>
                                    pe(() => {
                                        const e = _.current;
                                        if (!D || !e || !A)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const u = e.cohGetKeyframeTimestamps();
                                        u.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              u.map((u) => {
                                                  null == e || e.cohPrebufferKeyframe(u);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [A, D],
                            ),
                            (0, r.useEffect)(() => {
                                if (D && _.current) {
                                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: H },
                                        u = () => {
                                            let u = 0;
                                            const t = (function (t) {
                                                    let n = 0;
                                                    return [
                                                        function t() {
                                                            ((() => {
                                                                if (_.current) {
                                                                    const t = _.current,
                                                                        n = t.currentTime,
                                                                        a = t.duration;
                                                                    if (
                                                                        (u !== n &&
                                                                            (e.changeTimeHandlers.forEach((e) =>
                                                                                e({ currentTime: n, duration: a }),
                                                                            ),
                                                                            (u = n)),
                                                                        _.current.paused || !D || !A)
                                                                    )
                                                                        return;
                                                                    const r = _.current.cohGetKeyframeTimestamps();
                                                                    r.forEach((u, t) => {
                                                                        n > r[t] - 0.02 &&
                                                                            n < r[t] &&
                                                                            e.changeKeyframeHandlers.forEach((e) => {
                                                                                const n = Object.keys(
                                                                                    null != d ? d : {},
                                                                                )[t];
                                                                                return e({
                                                                                    time: u,
                                                                                    name: `${d ? n : `Point_${t}`}`,
                                                                                });
                                                                            });
                                                                    });
                                                                }
                                                            })(),
                                                                (n = requestAnimationFrame(t)));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(n);
                                                        },
                                                    ];
                                                })(),
                                                n = t[0],
                                                a = t[1];
                                            return (n(), a);
                                        };
                                    e.changeTimeLoop = u();
                                    const t = (u) => (
                                            e.changeTimeHandlers.push(u),
                                            () => {
                                                const t = e.changeTimeHandlers,
                                                    n = t.indexOf(u);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(n, 1);
                                            }
                                        ),
                                        n = (u) => (
                                            e.changeKeyframeHandlers.push(u),
                                            () => {
                                                const t = e.changeKeyframeHandlers,
                                                    n = t.indexOf(u);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : t.splice(n, 1);
                                            }
                                        ),
                                        a = () => {
                                            var e;
                                            return null == (e = _.current) ? void 0 : e.currentTime;
                                        },
                                        r = () => {
                                            var e;
                                            return null == (e = _.current) ? void 0 : e.duration;
                                        },
                                        i = (e) => {
                                            _.current && (_.current.currentTime = ve(0, _.current.duration, e));
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = _.current) ? void 0 : e.play();
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = _.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            (s(), i(0));
                                        },
                                        c = () => {
                                            var e, u;
                                            return null !=
                                                (e = null == (u = _.current) ? void 0 : u.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        E = (e) => {
                                            (i(e), o());
                                        },
                                        F = (e) => {
                                            (i(e), s());
                                        },
                                        m = () => {
                                            ((e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop());
                                        },
                                        C = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = _.current) || t.addEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = _.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        },
                                        B = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = _.current) || t.removeEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = _.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        };
                                    return (
                                        (D.current = {
                                            on: C,
                                            off: B,
                                            play: o,
                                            pause: s,
                                            stop: l,
                                            cleanup: m,
                                            getCurrentTime: a,
                                            getDuration: r,
                                            getCachedKeyframes: c,
                                            goToAndPlay: E,
                                            goToAndStop: F,
                                            setCurrentTime: i,
                                            domRef: _.current,
                                            onChangeTime: t,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            (m(), (D.current = null));
                                        }
                                    );
                                }
                            }, [d, D, A]),
                            (0, r.useEffect)(() => {
                                _.current && o && _.current.play();
                            }, [o, E]),
                            (0, r.useEffect)(() => {
                                if (_.current)
                                    return () => {
                                        _.current && _.current.pause();
                                    };
                            }, []),
                            i().createElement(
                                'video',
                                su({ src: t, className: n, style: l, loop: E, ref: _, onClick: F }, m),
                            )
                        );
                    }),
                    cu = (0, r.memo)(lu),
                    Eu = 'BackgroundVideo_video_9e',
                    Au = ({ className: e, classNames: u, animated: t = !0 }) =>
                        i().createElement(
                            'div',
                            { className: g()('BackgroundVideo_base_4d', e) },
                            ((e) => !!s.O.client.graphicsQuality.isHigh() && e)(t)
                                ? i().createElement(cu, {
                                      className: g()(Eu, null == u ? void 0 : u.video),
                                      src: String(R.videos.comp7.yearly_styles()),
                                      autoplay: !0,
                                      loop: !0,
                                  })
                                : i().createElement('div', {
                                      className: g()(Eu, 'BackgroundVideo_video__bg_4b', null == u ? void 0 : u.video),
                                  }),
                        );
                var du = t(1281);
                let Fu;
                function mu(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(Fu || (Fu = {}));
                const Du = (e) => e.replace(/&nbsp;/g, ' '),
                    _u = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Cu = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Bu = (e, u, t = Fu.left) => e.split(u).reduce(t === Fu.left ? _u : Cu, []),
                    hu = (() => {
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
                    gu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    fu = ({ binding: e, text: u = '', classMix: t, alignment: n = Fu.left, formatWithBrackets: a }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const o = a && e ? ((s = e), u.replace(/\{\w+\}/g, (e) => String(s[e.slice(1, -1)]))) : u;
                        var s;
                        return i().createElement(
                            r.Fragment,
                            null,
                            o.split('\n').map((u, a) =>
                                i().createElement(
                                    'div',
                                    { className: g()('FormatText_base_d0', t), key: `${u}-${a}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            t && e in t
                                                ? t[e]
                                                : ((e, u = Fu.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return gu.includes(t)
                                                          ? hu(e)
                                                          : 'ja' === t
                                                            ? (0, du.D4)()
                                                                  .parse(e)
                                                                  .map((e) => Du(e))
                                                            : ((e, u = Fu.left) => {
                                                                  let t = [];
                                                                  const n =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      a = Du(e);
                                                                  return (
                                                                      Bu(a, /( )/, u).forEach(
                                                                          (e) => (t = t.concat(Bu(e, n, Fu.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(e, u);
                                                  })(e, u),
                                        ))(u, n, e).map((e, u) =>
                                        i().createElement(r.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    pu = {
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
                    vu = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    bu = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    wu = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    xu = (0, r.memo)(({ text: e, binding: u, classMix: t }) => {
                        const n = (0, r.useCallback)((e) => ({ color: `#${e}` }), []),
                            a = (0, r.useMemo)(() => u || {}, [u]);
                        let o = vu.exec(e),
                            s = e,
                            l = 0;
                        for (; o; ) {
                            const t = o[0],
                                r = bu.exec(t),
                                c = wu.exec(t),
                                E = o[1];
                            if (r && c) {
                                const e = r[0],
                                    o = e + l++ + e;
                                ((s = s.replace(t, `%(${o})`)),
                                    (a[o] = pu[e]
                                        ? i().createElement(
                                              'span',
                                              { className: pu[e] },
                                              i().createElement(fu, { text: E, binding: u }),
                                          )
                                        : i().createElement(
                                              'span',
                                              { style: n(e) },
                                              i().createElement(fu, { text: E, binding: u }),
                                          )));
                            }
                            o = vu.exec(e);
                        }
                        return i().createElement(fu, { text: s, classMix: t, binding: a });
                    }),
                    yu = R.strings.comp7_ext,
                    Tu = (e) => ((e, u) => String(e.$dyn(u)))(yu.seasonName, e);
                const Su = [
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
                function Mu(e) {
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
                const Nu = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: J.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Lu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            a = e.onMouseEnter,
                            i = e.onMouseLeave,
                            o = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            A = void 0 !== E && E,
                            d = e.decoratorId,
                            F = void 0 === d ? 0 : d,
                            m = e.isEnabled,
                            D = void 0 === m || m,
                            _ = e.targetId,
                            C = void 0 === _ ? 0 : _,
                            B = e.onShow,
                            h = e.onHide,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Su);
                        const f = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            p = (0, r.useMemo)(
                                () =>
                                    C ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId'),
                                            a = '';
                                        var r;
                                        return (
                                            u &&
                                                ((a =
                                                    (null == (r = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) ||
                                                    ''),
                                                (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { callerUrl: a, caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [C],
                            ),
                            v = (0, r.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (Nu(t, F, { isMouseEvent: !0, on: !0, arguments: Mu(n) }, p),
                                    B && B(),
                                    (f.current.isVisible = !0));
                            }, [t, F, n, p, B]),
                            b = (0, r.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        Nu(t, F, { on: !1 }, p),
                                        f.current.isVisible && h && h(),
                                        (f.current.isVisible = !1));
                                }
                            }, [t, F, p, h]),
                            w = (0, r.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(f.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = f.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === D && b();
                            }, [D, b]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        (window.removeEventListener('mouseleave', b), b());
                                    }
                                ),
                                [b],
                            ),
                            D
                                ? (0, r.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((x = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((f.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          a && a(e),
                                                          x && x(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (b(), null == i || i(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === A && b(), null == s || s(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === A && b(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          g,
                                      ),
                                  )
                                : u
                        );
                        var x;
                    },
                    ku = ['children'];
                function Ru() {
                    return (
                        (Ru =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ru.apply(this, arguments)
                    );
                }
                const Ou = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, ku);
                    return i().createElement(
                        Lu,
                        Ru(
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
                let Pu;
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
                })(Pu || (Pu = {}));
                var Hu = t(8613);
                const Wu = (Date.now(), Hu.Ew.getRegionalDateTime),
                    Iu = Hu.Ew.getFormattedDateTime,
                    Vu = (0, r.memo)(({ datetime: e, format: u = Pu.ShortDate, isConvertedToLocal: t = !0 }) =>
                        Object.values(Pu).includes(u) ? Wu(e, u, t) : Iu(e, u, t),
                    ),
                    $u = R.strings.comp7_ext.season,
                    zu = (e, u, t = Pu.ShortDate) => ({
                        startDate: i().createElement(Vu, { datetime: e, format: t }),
                        endDate: i().createElement(Vu, { datetime: u, format: t }),
                    }),
                    Uu = (e, u, t) => {
                        const n = u - t,
                            a = ((e, u) =>
                                ((e) => {
                                    const u = Math.floor(e);
                                    return {
                                        totalSecondsLeft: u,
                                        seconds: Math.floor(u % 60),
                                        minutes: Math.floor(u / 60) % 60,
                                        hours: Math.floor((u / 3600) % 24),
                                        totalDays: Math.floor(u / 86400),
                                    };
                                })(e - u))(u, t);
                        return n >= 604800
                            ? i().createElement(fu, { text: $u.range(), binding: zu(e, u) })
                            : n >= 86400
                              ? i().createElement(fu, { text: $u.daysLeft(), binding: a })
                              : n >= 3600
                                ? i().createElement(fu, { text: $u.hoursLeft(), binding: a })
                                : n >= 60
                                  ? i().createElement(fu, { text: $u.minutesLeft(), binding: a })
                                  : n >= 1
                                    ? i().createElement(fu, { text: $u.secondsLeft(), binding: a })
                                    : void 0;
                    },
                    Gu = ({
                        startTimestamp: e,
                        endTimestamp: u,
                        currentTimestamp: t,
                        seasonName: n,
                        tooltipId: a = '',
                        hasSeasonName: r = !0,
                        classNames: o,
                    }) =>
                        i().createElement(
                            Ou,
                            { args: { tooltipId: a }, isEnabled: Boolean(a) },
                            i().createElement(
                                'div',
                                { className: 'ActiveSeasonState_base_07' },
                                i().createElement('div', {
                                    className: g()(
                                        'ActiveSeasonState_calendarIcon_ba',
                                        null == o ? void 0 : o.calendarIcon,
                                    ),
                                }),
                                r &&
                                    i().createElement(
                                        i().Fragment,
                                        null,
                                        Tu(n),
                                        i().createElement('div', { className: 'ActiveSeasonState_divider_db' }),
                                    ),
                                Uu(e, u, t),
                            ),
                        ),
                    ju = (0, ae.Pi)(({ className: e, classNames: u, hasSeasonName: t = !0 }) => {
                        const n = j(),
                            a = n.model,
                            o = n.controls,
                            s = a.season.startTimestamp.get(),
                            l = a.season.endTimestamp.get(),
                            c = a.season.serverTimestamp.get(),
                            E = a.season.name.get();
                        return (
                            (function (e, u, t) {
                                ((e, u) => {
                                    const t = (0, r.useRef)(e);
                                    ((t.current = e),
                                        (0, r.useEffect)(() => {
                                            if (void 0 === u) return;
                                            const e = window.setInterval(() => {
                                                t.current();
                                            }, u);
                                            return () => clearInterval(e);
                                        }, [u]));
                                })(
                                    () => {
                                        t();
                                    },
                                    e < u ? 950 : void 0,
                                );
                            })(c, l, o.pollServerTime),
                            i().createElement(
                                'div',
                                { className: g()('ScheduleSubheading_base_a5', e) },
                                c < l
                                    ? i().createElement(
                                          'div',
                                          { className: null == u ? void 0 : u.activeSeasonState },
                                          i().createElement(Gu, {
                                              startTimestamp: s,
                                              endTimestamp: l,
                                              currentTimestamp: c,
                                              seasonName: E,
                                              tooltipId: a.root.get().tooltipId,
                                              hasSeasonName: t,
                                              classNames: null == u ? void 0 : u.scheduleClassNames,
                                          }),
                                      )
                                    : i().createElement(xu, {
                                          text: R.strings.comp7_ext.season.over(),
                                          binding: { seasonName: Tu(E) },
                                      }),
                            )
                        );
                    }),
                    Ku = 'typography_h2_43',
                    qu = 'typography_h3_6f',
                    Yu = 'typography_paragraphText_3f',
                    Xu = 'Banner_h3_7e',
                    Zu = (0, ae.Pi)(() => {
                        const e = ce().controls;
                        return i().createElement(
                            'div',
                            { className: 'WatchVideo_base_19', onClick: e.openVideo },
                            i().createElement('div', { className: 'WatchVideo_backdrop_e8' }),
                            i().createElement('div', { className: 'WatchVideo_videoButton_8b' }),
                            i().createElement(
                                'div',
                                { className: 'WatchVideo_text_18' },
                                R.strings.comp7_ext.whatsNewView.watchVideo(),
                            ),
                        );
                    }),
                    Qu = R.strings.comp7_ext.whatsNewView,
                    Ju = () =>
                        i().createElement(
                            'div',
                            { className: 'Banner_base_d8' },
                            i().createElement('div', { className: g()(qu, Xu) }, Qu.banner.title.small()),
                            i().createElement('div', { className: 'typography_h1_f3' }, Qu.banner.title.large()),
                            i().createElement(ju, { hasSeasonName: !1, className: 'Banner_date_ab' }),
                            i().createElement(
                                'div',
                                { className: 'Banner_introDescription_4a' },
                                i().createElement(fu, { classMix: g()(qu, Xu), text: Qu.intro.heading() }),
                                i().createElement(fu, {
                                    classMix: g()(Yu, 'Banner_seasonText_42'),
                                    text: Qu.intro.description(),
                                }),
                            ),
                            i().createElement(Zu, null),
                        ),
                    et = {
                        '--pageContentWidth': '78vw',
                        base: 'Main_base_f9',
                        areaBaseWrapper: 'Main_areaBaseWrapper_42',
                        videoContainer: 'Main_videoContainer_6c',
                        content: 'Main_content_95',
                        content__first: 'Main_content__first_13',
                        content__second: 'Main_content__second_bb',
                        content__third: 'Main_content__third_3a',
                        scrollBar: 'Main_scrollBar_d6',
                        banner: 'Main_banner_fb',
                        section: 'Main_section_15',
                        button: 'Main_button_e9',
                        slideUpIn: 'Main_slideUpIn_d2',
                        container__1: 'Main_container__1_4d',
                        container__2: 'Main_container__2_7d',
                        container__3: 'Main_container__3_fc',
                        container__4: 'Main_container__4_30',
                        container__5: 'Main_container__5_96',
                        wrapper: 'Main_wrapper_4d',
                        fadeIn: 'Main_fadeIn_c7',
                        fadeInThreeQuarters: 'Main_fadeInThreeQuarters_f6',
                        fadeInHalf: 'Main_fadeInHalf_c4',
                        fadeOut: 'Main_fadeOut_1f',
                        fadeInWithScale: 'Main_fadeInWithScale_ee',
                        slideUp: 'Main_slideUp_0f',
                        scale: 'Main_scale_44',
                        raysAppearance: 'Main_raysAppearance_37',
                        rotate: 'Main_rotate_d0',
                        'reverse-rotate': 'Main_reverse-rotate_f3',
                        glowAppearance: 'Main_glowAppearance_ff',
                        highlightAppearance: 'Main_highlightAppearance_f7',
                        blink: 'Main_blink_57',
                    },
                    ut = [
                        { name: '35_steppes', tag: 'new' },
                        { name: '127_japort', tag: 'new' },
                        { name: '31_airfield', stamp: 'underDevelopment' },
                    ],
                    tt = [
                        { name: 'comp7_hunter', state: 'improve' },
                        { name: 'comp7_sure_shot', state: 'improve' },
                        { name: 'comp7_fast_recharge', state: 'decrease' },
                        { name: 'comp7_risky_attack', state: 'decrease' },
                        { name: 'comp7_recon', state: 'decrease' },
                    ],
                    nt = {
                        base: 'Tag_base_c7',
                        base__new: 'Tag_base__new_c0',
                        base__changed: 'Tag_base__changed_89',
                        base__seasonUpdate: 'Tag_base__seasonUpdate_de',
                        base__revamped: 'Tag_base__revamped_43',
                        base__returned: 'Tag_base__returned_ec',
                    },
                    at = ({ type: e, className: u }) =>
                        i().createElement(
                            'div',
                            { className: g()(nt.base, nt[`base__${e}`], u) },
                            R.strings.comp7_ext.whatsNewView.tag.$dyn(e),
                        ),
                    rt = {
                        base: 'Map_base_64',
                        gradient: 'Map_gradient_9b',
                        content: 'Map_content_d7',
                        nameContainer: 'Map_nameContainer_c5',
                        name: 'Map_name_f0',
                        stamp: 'Map_stamp_f7',
                        stamp__removed: 'Map_stamp__removed_21',
                        stamp__underDevelopment: 'Map_stamp__underDevelopment_d9',
                    },
                    it = ({ name: e, index: u, tag: t, stamp: n }) => {
                        const a = R.images.comp7.gui.maps.icons.whatsNewView.arenas.$dyn(`c_${u}`),
                            r = R.strings.arenas.$dyn(`c_${e}`);
                        return i().createElement(
                            'div',
                            { className: rt.base, style: { backgroundImage: `url(${a})` } },
                            i().createElement('div', { className: rt.gradient }),
                            n &&
                                i().createElement(
                                    'div',
                                    { className: g()(rt.stamp, rt[`stamp__${n}`]) },
                                    R.strings.comp7_ext.whatsNewView.stamp.$dyn(n),
                                ),
                            i().createElement(
                                'div',
                                { className: rt.content },
                                t && i().createElement(at, { type: t }),
                                i().createElement(
                                    'div',
                                    { className: rt.nameContainer },
                                    i().createElement('div', { className: rt.name }, r.$dyn('name')),
                                ),
                            ),
                        );
                    },
                    ot = { header: 'MapChanges_header_35', legend: 'MapChanges_legend_f2' },
                    st = R.strings.comp7_ext.whatsNewView.mapChanges,
                    lt = () =>
                        i().createElement(
                            'div',
                            { className: ot.base },
                            i().createElement(
                                'div',
                                { className: g()(nu, ot.header) },
                                i().createElement('div', { className: Ku }, st.heading()),
                                i().createElement(at, { type: 'seasonUpdate' }),
                            ),
                            i().createElement(
                                'div',
                                { className: au },
                                ut.map(({ name: e, tag: u, stamp: t }, n) =>
                                    i().createElement(
                                        'div',
                                        { className: ru, key: e },
                                        i().createElement(it, { name: e, tag: u, stamp: t, index: n }),
                                    ),
                                ),
                            ),
                        ),
                    ct = ({ name: e, state: u, className: t }) =>
                        i().createElement(
                            'div',
                            {
                                className: g()('Skill_base_6a', t),
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_128x128.$dyn(e)})`,
                                },
                            },
                            i().createElement('div', {
                                className: 'Skill_state_7f',
                                style: {
                                    backgroundImage: `url(${R.images.comp7.gui.maps.icons.whatsNewView.$dyn(`arrow_${u}`)})`,
                                },
                            }),
                        ),
                    Et = R.strings.comp7_ext.whatsNewView.roleSkills,
                    At = () =>
                        i().createElement(
                            'div',
                            { className: 'RoleSkills_base_de' },
                            i().createElement(
                                'div',
                                { className: g()(nu, 'RoleSkills_header_cc') },
                                i().createElement('div', { className: Ku }, Et.heading()),
                                i().createElement(at, { type: 'seasonUpdate' }),
                            ),
                            i().createElement(
                                'div',
                                { className: g()(Yu, 'RoleSkills_description_f2') },
                                Et.description(),
                            ),
                            i().createElement(
                                'div',
                                { className: g()(au, 'RoleSkills_row_86') },
                                tt.map(({ name: e, state: u }, t) =>
                                    i().createElement(ct, {
                                        name: e,
                                        state: u,
                                        key: t,
                                        className: g()(
                                            'RoleSkills_skill_92',
                                            5 === t && 'RoleSkills_skill__aligned_06',
                                        ),
                                    }),
                                ),
                            ),
                        );
                var dt = t(9690);
                const Ft = {
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
                let mt;
                !(function (e) {
                    ((e.x24 = '24x24'),
                        (e.x24Metal = '24x24_metal'),
                        (e.x48 = '48x48'),
                        (e.x60 = '60x54'),
                        (e.x64 = '64x64'),
                        (e.x80 = '80x80'),
                        (e.x83 = '83x74'),
                        (e.x180 = '180x135'));
                })(mt || (mt = {}));
                const Dt = R.images.gui.maps.icons.vehicleTypes,
                    _t = (e) => {
                        switch (e) {
                            case mt.x80:
                                return Dt.large;
                            case mt.x83:
                                return Dt.big;
                            case mt.x180:
                                return Dt.huge;
                            default:
                                return Dt.$dyn(`c_${e}`);
                        }
                    },
                    Ct = (0, r.memo)(
                        ({
                            name: e,
                            tier: u,
                            type: t,
                            size: n = mt.x24Metal,
                            typeIconFolderPath: a = _t(n),
                            isPremium: r = !1,
                            className: o,
                            classNames: s,
                        }) => {
                            const l = `${mu(t)}${r ? '_elite' : ''}`;
                            return i().createElement(
                                'div',
                                { className: g()(Ft.base, Ft[`base__${n}`], o) },
                                i().createElement('div', { className: null == s ? void 0 : s.level }, (0, dt.HG)(u)),
                                i().createElement(
                                    'div',
                                    {
                                        className: g()(
                                            Ft.vehicleTypeContainer,
                                            null == s ? void 0 : s.vehicleTypeContainer,
                                        ),
                                    },
                                    i().createElement('div', {
                                        className: g()(Ft.vehicleType, null == s ? void 0 : s.type),
                                        style: { backgroundImage: `url(${null == a ? void 0 : a.$dyn(l)})` },
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: g()(Ft.shortName, null == s ? void 0 : s.shortName) },
                                    e,
                                ),
                            );
                        },
                    ),
                    Bt = {
                        base: 'VehicleRole_base_47',
                        base__22x22: 'VehicleRole_base__22x22_59',
                        iconContainer: 'VehicleRole_iconContainer_07',
                        icon: 'VehicleRole_icon_f1',
                    };
                let ht;
                !(function (e) {
                    e.x22 = '22x22';
                })(ht || (ht = {}));
                const gt = R.images.gui.maps.icons.roleExp.roles,
                    ft = R.strings.menu.roleExp,
                    pt = (0, r.memo)(
                        ({
                            role: e,
                            size: u = ht.x22,
                            roleIconFolderPath: t = gt.$dyn(`c_${u}`),
                            className: n,
                            classNames: a,
                        }) => {
                            const r = mu(e);
                            return i().createElement(
                                'div',
                                { className: g()(Bt.base, Bt[`base__${u}`], n) },
                                i().createElement(
                                    'div',
                                    { className: g()(Bt.iconContainer, null == a ? void 0 : a.iconContainer) },
                                    i().createElement('div', {
                                        className: g()(Bt.icon, null == a ? void 0 : a.icon),
                                        style: { backgroundImage: `url(${null == t ? void 0 : t.$dyn(r)})` },
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: g()(Bt.label, null == a ? void 0 : a.label) },
                                    i().createElement(fu, {
                                        text: `${ft.roleName.$dyn(r)}`,
                                        binding: { groupName: ft.roleGroupName.$dyn(r) },
                                    }),
                                ),
                            );
                        },
                    ),
                    vt = 'Vehicle_typeIcon_42',
                    bt = 'Vehicle_type_4d',
                    wt = {
                        type: g()(vt, bt),
                        vehicleTypeContainer: g()(vt, bt),
                        shortName: 'Vehicle_shortName_6f',
                        level: 'Vehicle_level_a2',
                    },
                    xt = (0, ae.Pi)(({ index: e }) => {
                        const u = ce().model.computes.vehicle(e);
                        return i().createElement(
                            'div',
                            {
                                className: 'Vehicle_base_e0',
                                style: {
                                    backgroundImage: `url(${R.images.comp7.gui.maps.icons.whatsNewView.vehiclesForRent.$num(u.vehicleCD)})`,
                                },
                            },
                            i().createElement('div', { className: 'Vehicle_gradient_01' }),
                            i().createElement(
                                'div',
                                { className: 'Vehicle_details_13' },
                                i().createElement(
                                    Ou,
                                    { args: { vehicleCD: u.vehicleCD, tooltipId: 'shopVehicle' } },
                                    i().createElement(
                                        'div',
                                        null,
                                        i().createElement(Ct, {
                                            name: u.name,
                                            tier: u.tier,
                                            type: u.type,
                                            isPremium: u.isPremium,
                                            className: 'Vehicle_vehicleName_6f',
                                            classNames: wt,
                                            typeIconFolderPath: R.images.comp7.gui.maps.icons.whatsNewView.vehicleTypes,
                                        }),
                                    ),
                                ),
                                i().createElement(
                                    Lu,
                                    {
                                        contentId: R.views.lobby.ranked.tooltips.RankedBattlesRolesTooltipView('resId'),
                                        args: { vehicleCD: u.vehicleCD },
                                    },
                                    i().createElement(
                                        'div',
                                        null,
                                        i().createElement(pt, { role: u.roleKey, className: 'Vehicle_vehicleRole_df' }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    yt = { header: 'VehiclesForRent_header_1d' },
                    Tt = (0, ae.Pi)(() => {
                        const e = ce().model;
                        return i().createElement(
                            'div',
                            { className: yt.container },
                            i().createElement(
                                'div',
                                { className: g()(nu, yt.header) },
                                i().createElement(
                                    'div',
                                    { className: Ku },
                                    R.strings.comp7_ext.whatsNewView.vehiclesForRent.heading(),
                                ),
                                i().createElement(at, { type: 'seasonUpdate' }),
                            ),
                            i().createElement(
                                'div',
                                { className: au },
                                ((e, u) => {
                                    const t = [];
                                    for (let n = 0; n < e; n++) t.push(u(n));
                                    return t;
                                })(e.vehicles.get().length, (e) =>
                                    i().createElement(
                                        'div',
                                        { className: ru, key: e },
                                        i().createElement(xt, { index: e }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    St = { base: et.scrollBar },
                    Mt = (0, ae.Pi)(() => {
                        const e = ce().controls,
                            u = j().model.season.name.get(),
                            t = ze();
                        return i().createElement(
                            uu.Vertical.Default,
                            { className: et.base, barClassNames: St, scrollClassName: et.areaBaseWrapper, api: t },
                            u === me.Third && i().createElement(Au, { className: et.videoContainer }),
                            i().createElement(
                                'div',
                                { className: g()(et.content, et[`content__${u}`]) },
                                i().createElement(
                                    'div',
                                    { className: g()(tu, et.banner, et.container__1) },
                                    i().createElement(Ju, null),
                                ),
                                i().createElement(
                                    'div',
                                    { className: g()(tu, et.section, et.container__2) },
                                    i().createElement(At, null),
                                ),
                                i().createElement(
                                    'div',
                                    { className: g()(tu, et.section, et.container__3) },
                                    i().createElement(lt, null),
                                ),
                                i().createElement(
                                    'div',
                                    { className: g()(tu, et.container__4) },
                                    i().createElement(Tt, null),
                                ),
                                i().createElement(
                                    fe,
                                    { mixClass: et.button, onClick: e.close },
                                    R.strings.comp7_ext.whatsNewView.button.ok(),
                                ),
                            ),
                        );
                    }),
                    Nt = (0, ae.Pi)(() => {
                        const e = ce().controls,
                            u = j().model.season.name.get(),
                            t = (0, re.useSpring)(ie),
                            n = ((e) => {
                                const u = (0, r.useState)('pending'),
                                    t = u[0],
                                    n = u[1];
                                return (
                                    (0, r.useLayoutEffect)(() => {
                                        let u = 0,
                                            t = 0;
                                        const a = () => {
                                            u + t === e.length && n(0 === u ? 'success' : 'error');
                                        };
                                        e.forEach((e) => {
                                            const n = new Image();
                                            ((n.src = e),
                                                n.addEventListener('load', () => {
                                                    (t++, a());
                                                }),
                                                n.addEventListener('error', () => {
                                                    (u++, a());
                                                }));
                                        });
                                    }, [e]),
                                    t
                                );
                            })(
                                ((e) => [
                                    R.images.comp7.gui.maps.icons.whatsNewView.backdrop(),
                                    String(R.images.comp7.gui.maps.icons.whatsNewView.$dyn(`bg_${e}`)),
                                ])(u),
                            );
                        return i().createElement(
                            'div',
                            { className: 'App_base_b0' },
                            'success' === n
                                ? i().createElement(
                                      re.animated.div,
                                      { className: 'App_container_14', style: t },
                                      i().createElement(Mt, null),
                                      i().createElement(ne, { onClose: e.close }),
                                  )
                                : i().createElement(Ae, { onClose: e.close, className: 'App_waiting_35' }),
                        );
                    }),
                    Lt = { context: 'model.scheduleInfo' };
                engine.whenReady.then(() => {
                    P().render(
                        i().createElement(
                            le,
                            null,
                            i().createElement(
                                k,
                                null,
                                i().createElement(G, { options: Lt }, i().createElement(Nt, null)),
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
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], r = !0, i = 0; i < u.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
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
        (__webpack_require__.j = 'lobby/WhatsNewView/WhatsNewView'),
        (() => {
            var e = { 'lobby/WhatsNewView/WhatsNewView': 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < r.length; s++)
                        ((a = r[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/comp7.vendors'], () => __webpack_require__(3634));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
