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
                    u.d(t, { mouse: () => c, off: () => s, on: () => o, onResize: () => r, onScaleUpdated: () => i }));
                var n = u(2472),
                    a = u(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    s = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
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
                                            i = l[t]((e) => u([e, 'outside']));
                                        function o(e) {
                                            u([e, 'inside']);
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
                        graphicsQuality: () => o,
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
                const o = {
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
                        addModelObserver: () => E,
                        addPreloadTexture: () => s,
                        arabic2roman: () => w,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => T,
                        enableFullScreenModeSupported: () => x,
                        events: () => i.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => y,
                        getExternalPaddingsRem: () => R,
                        getFontNames: () => v,
                        getScale: () => g,
                        getSize: () => _,
                        getViewGlobalPosition: () => A,
                        initExternalPaddings: () => L,
                        isEventHandled: () => f,
                        isFocused: () => h,
                        pxToRem: () => p,
                        remToPx: () => B,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => O,
                    }));
                var n = u(9690),
                    a = u(3722),
                    r = u(6112),
                    i = u(6538),
                    o = u(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function E(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function A(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: B(t.x), y: B(t.y) };
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
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function y() {
                    return viewEnv.getShowingStatus();
                }
                const v = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    w = n.cg;
                function R() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const T = Object.keys(r.W).reduce(
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
                    O = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function x() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function L(e) {
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
                u.d(t, { qP: () => r });
                const n = ['args'],
                    a = (e, t) => {
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
                u.d(t, { B3: () => l, Z5: () => i.Z5, B0: () => o, ry: () => p });
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
                var r = u(1358),
                    i = u(8613);
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
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = u(5521),
                    m = u(3138);
                const A = ['args'];
                function F(e, t, u, n, a, r, i) {
                    try {
                        var o = e[r](i),
                            s = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(s) : Promise.resolve(s).then(n, a);
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(t, u);
                                        function i(e) {
                                            F(r, n, a, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            F(r, n, a, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    B = (e, t) => {
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
                                })(t, A);
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
                    D = () => B(o.CLOSE),
                    h = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var C = u(7572);
                const f = a.instance,
                    b = {
                        DataTracker: r.Z,
                        ViewModel: C.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: d,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => B(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => B(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            B(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, a = R.invalid('resId'), r) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                s = u.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                E = s.width,
                                d = s.height,
                                _ = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(c) + i.y,
                                    width: m.O.view.pxToRem(E),
                                    height: m.O.view.pxToRem(d),
                                };
                            B(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: g(_),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => h(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, D);
                        },
                        handleViewEvent: B,
                        onBindingsReady: p,
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
                        ClickOutsideManager: f,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = b;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Z5: () => n, cy: () => a });
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
                    };
            },
            4572: (e, t, u) => {
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
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
                function l(e = i.O.client.getSize('rem')) {
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
                        })(t, u, o),
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
                })(s || (s = {}));
                const c = l(),
                    E = (0, n.createContext)(c),
                    d = ['children'];
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
                        })(e, d);
                    const a = (0, n.useContext)(E),
                        i = a.extraLarge,
                        o = a.large,
                        s = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        _ = a.extraLargeWidth,
                        m = a.largeWidth,
                        A = a.mediumWidth,
                        F = a.smallWidth,
                        g = a.extraSmallWidth,
                        p = a.extraLargeHeight,
                        B = a.largeHeight,
                        D = a.mediumHeight,
                        h = a.smallHeight,
                        C = a.extraSmallHeight,
                        f = { extraLarge: p, large: B, medium: D, small: h, extraSmall: C };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && i) return t;
                        if (u.large && o) return t;
                        if (u.medium && s) return t;
                        if (u.small && l) return t;
                        if (u.extraSmall && c) return t;
                    } else {
                        if (u.extraLargeWidth && _) return r(t, u, f);
                        if (u.largeWidth && m) return r(t, u, f);
                        if (u.mediumWidth && A) return r(t, u, f);
                        if (u.smallWidth && F) return r(t, u, f);
                        if (u.extraSmallWidth && g) return r(t, u, f);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && p) return t;
                            if (u.largeHeight && B) return t;
                            if (u.mediumHeight && D) return t;
                            if (u.smallHeight && h) return t;
                            if (u.extraSmallHeight && C) return t;
                        }
                    }
                    return null;
                });
                const _ = ({ children: e }) => {
                    const t = (0, n.useState)(l),
                        u = t[0],
                        r = t[1],
                        o = (0, n.useState)(!1),
                        s = o[0],
                        c = o[1];
                    return (
                        (0, n.useLayoutEffect)(() => {
                            function e() {
                                r((e) => {
                                    const t = i.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : l(t);
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
                        a().createElement(E.Provider, { value: u }, s && e)
                    );
                };
                var m = u(6483),
                    A = u.n(m),
                    F = u(926),
                    g = u.n(F);
                let p, B, D;
                (!(function (e) {
                    ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                })(p || (p = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                    })(B || (B = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge'));
                    })(D || (D = {})));
                const h = () => {
                        const e = (0, n.useContext)(E),
                            t = e.width,
                            u = e.height,
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
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return D.ExtraLarge;
                                    case e.largeHeight:
                                        return D.Large;
                                    case e.mediumHeight:
                                        return D.Medium;
                                    case e.smallHeight:
                                        return D.Small;
                                    case e.extraSmallHeight:
                                        return D.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), D.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: i, remScreenWidth: t, remScreenHeight: u };
                    },
                    C = ['children', 'className'];
                function f() {
                    return (
                        (f =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        f.apply(this, arguments)
                    );
                }
                const b = {
                        [B.ExtraSmall]: '',
                        [B.Small]: g().SMALL_WIDTH,
                        [B.Medium]: `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH}`,
                        [B.Large]: `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH} ${g().LARGE_WIDTH}`,
                        [B.ExtraLarge]: `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH} ${g().LARGE_WIDTH} ${g().EXTRA_LARGE_WIDTH}`,
                    },
                    y = {
                        [D.ExtraSmall]: '',
                        [D.Small]: g().SMALL_HEIGHT,
                        [D.Medium]: `${g().SMALL_HEIGHT} ${g().MEDIUM_HEIGHT}`,
                        [D.Large]: `${g().SMALL_HEIGHT} ${g().MEDIUM_HEIGHT} ${g().LARGE_HEIGHT}`,
                        [D.ExtraLarge]: `${g().SMALL_HEIGHT} ${g().MEDIUM_HEIGHT} ${g().LARGE_HEIGHT} ${g().EXTRA_LARGE_HEIGHT}`,
                    },
                    v = {
                        [p.ExtraSmall]: '',
                        [p.Small]: g().SMALL,
                        [p.Medium]: `${g().SMALL} ${g().MEDIUM}`,
                        [p.Large]: `${g().SMALL} ${g().MEDIUM} ${g().LARGE}`,
                        [p.ExtraLarge]: `${g().SMALL} ${g().MEDIUM} ${g().LARGE} ${g().EXTRA_LARGE}`,
                    },
                    w = (e) => {
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
                            })(e, C);
                        const r = h(),
                            i = r.mediaWidth,
                            o = r.mediaHeight,
                            s = r.mediaSize;
                        return a().createElement('div', f({ className: A()(u, b[i], y[o], v[s]) }, n), t);
                    },
                    T = ['children'],
                    S = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, T);
                        return a().createElement(_, null, a().createElement(w, u, t));
                    };
                var O = u(1533),
                    x = u.n(O);
                const L = (0, n.memo)(
                    ({
                        className: e,
                        backgroundPath: t,
                        onLoaded: u,
                        showVignette: n = !0,
                        showBlur: r = !1,
                        grayscaleApplied: i = !1,
                    }) =>
                        a().createElement(
                            'div',
                            {
                                className: A()(
                                    'Background_base_94',
                                    r && 'Background_base__blur_69',
                                    i && 'Background_base__grayscale_1b',
                                    e,
                                ),
                                style: { backgroundImage: `url(${t})` },
                            },
                            n && a().createElement('div', { className: 'Background_vignette_79' }),
                            u &&
                                a().createElement('img', {
                                    className: 'Background_preloader_7d',
                                    onLoad: u,
                                    onError: u,
                                    src: t,
                                    alt: t,
                                }),
                        ),
                );
                var k = u(7030);
                const N = { x: 0, y: 0, opacity: 0, transform: 'scale(1) rotate(0deg)' },
                    P = { x: 0, y: 0, opacity: 1, transform: 'scale(1) rotate(0deg)' };
                let I;
                !(function (e) {
                    ((e.Linear = 'linear'),
                        (e.EaseIn = 'easeIn'),
                        (e.EaseOut = 'easeOut'),
                        (e.EaseInOut = 'easeInOut'),
                        (e.EaseOutBack = 'easeOutBack'),
                        (e.EaseOutQuint = 'easeOutQuint'),
                        (e.EaseOutExpo = 'easeOutExpo'));
                })(I || (I = {}));
                const M = {
                        [I.Linear]: (e) => e,
                        [I.EaseIn]: (e) => e * e * e,
                        [I.EaseOut]: (e) => --e * e * e + 1,
                        [I.EaseInOut]: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                        [I.EaseOutBack]: (e) => 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
                        [I.EaseOutQuint]: (e) => 1 - Math.pow(1 - e, 5),
                        [I.EaseOutExpo]: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
                    },
                    U = (0, n.memo)(function ({
                        children: e,
                        from: t = N,
                        to: u = P,
                        config: r,
                        isCanceled: i = !1,
                        isDisabled: o = !1,
                        duration: s = 250,
                        delay: l = 0,
                        transformOrigin: c = '50% 50%',
                        easingType: E = I.EaseInOut,
                        onRest: d,
                        onStart: _,
                        trigger: m,
                        className: A,
                        isReverse: F = !1,
                        playSoundOnStart: g,
                        playSoundOnFinish: p,
                    }) {
                        const B = M[E],
                            D = (0, k.useSpring)(() => t),
                            h = D[0],
                            C = D[1],
                            f = i && !o ? u : Object.assign({}, h, { transformOrigin: c });
                        return (
                            (0, n.useEffect)(() => {
                                C.start({
                                    from: t,
                                    to: u,
                                    delay: l,
                                    immediate: i,
                                    config: r ? Object.assign({}, r) : { duration: s, easing: B },
                                    cancel: i || o,
                                    reverse: F,
                                    onRest: (e) => {
                                        !0 === e.finished && (p && p(), d && d());
                                    },
                                    onStart: () => {
                                        (g && g(), _ && _());
                                    },
                                });
                            }, [C, l, s, B, t, i, d, u, m, o, F, p, g, _, r]),
                            a().createElement(k.animated.div, { className: A, style: f }, e)
                        );
                    });
                function G(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const H = {
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
                let W, j;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(W || (W = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(j || (j = {})));
                const V = ({
                        children: e,
                        size: t,
                        disabled: u,
                        mixClass: r,
                        onMouseEnter: i,
                        onMouseMove: o,
                        onMouseDown: s,
                        onMouseUp: l,
                        onMouseLeave: c,
                        onClick: E,
                        isFocused: d = !1,
                        type: _ = W.primary,
                        soundHover: m = 'highlight',
                        soundClick: F = 'play',
                    }) => {
                        const g = (0, n.useRef)(null),
                            p = (0, n.useState)(d),
                            B = p[0],
                            D = p[1],
                            h = (0, n.useState)(!1),
                            C = h[0],
                            f = h[1];
                        return (
                            (0, n.useEffect)(() => {
                                function e(e) {
                                    B && null !== g.current && !g.current.contains(e.target) && D(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [B]),
                            (0, n.useEffect)(() => {
                                D(d);
                            }, [d]),
                            a().createElement(
                                'div',
                                {
                                    ref: g,
                                    className: A()(
                                        H.base,
                                        H[`base__${_}`],
                                        u && H.base__disabled,
                                        t && H[`base__${t}`],
                                        B && H.base__focus,
                                        C && H.base__highlightActive,
                                        r,
                                    ),
                                    onMouseEnter: function (e) {
                                        u || (null !== m && G(m), i && i(e));
                                    },
                                    onMouseMove: function (e) {
                                        o && o(e);
                                    },
                                    onMouseUp: function (e) {
                                        u || (l && l(e), f(!1));
                                    },
                                    onMouseDown: function (e) {
                                        u ||
                                            (null !== F && G(F),
                                            s && s(e),
                                            d && (u || (g.current && (g.current.focus(), D(!0)))),
                                            f(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        u || (c && c(e), f(!1));
                                    },
                                    onClick: function (e) {
                                        u || (E && E(e));
                                    },
                                },
                                _ !== W.ghost &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('div', { className: H.back }),
                                        a().createElement('span', { className: H.texture }),
                                    ),
                                a().createElement(
                                    'span',
                                    { className: A()(H.state, H.state__default) },
                                    a().createElement('span', { className: H.stateDisabled }),
                                    a().createElement('span', { className: H.stateHighlightHover }),
                                    a().createElement('span', { className: H.stateHighlightActive }),
                                ),
                                a().createElement(
                                    'span',
                                    { className: H.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    },
                    $ = {
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
                    z = [
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
                function Y() {
                    return (
                        (Y =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Y.apply(this, arguments)
                    );
                }
                const X = (e) => {
                    let t = e.caption,
                        u = e.onClick,
                        r = e.goto,
                        o = e.classNames,
                        s = e.onMouseEnter,
                        l = e.onMouseLeave,
                        c = e.onMouseDown,
                        E = e.onMouseUp,
                        d = e.side,
                        _ = void 0 === d ? 'left' : d,
                        m = e.type,
                        F = void 0 === m ? 'back' : m,
                        g = e.soundHover,
                        p = void 0 === g ? 'highlight' : g,
                        B = e.soundClick,
                        D = void 0 === B ? 'play' : B,
                        h = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, z);
                    const C = (0, n.useCallback)(
                            (e) => {
                                (null == s || s(e), i.O.sound.play.sound(p));
                            },
                            [s, p],
                        ),
                        f = (0, n.useCallback)(
                            (e) => {
                                null == l || l(e);
                            },
                            [l],
                        ),
                        b = (0, n.useCallback)(
                            (e) => {
                                (null == c || c(e), i.O.sound.play.sound(D));
                            },
                            [c, D],
                        ),
                        y = (0, n.useCallback)(
                            (e) => {
                                null == E || E(e);
                            },
                            [E],
                        );
                    return a().createElement(
                        'div',
                        Y(
                            {
                                className: A()($.base, $[`base__${F}`], $[`base__${_}`], null == o ? void 0 : o.base),
                                onMouseEnter: C,
                                onMouseLeave: f,
                                onMouseDown: b,
                                onMouseUp: y,
                                onClick: u,
                            },
                            h,
                        ),
                        'info' !== F && a().createElement('div', { className: $.shine }),
                        a().createElement(
                            'div',
                            { className: A()($.icon, $[`icon__${F}`], $[`icon__${_}`], null == o ? void 0 : o.icon) },
                            a().createElement('div', { className: A()($.glow, null == o ? void 0 : o.glow) }),
                        ),
                        a().createElement(
                            'div',
                            { className: A()($.caption, $[`caption__${F}`], null == o ? void 0 : o.caption) },
                            t,
                        ),
                        r && a().createElement('div', { className: A()($.goto, null == o ? void 0 : o.goto) }, r),
                    );
                };
                var q = u(5521),
                    K = u(9916);
                const Q = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Z(e = q.n.NONE, t = Q, u = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== q.n.NONE)
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
                const J = [
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
                function ee(e) {
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
                const te = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: K.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    ue = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            o = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            _ = e.decoratorId,
                            m = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            g = e.targetId,
                            p = void 0 === g ? 0 : g,
                            B = e.onShow,
                            D = e.onHide,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, J);
                        const C = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, n.useMemo)(
                                () =>
                                    p ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let u,
                                            n = R.invalid('resId'),
                                            a = '';
                                        var r;
                                        return (
                                            t &&
                                                ((a =
                                                    (null == (r = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) ||
                                                    ''),
                                                (u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== u &&
                                                    window.subViews[u] &&
                                                    (n = window.subViews[u].id)),
                                            { callerUrl: a, caller: u, stack: t, resId: n }
                                        );
                                    })().resId,
                                [p],
                            ),
                            b = (0, n.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (te(u, m, { isMouseEvent: !0, on: !0, arguments: ee(a) }, f),
                                    B && B(),
                                    (C.current.isVisible = !0));
                            }, [u, m, a, f, B]),
                            y = (0, n.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        te(u, m, { on: !1 }, f),
                                        C.current.isVisible && D && D(),
                                        (C.current.isVisible = !1));
                                }
                            }, [u, m, f, D]),
                            v = (0, n.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(C.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
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
                                !1 === F && y();
                            }, [F, y]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        (window.removeEventListener('mouseleave', y), y());
                                    }
                                ),
                                [y],
                            ),
                            F
                                ? (0, n.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((w = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          (clearTimeout(C.current.timeoutId),
                                                          (C.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                          r && r(e),
                                                          w && w(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (y(), null == i || i(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === d && y(), null == s || s(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === d && y(), null == o || o(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : t
                        );
                        var w;
                    },
                    ne = ['children'];
                function ae() {
                    return (
                        (ae =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ae.apply(this, arguments)
                    );
                }
                const re = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, ne);
                        return a().createElement(
                            ue,
                            ae(
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
                    ie = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function oe() {
                    return (
                        (oe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        oe.apply(this, arguments)
                    );
                }
                const se = R.views.common.tooltip_window.simple_tooltip_content,
                    le = (e) => {
                        let t = e.children,
                            u = e.body,
                            r = e.header,
                            i = e.note,
                            o = e.alert,
                            s = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, ie);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, s, { body: u, header: r, note: i, alert: o });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [o, u, r, i, s]);
                        return a().createElement(
                            ue,
                            oe(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? se.SimpleTooltipHtmlContent('resId') : se.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var E;
                    };
                function ce() {
                    return (
                        (ce =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ce.apply(this, arguments)
                    );
                }
                const Ee = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = a().createElement('div', { className: u }, e);
                    if (t.header || t.body) return a().createElement(le, t, n);
                    const r = t.contentId;
                    return r ? a().createElement(ue, ce({}, t, { contentId: r }), n) : a().createElement(re, t, n);
                };
                var de = u(8045);
                const _e = {
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
                let me;
                (u(1281),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(me || (me = {})));
                let Ae, Fe, ge;
                (new RegExp(
                    [
                        /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                        /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                        /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                        /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                    ]
                        .map((e) => e.source)
                        .join('|'),
                    'gum',
                ),
                    (function (e) {
                        ((e[(e.Word = 0)] = 'Word'),
                            (e[(e.LineBreak = 1)] = 'LineBreak'),
                            (e[(e.NewLine = 2)] = 'NewLine'),
                            (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                            (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                            (e[(e.Binding = 5)] = 'Binding'));
                    })(Ae || (Ae = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(Fe || (Fe = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(ge || (ge = {})));
                const pe = { [ge.NBSP]: Ae.NoBreakSymbol, [ge.ZWNBSP]: Ae.NoBreakSymbol, [ge.NEW_LINE]: Ae.LineBreak },
                    Be = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    De = {
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
                    he = 'renderers_word_f3',
                    Ce = (e) => ({ color: `#${e}` }),
                    fe = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? De[n]
                                ? a().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: A()(he, De[n]) },
                                      e,
                                  )
                                : a().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: he, style: Ce(n) },
                                      e,
                                  )
                            : a().createElement('span', { key: u, 'data-block-type': t.blockType, className: he }, e);
                    },
                    be = {
                        [Ae.Word]: fe,
                        [Ae.NoBreakSymbol]: fe,
                        [Ae.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            a().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => a().createElement(a().Fragment, { key: u }, e)),
                            ),
                        [Ae.LineBreak]: ({ key: e }) =>
                            a().createElement('span', {
                                key: e,
                                'data-block-type': Ae.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [Ae.NewLine]: ({ elementList: e, key: t }) =>
                            a().createElement(
                                'span',
                                { key: t, 'data-block-type': Ae.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [Ae.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            a().createElement(
                                'span',
                                {
                                    key: t,
                                    'data-block-type': Ae.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    ye = (e, t, u) => {
                        const n = [];
                        return (
                            e.childList.forEach((a, r) => {
                                const i = `${u}_${r}`;
                                if (((e) => void 0 !== e.childList)(a)) {
                                    const e = a,
                                        t = e.blockType,
                                        u = ye(e, be[t], i);
                                    n.push(...u);
                                } else n.push(t({ elementList: [a], textBlock: e, key: i }));
                            }),
                            n
                        );
                    },
                    ve = (e, t, u, n) => {
                        let a = t.exec(e),
                            r = 0;
                        for (; a; ) (r !== a.index && u(e.slice(r, a.index)), n(a), (r = t.lastIndex), (a = t.exec(e)));
                        r !== e.length && u(e.slice(r));
                    },
                    we = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    Re = Be
                        ? (e) => {
                              const t = [];
                              return (
                                  ve(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(
                                              ...((e) => {
                                                  const t = [];
                                                  return (
                                                      ve(
                                                          e,
                                                          /\S\s+/g,
                                                          (e) => {
                                                              var u;
                                                              'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                                                  ? t.push(...((u = e), u.match(we) || []))
                                                                  : t.push(...e.split(''));
                                                          },
                                                          (e) => {
                                                              t.push(e[0]);
                                                          },
                                                      ),
                                                      t
                                                  );
                                              })(e[0]),
                                          );
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
                                  const i = t.justifyContent === Fe.FlexEnd ? n.index : u.lastIndex;
                                  (a.push(e.slice(r, i)), (r = i), (n = u.exec(e)));
                              }
                              return (r !== e.length && a.push(e.slice(r)), a);
                          },
                    Te = (e, t = '', u) => {
                        const n = [];
                        return (
                            ve(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: Ae.Word, colorTag: t, childList: Re(e, u) });
                                },
                                (e) => {
                                    const u = e[0],
                                        a = pe[u.charAt(0)];
                                    a === Ae.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: Ae.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: Ae.NewLine,
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
                    Se = (e, t, u = '', n) => {
                        const a = [];
                        return (
                            ve(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...Te(e, u, n));
                                },
                                (e) => {
                                    const r = e[1],
                                        i = void 0 === t[r] ? e[0] : t[r];
                                    'string' == typeof i || 'number' == typeof i
                                        ? a.push(...Te(String(i), u, n))
                                        : a.push({ blockType: Ae.Binding, colorTag: u, childList: [i] });
                                },
                            ),
                            a
                        );
                    },
                    Oe = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === Ae.NoBreakWrapper) (e.childList.push(n), u.push(e));
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && u.push(e),
                                u.push({ blockType: Ae.NoBreakWrapper, colorTag: '', childList: [t, n] }));
                        }
                        return (t.childList.length > 0 && u.push(t), u);
                    },
                    xe = (e, t = {}, u) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Ae.NoBreakSymbol
                                        ? ((u = !0), t.push(...Oe(t.pop(), e)))
                                        : (u ? t.push(...Oe(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, u) => {
                                const n = [];
                                return (
                                    ve(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...Se(e, t, '', u));
                                        },
                                        (e) => {
                                            n.push(...Se(e[2] + e[3], t, e[1], u));
                                        },
                                    ),
                                    n
                                );
                            })(((a = e), a.replace(/&nbsp;/g, ' ')).replace(/&zwnbsp;/g, '\ufeff'), t, u),
                        );
                        var a;
                        return ((e) => {
                            const t = [];
                            return (
                                e.forEach((e, u) => {
                                    t.push(
                                        ...((e, t) => {
                                            const u = [],
                                                n = e.blockType,
                                                a = be[n],
                                                r = ye(e, a, t);
                                            return (
                                                n === Ae.NoBreakWrapper
                                                    ? u.push(a({ elementList: r, textBlock: e, key: `${t}` }))
                                                    : u.push(...r),
                                                u
                                            );
                                        })(e, u),
                                    );
                                }),
                                t
                            );
                        })(n);
                    },
                    Le = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    ke = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    Ne = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = ke(e, t),
                            a = e.textContent.length,
                            r = e.offsetWidth / a,
                            i = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / r);
                            return n >= u ? [!0, u + i] : [!1, n];
                        }
                        const o = Math.max(u + i, 0);
                        return a < o ? [!1, 0] : [!0, o];
                    },
                    Pe = (e, t, u, n, r, i) => {
                        let o = -1,
                            s = null;
                        for (let l = u; l >= 0; l--) {
                            const u = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === Ae.LineBreak || c === Ae.NewLine || c === Ae.Binding) continue;
                            const E = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = Ne(u, n, r),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (r -= d);
                                    continue;
                                }
                                const _ = E.slice(0, E.length - d) + i,
                                    m = t[l];
                                ((s = a().cloneElement(m, m.props, _)), (o = l));
                                break;
                            }
                            {
                                const e = u.children,
                                    c = t[l],
                                    d = c.props.children,
                                    _ = Pe(e, d, e.length - 1, n, r, i),
                                    m = _[0],
                                    A = _[1];
                                if (!(m < 0)) {
                                    const e = d.slice(0, m);
                                    ((s = a().cloneElement(c, c.props, e, A)), (o = l));
                                    break;
                                }
                                r -= E.length;
                            }
                        }
                        return [o, s];
                    },
                    Ie = a().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: u,
                            binding: r,
                            isTooltipEnable: i = !1,
                            isTruncationAvailable: o = !1,
                            customTooltipArgs: s,
                            targetId: l,
                            justifyContent: c = Fe.FlexStart,
                            alignContent: E = Fe.FlexStart,
                            truncateIdentify: d = '...',
                        }) => {
                            const _ = (0, n.useRef)(null),
                                m = (0, n.useRef)({ height: 0, width: 0 }),
                                F = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                g = F[0],
                                p = F[1],
                                B = (0, n.useMemo)(() => xe(e, r, { justifyContent: c }), [r, c, e]),
                                D = (0, n.useMemo)(() => {
                                    if (
                                        i &&
                                        g.isTruncated &&
                                        (!r || !Object.values(r).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, s, {
                                                stringifyKwargs: r ? JSON.stringify(r) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [r, i, l, e, s, g.isTruncated]),
                                h = (0, n.useCallback)(
                                    (e) => {
                                        ((m.current.width = e.contentRect.width),
                                            (m.current.height = e.contentRect.height));
                                        const t = ((e, t, u, n = '...') => {
                                                const a = [...t],
                                                    r = e.current;
                                                if (!r) return [a, !1];
                                                const i = u.height,
                                                    o = u.width,
                                                    s = r.lastElementChild;
                                                if (!Le(s, i) && ke(s, o) <= 0) return [a, !1];
                                                const l = r.children,
                                                    c = ((e, t) => {
                                                        let u = 0,
                                                            n = e.length - 1;
                                                        for (; n - u >= 0; ) {
                                                            const a = u + Math.ceil(0.5 * (n - u));
                                                            Le(e[a], t) ? (n = a - 1) : (u = a + 1);
                                                        }
                                                        return u - 1;
                                                    })(l, i);
                                                if (c < 0) return [a, !1];
                                                const E = Pe(l, a, c, o, n.length, n),
                                                    d = E[0],
                                                    _ = E[1];
                                                return (_ && (a.splice(d, 1, _), a.splice(d + 1)), [a, !0]);
                                            })(_, B, m.current, d),
                                            n = t[0],
                                            a = t[1];
                                        (p({ elementList: n, isTruncated: a, isTruncateFinished: !0 }), u && u(a));
                                    },
                                    [u, d, B],
                                ),
                                C = (0, n.useMemo)(() => ({ justifyContent: c, alignContent: E }), [E, c]);
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
                                        const t = new de.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, u, e]);
                                })(_, h, o),
                                a().createElement(
                                    'div',
                                    {
                                        className: A()(
                                            _e.base,
                                            t,
                                            _e.base__zeroPadding,
                                            o && _e.base__isTruncationAvailable,
                                        ),
                                        style: C,
                                    },
                                    a().createElement('div', { className: _e.unTruncated, ref: _ }, B),
                                    a().createElement(
                                        Ee,
                                        {
                                            tooltipArgs: D,
                                            className: A()(
                                                _e.tooltip,
                                                _e[`tooltip__justify-${c}`],
                                                _e[`tooltip__align-${E}`],
                                            ),
                                        },
                                        a().createElement(
                                            'div',
                                            {
                                                className: A()(
                                                    _e.truncated,
                                                    !g.isTruncateFinished && o && _e.truncated__hide,
                                                ),
                                                style: C,
                                            },
                                            g.isTruncateFinished && o ? g.elementList : B,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                var Me = u(3403);
                function Ue() {
                    return !1;
                }
                console.log;
                var Ge = u(9174);
                function He(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const We = (e) => (0 === e ? window : window.subViews.get(e));
                function je(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function Ve(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        const r =
                            ((u = e[a]),
                            (n = void 0),
                            u && 'value' in u && null != (n = u.constructor) && n.name.includes('ArrayItem')
                                ? null == u
                                    ? void 0
                                    : u.value
                                : u);
                        if (t(r, a, e)) return r;
                    }
                    var u, n;
                }
                var $e = u(3946);
                const ze = ((e, t) => {
                        const u = (0, n.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: o, mocks: s }) {
                                const l = (0, n.useRef)([]),
                                    c = (e, u, n) => {
                                        var a;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = We,
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
                                                const o = (e) => {
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
                                                        const s = 'string' == typeof r ? `${n}.${r}` : n,
                                                            l = i.O.view.addModelObserver(s, t, !0);
                                                        return (a.set(l, u), e && u(o(r)), l);
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, t) => {
                                                        const u = o(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = o(e);
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
                                                                                    return He(e, t);
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
                                                                                          ? He(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        u && (e = u);
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
                                                            !(e = u()).done;

                                                        )
                                                            r(e.value, t);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(u),
                                            o =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            s = (t) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(t)) : o.readByPath(t),
                                            c = (e) => l.current.push(e),
                                            E = (({ observableModel: e }) => {
                                                const t = {
                                                        root: e.primitives([
                                                            'missionId',
                                                            'isVictory',
                                                            'title',
                                                            'subTitle',
                                                            'infoName',
                                                            'infoDescription',
                                                            'vehicleName',
                                                            'playerStatus',
                                                            'hasAutoCompleteTasks',
                                                            'isOnboarding',
                                                        ]),
                                                        progressLevels: e.array('progressLevels'),
                                                        missionProgress: e.object('missionProgress'),
                                                        mainRewards: e.array('mainRewards', []),
                                                        otherRewards: e.array('otherRewards', []),
                                                    },
                                                    u = (0, $e.Om)(() => t.mainRewards.get(), { equals: Ue }),
                                                    n = (0, $e.Om)(() => t.otherRewards.get(), { equals: Ue }),
                                                    a = (0, $e.Om)(() => u().length > 0 || n().length > 0),
                                                    r = (0, $e.Om)(() => Ve(u(), (e) => 'freeXP' === e.name)),
                                                    i = (0, $e.Om)(() => Ve(u(), (e) => 'credits' === e.name)),
                                                    o = (0, $e.Om)(() => n().length > 0);
                                                return Object.assign({}, t, {
                                                    computes: {
                                                        getMainRewards: u,
                                                        getHasRewards: a,
                                                        getXPReward: r,
                                                        getCreditsReward: i,
                                                        getOtherRewards: n,
                                                        getHasOtherRewards: o,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    dict: (t) => {
                                                        const u = s(t),
                                                            n = Ge.LO.box(u, { equals: Ue });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Ge.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    array: (t, u) => {
                                                        const n = null != u ? u : s(t),
                                                            a = Ge.LO.box(n, { equals: Ue });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Ge.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (t, u) => {
                                                        const n = null != u ? u : s(t),
                                                            a = Ge.LO.box(n, { equals: Ue });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Ge.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (t, u) => {
                                                        const n = s(u);
                                                        if (Array.isArray(t)) {
                                                            const a = t.reduce(
                                                                (e, t) => ((e[t] = Ge.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, Ge.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                a[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = t,
                                                                r = Object.entries(a),
                                                                i = r.reduce(
                                                                    (e, [t, u]) => ((e[u] = Ge.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, Ge.aD)((e) => {
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
                                            d = { mode: e, model: E, externalModel: o, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === e && n ? n.controls(d) : t(d),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    E = (0, n.useRef)(!1),
                                    d = (0, n.useState)(e),
                                    _ = d[0],
                                    m = d[1],
                                    A = (0, n.useState)(() => c(e, r, s)),
                                    F = A[0],
                                    g = A[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        E.current ? g(c(_, r, s)) : (E.current = !0);
                                    }, [s, _, r]),
                                    (0, n.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    a().createElement(u.Provider, { value: F }, o)
                                );
                            },
                            () => (0, n.useContext)(u),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        exit: e.createCallbackNoArgs('onQuit'),
                        continue: e.createCallbackNoArgs('onContinue'),
                    })),
                    Ye = ze[0],
                    Xe = ze[1],
                    qe = { from: { opacity: 0 }, to: { opacity: 0 }, delay: 0, duration: 0 };
                let Ke, Qe;
                (!(function (e) {
                    ((e.VICTORY = 'victory'), (e.DEFEAT = 'defeat'), (e.VICTORY_REWARDS = 'victoryRewards'));
                })(Ke || (Ke = {})),
                    (function (e) {
                        ((e.SHUTTER = 'shutter'),
                            (e.FLASH = 'flash'),
                            (e.TITLE_GLOW = 'titleGlow'),
                            (e.TITLE = 'title'),
                            (e.SUB_TITLE = 'subTitle'),
                            (e.PROGRESS_ITEM = 'progressItem'),
                            (e.REWARD_RIBBON = 'rewardRibbon'),
                            (e.REWARD_MAIN = 'rewardMain'),
                            (e.REWARD_TXT = 'rewardTxt'),
                            (e.REWARD_ITEM = 'rewardItem'),
                            (e.REWARD_COUNT_FINISH = 'rewardCountFinish'),
                            (e.IMG = 'img'),
                            (e.FOOTER = 'footer'),
                            (e.BUTTON = 'button'));
                    })(Qe || (Qe = {})));
                const Ze = 500,
                    Je = 100,
                    et = {
                        [Qe.SHUTTER]: {
                            delay: 500,
                            duration: Ze,
                            from: { opacity: 1 },
                            to: { opacity: 0 },
                            easingType: I.EaseOut,
                        },
                        [Qe.FLASH]: {
                            from: { opacity: 0, transform: 'scale(35, 35)' },
                            to: [
                                { opacity: 1, transform: 'scale(2, 2)', config: { duration: Ze } },
                                { opacity: 0, transform: 'scale(4, 1)', config: { duration: 4e3 } },
                            ],
                            transformOrigin: '50% 75%',
                            delay: 650,
                            easingType: I.EaseInOut,
                        },
                        [Qe.TITLE_GLOW]: {
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                            delay: 1e3,
                            duration: 1e3,
                            easingType: I.EaseOut,
                        },
                        [Qe.TITLE]: {
                            from: { y: 25, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1e3,
                            config: { tension: 180, friction: 12 },
                        },
                        [Qe.SUB_TITLE]: {
                            from: { y: -25, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1e3,
                            config: { tension: 180, friction: 12 },
                        },
                        [Qe.PROGRESS_ITEM]: {
                            from: { y: -10, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1100,
                            config: { tension: 180, friction: 12 },
                        },
                        [Qe.REWARD_RIBBON]: Object.assign({}, qe),
                        [Qe.REWARD_MAIN]: Object.assign({}, qe),
                        [Qe.REWARD_TXT]: Object.assign({}, qe),
                        [Qe.REWARD_ITEM]: Object.assign({}, qe),
                        [Qe.REWARD_COUNT_FINISH]: Object.assign({}, qe),
                        [Qe.FOOTER]: {
                            from: { y: -5, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1900,
                            duration: Ze,
                            easingType: I.EaseOut,
                        },
                        [Qe.IMG]: {
                            from: { x: 20, opacity: 0 },
                            to: { x: 0, opacity: 1 },
                            delay: 2050,
                            duration: 1e3,
                            easingType: I.EaseOutBack,
                        },
                        [Qe.BUTTON]: {
                            from: { y: -5, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 2900,
                            duration: Ze,
                            easingType: I.EaseInOut,
                        },
                    },
                    tt = {
                        [Qe.SHUTTER]: {
                            from: { opacity: 1 },
                            to: { opacity: 0 },
                            delay: 500,
                            duration: 600,
                            easingType: I.EaseOut,
                        },
                        [Qe.FLASH]: Object.assign({}, qe),
                        [Qe.TITLE_GLOW]: {
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                            delay: 1100,
                            duration: 1800,
                            easingType: I.Linear,
                        },
                        [Qe.TITLE]: {
                            from: { opacity: 0, transform: 'scale(1.3, 1.3)' },
                            to: { opacity: 1, transform: 'scale(1, 1)' },
                            transformOrigin: '50% 90%',
                            delay: 700,
                            duration: 1800,
                            easingType: I.EaseInOut,
                        },
                        [Qe.SUB_TITLE]: {
                            from: { y: -10, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1100,
                            duration: 1200,
                            easingType: I.EaseInOut,
                        },
                        [Qe.PROGRESS_ITEM]: {
                            from: { y: -10, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1500,
                            duration: 600,
                            easingType: I.EaseOutBack,
                        },
                        [Qe.REWARD_RIBBON]: Object.assign({}, qe),
                        [Qe.REWARD_MAIN]: Object.assign({}, qe),
                        [Qe.REWARD_TXT]: Object.assign({}, qe),
                        [Qe.REWARD_ITEM]: Object.assign({}, qe),
                        [Qe.REWARD_COUNT_FINISH]: Object.assign({}, qe),
                        [Qe.FOOTER]: {
                            from: { y: -10, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1700,
                            duration: 1200,
                            easingType: I.EaseInOut,
                        },
                        [Qe.IMG]: {
                            from: { x: 20, opacity: 0 },
                            to: { x: 0, opacity: 1 },
                            delay: 1900,
                            duration: 1200,
                            easingType: I.EaseInOut,
                        },
                        [Qe.BUTTON]: {
                            from: { y: -5, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 2900,
                            duration: 1200,
                            easingType: I.EaseInOut,
                        },
                    },
                    ut = {
                        [Qe.SHUTTER]: {
                            delay: 500,
                            duration: Ze,
                            from: { opacity: 1 },
                            to: { opacity: 0 },
                            easingType: I.EaseOut,
                        },
                        [Qe.FLASH]: {
                            from: { opacity: 0, transform: 'scale(35, 35)' },
                            to: [
                                { opacity: 1, transform: 'scale(2, 2)', config: { duration: Ze } },
                                { opacity: 0, transform: 'scale(4, 1)', config: { duration: 4e3 } },
                            ],
                            transformOrigin: '50% 75%',
                            delay: 650,
                            easingType: I.EaseInOut,
                        },
                        [Qe.TITLE_GLOW]: {
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                            delay: 1e3,
                            duration: 1e3,
                            easingType: I.EaseOut,
                        },
                        [Qe.TITLE]: {
                            from: { y: 25, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1e3,
                            config: { tension: 180, friction: 12 },
                        },
                        [Qe.SUB_TITLE]: {
                            from: { y: -25, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1e3,
                            config: { tension: 180, friction: 12 },
                        },
                        [Qe.PROGRESS_ITEM]: {
                            from: { y: -10, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1100,
                            config: { tension: 180, friction: 12 },
                        },
                        [Qe.REWARD_RIBBON]: {
                            from: { opacity: 0, transform: 'scale(0.9, 1)' },
                            to: { opacity: 1, transform: 'scale(1, 1)' },
                            delay: 1600,
                            config: { tension: 180, friction: 12 },
                        },
                        [Qe.REWARD_MAIN]: {
                            from: { y: -10, opacity: 0, transform: 'scale(1, 1)' },
                            to: { y: 0, opacity: 1, transform: 'scale(1.1, 1.1)' },
                            delay: 1600,
                            config: { tension: 180, friction: 12 },
                        },
                        [Qe.REWARD_TXT]: {
                            from: { y: -5, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1850,
                            config: { tension: 180, friction: 12 },
                        },
                        [Qe.REWARD_ITEM]: {
                            from: { y: -5, filter: 'brightness(1.5)', opacity: 0 },
                            to: { y: 0, filter: 'brightness(1)', opacity: 1 },
                            delay: 2e3,
                            config: { tension: 180, friction: 12 },
                        },
                        [Qe.REWARD_COUNT_FINISH]: {
                            from: { transform: 'scale(1, 1)' },
                            to: { transform: 'scale(0.9, 0.9)' },
                            delay: 3650,
                            config: { tension: 180, friction: 12 },
                        },
                        [Qe.FOOTER]: {
                            from: { y: -5, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 2500,
                            duration: Ze,
                            easingType: I.EaseOut,
                        },
                        [Qe.IMG]: {
                            from: { x: 20, opacity: 0 },
                            to: { x: 0, opacity: 1 },
                            delay: 2650,
                            duration: 1e3,
                            easingType: I.EaseOutBack,
                        },
                        [Qe.BUTTON]: {
                            from: { y: -5, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 4e3,
                            duration: Ze,
                            easingType: I.EaseInOut,
                        },
                    };
                let nt;
                !(function (e) {
                    ((e.PERSONAL_SCORE = 'personalScore'), (e.MAIN_SCORE = 'mainScore'));
                })(nt || (nt = {}));
                const at = {
                        [nt.PERSONAL_SCORE]: { delay: 0, duration: 700 },
                        [nt.MAIN_SCORE]: { delay: 1600, duration: 1900 },
                    },
                    rt = {
                        [Ke.VICTORY]: Object.assign({}, et),
                        [Ke.DEFEAT]: Object.assign({}, tt),
                        [Ke.VICTORY_REWARDS]: Object.assign({}, ut),
                    },
                    it = (e, t = !1, u = !1) =>
                        t ? (u ? rt[Ke.VICTORY_REWARDS][e] : rt[Ke.VICTORY][e]) : rt[Ke.DEFEAT][e],
                    ot = R.strings.sm_lobby.battleResult.difficultyInfo,
                    st = () => {
                        const e = h().mediaSize < p.Small;
                        return a().createElement(
                            'div',
                            { className: 'BattleResultDifficultyInfo_base_c2' },
                            a().createElement(Ie, {
                                classMix: 'BattleResultDifficultyInfo_text_dc',
                                justifyContent: Fe.Center,
                                text: e ? ot.extraSmall() : ot.smallAndUp(),
                                binding: {
                                    icon: a().createElement('div', { className: 'BattleResultDifficultyInfo_icon_64' }),
                                },
                            }),
                        );
                    };
                let lt;
                !(function (e) {
                    ((e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning'));
                })(lt || (lt = {}));
                const ct = 'tooltip_watched';
                let Et;
                !(function (e) {
                    ((e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed'));
                })(Et || (Et = {}));
                const dt = ['action', 'timeLimit'],
                    _t = () => Date.now(),
                    mt = (e, t) => {
                        const u = ((e, t) => {
                                const u = (0, n.useCallback)(
                                    (u, n = lt.Info, a) => {
                                        (a || (a = {}),
                                            Object.keys(a).length >= 200 ||
                                                window.uiLoggerModel.log({
                                                    feature: e,
                                                    group: t,
                                                    action: u,
                                                    logLevel: n,
                                                    params: JSON.stringify(a),
                                                }));
                                    },
                                    [e, t],
                                );
                                return (e, t, n) => u(e, t, n);
                            })(e, t),
                            a = (0, n.useRef)(new Map()),
                            r = (0, n.useRef)(new Map()),
                            i = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    (void 0 !== t && t > 0) || a.current.set(e, _t());
                                },
                                [a],
                            ),
                            o = (0, n.useCallback)(() => {
                                (a.current.clear(), r.current.clear());
                            }, [a, r]),
                            s = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== a.current.get(e) &&
                                        void 0 === r.current.get(e) &&
                                        r.current.set(e, _t());
                                },
                                [a, r],
                            ),
                            l = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    if (void 0 === t) return;
                                    const u = r.current.get(e);
                                    if (void 0 === u) return;
                                    r.current.delete(e);
                                    const n = _t() - u;
                                    a.current.set(e, t + n);
                                },
                                [a, r],
                            ),
                            c = (0, n.useCallback)(
                                (e, t = 0, n, i) => {
                                    const o = a.current.get(e);
                                    if (void 0 === o) return;
                                    (void 0 !== r.current.get(e) && l(e), a.current.delete(e));
                                    const s = (_t() - o) / 1e3;
                                    s <= t ||
                                        ((i = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(i, s)),
                                        u(e, n, i));
                                },
                                [a, r, u, l],
                            );
                        return [(e) => i(e), (e, t, u, n) => c(e, t, u, n), () => o(), (e) => s(e), (e) => l(e)];
                    },
                    At = (e, t) => {
                        const u = ((e) => {
                                const t = mt(e, 'metrics'),
                                    u = t[0],
                                    a = t[1],
                                    r = t[2],
                                    i = t[3],
                                    o = t[4],
                                    s = (0, n.useCallback)(
                                        (e) => {
                                            const t = e.action,
                                                u = e.timeLimit,
                                                n = e.logLevel;
                                            a(
                                                t,
                                                u,
                                                n,
                                                (({
                                                    partnerID: e,
                                                    item: t,
                                                    parentScreen: u,
                                                    itemState: n,
                                                    info: a,
                                                }) => ({
                                                    item: t,
                                                    partnerID: e || null,
                                                    parent_screen: u || null,
                                                    item_state: n || null,
                                                    additional_info: a || null,
                                                }))(e),
                                            );
                                        },
                                        [a],
                                    );
                                return [(e) => u(e), (e) => s(e), () => r(), (e) => i(e), (e) => o(e)];
                            })(e),
                            a = u[0],
                            r = u[1],
                            i = t.action,
                            o = t.timeLimit,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(t, dt);
                        return (0, n.useMemo)(
                            () => ({
                                onShow: () => a(i || ct),
                                onHide: () => r(Object.assign({ action: i || ct, timeLimit: o || 2 }, s)),
                            }),
                            [i, o, s, a, r],
                        );
                    };
                let Ft, gt, pt, Bt;
                (!(function (e) {
                    ((e.MISSIONS = 'missions'),
                        (e.ASSIST = 'assist'),
                        (e.KILLS = 'kills'),
                        (e.DAMAGE = 'damage'),
                        (e.ARMOR_USE = 'armorUse'));
                })(Ft || (Ft = {})),
                    (function (e) {
                        ((e.StoryMode = 'story_mode'), (e.Onboarding = 'onboarding'));
                    })(gt || (gt = {})),
                    (function (e) {
                        e.Watched = 'watched';
                    })(pt || (pt = {})),
                    (function (e) {
                        ((e.MissionSelection = 'mission_selection_window'),
                            (e.MssVehicleTooltip = 'mss_vehicle_tooltip'),
                            (e.Congratulations = 'congratulations_window'),
                            (e.Achievement = 'achievement'),
                            (e.Badge = 'badge'),
                            (e.BattleResult = 'battle_result'),
                            (e.BattleResultStatTooltip = 'battle_result_stat_tooltip'),
                            (e.SelectButtonTooltip = 'select_button_tooltip'),
                            (e.Task = 'task'),
                            (e.TaskRewardTooltip = 'task_reward_tooltip'),
                            (e.TaskCompletedTooltip = 'tasks_completed_tooltip'),
                            (e.RewardTooltip = 'reward_tooltip'),
                            (e.PostBattleWindow = 'post_battle_window'));
                    })(Bt || (Bt = {})));
                function Dt() {
                    return (
                        (Dt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Dt.apply(this, arguments)
                    );
                }
                const ht = R.images.story_mode.gui.maps.icons.battleResult.icons,
                    Ct = (0, Me.Pi)(() => {
                        const e = Xe().model,
                            t = h().mediaSize,
                            u = e.missionProgress.get(),
                            n = e.computes.getHasRewards(),
                            r = e.root.missionId.get(),
                            i = t >= p.Medium ? ht.large.$dyn(u.icon) : ht.$dyn(u.icon),
                            o = At(gt.StoryMode, {
                                action: pt.Watched,
                                item: Bt.TaskCompletedTooltip,
                                itemState: r.toString(),
                                parentScreen: Bt.PostBattleWindow,
                            });
                        return a().createElement(
                            ue,
                            Dt(
                                {
                                    contentId: R.views.story_mode.lobby.BattleResultStatTooltip('resId'),
                                    args: { stat: Ft.MISSIONS },
                                },
                                o,
                            ),
                            a().createElement(
                                'div',
                                {
                                    className: A()(
                                        'BattleResultMissionProgress_base_c0',
                                        n && 'BattleResultMissionProgress_base__withRewards_0e',
                                    ),
                                },
                                a().createElement('div', {
                                    className: 'BattleResultMissionProgress_icon_91',
                                    style: { backgroundImage: `url(${i})` },
                                }),
                                a().createElement(
                                    'div',
                                    { className: 'BattleResultMissionProgress_value_1f' },
                                    u.value,
                                ),
                                a().createElement(
                                    'div',
                                    { className: 'BattleResultMissionProgress_slash_85' },
                                    R.strings.sm_lobby.battleResult.slash(),
                                ),
                                a().createElement(
                                    'div',
                                    { className: 'BattleResultMissionProgress_total_f2' },
                                    u.total,
                                ),
                                a().createElement(Ie, {
                                    classMix: 'BattleResultMissionProgress_name_6f',
                                    text: u.name,
                                    justifyContent: Fe.Center,
                                }),
                            ),
                        );
                    }),
                    ft = (e) => e,
                    bt = (e) => K.Z5.getNumberFormat(Math.floor(e), K.B3.INTEGRAL),
                    yt = (0, n.memo)(function ({
                        prefix: e = '',
                        currentNumber: t,
                        previousNumber: u = 0,
                        delay: r,
                        duration: i,
                        classNames: o,
                        isFinalBounceAnim: s = !1,
                        isCanceled: l,
                        onStart: c,
                        onRest: E,
                        playSoundOnStart: d,
                        playSoundOnFinish: _,
                    }) {
                        const m = (0, n.useState)(!1),
                            F = m[0],
                            g = m[1],
                            p = (0, n.useState)(!1),
                            B = p[0],
                            D = p[1],
                            h = (0, k.useSpring)({
                                from: { val: u },
                                to: { val: t },
                                delay: r,
                                config: { duration: i, easing: ft },
                                cancel: l,
                                reverse: l,
                                onStart: () => {
                                    ((null == o ? void 0 : o.anim) && g(!0), d && d(), c && c());
                                },
                                onRest: () => {
                                    ((null == o ? void 0 : o.anim) && g(!1), s && D(!0), _ && _(), E && E());
                                },
                            });
                        return a().createElement(
                            'div',
                            {
                                className: A()(
                                    'NumberAnimation_base_f8',
                                    null == o ? void 0 : o.base,
                                    F && (null == o ? void 0 : o.anim),
                                    B && 'NumberAnimation_base__finalBounce_17',
                                ),
                            },
                            e,
                            l
                                ? bt(t)
                                : a().createElement(
                                      k.animated.div,
                                      null,
                                      h.val.to((e) => bt(e)),
                                  ),
                        );
                    }),
                    vt = 'BattleResultProgress_base_47',
                    wt = 'BattleResultProgress_base__withRewards_cd';
                function Rt() {
                    return (
                        (Rt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Rt.apply(this, arguments)
                    );
                }
                const Tt = R.images.story_mode.gui.maps.icons.battleResult.icons,
                    St = (0, n.memo)(
                        ({
                            icon: e,
                            index: t,
                            isAnimCanceled: u,
                            value: n,
                            name: r,
                            stat: i,
                            isWithRewards: o,
                            isVictory: s,
                            hasRewards: l,
                        }) => {
                            const c = Xe().model,
                                E = h().mediaSize >= p.Medium ? Tt.large.$dyn(e) : Tt.$dyn(e),
                                d = it(Qe.PROGRESS_ITEM, s, l).delay,
                                _ = c.root.missionId.get(),
                                m = At(gt.StoryMode, {
                                    action: pt.Watched,
                                    item: Bt.BattleResultStatTooltip,
                                    itemState: _.toString(),
                                    parentScreen: Bt.PostBattleWindow,
                                });
                            return a().createElement(
                                ue,
                                Rt(
                                    {
                                        contentId: R.views.story_mode.lobby.BattleResultStatTooltip('resId'),
                                        args: { stat: i },
                                    },
                                    m,
                                ),
                                a().createElement(
                                    'div',
                                    { className: A()(vt, o && wt) },
                                    a().createElement(
                                        U,
                                        Rt(
                                            { isCanceled: u, className: A()(vt, o && wt) },
                                            Object.assign({}, it(Qe.PROGRESS_ITEM, s, l), { delay: d + Je * t }),
                                        ),
                                        a().createElement('div', {
                                            className: 'BattleResultProgress_icon_60',
                                            style: { backgroundImage: `url(${E})` },
                                        }),
                                        a().createElement(
                                            yt,
                                            Rt(
                                                {
                                                    classNames: { base: 'BattleResultProgress_value_fc' },
                                                    currentNumber: n,
                                                },
                                                Object.assign({}, at[nt.PERSONAL_SCORE], { delay: d + 150 + Je * t }),
                                                { isCanceled: u },
                                            ),
                                        ),
                                        a().createElement(Ie, {
                                            classMix: 'BattleResultProgress_name_c2',
                                            text: r,
                                            justifyContent: Fe.Center,
                                        }),
                                    ),
                                ),
                            );
                        },
                    );
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
                const xt = (0, Me.Pi)(({ isAnimCanceled: e }) => {
                    const t = Xe().model,
                        u = t.computes.getHasRewards(),
                        n = t.root.isVictory.get();
                    return a().createElement(
                        a().Fragment,
                        null,
                        a().createElement(
                            U,
                            Ot({ isCanceled: e, className: A()(vt, u && wt) }, it(Qe.PROGRESS_ITEM, n, u)),
                            a().createElement(Ct, null),
                        ),
                        je(t.progressLevels.get(), (t, r) =>
                            a().createElement(
                                St,
                                Ot(
                                    {
                                        key: `${t.icon}_${r}`,
                                        index: r + 1,
                                        isAnimCanceled: e,
                                        isWithRewards: u,
                                        isVictory: n,
                                        hasRewards: u,
                                    },
                                    t,
                                ),
                            ),
                        ),
                    );
                });
                let Lt, kt, Nt, Pt, It, Mt, Ut, Gt;
                var Ht;
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
                        (e.Attachment = 'attachment'),
                        (e.Stamp = 'stamp'),
                        (e.WtEventLootbox = 'wtevent_lootBox'),
                        (e.WtEventTicket = 'wtevent_ticket'));
                })(Lt || (Lt = {})),
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
                    })(kt || (kt = {})),
                    ((Ht = Nt || (Nt = {})).Big = 'big'),
                    (Ht.Small = 'small'),
                    (Ht.Mini = 'mini'),
                    (Ht.S600x450 = 's600x450'),
                    (Ht.S400x300 = 's400x300'),
                    (Ht.S296x222 = 's296x222'),
                    (Ht.S232x174 = 's232x174'),
                    (Ht.S180x135 = 's180x135'),
                    (Ht.S128x100 = 's128x100'),
                    (Ht.S80x80 = 's80x80'),
                    (Ht.S64x64 = 's64x64'),
                    (Ht.S48x48 = 's48x48'),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Pt || (Pt = {})),
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
                    })(It || (It = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Mt || (Mt = {})),
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
                    })(Ut || (Ut = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(Gt || (Gt = {})));
                const Wt = [Lt.Attachment],
                    jt = ({ value: e, format: t = 'integral' }) => {
                        const u = (function (e) {
                                return 'gold' === e ? K.B3.GOLD : K.B3.INTEGRAL;
                            })(t),
                            n = K.Z5.getNumberFormat(e, u);
                        return void 0 !== e && void 0 !== n ? n : null;
                    },
                    Vt = [
                        Lt.Items,
                        Lt.Equipment,
                        Lt.Xp,
                        Lt.XpFactor,
                        Lt.Blueprints,
                        Lt.BlueprintsAny,
                        Lt.Goodies,
                        Lt.Berths,
                        Lt.Slots,
                        Lt.Tokens,
                        Lt.CrewSkins,
                        Lt.CrewBooks,
                        Lt.Customizations,
                        Lt.CreditsFactor,
                        Lt.TankmenXp,
                        Lt.TankmenXpFactor,
                        Lt.FreeXpFactor,
                        Lt.BattleToken,
                        Lt.LootBox,
                        Lt.PremiumUniversal,
                        Lt.NaturalCover,
                        Lt.BpCoin,
                        Lt.BattlePassSelectToken,
                        Lt.BattlaPassFinalAchievement,
                        Lt.BattleBadge,
                        Lt.BattlePassTicket,
                        Lt.BonusX5,
                        Lt.CrewBonusX3,
                        Lt.EpicSelectToken,
                        Lt.Comp7TokenWeeklyReward,
                        Lt.DeluxeGift,
                        Lt.ModernizedDevicesT1Gift,
                        Lt.ModernizedDevicesT2Gift,
                        Lt.ModernizedDevicesT3Gift,
                        Lt.BattleBoosterGift,
                        Lt.OptionalDevice,
                        Lt.Attachment,
                        Lt.Stamp,
                        Lt.WtEventLootbox,
                        Lt.WtEventTicket,
                    ],
                    $t = [Lt.Gold, Lt.Credits, Lt.Crystal, Lt.FreeXp],
                    zt = [Lt.BattlePassPoints, Lt.EquipCoin],
                    Yt = [Lt.PremiumPlus, Lt.Premium],
                    Xt = (e, t, u) => {
                        const n = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            n,
                            u,
                        );
                    },
                    qt = [Nt.Small, Nt.Big],
                    Kt = {
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
                    Qt = ({
                        name: e,
                        image: t,
                        isPeriodic: u = !1,
                        size: n = Nt.Big,
                        special: r,
                        value: i,
                        valueType: o,
                        title: s,
                        style: l,
                        className: c,
                        classNames: E,
                        tooltipArgs: d,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const m = ((e, t) => {
                                if (void 0 === t || !qt.includes(e)) return null;
                                switch (t) {
                                    case It.BATTLE_BOOSTER:
                                    case It.BATTLE_BOOSTER_REPLACE:
                                        return Mt.BATTLE_BOOSTER;
                                }
                            })(n, r),
                            F = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case It.BATTLE_BOOSTER:
                                        return Ut.BATTLE_BOOSTER;
                                    case It.BATTLE_BOOSTER_REPLACE:
                                        return Ut.BATTLE_BOOSTER_REPLACE;
                                    case It.BUILT_IN_EQUIPMENT:
                                        return Ut.BUILT_IN_EQUIPMENT;
                                    case It.EQUIPMENT_PLUS:
                                        return Ut.EQUIPMENT_PLUS;
                                    case It.EQUIPMENT_TROPHY_BASIC:
                                        return Ut.EQUIPMENT_TROPHY_BASIC;
                                    case It.EQUIPMENT_TROPHY_UPGRADED:
                                        return Ut.EQUIPMENT_TROPHY_UPGRADED;
                                    case It.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Ut.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case It.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Ut.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case It.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Ut.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case It.PROGRESSION_STYLE_UPGRADED_1:
                                        return Ut.PROGRESSION_STYLE_UPGRADED_1;
                                    case It.PROGRESSION_STYLE_UPGRADED_2:
                                        return Ut.PROGRESSION_STYLE_UPGRADED_2;
                                    case It.PROGRESSION_STYLE_UPGRADED_3:
                                        return Ut.PROGRESSION_STYLE_UPGRADED_3;
                                    case It.PROGRESSION_STYLE_UPGRADED_4:
                                        return Ut.PROGRESSION_STYLE_UPGRADED_4;
                                    case It.PROGRESSION_STYLE_UPGRADED_5:
                                        return Ut.PROGRESSION_STYLE_UPGRADED_5;
                                    case It.PROGRESSION_STYLE_UPGRADED_6:
                                        return Ut.PROGRESSION_STYLE_UPGRADED_6;
                                    case It.ATTACHMENT_RARE:
                                        return Ut.ATTACHMENT_RARE;
                                    case It.ATTACHMENT_EPIC:
                                        return Ut.ATTACHMENT_EPIC;
                                    case It.ATTACHMENT_LEGENDARY:
                                        return Ut.ATTACHMENT_LEGENDARY;
                                }
                            })(r),
                            g = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case Pt.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case Pt.CURRENCY:
                                    case Pt.NUMBER:
                                        return a().createElement(jt, { format: 'integral', value: Number(e) });
                                    case Pt.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(i, o);
                        return a().createElement(
                            'div',
                            {
                                className: A()(Kt.base, Kt[`base__${n}`], Wt.includes(e) && Kt.base__normalize, c),
                                style: l,
                            },
                            a().createElement(
                                Ee,
                                { tooltipArgs: d, className: Kt.tooltipWrapper },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: A()(Kt.image, null == E ? void 0 : E.image) },
                                        m &&
                                            a().createElement('div', {
                                                className: A()(Kt.highlight, null == E ? void 0 : E.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${m}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            a().createElement('div', {
                                                className: A()(Kt.icon, null == E ? void 0 : E.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        F &&
                                            a().createElement('div', {
                                                className: A()(Kt.overlay, null == E ? void 0 : E.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${F}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: A()(
                                                    Kt.info,
                                                    Kt[`info__${e}`],
                                                    o === Pt.MULTI && Kt.info__multi,
                                                    null == E ? void 0 : E.info,
                                                ),
                                            },
                                            g,
                                        ),
                                    s && a().createElement('div', { className: Kt.title }, s),
                                ),
                            ),
                            u &&
                                a().createElement(
                                    Ee,
                                    { tooltipArgs: _ },
                                    a().createElement('div', {
                                        className: A()(Kt.timer, null == E ? void 0 : E.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Zt = (e) => e.replace(/\s+/g, '').replace(',', '').replace('.', ''),
                    Jt = (e, t) => {
                        if (void 0 === e) return e;
                        switch (t) {
                            case Pt.MULTI:
                                return e.substring(1);
                            case Pt.CURRENCY:
                            case Pt.NUMBER:
                                return Zt(e);
                            default:
                                return e;
                        }
                    },
                    eu = {
                        base: 'MainReward_base_1f',
                        value: 'MainReward_value_1d',
                        value__freeXP: 'MainReward_value__freeXP_8c',
                        value__credits: 'MainReward_value__credits_ff',
                        icon: 'MainReward_icon_6a',
                    };
                function tu() {
                    return (
                        (tu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        tu.apply(this, arguments)
                    );
                }
                const uu = { [Nt.Big]: 80, [Nt.Small]: 48 },
                    nu = (0, Me.Pi)(
                        ({ icon: e, name: t, index: u, isAnimCanceled: n, iconSize: r, value: i, tooltipArgs: o }) => {
                            const s = Xe().model,
                                l = s.root.isVictory.get(),
                                c = s.computes.getHasRewards(),
                                E = it(Qe.REWARD_MAIN, l, c).delay,
                                d = h().mediaSize >= p.Medium ? 36 : 18;
                            return a().createElement(
                                U,
                                tu({ isCanceled: n, className: eu.base }, it(Qe.REWARD_COUNT_FINISH, l, c)),
                                a().createElement(
                                    Ee,
                                    { tooltipArgs: o, className: eu.tooltipWrapper },
                                    a().createElement(
                                        'div',
                                        { className: eu.base },
                                        a().createElement(
                                            'div',
                                            { className: eu.value, style: { width: `${String(i).length * d + d}rem` } },
                                            a().createElement(
                                                yt,
                                                tu(
                                                    {
                                                        classNames: { base: A()(eu.value, eu[`value__${t}`]) },
                                                        currentNumber: i,
                                                    },
                                                    Object.assign({}, at[nt.MAIN_SCORE], { delay: E + 150 + Je * u }),
                                                    { isCanceled: n },
                                                ),
                                            ),
                                        ),
                                        a().createElement('div', {
                                            className: eu.icon,
                                            style: {
                                                backgroundImage: `url(${e})`,
                                                width: `${uu[r]}rem`,
                                                height: `${uu[r]}rem`,
                                            },
                                        }),
                                    ),
                                ),
                            );
                        },
                    );
                function au() {
                    return (
                        (au =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        au.apply(this, arguments)
                    );
                }
                let ru;
                !(function (e) {
                    ((e.freeXP = 'freeXP'), (e.credits = 'credits'));
                })(ru || (ru = {}));
                const iu = (0, Me.Pi)(({ isAnimCanceled: e }) => {
                        const t = Xe().model,
                            u = t.root.isVictory.get(),
                            r = t.computes.getHasRewards(),
                            i = h().mediaSize >= p.Medium ? Nt.Big : Nt.Small,
                            o = t.computes.getXPReward(),
                            s = t.computes.getCreditsReward(),
                            l = it(Qe.REWARD_MAIN, u, r).delay,
                            c = it(Qe.REWARD_ITEM, u, r).delay,
                            E = t.root.missionId.get(),
                            d = At(gt.StoryMode, {
                                action: pt.Watched,
                                item: Bt.RewardTooltip,
                                itemState: E.toString(),
                                parentScreen: Bt.PostBattleWindow,
                            }),
                            _ = Xt(
                                { tooltipId: null == o ? void 0 : o.tooltipId },
                                Number(null == o ? void 0 : o.tooltipContentId),
                            ),
                            m = Object.assign({}, _, d),
                            A = Xt(
                                { tooltipId: null == s ? void 0 : s.tooltipId },
                                Number(null == s ? void 0 : s.tooltipContentId),
                            ),
                            F = Object.assign({}, A, d),
                            g = (0, n.useCallback)(() => {
                                G('gui_hangar_award_random_appear');
                            }, []);
                        return a().createElement(
                            'div',
                            { className: 'BattleResultRewards_base_ae' },
                            a().createElement(
                                U,
                                au({ isCanceled: e }, it(Qe.REWARD_RIBBON, u, r)),
                                a().createElement('div', { className: 'BattleResultRewards_ribbon_78' }),
                            ),
                            a().createElement(
                                'div',
                                { className: 'BattleResultRewards_rewards_c2' },
                                a().createElement(
                                    'div',
                                    { className: 'BattleResultRewards_main_69' },
                                    o &&
                                        a().createElement(
                                            U,
                                            au(
                                                { isCanceled: e },
                                                Object.assign({}, it(Qe.REWARD_MAIN, u, r), { delay: l }),
                                            ),
                                            a().createElement(nu, {
                                                icon: o.icon[i],
                                                name: ru.freeXP,
                                                index: 0,
                                                iconSize: i,
                                                value: parseInt(Zt(o.value)),
                                                isAnimCanceled: e,
                                                tooltipArgs: m,
                                            }),
                                        ),
                                    s &&
                                        a().createElement(
                                            U,
                                            au(
                                                { isCanceled: e },
                                                Object.assign({}, it(Qe.REWARD_MAIN, u, r), { delay: l + Je }),
                                            ),
                                            a().createElement(nu, {
                                                icon: s.icon[i],
                                                name: ru.credits,
                                                index: 1,
                                                iconSize: i,
                                                value: parseInt(Zt(s.value)),
                                                isAnimCanceled: e,
                                                tooltipArgs: F,
                                            }),
                                        ),
                                ),
                                t.computes.getHasOtherRewards() &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(
                                            U,
                                            au({ isCanceled: e }, it(Qe.REWARD_TXT, u, r)),
                                            a().createElement(
                                                'div',
                                                { className: 'BattleResultRewards_otherText_4c' },
                                                R.strings.sm_lobby.battleResult.rewards.other(),
                                            ),
                                        ),
                                        a().createElement(
                                            'div',
                                            { className: 'BattleResultRewards_other_01' },
                                            je(t.computes.getOtherRewards(), (t, n) => {
                                                const o =
                                                    ((s = t.name),
                                                    Vt.includes(s)
                                                        ? Pt.MULTI
                                                        : $t.includes(s)
                                                          ? Pt.CURRENCY
                                                          : zt.includes(s)
                                                            ? Pt.NUMBER
                                                            : Yt.includes(s)
                                                              ? Pt.PREMIUM_PLUS
                                                              : Pt.STRING);
                                                var s;
                                                const l = Xt({ tooltipId: t.tooltipId }, Number(t.tooltipContentId)),
                                                    E = Object.assign({}, l, d);
                                                return a().createElement(
                                                    U,
                                                    au(
                                                        {
                                                            key: `${t.name}${n}`,
                                                            className: 'BattleResultRewards_otherRewards_cc',
                                                        },
                                                        Object.assign({}, it(Qe.REWARD_ITEM, u, r), {
                                                            delay: c + Je * n,
                                                        }),
                                                        { isCanceled: e, onStart: g },
                                                    ),
                                                    a().createElement(
                                                        Qt,
                                                        au({}, t, {
                                                            value: Jt(t.value, o),
                                                            image: t.icon[i],
                                                            valueType: o,
                                                            size: i,
                                                            tooltipArgs: E,
                                                        }),
                                                    ),
                                                );
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    ou = R.images.story_mode.gui.maps.icons.battleResult.vehicle,
                    su = R.images.story_mode.gui.maps.icons.battleResult.vehicle.large,
                    lu = (e, t) => e.$dyn(`vehicle_${t}`) || e.$dyn('vehicle'),
                    cu = (0, Me.Pi)(() => {
                        const e = h().mediaSize,
                            t = Xe().model,
                            u = t.root.missionId.get();
                        return a().createElement(
                            'div',
                            {
                                className: A()(
                                    'BattleResultVehicle_base_03',
                                    t.root.isVictory.get() && 'BattleResultVehicle_base__victory_20',
                                ),
                            },
                            a().createElement('div', { className: 'BattleResultVehicle_back_97' }),
                            a().createElement('div', {
                                className: 'BattleResultVehicle_vehicle_19',
                                style: { backgroundImage: `url(${e < p.Large ? lu(ou, u) : lu(su, u)})` },
                            }),
                            a().createElement('div', { className: 'BattleResultVehicle_fore_23' }),
                        );
                    }),
                    Eu = {
                        base: 'BattleResultViewApp_base_15',
                        sparks: 'BattleResultViewApp_sparks_7e',
                        shatter: 'BattleResultViewApp_shatter_a2',
                        back: 'BattleResultViewApp_back_f2',
                        base__victory: 'BattleResultViewApp_base__victory_bd',
                        shadowCenter: 'BattleResultViewApp_shadowCenter_fd',
                        titleGlow: 'BattleResultViewApp_titleGlow_05',
                        flash: 'BattleResultViewApp_flash_bb',
                        container: 'BattleResultViewApp_container_b8',
                        title: 'BattleResultViewApp_title_0e',
                        subTitle: 'BattleResultViewApp_subTitle_7b',
                        close: 'BattleResultViewApp_close_41',
                        buttonWrapper: 'BattleResultViewApp_buttonWrapper_b4',
                        button: 'BattleResultViewApp_button_cf',
                        footer: 'BattleResultViewApp_footer_0e',
                        infoName: 'BattleResultViewApp_infoName_6e',
                        infoDescription: 'BattleResultViewApp_infoDescription_bc',
                        vehicleName: 'BattleResultViewApp_vehicleName_7a',
                        playerStatus: 'BattleResultViewApp_playerStatus_ae',
                        centerBlock: 'BattleResultViewApp_centerBlock_d9',
                        progress: 'BattleResultViewApp_progress_a6',
                    };
                function du() {
                    return (
                        (du =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        du.apply(this, arguments)
                    );
                }
                const _u = R.images.story_mode.gui.maps.icons.common,
                    mu = (0, Me.Pi)(() => {
                        const e = Xe(),
                            t = e.controls,
                            u = e.model,
                            r = (0, n.useState)(!1),
                            i = r[0],
                            o = r[1],
                            s = u.root.isVictory.get(),
                            l = u.root.hasAutoCompleteTasks.get(),
                            c = u.computes.getHasRewards(),
                            E = u.root.isOnboarding.get(),
                            d = u.missionProgress.get().value > 0;
                        Z(q.n.ESCAPE, t.exit);
                        const _ = (0, n.useCallback)(() => {
                                G(s ? 'gui_hangar_award_banner' : 'gui_hangar_award_woosh');
                            }, [s]),
                            m = (0, n.useCallback)(() => {
                                s || G('gui_hangar_award_banner');
                            }, [s]);
                        return a().createElement(
                            'div',
                            { className: A()(Eu.base, s && Eu.base__victory), onClick: () => o(!0) },
                            a().createElement(L, {
                                backgroundPath: E
                                    ? _u.backgrounds.$num(u.root.missionId.get())
                                    : _u.backgrounds_result.$dyn(`${s ? 'win' : 'loss'}_${u.root.missionId.get()}`),
                                showBlur: E,
                                showVignette: E,
                            }),
                            E &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: Eu.back }),
                                    a().createElement('div', { className: Eu.sparks }),
                                    a().createElement('div', { className: Eu.shadowCenter }),
                                ),
                            (E || !s) &&
                                a().createElement(
                                    U,
                                    du({ isCanceled: i, className: Eu.titleGlow }, it(Qe.TITLE_GLOW, s, c)),
                                ),
                            a().createElement(
                                U,
                                du({ isCanceled: i, className: Eu.container }, it(Qe.TITLE, s, c), { onStart: _ }),
                                a().createElement('div', { className: Eu.title }, u.root.title.get()),
                            ),
                            a().createElement(
                                U,
                                du({ isCanceled: i, className: Eu.container }, it(Qe.SUB_TITLE, s, c)),
                                a().createElement('div', { className: Eu.subTitle }, u.root.subTitle.get()),
                            ),
                            s && a().createElement(U, du({ isCanceled: i, className: Eu.flash }, it(Qe.FLASH, s, c))),
                            a().createElement(
                                'div',
                                { className: Eu.centerBlock },
                                a().createElement(
                                    'div',
                                    { className: A()(Eu.progress, c && Eu.progress__withRewards) },
                                    a().createElement(xt, { isAnimCanceled: i }),
                                ),
                                c && a().createElement(iu, { isAnimCanceled: i }),
                            ),
                            a().createElement(
                                U,
                                du({ isCanceled: i, className: Eu.footer }, it(Qe.FOOTER, s, c)),
                                a().createElement(
                                    'div',
                                    { className: Eu.footer },
                                    a().createElement('div', { className: Eu.infoName }, u.root.infoName.get()),
                                    a().createElement(
                                        'div',
                                        { className: Eu.infoDescription },
                                        u.root.infoDescription.get(),
                                    ),
                                    a().createElement(
                                        U,
                                        du({ isCanceled: i, className: Eu.footer }, it(Qe.IMG, s, c), { onStart: m }),
                                        a().createElement(cu, null),
                                    ),
                                    a().createElement(Ie, { classMix: Eu.vehicleName, text: u.root.vehicleName.get() }),
                                    a().createElement(Ie, {
                                        classMix: Eu.playerStatus,
                                        text: u.root.playerStatus.get(),
                                    }),
                                    l && d && a().createElement(st, null),
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: Eu.close },
                                a().createElement(X, {
                                    caption: R.strings.sm_lobby.battleResult.closeButton(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: t.exit,
                                }),
                            ),
                            a().createElement(
                                U,
                                du({ isCanceled: i, className: Eu.buttonWrapper }, it(Qe.BUTTON, s, c)),
                                a().createElement(
                                    V,
                                    { type: W.primary, size: j.medium, mixClass: Eu.button, onClick: t.continue },
                                    R.strings.sm_lobby.battleResult.continueButton(),
                                ),
                            ),
                            a().createElement(U, du({ isCanceled: i, className: Eu.shatter }, it(Qe.SHUTTER, s, c))),
                        );
                    });
                engine.whenReady.then(() => {
                    x().render(
                        a().createElement(Ye, null, a().createElement(S, null, a().createElement(mu, null))),
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
                for (s = 0; s < deferred.length; s++) {
                    for (var [t, u, n] = deferred[s], r = !0, i = 0; i < t.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = u();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [t, u, n];
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
        (__webpack_require__.j = 'lobby/BattleResultView/BattleResultView'),
        (() => {
            var e = { 'lobby/BattleResultView/BattleResultView': 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [r, i, o] = u,
                        s = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(u); s < r.length; s++)
                        ((a = r[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/story_mode.vendors'], () =>
        __webpack_require__(4572),
    );
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
