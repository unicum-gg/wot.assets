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
            527: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, { mouse: () => c, off: () => o, on: () => i, onResize: () => r, onScaleUpdated: () => s }));
                var a = u(2472),
                    n = u(1176);
                const r = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    i = (e, t) => engine.on(e, t),
                    o = (e, t) => engine.off(e, t),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, n.R)(!1);
                        }
                        function u() {
                            e.enabled && (0, n.R)(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', u))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', u))
                                : (0, n.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (t, u) => (
                                (t[u] = (function (t) {
                                    return (u) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const r = `mouse${t}`,
                                            s = l[t]((e) => u([e, 'outside']));
                                        function i(e) {
                                            u([e, 'inside']);
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
                                })(u)),
                                t
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
            5959: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => s,
                        getSize: () => r,
                        graphicsQuality: () => i,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    }));
                var a = u(527),
                    n = u(2493);
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
            1176: (e, t, u) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => a });
            },
            2493: (e, t, u) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function n(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                u.d(t, { E: () => n, G: () => a });
            },
            2472: (e, t, u) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => a });
            },
            3138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => s });
                var a = u(5959),
                    n = u(7698),
                    r = u(514);
                const s = { view: u(7641), client: a, sound: r.ZP, intl: n.N };
            },
            7698: (e, t, u) => {
                'use strict';
                u.d(t, { N: () => a });
                const a = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => s });
                var a = u(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(n).reduce((e, t) => ((e[t] = () => (0, a.playSound)(n[t])), e), {}),
                    s = { play: Object.assign({}, r, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, t, u) => {
                'use strict';
                function a(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function n(e, t, u) {
                    return `url(${a(e, t, u)})`;
                }
                (u.r(t), u.d(t, { getBgUrl: () => n, getTextureUrl: () => a }));
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => n });
                var a = u(2472);
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
            7641: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        addModelObserver: () => m,
                        addPreloadTexture: () => o,
                        arabic2roman: () => y,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => T,
                        enableFullScreenModeSupported: () => R,
                        events: () => s.U,
                        extraSize: () => P,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => f,
                        getExternalPaddingsRem: () => S,
                        getFontNames: () => w,
                        getScale: () => g,
                        getSize: () => d,
                        getViewGlobalPosition: () => A,
                        initExternalPaddings: () => x,
                        isEventHandled: () => C,
                        isFocused: () => B,
                        pxToRem: () => p,
                        remToPx: () => b,
                        resize: () => E,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => L,
                    }));
                var a = u(9690),
                    n = u(3722),
                    r = u(6112),
                    s = u(6538),
                    i = u(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, u, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, a);
                }
                function m(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function A(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    y = a.cg;
                function S() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const T = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    P = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    L = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function R() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function x(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            u = t.top,
                            a = t.right,
                            n = t.bottom,
                            r = t.left;
                        (e.style.setProperty('--external-padding-top', `${u}rem`),
                            e.style.setProperty('--external-padding-right', `${a}rem`),
                            e.style.setProperty('--external-padding-bottom', `${n}rem`),
                            e.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => r });
                const a = ['args'],
                    n = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                    return n;
                                })(t, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, s, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
                                                  const u = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: u, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: u, name: e, bool: t };
                                                      default:
                                                          return { __Type: u, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
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
            5521: (e, t, u) => {
                'use strict';
                let a, n;
                (u.d(t, { n: () => a }),
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
            9690: (e, t, u) => {
                'use strict';
                u.d(t, { cg: () => r });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let t = '';
                    for (let u = n.length - 1; u >= 0; u--) for (; e >= n[u]; ) ((t += a[u]), (e -= n[u]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var a = u(3138);
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
                    addCallback(e, t, u = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, u, n);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(r) : (this._views[u] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
                        );
                    }
                    removeCallback(e, t = 0) {
                        let u = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((u = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            u || console.error("Can't remove callback by id:", e),
                            u
                        );
                    }
                    _emmitDataChanged(e, t, u) {
                        u.forEach((u) => {
                            const a = this._callbacks[u];
                            void 0 !== a && a(e, t);
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
            9916: (e, t, u) => {
                'use strict';
                u.d(t, {
                    Sw: () => r.Z,
                    B3: () => l,
                    Z5: () => s.Z5,
                    B0: () => i,
                    c9: () => b,
                    ry: () => p,
                    Sy: () => D,
                });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    u();
                                });
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const u = e,
                            a = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== a)),
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
                var r = u(1358),
                    s = u(8613);
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
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = u(5521),
                    E = u(3138);
                const A = ['args'];
                function F(e, t, u, a, n, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(o) : Promise.resolve(o).then(a, n);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
                        var e,
                            t =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var t = this,
                                        u = arguments;
                                    return new Promise(function (a, n) {
                                        var r = e.apply(t, u);
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
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                    return n;
                                })(t, A);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, t]) => {
                                                  const u = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          u.number = t;
                                                          break;
                                                      case 'boolean':
                                                          u.bool = t;
                                                          break;
                                                      default:
                                                          u.string = t.toString();
                                                  }
                                                  return u;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    D = () => b(i.CLOSE),
                    B = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var h = u(7572);
                const C = n.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: m,
                        DateFormatType: _,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => b(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => b(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            b(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, a, n = R.invalid('resId'), r) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                o = u.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                m = o.width,
                                _ = o.height,
                                d = {
                                    x: E.O.view.pxToRem(l) + s.x,
                                    y: E.O.view.pxToRem(c) + s.y,
                                    width: E.O.view.pxToRem(m),
                                    height: E.O.view.pxToRem(_),
                                };
                            b(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: g(d),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => B(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, D);
                        },
                        handleViewEvent: b,
                        onBindingsReady: p,
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
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const n = Object.prototype.toString.call(t[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[a];
                                        u[a] = [];
                                        for (let t = 0; t < n.length; t++) u[a].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[a] = e(t[a]))
                                            : (u[a] = t[a]);
                                }
                            return u;
                        },
                        ClickOutsideManager: C,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => r, Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    },
                    r = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            392: (e, t, u) => {
                'use strict';
                var a = {};
                (u.r(a),
                    u.d(a, {
                        Area: () => $e,
                        Bar: () => Ie,
                        DefaultScroll: () => He,
                        Direction: () => Se,
                        defaultSettings: () => Te,
                        useHorizontalScrollApi: () => Le,
                    }));
                var n = {};
                (u.r(n), u.d(n, { Area: () => Je, Bar: () => Ye, Default: () => Qe, useVerticalScrollApi: () => ze }));
                var r = u(7363),
                    s = u.n(r);
                const i = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var o = u(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function m(e = o.O.client.getSize('rem')) {
                    const t = e.width,
                        u = e.height;
                    return Object.assign(
                        { width: t, height: u },
                        (function (e, t, u) {
                            const a = (function (e, t) {
                                    switch (!0) {
                                        case e >= t.extraLarge.width:
                                            return t.extraLarge.weight;
                                        case e >= t.large.width && e < t.extraLarge.width:
                                            return t.large.weight;
                                        case e >= t.medium.width && e < t.large.width:
                                            return t.medium.weight;
                                        case e >= t.small.width && e < t.medium.width:
                                            return t.small.weight;
                                        default:
                                            return t.extraSmall.weight;
                                    }
                                })(e, u),
                                n = (function (e, t) {
                                    switch (!0) {
                                        case e >= t.extraLarge.height:
                                            return t.extraLarge.weight;
                                        case e >= t.large.height && e < t.extraLarge.height:
                                            return t.large.weight;
                                        case e >= t.medium.height && e < t.large.height:
                                            return t.medium.weight;
                                        case e >= t.small.height && e < t.medium.height:
                                            return t.small.weight;
                                        default:
                                            return t.extraSmall.weight;
                                    }
                                })(t, u),
                                r = Math.min(a, n);
                            return {
                                extraLarge: r === u.extraLarge.weight,
                                large: r === u.large.weight,
                                medium: r === u.medium.weight,
                                small: r === u.small.weight,
                                extraSmall: r === u.extraSmall.weight,
                                extraLargeWidth: a === u.extraLarge.weight,
                                largeWidth: a === u.large.weight,
                                mediumWidth: a === u.medium.weight,
                                smallWidth: a === u.small.weight,
                                extraSmallWidth: a === u.extraSmall.weight,
                                extraLargeHeight: n === u.extraLarge.weight,
                                largeHeight: n === u.large.weight,
                                mediumHeight: n === u.medium.weight,
                                smallHeight: n === u.small.weight,
                                extraSmallHeight: n === u.extraSmall.weight,
                            };
                        })(t, u, l),
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
                })(c || (c = {}));
                const _ = m(),
                    d = (0, r.createContext)(_),
                    E = ['children'];
                (0, r.memo)((e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                            return n;
                        })(e, E);
                    const a = (0, r.useContext)(d),
                        n = a.extraLarge,
                        s = a.large,
                        o = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        m = a.extraLargeWidth,
                        _ = a.largeWidth,
                        A = a.mediumWidth,
                        F = a.smallWidth,
                        g = a.extraSmallWidth,
                        p = a.extraLargeHeight,
                        b = a.largeHeight,
                        D = a.mediumHeight,
                        B = a.smallHeight,
                        h = a.extraSmallHeight,
                        C = { extraLarge: p, large: b, medium: D, small: B, extraSmall: h };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && n) return t;
                        if (u.large && s) return t;
                        if (u.medium && o) return t;
                        if (u.small && l) return t;
                        if (u.extraSmall && c) return t;
                    } else {
                        if (u.extraLargeWidth && m) return i(t, u, C);
                        if (u.largeWidth && _) return i(t, u, C);
                        if (u.mediumWidth && A) return i(t, u, C);
                        if (u.smallWidth && F) return i(t, u, C);
                        if (u.extraSmallWidth && g) return i(t, u, C);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && p) return t;
                            if (u.largeHeight && b) return t;
                            if (u.mediumHeight && D) return t;
                            if (u.smallHeight && B) return t;
                            if (u.extraSmallHeight && h) return t;
                        }
                    }
                    return null;
                });
                const A = ({ children: e }) => {
                    const t = (0, r.useState)(m),
                        u = t[0],
                        a = t[1],
                        n = (0, r.useState)(!1),
                        i = n[0],
                        l = n[1];
                    return (
                        (0, r.useLayoutEffect)(() => {
                            function e() {
                                a((e) => {
                                    const t = o.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : m(t);
                                });
                            }
                            return (
                                e(),
                                l(!0),
                                o.O.client.events.on('clientResized', e),
                                o.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (o.O.client.events.off('clientResized', e),
                                        o.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        s().createElement(d.Provider, { value: u }, i && e)
                    );
                };
                var F = u(6483),
                    g = u.n(F),
                    p = u(926),
                    b = u.n(p);
                let D, B, h;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(D || (D = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(B || (B = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(h || (h = {})));
                const C = () => {
                        const e = (0, r.useContext)(d),
                            t = e.width,
                            u = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return D.ExtraLarge;
                                    case e.large:
                                        return D.Large;
                                    case e.medium:
                                        return D.Medium;
                                    case e.small:
                                        return D.Small;
                                    case e.extraSmall:
                                        return D.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), D.ExtraSmall);
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return B.ExtraLarge;
                                    case e.largeWidth:
                                        return B.Large;
                                    case e.mediumWidth:
                                        return B.Medium;
                                    case e.smallWidth:
                                        return B.Small;
                                    case e.extraSmallWidth:
                                        return B.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), B.ExtraSmall);
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return h.ExtraLarge;
                                    case e.largeHeight:
                                        return h.Large;
                                    case e.mediumHeight:
                                        return h.Medium;
                                    case e.smallHeight:
                                        return h.Small;
                                    case e.extraSmallHeight:
                                        return h.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), h.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: n, mediaHeight: s, remScreenWidth: t, remScreenHeight: u };
                    },
                    v = ['children', 'className'];
                function f() {
                    return (
                        (f =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        f.apply(this, arguments)
                    );
                }
                const w = {
                        [B.ExtraSmall]: '',
                        [B.Small]: b().SMALL_WIDTH,
                        [B.Medium]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH}`,
                        [B.Large]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH}`,
                        [B.ExtraLarge]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH} ${b().EXTRA_LARGE_WIDTH}`,
                    },
                    y = {
                        [h.ExtraSmall]: '',
                        [h.Small]: b().SMALL_HEIGHT,
                        [h.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [h.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [h.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    S = {
                        [D.ExtraSmall]: '',
                        [D.Small]: b().SMALL,
                        [D.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [D.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [D.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    T = (e) => {
                        let t = e.children,
                            u = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, v);
                        const n = C(),
                            r = n.mediaWidth,
                            i = n.mediaHeight,
                            o = n.mediaSize;
                        return s().createElement('div', f({ className: g()(u, w[r], y[i], S[o]) }, a), t);
                    },
                    P = ['children'],
                    L = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, P);
                        return s().createElement(A, null, s().createElement(T, u, t));
                    };
                var x = u(1533),
                    N = u.n(x);
                function k(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const M = {
                    playHighlight() {
                        k('highlight');
                    },
                    playClick() {
                        k('play');
                    },
                    playYes() {
                        k('yes1');
                    },
                };
                function O() {
                    return (
                        (O =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        O.apply(this, arguments)
                    );
                }
                const I = 'tabs-role';
                var W;
                !(function (e) {
                    ((e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key'));
                })(W || (W = {}));
                class H extends r.Component {
                    constructor(...e) {
                        (super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[W.TAB]);
                                return t && t.props[W.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                (this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e }));
                            }));
                    }
                    componentDidMount() {
                        const e = s().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[I] === W.LIST);
                        if (t < 0) return;
                        const u =
                            this.props.activeKey || this._getFirstTabKey(s().Children.toArray(e[t].props.children));
                        ((e[t] = s().cloneElement(e[t], {
                            children: s()
                                .Children.toArray(e[t].props.children)
                                .map((e) => s().cloneElement(e, { key: e.props[W.TAB] })),
                        })),
                            (this.elementsList = e),
                            (this.tabsListIndex = t),
                            this.handleSetActiveKey(u));
                    }
                    componentWillReceiveProps(e) {
                        void 0 !== e.activeKey &&
                            e.activeKey !== this.props.activeKey &&
                            this.handleSetActiveKey(e.activeKey);
                    }
                    componentDidUpdate(e, t) {
                        if (null === this.tabsListIndex) return;
                        const u = s().Children.toArray(this.props.children)[this.tabsListIndex],
                            a = u.props.children.reduce(
                                (e, t, u) => ((e[u] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            n =
                                ((r = this.tabsProps),
                                (i = a),
                                !(
                                    Object.keys(r).length === Object.keys(i).length &&
                                    Object.keys(r).every(
                                        (e) => Object.prototype.hasOwnProperty.call(i, e) && r[e] === i[e],
                                    )
                                ));
                        var r, i;
                        const o = g()(
                                'Tabs_wrapper_2d',
                                u.props.className,
                                this.props.isTabsCentered && 'Tabs_wrapper__centered_d8',
                                this.props.isVerticalTabs && 'Tabs_wrapper__vertical_a5',
                            ),
                            l = g()('Tabs_list_0a', this.props.isTabsCentered && 'Tabs_list__centered_dc');
                        if (t.activeKey !== this.state.activeKey || n) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[I] === W.CONTENT) return e.props[W.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, u) => [this.tabsListIndex, e].includes(u)),
                                n = t[0].props.children,
                                r = n.map((e, t) =>
                                    s().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            a[t],
                                            { key: t, isActive: this.state.activeKey === e.props[W.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === n.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const u = a[t][W.TAB];
                                                    this.state.activeKey === u ||
                                                        (a[t].onClick && a[t].onClick(e),
                                                        this.handleSetActiveKey(u),
                                                        this.props.onClickSound && k(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    (a[t].onMouseEnter && a[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound &&
                                                            k(this.props.onMouseEnterSound));
                                                },
                                            },
                                        ),
                                    ),
                                );
                            ((this.tabsProps = a),
                                this.setState({
                                    activeElements: [
                                        s().createElement(
                                            'div',
                                            { className: l, key: W.LIST },
                                            s().createElement('div', O({}, u.props, { className: o }), r),
                                        ),
                                        t[1],
                                    ],
                                }));
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = g()('Tabs_base_d9', this.props.isVerticalTabs && 'Tabs_base__vertical_c0');
                        return s().createElement('div', { className: t }, e);
                    }
                }
                H.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const $ = ['children', 'className', 'activeKey', 'onClickSound', 'onMouseEnterSound', 'isTabsCentered'];
                function z() {
                    return (
                        (z =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        z.apply(this, arguments)
                    );
                }
                const G = (e) => {
                        let t = e.children,
                            u = e.className,
                            a = e.activeKey,
                            n = e.onClickSound,
                            r = e.onMouseEnterSound,
                            i = e.isTabsCentered,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, $);
                        return s().createElement(
                            'div',
                            z({ className: u }, o),
                            s().createElement(
                                H,
                                { activeKey: a, onClickSound: n, onMouseEnterSound: r, isTabsCentered: i },
                                t,
                            ),
                        );
                    },
                    U = {
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
                    j = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function V() {
                    return (
                        (V =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        V.apply(this, arguments)
                    );
                }
                const q = (e) => {
                        let t = e.value,
                            u = e.isEmpty,
                            a = e.className,
                            n = e.size,
                            r = void 0 === n ? 'normal' : n,
                            i = e.fadeInAnimation,
                            o = void 0 !== i && i,
                            l = e.hide,
                            c = void 0 !== l && l,
                            m = e.maximumNumber,
                            _ = void 0 === m ? 99 : m,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, j);
                        const E = u ? null : t,
                            A = 'string' == typeof E;
                        if ((E && !A && E < 0) || 0 === E) return null;
                        const F = E && !A && E > _,
                            p = g()(
                                U.base,
                                U[`base__${r}`],
                                o && U.base__animated,
                                c && U.base__hidden,
                                !E && U.base__pattern,
                                u && U.base__empty,
                                a,
                            );
                        return s().createElement(
                            'div',
                            V({ className: p }, d),
                            s().createElement('div', { className: U.bg }),
                            s().createElement('div', { className: U.pattern }),
                            s().createElement(
                                'div',
                                { className: g()(U.value, A && U.value__text) },
                                F ? _ : E,
                                F && s().createElement('span', { className: U.plus }, '+'),
                            ),
                        );
                    },
                    K = ({ children: e, component: t, props: u = {} }) => (t ? s().createElement(t, u, e) : e || null),
                    X = 'Tab_stateBorder_64',
                    Y = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function Z() {
                    return (
                        (Z =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Z.apply(this, arguments)
                    );
                }
                const Q = (0, r.memo)((e) => {
                        let t = e.isActive,
                            u = void 0 !== t && t,
                            a = e.isFirst,
                            n = void 0 !== a && a,
                            r = e.isLast,
                            i = void 0 !== r && r,
                            o = e.isMedium,
                            l = void 0 !== o && o,
                            c = e.isNotified,
                            m = void 0 !== c && c,
                            _ = e.children,
                            d = void 0 === _ ? 'Tab' : _,
                            E = e.wrapper,
                            A = void 0 === E ? {} : E,
                            F = e.counter,
                            p = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, Y);
                        return s().createElement(
                            K,
                            A,
                            s().createElement(
                                'div',
                                Z(
                                    {
                                        className: g()(
                                            'Tab_base_dd',
                                            { Tab_base__active_5d: u },
                                            { Tab_base__first_4a: n },
                                            { Tab_base__last_96: i },
                                            { Tab_base__medium_ec: l },
                                        ),
                                    },
                                    p,
                                ),
                                s().createElement(
                                    'span',
                                    { className: 'Tab_state_6c' },
                                    s().createElement('span', { className: 'Tab_stateHighlight_1e' }),
                                    s().createElement('span', {
                                        className: g()(X, 'Tab_stateBorder__positionLeft_e7'),
                                    }),
                                    s().createElement('span', {
                                        className: g()(X, 'Tab_stateBorder__positionRight_db'),
                                    }),
                                ),
                                d,
                                !i &&
                                    !u &&
                                    s().createElement('span', {
                                        className: g()('Tab_divider_ca', 'Tab_divider__show_62'),
                                    }),
                                (Boolean(F) || m) &&
                                    s().createElement(
                                        'div',
                                        { className: 'Tab_counter_e1' },
                                        s().createElement(q, { value: F, isEmpty: m }),
                                    ),
                            ),
                        );
                    }),
                    J = {
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
                    ee = [
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
                function te() {
                    return (
                        (te =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        te.apply(this, arguments)
                    );
                }
                const ue = (e) => {
                        let t = e.caption,
                            u = e.onClick,
                            a = e.goto,
                            n = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            m = e.onMouseUp,
                            _ = e.side,
                            d = void 0 === _ ? 'left' : _,
                            E = e.type,
                            A = void 0 === E ? 'back' : E,
                            F = e.soundHover,
                            p = void 0 === F ? 'highlight' : F,
                            b = e.soundClick,
                            D = void 0 === b ? 'play' : b,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, ee);
                        const h = (0, r.useCallback)(
                                (e) => {
                                    (null == i || i(e), o.O.sound.play.sound(p));
                                },
                                [i, p],
                            ),
                            C = (0, r.useCallback)(
                                (e) => {
                                    null == l || l(e);
                                },
                                [l],
                            ),
                            v = (0, r.useCallback)(
                                (e) => {
                                    (null == c || c(e), o.O.sound.play.sound(D));
                                },
                                [c, D],
                            ),
                            f = (0, r.useCallback)(
                                (e) => {
                                    null == m || m(e);
                                },
                                [m],
                            );
                        return s().createElement(
                            'div',
                            te(
                                {
                                    className: g()(
                                        J.base,
                                        J[`base__${A}`],
                                        J[`base__${d}`],
                                        null == n ? void 0 : n.base,
                                    ),
                                    onMouseEnter: h,
                                    onMouseLeave: C,
                                    onMouseDown: v,
                                    onMouseUp: f,
                                    onClick: u,
                                },
                                B,
                            ),
                            'info' !== A && s().createElement('div', { className: J.shine }),
                            s().createElement(
                                'div',
                                {
                                    className: g()(
                                        J.icon,
                                        J[`icon__${A}`],
                                        J[`icon__${d}`],
                                        null == n ? void 0 : n.icon,
                                    ),
                                },
                                s().createElement('div', { className: g()(J.glow, null == n ? void 0 : n.glow) }),
                            ),
                            s().createElement(
                                'div',
                                { className: g()(J.caption, J[`caption__${A}`], null == n ? void 0 : n.caption) },
                                t,
                            ),
                            a && s().createElement('div', { className: g()(J.goto, null == n ? void 0 : n.goto) }, a),
                        );
                    },
                    ae = (e) => {
                        let t,
                            u = null;
                        return (
                            (u = requestAnimationFrame(() => {
                                u = requestAnimationFrame(() => {
                                    ((u = null), (t = e()));
                                });
                            })),
                            () => {
                                ('function' == typeof t && t(), null !== u && cancelAnimationFrame(u));
                            }
                        );
                    };
                var ne = u(5521),
                    re = u(9916);
                const se = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ie(e = ne.n.NONE, t = se, u = !1, a = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== ne.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && o.O.view.isEventHandled()) return;
                                (o.O.view.setEventHandled(), t(n), u && n.stopPropagation());
                            }
                        }
                    }, [t, e, u, a]);
                }
                const oe = (e = 1) => {
                        const t = new Error().stack;
                        let u,
                            a = R.invalid('resId'),
                            n = '';
                        var r;
                        return (
                            t &&
                                ((n = (null == (r = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                                (u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== u &&
                                    window.subViews[u] &&
                                    (a = window.subViews[u].id)),
                            { callerUrl: n, caller: u, stack: t, resId: a }
                        );
                    },
                    le = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    ce = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    me = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    _e = re.Sw.instance;
                let de;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(de || (de = {}));
                const Ee = (e = 'model', t = de.Deep) => {
                    const u = (0, r.useState)(0),
                        a = (u[0], u[1]),
                        n = (0, r.useMemo)(() => oe(), []),
                        s = n.callerUrl,
                        i = n.caller,
                        o = n.resId,
                        l = (0, r.useMemo)(() => {
                            const t = (function (e) {
                                return (window.injected || (window.injected = new Map()), window.injected).has(e);
                            })(s.replace('.js', '.html'));
                            return window.__feature && window.__feature !== i && !t ? `subViews.${i}.${e}` : e;
                        }, [s, i, e]),
                        c = (0, r.useState)(() =>
                            ((e) => {
                                const t = le(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return ce(t) ? t.value : t;
                            })(
                                ((e) =>
                                    ((e, t) =>
                                        e.split('.').reduce((e, t) => {
                                            const u = le(`${e}.${t}`, window);
                                            return ce(u) ? ((e, t) => `${e}.${t}.value`)(e, t) : `${e}.${t}`;
                                        }))(e))(l),
                            ),
                        ),
                        m = c[0],
                        _ = c[1],
                        d = (0, r.useRef)(-1);
                    return (
                        ((e) => {
                            const t = (0, r.useRef)(!1);
                            t.current || (e(), (t.current = !0));
                        })(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? de.Deep : de.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== de.None)
                            ) {
                                const u = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === de.Deep
                                            ? (e === m && a((e) => e + 1), _(e))
                                            : _(Object.assign([], e));
                                    },
                                    n = ((e) => {
                                        const t = ((e) => {
                                                const t = oe(),
                                                    u = t.caller,
                                                    a = t.resId,
                                                    n =
                                                        window.__feature && window.__feature !== u && u
                                                            ? `subViews.${u}`
                                                            : '';
                                                return { modelPrefix: n, modelPath: me(n, ''), resId: a };
                                            })(),
                                            u = t.modelPrefix,
                                            a = e.split('.');
                                        if (a.length > 0) {
                                            const e = [a[0]];
                                            return (
                                                a.reduce((t, a) => {
                                                    const n = le(me(u, `${t}.${a}`), window);
                                                    return ce(n)
                                                        ? (e.push(n.id), `${t}.${a}.value`)
                                                        : (e.push(a), `${t}.${a}`);
                                                }),
                                                e.reduce((e, t) => e + '.' + t)
                                            );
                                        }
                                        return '';
                                    })(e);
                                d.current = _e.addCallback(n, u, o, t === de.Deep);
                            }
                        }),
                        (0, r.useEffect)(() => {
                            if (t !== de.None)
                                return () => {
                                    _e.removeCallback(d.current, o);
                                };
                        }, [o, t]),
                        m
                    );
                };
                var Ae = u(8664);
                const Fe = 'App_tabContent_cd',
                    ge = 'App_tabContent__visible_99',
                    pe = 'AppAnimations_baseEnterDone_dd',
                    be = { enterActive: 'AppAnimations_baseEnterActive_54', enterDone: pe },
                    De = { enterActive: 'AppAnimations_background_b7', enterDone: pe },
                    Be = { enterActive: 'AppAnimations_horizontalTabs_1a', enterDone: pe },
                    he = (e, t, u) => (u < e ? e : u > t ? t : u),
                    Ce = [];
                function ve(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), Ce)
                    );
                }
                function fe(e, t, u = []) {
                    const a = (0, r.useRef)(0),
                        n = (0, r.useCallback)(() => window.clearInterval(a.current), u || []);
                    (0, r.useEffect)(() => n, [n]);
                    const s = (null != u ? u : []).concat([t]);
                    return [
                        (0, r.useCallback)((u) => {
                            ((a.current = window.setInterval(() => e(u, !0), t)), e(u, !1));
                        }, s),
                        n,
                    ];
                }
                function we(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                var ye = u(7030);
                let Se;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Se || (Se = {}));
                const Te = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Pe = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: a,
                        getWrapperSize: n,
                        forceTriggerMouseMove: s,
                    }) => {
                        const i = (e, u) => {
                            const a = t(e),
                                n = a[0],
                                r = a[1];
                            return r <= n ? 0 : he(n, r, u);
                        };
                        return (o = {}) => {
                            const l = o.settings,
                                c = void 0 === l ? Te : l,
                                m = (0, r.useRef)(null),
                                _ = (0, r.useRef)(null),
                                d = (0, r.useRef)(!1),
                                E = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        a = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        n = (e, ...u) => {
                                            for (
                                                var a,
                                                    n = (function (e, t) {
                                                        var u =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (u) return (u = u.call(e)).next.bind(u);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (u = (function (e, t) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return we(e, t);
                                                                    var u = Object.prototype.toString
                                                                        .call(e)
                                                                        .slice(8, -1);
                                                                    return (
                                                                        'Object' === u &&
                                                                            e.constructor &&
                                                                            (u = e.constructor.name),
                                                                        'Map' === u || 'Set' === u
                                                                            ? Array.from(e)
                                                                            : 'Arguments' === u ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    u,
                                                                                )
                                                                              ? we(e, t)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (t && e && 'number' == typeof e.length)
                                                        ) {
                                                            u && (e = u);
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
                                                    })(t(e).values());
                                                !(a = n()).done;

                                            )
                                                (0, a.value)(...u);
                                        };
                                    return (0, r.useMemo)(() => ({ on: u, off: a, trigger: n }), []);
                                })(),
                                A = (function (e, t, u) {
                                    const a = (0, r.useMemo)(
                                        () =>
                                            (function (e, t, u, a) {
                                                let n,
                                                    r = !1,
                                                    s = 0;
                                                function i() {
                                                    n && clearTimeout(n);
                                                }
                                                function o(...o) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function m() {
                                                        ((s = Date.now()), u.apply(l, o));
                                                    }
                                                    r ||
                                                        (a && !n && m(),
                                                        i(),
                                                        void 0 === a && c > e
                                                            ? m()
                                                            : !0 !== t &&
                                                              (n = setTimeout(
                                                                  a
                                                                      ? function () {
                                                                            n = void 0;
                                                                        }
                                                                      : m,
                                                                  void 0 === a ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof t && ((a = u), (u = t), (t = void 0)),
                                                    (o.cancel = function () {
                                                        (i(), (r = !0));
                                                    }),
                                                    o
                                                );
                                            })(u, e),
                                        t,
                                    );
                                    return ((0, r.useEffect)(() => a.cancel, [a]), a);
                                })(
                                    () => {
                                        s && s();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, ye.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (u(t, e), E.trigger('change', e), s && d.current && A());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                g = F[0],
                                p = F[1],
                                b = (0, r.useCallback)(
                                    (e, t, u) => {
                                        var a;
                                        const n = g.scrollPosition.get(),
                                            r = (null != (a = g.scrollPosition.goal) ? a : 0) - n;
                                        return i(e, t * u + r + n);
                                    },
                                    [g.scrollPosition],
                                ),
                                D = (0, r.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const a = m.current;
                                        a &&
                                            p.start({
                                                scrollPosition: i(a, e),
                                                immediate: t,
                                                reset: u,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(a, g.scrollPosition.get()) },
                                            });
                                    },
                                    [p, c.animationConfig, g.scrollPosition],
                                ),
                                B = (0, r.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            u = _.current;
                                        if (!t || !u) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return n(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, c.step),
                                            r = b(t, e, a);
                                        D(r);
                                    },
                                    [D, b, c.step],
                                ),
                                h = (0, r.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && B(a(e)),
                                            m.current && E.trigger('mouseWheel', e, g.scrollPosition, t(m.current)));
                                    },
                                    [g.scrollPosition, B, E],
                                ),
                                C = ((e, t = []) => {
                                    const u = (0, r.useRef)(),
                                        a = (0, r.useCallback)((...t) => {
                                            (u.current && u.current(), (u.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        ae(() => {
                                            const e = m.current;
                                            e &&
                                                (D(i(e, g.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [D, g.scrollPosition.goal],
                                ),
                                v = ve(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = i(e, g.scrollPosition.goal);
                                    (t !== g.scrollPosition.goal && D(t, { immediate: !0 }),
                                        E.trigger('recalculateContent'));
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
                                    const e = m.current;
                                    if (!e || !s) return;
                                    const t = () => {
                                            d.current = !0;
                                        },
                                        u = () => {
                                            d.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', t),
                                        e.addEventListener('mouseleave', u),
                                        () => {
                                            (e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', u));
                                        }
                                    );
                                }, [m]),
                                (0, r.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (_.current ? n(_.current) : void 0),
                                        getContainerSize: () => (m.current ? e(m.current) : void 0),
                                        getBounds: () =>
                                            m.current
                                                ? t(m.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: c.step.clampedArrowStepTimeout,
                                        clampPosition: i,
                                        handleMouseWheel: h,
                                        applyScroll: D,
                                        applyStepTo: B,
                                        contentRef: m,
                                        wrapperRef: _,
                                        scrollPosition: p,
                                        animationScroll: g,
                                        recalculateContent: v,
                                        events: { on: E.on, off: E.off },
                                    }),
                                    [g.scrollPosition, D, B, E.off, E.on, v, h, p, c.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    Le = Pe({
                        getBounds: (e) => {
                            var t, u;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (u = e.parentElement) ? void 0 : u.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Se.Next : Se.Prev),
                        forceTriggerMouseMove: o.O.view.forceTriggerMouseMove,
                    }),
                    Re = 'HorizontalBar_base__active_5e',
                    xe = 'disable',
                    Ne = { pending: !1, offset: 0 },
                    ke = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Me = () => {},
                    Oe = (e, t) => Math.max(20, e.offsetWidth * t),
                    Ie = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = ke, onDrag: a = Me }) => {
                        const n = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            m = (0, r.useRef)(null),
                            _ = e.stepTimeout || 100,
                            d = (0, r.useState)(Ne),
                            E = d[0],
                            A = d[1],
                            F = (0, r.useCallback)(
                                (e) => {
                                    (A(e),
                                        m.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current }));
                                },
                                [a],
                            ),
                            p = () => {
                                const t = c.current,
                                    u = m.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && t && u && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / n),
                                    o = he(0, 1, r / (n - a)),
                                    _ = (t.offsetWidth - Oe(t, s)) * o;
                                ((u.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && m.current) {
                                            if (0 === e)
                                                return (
                                                    i.current.classList.add(xe),
                                                    void l.current.classList.remove(xe)
                                                );
                                            if (
                                                ((t = c.current),
                                                (u = m.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(xe),
                                                    void l.current.classList.add(xe)
                                                );
                                            var t, u;
                                            (i.current.classList.remove(xe), l.current.classList.remove(xe));
                                        }
                                    })(_));
                            },
                            b = ve(() => {
                                ((() => {
                                    const t = m.current,
                                        u = c.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && a && u)) return;
                                    const s = Math.min(1, a / r);
                                    ((t.style.width = `${Oe(u, s)}px`),
                                        (t.style.display = 'flex'),
                                        n.current &&
                                            (1 !== s ? n.current.classList.add(Re) : n.current.classList.remove(Re)));
                                })(),
                                    p());
                            });
                        ((0, r.useEffect)(() => ae(b)),
                            (0, r.useEffect)(
                                () =>
                                    ae(() => {
                                        const t = () => {
                                            p();
                                        };
                                        let u = Me;
                                        const a = () => {
                                            (u(), (u = ae(b)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', b),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                (u(),
                                                    e.events.off('recalculateContent', b),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!E.pending) return;
                                const t = o.O.client.events.mouse.move(([t, u]) => {
                                        var n;
                                        const r = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!r || !s) return;
                                        const i = c.current,
                                            o = m.current;
                                        if (!i || !o) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const l = t.clientX - E.offset - i.getBoundingClientRect().x,
                                            _ = (l / i.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, _),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: _ }));
                                    }),
                                    u = o.O.client.events.mouse.up(() => {
                                        (t(), F(Ne));
                                    });
                                return () => {
                                    (t(), u());
                                };
                            }, [e, E.offset, E.pending, a, F]));
                        const D = fe((t) => e.applyStepTo(t), _, [e]),
                            B = D[0],
                            h = D[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const C = (e) => {
                            e.target.classList.contains(xe) || k('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: g()('HorizontalBar_base_49', t.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: g()('HorizontalBar_leftButton_5f', t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(xe) || 0 !== e.button || (k('play'), B(Se.Next));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: C,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: g()('HorizontalBar_track_0d', t.track),
                                    onMouseDown: (t) => {
                                        const a = m.current;
                                        a &&
                                            0 === t.button &&
                                            (k('play'),
                                            t.target === a
                                                ? F({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x })
                                                : ((t) => {
                                                      const a = m.current,
                                                          n = e.contentRef.current;
                                                      if (!a || !n) return;
                                                      const r = u(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                  })(t.screenX > a.getBoundingClientRect().x ? Se.Prev : Se.Next));
                                    },
                                    ref: c,
                                    onMouseEnter: C,
                                },
                                s().createElement('div', { ref: m, className: g()('HorizontalBar_thumb_fd', t.thumb) }),
                                s().createElement('div', { className: g()('HorizontalBar_rail_32', t.rail) }),
                            ),
                            s().createElement('div', {
                                className: g()('HorizontalBar_rightButton_03', t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(xe) || 0 !== e.button || (k('play'), B(Se.Prev));
                                },
                                onMouseUp: h,
                                ref: l,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    We = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    He = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: a,
                        areaClassName: n,
                        classNames: i,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: g()(We.base, e.base) });
                            }, [a]),
                            _ = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: g()(We.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: g()(We.defaultScrollArea, n) },
                                s().createElement($e, { className: o, api: _, classNames: i }, e),
                            ),
                            s().createElement(Ie, { getStepByRailClick: l, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    $e = ({ api: e, className: t, classNames: u, children: a }) => (
                        (0, r.useEffect)(() => ae(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: g()(We.base, t) },
                            s().createElement(
                                'div',
                                {
                                    className: g()(We.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: g()(We.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (($e.Bar = Ie), ($e.Default = He));
                const ze = Pe({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Se.Next : Se.Prev),
                    }),
                    Ge = 'VerticalBar_base__active_72',
                    Ue = 'disable',
                    je = () => {},
                    Ve = { pending: !1, offset: 0 },
                    qe = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ke = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Xe = (e, t) => Math.max(20, e.offsetHeight * t),
                    Ye = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = qe, onDrag: a = je }) => {
                        const n = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            m = (0, r.useRef)(null),
                            _ = e.stepTimeout || 100,
                            d = (0, r.useState)(Ve),
                            E = d[0],
                            A = d[1],
                            F = (0, r.useCallback)(
                                (e) => {
                                    (A(e),
                                        m.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current }));
                                },
                                [a],
                            ),
                            p = ve(() => {
                                const t = m.current,
                                    u = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && r && t && u)) return;
                                const s = Math.min(1, a / r);
                                return (
                                    (t.style.height = `${Xe(u, s)}px`),
                                    (t.style.display = 'flex'),
                                    n.current &&
                                        (1 !== s ? n.current.classList.add(Ge) : n.current.classList.remove(Ge)),
                                    s
                                );
                            }),
                            b = ve(() => {
                                const t = c.current,
                                    u = m.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && t && u && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / n),
                                    o = he(0, 1, r / (n - a)),
                                    _ = (t.offsetHeight - Xe(t, s)) * o;
                                ((u.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && m.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    i.current.classList.add(Ue),
                                                    void l.current.classList.remove(Ue)
                                                );
                                            if (
                                                ((t = c.current),
                                                (u = m.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(Ue),
                                                    void l.current.classList.add(Ue)
                                                );
                                            var t, u;
                                            (i.current.classList.remove(Ue), l.current.classList.remove(Ue));
                                        }
                                    })(_));
                            }),
                            D = ve(() => {
                                Ke(e, () => {
                                    (p(), b());
                                });
                            });
                        ((0, r.useEffect)(() => ae(D)),
                            (0, r.useEffect)(() => {
                                const t = () => {
                                    Ke(e, () => {
                                        b();
                                    });
                                };
                                let u = je;
                                const a = () => {
                                    (u(), (u = ae(D)));
                                };
                                return (
                                    e.events.on('recalculateContent', D),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        (u(),
                                            e.events.off('recalculateContent', D),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a));
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!E.pending) return;
                                const t = o.O.client.events.mouse.up(() => {
                                        F(Ve);
                                    }),
                                    u = o.O.client.events.mouse.move(([t]) => {
                                        Ke(e, (u) => {
                                            const n = c.current,
                                                r = m.current,
                                                s = e.getContainerSize();
                                            if (!n || !r || !s) return;
                                            const i = t.screenY - E.offset - n.getBoundingClientRect().y,
                                                o = (i / n.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: o }));
                                        });
                                    });
                                return () => {
                                    (t(), u());
                                };
                            }, [e, E.offset, E.pending, a, F]));
                        const B = fe((t) => e.applyStepTo(t), _, [e]),
                            h = B[0],
                            C = B[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const v = (e) => {
                            e.target.classList.contains(Ue) || k('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: g()('VerticalBar_base_f3', t.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: g()('VerticalBar_topButton_d7', t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ue) || 0 !== e.button || (k('play'), h(Se.Next));
                                },
                                ref: i,
                                onMouseEnter: v,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: g()('VerticalBar_track_df', t.track),
                                    onMouseDown: (t) => {
                                        const a = m.current;
                                        var n;
                                        a &&
                                            0 === t.button &&
                                            (k('play'),
                                            t.target === a
                                                ? F({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y })
                                                : ((n = t.screenY > a.getBoundingClientRect().y ? Se.Prev : Se.Next),
                                                  m.current &&
                                                      Ke(e, (t) => {
                                                          if (!t) return;
                                                          const a = u(e),
                                                              r = e.clampPosition(t, t.scrollTop + a * n);
                                                          e.applyScroll(r);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                s().createElement('div', { ref: m, className: g()('VerticalBar_thumb_32', t.thumb) }),
                                s().createElement('div', { className: g()('VerticalBar_rail_43', t.rail) }),
                            ),
                            s().createElement('div', {
                                className: g()('VerticalBar_bottomButton_06', t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ue) || 0 !== e.button || (k('play'), h(Se.Prev));
                                },
                                onMouseUp: C,
                                ref: l,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Ze = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Qe = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: a,
                        areaClassName: n,
                        scrollClassName: i,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: g()(Ze.base, e.base) });
                            }, [a]),
                            _ = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: g()(Ze.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: g()(Ze.area, n) },
                                s().createElement(Je, { className: i, classNames: o, api: _ }, e),
                            ),
                            s().createElement(Ye, { getStepByRailClick: l, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    Je = ({ className: e, classNames: t, children: u, api: a }) => (
                        (0, r.useEffect)(() => ae(a.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: g()(Ze.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: g()(Ze.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                u,
                            ),
                        )
                    );
                Je.Default = Qe;
                const et = { Vertical: n, Horizontal: a };
                let tt;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(tt || (tt = {}));
                const ut = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: a = 0,
                        args: n,
                        isEnabled: s = !0,
                        onMouseDown: i,
                    }) => {
                        const o = (0, r.useCallback)(() => {
                                ((0, re.c9)(re.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: n,
                                }),
                                    M.playYes());
                            }, [n, t, u, a]),
                            l = (0, r.useCallback)(() => {
                                (0, re.c9)(re.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, u, a]),
                            c = (0, r.useCallback)(
                                (e) => {
                                    (i && i(e), ((e) => e.button === tt.RIGHT)(e) && o());
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
                    at = ['children'];
                function nt() {
                    return (
                        (nt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        nt.apply(this, arguments)
                    );
                }
                const rt = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, at);
                        return s().createElement(
                            ut,
                            nt({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    st = ({ value: e, format: t = 'integral' }) => {
                        const u = (function (e) {
                                return 'gold' === e ? re.B3.GOLD : re.B3.INTEGRAL;
                            })(t),
                            a = re.Z5.getNumberFormat(e, u);
                        return void 0 !== e && void 0 !== a ? a : null;
                    },
                    it = [
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
                function ot(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const u = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                u.number = t;
                                break;
                            case 'boolean':
                                u.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                u.string = t.toString();
                        }
                        return u;
                    });
                }
                const lt = (e, t, u = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: re.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                u,
                            ),
                        );
                    },
                    ct = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            m = e.ignoreMouseClick,
                            _ = void 0 !== m && m,
                            d = e.decoratorId,
                            E = void 0 === d ? 0 : d,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            g = e.targetId,
                            p = void 0 === g ? 0 : g,
                            b = e.onShow,
                            D = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, it);
                        const h = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, r.useMemo)(() => p || oe().resId, [p]),
                            v = (0, r.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (lt(u, E, { isMouseEvent: !0, on: !0, arguments: ot(a) }, C),
                                    b && b(),
                                    (h.current.isVisible = !0));
                            }, [u, E, a, C, b]),
                            f = (0, r.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        lt(u, E, { on: !1 }, C),
                                        h.current.isVisible && D && D(),
                                        (h.current.isVisible = !1));
                                }
                            }, [u, E, C, D]),
                            w = (0, r.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(h.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ),
                            F
                                ? (0, r.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((y = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          (clearTimeout(h.current.timeoutId),
                                                          (h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          n && n(e),
                                                          y && y(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (f(), null == s || s(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === _ && f(), null == o || o(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === _ && f(), null == i || i(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          B,
                                      ),
                                  )
                                : t
                        );
                        var y;
                    },
                    mt = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function _t() {
                    return (
                        (_t =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        _t.apply(this, arguments)
                    );
                }
                const dt = R.views.common.tooltip_window.simple_tooltip_content,
                    Et = (e) => {
                        let t = e.children,
                            u = e.body,
                            a = e.header,
                            n = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, mt);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, o, { body: u, header: a, note: n, alert: i });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [i, u, a, n, o]);
                        return s().createElement(
                            ct,
                            _t(
                                {
                                    contentId:
                                        ((m = null == o ? void 0 : o.hasHtmlContent),
                                        m ? dt.SimpleTooltipHtmlContent('resId') : dt.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var m;
                    },
                    At = ['content', 'classMix', 'className'];
                function Ft() {
                    return (
                        (Ft =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ft.apply(this, arguments)
                    );
                }
                const gt = (e) => {
                    let t = e.content,
                        u = e.classMix,
                        a = e.className,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                            return n;
                        })(e, At);
                    const i = (0, r.useRef)(null),
                        o = (0, r.useState)(!0),
                        l = o[0],
                        c = o[1];
                    return (
                        (0, r.useEffect)(() =>
                            ae(() => {
                                const e = i.current;
                                e && e.offsetWidth >= e.scrollWidth && c(!1);
                            }),
                        ),
                        s().createElement(
                            Et,
                            { isEnabled: l, body: t },
                            s().createElement(
                                'div',
                                Ft({}, n, { ref: i, className: g()('TextOverflow_base_3b', a, u) }),
                                t,
                            ),
                        )
                    );
                };
                var pt = u(9690),
                    bt = u(1281);
                let Dt;
                function Bt(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(Dt || (Dt = {}));
                const ht = (e) => e.replace(/&nbsp;/g, ' '),
                    Ct = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    vt = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    ft = (e, t, u = Dt.left) => e.split(t).reduce(u === Dt.left ? Ct : vt, []),
                    wt = (() => {
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
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    yt = ['zh_cn', 'zh_sg', 'zh_tw'],
                    St = {
                        base: 'Content_base_2f',
                        base__platoon: 'Content_base__platoon_ec',
                        name: 'Content_name_07',
                        base__rowBrPlayer: 'Content_base__rowBrPlayer_89',
                        userName: 'Content_userName_70',
                        clanTag: 'Content_clanTag_a0',
                        anonymizer: 'Content_anonymizer_94',
                        base__hover: 'Content_base__hover_a7',
                        vehicle: 'Content_vehicle_c0',
                        vehicleTypeIcon: 'Content_vehicleTypeIcon_f8',
                        vehicleName: 'Content_vehicleName_ac',
                        level: 'Content_level_ef',
                        damage: 'Content_damage_e6',
                        kills: 'Content_kills_de',
                    },
                    Tt = s().memo(({ isPlatoon: e, type: t, anonymizerNick: u, user: a, isRowHovered: n }) => {
                        const i = a.userName,
                            o = a.clanAbbrev,
                            l = a.vehicleName,
                            c = a.vehicleType,
                            m = a.vehicleLevel,
                            _ = a.damage,
                            d = a.kills,
                            E = a.databaseID,
                            A = a.hiddenUserName,
                            F = 'rowBrPlayer' === t || 'rowBrPlatoon' === t,
                            p = (0, r.useState)(!1),
                            b = p[0],
                            D = p[1],
                            B = g()(St.base, St[`base__${t}`], e && St.base__platoon, (F || n || b) && St.base__hover),
                            h = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.vehicleTypes.$dyn(c)})`,
                                }),
                                [c],
                            ),
                            C = o ? `[${o}]` : null,
                            v = (0, r.useCallback)(() => {
                                e && D(!0);
                            }, [e]),
                            f = (0, r.useCallback)(() => {
                                e && D(!1);
                            }, [e]),
                            w = (0, r.useMemo)(() => ({ userName: i, databaseID: E, hiddenUserName: A }), [i, E, A]),
                            y =
                                'rowBrEnemy' === t
                                    ? R.strings.battle_royale.battleResult.stats.anonymizer.enemy.header()
                                    : R.strings.battle_royale.battleResult.stats.anonymizer.header();
                        return s().createElement(
                            'div',
                            { className: B, onMouseEnter: v, onMouseLeave: f },
                            s().createElement(
                                'div',
                                { className: St.name },
                                i &&
                                    s().createElement(
                                        rt,
                                        { args: w },
                                        s().createElement(
                                            'div',
                                            { className: St.userName },
                                            s().createElement(gt, { content: i }),
                                        ),
                                    ),
                                C && s().createElement('span', { className: St.clanTag }, C),
                                u &&
                                    s().createElement(
                                        Et,
                                        {
                                            isEnabled: !0,
                                            header: Bt(y, { name: u }),
                                            body: R.strings.battle_royale.battleResult.stats.anonymizer.body(),
                                        },
                                        s().createElement('div', { className: St.anonymizer }),
                                    ),
                            ),
                            s().createElement(
                                'div',
                                { className: St.vehicle },
                                s().createElement('div', { className: St.vehicleTypeIcon, style: h }),
                                s().createElement('span', { className: St.vehicleName }, l),
                            ),
                            s().createElement('span', { className: St.level }, (0, pt.cg)(m)),
                            s().createElement(
                                'span',
                                { className: St.damage },
                                s().createElement(st, { value: _, format: 'integral' }),
                            ),
                            s().createElement('span', { className: St.kills }, d),
                        );
                    });
                function Pt() {
                    return (
                        (Pt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Pt.apply(this, arguments)
                    );
                }
                const Lt = s().memo(({ place: e, isSquadMode: t, playersList: u, index: a }) => {
                    const n = (0, r.useState)(!1),
                        i = n[0],
                        o = n[1],
                        l = g()(
                            'LeaderboardRow_base_8c',
                            0 === a && 'LeaderboardRow_base__leader_44',
                            t && 'LeaderboardRow_base__platoon_ce',
                        ),
                        c = (0, r.useCallback)(() => {
                            t || o(!0);
                        }, [t]),
                        m = (0, r.useCallback)(() => {
                            t || o(!1);
                        }, [t]);
                    return s().createElement(
                        'div',
                        { className: l, onMouseEnter: c, onMouseLeave: m },
                        s().createElement('div', { className: 'LeaderboardRow_place_db' }, e),
                        s().createElement(
                            'div',
                            { className: 'LeaderboardRow_players_be' },
                            u.map(({ value: e }, u) =>
                                s().createElement(
                                    Tt,
                                    Pt({ key: `${u}_${e.user.userName}` }, e, { isPlatoon: t, isRowHovered: i }),
                                ),
                            ),
                        ),
                    );
                });
                function Rt() {
                    return (
                        (Rt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Rt.apply(this, arguments)
                    );
                }
                const xt = s().memo(() => {
                        const e = Ee('model.leaderboardLobbyModel').placesList,
                            t = ze(),
                            u = (0, r.useContext)(d);
                        return s().createElement(
                            'div',
                            {
                                className: g()(
                                    'Leaderboard_base_ac',
                                    (u.extraLarge || u.large) && 'Leaderboard_base__large_f8',
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: 'Leaderboard_middle_66' },
                                e &&
                                    s().createElement(
                                        'div',
                                        { className: 'Leaderboard_content_e8' },
                                        s().createElement(
                                            'div',
                                            { className: 'Leaderboard_legend_f3' },
                                            s().createElement('div', { className: 'Leaderboard_damage_0e' }),
                                            s().createElement('div', { className: 'Leaderboard_kills_cf' }),
                                        ),
                                        s().createElement(
                                            et.Vertical.Area.Default,
                                            { api: t },
                                            s().createElement(
                                                'div',
                                                { className: 'Leaderboard_scrollContent_9d' },
                                                e.map(({ value: e }, t) =>
                                                    s().createElement(Lt, Rt({ key: e.place, index: t }, e)),
                                                ),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Nt = 'progressionCompleted';
                let kt;
                var Mt;
                (((Mt = kt || (kt = {})).Active = 'active'), (Mt.Paused = 'paused'), (Mt.Completed = 'completed'));
                const Ot = {
                        base: 'StatItem_base_09',
                        wreathImage: 'StatItem_wreathImage_4e',
                        statImage: 'StatItem_statImage_af',
                        statText: 'StatItem_statText_10',
                        divider: 'StatItem_divider_bf',
                        maxValue: 'StatItem_maxValue_d6',
                        titleText: 'StatItem_titleText_c6',
                    },
                    It = s().memo(({ currentValue: e, maxValue: t, type: u }) => {
                        const a = re.Z5.getNumberFormat(e, re.B3.INTEGRAL),
                            n = R.strings.battle_royale.battleResult.stats.$dyn(u),
                            i = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.battleResult.stat_list.$dyn(u)})`,
                                }),
                                [u],
                            );
                        return s().createElement(
                            Et,
                            { header: n.header(), body: n.body(), isEnabled: u.length > 0 },
                            s().createElement(
                                'div',
                                { className: Ot.base },
                                s().createElement('div', { className: Ot.wreathImage }),
                                s().createElement('div', { className: Ot.statImage, style: i }),
                                s().createElement(
                                    'div',
                                    { className: Ot.statText },
                                    s().createElement('span', { className: Ot.currentValue }, a),
                                    t >= 0 &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement('span', { className: Ot.divider }, '/'),
                                            s().createElement('span', { className: Ot.maxValue }, t),
                                        ),
                                ),
                                s().createElement('div', { className: Ot.titleText }, n.title()),
                            ),
                        );
                    }),
                    Wt = s().memo(
                        ({
                            statsList: e,
                            animationTrigger: t,
                            isAnimationSkipped: u,
                            onAnimationComplete: a,
                            transitionTimeout: n,
                            itemStartState: i,
                            itemFinishState: o,
                            isWinner: l,
                        }) => {
                            const c = (0, r.useState)(-1),
                                m = c[0],
                                _ = c[1],
                                d = e.length,
                                E = (0, r.useCallback)(() => {
                                    if (u) return;
                                    const e = m + 1;
                                    e < d ? (k(R.sounds.BR_result_effectiveness()), _(e)) : a && a();
                                }, [d, m, a, u]);
                            return (
                                (0, r.useEffect)(() => {
                                    t && !u && (k(R.sounds.BR_result_effectiveness()), _(0));
                                }, [t, u]),
                                (0, r.useEffect)(() => {
                                    u && _(e.length);
                                }, [u, e.length]),
                                s().createElement(
                                    'div',
                                    { className: 'StatsList_base_0a' },
                                    e.map(({ value: e }, t) =>
                                        s().createElement(
                                            Ae.Z,
                                            {
                                                key: `${e.type}_${e.currentValue}`,
                                                timeout: n || 300,
                                                in: m >= t,
                                                enter: !u,
                                                onEntered: E,
                                                classNames: o,
                                            },
                                            s().createElement(
                                                'div',
                                                { className: i },
                                                !(l && 'place' === e.type) && s().createElement(It, e),
                                            ),
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Ht = (e, t) => {
                        let u;
                        const a = setTimeout(() => {
                            u = e();
                        }, t);
                        return () => {
                            ('function' == typeof u && u(), clearTimeout(a));
                        };
                    },
                    $t = 'TitleAnimations_baseEnterDone_b1',
                    zt = {
                        enterActive: 'TitleAnimations_wreathIcon_98',
                        enterDone: 'TitleAnimations_wreathIcon__enterDone_b7',
                    },
                    Gt = {
                        enterActive: 'TitleAnimations_titleBg_ab',
                        enterDone: 'TitleAnimations_titleBg__enterDone_69',
                    },
                    Ut = { enterActive: 'TitleAnimations_title_ed', enterDone: $t },
                    jt = { enterActive: 'TitleAnimations_place_31', enterDone: 'TitleAnimations_place__enterDone_a5' },
                    Vt = { enterActive: 'TitleAnimations_vehicle_a1', enterDone: $t };
                var qt;
                !(function (e) {
                    ((e[(e.WREATH_ENTER = 0)] = 'WREATH_ENTER'),
                        (e[(e.BG_ENTER = 1)] = 'BG_ENTER'),
                        (e[(e.TITLE_ENTER = 2)] = 'TITLE_ENTER'),
                        (e[(e.VEHICLE_ENTER = 3)] = 'VEHICLE_ENTER'));
                })(qt || (qt = {}));
                const Kt = [200, 200, 500],
                    Xt = [600, 400, 500, 300],
                    Yt = s().memo(
                        ({
                            isFirstPlace: e,
                            isWinner: t,
                            place: u,
                            finishResultLabel: a,
                            vehicleType: n,
                            vehicleName: i,
                            onAnimationComplete: o,
                            animationTrigger: l,
                            isAnimationSkipped: c,
                        }) => {
                            const m = (0, r.useState)(-1),
                                _ = m[0],
                                d = m[1],
                                E = (0, r.useMemo)(
                                    () => ({
                                        backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.vehicleTypes.$dyn(n)})`,
                                    }),
                                    [n],
                                );
                            ((0, r.useEffect)(() => {
                                l && !c && d(0);
                            }, [l, c]),
                                (0, r.useEffect)(() => {
                                    c && d(qt.VEHICLE_ENTER);
                                }, [c]),
                                (0, r.useEffect)(() => {
                                    if (!(_ < qt.WREATH_ENTER || _ >= qt.VEHICLE_ENTER || c))
                                        return Ht(() => d(_ + 1), Kt[_]);
                                }, [_, c]));
                            const A = (0, r.useCallback)(() => {
                                    c || (o && o());
                                }, [o, c]),
                                F = g()(
                                    'Title_base_1c',
                                    t && 'Title_base__win_c4',
                                    !t && 'Title_base__lose_0d',
                                    t && !e && 'Title_base__winner_8d',
                                    e && 'Title_base__firstPlace_24',
                                );
                            return s().createElement(
                                'div',
                                { className: F },
                                t &&
                                    s().createElement(
                                        Ae.Z,
                                        {
                                            timeout: Xt[qt.WREATH_ENTER],
                                            in: _ >= qt.WREATH_ENTER,
                                            enter: !c,
                                            classNames: zt,
                                        },
                                        s().createElement('div', { className: 'Title_wreathIcon_96' }),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: 'Title_titleWrapper_be' },
                                    t &&
                                        s().createElement(
                                            Ae.Z,
                                            {
                                                timeout: Xt[qt.TITLE_ENTER],
                                                in: _ >= qt.TITLE_ENTER,
                                                enter: !c,
                                                classNames: jt,
                                            },
                                            s().createElement('div', { className: 'Title_place_31' }, u),
                                        ),
                                    e &&
                                        s().createElement(
                                            Ae.Z,
                                            {
                                                timeout: Xt[qt.BG_ENTER],
                                                in: _ >= qt.BG_ENTER,
                                                enter: !c,
                                                classNames: Gt,
                                            },
                                            s().createElement('div', { className: 'Title_titleBg_52' }),
                                        ),
                                    s().createElement(
                                        Ae.Z,
                                        {
                                            timeout: Xt[qt.TITLE_ENTER],
                                            in: _ >= qt.TITLE_ENTER,
                                            enter: !c,
                                            classNames: Ut,
                                        },
                                        s().createElement('div', { className: 'Title_titleText_8c' }, a),
                                    ),
                                    s().createElement(
                                        Ae.Z,
                                        {
                                            timeout: Xt[qt.VEHICLE_ENTER],
                                            in: _ >= qt.VEHICLE_ENTER,
                                            enter: !c,
                                            onEntered: A,
                                            classNames: Vt,
                                        },
                                        s().createElement(
                                            'div',
                                            { className: 'Title_vehicle_71' },
                                            s().createElement('div', {
                                                className: 'Title_vehicleTypeIcon_12',
                                                style: E,
                                            }),
                                            s().createElement('div', { className: 'Title_vehicleName_88' }, i),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Zt = {
                        base: 'PremiumRewardItem_base_07',
                        image: 'PremiumRewardItem_image_71',
                        base__crystal: 'PremiumRewardItem_base__crystal_06',
                        base__xp: 'PremiumRewardItem_base__xp_a4',
                        base__credits: 'PremiumRewardItem_base__credits_3d',
                        base__brcoin: 'PremiumRewardItem_base__brcoin_f1',
                        base__brProgressionToken: 'PremiumRewardItem_base__brProgressionToken_3a',
                        base__battlePassPoints: 'PremiumRewardItem_base__battlePassPoints_0c',
                    },
                    Qt = s().memo(({ value: e, type: t }) => {
                        const u = re.Z5.getNumberFormat(e, re.B3.INTEGRAL),
                            a = g()(Zt.base, Zt[`base__${t}`]),
                            n = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.battleResult.battle_reward.rewards.$dyn(`${t}_small`)})`,
                                }),
                                [t],
                            );
                        return s().createElement(
                            L,
                            null,
                            s().createElement(
                                Et,
                                { body: R.strings.battle_royale.battleResult.premiumRewards.tooltip() },
                                s().createElement(
                                    'div',
                                    { className: a },
                                    s().createElement('div', { className: Zt.image, style: n }),
                                    s().createElement('span', null, u),
                                ),
                            ),
                        );
                    }),
                    Jt = 'PremiumRewards_ribbonLine_e4',
                    eu = 'PremiumRewards_ribbonDot_cd',
                    tu = 'PremiumRewards_premiumLine_7b',
                    uu = s().memo(({ battleRewardsList: e }) =>
                        s().createElement(
                            'div',
                            { className: 'PremiumRewards_base_a9' },
                            s().createElement(
                                'div',
                                { className: 'PremiumRewards_premium_26' },
                                s().createElement(
                                    'div',
                                    { className: tu },
                                    s().createElement('div', {
                                        className: g()(Jt, 'PremiumRewards_ribbonLine__left_1d'),
                                    }),
                                    s().createElement('div', {
                                        className: g()(eu, 'PremiumRewards_ribbonDot__left_55'),
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'PremiumRewards_premiumTitleWrapper_98' },
                                    s().createElement('div', { className: 'PremiumRewards_premiumIcon_70' }),
                                    s().createElement(
                                        'div',
                                        { className: 'PremiumRewards_premiumText_78' },
                                        R.strings.battle_royale.battleResult.premiumRewards.title(),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'PremiumRewards_premiumWrapper_4e' },
                                    s().createElement(
                                        'div',
                                        { className: 'PremiumRewards_rewardsList_a1' },
                                        e.map(({ value: e }) =>
                                            s().createElement(
                                                'div',
                                                {
                                                    className: 'PremiumRewards_rewardsItem_03',
                                                    key: `${e.type}_${e.value}`,
                                                },
                                                s().createElement(Qt, e),
                                            ),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: tu },
                                    s().createElement('div', {
                                        className: g()(Jt, 'PremiumRewards_ribbonLine__right_3e'),
                                    }),
                                    s().createElement('div', {
                                        className: g()(eu, 'PremiumRewards_ribbonDot__right_8e'),
                                    }),
                                ),
                            ),
                        ),
                    ),
                    au = 'Ribbon_shadow_8d',
                    nu = 'Ribbon_ribbonLine_e2',
                    ru = s().memo(({ battleRewardsListWithPremium: e, isWinner: t, hasPremium: u }) =>
                        s().createElement(
                            'div',
                            {
                                className: g()(
                                    'Ribbon_base_21',
                                    t && (u ? 'Ribbon_base__prem_70' : 'Ribbon_base__win_57'),
                                    !t && (u ? 'Ribbon_base__lose_prem_cc' : 'Ribbon_base__lose_94'),
                                ),
                            },
                            s().createElement('div', { className: g()(au, 'Ribbon_shadow__top_49') }),
                            s().createElement('div', { className: 'Ribbon_ribbonIcon_0f' }),
                            s().createElement(
                                'div',
                                { className: 'Ribbon_topLine_4f' },
                                s().createElement('div', { className: nu }),
                            ),
                            u &&
                                s().createElement(
                                    'div',
                                    { className: 'Ribbon_bottomLine_fc' },
                                    s().createElement('div', { className: nu }),
                                ),
                            !u && e.length > 0 && s().createElement(uu, { battleRewardsList: e }),
                            s().createElement('div', { className: g()(au, 'Ribbon_shadow__bottom_90') }),
                        ),
                    ),
                    su = {
                        base: 'Reward_base_a1',
                        image: 'Reward_image_0d',
                        base__crystal: 'Reward_base__crystal_3f',
                        base__xp: 'Reward_base__xp_74',
                        base__credits: 'Reward_base__credits_75',
                        base__brcoin: 'Reward_base__brcoin_6e',
                        base__brProgressionToken: 'Reward_base__brProgressionToken_61',
                        base__battlePassPoints: 'Reward_base__battlePassPoints_19',
                    },
                    iu = s().memo(({ value: e, type: t }) => {
                        const u = re.Z5.getNumberFormat(e, re.B3.INTEGRAL),
                            a = g()(su.base, su[`base__${t}`]),
                            n = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.battleResult.battle_reward.rewards.$dyn(t)})`,
                                }),
                                [t],
                            );
                        return s().createElement(
                            'div',
                            { className: a },
                            s().createElement('div', { className: su.image, style: n }),
                            s().createElement('span', null, u),
                        );
                    }),
                    ou = (0, r.memo)(({ value: e, type: t, classMix: u }) => {
                        const a = (0, r.useMemo)(() => ({ currencyType: t }), [t]);
                        return s().createElement(
                            ct,
                            {
                                contentId: R.views.battle_royale.lobby.tooltips.RewardCurrencyTooltipView('resId'),
                                args: a,
                            },
                            s().createElement('div', null, s().createElement(iu, { value: e, type: t, classMix: u })),
                        );
                    }),
                    lu = s().memo(
                        ({
                            battleRewardsList: e,
                            animationTrigger: t,
                            isAnimationSkipped: u,
                            onAnimationComplete: a,
                            transitionTimeout: n,
                            itemStartState: i,
                            itemFinishState: o,
                        }) => {
                            const l = (0, r.useState)(-1),
                                c = l[0],
                                m = l[1],
                                _ = e.length,
                                d = (0, r.useCallback)(() => {
                                    if (u) return;
                                    const e = c + 1;
                                    e < _ ? (k(R.sounds.BR_result_numbers()), m(e)) : a && a();
                                }, [_, c, a, u]);
                            return (
                                (0, r.useEffect)(() => {
                                    t && !u && (k(R.sounds.BR_result_numbers()), m(0));
                                }, [t, u]),
                                (0, r.useEffect)(() => {
                                    u && m(_);
                                }, [_, u]),
                                s().createElement(
                                    L,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: 'BattleRewardList_base_92' },
                                        e.map(({ value: e }, t) =>
                                            s().createElement(
                                                Ae.Z,
                                                {
                                                    key: `${e.type}_${e.value}`,
                                                    timeout: n || 300,
                                                    in: c >= t,
                                                    enter: !u,
                                                    onEntered: d,
                                                    classNames: o,
                                                },
                                                s().createElement('div', { className: i }, s().createElement(ou, e)),
                                            ),
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    cu = ({ binding: e, text: t = '', classMix: u, alignment: a = Dt.left, formatWithBrackets: n }) => {
                        if (null === t) return (console.error("FormatText was supplied with 'null'"), null);
                        const i = n && e ? Bt(t, e) : t;
                        return s().createElement(
                            r.Fragment,
                            null,
                            i.split('\n').map((t, n) =>
                                s().createElement(
                                    'div',
                                    { className: g()('FormatText_base_d0', u), key: `${t}-${n}` },
                                    ((e, t, u) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            u && e in u
                                                ? u[e]
                                                : ((e, t = Dt.left) => {
                                                      const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return yt.includes(u)
                                                          ? wt(e)
                                                          : 'ja' === u
                                                            ? (0, bt.D4)()
                                                                  .parse(e)
                                                                  .map((e) => ht(e))
                                                            : ((e, t = Dt.left) => {
                                                                  let u = [];
                                                                  const a =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      n = ht(e);
                                                                  return (
                                                                      ft(n, /( )/, t).forEach(
                                                                          (e) => (u = u.concat(ft(e, a, Dt.left))),
                                                                      ),
                                                                      u
                                                                  );
                                                              })(e, t);
                                                  })(e, t),
                                        ))(t, a, e).map((e, t) =>
                                        s().createElement(r.Fragment, { key: `${t}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    mu = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let _u, du;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(_u || (_u = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(du || (du = {})));
                const Eu = ({ size: e = _u.Default }) => {
                        const t = g()(mu.background, mu[`background__${e}`]);
                        return s().createElement('div', { className: t });
                    },
                    Au = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Fu = ({ size: e }) => {
                        const t = g()(Au.base, Au[`base__${e}`]);
                        return s().createElement('div', { className: t });
                    },
                    gu = {
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
                    pu = (0, r.memo)(
                        ({ size: e, lineRef: t, disabled: u, baseStyles: a, isComplete: n, withoutBounce: r }) => {
                            const i = g()(
                                    gu.base,
                                    gu[`base__${e}`],
                                    u && gu.base__disabled,
                                    n && gu.base__finished,
                                    r && gu.base__withoutBounce,
                                ),
                                o = !u && !n;
                            return s().createElement(
                                'div',
                                { className: i, style: a, ref: t },
                                s().createElement('div', { className: gu.pattern }),
                                s().createElement('div', { className: gu.gradient }),
                                o && s().createElement(Fu, { size: e }),
                            );
                        },
                    );
                let bu, Du;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(bu || (bu = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(Du || (Du = {})));
                const Bu = (e) => (e ? { left: 0 } : { right: 0 }),
                    hu = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    Cu = (e) => ({ transitionDuration: `${e}ms` }),
                    vu = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: n,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const m = i < a,
                                _ = (0, r.useState)(bu.Idle),
                                d = _[0],
                                E = _[1],
                                A = d === bu.End,
                                F = d === bu.Idle,
                                p = d === bu.Grow,
                                b = d === bu.Shrink,
                                D = (0, r.useCallback)(
                                    (e) => {
                                        (E(e), l && l(e));
                                    },
                                    [l],
                                ),
                                B = (0, r.useCallback)(
                                    (e, t) =>
                                        Ht(() => {
                                            D(e);
                                        }, t),
                                    [D],
                                );
                            (0, r.useEffect)(() => {
                                if (!u)
                                    return F
                                        ? B(bu.Grow, t)
                                        : p
                                          ? B(bu.Shrink, e)
                                          : b
                                            ? B(bu.End, e)
                                            : void (A && o && o());
                            }, [B, u, A, p, F, b, o, t, e]);
                            const h = (0, r.useMemo)(() => Object.assign({ width: '100%' }, Cu(e), Bu(m)), [m, e]),
                                C = (0, r.useMemo)(() => Object.assign({ width: '0%' }, Cu(e), Bu(m)), [m, e]),
                                v = (0, r.useMemo)(() => Object.assign({ width: '0%' }, hu(m, a), Cu(e)), [a, m, e]),
                                f = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - a)}%` }, hu(m, a), Cu(e)),
                                    [a, m, i, e],
                                );
                            if (A) return null;
                            const w = g()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                m && 0 === i && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return s().createElement(
                                'div',
                                { style: F ? v : f, className: w },
                                s().createElement(
                                    'div',
                                    { style: b ? C : h, className: 'ProgressBarDeltaGrow_glow_68' },
                                    s().createElement(Fu, { size: n }),
                                ),
                            );
                        },
                    ),
                    fu = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: n,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < u,
                                _ = (0, r.useState)(!1),
                                d = _[0],
                                E = _[1],
                                A = (0, r.useCallback)(
                                    (e) => {
                                        (e === bu.Shrink && E(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                F = (0, r.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                g = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(pu, {
                                    size: t,
                                    lineRef: a,
                                    disabled: n,
                                    isComplete: i,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: d ? g : F,
                                }),
                                u >= 0 &&
                                    s().createElement(vu, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: u,
                                        size: t,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    wu = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: n,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < a,
                                m = (0, r.useState)(Du.Idle),
                                _ = m[0],
                                d = m[1],
                                E = _ === Du.In,
                                A = _ === Du.End,
                                F = _ === Du.Idle,
                                g = (0, r.useCallback)(
                                    (e) => {
                                        (d(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, r.useEffect)(() => {
                                if (F && !u)
                                    return Ht(() => {
                                        g(Du.In);
                                    }, t);
                            }, [g, u, F, t]),
                                (0, r.useEffect)(() => {
                                    if (E)
                                        return Ht(() => {
                                            (o && o(), g(Du.End));
                                        }, e + t);
                                }, [g, E, o, t, e]));
                            const p = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                b = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                D = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(a - i)}%`, left: `${c ? i : a}%` }),
                                    [a, c, i],
                                );
                            return A
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: D },
                                      s().createElement(
                                          'div',
                                          { style: F ? p : b, className: 'ProgressBarDeltaSimple_delta_99' },
                                          s().createElement(Fu, { size: n }),
                                      ),
                                  );
                        },
                    ),
                    yu = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: n,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, r.useMemo)(
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
                                s().createElement(pu, {
                                    size: t,
                                    lineRef: a,
                                    disabled: n,
                                    isComplete: i,
                                    baseStyles: m,
                                }),
                                u >= 0 &&
                                    s().createElement(wu, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: u,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Su = ['onComplete', 'onEndAnimation'];
                function Tu() {
                    return (
                        (Tu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Tu.apply(this, arguments)
                    );
                }
                const Pu = (0, r.memo)((e) => {
                        let t = e.onComplete,
                            u = e.onEndAnimation,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, Su);
                        const n = (0, r.useState)(!1),
                            i = n[0],
                            o = n[1],
                            l = (0, r.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== i && o(e), e && t && t(), u && u());
                            }, [i, t, u, a.to]);
                        switch (a.animationSettings.type) {
                            case du.Simple:
                                return s().createElement(yu, Tu({}, a, { onEndAnimation: l, isComplete: i }));
                            case du.Growing:
                                return s().createElement(fu, Tu({}, a, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    Lu = ({ size: e, value: t, lineRef: u, disabled: a, onComplete: n }) => {
                        const i = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            o = 100 === t;
                        return (
                            (0, r.useEffect)(() => {
                                o && n && n();
                            }, [o, n]),
                            s().createElement(pu, { size: e, disabled: a, baseStyles: i, isComplete: o, lineRef: u })
                        );
                    },
                    Ru = ['onEndAnimation'];
                function xu() {
                    return (
                        (xu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        xu.apply(this, arguments)
                    );
                }
                const Nu = (0, r.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                            return n;
                        })(e, Ru);
                    const a = (0, r.useRef)({}),
                        n = (0, r.useCallback)(() => {
                            ((a.current.from = void 0), t && t());
                        }, [t]),
                        i = 'number' == typeof a.current.from ? a.current.from : u.from;
                    return (
                        (a.current.from = i),
                        s().createElement(
                            Pu,
                            xu({}, u, {
                                onEndAnimation: n,
                                key: `${i}-${u.to}-${null == u ? void 0 : u.additionalKey}`,
                                from: i,
                            }),
                        )
                    );
                });
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                const Mu = (0, r.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: u,
                            disabled: a,
                            deltaFrom: n,
                            additionalKey: r,
                            animationSettings: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (n === t)
                                return s().createElement(Lu, {
                                    key: `${n}-${t}-${r}`,
                                    size: e,
                                    value: t,
                                    lineRef: u,
                                    disabled: a,
                                    onComplete: c,
                                });
                            const m = {
                                from: n,
                                to: t,
                                size: e,
                                additionalKey: r,
                                lineRef: u,
                                disabled: a,
                                animationSettings: i,
                                onComplete: c,
                                onEndAnimation: o,
                                onChangeAnimationState: l,
                            };
                            return i.withStack
                                ? s().createElement(Nu, m)
                                : s().createElement(Pu, ku({ key: `${n}-${t}-${r}` }, m));
                        },
                    ),
                    Ou = (e) => {
                        var t, u, a, n, r, s, i, o, l, c, m, _, d, E, A, F, g, p, b, D;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (t = null == (u = e.bg) ? void 0 : u.height) ? t : '12rem',
                            '--progress-bg-height-small':
                                null != (a = null == (n = e.bg) ? void 0 : n.heightSmall) ? a : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (r = e.line.filter) ? r : 'none',
                            '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                            '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                            '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                            '--progress-pattern-size': null != (s = e.pattern.size) ? s : '3rem 10rem',
                            '--progress-pattern-border-size': null != (i = e.pattern.borderSize) ? i : '1rem',
                            '--progress-pattern-gradient':
                                null != (o = e.pattern.gradient)
                                    ? o
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                            '--progress-pattern-gradient-finished':
                                null != (l = e.pattern.gradientFinished)
                                    ? l
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                            '--progress-pattern-gradient-mixBlendMode':
                                null != (c = e.pattern.mixBlendMode) ? c : 'overlay',
                            '--progress-glow': `url('${e.glow}')`,
                            '--progress-glow-width':
                                null != (m = null == (_ = e.glowSettings) ? void 0 : _.width) ? m : '60rem',
                            '--progress-glow-height':
                                null != (d = null == (E = e.glowSettings) ? void 0 : E.height) ? d : '100rem',
                            '--progress-glow-small-width':
                                null != (A = null == (F = e.glowSettings) ? void 0 : F.smallWidth) ? A : '44rem',
                            '--progress-glow-small-height':
                                null != (g = null == (p = e.glowSettings) ? void 0 : p.smallHeight) ? g : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (b = null == (D = e.glowSettings) ? void 0 : D.mixBlendMode) ? b : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
                    Iu = (e, t, u) => ('number' == typeof u ? (he(0, t, u) / t) * 100 : e),
                    Wu = {
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
                    Hu = {
                        freezed: !1,
                        withStack: !1,
                        type: du.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    $u = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = Wu,
                            size: u = _u.Default,
                            animationSettings: a = Hu,
                            disabled: n = !1,
                            withoutBackground: i = !1,
                            value: o,
                            deltaFrom: l,
                            additionalKey: c,
                            lineRef: m,
                            onChangeAnimationState: _,
                            onEndAnimation: d,
                            onComplete: E,
                            className: A,
                        }) => {
                            const F = (function (e, t, u) {
                                return (0, r.useMemo)(() => {
                                    const a = (he(0, t, e) / t) * 100;
                                    return { value: a, deltaFrom: Iu(a, t, u) };
                                }, [u, t, e]);
                            })(o, e, l);
                            return s().createElement(
                                'div',
                                { className: g()(mu.base, A, mu[`base__${u}`]), style: Ou(t) },
                                !i && s().createElement(Eu, { size: u }),
                                s().createElement(Mu, {
                                    size: u,
                                    lineRef: m,
                                    disabled: n,
                                    value: F.value,
                                    deltaFrom: F.deltaFrom,
                                    additionalKey: c,
                                    animationSettings: a,
                                    onEndAnimation: d,
                                    onChangeAnimationState: _,
                                    onComplete: E,
                                }),
                            );
                        },
                    );
                var zu = u(3403);
                function Gu() {
                    return !1;
                }
                console.log;
                var Uu = u(9174);
                function ju(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                const Vu = (e) => (0 === e ? window : window.subViews.get(e)),
                    qu = ((e, t) => {
                        const u = (0, r.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: n, mocks: i }) {
                                const l = (0, r.useRef)([]),
                                    c = (e, u, a) => {
                                        var n;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = Vu,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = n.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const n = u(t),
                                                        r = a.split('.').reduce((e, t) => e[t], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (u, r) => {
                                                        const i = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = o.O.view.addModelObserver(i, t, !0);
                                                        return (n.set(l, u), e && u(s(r)), l);
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const u = s(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = s(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                u = (function (e, t) {
                                                                    var u =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (u) return (u = u.call(e)).next.bind(u);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (u = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return ju(e, t);
                                                                                var u = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === u &&
                                                                                        e.constructor &&
                                                                                        (u = e.constructor.name),
                                                                                    'Map' === u || 'Set' === u
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === u ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                u,
                                                                                            )
                                                                                          ? ju(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        u && (e = u);
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
                                                            !(e = u()).done;

                                                        )
                                                            r(e.value, t);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(u),
                                            s =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            i = (t) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(t)) : s.readByPath(t),
                                            c = (e) => l.current.push(e),
                                            m = (({ observableModel: e }) => ({
                                                root: e.object(),
                                                battlePassProgress: e.object('personalResults.battlePassProgress'),
                                                userInfo: e.object('playerBattleTypeStatus.user'),
                                                battleTypeInfo: e.object('playerBattleTypeStatus'),
                                            }))({
                                                mode: e,
                                                readByPath: i,
                                                externalModel: s,
                                                observableModel: {
                                                    dict: (t) => {
                                                        const u = i(t),
                                                            a = Uu.LO.box(u, { equals: Gu });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, Uu.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    array: (t, u) => {
                                                        const a = null != u ? u : i(t),
                                                            n = Uu.LO.box(a, { equals: Gu });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, Uu.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (t, u) => {
                                                        const a = null != u ? u : i(t),
                                                            n = Uu.LO.box(a, { equals: Gu });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, Uu.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (t, u) => {
                                                        const a = i(u);
                                                        if (Array.isArray(t)) {
                                                            const n = t.reduce(
                                                                (e, t) => ((e[t] = Uu.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, Uu.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                n[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = t,
                                                                r = Object.entries(n),
                                                                i = r.reduce(
                                                                    (e, [t, u]) => ((e[u] = Uu.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, Uu.aD)((e) => {
                                                                            r.forEach(([t, u]) => {
                                                                                i[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            _ = { mode: e, model: m, externalModel: s, cleanup: c };
                                        return {
                                            model: m,
                                            controls: 'mocks' === e && a ? a.controls(_) : t(_),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    m = (0, r.useRef)(!1),
                                    _ = (0, r.useState)(e),
                                    d = _[0],
                                    E = _[1],
                                    A = (0, r.useState)(() => c(e, a, i)),
                                    F = A[0],
                                    g = A[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        m.current ? g(c(d, a, i)) : (m.current = !0);
                                    }, [i, d, a]),
                                    (0, r.useEffect)(() => {
                                        E(e);
                                    }, [e]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    s().createElement(u.Provider, { value: F }, n)
                                );
                            },
                            () => (0, r.useContext)(u),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        submit: e.createCallbackNoArgs('personalResults.battlePassProgress.onSubmitClick'),
                        invite: e.createCallbackNoArgs('playerBattleTypeStatus.onInviteToPlatoon'),
                    })),
                    Ku = qu[0],
                    Xu = qu[1];
                let Yu, Zu, Qu, Ju;
                var ea;
                (!(function (e) {
                    ((e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium'));
                })(Yu || (Yu = {})),
                    (function (e) {
                        ((e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen'));
                    })(Zu || (Zu = {})),
                    ((ea = Qu || (Qu = {})).AwaitSeason = 'awaitSeason'),
                    (ea.Bought = 'bought'),
                    (ea.Free = 'free'),
                    (ea.Completed = 'completed'),
                    (ea.CompletedRightNow = 'completedRightNow'),
                    (ea.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                    (ea.NoVehiclesBase = 'noVehiclesBase'),
                    (ea.ChapterNotChosen = 'chapterNotChosen'),
                    (function (e) {
                        ((e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay'));
                    })(Ju || (Ju = {})));
                const ta = (e, t, u = '') => {
                        const a = u.length > 0 ? `_${u}` : u,
                            n = e.$dyn(`c_${t}${a}`),
                            r = String(t).slice(-1),
                            s = e.$dyn(`default_${r}${a}`);
                        return n || s;
                    },
                    ua = (e, t, u) => {
                        const a = R.images.gui.maps.icons.battlePass.logo.chapterIcons,
                            n = t ? 'BP' : '',
                            r = `${((e) => {
                                switch (e) {
                                    case Yu.Micro:
                                        return 's';
                                    case Yu.Small:
                                        return 'm';
                                    default:
                                        return 'l';
                                }
                            })(u)}${n}`;
                        return { backgroundImage: `url(${ta(a, e, r)})` };
                    };
                let aa, na, ra, sa, ia, oa, la, ca;
                var ma, _a, da, Ea, Aa;
                let Fa, ga;
                (((Aa = aa || (aa = {})).Items = 'items'),
                    (Aa.Equipment = 'equipment'),
                    (Aa.Xp = 'xp'),
                    (Aa.XpFactor = 'xpFactor'),
                    (Aa.Blueprints = 'blueprints'),
                    (Aa.BlueprintsAny = 'blueprintsAny'),
                    (Aa.Goodies = 'goodies'),
                    (Aa.Berths = 'berths'),
                    (Aa.Slots = 'slots'),
                    (Aa.Tokens = 'tokens'),
                    (Aa.CrewSkins = 'crewSkins'),
                    (Aa.CrewBooks = 'crewBooks'),
                    (Aa.Customizations = 'customizations'),
                    (Aa.CreditsFactor = 'creditsFactor'),
                    (Aa.Tankman = 'tankman'),
                    (Aa.Tankwoman = 'tankwoman'),
                    (Aa.TankmenXp = 'tankmenXP'),
                    (Aa.TankmenXpFactor = 'tankmenXPFactor'),
                    (Aa.FreeXpFactor = 'freeXPFactor'),
                    (Aa.BattleToken = 'battleToken'),
                    (Aa.PremiumUniversal = 'premium_universal'),
                    (Aa.Gold = 'gold'),
                    (Aa.Credits = 'credits'),
                    (Aa.Crystal = 'crystal'),
                    (Aa.FreeXp = 'freeXP'),
                    (Aa.Premium = 'premium'),
                    (Aa.PremiumPlus = 'premium_plus'),
                    (Aa.BattlePassPoints = 'battlePassPoints'),
                    (Aa.BattlePassSelectToken = 'battlePassSelectToken'),
                    (Aa.BattlePassTicket = 'lootBox_commonTicket'),
                    (Aa.BattlePassTaler = 'bptaler'),
                    (Aa.StyleProgressToken = 'styleProgressToken'),
                    (Aa.TmanToken = 'tmanToken'),
                    (Aa.NaturalCover = 'naturalCover'),
                    (Aa.BpCoin = 'bpcoin'),
                    (Aa.BattlaPassFinalAchievement = 'dossier_achievement'),
                    (Aa.BattleBadge = 'dossier_badge'),
                    (Aa.BonusX5 = 'battle_bonus_x5'),
                    (Aa.CrewBonusX3 = 'crew_bonus_x3'),
                    (Aa.Vehicles = 'vehicles'),
                    (Aa.EpicSelectToken = 'epicSelectToken'),
                    (Aa.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                    (Aa.DeluxeGift = 'deluxe_gift'),
                    (Aa.BattleBoosterGift = 'battleBooster_gift'),
                    (Aa.ModernizedDevicesT1Gift = 'modernized_devices_t1_gift'),
                    (Aa.ModernizedDevicesT2Gift = 'modernized_devices_t2_gift'),
                    (Aa.ModernizedDevicesT3Gift = 'modernized_devices_t3_gift'),
                    (Aa.OptionalDevice = 'optionalDevice'),
                    (Aa.EquipCoin = 'equipCoin'),
                    (Aa.LootBox = 'lootBox'),
                    (Aa.BrCoin = 'brcoin'),
                    (Aa.Attachment = 'attachment'),
                    (Aa.Stamp = 'stamp'),
                    (Aa.WtEventLootbox = 'wtevent_lootBox'),
                    (Aa.WtEventTicket = 'wtevent_ticket'),
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
                    })(na || (na = {})),
                    ((Ea = ra || (ra = {})).Big = 'big'),
                    (Ea.Small = 'small'),
                    (Ea.Mini = 'mini'),
                    (Ea.S600x450 = 's600x450'),
                    (Ea.S400x300 = 's400x300'),
                    (Ea.S296x222 = 's296x222'),
                    (Ea.S232x174 = 's232x174'),
                    (Ea.S180x135 = 's180x135'),
                    (Ea.S128x100 = 's128x100'),
                    (Ea.S80x80 = 's80x80'),
                    (Ea.S64x64 = 's64x64'),
                    (Ea.S48x48 = 's48x48'),
                    ((da = sa || (sa = {})).MULTI = 'multi'),
                    (da.CURRENCY = 'currency'),
                    (da.PREMIUM_PLUS = 'premium_plus'),
                    (da.NUMBER = 'number'),
                    (da.STRING = 'string'),
                    ((_a = ia || (ia = {})).ATTACHMENT_RARE = 'rare'),
                    (_a.ATTACHMENT_EPIC = 'epic'),
                    (_a.ATTACHMENT_LEGENDARY = 'legendary'),
                    (_a.BATTLE_BOOSTER = 'battleBooster'),
                    (_a.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (_a.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (_a.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (_a.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (_a.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (_a.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (_a.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (_a.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (_a.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (_a.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (_a.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (_a.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    (_a.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                    (_a.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
                    ((oa || (oa = {})).BATTLE_BOOSTER = 'battleBooster'),
                    ((ma = la || (la = {})).ATTACHMENT_RARE = 'rare'),
                    (ma.ATTACHMENT_EPIC = 'epic'),
                    (ma.ATTACHMENT_LEGENDARY = 'legendary'),
                    (ma.BATTLE_BOOSTER = 'battleBooster'),
                    (ma.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (ma.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (ma.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (ma.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (ma.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (ma.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (ma.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (ma.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (ma.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (ma.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (ma.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (ma.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    (ma.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                    (ma.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(ca || (ca = {})),
                    aa.Attachment,
                    aa.Items,
                    aa.Equipment,
                    aa.Xp,
                    aa.XpFactor,
                    aa.Blueprints,
                    aa.BlueprintsAny,
                    aa.Goodies,
                    aa.Berths,
                    aa.Slots,
                    aa.Tokens,
                    aa.CrewSkins,
                    aa.CrewBooks,
                    aa.Customizations,
                    aa.CreditsFactor,
                    aa.TankmenXp,
                    aa.TankmenXpFactor,
                    aa.FreeXpFactor,
                    aa.BattleToken,
                    aa.LootBox,
                    aa.PremiumUniversal,
                    aa.NaturalCover,
                    aa.BpCoin,
                    aa.BattlePassSelectToken,
                    aa.BattlaPassFinalAchievement,
                    aa.BattleBadge,
                    aa.BattlePassTicket,
                    aa.BonusX5,
                    aa.CrewBonusX3,
                    aa.EpicSelectToken,
                    aa.Comp7TokenWeeklyReward,
                    aa.DeluxeGift,
                    aa.ModernizedDevicesT1Gift,
                    aa.ModernizedDevicesT2Gift,
                    aa.ModernizedDevicesT3Gift,
                    aa.BattleBoosterGift,
                    aa.OptionalDevice,
                    aa.Attachment,
                    aa.Stamp,
                    aa.WtEventLootbox,
                    aa.WtEventTicket,
                    aa.Gold,
                    aa.Credits,
                    aa.Crystal,
                    aa.FreeXp,
                    aa.BattlePassPoints,
                    aa.EquipCoin,
                    aa.PremiumPlus,
                    aa.Premium,
                    ra.Small,
                    ra.Big,
                    (function (e) {
                        ((e.Active = 'active'),
                            (e.Paused = 'paused'),
                            (e.Completed = 'completed'),
                            (e.NotStarted = 'notStarted'));
                    })(Fa || (Fa = {})),
                    (function (e) {
                        ((e.Vehicle = 'vehicle'), (e.Style = 'style'), (e.Tankman = 'tankman'));
                    })(ga || (ga = {})));
                var pa = u(8613);
                let ba;
                var Da;
                (Date.now(),
                    pa.Ew.getRegionalDateTime,
                    pa.Ew.getFormattedDateTime,
                    ((Da = ba || (ba = {})).style = 'style'),
                    (Da.tankman = 'tankman'),
                    ba.style,
                    ba.tankman);
                const Ba = (e, t) => {
                    const u = t.postfix ? `_${t.postfix}` : '';
                    return ((e) => {
                        const t = e.path.$dyn(`${e.name}_${e.id}`),
                            u = e.path.$dyn('default');
                        return t || u;
                    })(e).$dyn(`${t.name}${u}`);
                };
                let ha;
                !(function (e) {
                    ((e.Season = 'season'), (e.Chapter = 'chapter'));
                })(ha || (ha = {}));
                const Ca = {
                        base: 'Emblem_base_be',
                        progress: 'Emblem_progress_37',
                        progress__small: 'Emblem_progress__small_42',
                        progress__completed: 'Emblem_progress__completed_69',
                        hideProgress: 'Emblem_hideProgress_b4',
                        progress__hidden: 'Emblem_progress__hidden_6d',
                        image: 'Emblem_image_dc',
                        image__clickable: 'Emblem_image__clickable_b7',
                        image__micro: 'Emblem_image__micro_aa',
                        image__small: 'Emblem_image__small_ce',
                        extra: 'Emblem_extra_d4',
                        extra__micro: 'Emblem_extra__micro_f7',
                        extra__small: 'Emblem_extra__small_28',
                        hideLevel: 'Emblem_hideLevel_f2',
                        showLevel: 'Emblem_showLevel_c5',
                        hideLevelSmall: 'Emblem_hideLevelSmall_cc',
                        showLevelSmall: 'Emblem_showLevelSmall_31',
                        hideLevelMicro: 'Emblem_hideLevelMicro_15',
                        showLevelMicro: 'Emblem_showLevelMicro_bc',
                        showIcon: 'Emblem_showIcon_c2',
                        showIconSmall: 'Emblem_showIconSmall_1d',
                        showIconMicro: 'Emblem_showIconMicro_f8',
                    },
                    va = {
                        base: 'Label_base_85',
                        textWithBlend: 'Label_textWithBlend_07',
                        textWithBlend__show: 'Label_textWithBlend__show_fa',
                        show: 'Label_show_69',
                        textWithBlend__new: 'Label_textWithBlend__new_4a',
                        textWithBlend__hide: 'Label_textWithBlend__hide_f1',
                        hide: 'Label_hide_33',
                        textMask: 'Label_textMask_7f',
                        textMask__gold: 'Label_textMask__gold_71',
                        textMask__goldContrast: 'Label_textMask__goldContrast_05',
                        textMask__animated: 'Label_textMask__animated_38',
                        maskAppearance: 'Label_maskAppearance_26',
                        textMask__micro: 'Label_textMask__micro_37',
                        textMask__small: 'Label_textMask__small_54',
                        textMask__medium: 'Label_textMask__medium_eb',
                        textMask__large: 'Label_textMask__large_0a',
                        textMask__extraLarge: 'Label_textMask__extraLarge_4c',
                        text: 'Label_text_67',
                        text__micro: 'Label_text__micro_a4',
                        text__small: 'Label_text__small_e0',
                        text__large: 'Label_text__large_65',
                        text__extraLarge: 'Label_text__extraLarge_22',
                        text__blended: 'Label_text__blended_67',
                        text__filtered: 'Label_text__filtered_86',
                        text__rewardScreen: 'Label_text__rewardScreen_68',
                        textAppearance: 'Label_textAppearance_31',
                        text__show: 'Label_text__show_95',
                        text__hide: 'Label_text__hide_37',
                        text__hideWithDelay: 'Label_text__hideWithDelay_53',
                        text__new: 'Label_text__new_a0',
                        hideLevel: 'Label_hideLevel_61',
                        showLevel: 'Label_showLevel_55',
                        hideLevelSmall: 'Label_hideLevelSmall_9d',
                        showLevelSmall: 'Label_showLevelSmall_96',
                        hideLevelMicro: 'Label_hideLevelMicro_9e',
                        showLevelMicro: 'Label_showLevelMicro_50',
                        showIcon: 'Label_showIcon_0f',
                        showIconSmall: 'Label_showIconSmall_96',
                        hideProgress: 'Label_hideProgress_0c',
                        showIconMicro: 'Label_showIconMicro_1e',
                    },
                    fa = ({
                        level: e,
                        size: t,
                        isGold: u,
                        isForRewardScreen: a,
                        curState: n,
                        isFirstLevel: r,
                        showProgressionCompleted: i,
                    }) => {
                        const o = g()(va.base, va[`base__${t}`]),
                            l = g()(
                                va.text,
                                va.text__filtered,
                                va[`text__${t}`],
                                va[`text__${n}`],
                                i && va.text__hideWithDelay,
                                r && va.text__new,
                                a && va.text__rewardScreen,
                            ),
                            c = g()(
                                va.textWithBlend,
                                r && va.text__new,
                                i && va.text__hideWithDelay,
                                va[`textWithBlend__${n}`],
                            ),
                            m = g()(va.text, va.text__blended, va[`text__${t}`], a && va.text__rewardScreen),
                            _ = g()(
                                va.textMask,
                                u && va.textMask__gold,
                                a && va.textMask__animated,
                                u && a && va.textMask__goldContrast,
                                va[`textMask__${t}`],
                            );
                        return s().createElement(
                            'div',
                            { className: o },
                            s().createElement('div', { className: l }, e),
                            s().createElement(
                                'div',
                                { className: c },
                                s().createElement('div', { className: m }, e),
                                s().createElement('div', { className: _ }),
                            ),
                        );
                    },
                    wa = {
                        label: 'EmblemLabels_label_14',
                        label__small: 'EmblemLabels_label__small_a3',
                        label__micro: 'EmblemLabels_label__micro_4b',
                        label__hasProgress: 'EmblemLabels_label__hasProgress_26',
                        label__hasProgressProgression: 'EmblemLabels_label__hasProgressProgression_77',
                        label__hasProgressSmall: 'EmblemLabels_label__hasProgressSmall_c1',
                        label__show: 'EmblemLabels_label__show_3d',
                        showLevel: 'EmblemLabels_showLevel_04',
                        label__showSmall: 'EmblemLabels_label__showSmall_7e',
                        showLevelSmall: 'EmblemLabels_showLevelSmall_2f',
                        label__hide: 'EmblemLabels_label__hide_28',
                        hideLevel: 'EmblemLabels_hideLevel_be',
                        label_hideSmall: 'EmblemLabels_label_hideSmall_65',
                        hideLevelSmall: 'EmblemLabels_hideLevelSmall_c1',
                        label__hideWithDelay: 'EmblemLabels_label__hideWithDelay_68',
                        label__hideWithDelaySmall: 'EmblemLabels_label__hideWithDelaySmall_36',
                        label__new: 'EmblemLabels_label__new_d7',
                        label__newSmall: 'EmblemLabels_label__newSmall_c1',
                        label__disabled: 'EmblemLabels_label__disabled_b6',
                        icon: 'EmblemLabels_icon_40',
                        icon__small: 'EmblemLabels_icon__small_f3',
                        icon__micro: 'EmblemLabels_icon__micro_cf',
                        icon__animated: 'EmblemLabels_icon__animated_09',
                        showIcon: 'EmblemLabels_showIcon_d3',
                        icon__animatedSmall: 'EmblemLabels_icon__animatedSmall_e4',
                        icon__animatedMicro: 'EmblemLabels_icon__animatedMicro_10',
                        showIconSmall: 'EmblemLabels_showIconSmall_cb',
                        hideLevelMicro: 'EmblemLabels_hideLevelMicro_65',
                        showLevelMicro: 'EmblemLabels_showLevelMicro_ab',
                        hideProgress: 'EmblemLabels_hideProgress_7f',
                        showIconMicro: 'EmblemLabels_showIconMicro_5c',
                    },
                    ya = (0, r.memo)(
                        ({
                            newLevel: e,
                            level: t,
                            size: u,
                            battlePassState: a,
                            hasProgression: n,
                            isGolden: r,
                            labelAnimation: i,
                            newLabelAnimation: o,
                            isChapterChosen: l = !1,
                            chapterID: c = 0,
                            seasonNum: m = -1,
                            isProgressionCompleted: _ = !1,
                            hasBeenActive: d = !1,
                            isChapterSelection: E = !1,
                            isProgression: A = !1,
                        }) => {
                            let F = '',
                                p = '';
                            u === Yu.Small
                                ? ((F = 'Small'), (p = '__small'))
                                : u === Yu.Micro && ((F = 'Micro'), (p = '__micro'));
                            const b = a === Qu.SwitchedChapterRightNow,
                                D = a === Qu.CompletedRightNow,
                                B = ((e, t, u, a, n) => (e || n ? t || !u : t || !a))(E, _, d, l, A),
                                h = !A && !E;
                            return s().createElement(
                                s().Fragment,
                                null,
                                B
                                    ? s().createElement('div', {
                                          className: g()(wa.icon, p && wa[`icon${p}`], D && wa[`icon__animated${F}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      t = ((e, t) => {
                                                          const u = e ? 'BP' : '';
                                                          return `${((e) => {
                                                              switch (e) {
                                                                  case Yu.Small:
                                                                      return 'l';
                                                                  case Yu.Micro:
                                                                      return 's';
                                                                  default:
                                                                      return 'xl';
                                                              }
                                                          })(t)}${u}`;
                                                      })(r, u);
                                                  if (h) {
                                                      if (_) {
                                                          const u = { path: e.icon, name: ha.Season, id: m };
                                                          return Ba(u, { name: 'icon', postfix: t });
                                                      }
                                                      if (!l) return e.$dyn('not_chosen');
                                                  }
                                                  return ta(e.chapterIcons, c, t);
                                              })()})`,
                                          },
                                      })
                                    : s().createElement(
                                          'div',
                                          {
                                              className: g()(
                                                  wa.label,
                                                  wa[`label${p}`],
                                                  b && wa.label__new,
                                                  b && wa[`label__new${F}`],
                                                  !D && _ && wa.label__disabled,
                                                  wa[`label__${i}${F}`],
                                                  n && wa[`label__hasProgress${F}`],
                                                  n && wa[`label__hasProgress${F}${A ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          s().createElement(fa, {
                                              level: t,
                                              size: u,
                                              isGold: r,
                                              isFirstLevel: b,
                                              curState: i,
                                              showProgressionCompleted: D,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: g()(
                                                wa.label,
                                                wa[`label${p}`],
                                                b && wa.label__new,
                                                b && wa[`label__new${F}`],
                                                wa[`label__${o}${F}`],
                                                n && wa[`label__hasProgress${F}`],
                                            ),
                                        },
                                        s().createElement(fa, {
                                            level: e,
                                            size: u,
                                            isGold: r,
                                            isFirstLevel: b,
                                            curState: o,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    ),
                    Sa = {
                        base: 'EmblemProgressBar_base_5c',
                        base__small: 'EmblemProgressBar_base__small_6c',
                        base__completed: 'EmblemProgressBar_base__completed_6d',
                        hideProgress: 'EmblemProgressBar_hideProgress_18',
                        base__completePostProgression: 'EmblemProgressBar_base__completePostProgression_20',
                        base__hidden: 'EmblemProgressBar_base__hidden_8b',
                        hideLevel: 'EmblemProgressBar_hideLevel_1e',
                        showLevel: 'EmblemProgressBar_showLevel_5d',
                        hideLevelSmall: 'EmblemProgressBar_hideLevelSmall_ae',
                        showLevelSmall: 'EmblemProgressBar_showLevelSmall_df',
                        hideLevelMicro: 'EmblemProgressBar_hideLevelMicro_13',
                        showLevelMicro: 'EmblemProgressBar_showLevelMicro_ae',
                        showIcon: 'EmblemProgressBar_showIcon_55',
                        showIconSmall: 'EmblemProgressBar_showIconSmall_26',
                        showIconMicro: 'EmblemProgressBar_showIconMicro_78',
                    },
                    Ta = (0, r.memo)(
                        ({
                            progression: e,
                            isNoVehicles: t = !1,
                            showProgressionCompleted: u,
                            isProgressionCompleted: a,
                            size: n,
                        }) => {
                            const r = g()(
                                Sa.base,
                                Sa[`base__${n}`],
                                u && Sa.base__completed,
                                !u && a && Sa.base__hidden,
                            );
                            return s().createElement(
                                'div',
                                { className: r },
                                s().createElement($u, {
                                    key: e.to,
                                    size: _u.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: t,
                                }),
                            );
                        },
                    );
                function Pa() {
                    return (
                        (Pa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Pa.apply(this, arguments)
                    );
                }
                let La, Ra;
                (!(function (e) {
                    ((e.Closed = 'closed'), (e.Open = 'open'));
                })(La || (La = {})),
                    (function (e) {
                        ((e.Gold = 'gold'), (e.Completed = 'completed'), (e.Initial = 'initial'));
                    })(Ra || (Ra = {})));
                const xa = (e, t, u, a, n) => {
                        const r = { path: R.images.gui.maps.icons.battlePass.logo.emblem, name: ha.Chapter, id: a },
                            s = e ? La.Open : La.Closed,
                            i = ((e, t) =>
                                e
                                    ? Ra.Gold
                                    : t === Qu.Completed || t === Qu.CompletedRightNow
                                      ? Ra.Completed
                                      : Ra.Initial)(t, u),
                            o = n.length > 0 ? `_${n}` : '';
                        return { backgroundImage: `url(${Ba(r, { name: 'emblem', postfix: `${s}_${i}${o}` })})` };
                    },
                    Na = (e, t) => {
                        const u = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: ha.Season, id: e };
                        return { backgroundImage: `url(${Ba(u, { name: 'extra', postfix: t })})` };
                    },
                    ka = (0, r.memo)((e) => {
                        const t = e.progression,
                            u = e.size,
                            a = e.battlePassState,
                            n = e.hasBattlePass,
                            r = e.isChapterChosen,
                            i = e.hasBeenActive,
                            o = void 0 !== i && i,
                            l = e.isChapterSelection,
                            c = void 0 !== l && l,
                            m = e.isOpen,
                            _ = void 0 !== m && m,
                            d = e.isProgression,
                            E = void 0 !== d && d,
                            A = e.showProgressBar,
                            F = void 0 === A || A,
                            p = e.isExtra,
                            b = void 0 !== p && p,
                            D = e.chapterID,
                            B = e.seasonNum,
                            h = e.clickable,
                            C = void 0 === h || h,
                            v = ((e) => {
                                switch (e) {
                                    case Yu.Small:
                                        return 'small';
                                    case Yu.Micro:
                                        return 'micro';
                                    default:
                                        return '';
                                }
                            })(u),
                            f = a === Qu.CompletedRightNow,
                            w = n || a === Qu.Bought,
                            y = (a === Qu.Completed || f) && w,
                            S = (a === Qu.Completed || f) && !w,
                            T = y || S,
                            P = void 0 !== t.from,
                            L = F && ((P && r) || o);
                        return s().createElement(
                            'div',
                            { className: Ca.base },
                            b &&
                                s().createElement('div', {
                                    className: g()(Ca.extra, v && Ca[`extra__${v}`]),
                                    style: Na(B, v),
                                }),
                            s().createElement(
                                'div',
                                {
                                    className: g()(Ca.image, v && Ca[`image__${v}`], C && Ca.image__clickable),
                                    style: xa(_, w, a, D, v),
                                },
                                a !== Qu.AwaitSeason &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(
                                            ya,
                                            Pa(
                                                {
                                                    hasProgression: P,
                                                    isGolden: w,
                                                    isProgressionCompleted: T,
                                                    isChapterChosen: r,
                                                    hasBeenActive: o,
                                                    isChapterSelection: c,
                                                    isProgression: E,
                                                },
                                                e,
                                                t,
                                            ),
                                        ),
                                        L &&
                                            s().createElement(Ta, {
                                                key: t.to,
                                                progression: t,
                                                showProgressionCompleted: f,
                                                isProgressionCompleted: T,
                                                size: u,
                                            }),
                                    ),
                            ),
                        );
                    }),
                    Ma = (e, t) => {
                        const u = R.images.gui.maps.icons.battlePass.logo.flag;
                        return { backgroundImage: `url(${ta(u, e, t ? 's' : 'm')})` };
                    },
                    Oa = (0, zu.Pi)(() => {
                        const e = Xu(),
                            t = e.model,
                            u = e.controls,
                            a = t.battlePassProgress.get(),
                            n = a.hasExtra,
                            r = a.freePoints,
                            i = a.chapterID,
                            o = a.currentLevel,
                            l = a.currentLevelPoints,
                            c = a.isBattlePassPurchased,
                            m = a.progressionState,
                            _ = a.chapterState,
                            d = a.seasonNum,
                            E = { level: o, from: l },
                            A = m === Nt,
                            F = 0 !== i && _ === kt.Active,
                            p = ((e) => void 0 !== e.from && (e.level > 1 || e.from > 0))(E),
                            b = p && F,
                            B = A ? Qu.Completed : b ? (c ? Qu.Bought : Qu.Free) : Qu.ChapterNotChosen,
                            h = C().mediaSize <= D.Small,
                            v = h ? Yu.Micro : Yu.Small,
                            f = B === Qu.Completed,
                            w = b && !f,
                            y = B === Qu.Bought,
                            S = A && r > 0;
                        return s().createElement(
                            'div',
                            {
                                className: 'BattlePassEmblem_base_fb',
                                onClick: u.submit,
                                onMouseDown: () => {
                                    M.playClick();
                                },
                                onMouseOver: () => {
                                    M.playHighlight();
                                },
                            },
                            !A &&
                                b &&
                                s().createElement('div', {
                                    className: g()(
                                        'BattlePassEmblem_flag_a4',
                                        w && 'BattlePassEmblem_flag__isChapterChosen_ab',
                                    ),
                                    style: Ma(i, h),
                                }),
                            s().createElement(
                                'div',
                                { className: 'BattlePassEmblem_emblem_ec' },
                                s().createElement(ka, {
                                    progression: E,
                                    size: v,
                                    battlePassState: B,
                                    hasBattlePass: c,
                                    isChapterChosen: F,
                                    isProgression: !1,
                                    chapterID: i,
                                    seasonNum: d,
                                    hasBeenActive: b,
                                    showProgressBar: !1,
                                    isOpen: w || S,
                                    isExtra: n,
                                    clickable: !1,
                                }),
                                w &&
                                    s().createElement('div', {
                                        className: 'BattlePassEmblem_chapterLogoIcon_95',
                                        style: ua(i, y, v),
                                    }),
                                S && s().createElement('div', { className: 'BattlePassEmblem_freePoints_0d' }, r),
                            ),
                        );
                    }),
                    Ia = {
                        base: 'BattlePassWidget_base_8d',
                        content: 'BattlePassWidget_content_e3',
                        base__progress: 'BattlePassWidget_base__progress_c7',
                        title: 'BattlePassWidget_title_82',
                        base__progressionCompleted: 'BattlePassWidget_base__progressionCompleted_cf',
                        base__chapterNotChosen: 'BattlePassWidget_base__chapterNotChosen_94',
                        progressionContainer: 'BattlePassWidget_progressionContainer_cb',
                        progressionBar: 'BattlePassWidget_progressionBar_d9',
                        achievedPoints: 'BattlePassWidget_achievedPoints_00',
                        plus: 'BattlePassWidget_plus_41',
                        pointsStats: 'BattlePassWidget_pointsStats_32',
                        pointsMax: 'BattlePassWidget_pointsMax_c1',
                        icon: 'BattlePassWidget_icon_62',
                        progressionCompleted: 'BattlePassWidget_progressionCompleted_a9',
                        chapterNotChosen: 'BattlePassWidget_chapterNotChosen_a9',
                        notUsedPoints: 'BattlePassWidget_notUsedPoints_c8',
                    },
                    Wa = (0, zu.Pi)(({ animationTrigger: e, isAnimationSkipped: t }) => {
                        const u = Xu().model.battlePassProgress.get(),
                            a = u.maxPoints,
                            n = u.earnedPoints,
                            i = u.currentLevelPoints,
                            o = u.progressionState,
                            l = u.chapterID,
                            c = u.chapterState,
                            m = u.freePoints,
                            _ = R.strings.battle_royale.battleResult.battlePassWidget,
                            d = (0, r.useState)(Hu.delta.duration),
                            E = d[0],
                            A = d[1],
                            F = (0, r.useState)(!0),
                            p = F[0],
                            b = F[1],
                            D = Boolean(n),
                            B = o === Nt,
                            h = 0 !== l && c === kt.Active,
                            C = B
                                ? _.tooltips.progressionCompleted()
                                : h
                                  ? _.tooltips.inProgress()
                                  : _.tooltips.chapterNotChosen(),
                            v = Object.assign({}, Hu, { freezed: p, delta: { duration: E, delay: 0 } });
                        ((0, r.useEffect)(() => {
                            if (D && e && !t)
                                return (
                                    b(!1),
                                    k(R.sounds.bp_progress_bar_start()),
                                    Ht(() => {
                                        k(R.sounds.bp_progress_bar_stop());
                                    }, Hu.delta.duration)
                                );
                        }, [e, t, D]),
                            (0, r.useEffect)(() => {
                                D && t && (A(0), k(R.sounds.bp_progress_bar_stop()), e || b(!1));
                            }, [e, t, D]));
                        const f = g()(
                            Ia.base,
                            Ia[`base__${o}`],
                            !B && h && Ia.base__progress,
                            !B && !h && Ia.base__chapterNotChosen,
                        );
                        return s().createElement(
                            'div',
                            { className: f },
                            s().createElement(
                                Et,
                                { body: C },
                                s().createElement('div', null, s().createElement(Oa, null)),
                            ),
                            s().createElement(
                                'div',
                                { className: Ia.content },
                                s().createElement('div', { className: Ia.title }, _.title()),
                                !B &&
                                    !h &&
                                    s().createElement(
                                        'div',
                                        { className: Ia.chapterNotChosen },
                                        s().createElement(cu, {
                                            classMix: Ia.chapterText,
                                            text: _.chapterNotChosen(),
                                            binding: {
                                                points: s().createElement('span', { className: Ia.notUsedPoints }, m),
                                                icon: s().createElement('span', { className: Ia.icon }),
                                            },
                                        }),
                                    ),
                                B &&
                                    s().createElement(
                                        'div',
                                        { className: Ia.progressionCompleted },
                                        _.progressionCompleted(),
                                    ),
                                !B &&
                                    h &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(
                                            'div',
                                            { className: Ia.progressionContainer },
                                            s().createElement(
                                                'div',
                                                { className: Ia.progressionBar },
                                                s().createElement($u, {
                                                    deltaFrom: i - n,
                                                    value: i,
                                                    maxValue: a,
                                                    animationSettings: v,
                                                }),
                                            ),
                                            D &&
                                                s().createElement(
                                                    'div',
                                                    { className: Ia.achievedPoints },
                                                    s().createElement('span', { className: Ia.plus }, '+'),
                                                    n,
                                                ),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: Ia.pointsStats },
                                            i,
                                            '/',
                                            s().createElement('span', { className: Ia.pointsMax }, a),
                                            s().createElement('span', { className: Ia.icon }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Ha = 'Result_widget_14',
                    $a = 'ResultAnimations_baseEnterDone_a9',
                    za = { enterActive: 'ResultAnimations_baseEnterActive_7d', enterDone: $a },
                    Ga = { enterActive: 'ResultAnimations_itemsBase_c0', enterDone: $a },
                    Ua = { enterActive: 'ResultAnimations_ribbon_0a', enterDone: $a },
                    ja = { enterActive: 'ResultAnimations_battlePassWidget_f9', enterDone: $a },
                    Va = { enterActive: 'ResultAnimations_battleQuetsWidget_57', enterDone: $a },
                    qa = ['children'];
                function Ka() {
                    return (
                        (Ka =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ka.apply(this, arguments)
                    );
                }
                const Xa = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, qa);
                        return s().createElement(
                            ct,
                            Ka(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                u,
                            ),
                            t,
                        );
                    },
                    Ya = (0, r.memo)(({ questCompleted: e }) => {
                        const t = (0, r.useMemo)(() => ({ tooltipId: 'QuestCompletedTooltip' }), []),
                            u = R.strings.battle_royale.battleResult.battleQuestsWidget;
                        return s().createElement(
                            L,
                            null,
                            s().createElement(
                                Xa,
                                { args: t, isEnabled: !0 },
                                s().createElement(
                                    'div',
                                    { className: 'BattleQuestsWidget_base_50' },
                                    s().createElement(
                                        'div',
                                        { className: 'BattleQuestsWidget_emblemContainer_d6' },
                                        s().createElement('div', { className: 'BattleQuestsWidget_glow_78' }),
                                        s().createElement('div', { className: 'BattleQuestsWidget_emblem_13' }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: 'BattleQuestsWidget_content_f2' },
                                        s().createElement(
                                            'div',
                                            { className: 'BattleQuestsWidget_title_4c' },
                                            u.title(),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: 'BattleQuestsWidget_questsCompleteContainer_7d' },
                                            s().createElement(
                                                'div',
                                                { className: 'BattleQuestsWidget_questsComplete_82' },
                                                Bt(u.questsComplete(), { count: e }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                var Za;
                !(function (e) {
                    ((e[(e.TitleEnter = 0)] = 'TitleEnter'),
                        (e[(e.StatsEnter = 1)] = 'StatsEnter'),
                        (e[(e.RibbonEnter = 2)] = 'RibbonEnter'),
                        (e[(e.BattleRewardsEnter = 3)] = 'BattleRewardsEnter'),
                        (e[(e.ProgressEnter = 4)] = 'ProgressEnter'),
                        (e[(e.AnimationFinished = 5)] = 'AnimationFinished'));
                })(Za || (Za = {}));
                const Qa = s().memo(
                        ({
                            onAnimationComplete: e,
                            animationTrigger: t,
                            isAnimationSkipped: u,
                            isWinner: a,
                            isFirstPlace: n,
                        }) => {
                            const i = Ee('model.personalResults'),
                                o = i.finishResultLabel,
                                l = i.vehicleName,
                                c = i.vehicleType,
                                m = i.statsList,
                                _ = i.place,
                                d = i.hasPremium,
                                E = i.questCompleted,
                                A = i.battleRewardsList,
                                F = i.battleRewardsListWithPremium,
                                p = i.battlePassProgress,
                                b = 'disabled' !== p.battlePassState,
                                D = d
                                    ? 'Result_battleRewardsItemStartStatePremium_88'
                                    : 'Result_battleRewardsItemStartState_71',
                                B = (0, r.useState)(-1),
                                h = B[0],
                                C = B[1],
                                v = (0, r.useCallback)(() => {
                                    if (u) return;
                                    let t = h + 1;
                                    switch (t) {
                                        case Za.ProgressEnter:
                                            0 === p.earnedPoints && (t += 1);
                                            break;
                                        case Za.RibbonEnter:
                                            k(R.sounds.BR_result_redtape());
                                    }
                                    (t === Za.AnimationFinished && e && e(), C(t));
                                }, [u, h, p.earnedPoints, e]);
                            ((0, r.useEffect)(() => {
                                t && !u && C(0);
                            }, [t, u]),
                                (0, r.useEffect)(() => {
                                    u && C(Za.AnimationFinished);
                                }, [u]));
                            const f = l && systemLocale.toUpperCase(l);
                            return s().createElement(
                                'div',
                                {
                                    className: g()(
                                        'Result_base_82',
                                        a && 'Result_base__win_38',
                                        !a && 'Result_base__lose_2b',
                                    ),
                                },
                                s().createElement(
                                    'div',
                                    { className: 'Result_title_19' },
                                    s().createElement(Yt, {
                                        finishResultLabel: o,
                                        isFirstPlace: n,
                                        place: _,
                                        isWinner: a,
                                        vehicleType: c,
                                        vehicleName: f,
                                        animationTrigger: h >= Za.TitleEnter,
                                        isAnimationSkipped: u,
                                        onAnimationComplete: v,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'Result_content_de' },
                                    s().createElement(Wt, {
                                        statsList: m,
                                        animationTrigger: h >= Za.StatsEnter,
                                        isAnimationSkipped: u,
                                        onAnimationComplete: v,
                                        itemStartState: 'Result_statItemStartState_1f',
                                        itemFinishState: Ga,
                                        transitionTimeout: 200,
                                        isWinner: a,
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: 'Result_ribbon_9a' },
                                        s().createElement(
                                            Ae.Z,
                                            {
                                                timeout: 500,
                                                in: h >= Za.RibbonEnter,
                                                enter: !u,
                                                classNames: Ua,
                                                onEntered: v,
                                            },
                                            s().createElement(
                                                'div',
                                                { className: 'Result_ribbonComponent_d3' },
                                                s().createElement(ru, {
                                                    battleRewardsListWithPremium: F,
                                                    isWinner: a,
                                                    hasPremium: d,
                                                }),
                                            ),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: 'Result_battleRewardsList_e0' },
                                            s().createElement(lu, {
                                                battleRewardsList: A,
                                                animationTrigger: h >= Za.BattleRewardsEnter,
                                                isAnimationSkipped: u,
                                                onAnimationComplete: v,
                                                itemStartState: D,
                                                itemFinishState: za,
                                                transitionTimeout: 200,
                                            }),
                                        ),
                                    ),
                                    s().createElement(
                                        'div',
                                        {
                                            className: g()(
                                                'Result_widgetsContainer_70',
                                                u || (h >= Za.ProgressEnter && 'Result_widgetsContainer__hoverable_0f'),
                                            ),
                                        },
                                        b &&
                                            s().createElement(
                                                Ae.Z,
                                                {
                                                    timeout: 500,
                                                    in: h >= Za.ProgressEnter,
                                                    enter: !u,
                                                    classNames: ja,
                                                    onEntered: v,
                                                },
                                                s().createElement(
                                                    'div',
                                                    { className: Ha },
                                                    s().createElement(Wa, {
                                                        animationTrigger: h >= Za.AnimationFinished,
                                                        isAnimationSkipped: u,
                                                    }),
                                                ),
                                            ),
                                        E > 0 &&
                                            s().createElement(
                                                L,
                                                null,
                                                s().createElement(
                                                    Ae.Z,
                                                    {
                                                        timeout: 500,
                                                        in: h >= Za.ProgressEnter,
                                                        enter: !u,
                                                        classNames: Va,
                                                        onEntered: v,
                                                    },
                                                    s().createElement(
                                                        'div',
                                                        { className: g()(Ha, b && 'Result_widget__battleQuests_c3') },
                                                        s().createElement(Ya, { questCompleted: E }),
                                                    ),
                                                ),
                                            ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Ja = {
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
                let en, tn;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(en || (en = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(tn || (tn = {})));
                const un = ({
                    children: e,
                    size: t,
                    disabled: u,
                    mixClass: a,
                    onMouseEnter: n,
                    onMouseMove: i,
                    onMouseDown: o,
                    onMouseUp: l,
                    onMouseLeave: c,
                    onClick: m,
                    isFocused: _ = !1,
                    type: d = en.primary,
                    soundHover: E = 'highlight',
                    soundClick: A = 'play',
                }) => {
                    const F = (0, r.useRef)(null),
                        p = (0, r.useState)(_),
                        b = p[0],
                        D = p[1],
                        B = (0, r.useState)(!1),
                        h = B[0],
                        C = B[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                b && null !== F.current && !F.current.contains(e.target) && D(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [b]),
                        (0, r.useEffect)(() => {
                            D(_);
                        }, [_]),
                        s().createElement(
                            'div',
                            {
                                ref: F,
                                className: g()(
                                    Ja.base,
                                    Ja[`base__${d}`],
                                    u && Ja.base__disabled,
                                    t && Ja[`base__${t}`],
                                    b && Ja.base__focus,
                                    h && Ja.base__highlightActive,
                                    a,
                                ),
                                onMouseEnter: function (e) {
                                    u || (null !== E && k(E), n && n(e));
                                },
                                onMouseMove: function (e) {
                                    i && i(e);
                                },
                                onMouseUp: function (e) {
                                    u || (l && l(e), C(!1));
                                },
                                onMouseDown: function (e) {
                                    u ||
                                        (null !== A && k(A),
                                        o && o(e),
                                        _ && (u || (F.current && (F.current.focus(), D(!0)))),
                                        C(!0));
                                },
                                onMouseLeave: function (e) {
                                    u || (c && c(e), C(!1));
                                },
                                onClick: function (e) {
                                    u || (m && m(e));
                                },
                            },
                            d !== en.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: Ja.back }),
                                    s().createElement('span', { className: Ja.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: g()(Ja.state, Ja.state__default) },
                                s().createElement('span', { className: Ja.stateDisabled }),
                                s().createElement('span', { className: Ja.stateHighlightHover }),
                                s().createElement('span', { className: Ja.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: Ja.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                let an;
                !(function (e) {
                    ((e.Solo = 'solo'), (e.RandomPlatoon = 'randomPlatoon'), (e.Platoon = 'platoon'));
                })(an || (an = {}));
                const nn = R.strings.battle_royale.battleResult.playerBattleTypeStatus,
                    rn = R.images.gui.maps.icons.battleRoyale.battleResult.battle_type,
                    sn = ({ userName: e, clanAbbrev: t, battleType: u }) =>
                        s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(
                                'div',
                                { className: 'Platoon_container_57' },
                                s().createElement(
                                    'div',
                                    { className: 'Platoon_header_53' },
                                    ((e, t) => {
                                        const u = e.$dyn(t);
                                        if ('string' == typeof u) return u;
                                        throw new Error(`ReadString  ${t} is invalid `);
                                    })(nn.header, u),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'Platoon_userInfo_31' },
                                    s().createElement('div', { className: 'Platoon_name_da' }, e),
                                    t &&
                                        s().createElement(cu, {
                                            text: nn.clan(),
                                            binding: { clanAbbrev: t },
                                            classMix: 'Platoon_clan_c8',
                                        }),
                                ),
                            ),
                            s().createElement('div', {
                                style: { backgroundImage: `url(${rn.$dyn(u)})` },
                                className: 'Platoon_icon_3b',
                            }),
                        ),
                    on = R.strings.battle_royale.battleResult.playerBattleTypeStatus,
                    ln = (0, zu.Pi)(() => {
                        const e = Xu(),
                            t = e.model,
                            u = e.controls,
                            a = t.battleTypeInfo.get(),
                            n = a.battleType,
                            r = a.isPlatoonWindowOpen,
                            i = t.userInfo.get(),
                            o = i.userName,
                            l = i.clanAbbrev;
                        return s().createElement(
                            'div',
                            { className: 'PlayerBattleTypeStatus_base_e7' },
                            (() => {
                                switch (n) {
                                    case an.Solo:
                                        return s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement(
                                                'div',
                                                { className: 'PlayerBattleTypeStatus_container_fa' },
                                                s().createElement(
                                                    'div',
                                                    { className: 'PlayerBattleTypeStatus_header_76' },
                                                    on.header.solo(),
                                                ),
                                                s().createElement(
                                                    'div',
                                                    { className: 'PlayerBattleTypeStatus_text_eb' },
                                                    on.text.solo(),
                                                ),
                                            ),
                                            s().createElement('div', { className: 'PlayerBattleTypeStatus_icon_4c' }),
                                        );
                                    case an.RandomPlatoon:
                                        return s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement(sn, { userName: o, clanAbbrev: l, battleType: n }),
                                            s().createElement(
                                                un,
                                                {
                                                    type: en.primary,
                                                    size: tn.medium,
                                                    mixClass: 'PlayerBattleTypeStatus_button_92',
                                                    onClick: u.invite,
                                                    disabled: r,
                                                },
                                                on.button.text(),
                                            ),
                                        );
                                    case an.Platoon:
                                        return s().createElement(sn, { userName: o, clanAbbrev: l, battleType: n });
                                    default:
                                        return (console.error(`Invalid battle type ${n}`), null);
                                }
                            })(),
                        );
                    }),
                    cn = [1, 2, 3, 4, 5];
                let mn;
                var _n;
                (!(function (e) {
                    ((e.Results = 'results'), (e.Leaderboard = 'leaderboard'));
                })(mn || (mn = {})),
                    (function (e) {
                        ((e[(e.BackgroundEnter = 0)] = 'BackgroundEnter'),
                            (e[(e.TabBarEnter = 1)] = 'TabBarEnter'),
                            (e[(e.ResultContentEnter = 2)] = 'ResultContentEnter'),
                            (e[(e.BottomComponentsEnter = 3)] = 'BottomComponentsEnter'),
                            (e[(e.AnimationFinished = 4)] = 'AnimationFinished'));
                    })(_n || (_n = {})));
                const dn = () => {
                    const e = Ee('model').mapName,
                        t = Ee('model.personalResults').place,
                        u = (0, r.useState)(mn.Results),
                        a = u[0],
                        n = u[1],
                        i = (0, r.useState)({ animationStage: -1, isSkipped: !1 }),
                        o = i[0],
                        l = i[1];
                    (0, r.useEffect)(
                        () =>
                            ae(() => {
                                l({ animationStage: 0, isSkipped: !1 });
                            }),
                        [],
                    );
                    const c = (0, r.useCallback)(() => {
                            ((o.animationStage = _n.AnimationFinished), (o.isSkipped = !0), l(Object.assign({}, o)));
                        }, [o]),
                        m = (0, r.useCallback)(
                            (e) => {
                                const t = e.currentTarget.getAttribute('tab-key');
                                (o.isSkipped || c(), n(t));
                            },
                            [o.isSkipped, c],
                        ),
                        _ = (0, r.useCallback)(() => {
                            (0, re.Sy)();
                        }, []),
                        d = (0, r.useCallback)(() => {
                            o.isSkipped ? _() : c();
                        }, [o.isSkipped, _, c]);
                    ie(ne.n.ESCAPE, d);
                    const E = (0, r.useCallback)(() => {
                            o.isSkipped ||
                                ((o.animationStage += 1),
                                o.animationStage === _n.AnimationFinished
                                    ? (o.isSkipped = !0)
                                    : l(Object.assign({}, o)));
                        }, [o]),
                        A = cn.includes(t),
                        F = 1 === t;
                    return s().createElement(
                        'div',
                        { className: 'App_base_d1' },
                        s().createElement(
                            Ae.Z,
                            {
                                in: o.animationStage >= _n.BackgroundEnter,
                                timeout: 500,
                                classNames: De,
                                enter: !o.isSkipped,
                                onEntered: E,
                            },
                            s().createElement(
                                'div',
                                { className: g()('App_background_16', A && 'App_background__win_0e') },
                                s().createElement('div', { className: 'App_shadow_f4' }),
                                s().createElement('div', { className: 'App_radialShadow_90' }),
                            ),
                        ),
                        s().createElement(
                            'div',
                            { className: g()(Fe, a === mn.Results && ge) },
                            s().createElement(Qa, {
                                animationTrigger: o.animationStage >= _n.ResultContentEnter,
                                isAnimationSkipped: o.isSkipped,
                                onAnimationComplete: E,
                                isWinner: A,
                                isFirstPlace: F,
                            }),
                        ),
                        s().createElement(
                            'div',
                            { className: g()(Fe, a === mn.Leaderboard && ge) },
                            s().createElement(xt, null),
                        ),
                        s().createElement(
                            Ae.Z,
                            {
                                timeout: 500,
                                in: o.animationStage >= _n.TabBarEnter,
                                enter: !o.isSkipped,
                                className: 'App_horizontalTabs_b9',
                                classNames: Be,
                                onEntered: E,
                            },
                            s().createElement(
                                G,
                                { isTabsCentered: !0 },
                                s().createElement(
                                    'div',
                                    { 'tabs-role': W.LIST },
                                    s().createElement(
                                        Q,
                                        { 'tabs-role': W.TAB, 'tab-key': mn.Results, onClick: m },
                                        R.strings.battle_royale.battleResult.tab.result(),
                                    ),
                                    s().createElement(
                                        Q,
                                        { 'tabs-role': W.TAB, 'tab-key': mn.Leaderboard, onClick: m },
                                        R.strings.battle_royale.battleResult.tab.leaderboard(),
                                    ),
                                ),
                            ),
                        ),
                        s().createElement(
                            Ae.Z,
                            {
                                timeout: 500,
                                in: o.animationStage >= _n.BottomComponentsEnter,
                                enter: !o.isSkipped,
                                classNames: be,
                                onEntered: E,
                            },
                            s().createElement(
                                'div',
                                { className: 'App_bottomComponents_ee' },
                                s().createElement('p', { className: 'App_mapName_ac' }, e),
                                s().createElement(
                                    'div',
                                    { className: 'App_playerBattleTypeStatus_eb' },
                                    s().createElement(ln, null),
                                ),
                            ),
                        ),
                        s().createElement(
                            'div',
                            { className: 'App_closeButton_ac' },
                            s().createElement(ue, {
                                caption: R.strings.menu.viewHeader.closeBtn.label(),
                                type: 'close',
                                side: 'right',
                                onClick: _,
                            }),
                        ),
                    );
                };
                engine.whenReady.then(() => {
                    N().render(
                        s().createElement(Ku, null, s().createElement(L, null, s().createElement(dn, null))),
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
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](u, u.exports, __webpack_require__), u.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, a) => {
            if (!t) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, u, a] = deferred[o], r = !0, s = 0; s < t.length; s++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(o--, 1);
                        var i = u();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, u, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var u in t)
                __webpack_require__.o(t, u) &&
                    !__webpack_require__.o(e, u) &&
                    Object.defineProperty(e, u, { enumerable: !0, get: t[u] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (__webpack_require__.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (__webpack_require__.j = 'lobby/views/BattleResultView/BattleResultView'),
        (() => {
            var e = { 'lobby/views/BattleResultView/BattleResultView': 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var a,
                        n,
                        [r, s, i] = u,
                        o = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(u); o < r.length; o++)
                        ((n = r[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/battle_royale.vendors'], () =>
        __webpack_require__(392),
    );
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
