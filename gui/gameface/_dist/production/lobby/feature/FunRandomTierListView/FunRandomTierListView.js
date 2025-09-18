(() => {
    var __webpack_modules__ = {
            926: (u) => {
                u.exports = {
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
            2472: (u, e, t) => {
                'use strict';
                function r(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => r });
            },
            9060: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => f });
                var r = {};
                (t.r(r),
                    t.d(r, { mouse: () => A, off: () => E, on: () => l, onResize: () => o, onScaleUpdated: () => s }));
                var n = {};
                (t.r(n),
                    t.d(n, {
                        events: () => r,
                        getMouseGlobalPosition: () => B,
                        getSize: () => d,
                        graphicsQuality: () => m,
                        playSound: () => F,
                        setRTPC: () => D,
                    }));
                var a = t(2472);
                function i(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                const o = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    l = (u, e) => engine.on(u, e),
                    E = (u, e) => engine.off(u, e),
                    c = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    A = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && i(!1);
                        }
                        function t() {
                            u.enabled && i(!0);
                        }
                        function r() {
                            u.enabled
                                ? u.listeners < 1
                                    ? ((u.initialized = !1),
                                      document.body.removeEventListener('mouseenter', e),
                                      document.body.removeEventListener('mouseleave', t))
                                    : u.initialized ||
                                      ((u.initialized = !0),
                                      document.body.addEventListener('mouseenter', e),
                                      document.body.addEventListener('mouseleave', t))
                                : i(!1);
                        }
                        const n = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let n = !0;
                                        const a = `mouse${e}`,
                                            i = c[e]((u) => t([u, 'outside']));
                                        function o(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, o),
                                            r(),
                                            () => {
                                                n &&
                                                    (i(),
                                                    window.removeEventListener(a, o),
                                                    (u.listeners -= 1),
                                                    r(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                e
                            ),
                            {},
                        );
                        return Object.assign({}, n, {
                            disable() {
                                ((u.enabled = !1), r());
                            },
                            enable() {
                                ((u.enabled = !0), r());
                            },
                            enableOutside() {
                                u.enabled && i(!0);
                            },
                            disableOutside() {
                                u.enabled && i(!1);
                            },
                        });
                    })();
                function F(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function D(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                function d(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function B(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const m = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    _ = {
                        toUpperCase: (u) => window.systemLocale.toUpperCase(u),
                        toLowerCase: (u) => window.systemLocale.toLowerCase(u),
                    },
                    C = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    g = Object.keys(C).reduce((u, e) => ((u[e] = () => F(C[e])), u), {}),
                    p = { play: Object.assign({}, g, { sound: F }), setRTPC: D },
                    f = { view: t(2031), client: n, sound: p, intl: _ };
            },
            2031: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        addModelObserver: () => B,
                        addPreloadTexture: () => F,
                        arabic2roman: () => P,
                        children: () => r,
                        displayStatus: () => o,
                        displayStatusIs: () => O,
                        enableFullScreenModeSupported: () => N,
                        events: () => l,
                        extraSize: () => M,
                        forceTriggerMouseMove: () => R,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => x,
                        getExternalPaddingsRem: () => L,
                        getFontNames: () => y,
                        getScale: () => f,
                        getSize: () => _,
                        getViewGlobalPosition: () => g,
                        initExternalPaddings: () => I,
                        isEventHandled: () => S,
                        isFocused: () => w,
                        pxToRem: () => h,
                        remToPx: () => v,
                        resize: () => C,
                        sendEvent: () => A,
                        setAnimateWindow: () => b,
                        setEventHandled: () => T,
                        setInputPaddingsRem: () => D,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => k,
                    }));
                var r = {};
                (t.r(r), t.d(r, { getBgUrl: () => i, getTextureUrl: () => a }));
                var n = t(9690);
                function a(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function i(u, e, t) {
                    return `url(${a(u, e, t)})`;
                }
                const o = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
                var s = t(2472);
                const l = {
                        onTextureFrozen: (0, s.E)('self.onTextureFrozen'),
                        onTextureReady: (0, s.E)('self.onTextureReady'),
                        onDomBuilt: (0, s.E)('self.onDomBuilt'),
                        onLoaded: (0, s.E)('self.onLoaded'),
                        onDisplayChanged: (0, s.E)('self.onShowingStatusChanged'),
                        onFocusUpdated: (0, s.E)('self.onFocusChanged'),
                        children: {
                            onAdded: (0, s.E)('children.onAdded'),
                            onLoaded: (0, s.E)('children.onLoaded'),
                            onRemoved: (0, s.E)('children.onRemoved'),
                            onAttached: (0, s.E)('children.onAttached'),
                            onTextureReady: (0, s.E)('children.onTextureReady'),
                            onRequestPosition: (0, s.E)('children.requestPosition'),
                        },
                    },
                    E = ['args'],
                    c = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(e, E);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([u, e]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: t, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: t, name: u, bool: e };
                                                      default:
                                                          return { __Type: t, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    A = {
                        close(u) {
                            c('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            c(64);
                        },
                        move(u) {
                            c(16, { isMouseEvent: !0, on: u });
                        },
                    };
                function F(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function D(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function d(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function B(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function m(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function _(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function C(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function g(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: v(e.x), y: v(e.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function f() {
                    return viewEnv.getScale();
                }
                function h(u) {
                    return viewEnv.pxToRem(u);
                }
                function v(u) {
                    return viewEnv.remToPx(u);
                }
                function b(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function w() {
                    return viewEnv.isFocused();
                }
                function T() {
                    return viewEnv.setEventHandled();
                }
                function S() {
                    return viewEnv.isEventHandled();
                }
                function R() {
                    viewEnv.forceTriggerMouseMove();
                }
                function x() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let u = [];
                        return () => (0 === u.length && (u = Object.keys(viewEnv.getFontsConfig())), u);
                    })(),
                    P = n.cg;
                function L() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const O = Object.keys(o).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === o[e]), u), {}),
                    M = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    k = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : l.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
                function N() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function I(u) {
                    function e() {
                        const e = viewEnv.getExternalPaddingsRem(),
                            t = e.top,
                            r = e.right,
                            n = e.bottom,
                            a = e.left;
                        (u.style.setProperty('--external-padding-top', `${t}rem`),
                            u.style.setProperty('--external-padding-right', `${r}rem`),
                            u.style.setProperty('--external-padding-bottom', `${n}rem`),
                            u.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (e(), engine.on('self.onPaddingsUpdated', () => e()));
                }
            },
            5521: (u, e, t) => {
                'use strict';
                let r, n;
                (t.d(e, { n: () => r }),
                    (function (u) {
                        ((u[(u.NONE = -1)] = 'NONE'),
                            (u[(u.ALT = 165)] = 'ALT'),
                            (u[(u.ENTER = 13)] = 'ENTER'),
                            (u[(u.ESCAPE = 27)] = 'ESCAPE'),
                            (u[(u.SPACE = 32)] = 'SPACE'),
                            (u[(u.END = 35)] = 'END'),
                            (u[(u.HOME = 36)] = 'HOME'),
                            (u[(u.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (u[(u.ARROW_UP = 38)] = 'ARROW_UP'),
                            (u[(u.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (u[(u.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (u[(u.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (u[(u.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (u[(u.PLUS = 187)] = 'PLUS'),
                            (u[(u.MINUS = 189)] = 'MINUS'),
                            (u[(u.PAGE_UP = 33)] = 'PAGE_UP'),
                            (u[(u.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (u[(u.BACKSPACE = 8)] = 'BACKSPACE'),
                            (u[(u.DELETE = 46)] = 'DELETE'),
                            (u[(u.TAB = 9)] = 'TAB'),
                            (u[(u.KEY_N = 78)] = 'KEY_N'),
                            (u[(u.KEY_1 = 49)] = 'KEY_1'),
                            (u[(u.KEY_2 = 50)] = 'KEY_2'),
                            (u[(u.KEY_3 = 51)] = 'KEY_3'),
                            (u[(u.KEY_4 = 52)] = 'KEY_4'),
                            (u[(u.KEY_5 = 53)] = 'KEY_5'),
                            (u[(u.KEY_6 = 54)] = 'KEY_6'),
                            (u[(u.KEY_7 = 55)] = 'KEY_7'),
                            (u[(u.KEY_8 = 56)] = 'KEY_8'),
                            (u[(u.KEY_9 = 57)] = 'KEY_9'));
                    })(r || (r = {})),
                    (function (u) {
                        ((u.ALT = 'Alt'),
                            (u.ALT_GRAPH = 'AltGraph'),
                            (u.CAPS_LOCK = 'CapsLock'),
                            (u.CONTROL = 'Control'),
                            (u.FN = 'Fn'),
                            (u.FN_LOCK = 'FnLock'),
                            (u.META = 'Meta'),
                            (u.NUM_LOCK = 'NumLock'),
                            (u.SCROLL_LOCK = 'ScrollLock'),
                            (u.SHIFT = 'Shift'),
                            (u.SYMBOL = 'Symbol'),
                            (u.SYMBOL_LOCK = 'SymbolLock'));
                    })(n || (n = {})));
            },
            9690: (u, e, t) => {
                'use strict';
                t.d(e, { cg: () => a });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(u) {
                    let e = '';
                    for (let t = n.length - 1; t >= 0; t--) for (; u >= n[t]; ) ((e += r[t]), (u -= n[t]));
                    return e;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => a });
                var r = t(9060);
                class n {
                    constructor() {
                        ((this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (u) => {
                                this._views[u] &&
                                    (this._views[u].forEach((u) => {
                                        delete this._callbacks[u];
                                    }),
                                    delete this._views[u]);
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
                    addCallback(u, e, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(u, t, n);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", u),
                            a
                        );
                    }
                    removeCallback(u, e = 0) {
                        let t = !1;
                        return (
                            void 0 !== u &&
                                void 0 !== this._callbacks[u] &&
                                ((t = viewEnv.removeDataChangedCallback(u, e)), delete this._callbacks[u]),
                            t || console.error("Can't remove callback by id:", u),
                            t
                        );
                    }
                    _emmitDataChanged(u, e, t) {
                        t.forEach((t) => {
                            const r = this._callbacks[t];
                            void 0 !== r && r(u, e);
                        });
                    }
                }
                n.__instance = void 0;
                const a = n;
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
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    }));
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                (this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers());
                            }));
                    }
                    subscribe(u) {
                        (this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data));
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        (this.dataTracker.clear(), this.callbacks.clear());
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            9916: (u, e, t) => {
                'use strict';
                t.d(e, { B3: () => l, Z5: () => i.Z5, B0: () => o, ry: () => _ });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let r = u.target;
                                    do {
                                        if (r === e) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(u, e) {
                        (this.addMouseListener(), this.entries.push({ container: u, callback: e }));
                    }
                    unregister(u, e) {
                        const t = u,
                            r = e;
                        ((this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== r)),
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
                const n = r;
                var a = t(1358),
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
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var F = t(5521),
                    D = t(9060);
                const d = ['args'];
                function B(u, e, t, r, n, a, i) {
                    try {
                        var o = u[a](i),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(r, n);
                }
                const m = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    _ = (function () {
                        var u,
                            e =
                                ((u = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((u) => {
                                            engine.on('Ready', u);
                                        })
                                    );
                                }),
                                function () {
                                    var e = this,
                                        t = arguments;
                                    return new Promise(function (r, n) {
                                        var a = u.apply(e, t);
                                        function i(u) {
                                            B(a, r, n, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            B(a, r, n, i, o, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(e, d);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([u, e]) => {
                                                  const t = { __Type: 'GFValueProxy', name: u };
                                                  switch (typeof e) {
                                                      case 'number':
                                                          t.number = e;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = e;
                                                          break;
                                                      default:
                                                          t.string = e.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    g = () => C(o.CLOSE),
                    p = (u, e) => {
                        u.keyCode === F.n.ESCAPE && e();
                    };
                var f = t(7572);
                const h = n.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: f.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: E,
                        TimeFormatType: c,
                        DateFormatType: A,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (u) => C(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => C(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            C(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, n = R.invalid('resId'), a) => {
                            const i = D.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                E = s.y,
                                c = s.width,
                                A = s.height,
                                F = {
                                    x: D.O.view.pxToRem(l) + i.x,
                                    y: D.O.view.pxToRem(E) + i.y,
                                    width: D.O.view.pxToRem(c),
                                    height: D.O.view.pxToRem(A),
                                };
                            C(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: m(F),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => p(e, u);
                            return (
                                window.addEventListener('keydown', e),
                                () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            p(u, g);
                        },
                        handleViewEvent: C,
                        onBindingsReady: _,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    const n = Object.prototype.toString.call(e[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[r];
                                        t[r] = [];
                                        for (let e = 0; e < n.length; e++) t[r].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = u(e[r]))
                                            : (t[r] = e[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: h,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (u, e, t) => {
                'use strict';
                t.d(e, { Z5: () => r, cy: () => n });
                const r = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    n = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
            },
            5143: (u, e, t) => {
                'use strict';
                var r = {};
                (t.r(r),
                    t.d(r, {
                        Area: () => Eu,
                        Bar: () => ou,
                        DefaultScroll: () => lu,
                        Direction: () => Q,
                        defaultSettings: () => Z,
                        useHorizontalScrollApi: () => uu,
                    }));
                var n = {};
                (t.r(n), t.d(n, { Area: () => fu, Bar: () => Cu, Default: () => pu, useVerticalScrollApi: () => cu }));
                var a = t(7363),
                    i = t.n(a);
                const o = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var s = t(9060);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var E;
                function c(u = s.O.client.getSize('rem')) {
                    const e = u.width,
                        t = u.height;
                    return Object.assign(
                        { width: e, height: t },
                        (function (u, e, t) {
                            const r = (function (u, e) {
                                    switch (!0) {
                                        case u >= e.extraLarge.width:
                                            return e.extraLarge.weight;
                                        case u >= e.large.width && u < e.extraLarge.width:
                                            return e.large.weight;
                                        case u >= e.medium.width && u < e.large.width:
                                            return e.medium.weight;
                                        case u >= e.small.width && u < e.medium.width:
                                            return e.small.weight;
                                        default:
                                            return e.extraSmall.weight;
                                    }
                                })(u, t),
                                n = (function (u, e) {
                                    switch (!0) {
                                        case u >= e.extraLarge.height:
                                            return e.extraLarge.weight;
                                        case u >= e.large.height && u < e.extraLarge.height:
                                            return e.large.weight;
                                        case u >= e.medium.height && u < e.large.height:
                                            return e.medium.weight;
                                        case u >= e.small.height && u < e.medium.height:
                                            return e.small.weight;
                                        default:
                                            return e.extraSmall.weight;
                                    }
                                })(e, t),
                                a = Math.min(r, n);
                            return {
                                extraLarge: a === t.extraLarge.weight,
                                large: a === t.large.weight,
                                medium: a === t.medium.weight,
                                small: a === t.small.weight,
                                extraSmall: a === t.extraSmall.weight,
                                extraLargeWidth: r === t.extraLarge.weight,
                                largeWidth: r === t.large.weight,
                                mediumWidth: r === t.medium.weight,
                                smallWidth: r === t.small.weight,
                                extraSmallWidth: r === t.extraSmall.weight,
                                extraLargeHeight: n === t.extraLarge.weight,
                                largeHeight: n === t.large.weight,
                                mediumHeight: n === t.medium.weight,
                                smallHeight: n === t.small.weight,
                                extraSmallHeight: n === t.extraSmall.weight,
                            };
                        })(e, t, l),
                    );
                }
                !(function (u) {
                    ((u.extraLarge = 'extraLarge'),
                        (u.large = 'large'),
                        (u.medium = 'medium'),
                        (u.small = 'small'),
                        (u.extraSmall = 'extraSmall'),
                        (u.extraLargeWidth = 'extraLargeWidth'),
                        (u.largeWidth = 'largeWidth'),
                        (u.mediumWidth = 'mediumWidth'),
                        (u.smallWidth = 'smallWidth'),
                        (u.extraSmallWidth = 'extraSmallWidth'),
                        (u.extraLargeHeight = 'extraLargeHeight'),
                        (u.largeHeight = 'largeHeight'),
                        (u.mediumHeight = 'mediumHeight'),
                        (u.smallHeight = 'smallHeight'),
                        (u.extraSmallHeight = 'extraSmallHeight'));
                })(E || (E = {}));
                const A = c(),
                    F = (0, a.createContext)(A),
                    D = ['children'];
                (0, a.memo)((u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(u);
                            for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                            return n;
                        })(u, D);
                    const r = (0, a.useContext)(F),
                        n = r.extraLarge,
                        i = r.large,
                        s = r.medium,
                        l = r.small,
                        E = r.extraSmall,
                        c = r.extraLargeWidth,
                        A = r.largeWidth,
                        d = r.mediumWidth,
                        B = r.smallWidth,
                        m = r.extraSmallWidth,
                        _ = r.extraLargeHeight,
                        C = r.largeHeight,
                        g = r.mediumHeight,
                        p = r.smallHeight,
                        f = r.extraSmallHeight,
                        h = { extraLarge: _, large: C, medium: g, small: p, extraSmall: f };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && n) return e;
                        if (t.large && i) return e;
                        if (t.medium && s) return e;
                        if (t.small && l) return e;
                        if (t.extraSmall && E) return e;
                    } else {
                        if (t.extraLargeWidth && c) return o(e, t, h);
                        if (t.largeWidth && A) return o(e, t, h);
                        if (t.mediumWidth && d) return o(e, t, h);
                        if (t.smallWidth && B) return o(e, t, h);
                        if (t.extraSmallWidth && m) return o(e, t, h);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && _) return e;
                            if (t.largeHeight && C) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && p) return e;
                            if (t.extraSmallHeight && f) return e;
                        }
                    }
                    return null;
                });
                const d = ({ children: u }) => {
                    const e = (0, a.useState)(c),
                        t = e[0],
                        r = e[1],
                        n = (0, a.useState)(!1),
                        o = n[0],
                        l = n[1];
                    return (
                        (0, a.useLayoutEffect)(() => {
                            function u() {
                                r((u) => {
                                    const e = s.O.client.getSize('rem');
                                    return u.width === e.width && u.height === e.height ? u : c(e);
                                });
                            }
                            return (
                                u(),
                                l(!0),
                                s.O.client.events.on('clientResized', u),
                                s.O.client.events.on('self.onScaleUpdated', u),
                                () => {
                                    (s.O.client.events.off('clientResized', u),
                                        s.O.client.events.off('self.onScaleUpdated', u));
                                }
                            );
                        }, []),
                        i().createElement(F.Provider, { value: t }, o && u)
                    );
                };
                var B = t(6483),
                    m = t.n(B),
                    _ = t(926),
                    C = t.n(_);
                let g, p, f;
                (!(function (u) {
                    ((u[(u.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = l.small.width)] = 'Small'),
                        (u[(u.Medium = l.medium.width)] = 'Medium'),
                        (u[(u.Large = l.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(g || (g = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = l.small.width)] = 'Small'),
                            (u[(u.Medium = l.medium.width)] = 'Medium'),
                            (u[(u.Large = l.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(p || (p = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = l.small.height)] = 'Small'),
                            (u[(u.Medium = l.medium.height)] = 'Medium'),
                            (u[(u.Large = l.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(f || (f = {})));
                const h = ['children', 'className'];
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        v.apply(this, arguments)
                    );
                }
                const b = {
                        [p.ExtraSmall]: '',
                        [p.Small]: C().SMALL_WIDTH,
                        [p.Medium]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH}`,
                        [p.Large]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH}`,
                        [p.ExtraLarge]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH} ${C().EXTRA_LARGE_WIDTH}`,
                    },
                    w = {
                        [f.ExtraSmall]: '',
                        [f.Small]: C().SMALL_HEIGHT,
                        [f.Medium]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT}`,
                        [f.Large]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT}`,
                        [f.ExtraLarge]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT} ${C().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [g.ExtraSmall]: '',
                        [g.Small]: C().SMALL,
                        [g.Medium]: `${C().SMALL} ${C().MEDIUM}`,
                        [g.Large]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE}`,
                        [g.ExtraLarge]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE} ${C().EXTRA_LARGE}`,
                    },
                    S = (u) => {
                        let e = u.children,
                            t = u.className,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, h);
                        const n = (() => {
                                const u = (0, a.useContext)(F),
                                    e = u.width,
                                    t = u.height,
                                    r = ((u) => {
                                        switch (!0) {
                                            case u.extraLarge:
                                                return g.ExtraLarge;
                                            case u.large:
                                                return g.Large;
                                            case u.medium:
                                                return g.Medium;
                                            case u.small:
                                                return g.Small;
                                            case u.extraSmall:
                                                return g.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    g.ExtraSmall
                                                );
                                        }
                                    })(u),
                                    n = ((u) => {
                                        switch (!0) {
                                            case u.extraLargeWidth:
                                                return p.ExtraLarge;
                                            case u.largeWidth:
                                                return p.Large;
                                            case u.mediumWidth:
                                                return p.Medium;
                                            case u.smallWidth:
                                                return p.Small;
                                            case u.extraSmallWidth:
                                                return p.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    p.ExtraSmall
                                                );
                                        }
                                    })(u),
                                    i = ((u) => {
                                        switch (!0) {
                                            case u.extraLargeHeight:
                                                return f.ExtraLarge;
                                            case u.largeHeight:
                                                return f.Large;
                                            case u.mediumHeight:
                                                return f.Medium;
                                            case u.smallHeight:
                                                return f.Small;
                                            case u.extraSmallHeight:
                                                return f.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    f.ExtraSmall
                                                );
                                        }
                                    })(u);
                                return {
                                    mediaSize: r,
                                    mediaWidth: n,
                                    mediaHeight: i,
                                    remScreenWidth: e,
                                    remScreenHeight: t,
                                };
                            })(),
                            o = n.mediaWidth,
                            s = n.mediaHeight,
                            l = n.mediaSize;
                        return i().createElement('div', v({ className: m()(t, b[o], w[s], T[l]) }, r), e);
                    },
                    x = ['children'],
                    y = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, x);
                        return i().createElement(d, null, i().createElement(S, t, e));
                    };
                var P = t(1533),
                    L = t.n(P),
                    O = t(1281);
                let M;
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(M || (M = {}));
                const k = (u) => u.replace(/&nbsp;/g, ' '),
                    N = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    I = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    U = (u, e, t = M.left) => u.split(e).reduce(t === M.left ? N : I, []),
                    H = (() => {
                        const u = new RegExp(
                            [
                                /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                                /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                                /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                                /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                            ]
                                .map((u) => u.source)
                                .join('|'),
                            'gum',
                        );
                        return (e) =>
                            e
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(u);
                    })(),
                    G = ['zh_cn', 'zh_sg', 'zh_tw'],
                    W = ({ binding: u, text: e = '', classMix: t, alignment: r = M.left, formatWithBrackets: n }) => {
                        if (null === e) return (console.error("FormatText was supplied with 'null'"), null);
                        const o = n && u ? ((s = u), e.replace(/\{\w+\}/g, (u) => String(s[u.slice(1, -1)]))) : e;
                        var s;
                        return i().createElement(
                            a.Fragment,
                            null,
                            o.split('\n').map((e, n) =>
                                i().createElement(
                                    'div',
                                    { className: m()('FormatText_base_d0', t), key: `${e}-${n}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                            t && u in t
                                                ? t[u]
                                                : ((u, e = M.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return G.includes(t)
                                                          ? H(u)
                                                          : 'ja' === t
                                                            ? (0, O.D4)()
                                                                  .parse(u)
                                                                  .map((u) => k(u))
                                                            : ((u, e = M.left) => {
                                                                  let t = [];
                                                                  const r =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      n = k(u);
                                                                  return (
                                                                      U(n, /( )/, e).forEach(
                                                                          (u) => (t = t.concat(U(u, r, M.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(u, e);
                                                  })(u, e),
                                        ))(e, r, u).map((u, e) =>
                                        i().createElement(a.Fragment, { key: `${e}-${u}` }, u),
                                    ),
                                ),
                            ),
                        );
                    },
                    $ = (u) => {
                        let e,
                            t = null;
                        return (
                            (t = requestAnimationFrame(() => {
                                t = requestAnimationFrame(() => {
                                    ((t = null), (e = u()));
                                });
                            })),
                            () => {
                                ('function' == typeof e && e(), null !== t && cancelAnimationFrame(t));
                            }
                        );
                    },
                    z = (u, e, t) => (t < u ? u : t > e ? e : t),
                    j = [];
                function V(u) {
                    const e = (0, a.useRef)(u);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            e.current = u;
                        }),
                        (0, a.useCallback)((...u) => (0, e.current)(...u), j)
                    );
                }
                function q(u, e, t = []) {
                    const r = (0, a.useRef)(0),
                        n = (0, a.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, a.useEffect)(() => n, [n]);
                    const i = (null != t ? t : []).concat([e]);
                    return [
                        (0, a.useCallback)((t) => {
                            ((r.current = window.setInterval(() => u(t, !0), e)), u(t, !1));
                        }, i),
                        n,
                    ];
                }
                function Y(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                function X(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                var K = t(7030);
                let Q;
                !(function (u) {
                    ((u[(u.Next = -1)] = 'Next'), (u[(u.Prev = 1)] = 'Prev'));
                })(Q || (Q = {}));
                const Z = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    J = ({
                        getContainerSize: u,
                        getBounds: e,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        forceTriggerMouseMove: i,
                    }) => {
                        const o = (u, t) => {
                            const r = e(u),
                                n = r[0],
                                a = r[1];
                            return a <= n ? 0 : z(n, a, t);
                        };
                        return (s = {}) => {
                            const l = s.settings,
                                E = void 0 === l ? Z : l,
                                c = (0, a.useRef)(null),
                                A = (0, a.useRef)(null),
                                F = (0, a.useRef)(!1),
                                D = (() => {
                                    const u = (0, a.useMemo)(() => ({}), []),
                                        e = (e) => (u[e] || (u[e] = new Map()), u[e]),
                                        t = (u, t) => {
                                            e(u).set(t, t);
                                        },
                                        r = (u, t) => {
                                            e(u).delete(t);
                                        },
                                        n = (u, ...t) => {
                                            for (
                                                var r,
                                                    n = (function (u, e) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && u[Symbol.iterator]) ||
                                                            u['@@iterator'];
                                                        if (t) return (t = t.call(u)).next.bind(t);
                                                        if (
                                                            Array.isArray(u) ||
                                                            (t = (function (u, e) {
                                                                if (u) {
                                                                    if ('string' == typeof u) return X(u, e);
                                                                    var t = Object.prototype.toString
                                                                        .call(u)
                                                                        .slice(8, -1);
                                                                    return (
                                                                        'Object' === t &&
                                                                            u.constructor &&
                                                                            (t = u.constructor.name),
                                                                        'Map' === t || 'Set' === t
                                                                            ? Array.from(u)
                                                                            : 'Arguments' === t ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    t,
                                                                                )
                                                                              ? X(u, e)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(u)) ||
                                                            (e && u && 'number' == typeof u.length)
                                                        ) {
                                                            t && (u = t);
                                                            var r = 0;
                                                            return function () {
                                                                return r >= u.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: u[r++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(e(u).values());
                                                !(r = n()).done;

                                            )
                                                (0, r.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                                })(),
                                d = (function (u, e, t) {
                                    const r = (0, a.useMemo)(
                                        () =>
                                            (function (u, e, t, r) {
                                                let n,
                                                    a = !1,
                                                    i = 0;
                                                function o() {
                                                    n && clearTimeout(n);
                                                }
                                                function s(...s) {
                                                    const l = this,
                                                        E = Date.now() - i;
                                                    function c() {
                                                        ((i = Date.now()), t.apply(l, s));
                                                    }
                                                    a ||
                                                        (r && !n && c(),
                                                        o(),
                                                        void 0 === r && E > u
                                                            ? c()
                                                            : !0 !== e &&
                                                              (n = setTimeout(
                                                                  r
                                                                      ? function () {
                                                                            n = void 0;
                                                                        }
                                                                      : c,
                                                                  void 0 === r ? u - E : u,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof e && ((r = t), (t = e), (e = void 0)),
                                                    (s.cancel = function () {
                                                        (o(), (a = !0));
                                                    }),
                                                    s
                                                );
                                            })(t, u),
                                        e,
                                    );
                                    return ((0, a.useEffect)(() => r.cancel, [r]), r);
                                })(
                                    () => {
                                        i && i();
                                    },
                                    [],
                                    150,
                                ),
                                B = (0, K.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (u) => {
                                        const e = c.current;
                                        e && (t(e, u), D.trigger('change', u), i && F.current && d());
                                    },
                                    onRest: (u) => D.trigger('rest', u),
                                    onStart: (u) => D.trigger('start', u),
                                    onPause: (u) => D.trigger('pause', u),
                                })),
                                m = B[0],
                                _ = B[1],
                                C = (0, a.useCallback)(
                                    (u, e, t) => {
                                        var r;
                                        const n = m.scrollPosition.get(),
                                            a = (null != (r = m.scrollPosition.goal) ? r : 0) - n;
                                        return o(u, e * t + a + n);
                                    },
                                    [m.scrollPosition],
                                ),
                                g = (0, a.useCallback)(
                                    (u, { immediate: e = !1, reset: t = !0 } = {}) => {
                                        const r = c.current;
                                        r &&
                                            _.start({
                                                scrollPosition: o(r, u),
                                                immediate: e,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: o(r, m.scrollPosition.get()) },
                                            });
                                    },
                                    [_, E.animationConfig, m.scrollPosition],
                                ),
                                p = (0, a.useCallback)(
                                    (u) => {
                                        const e = c.current,
                                            t = A.current;
                                        if (!e || !t) return;
                                        const r = ((u, e) => {
                                                switch (e.type) {
                                                    case 'proportional':
                                                        return n(u) / e.factor;
                                                    case 'fixed':
                                                        return e.value;
                                                }
                                            })(t, E.step),
                                            a = C(e, u, r);
                                        g(a);
                                    },
                                    [g, C, E.step],
                                ),
                                f = (0, a.useCallback)(
                                    (u) => {
                                        (0 !== u.deltaY && p(r(u)),
                                            c.current && D.trigger('mouseWheel', u, m.scrollPosition, e(c.current)));
                                    },
                                    [m.scrollPosition, p, D],
                                ),
                                h = ((u, e = []) => {
                                    const t = (0, a.useRef)(),
                                        r = (0, a.useCallback)((...e) => {
                                            (t.current && t.current(), (t.current = u(...e)));
                                        }, e);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        $(() => {
                                            const u = c.current;
                                            u &&
                                                (g(o(u, m.scrollPosition.goal), { immediate: !0 }),
                                                D.trigger('resizeHandled'));
                                        }),
                                    [g, m.scrollPosition.goal],
                                ),
                                v = V(() => {
                                    const u = c.current;
                                    if (!u) return;
                                    const e = o(u, m.scrollPosition.goal);
                                    (e !== m.scrollPosition.goal && g(e, { immediate: !0 }),
                                        D.trigger('recalculateContent'));
                                });
                            return (
                                (0, a.useEffect)(
                                    () => (
                                        window.addEventListener('resize', h),
                                        () => {
                                            window.removeEventListener('resize', h);
                                        }
                                    ),
                                    [h],
                                ),
                                (0, a.useEffect)(() => {
                                    const u = c.current;
                                    if (!u || !i) return;
                                    const e = () => {
                                            F.current = !0;
                                        },
                                        t = () => {
                                            F.current = !1;
                                        };
                                    return (
                                        u.addEventListener('mouseenter', e),
                                        u.addEventListener('mouseleave', t),
                                        () => {
                                            (u.removeEventListener('mouseenter', e),
                                                u.removeEventListener('mouseleave', t));
                                        }
                                    );
                                }, [c]),
                                (0, a.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (A.current ? n(A.current) : void 0),
                                        getContainerSize: () => (c.current ? u(c.current) : void 0),
                                        getBounds: () =>
                                            c.current
                                                ? e(c.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: E.step.clampedArrowStepTimeout,
                                        clampPosition: o,
                                        handleMouseWheel: f,
                                        applyScroll: g,
                                        applyStepTo: p,
                                        contentRef: c,
                                        wrapperRef: A,
                                        scrollPosition: _,
                                        animationScroll: m,
                                        recalculateContent: v,
                                        events: { on: D.on, off: D.off },
                                    }),
                                    [m.scrollPosition, g, p, D.off, D.on, v, f, _, E.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    uu = J({
                        getBounds: (u) => {
                            var e, t;
                            return [
                                0,
                                u.offsetWidth -
                                    (null != (e = null == (t = u.parentElement) ? void 0 : t.offsetWidth) ? e : 0),
                            ];
                        },
                        getContainerSize: (u) => u.offsetWidth,
                        getWrapperSize: (u) => u.offsetWidth,
                        setScrollPosition: (u, e) => {
                            u.style.transform = `translateX(-${e.value.scrollPosition}px)`;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? Q.Next : Q.Prev),
                        forceTriggerMouseMove: s.O.view.forceTriggerMouseMove,
                    }),
                    eu = 'HorizontalBar_base__active_5e',
                    tu = 'disable',
                    ru = { pending: !1, offset: 0 },
                    nu = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    au = () => {},
                    iu = (u, e) => Math.max(20, u.offsetWidth * e),
                    ou = (0, a.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = nu, onDrag: r = au }) => {
                        const n = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            A = u.stepTimeout || 100,
                            F = (0, a.useState)(ru),
                            D = F[0],
                            d = F[1],
                            B = (0, a.useCallback)(
                                (u) => {
                                    (d(u),
                                        c.current &&
                                            r({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [r],
                            ),
                            _ = () => {
                                const e = E.current,
                                    t = c.current,
                                    r = u.getWrapperSize(),
                                    n = u.getContainerSize();
                                if (!(r && e && t && n)) return;
                                const a = u.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / n),
                                    s = z(0, 1, a / (n - r)),
                                    A = (e.offsetWidth - iu(e, i)) * s;
                                ((t.style.transform = `translateX(${0 | A}px)`),
                                    ((u) => {
                                        if (o.current && l.current && E.current && c.current) {
                                            if (0 === u)
                                                return (
                                                    o.current.classList.add(tu),
                                                    void l.current.classList.remove(tu)
                                                );
                                            if (
                                                ((e = E.current),
                                                (t = c.current),
                                                u - (e.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(tu),
                                                    void l.current.classList.add(tu)
                                                );
                                            var e, t;
                                            (o.current.classList.remove(tu), l.current.classList.remove(tu));
                                        }
                                    })(A));
                            },
                            C = V(() => {
                                ((() => {
                                    const e = c.current,
                                        t = E.current,
                                        r = u.getWrapperSize(),
                                        a = u.getContainerSize();
                                    if (!(a && e && r && t)) return;
                                    const i = Math.min(1, r / a);
                                    ((e.style.width = `${iu(t, i)}px`),
                                        (e.style.display = 'flex'),
                                        n.current &&
                                            (1 !== i ? n.current.classList.add(eu) : n.current.classList.remove(eu)));
                                })(),
                                    _());
                            });
                        ((0, a.useEffect)(() => $(C)),
                            (0, a.useEffect)(
                                () =>
                                    $(() => {
                                        const e = () => {
                                            _();
                                        };
                                        let t = au;
                                        const r = () => {
                                            (t(), (t = $(C)));
                                        };
                                        return (
                                            u.events.on('recalculateContent', C),
                                            u.events.on('rest', e),
                                            u.events.on('change', e),
                                            u.events.on('resizeHandled', r),
                                            () => {
                                                (t(),
                                                    u.events.off('recalculateContent', C),
                                                    u.events.off('rest', e),
                                                    u.events.off('change', e),
                                                    u.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [u],
                            ),
                            (0, a.useEffect)(() => {
                                if (!D.pending) return;
                                const e = s.O.client.events.mouse.move(([e, t]) => {
                                        var n;
                                        const a = u.contentRef.current,
                                            i = u.wrapperRef.current;
                                        if (!a || !i) return;
                                        const o = E.current,
                                            s = c.current;
                                        if (!o || !s) return;
                                        if ('inside' === t && e.clientX < 0) return;
                                        const l = e.clientX - D.offset - o.getBoundingClientRect().x,
                                            A = (l / o.offsetWidth) * (null != (n = u.getContainerSize()) ? n : 0);
                                        (u.scrollPosition.start({
                                            scrollPosition: u.clampPosition(a, A),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: u.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: s, thumbOffset: l, contentOffset: A }));
                                    }),
                                    t = s.O.client.events.mouse.up(() => {
                                        (e(), B(ru));
                                    });
                                return () => {
                                    (e(), t());
                                };
                            }, [u, D.offset, D.pending, r, B]));
                        const g = q((e) => u.applyStepTo(e), A, [u]),
                            p = g[0],
                            f = g[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const h = (u) => {
                            u.target.classList.contains(tu) || Y('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: m()('HorizontalBar_base_49', e.base), ref: n, onWheel: u.handleMouseWheel },
                            i().createElement('div', {
                                className: m()('HorizontalBar_leftButton_5f', e.leftButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(tu) || 0 !== u.button || (Y('play'), p(Q.Next));
                                },
                                onMouseUp: f,
                                ref: o,
                                onMouseEnter: h,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: m()('HorizontalBar_track_0d', e.track),
                                    onMouseDown: (e) => {
                                        const r = c.current;
                                        r &&
                                            0 === e.button &&
                                            (Y('play'),
                                            e.target === r
                                                ? B({ pending: !0, offset: e.screenX - r.getBoundingClientRect().x })
                                                : ((e) => {
                                                      const r = c.current,
                                                          n = u.contentRef.current;
                                                      if (!r || !n) return;
                                                      const a = t(u);
                                                      u.applyScroll(u.animationScroll.scrollPosition.get() + a * e);
                                                  })(e.screenX > r.getBoundingClientRect().x ? Q.Prev : Q.Next));
                                    },
                                    ref: E,
                                    onMouseEnter: h,
                                },
                                i().createElement('div', { ref: c, className: m()('HorizontalBar_thumb_fd', e.thumb) }),
                                i().createElement('div', { className: m()('HorizontalBar_rail_32', e.rail) }),
                            ),
                            i().createElement('div', {
                                className: m()('HorizontalBar_rightButton_03', e.rightButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(tu) || 0 !== u.button || (Y('play'), p(Q.Prev));
                                },
                                onMouseUp: f,
                                ref: l,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    su = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    lu = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: o,
                        scrollClassName: s,
                        getStepByRailClick: l,
                        onDrag: E,
                    }) => {
                        const c = (0, a.useMemo)(() => {
                                const u = r || {};
                                return Object.assign({}, u, { base: m()(su.base, u.base) });
                            }, [r]),
                            A = (0, a.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return i().createElement(
                            'div',
                            { className: m()(su.defaultScroll, t), onWheel: e.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: m()(su.defaultScrollArea, n) },
                                i().createElement(Eu, { className: s, api: A, classNames: o }, u),
                            ),
                            i().createElement(ou, { getStepByRailClick: l, api: e, onDrag: E, classNames: c }),
                        );
                    },
                    Eu = ({ api: u, className: e, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => $(u.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: m()(su.base, e) },
                            i().createElement(
                                'div',
                                {
                                    className: m()(su.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: u.handleMouseWheel,
                                    ref: u.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: m()(su.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                ((Eu.Bar = ou), (Eu.Default = lu));
                const cu = J({
                        getBounds: (u) => [0, u.scrollHeight - u.offsetHeight],
                        getContainerSize: (u) => u.scrollHeight,
                        getWrapperSize: (u) => u.offsetHeight,
                        setScrollPosition: (u, e) => {
                            u.scrollTop = e.value.scrollPosition;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? Q.Next : Q.Prev),
                    }),
                    Au = 'VerticalBar_base__active_72',
                    Fu = 'disable',
                    Du = () => {},
                    du = { pending: !1, offset: 0 },
                    Bu = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    mu = (u, e) => {
                        u.contentRef.current && e(u.contentRef.current);
                    },
                    _u = (u, e) => Math.max(20, u.offsetHeight * e),
                    Cu = (0, a.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = Bu, onDrag: r = Du }) => {
                        const n = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            A = u.stepTimeout || 100,
                            F = (0, a.useState)(du),
                            D = F[0],
                            d = F[1],
                            B = (0, a.useCallback)(
                                (u) => {
                                    (d(u),
                                        c.current &&
                                            r({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [r],
                            ),
                            _ = V(() => {
                                const e = c.current,
                                    t = E.current,
                                    r = u.getWrapperSize(),
                                    a = u.getContainerSize();
                                if (!(r && a && e && t)) return;
                                const i = Math.min(1, r / a);
                                return (
                                    (e.style.height = `${_u(t, i)}px`),
                                    (e.style.display = 'flex'),
                                    n.current &&
                                        (1 !== i ? n.current.classList.add(Au) : n.current.classList.remove(Au)),
                                    i
                                );
                            }),
                            C = V(() => {
                                const e = E.current,
                                    t = c.current,
                                    r = u.getWrapperSize(),
                                    n = u.getContainerSize();
                                if (!(r && e && t && n)) return;
                                const a = u.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / n),
                                    s = z(0, 1, a / (n - r)),
                                    A = (e.offsetHeight - _u(e, i)) * s;
                                ((t.style.transform = `translateY(${0 | A}px)`),
                                    ((u) => {
                                        if (o.current && l.current && E.current && c.current) {
                                            if (0 === Math.round(u))
                                                return (
                                                    o.current.classList.add(Fu),
                                                    void l.current.classList.remove(Fu)
                                                );
                                            if (
                                                ((e = E.current),
                                                (t = c.current),
                                                u - (e.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(Fu),
                                                    void l.current.classList.add(Fu)
                                                );
                                            var e, t;
                                            (o.current.classList.remove(Fu), l.current.classList.remove(Fu));
                                        }
                                    })(A));
                            }),
                            g = V(() => {
                                mu(u, () => {
                                    (_(), C());
                                });
                            });
                        ((0, a.useEffect)(() => $(g)),
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    mu(u, () => {
                                        C();
                                    });
                                };
                                let t = Du;
                                const r = () => {
                                    (t(), (t = $(g)));
                                };
                                return (
                                    u.events.on('recalculateContent', g),
                                    u.events.on('rest', e),
                                    u.events.on('change', e),
                                    u.events.on('resizeHandled', r),
                                    () => {
                                        (t(),
                                            u.events.off('recalculateContent', g),
                                            u.events.off('rest', e),
                                            u.events.off('change', e),
                                            u.events.off('resizeHandled', r));
                                    }
                                );
                            }, [u]),
                            (0, a.useEffect)(() => {
                                if (!D.pending) return;
                                const e = s.O.client.events.mouse.up(() => {
                                        B(du);
                                    }),
                                    t = s.O.client.events.mouse.move(([e]) => {
                                        mu(u, (t) => {
                                            const n = E.current,
                                                a = c.current,
                                                i = u.getContainerSize();
                                            if (!n || !a || !i) return;
                                            const o = e.screenY - D.offset - n.getBoundingClientRect().y,
                                                s = (o / n.offsetHeight) * i;
                                            (u.scrollPosition.start({
                                                scrollPosition: u.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: s }));
                                        });
                                    });
                                return () => {
                                    (e(), t());
                                };
                            }, [u, D.offset, D.pending, r, B]));
                        const p = q((e) => u.applyStepTo(e), A, [u]),
                            f = p[0],
                            h = p[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const v = (u) => {
                            u.target.classList.contains(Fu) || Y('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: m()('VerticalBar_base_f3', e.base), ref: n, onWheel: u.handleMouseWheel },
                            i().createElement('div', {
                                className: m()('VerticalBar_topButton_d7', e.topButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(Fu) || 0 !== u.button || (Y('play'), f(Q.Next));
                                },
                                ref: o,
                                onMouseEnter: v,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: m()('VerticalBar_track_df', e.track),
                                    onMouseDown: (e) => {
                                        const r = c.current;
                                        var n;
                                        r &&
                                            0 === e.button &&
                                            (Y('play'),
                                            e.target === r
                                                ? B({ pending: !0, offset: e.screenY - r.getBoundingClientRect().y })
                                                : ((n = e.screenY > r.getBoundingClientRect().y ? Q.Prev : Q.Next),
                                                  c.current &&
                                                      mu(u, (e) => {
                                                          if (!e) return;
                                                          const r = t(u),
                                                              a = u.clampPosition(e, e.scrollTop + r * n);
                                                          u.applyScroll(a);
                                                      })));
                                    },
                                    ref: E,
                                    onMouseEnter: v,
                                },
                                i().createElement('div', { ref: c, className: m()('VerticalBar_thumb_32', e.thumb) }),
                                i().createElement('div', { className: m()('VerticalBar_rail_43', e.rail) }),
                            ),
                            i().createElement('div', {
                                className: m()('VerticalBar_bottomButton_06', e.bottomButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(Fu) || 0 !== u.button || (Y('play'), f(Q.Prev));
                                },
                                onMouseUp: h,
                                ref: l,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    gu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    pu = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: o,
                        scrollClassNames: s,
                        getStepByRailClick: l,
                        onDrag: E,
                    }) => {
                        const c = (0, a.useMemo)(() => {
                                const u = r || {};
                                return Object.assign({}, u, { base: m()(gu.base, u.base) });
                            }, [r]),
                            A = (0, a.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return i().createElement(
                            'div',
                            { className: m()(gu.defaultScroll, t), onWheel: e.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: m()(gu.area, n) },
                                i().createElement(fu, { className: o, classNames: s, api: A }, u),
                            ),
                            i().createElement(Cu, { getStepByRailClick: l, api: e, onDrag: E, classNames: c }),
                        );
                    },
                    fu = ({ className: u, classNames: e, children: t, api: r }) => (
                        (0, a.useEffect)(() => $(r.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: m()(gu.base, u), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: m()(gu.content, null == e ? void 0 : e.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                fu.Default = pu;
                const hu = { Vertical: n, Horizontal: r },
                    vu = {
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
                    bu = [
                        'caption',
                        'onClick',
                        'goto',
                        'classNames',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'side',
                        'type',
                        'soundHover',
                        'soundClick',
                    ];
                function wu() {
                    return (
                        (wu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        wu.apply(this, arguments)
                    );
                }
                const Tu = (u) => {
                    let e = u.caption,
                        t = u.onClick,
                        r = u.goto,
                        n = u.classNames,
                        o = u.onMouseEnter,
                        l = u.onMouseLeave,
                        E = u.onMouseDown,
                        c = u.onMouseUp,
                        A = u.side,
                        F = void 0 === A ? 'left' : A,
                        D = u.type,
                        d = void 0 === D ? 'back' : D,
                        B = u.soundHover,
                        _ = void 0 === B ? 'highlight' : B,
                        C = u.soundClick,
                        g = void 0 === C ? 'play' : C,
                        p = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(u);
                            for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                            return n;
                        })(u, bu);
                    const f = (0, a.useCallback)(
                            (u) => {
                                (null == o || o(u), s.O.sound.play.sound(_));
                            },
                            [o, _],
                        ),
                        h = (0, a.useCallback)(
                            (u) => {
                                null == l || l(u);
                            },
                            [l],
                        ),
                        v = (0, a.useCallback)(
                            (u) => {
                                (null == E || E(u), s.O.sound.play.sound(g));
                            },
                            [E, g],
                        ),
                        b = (0, a.useCallback)(
                            (u) => {
                                null == c || c(u);
                            },
                            [c],
                        );
                    return i().createElement(
                        'div',
                        wu(
                            {
                                className: m()(
                                    vu.base,
                                    vu[`base__${d}`],
                                    vu[`base__${F}`],
                                    null == n ? void 0 : n.base,
                                ),
                                onMouseEnter: f,
                                onMouseLeave: h,
                                onMouseDown: v,
                                onMouseUp: b,
                                onClick: t,
                            },
                            p,
                        ),
                        'info' !== d && i().createElement('div', { className: vu.shine }),
                        i().createElement(
                            'div',
                            {
                                className: m()(
                                    vu.icon,
                                    vu[`icon__${d}`],
                                    vu[`icon__${F}`],
                                    null == n ? void 0 : n.icon,
                                ),
                            },
                            i().createElement('div', { className: m()(vu.glow, null == n ? void 0 : n.glow) }),
                        ),
                        i().createElement(
                            'div',
                            { className: m()(vu.caption, vu[`caption__${d}`], null == n ? void 0 : n.caption) },
                            e,
                        ),
                        r && i().createElement('div', { className: m()(vu.goto, null == n ? void 0 : n.goto) }, r),
                    );
                };
                var Su = t(5521),
                    Ru = t(9916);
                const xu = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function yu(u = Su.n.NONE, e = xu, t = !1, r = !1) {
                    (0, a.useEffect)(() => {
                        if (u !== Su.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (!r && s.O.view.isEventHandled()) return;
                                (s.O.view.setEventHandled(), e(n), t && n.stopPropagation());
                            }
                        }
                    }, [e, u, t, r]);
                }
                var Pu = t(8515);
                const Lu = R.images.fun_random.gui.maps.icons.feature.asset_packs,
                    Ou = 'undefined';
                function Mu(u, e) {
                    return u
                        ? 'string' == typeof e
                            ? u.$dyn(e)
                            : e.reduce((u, e) => u.$dyn(e), u)
                        : (console.warn('FunRandom.combineRPaths: base folder empty: '), null);
                }
                function ku(u, e) {
                    var t;
                    const r = e ? 'sub_modes' : 'modes',
                        n = Lu.$dyn(r);
                    return null != (t = n.$dyn(u)) ? t : n.$dyn(Ou);
                }
                function Nu() {
                    return !1;
                }
                console.log;
                var Iu = t(9174);
                function Uu(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const Hu = (u) => (0 === u ? window : window.subViews.get(u)),
                    Gu = ((u, e) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: r, children: n, mocks: o }) {
                                const l = (0, a.useRef)([]),
                                    E = (u, t, r) => {
                                        var n;
                                        const a = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = Hu,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function a(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? n.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = n.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const i = (u) => {
                                                    const n = t(e),
                                                        a = r.split('.').reduce((u, e) => u[e], n);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? a
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const o = 'string' == typeof a ? `${r}.${a}` : r,
                                                            l = s.O.view.addModelObserver(o, e, !0);
                                                        return (n.set(l, t), u && t(i(a)), l);
                                                    },
                                                    readByPath: i,
                                                    createCallback: (u, e) => {
                                                        const t = i(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = i(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var u,
                                                                t = (function (u, e) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            u[Symbol.iterator]) ||
                                                                        u['@@iterator'];
                                                                    if (t) return (t = t.call(u)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(u) ||
                                                                        (t = (function (u, e) {
                                                                            if (u) {
                                                                                if ('string' == typeof u)
                                                                                    return Uu(u, e);
                                                                                var t = Object.prototype.toString
                                                                                    .call(u)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        u.constructor &&
                                                                                        (t = u.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(u)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? Uu(u, e)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(u)) ||
                                                                        (e && u && 'number' == typeof u.length)
                                                                    ) {
                                                                        t && (u = t);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= u.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: u[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(n.keys());
                                                            !(u = t()).done;

                                                        )
                                                            a(u.value, e);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(t),
                                            i =
                                                'real' === u
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            o = (e) =>
                                                'mocks' === u ? (null == r ? void 0 : r.getter(e)) : i.readByPath(e),
                                            E = (u) => l.current.push(u),
                                            c = (({ observableModel: u }) => ({
                                                root: u.object(),
                                                lootBoxes: u.array('lootBoxes'),
                                            }))({
                                                mode: u,
                                                readByPath: o,
                                                externalModel: i,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const t = o(e),
                                                            r = Iu.LO.box(t, { equals: Nu });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, Iu.aD)((u) => r.set(u)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    array: (e, t) => {
                                                        const r = null != t ? t : o(e),
                                                            n = Iu.LO.box(r, { equals: Nu });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, Iu.aD)((u) => n.set(u)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : o(e),
                                                            n = Iu.LO.box(r, { equals: Nu });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, Iu.aD)((u) => n.set(u)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = o(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (u, e) => ((u[e] = Iu.LO.box(r[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, Iu.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                a = Object.entries(n),
                                                                o = a.reduce(
                                                                    (u, [e, t]) => ((u[t] = Iu.LO.box(r[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, Iu.aD)((u) => {
                                                                            a.forEach(([e, t]) => {
                                                                                o[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            A = { mode: u, model: c, externalModel: i, cleanup: E };
                                        return {
                                            model: c,
                                            controls: 'mocks' === u && r ? r.controls(A) : e(A),
                                            externalModel: i,
                                            mode: u,
                                        };
                                    },
                                    c = (0, a.useRef)(!1),
                                    A = (0, a.useState)(u),
                                    F = A[0],
                                    D = A[1],
                                    d = (0, a.useState)(() => E(u, r, o)),
                                    B = d[0],
                                    m = d[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        c.current ? m(E(F, r, o)) : (c.current = !0);
                                    }, [o, F, r]),
                                    (0, a.useEffect)(() => {
                                        D(u);
                                    }, [u]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (B.externalModel.dispose(), l.current.forEach((u) => u()));
                                        },
                                        [B],
                                    ),
                                    i().createElement(t.Provider, { value: B }, n)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: u }) => ({ closeWindow: u.createCallbackNoArgs('onClose') })),
                    Wu = Gu[0],
                    $u = Gu[1];
                function zu(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, r) => e(null == u ? void 0 : u.value, t, r));
                }
                let ju, Vu, qu, Yu, Xu, Ku, Qu, Zu;
                (!(function (u) {
                    ((u.Items = 'items'),
                        (u.Equipment = 'equipment'),
                        (u.Xp = 'xp'),
                        (u.XpFactor = 'xpFactor'),
                        (u.Blueprints = 'blueprints'),
                        (u.BlueprintsAny = 'blueprintsAny'),
                        (u.Goodies = 'goodies'),
                        (u.Berths = 'berths'),
                        (u.Slots = 'slots'),
                        (u.Tokens = 'tokens'),
                        (u.CrewSkins = 'crewSkins'),
                        (u.CrewBooks = 'crewBooks'),
                        (u.Customizations = 'customizations'),
                        (u.CreditsFactor = 'creditsFactor'),
                        (u.Tankman = 'tankman'),
                        (u.Tankwoman = 'tankwoman'),
                        (u.TankmenXp = 'tankmenXP'),
                        (u.TankmenXpFactor = 'tankmenXPFactor'),
                        (u.FreeXpFactor = 'freeXPFactor'),
                        (u.BattleToken = 'battleToken'),
                        (u.PremiumUniversal = 'premium_universal'),
                        (u.Gold = 'gold'),
                        (u.Credits = 'credits'),
                        (u.Crystal = 'crystal'),
                        (u.FreeXp = 'freeXP'),
                        (u.Premium = 'premium'),
                        (u.PremiumPlus = 'premium_plus'),
                        (u.BattlePassPoints = 'battlePassPoints'),
                        (u.BattlePassSelectToken = 'battlePassSelectToken'),
                        (u.BattlePassTicket = 'lootBox_commonTicket'),
                        (u.BattlePassTaler = 'bptaler'),
                        (u.StyleProgressToken = 'styleProgressToken'),
                        (u.TmanToken = 'tmanToken'),
                        (u.NaturalCover = 'naturalCover'),
                        (u.BpCoin = 'bpcoin'),
                        (u.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (u.BattleBadge = 'dossier_badge'),
                        (u.BonusX5 = 'battle_bonus_x5'),
                        (u.CrewBonusX3 = 'crew_bonus_x3'),
                        (u.Vehicles = 'vehicles'),
                        (u.EpicSelectToken = 'epicSelectToken'),
                        (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (u.DeluxeGift = 'deluxe_gift'),
                        (u.BattleBoosterGift = 'battleBooster_gift'),
                        (u.ModernizedDevicesT1Gift = 'modernized_devices_t1_gift'),
                        (u.ModernizedDevicesT2Gift = 'modernized_devices_t2_gift'),
                        (u.ModernizedDevicesT3Gift = 'modernized_devices_t3_gift'),
                        (u.OptionalDevice = 'optionalDevice'),
                        (u.EquipCoin = 'equipCoin'),
                        (u.LootBox = 'lootBox'),
                        (u.BrCoin = 'brcoin'),
                        (u.Attachment = 'attachment'),
                        (u.Stamp = 'stamp'),
                        (u.WtEventLootbox = 'wtevent_lootBox'),
                        (u.WtEventTicket = 'wtevent_ticket'));
                })(ju || (ju = {})),
                    (function (u) {
                        ((u.Gold = 'gold'),
                            (u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.Premium = 'premium'),
                            (u.PremiumPlus = 'premium_plus'),
                            (u.Vehicles = 'vehicles'),
                            (u.Customizations = 'customizations'),
                            (u.Blueprints = 'blueprints'),
                            (u.BlueprintsAny = 'blueprintsAny'),
                            (u.BlueprintsFinal = 'finalBlueprints'),
                            (u.Goodies = 'goodies'),
                            (u.CrewSkins = 'crewSkins'),
                            (u.Xp = 'xp'),
                            (u.XpFactor = 'xpFactor'),
                            (u.FreeXp = 'freeXP'),
                            (u.FreeXPFactor = 'freeXPFactor'),
                            (u.TankmenXP = 'tankmenXP'),
                            (u.TankmenXPFactor = 'tankmenXPFactor'),
                            (u.DailyXPFactor = 'dailyXPFactor'),
                            (u.CreditsFactor = 'creditsFactor'),
                            (u.Items = 'items'),
                            (u.StrBonus = 'strBonus'),
                            (u.Groups = 'groups'),
                            (u.Berths = 'berths'),
                            (u.Slots = 'slots'),
                            (u.Meta = 'meta'),
                            (u.Tokens = 'tokens'),
                            (u.Dossier = 'dossier'),
                            (u.OneOf = 'oneof'),
                            (u.PremiumUniversal = 'premium_universal'),
                            (u.BadgesGroup = 'badgesGroup'),
                            (u.Entitlements = 'entitlements'),
                            (u.RankedDailyBattles = 'rankedDailyBattles'),
                            (u.RankedBonusBattles = 'rankedBonusBattles'),
                            (u.BattlePassPoints = 'battlePassPoints'),
                            (u.BattleBadge = 'dossier_badge'),
                            (u.BattleAchievement = 'dossier_achievement'),
                            (u.EquipCoin = 'equipCoin'));
                    })(Vu || (Vu = {})),
                    (function (u) {
                        ((u.Big = 'big'),
                            (u.Small = 'small'),
                            (u.Mini = 'mini'),
                            (u.S600x450 = 's600x450'),
                            (u.S400x300 = 's400x300'),
                            (u.S296x222 = 's296x222'),
                            (u.S232x174 = 's232x174'),
                            (u.S180x135 = 's180x135'),
                            (u.S128x100 = 's128x100'),
                            (u.S80x80 = 's80x80'),
                            (u.S64x64 = 's64x64'),
                            (u.S48x48 = 's48x48'));
                    })(qu || (qu = {})),
                    (function (u) {
                        ((u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string'));
                    })(Yu || (Yu = {})),
                    (function (u) {
                        ((u.ATTACHMENT_RARE = 'rare'),
                            (u.ATTACHMENT_EPIC = 'epic'),
                            (u.ATTACHMENT_LEGENDARY = 'legendary'),
                            (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(Xu || (Xu = {})),
                    (function (u) {
                        u.BATTLE_BOOSTER = 'battleBooster';
                    })(Ku || (Ku = {})),
                    (function (u) {
                        ((u.ATTACHMENT_RARE = 'rare'),
                            (u.ATTACHMENT_EPIC = 'epic'),
                            (u.ATTACHMENT_LEGENDARY = 'legendary'),
                            (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(Qu || (Qu = {})),
                    (function (u) {
                        ((u[(u.Engraving = 0)] = 'Engraving'), (u[(u.Background = 1)] = 'Background'));
                    })(Zu || (Zu = {})));
                const Ju = [ju.Attachment],
                    ue = [
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
                function ee(u) {
                    return Object.entries(u || {}).map(([u, e]) => {
                        const t = { __Type: 'GFValueProxy', name: u };
                        switch (typeof e) {
                            case 'number':
                                t.number = e;
                                break;
                            case 'boolean':
                                t.bool = e;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = e.toString();
                        }
                        return t;
                    });
                }
                const te = (u, e, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Ru.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    re = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            r = u.args,
                            n = u.onMouseEnter,
                            i = u.onMouseLeave,
                            o = u.onMouseDown,
                            s = u.onClick,
                            l = u.ignoreShowDelay,
                            E = void 0 !== l && l,
                            c = u.ignoreMouseClick,
                            A = void 0 !== c && c,
                            F = u.decoratorId,
                            D = void 0 === F ? 0 : F,
                            d = u.isEnabled,
                            B = void 0 === d || d,
                            m = u.targetId,
                            _ = void 0 === m ? 0 : m,
                            C = u.onShow,
                            g = u.onHide,
                            p = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, ue);
                        const f = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            h = (0, a.useMemo)(
                                () =>
                                    _ ||
                                    ((u = 1) => {
                                        const e = new Error().stack;
                                        let t,
                                            r = R.invalid('resId'),
                                            n = '';
                                        var a;
                                        return (
                                            e &&
                                                ((n =
                                                    (null == (a = e.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) ||
                                                    ''),
                                                (t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (r = window.subViews[t].id)),
                                            { callerUrl: n, caller: t, stack: e, resId: r }
                                        );
                                    })().resId,
                                [_],
                            ),
                            v = (0, a.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (te(t, D, { isMouseEvent: !0, on: !0, arguments: ee(r) }, h),
                                    C && C(),
                                    (f.current.isVisible = !0));
                            }, [t, D, r, h, C]),
                            b = (0, a.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const u = f.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (f.current.timeoutId = 0)),
                                        te(t, D, { on: !1 }, h),
                                        f.current.isVisible && g && g(),
                                        (f.current.isVisible = !1));
                                }
                            }, [t, D, h, g]),
                            w = (0, a.useCallback)((u) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(f.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const u = f.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            u && window.clearTimeout(u));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === B && b();
                            }, [B, b]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        (window.removeEventListener('mouseleave', b), b());
                                    }
                                ),
                                [b],
                            ),
                            B
                                ? (0, a.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((T = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          (clearTimeout(f.current.timeoutId),
                                                          (f.current.timeoutId = window.setTimeout(v, E ? 100 : 400)),
                                                          n && n(u),
                                                          T && T(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  (b(), null == i || i(e), null == u || u(e));
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  (!1 === A && b(), null == s || s(e), null == u || u(e));
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  (!1 === A && b(), null == o || o(e), null == u || u(e));
                                              })(e.props.onMouseDown),
                                          },
                                          p,
                                      ),
                                  )
                                : e
                        );
                        var T;
                    },
                    ne = ['children'];
                function ae() {
                    return (
                        (ae =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        ae.apply(this, arguments)
                    );
                }
                const ie = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, ne);
                        return i().createElement(
                            re,
                            ae(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                t,
                            ),
                            e,
                        );
                    },
                    oe = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function se() {
                    return (
                        (se =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        se.apply(this, arguments)
                    );
                }
                const le = R.views.common.tooltip_window.simple_tooltip_content,
                    Ee = (u) => {
                        let e = u.children,
                            t = u.body,
                            r = u.header,
                            n = u.note,
                            o = u.alert,
                            s = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, oe);
                        const E = (0, a.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: r, note: n, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, r, n, s]);
                        return i().createElement(
                            re,
                            se(
                                {
                                    contentId:
                                        ((c = null == s ? void 0 : s.hasHtmlContent),
                                        c ? le.SimpleTooltipHtmlContent('resId') : le.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            e,
                        );
                        var c;
                    };
                function ce() {
                    return (
                        (ce =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        ce.apply(this, arguments)
                    );
                }
                const Ae = ({ children: u, tooltipArgs: e, className: t }) => {
                        if (!e) return u;
                        const r = i().createElement('div', { className: t }, u);
                        if (e.header || e.body) return i().createElement(Ee, e, r);
                        const n = e.contentId;
                        return n ? i().createElement(re, ce({}, e, { contentId: n }), r) : i().createElement(ie, e, r);
                    },
                    Fe = ({ value: u, format: e = 'integral' }) => {
                        const t = (function (u) {
                                return 'gold' === u ? Ru.B3.GOLD : Ru.B3.INTEGRAL;
                            })(e),
                            r = Ru.Z5.getNumberFormat(u, t);
                        return void 0 !== u && void 0 !== r ? r : null;
                    },
                    De = [
                        ju.Items,
                        ju.Equipment,
                        ju.Xp,
                        ju.XpFactor,
                        ju.Blueprints,
                        ju.BlueprintsAny,
                        ju.Goodies,
                        ju.Berths,
                        ju.Slots,
                        ju.Tokens,
                        ju.CrewSkins,
                        ju.CrewBooks,
                        ju.Customizations,
                        ju.CreditsFactor,
                        ju.TankmenXp,
                        ju.TankmenXpFactor,
                        ju.FreeXpFactor,
                        ju.BattleToken,
                        ju.LootBox,
                        ju.PremiumUniversal,
                        ju.NaturalCover,
                        ju.BpCoin,
                        ju.BattlePassSelectToken,
                        ju.BattlaPassFinalAchievement,
                        ju.BattleBadge,
                        ju.BattlePassTicket,
                        ju.BonusX5,
                        ju.CrewBonusX3,
                        ju.EpicSelectToken,
                        ju.Comp7TokenWeeklyReward,
                        ju.DeluxeGift,
                        ju.ModernizedDevicesT1Gift,
                        ju.ModernizedDevicesT2Gift,
                        ju.ModernizedDevicesT3Gift,
                        ju.BattleBoosterGift,
                        ju.OptionalDevice,
                        ju.Attachment,
                        ju.Stamp,
                        ju.WtEventLootbox,
                        ju.WtEventTicket,
                    ],
                    de = [ju.Gold, ju.Credits, ju.Crystal, ju.FreeXp],
                    Be = [ju.BattlePassPoints, ju.EquipCoin],
                    me = [ju.PremiumPlus, ju.Premium],
                    _e = ['engravings', 'backgrounds'],
                    Ce = ['engraving', 'background'],
                    ge = (u, e = qu.Small) => {
                        const t = u.name,
                            r = u.type,
                            n = u.value,
                            a = u.icon,
                            i = u.item,
                            o = u.dogTagType,
                            s = ((u) => {
                                switch (u) {
                                    case qu.S600x450:
                                        return 'c_600x450';
                                    case qu.S400x300:
                                        return 'c_400x300';
                                    case qu.S296x222:
                                        return 'c_296x222';
                                    case qu.S232x174:
                                        return 'c_232x174';
                                    case qu.Big:
                                        return 'c_80x80';
                                    case qu.Small:
                                        return 'c_48x48';
                                    default:
                                        return u;
                                }
                            })(e);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${r}_${n}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${e}.${a}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                                return 'big' === e
                                    ? u.iconBig.replace('..', 'img://gui')
                                    : u.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${a}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${e}.${a}`;
                            case 'dogTagComponents':
                                return ((u, e, t) => {
                                    const r = _e[u];
                                    if (r) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(e).$dyn(r),
                                            a = n.$dyn(t);
                                        return a ? `${a}` : `${n.$dyn(Ce[u])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, e, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${s}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${s}.${a}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${s}.${a}`;
                            case 'attachment':
                                return `R.images.gui.maps.vehicles.attachments.${e}.${a}`;
                            case 'statTracker':
                                return `R.images.gui.maps.vehicles.statTrackers.${e}.${a}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}`;
                        }
                    },
                    pe = (u, e, t) => {
                        const r = e && { contentId: e };
                        return Object.assign(
                            {
                                args: u,
                                isEnabled: Boolean((u && u.tooltipId) || e),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !e,
                            },
                            r,
                            t,
                        );
                    },
                    fe = [qu.Small, qu.Big],
                    he = {
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
                    ve = ({
                        name: u,
                        image: e,
                        isPeriodic: t = !1,
                        size: r = qu.Big,
                        special: n,
                        value: a,
                        valueType: o,
                        title: s,
                        style: l,
                        className: E,
                        classNames: c,
                        tooltipArgs: A,
                        periodicIconTooltipArgs: F,
                    }) => {
                        const D = ((u, e) => {
                                if (void 0 === e || !fe.includes(u)) return null;
                                switch (e) {
                                    case Xu.BATTLE_BOOSTER:
                                    case Xu.BATTLE_BOOSTER_REPLACE:
                                        return Ku.BATTLE_BOOSTER;
                                }
                            })(r, n),
                            d = ((u) => {
                                if (void 0 === u) return null;
                                switch (u) {
                                    case Xu.BATTLE_BOOSTER:
                                        return Qu.BATTLE_BOOSTER;
                                    case Xu.BATTLE_BOOSTER_REPLACE:
                                        return Qu.BATTLE_BOOSTER_REPLACE;
                                    case Xu.BUILT_IN_EQUIPMENT:
                                        return Qu.BUILT_IN_EQUIPMENT;
                                    case Xu.EQUIPMENT_PLUS:
                                        return Qu.EQUIPMENT_PLUS;
                                    case Xu.EQUIPMENT_TROPHY_BASIC:
                                        return Qu.EQUIPMENT_TROPHY_BASIC;
                                    case Xu.EQUIPMENT_TROPHY_UPGRADED:
                                        return Qu.EQUIPMENT_TROPHY_UPGRADED;
                                    case Xu.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Qu.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Xu.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Qu.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Xu.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Qu.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Xu.PROGRESSION_STYLE_UPGRADED_1:
                                        return Qu.PROGRESSION_STYLE_UPGRADED_1;
                                    case Xu.PROGRESSION_STYLE_UPGRADED_2:
                                        return Qu.PROGRESSION_STYLE_UPGRADED_2;
                                    case Xu.PROGRESSION_STYLE_UPGRADED_3:
                                        return Qu.PROGRESSION_STYLE_UPGRADED_3;
                                    case Xu.PROGRESSION_STYLE_UPGRADED_4:
                                        return Qu.PROGRESSION_STYLE_UPGRADED_4;
                                    case Xu.PROGRESSION_STYLE_UPGRADED_5:
                                        return Qu.PROGRESSION_STYLE_UPGRADED_5;
                                    case Xu.PROGRESSION_STYLE_UPGRADED_6:
                                        return Qu.PROGRESSION_STYLE_UPGRADED_6;
                                    case Xu.ATTACHMENT_RARE:
                                        return Qu.ATTACHMENT_RARE;
                                    case Xu.ATTACHMENT_EPIC:
                                        return Qu.ATTACHMENT_EPIC;
                                    case Xu.ATTACHMENT_LEGENDARY:
                                        return Qu.ATTACHMENT_LEGENDARY;
                                }
                            })(n),
                            B = ((u, e) => {
                                if (void 0 === u) return null;
                                switch (e) {
                                    case Yu.MULTI: {
                                        const e = Number(u);
                                        return isFinite(e) && e > 1 ? `x${Math.floor(e)}` : null;
                                    }
                                    case Yu.CURRENCY:
                                    case Yu.NUMBER:
                                        return i().createElement(Fe, { format: 'integral', value: Number(u) });
                                    case Yu.PREMIUM_PLUS: {
                                        const e = Number(u);
                                        return isNaN(e) ? u : null;
                                    }
                                    default:
                                        return u;
                                }
                            })(a, o);
                        return i().createElement(
                            'div',
                            {
                                className: m()(he.base, he[`base__${r}`], Ju.includes(u) && he.base__normalize, E),
                                style: l,
                            },
                            i().createElement(
                                Ae,
                                { tooltipArgs: A, className: he.tooltipWrapper },
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement(
                                        'div',
                                        { className: m()(he.image, null == c ? void 0 : c.image) },
                                        D &&
                                            i().createElement('div', {
                                                className: m()(he.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${D}_highlight)`,
                                                },
                                            }),
                                        e &&
                                            i().createElement('div', {
                                                className: m()(he.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${e})` },
                                            }),
                                        d &&
                                            i().createElement('div', {
                                                className: m()(he.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${d}_overlay)`,
                                                },
                                            }),
                                    ),
                                    B &&
                                        i().createElement(
                                            'div',
                                            {
                                                className: m()(
                                                    he.info,
                                                    he[`info__${u}`],
                                                    o === Yu.MULTI && he.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            B,
                                        ),
                                    s && i().createElement('div', { className: he.title }, s),
                                ),
                            ),
                            t &&
                                i().createElement(
                                    Ae,
                                    { tooltipArgs: F },
                                    i().createElement('div', {
                                        className: m()(he.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    be = {
                        base: 'RewardRow_base_b6',
                        base__s232x174: 'RewardRow_base__s232x174_ec',
                        box: 'RewardRow_box_41',
                        boxIcon: 'RewardRow_boxIcon_8e',
                        boxLabel: 'RewardRow_boxLabel_b8',
                        divider: 'RewardRow_divider_e0',
                        items: 'RewardRow_items_83',
                        item: 'RewardRow_item_d5',
                        label: 'RewardRow_label_d4',
                        percent: 'RewardRow_percent_2b',
                    };
                function we() {
                    return (
                        (we =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        we.apply(this, arguments)
                    );
                }
                const Te = (0, Pu.Pi)(({ rewards: u, iconKey: e, label: t, showRewardsNames: r }) => {
                    const n = $u().model,
                        a = n.root.get().assetsPointer,
                        o = n.lootBoxes.get().length > 2 ? qu.Big : qu.S232x174,
                        s = ((u, e) =>
                            zu(u, (u) => {
                                return {
                                    name: u.name,
                                    image: ge(u, e),
                                    value: u.value,
                                    special: u.overlayType,
                                    valueType:
                                        ((t = u.name),
                                        De.includes(t)
                                            ? Yu.MULTI
                                            : de.includes(t)
                                              ? Yu.CURRENCY
                                              : Be.includes(t)
                                                ? Yu.NUMBER
                                                : me.includes(t)
                                                  ? Yu.PREMIUM_PLUS
                                                  : Yu.STRING),
                                    tooltipArgs: pe({ tooltipId: u.tooltipId }, Number(u.tooltipContentId)),
                                    label: u.label,
                                    probability: u.probability,
                                };
                                var t;
                            }))(u, o),
                        l = ku(a).progression.bonuses.big;
                    return i().createElement(
                        'div',
                        { className: m()(be.base, be[`base__${o}`]) },
                        i().createElement(
                            'div',
                            { className: be.box },
                            i().createElement('div', {
                                className: be.boxIcon,
                                style: { backgroundImage: `url(${l.$dyn(e)})` },
                            }),
                            i().createElement('div', { className: be.boxLabel }, t),
                        ),
                        i().createElement('div', { className: be.divider }),
                        i().createElement(
                            'div',
                            { className: be.items },
                            s.length > 0 &&
                                zu(s, (u, e) => {
                                    return i().createElement(
                                        'div',
                                        { className: be.item, key: e },
                                        i().createElement(ve, we({}, u, { size: o })),
                                        r && u.label && i().createElement(W, { classMix: be.label, text: u.label }),
                                        Boolean(u.probability) &&
                                            i().createElement(
                                                'div',
                                                { className: be.percent },
                                                ((t = R.strings.common.percentValue()),
                                                (n = { value: u.probability }),
                                                t.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                                                    const e = 0 === u.indexOf('%') ? 2 : 1;
                                                    return String(n[u.slice(e, -e)]);
                                                })),
                                            ),
                                    );
                                    var t, n;
                                }),
                        ),
                    );
                });
                function Se() {
                    return (
                        (Se =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Se.apply(this, arguments)
                    );
                }
                const Re = (0, Pu.Pi)(() => {
                        const u = $u().model.lootBoxes.get();
                        return i().createElement(
                            'div',
                            { className: 'RewardList_base_6e' },
                            u.length > 0 && zu(u, (u, e) => i().createElement(Te, Se({}, u, { key: e }))),
                        );
                    }),
                    xe = (0, Pu.Pi)(() => {
                        const u = $u(),
                            e = u.model,
                            t = u.controls,
                            r = e.root.get().assetsPointer,
                            n = t.closeWindow;
                        var a;
                        ((a = n), yu(Su.n.ESCAPE, a));
                        const o = (function (u, { poFileName: e, assetsPointer: t, isSubMode: r = !1 } = {}) {
                                const n = e ? R.strings.$dyn(e) : R.strings.fun_random;
                                if (!n || 'string' == typeof n) throw Error("Incorrect 'poFileName' argument");
                                const a = r ? 'sub_modes' : 'modes',
                                    i = n.$dyn(a),
                                    o = (t ? (null == i ? void 0 : i.$dyn(t)) : n) || (null == i ? void 0 : i.$dyn(Ou));
                                return u
                                    ? { staticTexts: Mu(n, u), dynamicTexts: Mu(o, u) }
                                    : { staticTexts: n, dynamicTexts: o };
                            })('tierList', { assetsPointer: r }),
                            s = o.dynamicTexts,
                            l = cu();
                        return i().createElement(
                            'div',
                            { className: 'App_base_ee' },
                            i().createElement(
                                'div',
                                { className: 'App_closeButton_8a' },
                                i().createElement(Tu, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: n,
                                }),
                            ),
                            i().createElement('div', {
                                className: 'App_background_cc',
                                style: { backgroundImage: `url('${ku(r).library.tier_list_bg()}')` },
                            }),
                            i().createElement(
                                hu.Vertical.Area.Default,
                                {
                                    className: 'App_defaultVertical_3c',
                                    api: l,
                                    barClassNames: { base: 'App_scroll_47' },
                                },
                                i().createElement(
                                    'div',
                                    { className: 'App_content_83' },
                                    i().createElement(
                                        'div',
                                        { className: 'App_header_5d' },
                                        i().createElement(
                                            'div',
                                            { className: 'App_title_ae' },
                                            i().createElement(W, { text: s.title() }),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: 'App_description_0e' },
                                            i().createElement(W, { text: s.description() }),
                                        ),
                                    ),
                                    i().createElement(Re, null),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    L().render(
                        i().createElement(Wu, null, i().createElement(y, null, i().createElement(xe, null))),
                        document.getElementById('root'),
                    );
                });
            },
            7363: (u) => {
                'use strict';
                u.exports = React;
            },
            1533: (u) => {
                'use strict';
                u.exports = ReactDOM;
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return (__webpack_modules__[u](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, r] = deferred[s], a = !0, i = 0; i < e.length; i++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > r; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, r];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return (__webpack_require__.d(e, { a: e }), e);
        }),
        (__webpack_require__.d = (u, e) => {
            for (var t in e)
                __webpack_require__.o(e, t) &&
                    !__webpack_require__.o(u, t) &&
                    Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (__webpack_require__.r = (u) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 }));
        }),
        (__webpack_require__.j = 'lobby/feature/FunRandomTierListView/FunRandomTierListView'),
        (() => {
            var u = { 'lobby/feature/FunRandomTierListView/FunRandomTierListView': 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        n,
                        [a, i, o] = t,
                        s = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (e && e(t); s < a.length; s++)
                        ((n = a[s]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/fun_random.vendors'], () =>
        __webpack_require__(5143),
    );
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
