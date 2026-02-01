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
                    t.d(u, { mouse: () => c, off: () => i, on: () => s, onResize: () => r, onScaleUpdated: () => o }));
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    i = (e, u) => engine.off(e, u),
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
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        n(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(r, s),
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
                        getMouseGlobalPosition: () => o,
                        getSize: () => r,
                        graphicsQuality: () => s,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = t(527),
                    a = t(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
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
                t.d(u, { O: () => o });
                var n = t(5959),
                    a = t(7698),
                    r = t(514);
                const o = { view: t(7641), client: n, sound: r.ZP, intl: a.N };
            },
            7698: (e, u, t) => {
                'use strict';
                t.d(u, { N: () => n });
                const n = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => o });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    o = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
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
                        addModelObserver: () => _,
                        addPreloadTexture: () => i,
                        arabic2roman: () => x,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => y,
                        enableFullScreenModeSupported: () => L,
                        events: () => o.U,
                        extraSize: () => T,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => w,
                        getExternalPaddingsRem: () => k,
                        getFontNames: () => v,
                        getScale: () => F,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        initExternalPaddings: () => O,
                        isEventHandled: () => f,
                        isFocused: () => D,
                        pxToRem: () => p,
                        remToPx: () => h,
                        resize: () => E,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => S,
                    }));
                var n = t(9690),
                    a = t(3722),
                    r = t(6112),
                    o = t(6538),
                    s = t(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function _(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function g(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: h(u.x), y: h(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function D() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function B() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const v = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    x = n.cg;
                function k() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const y = Object.keys(r.W).reduce(
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
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function L() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function O(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            n = u.right,
                            a = u.bottom,
                            r = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${a}rem`),
                            e.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    o = 32,
                    s = 64,
                    i = (e, u) => {
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
                            i('popover' === e ? a : o);
                        },
                        minimize() {
                            i(s);
                        },
                        move(e) {
                            i(r, { isMouseEvent: !0, on: e });
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
                t.d(u, { cg: () => r });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let u = '';
                    for (let t = a.length - 1; t >= 0; t--) for (; e >= a[t]; ) ((u += n[t]), (e -= a[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
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
                t.d(u, { Sw: () => r.Z, B3: () => i, Z5: () => o.Z5, B0: () => s, ry: () => F, Eu: () => p });
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
                var r = t(1358);
                var o = t(8613);
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
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    m = t(3138);
                const E = ['args'];
                function g(e, u, t, n, a, r, o) {
                    try {
                        var s = e[r](o),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(n, a);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    F = (function () {
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
                                            g(r, n, a, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            g(r, n, a, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    p = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    h = (e, u) => {
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
                                })(u, E);
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
                    b = () => h(s.CLOSE),
                    D = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var C = t(7572);
                const f = a.instance,
                    B = {
                        DataTracker: r.Z,
                        ViewModel: C.Z,
                        ViewEventType: s,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => h(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                _ = i.width,
                                d = i.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + o.x,
                                    y: m.O.view.pxToRem(c) + o.y,
                                    width: m.O.view.pxToRem(_),
                                    height: m.O.view.pxToRem(d),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: A(E),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => D(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            D(e, b);
                        },
                        handleViewEvent: h,
                        onBindingsReady: F,
                        onLayoutReady: p,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
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
                        ClickOutsideManager: f,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = B;
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
            8159: (e, u, t) => {
                'use strict';
                var n = t(7363),
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
                var o = t(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var i;
                function l(e = o.O.client.getSize('rem')) {
                    const u = e.width,
                        t = e.height;
                    return Object.assign(
                        { width: u, height: t },
                        (function (e, u, t) {
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
                        })(u, t, s),
                    );
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
                })(i || (i = {}));
                const c = l(),
                    _ = (0, n.createContext)(c),
                    d = ['children'];
                (0, n.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, d);
                    const a = (0, n.useContext)(_),
                        o = a.extraLarge,
                        s = a.large,
                        i = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        m = a.extraLargeWidth,
                        E = a.largeWidth,
                        g = a.mediumWidth,
                        A = a.smallWidth,
                        F = a.extraSmallWidth,
                        p = a.extraLargeHeight,
                        h = a.largeHeight,
                        b = a.mediumHeight,
                        D = a.smallHeight,
                        C = a.extraSmallHeight,
                        f = { extraLarge: p, large: h, medium: b, small: D, extraSmall: C };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && s) return u;
                        if (t.medium && i) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && m) return r(u, t, f);
                        if (t.largeWidth && E) return r(u, t, f);
                        if (t.mediumWidth && g) return r(u, t, f);
                        if (t.smallWidth && A) return r(u, t, f);
                        if (t.extraSmallWidth && F) return r(u, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && p) return u;
                            if (t.largeHeight && h) return u;
                            if (t.mediumHeight && b) return u;
                            if (t.smallHeight && D) return u;
                            if (t.extraSmallHeight && C) return u;
                        }
                    }
                    return null;
                });
                const m = ({ children: e }) => {
                    const u = (0, n.useState)(l),
                        t = u[0],
                        r = u[1],
                        s = (0, n.useState)(!1),
                        i = s[0],
                        c = s[1];
                    return (
                        (0, n.useLayoutEffect)(() => {
                            function e() {
                                r((e) => {
                                    const u = o.O.client.getSize('rem');
                                    return e.width === u.width && e.height === u.height ? e : l(u);
                                });
                            }
                            return (
                                e(),
                                c(!0),
                                o.O.client.events.on('clientResized', e),
                                o.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (o.O.client.events.off('clientResized', e),
                                        o.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        a().createElement(_.Provider, { value: t }, i && e)
                    );
                };
                var E = t(6483),
                    g = t.n(E),
                    A = t(926),
                    F = t.n(A);
                let p, h, b;
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
                    })(h || (h = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge'));
                    })(b || (b = {})));
                const D = () => {
                        const e = (0, n.useContext)(_),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
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
                                        return h.ExtraLarge;
                                    case e.largeWidth:
                                        return h.Large;
                                    case e.mediumWidth:
                                        return h.Medium;
                                    case e.smallWidth:
                                        return h.Small;
                                    case e.extraSmallWidth:
                                        return h.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), h.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
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
                        return { mediaSize: a, mediaWidth: r, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    C = ['children', 'className'];
                function f() {
                    return (
                        (f =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        f.apply(this, arguments)
                    );
                }
                const B = {
                        [h.ExtraSmall]: '',
                        [h.Small]: F().SMALL_WIDTH,
                        [h.Medium]: `${F().SMALL_WIDTH} ${F().MEDIUM_WIDTH}`,
                        [h.Large]: `${F().SMALL_WIDTH} ${F().MEDIUM_WIDTH} ${F().LARGE_WIDTH}`,
                        [h.ExtraLarge]: `${F().SMALL_WIDTH} ${F().MEDIUM_WIDTH} ${F().LARGE_WIDTH} ${F().EXTRA_LARGE_WIDTH}`,
                    },
                    w = {
                        [b.ExtraSmall]: '',
                        [b.Small]: F().SMALL_HEIGHT,
                        [b.Medium]: `${F().SMALL_HEIGHT} ${F().MEDIUM_HEIGHT}`,
                        [b.Large]: `${F().SMALL_HEIGHT} ${F().MEDIUM_HEIGHT} ${F().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${F().SMALL_HEIGHT} ${F().MEDIUM_HEIGHT} ${F().LARGE_HEIGHT} ${F().EXTRA_LARGE_HEIGHT}`,
                    },
                    v = {
                        [p.ExtraSmall]: '',
                        [p.Small]: F().SMALL,
                        [p.Medium]: `${F().SMALL} ${F().MEDIUM}`,
                        [p.Large]: `${F().SMALL} ${F().MEDIUM} ${F().LARGE}`,
                        [p.ExtraLarge]: `${F().SMALL} ${F().MEDIUM} ${F().LARGE} ${F().EXTRA_LARGE}`,
                    },
                    x = (e) => {
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
                            })(e, C);
                        const r = D(),
                            o = r.mediaWidth,
                            s = r.mediaHeight,
                            i = r.mediaSize;
                        return a().createElement('div', f({ className: g()(t, B[o], w[s], v[i]) }, n), u);
                    },
                    k = ['children'];
                const y = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, k);
                    return a().createElement(m, null, a().createElement(x, t, u));
                };
                var T = t(1533),
                    S = t.n(T);
                t(1281);
                let L;
                function O(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(L || (L = {}));
                const I = (e) => e.replace(/&nbsp;/g, ' '),
                    N =
                        ((() => {
                            const e = new RegExp(
                                [
                                    /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                                    /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                                    /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                                    /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                                ]
                                    .map((e) => e.source)
                                    .join('|'),
                                'gum',
                            );
                        })(),
                        (e) => {
                            return (
                                (u = R.strings.common.percentValue()),
                                (t = { value: e }),
                                u.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]))
                            );
                            var u, t;
                        });
                var M = t(9916),
                    P = t(8613);
                (Date.now(), P.Ew.getRegionalDateTime, P.Ew.getFormattedDateTime);
                const H = (e = 1) => {
                        const u = new Error().stack;
                        let t,
                            n = R.invalid('resId'),
                            a = '';
                        var r;
                        u &&
                            ((a = (null == (r = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                            (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (n = window.subViews[t].id));
                        return { callerUrl: a, caller: t, stack: u, resId: n };
                    },
                    W = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    j = (e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    $ = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    V = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    U = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = W(`${e}.${t}`, window);
                                return $(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    G = (e) => {
                        const u = ((e) => {
                                const u = H(),
                                    t = u.caller,
                                    n = u.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: V(a, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const a = W(V(t, `${u}.${n}`), window);
                                    return $(a) ? (e.push(a.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    };
                const z = () => (window.injected || (window.injected = new Map()), window.injected);
                const q = M.Sw.instance;
                let K;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(K || (K = {}));
                const Z = (e = 'model', u = K.Deep) => {
                    const t = (0, n.useState)(0),
                        a = (t[0], t[1]),
                        r = (0, n.useMemo)(() => H(), []),
                        o = r.callerUrl,
                        s = r.caller,
                        i = r.resId,
                        l = (0, n.useMemo)(() => {
                            const u = (function (e) {
                                return z().has(e);
                            })(o.replace('.js', '.html'));
                            return window.__feature && window.__feature !== s && !u ? `subViews.${s}.${e}` : e;
                        }, [o, s, e]),
                        c = (0, n.useState)(() =>
                            ((e) => {
                                const u = W(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return $(u) ? u.value : u;
                            })(U(l)),
                        ),
                        _ = c[0],
                        d = c[1],
                        m = (0, n.useRef)(-1);
                    return (
                        j(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? K.Deep : K.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== K.None)
                            ) {
                                const t = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        u === K.Deep
                                            ? (e === _ && a((e) => e + 1), d(e))
                                            : d(Object.assign([], e));
                                    },
                                    n = G(e);
                                m.current = q.addCallback(n, t, i, u === K.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (u !== K.None)
                                return () => {
                                    q.removeCallback(m.current, i);
                                };
                        }, [i, u]),
                        _
                    );
                };
                M.Sw.instance;
                var Y = t(5521);
                const X = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function J(e = Y.n.NONE, u = X, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== Y.n.NONE)
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
                const Q = /<link.*?>/g,
                    ee = /\.\.\//g,
                    ue = /<script.*?>/g,
                    te = 'default.css',
                    ne = (e) => {
                        const u = e.match(ee);
                        return u && u.join('');
                    },
                    ae = () => {
                        for (
                            var e = 0, u = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < u.length;
                            e++
                        ) {
                            const t = u[e];
                            if (!t.href.includes(te)) return t.href;
                        }
                        return '';
                    },
                    re = (e) => {
                        const u = ae(),
                            t = ne(u);
                        let n,
                            a = e;
                        for (; null !== (n = ue.exec(e)); ) {
                            const e = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const u = t + e[2].replace(ee, '');
                                a = a.replace(e[2], u);
                            }
                        }
                        return a;
                    },
                    oe = () => {
                        const e = [];
                        let u = !1;
                        const t = () => {
                            if (!e.length) return void (u = !1);
                            const n = e.shift();
                            n && ((u = !0), n().then(() => t()));
                        };
                        return {
                            add: (n) => {
                                (e.push(n), u || t());
                            },
                        };
                    },
                    se = 'SubView_base_df',
                    ie = 'subViews.onChanged',
                    le = oe(),
                    ce = (0, n.memo)(({ id: e, fallback: u, onLoadCallback: t, mixClass: r }) => {
                        const o = (0, n.useState)(''),
                            s = o[0],
                            i = o[1],
                            l = (0, n.useMemo)(() => ({ __html: re(s) }), [s]),
                            c = (0, n.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            _ = (0, n.useState)(!1),
                            d = _[0],
                            m = _[1],
                            E = (0, n.useCallback)(
                                (e) => {
                                    e.includes(c) &&
                                        (m(!0), engine.off(ie, E), window.subViews.removeChildChangedCallback(c));
                                },
                                [c],
                            ),
                            A = (0, n.useCallback)((e) => {
                                le.add(
                                    () =>
                                        new Promise((u) => {
                                            i(e);
                                            const t = new MutationObserver(() => {
                                                    (t.disconnect(), u());
                                                }),
                                                n = document.getElementById('root');
                                            n && t.observe(n, { childList: !0 });
                                        }),
                                );
                            }, []);
                        ((0, n.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const u = window.subViews.get(e),
                                    t = u.path;
                                let n;
                                if ((n = t.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, u)),
                                        engine.on(`subView:inject->${n}`, A),
                                        (({ path: e, name: u }) => {
                                            const t = new XMLHttpRequest();
                                            ((t.onreadystatechange = () => {
                                                4 === t.readyState &&
                                                    (200 === t.status
                                                        ? (0, M.Eu)().then(() => {
                                                              (console.info(`Sub view ${u} loaded: ${e}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${u}`,
                                                                      t.responseText,
                                                                  ));
                                                          })
                                                        : console.error(
                                                              `subView: status: ${t.status} - can't get bundle`,
                                                          ));
                                            }),
                                                t.open('GET', e),
                                                t.send());
                                        })({ name: n, path: t }),
                                        () => {
                                            (n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                engine.off(`subView:inject->${n}`, A),
                                                console.info(`Sub view ${n} is destroyed: ${t}`));
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(ie, E);
                        }, [E, A, e, d]),
                            (0, n.useEffect)(
                                () => () => {
                                    s &&
                                        ((e) => {
                                            const u = ne(ae());
                                            let t;
                                            for (; null !== (t = Q.exec(e)); ) {
                                                const e = t[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const t = u + e[1].replace(ee, ''),
                                                        n = document.head.querySelector(`[href="${t}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(s);
                                },
                                [s],
                            ));
                        const F = g()(se, r);
                        if (s) {
                            let u;
                            return (
                                (u = document.getElementById('root')) && u.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let u;
                                    const t = ae(),
                                        n = ne(t);
                                    for (; null !== (u = Q.exec(e)); ) {
                                        const e = u[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(te) && n) {
                                            const u = n + e[1].replace(ee, ''),
                                                t = document.createElement('link');
                                            ((t.href = u), (t.rel = 'stylesheet'), document.head.appendChild(t));
                                        }
                                    }
                                })(s),
                                t && t(e),
                                a().createElement('div', { className: F, dangerouslySetInnerHTML: l })
                            );
                        }
                        return u ? a().createElement('div', { className: F }, a().createElement(u, null)) : null;
                    }),
                    _e = 'subViews.onChanged',
                    de = '.html',
                    me = /^coui:\/\/gui\/.*/,
                    Ee = oe(),
                    ge = (e) => {
                        const u = document.createElement('script');
                        ((u.src = e), (u.defer = !0), document.head.appendChild(u));
                    };
                (0, n.memo)(({ id: e, bundleLevelPath: u = 3, mixClass: t, children: r }) => {
                    const o = (0, n.useRef)(null),
                        s = (0, n.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                        i = (0, n.useState)(!1),
                        l = i[0],
                        c = i[1],
                        _ = (0, n.useState)(!0),
                        d = _[0],
                        m = _[1],
                        E = (0, n.useCallback)(
                            (e) => {
                                e.includes(s) &&
                                    (c(!0), engine.off(_e, E), window.subViews.removeChildChangedCallback(s));
                            },
                            [s],
                        ),
                        A = (0, n.useCallback)(
                            (e) => {
                                Ee.add(
                                    () =>
                                        new Promise((t) => {
                                            const n = new MutationObserver(() => {
                                                (m(!1), n.disconnect(), t());
                                            });
                                            if (o.current) {
                                                const t = document.getElementById('root');
                                                (t && t.setAttribute('id', 'bugSubView'),
                                                    o.current.setAttribute('id', 'root'));
                                                const a = document.createElement('link');
                                                ((a.href = e.replace(de, '.css')),
                                                    (a.rel = 'stylesheet'),
                                                    document.head.appendChild(a),
                                                    me.test(e) &&
                                                        ge(
                                                            e
                                                                .split('/')
                                                                .slice(0, -u)
                                                                .concat(['vendors.js'])
                                                                .join('/')
                                                                .replace('/production/', '/production/lib/'),
                                                        ),
                                                    ge(e.replace(de, '.js')),
                                                    n.observe(o.current, { childList: !0 }));
                                            }
                                        }),
                                );
                            },
                            [u],
                        );
                    return (
                        (0, n.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const u = window.subViews.get(e),
                                    t = u.path;
                                let n = t.split('/').pop();
                                if (n)
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, u)),
                                        A(t),
                                        () => {
                                            (n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                console.info(`Sub view ${n} is destroyed: ${t}`));
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(_e, E);
                        }, [E, A, e, l]),
                        a().createElement(
                            'div',
                            { className: g()(se, t) },
                            d && r,
                            a().createElement('div', { ref: o }),
                        )
                    );
                });
                function Ae(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const Fe = {
                        playHighlight() {
                            Ae('highlight');
                        },
                        playClick() {
                            Ae('play');
                        },
                        playYes() {
                            Ae('yes1');
                        },
                    },
                    pe = {
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
                let he, be;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(he || (he = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(be || (be = {})));
                const De = ({
                        children: e,
                        size: u,
                        disabled: t,
                        mixClass: r,
                        onMouseEnter: o,
                        onMouseMove: s,
                        onMouseDown: i,
                        onMouseUp: l,
                        onMouseLeave: c,
                        onClick: _,
                        isFocused: d = !1,
                        type: m = he.primary,
                        soundHover: E = 'highlight',
                        soundClick: A = 'play',
                    }) => {
                        const F = (0, n.useRef)(null),
                            p = (0, n.useState)(d),
                            h = p[0],
                            b = p[1],
                            D = (0, n.useState)(!1),
                            C = D[0],
                            f = D[1];
                        return (
                            (0, n.useEffect)(() => {
                                function e(e) {
                                    h && null !== F.current && !F.current.contains(e.target) && b(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [h]),
                            (0, n.useEffect)(() => {
                                b(d);
                            }, [d]),
                            a().createElement(
                                'div',
                                {
                                    ref: F,
                                    className: g()(
                                        pe.base,
                                        pe[`base__${m}`],
                                        t && pe.base__disabled,
                                        u && pe[`base__${u}`],
                                        h && pe.base__focus,
                                        C && pe.base__highlightActive,
                                        r,
                                    ),
                                    onMouseEnter: function (e) {
                                        t || (null !== E && Ae(E), o && o(e));
                                    },
                                    onMouseMove: function (e) {
                                        s && s(e);
                                    },
                                    onMouseUp: function (e) {
                                        t || (l && l(e), f(!1));
                                    },
                                    onMouseDown: function (e) {
                                        t ||
                                            (null !== A && Ae(A),
                                            i && i(e),
                                            d && (t || (F.current && (F.current.focus(), b(!0)))),
                                            f(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        t || (c && c(e), f(!1));
                                    },
                                    onClick: function (e) {
                                        t || (_ && _(e));
                                    },
                                },
                                m !== he.ghost &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('div', { className: pe.back }),
                                        a().createElement('span', { className: pe.texture }),
                                    ),
                                a().createElement(
                                    'span',
                                    { className: g()(pe.state, pe.state__default) },
                                    a().createElement('span', { className: pe.stateDisabled }),
                                    a().createElement('span', { className: pe.stateHighlightHover }),
                                    a().createElement('span', { className: pe.stateHighlightActive }),
                                ),
                                a().createElement(
                                    'span',
                                    { className: pe.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    },
                    Ce = [
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
                function fe(e) {
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
                const Be = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: M.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    we = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            m = e.decoratorId,
                            E = void 0 === m ? 0 : m,
                            g = e.isEnabled,
                            A = void 0 === g || g,
                            F = e.targetId,
                            p = void 0 === F ? 0 : F,
                            h = e.onShow,
                            b = e.onHide,
                            D = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Ce);
                        const C = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, n.useMemo)(() => p || H().resId, [p]),
                            B = (0, n.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (Be(t, E, { isMouseEvent: !0, on: !0, arguments: fe(a) }, f),
                                    h && h(),
                                    (C.current.isVisible = !0));
                            }, [t, E, a, f, h]),
                            w = (0, n.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        Be(t, E, { on: !1 }, f),
                                        C.current.isVisible && b && b(),
                                        (C.current.isVisible = !1));
                                }
                            }, [t, E, f, b]),
                            v = (0, n.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(C.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = C.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', v, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', v, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === A && w();
                            }, [A, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        (window.removeEventListener('mouseleave', w), w());
                                    }
                                ),
                                [w],
                            ));
                        return A
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(C.current.timeoutId),
                                                      (C.current.timeoutId = window.setTimeout(B, c ? 100 : 400)),
                                                      r && r(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (w(), null == o || o(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === d && w(), null == i || i(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === d && w(), null == s || s(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      D,
                                  ),
                              )
                            : u;
                        var x;
                    },
                    ve = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function xe() {
                    return (
                        (xe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        xe.apply(this, arguments)
                    );
                }
                const ke = R.views.common.tooltip_window.simple_tooltip_content,
                    ye = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            o = e.note,
                            s = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, ve);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: r, note: o, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, r, o, i]);
                        return a().createElement(
                            we,
                            xe(
                                {
                                    contentId:
                                        ((_ = null == i ? void 0 : i.hasHtmlContent),
                                        _ ? ke.SimpleTooltipHtmlContent('resId') : ke.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    },
                    Te = 'TextOverflow_base_3b',
                    Se = ['content', 'classMix', 'className'];
                function Le() {
                    return (
                        (Le =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Le.apply(this, arguments)
                    );
                }
                const Oe = (e) => {
                    let u = e.content,
                        t = e.classMix,
                        r = e.className,
                        o = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, Se);
                    const s = (0, n.useRef)(null),
                        i = (0, n.useState)(!0),
                        l = i[0],
                        c = i[1];
                    return (
                        (0, n.useEffect)(() =>
                            ((e) => {
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
                            })(() => {
                                const e = s.current;
                                e && e.offsetWidth >= e.scrollWidth && c(!1);
                            }),
                        ),
                        a().createElement(
                            ye,
                            { isEnabled: l, body: u },
                            a().createElement('div', Le({}, o, { ref: s, className: g()(Te, r, t) }), u),
                        )
                    );
                };
                let Ie;
                !(function (e) {
                    ((e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent'));
                })(Ie || (Ie = {}));
                const Ne = 'DialogTemplateButton_base_0b',
                    Me = 'DialogTemplateButton_label_83',
                    Re = 'DialogTemplateButton_label__noTooltip_14',
                    Pe = (0, n.memo)(
                        ({ onClick: e, isFocused: u, buttonID: t, isDisabled: r, label: o, tooltip: s, type: i }) => {
                            const l = (0, n.useCallback)(() => {
                                    e({ buttonID: t });
                                }, [e, t]),
                                c = (0, n.useMemo)(() => {
                                    return (
                                        (e = s.type),
                                        (u = { buttonID: t }),
                                        {
                                            isEnabled: e !== Ie.absent,
                                            args: u,
                                            contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                            decoratorId:
                                                e === Ie.normal
                                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow(
                                                          'resId',
                                                      )
                                                    : void 0,
                                            ignoreShowDelay: e === Ie.backport,
                                            ignoreMouseClick: !0,
                                        }
                                    );
                                    var e, u;
                                }, [s.type, t]),
                                _ = g()(Me, s.type !== Ie.absent && Re);
                            return a().createElement(
                                we,
                                c,
                                a().createElement(
                                    'div',
                                    { className: Ne },
                                    a().createElement(
                                        De,
                                        {
                                            size: be.medium,
                                            type: i,
                                            disabled: r,
                                            onClick: l,
                                            isFocused: u,
                                            soundClick: 'cancel' === t ? 'cancelcloseno' : 'play',
                                        },
                                        a().createElement(Oe, { classMix: _, content: o || '' }),
                                    ),
                                ),
                            );
                        },
                    ),
                    He = 'DialogTemplateButtonList_base_8e';
                function We() {
                    return (
                        (We =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        We.apply(this, arguments)
                    );
                }
                const je = (0, n.memo)(() => {
                        const e = Z('model').onButtonClicked,
                            u = Z('model.focus'),
                            t = u.focusedIndex,
                            r = u.onTabPressed,
                            o = Z('model.buttons'),
                            s = (0, n.useCallback)(
                                (e) => {
                                    r({ shift: e.shiftKey });
                                },
                                [r],
                            );
                        J(Y.n.TAB, s);
                        const i = (0, n.useCallback)(
                            (u) => {
                                if (t < 0 || t >= o.length) return;
                                const n = o[t].value;
                                u.altKey || n.isDisabled || e({ buttonID: n.buttonID });
                            },
                            [o, t, e],
                        );
                        return (
                            J(Y.n.ENTER, i),
                            a().createElement(
                                'div',
                                { className: He },
                                o.map(({ value: u }, n) =>
                                    a().createElement(Pe, We({ key: u.buttonID, isFocused: n === t, onClick: e }, u)),
                                ),
                            )
                        );
                    }),
                    $e = 'DialogTemplateWrapper_base_f7',
                    Ve = 'DialogTemplateWrapper_base__hidden_5f',
                    Ue = 'DialogTemplateWrapper_subView_30';
                function Ge() {
                    return (
                        (Ge =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ge.apply(this, arguments)
                    );
                }
                const ze = (0, n.memo)(({ Template: e }) => {
                    const u = Z('model', K.None),
                        t = u.onCloseClicked,
                        r = u.placeHolders,
                        o = u.background,
                        s = u.dimmerAlpha,
                        i = u.displayFlags;
                    (0, n.useEffect)(() => {
                        const e = document.getElementById('root');
                        e && e.setAttribute('id', 'stubDialogTemplate');
                    }, []);
                    const l = i.map(({ value: e }) => e),
                        c = (0, n.useRef)(r.map(({ value: e }) => e.resourceID)),
                        _ = (0, n.useState)(0 !== c.current.length),
                        d = _[0],
                        E = _[1],
                        A = (0, n.useCallback)(
                            (e = 'default') => {
                                t({ reason: e });
                            },
                            [t],
                        ),
                        F = (0, n.useCallback)(() => {
                            A('escape');
                        }, [A]);
                    var p;
                    ((p = F), J(Y.n.ESCAPE, p));
                    const h = (0, n.useCallback)((e) => {
                            const u = c.current,
                                t = u.indexOf(e);
                            t > -1 && (u.splice(t, 1), 0 === u.length && E(!1));
                        }, []),
                        b = (0, n.useMemo)(() => {
                            const e = { backgroundColor: `rgba(19, 18, 16, ${s})` };
                            return (o && (e.backgroundImage = `url(${o})`), e);
                        }, [o, s]),
                        D = (0, n.useMemo)(
                            () =>
                                r.reduce(
                                    (e, { value: u }) => (
                                        (e[u.placeHolder] = a().createElement(ce, {
                                            key: u.placeHolder,
                                            id: u.resourceID,
                                            mixClass: Ue,
                                            onLoadCallback: h,
                                        })),
                                        e
                                    ),
                                    {},
                                ),
                            [h, r],
                        ),
                        C = g()($e, d && Ve);
                    return a().createElement(
                        m,
                        null,
                        a().createElement(
                            'div',
                            { className: C, style: b },
                            a().createElement(
                                e,
                                Ge(
                                    { onClose: A, buttons: a().createElement(je, null), displayFlags: l, isShown: !d },
                                    D,
                                ),
                            ),
                        ),
                    );
                });
                var qe = t(3403);
                const Ke = {
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
                    Ze = [
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
                function Ye() {
                    return (
                        (Ye =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ye.apply(this, arguments)
                    );
                }
                const Xe = (e) => {
                    let u = e.caption,
                        t = e.onClick,
                        r = e.goto,
                        s = e.classNames,
                        i = e.onMouseEnter,
                        l = e.onMouseLeave,
                        c = e.onMouseDown,
                        _ = e.onMouseUp,
                        d = e.side,
                        m = void 0 === d ? 'left' : d,
                        E = e.type,
                        A = void 0 === E ? 'back' : E,
                        F = e.soundHover,
                        p = void 0 === F ? 'highlight' : F,
                        h = e.soundClick,
                        b = void 0 === h ? 'play' : h,
                        D = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, Ze);
                    const C = (0, n.useCallback)(
                            (e) => {
                                (null == i || i(e), o.O.sound.play.sound(p));
                            },
                            [i, p],
                        ),
                        f = (0, n.useCallback)(
                            (e) => {
                                null == l || l(e);
                            },
                            [l],
                        ),
                        B = (0, n.useCallback)(
                            (e) => {
                                (null == c || c(e), o.O.sound.play.sound(b));
                            },
                            [c, b],
                        ),
                        w = (0, n.useCallback)(
                            (e) => {
                                null == _ || _(e);
                            },
                            [_],
                        );
                    return a().createElement(
                        'div',
                        Ye(
                            {
                                className: g()(
                                    Ke.base,
                                    Ke[`base__${A}`],
                                    Ke[`base__${m}`],
                                    null == s ? void 0 : s.base,
                                ),
                                onMouseEnter: C,
                                onMouseLeave: f,
                                onMouseDown: B,
                                onMouseUp: w,
                                onClick: t,
                            },
                            D,
                        ),
                        'info' !== A && a().createElement('div', { className: Ke.shine }),
                        a().createElement(
                            'div',
                            {
                                className: g()(
                                    Ke.icon,
                                    Ke[`icon__${A}`],
                                    Ke[`icon__${m}`],
                                    null == s ? void 0 : s.icon,
                                ),
                            },
                            a().createElement('div', { className: g()(Ke.glow, null == s ? void 0 : s.glow) }),
                        ),
                        a().createElement(
                            'div',
                            { className: g()(Ke.caption, Ke[`caption__${A}`], null == s ? void 0 : s.caption) },
                            u,
                        ),
                        r && a().createElement('div', { className: g()(Ke.goto, null == s ? void 0 : s.goto) }, r),
                    );
                };
                let Je;
                !(function (e) {
                    ((e.responsiveHeader = 'responsiveHeader'),
                        (e.responsiveClosePosition = 'responsiveClosePosition'),
                        (e.disableResponsiveContentPosition = 'disableResponsiveContentPosition'));
                })(Je || (Je = {}));
                const Qe = {
                        base: 'DefaultDialogTemplate_base_d2',
                        topRight: 'DefaultDialogTemplate_topRight_eb',
                        center: 'DefaultDialogTemplate_center_b4',
                        center__shown: 'DefaultDialogTemplate_center__shown_e1',
                        windowIn: 'DefaultDialogTemplate_windowIn_3b',
                        center__withIcon: 'DefaultDialogTemplate_center__withIcon_f9',
                        base__extraSmallHeight: 'DefaultDialogTemplate_base__extraSmallHeight_f5',
                        center__responsive: 'DefaultDialogTemplate_center__responsive_21',
                        base__smallHeight: 'DefaultDialogTemplate_base__smallHeight_52',
                        icon: 'DefaultDialogTemplate_icon_36',
                        icon__responsive: 'DefaultDialogTemplate_icon__responsive_e0',
                        title: 'DefaultDialogTemplate_title_c6',
                        title__responsive: 'DefaultDialogTemplate_title__responsive_6e',
                        content: 'DefaultDialogTemplate_content_22',
                        footer: 'DefaultDialogTemplate_footer_4e',
                        buttons: 'DefaultDialogTemplate_buttons_f7',
                        divider: 'DefaultDialogTemplate_divider_d5',
                        divider__noContent: 'DefaultDialogTemplate_divider__noContent_3f',
                        divider__noFooter: 'DefaultDialogTemplate_divider__noFooter_10',
                        closeBtn: 'DefaultDialogTemplate_closeBtn_5e',
                        closeBtn__responsive: 'DefaultDialogTemplate_closeBtn__responsive_49',
                    },
                    eu = (0, n.memo)(
                        ({
                            isShown: e = !0,
                            classMix: u,
                            onClose: t,
                            icon: r,
                            topRight: o,
                            title: s,
                            content: l,
                            buttons: c,
                            footer: d,
                            displayFlags: m,
                            classNames: E,
                        }) => {
                            const A = ((e, u) => Object.keys(u).reduce((u, t) => ((u[t] = e.includes(t)), u), {}))(
                                    m,
                                    Je,
                                ),
                                F = A.responsiveHeader,
                                p = A.responsiveClosePosition,
                                h = A.disableResponsiveContentPosition,
                                b = (function (e, u, t) {
                                    const a = (0, n.useContext)(_);
                                    let r = Object.entries(a).filter(([e, u]) => !0 === u && e in i);
                                    return (
                                        t && (r = r.filter((e) => t.includes(e[0]))),
                                        e.reduce((e, t) => {
                                            const n = r.map((e) =>
                                                g()(
                                                    u[((e, u) => e + '__' + u)(t, e[0])],
                                                    u[
                                                        ((e, u) => {
                                                            return e + ((t = u)[0].toUpperCase() + t.slice(1));
                                                            var t;
                                                        })(t, e[0])
                                                    ],
                                                ),
                                            );
                                            return ((e[t] = g()(u[t], ...n)), e);
                                        }, {})
                                    );
                                })(['base'], Qe),
                                D = (0, n.useCallback)(() => {
                                    t && t();
                                }, [t]),
                                C = g()(b.base, u),
                                f = g()(
                                    Qe.center,
                                    r && Qe.center__withIcon,
                                    e && Qe.center__shown,
                                    !h && Qe.center__responsive,
                                    null == E ? void 0 : E.center,
                                ),
                                B = g()(Qe.icon, F && Qe.icon__responsive, null == E ? void 0 : E.icon),
                                w = g()(Qe.title, F && Qe.title__responsive, null == E ? void 0 : E.title),
                                v = g()(Qe.closeBtn, p && Qe.closeBtn__responsive),
                                x = g()(
                                    Qe.divider,
                                    !l && Qe.divider__noContent,
                                    !d && Qe.divider__noFooter,
                                    null == E ? void 0 : E.divider,
                                );
                            return a().createElement(
                                'div',
                                { className: C },
                                a().createElement(
                                    'div',
                                    { className: Qe.topRight },
                                    o,
                                    a().createElement(
                                        'div',
                                        { className: v },
                                        a().createElement(Xe, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: D,
                                        }),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: f },
                                    r && a().createElement('div', { className: B }, r),
                                    s && a().createElement('div', { className: w }, s),
                                    l && a().createElement('div', { className: Qe.content }, l),
                                    a().createElement('div', { className: x }),
                                    d && a().createElement('div', { className: Qe.footer }, d),
                                    c && a().createElement('div', { className: Qe.buttons }, c),
                                ),
                            );
                        },
                    ),
                    uu = {
                        base: 'FlagIcon_base_25',
                        base__c_1080x454: 'FlagIcon_base__c_1080x454_6c',
                        base__c_240x118: 'FlagIcon_base__c_240x118_92',
                        base__c_155x31: 'FlagIcon_base__c_155x31_41',
                    };
                let tu;
                !(function (e) {
                    ((e.c1080x454 = 'c_1080x454'), (e.c240x118 = 'c_240x118'), (e.c155x31 = 'c_155x31'));
                })(tu || (tu = {}));
                const nu = {
                        [tu.c1080x454]: R.images.gui.maps.icons.crew.flags,
                        [tu.c240x118]: R.images.gui.maps.icons.tankmen.card.nations,
                        [tu.c155x31]: R.images.gui.maps.icons.nations.c_155x31,
                    },
                    au = a().memo(({ nation: e, size: u = tu.c1080x454, className: t }) =>
                        a().createElement('div', {
                            className: g()(uu.base, uu[`base__${u}`], t),
                            style: { backgroundImage: `url('${nu[u].$dyn(e)}')` },
                        }),
                    );
                function ru() {
                    return !1;
                }
                console.log;
                var ou = t(9174);
                function su(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return iu(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return iu(e, u);
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
                function iu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const lu = (e) => (0 === e ? window : window.subViews.get(e));
                var cu = t(3946);
                const _u = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: s, children: i, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    _ = (t, n, a) => {
                                        var r;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = lu,
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
                                                const s = (e) => {
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
                                                        const i = 'string' == typeof r ? `${n}.${r}` : n,
                                                            l = o.O.view.addModelObserver(i, u, !0);
                                                        return (a.set(l, t), e && t(s(r)), l);
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
                                                        for (var e, t = su(a.keys()); !(e = t()).done; ) r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            i =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(e)) : i.readByPath(e),
                                            _ = (e) => c.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const u = l(e),
                                                            n = ou.LO.box(u, { equals: ru });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, ou.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = ou.LO.box(n, { equals: ru });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, ou.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = ou.LO.box(n, { equals: ru });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, ou.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, u) => ((e[u] = ou.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, ou.aD)((u) => {
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
                                                                    (e, [u, t]) => ((e[t] = ou.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, ou.aD)((e) => {
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
                                                cleanup: _,
                                            }),
                                            m = { mode: t, model: d, externalModel: i, cleanup: _ };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && a ? a.controls(m) : u(m),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    d = (0, n.useRef)(!1),
                                    m = (0, n.useState)(r),
                                    E = m[0],
                                    g = m[1],
                                    A = (0, n.useState)(() => _(r, s, l)),
                                    F = A[0],
                                    p = A[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        d.current ? p(_(E, s, l)) : (d.current = !0);
                                    }, [l, E, s]),
                                    (0, n.useEffect)(() => {
                                        g(r);
                                    }, [r]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    a().createElement(t.Provider, { value: F }, i)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = Object.assign(
                                    {},
                                    e.primitives([
                                        'xpTransfer',
                                        'xpLose',
                                        'nation',
                                        'isConfirmRequire',
                                        'isSourceMaxXp',
                                        'isTargetMaxXp',
                                    ]),
                                    {
                                        sourceTankman: e.object('sourceTankman'),
                                        targetTankman: e.object('targetTankman'),
                                        sourceTankmanSkills: e.array('sourceTankman.majorSkills'),
                                        targetTankmanSkills: e.array('targetTankman.majorSkills'),
                                    },
                                ),
                                t = (0, cu.Om)(
                                    () => {
                                        const e = u.sourceTankmanSkills.get(),
                                            t = u.targetTankmanSkills.get();
                                        return e.length <= 3 && t.length <= 3;
                                    },
                                    { equals: ru },
                                );
                            return Object.assign({}, u, { computes: { isSingleRow: t } });
                        },
                        ({ externalModel: e }) => ({
                            changeInput: e.createCallback((e) => ({ input: e }), 'onInputChange'),
                        }),
                    ),
                    du = _u[0],
                    mu = _u[1],
                    Eu = 'Arrow_base_22',
                    gu = 'Arrow_icon_ae',
                    Au = 'Arrow_shineAnim_4e',
                    Fu = 'Arrow_shine_fc',
                    pu = 'Arrow_xpToTransfer_0c',
                    hu = 'Arrow_xpCount_58',
                    bu = 'Arrow_xpIcon_19',
                    Du = a().memo(({ xpTransfer: e, className: u }) =>
                        a().createElement(
                            'div',
                            { className: g()(Eu, u) },
                            a().createElement('div', { className: gu }),
                            a().createElement('div', { className: Au }, a().createElement('div', { className: Fu })),
                            a().createElement(
                                'div',
                                { className: pu },
                                a().createElement('div', { className: hu }, M.Z5.getNumberFormat(e, M.B3.INTEGRAL)),
                                a().createElement('div', { className: bu }),
                            ),
                        ),
                    );
                const Cu = 'new_skill';
                let fu;
                !(function (e) {
                    ((e.BlackReal = 'blackReal'),
                        (e.WhiteReal = 'whiteReal'),
                        (e.White = 'white'),
                        (e.WhiteOrange = 'whiteOrange'),
                        (e.WhiteSpanish = 'whiteSpanish'),
                        (e.Par = 'par'),
                        (e.ParSecondary = 'parSecondary'),
                        (e.ParTertiary = 'parTertiary'),
                        (e.Red = 'red'),
                        (e.RedDark = 'redDark'),
                        (e.Yellow = 'yellow'),
                        (e.Orange = 'orange'),
                        (e.Cream = 'cream'),
                        (e.Brown = 'brown'),
                        (e.GreenBright = 'greenBright'),
                        (e.Green = 'green'),
                        (e.GreenDark = 'greenDark'),
                        (e.BlueBooster = 'blueBooster'),
                        (e.BlueTeamkiller = 'blueTeamkiller'),
                        (e.Cred = 'cred'),
                        (e.Gold = 'gold'),
                        (e.Bond = 'bond'),
                        (e.Prom = 'prom'));
                })(fu || (fu = {}));
                const Bu = {
                    base: 'SkillIcon_base_43',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__c_80x80: 'SkillIcon_base__c_80x80_79',
                    base__c_120x90: 'SkillIcon_base__c_120x90_8c',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
                let wu;
                !(function (e) {
                    ((e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs'));
                })(wu || (wu = {}));
                const vu = a().memo(function ({ iconName: e, size: u = wu.c24x24, className: t }) {
                        var n;
                        const r = null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(u)) ? void 0 : n.$dyn(e);
                        return a().createElement('div', {
                            style: null !== r ? { backgroundImage: `url(${r})` } : void 0,
                            className: g()(Bu.base, Bu[`base__${u}`], t),
                        });
                    }),
                    xu = ['children'];
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                const yu = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, xu);
                    return a().createElement(
                        we,
                        ku(
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
                function Tu() {
                    return (
                        (Tu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Tu.apply(this, arguments)
                    );
                }
                const Su = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = a().createElement('div', { className: t }, e);
                        if (u.header || u.body) return a().createElement(ye, u, n);
                        const r = u.contentId;
                        return r ? a().createElement(we, Tu({}, u, { contentId: r }), n) : a().createElement(yu, u, n);
                    },
                    Lu = {
                        base: 'EfficiencyIndicator_base_34',
                        base__big: 'EfficiencyIndicator_base__big_a1',
                        base__large: 'EfficiencyIndicator_base__large_dc',
                        base__untrained: 'EfficiencyIndicator_base__untrained_cd',
                        percent: 'EfficiencyIndicator_percent_6b',
                        percent__full: 'EfficiencyIndicator_percent__full_30',
                        icon: 'EfficiencyIndicator_icon_da',
                    };
                let Ou;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Big = 'big'), (e.Large = 'large'));
                })(Ou || (Ou = {}));
                ((0, n.memo)(
                    ({
                        efficiencyValue: e,
                        tankmanID: u = -1,
                        className: t,
                        targetId: n = R.views.lobby.crew.widgets.CrewWidget('resId'),
                        size: r = Ou.Normal,
                    }) => {
                        const o = -1 === e,
                            s = o
                                ? { tooltipId: 'crewSkillUntrained' }
                                : { tooltipId: 'skillsEfficiency', skillEfficiency: e, tankmanID: u };
                        return a().createElement(
                            yu,
                            { targetId: n, args: s, isEnabled: -1 !== u },
                            a().createElement(
                                'div',
                                { className: g()(Lu.base, Lu[`base__${r}`], o && Lu.base__untrained, t) },
                                o
                                    ? a().createElement('div', { className: Lu.icon })
                                    : a().createElement(
                                          'div',
                                          { className: g()(Lu.percent, 1 === e && Lu.percent__full) },
                                          N(M.Z5.getNumberFormat(100 * e, M.B3.INTEGRAL)),
                                      ),
                            ),
                        );
                    },
                ),
                    R.strings.common.percentValue(),
                    R.strings.common.plusPercentValue());
                let Iu;
                !(function (e) {
                    ((e.Objective = 'objective'), (e.Possessive = 'possessive'));
                })(Iu || (Iu = {}));
                (R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body());
                let Nu;
                !(function (e) {
                    ((e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.CREW_POST_PROGRESSION_START = 'crew_pb_start'),
                        (e.CREW_POST_PROGRESSION_STOP = 'crew_pb_stop'),
                        (e.CREW_POST_PROGRESSION_REWARD = 'crew_postprog_reward'),
                        (e.CREW_RETRAIN_DOWN = 'crew_retrain_down'),
                        (e.CREW_RETRAIN_UP = 'crew_retrain_up'),
                        (e.CREW_PROFILE_UPGRADE = 'crew_profile_upgrade'),
                        (e.CREW_POSTPROG_WIDGET = 'crew_postprog_widget'),
                        (e.CREW_UNLOCK_MAJOR_PERK_START = 'crew_unlock_major_perk_start'),
                        (e.CREW_UNLOCK_MAJOR_PERK_STOP = 'crew_unlock_major_perk_stop'),
                        (e.CREW_SETTING_UP_MAJOR_PERK = 'crew_setting_up_major_perk'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy'));
                })(Nu || (Nu = {}));
                let Mu;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained'));
                })(Mu || (Mu = {}));
                let Ru, Pu, Hu, Wu, ju, $u, Vu;
                (!(function (e) {
                    ((e.None = 'none'),
                        (e.Default = 'default'),
                        (e.Overlap = 'overlap'),
                        (e.ExtraOverlap = 'extraOverlap'));
                })(Ru || (Ru = {})),
                    (function (e) {
                        ((e.None = 'none'),
                            (e.SlideOutAndBlink = 'slideOutAndBlink'),
                            (e.SlideOut = 'slideOut'),
                            (e.FadeIn = 'fadeIn'),
                            (e.Blink = 'blink'),
                            (e.ScaleUp = 'ScaleUp'));
                    })(Pu || (Pu = {})),
                    (function (e) {
                        ((e.None = 'none'),
                            (e.NoMargins = 'noMargins'),
                            (e.ReducedMargins = 'reducedMargins'),
                            (e.OnlyLearningOverlap = 'onlyLearningOverlap'),
                            (e.Overlap = 'overlap'),
                            (e.ExtraOverlap = 'extraOverlap'),
                            (e.ExtraOverlapWithLevel = 'extraOverlapWithLevel'),
                            (e.ExtraOverlapWithEfficiency = 'extraOverlapWithEfficiency'),
                            (e.ExtraOverlapWithLevelAndEfficiency = 'extraOverlapWithLevelAndEfficiency'));
                    })(Hu || (Hu = {})),
                    (function (e) {
                        ((e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red'));
                    })(Wu || (Wu = {})),
                    (function (e) {
                        ((e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44'));
                    })(ju || (ju = {})),
                    (function (e) {
                        ((e.Major = 'major'), (e.Bonus = 'bonus'));
                    })($u || ($u = {})),
                    (function (e) {
                        ((e.Learned = 'learned'), (e.Learning = 'learning'));
                    })(Vu || (Vu = {})));
                const Uu = ({
                        name: e,
                        roleName: u,
                        level: t,
                        customName: n,
                        skillType: a,
                        skillIndex: r,
                        tooltipData: o,
                    }) => {
                        const s = { targetId: o.targetId, isEnabled: o.isEnabled };
                        return e === Cu
                            ? a === $u.Major
                                ? Object.assign(
                                      {
                                          contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                          args: Object.assign({ tankmanID: o.tankmanID, skillIndex: r }, o.args),
                                      },
                                      s,
                                  )
                                : Object.assign(
                                      {
                                          header: R.strings.crew.matrix.skillTooltip.bonus.available.header(),
                                          body: R.strings.crew.matrix.skillTooltip.bonus.available.text(),
                                      },
                                      s,
                                  )
                            : Object.assign(
                                  {
                                      contentId:
                                          R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                              'resId',
                                          ),
                                      args: Object.assign(
                                          {
                                              tooltipId: 'crewPerkGf',
                                              tankmanID: o.tankmanID,
                                              skillName: e,
                                              roleName: u,
                                              isBonus: a === $u.Bonus,
                                              level: t,
                                              customName: n,
                                              skillIndex: r,
                                          },
                                          o.args,
                                      ),
                                  },
                                  s,
                              );
                    },
                    Gu = ['className', 'children'];
                const zu = (e) => {
                    let u = e.className,
                        t = e.children,
                        n = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, Gu);
                    return a().createElement(Su, { tooltipArgs: Uu(n), className: u }, t);
                };
                let qu;
                !(function (e) {
                    ((e.SelectedFull = 'selectedFull'),
                        (e.SelectedProgress = 'selectedProgress'),
                        (e.UnselectedFull = 'unselectedFull'),
                        (e.UnselectedProgress = 'unselectedProgress'));
                })(qu || (qu = {}));
                const Ku = (e, u, t) => (e < 100 ? t : u),
                    Zu = (e, u) =>
                        e === Cu
                            ? Ku(u, qu.UnselectedFull, qu.UnselectedProgress)
                            : Ku(u, qu.SelectedFull, qu.SelectedProgress),
                    Yu = {
                        base: 'Skill_base_1a',
                        bg: 'Skill_bg_54',
                        base__unselectedProgress: 'Skill_base__unselectedProgress_b5',
                        base__unselectedFull: 'Skill_base__unselectedFull_ef',
                        base__selectedProgress: 'Skill_base__selectedProgress_f0',
                        base__selectedFull: 'Skill_base__selectedFull_75',
                        progress: 'Skill_progress_8a',
                        plusIcon: 'Skill_plusIcon_6a',
                        topContent: 'Skill_topContent_65',
                        zeroIcon: 'Skill_zeroIcon_5a',
                        levelLabel: 'Skill_levelLabel_1f',
                    },
                    Xu = a().memo(function ({
                        name: e,
                        customName: u,
                        index: t,
                        isDonor: n = !1,
                        iconName: r,
                        isZero: o,
                        level: s,
                        roleName: i,
                        tankmanID: l,
                        className: c,
                    }) {
                        return a().createElement(
                            zu,
                            {
                                key: t,
                                skillIndex: t,
                                name: e,
                                roleName: i,
                                level: s,
                                tooltipData: { tankmanID: l, args: { isDonor: n } },
                                customName: u,
                                skillType: $u.Major,
                                className: c,
                            },
                            a().createElement(
                                'div',
                                { className: g()(Yu.base, Yu[`base__${Zu(r, s)}`]) },
                                a().createElement('div', { className: Yu.bg }),
                                a().createElement('div', { style: { width: `${s}%` }, className: Yu.progress }),
                                e === Cu
                                    ? a().createElement('div', { className: Yu.plusIcon })
                                    : a().createElement(vu, { size: wu.c52x52, iconName: r }),
                                a().createElement(
                                    'div',
                                    { className: Yu.topContent },
                                    o
                                        ? a().createElement('div', { className: Yu.zeroIcon })
                                        : a().createElement('div', { className: g()(Yu.levelLabel) }, N(s)),
                                ),
                            ),
                        );
                    }),
                    Ju = 'SkillList_base_88',
                    Qu = 'SkillList_skill_06';
                function et() {
                    return (
                        (et =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        et.apply(this, arguments)
                    );
                }
                const ut = ({ skills: e, tankmanID: u, isDonor: t, className: n }) => {
                        return a().createElement(
                            'div',
                            { className: g()(Ju, n) },
                            ((r = e),
                            (o = (e, n) =>
                                a().createElement(
                                    Xu,
                                    et({ key: `${n}_${e.iconName}_${e.level}` }, e, {
                                        tankmanID: u,
                                        index: n,
                                        isDonor: t,
                                        className: Qu,
                                    }),
                                )),
                            Array.isArray(r) ? r.map(o) : r.map((e, u, t) => o(null == e ? void 0 : e.value, u, t))),
                        );
                        var r, o;
                    },
                    tt = 'Divider_base_0a',
                    nt = 'Divider_line_c9',
                    at = a().memo(function ({ className: e }) {
                        return a().createElement(
                            'div',
                            { className: g()(tt, e) },
                            a().createElement('div', { className: nt }),
                        );
                    }),
                    rt = {
                        base: 'RoleIcon_base_51',
                        base__small: 'RoleIcon_base__small_68',
                        base__c_14x14: 'RoleIcon_base__c_14x14_8f',
                        base__c_18x18: 'RoleIcon_base__c_18x18_0b',
                        base__c_24x24_new: 'RoleIcon_base__c_24x24_new_fe',
                        base__c_24x24: 'RoleIcon_base__c_24x24_52',
                        base__c_30x30_red: 'RoleIcon_base__c_30x30_red_85',
                        base__c_30x30: 'RoleIcon_base__c_30x30_e9',
                        base__c_40x40: 'RoleIcon_base__c_40x40_99',
                        base__medium: 'RoleIcon_base__medium_5d',
                        base__white: 'RoleIcon_base__white_2a',
                        base__big: 'RoleIcon_base__big_b4',
                    };
                let ot;
                !(function (e) {
                    ((e.small = 'small'),
                        (e.c14x14 = 'c_14x14'),
                        (e.c18x18 = 'c_18x18'),
                        (e.c24x24 = 'c_24x24'),
                        (e.c24x24_new = 'c_24x24_new'),
                        (e.c30x30 = 'c_30x30'),
                        (e.c40x40 = 'c_40x40'),
                        (e.c30x30_red = 'c_30x30_red'),
                        (e.medium = 'medium'),
                        (e.white = 'white'),
                        (e.big = 'big'));
                })(ot || (ot = {}));
                const st = a().memo(function ({ role: e, size: u = ot.c30x30, className: t }) {
                        const r = (0, n.useMemo)(() => {
                            try {
                                var t;
                                const n =
                                    null == (t = R.images.gui.maps.icons.tankmen.roles.$dyn(u)) ? void 0 : t.$dyn(O(e));
                                if (!n) throw Error;
                                return { backgroundImage: `url(${n})` };
                            } catch (u) {
                                console.error('Cant find resource in RoleIcon: ', e);
                            }
                        }, [e, u]);
                        return a().createElement('div', { style: r, className: g()(rt.base, rt[`base__${u}`], t) });
                    }),
                    it = {
                        base: 'TankmanIcon_base_f9',
                        base__big: 'TankmanIcon_base__big_98',
                        base__small: 'TankmanIcon_base__small_b2',
                        base__barracks: 'TankmanIcon_base__barracks_62',
                        base__special: 'TankmanIcon_base__special_3f',
                        base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                    };
                let lt;
                !(function (e) {
                    ((e.c158x118 = 'big'),
                        (e.c100x60 = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256'));
                })(lt || (lt = {}));
                const ct = (0, n.memo)(function ({ name: e, size: u = lt.c100x60, classMix: t, isSkin: n = !1 }) {
                        let r = R.images.gui.maps.icons.tankmen.icons.$dyn(u);
                        n && (r = r.$dyn('crewSkins'));
                        const o = r.$dyn(O(e));
                        return (
                            o ||
                                console.error(
                                    `Can't find ${O(e)} in R.images.gui.maps.icons.tankmen.icons.${u}${n ? '.crewSkins' : ''}`,
                                ),
                            a().createElement('div', {
                                style: { backgroundImage: `url(${o})` },
                                className: g()(it.base, it[`base__${u}`], t),
                            })
                        );
                    }),
                    _t = 'Tankman_base_5d',
                    dt = 'Tankman_info_71',
                    mt = 'Tankman_tankman_27',
                    Et = 'Tankman_tankman__donor_21',
                    gt = 'Tankman_glow_a6',
                    At = 'Tankman_divider_ac',
                    Ft = 'Tankman_divider__acceptor_97',
                    pt = 'Tankman_roleWrapper_a9',
                    ht = 'Tankman_role_a9',
                    bt = 'Tankman_userName_da',
                    Dt = 'Tankman_userName__maxSkills_e5',
                    Ct = a().memo(
                        ({ iconName: e, userName: u, isInSkin: t, role: n, isDonor: r, maxSkills: o, className: s }) =>
                            a().createElement(
                                'div',
                                { className: g()(_t, s) },
                                a().createElement(
                                    'div',
                                    { className: dt },
                                    !r && a().createElement('div', { className: gt }),
                                    a().createElement(ct, {
                                        name: e,
                                        size: lt.c158x118,
                                        isSkin: t,
                                        classMix: g()(mt, r && Et),
                                    }),
                                    a().createElement(at, { className: g()(At, !r && Ft) }),
                                    a().createElement(
                                        'div',
                                        { className: pt },
                                        a().createElement(st, { role: n, className: ht }),
                                    ),
                                ),
                                a().createElement('div', { className: g()(bt, o && Dt) }, u),
                            ),
                    ),
                    ft = 'default',
                    Bt = 'search',
                    wt = 'email',
                    vt = 'password',
                    xt = 'normal',
                    kt = 'disabled',
                    yt = 'alert',
                    Tt = 'error',
                    St = 'medium',
                    Lt = 'large',
                    Ot = {
                        [ft]: '',
                        [wt]: R.strings.common.input.placeholder.email(),
                        [Bt]: R.strings.common.input.placeholder.search(),
                        [vt]: R.strings.common.input.placeholder.password(),
                    },
                    It = { [ft]: 'text', [wt]: 'text', [Bt]: 'text', [vt]: 'password' },
                    Nt = { [ft]: '', [wt]: 'Invalid email', [Bt]: '', [vt]: '' },
                    Mt = R.images.gui.maps.icons.components.input;
                function Rt(e, u) {
                    return (
                        u !== wt ||
                        (function (e) {
                            const u = e.match(
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            );
                            return Boolean(u);
                        })(e)
                    );
                }
                const Pt = {
                        base: 'InputControl_base_68',
                        base__focused: 'InputControl_base__focused_aa',
                        base__alert: 'InputControl_base__alert_22',
                        base__error: 'InputControl_base__error_ff',
                        base__done: 'InputControl_base__done_a7',
                        base__disabled: 'InputControl_base__disabled_f8',
                        input: 'InputControl_input_93',
                        base__small: 'InputControl_base__small_85',
                        base__medium: 'InputControl_base__medium_a2',
                        base__large: 'InputControl_base__large_32',
                        base__withIcon: 'InputControl_base__withIcon_9e',
                        input__search: 'InputControl_input__search_85',
                        disabled: 'InputControl_disabled_78',
                        placeholder: 'InputControl_placeholder_e3',
                        placeholder__search: 'InputControl_placeholder__search_d5',
                        icon: 'InputControl_icon_13',
                        icon__search: 'InputControl_icon__search_57',
                        clear: 'InputControl_clear_bb',
                    },
                    Ht = a().memo(
                        ({
                            componentId: e,
                            value: u = '',
                            type: t = ft,
                            size: r = St,
                            variant: o = xt,
                            placeholder: s = '',
                            highlighted: i,
                            withClear: l,
                            selectOnFocus: c = !0,
                            maxLength: _,
                            iconSource: d,
                            classMix: m,
                            onMouseEnter: E,
                            onMouseLeave: A,
                            onMouseDown: F,
                            onMouseUp: p,
                            onClick: h,
                            onChange: b,
                            onClear: D,
                            onFocus: C,
                            onBlur: f,
                        }) => {
                            const B = (0, n.useState)(!1),
                                w = B[0],
                                v = B[1],
                                x = (0, n.useRef)(null),
                                k = (0, n.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                y = o !== kt,
                                T = (0, n.useCallback)(
                                    (e) => {
                                        y && (v(!0), C && C(e));
                                    },
                                    [y, C],
                                ),
                                S = (0, n.useCallback)(
                                    (e) => {
                                        y && !k.current.mouseOver && (v(!1), f && f(e));
                                    },
                                    [y, f],
                                );
                            (0, n.useEffect)(() => {
                                y && w && c && x.current && x.current.select();
                            }, [c, w, y]);
                            const L = (0, n.useCallback)(
                                    (e) => {
                                        y && b && b(e.target.value);
                                    },
                                    [y, b],
                                ),
                                O = (0, n.useCallback)(
                                    (e) => {
                                        y && ((k.current.mouseOver = !0), E && E(e));
                                    },
                                    [y, E],
                                ),
                                I = (0, n.useCallback)(
                                    (e) => {
                                        y &&
                                            x.current &&
                                            (k.current.mouseDown && x.current.focus(),
                                            (k.current.mouseOver = !1),
                                            A && A(e));
                                    },
                                    [y, A],
                                ),
                                N = (0, n.useCallback)(
                                    (e) => {
                                        y && ((k.current.mouseDown = !0), F && F(e));
                                    },
                                    [y, F],
                                ),
                                M = (0, n.useCallback)(
                                    (e) => {
                                        y && ((k.current.mouseDown = !1), p && p(e));
                                    },
                                    [y, p],
                                ),
                                R = (0, n.useCallback)(
                                    (e) => {
                                        if (y && x.current) {
                                            ((!w || (w && e.target !== x.current)) && x.current.focus(), h && h(e));
                                        }
                                    },
                                    [w, y, h],
                                ),
                                P = s || Ot[t],
                                H = Boolean(d),
                                W = g()(
                                    Pt.base,
                                    Pt[`base__${r}`],
                                    i && Pt[`base__${o}`],
                                    w && Pt.base__focused,
                                    H && Pt.base__withIcon,
                                    m,
                                ),
                                j = (0, n.useMemo)(() => (d ? { backgroundImage: `url(${d})` } : null), [d]),
                                $ = g()(Pt.input, Pt[`input__${t}`]),
                                V = g()(Pt.icon, Pt[`icon__${t}`]),
                                U = g()(Pt.placeholder, Pt[`placeholder__${t}`]);
                            return a().createElement(
                                'div',
                                {
                                    id: e,
                                    className: W,
                                    onMouseEnter: O,
                                    onMouseDown: N,
                                    onMouseUp: M,
                                    onMouseLeave: I,
                                    onClick: R,
                                },
                                !y && a().createElement('div', { className: Pt.disabled }),
                                j && a().createElement('div', { style: j, className: V }),
                                a().createElement('input', {
                                    ref: x,
                                    className: $,
                                    type: It[t],
                                    value: u,
                                    onChange: L,
                                    disabled: !y,
                                    onFocus: T,
                                    onBlur: S,
                                    maxLength: _,
                                }),
                                P && !u && !w && a().createElement('div', { className: U }, P),
                                l &&
                                    a().createElement('div', {
                                        className: Pt.clear,
                                        onClick: (e) => {
                                            (Fe.playClick(), D && D(e));
                                        },
                                        onMouseEnter: Fe.playHighlight,
                                    }),
                            );
                        },
                    ),
                    Wt = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    jt = ({ variant: e, show: u = !0, helperText: t, helperIcon: r, classMix: o }) => {
                        const s = (0, n.useMemo)(() => {
                                const u =
                                    r ||
                                    (function (e) {
                                        return e === yt ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return u && { backgroundImage: `url(${u})` };
                            }, [r, e]),
                            i = g()(Wt.base, u && Wt.base__shown),
                            l = g()(Wt.message, Wt[`message__${e}`], o);
                        return a().createElement(
                            'div',
                            { className: i },
                            s && a().createElement('div', { className: Wt.icon, style: s }),
                            a().createElement('div', { className: l }, t),
                        );
                    },
                    $t = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    Vt = [
                        'componentId',
                        'type',
                        'variant',
                        'size',
                        'value',
                        'tooltipArgs',
                        'helperText',
                        'isValidated',
                        'showHelper',
                        'error',
                        'options',
                        'onFocus',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onChange',
                        'classMix',
                        'controlClassMix',
                        'helperClassMix',
                    ];
                function Ut() {
                    return (
                        (Ut =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ut.apply(this, arguments)
                    );
                }
                const Gt = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    zt = (e) => {
                        let u = e.componentId,
                            t = e.type,
                            r = void 0 === t ? ft : t,
                            o = e.variant,
                            s = void 0 === o ? xt : o,
                            i = e.size,
                            l = void 0 === i ? St : i,
                            c = e.value,
                            _ = e.tooltipArgs,
                            d = e.helperText,
                            m = void 0 === d ? '' : d,
                            E = e.isValidated,
                            A = void 0 === E || E,
                            F = e.showHelper,
                            p = void 0 === F || F,
                            h = e.error,
                            b = e.options,
                            D = e.onFocus,
                            C = e.onMouseEnter,
                            f = e.onMouseLeave,
                            B = e.onMouseUp,
                            w = e.onMouseDown,
                            v = e.onChange,
                            x = e.classMix,
                            k = e.controlClassMix,
                            y = e.helperClassMix,
                            T = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, Vt);
                        const S = (0, n.useState)(c),
                            L = S[0],
                            O = S[1],
                            I = (0, n.useState)(A),
                            N = I[0],
                            M = I[1],
                            R = (0, n.useMemo)(() => Object.assign({}, Gt, b), [b]),
                            P = (0, n.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: c, type: r }),
                            H = (0, n.useCallback)((e) => {
                                e !== P.current.value &&
                                    ((P.current.value = e), (P.current.isChangeHandled = !1), O(e));
                            }, []),
                            W = (0, n.useCallback)(
                                (e) => {
                                    let u = !0;
                                    (R.performChangeValidation &&
                                        (u = R.changesValidator ? R.changesValidator(e) : Rt(e, P.current.type)),
                                        v && v(e, u));
                                },
                                [v, R],
                            ),
                            j = (0, n.useCallback)(() => {
                                P.current.debounceTimeout &&
                                    (window.clearTimeout(P.current.debounceTimeout), (P.current.debounceTimeout = 0));
                            }, []),
                            $ = (0, n.useCallback)(() => H(''), [H]);
                        (0, n.useEffect)(() => () => j(), [j]);
                        const V = (0, n.useCallback)(
                            (e) => {
                                (j(),
                                    R.debounceTime
                                        ? (P.current.debounceTimeout = window.setTimeout(() => {
                                              W(e);
                                          }, R.debounceTime))
                                        : W(e));
                            },
                            [W, j, R.debounceTime],
                        );
                        ((0, n.useEffect)(() => {
                            P.current.isChangeHandled ||
                                P.current.value !== L ||
                                (V(P.current.value), (P.current.isChangeHandled = !0));
                        }, [L, V]),
                            (0, n.useEffect)(() => {
                                (P.current.isChangeHandled && c !== P.current.value && ((P.current.value = c), O(c)),
                                    (P.current.type = r));
                            }, [c, r]),
                            (0, n.useEffect)(() => {
                                M(A);
                            }, [A, s]));
                        const U = (0, n.useCallback)((e) => C && C(e), [C]),
                            G = (0, n.useCallback)(
                                (e) => {
                                    (R.disableHighlightOnFocus && N && M(!1), D && D(e));
                                },
                                [N, D, R.disableHighlightOnFocus],
                            ),
                            z = (0, n.useCallback)((e) => B && B(e), [B]),
                            q = (0, n.useCallback)((e) => w && w(e), [w]),
                            K = (0, n.useCallback)((e) => f && f(e), [f]),
                            Z = (0, n.useMemo)(
                                () =>
                                    R.withTypeIcon
                                        ? (function (e, u) {
                                              return e === Bt ? Mt.$dyn(`search_${u}`) : '';
                                          })(r, l)
                                        : '',
                                [r, l, R.withTypeIcon],
                            ),
                            Y = m || Nt[r],
                            X = Boolean(L),
                            J = h ? Tt : s,
                            Q = Boolean(h) || N,
                            ee = (0, n.useMemo)(
                                () => ('boolean' == typeof R.withClear ? X && R.withClear : X && r === Bt),
                                [r, X, R],
                            ),
                            ue = g()($t.base, $t[`base__${l}`], $t[`base__${s}`], x);
                        return a().createElement(
                            'div',
                            { id: u, className: ue, onMouseEnter: U, onMouseDown: q, onMouseUp: z, onMouseLeave: K },
                            a().createElement(
                                Su,
                                { tooltipArgs: _ },
                                a().createElement(
                                    Ht,
                                    Ut(
                                        {
                                            componentId: u ? `${u}-inputControl` : void 0,
                                            iconSource: Z,
                                            size: l,
                                            type: r,
                                            variant: J,
                                            value: L,
                                            withClear: ee,
                                            highlighted: Q,
                                            selectOnFocus: R.selectOnFocus,
                                            maxLength: R.maxLength,
                                            classMix: k,
                                            onFocus: G,
                                            onChange: H,
                                            onClear: $,
                                        },
                                        T,
                                    ),
                                ),
                            ),
                            Y &&
                                a().createElement(
                                    'div',
                                    { className: $t.helper },
                                    a().createElement(jt, {
                                        variant: J,
                                        show: p && (R.isPermanentHelper || Q),
                                        helperText: h || Y,
                                        helperIcon: R.helperIconSource,
                                        classMix: y,
                                    }),
                                ),
                        );
                    },
                    qt = 'ValidateInput_base_9e',
                    Kt = 'ValidateInput_confirm_dc',
                    Zt = 'ValidateInput_input_2c',
                    Yt = a().memo(({ onChange: e, className: u }) =>
                        a().createElement(
                            'div',
                            { className: g()(qt, u) },
                            a().createElement(
                                'div',
                                { className: Kt },
                                R.strings.mentoring_license.assignmentDialog.confirm(),
                            ),
                            a().createElement(zt, {
                                onChange: e,
                                classMix: Zt,
                                options: { debounceTime: 0 },
                                size: Lt,
                            }),
                        ),
                    );
                var Xt = t(8045);
                const Jt = {
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
                let Qt, en, un;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(Qt || (Qt = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(en || (en = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(un || (un = {})));
                const tn = { [un.NBSP]: Qt.NoBreakSymbol, [un.ZWNBSP]: Qt.NoBreakSymbol, [un.NEW_LINE]: Qt.LineBreak },
                    nn = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    an = {
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
                    rn = 'renderers_noBreakWrapper_10',
                    on = 'renderers_lineBreak_b5',
                    sn = 'renderers_newLine_bd',
                    ln = 'renderers_word_f3',
                    cn = (e) => ({ color: `#${e}` }),
                    _n = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? an[n]
                                ? a().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: g()(ln, an[n]) },
                                      e,
                                  )
                                : a().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: ln, style: cn(n) },
                                      e,
                                  )
                            : a().createElement('span', { key: t, 'data-block-type': u.blockType, className: ln }, e);
                    },
                    dn = {
                        [Qt.Word]: _n,
                        [Qt.NoBreakSymbol]: _n,
                        [Qt.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            a().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => a().createElement(a().Fragment, { key: t }, e)),
                            ),
                        [Qt.LineBreak]: ({ key: e }) =>
                            a().createElement('span', { key: e, 'data-block-type': Qt.LineBreak, className: on }),
                        [Qt.NewLine]: ({ elementList: e, key: u }) =>
                            a().createElement('span', { key: u, 'data-block-type': Qt.NewLine, className: sn }, e),
                        [Qt.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            a().createElement(
                                'span',
                                { key: u, 'data-block-type': Qt.NoBreakWrapper, className: rn },
                                e,
                            ),
                    },
                    mn = (e, u, t) => {
                        const n = [];
                        return (
                            e.childList.forEach((a, r) => {
                                const o = `${t}_${r}`;
                                if (((e) => void 0 !== e.childList)(a)) {
                                    const e = a,
                                        u = e.blockType,
                                        t = mn(e, dn[u], o);
                                    n.push(...t);
                                } else n.push(u({ elementList: [a], textBlock: e, key: o }));
                            }),
                            n
                        );
                    },
                    En = (e) => {
                        const u = [];
                        return (
                            e.forEach((e, t) => {
                                u.push(
                                    ...((e, u) => {
                                        const t = [],
                                            n = e.blockType,
                                            a = dn[n],
                                            r = mn(e, a, u);
                                        return (
                                            n === Qt.NoBreakWrapper
                                                ? t.push(a({ elementList: r, textBlock: e, key: `${u}` }))
                                                : t.push(...r),
                                            t
                                        );
                                    })(e, t),
                                );
                            }),
                            u
                        );
                    },
                    gn = (e, u, t, n) => {
                        let a = u.exec(e),
                            r = 0;
                        for (; a; ) (r !== a.index && t(e.slice(r, a.index)), n(a), (r = u.lastIndex), (a = u.exec(e)));
                        r !== e.length && t(e.slice(r));
                    },
                    An = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    Fn = (e) => {
                        const u = [];
                        return (
                            gn(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var t;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? u.push(...((t = e), t.match(An) || []))
                                        : u.push(...e.split(''));
                                },
                                (e) => {
                                    u.push(e[0]);
                                },
                            ),
                            u
                        );
                    },
                    pn = nn
                        ? (e) => {
                              const u = [];
                              return (
                                  gn(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          u.push(e);
                                      },
                                      (e) => {
                                          u.push(...Fn(e[0]));
                                      },
                                  ),
                                  u
                              );
                          }
                        : (e, u) => {
                              const t = /[\s\u002d]/g;
                              let n = t.exec(e);
                              if (!n) return [e];
                              const a = [];
                              let r = 0;
                              for (; n; ) {
                                  const o = u.justifyContent === en.FlexEnd ? n.index : t.lastIndex;
                                  (a.push(e.slice(r, o)), (r = o), (n = t.exec(e)));
                              }
                              return (r !== e.length && a.push(e.slice(r)), a);
                          },
                    hn = (e, u = '', t) => {
                        const n = [];
                        return (
                            gn(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: Qt.Word, colorTag: u, childList: pn(e, t) });
                                },
                                (e) => {
                                    const t = e[0],
                                        a = tn[t.charAt(0)];
                                    a === Qt.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: Qt.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: Qt.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(t),
                                          )
                                        : n.push({ blockType: a, colorTag: u, childList: [t.replace(/\ufeff+/g, '')] });
                                },
                            ),
                            n
                        );
                    },
                    bn = (e, u, t = '', n) => {
                        const a = [],
                            r = e.replace(/(.)(、|。|ー)/g, '$1\ufeff$2');
                        return (
                            gn(
                                r,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...hn(e, t, n));
                                },
                                (e) => {
                                    const r = e[1],
                                        o = void 0 === u[r] ? e[0] : u[r];
                                    'string' == typeof o || 'number' == typeof o
                                        ? a.push(...hn(String(o), t, n))
                                        : a.push({ blockType: Qt.Binding, colorTag: t, childList: [o] });
                                },
                            ),
                            a
                        );
                    },
                    Dn = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === Qt.NoBreakWrapper) (e.childList.push(n), t.push(e));
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && t.push(e),
                                t.push({ blockType: Qt.NoBreakWrapper, colorTag: '', childList: [u, n] }));
                        }
                        return (u.childList.length > 0 && t.push(u), t);
                    },
                    Cn = (e, u = {}, t) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Qt.NoBreakSymbol
                                        ? ((t = !0), u.push(...Dn(u.pop(), e)))
                                        : (t ? u.push(...Dn(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u, t) => {
                                const n = [];
                                return (
                                    gn(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...bn(e, u, '', t));
                                        },
                                        (e) => {
                                            n.push(...bn(e[2] + e[3], u, e[1], t));
                                        },
                                    ),
                                    n
                                );
                            })(I(e).replace(/&zwnbsp;/g, '\ufeff'), u, t),
                        );
                        return En(n);
                    },
                    fn = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    Bn = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    wn = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = Bn(e, u),
                            a = e.textContent.length,
                            r = e.offsetWidth / a,
                            o = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / r);
                            return n >= t ? [!0, t + o] : [!1, n];
                        }
                        const s = Math.max(t + o, 0);
                        return a < s ? [!1, 0] : [!0, s];
                    },
                    vn = (e, u, t, n, r, o) => {
                        let s = -1,
                            i = null;
                        for (let l = t; l >= 0; l--) {
                            const t = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === Qt.LineBreak || c === Qt.NewLine || c === Qt.Binding) continue;
                            const _ = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = wn(t, n, r),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (r -= d);
                                    continue;
                                }
                                const m = _.slice(0, _.length - d) + o,
                                    E = u[l];
                                ((i = a().cloneElement(E, E.props, m)), (s = l));
                                break;
                            }
                            {
                                const e = t.children,
                                    c = u[l],
                                    d = c.props.children,
                                    m = vn(e, d, e.length - 1, n, r, o),
                                    E = m[0],
                                    g = m[1];
                                if (!(E < 0)) {
                                    const e = d.slice(0, E);
                                    ((i = a().cloneElement(c, c.props, e, g)), (s = l));
                                    break;
                                }
                                r -= _.length;
                            }
                        }
                        return [s, i];
                    },
                    xn = (e, u, t, n = '...') => {
                        const a = [...u],
                            r = e.current;
                        if (!r) return [a, !1];
                        const o = t.height,
                            s = t.width,
                            i = r.lastElementChild;
                        if (!fn(i, o) && Bn(i, s) <= 0) return [a, !1];
                        const l = r.children,
                            c = ((e, u) => {
                                let t = 0,
                                    n = e.length - 1;
                                for (; n - t >= 0; ) {
                                    const a = t + Math.ceil(0.5 * (n - t));
                                    fn(e[a], u) ? (n = a - 1) : (t = a + 1);
                                }
                                return t - 1;
                            })(l, o);
                        if (c < 0) return [a, !1];
                        const _ = vn(l, a, c, s, n.length, n),
                            d = _[0],
                            m = _[1];
                        return (m && (a.splice(d, 1, m), a.splice(d + 1)), [a, !0]);
                    },
                    kn = a().memo(
                        ({
                            text: e,
                            classMix: u,
                            onSizeChanged: t,
                            binding: r,
                            isTooltipEnable: o = !1,
                            isTruncationAvailable: s = !1,
                            customTooltipArgs: i,
                            targetId: l,
                            justifyContent: c = en.FlexStart,
                            alignContent: _ = en.FlexStart,
                            truncateIdentify: d = '...',
                        }) => {
                            const m = (0, n.useRef)(null),
                                E = (0, n.useRef)({ height: 0, width: 0 }),
                                A = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                F = A[0],
                                p = A[1],
                                h = (0, n.useMemo)(() => Cn(e, r, { justifyContent: c }), [r, c, e]),
                                b = (0, n.useMemo)(() => {
                                    if (
                                        o &&
                                        F.isTruncated &&
                                        (!r || !Object.values(r).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, i, {
                                                stringifyKwargs: r ? JSON.stringify(r) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [r, o, l, e, i, F.isTruncated]),
                                D = (0, n.useCallback)(
                                    (e) => {
                                        ((E.current.width = e.contentRect.width),
                                            (E.current.height = e.contentRect.height));
                                        const u = xn(m, h, E.current, d),
                                            n = u[0],
                                            a = u[1];
                                        (p({ elementList: n, isTruncated: a, isTruncateFinished: !0 }), t && t(a));
                                    },
                                    [t, d, h],
                                ),
                                C = (0, n.useMemo)(() => ({ justifyContent: c, alignContent: _ }), [_, c]);
                            return (
                                ((e, u, t = !0) => {
                                    const a = (0, n.useCallback)(
                                        (e) => {
                                            const t = e[0];
                                            u && u(t);
                                        },
                                        [u],
                                    );
                                    (0, n.useEffect)(() => {
                                        if (!e.current || !t) return;
                                        const u = new Xt.Z((e) => a(e));
                                        return (
                                            u.observe(e.current),
                                            () => {
                                                u.disconnect();
                                            }
                                        );
                                    }, [a, t, e]);
                                })(m, D, s),
                                a().createElement(
                                    'div',
                                    {
                                        className: g()(
                                            Jt.base,
                                            u,
                                            Jt.base__zeroPadding,
                                            s && Jt.base__isTruncationAvailable,
                                        ),
                                        style: C,
                                    },
                                    a().createElement('div', { className: Jt.unTruncated, ref: m }, h),
                                    a().createElement(
                                        Su,
                                        {
                                            tooltipArgs: b,
                                            className: g()(
                                                Jt.tooltip,
                                                Jt[`tooltip__justify-${c}`],
                                                Jt[`tooltip__align-${_}`],
                                            ),
                                        },
                                        a().createElement(
                                            'div',
                                            {
                                                className: g()(
                                                    Jt.truncated,
                                                    !F.isTruncateFinished && s && Jt.truncated__hide,
                                                ),
                                                style: C,
                                            },
                                            F.isTruncateFinished && s ? F.elementList : h,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    yn = 'WarningText_base_10',
                    Tn = 'WarningText_alertIcon_8f',
                    Sn = (0, n.memo)(({ showIcon: e = !0, className: u, children: t }) =>
                        a().createElement(
                            'div',
                            { className: g()(yn, u) },
                            e && a().createElement('div', { className: Tn }),
                            t,
                        ),
                    ),
                    Ln = 'Warning_base_68',
                    On = 'Warning_xpLoseBind_81',
                    In = 'Warning_xpLoseIcon_75',
                    Nn = 'Warning_oneWay_88',
                    Mn = a().memo(({ isDonor: e, xpLose: u, className: t }) =>
                        e
                            ? a().createElement(
                                  Sn,
                                  { className: g()(Ln, t) },
                                  a().createElement(
                                      'div',
                                      { className: Nn },
                                      R.strings.mentoring_license.assignmentDialog.warning.oneWay(),
                                  ),
                              )
                            : a().createElement(
                                  Sn,
                                  { className: g()(Ln, t) },
                                  a().createElement(kn, {
                                      text: R.strings.mentoring_license.assignmentDialog.warning.xpLose(),
                                      binding: {
                                          xpLose: a().createElement(
                                              'div',
                                              { className: On },
                                              M.Z5.getNumberFormat(u, M.B3.INTEGRAL),
                                              a().createElement('div', { className: In }),
                                          ),
                                      },
                                  }),
                              ),
                    ),
                    Rn = {
                        base: 'Content_base_2d',
                        base__withConfirm: 'Content_base__withConfirm_f9',
                        base__singleRow: 'Content_base__singleRow_b0',
                        row: 'Content_row_07',
                        row__skills: 'Content_row__skills_68',
                        column: 'Content_column_8d',
                        arrow: 'Content_arrow_b7',
                        slideIn: 'Content_slideIn_7b',
                        warningWrapper: 'Content_warningWrapper_be',
                        warning: 'Content_warning_d3',
                        xpLoseBind: 'Content_xpLoseBind_86',
                        xpLoseIcon: 'Content_xpLoseIcon_0a',
                        input: 'Content_input_51',
                    };
                function Pn() {
                    return (
                        (Pn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Pn.apply(this, arguments)
                    );
                }
                const Hn = (0, qe.Pi)(() => {
                        const e = mu(),
                            u = e.model,
                            t = e.controls,
                            r = u.xpTransfer,
                            o = u.isSourceMaxXp,
                            s = u.isTargetMaxXp,
                            i = u.xpLose.get(),
                            l = u.isConfirmRequire.get(),
                            c = u.sourceTankman.get(),
                            _ = u.targetTankman.get(),
                            d = (0, n.useCallback)((e) => t.changeInput(e), [t]),
                            m = u.sourceTankmanSkills.get(),
                            E = u.targetTankmanSkills.get();
                        return a().createElement(
                            'div',
                            {
                                className: g()(
                                    Rn.base,
                                    u.computes.isSingleRow() && Rn.base__singleRow,
                                    l && Rn.base__withConfirm,
                                ),
                            },
                            a().createElement(
                                'div',
                                { className: g()(Rn.row, Rn.row__tankmen) },
                                a().createElement(
                                    Ct,
                                    Pn({ isDonor: !0, maxSkills: o.get() }, c, { className: Rn.column }),
                                ),
                                a().createElement(Ct, Pn({ maxSkills: s.get() }, _, { className: Rn.column })),
                            ),
                            a().createElement(
                                'div',
                                { className: g()(Rn.row, Rn.row__skills) },
                                a().createElement(
                                    'div',
                                    { className: Rn.column },
                                    a().createElement(ut, { skills: m, tankmanID: c.invId, isDonor: !0 }),
                                    a().createElement(
                                        'div',
                                        { className: Rn.warningWrapper },
                                        a().createElement(Mn, { isDonor: !0, className: Rn.warning }),
                                    ),
                                ),
                                a().createElement(Du, { xpTransfer: r.get(), className: Rn.arrow }),
                                a().createElement(
                                    'div',
                                    { className: Rn.column },
                                    a().createElement(ut, { skills: E, tankmanID: _.invId }),
                                    i > 0 &&
                                        a().createElement(
                                            'div',
                                            { className: Rn.warningWrapper },
                                            a().createElement(Mn, { xpLose: i, className: Rn.warning }),
                                        ),
                                ),
                            ),
                            l && a().createElement(Yt, { onChange: d, className: Rn.input }),
                        );
                    }),
                    Wn = 'Footer_base_8a',
                    jn = 'Footer_label_36',
                    $n = 'Footer_price_fc',
                    Vn = 'Footer_priceIcon_cb',
                    Un = a().memo(() =>
                        a().createElement(
                            'div',
                            { className: Wn },
                            a().createElement(
                                'div',
                                { className: jn },
                                R.strings.mentoring_license.assignmentDialog.price(),
                            ),
                            a().createElement('div', { className: $n }, 1),
                            a().createElement('div', { className: Vn }),
                        ),
                    ),
                    Gn = 'Title_base_47',
                    zn = 'Title_title_bf',
                    qn = 'Title_subtitle_2b',
                    Kn = a().memo(() =>
                        a().createElement(
                            'div',
                            { className: Gn },
                            a().createElement(
                                'div',
                                { className: zn },
                                R.strings.mentoring_license.assignmentDialog.title(),
                            ),
                            a().createElement(
                                'div',
                                { className: qn },
                                R.strings.mentoring_license.assignmentDialog.subtitle(),
                            ),
                        ),
                    ),
                    Zn = 'MentorAssignmentDialogApp_flag_a6',
                    Yn = 'MentorAssignmentDialogApp_center_5d',
                    Xn = 'MentorAssignmentDialogApp_center__singleRow_50',
                    Jn = 'MentorAssignmentDialogApp_center__withConfirm_d4',
                    Qn = 'MentorAssignmentDialogApp_icon_e9',
                    ea = 'MentorAssignmentDialogApp_divider_03',
                    ua = ['onClose', 'buttons', 'isShown', 'displayFlags'];
                function ta() {
                    return (
                        (ta =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ta.apply(this, arguments)
                    );
                }
                const na = (0, qe.Pi)((e) => {
                    let u = e.onClose,
                        t = e.buttons,
                        n = e.isShown,
                        r = e.displayFlags,
                        o = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, ua);
                    const s = mu().model,
                        i = s.isConfirmRequire.get();
                    return a().createElement(
                        eu,
                        ta({ onClose: u, buttons: t, displayFlags: r, isShown: n }, o, {
                            icon: a().createElement(au, { nation: s.nation.get(), className: Zn }),
                            title: a().createElement(Kn, null),
                            content: a().createElement(Hn, null),
                            footer: a().createElement(Un, null),
                            classNames: {
                                center: g()(Yn, i && Jn, s.computes.isSingleRow() && Xn),
                                icon: Qn,
                                divider: ea,
                            },
                        }),
                    );
                });
                engine.whenReady.then(() => {
                    S().render(
                        a().createElement(
                            du,
                            null,
                            a().createElement(y, null, a().createElement(ze, { Template: na })),
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
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], r = !0, o = 0; o < u.length; o++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, n];
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
        (__webpack_require__.j = 2773),
        (() => {
            var e = { 2773: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, o, s] = t,
                        i = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); i < r.length; i++)
                        ((a = r[i]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(8159));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
