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
                    u.d(t, { mouse: () => c, off: () => l, on: () => i, onResize: () => r, onScaleUpdated: () => s }));
                var a = u(472),
                    n = u(176);
                const r = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    i = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    o = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
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
                                            s = o[t]((e) => u([e, 'outside']));
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
            959: (e, t, u) => {
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
                    n = u(493);
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
            176: (e, t, u) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => a });
            },
            493: (e, t, u) => {
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
            472: (e, t, u) => {
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
            138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => s });
                var a = u(959),
                    n = u(698),
                    r = u(514);
                const s = { view: u(641), client: a, sound: r.ZP, intl: n.N };
            },
            698: (e, t, u) => {
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
                var a = u(959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(n).reduce((e, t) => ((e[t] = () => (0, a.playSound)(n[t])), e), {}),
                    s = { play: Object.assign({}, r, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            722: (e, t, u) => {
                'use strict';
                function a(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function n(e, t, u) {
                    return `url(${a(e, t, u)})`;
                }
                (u.r(t), u.d(t, { getBgUrl: () => n, getTextureUrl: () => a }));
            },
            112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => n });
                var a = u(472);
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
            641: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        addModelObserver: () => m,
                        addPreloadTexture: () => l,
                        arabic2roman: () => y,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => P,
                        enableFullScreenModeSupported: () => R,
                        events: () => s.U,
                        extraSize: () => L,
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
                        resize: () => _,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => T,
                    }));
                var a = u(690),
                    n = u(722),
                    r = u(112),
                    s = u(538),
                    i = u(566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, u, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, a);
                }
                function m(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, u = 'px') {
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
                const P = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    L = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    T = Promise.all([
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
            566: (e, t, u) => {
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
            521: (e, t, u) => {
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
            690: (e, t, u) => {
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
            358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var a = u(138);
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
            916: (e, t, u) => {
                'use strict';
                u.d(t, {
                    Sw: () => r.Z,
                    B3: () => o,
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
                var r = u(358),
                    s = u(613);
                let i;
                var l;
                (((l = i || (i = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = u(521),
                    _ = u(138);
                const A = ['args'];
                function F(e, t, u, a, n, r, s) {
                    try {
                        var i = e[r](s),
                            l = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(l) : Promise.resolve(l).then(a, n);
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
                var h = u(572);
                const C = n.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: i,
                        NumberFormatType: o,
                        RealFormatType: c,
                        TimeFormatType: m,
                        DateFormatType: E,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => b(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => b(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            b(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, a, n = R.invalid('resId'), r) => {
                            const s = _.O.view.getViewGlobalPosition(),
                                l = u.getBoundingClientRect(),
                                o = l.x,
                                c = l.y,
                                m = l.width,
                                E = l.height,
                                d = {
                                    x: _.O.view.pxToRem(o) + s.x,
                                    y: _.O.view.pxToRem(c) + s.y,
                                    width: _.O.view.pxToRem(m),
                                    height: _.O.view.pxToRem(E),
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
            613: (e, t, u) => {
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
            218: (e, t, u) => {
                'use strict';
                var a = {};
                (u.r(a),
                    u.d(a, {
                        Area: () => Ie,
                        Bar: () => Ne,
                        DefaultScroll: () => Me,
                        Direction: () => ve,
                        defaultSettings: () => fe,
                        useHorizontalScrollApi: () => ye,
                    }));
                var n = {};
                (u.r(n), u.d(n, { Area: () => Xe, Bar: () => Ve, Default: () => Ke, useVerticalScrollApi: () => Oe }));
                var r = u(363),
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
                var l = u(138);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function m(e = l.O.client.getSize('rem')) {
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
                })(c || (c = {}));
                const E = m(),
                    d = (0, r.createContext)(E),
                    _ = ['children'];
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
                        })(e, _);
                    const a = (0, r.useContext)(d),
                        n = a.extraLarge,
                        s = a.large,
                        l = a.medium,
                        o = a.small,
                        c = a.extraSmall,
                        m = a.extraLargeWidth,
                        E = a.largeWidth,
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
                        if (u.medium && l) return t;
                        if (u.small && o) return t;
                        if (u.extraSmall && c) return t;
                    } else {
                        if (u.extraLargeWidth && m) return i(t, u, C);
                        if (u.largeWidth && E) return i(t, u, C);
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
                        o = n[1];
                    return (
                        (0, r.useLayoutEffect)(() => {
                            function e() {
                                a((e) => {
                                    const t = l.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : m(t);
                                });
                            }
                            return (
                                e(),
                                o(!0),
                                l.O.client.events.on('clientResized', e),
                                l.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (l.O.client.events.off('clientResized', e),
                                        l.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        s().createElement(d.Provider, { value: u }, i && e)
                    );
                };
                var F = u(483),
                    g = u.n(F),
                    p = u(926),
                    b = u.n(p);
                let D, B, h;
                (!(function (e) {
                    ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                })(D || (D = {})),
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
                    P = (e) => {
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
                            l = n.mediaSize;
                        return s().createElement('div', f({ className: g()(u, w[r], y[i], S[l]) }, a), t);
                    },
                    L = ['children'],
                    T = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, L);
                        return s().createElement(A, null, s().createElement(P, u, t));
                    };
                var x = u(533),
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
                function I() {
                    return (
                        (I =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        I.apply(this, arguments)
                    );
                }
                const O = 'tabs-role';
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
                            t = e.findIndex((e) => e.props[O] === W.LIST);
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
                        const l = g()(
                                'Tabs_wrapper_2d',
                                u.props.className,
                                this.props.isTabsCentered && 'Tabs_wrapper__centered_d8',
                                this.props.isVerticalTabs && 'Tabs_wrapper__vertical_a5',
                            ),
                            o = g()('Tabs_list_0a', this.props.isTabsCentered && 'Tabs_list__centered_dc');
                        if (t.activeKey !== this.state.activeKey || n) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[O] === W.CONTENT) return e.props[W.TAB].includes(this.state.activeKey);
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
                                            { className: o, key: W.LIST },
                                            s().createElement('div', I({}, u.props, { className: l }), r),
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
                            l = (function (e, t) {
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
                            z({ className: u }, l),
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
                            l = void 0 !== i && i,
                            o = e.hide,
                            c = void 0 !== o && o,
                            m = e.maximumNumber,
                            E = void 0 === m ? 99 : m,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, j);
                        const _ = u ? null : t,
                            A = 'string' == typeof _;
                        if ((_ && !A && _ < 0) || 0 === _) return null;
                        const F = _ && !A && _ > E,
                            p = g()(
                                U.base,
                                U[`base__${r}`],
                                l && U.base__animated,
                                c && U.base__hidden,
                                !_ && U.base__pattern,
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
                                F ? E : _,
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
                            l = e.isMedium,
                            o = void 0 !== l && l,
                            c = e.isNotified,
                            m = void 0 !== c && c,
                            E = e.children,
                            d = void 0 === E ? 'Tab' : E,
                            _ = e.wrapper,
                            A = void 0 === _ ? {} : _,
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
                                            { Tab_base__medium_ec: o },
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
                    J = (e) => {
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
                var ee = u(521),
                    te = u(916);
                const ue = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ae(e = ee.n.NONE, t = ue, u = !1, a = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== ee.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && l.O.view.isEventHandled()) return;
                                (l.O.view.setEventHandled(), t(n), u && n.stopPropagation());
                            }
                        }
                    }, [t, e, u, a]);
                }
                const ne = (e = 1) => {
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
                    re = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    se = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    ie = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    le = te.Sw.instance;
                let oe;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(oe || (oe = {}));
                const ce = (e = 'model', t = oe.Deep) => {
                    const u = (0, r.useState)(0),
                        a = (u[0], u[1]),
                        n = (0, r.useMemo)(() => ne(), []),
                        s = n.callerUrl,
                        i = n.caller,
                        l = n.resId,
                        o = (0, r.useMemo)(() => {
                            const t = (function (e) {
                                return (window.injected || (window.injected = new Map()), window.injected).has(e);
                            })(s.replace('.js', '.html'));
                            return window.__feature && window.__feature !== i && !t ? `subViews.${i}.${e}` : e;
                        }, [s, i, e]),
                        c = (0, r.useState)(() =>
                            ((e) => {
                                const t = re(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return se(t) ? t.value : t;
                            })(
                                ((e) =>
                                    ((e, t) =>
                                        e.split('.').reduce((e, t) => {
                                            const u = re(`${e}.${t}`, window);
                                            return se(u) ? ((e, t) => `${e}.${t}.value`)(e, t) : `${e}.${t}`;
                                        }))(e))(o),
                            ),
                        ),
                        m = c[0],
                        E = c[1],
                        d = (0, r.useRef)(-1);
                    return (
                        ((e) => {
                            const t = (0, r.useRef)(!1);
                            t.current || (e(), (t.current = !0));
                        })(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? oe.Deep : oe.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== oe.None)
                            ) {
                                const u = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === oe.Deep
                                            ? (e === m && a((e) => e + 1), E(e))
                                            : E(Object.assign([], e));
                                    },
                                    n = ((e) => {
                                        const t = ((e) => {
                                                const t = ne(),
                                                    u = t.caller,
                                                    a = t.resId,
                                                    n =
                                                        window.__feature && window.__feature !== u && u
                                                            ? `subViews.${u}`
                                                            : '';
                                                return { modelPrefix: n, modelPath: ie(n, ''), resId: a };
                                            })(),
                                            u = t.modelPrefix,
                                            a = e.split('.');
                                        if (a.length > 0) {
                                            const e = [a[0]];
                                            return (
                                                a.reduce((t, a) => {
                                                    const n = re(ie(u, `${t}.${a}`), window);
                                                    return se(n)
                                                        ? (e.push(n.id), `${t}.${a}.value`)
                                                        : (e.push(a), `${t}.${a}`);
                                                }),
                                                e.reduce((e, t) => e + '.' + t)
                                            );
                                        }
                                        return '';
                                    })(e);
                                d.current = le.addCallback(n, u, l, t === oe.Deep);
                            }
                        }),
                        (0, r.useEffect)(() => {
                            if (t !== oe.None)
                                return () => {
                                    le.removeCallback(d.current, l);
                                };
                        }, [l, t]),
                        m
                    );
                };
                var me = u(664);
                const Ee = 'App_tabContent_cd',
                    de = 'App_tabContent__visible_99',
                    _e = 'AppAnimations_baseEnterDone_dd',
                    Ae = { enterActive: 'AppAnimations_baseEnterActive_54', enterDone: _e },
                    Fe = { enterActive: 'AppAnimations_background_b7', enterDone: _e },
                    ge = { enterActive: 'AppAnimations_horizontalTabs_1a', enterDone: _e },
                    pe = (e, t, u) => (u < e ? e : u > t ? t : u),
                    be = [];
                function De(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), be)
                    );
                }
                function Be(e, t, u = []) {
                    const a = (0, r.useRef)(0),
                        n = (0, r.useCallback)(() => {
                            (window.clearInterval(a.current), (a.current = 0));
                        }, u || []);
                    (0, r.useEffect)(() => n, [n]);
                    const s = (null != u ? u : []).concat([t]);
                    return [
                        (0, r.useCallback)((u) => {
                            (0 !== a.current && n(), (a.current = window.setInterval(() => e(u, !0), t)), e(u, !1));
                        }, s),
                        n,
                    ];
                }
                function he(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                var Ce = u(30);
                let ve;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(ve || (ve = {}));
                const fe = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    we = ({
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
                            return r <= n ? 0 : pe(n, r, u);
                        };
                        return (l = {}) => {
                            const o = l.settings,
                                c = void 0 === o ? fe : o,
                                m = (0, r.useRef)(null),
                                E = (0, r.useRef)(null),
                                d = (0, r.useRef)(!1),
                                _ = (() => {
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
                                                                    if ('string' == typeof e) return he(e, t);
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
                                                                              ? he(e, t)
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
                                                function l(...l) {
                                                    const o = this,
                                                        c = Date.now() - s;
                                                    function m() {
                                                        ((s = Date.now()), u.apply(o, l));
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
                                                    (l.cancel = function () {
                                                        (i(), (r = !0));
                                                    }),
                                                    l
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
                                F = (0, Ce.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (u(t, e), _.trigger('change', e), s && d.current && A());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
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
                                            u = E.current;
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
                                            m.current && _.trigger('mouseWheel', e, g.scrollPosition, t(m.current)));
                                    },
                                    [g.scrollPosition, B, _],
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
                                        J(() => {
                                            const e = m.current;
                                            e &&
                                                (D(i(e, g.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [D, g.scrollPosition.goal],
                                ),
                                v = De(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = i(e, g.scrollPosition.goal);
                                    (t !== g.scrollPosition.goal && D(t, { immediate: !0 }),
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
                                        getWrapperSize: () => (E.current ? n(E.current) : void 0),
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
                                        wrapperRef: E,
                                        scrollPosition: p,
                                        animationScroll: g,
                                        recalculateContent: v,
                                        events: { on: _.on, off: _.off },
                                    }),
                                    [g.scrollPosition, D, B, _.off, _.on, v, h, p, c.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    ye = we({
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
                            var u;
                            e.style.transform = `translateX(-${0 | (null != (u = t.value.scrollPosition) ? u : 0)}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? ve.Next : ve.Prev),
                        forceTriggerMouseMove: l.O.view.forceTriggerMouseMove,
                    }),
                    Se = 'HorizontalBar_base__active_5e',
                    Pe = 'disable',
                    Le = { pending: !1, offset: 0 },
                    Te = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Re = () => {},
                    xe = (e, t) => Math.max(20, e.offsetWidth * t),
                    Ne = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Te, onDrag: a = Re }) => {
                        const n = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            m = (0, r.useRef)(null),
                            E = e.stepTimeout || 100,
                            d = (0, r.useState)(Le),
                            _ = d[0],
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
                                    l = pe(0, 1, r / (n - a)),
                                    E = (t.offsetWidth - xe(t, s)) * l;
                                ((u.style.transform = `translateX(${0 | E}px)`),
                                    ((e) => {
                                        if (i.current && o.current && c.current && m.current) {
                                            if (0 === e)
                                                return (
                                                    i.current.classList.add(Pe),
                                                    void o.current.classList.remove(Pe)
                                                );
                                            if (
                                                ((t = c.current),
                                                (u = m.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(Pe),
                                                    void o.current.classList.add(Pe)
                                                );
                                            var t, u;
                                            (i.current.classList.remove(Pe), o.current.classList.remove(Pe));
                                        }
                                    })(E));
                            },
                            b = De(() => {
                                ((() => {
                                    const t = m.current,
                                        u = c.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && a && u)) return;
                                    const s = Math.min(1, a / r);
                                    ((t.style.width = `${xe(u, s)}px`),
                                        (t.style.display = 'flex'),
                                        n.current &&
                                            (1 !== s ? n.current.classList.add(Se) : n.current.classList.remove(Se)));
                                })(),
                                    p());
                            });
                        ((0, r.useEffect)(() => J(b)),
                            (0, r.useEffect)(
                                () =>
                                    J(() => {
                                        const t = () => {
                                            p();
                                        };
                                        let u = Re;
                                        const a = () => {
                                            (u(), (u = J(b)));
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
                                if (!_.pending) return;
                                const t = l.O.client.events.mouse.move(([t, u]) => {
                                        var n;
                                        const r = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!r || !s) return;
                                        const i = c.current,
                                            l = m.current;
                                        if (!i || !l) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const o = t.clientX - _.offset - i.getBoundingClientRect().x,
                                            E = (o / i.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, E),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: l, thumbOffset: o, contentOffset: E }));
                                    }),
                                    u = l.O.client.events.mouse.up(() => {
                                        (t(), F(Le));
                                    });
                                return () => {
                                    (t(), u());
                                };
                            }, [e, _.offset, _.pending, a, F]));
                        const D = Be((t) => e.applyStepTo(t), E, [e]),
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
                            e.target.classList.contains(Pe) || k('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: g()('HorizontalBar_base_49', t.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: g()('HorizontalBar_leftButton_5f', t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Pe) || 0 !== e.button || (k('play'), B(ve.Next));
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
                                                  })(t.screenX > a.getBoundingClientRect().x ? ve.Prev : ve.Next));
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
                                    e.target.classList.contains(Pe) || 0 !== e.button || (k('play'), B(ve.Prev));
                                },
                                onMouseUp: h,
                                ref: o,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    ke = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Me = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: a,
                        areaClassName: n,
                        classNames: i,
                        scrollClassName: l,
                        getStepByRailClick: o,
                        onDrag: c,
                    }) => {
                        const m = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: g()(ke.base, e.base) });
                            }, [a]),
                            E = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: g()(ke.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: g()(ke.defaultScrollArea, n) },
                                s().createElement(Ie, { className: l, api: E, classNames: i }, e),
                            ),
                            s().createElement(Ne, { getStepByRailClick: o, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    Ie = ({ api: e, className: t, classNames: u, children: a }) => (
                        (0, r.useEffect)(() => J(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: g()(ke.base, t) },
                            s().createElement(
                                'div',
                                {
                                    className: g()(ke.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: g()(ke.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                ((Ie.Bar = Ne), (Ie.Default = Me));
                const Oe = we({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? ve.Next : ve.Prev),
                    }),
                    We = 'VerticalBar_base__active_72',
                    He = 'disable',
                    $e = () => {},
                    ze = { pending: !1, offset: 0 },
                    Ge = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ue = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    je = (e, t) => Math.max(20, e.offsetHeight * t),
                    Ve = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Ge, onDrag: a = $e }) => {
                        const n = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            m = (0, r.useRef)(null),
                            E = e.stepTimeout || 100,
                            d = (0, r.useState)(ze),
                            _ = d[0],
                            A = d[1],
                            F = (0, r.useCallback)(
                                (e) => {
                                    (A(e),
                                        m.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current }));
                                },
                                [a],
                            ),
                            p = De(() => {
                                const t = m.current,
                                    u = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && r && t && u)) return;
                                const s = Math.min(1, a / r);
                                return (
                                    (t.style.height = `${je(u, s)}px`),
                                    (t.style.display = 'flex'),
                                    n.current &&
                                        (1 !== s ? n.current.classList.add(We) : n.current.classList.remove(We)),
                                    s
                                );
                            }),
                            b = De(() => {
                                const t = c.current,
                                    u = m.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && t && u && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / n),
                                    l = pe(0, 1, r / (n - a)),
                                    E = (t.offsetHeight - je(t, s)) * l;
                                ((u.style.transform = `translateY(${0 | E}px)`),
                                    ((e) => {
                                        if (i.current && o.current && c.current && m.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    i.current.classList.add(He),
                                                    void o.current.classList.remove(He)
                                                );
                                            if (
                                                ((t = c.current),
                                                (u = m.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(He),
                                                    void o.current.classList.add(He)
                                                );
                                            var t, u;
                                            (i.current.classList.remove(He), o.current.classList.remove(He));
                                        }
                                    })(E));
                            }),
                            D = De(() => {
                                Ue(e, () => {
                                    (p(), b());
                                });
                            });
                        ((0, r.useEffect)(() => J(D)),
                            (0, r.useEffect)(() => {
                                const t = () => {
                                    Ue(e, () => {
                                        b();
                                    });
                                };
                                let u = $e;
                                const a = () => {
                                    (u(), (u = J(D)));
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
                                if (!_.pending) return;
                                const t = l.O.client.events.mouse.up(() => {
                                        F(ze);
                                    }),
                                    u = l.O.client.events.mouse.move(([t]) => {
                                        Ue(e, (u) => {
                                            const n = c.current,
                                                r = m.current,
                                                s = e.getContainerSize();
                                            if (!n || !r || !s) return;
                                            const i = t.screenY - _.offset - n.getBoundingClientRect().y,
                                                l = (i / n.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: l }));
                                        });
                                    });
                                return () => {
                                    (t(), u());
                                };
                            }, [e, _.offset, _.pending, a, F]));
                        const B = Be((t) => e.applyStepTo(t), E, [e]),
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
                            e.target.classList.contains(He) || k('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: g()('VerticalBar_base_f3', t.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: g()('VerticalBar_topButton_d7', t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(He) || 0 !== e.button || (k('play'), h(ve.Next));
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
                                                : ((n = t.screenY > a.getBoundingClientRect().y ? ve.Prev : ve.Next),
                                                  m.current &&
                                                      Ue(e, (t) => {
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
                                    e.target.classList.contains(He) || 0 !== e.button || (k('play'), h(ve.Prev));
                                },
                                onMouseUp: C,
                                ref: o,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    qe = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Ke = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: a,
                        areaClassName: n,
                        scrollClassName: i,
                        scrollClassNames: l,
                        getStepByRailClick: o,
                        onDrag: c,
                    }) => {
                        const m = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: g()(qe.base, e.base) });
                            }, [a]),
                            E = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: g()(qe.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: g()(qe.area, n) },
                                s().createElement(Xe, { className: i, classNames: l, api: E }, e),
                            ),
                            s().createElement(Ve, { getStepByRailClick: o, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    Xe = ({ className: e, classNames: t, children: u, api: a }) => (
                        (0, r.useEffect)(() => J(a.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: g()(qe.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: g()(qe.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                u,
                            ),
                        )
                    );
                Xe.Default = Ke;
                const Ye = { Vertical: n, Horizontal: a };
                let Ze;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(Ze || (Ze = {}));
                const Qe = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: a = 0,
                        args: n,
                        isEnabled: s = !0,
                        onMouseDown: i,
                    }) => {
                        const l = (0, r.useCallback)(() => {
                                ((0, te.c9)(te.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: n,
                                }),
                                    M.playYes());
                            }, [n, t, u, a]),
                            o = (0, r.useCallback)(() => {
                                (0, te.c9)(te.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, u, a]),
                            c = (0, r.useCallback)(
                                (e) => {
                                    (i && i(e), ((e) => e.button === Ze.RIGHT)(e) && l());
                                },
                                [i, l],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                !1 === s && o();
                            }, [s, o]),
                            s ? (0, r.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Je = ['children'];
                function et() {
                    return (
                        (et =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        et.apply(this, arguments)
                    );
                }
                const tt = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, Je);
                        return s().createElement(
                            Qe,
                            et({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    ut = ({ value: e, format: t = 'integral' }) => {
                        const u = (function (e) {
                                return 'gold' === e ? te.B3.GOLD : te.B3.INTEGRAL;
                            })(t),
                            a = te.Z5.getNumberFormat(e, u);
                        return void 0 !== e && void 0 !== a ? a : null;
                    },
                    at = [
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
                function nt(e) {
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
                const rt = (e, t, u = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: te.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                u,
                            ),
                        );
                    },
                    st = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            l = e.onClick,
                            o = e.ignoreShowDelay,
                            c = void 0 !== o && o,
                            m = e.ignoreMouseClick,
                            E = void 0 !== m && m,
                            d = e.decoratorId,
                            _ = void 0 === d ? 0 : d,
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
                            })(e, at);
                        const h = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, r.useMemo)(() => p || ne().resId, [p]),
                            v = (0, r.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (rt(u, _, { isMouseEvent: !0, on: !0, arguments: nt(a) }, C),
                                    b && b(),
                                    (h.current.isVisible = !0));
                            }, [u, _, a, C, b]),
                            f = (0, r.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        rt(u, _, { on: !1 }, C),
                                        h.current.isVisible && D && D(),
                                        (h.current.isVisible = !1));
                                }
                            }, [u, _, C, D]),
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
                                                  (!1 === E && f(), null == l || l(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === E && f(), null == i || i(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          B,
                                      ),
                                  )
                                : t
                        );
                        var y;
                    },
                    it = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function lt() {
                    return (
                        (lt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        lt.apply(this, arguments)
                    );
                }
                const ot = R.views.common.tooltip_window.simple_tooltip_content,
                    ct = (e) => {
                        let t = e.children,
                            u = e.body,
                            a = e.header,
                            n = e.note,
                            i = e.alert,
                            l = e.args,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, it);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, l, { body: u, header: a, note: n, alert: i });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [i, u, a, n, l]);
                        return s().createElement(
                            st,
                            lt(
                                {
                                    contentId:
                                        ((m = null == l ? void 0 : l.hasHtmlContent),
                                        m ? ot.SimpleTooltipHtmlContent('resId') : ot.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                o,
                            ),
                            t,
                        );
                        var m;
                    },
                    mt = ['content', 'classMix', 'className'];
                function Et() {
                    return (
                        (Et =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Et.apply(this, arguments)
                    );
                }
                const dt = (e) => {
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
                        })(e, mt);
                    const i = (0, r.useRef)(null),
                        l = (0, r.useState)(!0),
                        o = l[0],
                        c = l[1];
                    return (
                        (0, r.useEffect)(() =>
                            J(() => {
                                const e = i.current;
                                e && e.offsetWidth >= e.scrollWidth && c(!1);
                            }),
                        ),
                        s().createElement(
                            ct,
                            { isEnabled: o, body: t },
                            s().createElement(
                                'div',
                                Et({}, n, { ref: i, className: g()('TextOverflow_base_3b', a, u) }),
                                t,
                            ),
                        )
                    );
                };
                var _t = u(690),
                    At = u(281);
                let Ft;
                function gt(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(Ft || (Ft = {}));
                const pt = (e) => e.replace(/&nbsp;/g, ' '),
                    bt = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    Dt = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    Bt = (e, t, u = Ft.left) => e.split(t).reduce(u === Ft.left ? bt : Dt, []),
                    ht = (() => {
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
                    Ct = ['zh_cn', 'zh_sg', 'zh_tw'],
                    vt = {
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
                    ft = s().memo(({ isPlatoon: e, type: t, anonymizerNick: u, user: a, isRowHovered: n }) => {
                        const i = a.userName,
                            l = a.clanAbbrev,
                            o = a.vehicleName,
                            c = a.vehicleType,
                            m = a.vehicleLevel,
                            E = a.damage,
                            d = a.kills,
                            _ = a.databaseID,
                            A = a.hiddenUserName,
                            F = 'rowBrPlayer' === t || 'rowBrPlatoon' === t,
                            p = (0, r.useState)(!1),
                            b = p[0],
                            D = p[1],
                            B = g()(vt.base, vt[`base__${t}`], e && vt.base__platoon, (F || n || b) && vt.base__hover),
                            h = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.vehicleTypes.$dyn(c)})`,
                                }),
                                [c],
                            ),
                            C = l ? `[${l}]` : null,
                            v = (0, r.useCallback)(() => {
                                e && D(!0);
                            }, [e]),
                            f = (0, r.useCallback)(() => {
                                e && D(!1);
                            }, [e]),
                            w = (0, r.useMemo)(() => ({ userName: i, databaseID: _, hiddenUserName: A }), [i, _, A]),
                            y =
                                'rowBrEnemy' === t
                                    ? R.strings.battle_royale.battleResult.stats.anonymizer.enemy.header()
                                    : R.strings.battle_royale.battleResult.stats.anonymizer.header();
                        return s().createElement(
                            'div',
                            { className: B, onMouseEnter: v, onMouseLeave: f },
                            s().createElement(
                                'div',
                                { className: vt.name },
                                i &&
                                    s().createElement(
                                        tt,
                                        { args: w },
                                        s().createElement(
                                            'div',
                                            { className: vt.userName },
                                            s().createElement(dt, { content: i }),
                                        ),
                                    ),
                                C && s().createElement('span', { className: vt.clanTag }, C),
                                u &&
                                    s().createElement(
                                        ct,
                                        {
                                            isEnabled: !0,
                                            header: gt(y, { name: u }),
                                            body: R.strings.battle_royale.battleResult.stats.anonymizer.body(),
                                        },
                                        s().createElement('div', { className: vt.anonymizer }),
                                    ),
                            ),
                            s().createElement(
                                'div',
                                { className: vt.vehicle },
                                s().createElement('div', { className: vt.vehicleTypeIcon, style: h }),
                                s().createElement('span', { className: vt.vehicleName }, o),
                            ),
                            s().createElement('span', { className: vt.level }, (0, _t.cg)(m)),
                            s().createElement(
                                'span',
                                { className: vt.damage },
                                s().createElement(ut, { value: E, format: 'integral' }),
                            ),
                            s().createElement('span', { className: vt.kills }, d),
                        );
                    });
                function wt() {
                    return (
                        (wt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        wt.apply(this, arguments)
                    );
                }
                const yt = s().memo(({ place: e, isSquadMode: t, playersList: u, index: a }) => {
                    const n = (0, r.useState)(!1),
                        i = n[0],
                        l = n[1],
                        o = g()(
                            'LeaderboardRow_base_8c',
                            0 === a && 'LeaderboardRow_base__leader_44',
                            t && 'LeaderboardRow_base__platoon_ce',
                        ),
                        c = (0, r.useCallback)(() => {
                            t || l(!0);
                        }, [t]),
                        m = (0, r.useCallback)(() => {
                            t || l(!1);
                        }, [t]);
                    return s().createElement(
                        'div',
                        { className: o, onMouseEnter: c, onMouseLeave: m },
                        s().createElement('div', { className: 'LeaderboardRow_place_db' }, e),
                        s().createElement(
                            'div',
                            { className: 'LeaderboardRow_players_be' },
                            u.map(({ value: e }, u) =>
                                s().createElement(
                                    ft,
                                    wt({ key: `${u}_${e.user.userName}` }, e, { isPlatoon: t, isRowHovered: i }),
                                ),
                            ),
                        ),
                    );
                });
                function St() {
                    return (
                        (St =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        St.apply(this, arguments)
                    );
                }
                const Pt = s().memo(() => {
                        const e = ce('model.leaderboardLobbyModel').placesList,
                            t = Oe(),
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
                                            Ye.Vertical.Area.Default,
                                            { api: t },
                                            s().createElement(
                                                'div',
                                                { className: 'Leaderboard_scrollContent_9d' },
                                                e.map(({ value: e }, t) =>
                                                    s().createElement(yt, St({ key: e.place, index: t }, e)),
                                                ),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Lt = 'progressionCompleted';
                let Tt;
                var Rt;
                (((Rt = Tt || (Tt = {})).Active = 'active'), (Rt.Paused = 'paused'), (Rt.Completed = 'completed'));
                const xt = {
                        base: 'StatItem_base_09',
                        wreathImage: 'StatItem_wreathImage_4e',
                        statImage: 'StatItem_statImage_af',
                        statText: 'StatItem_statText_10',
                        divider: 'StatItem_divider_bf',
                        maxValue: 'StatItem_maxValue_d6',
                        titleText: 'StatItem_titleText_c6',
                    },
                    Nt = s().memo(({ currentValue: e, maxValue: t, type: u }) => {
                        const a = te.Z5.getNumberFormat(e, te.B3.INTEGRAL),
                            n = R.strings.battle_royale.battleResult.stats.$dyn(u),
                            i = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.battleResult.stat_list.$dyn(u)})`,
                                }),
                                [u],
                            );
                        return s().createElement(
                            ct,
                            { header: n.header(), body: n.body(), isEnabled: u.length > 0 },
                            s().createElement(
                                'div',
                                { className: xt.base },
                                s().createElement('div', { className: xt.wreathImage }),
                                s().createElement('div', { className: xt.statImage, style: i }),
                                s().createElement(
                                    'div',
                                    { className: xt.statText },
                                    s().createElement('span', { className: xt.currentValue }, a),
                                    t >= 0 &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement('span', { className: xt.divider }, '/'),
                                            s().createElement('span', { className: xt.maxValue }, t),
                                        ),
                                ),
                                s().createElement('div', { className: xt.titleText }, n.title()),
                            ),
                        );
                    }),
                    kt = s().memo(
                        ({
                            statsList: e,
                            animationTrigger: t,
                            isAnimationSkipped: u,
                            onAnimationComplete: a,
                            transitionTimeout: n,
                            itemStartState: i,
                            itemFinishState: l,
                            isWinner: o,
                        }) => {
                            const c = (0, r.useState)(-1),
                                m = c[0],
                                E = c[1],
                                d = e.length,
                                _ = (0, r.useCallback)(() => {
                                    if (u) return;
                                    const e = m + 1;
                                    e < d ? (k(R.sounds.BR_result_effectiveness()), E(e)) : a && a();
                                }, [d, m, a, u]);
                            return (
                                (0, r.useEffect)(() => {
                                    t && !u && (k(R.sounds.BR_result_effectiveness()), E(0));
                                }, [t, u]),
                                (0, r.useEffect)(() => {
                                    u && E(e.length);
                                }, [u, e.length]),
                                s().createElement(
                                    'div',
                                    { className: 'StatsList_base_0a' },
                                    e.map(({ value: e }, t) =>
                                        s().createElement(
                                            me.Z,
                                            {
                                                key: `${e.type}_${e.currentValue}`,
                                                timeout: n || 300,
                                                in: m >= t,
                                                enter: !u,
                                                onEntered: _,
                                                classNames: l,
                                            },
                                            s().createElement(
                                                'div',
                                                { className: i },
                                                !(o && 'place' === e.type) && s().createElement(Nt, e),
                                            ),
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Mt = (e, t) => {
                        let u;
                        const a = setTimeout(() => {
                            u = e();
                        }, t);
                        return () => {
                            ('function' == typeof u && u(), clearTimeout(a));
                        };
                    },
                    It = 'TitleAnimations_baseEnterDone_b1',
                    Ot = {
                        enterActive: 'TitleAnimations_wreathIcon_98',
                        enterDone: 'TitleAnimations_wreathIcon__enterDone_b7',
                    },
                    Wt = {
                        enterActive: 'TitleAnimations_titleBg_ab',
                        enterDone: 'TitleAnimations_titleBg__enterDone_69',
                    },
                    Ht = { enterActive: 'TitleAnimations_title_ed', enterDone: It },
                    $t = { enterActive: 'TitleAnimations_place_31', enterDone: 'TitleAnimations_place__enterDone_a5' },
                    zt = { enterActive: 'TitleAnimations_vehicle_a1', enterDone: It };
                var Gt;
                !(function (e) {
                    ((e[(e.WREATH_ENTER = 0)] = 'WREATH_ENTER'),
                        (e[(e.BG_ENTER = 1)] = 'BG_ENTER'),
                        (e[(e.TITLE_ENTER = 2)] = 'TITLE_ENTER'),
                        (e[(e.VEHICLE_ENTER = 3)] = 'VEHICLE_ENTER'));
                })(Gt || (Gt = {}));
                const Ut = [200, 200, 500],
                    jt = [600, 400, 500, 300],
                    Vt = s().memo(
                        ({
                            isFirstPlace: e,
                            isWinner: t,
                            place: u,
                            finishResultLabel: a,
                            vehicleType: n,
                            vehicleName: i,
                            onAnimationComplete: l,
                            animationTrigger: o,
                            isAnimationSkipped: c,
                        }) => {
                            const m = (0, r.useState)(-1),
                                E = m[0],
                                d = m[1],
                                _ = (0, r.useMemo)(
                                    () => ({
                                        backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.vehicleTypes.$dyn(n)})`,
                                    }),
                                    [n],
                                );
                            ((0, r.useEffect)(() => {
                                o && !c && d(0);
                            }, [o, c]),
                                (0, r.useEffect)(() => {
                                    c && d(Gt.VEHICLE_ENTER);
                                }, [c]),
                                (0, r.useEffect)(() => {
                                    if (!(E < Gt.WREATH_ENTER || E >= Gt.VEHICLE_ENTER || c))
                                        return Mt(() => d(E + 1), Ut[E]);
                                }, [E, c]));
                            const A = (0, r.useCallback)(() => {
                                    c || (l && l());
                                }, [l, c]),
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
                                        me.Z,
                                        {
                                            timeout: jt[Gt.WREATH_ENTER],
                                            in: E >= Gt.WREATH_ENTER,
                                            enter: !c,
                                            classNames: Ot,
                                        },
                                        s().createElement('div', { className: 'Title_wreathIcon_96' }),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: 'Title_titleWrapper_be' },
                                    t &&
                                        s().createElement(
                                            me.Z,
                                            {
                                                timeout: jt[Gt.TITLE_ENTER],
                                                in: E >= Gt.TITLE_ENTER,
                                                enter: !c,
                                                classNames: $t,
                                            },
                                            s().createElement('div', { className: 'Title_place_31' }, u),
                                        ),
                                    e &&
                                        s().createElement(
                                            me.Z,
                                            {
                                                timeout: jt[Gt.BG_ENTER],
                                                in: E >= Gt.BG_ENTER,
                                                enter: !c,
                                                classNames: Wt,
                                            },
                                            s().createElement('div', { className: 'Title_titleBg_52' }),
                                        ),
                                    s().createElement(
                                        me.Z,
                                        {
                                            timeout: jt[Gt.TITLE_ENTER],
                                            in: E >= Gt.TITLE_ENTER,
                                            enter: !c,
                                            classNames: Ht,
                                        },
                                        s().createElement('div', { className: 'Title_titleText_8c' }, a),
                                    ),
                                    s().createElement(
                                        me.Z,
                                        {
                                            timeout: jt[Gt.VEHICLE_ENTER],
                                            in: E >= Gt.VEHICLE_ENTER,
                                            enter: !c,
                                            onEntered: A,
                                            classNames: zt,
                                        },
                                        s().createElement(
                                            'div',
                                            { className: 'Title_vehicle_71' },
                                            s().createElement('div', {
                                                className: 'Title_vehicleTypeIcon_12',
                                                style: _,
                                            }),
                                            s().createElement('div', { className: 'Title_vehicleName_88' }, i),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    qt = {
                        base: 'PremiumRewardItem_base_07',
                        image: 'PremiumRewardItem_image_71',
                        base__crystal: 'PremiumRewardItem_base__crystal_06',
                        base__xp: 'PremiumRewardItem_base__xp_a4',
                        base__credits: 'PremiumRewardItem_base__credits_3d',
                        base__brcoin: 'PremiumRewardItem_base__brcoin_f1',
                        base__brProgressionToken: 'PremiumRewardItem_base__brProgressionToken_3a',
                        base__battlePassPoints: 'PremiumRewardItem_base__battlePassPoints_0c',
                    },
                    Kt = s().memo(({ value: e, type: t }) => {
                        const u = te.Z5.getNumberFormat(e, te.B3.INTEGRAL),
                            a = g()(qt.base, qt[`base__${t}`]),
                            n = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.battleResult.battle_reward.rewards.$dyn(`${t}_small`)})`,
                                }),
                                [t],
                            );
                        return s().createElement(
                            T,
                            null,
                            s().createElement(
                                ct,
                                { body: R.strings.battle_royale.battleResult.premiumRewards.tooltip() },
                                s().createElement(
                                    'div',
                                    { className: a },
                                    s().createElement('div', { className: qt.image, style: n }),
                                    s().createElement('span', null, u),
                                ),
                            ),
                        );
                    }),
                    Xt = 'PremiumRewards_ribbonLine_e4',
                    Yt = 'PremiumRewards_ribbonDot_cd',
                    Zt = 'PremiumRewards_premiumLine_7b',
                    Qt = s().memo(({ battleRewardsList: e }) =>
                        s().createElement(
                            'div',
                            { className: 'PremiumRewards_base_a9' },
                            s().createElement(
                                'div',
                                { className: 'PremiumRewards_premium_26' },
                                s().createElement(
                                    'div',
                                    { className: Zt },
                                    s().createElement('div', {
                                        className: g()(Xt, 'PremiumRewards_ribbonLine__left_1d'),
                                    }),
                                    s().createElement('div', {
                                        className: g()(Yt, 'PremiumRewards_ribbonDot__left_55'),
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
                                                s().createElement(Kt, e),
                                            ),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Zt },
                                    s().createElement('div', {
                                        className: g()(Xt, 'PremiumRewards_ribbonLine__right_3e'),
                                    }),
                                    s().createElement('div', {
                                        className: g()(Yt, 'PremiumRewards_ribbonDot__right_8e'),
                                    }),
                                ),
                            ),
                        ),
                    ),
                    Jt = 'Ribbon_shadow_8d',
                    eu = 'Ribbon_ribbonLine_e2',
                    tu = s().memo(({ battleRewardsListWithPremium: e, isWinner: t, hasPremium: u }) =>
                        s().createElement(
                            'div',
                            {
                                className: g()(
                                    'Ribbon_base_21',
                                    t && (u ? 'Ribbon_base__prem_70' : 'Ribbon_base__win_57'),
                                    !t && (u ? 'Ribbon_base__lose_prem_cc' : 'Ribbon_base__lose_94'),
                                ),
                            },
                            s().createElement('div', { className: g()(Jt, 'Ribbon_shadow__top_49') }),
                            s().createElement('div', { className: 'Ribbon_ribbonIcon_0f' }),
                            s().createElement(
                                'div',
                                { className: 'Ribbon_topLine_4f' },
                                s().createElement('div', { className: eu }),
                            ),
                            u &&
                                s().createElement(
                                    'div',
                                    { className: 'Ribbon_bottomLine_fc' },
                                    s().createElement('div', { className: eu }),
                                ),
                            !u && e.length > 0 && s().createElement(Qt, { battleRewardsList: e }),
                            s().createElement('div', { className: g()(Jt, 'Ribbon_shadow__bottom_90') }),
                        ),
                    ),
                    uu = {
                        base: 'Reward_base_a1',
                        image: 'Reward_image_0d',
                        base__crystal: 'Reward_base__crystal_3f',
                        base__xp: 'Reward_base__xp_74',
                        base__credits: 'Reward_base__credits_75',
                        base__brcoin: 'Reward_base__brcoin_6e',
                        base__brProgressionToken: 'Reward_base__brProgressionToken_61',
                        base__battlePassPoints: 'Reward_base__battlePassPoints_19',
                    },
                    au = s().memo(({ value: e, type: t }) => {
                        const u = te.Z5.getNumberFormat(e, te.B3.INTEGRAL),
                            a = g()(uu.base, uu[`base__${t}`]),
                            n = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.battleResult.battle_reward.rewards.$dyn(t)})`,
                                }),
                                [t],
                            );
                        return s().createElement(
                            'div',
                            { className: a },
                            s().createElement('div', { className: uu.image, style: n }),
                            s().createElement('span', null, u),
                        );
                    }),
                    nu = (0, r.memo)(({ value: e, type: t, classMix: u }) => {
                        const a = (0, r.useMemo)(() => ({ currencyType: t }), [t]);
                        return s().createElement(
                            st,
                            {
                                contentId: R.views.battle_royale.lobby.tooltips.RewardCurrencyTooltipView('resId'),
                                args: a,
                            },
                            s().createElement('div', null, s().createElement(au, { value: e, type: t, classMix: u })),
                        );
                    }),
                    ru = s().memo(
                        ({
                            battleRewardsList: e,
                            animationTrigger: t,
                            isAnimationSkipped: u,
                            onAnimationComplete: a,
                            transitionTimeout: n,
                            itemStartState: i,
                            itemFinishState: l,
                        }) => {
                            const o = (0, r.useState)(-1),
                                c = o[0],
                                m = o[1],
                                E = e.length,
                                d = (0, r.useCallback)(() => {
                                    if (u) return;
                                    const e = c + 1;
                                    e < E ? (k(R.sounds.BR_result_numbers()), m(e)) : a && a();
                                }, [E, c, a, u]);
                            return (
                                (0, r.useEffect)(() => {
                                    t && !u && (k(R.sounds.BR_result_numbers()), m(0));
                                }, [t, u]),
                                (0, r.useEffect)(() => {
                                    u && m(E);
                                }, [E, u]),
                                s().createElement(
                                    T,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: 'BattleRewardList_base_92' },
                                        e.map(({ value: e }, t) =>
                                            s().createElement(
                                                me.Z,
                                                {
                                                    key: `${e.type}_${e.value}`,
                                                    timeout: n || 300,
                                                    in: c >= t,
                                                    enter: !u,
                                                    onEntered: d,
                                                    classNames: l,
                                                },
                                                s().createElement('div', { className: i }, s().createElement(nu, e)),
                                            ),
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    su = ({ binding: e, text: t = '', classMix: u, alignment: a = Ft.left, formatWithBrackets: n }) => {
                        if (null === t) return (console.error("FormatText was supplied with 'null'"), null);
                        const i = n && e ? gt(t, e) : t;
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
                                                : ((e, t = Ft.left) => {
                                                      const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return Ct.includes(u)
                                                          ? ht(e)
                                                          : 'ja' === u
                                                            ? (0, At.D4)()
                                                                  .parse(e)
                                                                  .map((e) => pt(e))
                                                            : ((e, t = Ft.left) => {
                                                                  let u = [];
                                                                  const a =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      n = pt(e);
                                                                  return (
                                                                      Bt(n, /( )/, t).forEach(
                                                                          (e) => (u = u.concat(Bt(e, a, Ft.left))),
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
                    iu = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let lu, ou;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(lu || (lu = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(ou || (ou = {})));
                const cu = ({ size: e = lu.Default }) => {
                        const t = g()(iu.background, iu[`background__${e}`]);
                        return s().createElement('div', { className: t });
                    },
                    mu = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Eu = ({ size: e }) => {
                        const t = g()(mu.base, mu[`base__${e}`]);
                        return s().createElement('div', { className: t });
                    },
                    du = {
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
                    _u = (0, r.memo)(
                        ({ size: e, lineRef: t, disabled: u, baseStyles: a, isComplete: n, withoutBounce: r }) => {
                            const i = g()(
                                    du.base,
                                    du[`base__${e}`],
                                    u && du.base__disabled,
                                    n && du.base__finished,
                                    r && du.base__withoutBounce,
                                ),
                                l = !u && !n;
                            return s().createElement(
                                'div',
                                { className: i, style: a, ref: t },
                                s().createElement('div', { className: du.pattern }),
                                s().createElement('div', { className: du.gradient }),
                                l && s().createElement(Eu, { size: e }),
                            );
                        },
                    );
                let Au, Fu;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(Au || (Au = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(Fu || (Fu = {})));
                const gu = (e) => (e ? { left: 0 } : { right: 0 }),
                    pu = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    bu = (e) => ({ transitionDuration: `${e}ms` }),
                    Du = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: n,
                            to: i,
                            onEndAnimation: l,
                            onChangeAnimationState: o,
                            className: c,
                        }) => {
                            const m = i < a,
                                E = (0, r.useState)(Au.Idle),
                                d = E[0],
                                _ = E[1],
                                A = d === Au.End,
                                F = d === Au.Idle,
                                p = d === Au.Grow,
                                b = d === Au.Shrink,
                                D = (0, r.useCallback)(
                                    (e) => {
                                        (_(e), o && o(e));
                                    },
                                    [o],
                                ),
                                B = (0, r.useCallback)(
                                    (e, t) =>
                                        Mt(() => {
                                            D(e);
                                        }, t),
                                    [D],
                                );
                            (0, r.useEffect)(() => {
                                if (!u)
                                    return F
                                        ? B(Au.Grow, t)
                                        : p
                                          ? B(Au.Shrink, e)
                                          : b
                                            ? B(Au.End, e)
                                            : void (A && l && l());
                            }, [B, u, A, p, F, b, l, t, e]);
                            const h = (0, r.useMemo)(() => Object.assign({ width: '100%' }, bu(e), gu(m)), [m, e]),
                                C = (0, r.useMemo)(() => Object.assign({ width: '0%' }, bu(e), gu(m)), [m, e]),
                                v = (0, r.useMemo)(() => Object.assign({ width: '0%' }, pu(m, a), bu(e)), [a, m, e]),
                                f = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - a)}%` }, pu(m, a), bu(e)),
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
                                    s().createElement(Eu, { size: n }),
                                ),
                            );
                        },
                    ),
                    Bu = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: n,
                            isComplete: i,
                            animationSettings: l,
                            onEndAnimation: o,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < u,
                                E = (0, r.useState)(!1),
                                d = E[0],
                                _ = E[1],
                                A = (0, r.useCallback)(
                                    (e) => {
                                        (e === Au.Shrink && _(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                F = (0, r.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                g = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${l.line.duration}ms` }),
                                    [l.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(_u, {
                                    size: t,
                                    lineRef: a,
                                    disabled: n,
                                    isComplete: i,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: d ? g : F,
                                }),
                                u >= 0 &&
                                    s().createElement(Du, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: l.freezed,
                                        onEndAnimation: o,
                                        from: u,
                                        size: t,
                                        to: e,
                                        className: l.delta.className,
                                    }),
                            );
                        },
                    ),
                    hu = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: n,
                            to: i,
                            onEndAnimation: l,
                            onChangeAnimationState: o,
                        }) => {
                            const c = i < a,
                                m = (0, r.useState)(Fu.Idle),
                                E = m[0],
                                d = m[1],
                                _ = E === Fu.In,
                                A = E === Fu.End,
                                F = E === Fu.Idle,
                                g = (0, r.useCallback)(
                                    (e) => {
                                        (d(e), o && o(e));
                                    },
                                    [o],
                                );
                            ((0, r.useEffect)(() => {
                                if (F && !u)
                                    return Mt(() => {
                                        g(Fu.In);
                                    }, t);
                            }, [g, u, F, t]),
                                (0, r.useEffect)(() => {
                                    if (_)
                                        return Mt(() => {
                                            (l && l(), g(Fu.End));
                                        }, e + t);
                                }, [g, _, l, t, e]));
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
                                          s().createElement(Eu, { size: n }),
                                      ),
                                  );
                        },
                    ),
                    Cu = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: n,
                            isComplete: i,
                            animationSettings: l,
                            onChangeAnimationState: o,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${l.line.duration}ms`,
                                    transitionDelay: `${l.line.delay}ms`,
                                }),
                                [l.line.delay, l.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(_u, {
                                    size: t,
                                    lineRef: a,
                                    disabled: n,
                                    isComplete: i,
                                    baseStyles: m,
                                }),
                                u >= 0 &&
                                    s().createElement(hu, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        freezed: l.freezed,
                                        from: u,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: o,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    vu = ['onComplete', 'onEndAnimation'];
                function fu() {
                    return (
                        (fu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        fu.apply(this, arguments)
                    );
                }
                const wu = (0, r.memo)((e) => {
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
                            })(e, vu);
                        const n = (0, r.useState)(!1),
                            i = n[0],
                            l = n[1],
                            o = (0, r.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== i && l(e), e && t && t(), u && u());
                            }, [i, t, u, a.to]);
                        switch (a.animationSettings.type) {
                            case ou.Simple:
                                return s().createElement(Cu, fu({}, a, { onEndAnimation: o, isComplete: i }));
                            case ou.Growing:
                                return s().createElement(Bu, fu({}, a, { onEndAnimation: o, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    yu = ({ size: e, value: t, lineRef: u, disabled: a, onComplete: n }) => {
                        const i = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            l = 100 === t;
                        return (
                            (0, r.useEffect)(() => {
                                l && n && n();
                            }, [l, n]),
                            s().createElement(_u, { size: e, disabled: a, baseStyles: i, isComplete: l, lineRef: u })
                        );
                    },
                    Su = ['onEndAnimation'];
                function Pu() {
                    return (
                        (Pu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Pu.apply(this, arguments)
                    );
                }
                const Lu = (0, r.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                            return n;
                        })(e, Su);
                    const a = (0, r.useRef)({}),
                        n = (0, r.useCallback)(() => {
                            ((a.current.from = void 0), t && t());
                        }, [t]),
                        i = 'number' == typeof a.current.from ? a.current.from : u.from;
                    return (
                        (a.current.from = i),
                        s().createElement(
                            wu,
                            Pu({}, u, {
                                onEndAnimation: n,
                                key: `${i}-${u.to}-${null == u ? void 0 : u.additionalKey}`,
                                from: i,
                            }),
                        )
                    );
                });
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
                const Ru = (0, r.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: u,
                            disabled: a,
                            deltaFrom: n,
                            additionalKey: r,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: o,
                            onComplete: c,
                        }) => {
                            if (n === t)
                                return s().createElement(yu, {
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
                                onEndAnimation: l,
                                onChangeAnimationState: o,
                            };
                            return i.withStack
                                ? s().createElement(Lu, m)
                                : s().createElement(wu, Tu({ key: `${n}-${t}-${r}` }, m));
                        },
                    ),
                    xu = (e) => {
                        var t, u, a, n, r, s, i, l, o, c, m, E, d, _, A, F, g, p, b, D;
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
                                null != (l = e.pattern.gradient)
                                    ? l
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                            '--progress-pattern-gradient-finished':
                                null != (o = e.pattern.gradientFinished)
                                    ? o
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                            '--progress-pattern-gradient-mixBlendMode':
                                null != (c = e.pattern.mixBlendMode) ? c : 'overlay',
                            '--progress-glow': `url('${e.glow}')`,
                            '--progress-glow-width':
                                null != (m = null == (E = e.glowSettings) ? void 0 : E.width) ? m : '60rem',
                            '--progress-glow-height':
                                null != (d = null == (_ = e.glowSettings) ? void 0 : _.height) ? d : '100rem',
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
                    Nu = (e, t, u) => ('number' == typeof u ? (pe(0, t, u) / t) * 100 : e),
                    ku = {
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
                    Mu = {
                        freezed: !1,
                        withStack: !1,
                        type: ou.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Iu = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = ku,
                            size: u = lu.Default,
                            animationSettings: a = Mu,
                            disabled: n = !1,
                            withoutBackground: i = !1,
                            value: l,
                            deltaFrom: o,
                            additionalKey: c,
                            lineRef: m,
                            onChangeAnimationState: E,
                            onEndAnimation: d,
                            onComplete: _,
                            className: A,
                        }) => {
                            const F = (function (e, t, u) {
                                return (0, r.useMemo)(() => {
                                    const a = (pe(0, t, e) / t) * 100;
                                    return { value: a, deltaFrom: Nu(a, t, u) };
                                }, [u, t, e]);
                            })(l, e, o);
                            return s().createElement(
                                'div',
                                { className: g()(iu.base, A, iu[`base__${u}`]), style: xu(t) },
                                !i && s().createElement(cu, { size: u }),
                                s().createElement(Ru, {
                                    size: u,
                                    lineRef: m,
                                    disabled: n,
                                    value: F.value,
                                    deltaFrom: F.deltaFrom,
                                    additionalKey: c,
                                    animationSettings: a,
                                    onEndAnimation: d,
                                    onChangeAnimationState: E,
                                    onComplete: _,
                                }),
                            );
                        },
                    );
                var Ou = u(403);
                function Wu() {
                    return !1;
                }
                console.log;
                var Hu = u(174);
                function $u(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                const zu = (e) => (0 === e ? window : window.subViews.get(e)),
                    Gu = ((e, t) => {
                        const u = (0, r.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: n, mocks: i }) {
                                const o = (0, r.useRef)([]),
                                    c = (e, u, a) => {
                                        var n;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = zu,
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
                                                            o = l.O.view.addModelObserver(i, t, !0);
                                                        return (n.set(o, u), e && u(s(r)), o);
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
                                                                                    return $u(e, t);
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
                                                                                          ? $u(e, t)
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
                                            c = (e) => o.current.push(e),
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
                                                            a = Hu.LO.box(u, { equals: Wu });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, Hu.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    array: (t, u) => {
                                                        const a = null != u ? u : i(t),
                                                            n = Hu.LO.box(a, { equals: Wu });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, Hu.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (t, u) => {
                                                        const a = null != u ? u : i(t),
                                                            n = Hu.LO.box(a, { equals: Wu });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, Hu.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (t, u) => {
                                                        const a = i(u);
                                                        if (Array.isArray(t)) {
                                                            const n = t.reduce(
                                                                (e, t) => ((e[t] = Hu.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, Hu.aD)((e) => {
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
                                                                    (e, [t, u]) => ((e[u] = Hu.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, Hu.aD)((e) => {
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
                                            E = { mode: e, model: m, externalModel: s, cleanup: c };
                                        return {
                                            model: m,
                                            controls: 'mocks' === e && a ? a.controls(E) : t(E),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    m = (0, r.useRef)(!1),
                                    E = (0, r.useState)(e),
                                    d = E[0],
                                    _ = E[1],
                                    A = (0, r.useState)(() => c(e, a, i)),
                                    F = A[0],
                                    g = A[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        m.current ? g(c(d, a, i)) : (m.current = !0);
                                    }, [i, d, a]),
                                    (0, r.useEffect)(() => {
                                        _(e);
                                    }, [e]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), o.current.forEach((e) => e()));
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
                    Uu = Gu[0],
                    ju = Gu[1];
                let Vu, qu, Ku, Xu;
                var Yu;
                (!(function (e) {
                    ((e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium'));
                })(Vu || (Vu = {})),
                    (function (e) {
                        ((e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen'));
                    })(qu || (qu = {})),
                    ((Yu = Ku || (Ku = {})).AwaitSeason = 'awaitSeason'),
                    (Yu.Bought = 'bought'),
                    (Yu.Free = 'free'),
                    (Yu.Completed = 'completed'),
                    (Yu.CompletedRightNow = 'completedRightNow'),
                    (Yu.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                    (Yu.NoVehiclesBase = 'noVehiclesBase'),
                    (Yu.ChapterNotChosen = 'chapterNotChosen'),
                    (function (e) {
                        ((e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay'));
                    })(Xu || (Xu = {})));
                const Zu = (e, t, u = '') => {
                        const a = u.length > 0 ? `_${u}` : u,
                            n = e.$dyn(`c_${t}${a}`),
                            r = String(t).slice(-1),
                            s = e.$dyn(`default_${r}${a}`);
                        return n || s;
                    },
                    Qu = (e, t, u) => {
                        const a = R.images.gui.maps.icons.battlePass.logo.chapterIcons,
                            n = t ? 'BP' : '',
                            r = `${((e) => {
                                switch (e) {
                                    case Vu.Micro:
                                        return 's';
                                    case Vu.Small:
                                        return 'm';
                                    default:
                                        return 'l';
                                }
                            })(u)}${n}`;
                        return { backgroundImage: `url(${Zu(a, e, r)})` };
                    };
                let Ju, ea, ta, ua, aa, na, ra, sa;
                var ia, la, oa, ca, ma;
                let Ea, da;
                (((ma = Ju || (Ju = {})).Items = 'items'),
                    (ma.Equipment = 'equipment'),
                    (ma.Xp = 'xp'),
                    (ma.XpFactor = 'xpFactor'),
                    (ma.Blueprints = 'blueprints'),
                    (ma.BlueprintsAny = 'blueprintsAny'),
                    (ma.Goodies = 'goodies'),
                    (ma.Berths = 'berths'),
                    (ma.Slots = 'slots'),
                    (ma.Tokens = 'tokens'),
                    (ma.CrewSkins = 'crewSkins'),
                    (ma.CrewBooks = 'crewBooks'),
                    (ma.Customizations = 'customizations'),
                    (ma.CreditsFactor = 'creditsFactor'),
                    (ma.Tankman = 'tankman'),
                    (ma.Tankwoman = 'tankwoman'),
                    (ma.TankmenXp = 'tankmenXP'),
                    (ma.TankmenXpFactor = 'tankmenXPFactor'),
                    (ma.FreeXpFactor = 'freeXPFactor'),
                    (ma.BattleToken = 'battleToken'),
                    (ma.PremiumUniversal = 'premium_universal'),
                    (ma.Gold = 'gold'),
                    (ma.Credits = 'credits'),
                    (ma.Crystal = 'crystal'),
                    (ma.FreeXp = 'freeXP'),
                    (ma.Premium = 'premium'),
                    (ma.PremiumPlus = 'premium_plus'),
                    (ma.BattlePassPoints = 'battlePassPoints'),
                    (ma.BattlePassSelectToken = 'battlePassSelectToken'),
                    (ma.BattlePassTicket = 'lootBox_commonTicket'),
                    (ma.BattlePassTaler = 'bptaler'),
                    (ma.StyleProgressToken = 'styleProgressToken'),
                    (ma.TmanToken = 'tmanToken'),
                    (ma.NaturalCover = 'naturalCover'),
                    (ma.BpCoin = 'bpcoin'),
                    (ma.BattlaPassFinalAchievement = 'dossier_achievement'),
                    (ma.BattleBadge = 'dossier_badge'),
                    (ma.BonusX5 = 'battle_bonus_x5'),
                    (ma.CrewBonusX3 = 'crew_bonus_x3'),
                    (ma.Vehicles = 'vehicles'),
                    (ma.EpicSelectToken = 'epicSelectToken'),
                    (ma.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                    (ma.DeluxeGift = 'deluxe_gift'),
                    (ma.BattleBoosterGift = 'battleBooster_gift'),
                    (ma.ModernizedDevicesT1Gift = 'modernized_devices_t1_gift'),
                    (ma.ModernizedDevicesT2Gift = 'modernized_devices_t2_gift'),
                    (ma.ModernizedDevicesT3Gift = 'modernized_devices_t3_gift'),
                    (ma.OptionalDevice = 'optionalDevice'),
                    (ma.EquipCoin = 'equipCoin'),
                    (ma.LootBox = 'lootBox'),
                    (ma.BrCoin = 'brcoin'),
                    (ma.Attachment = 'attachment'),
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
                    })(ea || (ea = {})),
                    ((ca = ta || (ta = {})).Big = 'big'),
                    (ca.Small = 'small'),
                    (ca.Mini = 'mini'),
                    (ca.S600x450 = 's600x450'),
                    (ca.S400x300 = 's400x300'),
                    (ca.S296x222 = 's296x222'),
                    (ca.S232x174 = 's232x174'),
                    (ca.S180x135 = 's180x135'),
                    (ca.S128x100 = 's128x100'),
                    (ca.S80x80 = 's80x80'),
                    (ca.S64x64 = 's64x64'),
                    (ca.S48x48 = 's48x48'),
                    ((oa = ua || (ua = {})).MULTI = 'multi'),
                    (oa.CURRENCY = 'currency'),
                    (oa.PREMIUM_PLUS = 'premium_plus'),
                    (oa.NUMBER = 'number'),
                    (oa.STRING = 'string'),
                    ((la = aa || (aa = {})).ATTACHMENT_RARE = 'rare'),
                    (la.ATTACHMENT_EPIC = 'epic'),
                    (la.ATTACHMENT_LEGENDARY = 'legendary'),
                    (la.BATTLE_BOOSTER = 'battleBooster'),
                    (la.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (la.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (la.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (la.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (la.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (la.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (la.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (la.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (la.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (la.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (la.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (la.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    (la.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                    (la.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
                    ((na || (na = {})).BATTLE_BOOSTER = 'battleBooster'),
                    ((ia = ra || (ra = {})).ATTACHMENT_RARE = 'rare'),
                    (ia.ATTACHMENT_EPIC = 'epic'),
                    (ia.ATTACHMENT_LEGENDARY = 'legendary'),
                    (ia.BATTLE_BOOSTER = 'battleBooster'),
                    (ia.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (ia.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (ia.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (ia.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (ia.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (ia.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (ia.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (ia.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (ia.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (ia.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (ia.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (ia.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    (ia.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                    (ia.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(sa || (sa = {})),
                    Ju.Attachment,
                    Ju.Items,
                    Ju.Equipment,
                    Ju.Xp,
                    Ju.XpFactor,
                    Ju.Blueprints,
                    Ju.BlueprintsAny,
                    Ju.Goodies,
                    Ju.Berths,
                    Ju.Slots,
                    Ju.Tokens,
                    Ju.CrewSkins,
                    Ju.CrewBooks,
                    Ju.Customizations,
                    Ju.CreditsFactor,
                    Ju.TankmenXp,
                    Ju.TankmenXpFactor,
                    Ju.FreeXpFactor,
                    Ju.BattleToken,
                    Ju.LootBox,
                    Ju.PremiumUniversal,
                    Ju.NaturalCover,
                    Ju.BpCoin,
                    Ju.BattlePassSelectToken,
                    Ju.BattlaPassFinalAchievement,
                    Ju.BattleBadge,
                    Ju.BattlePassTicket,
                    Ju.BonusX5,
                    Ju.CrewBonusX3,
                    Ju.EpicSelectToken,
                    Ju.Comp7TokenWeeklyReward,
                    Ju.DeluxeGift,
                    Ju.ModernizedDevicesT1Gift,
                    Ju.ModernizedDevicesT2Gift,
                    Ju.ModernizedDevicesT3Gift,
                    Ju.BattleBoosterGift,
                    Ju.OptionalDevice,
                    Ju.Attachment,
                    Ju.Gold,
                    Ju.Credits,
                    Ju.Crystal,
                    Ju.FreeXp,
                    Ju.BattlePassPoints,
                    Ju.EquipCoin,
                    Ju.PremiumPlus,
                    Ju.Premium,
                    ta.Small,
                    ta.Big,
                    (function (e) {
                        ((e.Active = 'active'),
                            (e.Paused = 'paused'),
                            (e.Completed = 'completed'),
                            (e.NotStarted = 'notStarted'));
                    })(Ea || (Ea = {})),
                    (function (e) {
                        ((e.Vehicle = 'vehicle'), (e.Style = 'style'), (e.Tankman = 'tankman'));
                    })(da || (da = {})));
                var _a = u(613);
                let Aa;
                var Fa;
                (Date.now(),
                    _a.Ew.getRegionalDateTime,
                    _a.Ew.getFormattedDateTime,
                    ((Fa = Aa || (Aa = {})).style = 'style'),
                    (Fa.tankman = 'tankman'),
                    Aa.style,
                    Aa.tankman);
                const ga = (e, t) => {
                    const u = t.postfix ? `_${t.postfix}` : '';
                    return ((e) => {
                        const t = e.path.$dyn(`${e.name}_${e.id}`),
                            u = e.path.$dyn('default');
                        return t || u;
                    })(e).$dyn(`${t.name}${u}`);
                };
                let pa;
                !(function (e) {
                    ((e.Season = 'season'), (e.Chapter = 'chapter'));
                })(pa || (pa = {}));
                const ba = {
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
                    Da = {
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
                    Ba = ({
                        level: e,
                        size: t,
                        isGold: u,
                        isForRewardScreen: a,
                        curState: n,
                        isFirstLevel: r,
                        showProgressionCompleted: i,
                    }) => {
                        const l = g()(Da.base, Da[`base__${t}`]),
                            o = g()(
                                Da.text,
                                Da.text__filtered,
                                Da[`text__${t}`],
                                Da[`text__${n}`],
                                i && Da.text__hideWithDelay,
                                r && Da.text__new,
                                a && Da.text__rewardScreen,
                            ),
                            c = g()(
                                Da.textWithBlend,
                                r && Da.text__new,
                                i && Da.text__hideWithDelay,
                                Da[`textWithBlend__${n}`],
                            ),
                            m = g()(Da.text, Da.text__blended, Da[`text__${t}`], a && Da.text__rewardScreen),
                            E = g()(
                                Da.textMask,
                                u && Da.textMask__gold,
                                a && Da.textMask__animated,
                                u && a && Da.textMask__goldContrast,
                                Da[`textMask__${t}`],
                            );
                        return s().createElement(
                            'div',
                            { className: l },
                            s().createElement('div', { className: o }, e),
                            s().createElement(
                                'div',
                                { className: c },
                                s().createElement('div', { className: m }, e),
                                s().createElement('div', { className: E }),
                            ),
                        );
                    },
                    ha = {
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
                    Ca = (0, r.memo)(
                        ({
                            newLevel: e,
                            level: t,
                            size: u,
                            battlePassState: a,
                            hasProgression: n,
                            isGolden: r,
                            labelAnimation: i,
                            newLabelAnimation: l,
                            isChapterChosen: o = !1,
                            chapterID: c = 0,
                            seasonNum: m = -1,
                            isProgressionCompleted: E = !1,
                            hasBeenActive: d = !1,
                            isChapterSelection: _ = !1,
                            isProgression: A = !1,
                        }) => {
                            let F = '',
                                p = '';
                            u === Vu.Small
                                ? ((F = 'Small'), (p = '__small'))
                                : u === Vu.Micro && ((F = 'Micro'), (p = '__micro'));
                            const b = a === Ku.SwitchedChapterRightNow,
                                D = a === Ku.CompletedRightNow,
                                B = ((e, t, u, a, n) => (e || n ? t || !u : t || !a))(_, E, d, o, A),
                                h = !A && !_;
                            return s().createElement(
                                s().Fragment,
                                null,
                                B
                                    ? s().createElement('div', {
                                          className: g()(ha.icon, p && ha[`icon${p}`], D && ha[`icon__animated${F}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      t = ((e, t) => {
                                                          const u = e ? 'BP' : '';
                                                          return `${((e) => {
                                                              switch (e) {
                                                                  case Vu.Small:
                                                                      return 'l';
                                                                  case Vu.Micro:
                                                                      return 's';
                                                                  default:
                                                                      return 'xl';
                                                              }
                                                          })(t)}${u}`;
                                                      })(r, u);
                                                  if (h) {
                                                      if (E) {
                                                          const u = { path: e.icon, name: pa.Season, id: m };
                                                          return ga(u, { name: 'icon', postfix: t });
                                                      }
                                                      if (!o) return e.$dyn('not_chosen');
                                                  }
                                                  return Zu(e.chapterIcons, c, t);
                                              })()})`,
                                          },
                                      })
                                    : s().createElement(
                                          'div',
                                          {
                                              className: g()(
                                                  ha.label,
                                                  ha[`label${p}`],
                                                  b && ha.label__new,
                                                  b && ha[`label__new${F}`],
                                                  !D && E && ha.label__disabled,
                                                  ha[`label__${i}${F}`],
                                                  n && ha[`label__hasProgress${F}`],
                                                  n && ha[`label__hasProgress${F}${A ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          s().createElement(Ba, {
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
                                                ha.label,
                                                ha[`label${p}`],
                                                b && ha.label__new,
                                                b && ha[`label__new${F}`],
                                                ha[`label__${l}${F}`],
                                                n && ha[`label__hasProgress${F}`],
                                            ),
                                        },
                                        s().createElement(Ba, {
                                            level: e,
                                            size: u,
                                            isGold: r,
                                            isFirstLevel: b,
                                            curState: l,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    ),
                    va = {
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
                    fa = (0, r.memo)(
                        ({
                            progression: e,
                            isNoVehicles: t = !1,
                            showProgressionCompleted: u,
                            isProgressionCompleted: a,
                            size: n,
                        }) => {
                            const r = g()(
                                va.base,
                                va[`base__${n}`],
                                u && va.base__completed,
                                !u && a && va.base__hidden,
                            );
                            return s().createElement(
                                'div',
                                { className: r },
                                s().createElement(Iu, {
                                    key: e.to,
                                    size: lu.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: t,
                                }),
                            );
                        },
                    );
                function wa() {
                    return (
                        (wa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        wa.apply(this, arguments)
                    );
                }
                let ya, Sa;
                (!(function (e) {
                    ((e.Closed = 'closed'), (e.Open = 'open'));
                })(ya || (ya = {})),
                    (function (e) {
                        ((e.Gold = 'gold'), (e.Completed = 'completed'), (e.Initial = 'initial'));
                    })(Sa || (Sa = {})));
                const Pa = (e, t, u, a, n) => {
                        const r = { path: R.images.gui.maps.icons.battlePass.logo.emblem, name: pa.Chapter, id: a },
                            s = e ? ya.Open : ya.Closed,
                            i = ((e, t) =>
                                e
                                    ? Sa.Gold
                                    : t === Ku.Completed || t === Ku.CompletedRightNow
                                      ? Sa.Completed
                                      : Sa.Initial)(t, u),
                            l = n.length > 0 ? `_${n}` : '';
                        return { backgroundImage: `url(${ga(r, { name: 'emblem', postfix: `${s}_${i}${l}` })})` };
                    },
                    La = (e, t) => {
                        const u = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: pa.Season, id: e };
                        return { backgroundImage: `url(${ga(u, { name: 'extra', postfix: t })})` };
                    },
                    Ta = (0, r.memo)((e) => {
                        const t = e.progression,
                            u = e.size,
                            a = e.battlePassState,
                            n = e.hasBattlePass,
                            r = e.isChapterChosen,
                            i = e.hasBeenActive,
                            l = void 0 !== i && i,
                            o = e.isChapterSelection,
                            c = void 0 !== o && o,
                            m = e.isOpen,
                            E = void 0 !== m && m,
                            d = e.isProgression,
                            _ = void 0 !== d && d,
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
                                    case Vu.Small:
                                        return 'small';
                                    case Vu.Micro:
                                        return 'micro';
                                    default:
                                        return '';
                                }
                            })(u),
                            f = a === Ku.CompletedRightNow,
                            w = n || a === Ku.Bought,
                            y = (a === Ku.Completed || f) && w,
                            S = (a === Ku.Completed || f) && !w,
                            P = y || S,
                            L = void 0 !== t.from,
                            T = F && ((L && r) || l);
                        return s().createElement(
                            'div',
                            { className: ba.base },
                            b &&
                                s().createElement('div', {
                                    className: g()(ba.extra, v && ba[`extra__${v}`]),
                                    style: La(B, v),
                                }),
                            s().createElement(
                                'div',
                                {
                                    className: g()(ba.image, v && ba[`image__${v}`], C && ba.image__clickable),
                                    style: Pa(E, w, a, D, v),
                                },
                                a !== Ku.AwaitSeason &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(
                                            Ca,
                                            wa(
                                                {
                                                    hasProgression: L,
                                                    isGolden: w,
                                                    isProgressionCompleted: P,
                                                    isChapterChosen: r,
                                                    hasBeenActive: l,
                                                    isChapterSelection: c,
                                                    isProgression: _,
                                                },
                                                e,
                                                t,
                                            ),
                                        ),
                                        T &&
                                            s().createElement(fa, {
                                                key: t.to,
                                                progression: t,
                                                showProgressionCompleted: f,
                                                isProgressionCompleted: P,
                                                size: u,
                                            }),
                                    ),
                            ),
                        );
                    }),
                    Ra = (e, t) => {
                        const u = R.images.gui.maps.icons.battlePass.logo.flag;
                        return { backgroundImage: `url(${Zu(u, e, t ? 's' : 'm')})` };
                    },
                    xa = (0, Ou.Pi)(() => {
                        const e = ju(),
                            t = e.model,
                            u = e.controls,
                            a = t.battlePassProgress.get(),
                            n = a.hasExtra,
                            r = a.freePoints,
                            i = a.chapterID,
                            l = a.currentLevel,
                            o = a.currentLevelPoints,
                            c = a.isBattlePassPurchased,
                            m = a.progressionState,
                            E = a.chapterState,
                            d = a.seasonNum,
                            _ = { level: l, from: o },
                            A = m === Lt,
                            F = 0 !== i && E === Tt.Active,
                            p = ((e) => void 0 !== e.from && (e.level > 1 || e.from > 0))(_),
                            b = p && F,
                            B = A ? Ku.Completed : b ? (c ? Ku.Bought : Ku.Free) : Ku.ChapterNotChosen,
                            h = C().mediaSize <= D.Small,
                            v = h ? Vu.Micro : Vu.Small,
                            f = B === Ku.Completed,
                            w = b && !f,
                            y = B === Ku.Bought,
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
                                    style: Ra(i, h),
                                }),
                            s().createElement(
                                'div',
                                { className: 'BattlePassEmblem_emblem_ec' },
                                s().createElement(Ta, {
                                    progression: _,
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
                                        style: Qu(i, y, v),
                                    }),
                                S && s().createElement('div', { className: 'BattlePassEmblem_freePoints_0d' }, r),
                            ),
                        );
                    }),
                    Na = {
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
                    ka = (0, Ou.Pi)(({ animationTrigger: e, isAnimationSkipped: t }) => {
                        const u = ju().model.battlePassProgress.get(),
                            a = u.maxPoints,
                            n = u.earnedPoints,
                            i = u.currentLevelPoints,
                            l = u.progressionState,
                            o = u.chapterID,
                            c = u.chapterState,
                            m = u.freePoints,
                            E = R.strings.battle_royale.battleResult.battlePassWidget,
                            d = (0, r.useState)(Mu.delta.duration),
                            _ = d[0],
                            A = d[1],
                            F = (0, r.useState)(!0),
                            p = F[0],
                            b = F[1],
                            D = Boolean(n),
                            B = l === Lt,
                            h = 0 !== o && c === Tt.Active,
                            C = B
                                ? E.tooltips.progressionCompleted()
                                : h
                                  ? E.tooltips.inProgress()
                                  : E.tooltips.chapterNotChosen(),
                            v = Object.assign({}, Mu, { freezed: p, delta: { duration: _, delay: 0 } });
                        ((0, r.useEffect)(() => {
                            if (D && e && !t)
                                return (
                                    b(!1),
                                    k(R.sounds.bp_progress_bar_start()),
                                    Mt(() => {
                                        k(R.sounds.bp_progress_bar_stop());
                                    }, Mu.delta.duration)
                                );
                        }, [e, t, D]),
                            (0, r.useEffect)(() => {
                                D && t && (A(0), k(R.sounds.bp_progress_bar_stop()), e || b(!1));
                            }, [e, t, D]));
                        const f = g()(
                            Na.base,
                            Na[`base__${l}`],
                            !B && h && Na.base__progress,
                            !B && !h && Na.base__chapterNotChosen,
                        );
                        return s().createElement(
                            'div',
                            { className: f },
                            s().createElement(
                                ct,
                                { body: C },
                                s().createElement('div', null, s().createElement(xa, null)),
                            ),
                            s().createElement(
                                'div',
                                { className: Na.content },
                                s().createElement('div', { className: Na.title }, E.title()),
                                !B &&
                                    !h &&
                                    s().createElement(
                                        'div',
                                        { className: Na.chapterNotChosen },
                                        s().createElement(su, {
                                            classMix: Na.chapterText,
                                            text: E.chapterNotChosen(),
                                            binding: {
                                                points: s().createElement('span', { className: Na.notUsedPoints }, m),
                                                icon: s().createElement('span', { className: Na.icon }),
                                            },
                                        }),
                                    ),
                                B &&
                                    s().createElement(
                                        'div',
                                        { className: Na.progressionCompleted },
                                        E.progressionCompleted(),
                                    ),
                                !B &&
                                    h &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(
                                            'div',
                                            { className: Na.progressionContainer },
                                            s().createElement(
                                                'div',
                                                { className: Na.progressionBar },
                                                s().createElement(Iu, {
                                                    deltaFrom: i - n,
                                                    value: i,
                                                    maxValue: a,
                                                    animationSettings: v,
                                                }),
                                            ),
                                            D &&
                                                s().createElement(
                                                    'div',
                                                    { className: Na.achievedPoints },
                                                    s().createElement('span', { className: Na.plus }, '+'),
                                                    n,
                                                ),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: Na.pointsStats },
                                            i,
                                            '/',
                                            s().createElement('span', { className: Na.pointsMax }, a),
                                            s().createElement('span', { className: Na.icon }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Ma = 'Result_widget_14',
                    Ia = 'ResultAnimations_baseEnterDone_a9',
                    Oa = { enterActive: 'ResultAnimations_baseEnterActive_7d', enterDone: Ia },
                    Wa = { enterActive: 'ResultAnimations_itemsBase_c0', enterDone: Ia },
                    Ha = { enterActive: 'ResultAnimations_ribbon_0a', enterDone: Ia },
                    $a = { enterActive: 'ResultAnimations_battlePassWidget_f9', enterDone: Ia },
                    za = { enterActive: 'ResultAnimations_battleQuetsWidget_57', enterDone: Ia },
                    Ga = ['children'];
                function Ua() {
                    return (
                        (Ua =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ua.apply(this, arguments)
                    );
                }
                const ja = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, Ga);
                        return s().createElement(
                            st,
                            Ua(
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
                    Va = (0, r.memo)(({ questCompleted: e }) => {
                        const t = (0, r.useMemo)(() => ({ tooltipId: 'QuestCompletedTooltip' }), []),
                            u = R.strings.battle_royale.battleResult.battleQuestsWidget;
                        return s().createElement(
                            T,
                            null,
                            s().createElement(
                                ja,
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
                                                gt(u.questsComplete(), { count: e }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                var qa;
                !(function (e) {
                    ((e[(e.TitleEnter = 0)] = 'TitleEnter'),
                        (e[(e.StatsEnter = 1)] = 'StatsEnter'),
                        (e[(e.RibbonEnter = 2)] = 'RibbonEnter'),
                        (e[(e.BattleRewardsEnter = 3)] = 'BattleRewardsEnter'),
                        (e[(e.ProgressEnter = 4)] = 'ProgressEnter'),
                        (e[(e.AnimationFinished = 5)] = 'AnimationFinished'));
                })(qa || (qa = {}));
                const Ka = s().memo(
                        ({
                            onAnimationComplete: e,
                            animationTrigger: t,
                            isAnimationSkipped: u,
                            isWinner: a,
                            isFirstPlace: n,
                        }) => {
                            const i = ce('model.personalResults'),
                                l = i.finishResultLabel,
                                o = i.vehicleName,
                                c = i.vehicleType,
                                m = i.statsList,
                                E = i.place,
                                d = i.hasPremium,
                                _ = i.questCompleted,
                                A = i.battleRewardsList,
                                F = i.battleRewardsListWithPremium,
                                p = i.battlePassProgress,
                                b = i.isObserver,
                                D = 'disabled' !== p.battlePassState,
                                B = d
                                    ? 'Result_battleRewardsItemStartStatePremium_88'
                                    : 'Result_battleRewardsItemStartState_71',
                                h = (0, r.useState)(-1),
                                C = h[0],
                                v = h[1],
                                f = (0, r.useCallback)(() => {
                                    if (u) return;
                                    let t = C + 1;
                                    switch (t) {
                                        case qa.ProgressEnter:
                                            0 === p.earnedPoints && (t += 1);
                                            break;
                                        case qa.RibbonEnter:
                                            k(R.sounds.BR_result_redtape());
                                    }
                                    (t === qa.AnimationFinished && e && e(), v(t));
                                }, [u, C, p.earnedPoints, e]);
                            ((0, r.useEffect)(() => {
                                t && !u && v(0);
                            }, [t, u]),
                                (0, r.useEffect)(() => {
                                    u && v(qa.AnimationFinished);
                                }, [u]));
                            const w = o && systemLocale.toUpperCase(o);
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
                                    s().createElement(Vt, {
                                        finishResultLabel: l,
                                        isFirstPlace: n,
                                        place: E,
                                        isWinner: a,
                                        vehicleType: c,
                                        vehicleName: w,
                                        animationTrigger: C >= qa.TitleEnter,
                                        isAnimationSkipped: u,
                                        onAnimationComplete: f,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'Result_content_de' },
                                    s().createElement(kt, {
                                        statsList: m,
                                        animationTrigger: C >= qa.StatsEnter,
                                        isAnimationSkipped: u,
                                        onAnimationComplete: f,
                                        itemStartState: 'Result_statItemStartState_1f',
                                        itemFinishState: Wa,
                                        transitionTimeout: 200,
                                        isWinner: a,
                                    }),
                                    !b &&
                                        s().createElement(
                                            'div',
                                            { className: 'Result_ribbon_9a' },
                                            s().createElement(
                                                me.Z,
                                                {
                                                    timeout: 500,
                                                    in: C >= qa.RibbonEnter,
                                                    enter: !u,
                                                    classNames: Ha,
                                                    onEntered: f,
                                                },
                                                s().createElement(
                                                    'div',
                                                    { className: 'Result_ribbonComponent_d3' },
                                                    s().createElement(tu, {
                                                        battleRewardsListWithPremium: F,
                                                        isWinner: a,
                                                        hasPremium: d,
                                                    }),
                                                ),
                                            ),
                                            s().createElement(
                                                'div',
                                                { className: 'Result_battleRewardsList_e0' },
                                                s().createElement(ru, {
                                                    battleRewardsList: A,
                                                    animationTrigger: C >= qa.BattleRewardsEnter,
                                                    isAnimationSkipped: u,
                                                    onAnimationComplete: f,
                                                    itemStartState: B,
                                                    itemFinishState: Oa,
                                                    transitionTimeout: 200,
                                                }),
                                            ),
                                        ),
                                    s().createElement(
                                        'div',
                                        {
                                            className: g()(
                                                'Result_widgetsContainer_70',
                                                u || (C >= qa.ProgressEnter && 'Result_widgetsContainer__hoverable_0f'),
                                            ),
                                        },
                                        D &&
                                            s().createElement(
                                                me.Z,
                                                {
                                                    timeout: 500,
                                                    in: C >= qa.ProgressEnter,
                                                    enter: !u,
                                                    classNames: $a,
                                                    onEntered: f,
                                                },
                                                s().createElement(
                                                    'div',
                                                    { className: Ma },
                                                    s().createElement(ka, {
                                                        animationTrigger: C >= qa.AnimationFinished,
                                                        isAnimationSkipped: u,
                                                    }),
                                                ),
                                            ),
                                        _ > 0 &&
                                            s().createElement(
                                                T,
                                                null,
                                                s().createElement(
                                                    me.Z,
                                                    {
                                                        timeout: 500,
                                                        in: C >= qa.ProgressEnter,
                                                        enter: !u,
                                                        classNames: za,
                                                        onEntered: f,
                                                    },
                                                    s().createElement(
                                                        'div',
                                                        { className: g()(Ma, D && 'Result_widget__battleQuests_c3') },
                                                        s().createElement(Va, { questCompleted: _ }),
                                                    ),
                                                ),
                                            ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Xa = {
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
                let Ya, Za;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Ya || (Ya = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(Za || (Za = {})));
                const Qa = ({
                    children: e,
                    size: t,
                    disabled: u,
                    mixClass: a,
                    onMouseEnter: n,
                    onMouseMove: i,
                    onMouseDown: l,
                    onMouseUp: o,
                    onMouseLeave: c,
                    onClick: m,
                    isFocused: E = !1,
                    type: d = Ya.primary,
                    soundHover: _ = 'highlight',
                    soundClick: A = 'play',
                }) => {
                    const F = (0, r.useRef)(null),
                        p = (0, r.useState)(E),
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
                            D(E);
                        }, [E]),
                        s().createElement(
                            'div',
                            {
                                ref: F,
                                className: g()(
                                    Xa.base,
                                    Xa[`base__${d}`],
                                    u && Xa.base__disabled,
                                    t && Xa[`base__${t}`],
                                    b && Xa.base__focus,
                                    h && Xa.base__highlightActive,
                                    a,
                                ),
                                onMouseEnter: function (e) {
                                    u || (null !== _ && k(_), n && n(e));
                                },
                                onMouseMove: function (e) {
                                    i && i(e);
                                },
                                onMouseUp: function (e) {
                                    u || (o && o(e), C(!1));
                                },
                                onMouseDown: function (e) {
                                    u ||
                                        (null !== A && k(A),
                                        l && l(e),
                                        E && (u || (F.current && (F.current.focus(), D(!0)))),
                                        C(!0));
                                },
                                onMouseLeave: function (e) {
                                    u || (c && c(e), C(!1));
                                },
                                onClick: function (e) {
                                    u || (m && m(e));
                                },
                            },
                            d !== Ya.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: Xa.back }),
                                    s().createElement('span', { className: Xa.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: g()(Xa.state, Xa.state__default) },
                                s().createElement('span', { className: Xa.stateDisabled }),
                                s().createElement('span', { className: Xa.stateHighlightHover }),
                                s().createElement('span', { className: Xa.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: Xa.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                let Ja;
                !(function (e) {
                    ((e.Solo = 'solo'), (e.RandomPlatoon = 'randomPlatoon'), (e.Platoon = 'platoon'));
                })(Ja || (Ja = {}));
                const en = R.strings.battle_royale.battleResult.playerBattleTypeStatus,
                    tn = R.images.gui.maps.icons.battleRoyale.battleResult.battle_type,
                    un = ({ userName: e, clanAbbrev: t, battleType: u }) =>
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
                                    })(en.header, u),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'Platoon_userInfo_31' },
                                    s().createElement('div', { className: 'Platoon_name_da' }, e),
                                    t &&
                                        s().createElement(su, {
                                            text: en.clan(),
                                            binding: { clanAbbrev: t },
                                            classMix: 'Platoon_clan_c8',
                                        }),
                                ),
                            ),
                            s().createElement('div', {
                                style: { backgroundImage: `url(${tn.$dyn(u)})` },
                                className: 'Platoon_icon_3b',
                            }),
                        ),
                    an = R.strings.battle_royale.battleResult.playerBattleTypeStatus,
                    nn = (0, Ou.Pi)(() => {
                        const e = ju(),
                            t = e.model,
                            u = e.controls,
                            a = t.battleTypeInfo.get(),
                            n = a.battleType,
                            r = a.isPlatoonWindowOpen,
                            i = t.userInfo.get(),
                            l = i.userName,
                            o = i.clanAbbrev;
                        return s().createElement(
                            'div',
                            { className: 'PlayerBattleTypeStatus_base_e7' },
                            (() => {
                                switch (n) {
                                    case Ja.Solo:
                                        return s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement(
                                                'div',
                                                { className: 'PlayerBattleTypeStatus_container_fa' },
                                                s().createElement(
                                                    'div',
                                                    { className: 'PlayerBattleTypeStatus_header_76' },
                                                    an.header.solo(),
                                                ),
                                                s().createElement(
                                                    'div',
                                                    { className: 'PlayerBattleTypeStatus_text_eb' },
                                                    an.text.solo(),
                                                ),
                                            ),
                                            s().createElement('div', { className: 'PlayerBattleTypeStatus_icon_4c' }),
                                        );
                                    case Ja.RandomPlatoon:
                                        return s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement(un, { userName: l, clanAbbrev: o, battleType: n }),
                                            s().createElement(
                                                Qa,
                                                {
                                                    type: Ya.primary,
                                                    size: Za.medium,
                                                    mixClass: 'PlayerBattleTypeStatus_button_92',
                                                    onClick: u.invite,
                                                    disabled: r,
                                                },
                                                an.button.text(),
                                            ),
                                        );
                                    case Ja.Platoon:
                                        return s().createElement(un, { userName: l, clanAbbrev: o, battleType: n });
                                    default:
                                        return (console.error(`Invalid battle type ${n}`), null);
                                }
                            })(),
                        );
                    }),
                    rn = [1, 2, 3, 4, 5];
                let sn;
                var ln;
                (!(function (e) {
                    ((e.Results = 'results'), (e.Leaderboard = 'leaderboard'));
                })(sn || (sn = {})),
                    (function (e) {
                        ((e[(e.BackgroundEnter = 0)] = 'BackgroundEnter'),
                            (e[(e.TabBarEnter = 1)] = 'TabBarEnter'),
                            (e[(e.ResultContentEnter = 2)] = 'ResultContentEnter'),
                            (e[(e.BottomComponentsEnter = 3)] = 'BottomComponentsEnter'),
                            (e[(e.AnimationFinished = 4)] = 'AnimationFinished'));
                    })(ln || (ln = {})));
                const on = () => {
                    const e = ce('model').mapName,
                        t = ce('model.personalResults').place,
                        u = (0, r.useState)(sn.Results),
                        a = u[0],
                        n = u[1],
                        i = (0, r.useState)({ animationStage: -1, isSkipped: !1 }),
                        l = i[0],
                        o = i[1];
                    (0, r.useEffect)(
                        () =>
                            J(() => {
                                o({ animationStage: 0, isSkipped: !1 });
                            }),
                        [],
                    );
                    const c = (0, r.useCallback)(() => {
                            ((l.animationStage = ln.AnimationFinished), (l.isSkipped = !0), o(Object.assign({}, l)));
                        }, [l]),
                        m = (0, r.useCallback)(
                            (e) => {
                                const t = e.currentTarget.getAttribute('tab-key');
                                (l.isSkipped || c(), n(t));
                            },
                            [l.isSkipped, c],
                        ),
                        E = (0, r.useCallback)(() => {
                            (0, te.Sy)();
                        }, []),
                        d = (0, r.useCallback)(() => {
                            l.isSkipped ? E() : c();
                        }, [l.isSkipped, E, c]);
                    ae(ee.n.ESCAPE, d);
                    const _ = (0, r.useCallback)(() => {
                            l.isSkipped ||
                                ((l.animationStage += 1),
                                l.animationStage === ln.AnimationFinished
                                    ? (l.isSkipped = !0)
                                    : o(Object.assign({}, l)));
                        }, [l]),
                        A = rn.includes(t),
                        F = 1 === t;
                    return s().createElement(
                        'div',
                        { className: 'App_base_d1' },
                        s().createElement(
                            me.Z,
                            {
                                in: l.animationStage >= ln.BackgroundEnter,
                                timeout: 500,
                                classNames: Fe,
                                enter: !l.isSkipped,
                                onEntered: _,
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
                            { className: g()(Ee, a === sn.Results && de) },
                            s().createElement(Ka, {
                                animationTrigger: l.animationStage >= ln.ResultContentEnter,
                                isAnimationSkipped: l.isSkipped,
                                onAnimationComplete: _,
                                isWinner: A,
                                isFirstPlace: F,
                            }),
                        ),
                        s().createElement(
                            'div',
                            { className: g()(Ee, a === sn.Leaderboard && de) },
                            s().createElement(Pt, null),
                        ),
                        s().createElement(
                            me.Z,
                            {
                                timeout: 500,
                                in: l.animationStage >= ln.TabBarEnter,
                                enter: !l.isSkipped,
                                className: 'App_horizontalTabs_b9',
                                classNames: ge,
                                onEntered: _,
                            },
                            s().createElement(
                                G,
                                { isTabsCentered: !0 },
                                s().createElement(
                                    'div',
                                    { 'tabs-role': W.LIST },
                                    s().createElement(
                                        Q,
                                        { 'tabs-role': W.TAB, 'tab-key': sn.Results, onClick: m },
                                        R.strings.battle_royale.battleResult.tab.result(),
                                    ),
                                    s().createElement(
                                        Q,
                                        { 'tabs-role': W.TAB, 'tab-key': sn.Leaderboard, onClick: m },
                                        R.strings.battle_royale.battleResult.tab.leaderboard(),
                                    ),
                                ),
                            ),
                        ),
                        s().createElement(
                            me.Z,
                            {
                                timeout: 500,
                                in: l.animationStage >= ln.BottomComponentsEnter,
                                enter: !l.isSkipped,
                                classNames: Ae,
                                onEntered: _,
                            },
                            s().createElement(
                                'div',
                                { className: 'App_bottomComponents_ee' },
                                s().createElement('p', { className: 'App_mapName_ac' }, e),
                                s().createElement(
                                    'div',
                                    { className: 'App_playerBattleTypeStatus_eb' },
                                    s().createElement(nn, null),
                                ),
                            ),
                        ),
                    );
                };
                engine.whenReady
                    .then(() => {
                        N().render(
                            s().createElement(Uu, null, s().createElement(T, null, s().createElement(on, null))),
                            document.getElementById('root'),
                        );
                    })
                    .then(() => l.O.view.enableFullScreenModeSupported())
                    .then(() => l.O.view.initExternalPaddings(document.getElementById('root')));
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
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, u, a] = deferred[l], r = !0, s = 0; s < t.length; s++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(l--, 1);
                        var i = u();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > a; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, u, a];
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
                        l = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var o = i(__webpack_require__);
                    }
                    for (t && t(u); l < r.length; l++)
                        ((n = r[l]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(o);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/battle_royale.vendors'], () =>
        __webpack_require__(218),
    );
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
