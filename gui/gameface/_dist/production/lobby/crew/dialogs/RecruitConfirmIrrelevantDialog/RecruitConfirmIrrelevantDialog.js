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
                    u.d(t, { mouse: () => c, off: () => o, on: () => l, onResize: () => r, onScaleUpdated: () => i }));
                var n = u(2472),
                    a = u(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    l = (e, t) => engine.on(e, t),
                    o = (e, t) => engine.off(e, t),
                    s = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', u))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', u))
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${t}`,
                                        i = s[t]((e) => u([e, 'outside']));
                                    function l(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, l),
                                        n(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(r, l),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
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
            5959: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => l,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = u(527),
                    a = u(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const l = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2493: (e, t, u) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function a(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                u.d(t, { E: () => a, G: () => n });
            },
            2472: (e, t, u) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => n });
            },
            3138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => i });
                var n = u(5959),
                    a = u(7698),
                    r = u(514);
                const i = { view: u(7641), client: n, sound: r.ZP, intl: a.N };
            },
            7698: (e, t, u) => {
                'use strict';
                u.d(t, { N: () => n });
                const n = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => i });
                var n = u(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, n.playSound)(a[t])), e), {}),
                    i = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function a(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                (u.r(t), u.d(t, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => a });
                var n = u(2472);
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
            7641: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => o,
                        arabic2roman: () => k,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => x,
                        enableFullScreenModeSupported: () => T,
                        events: () => i.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => w,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => B,
                        getExternalPaddingsRem: () => y,
                        getFontNames: () => C,
                        getScale: () => f,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        initExternalPaddings: () => O,
                        isEventHandled: () => D,
                        isFocused: () => b,
                        pxToRem: () => h,
                        remToPx: () => p,
                        resize: () => E,
                        sendEvent: () => l.qP,
                        setAnimateWindow: () => F,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => L,
                    }));
                var n = u(9690),
                    a = u(3722),
                    r = u(6112),
                    i = u(6538),
                    l = u(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function d(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: p(t.x), y: p(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function f() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function F(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function w() {
                    viewEnv.forceTriggerMouseMove();
                }
                function B() {
                    return viewEnv.getShowingStatus();
                }
                const C = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    k = n.cg;
                function y() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const x = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    S = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    L = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function T() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function O(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            u = t.top,
                            n = t.right,
                            a = t.bottom,
                            r = t.left;
                        (e.style.setProperty('--external-padding-top', `${u}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${a}rem`),
                            e.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => s });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    i = 32,
                    l = 64,
                    o = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                    return a;
                                })(t, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    s = {
                        close(e) {
                            o('popover' === e ? a : i);
                        },
                        minimize() {
                            o(l);
                        },
                        move(e) {
                            o(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, u) => {
                'use strict';
                let n, a;
                (u.d(t, { n: () => n }),
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
            9690: (e, t, u) => {
                'use strict';
                u.d(t, { cg: () => r });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let t = '';
                    for (let u = a.length - 1; u >= 0; u--) for (; e >= a[u]; ) ((t += n[u]), (e -= a[u]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(3138);
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
                    addCallback(e, t, u = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, u, a);
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
                            const n = this._callbacks[u];
                            void 0 !== n && n(e, t);
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
            9916: (e, t, u) => {
                'use strict';
                u.d(t, { Sw: () => r.Z, B3: () => o, Z5: () => i.Z5, B0: () => l, ry: () => f, Eu: () => h });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    u();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const u = e,
                            n = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== n)),
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
                var r = u(1358);
                var i = u(8613);
                let l;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(l || (l = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    s = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = u(5521),
                    m = u(3138);
                const E = ['args'];
                function g(e, t, u, n, a, r, i) {
                    try {
                        var l = e[r](i),
                            o = l.value;
                    } catch (e) {
                        return void u(e);
                    }
                    l.done ? t(o) : Promise.resolve(o).then(n, a);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    f = (function () {
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(t, u);
                                        function i(e) {
                                            g(r, n, a, i, l, 'next', e);
                                        }
                                        function l(e) {
                                            g(r, n, a, i, l, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    h = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    p = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                    return a;
                                })(t, E);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
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
                        var n;
                    },
                    F = () => p(l.CLOSE),
                    b = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var v = u(7572);
                const D = a.instance,
                    w = {
                        DataTracker: r.Z,
                        ViewModel: v.Z,
                        ViewEventType: l,
                        NumberFormatType: o,
                        RealFormatType: s,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => p(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: F,
                        sendClosePopOverEvent: () => p(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            p(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, a = R.invalid('resId'), r) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                o = u.getBoundingClientRect(),
                                s = o.x,
                                c = o.y,
                                d = o.width,
                                _ = o.height,
                                E = {
                                    x: m.O.view.pxToRem(s) + i.x,
                                    y: m.O.view.pxToRem(c) + i.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            p(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: A(E),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => b(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, F);
                        },
                        handleViewEvent: p,
                        onBindingsReady: f,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const a = Object.prototype.toString.call(t[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < a.length; t++) u[n].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: D,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = w;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    },
                    r = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            9931: (e, t, u) => {
                'use strict';
                var n = u(7363),
                    a = u.n(n);
                const r = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var i = u(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
                function s(e = i.O.client.getSize('rem')) {
                    const t = e.width,
                        u = e.height;
                    return Object.assign(
                        { width: t, height: u },
                        (function (e, t, u) {
                            const n = (function (e, t) {
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
                                a = (function (e, t) {
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
                                r = Math.min(n, a);
                            return {
                                extraLarge: r === u.extraLarge.weight,
                                large: r === u.large.weight,
                                medium: r === u.medium.weight,
                                small: r === u.small.weight,
                                extraSmall: r === u.extraSmall.weight,
                                extraLargeWidth: n === u.extraLarge.weight,
                                largeWidth: n === u.large.weight,
                                mediumWidth: n === u.medium.weight,
                                smallWidth: n === u.small.weight,
                                extraSmallWidth: n === u.extraSmall.weight,
                                extraLargeHeight: a === u.extraLarge.weight,
                                largeHeight: a === u.large.weight,
                                mediumHeight: a === u.medium.weight,
                                smallHeight: a === u.small.weight,
                                extraSmallHeight: a === u.extraSmall.weight,
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
                })(o || (o = {}));
                const c = s(),
                    d = (0, n.createContext)(c),
                    _ = ['children'];
                (0, n.memo)((e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, _);
                    const a = (0, n.useContext)(d),
                        i = a.extraLarge,
                        l = a.large,
                        o = a.medium,
                        s = a.small,
                        c = a.extraSmall,
                        m = a.extraLargeWidth,
                        E = a.largeWidth,
                        g = a.mediumWidth,
                        A = a.smallWidth,
                        f = a.extraSmallWidth,
                        h = a.extraLargeHeight,
                        p = a.largeHeight,
                        F = a.mediumHeight,
                        b = a.smallHeight,
                        v = a.extraSmallHeight,
                        D = { extraLarge: h, large: p, medium: F, small: b, extraSmall: v };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && i) return t;
                        if (u.large && l) return t;
                        if (u.medium && o) return t;
                        if (u.small && s) return t;
                        if (u.extraSmall && c) return t;
                    } else {
                        if (u.extraLargeWidth && m) return r(t, u, D);
                        if (u.largeWidth && E) return r(t, u, D);
                        if (u.mediumWidth && g) return r(t, u, D);
                        if (u.smallWidth && A) return r(t, u, D);
                        if (u.extraSmallWidth && f) return r(t, u, D);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && h) return t;
                            if (u.largeHeight && p) return t;
                            if (u.mediumHeight && F) return t;
                            if (u.smallHeight && b) return t;
                            if (u.extraSmallHeight && v) return t;
                        }
                    }
                    return null;
                });
                const m = ({ children: e }) => {
                    const t = (0, n.useState)(s),
                        u = t[0],
                        r = t[1],
                        l = (0, n.useState)(!1),
                        o = l[0],
                        c = l[1];
                    return (
                        (0, n.useLayoutEffect)(() => {
                            function e() {
                                r((e) => {
                                    const t = i.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : s(t);
                                });
                            }
                            return (
                                e(),
                                c(!0),
                                i.O.client.events.on('clientResized', e),
                                i.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (i.O.client.events.off('clientResized', e),
                                        i.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        a().createElement(d.Provider, { value: u }, o && e)
                    );
                };
                var E = u(6483),
                    g = u.n(E),
                    A = u(926),
                    f = u.n(A);
                let h, p, F;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(h || (h = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(p || (p = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(F || (F = {})));
                const b = () => {
                        const e = (0, n.useContext)(d),
                            t = e.width,
                            u = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return h.ExtraLarge;
                                    case e.large:
                                        return h.Large;
                                    case e.medium:
                                        return h.Medium;
                                    case e.small:
                                        return h.Small;
                                    case e.extraSmall:
                                        return h.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), h.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return p.ExtraLarge;
                                    case e.largeWidth:
                                        return p.Large;
                                    case e.mediumWidth:
                                        return p.Medium;
                                    case e.smallWidth:
                                        return p.Small;
                                    case e.extraSmallWidth:
                                        return p.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), p.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return F.ExtraLarge;
                                    case e.largeHeight:
                                        return F.Large;
                                    case e.mediumHeight:
                                        return F.Medium;
                                    case e.smallHeight:
                                        return F.Small;
                                    case e.extraSmallHeight:
                                        return F.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), F.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: i, remScreenWidth: t, remScreenHeight: u };
                    },
                    v = ['children', 'className'];
                function D() {
                    return (
                        (D =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        D.apply(this, arguments)
                    );
                }
                const w = {
                        [p.ExtraSmall]: '',
                        [p.Small]: f().SMALL_WIDTH,
                        [p.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [p.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [p.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    B = {
                        [F.ExtraSmall]: '',
                        [F.Small]: f().SMALL_HEIGHT,
                        [F.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [F.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [F.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    C = {
                        [h.ExtraSmall]: '',
                        [h.Small]: f().SMALL,
                        [h.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [h.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [h.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
                    },
                    k = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, v);
                        const r = b(),
                            i = r.mediaWidth,
                            l = r.mediaHeight,
                            o = r.mediaSize;
                        return a().createElement('div', D({ className: g()(u, w[i], B[l], C[o]) }, n), t);
                    },
                    y = ['children'];
                const x = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, y);
                    return a().createElement(m, null, a().createElement(k, u, t));
                };
                var S = u(1533),
                    L = u.n(S);
                u(1281);
                let T;
                function O(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(T || (T = {}));
                const N = (e) => e.replace(/&nbsp;/g, ' '),
                    I =
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
                                (t = R.strings.common.percentValue()),
                                (u = { value: e }),
                                t.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]))
                            );
                            var t, u;
                        });
                var M = u(9916),
                    P = u(8613);
                (Date.now(), P.Ew.getRegionalDateTime, P.Ew.getFormattedDateTime);
                const j = (e, t) => {
                        const u = (0, n.useRef)();
                        return (
                            (0, n.useEffect)(() => {
                                (t && !t(e)) || (u.current = e);
                            }, [t, e]),
                            u.current
                        );
                    },
                    W = (e = 1) => {
                        const t = new Error().stack;
                        let u,
                            n = R.invalid('resId'),
                            a = '';
                        var r;
                        t &&
                            ((a = (null == (r = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                            (u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== u &&
                                window.subViews[u] &&
                                (n = window.subViews[u].id));
                        return { callerUrl: a, caller: u, stack: t, resId: n };
                    },
                    H = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    $ = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    V = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    G = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    U = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const n = H(`${e}.${u}`, window);
                                return V(n) ? t(e, u, n) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    z = (e) => {
                        const t = ((e) => {
                                const t = W(),
                                    u = t.caller,
                                    n = t.resId,
                                    a = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: a, modelPath: G(a, e || ''), resId: n };
                            })(),
                            u = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const a = H(G(u, `${t}.${n}`), window);
                                    return V(a) ? (e.push(a.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
                const q = () => (window.injected || (window.injected = new Map()), window.injected);
                const K = M.Sw.instance;
                let Y;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(Y || (Y = {}));
                const Z = (e = 'model', t = Y.Deep) => {
                        const u = (0, n.useState)(0),
                            a = (u[0], u[1]),
                            r = (0, n.useMemo)(() => W(), []),
                            i = r.callerUrl,
                            l = r.caller,
                            o = r.resId,
                            s = (0, n.useMemo)(() => {
                                const t = (function (e) {
                                    return q().has(e);
                                })(i.replace('.js', '.html'));
                                return window.__feature && window.__feature !== l && !t ? `subViews.${l}.${e}` : e;
                            }, [i, l, e]),
                            c = (0, n.useState)(() =>
                                ((e) => {
                                    const t = H(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return V(t) ? t.value : t;
                                })(U(s)),
                            ),
                            d = c[0],
                            _ = c[1],
                            m = (0, n.useRef)(-1);
                        return (
                            $(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? Y.Deep : Y.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== Y.None)
                                ) {
                                    const u = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === Y.Deep
                                                ? (e === d && a((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        n = z(e);
                                    m.current = K.addCallback(n, u, o, t === Y.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (t !== Y.None)
                                    return () => {
                                        K.removeCallback(m.current, o);
                                    };
                            }, [o, t]),
                            d
                        );
                    },
                    X = (M.Sw.instance, j);
                var J = u(5521);
                const Q = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ee(e = J.n.NONE, t = Q, u = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== J.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && i.O.view.isEventHandled()) return;
                                (i.O.view.setEventHandled(), t(n), u && n.stopPropagation());
                            }
                        }
                    }, [t, e, u, a]);
                }
                const te = /<link.*?>/g,
                    ue = /\.\.\//g,
                    ne = /<script.*?>/g,
                    ae = 'default.css',
                    re = (e) => {
                        const t = e.match(ue);
                        return t && t.join('');
                    },
                    ie = () => {
                        for (
                            var e = 0, t = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < t.length;
                            e++
                        ) {
                            const u = t[e];
                            if (!u.href.includes(ae)) return u.href;
                        }
                        return '';
                    },
                    le = (e) => {
                        const t = ie(),
                            u = re(t);
                        let n,
                            a = e;
                        for (; null !== (n = ne.exec(e)); ) {
                            const e = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const t = u + e[2].replace(ue, '');
                                a = a.replace(e[2], t);
                            }
                        }
                        return a;
                    },
                    oe = () => {
                        const e = [];
                        let t = !1;
                        const u = () => {
                            if (!e.length) return void (t = !1);
                            const n = e.shift();
                            n && ((t = !0), n().then(() => u()));
                        };
                        return {
                            add: (n) => {
                                (e.push(n), t || u());
                            },
                        };
                    },
                    se = 'SubView_base_df',
                    ce = 'subViews.onChanged',
                    de = oe(),
                    _e = (0, n.memo)(({ id: e, fallback: t, onLoadCallback: u, mixClass: r }) => {
                        const i = (0, n.useState)(''),
                            l = i[0],
                            o = i[1],
                            s = (0, n.useMemo)(() => ({ __html: le(l) }), [l]),
                            c = (0, n.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            d = (0, n.useState)(!1),
                            _ = d[0],
                            m = d[1],
                            E = (0, n.useCallback)(
                                (e) => {
                                    e.includes(c) &&
                                        (m(!0), engine.off(ce, E), window.subViews.removeChildChangedCallback(c));
                                },
                                [c],
                            ),
                            A = (0, n.useCallback)((e) => {
                                de.add(
                                    () =>
                                        new Promise((t) => {
                                            o(e);
                                            const u = new MutationObserver(() => {
                                                    (u.disconnect(), t());
                                                }),
                                                n = document.getElementById('root');
                                            n && u.observe(n, { childList: !0 });
                                        }),
                                );
                            }, []);
                        ((0, n.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const t = window.subViews.get(e),
                                    u = t.path;
                                let n;
                                if ((n = u.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, t)),
                                        engine.on(`subView:inject->${n}`, A),
                                        (({ path: e, name: t }) => {
                                            const u = new XMLHttpRequest();
                                            ((u.onreadystatechange = () => {
                                                4 === u.readyState &&
                                                    (200 === u.status
                                                        ? (0, M.Eu)().then(() => {
                                                              (console.info(`Sub view ${t} loaded: ${e}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${t}`,
                                                                      u.responseText,
                                                                  ));
                                                          })
                                                        : console.error(
                                                              `subView: status: ${u.status} - can't get bundle`,
                                                          ));
                                            }),
                                                u.open('GET', e),
                                                u.send());
                                        })({ name: n, path: u }),
                                        () => {
                                            (n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                engine.off(`subView:inject->${n}`, A),
                                                console.info(`Sub view ${n} is destroyed: ${u}`));
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(ce, E);
                        }, [E, A, e, _]),
                            (0, n.useEffect)(
                                () => () => {
                                    l &&
                                        ((e) => {
                                            const t = re(ie());
                                            let u;
                                            for (; null !== (u = te.exec(e)); ) {
                                                const e = u[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const u = t + e[1].replace(ue, ''),
                                                        n = document.head.querySelector(`[href="${u}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(l);
                                },
                                [l],
                            ));
                        const f = g()(se, r);
                        if (l) {
                            let t;
                            return (
                                (t = document.getElementById('root')) && t.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let t;
                                    const u = ie(),
                                        n = re(u);
                                    for (; null !== (t = te.exec(e)); ) {
                                        const e = t[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(ae) && n) {
                                            const t = n + e[1].replace(ue, ''),
                                                u = document.createElement('link');
                                            ((u.href = t), (u.rel = 'stylesheet'), document.head.appendChild(u));
                                        }
                                    }
                                })(l),
                                u && u(e),
                                a().createElement('div', { className: f, dangerouslySetInnerHTML: s })
                            );
                        }
                        return t ? a().createElement('div', { className: f }, a().createElement(t, null)) : null;
                    }),
                    me = 'subViews.onChanged',
                    Ee = '.html',
                    ge = /^coui:\/\/gui\/.*/,
                    Ae = oe(),
                    fe = (e) => {
                        const t = document.createElement('script');
                        ((t.src = e), (t.defer = !0), document.head.appendChild(t));
                    };
                (0, n.memo)(({ id: e, bundleLevelPath: t = 3, mixClass: u, children: r }) => {
                    const i = (0, n.useRef)(null),
                        l = (0, n.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                        o = (0, n.useState)(!1),
                        s = o[0],
                        c = o[1],
                        d = (0, n.useState)(!0),
                        _ = d[0],
                        m = d[1],
                        E = (0, n.useCallback)(
                            (e) => {
                                e.includes(l) &&
                                    (c(!0), engine.off(me, E), window.subViews.removeChildChangedCallback(l));
                            },
                            [l],
                        ),
                        A = (0, n.useCallback)(
                            (e) => {
                                Ae.add(
                                    () =>
                                        new Promise((u) => {
                                            const n = new MutationObserver(() => {
                                                (m(!1), n.disconnect(), u());
                                            });
                                            if (i.current) {
                                                const u = document.getElementById('root');
                                                (u && u.setAttribute('id', 'bugSubView'),
                                                    i.current.setAttribute('id', 'root'));
                                                const a = document.createElement('link');
                                                ((a.href = e.replace(Ee, '.css')),
                                                    (a.rel = 'stylesheet'),
                                                    document.head.appendChild(a),
                                                    ge.test(e) &&
                                                        fe(
                                                            e
                                                                .split('/')
                                                                .slice(0, -t)
                                                                .concat(['vendors.js'])
                                                                .join('/')
                                                                .replace('/production/', '/production/lib/'),
                                                        ),
                                                    fe(e.replace(Ee, '.js')),
                                                    n.observe(i.current, { childList: !0 }));
                                            }
                                        }),
                                );
                            },
                            [t],
                        );
                    return (
                        (0, n.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const t = window.subViews.get(e),
                                    u = t.path;
                                let n = u.split('/').pop();
                                if (n)
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, t)),
                                        A(u),
                                        () => {
                                            (n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                console.info(`Sub view ${n} is destroyed: ${u}`));
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(me, E);
                        }, [E, A, e, s]),
                        a().createElement(
                            'div',
                            { className: g()(se, u) },
                            _ && r,
                            a().createElement('div', { ref: i }),
                        )
                    );
                });
                function he(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const pe = {
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
                let Fe, be;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Fe || (Fe = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(be || (be = {})));
                const ve = ({
                        children: e,
                        size: t,
                        disabled: u,
                        mixClass: r,
                        onMouseEnter: i,
                        onMouseMove: l,
                        onMouseDown: o,
                        onMouseUp: s,
                        onMouseLeave: c,
                        onClick: d,
                        isFocused: _ = !1,
                        type: m = Fe.primary,
                        soundHover: E = 'highlight',
                        soundClick: A = 'play',
                    }) => {
                        const f = (0, n.useRef)(null),
                            h = (0, n.useState)(_),
                            p = h[0],
                            F = h[1],
                            b = (0, n.useState)(!1),
                            v = b[0],
                            D = b[1];
                        return (
                            (0, n.useEffect)(() => {
                                function e(e) {
                                    p && null !== f.current && !f.current.contains(e.target) && F(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [p]),
                            (0, n.useEffect)(() => {
                                F(_);
                            }, [_]),
                            a().createElement(
                                'div',
                                {
                                    ref: f,
                                    className: g()(
                                        pe.base,
                                        pe[`base__${m}`],
                                        u && pe.base__disabled,
                                        t && pe[`base__${t}`],
                                        p && pe.base__focus,
                                        v && pe.base__highlightActive,
                                        r,
                                    ),
                                    onMouseEnter: function (e) {
                                        u || (null !== E && he(E), i && i(e));
                                    },
                                    onMouseMove: function (e) {
                                        l && l(e);
                                    },
                                    onMouseUp: function (e) {
                                        u || (s && s(e), D(!1));
                                    },
                                    onMouseDown: function (e) {
                                        u ||
                                            (null !== A && he(A),
                                            o && o(e),
                                            _ && (u || (f.current && (f.current.focus(), F(!0)))),
                                            D(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        u || (c && c(e), D(!1));
                                    },
                                    onClick: function (e) {
                                        u || (d && d(e));
                                    },
                                },
                                m !== Fe.ghost &&
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
                    De = [
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
                function we(e) {
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
                const Be = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: M.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    Ce = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            l = e.onMouseDown,
                            o = e.onClick,
                            s = e.ignoreShowDelay,
                            c = void 0 !== s && s,
                            d = e.ignoreMouseClick,
                            _ = void 0 !== d && d,
                            m = e.decoratorId,
                            E = void 0 === m ? 0 : m,
                            g = e.isEnabled,
                            A = void 0 === g || g,
                            f = e.targetId,
                            h = void 0 === f ? 0 : f,
                            p = e.onShow,
                            F = e.onHide,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, De);
                        const v = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            D = (0, n.useMemo)(() => h || W().resId, [h]),
                            w = (0, n.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (Be(u, E, { isMouseEvent: !0, on: !0, arguments: we(a) }, D),
                                    p && p(),
                                    (v.current.isVisible = !0));
                            }, [u, E, a, D, p]),
                            B = (0, n.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const e = v.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (v.current.timeoutId = 0)),
                                        Be(u, E, { on: !1 }, D),
                                        v.current.isVisible && F && F(),
                                        (v.current.isVisible = !1));
                                }
                            }, [u, E, D, F]),
                            C = (0, n.useCallback)((e) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(v.current.prevTarget) && B();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = v.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', C, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', C, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === A && B();
                            }, [A, B]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', B),
                                    () => {
                                        (window.removeEventListener('mouseleave', B), B());
                                    }
                                ),
                                [B],
                            ));
                        return A
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((k = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(v.current.timeoutId),
                                                      (v.current.timeoutId = window.setTimeout(w, c ? 100 : 400)),
                                                      r && r(e),
                                                      k && k(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (B(), null == i || i(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === _ && B(), null == o || o(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === _ && B(), null == l || l(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : t;
                        var k;
                    },
                    ke = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ye() {
                    return (
                        (ye =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ye.apply(this, arguments)
                    );
                }
                const xe = R.views.common.tooltip_window.simple_tooltip_content,
                    Se = (e) => {
                        let t = e.children,
                            u = e.body,
                            r = e.header,
                            i = e.note,
                            l = e.alert,
                            o = e.args,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, ke);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: u, header: r, note: i, alert: l });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [l, u, r, i, o]);
                        return a().createElement(
                            Ce,
                            ye(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? xe.SimpleTooltipHtmlContent('resId') : xe.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                s,
                            ),
                            t,
                        );
                        var d;
                    },
                    Le = 'TextOverflow_base_3b',
                    Te = ['content', 'classMix', 'className'];
                function Oe() {
                    return (
                        (Oe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Oe.apply(this, arguments)
                    );
                }
                const Re = (e) => {
                    let t = e.content,
                        u = e.classMix,
                        r = e.className,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, Te);
                    const l = (0, n.useRef)(null),
                        o = (0, n.useState)(!0),
                        s = o[0],
                        c = o[1];
                    return (
                        (0, n.useEffect)(() =>
                            ((e) => {
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
                            })(() => {
                                const e = l.current;
                                e && e.offsetWidth >= e.scrollWidth && c(!1);
                            }),
                        ),
                        a().createElement(
                            Se,
                            { isEnabled: s, body: t },
                            a().createElement('div', Oe({}, i, { ref: l, className: g()(Le, r, u) }), t),
                        )
                    );
                };
                let Ne;
                !(function (e) {
                    ((e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent'));
                })(Ne || (Ne = {}));
                const Ie = 'DialogTemplateButton_base_0b',
                    Me = 'DialogTemplateButton_label_83',
                    Pe = 'DialogTemplateButton_label__noTooltip_14',
                    je = (0, n.memo)(
                        ({ onClick: e, isFocused: t, buttonID: u, isDisabled: r, label: i, tooltip: l, type: o }) => {
                            const s = (0, n.useCallback)(() => {
                                    e({ buttonID: u });
                                }, [e, u]),
                                c = (0, n.useMemo)(() => {
                                    return (
                                        (e = l.type),
                                        (t = { buttonID: u }),
                                        {
                                            isEnabled: e !== Ne.absent,
                                            args: t,
                                            contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                            decoratorId:
                                                e === Ne.normal
                                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow(
                                                          'resId',
                                                      )
                                                    : void 0,
                                            ignoreShowDelay: e === Ne.backport,
                                            ignoreMouseClick: !0,
                                        }
                                    );
                                    var e, t;
                                }, [l.type, u]),
                                d = g()(Me, l.type !== Ne.absent && Pe);
                            return a().createElement(
                                Ce,
                                c,
                                a().createElement(
                                    'div',
                                    { className: Ie },
                                    a().createElement(
                                        ve,
                                        {
                                            size: be.medium,
                                            type: o,
                                            disabled: r,
                                            onClick: s,
                                            isFocused: t,
                                            soundClick: 'cancel' === u ? 'cancelcloseno' : 'play',
                                        },
                                        a().createElement(Re, { classMix: d, content: i || '' }),
                                    ),
                                ),
                            );
                        },
                    ),
                    We = 'DialogTemplateButtonList_base_8e';
                function He() {
                    return (
                        (He =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        He.apply(this, arguments)
                    );
                }
                const $e = (0, n.memo)(() => {
                        const e = Z('model').onButtonClicked,
                            t = Z('model.focus'),
                            u = t.focusedIndex,
                            r = t.onTabPressed,
                            i = Z('model.buttons'),
                            l = (0, n.useCallback)(
                                (e) => {
                                    r({ shift: e.shiftKey });
                                },
                                [r],
                            );
                        ee(J.n.TAB, l);
                        const o = (0, n.useCallback)(
                            (t) => {
                                if (u < 0 || u >= i.length) return;
                                const n = i[u].value;
                                t.altKey || n.isDisabled || e({ buttonID: n.buttonID });
                            },
                            [i, u, e],
                        );
                        return (
                            ee(J.n.ENTER, o),
                            a().createElement(
                                'div',
                                { className: We },
                                i.map(({ value: t }, n) =>
                                    a().createElement(je, He({ key: t.buttonID, isFocused: n === u, onClick: e }, t)),
                                ),
                            )
                        );
                    }),
                    Ve = 'DialogTemplateWrapper_base_f7',
                    Ge = 'DialogTemplateWrapper_base__hidden_5f',
                    Ue = 'DialogTemplateWrapper_subView_30';
                function ze() {
                    return (
                        (ze =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ze.apply(this, arguments)
                    );
                }
                const qe = (0, n.memo)(({ Template: e }) => {
                    const t = Z('model', Y.None),
                        u = t.onCloseClicked,
                        r = t.placeHolders,
                        i = t.background,
                        l = t.dimmerAlpha,
                        o = t.displayFlags;
                    (0, n.useEffect)(() => {
                        const e = document.getElementById('root');
                        e && e.setAttribute('id', 'stubDialogTemplate');
                    }, []);
                    const s = o.map(({ value: e }) => e),
                        c = (0, n.useRef)(r.map(({ value: e }) => e.resourceID)),
                        d = (0, n.useState)(0 !== c.current.length),
                        _ = d[0],
                        E = d[1],
                        A = (0, n.useCallback)(
                            (e = 'default') => {
                                u({ reason: e });
                            },
                            [u],
                        ),
                        f = (0, n.useCallback)(() => {
                            A('escape');
                        }, [A]);
                    var h;
                    ((h = f), ee(J.n.ESCAPE, h));
                    const p = (0, n.useCallback)((e) => {
                            const t = c.current,
                                u = t.indexOf(e);
                            u > -1 && (t.splice(u, 1), 0 === t.length && E(!1));
                        }, []),
                        F = (0, n.useMemo)(() => {
                            const e = { backgroundColor: `rgba(19, 18, 16, ${l})` };
                            return (i && (e.backgroundImage = `url(${i})`), e);
                        }, [i, l]),
                        b = (0, n.useMemo)(
                            () =>
                                r.reduce(
                                    (e, { value: t }) => (
                                        (e[t.placeHolder] = a().createElement(_e, {
                                            key: t.placeHolder,
                                            id: t.resourceID,
                                            mixClass: Ue,
                                            onLoadCallback: p,
                                        })),
                                        e
                                    ),
                                    {},
                                ),
                            [p, r],
                        ),
                        v = g()(Ve, _ && Ge);
                    return a().createElement(
                        m,
                        null,
                        a().createElement(
                            'div',
                            { className: v, style: F },
                            a().createElement(
                                e,
                                ze(
                                    { onClose: A, buttons: a().createElement($e, null), displayFlags: s, isShown: !_ },
                                    b,
                                ),
                            ),
                        ),
                    );
                });
                var Ke = u(3403);
                const Ye = ['children'];
                function Ze() {
                    return (
                        (Ze =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ze.apply(this, arguments)
                    );
                }
                const Xe = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, Ye);
                    return a().createElement(
                        Ce,
                        Ze(
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
                };
                function Je() {
                    return (
                        (Je =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Je.apply(this, arguments)
                    );
                }
                const Qe = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = a().createElement('div', { className: u }, e);
                    if (t.header || t.body) return a().createElement(Se, t, n);
                    const r = t.contentId;
                    return r ? a().createElement(Ce, Je({}, t, { contentId: r }), n) : a().createElement(Xe, t, n);
                };
                var et = u(8045);
                const tt = {
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
                let ut, nt, at;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(ut || (ut = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(nt || (nt = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(at || (at = {})));
                const rt = { [at.NBSP]: ut.NoBreakSymbol, [at.ZWNBSP]: ut.NoBreakSymbol, [at.NEW_LINE]: ut.LineBreak },
                    it = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    lt = {
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
                    ot = 'renderers_noBreakWrapper_10',
                    st = 'renderers_lineBreak_b5',
                    ct = 'renderers_newLine_bd',
                    dt = 'renderers_word_f3',
                    _t = (e) => ({ color: `#${e}` }),
                    mt = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? lt[n]
                                ? a().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: g()(dt, lt[n]) },
                                      e,
                                  )
                                : a().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: dt, style: _t(n) },
                                      e,
                                  )
                            : a().createElement('span', { key: u, 'data-block-type': t.blockType, className: dt }, e);
                    },
                    Et = {
                        [ut.Word]: mt,
                        [ut.NoBreakSymbol]: mt,
                        [ut.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            a().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => a().createElement(a().Fragment, { key: u }, e)),
                            ),
                        [ut.LineBreak]: ({ key: e }) =>
                            a().createElement('span', { key: e, 'data-block-type': ut.LineBreak, className: st }),
                        [ut.NewLine]: ({ elementList: e, key: t }) =>
                            a().createElement('span', { key: t, 'data-block-type': ut.NewLine, className: ct }, e),
                        [ut.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            a().createElement(
                                'span',
                                { key: t, 'data-block-type': ut.NoBreakWrapper, className: ot },
                                e,
                            ),
                    },
                    gt = (e, t, u) => {
                        const n = [];
                        return (
                            e.childList.forEach((a, r) => {
                                const i = `${u}_${r}`;
                                if (((e) => void 0 !== e.childList)(a)) {
                                    const e = a,
                                        t = e.blockType,
                                        u = gt(e, Et[t], i);
                                    n.push(...u);
                                } else n.push(t({ elementList: [a], textBlock: e, key: i }));
                            }),
                            n
                        );
                    },
                    At = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, u) => {
                                t.push(
                                    ...((e, t) => {
                                        const u = [],
                                            n = e.blockType,
                                            a = Et[n],
                                            r = gt(e, a, t);
                                        return (
                                            n === ut.NoBreakWrapper
                                                ? u.push(a({ elementList: r, textBlock: e, key: `${t}` }))
                                                : u.push(...r),
                                            u
                                        );
                                    })(e, u),
                                );
                            }),
                            t
                        );
                    },
                    ft = (e, t, u, n) => {
                        let a = t.exec(e),
                            r = 0;
                        for (; a; ) (r !== a.index && u(e.slice(r, a.index)), n(a), (r = t.lastIndex), (a = t.exec(e)));
                        r !== e.length && u(e.slice(r));
                    },
                    ht = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    pt = (e) => {
                        const t = [];
                        return (
                            ft(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var u;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((u = e), u.match(ht) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    Ft = it
                        ? (e) => {
                              const t = [];
                              return (
                                  ft(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...pt(e[0]));
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const u = /[\s\u002d]/g;
                              let n = u.exec(e);
                              if (!n) return [e];
                              const a = [];
                              let r = 0;
                              for (; n; ) {
                                  const i = t.justifyContent === nt.FlexEnd ? n.index : u.lastIndex;
                                  (a.push(e.slice(r, i)), (r = i), (n = u.exec(e)));
                              }
                              return (r !== e.length && a.push(e.slice(r)), a);
                          },
                    bt = (e, t = '', u) => {
                        const n = [];
                        return (
                            ft(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: ut.Word, colorTag: t, childList: Ft(e, u) });
                                },
                                (e) => {
                                    const u = e[0],
                                        a = rt[u.charAt(0)];
                                    a === ut.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: ut.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: ut.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(u),
                                          )
                                        : n.push({ blockType: a, colorTag: t, childList: [u] });
                                },
                            ),
                            n
                        );
                    },
                    vt = (e, t, u = '', n) => {
                        const a = [];
                        return (
                            ft(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...bt(e, u, n));
                                },
                                (e) => {
                                    const r = e[1],
                                        i = void 0 === t[r] ? e[0] : t[r];
                                    'string' == typeof i || 'number' == typeof i
                                        ? a.push(...bt(String(i), u, n))
                                        : a.push({ blockType: ut.Binding, colorTag: u, childList: [i] });
                                },
                            ),
                            a
                        );
                    },
                    Dt = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === ut.NoBreakWrapper) (e.childList.push(n), u.push(e));
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && u.push(e),
                                u.push({ blockType: ut.NoBreakWrapper, colorTag: '', childList: [t, n] }));
                        }
                        return (t.childList.length > 0 && u.push(t), u);
                    },
                    wt = (e, t = {}, u) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === ut.NoBreakSymbol
                                        ? ((u = !0), t.push(...Dt(t.pop(), e)))
                                        : (u ? t.push(...Dt(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, u) => {
                                const n = [];
                                return (
                                    ft(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...vt(e, t, '', u));
                                        },
                                        (e) => {
                                            n.push(...vt(e[2] + e[3], t, e[1], u));
                                        },
                                    ),
                                    n
                                );
                            })(N(e).replace(/&zwnbsp;/g, '\ufeff'), t, u),
                        );
                        return At(n);
                    },
                    Bt = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    Ct = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    kt = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = Ct(e, t),
                            a = e.textContent.length,
                            r = e.offsetWidth / a,
                            i = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / r);
                            return n >= u ? [!0, u + i] : [!1, n];
                        }
                        const l = Math.max(u + i, 0);
                        return a < l ? [!1, 0] : [!0, l];
                    },
                    yt = (e, t, u, n, r, i) => {
                        let l = -1,
                            o = null;
                        for (let s = u; s >= 0; s--) {
                            const u = e[s],
                                c = Number(e[s].getAttribute('data-block-type'));
                            if (c === ut.LineBreak || c === ut.NewLine || c === ut.Binding) continue;
                            const d = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = kt(u, n, r),
                                    c = e[0],
                                    _ = e[1];
                                if (!c) {
                                    _ > 0 && (r -= _);
                                    continue;
                                }
                                const m = d.slice(0, d.length - _) + i,
                                    E = t[s];
                                ((o = a().cloneElement(E, E.props, m)), (l = s));
                                break;
                            }
                            {
                                const e = u.children,
                                    c = t[s],
                                    _ = c.props.children,
                                    m = yt(e, _, e.length - 1, n, r, i),
                                    E = m[0],
                                    g = m[1];
                                if (!(E < 0)) {
                                    const e = _.slice(0, E);
                                    ((o = a().cloneElement(c, c.props, e, g)), (l = s));
                                    break;
                                }
                                r -= d.length;
                            }
                        }
                        return [l, o];
                    },
                    xt = (e, t, u, n = '...') => {
                        const a = [...t],
                            r = e.current;
                        if (!r) return [a, !1];
                        const i = u.height,
                            l = u.width,
                            o = r.lastElementChild;
                        if (!Bt(o, i) && Ct(o, l) <= 0) return [a, !1];
                        const s = r.children,
                            c = ((e, t) => {
                                let u = 0,
                                    n = e.length - 1;
                                for (; n - u >= 0; ) {
                                    const a = u + Math.ceil(0.5 * (n - u));
                                    Bt(e[a], t) ? (n = a - 1) : (u = a + 1);
                                }
                                return u - 1;
                            })(s, i);
                        if (c < 0) return [a, !1];
                        const d = yt(s, a, c, l, n.length, n),
                            _ = d[0],
                            m = d[1];
                        return (m && (a.splice(_, 1, m), a.splice(_ + 1)), [a, !0]);
                    },
                    St = a().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: u,
                            binding: r,
                            isTooltipEnable: i = !1,
                            isTruncationAvailable: l = !1,
                            customTooltipArgs: o,
                            targetId: s,
                            justifyContent: c = nt.FlexStart,
                            alignContent: d = nt.FlexStart,
                            truncateIdentify: _ = '...',
                        }) => {
                            const m = (0, n.useRef)(null),
                                E = (0, n.useRef)({ height: 0, width: 0 }),
                                A = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                f = A[0],
                                h = A[1],
                                p = (0, n.useMemo)(() => wt(e, r, { justifyContent: c }), [r, c, e]),
                                F = (0, n.useMemo)(() => {
                                    if (
                                        i &&
                                        f.isTruncated &&
                                        (!r || !Object.values(r).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, o, {
                                                stringifyKwargs: r ? JSON.stringify(r) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: s,
                                        };
                                }, [r, i, s, e, o, f.isTruncated]),
                                b = (0, n.useCallback)(
                                    (e) => {
                                        ((E.current.width = e.contentRect.width),
                                            (E.current.height = e.contentRect.height));
                                        const t = xt(m, p, E.current, _),
                                            n = t[0],
                                            a = t[1];
                                        (h({ elementList: n, isTruncated: a, isTruncateFinished: !0 }), u && u(a));
                                    },
                                    [u, _, p],
                                ),
                                v = (0, n.useMemo)(() => ({ justifyContent: c, alignContent: d }), [d, c]);
                            return (
                                ((e, t, u = !0) => {
                                    const a = (0, n.useCallback)(
                                        (e) => {
                                            const u = e[0];
                                            t && t(u);
                                        },
                                        [t],
                                    );
                                    (0, n.useEffect)(() => {
                                        if (!e.current || !u) return;
                                        const t = new et.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, u, e]);
                                })(m, b, l),
                                a().createElement(
                                    'div',
                                    {
                                        className: g()(
                                            tt.base,
                                            t,
                                            tt.base__zeroPadding,
                                            l && tt.base__isTruncationAvailable,
                                        ),
                                        style: v,
                                    },
                                    a().createElement('div', { className: tt.unTruncated, ref: m }, p),
                                    a().createElement(
                                        Qe,
                                        {
                                            tooltipArgs: F,
                                            className: g()(
                                                tt.tooltip,
                                                tt[`tooltip__justify-${c}`],
                                                tt[`tooltip__align-${d}`],
                                            ),
                                        },
                                        a().createElement(
                                            'div',
                                            {
                                                className: g()(
                                                    tt.truncated,
                                                    !f.isTruncateFinished && l && tt.truncated__hide,
                                                ),
                                                style: v,
                                            },
                                            f.isTruncateFinished && l ? f.elementList : p,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Lt = {
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
                    Tt = [
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
                function Ot() {
                    return (
                        (Ot =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ot.apply(this, arguments)
                    );
                }
                const Rt = (e) => {
                    let t = e.caption,
                        u = e.onClick,
                        r = e.goto,
                        l = e.classNames,
                        o = e.onMouseEnter,
                        s = e.onMouseLeave,
                        c = e.onMouseDown,
                        d = e.onMouseUp,
                        _ = e.side,
                        m = void 0 === _ ? 'left' : _,
                        E = e.type,
                        A = void 0 === E ? 'back' : E,
                        f = e.soundHover,
                        h = void 0 === f ? 'highlight' : f,
                        p = e.soundClick,
                        F = void 0 === p ? 'play' : p,
                        b = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, Tt);
                    const v = (0, n.useCallback)(
                            (e) => {
                                (null == o || o(e), i.O.sound.play.sound(h));
                            },
                            [o, h],
                        ),
                        D = (0, n.useCallback)(
                            (e) => {
                                null == s || s(e);
                            },
                            [s],
                        ),
                        w = (0, n.useCallback)(
                            (e) => {
                                (null == c || c(e), i.O.sound.play.sound(F));
                            },
                            [c, F],
                        ),
                        B = (0, n.useCallback)(
                            (e) => {
                                null == d || d(e);
                            },
                            [d],
                        );
                    return a().createElement(
                        'div',
                        Ot(
                            {
                                className: g()(
                                    Lt.base,
                                    Lt[`base__${A}`],
                                    Lt[`base__${m}`],
                                    null == l ? void 0 : l.base,
                                ),
                                onMouseEnter: v,
                                onMouseLeave: D,
                                onMouseDown: w,
                                onMouseUp: B,
                                onClick: u,
                            },
                            b,
                        ),
                        'info' !== A && a().createElement('div', { className: Lt.shine }),
                        a().createElement(
                            'div',
                            {
                                className: g()(
                                    Lt.icon,
                                    Lt[`icon__${A}`],
                                    Lt[`icon__${m}`],
                                    null == l ? void 0 : l.icon,
                                ),
                            },
                            a().createElement('div', { className: g()(Lt.glow, null == l ? void 0 : l.glow) }),
                        ),
                        a().createElement(
                            'div',
                            { className: g()(Lt.caption, Lt[`caption__${A}`], null == l ? void 0 : l.caption) },
                            t,
                        ),
                        r && a().createElement('div', { className: g()(Lt.goto, null == l ? void 0 : l.goto) }, r),
                    );
                };
                let Nt;
                !(function (e) {
                    ((e.responsiveHeader = 'responsiveHeader'),
                        (e.responsiveClosePosition = 'responsiveClosePosition'),
                        (e.disableResponsiveContentPosition = 'disableResponsiveContentPosition'));
                })(Nt || (Nt = {}));
                function It(e, t, u) {
                    const a = (0, n.useContext)(d);
                    let r = Object.entries(a).filter(([e, t]) => !0 === t && e in o);
                    return (
                        u && (r = r.filter((e) => u.includes(e[0]))),
                        e.reduce((e, u) => {
                            const n = r.map((e) =>
                                g()(t[((e, t) => e + '__' + t)(u, e[0])], t[((e, t) => e + O(t))(u, e[0])]),
                            );
                            return ((e[u] = g()(t[u], ...n)), e);
                        }, {})
                    );
                }
                const Mt = {
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
                    Pt = (0, n.memo)(
                        ({
                            isShown: e = !0,
                            classMix: t,
                            onClose: u,
                            icon: r,
                            topRight: i,
                            title: l,
                            content: o,
                            buttons: s,
                            footer: c,
                            displayFlags: d,
                            classNames: _,
                        }) => {
                            const m = ((e, t) => Object.keys(t).reduce((t, u) => ((t[u] = e.includes(u)), t), {}))(
                                    d,
                                    Nt,
                                ),
                                E = m.responsiveHeader,
                                A = m.responsiveClosePosition,
                                f = m.disableResponsiveContentPosition,
                                h = It(['base'], Mt),
                                p = (0, n.useCallback)(() => {
                                    u && u();
                                }, [u]),
                                F = g()(h.base, t),
                                b = g()(
                                    Mt.center,
                                    r && Mt.center__withIcon,
                                    e && Mt.center__shown,
                                    !f && Mt.center__responsive,
                                    null == _ ? void 0 : _.center,
                                ),
                                v = g()(Mt.icon, E && Mt.icon__responsive, null == _ ? void 0 : _.icon),
                                D = g()(Mt.title, E && Mt.title__responsive, null == _ ? void 0 : _.title),
                                w = g()(Mt.closeBtn, A && Mt.closeBtn__responsive),
                                B = g()(
                                    Mt.divider,
                                    !o && Mt.divider__noContent,
                                    !c && Mt.divider__noFooter,
                                    null == _ ? void 0 : _.divider,
                                );
                            return a().createElement(
                                'div',
                                { className: F },
                                a().createElement(
                                    'div',
                                    { className: Mt.topRight },
                                    i,
                                    a().createElement(
                                        'div',
                                        { className: w },
                                        a().createElement(Rt, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: p,
                                        }),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: b },
                                    r && a().createElement('div', { className: v }, r),
                                    l && a().createElement('div', { className: D }, l),
                                    o && a().createElement('div', { className: Mt.content }, o),
                                    a().createElement('div', { className: B }),
                                    c && a().createElement('div', { className: Mt.footer }, c),
                                    s && a().createElement('div', { className: Mt.buttons }, s),
                                ),
                            );
                        },
                    ),
                    jt = 'RecruitIcon_base_dd',
                    Wt = 'RecruitIcon_block_ea',
                    Ht = 'RecruitIcon_block__backgroundIcon_32',
                    $t = 'RecruitIcon_icon_06',
                    Vt = 'RecruitIcon_icon__standartIcon_0e',
                    Gt = 'RecruitIcon_voiceoverIcon_97',
                    Ut = 'RecruitIcon_separator_b7',
                    zt = 'RecruitIcon_separator__small_8f',
                    qt = (e) => (e ? { backgroundImage: `url(${e})` } : void 0),
                    Kt = ({ hasVoiceover: e = !1, icon: t, bgIcon: u }) =>
                        a().createElement(
                            'div',
                            { className: jt },
                            a().createElement(
                                'div',
                                { className: g()(Wt, u && Ht), style: qt(u) },
                                a().createElement('div', { className: g()($t, u && Vt), style: qt(t) }),
                            ),
                            a().createElement('div', { className: g()(Ut, u && zt) }),
                            e && a().createElement('div', { className: Gt }),
                        );
                function Yt() {}
                function Zt() {
                    return !1;
                }
                console.log;
                var Xt = u(9174);
                function Jt(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Qt(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return Qt(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Qt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const eu = (e) => (0 === e ? window : window.subViews.get(e));
                var tu = u(3946);
                const uu = (e) => {
                        const t = {
                            skillsDataBefore: e.object('tankmanBefore.skillList'),
                            skillsDataAfter: e.object('tankmanAfter.skillList'),
                            majorSkillsBefore: e.array('tankmanBefore.skillList.majorSkills'),
                            bonusSkillsBefore: e.array('tankmanBefore.skillList.bonusSkills'),
                            majorSkillsAfter: e.array('tankmanAfter.skillList.majorSkills'),
                            bonusSkillsAfter: e.array('tankmanAfter.skillList.bonusSkills'),
                        };
                        return {
                            skillsDataBefore: (0, tu.Om)(
                                () => ({
                                    skillsEfficiency: t.skillsDataBefore.get().skillsEfficiency,
                                    majorSkills: t.majorSkillsBefore.get(),
                                    bonusSkills: t.bonusSkillsBefore.get(),
                                }),
                                { equals: Zt },
                            ),
                            skillsDataAfter: (0, tu.Om)(
                                () => ({
                                    skillsEfficiency: t.skillsDataAfter.get().skillsEfficiency,
                                    majorSkills: t.majorSkillsAfter.get(),
                                    bonusSkills: t.bonusSkillsAfter.get(),
                                }),
                                { equals: Zt },
                            ),
                        };
                    },
                    nu = ((e, t) => {
                        const u = (0, n.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: l, children: o, mocks: s }) {
                                const c = (0, n.useRef)([]),
                                    d = (u, n, a) => {
                                        var r;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = eu,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function r(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = a.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const l = (e) => {
                                                    const a = u(t),
                                                        r = n.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (u, r) => {
                                                        const o = 'string' == typeof r ? `${n}.${r}` : n,
                                                            s = i.O.view.addModelObserver(o, t, !0);
                                                        return (a.set(s, u), e && u(l(r)), s);
                                                    },
                                                    readByPath: l,
                                                    createCallback: (e, t) => {
                                                        const u = l(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = l(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, u = Jt(a.keys()); !(e = u()).done; ) r(e.value, t);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            o =
                                                'real' === u
                                                    ? l
                                                    : Object.assign({}, l, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            s = (e) =>
                                                'mocks' === u ? (null == a ? void 0 : a.getter(e)) : o.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            _ = e({
                                                mode: u,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const t = s(e),
                                                            n = Xt.LO.box(t, { equals: Zt });
                                                        return (
                                                            'real' === u &&
                                                                o.subscribe(
                                                                    (0, Xt.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    array: (e, t) => {
                                                        const n = null != t ? t : s(e),
                                                            a = Xt.LO.box(n, { equals: Zt });
                                                        return (
                                                            'real' === u &&
                                                                o.subscribe(
                                                                    (0, Xt.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : s(e),
                                                            a = Xt.LO.box(n, { equals: Zt });
                                                        return (
                                                            'real' === u &&
                                                                o.subscribe(
                                                                    (0, Xt.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = s(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = Xt.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    o.subscribe(
                                                                        (0, Xt.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                r = Object.entries(a),
                                                                i = r.reduce(
                                                                    (e, [t, u]) => ((e[u] = Xt.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    o.subscribe(
                                                                        (0, Xt.aD)((e) => {
                                                                            r.forEach(([t, u]) => {
                                                                                i[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            m = { mode: u, model: _, externalModel: o, cleanup: d };
                                        return {
                                            model: _,
                                            controls: 'mocks' === u && a ? a.controls(m) : t(m),
                                            externalModel: o,
                                            mode: u,
                                        };
                                    },
                                    _ = (0, n.useRef)(!1),
                                    m = (0, n.useState)(r),
                                    E = m[0],
                                    g = m[1],
                                    A = (0, n.useState)(() => d(r, l, s)),
                                    f = A[0],
                                    h = A[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        _.current ? h(d(E, l, s)) : (_.current = !0);
                                    }, [s, E, l]),
                                    (0, n.useEffect)(() => {
                                        g(r);
                                    }, [r]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (f.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [f],
                                    ),
                                    a().createElement(u.Provider, { value: f }, o)
                                );
                            },
                            () => (0, n.useContext)(u),
                        ];
                    })(
                        ({ observableModel: e }) =>
                            Object.assign({}, e.primitives(['name']), {
                                iconModel: e.object('iconModel.icon'),
                                bgIconModel: e.object('iconModel.bgIcon'),
                                computes: uu(e),
                            }),
                        Yt,
                    ),
                    au = nu[0],
                    ru = nu[1],
                    iu = 'WarningText_base_10',
                    lu = 'WarningText_alertIcon_8f',
                    ou = (0, n.memo)(({ showIcon: e = !0, className: t, children: u }) =>
                        a().createElement(
                            'div',
                            { className: g()(iu, t) },
                            e && a().createElement('div', { className: lu }),
                            u,
                        ),
                    );
                var su = u(7030);
                const cu = {
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
                let du;
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
                })(du || (du = {}));
                const _u = a().memo(function ({ role: e, size: t = du.c30x30, className: u }) {
                        const r = (0, n.useMemo)(() => {
                            try {
                                var u;
                                const n =
                                    null == (u = R.images.gui.maps.icons.tankmen.roles.$dyn(t))
                                        ? void 0
                                        : u.$dyn(e.replace(/-/g, '_'));
                                if (!n) throw Error;
                                return { backgroundImage: `url(${n})` };
                            } catch (t) {
                                console.error('Cant find resource in RoleIcon: ', e);
                            }
                        }, [e, t]);
                        return a().createElement('div', { style: r, className: g()(cu.base, cu[`base__${t}`], u) });
                    }),
                    mu = 100,
                    Eu = 'new_skill';
                let gu;
                function Au(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
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
                })(gu || (gu = {}));
                function fu(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function hu(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function pu(e) {
                    if (0 !== e.length) return Au(e, e.length - 1);
                }
                const Fu = {
                    base: 'EfficiencyIndicator_base_34',
                    base__big: 'EfficiencyIndicator_base__big_a1',
                    base__large: 'EfficiencyIndicator_base__large_dc',
                    base__untrained: 'EfficiencyIndicator_base__untrained_cd',
                    percent: 'EfficiencyIndicator_percent_6b',
                    percent__full: 'EfficiencyIndicator_percent__full_30',
                    icon: 'EfficiencyIndicator_icon_da',
                };
                let bu;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Big = 'big'), (e.Large = 'large'));
                })(bu || (bu = {}));
                const vu = (0, n.memo)(
                    ({
                        efficiencyValue: e,
                        tankmanID: t = -1,
                        className: u,
                        targetId: n = R.views.lobby.crew.widgets.CrewWidget('resId'),
                        size: r = bu.Normal,
                    }) => {
                        const i = -1 === e,
                            l = i
                                ? { tooltipId: 'crewSkillUntrained' }
                                : { tooltipId: 'skillsEfficiency', skillEfficiency: e, tankmanID: t };
                        return a().createElement(
                            Xe,
                            { targetId: n, args: l, isEnabled: -1 !== t },
                            a().createElement(
                                'div',
                                { className: g()(Fu.base, Fu[`base__${r}`], i && Fu.base__untrained, u) },
                                i
                                    ? a().createElement('div', { className: Fu.icon })
                                    : a().createElement(
                                          'div',
                                          { className: g()(Fu.percent, 1 === e && Fu.percent__full) },
                                          I(M.Z5.getNumberFormat(100 * e, M.B3.INTEGRAL)),
                                      ),
                            ),
                        );
                    },
                );
                (R.strings.common.percentValue(), R.strings.common.plusPercentValue());
                let Du;
                !(function (e) {
                    ((e.Objective = 'objective'), (e.Possessive = 'possessive'));
                })(Du || (Du = {}));
                (R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body());
                let wu;
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
                })(wu || (wu = {}));
                let Bu;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained'));
                })(Bu || (Bu = {}));
                const Cu = a().memo(function ({ blinkStyle: e, isEnabled: t, children: u }) {
                        return a().createElement(su.animated.div, { style: t && e ? e : void 0 }, u);
                    }),
                    ku = 'AcceleratedTrainingIcon_base_4f',
                    yu = 'AcceleratedTrainingIcon_icon_45',
                    xu = (0, n.memo)(({ classMix: e, targetId: t }) =>
                        a().createElement(
                            Se,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                                targetId: t,
                            },
                            a().createElement(
                                'div',
                                { className: g()(ku, e) },
                                a().createElement('div', { className: yu }),
                            ),
                        ),
                    );
                let Su, Lu, Tu, Ou, Ru, Nu, Iu;
                (!(function (e) {
                    ((e.None = 'none'),
                        (e.Default = 'default'),
                        (e.Overlap = 'overlap'),
                        (e.ExtraOverlap = 'extraOverlap'));
                })(Su || (Su = {})),
                    (function (e) {
                        ((e.None = 'none'),
                            (e.SlideOutAndBlink = 'slideOutAndBlink'),
                            (e.SlideOut = 'slideOut'),
                            (e.FadeIn = 'fadeIn'),
                            (e.Blink = 'blink'),
                            (e.ScaleUp = 'ScaleUp'));
                    })(Lu || (Lu = {})),
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
                    })(Tu || (Tu = {})),
                    (function (e) {
                        ((e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red'));
                    })(Ou || (Ou = {})),
                    (function (e) {
                        ((e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44'));
                    })(Ru || (Ru = {})),
                    (function (e) {
                        ((e.Major = 'major'), (e.Bonus = 'bonus'));
                    })(Nu || (Nu = {})),
                    (function (e) {
                        ((e.Learned = 'learned'), (e.Learning = 'learning'));
                    })(Iu || (Iu = {})));
                const Mu = (e) => (e.level < mu ? Iu.Learning : Iu.Learned),
                    Pu = (e) =>
                        (function (e, t) {
                            for (let u = e.length - 1; u >= 0; u--) {
                                const n = fu(e[u]);
                                if (t(n, u, e)) return n;
                            }
                        })(e, (e) => e.level === mu),
                    ju = ({
                        name: e,
                        roleName: t,
                        level: u,
                        customName: n,
                        skillType: a,
                        skillIndex: r,
                        tooltipData: i,
                    }) => {
                        const l = { targetId: i.targetId, isEnabled: i.isEnabled };
                        return e === Eu
                            ? a === Nu.Major
                                ? Object.assign(
                                      {
                                          contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                          args: Object.assign({ tankmanID: i.tankmanID, skillIndex: r }, i.args),
                                      },
                                      l,
                                  )
                                : Object.assign(
                                      {
                                          header: R.strings.crew.matrix.skillTooltip.bonus.available.header(),
                                          body: R.strings.crew.matrix.skillTooltip.bonus.available.text(),
                                      },
                                      l,
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
                                              tankmanID: i.tankmanID,
                                              skillName: e,
                                              roleName: t,
                                              isBonus: a === Nu.Bonus,
                                              level: u,
                                              customName: n,
                                              skillIndex: r,
                                          },
                                          i.args,
                                      ),
                                  },
                                  l,
                              );
                    },
                    Wu = (e, t) => (e === Ru.c44x44 ? bu.Large : t ? bu.Big : bu.Normal),
                    Hu = (e, t) => {
                        const u = Au(e, t);
                        return null == u ? void 0 : u.name;
                    },
                    $u = (e, t) => {
                        const u = Au(e, t);
                        return null == u ? void 0 : u.level;
                    },
                    Vu = 33,
                    Gu = 0,
                    Uu = !0,
                    zu = 'play';
                const qu = [
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
                function Ku() {
                    return (
                        (Ku =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ku.apply(this, arguments)
                    );
                }
                const Yu = (0, n.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            r = e.getImageSource,
                            i = e.frameCount,
                            l = e.onAnimate,
                            o = e.frameTime,
                            s = void 0 === o ? Vu : o,
                            c = e.initialFrameIndex,
                            d = void 0 === c ? Gu : c,
                            _ = e.lastFrameIndex,
                            m = void 0 === _ ? i - 1 : _,
                            E = e.loop,
                            g = void 0 === E ? Uu : E,
                            A = e.state,
                            f = void 0 === A ? zu : A,
                            h = e.onAnimationDone,
                            p = e.onAnimationComplete,
                            F = e.poster,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, qu);
                        const v = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = v.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        (t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y));
                                    };
                                switch (f) {
                                    case 'play':
                                        return (function () {
                                            const e = Ju(d, m, r),
                                                t = Zu(d, m),
                                                n = window.setInterval(() => {
                                                    const a = t(),
                                                        r = e.get(a);
                                                    r
                                                        ? (null == l || l(a, r),
                                                          u(r),
                                                          a === m &&
                                                              (null == p || p(),
                                                              g || (null == h || h(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, s);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === d && F ? { path: F, x: 0, y: 0 } : r(d),
                                                t = new Image();
                                            t.src = e.path;
                                            const n = () => u(Xu(e, t));
                                            return (
                                                t.addEventListener('load', n),
                                                () => t.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [s, r, d, m, g, l, p, h, F, f]),
                            a().createElement('canvas', Ku({}, b, { width: t, height: u, ref: v }))
                        );
                    }),
                    Zu = (e, t) => {
                        let u = e;
                        return () => {
                            const n = u;
                            return ((u += 1), u > t && (u = e), n);
                        };
                    },
                    Xu = (e, t) => Object.assign({}, e, { img: t }),
                    Ju = (e, t, u) => {
                        const n = new Map(),
                            a = {};
                        for (let r = e; r <= t; r++) {
                            const e = u(r),
                                t = a[e.path];
                            if (t) n.set(r, Xu(e, t));
                            else {
                                const t = new Image();
                                ((a[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(r, Xu(e, t)));
                            }
                        }
                        return n;
                    };
                function Qu(e) {
                    const t = e.chunk,
                        u = t.rows * t.columns;
                    return (n) => {
                        const a = n % u,
                            r = (a % t.columns) * e.width,
                            i = Math.trunc(a / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / u)), x: r, y: i };
                    };
                }
                function en(e) {
                    return (t) => `${e}${t}`;
                }
                const tn = () => {
                        const e = (0, n.useState)(i.O.view.getScale()),
                            t = e[0],
                            u = e[1];
                        return (
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    u(i.O.view.getScale());
                                };
                                return (
                                    window.addEventListener('resize', e),
                                    () => {
                                        window.removeEventListener('resize', e);
                                    }
                                );
                            }, []),
                            t
                        );
                    },
                    un = [
                        'width',
                        'height',
                        'getSrcByFrame',
                        'frameCount',
                        'onAnimate',
                        'frameTime',
                        'initialFrameIndex',
                        'loop',
                        'state',
                        'onAnimationComplete',
                        'revers',
                    ];
                function nn() {
                    return (
                        (nn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        nn.apply(this, arguments)
                    );
                }
                let an;
                !(function (e) {
                    ((e.Play = 'play'), (e.Stop = 'stop'));
                })(an || (an = {}));
                const rn = (e, t, u) => {
                        const n = new Image();
                        ((n.src = u(t)), e.push(n));
                    },
                    ln =
                        ((0, n.memo)((e) => {
                            let t = e.width,
                                u = e.height,
                                r = e.getSrcByFrame,
                                i = e.frameCount,
                                l = e.onAnimate,
                                o = void 0 === l ? () => {} : l,
                                s = e.frameTime,
                                c = void 0 === s ? 33 : s,
                                d = e.initialFrameIndex,
                                _ = void 0 === d ? 0 : d,
                                m = e.loop,
                                E = void 0 === m || m,
                                g = e.state,
                                A = void 0 === g ? an.Play : g,
                                f = e.onAnimationComplete,
                                h = void 0 === f ? () => {} : f,
                                p = e.revers,
                                F = void 0 !== p && p,
                                b = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                    return a;
                                })(e, un);
                            const v = (0, n.useRef)(null);
                            return (
                                (0, n.useEffect)(() => {
                                    const e = v.current;
                                    if (!e) return;
                                    const n = i - 1,
                                        a = e.getContext('2d'),
                                        l = (n) => {
                                            (a.clearRect(0, 0, e.width, e.height), a.drawImage(n, 0, 0, t, u));
                                        };
                                    if ('stop' === A) {
                                        const e = r(0),
                                            t = new Image();
                                        t.src = e;
                                        const u = () => l(t);
                                        return (t.addEventListener('load', u), () => t.removeEventListener('load', u));
                                    }
                                    const s = ((e, t, u) => {
                                            const n = [];
                                            if (u) for (let u = e; u >= 0; u--) rn(n, u, t);
                                            else for (let u = 0; u < e; u++) rn(n, u, t);
                                            return n;
                                        })(i, r, F),
                                        d = ((e, t = 0) => {
                                            let u = t;
                                            return () => {
                                                const t = u;
                                                return ((u += 1), u > e && (u = 0), t);
                                            };
                                        })(n, _),
                                        m = setInterval(() => {
                                            const e = d(),
                                                t = s[e];
                                            (l(s[e]), o(e, t), e === n && (h(), E || clearInterval(m)));
                                        }, c);
                                    return () => clearInterval(m);
                                }, [i, c, r, u, _, E, o, h, A, t, F]),
                                a().createElement('canvas', nn({}, b, { width: t, height: u, ref: v }))
                            );
                        }),
                        (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2)),
                    on = (e) => -(Math.cos(Math.PI * e) - 1) / 2,
                    sn = {
                        base: 'AnimatedLostSkill_base_55',
                        base__c_24x24: 'AnimatedLostSkill_base__c_24x24_d5',
                        base__c_44x44: 'AnimatedLostSkill_base__c_44x44_72',
                        icon: 'AnimatedLostSkill_icon_d4',
                    },
                    cn = a().memo(function ({ type: e, index: t, totalAmount: u, className: r, size: l }) {
                        const o = (0, n.useState)(an.Stop),
                            s = o[0],
                            c = o[1],
                            d = tn(),
                            _ =
                                l === Ru.c44x44
                                    ? ((e) => ({
                                          width: 96,
                                          height: 96,
                                          frameCount: 24,
                                          chunk: { count: 1, rows: 2, columns: 21 },
                                          getChunkPath: en(
                                              `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_big_${e}_`,
                                          ),
                                      }))(e)
                                    : ((e) => ({
                                          width: 64,
                                          height: 64,
                                          frameCount: 24,
                                          chunk: { count: 1, rows: 1, columns: 24 },
                                          getChunkPath: en(
                                              `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_small_${e}_`,
                                          ),
                                      }))(e),
                            m = Qu(_),
                            E = l === Ru.c44x44 ? 60 : 36,
                            A = (0, su.useSpring)(
                                () => ({
                                    from: { x: 0 },
                                    to: { x: i.O.view.remToPx(E) },
                                    config: { duration: 300, easing: ln },
                                    delay: 600 - 100 * t,
                                }),
                                [t, E, d],
                            )[0];
                        return (
                            (0, n.useEffect)(() => {
                                const e = setTimeout(() => c(an.Play), 100 * (u - 1) - 100 * t);
                                return () => clearTimeout(e);
                            }, [t, u]),
                            a().createElement(
                                Se,
                                { body: R.strings.dialogs.perksReset.lostSkill.tooltip.description() },
                                a().createElement(
                                    su.animated.div,
                                    { style: A, className: g()(sn.base, sn[`base__${l}`], r) },
                                    a().createElement(
                                        'div',
                                        { className: sn.icon },
                                        a().createElement(Yu, {
                                            width: _.width,
                                            height: _.height,
                                            frameCount: _.frameCount,
                                            getImageSource: m,
                                            loop: !1,
                                            state: s,
                                            style: { transform: `scale(${d})` },
                                        }),
                                    ),
                                ),
                            )
                        );
                    }),
                    dn = 'AnimatedNewSkill_base_0f';
                function _n(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return mn(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return mn(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function mn(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const En = new Map();
                let gn = null;
                const An = () => {
                        En.size
                            ? gn ||
                              (gn = window.setInterval(() => {
                                  for (var e, t = _n(En.values()); !(e = t()).done; ) {
                                      (0, e.value)();
                                  }
                              }, 5e3))
                            : gn && (clearInterval(gn), (gn = null));
                    },
                    fn = ({ type: e, state: t }) => {
                        const u = ((e, t) => ({
                                width: 24,
                                height: 24,
                                frameCount: 42,
                                chunk: { count: 1, columns: 42, rows: 1 },
                                getChunkPath: en(`R.images.gui.maps.icons.sequence.new_skill.${e}_${t}_`),
                            }))(e, t),
                            r = Qu(u),
                            i = (0, n.useState)(an.Stop),
                            l = i[0],
                            o = i[1];
                        return (
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    o(an.Play);
                                };
                                var t;
                                return (
                                    (t = e),
                                    En.set(t, t),
                                    An(),
                                    () =>
                                        ((e) => {
                                            (En.delete(e), An());
                                        })(e)
                                );
                            }, []),
                            a().createElement(Yu, {
                                width: u.width,
                                height: u.height,
                                frameCount: u.frameCount,
                                getImageSource: r,
                                loop: !1,
                                state: l,
                                onAnimationDone: () => {
                                    o(an.Stop);
                                },
                                className: dn,
                            })
                        );
                    },
                    hn = ({ size: e, children: t, className: u }) => {
                        const n = tn(),
                            r = e === Ru.c44x44 ? 48 : 26,
                            i = (0, su.useSpring)({
                                from: { opacity: 0, marginRight: -r * n },
                                to: [{ marginRight: 0 }, { opacity: 1 }],
                                config: { duration: 400, easing: on },
                                delay: 800,
                            });
                        return a().createElement(su.animated.div, { style: i, className: u }, t);
                    },
                    pn = a().memo(function ({ isEnabled: e, className: t, children: u }) {
                        const r = (0, su.useSpring)(() => ({ from: { scale: 1 } })),
                            i = r[0],
                            l = r[1];
                        return (
                            (0, n.useEffect)(() => {
                                e &&
                                    l.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: on },
                                    });
                            }, [e, l]),
                            a().createElement(su.animated.div, { style: e ? i : void 0, className: t }, u)
                        );
                    });
                let Fn;
                !(function (e) {
                    ((e[(e.None = 0)] = 'None'), (e[(e.FadeIn = 1)] = 'FadeIn'), (e[(e.Scale = 2)] = 'Scale'));
                })(Fn || (Fn = {}));
                const bn = a().memo(function ({
                        size: e,
                        skillsSignature: t,
                        animationType: u,
                        className: n,
                        children: r,
                    }) {
                        return u === Fn.Scale
                            ? a().createElement(pn, { isEnabled: !0, className: n }, r)
                            : u === Fn.FadeIn
                              ? a().createElement(hn, { size: e, key: t, className: n }, r)
                              : a().createElement('div', { className: n }, r);
                    }),
                    vn = a().memo(function ({ size: e, className: t, children: u }) {
                        const n = e === Ru.c44x44 ? 48 : 26,
                            r = tn(),
                            i = (0, su.useSpring)(
                                () => ({
                                    from: { opacity: 1, marginRight: 0 },
                                    to: [{ opacity: 0 }, { marginRight: -n * r }],
                                    config: { duration: 400, easing: on },
                                }),
                                [r, n],
                            )[0];
                        return a().createElement(su.animated.div, { style: i, className: t }, u);
                    }),
                    Dn = ['className', 'children'];
                const wn = (e) => {
                    let t = e.className,
                        u = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, Dn);
                    return a().createElement(Qe, { tooltipArgs: ju(n), className: t }, u);
                };
                let Bn;
                !(function (e) {
                    ((e.None = 'none'), (e.Learned = 'learned'), (e.Improved = 'Improved'));
                })(Bn || (Bn = {}));
                const Cn = {
                    base: 'SkillIcon_base_43',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__c_80x80: 'SkillIcon_base__c_80x80_79',
                    base__c_120x90: 'SkillIcon_base__c_120x90_8c',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
                let kn;
                !(function (e) {
                    ((e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs'));
                })(kn || (kn = {}));
                const yn = a().memo(function ({ iconName: e, size: t = kn.c24x24, className: u }) {
                        var n;
                        const r = null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : n.$dyn(e);
                        return a().createElement('div', {
                            style: null !== r ? { backgroundImage: `url(${r})` } : void 0,
                            className: g()(Cn.base, Cn[`base__${t}`], u),
                        });
                    }),
                    xn = {
                        base: 'Skill_base_1f',
                        base__c_24x24: 'Skill_base__c_24x24_29',
                        base__c_44x44: 'Skill_base__c_44x44_5a',
                        background: 'Skill_background_02',
                        base__borderLightYellow: 'Skill_base__borderLightYellow_09',
                        base__borderYellow: 'Skill_base__borderYellow_3e',
                        base__borderRed: 'Skill_base__borderRed_d2',
                        base__typeBonus: 'Skill_base__typeBonus_23',
                        base__disabled: 'Skill_base__disabled_85',
                        newSkillHighLight: 'Skill_newSkillHighLight_44',
                        icon: 'Skill_icon_b0',
                        disabledOverlay: 'Skill_disabledOverlay_3b',
                    },
                    Sn = { [Ru.c24x24]: kn.c22x22, [Ru.c44x44]: kn.c52x52 },
                    Ln = ({
                        size: e,
                        isIrrelevant: t,
                        efficiencyState: u,
                        type: n,
                        iconName: r,
                        name: i,
                        skillState: l,
                        battleBooster: o,
                        className: s,
                    }) => {
                        const c = o !== Bn.None,
                            d = ((e, t, u, n, a = Bu.Normal) =>
                                e === Eu
                                    ? Ou.LightYellow
                                    : a === Bu.Untrained || n
                                      ? t === Iu.Learning
                                          ? Ou.Yellow
                                          : Ou.Grey
                                      : a === Bu.Low
                                        ? u
                                            ? Ou.Grey
                                            : Ou.Red
                                        : t === Iu.Learning
                                          ? Ou.Yellow
                                          : Ou.Grey)(i, l, c, t, u),
                            _ = (!c && u === Bu.Untrained) || t,
                            m = r === Eu;
                        return a().createElement(
                            'div',
                            {
                                className: g()(
                                    xn.base,
                                    xn[`base__type${O(n)}`],
                                    xn[`base__state${O(l)}`],
                                    xn[`base__border${O(d)}`],
                                    xn[`base__${e}`],
                                    _ && xn.base__disabled,
                                    s,
                                ),
                            },
                            a().createElement('div', {
                                className: xn.background,
                                style:
                                    n === Nu.Bonus
                                        ? {
                                              backgroundImage: `url('R.images.gui.maps.icons.crew.skillsFrame.${e}.${d}')`,
                                          }
                                        : void 0,
                            }),
                            m && l === Iu.Learned && a().createElement('div', { className: xn.newSkillHighLight }),
                            a().createElement(yn, { iconName: r, size: Sn[e], className: xn.icon }),
                            _ && a().createElement('div', { className: xn.disabledOverlay }),
                        );
                    };
                function Tn() {
                    return (
                        (Tn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Tn.apply(this, arguments)
                    );
                }
                const On = (e, t) => (e ? Fn.Scale : t ? Fn.FadeIn : Fn.None),
                    Rn = ({
                        index: e,
                        skill: t,
                        previousSkill: u,
                        skillState: n,
                        skillType: r,
                        size: i,
                        efficiencyState: l,
                        tooltipData: o,
                        skillsSignature: s,
                        blinkStyle: c,
                        isNewSkillAnimated: d = !1,
                        skillAnimationType: _ = Lu.None,
                        className: m,
                    }) => {
                        const E = _ === Lu.Blink || _ === Lu.SlideOutAndBlink,
                            g = _ === Lu.SlideOutAndBlink || _ === Lu.SlideOut,
                            A = _ === Lu.FadeIn,
                            f = {
                                skillIndex: e,
                                name: t.name,
                                roleName: t.roleName,
                                customName: t.customName,
                                level: t.level,
                                tooltipData: o,
                                skillType: r,
                            };
                        return d && t.name === Eu && i === Ru.c24x24
                            ? a().createElement(
                                  wn,
                                  Tn({}, f, { className: m }),
                                  a().createElement(fn, { type: r, state: n }),
                              )
                            : a().createElement(
                                  a().Fragment,
                                  null,
                                  u &&
                                      g &&
                                      a().createElement(
                                          vn,
                                          { size: i, className: m, key: u.name },
                                          a().createElement(
                                              Cu,
                                              { blinkStyle: c, isEnabled: E },
                                              a().createElement(
                                                  Ln,
                                                  Tn({ size: i, type: r, efficiencyState: l, skillState: n }, u),
                                              ),
                                          ),
                                      ),
                                  a().createElement(
                                      bn,
                                      {
                                          size: i,
                                          skillsSignature: s,
                                          className: m,
                                          animationType: On(_ === Lu.ScaleUp, A),
                                      },
                                      a().createElement(
                                          wn,
                                          f,
                                          a().createElement(
                                              Cu,
                                              { blinkStyle: c, isEnabled: E },
                                              a().createElement(
                                                  Ln,
                                                  Tn({ size: i, type: r, efficiencyState: l, skillState: n }, t),
                                              ),
                                          ),
                                      ),
                                  ),
                              );
                    },
                    Nn = {
                        base: 'LostLevelAnimation_base_f6',
                        level: 'LostLevelAnimation_level_f0',
                        level__skillLost: 'LostLevelAnimation_level__skillLost_a2',
                        level__skillBlur: 'LostLevelAnimation_level__skillBlur_24',
                        base__c_24x24: 'LostLevelAnimation_base__c_24x24_1c',
                        base__c_44x44: 'LostLevelAnimation_base__c_44x44_44',
                    },
                    In = a().memo(function ({ size: e, level: t, withSlideOut: u = !0 }) {
                        const n = (0, su.useSpring)({ to: { val: t }, config: { duration: 150 } }),
                            r = (0, su.useSpring)(() => ({
                                from: { x: i.O.view.remToPx(-5), opacity: 0 },
                                to: { x: 0, opacity: 1 },
                                config: { duration: 300, easing: ln },
                                delay: 700,
                            }))[0],
                            l = (0, su.useSpring)(
                                () => ({
                                    from: { opacity: 0 },
                                    to: [{ opacity: 1 }, { opacity: 0 }],
                                    config: { duration: 150, easing: ln },
                                }),
                                [t],
                            )[0];
                        return a().createElement(
                            'div',
                            { className: g()(Nn.base, Nn[`base__${e}`]) },
                            a().createElement(
                                su.animated.div,
                                { style: u ? r : void 0, className: g()(Nn.level, Nn.level__skillLost) },
                                n.val.to((e) => I(Math.floor(e))),
                            ),
                            a().createElement(
                                su.animated.div,
                                {
                                    style: u ? Object.assign({}, r, l) : l,
                                    className: g()(Nn.level, Nn.level__skillBlur),
                                },
                                n.val.to((e) => I(Math.floor(e))),
                            ),
                        );
                    }),
                    Mn = 'SkillLevel_base_d2',
                    Pn = 'SkillLevel_base__highlighted_e3',
                    jn = ({ skillLevel: e, isHighlighted: t = !1, className: u }) =>
                        a().createElement(
                            'div',
                            { className: g()(Mn, t && Pn, u) },
                            I(
                                e > 0 && e < 0.01
                                    ? 0.01
                                    : ((e, t = 2) => {
                                          const u = Math.pow(10, t);
                                          return e % 1 > 0 ? Math.round(e * u) / u : e;
                                      })(e),
                            ),
                        ),
                    Wn = ({
                        skillsAmountDiff: e,
                        size: t,
                        skillType: u,
                        wasLearned: n,
                        isAllMajorSkillsLearned: r,
                        skill: i,
                        possibleSkill: l,
                        blinkStyle: o,
                        className: s,
                    }) => {
                        const c = l || i,
                            d = void 0 !== i && void 0 !== l ? l.level - i.level : 0,
                            _ = e > 0,
                            m = e < 0 || d > 0;
                        return !c ||
                            (c.level === mu && 0 === d) ||
                            ((null == l ? void 0 : l.level) === mu && u === Nu.Bonus && d > 0 && !r)
                            ? null
                            : _ || (d < 0 && 0 === e)
                              ? a().createElement(In, { size: t, level: c.level, withSlideOut: _ })
                              : a().createElement(
                                    pn,
                                    { isEnabled: Boolean(n) },
                                    a().createElement(
                                        Cu,
                                        { blinkStyle: o, isEnabled: m },
                                        a().createElement(jn, { skillLevel: c.level, isHighlighted: m, className: s }),
                                    ),
                                );
                    },
                    Hn = {
                        base: 'Row_base_bb',
                        skill: 'Row_skill_fb',
                        base__c_44x44: 'Row_base__c_44x44_4f',
                        base__c_24x24: 'Row_base__c_24x24_16',
                        base__collapseNoMargins: 'Row_base__collapseNoMargins_13',
                        base__collapseOverlap: 'Row_base__collapseOverlap_2c',
                        base__collapseReducedMargins: 'Row_base__collapseReducedMargins_3b',
                        skill__last: 'Row_skill__last_0a',
                        skill__lastLearnedSkill: 'Row_skill__lastLearnedSkill_6c',
                        base__collapseOnlyLearningOverlap: 'Row_base__collapseOnlyLearningOverlap_19',
                        skill__stateLearning: 'Row_skill__stateLearning_5d',
                        base__collapseExtraOverlap: 'Row_base__collapseExtraOverlap_10',
                        base__collapseExtraOverlapWithLevel: 'Row_base__collapseExtraOverlapWithLevel_90',
                        base__collapseExtraOverlapWithEfficiency: 'Row_base__collapseExtraOverlapWithEfficiency_90',
                        base__collapseExtraOverlapWithLevelAndEfficiency:
                            'Row_base__collapseExtraOverlapWithLevelAndEfficiency_4e',
                        level: 'Row_level_56',
                        acceleratedTrainingIcon: 'Row_acceleratedTrainingIcon_c7',
                        lostSkill: 'Row_lostSkill_32',
                    },
                    $n = ({
                        skills: e,
                        skillType: t = Nu.Major,
                        possibleSkills: u,
                        isAcceleratedTrainingVisible: n = !1,
                        collapseLayout: r = Tu.None,
                        efficiencyState: i,
                        size: l,
                        tooltipData: o,
                        blinkStyle: s,
                        isSkillsEfficiencyLearning: c = !1,
                        isAllMajorSkillsLearned: d = !1,
                        isNewSkillAnimated: _ = !1,
                        className: m,
                    }) => {
                        const E = void 0 === u ? e : u,
                            A = X(e),
                            f = X(E),
                            h = A && pu(A),
                            p = pu(e),
                            F = Pu(E),
                            b = pu(E),
                            v = u ? e.length - u.length : 0,
                            D = i !== Bu.Low || c || (b && p && b.level !== p.level),
                            w = ((e) => hu(e, (e) => e.name).join())(E);
                        return a().createElement(
                            'div',
                            { className: g()(Hn.base, Hn[`base__${l}`], Hn[`base__collapse${O(r)}`], m) },
                            ((e, t, u, n, a) => {
                                if (!n || !t) return hu(u, (e, t) => a(e, Lu.None, t));
                                const r = new Map(hu(t, ({ name: e, level: t }) => [e, t])),
                                    i = new Map(hu(e, ({ name: e, level: t }) => [e, t]));
                                let l = !1;
                                return hu(u, (o, s) => {
                                    const c = o.name,
                                        d = o.level,
                                        _ = c === Eu,
                                        m = Hu(e, s),
                                        E = _ ? $u(e, s) : i.get(c),
                                        g = _ ? $u(t, s) : r.get(c),
                                        A = Hu(u, s - 1),
                                        f = Hu(n, s),
                                        h = Hu(n, s + 1);
                                    let p = Lu.None;
                                    return (
                                        l || c !== h || A === f || _ || m !== Eu
                                            ? _ && s === u.length - 1 && l
                                                ? (p = Lu.FadeIn)
                                                : (!_ && !i.has(c)) || (void 0 === m && _) || (E !== d && d === mu)
                                                  ? (p = Lu.Blink)
                                                  : g !== E && (p = Lu.ScaleUp)
                                            : ((l = !0), (p = i.has(c) ? Lu.SlideOut : Lu.SlideOutAndBlink)),
                                        a(o, p, s)
                                    );
                                });
                            })(e, A, E, f, (e, u, n) => {
                                const r = Mu(e);
                                return a().createElement(Rn, {
                                    key: n,
                                    index: n,
                                    skill: e,
                                    skillState: r,
                                    skillType: t,
                                    previousSkill: f && Au(f, n),
                                    skillAnimationType: u,
                                    size: l,
                                    skillsSignature: w,
                                    efficiencyState: i,
                                    tooltipData: o,
                                    blinkStyle: s,
                                    isNewSkillAnimated: _,
                                    className: g()(
                                        Hn.skill,
                                        Hn[`skill__state${O(r)}`],
                                        e === b && Hn.skill__last,
                                        e === F && Hn.skill__lastLearnedSkill,
                                    ),
                                });
                            }),
                            D &&
                                a().createElement(Wn, {
                                    skillsAmountDiff: v,
                                    size: l,
                                    wasLearned: h && p && h.level !== p.level,
                                    skillType: t,
                                    isAllMajorSkillsLearned: d,
                                    skill: p,
                                    possibleSkill: b,
                                    blinkStyle: s,
                                    className: Hn.level,
                                }),
                            n &&
                                a().createElement(xu, {
                                    classMix: Hn.acceleratedTrainingIcon,
                                    targetId: null == o ? void 0 : o.targetId,
                                }),
                            v > 0 &&
                                ((e, t) => {
                                    const u = [];
                                    for (let n = 0; n < e; n++) u.push(t(n));
                                    return u;
                                })(v, (e) =>
                                    a().createElement(cn, {
                                        key: e,
                                        index: e,
                                        totalAmount: v,
                                        type: t,
                                        className: Hn.lostSkill,
                                        size: l,
                                    }),
                                ),
                        );
                    };
                function Vn() {
                    return (
                        (Vn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Vn.apply(this, arguments)
                    );
                }
                const Gn = ({
                        skills: e,
                        collapseLayout: t = Tu.None,
                        skillType: u = Nu.Major,
                        efficiencyState: n,
                        size: r,
                        tooltipData: i,
                        className: l,
                        isAcceleratedTrainingVisible: o,
                    }) => {
                        const s = pu(e),
                            c = Pu(e),
                            d = n !== Bu.Low && (null == s ? void 0 : s.level) !== mu;
                        return a().createElement(
                            'div',
                            { className: g()(Hn.base, Hn[`base__${r}`], Hn[`base__collapse${O(t)}`], l) },
                            hu(e, (e, t) => {
                                const l = Mu(e);
                                return a().createElement(
                                    wn,
                                    {
                                        key: t,
                                        skillIndex: t,
                                        name: e.name,
                                        roleName: e.roleName,
                                        customName: e.customName,
                                        level: e.level,
                                        tooltipData: i,
                                        skillType: u,
                                        className: g()(
                                            Hn.skill,
                                            Hn[`skill__state${O(l)}`],
                                            e === s && Hn.skill__last,
                                            e === c && Hn.skill__lastLearnedSkill,
                                        ),
                                    },
                                    a().createElement(
                                        Ln,
                                        Vn({ size: r, type: u, efficiencyState: n, skillState: l }, e),
                                    ),
                                );
                            }),
                            d && s && a().createElement(jn, { skillLevel: s.level, className: Hn.level }),
                            o &&
                                a().createElement(xu, {
                                    classMix: Hn.acceleratedTrainingIcon,
                                    targetId: null == i ? void 0 : i.targetId,
                                }),
                        );
                    },
                    Un = {
                        base: 'Skills_base_ec',
                        efficiency: 'Skills_efficiency_d0',
                        base__c_44x44: 'Skills_base__c_44x44_c0',
                        rows: 'Skills_rows_e8',
                        bonusRow: 'Skills_bonusRow_4a',
                    };
                function zn() {
                    return (
                        (zn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        zn.apply(this, arguments)
                    );
                }
                const qn = ({
                        data: e,
                        dataToCompare: t,
                        classes: u,
                        tankmanID: n = -1,
                        size: r = Ru.c24x24,
                        collapseType: i = Su.None,
                        isSkillTooltipEnabled: l = !1,
                        isAcceleratedTrainingVisible: o = !1,
                        isNewSkillAnimated: s = !1,
                        isEfficiencyVisible: c = !1,
                        isBonusSkillsVisible: d = !0,
                        tooltipsTargetId: _ = R.invalid('resId'),
                        tooltipArgs: m,
                        blinkStyle: E,
                        children: A,
                    }) => {
                        const f = e.majorSkills,
                            h = e.bonusSkills,
                            p = e.skillsEfficiency,
                            F = (null == t ? void 0 : t.skillsEfficiency) || p,
                            b = ((e) => (-1 === e ? Bu.Untrained : e < 1 ? Bu.Low : Bu.Normal))(p),
                            v = void 0 !== t && t.skillsEfficiency !== p,
                            D = b !== Bu.Normal || c || v,
                            w = null == t ? void 0 : t.majorSkills,
                            B = null == t ? void 0 : t.bonusSkills,
                            C = B || h,
                            k = pu(C),
                            y = d && C.length > 0,
                            x = s || void 0 !== t,
                            S = 6 === (null == w ? void 0 : w.length),
                            L = ((e, t, u, n) => {
                                if (9 !== t) return Tu.None;
                                switch (e) {
                                    case Su.Default:
                                        if (u && n) return Tu.NoMargins;
                                        break;
                                    case Su.Overlap:
                                        if (u) return n ? Tu.Overlap : Tu.ReducedMargins;
                                        if (n) return Tu.OnlyLearningOverlap;
                                        break;
                                    case Su.ExtraOverlap:
                                        return u && n
                                            ? Tu.ExtraOverlapWithLevelAndEfficiency
                                            : u
                                              ? Tu.ExtraOverlapWithEfficiency
                                              : n
                                                ? Tu.ExtraOverlapWithLevel
                                                : Tu.ExtraOverlap;
                                }
                                return Tu.None;
                            })(i, C.length, D, b !== Bu.Low && void 0 !== k && k.level < mu),
                            T = {
                                size: r,
                                efficiencyState: b,
                                tooltipData: { targetId: _, isEnabled: l, tankmanID: n, args: m },
                            };
                        return a().createElement(
                            'div',
                            { className: g()(Un.base, Un[`base__${r}`], null == u ? void 0 : u.base) },
                            D &&
                                a().createElement(
                                    Cu,
                                    { blinkStyle: E, isEnabled: v && x },
                                    a().createElement(vu, {
                                        efficiencyValue: F,
                                        tankmanID: n,
                                        className: Un.efficiency,
                                        size: Wu(r, y),
                                        targetId: _,
                                    }),
                                ),
                            A,
                            a().createElement(
                                'div',
                                { className: Un.rows },
                                x
                                    ? a().createElement(
                                          a().Fragment,
                                          null,
                                          a().createElement(
                                              $n,
                                              zn(
                                                  {
                                                      skills: f,
                                                      possibleSkills: w,
                                                      blinkStyle: E,
                                                      isAcceleratedTrainingVisible: o,
                                                      isNewSkillAnimated: s,
                                                      isSkillsEfficiencyLearning: v,
                                                  },
                                                  T,
                                              ),
                                          ),
                                          y &&
                                              a().createElement(
                                                  $n,
                                                  zn(
                                                      {
                                                          skills: h,
                                                          skillType: Nu.Bonus,
                                                          possibleSkills: B,
                                                          className: Un.bonusRow,
                                                          collapseLayout: L,
                                                          blinkStyle: E,
                                                          isNewSkillAnimated: s,
                                                          isAllMajorSkillsLearned: S,
                                                      },
                                                      T,
                                                  ),
                                              ),
                                      )
                                    : a().createElement(
                                          a().Fragment,
                                          null,
                                          a().createElement(Gn, zn({ skills: f, isAcceleratedTrainingVisible: o }, T)),
                                          y &&
                                              a().createElement(
                                                  Gn,
                                                  zn(
                                                      {
                                                          skills: h,
                                                          skillType: Nu.Bonus,
                                                          className: Un.bonusRow,
                                                          collapseLayout: L,
                                                      },
                                                      T,
                                                  ),
                                              ),
                                      ),
                            ),
                        );
                    },
                    Kn = 'SkillsWithRole_base_92',
                    Yn = 'SkillsWithRole_role_66',
                    Zn = 'SkillsWithRole_role__glow_93',
                    Xn = ['role', 'size', 'withRoleGlow', 'className', 'isEfficiencyVisible'];
                function Jn() {
                    return (
                        (Jn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Jn.apply(this, arguments)
                    );
                }
                const Qn = (e) => {
                    let t = e.role,
                        u = e.size,
                        n = void 0 === u ? Ru.c44x44 : u,
                        r = e.withRoleGlow,
                        i = e.className,
                        l = e.isEfficiencyVisible,
                        o = void 0 === l || l,
                        s = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, Xn);
                    return a().createElement(
                        'div',
                        { className: Kn },
                        t && a().createElement(_u, { role: t, className: g()(Yn, r && Zn) }),
                        a().createElement(qn, Jn({ classes: { base: i }, isEfficiencyVisible: o, size: n }, s)),
                    );
                };
                let ea;
                !(function (e) {
                    ((e.Small = 'small'), (e.Big = 'big'));
                })(ea || (ea = {}));
                const ta = (e) => (e < 0.5 ? 4 * Math.pow(e, 3) : 4 * Math.pow(e - 1, 3) + 1),
                    ua = {
                        base: 'Frame_base_e1',
                        base__gray: 'Frame_base__gray_08',
                        base__red: 'Frame_base__red_6b',
                        base__yellow: 'Frame_base__yellow_2d',
                        base__empty: 'Frame_base__empty_31',
                    };
                let na;
                !(function (e) {
                    ((e.Gray = 'gray'), (e.Red = 'red'), (e.Yellow = 'yellow'), (e.Empty = 'empty'));
                })(na || (na = {}));
                const aa = (e, t, u, n) =>
                        n
                            ? e === Bu.Low
                                ? na.Gray
                                : t < mu
                                  ? na.Yellow
                                  : na.Gray
                            : u || t < mu
                              ? e === Bu.Low
                                  ? na.Red
                                  : na.Yellow
                              : e === Bu.Low
                                ? na.Red
                                : na.Gray,
                    ra = a().memo(function ({
                        isNewSkill: e,
                        isIrrelevant: t,
                        efficiencyState: u,
                        skillLevel: n,
                        className: r,
                    }) {
                        return a().createElement('div', { className: g()(ua.base, ua[`base__${aa(u, n, e, t)}`], r) });
                    }),
                    ia = {
                        base: 'TankmanSkill_base_51',
                        base__c_24x24: 'TankmanSkill_base__c_24x24_98',
                        base__c_44x44: 'TankmanSkill_base__c_44x44_62',
                        icon: 'TankmanSkill_icon_fe',
                        icon__new: 'TankmanSkill_icon__new_7a',
                        icon__disable: 'TankmanSkill_icon__disable_fb',
                        disabledPattern: 'TankmanSkill_disabledPattern_da',
                        level: 'TankmanSkill_level_3b',
                        level__skillLost: 'TankmanSkill_level__skillLost_8c',
                        level__skillBlur: 'TankmanSkill_level__skillBlur_6d',
                    };
                let la;
                !(function (e) {
                    ((e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44'));
                })(la || (la = {}));
                a().memo(function ({
                    iconName: e,
                    level: t,
                    size: u = la.c44x44,
                    isLevelVisible: r = t < mu,
                    isIrrelevant: i,
                    efficiencyState: l,
                    className: o,
                    isSkillLost: s,
                }) {
                    const c = e === Eu,
                        d = (l === Bu.Untrained || i) && !c,
                        _ = (0, su.useSpring)({ to: { val: t }, config: { duration: 150 } }),
                        m = (0, su.useSpring)(() => ({ from: { x: -5, opacity: 0 } })),
                        E = m[0],
                        A = m[1],
                        f = (0, su.useSpring)(() => ({ t: 0 })),
                        h = f[0],
                        p = f[1];
                    return (
                        (0, n.useEffect)(() => {
                            p.start({ from: { t: 1 }, to: { t: 0 }, config: { duration: 500 } });
                        }, [A, p, t]),
                        (0, n.useEffect)(
                            () => (
                                A.set({ x: -5, opacity: 0 }),
                                A.start({
                                    reset: !0,
                                    pause: !1,
                                    to: { x: 0, opacity: 1 },
                                    config: { duration: 300, easing: ta },
                                    delay: s ? 700 : 0,
                                    immediate: !s,
                                }),
                                () => {
                                    A.stop();
                                }
                            ),
                            [A, s],
                        ),
                        a().createElement(
                            'div',
                            { className: g()(ia.base, ia[`base__${u}`], o) },
                            a().createElement(yn, {
                                iconName: e,
                                size: kn.c52x52,
                                className: g()(ia.icon, d && ia.icon__disable, c && ia.icon__new),
                            }),
                            d && a().createElement('div', { className: ia.disabledPattern }),
                            !c &&
                                a().createElement(ra, {
                                    isNewSkill: c,
                                    efficiencyState: l,
                                    skillLevel: t,
                                    isIrrelevant: i,
                                }),
                            r &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        su.animated.div,
                                        { style: E, className: g()(ia.level, s && ia.level__skillLost) },
                                        _.val.to((e) => I(Math.floor(e))),
                                    ),
                                    a().createElement(
                                        su.animated.div,
                                        {
                                            style: Object.assign({}, E, { opacity: h.t.to((e) => e) }),
                                            className: g()(ia.level, ia.level__skillBlur),
                                        },
                                        I(Math.floor(t)),
                                    ),
                                ),
                        )
                    );
                });
                const oa = (e) => Math.round(Math.abs(e)),
                    sa = (e, t) => {
                        const u = (0, n.useRef)(null),
                            a = (0, n.useRef)(null),
                            r = (0, n.useRef)(null),
                            i = (0, n.useRef)({
                                isImmediate: !1,
                                isAnimationActive: !0,
                                previousBeforeShift: 0,
                                previousAfterShift: 0,
                            }),
                            l = (0, su.useSpring)(() => ({
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                                config: { duration: 500, easing: ln },
                                delay: 150,
                                pause: !0,
                            })),
                            o = l[0],
                            s = l[1],
                            c = (0, su.useSpring)(() => ({ opacity: 0 })),
                            d = c[0],
                            _ = c[1],
                            m = (0, su.useSpring)(() => ({ x: 0, opacity: 0 })),
                            E = m[0],
                            g = m[1],
                            A = (0, su.useSpring)(() => ({ x: 0 })),
                            f = A[0],
                            h = A[1];
                        return (
                            ((e, t) => {
                                (0, n.useEffect)(() => {
                                    let t = null;
                                    return (
                                        (t = requestAnimationFrame(() => {
                                            t = requestAnimationFrame(() => {
                                                ((t = null), e());
                                            });
                                        })),
                                        () => {
                                            null !== t && cancelAnimationFrame(t);
                                        }
                                    );
                                }, t);
                            })(
                                () => (
                                    (() => {
                                        if (e && u.current && a.current && r.current) {
                                            const e = i.current,
                                                t = e.isImmediate,
                                                n = e.isAnimationActive,
                                                l = e.previousBeforeShift,
                                                o = e.previousAfterShift,
                                                c = u.current.getBoundingClientRect(),
                                                d = a.current.getBoundingClientRect(),
                                                _ = r.current.getBoundingClientRect(),
                                                m = t && n,
                                                E = m ? l : oa(_.left - c.right - l),
                                                A = m ? o : oa(_.right - d.left + o);
                                            ((i.current.isImmediate = !0),
                                                (i.current.previousBeforeShift = E),
                                                (i.current.previousAfterShift = A),
                                                t || s.start({ reset: !0, pause: !1 }),
                                                h.start({
                                                    from: { x: -l },
                                                    to: { x: -E },
                                                    config: { duration: 500, easing: ln },
                                                    delay: 0,
                                                    immediate: t,
                                                }),
                                                g.start({
                                                    from: { x: o, opacity: 0 },
                                                    to: { x: A, opacity: 1 },
                                                    config: { duration: 500, easing: ln },
                                                    delay: 0,
                                                    immediate: t,
                                                    onRest: () => {
                                                        i.current.isAnimationActive = !1;
                                                    },
                                                }));
                                        }
                                    })(),
                                    () => {
                                        g.stop();
                                    }
                                ),
                                [s, h, e, g, ...t],
                            ),
                            (0, n.useEffect)(() => {
                                _.start({
                                    from: { opacity: 0 },
                                    to: { opacity: 1 },
                                    config: { duration: 300, easing: ln },
                                    delay: 0,
                                });
                            }, [_]),
                            {
                                arrowStyles: o,
                                skillsAfterStyles: d,
                                skillsAfterMoveStyles: E,
                                skillsBeforeMoveStyles: f,
                                skillsBeforeRef: u,
                                skillsAfterRef: a,
                                arrowRef: r,
                            }
                        );
                    },
                    ca = 'SkillsResult_base_ec',
                    da = 'SkillsResult_base__withBonusSkills_60',
                    _a = 'SkillsResult_background_01',
                    ma = 'SkillsResult_arrowWrapper_69',
                    Ea = 'SkillsResult_arrow_12',
                    ga = 'SkillsResult_skillsWrapper_70',
                    Aa = 'SkillsResult_skillsWrapper__after_06',
                    fa = (0, Ke.Pi)(() => {
                        const e = (0, n.useState)(!1),
                            t = e[0],
                            u = e[1],
                            r = ru().model,
                            i = b().mediaSize,
                            l = r.computes.skillsDataBefore(),
                            o = r.computes.skillsDataAfter(),
                            s = l.bonusSkills.length > 0,
                            c = i < h.Medium ? la.c24x24 : la.c44x44,
                            d = sa(t, [c, o.bonusSkills.length, o.majorSkills.length]),
                            _ = d.arrowStyles,
                            m = d.skillsBeforeMoveStyles,
                            E = d.skillsAfterMoveStyles,
                            A = d.skillsAfterStyles,
                            f = d.skillsAfterRef,
                            p = d.skillsBeforeRef,
                            F = d.arrowRef;
                        return (
                            (0, n.useEffect)(() => {
                                const e = setTimeout(() => u(!0), 200);
                                return () => clearTimeout(e);
                            }, []),
                            a().createElement(
                                'div',
                                { className: g()(ca, s && da) },
                                a().createElement('div', { className: _a }),
                                a().createElement(
                                    'div',
                                    { className: ga },
                                    a().createElement(
                                        su.animated.div,
                                        { style: Object.assign({}, m), ref: p },
                                        a().createElement(Qn, { data: l, size: c, isEfficiencyVisible: !1 }),
                                    ),
                                ),
                                t &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(
                                            su.animated.div,
                                            { style: _, className: ma, ref: F },
                                            a().createElement('div', { className: Ea }),
                                        ),
                                        a().createElement(
                                            'div',
                                            { className: g()(ga, Aa) },
                                            a().createElement(
                                                su.animated.div,
                                                { style: E, ref: f },
                                                a().createElement(
                                                    su.animated.div,
                                                    { style: Object.assign({}, A) },
                                                    a().createElement(Qn, {
                                                        data: l,
                                                        dataToCompare: o,
                                                        size: c,
                                                        isEfficiencyVisible: !1,
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                            )
                        );
                    }),
                    ha = 'Content_base_9e',
                    pa = 'Content_warning_49',
                    Fa = () =>
                        a().createElement(
                            'div',
                            { className: ha },
                            a().createElement(fa, null),
                            a().createElement(
                                ou,
                                { className: pa },
                                R.strings.dialogs.recruitConversionConfirm.warning(),
                            ),
                        ),
                    ba = ['onClose', 'buttons', 'isShown', 'displayFlags'];
                function va() {
                    return (
                        (va =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        va.apply(this, arguments)
                    );
                }
                const Da = (0, Ke.Pi)((e) => {
                    let t = e.onClose,
                        u = e.buttons,
                        n = e.isShown,
                        r = e.displayFlags,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, ba);
                    const l = ru().model;
                    return a().createElement(
                        Pt,
                        va({ onClose: t, buttons: u, displayFlags: r, isShown: n }, i, {
                            title: a().createElement(St, { text: l.name.get(), justifyContent: nt.Center }),
                            icon: a().createElement(Kt, {
                                icon: l.iconModel.get().path,
                                bgIcon: l.bgIconModel.get().path,
                            }),
                            content: a().createElement(Fa, null),
                        }),
                    );
                });
                engine.whenReady.then(() => {
                    L().render(
                        a().createElement(
                            au,
                            null,
                            a().createElement(x, null, a().createElement(qe, { Template: Da })),
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
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](u, u.exports, __webpack_require__), u.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var a = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, u, n] = deferred[o], r = !0, i = 0; i < t.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(o--, 1);
                        var l = u();
                        void 0 !== l && (e = l);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, u, n];
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
        (__webpack_require__.j = 9326),
        (() => {
            var e = { 9326: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [r, i, l] = u,
                        o = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (l) var s = l(__webpack_require__);
                    }
                    for (t && t(u); o < r.length; o++)
                        ((a = r[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(s);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(9931));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
