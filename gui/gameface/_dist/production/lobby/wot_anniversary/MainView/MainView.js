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
                    t.d(u, { mouse: () => c, off: () => s, on: () => i, onResize: () => r, onScaleUpdated: () => o }));
                var n = t(472),
                    a = t(176);
                const r = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    s = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
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
                                        o = l[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        n(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(r, i),
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
            959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => r,
                        graphicsQuality: () => i,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = t(527),
                    a = t(493);
                function r(e = 'px') {
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
            176: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            493: (e, u, t) => {
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
            472: (e, u, t) => {
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
            138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var n = t(959),
                    a = t(514);
                const r = { view: t(641), client: n, sound: a.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => o });
                var n = t(959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    o = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => a });
                var n = t(472);
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
            641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => s,
                        arabic2roman: () => w,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => x,
                        events: () => o.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => f,
                        getFontNames: () => y,
                        getScale: () => D,
                        getSize: () => _,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => v,
                        isFocused: () => C,
                        pxToRem: () => p,
                        remToPx: () => g,
                        resize: () => A,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => T,
                    }));
                var n = t(690),
                    a = t(722),
                    r = t(112),
                    o = t(538),
                    i = t(566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function d(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function m(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: g(u.x), y: g(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function B() {
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
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    w = n.cg,
                    x = Object.keys(r.W).reduce(
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
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    o = 32,
                    i = 64,
                    s = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                o = (function (e, u) {
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
                                      Object.assign({ __Type: t, type: e }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? a : o);
                        },
                        minimize() {
                            s(i);
                        },
                        move(e) {
                            s(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            521: (e, u, t) => {
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
            690: (e, u, t) => {
                'use strict';
                t.d(u, { cg: () => r });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let u = '';
                    for (let t = a.length - 1; t >= 0; t--) for (; e >= a[t];) ((u += n[t]), (e -= a[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(138);
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
                t.d(u, { Sw: () => r.Z, B0: () => i, ry: () => D });
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
                var r = t(358);
                var o = t(613);
                let i;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(i || (i = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(521),
                    _ = t(138);
                const A = ['args'];
                function m(e, u, t, n, a, r, o) {
                    try {
                        var i = e[r](o),
                            s = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(s) : Promise.resolve(s).then(n, a);
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(u, t);
                                        function o(e) {
                                            m(r, n, a, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            m(r, n, a, o, i, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    p = (e, u) => {
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
                                })(u, A);
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
                    g = () => p(i.CLOSE),
                    h = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var C = t(572);
                const B = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: C.Z,
                        ViewEventType: i,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => p(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => p(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const o = _.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                d = s.width,
                                E = s.height,
                                A = {
                                    x: _.O.view.pxToRem(l) + o.x,
                                    y: _.O.view.pxToRem(c) + o.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(E),
                                };
                            p(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: F(A),
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
                            h(e, g);
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
                        ClickOutsideManager: B,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = v;
            },
            613: (e, u, t) => {
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
            590: (e, u, t) => {
                'use strict';
                var n = t(363),
                    a = t.n(n);
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
                var o = t(138);
                const i = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
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
                })(s || (s = {}));
                const c = o.O.client.getSize('rem'),
                    d = c.width,
                    E = c.height,
                    _ = Object.assign({ width: d, height: E }, l(d, E, i)),
                    A = (0, n.createContext)(_),
                    m = ['children'];
                const F = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, m);
                    const a = (0, n.useContext)(A),
                        o = a.extraLarge,
                        i = a.large,
                        s = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        d = a.extraLargeWidth,
                        E = a.largeWidth,
                        _ = a.mediumWidth,
                        F = a.smallWidth,
                        D = a.extraSmallWidth,
                        p = a.extraLargeHeight,
                        g = a.largeHeight,
                        h = a.mediumHeight,
                        C = a.smallHeight,
                        B = a.extraSmallHeight,
                        v = { extraLarge: p, large: g, medium: h, small: C, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && i) return u;
                        if (t.medium && s) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return r(u, t, v);
                        if (t.largeWidth && E) return r(u, t, v);
                        if (t.mediumWidth && _) return r(u, t, v);
                        if (t.smallWidth && F) return r(u, t, v);
                        if (t.extraSmallWidth && D) return r(u, t, v);
                        if (!(
                            t.extraLargeWidth ||
                            t.largeWidth ||
                            t.mediumWidth ||
                            t.smallWidth ||
                            t.extraSmallWidth
                        )) {
                            if (t.extraLargeHeight && p) return u;
                            if (t.largeHeight && g) return u;
                            if (t.mediumHeight && h) return u;
                            if (t.smallHeight && C) return u;
                            if (t.extraSmallHeight && B) return u;
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
                const D = (e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    p = ({ children: e }) => {
                        const u = (0, n.useContext)(A),
                            t = (0, n.useState)(u),
                            r = t[0],
                            s = t[1],
                            c = (0, n.useCallback)((e, u) => {
                                const t = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(u);
                                s(Object.assign({ width: t, height: n }, l(t, n, i)));
                            }, []),
                            d = (0, n.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                c(e.width, e.height);
                            }, [c]);
                        (D(() => {
                            (o.O.client.events.on('clientResized', c), o.O.client.events.on('self.onScaleUpdated', d));
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    (o.O.client.events.off('clientResized', c),
                                        o.O.client.events.off('self.onScaleUpdated', d));
                                },
                                [c, d],
                            ));
                        const E = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                        return a().createElement(A.Provider, { value: E }, e);
                    };
                var g = t(483),
                    h = t.n(g),
                    C = t(926),
                    B = t.n(C);
                let v, b, f;
                (!(function (e) {
                    ((e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.small.width)] = 'Small'),
                        (e[(e.Medium = i.medium.width)] = 'Medium'),
                        (e[(e.Large = i.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'));
                })(v || (v = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.width)] = 'Small'),
                            (e[(e.Medium = i.medium.width)] = 'Medium'),
                            (e[(e.Large = i.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'));
                    })(b || (b = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.height)] = 'Small'),
                            (e[(e.Medium = i.medium.height)] = 'Medium'),
                            (e[(e.Large = i.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge'));
                    })(f || (f = {})));
                const y = () => {
                        const e = (0, n.useContext)(A),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
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
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
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
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return f.ExtraLarge;
                                    case e.largeHeight:
                                        return f.Large;
                                    case e.mediumHeight:
                                        return f.Medium;
                                    case e.smallHeight:
                                        return f.Small;
                                    case e.extraSmallHeight:
                                        return f.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), f.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    w = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const S = {
                        [b.ExtraSmall]: '',
                        [b.Small]: B().SMALL_WIDTH,
                        [b.Medium]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH}`,
                        [b.Large]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH} ${B().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [f.ExtraSmall]: '',
                        [f.Small]: B().SMALL_HEIGHT,
                        [f.Medium]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT}`,
                        [f.Large]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT}`,
                        [f.ExtraLarge]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT} ${B().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [v.ExtraSmall]: '',
                        [v.Small]: B().SMALL,
                        [v.Medium]: `${B().SMALL} ${B().MEDIUM}`,
                        [v.Large]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE}`,
                        [v.ExtraLarge]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE} ${B().EXTRA_LARGE}`,
                    },
                    O = (e) => {
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
                            })(e, w);
                        const r = y(),
                            o = r.mediaWidth,
                            i = r.mediaHeight,
                            s = r.mediaSize;
                        return a().createElement('div', x({ className: h()(t, S[o], T[i], k[s]) }, n), u);
                    },
                    L = ['children'];
                const I = (e) => {
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
                    return a().createElement(p, null, a().createElement(O, t, u));
                };
                var M = t(533),
                    N = t.n(M);
                function P(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const H = {
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
                    W = [
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
                        ($ =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        $.apply(this, arguments)
                    );
                }
                class j extends a().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && P(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && P(this.props.soundClick));
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
                            o = e.type,
                            i = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            E =
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
                                })(e, W)),
                            _ = h()(H.base, H[`base__${o}`], H[`base__${r}`], null == i ? void 0 : i.base),
                            A = h()(H.icon, H[`icon__${o}`], H[`icon__${r}`], null == i ? void 0 : i.icon),
                            m = h()(H.glow, null == i ? void 0 : i.glow),
                            F = h()(H.caption, H[`caption__${o}`], null == i ? void 0 : i.caption),
                            D = h()(H.goto, null == i ? void 0 : i.goto);
                        return a().createElement(
                            'div',
                            $(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== o && a().createElement('div', { className: H.shine }),
                            a().createElement('div', { className: A }, a().createElement('div', { className: m })),
                            a().createElement('div', { className: F }, u),
                            n && a().createElement('div', { className: D }, n),
                        );
                    }
                }
                j.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const U = (e) => {
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
                };
                var G = t(112);
                function V() {}
                function z(e) {
                    return e;
                }
                function K() {
                    return !1;
                }
                console.log;
                const q = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    Y = (e) => {
                        (0, n.useEffect)(() => e, []);
                    },
                    X = [
                        'src',
                        'className',
                        'autoplay',
                        'style',
                        'loop',
                        'isPrebufferKeyframes',
                        'keyframesNameConfig',
                        'onClick',
                    ];
                function Q() {
                    return (
                        (Q =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Q.apply(this, arguments)
                    );
                }
                const Z = (0, n.forwardRef)(function (e, u) {
                        let t = e.src,
                            r = e.className,
                            i = e.autoplay,
                            s = void 0 !== i && i,
                            l = e.style,
                            c = e.loop,
                            d = void 0 !== c && c,
                            E = e.isPrebufferKeyframes,
                            _ = e.keyframesNameConfig,
                            A = e.onClick,
                            m = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, X);
                        const F = u,
                            D = (0, n.useRef)(null);
                        return (
                            q(() =>
                                o.O.view.events.onDisplayChanged((e, u) => {
                                    var t, n;
                                    u === G.W.hidden && (null == (t = D.current) || t.pause());
                                    u === G.W.shown && (null == (n = D.current) || n.play());
                                }),
                            ),
                            (0, n.useEffect)(
                                () =>
                                    U(() => {
                                        const e = D.current;
                                        if (!F || !e || !E)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const u = e.cohGetKeyframeTimestamps();
                                        u.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              u.map((u) => {
                                                  null == e || e.cohPrebufferKeyframe(u);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [E, F],
                            ),
                            (0, n.useEffect)(() => {
                                if (F && D.current) {
                                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: V },
                                        u = () => {
                                            let u = 0;
                                            const t = (function (e) {
                                                    let u = 0;
                                                    return [
                                                        function t() {
                                                            (e(), (u = requestAnimationFrame(t)));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(u);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (D.current) {
                                                        const t = D.current,
                                                            n = t.currentTime,
                                                            a = t.duration;
                                                        if (
                                                            (u !== n &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: n, duration: a }),
                                                                ),
                                                                (u = n)),
                                                            D.current.paused || !F || !E)
                                                        )
                                                            return;
                                                        const r = D.current.cohGetKeyframeTimestamps();
                                                        r.forEach((u, t) => {
                                                            n > r[t] - 0.02 &&
                                                                n < r[t] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const n = Object.keys(null != _ ? _ : {})[t];
                                                                    return e({
                                                                        time: u,
                                                                        name: `${_ ? n : `Point_${t}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
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
                                            return null == (e = D.current) ? void 0 : e.currentTime;
                                        },
                                        r = () => {
                                            var e;
                                            return null == (e = D.current) ? void 0 : e.duration;
                                        },
                                        o = (e) => {
                                            var u, t, n;
                                            D.current &&
                                                (D.current.currentTime =
                                                    ((u = 0),
                                                    (t = D.current.duration),
                                                    (n = e) < u ? u : n > t ? t : n));
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = D.current) ? void 0 : e.play();
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = D.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            (s(), o(0));
                                        },
                                        c = () => {
                                            var e, u;
                                            return null !=
                                                (e = null == (u = D.current) ? void 0 : u.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        d = (e) => {
                                            (o(e), i());
                                        },
                                        A = (e) => {
                                            (o(e), s());
                                        },
                                        m = () => {
                                            ((e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop());
                                        },
                                        p = (e, u) => {
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
                                        g = (e, u) => {
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
                                            on: p,
                                            off: g,
                                            play: i,
                                            pause: s,
                                            stop: l,
                                            cleanup: m,
                                            getCurrentTime: a,
                                            getDuration: r,
                                            getCachedKeyframes: c,
                                            goToAndPlay: d,
                                            goToAndStop: A,
                                            setCurrentTime: o,
                                            domRef: D.current,
                                            onChangeTime: t,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            (m(), (F.current = null));
                                        }
                                    );
                                }
                            }, [_, F, E]),
                            (0, n.useEffect)(() => {
                                D.current && s && D.current.play();
                            }, [s, d]),
                            (0, n.useEffect)(() => {
                                if (D.current)
                                    return () => {
                                        D.current && D.current.pause();
                                    };
                            }, []),
                            a().createElement(
                                'video',
                                Q({ src: t, className: r, style: l, loop: d, ref: D, onClick: A }, m),
                            )
                        );
                    }),
                    J = (0, n.memo)(Z);
                var ee = t(521),
                    ue = t(916);
                const te = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ne(e = ee.n.NONE, u = te, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== ee.n.NONE)
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
                var ae = t(174),
                    re = t(403);
                const oe = {
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
                let ie, se;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(ie || (ie = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(se || (se = {})));
                const le = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: o,
                    mixClass: i,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: E,
                    onMouseUp: _,
                    onMouseLeave: A,
                    onClick: m,
                }) => {
                    const F = (0, n.useRef)(null),
                        D = (0, n.useState)(t),
                        p = D[0],
                        g = D[1],
                        C = (0, n.useState)(!1),
                        B = C[0],
                        v = C[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                p && null !== F.current && !F.current.contains(e.target) && g(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [p]),
                        (0, n.useEffect)(() => {
                            g(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: F,
                                className: h()(
                                    oe.base,
                                    oe[`base__${r}`],
                                    o && oe.base__disabled,
                                    u && oe[`base__${u}`],
                                    p && oe.base__focus,
                                    B && oe.base__highlightActive,
                                    i,
                                ),
                                onMouseEnter: function (e) {
                                    o || (null !== s && P(s), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    o || (_ && _(e), v(!1));
                                },
                                onMouseDown: function (e) {
                                    o ||
                                        (null !== l && P(l),
                                        E && E(e),
                                        t && (o || (F.current && (F.current.focus(), g(!0)))),
                                        v(!0));
                                },
                                onMouseLeave: function (e) {
                                    o || (A && A(e), v(!1));
                                },
                                onClick: function (e) {
                                    o || (m && m(e));
                                },
                            },
                            r !== ie.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: oe.back }),
                                    a().createElement('span', { className: oe.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: h()(oe.state, oe.state__default) },
                                a().createElement('span', { className: oe.stateDisabled }),
                                a().createElement('span', { className: oe.stateHighlightHover }),
                                a().createElement('span', { className: oe.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: oe.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                le.defaultProps = { type: ie.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const ce = le,
                    de =
                        (e, u) =>
                        (...t) => {
                            if (e(...t)) return u(...t);
                        };
                let Ee;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(Ee || (Ee = {}));
                const _e = {
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
                    Ae = [
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
                function me() {
                    return (
                        (me =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        me.apply(this, arguments)
                    );
                }
                const Fe = (e) => {
                    let u = e.type,
                        t = e.children,
                        r = e.className,
                        o = e.classNames,
                        i = e.disabled,
                        s = void 0 !== i && i,
                        l = e.isVisibleLabel,
                        c = void 0 !== l && l,
                        d = e.soundHover,
                        E = void 0 === d ? R.sounds.highlight() : d,
                        _ = e.soundClick,
                        A = void 0 === _ ? R.sounds.play() : _,
                        m = e.size,
                        F = void 0 === m ? 'normal' : m,
                        D = e.onClick,
                        p = e.onMouseEnter,
                        g = e.onMouseLeave,
                        C = e.onMouseDown,
                        B = e.onMouseUp,
                        v = e.onFocus,
                        b = e.onBlur,
                        f = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, Ae);
                    const y = (0, n.useState)(!1),
                        w = y[0],
                        x = y[1],
                        S = (0, n.useState)(!1),
                        T = S[0],
                        k = S[1],
                        O = (0, n.useRef)(null),
                        L = () => !1 === s,
                        I = (e) => L() && ((e) => e.button === Ee.LEFT)(e),
                        M = de(L, (e) => {
                            null == D || D(e);
                        }),
                        N = de(I, (e) => {
                            (x(!0), null == C || C(e), A && P(A));
                        }),
                        H = de(I, (e) => {
                            (x(!1), null == B || B(e));
                        }),
                        W = de(L, (e) => {
                            (k(!0), null == p || p(e), E && P(E));
                        }),
                        $ = de(L, (e) => {
                            null == v || v(e);
                        }),
                        j = de(L, (e) => {
                            null == b || b(e);
                        });
                    return a().createElement(
                        'div',
                        me(
                            {
                                ref: O,
                                className: h()(
                                    _e.base,
                                    s && _e.base__disabled,
                                    c && _e.base__visibleLabel,
                                    !s && w && _e.base__mouseDown,
                                    !s && T && _e.base__hovered,
                                    r,
                                ),
                                onClick: M,
                                onMouseEnter: W,
                                onMouseLeave: (e) => {
                                    (k(!1), x(!1), null == g || g(e));
                                },
                                onMouseDown: N,
                                onMouseUp: H,
                                onFocus: $,
                                onBlur: j,
                            },
                            f,
                        ),
                        a().createElement('div', {
                            className: h()(_e.icon, _e[`icon__${F}`], _e[`icon__${u}`], null == o ? void 0 : o.icon),
                        }),
                        t &&
                            a().createElement(
                                'div',
                                { className: h()(_e.label, _e[`label__${F}`], null == o ? void 0 : o.label) },
                                t,
                            ),
                    );
                };
                let De;
                !(function (e) {
                    ((e.IMAGE = 'image'), (e.VIDEO = 'video'));
                })(De || (De = {}));
                var pe = t(281);
                let ge;
                function he(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(ge || (ge = {}));
                const Ce = (e) => e.replace(/&nbsp;/g, ' '),
                    Be = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    ve = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    be = (e, u, t = ge.left) => e.split(u).reduce(t === ge.left ? Be : ve, []),
                    fe = (() => {
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
                    ye = ['zh_cn', 'zh_sg', 'zh_tw'],
                    we = (e, u = ge.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (ye.includes(t)) return fe(e);
                        if ('ja' === t) {
                            return (0, pe.D4)()
                                .parse(e)
                                .map((e) => Ce(e));
                        }
                        return ((e, u = ge.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = Ce(e);
                            return (be(a, /( )/, u).forEach((e) => (t = t.concat(be(e, n, ge.left)))), t);
                        })(e, u);
                    },
                    xe = 'FormatText_base_d0',
                    Se = ({ binding: e, text: u = '', classMix: t, alignment: r = ge.left, formatWithBrackets: o }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const i = o && e ? he(u, e) : u;
                        return a().createElement(
                            n.Fragment,
                            null,
                            i.split('\n').map((u, o) =>
                                a().createElement(
                                    'div',
                                    { className: h()(xe, t), key: `${u}-${o}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : we(e, u))))(
                                        u,
                                        r,
                                        e,
                                    ).map((e, u) => a().createElement(n.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    };
                function Te(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return ke(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return ke(e, u);
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
                function ke(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const Oe = (e) => (0 === e ? window : window.subViews.get(e));
                const Le = () => (e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: i, children: s, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    d = (t, n, a) => {
                                        var r;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Oe,
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
                                                        const s = 'string' == typeof r ? `${n}.${r}` : n,
                                                            l = o.O.view.addModelObserver(s, u, !0);
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
                                                        for (var e, t = Te(a.keys()); !(e = t()).done;) r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            s =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(e)) : s.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = ae.LO.box(n, { equals: K });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, ae.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = ae.LO.box(n, { equals: K });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, ae.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, u) => ((e[u] = ae.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, ae.aD)((u) => {
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
                                                                o = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = ae.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, ae.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
                                                                                o[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            _ = { mode: t, model: E, externalModel: s, cleanup: d };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && a ? a.controls(_) : u(_),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    E = (0, n.useRef)(!1),
                                    _ = (0, n.useState)(r),
                                    A = _[0],
                                    m = _[1],
                                    F = (0, n.useState)(() => d(r, i, l)),
                                    D = F[0],
                                    p = F[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        E.current ? p(d(A, i, l)) : (E.current = !0);
                                    }, [l, A, i]),
                                    (0, n.useEffect)(() => {
                                        m(r);
                                    }, [r]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (D.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [D],
                                    ),
                                    a().createElement(t.Provider, { value: D }, s)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    },
                    Ie = Le()(
                        ({ observableModel: e }) => ({ root: e.object() }),
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            preview: e.createCallbackNoArgs('onPreview'),
                            learn: e.createCallbackNoArgs('onLearn'),
                        }),
                    ),
                    Re = Ie[0],
                    Me = Ie[1],
                    Ne = {
                        base: 'App_base_ae',
                        fadeIn: 'App_fadeIn_f1',
                        base__blurred: 'App_base__blurred_13',
                        close: 'App_close_cd',
                        imageWrapper: 'App_imageWrapper_b0',
                        image: 'App_image_6e',
                        playWrapper: 'App_playWrapper_7b',
                        preview: 'App_preview_dc',
                        content: 'App_content_3e',
                        content__video: 'App_content__video_24',
                        name: 'App_name_ed',
                        description: 'App_description_69',
                        divider: 'App_divider_01',
                        buttons: 'App_buttons_10',
                        button: 'App_button_06',
                        urlIcon: 'App_urlIcon_4f',
                        fadeInWithScale: 'App_fadeInWithScale_c6',
                        slideUp: 'App_slideUp_01',
                        fadeOut: 'App_fadeOut_e5',
                    },
                    Pe = 'PlayButton_base_22',
                    He = 'PlayButton_hoverArea_f1',
                    We = 'PlayButton_hover_1e',
                    $e = 'PlayButton_blur_bb',
                    je = 'PlayButton_playIcon_41',
                    Ue = ({ onClick: e }) =>
                        a().createElement(
                            'div',
                            { className: Pe, onClick: e },
                            a().createElement('div', { className: He }),
                            a().createElement('div', { className: We }),
                            a().createElement('div', { className: $e }),
                            a().createElement('div', { className: je }),
                        ),
                    Ge = (0, re.Pi)(() => {
                        const e = Me(),
                            u = e.model,
                            t = e.controls,
                            r = u.root.get(),
                            o = r.name,
                            i = r.description,
                            s = r.imageSrc,
                            l = r.contentType,
                            c = r.learning,
                            d = r.isBlurred,
                            E = (() => {
                                const e = (0, n.useRef)(null),
                                    u = (0, n.useState)({ width: 0, height: 0 }),
                                    t = u[0],
                                    a = u[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        const u = e.current;
                                        if (u) {
                                            const t = () => {
                                                e.current && a({ width: e.current.width, height: e.current.height });
                                            };
                                            return (
                                                t(),
                                                u.addEventListener('load', t),
                                                () => u.removeEventListener('load', t)
                                            );
                                        }
                                    }, []),
                                    { ref: e, box: t }
                                );
                            })(),
                            _ = E.ref,
                            A = E.box;
                        return a().createElement(
                            'div',
                            {
                                className: h()(Ne.base, d && Ne.base__blurred),
                                lang: R.strings.settings.LANGUAGE_CODE(),
                            },
                            a().createElement(
                                'div',
                                { className: Ne.close },
                                a().createElement(j, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: t.close,
                                }),
                            ),
                            a().createElement(
                                'div',
                                {
                                    className: Ne.imageWrapper,
                                    style: { '--width': `${A.width}rem`, '--height': `${A.height}rem` },
                                },
                                s && a().createElement('img', { ref: _, src: s, alt: '', className: Ne.image }),
                                l === De.VIDEO &&
                                    a().createElement(
                                        'div',
                                        { className: Ne.playWrapper },
                                        a().createElement(Ue, { onClick: t.preview }),
                                    ),
                            ),
                            l === De.IMAGE &&
                                a().createElement(
                                    'div',
                                    { className: Ne.preview },
                                    a().createElement(Fe, {
                                        type: 'preview',
                                        size: 'normal',
                                        className: Ne.iconButton,
                                        onClick: t.preview,
                                    }),
                                ),
                            a().createElement(
                                'div',
                                { className: h()(Ne.content, l === De.VIDEO && Ne.content__video) },
                                a().createElement('div', { className: Ne.name }, o),
                                a().createElement(Se, { text: i, classMix: Ne.description }),
                                a().createElement('div', { className: Ne.divider }),
                                a().createElement(
                                    'div',
                                    { className: Ne.buttons },
                                    a().createElement(
                                        ce,
                                        { mixClass: Ne.button, type: ie.primary, size: se.medium, onClick: t.close },
                                        R.strings.wot_anniversary.albumCardView.affirmative(),
                                    ),
                                    c &&
                                        a().createElement(
                                            ce,
                                            {
                                                mixClass: Ne.button,
                                                type: ie.secondary,
                                                size: se.medium,
                                                onClick: t.learn,
                                            },
                                            R.strings.wot_anniversary.albumCardView.learn(),
                                            a().createElement('div', { className: Ne.urlIcon }),
                                        ),
                                ),
                            ),
                        );
                    });
                let Ve;
                function ze(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                !(function (e) {
                    ((e.FILL = 'fill'), (e.READY = 'ready'), (e.AVAILABLE = 'available'), (e.LOCKED = 'locked'));
                })(Ve || (Ve = {}));
                function Ke(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function qe(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        const n = Ke(e[t]);
                        if (u(n, t, e)) return n;
                    }
                }
                var Ye = t(946);
                const Xe = {
                        1: {
                            0: { box: { top: 416, left: 285, width: 267, height: 187 } },
                            1: { box: { top: 443, left: 616, width: 214, height: 240 } },
                            2: { box: { top: 392, left: 894, width: 307, height: 268 } },
                            3: { box: { top: 707, left: 264, width: 240, height: 294 } },
                            4: { box: { top: 741, left: 568, width: 374, height: 347 } },
                            5: { box: { top: 809, left: 1006, width: 214, height: 240 } },
                            6: { box: { top: 349, left: 1341, width: 267, height: 187 } },
                            7: { box: { top: 375, left: 1723, width: 280, height: 320 } },
                            8: { box: { top: 424, left: 2067, width: 214, height: 240 } },
                            9: { box: { top: 601, left: 1373, width: 286, height: 200 } },
                            10: { box: { top: 878, left: 1341, width: 200, height: 200 } },
                            11: { box: { top: 865, left: 1611, width: 266, height: 226 } },
                            12: { box: { top: 759, left: 1947, width: 360, height: 320 } },
                        },
                        2: {
                            13: { box: { top: 410, left: 286, width: 280, height: 266 } },
                            14: { box: { top: 458, left: 630, width: 267, height: 187 } },
                            15: { box: { top: 422, left: 961, width: 214, height: 240 } },
                            16: { box: { top: 764, left: 253, width: 280, height: 320 } },
                            17: { box: { top: 732, left: 597, width: 320, height: 320 } },
                            18: { box: { top: 777, left: 981, width: 240, height: 294 } },
                            19: { box: { top: 390, left: 1375, width: 400, height: 294 } },
                            20: { box: { top: 364, left: 1839, width: 374, height: 347 } },
                            21: { box: { top: 821, left: 1341, width: 213, height: 213 } },
                            22: { box: { top: 774, left: 1618, width: 294, height: 307 } },
                            23: { box: { top: 807, left: 1976, width: 320, height: 240 } },
                        },
                    },
                    Qe = Math.max(...Object.keys(Xe[1]).map((e) => Number(e))),
                    Ze = Math.max(...Object.keys(Xe[2]).map((e) => Number(e))),
                    Je = { [v.ExtraSmall]: 0.5, [v.Small]: 0.5, [v.Medium]: 0.625, [v.Large]: 0.75, [v.ExtraLarge]: 1 },
                    eu = 'ev_bday_2025_envelope_anim',
                    uu = 'ev_bday_2025_envelope_anim_next',
                    tu = 'ev_bday_2025_envelope_rollover',
                    nu = 'ev_bday_2025_envelope_rollout',
                    au = 'ev_bday_2025_envelope_add',
                    ru = 'ev_bday_2025_card_hover',
                    ou = 'ev_bday_2025_card_flight',
                    iu = 'ev_bday_2025_card_flight_end',
                    su = 'ev_bday_2025_card_flight_epic_end',
                    lu = 'ev_bday_2025_card_fixation',
                    cu = 'ev_bday_2025_envelope_rewards_open',
                    du = 'ev_bday_2025_change_page',
                    Eu = 'ev_bday_2025_stardust',
                    _u = 'ev_bday_2025_unlock',
                    Au = 'ev_bday_2025_sign',
                    mu = 'play',
                    Fu = 'arrow',
                    Du = Le()(
                        ({ observableModel: e, externalModel: u, readByPath: t }) => {
                            const n = e.primitives([
                                    'startDate',
                                    'endDate',
                                    'envelopeOpening',
                                    'interactionBlock',
                                    'blur',
                                    'animationDisabled',
                                    'resourceLoading',
                                    'envelopeCardOpened',
                                ]),
                                a = e.array('slots'),
                                r = qe(a.get(), (e) => e.dayId === Qe),
                                o = Object.assign({}, n, {
                                    chapter: ae.LO.box((null == r ? void 0 : r.state) === Ve.FILL ? 2 : 1),
                                    variation: ae.LO.box(
                                        (null == r ? void 0 : r.state) === Ve.FILL ? 'announcement' : 'historical',
                                    ),
                                    postTurnAnimation: ae.LO.box(!1),
                                    firstFilledOverlay: e.object('firstFilledOverlay'),
                                    secondFilledOverlay: e.object('secondFilledOverlay'),
                                    videos: e.object('videos'),
                                    eventBus: ae.LO.box({ eventType: 'initial' }),
                                    slots: a,
                                    progressionSteps: e.array('progressionSteps'),
                                });
                            u.subscribe(
                                (0, ae.aD)(() => {
                                    const e = t('event');
                                    o.eventBus.set({
                                        eventType: e.eventType,
                                        payload: e.payload ? JSON.parse(e.payload) : null,
                                    });
                                }),
                                'event',
                            );
                            const i = (0, Ye.Om)(
                                    () => {
                                        if (o.resourceLoading.get()) return [];
                                        const e = o.slots.get(),
                                            u = (function (e, u) {
                                                if (Array.isArray(e)) return e.filter(u);
                                                const t = [];
                                                for (let a = 0; a < e.length; a++) {
                                                    var n;
                                                    const r = null == (n = e[a]) ? void 0 : n.value;
                                                    u(r, a, e) && t.push(r);
                                                }
                                                return t;
                                            })(
                                                e,
                                                (e) =>
                                                    (!o.postTurnAnimation.get() || e.dayId !== Qe) &&
                                                    [Ve.READY, Ve.AVAILABLE].includes(e.state),
                                            );
                                        if (u.length > 0) return u;
                                        const t = (function (e, u) {
                                            for (let t = e.length - 1; t >= 0; t--) {
                                                const n = Ke(e[t]);
                                                if (u(n, t, e)) return n;
                                            }
                                        })(e, (e) => e.state === Ve.FILL);
                                        return t ? [t] : [];
                                    },
                                    { equals: K },
                                ),
                                s = (0, Ye.Om)(() => {
                                    const e = qe(o.slots.get(), (e) => e.state === Ve.LOCKED);
                                    return null == e ? void 0 : e.openTimestamp;
                                });
                            return Object.assign({}, o, { computes: { envelopes: i, firstLockedTimestamp: s } });
                        },
                        ({ externalModel: e, model: u }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            openInfoPage: e.createCallbackNoArgs('onOpenInfoPage'),
                            openEnvelope: e.createCallbackNoArgs('onOpenEnvelope'),
                            openRewardScreen: e.createCallbackNoArgs('onOpenRewardScreen'),
                            finishTurnAnimation: e.createCallbackNoArgs('onSecondPageOpened'),
                            openCardPreview: e.createCallback(
                                (e, u) => ({ dayId: e, isFlow: Boolean(u) }),
                                'onOpenCardPreview',
                            ),
                            setAnimationDisabled: e.createCallback((e) => ({ value: e }), 'onSetAnimationDisabled'),
                            setChapter: (0, ae.aD)((e) => {
                                u.chapter.set(e);
                            }),
                            setVariation: (0, ae.aD)((e) => {
                                u.variation.set(e);
                            }),
                            togglePostTurnAnimation: (0, ae.aD)(() => {
                                u.postTurnAnimation.set(!0);
                            }),
                        }),
                    ),
                    pu = Du[0],
                    gu = Du[1],
                    hu = {
                        base: 'App_base_99',
                        fadeIn: 'App_fadeIn_d3',
                        base__disabled: 'App_base__disabled_02',
                        background: 'App_background_5c',
                        background__historical: 'App_background__historical_7e',
                        background__announcement: 'App_background__announcement_f5',
                        content: 'App_content_f5',
                        content__ready: 'App_content__ready_85',
                        content__blurred: 'App_content__blurred_85',
                        header: 'App_header_d5',
                        footer: 'App_footer_44',
                        infoButton: 'App_infoButton_82',
                        close: 'App_close_3c',
                        switcher: 'App_switcher_51',
                        shadowPoster: 'App_shadowPoster_6d',
                        shadow: 'App_shadow_51',
                        fadeInWithScale: 'App_fadeInWithScale_13',
                        slideUp: 'App_slideUp_ef',
                        fadeOut: 'App_fadeOut_fe',
                    };
                let Cu, Bu, vu;
                (!(function (e) {
                    ((e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(Cu || (Cu = {})),
                    (function (e) {
                        ((e.primary = 'primary'), (e.main = 'main'));
                    })(Bu || (Bu = {})),
                    (function (e) {
                        ((e.Center = 'center'), (e.Bottom = 'bottom'));
                    })(vu || (vu = {})));
                const bu = {
                        base: 'Checkbox_base_36',
                        base__disabled: 'Checkbox_base__disabled_08',
                        base__center: 'Checkbox_base__center_52',
                        base__bottom: 'Checkbox_base__bottom_28',
                        input: 'Checkbox_input_37',
                        base__mouseDown: 'Checkbox_base__mouseDown_45',
                        base__small: 'Checkbox_base__small_18',
                        base__medium: 'Checkbox_base__medium_12',
                        base__large: 'Checkbox_base__large_f7',
                        base__extraLarge: 'Checkbox_base__extraLarge_c9',
                        alertOverlay: 'Checkbox_alertOverlay_52',
                        base__alert: 'Checkbox_base__alert_b7',
                        blink: 'Checkbox_blink_5e',
                        base__checked: 'Checkbox_base__checked_a2',
                        inputHoverOverlay: 'Checkbox_inputHoverOverlay_36',
                        highlight: 'Checkbox_highlight_b8',
                        base__main: 'Checkbox_base__main_3a',
                        base__primary: 'Checkbox_base__primary_ab',
                        checkmark: 'Checkbox_checkmark_60',
                        fadeIn: 'Checkbox_fadeIn_1a',
                        label: 'Checkbox_label_bc',
                        labelContent: 'Checkbox_labelContent_64',
                    },
                    fu = [
                        'id',
                        'isChecked',
                        'isDisabled',
                        'isAlert',
                        'size',
                        'type',
                        'soundHover',
                        'soundClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onClick',
                        'onChange',
                        'onFocus',
                        'onBlur',
                        'text',
                        'contentStyles',
                        'children',
                        'alignment',
                    ];
                function yu() {
                    return (
                        (yu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        yu.apply(this, arguments)
                    );
                }
                const wu = (e) => {
                        let u = e.id,
                            t = e.isChecked,
                            r = void 0 !== t && t,
                            o = e.isDisabled,
                            i = void 0 !== o && o,
                            s = e.isAlert,
                            l = void 0 !== s && s,
                            c = e.size,
                            d = void 0 === c ? Cu.medium : c,
                            E = e.type,
                            _ = void 0 === E ? Bu.primary : E,
                            A = e.soundHover,
                            m = void 0 === A ? 'highlight' : A,
                            F = e.soundClick,
                            D = void 0 === F ? 'play' : F,
                            p = e.onMouseEnter,
                            g = e.onMouseLeave,
                            C = e.onMouseUp,
                            B = e.onMouseDown,
                            v = e.onClick,
                            b = e.onChange,
                            f = e.onFocus,
                            y = e.onBlur,
                            w = e.text,
                            x = e.contentStyles,
                            S = e.children,
                            T = e.alignment,
                            k = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, fu);
                        const O = (0, n.useState)(!1),
                            L = O[0],
                            I = O[1],
                            R = (0, n.useState)(!1),
                            M = (R[0], R[1]),
                            N = (0, n.useCallback)(
                                (e) => {
                                    i || (b && b(), v && v(e));
                                },
                                [i, b, v],
                            ),
                            H = (0, n.useCallback)(
                                (e) => {
                                    const u = e.button === Ee.LEFT;
                                    i || (u && I(!0), u && B && B(e), D && P(D));
                                },
                                [i, B, D],
                            ),
                            W = (0, n.useCallback)(
                                (e) => {
                                    i || (I(!1), C && C(e));
                                },
                                [i, C],
                            ),
                            $ = (0, n.useCallback)(
                                (e) => {
                                    i || (p && p(e), m && P(m));
                                },
                                [i, p, m],
                            ),
                            j = (0, n.useCallback)(
                                (e) => {
                                    i || (I(!1), g && g(e));
                                },
                                [i, g],
                            ),
                            U = (0, n.useCallback)(
                                (e) => {
                                    i || (M(!0), f && f(e));
                                },
                                [i, f],
                            ),
                            G = (0, n.useCallback)(
                                (e) => {
                                    i || (M(!1), y && y(e));
                                },
                                [i, y],
                            ),
                            V = a().createElement(
                                'div',
                                { className: bu.label },
                                a().createElement(
                                    'div',
                                    { className: h()(bu.labelContent, 's-labelContent'), style: x },
                                    w || S,
                                ),
                            );
                        return a().createElement(
                            'div',
                            yu(
                                {
                                    id: u,
                                    className: h()(bu.base, bu[`base__${d}`], bu[`base__${_}`], {
                                        [bu.base__checked]: r,
                                        [bu.base__disabled]: i,
                                        [bu.base__mouseDown]: L,
                                        [bu.base__alert]: l,
                                        [bu.base__center]: T === vu.Center,
                                        [bu.base__bottom]: T === vu.Bottom,
                                    }),
                                    onClick: N,
                                    onMouseEnter: $,
                                    onMouseLeave: j,
                                    onMouseDown: H,
                                    onMouseUp: W,
                                    onFocus: U,
                                    onBlur: G,
                                },
                                k,
                            ),
                            a().createElement(
                                'div',
                                { className: bu.input },
                                a().createElement('div', { className: bu.alertOverlay }),
                                a().createElement('div', { className: bu.inputHoverOverlay }),
                                a().createElement('div', { className: bu.highlight }),
                            ),
                            a().createElement('div', { className: bu.checkmark }),
                            ((w || S) && V) || null,
                        );
                    },
                    xu = 'AnimationSwitcher_label_b1',
                    Su = (0, re.Pi)(({ className: e }) => {
                        const u = gu(),
                            t = u.model,
                            n = u.controls,
                            r = t.animationDisabled.get(),
                            o = y().mediaSize;
                        return a().createElement(
                            'div',
                            { className: e },
                            a().createElement(
                                wu,
                                {
                                    onChange: () => n.setAnimationDisabled(!r),
                                    isChecked: !r,
                                    type: 'main',
                                    size: o > v.Large ? 'extraLarge' : 'large',
                                },
                                a().createElement(
                                    'div',
                                    { className: xu },
                                    R.strings.wot_anniversary.albumView.animations(),
                                ),
                            ),
                        );
                    });
                function Tu() {
                    const e = (0, n.useRef)(0);
                    return (
                        Y(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, n.useMemo)(
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
                const ku = ({ items: e, getValue: u, timeout: t }) => {
                        const a = (0, n.useState)(e.map((e) => ({ data: e, state: 'idle' }))),
                            r = a[0],
                            o = a[1],
                            i = Tu();
                        return (
                            (0, n.useEffect)(() => {
                                if (i.isRunning) return;
                                const n = (() => {
                                        const t = r[r.length - 1];
                                        if (!t) return e[0];
                                        const n = e.findIndex((e) => u(e) === u(t.data));
                                        return -1 === n ? e[0] : e[n + 1];
                                    })(),
                                    a = (() => {
                                        const t = r[0];
                                        if (!t) return;
                                        return -1 === e.findIndex((e) => u(e) === u(t.data)) ? t.data : void 0;
                                    })();
                                (void 0 === n && void 0 === a) ||
                                    (o((e) => [
                                        ...e.map((e) =>
                                            void 0 !== a && u(e.data) === u(a)
                                                ? Object.assign({}, e, { state: 'removing' })
                                                : e,
                                        ),
                                        ...(void 0 !== n ? [{ data: n, state: 'adding' }] : []),
                                    ]),
                                    i.run(() => {
                                        o((e) =>
                                            e
                                                .filter((e) => 'removing' !== e.state)
                                                .map((e) => Object.assign({}, e, { state: 'idle' })),
                                        );
                                    }, t));
                            }, [e, r]),
                            r
                        );
                    },
                    Ou = {
                        base: 'Book_base_10',
                        base__fadeIn: 'Book_base__fadeIn_1f',
                        fadeIn: 'Book_fadeIn_72',
                        bg: 'Book_bg_a1',
                        bg__chapter1: 'Book_bg__chapter1_06',
                        bg__historical: 'Book_bg__historical_2e',
                        bg__announcement: 'Book_bg__announcement_19',
                        bg__chapter2: 'Book_bg__chapter2_c3',
                        label: 'Book_label_3b',
                        button: 'Book_button_60',
                        button__left: 'Book_button__left_1a',
                        button__right: 'Book_button__right_bd',
                        fadeInWithScale: 'Book_fadeInWithScale_88',
                        slideUp: 'Book_slideUp_de',
                        fadeOut: 'Book_fadeOut_a8',
                    },
                    Lu = (e, u) => e.toDateString() === u.toDateString(),
                    Iu = (e) => Lu(new Date(), new Date(1e3 * e)),
                    Ru = (e) => Lu(new Date(Date.now() + 864e5), new Date(1e3 * e));
                let Mu;
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
                })(Mu || (Mu = {}));
                var Nu = t(613);
                Date.now();
                const Pu = Nu.Ew.getRegionalDateTime;
                Nu.Ew.getFormattedDateTime;
                const Hu = (e) => Pu(e, Mu.ShortTime),
                    Wu = (e, u = !0) => Pu(e, Mu.DayMonthFull, u),
                    $u = [
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
                function ju(e) {
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
                const Uu = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: ue.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Gu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            i = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            _ = e.decoratorId,
                            A = void 0 === _ ? 0 : _,
                            m = e.isEnabled,
                            F = void 0 === m || m,
                            D = e.targetId,
                            p = void 0 === D ? 0 : D,
                            g = e.onShow,
                            h = e.onHide,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, $u);
                        const B = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, n.useMemo)(
                                () =>
                                    p ||
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
                                [p],
                            ),
                            b = (0, n.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (Uu(t, A, { isMouseEvent: !0, on: !0, arguments: ju(a) }, v),
                                    g && g(),
                                    (B.current.isVisible = !0));
                            }, [t, A, a, v, g]),
                            f = (0, n.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        Uu(t, A, { on: !1 }, v),
                                        B.current.isVisible && h && h(),
                                        (B.current.isVisible = !1));
                                }
                            }, [t, A, v, h]),
                            y = (0, n.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(B.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = B.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', y, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', y, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ));
                        return F
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((w = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((B.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                      r && r(e),
                                                      w && w(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (f(), null == o || o(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === E && f(), null == s || s(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === E && f(), null == i || i(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      C,
                                  ),
                              )
                            : u;
                        var w;
                    },
                    Vu = ({ children: e, tooltipArgs: u, enabled: t = !0 }) =>
                        u
                            ? a().createElement(
                                  Gu,
                                  {
                                      args: { payload: JSON.stringify(u) },
                                      contentId: R.views.lobby.wot_anniversary.tooltips.SimpleTooltip('resId'),
                                      isEnabled: t,
                                  },
                                  e,
                              )
                            : e;
                let zu;
                function Ku(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return qu(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return qu(e, u);
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
                function qu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                !(function (e) {
                    ((e.INVOICE_PROCESSED = 'invoiceProcessed'),
                        (e.INVOICE_REJECTED = 'invoiceRejected'),
                        (e.REGULAR_REWARDS_RECEIVED = 'regularRewardsReceived'),
                        (e.TURN_PAGE = 'turnPage'));
                })(zu || (zu = {}));
                const Yu = () =>
                        (() => {
                            const e = (0, n.useMemo)(() => ({}), []),
                                u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                t = (e, t) => (u(e).set(t, t), () => r(e, t)),
                                a = (e, t) => (
                                    u(e).set(t, (...u) => {
                                        (t(...u), r(e, t));
                                    }),
                                    () => r(e, t)
                                ),
                                r = (e, t) => {
                                    u(e).delete(t);
                                },
                                o = (e, ...t) => {
                                    for (var n, a = Ku(u(e).values()); !(n = a()).done;) (0, n.value)(...t);
                                };
                            return (0, n.useMemo)(() => ({ on: t, once: a, off: r, trigger: o }), []);
                        })(),
                    Xu = a().createContext({ on: () => V, once: () => V, off: V, trigger: V }),
                    Qu = (0, re.Pi)(({ children: e }) => {
                        const u = Yu(),
                            t = gu().model;
                        return (
                            q(() =>
                                (0, ae.U5)(
                                    () => t.eventBus.get(),
                                    (e) => {
                                        switch (e.eventType) {
                                            case zu.REGULAR_REWARDS_RECEIVED:
                                                return u.trigger('onRegularRewardsReceived');
                                            case zu.INVOICE_PROCESSED:
                                                return u.trigger('onInvoiceProcessed');
                                            case zu.INVOICE_REJECTED:
                                                return u.trigger('onInvoiceRejected');
                                            case zu.TURN_PAGE:
                                                return u.trigger('onTurnAnimationStart');
                                        }
                                    },
                                ),
                            ),
                            a().createElement(Xu.Provider, { value: u }, e)
                        );
                    }),
                    Zu = () => (0, n.useContext)(Xu),
                    Ju = {
                        base: 'Slot_base_77',
                        base__fill: 'Slot_base__fill_65',
                        base__hover: 'Slot_base__hover_6f',
                        background: 'Slot_background_f0',
                        background__default: 'Slot_background__default_d4',
                        base__chapter1: 'Slot_base__chapter1_bd',
                        background__ready: 'Slot_background__ready_e2',
                        background__adding: 'Slot_background__adding_3f',
                        fadeIn: 'Slot_fadeIn_5c',
                        background__removing: 'Slot_background__removing_23',
                        base__animationDisabled: 'Slot_base__animationDisabled_eb',
                        background__available: 'Slot_background__available_ed',
                        background__locked: 'Slot_background__locked_9d',
                        background__fill: 'Slot_background__fill_a2',
                        base__chapter2: 'Slot_base__chapter2_39',
                        day: 'Slot_day_98',
                        base__special: 'Slot_base__special_08',
                        day_4: 'Slot_day_4_7b',
                        day_12: 'Slot_day_12_5d',
                        base__ready: 'Slot_base__ready_36',
                        base__locked: 'Slot_base__locked_b3',
                        base__available: 'Slot_base__available_aa',
                    },
                    et = (0, re.Pi)(({ dayId: e, box: u, chapter: t }) => {
                        const r = y().mediaSize,
                            i = Zu(),
                            s = i.on,
                            l = i.trigger,
                            c = (0, n.useState)(!1),
                            d = c[0],
                            E = c[1],
                            _ = (0, n.useState)(!1),
                            A = _[0],
                            m = _[1],
                            F = Je[r],
                            D = gu(),
                            p = D.model,
                            g = D.controls,
                            C = qe(p.slots.get(), (u) => u.dayId === e) || {
                                state: Ve.LOCKED,
                                openTimestamp: 0,
                                label: '',
                                special: !1,
                            },
                            B = A ? Ve.FILL : C.state,
                            v = B === Ve.READY,
                            b = ku({ items: [B], getValue: z, timeout: 1200 }),
                            f = ((e, u) =>
                                `${-e.left * u + e.width * u * 0.1}rem ${-e.top * u + e.height * u * 0.1}rem`)(u, F),
                            w = (() => {
                                switch (B) {
                                    case 'fill':
                                        return { body: R.strings.wot_anniversary.slotTooltip.fill.description() };
                                    case 'available':
                                        return {
                                            header: R.strings.wot_anniversary.slotTooltip.available.title(),
                                            body: R.strings.wot_anniversary.slotTooltip.available.description(),
                                        };
                                    case 'ready':
                                        return { body: R.strings.wot_anniversary.slotTooltip.ready.description() };
                                    case 'locked': {
                                        const e = { date: Wu(C.openTimestamp), time: Hu(C.openTimestamp) };
                                        return Iu(C.openTimestamp)
                                            ? {
                                                  body: R.strings.wot_anniversary.slotTooltip.locked.today.description(),
                                                  bindings: e,
                                              }
                                            : Ru(C.openTimestamp)
                                              ? {
                                                    body: R.strings.wot_anniversary.slotTooltip.locked.tomorrow.description(),
                                                    bindings: e,
                                                }
                                              : {
                                                    header: R.strings.wot_anniversary.slotTooltip.locked.sometime.title(),
                                                    body: R.strings.wot_anniversary.slotTooltip.locked.sometime.description(),
                                                    bindings: e,
                                                };
                                    }
                                }
                            })();
                        return (
                            (0, n.useEffect)(() => s('onEnvelopeEnter', () => v && E(!0)), [s, v]),
                            (0, n.useEffect)(() => s('onEnvelopeLeave', () => v && E(!1)), [s, v]),
                            (0, n.useEffect)(() => s('onCardAnimationEnd', () => v && m(!0)), [s, v]),
                            a().createElement(
                                Vu,
                                { tooltipArgs: w },
                                a().createElement(
                                    'div',
                                    {
                                        onMouseEnter: () => {
                                            (v && l('onSlotEnter'), B === Ve.FILL && o.O.sound.play.sound(ru));
                                        },
                                        onMouseLeave: () => {
                                            v && l('onSlotLeave');
                                        },
                                        onClick: () => {
                                            (v && l('onSlotClick'),
                                                B === Ve.FILL && (g.openCardPreview(e), o.O.sound.play.sound(mu)));
                                        },
                                        className: h()(
                                            Ju.base,
                                            Ju[`base__chapter${t}`],
                                            Ju[`base__${B}`],
                                            C.special && Ju.base__special,
                                            d && Ju.base__hover,
                                            p.animationDisabled.get() && Ju.base__animationDisabled,
                                        ),
                                        style: {
                                            width: u.width * F + 'rem',
                                            height: u.height * F + 'rem',
                                            top: u.top * F + 'rem',
                                            left: u.left * F + 'rem',
                                        },
                                    },
                                    b.map((e) =>
                                        a().createElement('div', {
                                            key: e.data,
                                            className: h()(
                                                Ju.background,
                                                Ju.background__default,
                                                Ju[`background__${e.data}`],
                                                Ju[`background__${e.state}`],
                                            ),
                                            style: { backgroundPosition: f },
                                        }),
                                    ),
                                    'fill' !== B &&
                                        a().createElement('div', { className: h()(Ju.day, Ju[`day_${e}`]) }, C.label),
                                ),
                            )
                        );
                    }),
                    ut = { 1: Ou.button__right, 2: Ou.button__left },
                    tt = { 1: 2, 2: 1 },
                    nt = (0, re.Pi)(() => {
                        const e = gu(),
                            u = e.model,
                            t = e.controls,
                            n = u.computes.envelopes()[0],
                            r = 1 === u.chapter.get() && n && n.dayId === Qe && n.state === Ve.READY,
                            i = ku({ getValue: z, timeout: 400, items: [u.chapter.get()] });
                        return a().createElement(
                            a().Fragment,
                            null,
                            i.map(({ data: e, state: n }) => {
                                const i = Xe[e];
                                return a().createElement(
                                    'div',
                                    { key: e, className: h()(Ou.base, 'adding' === n && Ou.base__fadeIn) },
                                    a().createElement('div', {
                                        className: h()(Ou.bg, Ou[`bg__chapter${e}`], Ou[`bg__${u.variation.get()}`]),
                                    }),
                                    'announcement' === u.variation.get() &&
                                        !r &&
                                        a().createElement(
                                            'div',
                                            {
                                                key: e,
                                                className: h()(Ou.button, ut[e]),
                                                onClick: () => {
                                                    (o.O.sound.play.sound(Fu), t.setChapter(tt[e]));
                                                },
                                            },
                                            a().createElement(
                                                'svg',
                                                {
                                                    width: '72',
                                                    height: '72',
                                                    viewBox: '0 0 72 72',
                                                    fill: 'none',
                                                    xmlns: 'http://www.w3.org/2000/svg',
                                                },
                                                a().createElement('path', {
                                                    d: 'M39 29L15 29V43H39V52L57 36L39 20V29Z',
                                                    fill: 'currentColor',
                                                }),
                                            ),
                                        ),
                                    a().createElement(Se, {
                                        classMix: Ou.label,
                                        text: R.strings.wot_anniversary.albumView.chapter(),
                                        binding: { chapter: e },
                                    }),
                                    Object.keys(i).map((u) =>
                                        a().createElement(et, { key: u, dayId: Number(u), box: i[u].box, chapter: e }),
                                    ),
                                );
                            }),
                        );
                    }),
                    at = (e, u) => {
                        const t = (0, n.useRef)();
                        return (
                            (0, n.useEffect)(() => {
                                (u && !u(e)) || (t.current = e);
                            }, [u, e]),
                            t.current
                        );
                    };
                ue.Sw.instance;
                let rt;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(rt || (rt = {}));
                ue.Sw.instance;
                const ot = at;
                var it = t(30);
                const st = () => {
                        const e = (0, n.useRef)(null),
                            u = (0, n.useRef)(V),
                            t = Tu();
                        return (
                            Y(() => u.current()),
                            (0, n.useMemo)(
                                () => ({
                                    ref: e,
                                    play: (n, a) => {
                                        if ((u.current(), !e.current))
                                            return (console.error(`The video couldn't be played. Message: ${a}`), n());
                                        const r = e.current.getDuration();
                                        if (!r)
                                            return (
                                                console.error(`The video duration is incorrect: ${r}. Message: ${a}`),
                                                n()
                                            );
                                        ((u.current = e.current.on('ended', () => {
                                            (t.clear(), n());
                                        })),
                                            t.run(
                                                () => {
                                                    (console.error(`The video player timed out. Message: ${a}`),
                                                        u.current(),
                                                        n());
                                                },
                                                1e3 * (r + 5),
                                            ),
                                            e.current.play());
                                    },
                                }),
                                [t],
                            )
                        );
                    },
                    lt = {
                        base: 'Envelope_base_a1',
                        base__active: 'Envelope_base__active_fe',
                        base__disabled: 'Envelope_base__disabled_f0',
                        group: 'Envelope_group_26',
                        shadow: 'Envelope_shadow_f8',
                        layer: 'Envelope_layer_ae',
                        layer__back: 'Envelope_layer__back_d4',
                        base__historical: 'Envelope_base__historical_c3',
                        base__announcement: 'Envelope_base__announcement_95',
                        layer__front: 'Envelope_layer__front_5d',
                        stamp: 'Envelope_stamp_86',
                        cardWrapper: 'Envelope_cardWrapper_0c',
                        card: 'Envelope_card_43',
                        flap: 'Envelope_flap_2d',
                        innerShineWrapper: 'Envelope_innerShineWrapper_d9',
                        innerShine: 'Envelope_innerShine_a1',
                        innerRays: 'Envelope_innerRays_ff',
                        innerRaysL: 'Envelope_innerRaysL_b7',
                        rotateR: 'Envelope_rotateR_a0',
                        innerRaysR: 'Envelope_innerRaysR_6d',
                        rotateL: 'Envelope_rotateL_e4',
                        outerShineWrapper: 'Envelope_outerShineWrapper_76',
                        outerShine: 'Envelope_outerShine_30',
                        loader: 'Envelope_loader_de',
                        fadeIn: 'Envelope_fadeIn_f3',
                        spinner: 'Envelope_spinner_79',
                        rotate: 'Envelope_rotate_99',
                        tooltip: 'Envelope_tooltip_98',
                        tooltipFlap: 'Envelope_tooltipFlap_4f',
                        fadeInWithScale: 'Envelope_fadeInWithScale_cf',
                        slideUp: 'Envelope_slideUp_75',
                        fadeOut: 'Envelope_fadeOut_91',
                    },
                    ct = (e, u, t, n, a) => {
                        const r = 1 - e;
                        return (
                            Math.pow(r, 3) * u +
                            3 * Math.pow(r, 2) * e * t +
                            3 * r * Math.pow(e, 2) * n +
                            Math.pow(e, 3) * a
                        );
                    },
                    dt = (e, u, t, n, a) => {
                        const r = 1 - e;
                        return 3 * Math.pow(r, 2) * (t - u) + 6 * r * e * (n - t) + 3 * Math.pow(e, 2) * (a - n);
                    },
                    Et =
                        ((_t = 0.33),
                        (At = 0),
                        (mt = 0.25),
                        (Ft = 0),
                        function (e) {
                            let u = e;
                            for (let t = 0; t < 4; t++) {
                                const t = ct(u, 0, _t, mt, 1),
                                    n = dt(u, 0, _t, mt, 1);
                                if (0 === n) break;
                                u -= (t - e) / n;
                            }
                            return ct(u, 0, At, Ft, 1);
                        });
                var _t, At, mt, Ft;
                const Dt = 33,
                    pt = 0,
                    gt = !0,
                    ht = 'play';
                const Ct = [
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
                function Bt() {
                    return (
                        (Bt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Bt.apply(this, arguments)
                    );
                }
                (0, n.memo)(function (e) {
                    let u = e.width,
                        t = e.height,
                        r = e.getImageSource,
                        o = e.frameCount,
                        i = e.onAnimate,
                        s = e.frameTime,
                        l = void 0 === s ? Dt : s,
                        c = e.initialFrameIndex,
                        d = void 0 === c ? pt : c,
                        E = e.lastFrameIndex,
                        _ = void 0 === E ? o - 1 : E,
                        A = e.loop,
                        m = void 0 === A ? gt : A,
                        F = e.state,
                        D = void 0 === F ? ht : F,
                        p = e.onAnimationDone,
                        g = e.onAnimationComplete,
                        h = e.poster,
                        C = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, Ct);
                    const B = (0, n.useRef)(null);
                    return (
                        (0, n.useEffect)(() => {
                            const e = B.current;
                            if (!e) return;
                            const u = e.getContext('2d'),
                                t = (t) => {
                                    (u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y));
                                };
                            switch (D) {
                                case 'play':
                                    return (function () {
                                        const e = ft(d, _, r),
                                            u = vt(d, _),
                                            n = window.setInterval(() => {
                                                const a = u(),
                                                    r = e.get(a);
                                                r
                                                    ? (null == i || i(a, r),
                                                      t(r),
                                                      a === _ &&
                                                          (null == g || g(),
                                                          m || (null == p || p(), window.clearInterval(n))))
                                                    : console.error('frameImage was not provided in frameImages Map');
                                            }, l);
                                        return () => window.clearInterval(n);
                                    })();
                                case 'stop':
                                    return (function () {
                                        const e = 0 === d && h ? { path: h, x: 0, y: 0 } : r(d),
                                            u = new Image();
                                        u.src = e.path;
                                        const n = () => t(bt(e, u));
                                        return (u.addEventListener('load', n), () => u.removeEventListener('load', n));
                                    })();
                                default:
                                    return console.error('[CanvasSequence] Unreachable state!');
                            }
                        }, [l, r, d, _, m, i, g, p, h, D]),
                        a().createElement('canvas', Bt({}, C, { width: u, height: t, ref: B }))
                    );
                });
                const vt = (e, u) => {
                        let t = e;
                        return () => {
                            const n = t;
                            return ((t += 1), t > u && (t = e), n);
                        };
                    },
                    bt = (e, u) => Object.assign({}, e, { img: u }),
                    ft = (e, u, t) => {
                        const n = new Map(),
                            a = {};
                        for (let r = e; r <= u; r++) {
                            const e = t(r),
                                u = a[e.path];
                            if (u) n.set(r, bt(e, u));
                            else {
                                const u = new Image();
                                ((a[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(r, bt(e, u)));
                            }
                        }
                        return n;
                    };
                function yt(e) {
                    const u = (function (e) {
                        const u = e.chunk,
                            t = u.rows * u.columns;
                        return (n) => {
                            const a = n % t,
                                r = (a % u.columns) * e.width,
                                o = Math.trunc(a / u.columns) * e.height;
                            return { path: e.getChunkPath(Math.trunc(n / t)), x: r, y: o };
                        };
                    })(e);
                    return (t) => Object.assign({}, u(t), { width: e.width, height: e.height });
                }
                const wt = (e, u) => Object.assign({}, e, { img: u }),
                    xt = (e, u, t = 0) => {
                        const n = yt(u);
                        return ((e, u, t, n, a = 0) => {
                            const r = {};
                            for (let o = u; o <= t; o++) {
                                const u = n(o),
                                    t = r[u.path];
                                if (t) e.set(o + a, wt(u, t));
                                else {
                                    const t = new Image();
                                    ((r[u.path] = t),
                                        (t.src = u.path),
                                        (t.onerror = () => {
                                            console.error(
                                                `[CanvasSequence] Error loading image(${o})`,
                                                u.path,
                                                `(${u.x},${u.y})`,
                                            );
                                        }),
                                        e.set(o + a, wt(u, t)));
                                }
                            }
                        })(e, 0, u.frameCount - 1, n, t);
                    },
                    St = (e, u) => {
                        const t = (0, n.useRef)(new Map()),
                            a = (0, n.useRef)(0),
                            r = (function () {
                                const e = (0, n.useRef)(0);
                                return (
                                    Y(() => {
                                        window.cancelAnimationFrame(e.current);
                                    }),
                                    (0, n.useMemo)(
                                        () => ({
                                            run: (u, t) => {
                                                window.cancelAnimationFrame(e.current);
                                                let n = Date.now();
                                                const a = () => {
                                                    ((e.current = window.requestAnimationFrame(a)),
                                                        Date.now() - n < t || ((n = Date.now()), u()));
                                                };
                                                e.current = window.requestAnimationFrame(a);
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
                            })();
                        return (
                            (0, n.useEffect)(() => {
                                (t.current.clear(),
                                    u.reduce(
                                        (e, u) => (xt(t.current, u, e.frameOffset), (e.frameOffset += u.frameCount), e),
                                        { frameOffset: 0 },
                                    ));
                            }, [u, e]),
                            (0, n.useMemo)(() => {
                                const u = (u) => {
                                    a.current = u;
                                    const n = e.current;
                                    if (n) {
                                        const e = t.current.get(u);
                                        if (!e)
                                            return void console.error('frameImage was not provided in frameImages Map');
                                        const a = n.getContext('2d');
                                        (a.clearRect(0, 0, n.width, n.height), a.drawImage(e.img, -e.x, -e.y));
                                    }
                                };
                                return {
                                    setFrame: u,
                                    animate: (e) => {
                                        const n = void 0 !== e.startFrameIndex ? e.startFrameIndex : a.current,
                                            o = void 0 !== e.endFrameIndex ? e.endFrameIndex : t.current.size - 1,
                                            i = o > n ? 1 : -1;
                                        let s = n;
                                        return (
                                            r.run(() => {
                                                (s === n && (null == e.onStart || e.onStart()),
                                                    null == e.onAnimate || e.onAnimate(s),
                                                    u(s),
                                                    s === o
                                                        ? (r.clear(), null == e.onFinish || e.onFinish())
                                                        : (s += i));
                                            }, e.frameTime),
                                            () => r.clear()
                                        );
                                    },
                                    getCurrentFrame: () => a.current,
                                    onLoad: (e, u) => {
                                        const n = t.current.get(e);
                                        if (!n) return V;
                                        if (0 === n.img.width) {
                                            const e = () => {
                                                (n.img.removeEventListener('load', e), u());
                                            };
                                            return (
                                                n.img.addEventListener('load', e),
                                                () => {
                                                    n.img.removeEventListener('load', e);
                                                }
                                            );
                                        }
                                        return (u(), V);
                                    },
                                };
                            }, [e, r])
                        );
                    },
                    Tt = {
                        historical: {
                            width: 500,
                            height: 500,
                            frameCount: 90,
                            chunk: { count: 3, rows: 5, columns: 6 },
                            getChunkPath: (e) =>
                                `R.images.gui.maps.icons.wot_anniversary.album.envelope.chapter_1.flap_${e + 1}`,
                        },
                        announcement: {
                            width: 500,
                            height: 500,
                            frameCount: 90,
                            chunk: { count: 3, rows: 5, columns: 6 },
                            getChunkPath: (e) =>
                                `R.images.gui.maps.icons.wot_anniversary.album.envelope.chapter_2.flap_${e + 1}`,
                        },
                    },
                    kt = [1, 0.8, 0.6];
                let Ot;
                !(function (e) {
                    ((e.Init = 'init'), (e.Idle = 'idle'), (e.Hover = 'hover'), (e.Hold = 'hold'), (e.Open = 'open'));
                })(Ot || (Ot = {}));
                const Lt = (e) => Math.min(15 * e, 30),
                    It = (e) => Math.min(8 * e, 16),
                    Rt = (e) => {
                        const u = (e) => `polygon(10% ${e}%, 90% ${e}%, 90% 41%, 90% 87%, 10% 87%, 10% 41%)`;
                        return u(e <= 45 ? 41 : 0);
                    },
                    Mt = (0, re.Pi)(({ index: e }) => {
                        var u;
                        const t = Zu(),
                            r = t.on,
                            i = t.trigger,
                            s = gu(),
                            l = s.model,
                            c = s.controls,
                            d = l.computes.envelopes()[e],
                            E = Tu(),
                            _ = ((e) => {
                                const u = (0, n.useRef)(null),
                                    t = St(u, [Tt[e]]),
                                    a = t.animate,
                                    r = t.onLoad,
                                    i = t.getCurrentFrame,
                                    s = t.setFrame,
                                    l = (0, n.useRef)(Ot.Init),
                                    c = (0, it.useSpring)(() => ({
                                        opacity: 0,
                                        x: '0',
                                        y: '0',
                                        rotate: '0',
                                        pointerEvents: 'none',
                                    })),
                                    d = c[0],
                                    E = c[1],
                                    _ = (0, it.useSpring)(() => ({
                                        opacity: 1,
                                        x: '0',
                                        y: '0',
                                        rotate: '0',
                                        scale: 1,
                                    })),
                                    A = _[0],
                                    m = _[1],
                                    F = (0, it.useSpring)(() => ({ opacity: 1 })),
                                    D = F[0],
                                    p = F[1],
                                    g = (0, it.useSpring)(() => ({ opacity: 1 })),
                                    h = g[0],
                                    C = g[1],
                                    B = (0, it.useSpring)(() => ({ opacity: 1, clipPath: Rt(0) })),
                                    v = B[0],
                                    b = B[1],
                                    f = (0, it.useSpring)(() => ({ opacity: 0 })),
                                    y = f[0],
                                    w = f[1],
                                    x = (0, it.useSpring)(() => ({ zIndex: 15 }))[0],
                                    S = (0, it.useSpring)(() => ({ opacity: 1 })),
                                    T = S[0],
                                    k = S[1],
                                    O = (0, n.useMemo)(() => {
                                        const e = (e) => {
                                                a(Object.assign({ loop: !1, frameTime: 33 }, e));
                                            },
                                            u = () => {
                                                l.current === Ot.Init && (l.current = Ot.Idle);
                                            };
                                        return {
                                            open: ({ onFinish: u, onFlip: t, immediate: n }) => {
                                                ((l.current = Ot.Open),
                                                    e(
                                                        Object.assign({}, n ? { startFrameIndex: 89 } : {}, {
                                                            onAnimate: (e) => {
                                                                (v.clipPath.set(Rt(e)),
                                                                    45 === e && (x.zIndex.set(1), null == t || t()),
                                                                    36 === e &&
                                                                        w.start({
                                                                            immediate: n,
                                                                            to: { opacity: 0 },
                                                                            config: { duration: 400, easing: Et },
                                                                        }));
                                                            },
                                                            onFinish: u,
                                                        }),
                                                    ));
                                            },
                                            hold: () => {
                                                ((l.current = Ot.Hold), e({ endFrameIndex: 30 }));
                                            },
                                            enter: () => {
                                                ((l.current = Ot.Hover), e({ endFrameIndex: 30 }));
                                            },
                                            leave: () => {
                                                ((l.current = Ot.Idle), e({ endFrameIndex: 20 }));
                                            },
                                            hideEnvelope: (e = 1e3) => {
                                                m.start({
                                                    to: { opacity: 0, y: '-14%' },
                                                    delay: e,
                                                    config: { duration: 400, easing: Et },
                                                });
                                            },
                                            dropEnvelope: (e = 1e3, u = 800) => {
                                                m.start({
                                                    to: { x: '28%', y: '12%', rotate: '30deg', scale: 0.9 },
                                                    delay: e,
                                                    config: { duration: u, easing: Et },
                                                    onStart: () => {
                                                        p.start({
                                                            to: { opacity: 0 },
                                                            config: { duration: 400, easing: Et },
                                                        });
                                                    },
                                                    onRest: () => {
                                                        d.pointerEvents.set('auto');
                                                    },
                                                });
                                            },
                                            show: ({
                                                index: t,
                                                immediate: n,
                                                firstImmediate: a,
                                                secondImmediate: r,
                                                envelopesCount: i,
                                                delayed: s,
                                            }) => {
                                                const l = s ? 1600 : 0;
                                                if (n)
                                                    return (
                                                        u(),
                                                        T.opacity.set(kt[t]),
                                                        E.start({
                                                            immediate: n,
                                                            to: { opacity: 1, rotate: `${Lt(t)}deg`, x: `${It(t)}%` },
                                                        }),
                                                        void (
                                                            0 === t &&
                                                            (d.pointerEvents.set('auto'),
                                                            e({ startFrameIndex: 20, endFrameIndex: 20 }),
                                                            w.start({ immediate: !0, to: { opacity: 1 } }))
                                                        )
                                                    );
                                                0 !== t
                                                    ? (T.opacity.set(0),
                                                      E.start({
                                                          immediate: !0,
                                                          from: { opacity: 0 },
                                                          to: { opacity: 1 },
                                                          delay: a ? l : l + 800 + 200,
                                                          onStart: () => {
                                                              (((1 === t && a) || (2 === t && r)) &&
                                                                  o.O.sound.play.sound(uu),
                                                                  k.start({
                                                                      to: { opacity: kt[t] },
                                                                      config: { duration: 400, easing: Et },
                                                                  }));
                                                          },
                                                          onRest: () => {
                                                              E.start({
                                                                  from: { rotate: `${Lt(0)}deg`, x: `${It(0)}%` },
                                                                  to: { rotate: `${Lt(t)}deg`, x: `${It(t)}%` },
                                                                  config: { duration: 800, easing: Et },
                                                              });
                                                          },
                                                      }))
                                                    : E.start({
                                                          from: {
                                                              opacity: 0,
                                                              rotate: `${Lt(1)}deg`,
                                                              x: `${It(1)}%`,
                                                              y: `${It(1)}%`,
                                                              pointerEvents: 'none',
                                                          },
                                                          to: {
                                                              opacity: 1,
                                                              rotate: `${Lt(0)}deg`,
                                                              x: `${It(0)}%`,
                                                              y: `${It(0)}%`,
                                                          },
                                                          config: { duration: 800, easing: Et },
                                                          delay: l,
                                                          onStart: () => {
                                                              o.O.sound.play.sound(eu);
                                                          },
                                                          onRest: () => {
                                                              w.start({
                                                                  to: { opacity: 1 },
                                                                  delay: 1 === i ? 0 : 800,
                                                                  onStart: () => {
                                                                      (d.pointerEvents.set('auto'),
                                                                          e({ endFrameIndex: 20 }));
                                                                  },
                                                                  onRest: () => {
                                                                      u();
                                                                  },
                                                                  config: { duration: 400, easing: Et },
                                                              });
                                                          },
                                                      });
                                            },
                                            rotate: (t) => {
                                                (k.start({
                                                    to: { opacity: kt[t] },
                                                    config: { duration: 400, easing: Et },
                                                }),
                                                    E.start({
                                                        from: {
                                                            rotate: `${Lt(t + 1)}deg`,
                                                            x: `${It(t + 1)}%`,
                                                            pointerEvents: 'none',
                                                        },
                                                        to: { rotate: `${Lt(t)}deg`, x: `${It(t)}%`, opacity: 1 },
                                                        config: { duration: 800, easing: Et },
                                                        onRest: () => {
                                                            (d.pointerEvents.set('auto'),
                                                                0 === t &&
                                                                    w.start({
                                                                        to: { opacity: 1 },
                                                                        onStart: () => {
                                                                            e({ endFrameIndex: 20 });
                                                                        },
                                                                        onRest: () => {
                                                                            u();
                                                                        },
                                                                        config: { duration: 400, easing: Et },
                                                                    }));
                                                        },
                                                    }));
                                            },
                                            hideCard: () => {
                                                C.start({ to: { opacity: 0 }, config: { duration: 400, easing: Et } });
                                            },
                                            hideInnerShine: () => {
                                                b.start({
                                                    to: { opacity: 0 },
                                                    config: { duration: 400, easing: Et },
                                                    delay: 200,
                                                });
                                            },
                                            toggleVisibility: (e, u) => {
                                                0 !== u
                                                    ? E.start({
                                                          to: { opacity: e ? 1 : 0 },
                                                          config: { duration: 400, easing: Et },
                                                      })
                                                    : m.start({
                                                          to: { opacity: e ? 1 : 0 },
                                                          config: { duration: 400, easing: Et },
                                                      });
                                            },
                                        };
                                    }, [a, C, m, x.zIndex, b, v.clipPath, w, E, d.pointerEvents, k, T.opacity, p]);
                                return (
                                    (0, n.useEffect)(() => r(0, () => s(i())), [e]),
                                    (0, n.useEffect)(() => r(89, () => s(i())), [e]),
                                    {
                                        envelopeStyle: A,
                                        rootStyle: d,
                                        stampStyle: D,
                                        flapRef: u,
                                        flapStyle: x,
                                        cardStyle: h,
                                        outerShineStyle: y,
                                        innerShineStyle: v,
                                        shadowStyle: T,
                                        state: l,
                                        api: O,
                                    }
                                );
                            })(l.variation.get()),
                            A = _.api,
                            m = _.flapRef,
                            F = _.flapStyle,
                            D = _.state,
                            p = _.envelopeStyle,
                            g = _.rootStyle,
                            C = _.stampStyle,
                            B = _.cardStyle,
                            v = _.innerShineStyle,
                            b = _.outerShineStyle,
                            f = _.shadowStyle,
                            y = null != (u = ot(e)) ? u : e,
                            w = st(),
                            x = st(),
                            S = (u) => () => {
                                [Ot.Open, Ot.Hold, Ot.Init].includes(D.current) || 0 !== e || u();
                            },
                            T = S(() => {
                                (i('onEnvelopeEnter'), A.enter(), o.O.sound.play.sound(tu));
                            }),
                            k = S(() => {
                                (i('onEnvelopeLeave'), A.leave(), o.O.sound.play.sound(nu));
                            }),
                            O = S(() => {
                                (c.openEnvelope(), A.hold(), o.O.sound.play.sound(mu));
                            });
                        (q(() => {
                            if (d.state === Ve.FILL)
                                (g.opacity.set(1), A.open({ immediate: !0 }), A.dropEnvelope(0, 0));
                            else {
                                var u, t;
                                const n = l.computes.envelopes(),
                                    a = l.postTurnAnimation.get() && d.dayId <= Qe + 3;
                                A.show({
                                    index: e,
                                    immediate: !a && !d.initialAnimationRequired,
                                    firstImmediate: !(a || (null != (u = n[0]) && u.initialAnimationRequired)),
                                    secondImmediate: !(a || (null != (t = n[1]) && t.initialAnimationRequired)),
                                    envelopesCount: n.length,
                                    delayed: !a,
                                });
                            }
                        }),
                            (0, n.useEffect)(() => {
                                e !== y && (0 === e && o.O.sound.play.sound(au), A.rotate(e));
                            }, [A, e, y]),
                            (0, n.useEffect)(
                                () =>
                                    r('onInvoiceProcessed', () => {
                                        var u;
                                        0 === e &&
                                            ('announcement' === l.variation.get() && c.setChapter(2),
                                            null == (u = x.ref.current) || u.setCurrentTime(2.5),
                                            o.O.sound.play.sound(cu),
                                            A.open({
                                                onFinish: c.openRewardScreen,
                                                onFlip: () => {
                                                    var e;
                                                    return null == (e = x.ref.current) ? void 0 : e.play();
                                                },
                                            }));
                                    }),
                                [A, c, e, x.ref, l.variation, r],
                            ),
                            (0, n.useEffect)(
                                () =>
                                    r('onInvoiceRejected', () => {
                                        0 === e && A.leave();
                                    }),
                                [A, e, r],
                            ));
                        const L = () => {
                            A.hideInnerShine();
                            const e = 1 === l.computes.envelopes().length;
                            l.animationDisabled.get()
                                ? (E.run(() => i('onCardAnimationEnd'), 200),
                                  d.dayId === Qe && i('onTransitionEnvelopeOpened'),
                                  c.openCardPreview(d.dayId, !0),
                                  e ? (A.dropEnvelope(0), A.hideCard()) : A.hideEnvelope(0))
                                : E.run(() => {
                                      var u;
                                      o.O.sound.play.sound(ou);
                                      const t = { flightEnd: !1, cardFixation: !1 },
                                          n =
                                              null == (u = w.ref.current)
                                                  ? void 0
                                                  : u.onChangeTime(({ currentTime: e }) => {
                                                        (!t.flightEnd &&
                                                            e > 2.3 &&
                                                            ((t.flightEnd = !0),
                                                            d.special
                                                                ? o.O.sound.play.sound(su)
                                                                : o.O.sound.play.sound(iu)),
                                                            !t.cardFixation &&
                                                                e > 3.3 &&
                                                                ((t.cardFixation = !0), o.O.sound.play.sound(lu)));
                                                    });
                                      (w.play(() => {
                                          (null == n || n(), c.openCardPreview(d.dayId, !0));
                                      }, JSON.stringify(d)),
                                          e ? A.dropEnvelope() : A.hideEnvelope(),
                                          d.dayId === Qe && E.run(() => i('onTransitionEnvelopeOpened'), 1e3));
                                  }, 400);
                        };
                        ((0, n.useEffect)(
                            () =>
                                r('onRegularRewardsReceived', () => {
                                    0 === e && (d.dayId === Qe ? i('onTransitionAnimationStart') : L());
                                }),
                            [L, e, r, d.dayId, i],
                        ),
                            (0, n.useEffect)(
                                () =>
                                    r('onTransitionAnimationEnd', () => {
                                        0 === e && L();
                                    }),
                                [L, e, r],
                            ),
                            (0, n.useEffect)(
                                () =>
                                    r('onTransitionEnvelopeOpened', () => {
                                        A.toggleVisibility(!1, e);
                                    }),
                                [A, e, r],
                            ),
                            (0, n.useEffect)(
                                () =>
                                    r('onTurnAnimationStart', () => {
                                        0 === e && B.opacity.set(0);
                                    }),
                                [B.opacity, e, r],
                            ),
                            (0, n.useEffect)(
                                () =>
                                    r('onTurnAnimationEnd', () => {
                                        A.toggleVisibility(!0, e);
                                    }),
                                [A, e, r],
                            ),
                            (0, n.useEffect)(() => r('onSlotEnter', T), [T, r]),
                            (0, n.useEffect)(() => r('onSlotLeave', k), [k, r]),
                            (0, n.useEffect)(() => r('onSlotClick', O), [O, r]));
                        const I = (() => {
                            if (Ze === d.dayId)
                                return {
                                    header: R.strings.wot_anniversary.envelopeTooltip.opened.last.title(),
                                    body: R.strings.wot_anniversary.envelopeTooltip.opened.last.description(),
                                };
                            const e = l.computes.firstLockedTimestamp();
                            if (!e) return;
                            const u = { time: Hu(e) };
                            return Iu(e)
                                ? {
                                      header: R.strings.wot_anniversary.envelopeTooltip.opened.any.title(),
                                      body: R.strings.wot_anniversary.envelopeTooltip.opened.any.today.description(),
                                      bindings: u,
                                  }
                                : Ru(e)
                                  ? {
                                        header: R.strings.wot_anniversary.envelopeTooltip.opened.any.title(),
                                        body: R.strings.wot_anniversary.envelopeTooltip.opened.any.tomorrow.description(),
                                        bindings: u,
                                    }
                                  : void 0;
                        })();
                        return a().createElement(
                            it.animated.div,
                            {
                                className: h()(
                                    lt.base,
                                    0 === e && d.state === Ve.READY && lt.base__active,
                                    lt[`base__${l.variation.get()}`],
                                    l.interactionBlock.get() && lt.base__disabled,
                                ),
                                style: Object.assign({}, g, { zIndex: 100 - e }),
                                onClick: O,
                                onMouseEnter: T,
                                onMouseLeave: k,
                            },
                            a().createElement(
                                it.animated.div,
                                { className: lt.group, style: p },
                                a().createElement(it.animated.div, { className: lt.shadow, style: f }),
                                a().createElement('div', { className: h()(lt.layer, lt.layer__back) }),
                                a().createElement('div', { className: h()(lt.layer, lt.layer__front) }),
                                a().createElement(it.animated.canvas, {
                                    ref: m,
                                    className: lt.flap,
                                    style: F,
                                    width: 500,
                                    height: 500,
                                }),
                                d.state !== Ve.FILL &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(
                                            it.animated.div,
                                            { className: lt.stamp, style: C },
                                            Pu(d.openTimestamp, Mu.DayMonthAbbreviated, !0),
                                        ),
                                        0 === e &&
                                            a().createElement(
                                                it.animated.div,
                                                { className: lt.innerRays, style: { clipPath: v.clipPath } },
                                                a().createElement(it.animated.div, {
                                                    className: lt.innerRaysL,
                                                    style: { opacity: v.opacity },
                                                }),
                                                a().createElement(it.animated.div, {
                                                    className: lt.innerRaysR,
                                                    style: { opacity: v.opacity },
                                                }),
                                            ),
                                        a().createElement(
                                            it.animated.div,
                                            { className: lt.innerShineWrapper, style: v },
                                            a().createElement(J, {
                                                ref: x.ref,
                                                className: lt.innerShine,
                                                src: R.videos.wot_anniversary.innerShine(),
                                            }),
                                        ),
                                        a().createElement(
                                            it.animated.div,
                                            { className: lt.outerShineWrapper, style: b },
                                            a().createElement(J, {
                                                className: lt.outerShine,
                                                src: R.videos.wot_anniversary.outerShine(),
                                                autoplay: !0,
                                                loop: !0,
                                            }),
                                        ),
                                        l.animationDisabled.get() &&
                                            d.video &&
                                            a().createElement(
                                                it.animated.div,
                                                { className: lt.cardWrapper, style: B },
                                                a().createElement(J, { ref: w.ref, className: lt.card, src: d.video }),
                                            ),
                                    ),
                                d.state === Ve.FILL &&
                                    a().createElement(
                                        Vu,
                                        { tooltipArgs: I },
                                        a().createElement(
                                            'div',
                                            { className: lt.tooltip },
                                            a().createElement('div', { className: lt.tooltipFlap }),
                                        ),
                                    ),
                            ),
                            !l.animationDisabled.get() &&
                                d.video &&
                                d.state !== Ve.FILL &&
                                a().createElement(
                                    it.animated.div,
                                    { className: lt.cardWrapper, style: B },
                                    a().createElement(J, { ref: w.ref, className: lt.card, src: d.video }),
                                ),
                            l.envelopeOpening.get() &&
                                0 === e &&
                                a().createElement(
                                    'div',
                                    { className: lt.loader },
                                    a().createElement('div', { className: lt.spinner }),
                                    a().createElement(
                                        'div',
                                        null,
                                        R.strings.wot_anniversary.albumView.envelope.opening(),
                                    ),
                                ),
                        );
                    }),
                    Nt = 'Envelopes_wrapper_ee',
                    Pt = 'Envelopes_base_2b',
                    Ht = (0, re.Pi)(() => {
                        const e = gu().model.computes.envelopes().slice(0, 3);
                        return a().createElement(
                            'div',
                            { className: Nt },
                            a().createElement(
                                'div',
                                { className: Pt },
                                e.map((e, u) => a().createElement(Mt, { key: e.dayId, index: u })),
                            ),
                        );
                    }),
                    Wt = (0, re.Pi)(() => {
                        const e = gu(),
                            u = e.model,
                            t = e.controls,
                            r = Zu().on;
                        return (
                            (0, n.useEffect)(
                                () =>
                                    r('onTurnAnimationEnd', () => {
                                        u.computes.envelopes().length > 1 && t.togglePostTurnAnimation();
                                    }),
                                [t, u.computes, r],
                            ),
                            a().createElement(Ht, { key: u.postTurnAnimation.get().toString() })
                        );
                    });
                let $t;
                !(function (e) {
                    ((e.RECEIVED = 'received'), (e.IN_PROGRESS = 'inProgress'), (e.LOCKED = 'locked'));
                })($t || ($t = {}));
                const jt = 'success',
                    Ut = {
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
                        bezier: (e, u, t, n) => (a) =>
                            (1 - a) * (1 - a) * (1 - a) * e +
                            3 * (1 - a) * (1 - a) * a * u +
                            3 * (1 - a) * a * a * t +
                            a * a * a * n,
                    },
                    Gt = 'ProgressionDivider_base_82',
                    Vt = 'ProgressionDivider_lock_17',
                    zt = 'ProgressionDivider_divider_64',
                    Kt = 'ProgressionDivider_line_72',
                    qt = 'ProgressionDivider_line__mirrored_47',
                    Yt = 'ProgressionDivider_lineFill_7b',
                    Xt = '-12rem',
                    Qt = '-14rem',
                    Zt = '-18rem',
                    Jt = { opacity: 1, y: 0 },
                    en = { opacity: 0, y: -6 },
                    un = ({ state: e, className: u }) => {
                        const t = ot(e),
                            r = y().mediaSize,
                            i = ((e) => (e === v.ExtraSmall || e === v.Small ? Xt : e === v.Medium ? Qt : Zt))(r),
                            s = (0, it.useSpring)(() => (e === $t.LOCKED ? Jt : en)),
                            l = s[0],
                            c = s[1],
                            d = (0, it.useSpring)(
                                () => ({ transform: e === $t.LOCKED ? `translateX(${i})` : 'translateX(0)' }),
                                [r],
                            ),
                            E = d[0],
                            _ = d[1];
                        return (
                            (0, n.useEffect)(() => {
                                t === $t.LOCKED &&
                                    e === $t.IN_PROGRESS &&
                                    c.start({
                                        from: Jt,
                                        to: en,
                                        delay: 600,
                                        config: { duration: 600, easing: Ut.easeOutQuad },
                                        onStart: () => {
                                            o.O.sound.play.sound(_u);
                                        },
                                        onRest: () => {
                                            _.start({
                                                from: { transform: `translateX(${i})` },
                                                to: { transform: 'translateX(0)' },
                                                delay: 300,
                                                config: { duration: 600, easing: Ut.easeOutQuad },
                                            });
                                        },
                                    });
                            }, [c, e, t, _, i]),
                            a().createElement(
                                'div',
                                { className: h()(Gt, u) },
                                a().createElement(
                                    'div',
                                    { className: zt },
                                    a().createElement(
                                        'div',
                                        { className: Kt },
                                        a().createElement(it.animated.div, { className: Yt, style: E }),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: h()(Kt, qt) },
                                        a().createElement(it.animated.div, { className: Yt, style: E }),
                                    ),
                                ),
                                a().createElement(
                                    Vu,
                                    {
                                        tooltipArgs: {
                                            header: R.strings.wot_anniversary.progressionLockTooltip.title(),
                                            body: R.strings.wot_anniversary.progressionLockTooltip.description(),
                                        },
                                        enabled: e === $t.LOCKED,
                                    },
                                    a().createElement(it.animated.div, { className: Vt, style: l }),
                                ),
                            )
                        );
                    },
                    tn = {
                        reward: 'ProgressionItem_reward_f5',
                        caption: 'ProgressionItem_caption_be',
                        captionItem: 'ProgressionItem_captionItem_5c',
                        points: 'ProgressionItem_points_e8',
                        pointsDivider: 'ProgressionItem_pointsDivider_ef',
                        envelop: 'ProgressionItem_envelop_b1',
                        received: 'ProgressionItem_received_4c',
                        check: 'ProgressionItem_check_30',
                    },
                    nn = 600,
                    an = 1200,
                    rn = 'rgba(242, 242, 247, 0.6)',
                    on = '0px 0px 0px transparent',
                    sn = 'brightness(0.84)',
                    ln = ({ actual: e, required: u, state: t, index: r }) => {
                        const i = ot(e),
                            s = ot(t),
                            l = (0, n.useState)(e),
                            c = l[0],
                            d = l[1],
                            E = (0, it.useSpring)(() => ({ opacity: 0.7, filter: sn })),
                            _ = E[0],
                            A = E[1],
                            m = (0, it.useSpring)(() => ({ opacity: 0.6 })),
                            F = m[0],
                            D = m[1],
                            p = (0, it.useSpring)(() => ({ textShadow: on })),
                            g = p[0],
                            h = p[1],
                            C = (0, it.useSpring)(() => ({ color: rn })),
                            B = C[0],
                            v = C[1];
                        return (
                            (0, n.useEffect)(() => {
                                i !== e &&
                                    t === $t.IN_PROGRESS &&
                                    h.start({
                                        from: { textShadow: on },
                                        to: { textShadow: '0px 0px 5px #fff' },
                                        delay: an,
                                        config: { duration: nn, easing: Ut.easeOutQuad },
                                        reverse: !0,
                                    });
                            }, [e, h, i, t]),
                            (0, n.useEffect)(() => {
                                if (i !== e && t === $t.IN_PROGRESS) {
                                    const u = setTimeout(() => {
                                        d(e);
                                    }, an);
                                    return () => clearTimeout(u);
                                }
                            }, [c, e, i, t]),
                            (0, n.useEffect)(() => {
                                s !== t &&
                                    [$t.IN_PROGRESS, $t.RECEIVED].includes(t) &&
                                    (A.start({
                                        from: { opacity: 0.7, filter: sn },
                                        to: { opacity: 1, filter: 'brightness(1)' },
                                        delay: an,
                                        config: { duration: nn, easing: Ut.easeOutQuad },
                                    }),
                                    D.start({
                                        from: { opacity: 0.6 },
                                        to: { opacity: 1 },
                                        delay: an,
                                        config: { duration: nn, easing: Ut.easeOutQuad },
                                    }),
                                    v.start({
                                        from: { color: rn },
                                        to: { color: 'rgba(242, 242, 247, 1)' },
                                        delay: an,
                                        config: { duration: nn, easing: Ut.easeOutQuad },
                                    }));
                            }, [t, s, A, D, v]),
                            (0, n.useEffect)(() => {
                                s === $t.IN_PROGRESS && t === $t.RECEIVED && o.O.sound.play.sound(Au);
                            }, [e, s, t]),
                            a().createElement(
                                'div',
                                null,
                                a().createElement(
                                    Gu,
                                    {
                                        contentId:
                                            R.views.lobby.wot_anniversary.tooltips.ProgressionBoxTooltip('resId'),
                                        args: { boxIndex: r },
                                    },
                                    a().createElement(it.animated.div, { className: tn.reward, style: _ }),
                                ),
                                t === $t.RECEIVED
                                    ? a().createElement(
                                          'div',
                                          { className: tn.received },
                                          a().createElement('div', { className: tn.check }),
                                      )
                                    : a().createElement(
                                          it.animated.div,
                                          { className: tn.caption, style: F },
                                          a().createElement(
                                              'div',
                                              { className: tn.captionItem },
                                              a().createElement(
                                                  'div',
                                                  { className: tn.points },
                                                  a().createElement(
                                                      it.animated.div,
                                                      { className: tn.activePoints, style: B },
                                                      a().createElement(it.animated.div, { style: g }, c),
                                                  ),
                                                  a().createElement('span', { className: tn.pointsDivider }, '/'),
                                                  u,
                                              ),
                                          ),
                                          a().createElement(
                                              'div',
                                              { className: tn.captionItem },
                                              a().createElement('div', { className: tn.envelop }),
                                          ),
                                      ),
                            )
                        );
                    },
                    cn = 'Footer_base_06',
                    dn = 'Footer_infoWrapper_68',
                    En = 'Footer_info_c8',
                    _n = 'Footer_icon_67',
                    An = 'Footer_progression_70',
                    mn = 'Footer_divider_e7',
                    Fn = R.strings.wot_anniversary.progressionInfoTooltip,
                    Dn = (0, re.Pi)(({ className: e }) => {
                        var u;
                        const t = gu().model.progressionSteps.get(),
                            n = (null == (u = ze(t, t.length - 1)) ? void 0 : u.state) === $t.RECEIVED;
                        return a().createElement(
                            'div',
                            { className: h()(cn, e) },
                            a().createElement(
                                'div',
                                { className: An },
                                ((r = t),
                                (o = ({ state: e, actual: u, required: t }, n) =>
                                    a().createElement(
                                        a().Fragment,
                                        { key: n },
                                        0 !== n && a().createElement(un, { state: e, className: mn }),
                                        a().createElement(ln, { index: n, required: t, actual: u, state: e }),
                                    )),
                                Array.isArray(r)
                                    ? r.map(o)
                                    : r.map((e, u, t) => o(null == e ? void 0 : e.value, u, t))),
                            ),
                            a().createElement(
                                'div',
                                { className: dn },
                                a().createElement(
                                    Vu,
                                    {
                                        tooltipArgs: Object.assign(
                                            {
                                                header: Fn.title(),
                                                body: n ? Fn.completed.description() : Fn.description(),
                                            },
                                            n && { bodyIcon: jt },
                                        ),
                                    },
                                    a().createElement(
                                        'div',
                                        null,
                                        a().createElement(j, {
                                            classNames: { base: En, icon: _n },
                                            caption: '',
                                            type: 'info',
                                            side: 'left',
                                        }),
                                    ),
                                ),
                            ),
                        );
                        var r, o;
                    }),
                    pn = {
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
                    gn = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    hn = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Cn = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Bn = (0, n.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            o = (0, n.useMemo)(() => u || {}, [u]);
                        let i = gn.exec(e),
                            s = e,
                            l = 0;
                        for (; i;) {
                            const t = i[0],
                                n = hn.exec(t),
                                c = Cn.exec(t),
                                d = i[1];
                            if (n && c) {
                                const e = n[0],
                                    i = e + l++ + e;
                                ((s = s.replace(t, `%(${i})`)),
                                    (o[i] = pn[e]
                                        ? a().createElement(
                                              'span',
                                              { className: pn[e] },
                                              a().createElement(Se, { text: d, binding: u }),
                                          )
                                        : a().createElement(
                                              'span',
                                              { style: r(e) },
                                              a().createElement(Se, { text: d, binding: u }),
                                          )));
                            }
                            i = gn.exec(e);
                        }
                        return a().createElement(Se, { text: s, classMix: t, binding: o });
                    }),
                    vn = 'Header_base_4c',
                    bn = 'Header_title_6d',
                    fn = 'Header_subTitle_68',
                    yn = (0, re.Pi)(({ className: e }) => {
                        const u = gu().model;
                        return a().createElement(
                            'span',
                            { className: h()(vn, e) },
                            a().createElement('div', { className: bn }, R.strings.wot_anniversary.albumView.title()),
                            a().createElement(
                                'div',
                                { className: fn },
                                a().createElement(Bn, {
                                    text: R.strings.wot_anniversary.albumView.subTitle(),
                                    binding:
                                        ((t = u.startDate.get()),
                                        (n = u.endDate.get()),
                                        { startDate: Pu(t, Mu.DayMonthFull, !0), endDate: Pu(n, Mu.DayMonthFull, !0) }),
                                }),
                            ),
                        );
                        var t, n;
                    }),
                    wn = 'Spinner_base_87',
                    xn = 'Spinner_caption_cf',
                    Sn = 'Spinner_gear_c4',
                    Tn = 'Spinner_logo_bf',
                    kn = ({ message: e, className: u, classNames: t }) =>
                        a().createElement(
                            'div',
                            { className: h()(wn, u) },
                            e && a().createElement('div', { className: h()(xn, null == t ? void 0 : t.caption) }, e),
                            a().createElement('div', { className: h()(Sn, null == t ? void 0 : t.gear) }),
                            a().createElement('div', { className: h()(Tn, null == t ? void 0 : t.logo) }),
                        ),
                    On = {
                        base: 'Loading_base_74',
                        base__fadeOut: 'Loading_base__fadeOut_b3',
                        fadeOut: 'Loading_fadeOut_85',
                        content: 'Loading_content_ba',
                        bg: 'Loading_bg_2f',
                        base__historical: 'Loading_base__historical_00',
                        base__announcement: 'Loading_base__announcement_80',
                        album: 'Loading_album_c9',
                        shadow: 'Loading_shadow_16',
                        caption: 'Loading_caption_6b',
                    },
                    Ln = (0, re.Pi)(() => {
                        const e = gu().model,
                            u = ku({ timeout: 1600, getValue: z, items: e.resourceLoading.get() ? ['loading'] : [] });
                        return a().createElement(
                            a().Fragment,
                            null,
                            u.map(({ state: u }) =>
                                a().createElement(
                                    'div',
                                    {
                                        key: 'loading',
                                        className: h()(
                                            On.base,
                                            On[`base__${e.variation.get()}`],
                                            'removing' === u && On.base__fadeOut,
                                        ),
                                    },
                                    a().createElement(
                                        'div',
                                        { className: On.content },
                                        a().createElement('div', { className: On.bg }),
                                        a().createElement('div', { className: On.album }),
                                        a().createElement(J, {
                                            className: h()(On.shadow),
                                            src: R.videos.wot_anniversary.bookShadow(),
                                            loop: !0,
                                            autoplay: !0,
                                        }),
                                    ),
                                    a().createElement(kn, {
                                        classNames: { caption: On.caption },
                                        message: R.strings.wot_anniversary.albumView.resourceLoading(),
                                    }),
                                ),
                            ),
                        );
                    }),
                    In = 'TransitionAnimation_base_0c',
                    Rn = 'TransitionAnimation_videoWrapper_90',
                    Mn = 'TransitionAnimation_videoWrapper__transition_96',
                    Nn = 'TransitionAnimation_video_45',
                    Pn = { 1: 'conversionOneEnv', 2: 'conversionTwoEnvs', 3: 'conversionThreeEnvs' },
                    Hn = (0, re.Pi)(() => {
                        const e = gu(),
                            u = e.model,
                            t = e.controls,
                            n = Zu(),
                            r = n.once,
                            i = n.trigger,
                            s = st(),
                            l = st(),
                            c = u.videos.get(),
                            d = (0, it.useSpring)(() => ({ opacity: 0 }))[0],
                            E = (0, it.useSpring)(() => ({ opacity: 0 }))[0],
                            _ = (0, it.useSpring)(() => ({ opacity: 0 })),
                            A = _[0],
                            m = _[1],
                            F = (0, it.useSpring)(() => ({ opacity: 0 }))[0],
                            D = Tu(),
                            p = u.computes.envelopes()[0];
                        return (
                            q(() =>
                                r('onTransitionAnimationStart', () => {
                                    const e = (e) => {
                                        (d.opacity.set(e), E.opacity.set(e), F.opacity.set(e));
                                    };
                                    (e(1),
                                        t.setVariation('announcement'),
                                        o.O.sound.play.sound(Eu),
                                        s.play(() => {
                                            (e(0), i('onTransitionAnimationEnd'));
                                        }, 'Transition animation error'));
                                }),
                            ),
                            q(() =>
                                r('onTurnAnimationStart', () => {
                                    (d.opacity.set(1),
                                        A.opacity.set(1),
                                        F.opacity.set(0),
                                        t.setChapter(2),
                                        o.O.sound.play.sound(du),
                                        l.play(() => {
                                            m.start({
                                                to: { opacity: 0 },
                                                config: { easing: Et, duration: 600 },
                                                onRest: () => {
                                                    (d.opacity.set(0),
                                                        i('onTurnAnimationEnd'),
                                                        D.run(() => t.finishTurnAnimation(), 400));
                                                },
                                            });
                                        }, 'Turn animation error'));
                                }),
                            ),
                            p && p.dayId === Qe
                                ? a().createElement(
                                      it.animated.div,
                                      { className: In, style: d },
                                      a().createElement(
                                          it.animated.div,
                                          { className: h()(Rn, Mn), style: E },
                                          a().createElement(J, {
                                              className: Nn,
                                              ref: s.ref,
                                              src: c[Pn[Math.min(u.computes.envelopes().length, 3)]],
                                          }),
                                      ),
                                      a().createElement(
                                          it.animated.div,
                                          { className: Rn, style: A },
                                          a().createElement(J, { className: Nn, ref: l.ref, src: c.turnPage }),
                                      ),
                                      a().createElement(
                                          it.animated.div,
                                          { className: Ou.base, style: F },
                                          a().createElement(Se, {
                                              classMix: Ou.label,
                                              text: R.strings.wot_anniversary.albumView.chapter(),
                                              binding: { chapter: u.chapter.get() },
                                          }),
                                      ),
                                      p &&
                                          a().createElement(
                                              it.animated.div,
                                              { className: Nt, style: E },
                                              a().createElement(
                                                  'div',
                                                  { className: Pt },
                                                  a().createElement(
                                                      'div',
                                                      { className: lt.base },
                                                      a().createElement(
                                                          'div',
                                                          { className: lt.stamp },
                                                          Pu(p.openTimestamp, Mu.DayMonthAbbreviated, !1),
                                                      ),
                                                  ),
                                              ),
                                          ),
                                  )
                                : null
                        );
                    }),
                    Wn = (e, u) => Object.keys(u).reduce((t, n) => ((t[`--${e}-${n}`] = `url("${u[n]}")`), t), {}),
                    $n = (0, re.Pi)(() => {
                        const e = gu(),
                            u = e.model,
                            t = e.controls,
                            r = (0, n.useRef)(null),
                            o = (0, n.useRef)(null);
                        var i, s;
                        return (
                            (i = [
                                ...Object.values(u.firstFilledOverlay.get()),
                                ...Object.values(u.secondFilledOverlay.get()),
                            ]),
                            (0, n.useEffect)(
                                () =>
                                    U(() => {
                                        i.forEach((e) => {
                                            new Image().src = e;
                                        });
                                    }),
                                [i],
                            ),
                            (s = t.close),
                            ne(ee.n.ESCAPE, s),
                            q(() => {
                                const e = Date.now();
                                o.current &&
                                    r.current &&
                                    ((o.current.domRef.style.opacity = '0'), (r.current.style.opacity = '1'));
                                const u = setInterval(() => {
                                    if ((e + 1e4 < Date.now() && clearInterval(u), !o.current || !r.current)) return;
                                    (o.current.getCurrentTime() || 0) > 0.2 &&
                                        ((o.current.domRef.style.opacity = '1'),
                                        (r.current.style.opacity = '0'),
                                        clearInterval(u));
                                }, 50);
                                return () => clearInterval(u);
                            }),
                            q(() => {
                                var e;
                                return (
                                    null == (e = o.current) || e.play(),
                                    (0, ae.U5)(
                                        () => u.interactionBlock.get(),
                                        (e) => {
                                            var u, t;
                                            e
                                                ? null == (u = o.current) || u.pause()
                                                : null == (t = o.current) || t.play();
                                        },
                                    )
                                );
                            }),
                            a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(
                                    'div',
                                    {
                                        className: h()(hu.base, u.interactionBlock.get() && hu.base__disabled),
                                        lang: R.strings.settings.LANGUAGE_CODE(),
                                        style: Object.assign(
                                            {},
                                            Wn('historical', u.firstFilledOverlay.get()),
                                            Wn('announcement', u.secondFilledOverlay.get()),
                                        ),
                                    },
                                    a().createElement(
                                        'div',
                                        {
                                            className: h()(
                                                hu.content,
                                                hu.content__ready,
                                                u.blur.get() && hu.content__blurred,
                                            ),
                                        },
                                        a().createElement('div', {
                                            className: h()(hu.background, hu[`background__${u.variation.get()}`]),
                                        }),
                                        a().createElement(nt, null),
                                        a().createElement(Wt, null),
                                        a().createElement(Hn, null),
                                        a().createElement('div', { ref: r, className: hu.shadowPoster }),
                                        a().createElement(J, {
                                            ref: o,
                                            className: h()(hu.shadow),
                                            src: R.videos.wot_anniversary.bookShadow(),
                                            loop: !0,
                                        }),
                                        a().createElement(j, {
                                            caption: R.strings.wot_anniversary.albumView.aboutEvent(),
                                            classNames: { base: hu.infoButton },
                                            type: 'info',
                                            side: 'left',
                                            onClick: t.openInfoPage,
                                        }),
                                        a().createElement(Su, { className: hu.switcher }),
                                        a().createElement('div', { className: hu.header }, a().createElement(yn, null)),
                                        a().createElement(Dn, { className: hu.footer }),
                                        a().createElement(Ln, null),
                                        a().createElement(j, {
                                            caption: R.strings.wot_anniversary.albumView.close(),
                                            classNames: { base: hu.close },
                                            type: 'close',
                                            side: 'right',
                                            onClick: t.close,
                                        }),
                                    ),
                                ),
                                u.envelopeCardOpened.get() &&
                                    a().createElement(
                                        Re,
                                        { options: { context: 'model.envelopeCard' } },
                                        a().createElement(Ge, null),
                                    ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    N().render(
                        a().createElement(
                            I,
                            null,
                            a().createElement(pu, null, a().createElement(Qu, null, a().createElement($n, null))),
                        ),
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
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], r = !0, o = 0; o < u.length; o++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
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
        (__webpack_require__.j = 305),
        (() => {
            var e = { 305: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, o, i] = t,
                        s = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); s < r.length; s++)
                        ((a = r[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [46], () => __webpack_require__(590));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
