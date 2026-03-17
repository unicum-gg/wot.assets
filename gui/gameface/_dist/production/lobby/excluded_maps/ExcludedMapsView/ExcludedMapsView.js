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
            527: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, { mouse: () => c, off: () => i, on: () => s, onResize: () => r, onScaleUpdated: () => o }));
                var n = t(472),
                    a = t(176);
                const r = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    s = (u, e) => engine.on(u, e),
                    i = (u, e) => engine.off(u, e),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, a.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, a.R)(!0);
                    }
                    function n() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${e}`,
                                        o = l[e]((u) => t([u, 'outside']));
                                    function s(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        n(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(r, s),
                                                (u.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            ((u.enabled = !1), n());
                        },
                        enable() {
                            ((u.enabled = !0), n());
                        },
                        enableOutside() {
                            u.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            959: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => r,
                        graphicsQuality: () => s,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = t(527),
                    a = t(493);
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (u, e, t) => {
                'use strict';
                function n(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => n });
            },
            493: (u, e, t) => {
                'use strict';
                function n(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function a(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                t.d(e, { E: () => a, G: () => n });
            },
            472: (u, e, t) => {
                'use strict';
                function n(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => n });
            },
            138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => o });
                var n = t(959),
                    a = t(698),
                    r = t(514);
                const o = { view: t(641), client: n, sound: r.ZP, intl: a.N };
            },
            698: (u, e, t) => {
                'use strict';
                t.d(e, { N: () => n });
                const n = {
                    toUpperCase: (u) => window.systemLocale.toUpperCase(u),
                    toLowerCase: (u) => window.systemLocale.toLowerCase(u),
                };
            },
            514: (u, e, t) => {
                'use strict';
                t.d(e, { ZP: () => o });
                var n = t(959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((u, e) => ((u[e] = () => (0, n.playSound)(a[e])), u), {}),
                    o = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            722: (u, e, t) => {
                'use strict';
                function n(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function a(u, e, t) {
                    return `url(${n(u, e, t)})`;
                }
                (t.r(e), t.d(e, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => a });
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
            641: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => i,
                        arabic2roman: () => T,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => S,
                        enableFullScreenModeSupported: () => L,
                        events: () => o.U,
                        extraSize: () => M,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => b,
                        getExternalPaddingsRem: () => x,
                        getFontNames: () => w,
                        getScale: () => _,
                        getSize: () => A,
                        getViewGlobalPosition: () => F,
                        initExternalPaddings: () => k,
                        isEventHandled: () => v,
                        isFocused: () => g,
                        pxToRem: () => B,
                        remToPx: () => C,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => y,
                    }));
                var n = t(690),
                    a = t(722),
                    r = t(112),
                    o = t(538),
                    s = t(566);
                function i(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function l(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function c(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function d(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function E(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function F(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: C(e.x), y: C(e.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function _() {
                    return viewEnv.getScale();
                }
                function B(u) {
                    return viewEnv.pxToRem(u);
                }
                function C(u) {
                    return viewEnv.remToPx(u);
                }
                function p(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let u = [];
                        return () => (0 === u.length && (u = Object.keys(viewEnv.getFontsConfig())), u);
                    })(),
                    T = n.cg;
                function x() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const S = Object.keys(r.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === r.W[e]), u),
                        {},
                    ),
                    M = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    y = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : o.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
                function L() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function k(u) {
                    function e() {
                        const e = viewEnv.getExternalPaddingsRem(),
                            t = e.top,
                            n = e.right,
                            a = e.bottom,
                            r = e.left;
                        (u.style.setProperty('--external-padding-top', `${t}rem`),
                            u.style.setProperty('--external-padding-right', `${n}rem`),
                            u.style.setProperty('--external-padding-bottom', `${a}rem`),
                            u.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (e(), engine.on('self.onPaddingsUpdated', () => e()));
                }
            },
            566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    o = 32,
                    s = 64,
                    i = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                o = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(u);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                    return a;
                                })(e, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, o, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    l = {
                        close(u) {
                            i('popover' === u ? a : o);
                        },
                        minimize() {
                            i(s);
                        },
                        move(u) {
                            i(r, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            521: (u, e, t) => {
                'use strict';
                let n, a;
                (t.d(e, { n: () => n }),
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
                    })(n || (n = {})),
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
                    })(a || (a = {})));
            },
            690: (u, e, t) => {
                'use strict';
                t.d(e, { cg: () => r });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(u) {
                    let e = '';
                    for (let t = a.length - 1; t >= 0; t--) for (; u >= a[t]; ) ((e += n[t]), (u -= a[t]));
                    return e;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                var n = t(138);
                class a {
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
                        return (window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(u, e, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(u, t, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", u),
                            r
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(u, e);
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
            916: (u, e, t) => {
                'use strict';
                t.d(e, { Sw: () => r.Z, B0: () => s, ry: () => _ });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let n = u.target;
                                    do {
                                        if (n === e) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(u, e) {
                        (this.addMouseListener(), this.entries.push({ container: u, callback: e }));
                    }
                    unregister(u, e) {
                        const t = u,
                            n = e;
                        ((this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== n)),
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
                let s;
                !(function (u) {
                    ((u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE'));
                })(s || (s = {}));
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(521),
                    A = t(138);
                const m = ['args'];
                function F(u, e, t, n, a, r, o) {
                    try {
                        var s = u[r](o),
                            i = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(i) : Promise.resolve(i).then(n, a);
                }
                const D = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
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
                                    return new Promise(function (n, a) {
                                        var r = u.apply(e, t);
                                        function o(u) {
                                            F(r, n, a, o, s, 'next', u);
                                        }
                                        function s(u) {
                                            F(r, n, a, o, s, 'throw', u);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    B = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(u);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                    return a;
                                })(e, m);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    C = () => B(s.CLOSE),
                    p = (u, e) => {
                        u.keyCode === E.n.ESCAPE && e();
                    };
                var g = t(572);
                const h = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: g.Z,
                        ViewEventType: s,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (u) => B(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => B(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            B(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, a = R.invalid('resId'), r) => {
                            const o = A.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                d = i.width,
                                E = i.height,
                                m = {
                                    x: A.O.view.pxToRem(l) + o.x,
                                    y: A.O.view.pxToRem(c) + o.y,
                                    width: A.O.view.pxToRem(d),
                                    height: A.O.view.pxToRem(E),
                                };
                            B(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: e,
                                bbox: D(m),
                                on: !0,
                                args: r,
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
                            p(u, C);
                        },
                        handleViewEvent: B,
                        onBindingsReady: _,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const a = Object.prototype.toString.call(e[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < a.length; e++) t[n].push({ value: u(a[e].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: h,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = v;
            },
            613: (u, e, t) => {
                'use strict';
                t.d(e, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e, t = 2) => systemLocale.getRealFormat(u, e, t),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    a = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            274: (u, e, t) => {
                'use strict';
                var n = t(363),
                    a = t.n(n);
                const r = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var o = t(138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var i;
                function l(u = o.O.client.getSize('rem')) {
                    const e = u.width,
                        t = u.height;
                    return Object.assign(
                        { width: e, height: t },
                        (function (u, e, t) {
                            const n = (function (u, e) {
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
                                a = (function (u, e) {
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
                        })(e, t, s),
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
                })(i || (i = {}));
                const c = l(),
                    d = (0, n.createContext)(c),
                    E = ['children'];
                (0, n.memo)((u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                            return a;
                        })(u, E);
                    const a = (0, n.useContext)(d),
                        o = a.extraLarge,
                        s = a.large,
                        i = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        A = a.extraLargeWidth,
                        m = a.largeWidth,
                        F = a.mediumWidth,
                        D = a.smallWidth,
                        _ = a.extraSmallWidth,
                        B = a.extraLargeHeight,
                        C = a.largeHeight,
                        p = a.mediumHeight,
                        g = a.smallHeight,
                        h = a.extraSmallHeight,
                        v = { extraLarge: B, large: C, medium: p, small: g, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return e;
                        if (t.large && s) return e;
                        if (t.medium && i) return e;
                        if (t.small && l) return e;
                        if (t.extraSmall && c) return e;
                    } else {
                        if (t.extraLargeWidth && A) return r(e, t, v);
                        if (t.largeWidth && m) return r(e, t, v);
                        if (t.mediumWidth && F) return r(e, t, v);
                        if (t.smallWidth && D) return r(e, t, v);
                        if (t.extraSmallWidth && _) return r(e, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return e;
                            if (t.largeHeight && C) return e;
                            if (t.mediumHeight && p) return e;
                            if (t.smallHeight && g) return e;
                            if (t.extraSmallHeight && h) return e;
                        }
                    }
                    return null;
                });
                const A = ({ children: u }) => {
                    const e = (0, n.useState)(l),
                        t = e[0],
                        r = e[1],
                        s = (0, n.useState)(!1),
                        i = s[0],
                        c = s[1];
                    return (
                        (0, n.useLayoutEffect)(() => {
                            function u() {
                                r((u) => {
                                    const e = o.O.client.getSize('rem');
                                    return u.width === e.width && u.height === e.height ? u : l(e);
                                });
                            }
                            return (
                                u(),
                                c(!0),
                                o.O.client.events.on('clientResized', u),
                                o.O.client.events.on('self.onScaleUpdated', u),
                                () => {
                                    (o.O.client.events.off('clientResized', u),
                                        o.O.client.events.off('self.onScaleUpdated', u));
                                }
                            );
                        }, []),
                        a().createElement(d.Provider, { value: t }, i && u)
                    );
                };
                var m = t(483),
                    F = t.n(m),
                    D = t(926),
                    _ = t.n(D);
                let B, C, p;
                (!(function (u) {
                    ((u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = s.small.width)] = 'Small'),
                        (u[(u.Medium = s.medium.width)] = 'Medium'),
                        (u[(u.Large = s.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                })(B || (B = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.width)] = 'Small'),
                            (u[(u.Medium = s.medium.width)] = 'Medium'),
                            (u[(u.Large = s.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                    })(C || (C = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.height)] = 'Small'),
                            (u[(u.Medium = s.medium.height)] = 'Medium'),
                            (u[(u.Large = s.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge'));
                    })(p || (p = {})));
                const g = () => {
                        const u = (0, n.useContext)(d),
                            e = u.width,
                            t = u.height,
                            a = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return B.ExtraLarge;
                                    case u.large:
                                        return B.Large;
                                    case u.medium:
                                        return B.Medium;
                                    case u.small:
                                        return B.Small;
                                    case u.extraSmall:
                                        return B.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), B.ExtraSmall);
                                }
                            })(u),
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return C.ExtraLarge;
                                    case u.largeWidth:
                                        return C.Large;
                                    case u.mediumWidth:
                                        return C.Medium;
                                    case u.smallWidth:
                                        return C.Small;
                                    case u.extraSmallWidth:
                                        return C.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), C.ExtraSmall);
                                }
                            })(u),
                            o = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return p.ExtraLarge;
                                    case u.largeHeight:
                                        return p.Large;
                                    case u.mediumHeight:
                                        return p.Medium;
                                    case u.smallHeight:
                                        return p.Small;
                                    case u.extraSmallHeight:
                                        return p.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), p.ExtraSmall);
                                }
                            })(u);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: o, remScreenWidth: e, remScreenHeight: t };
                    },
                    h = ['children', 'className'];
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        v.apply(this, arguments)
                    );
                }
                const f = {
                        [C.ExtraSmall]: '',
                        [C.Small]: _().SMALL_WIDTH,
                        [C.Medium]: `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH}`,
                        [C.Large]: `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH} ${_().LARGE_WIDTH}`,
                        [C.ExtraLarge]: `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH} ${_().LARGE_WIDTH} ${_().EXTRA_LARGE_WIDTH}`,
                    },
                    b = {
                        [p.ExtraSmall]: '',
                        [p.Small]: _().SMALL_HEIGHT,
                        [p.Medium]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT}`,
                        [p.Large]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT} ${_().LARGE_HEIGHT}`,
                        [p.ExtraLarge]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT} ${_().LARGE_HEIGHT} ${_().EXTRA_LARGE_HEIGHT}`,
                    },
                    w = {
                        [B.ExtraSmall]: '',
                        [B.Small]: _().SMALL,
                        [B.Medium]: `${_().SMALL} ${_().MEDIUM}`,
                        [B.Large]: `${_().SMALL} ${_().MEDIUM} ${_().LARGE}`,
                        [B.ExtraLarge]: `${_().SMALL} ${_().MEDIUM} ${_().LARGE} ${_().EXTRA_LARGE}`,
                    },
                    T = (u) => {
                        let e = u.children,
                            t = u.className,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, h);
                        const r = g(),
                            o = r.mediaWidth,
                            s = r.mediaHeight,
                            i = r.mediaSize;
                        return a().createElement('div', v({ className: F()(t, f[o], b[s], w[i]) }, n), e);
                    },
                    x = ['children'];
                const S = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                            return a;
                        })(u, x);
                    return a().createElement(A, null, a().createElement(T, t, e));
                };
                var M = t(533),
                    y = t.n(M),
                    L = t(797);
                let k;
                function O(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(k || (k = {}));
                const N = (u) => u.replace(/&nbsp;/g, ' '),
                    I = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    P = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    H = (u, e, t = k.left) => u.split(e).reduce(t === k.left ? I : P, []),
                    W = (() => {
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
                    V = ['zh_cn', 'zh_sg', 'zh_tw'],
                    U = (u, e = k.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (V.includes(t)) return W(u);
                        if ('ja' === t) {
                            return (0, L.D4)()
                                .parse(u)
                                .map((u) => N(u));
                        }
                        return ((u, e = k.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = N(u);
                            return (H(a, /( )/, e).forEach((u) => (t = t.concat(H(u, n, k.left)))), t);
                        })(u, e);
                    },
                    $ = 'FormatText_base_d0',
                    j = ({ binding: u, text: e = '', classMix: t, alignment: r = k.left, formatWithBrackets: o }) => {
                        if (null === e) return (console.error("FormatText was supplied with 'null'"), null);
                        const s = o && u ? O(e, u) : e;
                        return a().createElement(
                            n.Fragment,
                            null,
                            s.split('\n').map((e, o) =>
                                a().createElement(
                                    'div',
                                    { className: F()($, t), key: `${e}-${o}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : U(u, e))))(
                                        e,
                                        r,
                                        u,
                                    ).map((u, e) => a().createElement(n.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    },
                    G = (u, e, t) => (t < u ? u : t > e ? e : t),
                    z = (u) => {
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
                    };
                function K(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return q(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return q(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var n = 0;
                        return function () {
                            return n >= u.length ? { done: !0 } : { done: !1, value: u[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function q(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = new Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const Y = [];
                function X(u) {
                    const e = (0, n.useRef)(u);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            e.current = u;
                        }),
                        (0, n.useCallback)((...u) => (0, e.current)(...u), Y)
                    );
                }
                function Z(u, e, t) {
                    const a = (0, n.useMemo)(
                        () =>
                            (function (u, e, t, n) {
                                let a,
                                    r = !1,
                                    o = 0;
                                function s() {
                                    a && clearTimeout(a);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - o;
                                    function d() {
                                        ((o = Date.now()), t.apply(l, i));
                                    }
                                    r ||
                                        (n && !a && d(),
                                        s(),
                                        void 0 === n && c > u
                                            ? d()
                                            : !0 !== e &&
                                              (a = setTimeout(
                                                  n
                                                      ? function () {
                                                            a = void 0;
                                                        }
                                                      : d,
                                                  void 0 === n ? u - c : u,
                                              )));
                                }
                                return (
                                    'boolean' != typeof e && ((n = t), (t = e), (e = void 0)),
                                    (i.cancel = function () {
                                        (s(), (r = !0));
                                    }),
                                    i
                                );
                            })(t, u),
                        e,
                    );
                    return ((0, n.useEffect)(() => a.cancel, [a]), a);
                }
                var Q = t(30);
                let J;
                !(function (u) {
                    ((u[(u.Next = -1)] = 'Next'), (u[(u.Prev = 1)] = 'Prev'));
                })(J || (J = {}));
                const uu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    eu = (({
                        getContainerSize: u,
                        getBounds: e,
                        setScrollPosition: t,
                        getDirection: a,
                        getWrapperSize: r,
                        forceTriggerMouseMove: o,
                    }) => {
                        const s = (u, t) => {
                            const n = e(u),
                                a = n[0],
                                r = n[1];
                            return r <= a ? 0 : G(a, r, t);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? uu : l,
                                d = (0, n.useRef)(null),
                                E = (0, n.useRef)(null),
                                A = (0, n.useRef)(!1),
                                m = (() => {
                                    const u = (0, n.useMemo)(() => ({}), []),
                                        e = (e) => (u[e] || (u[e] = new Map()), u[e]),
                                        t = (u, t) => {
                                            e(u).set(t, t);
                                        },
                                        a = (u, t) => {
                                            e(u).delete(t);
                                        },
                                        r = (u, ...t) => {
                                            for (var n, a = K(e(u).values()); !(n = a()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, n.useMemo)(() => ({ on: t, off: a, trigger: r }), []);
                                })(),
                                F = Z(
                                    () => {
                                        o && o();
                                    },
                                    [],
                                    150,
                                ),
                                D = (0, Q.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (u) => {
                                        const e = d.current;
                                        e && (t(e, u), m.trigger('change', u), o && A.current && F());
                                    },
                                    onRest: (u) => m.trigger('rest', u),
                                    onStart: (u) => m.trigger('start', u),
                                    onPause: (u) => m.trigger('pause', u),
                                })),
                                _ = D[0],
                                B = D[1],
                                C = (0, n.useCallback)(
                                    (u, e, t) => {
                                        var n;
                                        const a = _.scrollPosition.get(),
                                            r = (null != (n = _.scrollPosition.goal) ? n : 0) - a;
                                        return s(u, e * t + r + a);
                                    },
                                    [_.scrollPosition],
                                ),
                                p = (0, n.useCallback)(
                                    (u, { immediate: e = !1, reset: t = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            B.start({
                                                scrollPosition: s(n, u),
                                                immediate: e,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: s(n, _.scrollPosition.get()) },
                                            });
                                    },
                                    [B, c.animationConfig, _.scrollPosition],
                                ),
                                g = (0, n.useCallback)(
                                    (u) => {
                                        const e = d.current,
                                            t = E.current;
                                        if (!e || !t) return;
                                        const n = ((u, e) => {
                                                switch (e.type) {
                                                    case 'proportional':
                                                        return r(u) / e.factor;
                                                    case 'fixed':
                                                        return e.value;
                                                }
                                            })(t, c.step),
                                            a = C(e, u, n);
                                        p(a);
                                    },
                                    [p, C, c.step],
                                ),
                                h = (0, n.useCallback)(
                                    (u) => {
                                        (0 !== u.deltaY && g(a(u)),
                                            d.current && m.trigger('mouseWheel', u, _.scrollPosition, e(d.current)));
                                    },
                                    [_.scrollPosition, g, m],
                                ),
                                v = ((u, e = []) => {
                                    const t = (0, n.useRef)(),
                                        a = (0, n.useCallback)((...e) => {
                                            (t.current && t.current(), (t.current = u(...e)));
                                        }, e);
                                    return (
                                        (0, n.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        z(() => {
                                            const u = d.current;
                                            u &&
                                                (p(s(u, _.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [p, _.scrollPosition.goal],
                                ),
                                f = X(() => {
                                    const u = d.current;
                                    if (!u) return;
                                    const e = s(u, _.scrollPosition.goal);
                                    (e !== _.scrollPosition.goal && p(e, { immediate: !0 }),
                                        m.trigger('recalculateContent'));
                                });
                            ((0, n.useEffect)(
                                () => (
                                    window.addEventListener('resize', v),
                                    () => {
                                        window.removeEventListener('resize', v);
                                    }
                                ),
                                [v],
                            ),
                                (0, n.useEffect)(() => {
                                    const u = d.current;
                                    if (!u || !o) return;
                                    const e = () => {
                                            A.current = !0;
                                        },
                                        t = () => {
                                            A.current = !1;
                                        };
                                    return (
                                        u.addEventListener('mouseenter', e),
                                        u.addEventListener('mouseleave', t),
                                        () => {
                                            (u.removeEventListener('mouseenter', e),
                                                u.removeEventListener('mouseleave', t));
                                        }
                                    );
                                }, [d]));
                            return (0, n.useMemo)(
                                () => ({
                                    getWrapperSize: () => (E.current ? r(E.current) : void 0),
                                    getContainerSize: () => (d.current ? u(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? e(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: h,
                                    applyScroll: p,
                                    applyStepTo: g,
                                    contentRef: d,
                                    wrapperRef: E,
                                    scrollPosition: B,
                                    animationScroll: _,
                                    recalculateContent: f,
                                    events: { on: m.on, off: m.off },
                                }),
                                [_.scrollPosition, p, g, m.off, m.on, f, h, B, c.step.clampedArrowStepTimeout],
                            );
                        };
                    })({
                        getBounds: (u) => [0, u.scrollHeight - u.offsetHeight],
                        getContainerSize: (u) => u.scrollHeight,
                        getWrapperSize: (u) => u.offsetHeight,
                        setScrollPosition: (u, e) => {
                            u.scrollTop = e.value.scrollPosition;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? J.Next : J.Prev),
                    });
                function tu(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const nu = 'VerticalBar_base_f3',
                    au = 'VerticalBar_base__active_72',
                    ru = 'VerticalBar_topButton_d7',
                    ou = 'VerticalBar_bottomButton_06',
                    su = 'VerticalBar_track_df',
                    iu = 'VerticalBar_thumb_32',
                    lu = 'VerticalBar_rail_43',
                    cu = 'disable',
                    du = () => {},
                    Eu = { pending: !1, offset: 0 },
                    Au = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    mu = (u, e) => {
                        u.contentRef.current && e(u.contentRef.current);
                    },
                    Fu = (u, e) => Math.max(20, u.offsetHeight * e),
                    Du = (0, n.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = Au, onDrag: r = du }) => {
                        const s = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            E = u.stepTimeout || 100,
                            A = (0, n.useState)(Eu),
                            m = A[0],
                            D = A[1],
                            _ = (0, n.useCallback)(
                                (u) => {
                                    (D(u),
                                        d.current &&
                                            r({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [r],
                            ),
                            B = X(() => {
                                const e = d.current,
                                    t = c.current,
                                    n = u.getWrapperSize(),
                                    a = u.getContainerSize();
                                if (!(n && a && e && t)) return;
                                const r = Math.min(1, n / a);
                                return (
                                    (e.style.height = `${Fu(t, r)}px`),
                                    (e.style.display = 'flex'),
                                    s.current &&
                                        (1 !== r ? s.current.classList.add(au) : s.current.classList.remove(au)),
                                    r
                                );
                            }),
                            C = X(() => {
                                const e = c.current,
                                    t = d.current,
                                    n = u.getWrapperSize(),
                                    a = u.getContainerSize();
                                if (!(n && e && t && a)) return;
                                const r = u.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / a),
                                    s = G(0, 1, r / (a - n)),
                                    E = (e.offsetHeight - Fu(e, o)) * s;
                                ((t.style.transform = `translateY(${0 | E}px)`),
                                    ((u) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(u))
                                                return (
                                                    i.current.classList.add(cu),
                                                    void l.current.classList.remove(cu)
                                                );
                                            if (
                                                ((e = c.current),
                                                (t = d.current),
                                                u - (e.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(cu),
                                                    void l.current.classList.add(cu)
                                                );
                                            var e, t;
                                            (i.current.classList.remove(cu), l.current.classList.remove(cu));
                                        }
                                    })(E));
                            }),
                            p = X(() => {
                                mu(u, () => {
                                    (B(), C());
                                });
                            });
                        ((0, n.useEffect)(() => z(p)),
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    mu(u, () => {
                                        C();
                                    });
                                };
                                let t = du;
                                const n = () => {
                                    (t(), (t = z(p)));
                                };
                                return (
                                    u.events.on('recalculateContent', p),
                                    u.events.on('rest', e),
                                    u.events.on('change', e),
                                    u.events.on('resizeHandled', n),
                                    () => {
                                        (t(),
                                            u.events.off('recalculateContent', p),
                                            u.events.off('rest', e),
                                            u.events.off('change', e),
                                            u.events.off('resizeHandled', n));
                                    }
                                );
                            }, [u]),
                            (0, n.useEffect)(() => {
                                if (!m.pending) return;
                                const e = o.O.client.events.mouse.up(() => {
                                        _(Eu);
                                    }),
                                    t = o.O.client.events.mouse.move(([e]) => {
                                        mu(u, (t) => {
                                            const n = c.current,
                                                a = d.current,
                                                o = u.getContainerSize();
                                            if (!n || !a || !o) return;
                                            const s = e.screenY - m.offset - n.getBoundingClientRect().y,
                                                i = (s / n.offsetHeight) * o;
                                            (u.scrollPosition.start({
                                                scrollPosition: u.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: i }));
                                        });
                                    });
                                return () => {
                                    (e(), t());
                                };
                            }, [u, m.offset, m.pending, r, _]));
                        const g = (function (u, e, t = []) {
                                const a = (0, n.useRef)(0),
                                    r = (0, n.useCallback)(() => {
                                        (window.clearInterval(a.current), (a.current = 0));
                                    }, t || []);
                                (0, n.useEffect)(() => r, [r]);
                                const o = (null != t ? t : []).concat([e]);
                                return [
                                    (0, n.useCallback)((t) => {
                                        (0 !== a.current && r(),
                                            (a.current = window.setInterval(() => u(t, !0), e)),
                                            u(t, !1));
                                    }, o),
                                    r,
                                ];
                            })((e) => u.applyStepTo(e), E, [u]),
                            h = g[0],
                            v = g[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const f = (u) => {
                            u.target.classList.contains(cu) || tu('highlight');
                        };
                        return a().createElement(
                            'div',
                            { className: F()(nu, e.base), ref: s, onWheel: u.handleMouseWheel },
                            a().createElement('div', {
                                className: F()(ru, e.topButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(cu) || 0 !== u.button || (tu('play'), h(J.Next));
                                },
                                ref: i,
                                onMouseEnter: f,
                            }),
                            a().createElement(
                                'div',
                                {
                                    className: F()(su, e.track),
                                    onMouseDown: (e) => {
                                        const n = d.current;
                                        if (n && 0 === e.button)
                                            if ((tu('play'), e.target === n))
                                                _({ pending: !0, offset: e.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((e) => {
                                                    d.current &&
                                                        mu(u, (n) => {
                                                            if (!n) return;
                                                            const a = t(u),
                                                                r = u.clampPosition(n, n.scrollTop + a * e);
                                                            u.applyScroll(r);
                                                        });
                                                })(e.screenY > n.getBoundingClientRect().y ? J.Prev : J.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                a().createElement('div', { ref: d, className: F()(iu, e.thumb) }),
                                a().createElement('div', { className: F()(lu, e.rail) }),
                            ),
                            a().createElement('div', {
                                className: F()(ou, e.bottomButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(cu) || 0 !== u.button || (tu('play'), h(J.Prev));
                                },
                                onMouseUp: v,
                                ref: l,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    _u = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Bu = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: r,
                        areaClassName: o,
                        scrollClassName: s,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, n.useMemo)(() => {
                                const u = r || {};
                                return Object.assign({}, u, { base: F()(_u.base, u.base) });
                            }, [r]),
                            E = (0, n.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return a().createElement(
                            'div',
                            { className: F()(_u.defaultScroll, t), onWheel: e.handleMouseWheel },
                            a().createElement(
                                'div',
                                { className: F()(_u.area, o) },
                                a().createElement(Cu, { className: s, classNames: i, api: E }, u),
                            ),
                            a().createElement(Du, { getStepByRailClick: l, api: e, onDrag: c, classNames: d }),
                        );
                    },
                    Cu = ({ className: u, classNames: e, children: t, api: r }) => (
                        (0, n.useEffect)(() => z(r.recalculateContent)),
                        a().createElement(
                            'div',
                            { className: F()(_u.base, u), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            a().createElement(
                                'div',
                                { className: F()(_u.content, null == e ? void 0 : e.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                Cu.Default = Bu;
                const pu = {
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
                    gu = [
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
                function hu() {
                    return (
                        (hu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        hu.apply(this, arguments)
                    );
                }
                const vu = (u) => {
                        let e = u.caption,
                            t = u.onClick,
                            r = u.goto,
                            s = u.classNames,
                            i = u.onMouseEnter,
                            l = u.onMouseLeave,
                            c = u.onMouseDown,
                            d = u.onMouseUp,
                            E = u.side,
                            A = void 0 === E ? 'left' : E,
                            m = u.type,
                            D = void 0 === m ? 'back' : m,
                            _ = u.soundHover,
                            B = void 0 === _ ? 'highlight' : _,
                            C = u.soundClick,
                            p = void 0 === C ? 'play' : C,
                            g = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, gu);
                        const h = (0, n.useCallback)(
                                (u) => {
                                    (null == i || i(u), o.O.sound.play.sound(B));
                                },
                                [i, B],
                            ),
                            v = (0, n.useCallback)(
                                (u) => {
                                    null == l || l(u);
                                },
                                [l],
                            ),
                            f = (0, n.useCallback)(
                                (u) => {
                                    (null == c || c(u), o.O.sound.play.sound(p));
                                },
                                [c, p],
                            ),
                            b = (0, n.useCallback)(
                                (u) => {
                                    null == d || d(u);
                                },
                                [d],
                            );
                        return a().createElement(
                            'div',
                            hu(
                                {
                                    className: F()(
                                        pu.base,
                                        pu[`base__${D}`],
                                        pu[`base__${A}`],
                                        null == s ? void 0 : s.base,
                                    ),
                                    onMouseEnter: h,
                                    onMouseLeave: v,
                                    onMouseDown: f,
                                    onMouseUp: b,
                                    onClick: t,
                                },
                                g,
                            ),
                            'info' !== D && a().createElement('div', { className: pu.shine }),
                            a().createElement(
                                'div',
                                {
                                    className: F()(
                                        pu.icon,
                                        pu[`icon__${D}`],
                                        pu[`icon__${A}`],
                                        null == s ? void 0 : s.icon,
                                    ),
                                },
                                a().createElement('div', { className: F()(pu.glow, null == s ? void 0 : s.glow) }),
                            ),
                            a().createElement(
                                'div',
                                { className: F()(pu.caption, pu[`caption__${D}`], null == s ? void 0 : s.caption) },
                                e,
                            ),
                            r && a().createElement('div', { className: F()(pu.goto, null == s ? void 0 : s.goto) }, r),
                        );
                    },
                    fu = (u = 1) => {
                        const e = new Error().stack;
                        let t,
                            n = R.invalid('resId'),
                            a = '';
                        var r;
                        e &&
                            ((a = (null == (r = e.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                            (t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (n = window.subViews[t].id));
                        return { callerUrl: a, caller: t, stack: e, resId: n };
                    };
                var bu = t(916);
                const wu = [
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
                function Tu(u) {
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
                const xu = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: bu.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Su = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            a = u.args,
                            r = u.onMouseEnter,
                            o = u.onMouseLeave,
                            s = u.onMouseDown,
                            i = u.onClick,
                            l = u.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = u.ignoreMouseClick,
                            E = void 0 !== d && d,
                            A = u.decoratorId,
                            m = void 0 === A ? 0 : A,
                            F = u.isEnabled,
                            D = void 0 === F || F,
                            _ = u.targetId,
                            B = void 0 === _ ? 0 : _,
                            C = u.onShow,
                            p = u.onHide,
                            g = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, wu);
                        const h = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, n.useMemo)(() => B || fu().resId, [B]),
                            f = (0, n.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (xu(t, m, { isMouseEvent: !0, on: !0, arguments: Tu(a) }, v),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, m, a, v, C]),
                            b = (0, n.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const u = h.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (h.current.timeoutId = 0)),
                                        xu(t, m, { on: !1 }, v),
                                        h.current.isVisible && p && p(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, m, v, p]),
                            w = (0, n.useCallback)((u) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(h.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const u = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', w, { capture: !0 }),
                                        u && window.clearTimeout(u));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === D && b();
                            }, [D, b]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        (window.removeEventListener('mouseleave', b), b());
                                    }
                                ),
                                [b],
                            ));
                        return D
                            ? (0, n.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      (clearTimeout(h.current.timeoutId),
                                                      (h.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                      r && r(u),
                                                      T && T(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              (b(), null == o || o(e), null == u || u(e));
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              (!1 === E && b(), null == i || i(e), null == u || u(e));
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              (!1 === E && b(), null == s || s(e), null == u || u(e));
                                          })(e.props.onMouseDown),
                                      },
                                      g,
                                  ),
                              )
                            : e;
                        var T;
                    };
                var Mu = t(521);
                const yu = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Lu(u = Mu.n.NONE, e = yu, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (u !== Mu.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (!a && o.O.view.isEventHandled()) return;
                                (o.O.view.setEventHandled(), e(n), t && n.stopPropagation());
                            }
                        }
                    }, [e, u, t, a]);
                }
                var ku = t(515);
                let Ru, Ou, Nu, Iu;
                function Pu() {}
                (!(function (u) {
                    ((u.empty = 'empty'), (u.selected = 'selected'), (u.disabled = 'disabled'));
                })(Ru || (Ru = {})),
                    (function (u) {
                        ((u.none = 'none'), (u.premium = 'premium'), (u.wotplus = 'wotplus'));
                    })(Ou || (Ou = {})),
                    (function (u) {
                        ((u.MAPS_BLACKLIST_SLOT_STATE_ACTIVE = 'active'),
                            (u.MAPS_BLACKLIST_SLOT_STATE_CHANGE = 'change'),
                            (u.MAPS_BLACKLIST_SLOT_STATE_DISABLED = 'disabled'),
                            (u.MAPS_BLACKLIST_SLOT_STATE_COOLDOWN = 'cooldown'),
                            (u.MAPS_BLACKLIST_SLOT_STATE_SELECTED = 'selected'),
                            (u.MAPS_BLACKLIST_SLOT_STATE_ACTIVE_NO_HOVER = 'active_no_hover'));
                    })(Nu || (Nu = {})),
                    (function (u) {
                        ((u.none = 'none'), (u.premium = 'premium'), (u.wotplus = 'wotplus'));
                    })(Iu || (Iu = {})));
                function Hu(u) {
                    return u;
                }
                function Wu() {
                    return !1;
                }
                console.log;
                var Vu = t(174);
                function Uu(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return $u(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return $u(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var n = 0;
                        return function () {
                            return n >= u.length ? { done: !0 } : { done: !1, value: u[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function $u(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = new Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const ju = (u) => (0 === u ? window : window.subViews.get(u));
                const Gu = () => (u, e) => {
                    const t = (0, n.createContext)({});
                    return [
                        function ({ mode: r = 'real', options: s, children: i, mocks: l }) {
                            const c = (0, n.useRef)([]),
                                d = (t, n, a) => {
                                    var r;
                                    const s = (function ({
                                            initializer: u = !0,
                                            rootId: e = 0,
                                            getRoot: t = ju,
                                            context: n = 'model',
                                        } = {}) {
                                            const a = new Map();
                                            function r(u, e = 0) {
                                                viewEnv.removeDataChangedCallback(u, e)
                                                    ? a.delete(u)
                                                    : console.error("Can't remove callback by id:", u);
                                            }
                                            engine.whenReady.then(() => {
                                                engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                    t.forEach((e) => {
                                                        const t = a.get(e);
                                                        void 0 !== t && t(u);
                                                    });
                                                });
                                            });
                                            const s = (u) => {
                                                const a = t(e),
                                                    r = n.split('.').reduce((u, e) => u[e], a);
                                                return 'string' != typeof u || 0 === u.length
                                                    ? r
                                                    : u.split('.').reduce((u, e) => {
                                                          const t = u[e];
                                                          return 'function' == typeof t ? t.bind(u) : t;
                                                      }, r);
                                            };
                                            return {
                                                subscribe: (t, r) => {
                                                    const i = 'string' == typeof r ? `${n}.${r}` : n,
                                                        l = o.O.view.addModelObserver(i, e, !0);
                                                    return (a.set(l, t), u && t(s(r)), l);
                                                },
                                                readByPath: s,
                                                createCallback: (u, e) => {
                                                    const t = s(e);
                                                    return (...e) => {
                                                        t(u(...e));
                                                    };
                                                },
                                                createCallbackNoArgs: (u) => {
                                                    const e = s(u);
                                                    return () => {
                                                        e();
                                                    };
                                                },
                                                dispose: function () {
                                                    for (var u, t = Uu(a.keys()); !(u = t()).done; ) r(u.value, e);
                                                },
                                                unsubscribe: r,
                                            };
                                        })(n),
                                        i =
                                            'real' === t
                                                ? s
                                                : Object.assign({}, s, {
                                                      readByPath:
                                                          null != (r = null == a ? void 0 : a.getter) ? r : () => {},
                                                  }),
                                        l = (u) =>
                                            'mocks' === t ? (null == a ? void 0 : a.getter(u)) : i.readByPath(u),
                                        d = (u) => c.current.push(u),
                                        E = u({
                                            mode: t,
                                            readByPath: l,
                                            externalModel: i,
                                            observableModel: {
                                                dict: (u) => {
                                                    const e = l(u),
                                                        n = Vu.LO.box(e, { equals: Wu });
                                                    return (
                                                        'real' === t &&
                                                            i.subscribe(
                                                                (0, Vu.aD)((u) => n.set(u)),
                                                                u,
                                                            ),
                                                        n
                                                    );
                                                },
                                                array: (u, e) => {
                                                    const n = null != e ? e : l(u),
                                                        a = Vu.LO.box(n, { equals: Wu });
                                                    return (
                                                        'real' === t &&
                                                            i.subscribe(
                                                                (0, Vu.aD)((u) => a.set(u)),
                                                                u,
                                                            ),
                                                        a
                                                    );
                                                },
                                                object: (u, e) => {
                                                    const n = null != e ? e : l(u),
                                                        a = Vu.LO.box(n, { equals: Wu });
                                                    return (
                                                        'real' === t &&
                                                            i.subscribe(
                                                                (0, Vu.aD)((u) => a.set(u)),
                                                                u,
                                                            ),
                                                        a
                                                    );
                                                },
                                                primitives: (u, e) => {
                                                    const n = l(e);
                                                    if (Array.isArray(u)) {
                                                        const a = u.reduce(
                                                            (u, e) => ((u[e] = Vu.LO.box(n[e], {})), u),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Vu.aD)((e) => {
                                                                        u.forEach((u) => {
                                                                            a[u].set(e[u]);
                                                                        });
                                                                    }),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = u,
                                                            r = Object.entries(a),
                                                            o = r.reduce(
                                                                (u, [e, t]) => ((u[t] = Vu.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Vu.aD)((u) => {
                                                                        r.forEach(([e, t]) => {
                                                                            o[t].set(u[e]);
                                                                        });
                                                                    }),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: d,
                                        }),
                                        A = { mode: t, model: E, externalModel: i, cleanup: d };
                                    return {
                                        model: E,
                                        controls: 'mocks' === t && a ? a.controls(A) : e(A),
                                        externalModel: i,
                                        mode: t,
                                    };
                                },
                                E = (0, n.useRef)(!1),
                                A = (0, n.useState)(r),
                                m = A[0],
                                F = A[1],
                                D = (0, n.useState)(() => d(r, s, l)),
                                _ = D[0],
                                B = D[1];
                            return (
                                (0, n.useEffect)(() => {
                                    E.current ? B(d(m, s, l)) : (E.current = !0);
                                }, [l, m, s]),
                                (0, n.useEffect)(() => {
                                    F(r);
                                }, [r]),
                                (0, n.useEffect)(
                                    () => () => {
                                        (_.externalModel.dispose(), c.current.forEach((u) => u()));
                                    },
                                    [_],
                                ),
                                a().createElement(t.Provider, { value: _ }, i)
                            );
                        },
                        () => (0, n.useContext)(t),
                    ];
                };
                function zu(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, n) => e(null == u ? void 0 : u.value, t, n));
                }
                var Ku = t(946);
                const qu = Gu()(
                        ({ observableModel: u }) => {
                            const e = {
                                    filterInfo: u.primitives(['mapsSelected', 'mapsTotal', 'isFilterApplied']),
                                    cooldownTime: u.primitives(['cooldownTime']),
                                },
                                t = (0, Ku.Om)(
                                    () => {
                                        const e = zu(u.array('disabledMaps.items').get(), (u) => Object.assign({}, u)),
                                            t = e.some(
                                                (u) =>
                                                    u.slotType === Ou.wotplus &&
                                                    u.state === Nu.MAPS_BLACKLIST_SLOT_STATE_DISABLED,
                                            ),
                                            a = e.some(
                                                (u) =>
                                                    u.slotType === Ou.premium &&
                                                    u.state === Nu.MAPS_BLACKLIST_SLOT_STATE_DISABLED,
                                            );
                                        return t && a
                                            ? R.strings.excluded_maps.unlock.both(n())
                                            : t && !a
                                              ? R.strings.excluded_maps.unlock.wotplus(n())
                                              : a && !t
                                                ? R.strings.excluded_maps.unlock.premium()
                                                : void 0;
                                    },
                                    { equals: Wu },
                                ),
                                n = (0, Ku.Om)(
                                    () =>
                                        (function (u, e) {
                                            if (Array.isArray(u)) return u.filter(e);
                                            const t = [];
                                            for (let a = 0; a < u.length; a++) {
                                                var n;
                                                const r = null == (n = u[a]) ? void 0 : n.value;
                                                e(r, a, u) && t.push(r);
                                            }
                                            return t;
                                        })(u.array('disabledMaps.items').get(), (u) => u.slotType === Ou.wotplus)
                                            .length,
                                    { equals: Wu },
                                ),
                                a = (0, Ku.Om)(() => e.cooldownTime.cooldownTime.get() - Date.now() / 1e3 >= 0, {
                                    equals: Wu,
                                });
                            return Object.assign(
                                { computes: { getIsInCooldown: a, getFooterText: t, getWotPlusSlotsCount: n } },
                                e,
                            );
                        },
                        ({ externalModel: u }) => ({
                            onBackAction: u.createCallbackNoArgs('onBackAction'),
                            onMapAddToBlacklist: u.createCallback((u) => ({ mapId: u }), 'onMapAddToBlacklistEvent'),
                            onMapRemoveFromBlacklist: u.createCallback(
                                (u) => ({ mapId: u }),
                                'onMapRemoveFromBlacklistEvent',
                            ),
                            onFilterReset: u.createCallbackNoArgs('onFilterReset'),
                            onFilterClick: u.createCallback((u) => ({ seasonID: u }), 'onFilterClick'),
                            onShopOpenPremium: u.createCallbackNoArgs('onShopOpenPremium'),
                            onShopOpenWotPlus: u.createCallbackNoArgs('onShopOpenWotPlus'),
                        }),
                    ),
                    Yu = qu[0],
                    Xu = qu[1],
                    Zu = {
                        get header() {
                            return R.strings.excluded_maps.header.title();
                        },
                        get filterTooltipDesc() {
                            return R.strings.excluded_maps.filtersTooltip.desc();
                        },
                        get cooldownHeader() {
                            return R.strings.excluded_maps.header.cooldown();
                        },
                        get totalMapsDisplayed() {
                            return R.strings.excluded_maps.totalMapsDisplayed();
                        },
                        get filteredMapsDisplayed() {
                            return R.strings.excluded_maps.filteredMapsDisplayed();
                        },
                        get backButtonLabel() {
                            return R.strings.excluded_maps.backButton.label();
                        },
                        get backButtonTo() {
                            return R.strings.excluded_maps.backButton.to();
                        },
                        get mapsFilterLabel() {
                            return R.strings.excluded_maps.mapsFilterLabel();
                        },
                        get hoverExclude() {
                            return R.strings.excluded_maps.mapTile.hoverExclude();
                        },
                        get hoverExcludeButton() {
                            return R.strings.excluded_maps.mapTile.hoverExcludeButton();
                        },
                        get hoverInclude() {
                            return R.strings.excluded_maps.mapTile.hoverInclude();
                        },
                        get hoverIncludeButton() {
                            return R.strings.excluded_maps.mapTile.hoverIncludeButton();
                        },
                        get cooldownTooltipBody() {
                            return R.strings.excluded_maps.mapTile.cooldownTooltipBody();
                        },
                        get cooldownTooltipHeader() {
                            return R.strings.excluded_maps.mapTile.cooldownTooltipHeader();
                        },
                        get notSelected() {
                            return R.strings.excluded_maps.notSelected();
                        },
                    };
                var Qu = t(613);
                const Ju = 1e3,
                    ue = 60,
                    ee = 3600,
                    te = 86400;
                (Date.now(), Qu.Ew.getRegionalDateTime, Qu.Ew.getFormattedDateTime);
                function ne(u = 0) {
                    let e = u;
                    const t = Math.trunc(e / te);
                    e -= t * te;
                    const n = Math.trunc(e / ee);
                    e -= n * ee;
                    const a = Math.trunc(e / ue);
                    return ((e -= a * ue), { days: t, hours: n, minutes: a, seconds: e });
                }
                const ae = () => {},
                    re = (u = 0, e, t = 0, a = ae) => {
                        const r = (0, n.useState)(u),
                            o = r[0],
                            s = r[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (u > 0) {
                                    s(u);
                                    const n = Date.now(),
                                        r = setInterval(
                                            () => {
                                                const e = u - Math.floor((Date.now() - n) / Ju);
                                                null !== t && e <= t ? (s(t), a && a(), clearInterval(r)) : s(e);
                                            },
                                            (e || (u > 120 ? ue : 1)) * Ju,
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [u, e, t, a]),
                            o
                        );
                    },
                    oe = (u) =>
                        u.days > 0
                            ? O(R.strings.common.duration.days(), { days: u.days })
                            : u.hours > 0
                              ? O(R.strings.common.duration.hours(), { hours: u.hours })
                              : u.minutes > 0
                                ? O(R.strings.common.duration.minutes(), { minutes: u.minutes })
                                : O(R.strings.common.duration.seconds(), { seconds: u.seconds }),
                    se =
                        ((0, n.memo)(({ duration: u }) => {
                            const e = u >= 0 ? oe(ne(u)) : R.strings.common.duration.unlimited();
                            return a().createElement('span', null, e);
                        }),
                        (u) => {
                            const e = R.strings.arenas;
                            return e[`c_${u.mapId}`] && e[`c_${u.mapId}`].name() ? e[`c_${u.mapId}`].name() : '';
                        }),
                    ie = (u) => {
                        const e = R.images.gui.maps.icons.map;
                        return e[`c_${u.mapId}`] ? e[`c_${u.mapId}`]() : '';
                    },
                    le = (u) => {
                        const e = Object.assign({}, u);
                        return (
                            e.hours > 0 && e.minutes > 0 && e.hours++,
                            e.seconds > 0 && e.minutes++,
                            e.seconds < 0 && e.seconds,
                            oe(e)
                        );
                    },
                    ce = (u) =>
                        u.hours > 0 && u.minutes > 0
                            ? `${O(R.strings.common.duration.hours(), { hours: u.hours })} ${O(R.strings.common.duration.minutes(), { minutes: u.minutes })}`
                            : le(u),
                    de = 'CooldownHeader_base_54',
                    Ee = 'CooldownHeader_endTime_02',
                    Ae = (0, ku.Pi)(({ className: u }) => {
                        const e = Xu().model.cooldownTime.cooldownTime.get() - Date.now() / 1e3,
                            t = re(e),
                            n = ne(Math.max(t, ue)),
                            r = { cooldownEndTime: a().createElement('span', { className: Ee }, le(n)) };
                        return a().createElement(
                            'div',
                            { className: F()(de, u) },
                            a().createElement(j, { text: Zu.cooldownHeader, binding: r }),
                        );
                    }),
                    me = {
                        base: 'ExcludedMapsViewApp_base_a0',
                        base__paddings: 'ExcludedMapsViewApp_base__paddings_fc',
                        backButton: 'ExcludedMapsViewApp_backButton_20',
                        headerBlock: 'ExcludedMapsViewApp_headerBlock_1a',
                        infoIcon: 'ExcludedMapsViewApp_infoIcon_0f',
                        headerBlock__padding: 'ExcludedMapsViewApp_headerBlock__padding_a6',
                        header: 'ExcludedMapsViewApp_header_fe',
                        slotsContainer: 'ExcludedMapsViewApp_slotsContainer_14',
                        filterContainer: 'ExcludedMapsViewApp_filterContainer_4f',
                        filterContainer_middle: 'ExcludedMapsViewApp_filterContainer_middle_5a',
                        filterContainer_lockedStage: 'ExcludedMapsViewApp_filterContainer_lockedStage_68',
                        link: 'ExcludedMapsViewApp_link_2a',
                        glow: 'ExcludedMapsViewApp_glow_30',
                        filterControls: 'ExcludedMapsViewApp_filterControls_e2',
                        mainContainer: 'ExcludedMapsViewApp_mainContainer_d8',
                        maps: 'ExcludedMapsViewApp_maps_68',
                        scrollArea: 'ExcludedMapsViewApp_scrollArea_4c',
                        scrollBar: 'ExcludedMapsViewApp_scrollBar_f4',
                        mapTile: 'ExcludedMapsViewApp_mapTile_05',
                        divider: 'ExcludedMapsViewApp_divider_1a',
                        divider_bottom: 'ExcludedMapsViewApp_divider_bottom_ab',
                    };
                let Fe, De;
                (!(function (u) {
                    ((u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost'));
                })(Fe || (Fe = {})),
                    (function (u) {
                        ((u.extraSmall = 'extraSmall'),
                            (u.small = 'small'),
                            (u.medium = 'medium'),
                            (u.large = 'large'));
                    })(De || (De = {})));
                const _e = {
                    base: 'ToggleButton_base_2c',
                    base__button: 'ToggleButton_base__button_cb',
                    base__active: 'ToggleButton_base__active_a6',
                    base__slot: 'ToggleButton_base__slot_98',
                    base__disabled: 'ToggleButton_base__disabled_19',
                    texture: 'ToggleButton_texture_f1',
                    background: 'ToggleButton_background_ef',
                    background__main: 'ToggleButton_background__main_68',
                    background__primary: 'ToggleButton_background__primary_a9',
                    background__primaryGreen: 'ToggleButton_background__primaryGreen_4f',
                    background__primaryRed: 'ToggleButton_background__primaryRed_ca',
                    background__secondary: 'ToggleButton_background__secondary_b2',
                    background__ghost: 'ToggleButton_background__ghost_d6',
                    content: 'ToggleButton_content_63',
                    overlay: 'ToggleButton_overlay_23',
                    indicator: 'ToggleButton_indicator_a7',
                };
                let Be;
                !(function (u) {
                    ((u.Button = 'button'), (u.Slot = 'slot'));
                })(Be || (Be = {}));
                const Ce = () => {},
                    pe = a().memo(
                        ({
                            active: u = !1,
                            className: e,
                            children: t,
                            toggleType: r = Be.Button,
                            toggleButtonType: o = Fe.secondary,
                            onClick: s,
                            disabled: i,
                            soundClick: l = 'play',
                            soundHover: c = 'highlight',
                            onMouseEnter: d = Ce,
                            onMouseDown: E = Ce,
                            onMouseUp: A = Ce,
                            onMouseLeave: m = Ce,
                        }) => {
                            const D = (0, n.useCallback)(
                                    (e) => {
                                        i || (tu(l), s && s(e, u));
                                    },
                                    [s, i, u, l],
                                ),
                                _ = (0, n.useCallback)(
                                    (u) => {
                                        i || (tu(c), d && d(u));
                                    },
                                    [i, c, d],
                                ),
                                B = (0, n.useCallback)(
                                    (u) => {
                                        i || ((1 !== u.button && 2 !== u.button) || (null !== l && tu(l)), E && E(u));
                                    },
                                    [E, i, l],
                                ),
                                C = F()(_e.base, e, _e[`base__${r}`], u && _e.base__active, i && _e.base__disabled);
                            return a().createElement(
                                'div',
                                {
                                    className: C,
                                    onClick: D,
                                    onMouseEnter: _,
                                    onMouseUp: i ? Ce : A,
                                    onMouseDown: B,
                                    onMouseLeave: i ? Ce : m,
                                },
                                a().createElement('div', { className: _e.content }, t),
                                r === Be.Button &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('div', {
                                            className: F()(_e.background, _e[`background__${o}`]),
                                        }),
                                        a().createElement('div', { className: _e.texture }),
                                    ),
                                a().createElement('div', { className: _e.overlay }),
                                a().createElement('div', { className: _e.indicator }),
                            );
                        },
                    ),
                    ge = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function he() {
                    return (
                        (he =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        he.apply(this, arguments)
                    );
                }
                const ve = R.views.common.tooltip_window.simple_tooltip_content,
                    fe = (u) => {
                        let e = u.children,
                            t = u.body,
                            r = u.header,
                            o = u.note,
                            s = u.alert,
                            i = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, ge);
                        const c = (0, n.useMemo)(() => {
                            const u = Object.assign({}, i, { body: t, header: r, note: o, alert: s });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [s, t, r, o, i]);
                        return a().createElement(
                            Su,
                            he(
                                {
                                    contentId:
                                        ((d = null == i ? void 0 : i.hasHtmlContent),
                                        d ? ve.SimpleTooltipHtmlContent('resId') : ve.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            e,
                        );
                        var d;
                    },
                    be = (u, e) => !['$dyn', '$num', '$plural'].includes(u) && u in e,
                    we = { base: 'FilterControls_base_17', filterButton: 'FilterControls_filterButton_f4' },
                    Te = Gu()(({ observableModel: u }) => {
                        const e = { mapFilters: u.array('items', []) },
                            t = (0, Ku.Om)(() => zu(e.mapFilters.get(), Hu), { equals: Wu });
                        return Object.assign({ computes: { getMapFilters: t } }, e);
                    }, Pu),
                    xe = Te[0],
                    Se = Te[1],
                    Me = (u) => {
                        const e = R.images.gui.maps.icons.customization.items_popover,
                            t = u + '16x16';
                        return be(t, e) ? e[t]() : '';
                    },
                    ye = (u) => {
                        const e = R.strings.excluded_maps.filtersTooltip.header;
                        return be(u, e) ? e[u]() : '';
                    },
                    Le = (0, ku.Pi)(({ onFilterClick: u }) => {
                        const e = Se().model.computes.getMapFilters();
                        return a().createElement(
                            'div',
                            { className: we.base },
                            a().createElement('div', { className: we.filterLabel }, Zu.mapsFilterLabel),
                            e.map((e) =>
                                a().createElement(
                                    fe,
                                    { key: e.filterID, header: ye(e.filterName), body: Zu.filterTooltipDesc },
                                    a().createElement(
                                        pe,
                                        {
                                            active: e.selected,
                                            onClick: () => u(e.filterID),
                                            className: we.filterButton,
                                        },
                                        a().createElement('img', { src: Me(e.filterName) }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    ke = { context: 'model.mapsFilters' },
                    Re = ({ onFilterClick: u }) =>
                        a().createElement(xe, { options: ke }, a().createElement(Le, { onFilterClick: u }));
                let Oe;
                !(function (u) {
                    ((u[(u.LEFT = 0)] = 'LEFT'),
                        (u[(u.WHEEL = 1)] = 'WHEEL'),
                        (u[(u.RIGHT = 2)] = 'RIGHT'),
                        (u[(u.FOURTH = 3)] = 'FOURTH'),
                        (u[(u.FIFTH = 4)] = 'FIFTH'));
                })(Oe || (Oe = {}));
                const Ne = {
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
                    },
                    Ie = ({
                        children: u,
                        size: e,
                        disabled: t,
                        mixClass: r,
                        onMouseEnter: o,
                        onMouseMove: s,
                        onMouseDown: i,
                        onMouseUp: l,
                        onMouseLeave: c,
                        onClick: d,
                        isFocused: E = !1,
                        type: A = Fe.primary,
                        soundHover: m = 'highlight',
                        soundClick: D = 'play',
                    }) => {
                        const _ = (0, n.useRef)(null),
                            B = (0, n.useState)(E),
                            C = B[0],
                            p = B[1],
                            g = (0, n.useState)(!1),
                            h = g[0],
                            v = g[1];
                        return (
                            (0, n.useEffect)(() => {
                                function u(u) {
                                    C && null !== _.current && !_.current.contains(u.target) && p(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', u),
                                    () => {
                                        document.removeEventListener('mousedown', u);
                                    }
                                );
                            }, [C]),
                            (0, n.useEffect)(() => {
                                p(E);
                            }, [E]),
                            a().createElement(
                                'div',
                                {
                                    ref: _,
                                    className: F()(
                                        Ne.base,
                                        Ne[`base__${A}`],
                                        t && Ne.base__disabled,
                                        e && Ne[`base__${e}`],
                                        C && Ne.base__focus,
                                        h && Ne.base__highlightActive,
                                        r,
                                    ),
                                    onMouseEnter: function (u) {
                                        t || (null !== m && tu(m), o && o(u));
                                    },
                                    onMouseMove: function (u) {
                                        s && s(u);
                                    },
                                    onMouseUp: function (u) {
                                        t || (l && l(u), v(!1));
                                    },
                                    onMouseDown: function (u) {
                                        if (t) return;
                                        const e = u.button === Oe.LEFT;
                                        (null !== D && e && tu(D),
                                            i && i(u),
                                            E && (t || (_.current && (_.current.focus(), p(!0)))),
                                            e && v(!0));
                                    },
                                    onMouseLeave: function (u) {
                                        t || (c && c(u), v(!1));
                                    },
                                    onClick: function (u) {
                                        t || (d && d(u));
                                    },
                                },
                                A !== Fe.ghost &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('div', { className: Ne.back }),
                                        a().createElement('span', { className: Ne.texture }),
                                    ),
                                a().createElement(
                                    'span',
                                    { className: F()(Ne.state, Ne.state__default) },
                                    a().createElement('span', { className: Ne.stateDisabled }),
                                    a().createElement('span', { className: Ne.stateHighlightHover }),
                                    a().createElement('span', { className: Ne.stateHighlightActive }),
                                ),
                                a().createElement(
                                    'span',
                                    { className: Ne.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    u,
                                ),
                            )
                        );
                    },
                    Pe = 'MapCounter_base_ef',
                    He = 'MapCounter_highlightedCount_5a',
                    We = 'MapCounter_label_73',
                    Ve = 'MapCounter_clearButton_26',
                    Ue = 'MapCounter_clearButton__hidden_63',
                    $e = 'MapCounter_closeIcon_0a',
                    je = 'MapCounter_filterGlow_8c',
                    Ge = (0, ku.Pi)(() => {
                        const u = Xu(),
                            e = u.model,
                            t = u.controls,
                            n = e.filterInfo.isFilterApplied.get(),
                            r = e.filterInfo.mapsSelected.get(),
                            o = e.filterInfo.mapsTotal.get(),
                            s = t.onFilterReset;
                        return a().createElement(
                            'div',
                            { className: Pe },
                            n
                                ? a().createElement(
                                      a().Fragment,
                                      null,
                                      a().createElement(j, {
                                          text: Zu.filteredMapsDisplayed,
                                          classMix: We,
                                          binding: { count: a().createElement('span', { className: He }, r), total: o },
                                      }),
                                      a().createElement('img', {
                                          src: R.images.gui.maps.icons.excluded_maps.filter_glow(),
                                          className: je,
                                      }),
                                  )
                                : a().createElement(j, {
                                      text: Zu.totalMapsDisplayed,
                                      classMix: We,
                                      binding: { count: a().createElement('span', { className: He }, o) },
                                  }),
                            a().createElement(
                                Ie,
                                { type: 'ghost', mixClass: F()(Ve, !n && Ue), onClick: () => s() },
                                a().createElement('img', {
                                    src: R.images.gui.maps.icons.library.cross(),
                                    className: $e,
                                }),
                            ),
                        );
                    }),
                    ze = 'MapTile_base_fe',
                    Ke = 'MapTile_glowFrame_4e',
                    qe = 'MapTile_mapCross_da',
                    Ye = 'MapTile_lockIcon_bb',
                    Xe = 'MapTile_hoverText_35',
                    Ze = 'MapTile_mapOverlay_5c',
                    Qe = 'MapTile_base__available_d2',
                    Je = 'MapTile_hoverOverlay_93',
                    ut = 'MapTile_base__excluded_3c',
                    et = 'MapTile_hoverButton_d3',
                    tt = 'MapTile_base__cooldown_d6',
                    nt = 'MapTile_mapImage_c8',
                    at = 'MapTile_disabledTile_ec',
                    rt = 'MapTile_mapName_d1',
                    ot = 'MapTile_base__disabled_95',
                    st = 'MapTile_hoverMapName_db',
                    it = 'MapTile_hoverButtonContainer_bf',
                    lt = ({
                        state: u,
                        mapId: e,
                        onMapAddToBlacklist: t,
                        onMapRemoveFromBlacklist: r,
                        className: o,
                    }) => {
                        const s = se({ mapId: e }),
                            i = F()(
                                o,
                                ze,
                                u === Nu.MAPS_BLACKLIST_SLOT_STATE_ACTIVE && Qe,
                                u === Nu.MAPS_BLACKLIST_SLOT_STATE_COOLDOWN && tt,
                                u === Nu.MAPS_BLACKLIST_SLOT_STATE_CHANGE && ut,
                                u === Nu.MAPS_BLACKLIST_SLOT_STATE_DISABLED && ot,
                            ),
                            l = (0, n.useMemo)(
                                () => ({ mapName: a().createElement('span', { className: st }, s) }),
                                [s],
                            );
                        return u === Nu.MAPS_BLACKLIST_SLOT_STATE_ACTIVE
                            ? a().createElement(
                                  'div',
                                  { className: i },
                                  a().createElement('img', { src: ie({ mapId: e }), className: nt }),
                                  a().createElement('img', {
                                      src: R.images.gui.maps.icons.excluded_maps.map_shadow(),
                                      className: Ze,
                                  }),
                                  a().createElement('div', { className: rt }, se({ mapId: e })),
                                  a().createElement(
                                      'div',
                                      { className: Je },
                                      a().createElement(
                                          'div',
                                          null,
                                          a().createElement(j, { text: Zu.hoverExclude, binding: l, classMix: Xe }),
                                      ),
                                      a().createElement(
                                          'div',
                                          { className: it },
                                          a().createElement(
                                              Ie,
                                              { mixClass: et, onClick: () => t(e) },
                                              Zu.hoverExcludeButton,
                                          ),
                                      ),
                                  ),
                              )
                            : u === Nu.MAPS_BLACKLIST_SLOT_STATE_COOLDOWN
                              ? a().createElement(
                                    fe,
                                    { header: Zu.cooldownTooltipHeader, body: Zu.cooldownTooltipBody },
                                    a().createElement(
                                        'div',
                                        { className: i },
                                        a().createElement('img', { src: ie({ mapId: e }), className: nt }),
                                        a().createElement('img', {
                                            src: R.images.gui.maps.icons.excluded_maps.map_shadow(),
                                            className: Ze,
                                        }),
                                        a().createElement('div', { className: at }),
                                        a().createElement('img', {
                                            src: R.images.gui.maps.icons.excluded_maps.map_glow_frame(),
                                            className: Ke,
                                        }),
                                        a().createElement('img', {
                                            src: R.images.gui.maps.icons.excluded_maps.map_deleted_cross(),
                                            className: qe,
                                        }),
                                        a().createElement('div', { className: rt }, se({ mapId: e })),
                                        a().createElement('img', {
                                            src: R.images.gui.maps.icons.excluded_maps.icon_lock(),
                                            className: Ye,
                                        }),
                                    ),
                                )
                              : u === Nu.MAPS_BLACKLIST_SLOT_STATE_CHANGE
                                ? a().createElement(
                                      'div',
                                      { className: i },
                                      a().createElement('img', { src: ie({ mapId: e }), className: nt }),
                                      a().createElement('img', {
                                          src: R.images.gui.maps.icons.excluded_maps.map_shadow(),
                                          className: Ze,
                                      }),
                                      a().createElement('img', {
                                          src: R.images.gui.maps.icons.excluded_maps.map_glow_frame(),
                                          className: Ke,
                                      }),
                                      a().createElement('img', {
                                          src: R.images.gui.maps.icons.excluded_maps.map_deleted_cross(),
                                          className: qe,
                                      }),
                                      a().createElement('div', { className: rt }, se({ mapId: e })),
                                      a().createElement(
                                          'div',
                                          { className: Je },
                                          a().createElement(
                                              'div',
                                              null,
                                              a().createElement(j, { text: Zu.hoverInclude, binding: l, classMix: Xe }),
                                          ),
                                          a().createElement(
                                              'div',
                                              { className: it },
                                              a().createElement(
                                                  Ie,
                                                  { mixClass: et, onClick: () => r(e) },
                                                  Zu.hoverIncludeButton,
                                              ),
                                          ),
                                      ),
                                  )
                                : a().createElement(
                                      fe,
                                      { header: Zu.cooldownTooltipHeader, body: Zu.cooldownTooltipBody },
                                      a().createElement(
                                          'div',
                                          { className: i },
                                          a().createElement('img', { src: ie({ mapId: e }), className: nt }),
                                          a().createElement('img', {
                                              src: R.images.gui.maps.icons.excluded_maps.map_shadow(),
                                              className: Ze,
                                          }),
                                          a().createElement('div', { className: rt }, se({ mapId: e })),
                                      ),
                                  );
                    },
                    ct = Gu()(({ observableModel: u }) => {
                        const e = { maps: u.array('items', []) },
                            t = (0, Ku.Om)(() => zu(e.maps.get(), Hu).filter((u) => u.filtered), { equals: Wu });
                        return Object.assign({ computes: { getMaps: t } }, e);
                    }, Pu),
                    dt = ct[0],
                    Et = ct[1],
                    At = (0, ku.Pi)(({ className: u, onMapAddToBlacklist: e, onMapRemoveFromBlacklist: t }) => {
                        const n = Et().model.computes.getMaps();
                        return a().createElement(
                            'div',
                            { className: u },
                            n.map((u) =>
                                a().createElement(lt, {
                                    mapCooldownTime: u.cooldownTime,
                                    mapId: u.mapId,
                                    state: u.state,
                                    onMapAddToBlacklist: e,
                                    onMapRemoveFromBlacklist: t,
                                    className: me.mapTile,
                                    key: u.mapId,
                                }),
                            ),
                        );
                    }),
                    mt = { context: 'model.maps' },
                    Ft = (0, n.memo)(function ({ className: u, onMapAddToBlacklist: e, onMapRemoveFromBlacklist: t }) {
                        return a().createElement(
                            dt,
                            { options: mt },
                            a().createElement(At, {
                                className: u,
                                onMapAddToBlacklist: e,
                                onMapRemoveFromBlacklist: t,
                            }),
                        );
                    });
                const Dt = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    _t = (u) => {
                        const e = (0, n.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    Bt = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    Ct = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    pt = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const n = Dt(`${u}.${t}`, window);
                                return Bt(n) ? e(u, t, n) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    gt = (u) => {
                        const e = ((u) => {
                                const e = fu(),
                                    t = e.caller,
                                    n = e.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: Ct(a, u || ''), resId: n };
                            })(),
                            t = e.modelPrefix,
                            n = u.split('.');
                        if (n.length > 0) {
                            const u = [n[0]];
                            return (
                                n.reduce((e, n) => {
                                    const a = Dt(Ct(t, `${e}.${n}`), window);
                                    return Bt(a) ? (u.push(a.id), `${e}.${n}.value`) : (u.push(n), `${e}.${n}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    };
                const ht = () => (window.injected || (window.injected = new Map()), window.injected);
                const vt = bu.Sw.instance;
                let ft;
                !(function (u) {
                    ((u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep'));
                })(ft || (ft = {}));
                const bt = (u = 'model', e = ft.Deep) => {
                        const t = (0, n.useState)(0),
                            a = (t[0], t[1]),
                            r = (0, n.useMemo)(() => fu(), []),
                            o = r.callerUrl,
                            s = r.caller,
                            i = r.resId,
                            l = (0, n.useMemo)(() => {
                                const e = (function (u) {
                                    return ht().has(u);
                                })(o.replace('.js', '.html'));
                                return window.__feature && window.__feature !== s && !e ? `subViews.${s}.${u}` : u;
                            }, [o, s, u]),
                            c = (0, n.useState)(() =>
                                ((u) => {
                                    const e = Dt(u, window);
                                    for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                    return Bt(e) ? e.value : e;
                                })(pt(l)),
                            ),
                            d = c[0],
                            E = c[1],
                            A = (0, n.useRef)(-1);
                        return (
                            _t(() => {
                                if (
                                    ('boolean' == typeof e &&
                                        ((e = e ? ft.Deep : ft.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    e !== ft.None)
                                ) {
                                    const t = (u) => {
                                            ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                            e === ft.Deep
                                                ? (u === d && a((u) => u + 1), E(u))
                                                : E(Object.assign([], u));
                                        },
                                        n = gt(u);
                                    A.current = vt.addCallback(n, t, i, e === ft.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (e !== ft.None)
                                    return () => {
                                        vt.removeCallback(A.current, i);
                                    };
                            }, [i, e]),
                            d
                        );
                    },
                    wt = (bu.Sw.instance, {});
                function Tt(u, e, t, n = ft.Deep) {
                    const r = (r) => {
                        const o = r.path || e || void 0,
                            s = bt(o, (o && wt[o]) || !1 ? ft.None : n),
                            i = Object.assign({}, t(s, r), r);
                        return a().createElement(u, i);
                    };
                    var o;
                    return ((r.displayName = `WithModel(${((o = u), o.displayName || o.name || 'Component')})`), r);
                }
                const xt = 'ExcludedMapsBlock_base_6b',
                    St = 'ExcludedMapsBlock_base__disabled_68',
                    Mt = 'ExcludedMapsBlock_header_d4',
                    yt = 'ExcludedMapsBlock_base_background_03',
                    Lt = 'ExcludedMapsBlock_disabledPattern_09',
                    kt = 'ExcludedMapsBlock_lock_e8',
                    Rt = 'ExcludedMapsBlock_hover_b0',
                    Ot = 'ExcludedMapsBlock_disabledContent_b4',
                    Nt = 'ExcludedMapsBlock_unavailableText_d6',
                    It = 'ExcludedMapsBlock_slotContainer_b6',
                    Pt = 'SlotItem_base_5b',
                    Ht = 'SlotItem_base__reducedSize_7c',
                    Wt = 'SlotItem_mapImage_6b',
                    Vt = 'SlotItem_base__select_15',
                    Ut = 'SlotItem_base__disabled_88',
                    $t = 'SlotItem_base__replace_c5',
                    jt = 'SlotItem_base__wotPlus_7e',
                    Gt = 'SlotItem_mapTitle_a4',
                    zt = 'SlotItem_base__premium_85',
                    Kt = 'SlotItem_base__cooldown_6a',
                    qt = 'SlotItem_removeButton_25',
                    Yt = 'SlotItem_removeButton_icon_7e',
                    Xt = 'SlotItem_lock_fd',
                    Zt = 'SlotItem_timerContainer_91',
                    Qt = 'SlotItem_timerIcon_7c',
                    Jt = 'SlotItem_timerText_11',
                    un = R.strings.excluded_maps.notSelected(),
                    en = ({
                        isEnabled: u = !0,
                        isMapNameDisplayed: e,
                        tooltipStrings: t,
                        isReducedSize: n,
                        slotType: r,
                    }) => {
                        const o = r === Ou.wotplus,
                            s = r === Ou.premium,
                            i = o || s;
                        return u
                            ? a().createElement(
                                  fe,
                                  {
                                      header: (null == t ? void 0 : t.disabledTooltipHeader) || sn.selectTooltipHeader,
                                      body: (null == t ? void 0 : t.selectTooltipBody) || sn.selectTooltipBody,
                                  },
                                  a().createElement(
                                      'div',
                                      { className: F()(Pt, Vt, n && Ht), 'data-testid': 'slot' },
                                      e && a().createElement('div', { className: Gt }, un),
                                  ),
                              )
                            : a().createElement(
                                  fe,
                                  {
                                      header:
                                          (null == t ? void 0 : t.disabledTooltipHeader) || sn.disabledTooltipHeader,
                                      body: o
                                          ? (null == t ? void 0 : t.disabledTooltipBodyWotplus) ||
                                            sn.disabledTooltipBodyWotplus
                                          : (null == t ? void 0 : t.disabledTooltipBodyPremium) ||
                                            sn.disabledTooltipBodyPremium,
                                  },
                                  a().createElement(
                                      'div',
                                      { className: F()(Pt, Ut, o && jt, s && zt, n && Ht), 'data-testid': 'slot' },
                                      i && a().createElement('div', { className: Xt }),
                                      e &&
                                          o &&
                                          a().createElement(
                                              'div',
                                              { className: Gt },
                                              R.strings.excluded_maps.wotplus(),
                                          ),
                                      e &&
                                          s &&
                                          a().createElement(
                                              'div',
                                              { className: Gt },
                                              R.strings.excluded_maps.premium(),
                                          ),
                                  ),
                              );
                    },
                    tn = ['map'];
                const nn = (u) => {
                        let e = u.map,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, tn);
                        const n = Math.floor(e.cooldownEndTimeInSecs - Date.now() / Ju);
                        return (re(n), a().createElement(ln, Object.assign({ map: e }, t)));
                    },
                    an = ({
                        slotState: u,
                        cooldownEndTimeInSecs: e,
                        mapId: t,
                        slotType: n,
                        isMapNameDisplayed: r,
                        onRemoveButtonClick: o,
                        tooltipStrings: s,
                        MapSlotComponent: i = nn,
                        isReducedSize: l,
                    }) => {
                        if (u === Ru.selected)
                            return a().createElement(i, {
                                map: { slotState: u, cooldownEndTimeInSecs: e, mapId: t, slotType: n },
                                isMapNameDisplayed: r,
                                onRemoveButtonClick: o,
                                tooltipStrings: s,
                                isReducedSize: l,
                            });
                        const c = u !== Ru.disabled;
                        return a().createElement(en, {
                            isEnabled: c,
                            isMapNameDisplayed: r,
                            tooltipStrings: s,
                            isReducedSize: l,
                            slotType: n,
                        });
                    },
                    rn = Tt(
                        ({ className: u, path: e, excludedMaps: t }) => {
                            const n = t.length > 3;
                            return a().createElement(
                                'div',
                                { className: u },
                                t.map(
                                    ({ value: { cooldownEndTimeInSecs: u, mapId: t, slotState: r, slotType: o } }, s) =>
                                        a().createElement(an, {
                                            cooldownEndTimeInSecs: u,
                                            mapId: t,
                                            slotState: r,
                                            key: `${e}.${s}.id`,
                                            isReducedSize: n,
                                            slotType: o,
                                        }),
                                ),
                            );
                        },
                        null,
                        (u, e) => Object.assign({}, e, { excludedMaps: u }),
                    );
                function on() {
                    return (
                        (on =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        on.apply(this, arguments)
                    );
                }
                const sn = {
                        get header() {
                            return R.strings.account_dashboard.excludedMaps.header();
                        },
                        get disabledTooltipHeader() {
                            return R.strings.account_dashboard.excludedMaps.disabledTooltipHeader();
                        },
                        get disabledTooltipBodyWotplus() {
                            return R.strings.account_dashboard.excludedMaps.disabledTooltipBodyWotplus();
                        },
                        get disabledTooltipBodyPremium() {
                            return R.strings.account_dashboard.excludedMaps.disabledTooltipBodyPremium();
                        },
                        get selectTooltipHeader() {
                            return R.strings.account_dashboard.excludedMaps.selectTooltipHeader();
                        },
                        get selectTooltipBody() {
                            return R.strings.account_dashboard.excludedMaps.selectTooltipBody();
                        },
                        get cooldownTooltipHeader() {
                            return R.strings.account_dashboard.excludedMaps.cooldownTooltipHeader();
                        },
                        get cooldownTooltipBody() {
                            return R.strings.account_dashboard.excludedMaps.cooldownTooltipBody();
                        },
                        get replaceTooltipHeader() {
                            return R.strings.account_dashboard.excludedMaps.replaceTooltipHeader();
                        },
                        get replaceTooltipBody() {
                            return R.strings.account_dashboard.excludedMaps.replaceTooltipBody();
                        },
                        get temporarilyUnavailable() {
                            return R.strings.account_dashboard.temporarilyUnavailable();
                        },
                    },
                    ln =
                        (Tt(
                            ({ className: u, isEnabled: e, onClick: t }) => {
                                const r = (0, n.useCallback)(() => {
                                        (t(), tu('play'));
                                    }, [t]),
                                    o = (0, n.useCallback)(() => {
                                        tu('highlight');
                                    }, []);
                                return e
                                    ? a().createElement(
                                          'div',
                                          { className: F()(xt, u), onClick: r, onMouseEnter: o },
                                          a().createElement('div', { className: yt }),
                                          a().createElement('div', { className: Rt }),
                                          a().createElement('div', { className: Mt }, sn.header),
                                          a().createElement(rn, {
                                              path: 'model.excludedMaps.excludedMaps',
                                              className: It,
                                          }),
                                      )
                                    : a().createElement(
                                          'div',
                                          { className: F()(xt, St) },
                                          a().createElement('div', { className: yt }),
                                          a().createElement('div', { className: Lt }),
                                          a().createElement(
                                              'div',
                                              { className: Ot },
                                              a().createElement('img', {
                                                  src: R.images.gui.maps.icons.account_dashboard.premium_missions.lock(),
                                                  alt: '',
                                                  className: kt,
                                              }),
                                              a().createElement('div', { className: Mt }, sn.header),
                                              a().createElement('div', { className: Nt }, sn.temporarilyUnavailable),
                                          ),
                                      );
                            },
                            'model.excludedMaps',
                            (u, e) => {
                                let t = on({}, u);
                                return Object.assign({}, t, e, {
                                    excludedMaps: t.excludedMaps ? t.excludedMaps.map((u) => u.value) : [],
                                });
                            },
                        ),
                        ({
                            map: u,
                            isMapNameDisplayed: e,
                            onRemoveButtonClick: t,
                            tooltipStrings: n,
                            isReducedSize: r,
                        }) => {
                            const o = Math.floor(u.cooldownEndTimeInSecs - Date.now() / Ju),
                                s = o <= 0 && '' !== u.mapId,
                                i = o > 0,
                                l = F()(Pt, s && $t, i && Kt, r && Ht),
                                c = se(u);
                            if (i) {
                                const t = ne(o),
                                    n = le(t),
                                    r = O(sn.cooldownTooltipBody, { cooldownStr: ce(t) });
                                return a().createElement(
                                    fe,
                                    { header: sn.cooldownTooltipHeader, body: r },
                                    a().createElement(
                                        'div',
                                        { className: l, 'data-testid': 'slot' },
                                        a().createElement('img', { src: ie(u), className: Wt }),
                                        a().createElement(
                                            'div',
                                            { className: Zt, 'data-testid': 'timer' },
                                            a().createElement('img', {
                                                src: R.images.gui.maps.icons.account_dashboard.excluded_maps.icon_cooldown_slot(),
                                                className: Qt,
                                            }),
                                            a().createElement('div', { className: Jt }, n),
                                        ),
                                        e && a().createElement('div', { className: Gt }, c),
                                    ),
                                );
                            }
                            return a().createElement(
                                fe,
                                {
                                    header: (null == n ? void 0 : n.replaceTooltipHeader) || sn.replaceTooltipHeader,
                                    body: (null == n ? void 0 : n.replaceTooltipBody) || sn.replaceTooltipBody,
                                },
                                a().createElement(
                                    'div',
                                    { className: l, 'data-testid': 'slot' },
                                    t &&
                                        a().createElement(
                                            Ie,
                                            { type: 'ghost', mixClass: qt, onClick: () => t(u.mapId) },
                                            a().createElement('img', {
                                                src: R.images.gui.maps.icons.library.cross(),
                                                className: Yt,
                                            }),
                                        ),
                                    a().createElement('img', { src: ie(u), className: Wt }),
                                    e && a().createElement('div', { className: Gt }, c),
                                ),
                            );
                        }),
                    cn = {
                        [Nu.MAPS_BLACKLIST_SLOT_STATE_ACTIVE]: Ru.empty,
                        [Nu.MAPS_BLACKLIST_SLOT_STATE_ACTIVE_NO_HOVER]: Ru.selected,
                        [Nu.MAPS_BLACKLIST_SLOT_STATE_CHANGE]: Ru.selected,
                        [Nu.MAPS_BLACKLIST_SLOT_STATE_COOLDOWN]: Ru.selected,
                        [Nu.MAPS_BLACKLIST_SLOT_STATE_DISABLED]: Ru.disabled,
                        [Nu.MAPS_BLACKLIST_SLOT_STATE_SELECTED]: Ru.selected,
                    },
                    dn = Gu()(({ observableModel: u }) => {
                        const e = { excludedMaps: u.array('items', []) },
                            t = (0, Ku.Om)(
                                () => zu(e.excludedMaps.get(), (u) => Object.assign({}, u, { state: cn[u.state] })),
                                { equals: Wu },
                            );
                        return Object.assign({ computes: { getExcludedMapSlots: t } }, e);
                    }, Pu),
                    En = dn[0],
                    An = dn[1],
                    mn = {
                        get disabledTooltipBody() {
                            return R.strings.excluded_maps.slot.disabledTooltipBody();
                        },
                        get disabledTooltipBodyWotplus() {
                            return R.strings.excluded_maps.slot.disabledTooltipBodyWotplus();
                        },
                        get disabledTooltipBodyPremium() {
                            return R.strings.excluded_maps.slot.disabledTooltipBodyPremium();
                        },
                        get selectTooltipHeader() {
                            return R.strings.excluded_maps.slot.selectTooltipHeader();
                        },
                        get selectTooltipBody() {
                            return R.strings.excluded_maps.slot.selectTooltipBody();
                        },
                        get replaceTooltipBody() {
                            return R.strings.excluded_maps.slot.replaceTooltipBody();
                        },
                    },
                    Fn = (0, ku.Pi)(({ className: u, onMapRemoveFromBlacklist: e }) => {
                        const t = An().model.computes.getExcludedMapSlots();
                        return a().createElement(
                            'div',
                            { className: u },
                            t.map((u, t) =>
                                a().createElement(an, {
                                    isMapNameDisplayed: !0,
                                    onRemoveButtonClick: e,
                                    slotState: u.state,
                                    mapId: u.mapId,
                                    cooldownEndTimeInSecs: u.cooldownTime,
                                    key: t,
                                    tooltipStrings: mn,
                                    MapSlotComponent: ln,
                                    slotType: u.slotType,
                                }),
                            ),
                        );
                    }),
                    Dn = { context: 'model.disabledMaps' },
                    _n = (0, n.memo)(({ className: u, onMapRemoveFromBlacklist: e }) =>
                        a().createElement(
                            En,
                            { options: Dn },
                            a().createElement(Fn, { className: u, onMapRemoveFromBlacklist: e }),
                        ),
                    ),
                    Bn = { base: me.backButton },
                    Cn = { base: me.scrollBar },
                    pn = (0, ku.Pi)(() => {
                        const u = Xu(),
                            e = u.model,
                            t = u.controls,
                            r = (function () {
                                const u = (0, n.useState)({ top: 0, bottom: 0, left: 0, right: 0 }),
                                    e = u[0],
                                    t = u[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        const u = () => {
                                            t(o.O.view.getExternalPaddingsRem());
                                        };
                                        return (
                                            u(),
                                            engine.on('self.onPaddingsUpdated', u),
                                            () => {
                                                engine.off('self.onPaddingsUpdated', u);
                                            }
                                        );
                                    }, []),
                                    { paddings: e, externalPaddingsExisted: 0 !== e.top || 0 !== e.bottom }
                                );
                            })();
                        e.filterInfo.mapsSelected.get();
                        const s = e.computes.getIsInCooldown(),
                            i = {
                                linkWotPlus: a().createElement(
                                    'div',
                                    { className: me.link, onClick: t.onShopOpenWotPlus },
                                    R.strings.excluded_maps.wotplus(),
                                ),
                                linkPremium: a().createElement(
                                    'div',
                                    { className: me.link, onClick: t.onShopOpenPremium },
                                    R.strings.excluded_maps.premium(),
                                ),
                                mapCount: e.computes.getWotPlusSlotsCount(),
                            },
                            l = e.computes.getFooterText();
                        var c;
                        return (
                            (c = t.onBackAction),
                            Lu(Mu.n.ESCAPE, c),
                            a().createElement(
                                'div',
                                { className: F()(me.base, r.externalPaddingsExisted && me.base__paddings) },
                                a().createElement(
                                    'div',
                                    { className: F()(me.headerBlock, me.headerBlock__padding) },
                                    a().createElement(
                                        'div',
                                        { className: me.header },
                                        a().createElement('h1', null, Zu.header),
                                        a().createElement(
                                            Su,
                                            { contentId: R.views.lobby.excluded_maps.ExcludedMapsTooltip('resId') },
                                            a().createElement('img', {
                                                src: R.images.gui.maps.icons.library.info(),
                                                alt: '',
                                                className: me.infoIcon,
                                            }),
                                        ),
                                    ),
                                ),
                                !r.externalPaddingsExisted &&
                                    a().createElement(vu, {
                                        caption: Zu.backButtonLabel,
                                        goto: Zu.backButtonTo,
                                        classNames: Bn,
                                        onClick: t.onBackAction,
                                    }),
                                a().createElement(_n, {
                                    className: me.slotsContainer,
                                    onMapRemoveFromBlacklist: t.onMapRemoveFromBlacklist,
                                }),
                                a().createElement(
                                    'div',
                                    { className: me.mainContainer },
                                    a().createElement(
                                        'div',
                                        { className: me.filterContainer },
                                        a().createElement(Ge, null),
                                        a().createElement(
                                            'div',
                                            { className: me.filterContainer_middle },
                                            s &&
                                                a().createElement('img', {
                                                    src: R.images.gui.maps.icons.excluded_maps.cooldown_bg(),
                                                    className: me.glow,
                                                }),
                                            s && a().createElement(Ae, { className: me.cooldownHeader }),
                                            s &&
                                                void 0 !== l &&
                                                a().createElement(
                                                    'div',
                                                    { className: me.filterContainer_lockedStage },
                                                    a().createElement(j, { text: l, binding: i }),
                                                ),
                                        ),
                                        a().createElement(Re, { onFilterClick: t.onFilterClick }),
                                    ),
                                    a().createElement('div', { className: me.divider }),
                                    a().createElement(
                                        Bu,
                                        { api: eu(), className: me.scrollArea, barClassNames: Cn },
                                        a().createElement(Ft, {
                                            className: me.maps,
                                            onMapAddToBlacklist: t.onMapAddToBlacklist,
                                            onMapRemoveFromBlacklist: t.onMapRemoveFromBlacklist,
                                        }),
                                    ),
                                    a().createElement('div', { className: me.divider_bottom }),
                                ),
                            )
                        );
                    });
                engine.whenReady
                    .then(() => {
                        y().render(
                            a().createElement(
                                Yu,
                                { mode: 'real' },
                                a().createElement(S, null, a().createElement(pn, null)),
                            ),
                            document.getElementById('root'),
                        );
                    })
                    .then(() => viewEnv.setFullscreenModeSupported(!0));
            },
            363: (u) => {
                'use strict';
                u.exports = React;
            },
            533: (u) => {
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
        (__webpack_require__.O = (u, e, t, n) => {
            if (!e) {
                var a = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [e, t, n] = deferred[i], r = !0, o = 0; o < e.length; o++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[o]))
                            ? e.splice(o--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [e, t, n];
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
        (__webpack_require__.j = 877),
        (() => {
            var u = { 877: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        a,
                        [r, o, s] = t,
                        i = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (e && e(t); i < r.length; i++)
                        ((a = r[i]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [182], () => __webpack_require__(274));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
