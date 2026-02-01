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
                    u.d(t, { mouse: () => d, off: () => l, on: () => o, onResize: () => r, onScaleUpdated: () => n }));
                var i = u(472),
                    a = u(176);
                const r = (0, i.E)('clientResized'),
                    n = (0, i.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    s = { down: (0, i.E)('mousedown'), up: (0, i.E)('mouseup'), move: (0, i.E)('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function i() {
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
                                        n = s[t]((e) => u([e, 'outside']));
                                    function o(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        i(),
                                        () => {
                                            a &&
                                                (n(),
                                                window.removeEventListener(r, o),
                                                (e.listeners -= 1),
                                                i(),
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
                            ((e.enabled = !1), i());
                        },
                        enable() {
                            ((e.enabled = !0), i());
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
            959: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        events: () => i,
                        getMouseGlobalPosition: () => n,
                        getSize: () => r,
                        graphicsQuality: () => o,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var i = u(527),
                    a = u(493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (e, t, u) => {
                'use strict';
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => i });
            },
            493: (e, t, u) => {
                'use strict';
                function i(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function a(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                u.d(t, { E: () => a, G: () => i });
            },
            472: (e, t, u) => {
                'use strict';
                function i(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => i });
            },
            138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => n });
                var i = u(959),
                    a = u(698),
                    r = u(514);
                const n = { view: u(641), client: i, sound: r.ZP, intl: a.N };
            },
            698: (e, t, u) => {
                'use strict';
                u.d(t, { N: () => i });
                const i = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => n });
                var i = u(959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, i.playSound)(a[t])), e), {}),
                    n = { play: Object.assign({}, r, { sound: i.playSound }), setRTPC: i.setRTPC };
            },
            722: (e, t, u) => {
                'use strict';
                function i(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function a(e, t, u) {
                    return `url(${i(e, t, u)})`;
                }
                (u.r(t), u.d(t, { getBgUrl: () => a, getTextureUrl: () => i }));
            },
            112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => i });
                const i = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => a });
                var i = u(472);
                const a = {
                    onTextureFrozen: (0, i.E)('self.onTextureFrozen'),
                    onTextureReady: (0, i.E)('self.onTextureReady'),
                    onDomBuilt: (0, i.E)('self.onDomBuilt'),
                    onLoaded: (0, i.E)('self.onLoaded'),
                    onDisplayChanged: (0, i.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, i.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, i.E)('children.onAdded'),
                        onLoaded: (0, i.E)('children.onLoaded'),
                        onRemoved: (0, i.E)('children.onRemoved'),
                        onAttached: (0, i.E)('children.onAttached'),
                        onTextureReady: (0, i.E)('children.onTextureReady'),
                        onRequestPosition: (0, i.E)('children.requestPosition'),
                    },
                };
            },
            641: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        addModelObserver: () => h,
                        addPreloadTexture: () => l,
                        arabic2roman: () => S,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => R,
                        enableFullScreenModeSupported: () => L,
                        events: () => n.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => w,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => v,
                        getExternalPaddingsRem: () => x,
                        getFontNames: () => b,
                        getScale: () => _,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        initExternalPaddings: () => P,
                        isEventHandled: () => B,
                        isFocused: () => f,
                        pxToRem: () => F,
                        remToPx: () => p,
                        resize: () => g,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => T,
                    }));
                var i = u(690),
                    a = u(722),
                    r = u(112),
                    n = u(538),
                    o = u(566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function d(e, t, u, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, i);
                }
                function h(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function g(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: p(t.x), y: p(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function _() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function w() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const b = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    S = i.cg;
                function x() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const R = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    y = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function L() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function P(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            u = t.top,
                            i = t.right,
                            a = t.bottom,
                            r = t.left;
                        (e.style.setProperty('--external-padding-top', `${u}rem`),
                            e.style.setProperty('--external-padding-right', `${i}rem`),
                            e.style.setProperty('--external-padding-bottom', `${a}rem`),
                            e.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => s });
                const i = ['args'];
                const a = 2,
                    r = 16,
                    n = 32,
                    o = 64,
                    l = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        i,
                                        a = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) ((u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                    return a;
                                })(t, i);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, n, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    s = {
                        close(e) {
                            l('popover' === e ? a : n);
                        },
                        minimize() {
                            l(o);
                        },
                        move(e) {
                            l(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            521: (e, t, u) => {
                'use strict';
                let i, a;
                (u.d(t, { n: () => i }),
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
                    })(i || (i = {})),
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
            690: (e, t, u) => {
                'use strict';
                u.d(t, { cg: () => r });
                const i = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let t = '';
                    for (let u = a.length - 1; u >= 0; u--) for (; e >= a[u]; ) ((t += i[u]), (e -= a[u]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var i = u(138);
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
                        const r = i.O.view.addModelObserver(e, u, a);
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
                            const i = this._callbacks[u];
                            void 0 !== i && i(e, t);
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
            916: (e, t, u) => {
                'use strict';
                u.d(t, { Sw: () => r.Z, B3: () => l, Z5: () => n.Z5, B0: () => o, ry: () => _ });
                class i {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let i = e.target;
                                    do {
                                        if (i === t) return;
                                        i = i.parentNode;
                                    } while (i);
                                    u();
                                });
                            }));
                    }
                    static get instance() {
                        return (i.__instance || (i.__instance = new i()), i.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const u = e,
                            i = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== i)),
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
                i.__instance = void 0;
                const a = i;
                var r = u(358);
                var n = u(613);
                let o;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(o || (o = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    s = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    h = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var c = u(521),
                    m = u(138);
                const g = ['args'];
                function E(e, t, u, i, a, r, n) {
                    try {
                        var o = e[r](n),
                            l = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(l) : Promise.resolve(l).then(i, a);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    _ = (function () {
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
                                    return new Promise(function (i, a) {
                                        var r = e.apply(t, u);
                                        function n(e) {
                                            E(r, i, a, n, o, 'next', e);
                                        }
                                        function o(e) {
                                            E(r, i, a, n, o, 'throw', e);
                                        }
                                        n(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    F = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        i,
                                        a = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) ((u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                    return a;
                                })(t, g);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((i = a),
                                              Object.entries(i).map(([e, t]) => {
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
                        var i;
                    },
                    p = () => F(o.CLOSE),
                    D = (e, t) => {
                        e.keyCode === c.n.ESCAPE && t();
                    };
                var f = u(572);
                const C = a.instance,
                    B = {
                        DataTracker: r.Z,
                        ViewModel: f.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: s,
                        TimeFormatType: d,
                        DateFormatType: h,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => F(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => F(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            F(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, i, a = R.invalid('resId'), r) => {
                            const n = m.O.view.getViewGlobalPosition(),
                                l = u.getBoundingClientRect(),
                                s = l.x,
                                d = l.y,
                                h = l.width,
                                c = l.height,
                                g = {
                                    x: m.O.view.pxToRem(s) + n.x,
                                    y: m.O.view.pxToRem(d) + n.y,
                                    width: m.O.view.pxToRem(h),
                                    height: m.O.view.pxToRem(c),
                                };
                            F(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: i || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: A(g),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => D(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            D(e, p);
                        },
                        handleViewEvent: F,
                        onBindingsReady: _,
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
                            for (const i in t)
                                if (Object.prototype.hasOwnProperty.call(t, i)) {
                                    const a = Object.prototype.toString.call(t[i]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[i];
                                        u[i] = [];
                                        for (let t = 0; t < a.length; t++) u[i].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[i] = e(t[i]))
                                            : (u[i] = t[i]);
                                }
                            return u;
                        },
                        ClickOutsideManager: C,
                        SystemLocale: n.Z5,
                        UserLocale: n.cy,
                    };
                window.ViewEnvHelper = B;
            },
            613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => r, Z5: () => i, cy: () => a });
                const i = {
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
            264: (e, t, u) => {
                'use strict';
                var i = u(363),
                    a = u.n(i);
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
                var n = u(138);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function s(e = n.O.client.getSize('rem')) {
                    const t = e.width,
                        u = e.height;
                    return Object.assign(
                        { width: t, height: u },
                        (function (e, t, u) {
                            const i = (function (e, t) {
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
                                r = Math.min(i, a);
                            return {
                                extraLarge: r === u.extraLarge.weight,
                                large: r === u.large.weight,
                                medium: r === u.medium.weight,
                                small: r === u.small.weight,
                                extraSmall: r === u.extraSmall.weight,
                                extraLargeWidth: i === u.extraLarge.weight,
                                largeWidth: i === u.large.weight,
                                mediumWidth: i === u.medium.weight,
                                smallWidth: i === u.small.weight,
                                extraSmallWidth: i === u.extraSmall.weight,
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
                })(l || (l = {}));
                const d = s(),
                    h = (0, i.createContext)(d),
                    c = ['children'];
                (0, i.memo)((e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                i,
                                a = {},
                                r = Object.keys(e);
                            for (i = 0; i < r.length; i++) ((u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, c);
                    const a = (0, i.useContext)(h),
                        n = a.extraLarge,
                        o = a.large,
                        l = a.medium,
                        s = a.small,
                        d = a.extraSmall,
                        m = a.extraLargeWidth,
                        g = a.largeWidth,
                        E = a.mediumWidth,
                        A = a.smallWidth,
                        _ = a.extraSmallWidth,
                        F = a.extraLargeHeight,
                        p = a.largeHeight,
                        D = a.mediumHeight,
                        f = a.smallHeight,
                        C = a.extraSmallHeight,
                        B = { extraLarge: F, large: p, medium: D, small: f, extraSmall: C };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && n) return t;
                        if (u.large && o) return t;
                        if (u.medium && l) return t;
                        if (u.small && s) return t;
                        if (u.extraSmall && d) return t;
                    } else {
                        if (u.extraLargeWidth && m) return r(t, u, B);
                        if (u.largeWidth && g) return r(t, u, B);
                        if (u.mediumWidth && E) return r(t, u, B);
                        if (u.smallWidth && A) return r(t, u, B);
                        if (u.extraSmallWidth && _) return r(t, u, B);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && F) return t;
                            if (u.largeHeight && p) return t;
                            if (u.mediumHeight && D) return t;
                            if (u.smallHeight && f) return t;
                            if (u.extraSmallHeight && C) return t;
                        }
                    }
                    return null;
                });
                const m = ({ children: e }) => {
                    const t = (0, i.useState)(s),
                        u = t[0],
                        r = t[1],
                        o = (0, i.useState)(!1),
                        l = o[0],
                        d = o[1];
                    return (
                        (0, i.useLayoutEffect)(() => {
                            function e() {
                                r((e) => {
                                    const t = n.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : s(t);
                                });
                            }
                            return (
                                e(),
                                d(!0),
                                n.O.client.events.on('clientResized', e),
                                n.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (n.O.client.events.off('clientResized', e),
                                        n.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        a().createElement(h.Provider, { value: u }, l && e)
                    );
                };
                var g = u(483),
                    E = u.n(g),
                    A = u(926),
                    _ = u.n(A);
                let F, p, D;
                (!(function (e) {
                    ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                })(F || (F = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                    })(p || (p = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge'));
                    })(D || (D = {})));
                const f = () => {
                        const e = (0, i.useContext)(h),
                            t = e.width,
                            u = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return F.ExtraLarge;
                                    case e.large:
                                        return F.Large;
                                    case e.medium:
                                        return F.Medium;
                                    case e.small:
                                        return F.Small;
                                    case e.extraSmall:
                                        return F.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), F.ExtraSmall);
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
                            n = ((e) => {
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
                        return { mediaSize: a, mediaWidth: r, mediaHeight: n, remScreenWidth: t, remScreenHeight: u };
                    },
                    C = ['children', 'className'];
                function B() {
                    return (
                        (B =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        B.apply(this, arguments)
                    );
                }
                const w = {
                        [p.ExtraSmall]: '',
                        [p.Small]: _().SMALL_WIDTH,
                        [p.Medium]: `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH}`,
                        [p.Large]: `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH} ${_().LARGE_WIDTH}`,
                        [p.ExtraLarge]: `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH} ${_().LARGE_WIDTH} ${_().EXTRA_LARGE_WIDTH}`,
                    },
                    v = {
                        [D.ExtraSmall]: '',
                        [D.Small]: _().SMALL_HEIGHT,
                        [D.Medium]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT}`,
                        [D.Large]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT} ${_().LARGE_HEIGHT}`,
                        [D.ExtraLarge]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT} ${_().LARGE_HEIGHT} ${_().EXTRA_LARGE_HEIGHT}`,
                    },
                    b = {
                        [F.ExtraSmall]: '',
                        [F.Small]: _().SMALL,
                        [F.Medium]: `${_().SMALL} ${_().MEDIUM}`,
                        [F.Large]: `${_().SMALL} ${_().MEDIUM} ${_().LARGE}`,
                        [F.ExtraLarge]: `${_().SMALL} ${_().MEDIUM} ${_().LARGE} ${_().EXTRA_LARGE}`,
                    },
                    S = (e) => {
                        let t = e.children,
                            u = e.className,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    i,
                                    a = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) ((u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, C);
                        const r = f(),
                            n = r.mediaWidth,
                            o = r.mediaHeight,
                            l = r.mediaSize;
                        return a().createElement('div', B({ className: E()(u, w[n], v[o], b[l]) }, i), t);
                    },
                    x = ['children'];
                const y = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                i,
                                a = {},
                                r = Object.keys(e);
                            for (i = 0; i < r.length; i++) ((u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, x);
                    return a().createElement(m, null, a().createElement(S, u, t));
                };
                var T = u(533),
                    L = u.n(T);
                const P = 'Collection_base_41',
                    N = (e) => {
                        const t = (0, i.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    };
                var I = u(521),
                    O = u(916);
                const k = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function U(e = I.n.NONE, t = k, u = !1, a = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== I.n.NONE)
                            return (
                                window.addEventListener('keydown', i, u),
                                () => {
                                    window.removeEventListener('keydown', i, u);
                                }
                            );
                        function i(i) {
                            if (i.keyCode === e) {
                                if (!a && n.O.view.isEventHandled()) return;
                                (n.O.view.setEventHandled(), t(i), u && i.stopPropagation());
                            }
                        }
                    }, [t, e, u, a]);
                }
                var M = u(515),
                    H = u(30);
                const G = ({ value: e, format: t = 'integral' }) => {
                    const u = (function (e) {
                            return 'gold' === e ? O.B3.GOLD : O.B3.INTEGRAL;
                        })(t),
                        i = O.Z5.getNumberFormat(e, u);
                    return void 0 !== e && void 0 !== i ? i : null;
                };
                let $, z, W, j, q, Y, V, X;
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
                        (e.Attachment = 'attachment'));
                })($ || ($ = {})),
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
                    })(z || (z = {})),
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
                    })(W || (W = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(j || (j = {})),
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
                    })(q || (q = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Y || (Y = {})),
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
                    })(V || (V = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(X || (X = {})));
                const K = [$.Attachment],
                    Q = [
                        $.Items,
                        $.Equipment,
                        $.Xp,
                        $.XpFactor,
                        $.Blueprints,
                        $.BlueprintsAny,
                        $.Goodies,
                        $.Berths,
                        $.Slots,
                        $.Tokens,
                        $.CrewSkins,
                        $.CrewBooks,
                        $.Customizations,
                        $.CreditsFactor,
                        $.TankmenXp,
                        $.TankmenXpFactor,
                        $.FreeXpFactor,
                        $.BattleToken,
                        $.LootBox,
                        $.PremiumUniversal,
                        $.NaturalCover,
                        $.BpCoin,
                        $.BattlePassSelectToken,
                        $.BattlaPassFinalAchievement,
                        $.BattleBadge,
                        $.BattlePassTicket,
                        $.BonusX5,
                        $.CrewBonusX3,
                        $.EpicSelectToken,
                        $.Comp7TokenWeeklyReward,
                        $.DeluxeGift,
                        $.ModernizedDevicesT1Gift,
                        $.ModernizedDevicesT2Gift,
                        $.ModernizedDevicesT3Gift,
                        $.BattleBoosterGift,
                        $.OptionalDevice,
                        $.Attachment,
                    ],
                    Z = [$.Gold, $.Credits, $.Crystal, $.FreeXp],
                    J = [$.BattlePassPoints, $.EquipCoin],
                    ee = [$.PremiumPlus, $.Premium],
                    te = ['engravings', 'backgrounds'],
                    ue = ['engraving', 'background'],
                    ie = (e, t = W.Small) => {
                        const u = e.name,
                            i = e.type,
                            a = e.value,
                            r = e.icon,
                            n = e.item,
                            o = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case W.S600x450:
                                        return 'c_600x450';
                                    case W.S400x300:
                                        return 'c_400x300';
                                    case W.S296x222:
                                        return 'c_296x222';
                                    case W.S232x174:
                                        return 'c_232x174';
                                    case W.Big:
                                        return 'c_80x80';
                                    case W.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (u) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${i}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${r}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                                return 'big' === t
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${r}`;
                            case 'dogTagComponents':
                                return ((e, t, u) => {
                                    const i = te[e];
                                    if (i) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(i),
                                            r = a.$dyn(u);
                                        return r ? `${r}` : `${a.$dyn(ue[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, t, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${r}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${r}`;
                            case 'attachment':
                                return `R.images.gui.maps.vehicles.attachments.${t}.${r}`;
                            case 'statTracker':
                                return `R.images.gui.maps.vehicles.statTrackers.${t}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                        }
                    },
                    ae = (e, t, u) => {
                        const i = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            i,
                            u,
                        );
                    },
                    re = [W.Small, W.Big];
                let ne, oe;
                (!(function (e) {
                    ((e.New = 'new'), (e.Received = 'received'), (e.Unreceived = 'unreceived'));
                })(ne || (ne = {})),
                    (function (e) {
                        ((e.JustReceived = 'justReceived'), (e.Received = 'received'), (e.Unreceived = 'unreceived'));
                    })(oe || (oe = {})));
                function le() {
                    return !1;
                }
                console.log;
                var se = u(174);
                function de(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return he(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return he(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var i = 0;
                        return function () {
                            return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function he(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, i = new Array(t); u < t; u++) i[u] = e[u];
                    return i;
                }
                const ce = (e) => (0 === e ? window : window.subViews.get(e));
                function me(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                function ge(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                const Ee = ge;
                function Ae(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function _e(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, i) => t(null == e ? void 0 : e.value, u, i));
                }
                function Fe(e, t) {
                    for (let u = 0; u < e.length; u++) {
                        const i = Ae(e[u]);
                        if (t(i, u, e)) return i;
                    }
                }
                function pe(e, t) {
                    return (function (e, t, u) {
                        const i = [];
                        for (let a = 0; a < e.length; a++) {
                            const r = Ee(e, a);
                            t(r, a, e) && i.push(u(r, a, e));
                        }
                        return i;
                    })(e, me, t);
                }
                var De = u(281);
                let fe;
                function Ce(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function Be(e) {
                    return e.replace(/_\w/g, (e) => e[1].toUpperCase());
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(fe || (fe = {}));
                const we = (e) => e.replace(/&nbsp;/g, ' '),
                    ve = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    be = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    Se = (e, t, u = fe.left) => e.split(t).reduce(u === fe.left ? ve : be, []),
                    xe = (() => {
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
                    Re = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ye = (e, t = fe.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Re.includes(u)) return xe(e);
                        if ('ja' === u) {
                            return (0, De.D4)()
                                .parse(e)
                                .map((e) => we(e));
                        }
                        return ((e, t = fe.left) => {
                            let u = [];
                            const i =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = we(e);
                            return (Se(a, /( )/, t).forEach((e) => (u = u.concat(Se(e, i, fe.left)))), u);
                        })(e, t);
                    };
                var Te = u(946);
                const Le = (e, t) => {
                        let u = e;
                        const i = t.split('.');
                        for (let e = 0; e < i.length; e++) {
                            if (!u) return '';
                            if (('string' != typeof u && (u = u.$dyn(i[e])), 'string' == typeof u)) return u;
                        }
                        return '';
                    },
                    Pe = (e, t, u) => (u < e ? e : u > t ? t : u),
                    Ne = {
                        defaultConfig: {
                            generalBackgroundColor: '#0D1525',
                            pages: [
                                {
                                    items: {
                                        3: {
                                            assetConfig: {
                                                extraSmall: { top: -73, left: -96, width: 193, height: 112 },
                                                small: { top: -73, left: -96, width: 193, height: 112 },
                                                medium: { top: -87, left: -130, width: 266, height: 154 },
                                                large: { top: -103, left: -160, width: 326, height: 189 },
                                                extraLarge: { top: -140, left: -238, width: 482, height: 280 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        6: {
                                            assetConfig: {
                                                extraSmall: { top: 25, left: 215, width: 156, height: 240 },
                                                small: { top: 25, left: 215, width: 156, height: 240 },
                                                medium: { top: 45, left: 296, width: 215, height: 329 },
                                                large: { top: 60, left: 364, width: 264, height: 404 },
                                                extraLarge: { top: 102, left: 538, width: 390, height: 598 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        8: {
                                            assetConfig: {
                                                extraSmall: { top: 67, left: -210, width: 134, height: 164 },
                                                small: { top: 67, left: -210, width: 134, height: 164 },
                                                medium: { top: 103, left: -288, width: 184, height: 225 },
                                                large: { top: 131, left: -354, width: 226, height: 276 },
                                                extraLarge: { top: 209, left: -524, width: 334, height: 408 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        12: {
                                            assetConfig: {
                                                extraSmall: { top: -23, left: 69, width: 129, height: 158 },
                                                small: { top: -23, left: 69, width: 129, height: 158 },
                                                medium: { top: -21, left: 96, width: 178, height: 217 },
                                                large: { top: -21, left: 118, width: 218, height: 266 },
                                                extraLarge: { top: -17, left: 174, width: 322, height: 394 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        16: {
                                            assetConfig: {
                                                extraSmall: { top: -141, left: 156, width: 220, height: 72 },
                                                small: { top: -141, left: 156, width: 220, height: 72 },
                                                medium: { top: -183, left: 216, width: 303, height: 98 },
                                                large: { top: -218, left: 265, width: 372, height: 121 },
                                                extraLarge: { top: -309, left: 392, width: 550, height: 178 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        19: {
                                            assetConfig: {
                                                extraSmall: { top: -139, left: -240, width: 92, height: 92 },
                                                small: { top: -139, left: -240, width: 92, height: 92 },
                                                medium: { top: -181, left: -330, width: 126, height: 127 },
                                                large: { top: -217, left: -404, width: 154, height: 156 },
                                                extraLarge: { top: -307, left: -600, width: 228, height: 230 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        21: {
                                            assetConfig: {
                                                extraSmall: { top: 69, left: -68, width: 140, height: 166 },
                                                small: { top: 69, left: -68, width: 140, height: 166 },
                                                medium: { top: 105, left: -94, width: 193, height: 228 },
                                                large: { top: 135, left: -114, width: 237, height: 280 },
                                                extraLarge: { top: 213, left: -171, width: 350, height: 414 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        1: {
                                            assetConfig: {
                                                extraSmall: { top: 48, left: -186, width: 200, height: 128 },
                                                small: { top: 48, left: -186, width: 200, height: 128 },
                                                medium: { top: 77, left: -256, width: 275, height: 176 },
                                                large: { top: 100, left: -314, width: 338, height: 216 },
                                                extraLarge: { top: 162, left: -464, width: 500, height: 320 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        4: {
                                            assetConfig: {
                                                extraSmall: { top: -69, left: 42, width: 136, height: 206 },
                                                small: { top: -69, left: 42, width: 136, height: 206 },
                                                medium: { top: -85, left: 58, width: 187, height: 283 },
                                                large: { top: -98, left: 70, width: 230, height: 347 },
                                                extraLarge: { top: -132, left: 106, width: 340, height: 514 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        9: {
                                            assetConfig: {
                                                extraSmall: { top: -15, left: 216, width: 135, height: 113 },
                                                small: { top: -15, left: 216, width: 135, height: 113 },
                                                medium: { top: -11, left: 297, width: 185, height: 156 },
                                                large: { top: -7, left: 364, width: 227, height: 191 },
                                                extraLarge: { top: 3, left: 542, width: 336, height: 282 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        11: {
                                            assetConfig: {
                                                extraSmall: { top: -102, left: -219, width: 116, height: 145 },
                                                small: { top: -102, left: -219, width: 116, height: 145 },
                                                medium: { top: -130, left: -302, width: 160, height: 200 },
                                                large: { top: -153, left: -371, width: 196, height: 245 },
                                                extraLarge: { top: -214, left: -548, width: 290, height: 362 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        13: {
                                            assetConfig: {
                                                extraSmall: { top: -127, left: 168, width: 108, height: 107 },
                                                small: { top: -127, left: 168, width: 108, height: 107 },
                                                medium: { top: -166, left: 231, width: 149, height: 147 },
                                                large: { top: -198, left: 283, width: 183, height: 180 },
                                                extraLarge: { top: -279, left: 422, width: 270, height: 266 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        14: {
                                            assetConfig: {
                                                extraSmall: { top: 89, left: 121, width: 209, height: 91 },
                                                small: { top: 89, left: 121, width: 209, height: 91 },
                                                medium: { top: 133, left: 167, width: 288, height: 125 },
                                                large: { top: 169, left: 204, width: 353, height: 153 },
                                                extraLarge: { top: 262, left: 304, width: 522, height: 226 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        17: {
                                            assetConfig: {
                                                extraSmall: { top: 88, left: -43, width: 78, height: 88 },
                                                small: { top: 88, left: -43, width: 78, height: 88 },
                                                medium: { top: 132, left: -59, width: 107, height: 121 },
                                                large: { top: 168, left: -73, width: 131, height: 149 },
                                                extraLarge: { top: 263, left: -105, width: 194, height: 220 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        20: {
                                            assetConfig: {
                                                extraSmall: { top: -106, left: -95, width: 125, height: 173 },
                                                small: { top: -106, left: -95, width: 125, height: 173 },
                                                medium: { top: -136, left: -130, width: 172, height: 238 },
                                                large: { top: -161, left: -160, width: 211, height: 292 },
                                                extraLarge: { top: -226, left: -235, width: 312, height: 432 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        2: {
                                            assetConfig: {
                                                extraSmall: { top: 58, left: 105, width: 209, height: 150 },
                                                small: { top: 58, left: 105, width: 209, height: 150 },
                                                medium: { top: 90, left: 145, width: 288, height: 206 },
                                                large: { top: 116, left: 177, width: 353, height: 253 },
                                                extraLarge: { top: 186, left: 265, width: 522, height: 374 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        5: {
                                            assetConfig: {
                                                extraSmall: { top: -77, left: -77, width: 145, height: 200 },
                                                small: { top: -77, left: -77, width: 145, height: 200 },
                                                medium: { top: -95, left: -105, width: 200, height: 275 },
                                                large: { top: -112, left: -130, width: 245, height: 338 },
                                                extraLarge: { top: -151, left: -190, width: 362, height: 500 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        7: {
                                            assetConfig: {
                                                extraSmall: { top: 68, left: -220, width: 135, height: 149 },
                                                small: { top: 68, left: -220, width: 135, height: 149 },
                                                medium: { top: 103, left: -303, width: 185, height: 205 },
                                                large: { top: 133, left: -372, width: 227, height: 252 },
                                                extraLarge: { top: 209, left: -549, width: 336, height: 372 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        10: {
                                            assetConfig: {
                                                extraSmall: { top: -93, left: -217, width: 129, height: 164 },
                                                small: { top: -93, left: -217, width: 129, height: 164 },
                                                medium: { top: -117, left: -298, width: 178, height: 225 },
                                                large: { top: -138, left: -367, width: 218, height: 276 },
                                                extraLarge: { top: -190, left: -541, width: 322, height: 408 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        15: {
                                            assetConfig: {
                                                extraSmall: { top: -127, left: 47, width: 94, height: 100 },
                                                small: { top: -127, left: 47, width: 94, height: 100 },
                                                medium: { top: -165, left: 64, width: 129, height: 138 },
                                                large: { top: -195, left: 78, width: 158, height: 169 },
                                                extraLarge: { top: -276, left: 118, width: 234, height: 250 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        18: {
                                            assetConfig: {
                                                extraSmall: { top: 80, left: -56, width: 101, height: 105 },
                                                small: { top: 80, left: -56, width: 101, height: 105 },
                                                medium: { top: 119, left: -77, width: 139, height: 145 },
                                                large: { top: 152, left: -95, width: 171, height: 177 },
                                                extraLarge: { top: 239, left: -138, width: 252, height: 262 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        22: {
                                            assetConfig: {
                                                extraSmall: { top: -105, left: 210, width: 227, height: 168 },
                                                small: { top: -105, left: 210, width: 227, height: 168 },
                                                medium: { top: -134, left: 290, width: 312, height: 230 },
                                                large: { top: -157, left: 354, width: 383, height: 283 },
                                                extraLarge: { top: -220, left: 527, width: 566, height: 418 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                            ],
                        },
                        battlePass10: {
                            generalBackgroundColor: '#0D1525',
                            pages: [
                                {
                                    items: {
                                        3: {
                                            assetConfig: {
                                                extraSmall: { top: -73, left: -96, width: 193, height: 112 },
                                                small: { top: -73, left: -96, width: 193, height: 112 },
                                                medium: { top: -87, left: -130, width: 266, height: 154 },
                                                large: { top: -103, left: -160, width: 326, height: 189 },
                                                extraLarge: { top: -140, left: -238, width: 482, height: 280 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        6: {
                                            assetConfig: {
                                                extraSmall: { top: 25, left: 215, width: 156, height: 240 },
                                                small: { top: 25, left: 215, width: 156, height: 240 },
                                                medium: { top: 45, left: 296, width: 215, height: 329 },
                                                large: { top: 60, left: 364, width: 264, height: 404 },
                                                extraLarge: { top: 102, left: 538, width: 390, height: 598 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        8: {
                                            assetConfig: {
                                                extraSmall: { top: 67, left: -210, width: 134, height: 164 },
                                                small: { top: 67, left: -210, width: 134, height: 164 },
                                                medium: { top: 103, left: -288, width: 184, height: 225 },
                                                large: { top: 131, left: -354, width: 226, height: 276 },
                                                extraLarge: { top: 209, left: -524, width: 334, height: 408 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        12: {
                                            assetConfig: {
                                                extraSmall: { top: -23, left: 69, width: 129, height: 158 },
                                                small: { top: -23, left: 69, width: 129, height: 158 },
                                                medium: { top: -21, left: 96, width: 178, height: 217 },
                                                large: { top: -21, left: 118, width: 218, height: 266 },
                                                extraLarge: { top: -17, left: 174, width: 322, height: 394 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        16: {
                                            assetConfig: {
                                                extraSmall: { top: -141, left: 156, width: 220, height: 72 },
                                                small: { top: -141, left: 156, width: 220, height: 72 },
                                                medium: { top: -183, left: 216, width: 303, height: 98 },
                                                large: { top: -218, left: 265, width: 372, height: 121 },
                                                extraLarge: { top: -309, left: 392, width: 550, height: 178 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        19: {
                                            assetConfig: {
                                                extraSmall: { top: -139, left: -240, width: 92, height: 92 },
                                                small: { top: -139, left: -240, width: 92, height: 92 },
                                                medium: { top: -181, left: -330, width: 126, height: 127 },
                                                large: { top: -217, left: -404, width: 154, height: 156 },
                                                extraLarge: { top: -307, left: -600, width: 228, height: 230 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        21: {
                                            assetConfig: {
                                                extraSmall: { top: 69, left: -68, width: 140, height: 166 },
                                                small: { top: 69, left: -68, width: 140, height: 166 },
                                                medium: { top: 105, left: -94, width: 193, height: 228 },
                                                large: { top: 135, left: -114, width: 237, height: 280 },
                                                extraLarge: { top: 213, left: -171, width: 350, height: 414 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        1: {
                                            assetConfig: {
                                                extraSmall: { top: 48, left: -186, width: 200, height: 128 },
                                                small: { top: 48, left: -186, width: 200, height: 128 },
                                                medium: { top: 77, left: -256, width: 275, height: 176 },
                                                large: { top: 100, left: -314, width: 338, height: 216 },
                                                extraLarge: { top: 162, left: -464, width: 500, height: 320 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        4: {
                                            assetConfig: {
                                                extraSmall: { top: -69, left: 42, width: 136, height: 206 },
                                                small: { top: -69, left: 42, width: 136, height: 206 },
                                                medium: { top: -85, left: 58, width: 187, height: 283 },
                                                large: { top: -98, left: 70, width: 230, height: 347 },
                                                extraLarge: { top: -132, left: 106, width: 340, height: 514 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        9: {
                                            assetConfig: {
                                                extraSmall: { top: -15, left: 216, width: 135, height: 113 },
                                                small: { top: -15, left: 216, width: 135, height: 113 },
                                                medium: { top: -11, left: 297, width: 185, height: 156 },
                                                large: { top: -7, left: 364, width: 227, height: 191 },
                                                extraLarge: { top: 3, left: 542, width: 336, height: 282 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        11: {
                                            assetConfig: {
                                                extraSmall: { top: -102, left: -219, width: 116, height: 145 },
                                                small: { top: -102, left: -219, width: 116, height: 145 },
                                                medium: { top: -130, left: -302, width: 160, height: 200 },
                                                large: { top: -153, left: -371, width: 196, height: 245 },
                                                extraLarge: { top: -214, left: -548, width: 290, height: 362 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        13: {
                                            assetConfig: {
                                                extraSmall: { top: -127, left: 168, width: 108, height: 107 },
                                                small: { top: -127, left: 168, width: 108, height: 107 },
                                                medium: { top: -166, left: 231, width: 149, height: 147 },
                                                large: { top: -198, left: 283, width: 183, height: 180 },
                                                extraLarge: { top: -279, left: 422, width: 270, height: 266 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        14: {
                                            assetConfig: {
                                                extraSmall: { top: 89, left: 121, width: 209, height: 91 },
                                                small: { top: 89, left: 121, width: 209, height: 91 },
                                                medium: { top: 133, left: 167, width: 288, height: 125 },
                                                large: { top: 169, left: 204, width: 353, height: 153 },
                                                extraLarge: { top: 262, left: 304, width: 522, height: 226 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        17: {
                                            assetConfig: {
                                                extraSmall: { top: 88, left: -43, width: 78, height: 88 },
                                                small: { top: 88, left: -43, width: 78, height: 88 },
                                                medium: { top: 132, left: -59, width: 107, height: 121 },
                                                large: { top: 168, left: -73, width: 131, height: 149 },
                                                extraLarge: { top: 263, left: -105, width: 194, height: 220 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        20: {
                                            assetConfig: {
                                                extraSmall: { top: -106, left: -95, width: 125, height: 173 },
                                                small: { top: -106, left: -95, width: 125, height: 173 },
                                                medium: { top: -136, left: -130, width: 172, height: 238 },
                                                large: { top: -161, left: -160, width: 211, height: 292 },
                                                extraLarge: { top: -226, left: -235, width: 312, height: 432 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        2: {
                                            assetConfig: {
                                                extraSmall: { top: 58, left: 105, width: 209, height: 150 },
                                                small: { top: 58, left: 105, width: 209, height: 150 },
                                                medium: { top: 90, left: 145, width: 288, height: 206 },
                                                large: { top: 116, left: 177, width: 353, height: 253 },
                                                extraLarge: { top: 186, left: 265, width: 522, height: 374 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        5: {
                                            assetConfig: {
                                                extraSmall: { top: -77, left: -77, width: 145, height: 200 },
                                                small: { top: -77, left: -77, width: 145, height: 200 },
                                                medium: { top: -95, left: -105, width: 200, height: 275 },
                                                large: { top: -112, left: -130, width: 245, height: 338 },
                                                extraLarge: { top: -151, left: -190, width: 362, height: 500 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        7: {
                                            assetConfig: {
                                                extraSmall: { top: 68, left: -220, width: 135, height: 149 },
                                                small: { top: 68, left: -220, width: 135, height: 149 },
                                                medium: { top: 103, left: -303, width: 185, height: 205 },
                                                large: { top: 133, left: -372, width: 227, height: 252 },
                                                extraLarge: { top: 209, left: -549, width: 336, height: 372 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        10: {
                                            assetConfig: {
                                                extraSmall: { top: -93, left: -217, width: 129, height: 164 },
                                                small: { top: -93, left: -217, width: 129, height: 164 },
                                                medium: { top: -117, left: -298, width: 178, height: 225 },
                                                large: { top: -138, left: -367, width: 218, height: 276 },
                                                extraLarge: { top: -190, left: -541, width: 322, height: 408 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        15: {
                                            assetConfig: {
                                                extraSmall: { top: -127, left: 47, width: 94, height: 100 },
                                                small: { top: -127, left: 47, width: 94, height: 100 },
                                                medium: { top: -165, left: 64, width: 129, height: 138 },
                                                large: { top: -195, left: 78, width: 158, height: 169 },
                                                extraLarge: { top: -276, left: 118, width: 234, height: 250 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        18: {
                                            assetConfig: {
                                                extraSmall: { top: 80, left: -56, width: 101, height: 105 },
                                                small: { top: 80, left: -56, width: 101, height: 105 },
                                                medium: { top: 119, left: -77, width: 139, height: 145 },
                                                large: { top: 152, left: -95, width: 171, height: 177 },
                                                extraLarge: { top: 239, left: -138, width: 252, height: 262 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        22: {
                                            assetConfig: {
                                                extraSmall: { top: -105, left: 210, width: 227, height: 168 },
                                                small: { top: -105, left: 210, width: 227, height: 168 },
                                                medium: { top: -134, left: 290, width: 312, height: 230 },
                                                large: { top: -157, left: 354, width: 383, height: 283 },
                                                extraLarge: { top: -220, left: 527, width: 566, height: 418 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                            ],
                        },
                        battlePass11: {
                            generalBackgroundColor: '#0D1525',
                            pages: [
                                {
                                    items: {
                                        1: {
                                            assetConfig: {
                                                extraSmall: { top: 45, left: -186, width: 200, height: 128 },
                                                small: { top: 45, left: -186, width: 200, height: 128 },
                                                medium: { top: 72, left: -256, width: 275, height: 176 },
                                                large: { top: 94, left: -314, width: 338, height: 216 },
                                                extraLarge: { top: 153, left: -464, width: 500, height: 320 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        4: {
                                            assetConfig: {
                                                extraSmall: { top: -68, left: 41, width: 136, height: 206 },
                                                small: { top: -68, left: 41, width: 136, height: 206 },
                                                medium: { top: -83, left: 55, width: 187, height: 283 },
                                                large: { top: -96, left: 68, width: 230, height: 347 },
                                                extraLarge: { top: -128, left: 103, width: 340, height: 514 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        7: {
                                            assetConfig: {
                                                extraSmall: { top: -16, left: 205, width: 155, height: 114 },
                                                small: { top: -16, left: 205, width: 155, height: 114 },
                                                medium: { top: -11, left: 283, width: 213, height: 157 },
                                                large: { top: -8, left: 348, width: 261, height: 192 },
                                                extraLarge: { top: 0, left: 518, width: 386, height: 284 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        10: {
                                            assetConfig: {
                                                extraSmall: { top: -102, left: -221, width: 116, height: 145 },
                                                small: { top: -102, left: -221, width: 116, height: 145 },
                                                medium: { top: -130, left: -303, width: 160, height: 200 },
                                                large: { top: -154, left: -372, width: 196, height: 245 },
                                                extraLarge: { top: -213, left: -550, width: 290, height: 362 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        13: {
                                            assetConfig: {
                                                extraSmall: { top: -129, left: 169, width: 108, height: 107 },
                                                small: { top: -129, left: 169, width: 108, height: 107 },
                                                medium: { top: -167, left: 233, width: 149, height: 147 },
                                                large: { top: -200, left: 285, width: 183, height: 180 },
                                                extraLarge: { top: -281, left: 426, width: 270, height: 266 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        14: {
                                            assetConfig: {
                                                extraSmall: { top: 88, left: 150, width: 186, height: 92 },
                                                small: { top: 88, left: 150, width: 186, height: 92 },
                                                medium: { top: 132, left: 207, width: 256, height: 126 },
                                                large: { top: 167, left: 254, width: 314, height: 154 },
                                                extraLarge: { top: 261, left: 378, width: 464, height: 228 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        17: {
                                            assetConfig: {
                                                extraSmall: { top: 88, left: -14, width: 136, height: 104 },
                                                small: { top: 88, left: -14, width: 136, height: 104 },
                                                medium: { top: 131, left: -20, width: 187, height: 143 },
                                                large: { top: 167, left: -24, width: 230, height: 176 },
                                                extraLarge: { top: 261, left: -33, width: 340, height: 260 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        20: {
                                            assetConfig: {
                                                extraSmall: { top: -106, left: -94, width: 125, height: 173 },
                                                small: { top: -106, left: -94, width: 125, height: 173 },
                                                medium: { top: -137, left: -129, width: 172, height: 238 },
                                                large: { top: -162, left: -159, width: 211, height: 292 },
                                                extraLarge: { top: -226, left: -233, width: 312, height: 432 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        2: {
                                            assetConfig: {
                                                extraSmall: { top: -79, left: -97, width: 193, height: 112 },
                                                small: { top: -79, left: -97, width: 193, height: 112 },
                                                medium: { top: -98, left: -131, width: 266, height: 154 },
                                                large: { top: -113, left: -163, width: 326, height: 189 },
                                                extraLarge: { top: -155, left: -239, width: 482, height: 280 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        5: {
                                            assetConfig: {
                                                extraSmall: { top: 23, left: 215, width: 156, height: 240 },
                                                small: { top: 23, left: 215, width: 156, height: 240 },
                                                medium: { top: 42, left: 296, width: 215, height: 329 },
                                                large: { top: 58, left: 362, width: 264, height: 404 },
                                                extraLarge: { top: 98, left: 538, width: 390, height: 598 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        8: {
                                            assetConfig: {
                                                extraSmall: { top: 64, left: -212, width: 134, height: 164 },
                                                small: { top: 64, left: -212, width: 134, height: 164 },
                                                medium: { top: 98, left: -289, width: 184, height: 225 },
                                                large: { top: 126, left: -356, width: 226, height: 276 },
                                                extraLarge: { top: 201, left: -526, width: 334, height: 408 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        11: {
                                            assetConfig: {
                                                extraSmall: { top: -23, left: 69, width: 129, height: 158 },
                                                small: { top: -23, left: 69, width: 129, height: 158 },
                                                medium: { top: -21, left: 96, width: 178, height: 217 },
                                                large: { top: -21, left: 117, width: 218, height: 266 },
                                                extraLarge: { top: -16, left: 175, width: 322, height: 394 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        15: {
                                            assetConfig: {
                                                extraSmall: { top: -143, left: 157, width: 220, height: 72 },
                                                small: { top: -143, left: 157, width: 220, height: 72 },
                                                medium: { top: -186, left: 216, width: 303, height: 98 },
                                                large: { top: -222, left: 264, width: 372, height: 121 },
                                                extraLarge: { top: -316, left: 394, width: 550, height: 178 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        18: {
                                            assetConfig: {
                                                extraSmall: { top: -139, left: -241, width: 92, height: 92 },
                                                small: { top: -139, left: -241, width: 92, height: 92 },
                                                medium: { top: -180, left: -330, width: 126, height: 127 },
                                                large: { top: -216, left: -407, width: 154, height: 156 },
                                                extraLarge: { top: -306, left: -601, width: 228, height: 230 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        21: {
                                            assetConfig: {
                                                extraSmall: { top: 68, left: -69, width: 140, height: 166 },
                                                small: { top: 68, left: -69, width: 140, height: 166 },
                                                medium: { top: 103, left: -95, width: 193, height: 228 },
                                                large: { top: 133, left: -118, width: 237, height: 280 },
                                                extraLarge: { top: 211, left: -172, width: 350, height: 414 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        3: {
                                            assetConfig: {
                                                extraSmall: { top: 58, left: 138, width: 226, height: 150 },
                                                small: { top: 58, left: 138, width: 226, height: 150 },
                                                medium: { top: 90, left: 190, width: 311, height: 206 },
                                                large: { top: 116, left: 232, width: 381, height: 253 },
                                                extraLarge: { top: 186, left: 347, width: 564, height: 374 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        6: {
                                            assetConfig: {
                                                extraSmall: { top: -79, left: -77, width: 145, height: 200 },
                                                small: { top: -79, left: -77, width: 145, height: 200 },
                                                medium: { top: -96, left: -105, width: 200, height: 275 },
                                                large: { top: -114, left: -130, width: 245, height: 338 },
                                                extraLarge: { top: -155, left: -190, width: 362, height: 500 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        9: {
                                            assetConfig: {
                                                extraSmall: { top: 72, left: -222, width: 135, height: 149 },
                                                small: { top: 72, left: -222, width: 135, height: 149 },
                                                medium: { top: 110, left: -305, width: 185, height: 205 },
                                                large: { top: 140, left: -375, width: 227, height: 252 },
                                                extraLarge: { top: 220, left: -553, width: 336, height: 372 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        12: {
                                            assetConfig: {
                                                extraSmall: { top: -94, left: -220, width: 129, height: 164 },
                                                small: { top: -94, left: -220, width: 129, height: 164 },
                                                medium: { top: -118, left: -301, width: 178, height: 225 },
                                                large: { top: -140, left: -370, width: 218, height: 276 },
                                                extraLarge: { top: -195, left: -546, width: 322, height: 408 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        16: {
                                            assetConfig: {
                                                extraSmall: { top: -127, left: 47, width: 94, height: 100 },
                                                small: { top: -127, left: 47, width: 94, height: 100 },
                                                medium: { top: -165, left: 64, width: 129, height: 138 },
                                                large: { top: -195, left: 78, width: 158, height: 169 },
                                                extraLarge: { top: -276, left: 118, width: 234, height: 250 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        19: {
                                            assetConfig: {
                                                extraSmall: { top: 80, left: -36, width: 101, height: 105 },
                                                small: { top: 80, left: -36, width: 101, height: 105 },
                                                medium: { top: 119, left: -49, width: 139, height: 145 },
                                                large: { top: 152, left: -61, width: 171, height: 177 },
                                                extraLarge: { top: 239, left: -87, width: 252, height: 262 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        22: {
                                            assetConfig: {
                                                extraSmall: { top: -105, left: 209, width: 227, height: 168 },
                                                small: { top: -105, left: 209, width: 227, height: 168 },
                                                medium: { top: -134, left: 288, width: 312, height: 230 },
                                                large: { top: -158, left: 353, width: 383, height: 283 },
                                                extraLarge: { top: -220, left: 525, width: 566, height: 418 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                            ],
                        },
                        battlePass12: {
                            generalBackgroundColor: '#000',
                            pages: [
                                {
                                    items: {
                                        1: {
                                            assetConfig: {
                                                extraSmall: { top: -109, left: -66, width: 199, height: 150 },
                                                small: { top: -109, left: -66, width: 199, height: 150 },
                                                medium: { top: -140, left: -91, width: 273, height: 206 },
                                                large: { top: -165, left: -112, width: 335, height: 253 },
                                                extraLarge: { top: -232, left: -164, width: 496, height: 374 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        4: {
                                            assetConfig: {
                                                extraSmall: { top: 85, left: -207, width: 153, height: 116 },
                                                small: { top: 85, left: -207, width: 153, height: 116 },
                                                medium: { top: 128, left: -284, width: 211, height: 160 },
                                                large: { top: 163, left: -349, width: 258, height: 196 },
                                                extraLarge: { top: 255, left: -517, width: 382, height: 290 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        7: {
                                            assetConfig: {
                                                extraSmall: { top: -4, left: 100, width: 127, height: 241 },
                                                small: { top: -4, left: 100, width: 127, height: 241 },
                                                medium: { top: 4, left: 138, width: 174, height: 332 },
                                                large: { top: 11, left: 169, width: 214, height: 407 },
                                                extraLarge: { top: 29, left: 251, width: 316, height: 602 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        10: {
                                            assetConfig: {
                                                extraSmall: { top: 61, left: 226, width: 120, height: 159 },
                                                small: { top: 61, left: 226, width: 120, height: 159 },
                                                medium: { top: 93, left: 312, width: 164, height: 218 },
                                                large: { top: 121, left: 382, width: 202, height: 268 },
                                                extraLarge: { top: 192, left: 567, width: 298, height: 396 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        14: {
                                            assetConfig: {
                                                extraSmall: { top: -103, left: 224, width: 116, height: 163 },
                                                small: { top: -103, left: 224, width: 116, height: 163 },
                                                medium: { top: -131, left: 308, width: 160, height: 224 },
                                                large: { top: -156, left: 378, width: 196, height: 275 },
                                                extraLarge: { top: -217, left: 561, width: 290, height: 406 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        17: {
                                            assetConfig: {
                                                extraSmall: { top: -40, left: -227, width: 116, height: 127 },
                                                small: { top: -40, left: -227, width: 116, height: 127 },
                                                medium: { top: -44, left: -313, width: 159, height: 174 },
                                                large: { top: -49, left: -385, width: 195, height: 214 },
                                                extraLarge: { top: -59, left: -568, width: 288, height: 316 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        21: {
                                            assetConfig: {
                                                extraSmall: { top: 60, left: -54, width: 147, height: 183 },
                                                small: { top: 60, left: -54, width: 147, height: 183 },
                                                medium: { top: 93, left: -73, width: 202, height: 251 },
                                                large: { top: 119, left: -90, width: 248, height: 308 },
                                                extraLarge: { top: 189, left: -133, width: 366, height: 456 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        2: {
                                            assetConfig: {
                                                extraSmall: { top: 67, left: 172, width: 228, height: 147 },
                                                small: { top: 67, left: 172, width: 228, height: 147 },
                                                medium: { top: 102, left: 236, width: 314, height: 202 },
                                                large: { top: 132, left: 289, width: 385, height: 248 },
                                                extraLarge: { top: 209, left: 429, width: 570, height: 366 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        5: {
                                            assetConfig: {
                                                extraSmall: { top: 67, left: -220, width: 136, height: 148 },
                                                small: { top: 67, left: -220, width: 136, height: 148 },
                                                medium: { top: 102, left: -302, width: 186, height: 203 },
                                                large: { top: 132, left: -372, width: 229, height: 249 },
                                                extraLarge: { top: 209, left: -551, width: 338, height: 368 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        8: {
                                            assetConfig: {
                                                extraSmall: { top: -75, left: -77, width: 142, height: 212 },
                                                small: { top: -75, left: -77, width: 142, height: 212 },
                                                medium: { top: -93, left: -107, width: 195, height: 291 },
                                                large: { top: -108, left: -131, width: 239, height: 357 },
                                                extraLarge: { top: -147, left: -193, width: 354, height: 528 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        11: {
                                            assetConfig: {
                                                extraSmall: { top: -96, left: -221, width: 135, height: 172 },
                                                small: { top: -96, left: -221, width: 135, height: 172 },
                                                medium: { top: -121, left: -303, width: 185, height: 237 },
                                                large: { top: -143, left: -373, width: 227, height: 291 },
                                                extraLarge: { top: -198, left: -551, width: 336, height: 430 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        15: {
                                            assetConfig: {
                                                extraSmall: { top: -96, left: 47, width: 103, height: 172 },
                                                small: { top: -96, left: 47, width: 103, height: 172 },
                                                medium: { top: -122, left: 66, width: 141, height: 237 },
                                                large: { top: -143, left: 80, width: 173, height: 291 },
                                                extraLarge: { top: -199, left: 120, width: 256, height: 430 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        18: {
                                            assetConfig: {
                                                extraSmall: { top: 88, left: -10, width: 128, height: 107 },
                                                small: { top: 88, left: -10, width: 128, height: 107 },
                                                medium: { top: 132, left: -14, width: 175, height: 147 },
                                                large: { top: 167, left: -17, width: 215, height: 180 },
                                                extraLarge: { top: 260, left: -24, width: 318, height: 266 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        20: {
                                            assetConfig: {
                                                extraSmall: { top: -109, left: 201, width: 200, height: 167 },
                                                small: { top: -109, left: 201, width: 200, height: 167 },
                                                medium: { top: -140, left: 277, width: 274, height: 229 },
                                                large: { top: -166, left: 339, width: 337, height: 281 },
                                                extraLarge: { top: -232, left: 504, width: 498, height: 416 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        3: {
                                            assetConfig: {
                                                extraSmall: { top: 66, left: -184, width: 209, height: 154 },
                                                small: { top: 66, left: -184, width: 209, height: 154 },
                                                medium: { top: 100, left: -251, width: 288, height: 212 },
                                                large: { top: 129, left: -309, width: 353, height: 260 },
                                                extraLarge: { top: 205, left: -457, width: 522, height: 384 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        6: {
                                            assetConfig: {
                                                extraSmall: { top: 93, left: 193, width: 190, height: 101 },
                                                small: { top: 93, left: 193, width: 190, height: 101 },
                                                medium: { top: 137, left: 266, width: 261, height: 139 },
                                                large: { top: 174, left: 326, width: 320, height: 171 },
                                                extraLarge: { top: 271, left: 484, width: 474, height: 252 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        9: {
                                            assetConfig: {
                                                extraSmall: { top: -76, left: 44, width: 143, height: 218 },
                                                small: { top: -76, left: 44, width: 143, height: 218 },
                                                medium: { top: -96, left: 61, width: 196, height: 300 },
                                                large: { top: -111, left: 74, width: 241, height: 368 },
                                                extraLarge: { top: -151, left: 111, width: 356, height: 544 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        12: {
                                            assetConfig: {
                                                extraSmall: { top: -100, left: -222, width: 119, height: 172 },
                                                small: { top: -100, left: -222, width: 119, height: 172 },
                                                medium: { top: -128, left: -305, width: 163, height: 236 },
                                                large: { top: -150, left: -374, width: 200, height: 289 },
                                                extraLarge: { top: -210, left: -553, width: 296, height: 428 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        13: {
                                            assetConfig: {
                                                extraSmall: { top: -123, left: 209, width: 122, height: 120 },
                                                small: { top: -123, left: 209, width: 122, height: 120 },
                                                medium: { top: -160, left: 287, width: 168, height: 164 },
                                                large: { top: -190, left: 352, width: 206, height: 202 },
                                                extraLarge: { top: -268, left: 522, width: 304, height: 298 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        16: {
                                            assetConfig: {
                                                extraSmall: { top: -10, left: 202, width: 169, height: 95 },
                                                small: { top: -10, left: 202, width: 169, height: 95 },
                                                medium: { top: -6, left: 278, width: 233, height: 130 },
                                                large: { top: -2, left: 342, width: 285, height: 160 },
                                                extraLarge: { top: 12, left: 508, width: 422, height: 236 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        19: {
                                            assetConfig: {
                                                extraSmall: { top: 91, left: -6, width: 138, height: 109 },
                                                small: { top: 91, left: -6, width: 138, height: 109 },
                                                medium: { top: 134, left: -8, width: 190, height: 150 },
                                                large: { top: 170, left: -10, width: 233, height: 184 },
                                                extraLarge: { top: 266, left: -14, width: 344, height: 272 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        22: {
                                            assetConfig: {
                                                extraSmall: { top: -102, left: -94, width: 129, height: 179 },
                                                small: { top: -102, left: -94, width: 129, height: 179 },
                                                medium: { top: -132, left: -129, width: 178, height: 246 },
                                                large: { top: -156, left: -159, width: 218, height: 302 },
                                                extraLarge: { top: -219, left: -234, width: 322, height: 446 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                            ],
                        },
                    },
                    Ie = 'defaultConfig',
                    Oe = 'none',
                    ke = ((e, t) => {
                        const u = (0, i.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: l, mocks: s }) {
                                const d = (0, i.useRef)([]),
                                    h = (u, i, a) => {
                                        var r;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = ce,
                                                context: i = 'model',
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
                                                        r = i.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (u, r) => {
                                                        const l = 'string' == typeof r ? `${i}.${r}` : i,
                                                            s = n.O.view.addModelObserver(l, t, !0);
                                                        return (a.set(s, u), e && u(o(r)), s);
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
                                                        for (var e, u = de(a.keys()); !(e = u()).done; ) r(e.value, t);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(i),
                                            l =
                                                'real' === u
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            s = (e) =>
                                                'mocks' === u ? (null == a ? void 0 : a.getter(e)) : l.readByPath(e),
                                            h = (e) => d.current.push(e),
                                            c = e({
                                                mode: u,
                                                readByPath: s,
                                                externalModel: l,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const t = s(e),
                                                            i = se.LO.box(t, { equals: le });
                                                        return (
                                                            'real' === u &&
                                                                l.subscribe(
                                                                    (0, se.aD)((e) => i.set(e)),
                                                                    e,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    array: (e, t) => {
                                                        const i = null != t ? t : s(e),
                                                            a = se.LO.box(i, { equals: le });
                                                        return (
                                                            'real' === u &&
                                                                l.subscribe(
                                                                    (0, se.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const i = null != t ? t : s(e),
                                                            a = se.LO.box(i, { equals: le });
                                                        return (
                                                            'real' === u &&
                                                                l.subscribe(
                                                                    (0, se.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const i = s(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = se.LO.box(i[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    l.subscribe(
                                                                        (0, se.aD)((t) => {
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
                                                                n = r.reduce(
                                                                    (e, [t, u]) => ((e[u] = se.LO.box(i[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    l.subscribe(
                                                                        (0, se.aD)((e) => {
                                                                            r.forEach(([t, u]) => {
                                                                                n[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: h,
                                            }),
                                            m = { mode: u, model: c, externalModel: l, cleanup: h };
                                        return {
                                            model: c,
                                            controls: 'mocks' === u && a ? a.controls(m) : t(m),
                                            externalModel: l,
                                            mode: u,
                                        };
                                    },
                                    c = (0, i.useRef)(!1),
                                    m = (0, i.useState)(r),
                                    g = m[0],
                                    E = m[1],
                                    A = (0, i.useState)(() => h(r, o, s)),
                                    _ = A[0],
                                    F = A[1];
                                return (
                                    (0, i.useEffect)(() => {
                                        c.current ? F(h(g, o, s)) : (c.current = !0);
                                    }, [s, g, o]),
                                    (0, i.useEffect)(() => {
                                        E(r);
                                    }, [r]),
                                    (0, i.useEffect)(
                                        () => () => {
                                            (_.externalModel.dispose(), d.current.forEach((e) => e()));
                                        },
                                        [_],
                                    ),
                                    a().createElement(u.Provider, { value: _ }, l)
                                );
                            },
                            () => (0, i.useContext)(u),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = Object.assign({}, e.primitives(['currentCollection']), e.primitives(['page']), {
                                    root: e.object(),
                                    tabs: e.array('tabs'),
                                    items: e.array('items'),
                                    pagesBackgrounds: e.array('pagesBackgrounds'),
                                    rewardsInfo: e.array('rewardsInfo'),
                                    pageNumber: se.LO.box(-1),
                                    isReadyForProgressAnimation: se.LO.box(!1),
                                    displayCollection: se.LO.box(Oe),
                                }),
                                u = (0, Te.Om)(
                                    () => {
                                        const e = t.root.get().currentCollection;
                                        return Ne[Be(e)] || Ne.defaultConfig;
                                    },
                                    { equals: le },
                                ),
                                i = (0, Te.Om)(
                                    () => {
                                        const e = ge(t.pagesBackgrounds.get(), t.pageNumber.get());
                                        return {
                                            main: null == e ? void 0 : e.main,
                                            logicalCircuit: null == e ? void 0 : e.logicalCircuit,
                                        };
                                    },
                                    { equals: le },
                                ),
                                a = (0, Te.Om)(() => {
                                    const e = { pages: [], items: {}, bubbles: [] },
                                        i = u(),
                                        a = t.items.get();
                                    return (
                                        i.pages.forEach(({ items: t }) => {
                                            const u = [],
                                                i = {};
                                            let r = 0;
                                            for (const e in t)
                                                if (Object.prototype.hasOwnProperty.call(t, e)) {
                                                    const n = Number(e),
                                                        o = Fe(a, (e) => e.itemId === n);
                                                    if (!o) continue;
                                                    ((i[n] = Object.assign(t[e], o)),
                                                        u.push(i[n]),
                                                        i[n].state === ne.New && r++);
                                                }
                                            (e.pages.push({ pageItems: u }),
                                                Object.assign(e.items, i),
                                                e.bubbles.push(r));
                                        }),
                                        e
                                    );
                                }),
                                r = (0, Te.Om)(() =>
                                    _e(t.tabs.get(), (e) =>
                                        e.hasNewItems
                                            ? {
                                                  id: e.collectionName,
                                                  title: Le(
                                                      R.strings,
                                                      `collection_${e.collectionName}.collection.season`,
                                                  ),
                                                  notification: { type: 'dot', size: 'large' },
                                              }
                                            : {
                                                  id: e.collectionName,
                                                  title: Le(
                                                      R.strings,
                                                      `collection_${e.collectionName}.collection.season`,
                                                  ),
                                              },
                                    ),
                                ),
                                n = (0, Te.Om)(() => a().items),
                                o = (0, Te.Om)(() => t.pageNumber.get()),
                                l = (0, Te.Om)(() => a().pages[o()].pageItems, { equals: le }),
                                s = (0, Te.Om)(() => {
                                    const e = t.root.get().currentCollection;
                                    return !Ne[Be(e)] || e === Ie;
                                }),
                                d = (0, Te.Om)(() => {
                                    const e = t.root.get();
                                    return e.prevReceivedItemsCount === e.maxItemsCount;
                                }),
                                h = (0, Te.Om)(
                                    () => {
                                        let e = !1;
                                        const u = (u) =>
                                            u === oe.JustReceived
                                                ? e || !t.isReadyForProgressAnimation.get()
                                                    ? oe.Unreceived
                                                    : ((e = !0), oe.JustReceived)
                                                : u;
                                        return _e(t.rewardsInfo.get(), ({ state: e, requiredItemsCount: t }) => ({
                                            state: u(e),
                                            requiredItemsCount: t,
                                        }));
                                    },
                                    { equals: le },
                                ),
                                c = (0, Te.Om)((e) => Fe(t.rewardsInfo.get(), (t) => t.requiredItemsCount === e), {
                                    equals: le,
                                }),
                                m = (0, Te.Om)(
                                    (e) => {
                                        const t = c(e);
                                        return t
                                            ? pe(t.rewards, (e) => {
                                                  return {
                                                      index: e.index,
                                                      name: e.name,
                                                      getImage: (t) => ie(e, t),
                                                      value: e.value,
                                                      valueType:
                                                          ((t = e.name),
                                                          Q.includes(t)
                                                              ? j.MULTI
                                                              : Z.includes(t)
                                                                ? j.CURRENCY
                                                                : J.includes(t)
                                                                  ? j.NUMBER
                                                                  : ee.includes(t)
                                                                    ? j.PREMIUM_PLUS
                                                                    : j.STRING),
                                                      special: e.overlayType,
                                                      tooltipArgs: ae(
                                                          { tooltipId: e.tooltipId },
                                                          Number(e.tooltipContentId),
                                                          { ignoreShowDelay: !0 },
                                                      ),
                                                  };
                                                  var t;
                                              })
                                            : [];
                                    },
                                    { equals: le },
                                ),
                                g = (0, Te.Om)(() => {
                                    const e = a().bubbles;
                                    let t = 0,
                                        u = 0,
                                        i = -1;
                                    return (
                                        e.forEach((e, a) => {
                                            (a < o() ? (t += e) : a > o() && (u += e), e > 0 && i < 0 && (i = a));
                                        }),
                                        { prevBubbleCount: t, nextBubbleCount: u, firstPageWithBubble: i }
                                    );
                                }),
                                E = (0, Te.Om)(() => {
                                    const e = t.root.get(),
                                        u = e.receivedItemsCount,
                                        i = e.prevReceivedItemsCount,
                                        a = e.maxItemsCount;
                                    return {
                                        value: t.isReadyForProgressAnimation.get() ? u : i,
                                        deltaFrom: i,
                                        maxItemsCount: a,
                                    };
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    getTabs: r,
                                    getPageCount: (0, Te.Om)(() => a().pages.length),
                                    getPageNumber: o,
                                    getCurrentPageCollectionElements: l,
                                    getItems: n,
                                    getItem: (0, Te.Om)((e) => {
                                        var t;
                                        return null == (t = n()) ? void 0 : t[e];
                                    }),
                                    levelInfo: h,
                                    getRewardsByLevel: m,
                                    getProgressParams: E,
                                    getConfig: u,
                                    isDefaultTemplate: s,
                                    isProgressAnimationEnded: d,
                                    getCountOfNewElementsPerPage: g,
                                    getData: a,
                                    getPageBackgrounds: i,
                                },
                            });
                        },
                        ({ model: e, externalModel: t, cleanup: u }) => {
                            const i = (0, se.aD)(() => {
                                    e.isReadyForProgressAnimation.get() || e.isReadyForProgressAnimation.set(!0);
                                }),
                                a = t.createCallbackNoArgs('onFinishTutorial'),
                                r = (t) => {
                                    const u = Pe(0, e.computes.getPageCount() - 1, t);
                                    u === t && (e.pageNumber.set(u), i(), e.root.get().isTutorial && a());
                                },
                                n = (0, se.aD)((t) => {
                                    const u = e.currentCollection.get();
                                    if (e.displayCollection.get() === u) return;
                                    e.displayCollection.set(u);
                                    const i = e.page.get();
                                    i < 0
                                        ? t < 0
                                            ? (e.pageNumber.set(0), e.isReadyForProgressAnimation.set(!0))
                                            : e.pageNumber.set(t)
                                        : e.pageNumber.set(i);
                                });
                            u(
                                (0, se.EH)(() => {
                                    const t = e.computes.getCountOfNewElementsPerPage().firstPageWithBubble;
                                    n(t);
                                }),
                            );
                            const o = (0, se.aD)(() => r(e.computes.getPageNumber() + 1)),
                                l = (0, se.aD)(() => r(e.computes.getPageNumber() - 1)),
                                s = t.createCallback((e) => ({ collectionName: e }), 'onTabSelected'),
                                d = (0, se.aD)((t) => {
                                    t !== e.root.get().currentCollection && s(t);
                                });
                            return {
                                enableProgressAnimation: i,
                                finishTutorial: a,
                                nextPage: o,
                                previousPage: l,
                                selectTab: d,
                                setItemReceived: t.createCallback((e) => ({ itemId: e }), 'onSetItemReceived'),
                                openItemPreview: t.createCallback(
                                    (e, t) => ({ itemId: e, currentPage: t }),
                                    'onOpenItemPreview',
                                ),
                                setProgressItemsReceived: t.createCallbackNoArgs('onSetProgressItemsReceived'),
                                setRewardReceived: t.createCallback(
                                    (e) => ({ requiredItemsCount: e }),
                                    'onSetRewardReceived',
                                ),
                                close: t.createCallbackNoArgs('onClose'),
                                viewLoaded: t.createCallback(
                                    () => ({ pagesCount: e.computes.getPageCount() }),
                                    'onViewLoaded',
                                ),
                            };
                        },
                    ),
                    Ue = ke[0],
                    Me = ke[1],
                    He = 'App_base_e6',
                    Ge = 'App_content_de',
                    $e = 'App_animationBg_17';
                let ze;
                !(function (e) {
                    ((e.Small = 'small'), (e.Big = 'big'));
                })(ze || (ze = {}));
                const We = (e, t) => (e >= 2560 && t >= 1440 ? 'ultraSize' : ''),
                    je = (e, t, u) => {
                        const i = We(t, u);
                        switch (e) {
                            case F.ExtraSmall:
                                return 'extraSmall';
                            case F.Small:
                                return 'small';
                            case F.ExtraLarge:
                                return i ? 'extraLarge' : 'large';
                            case F.Large:
                                return 'large';
                            case F.Medium:
                            default:
                                return 'medium';
                        }
                    },
                    qe = {
                        base: 'CollectionLayout_base_e4',
                        fadeIn: 'CollectionLayout_fadeIn_bd',
                        base__firstAnimation: 'CollectionLayout_base__firstAnimation_8d',
                        bg: 'CollectionLayout_bg_53',
                        base__ultraSize: 'CollectionLayout_base__ultraSize_60',
                        vignetteBg: 'CollectionLayout_vignetteBg_53',
                        slideUp: 'CollectionLayout_slideUp_d7',
                        fadeOut: 'CollectionLayout_fadeOut_9c',
                        raysAppearance: 'CollectionLayout_raysAppearance_2f',
                        rotate: 'CollectionLayout_rotate_67',
                        slideUpWithScale: 'CollectionLayout_slideUpWithScale_60',
                    },
                    Ye = (0, M.Pi)(({ children: e, hasAnimation: t = !0 }) => {
                        const u = (0, i.useState)(!1),
                            r = u[0],
                            n = u[1],
                            o = Me().model,
                            l = f(),
                            s = l.remScreenWidth,
                            d = l.remScreenHeight,
                            h = o.computes.getConfig().generalBackgroundColor,
                            c = o.root.get().generalBackground;
                        (0, i.useEffect)(
                            () =>
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
                                    n(!0);
                                }),
                            [],
                        );
                        return c && r
                            ? a().createElement(
                                  'div',
                                  { className: E()(qe.base, t && qe.base__firstAnimation, qe[`base__${We(s, d)}`]) },
                                  a().createElement('div', {
                                      className: qe.bg,
                                      style: { backgroundColor: h, backgroundImage: `url(${c})` },
                                  }),
                                  a().createElement(
                                      'div',
                                      null,
                                      a().createElement('div', { className: qe.vignetteBg }),
                                      e,
                                  ),
                              )
                            : null;
                    });
                var Ve = u(738),
                    Xe = u(6);
                function Ke(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const Qe = {
                        playHighlight() {
                            Ke('highlight');
                        },
                        playClick() {
                            Ke('play');
                        },
                        playYes() {
                            Ke('yes1');
                        },
                    },
                    Ze = [
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
                function Je(e) {
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
                const et = (e, t, u = {}, i = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: O.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: i,
                                },
                                u,
                            ),
                        );
                    },
                    tt = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            n = e.onMouseLeave,
                            o = e.onMouseDown,
                            l = e.onClick,
                            s = e.ignoreShowDelay,
                            d = void 0 !== s && s,
                            h = e.ignoreMouseClick,
                            c = void 0 !== h && h,
                            m = e.decoratorId,
                            g = void 0 === m ? 0 : m,
                            E = e.isEnabled,
                            A = void 0 === E || E,
                            _ = e.targetId,
                            F = void 0 === _ ? 0 : _,
                            p = e.onShow,
                            D = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    i,
                                    a = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) ((u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Ze);
                        const C = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            B = (0, i.useMemo)(
                                () =>
                                    F ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let u,
                                            i = R.invalid('resId'),
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
                                                    (i = window.subViews[u].id)),
                                            { callerUrl: a, caller: u, stack: t, resId: i }
                                        );
                                    })().resId,
                                [F],
                            ),
                            w = (0, i.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (et(u, g, { isMouseEvent: !0, on: !0, arguments: Je(a) }, B),
                                    p && p(),
                                    (C.current.isVisible = !0));
                            }, [u, g, a, B, p]),
                            v = (0, i.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        et(u, g, { on: !1 }, B),
                                        C.current.isVisible && D && D(),
                                        (C.current.isVisible = !1));
                                }
                            }, [u, g, B, D]),
                            b = (0, i.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(C.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        ((0, i.useEffect)(() => {
                            const e = C.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', b, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', b, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === A && v();
                            }, [A, v]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        (window.removeEventListener('mouseleave', v), v());
                                    }
                                ),
                                [v],
                            ));
                        return A
                            ? (0, i.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(C.current.timeoutId),
                                                      (C.current.timeoutId = window.setTimeout(w, d ? 100 : 400)),
                                                      r && r(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (v(), null == n || n(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === c && v(), null == l || l(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === c && v(), null == o || o(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : t;
                        var S;
                    },
                    ut = (e, t) => {
                        let u;
                        const i = setTimeout(() => {
                            u = e();
                        }, t);
                        return () => {
                            ('function' == typeof u && u(), clearTimeout(i));
                        };
                    },
                    it = {
                        base: 'CollectionElement_base_36',
                        background: 'CollectionElement_background_81',
                        background__received: 'CollectionElement_background__received_be',
                        background__justReceived: 'CollectionElement_background__justReceived_58',
                        brightnessRevert: 'CollectionElement_brightnessRevert_14',
                        background__unreceived: 'CollectionElement_background__unreceived_58',
                        shine: 'CollectionElement_shine_db',
                        shineFadeIn: 'CollectionElement_shineFadeIn_a9',
                        shine__hidden: 'CollectionElement_shine__hidden_b9',
                        shineFadeOut: 'CollectionElement_shineFadeOut_de',
                        blinkWrapper: 'CollectionElement_blinkWrapper_fc',
                        blinkInner: 'CollectionElement_blinkInner_4f',
                        flareAnimation: 'CollectionElement_flareAnimation_45',
                        blink: 'CollectionElement_blink_15',
                    },
                    at = {
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        config: { duration: 200 },
                    },
                    rt = 'CollectionElementMask_base_57',
                    nt = 'CollectionElementMask_base__hidden_5e',
                    ot = 'CollectionElementMask_mask_49',
                    lt = 'CollectionElementMask_base__animate_33';
                var st;
                !(function (e) {
                    ((e[(e.Init = 0)] = 'Init'), (e[(e.Active = 1)] = 'Active'), (e[(e.Done = 2)] = 'Done'));
                })(st || (st = {}));
                const dt = (0, i.memo)(({ delay: e = 0, onAnimationEnd: t, children: u, className: r }) => {
                    const n = (0, i.useState)(st.Init),
                        o = n[0],
                        l = n[1];
                    ((0, i.useEffect)(
                        () =>
                            ut(
                                () => {
                                    l(st.Active);
                                },
                                Math.max(e, 150),
                            ),
                        [e],
                    ),
                        (0, i.useEffect)(
                            () =>
                                o === st.Active
                                    ? ut(() => l(st.Done), 1250)
                                    : o === st.Done
                                      ? ut(() => (null == t ? void 0 : t()), 1e3)
                                      : void 0,
                            [o, t],
                        ));
                    const s = E()(rt, o === st.Init ? nt : lt, r);
                    return a().createElement('div', { className: s }, a().createElement('div', { className: ot }, u));
                });
                var ht;
                !(function (e) {
                    ((e.None = 'none'),
                        (e.Init = 'init'),
                        (e.Receiving = 'receiving'),
                        (e.Blink = 'blink'),
                        (e.Finish = 'finish'),
                        (e.End = 'end'));
                })(ht || (ht = {}));
                const ct = {
                        [ht.None]: { nextStep: ht.Init, delay: 0 },
                        [ht.Init]: { nextStep: ht.Receiving, delay: 500 },
                        [ht.Receiving]: { nextStep: ht.Blink, delay: 500 },
                        [ht.Blink]: { nextStep: ht.Finish, delay: 1600 },
                        [ht.Finish]: { nextStep: ht.End, delay: 3e3 },
                        [ht.End]: { nextStep: ht.End, delay: 1e3 },
                    },
                    mt = (0, M.Pi)(({ assetConfig: e, hasAssetForUnreceivedState: t, itemId: u }) => {
                        const r = Me(),
                            n = r.model,
                            o = r.controls,
                            l = n.computes.getItem(u),
                            s = n.computes.getPageNumber(),
                            d = (0, i.useState)(ht.None),
                            h = d[0],
                            c = d[1],
                            m = f(),
                            g = m.mediaSize,
                            A = m.remScreenWidth,
                            _ = m.remScreenHeight,
                            F = je(g, A, _),
                            p = (null == l ? void 0 : l.state) || ne.Unreceived,
                            D = (null == l ? void 0 : l.unreceivedImagePath) || '',
                            C = (null == l ? void 0 : l.receivedImagePath) || '';
                        ((0, i.useEffect)(() => {
                            if ((h !== ht.End && h !== ht.None) || (h === ht.None && p === ne.New))
                                return ((e) => {
                                    const t = ct[e].nextStep;
                                    return ut(() => {
                                        c(t);
                                    }, ct[t].delay);
                                })(h);
                        }, [h, p]),
                            (0, i.useEffect)(() => {
                                (h === ht.Init && (Ke(R.sounds.collection_get_elements()), o.setItemReceived(u)),
                                    h === ht.Blink &&
                                        (Ke(R.sounds.collection_element_flash()),
                                        n.isReadyForProgressAnimation.get() || o.enableProgressAnimation()));
                            }, [h, o, u, n.isReadyForProgressAnimation]));
                        const B = e[F],
                            w = { width: `${B.width}rem`, height: `${B.height}rem` },
                            v = p === ne.Received && h === ht.None,
                            b = ![ht.None, ht.End].includes(h),
                            S = h === ht.Blink,
                            x = [ht.Receiving, ht.Blink, ht.Finish, ht.End].includes(h),
                            y = v ? C : t ? D : C;
                        return a().createElement(
                            tt,
                            {
                                contentId: R.views.lobby.collection.tooltips.CollectionItemTooltipView('resId'),
                                args: { itemId: u },
                            },
                            a().createElement(
                                'div',
                                {
                                    className: it.base,
                                    onClick: () => {
                                        p !== ne.Unreceived && (Qe.playClick(), o.openItemPreview(u, s));
                                    },
                                    onMouseEnter: Qe.playHighlight,
                                },
                                a().createElement('div', {
                                    className: E()(
                                        it.background,
                                        v ? it.background__received : it.background__unreceived,
                                    ),
                                    style: { backgroundImage: `url(${y})` },
                                }),
                                b &&
                                    a().createElement('div', {
                                        className: E()(it.shine, h !== ht.Init && it.shine__hidden),
                                    }),
                                S &&
                                    a().createElement(
                                        'div',
                                        { className: it.blinkWrapper, style: { maskImage: `url(${C})` } },
                                        a().createElement(
                                            'div',
                                            { className: it.blinkInner },
                                            a().createElement('div', { className: it.blink }),
                                        ),
                                    ),
                                x &&
                                    a().createElement(
                                        dt,
                                        null,
                                        a().createElement('div', {
                                            className: E()(
                                                it.background,
                                                h === ht.Receiving
                                                    ? it.background__justReceived
                                                    : it[`background__${p}`],
                                            ),
                                            style: { width: w.width, height: w.height, backgroundImage: `url(${C})` },
                                        }),
                                    ),
                            ),
                        );
                    }),
                    gt = 'CollectionElements_base_db',
                    Et = 'CollectionElements_defaultElementsTemplate_92',
                    At = 'CollectionElements_collectionElement_6a',
                    _t = (0, M.Pi)(() => {
                        const e = Me().model.computes,
                            t = f(),
                            u = t.mediaSize,
                            i = t.remScreenWidth,
                            r = t.remScreenHeight,
                            n = je(u, i, r),
                            o = (0, Ve.useTransition)(e.getCurrentPageCollectionElements(), at),
                            l = e.isDefaultTemplate() ? Et : At;
                        return a().createElement(
                            'div',
                            { className: gt },
                            o((t, u) => {
                                const i = u.assetConfig[n],
                                    r = e.isDefaultTemplate()
                                        ? {}
                                        : {
                                              transform: `translate(${i.left}rem, ${i.top}rem)`,
                                              width: `${i.width}rem`,
                                              height: `${i.height}rem`,
                                          };
                                return a().createElement(
                                    Xe.animated.div,
                                    { style: Object.assign({}, t, r), className: l },
                                    a().createElement(mt, u),
                                );
                            }),
                        );
                    }),
                    Ft = 'CollectionNavigation_base_c6',
                    pt = 'CollectionNavigation_arrow_93',
                    Dt = 'CollectionNavigation_arrow__left_51',
                    ft = 'CollectionNavigation_arrow__right_0e',
                    Ct = 'CollectionNavigation_content_66',
                    Bt = 'CollectionNavigation_counterBox_8f',
                    wt = 'CollectionNavigation_counter_96',
                    vt = {
                        base: 'ArrowAnimation_base_03',
                        base__hidden: 'ArrowAnimation_base__hidden_29',
                        fadeOut: 'ArrowAnimation_fadeOut_e0',
                        icon: 'ArrowAnimation_icon_1d',
                        icon__left: 'ArrowAnimation_icon__left_7c',
                        icon__disabled: 'ArrowAnimation_icon__disabled_bf',
                        shine: 'ArrowAnimation_shine_12',
                        shineFadeIn: 'ArrowAnimation_shineFadeIn_5c',
                        animationArrows: 'ArrowAnimation_animationArrows_8b',
                        iconAnimation: 'ArrowAnimation_iconAnimation_00',
                        moved: 'ArrowAnimation_moved_c4',
                        iconAnimation__secondary: 'ArrowAnimation_iconAnimation__secondary_f9',
                        animationArrows__left: 'ArrowAnimation_animationArrows__left_9c',
                        movedLeft: 'ArrowAnimation_movedLeft_cc',
                    };
                let bt;
                !(function (e) {
                    ((e.Left = 'left'), (e.Right = 'right'));
                })(bt || (bt = {}));
                const St = ({ direction: e = bt.Right, hasAnimation: t = !1, onAnimationEnd: u }) => {
                        const r = (0, i.useState)(t),
                            n = r[0],
                            o = r[1];
                        return (
                            (0, i.useEffect)(() => {
                                !t && n && o(!1);
                            }, [t, n]),
                            (0, i.useEffect)(() => {
                                if (!n) {
                                    if (!u) return;
                                    return ut(() => {
                                        u();
                                    }, 800);
                                }
                                return ut(() => {
                                    o(!1);
                                }, 4e3);
                            }, [n, u]),
                            a().createElement(
                                'div',
                                { className: E()(vt.base, !n && vt.base__hidden) },
                                a().createElement('div', { className: E()(vt.shine) }),
                                a().createElement(
                                    'div',
                                    { className: E()(vt.animationArrows, vt[`animationArrows__${e}`]) },
                                    a().createElement(
                                        'div',
                                        { className: vt.iconAnimation },
                                        a().createElement('div', { className: E()(vt.icon, vt[`icon__${e}`]) }),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: E()(vt.iconAnimation, vt.iconAnimation__secondary) },
                                        a().createElement('div', { className: E()(vt.icon, vt[`icon__${e}`]) }),
                                    ),
                                ),
                            )
                        );
                    },
                    xt = {
                        base: 'ArrowButton_base_78',
                        base__disabled: 'ArrowButton_base__disabled_e4',
                        icon: 'ArrowButton_icon_40',
                        icon__left: 'ArrowButton_icon__left_f7',
                    };
                let Rt;
                !(function (e) {
                    ((e.Left = 'left'), (e.Right = 'right'));
                })(Rt || (Rt = {}));
                const yt = ({
                        onClick: e,
                        direction: t = Rt.Right,
                        isDisabled: u = !1,
                        hasAnimation: r = !0,
                        className: n,
                    }) => {
                        const o = (0, i.useState)(r && !u),
                            l = o[0],
                            s = o[1],
                            d = (0, i.useState)(!1),
                            h = d[0],
                            c = d[1];
                        return (
                            (0, i.useEffect)(() => {
                                if (!u && r)
                                    return h
                                        ? void 0
                                        : ut(() => {
                                              c(!0);
                                          }, 5500);
                            }, [h, r, u]),
                            a().createElement(
                                'div',
                                {
                                    className: E()(xt.base, u && xt.base__disabled, n),
                                    onClick: () => {
                                        (Qe.playClick(), s(!1), e());
                                    },
                                    onMouseEnter: Qe.playHighlight,
                                },
                                a().createElement('div', { className: E()(xt.icon, xt[`icon__${t}`]) }),
                                h &&
                                    a().createElement(St, {
                                        direction: t,
                                        hasAnimation: l && r && !u,
                                        onAnimationEnd: () => c(!1),
                                    }),
                            )
                        );
                    },
                    Tt = {
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
                    Lt = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function Pt() {
                    return (
                        (Pt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        Pt.apply(this, arguments)
                    );
                }
                const Nt = (e) => {
                        let t = e.value,
                            u = e.isEmpty,
                            i = e.className,
                            r = e.size,
                            n = void 0 === r ? 'normal' : r,
                            o = e.fadeInAnimation,
                            l = void 0 !== o && o,
                            s = e.hide,
                            d = void 0 !== s && s,
                            h = e.maximumNumber,
                            c = void 0 === h ? 99 : h,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    i,
                                    a = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) ((u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Lt);
                        const g = u ? null : t,
                            A = 'string' == typeof g;
                        if ((g && !A && g < 0) || 0 === g) return null;
                        const _ = g && !A && g > c,
                            F = E()(
                                Tt.base,
                                Tt[`base__${n}`],
                                l && Tt.base__animated,
                                d && Tt.base__hidden,
                                !g && Tt.base__pattern,
                                u && Tt.base__empty,
                                i,
                            );
                        return a().createElement(
                            'div',
                            Pt({ className: F }, m),
                            a().createElement('div', { className: Tt.bg }),
                            a().createElement('div', { className: Tt.pattern }),
                            a().createElement(
                                'div',
                                { className: E()(Tt.value, A && Tt.value__text) },
                                _ ? c : g,
                                _ && a().createElement('span', { className: Tt.plus }, '+'),
                            ),
                        );
                    },
                    It = 'FormatText_base_d0',
                    Ot = ({ binding: e, text: t = '', classMix: u, alignment: r = fe.left, formatWithBrackets: n }) => {
                        if (null === t) return (console.error("FormatText was supplied with 'null'"), null);
                        const o = n && e ? Ce(t, e) : t;
                        return a().createElement(
                            i.Fragment,
                            null,
                            o.split('\n').map((t, n) =>
                                a().createElement(
                                    'div',
                                    { className: E()(It, u), key: `${t}-${n}` },
                                    ((e, t, u) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (u && e in u ? u[e] : ye(e, t))))(
                                        t,
                                        r,
                                        e,
                                    ).map((e, t) => a().createElement(i.Fragment, { key: `${t}-${e}` }, e)),
                                ),
                            ),
                        );
                    };
                var kt = u(613);
                (Date.now(), kt.Ew.getRegionalDateTime, kt.Ew.getFormattedDateTime);
                const Ut = (e, t) => {
                    const u = (0, i.useRef)();
                    return (
                        (0, i.useEffect)(() => {
                            (t && !t(e)) || (u.current = e);
                        }, [t, e]),
                        u.current
                    );
                };
                O.Sw.instance;
                let Mt;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(Mt || (Mt = {}));
                O.Sw.instance;
                const Ht = Ut,
                    Gt = 'PageCounter_base_95',
                    $t = 'PageCounter_bubble_c0',
                    zt = 'PageCounter_counter_a7',
                    Wt = 'PageCounter_counterText_d1',
                    jt = 'PageCounter_currentValue_fa',
                    qt = 'PageCounter_currentValueWrapper_ae',
                    Yt = R.strings.collections.navigation.pageCounter();
                let Vt;
                !(function (e) {
                    ((e.Up = 'up'), (e.Down = 'down'), (e.None = 'none'));
                })(Vt || (Vt = {}));
                const Xt = { [Vt.Up]: 'translateY(100%)', [Vt.Down]: 'translateY(-100%)', [Vt.None]: 'translateY(0%)' },
                    Kt = {
                        [Vt.Up]: 'translateY(-100%)',
                        [Vt.Down]: 'translateY(100%)',
                        [Vt.None]: 'translateY(-100%)',
                    };
                let Qt;
                !(function (e) {
                    ((e.Next = 'next'), (e.Previous = 'previous'));
                })(Qt || (Qt = {}));
                const Zt = (0, M.Pi)(({ countRange: e, className: t }) => {
                        var u;
                        const i = Me().model.computes,
                            r = i.getPageCount(),
                            n = i.getPageNumber(),
                            o = null != (u = Ht(n)) ? u : n,
                            l = i.getCountOfNewElementsPerPage(),
                            s = l.prevBubbleCount,
                            d = l.nextBubbleCount,
                            h = e === Qt.Next ? d : s,
                            c = n === o ? Vt.None : n > o ? Vt.Up : Vt.Down,
                            m = (0, Xe.useTransition)(n, {
                                from: { transform: Xt[c], opacity: c === Vt.None ? 1 : 0 },
                                enter: { transform: 'translateY(0%)', opacity: 1 },
                                leave: { transform: Kt[c], opacity: 0 },
                                keys: n,
                            });
                        return a().createElement(
                            'div',
                            { className: E()(Gt, t) },
                            a().createElement(
                                'div',
                                { className: qt },
                                m((e, t) => a().createElement(Xe.animated.div, { className: jt, style: e }, t + 1)),
                            ),
                            a().createElement(Ot, { classMix: Wt, text: Yt, binding: { pageCount: r } }),
                            h > 0 &&
                                a().createElement('div', { className: $t }, a().createElement(Nt, { className: zt })),
                        );
                    }),
                    Jt = (0, M.Pi)(({ children: e }) => {
                        const t = Me(),
                            u = t.model,
                            i = t.controls,
                            r = u.root.get().isTutorial,
                            n = u.displayCollection.get(),
                            o = u.computes.getPageCount(),
                            l = u.computes.getPageNumber();
                        return a().createElement(
                            'div',
                            { className: Ft },
                            a().createElement(
                                'div',
                                { className: E()(pt, Dt) },
                                a().createElement(yt, {
                                    hasAnimation: r,
                                    isDisabled: 0 === l,
                                    direction: Rt.Left,
                                    onClick: () => {
                                        l > 0 && i.previousPage();
                                    },
                                }),
                                a().createElement(
                                    'div',
                                    { className: Bt },
                                    a().createElement(Zt, { countRange: Qt.Previous, className: wt, key: n }),
                                ),
                            ),
                            a().createElement('div', { className: Ct }, e),
                            a().createElement(
                                'div',
                                { className: E()(pt, ft) },
                                a().createElement(yt, {
                                    hasAnimation: r,
                                    isDisabled: l === o - 1,
                                    direction: Rt.Right,
                                    onClick: () => {
                                        l < o - 1 && i.nextPage();
                                    },
                                }),
                                a().createElement(
                                    'div',
                                    { className: Bt },
                                    a().createElement(Zt, { countRange: Qt.Next, className: wt, key: n }),
                                ),
                            ),
                        );
                    }),
                    eu = {
                        base: 'Content_base_73',
                        content: 'Content_content_3a',
                        base__ultraSize: 'Content_base__ultraSize_f5',
                        bg: 'Content_bg_0a',
                        bg__threadBgPosition: 'Content_bg__threadBgPosition_f3',
                    },
                    tu = (0, M.Pi)(() => {
                        const e = f(),
                            t = e.remScreenWidth,
                            u = e.remScreenHeight,
                            i = Me().model.computes.getPageBackgrounds(),
                            r = i.main,
                            n = i.logicalCircuit,
                            o = (0, Ve.useTransition)(
                                r,
                                Object.assign({}, at, { onDestroyed: () => Ke(R.sounds.collection_page_scroll()) }),
                            ),
                            l = (0, Ve.useTransition)(n, at);
                        return a().createElement(
                            'div',
                            { className: E()(eu.base, eu[`base__${We(t, u)}`]) },
                            r &&
                                a().createElement(
                                    Jt,
                                    null,
                                    o((e) =>
                                        a().createElement(
                                            Xe.animated.div,
                                            { style: e },
                                            a().createElement('div', {
                                                className: eu.bg,
                                                style: { backgroundImage: `url(${r})` },
                                            }),
                                        ),
                                    ),
                                    a().createElement('div', { className: eu.content }, a().createElement(_t, null)),
                                    l((e) =>
                                        a().createElement(
                                            Xe.animated.div,
                                            { style: e },
                                            n &&
                                                a().createElement('div', {
                                                    className: E()(eu.bg, eu.bg__threadBgPosition),
                                                    style: { backgroundImage: `url(${n})` },
                                                }),
                                        ),
                                    ),
                                ),
                        );
                    }),
                    uu = 'Error_base_92',
                    iu = 'Error_icon_9e',
                    au = 'Error_title_36',
                    ru = 'Error_description_9c',
                    nu = R.strings.collections.collection.error,
                    ou = () =>
                        a().createElement(
                            'div',
                            { className: uu },
                            a().createElement('div', { className: iu }),
                            a().createElement('div', { className: au }, nu.title()),
                            a().createElement('div', { className: ru }, nu.description()),
                        ),
                    lu = 'Footer_base_df',
                    su = 'Footer_completedStateWrapper_73',
                    du = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let hu, cu;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(hu || (hu = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(cu || (cu = {})));
                const mu = ({ size: e = hu.Default }) => {
                        const t = E()(du.background, du[`background__${e}`]);
                        return a().createElement('div', { className: t });
                    },
                    gu = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Eu = ({ size: e }) => {
                        const t = E()(gu.base, gu[`base__${e}`]);
                        return a().createElement('div', { className: t });
                    },
                    Au = {
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
                    _u = (0, i.memo)(
                        ({ size: e, lineRef: t, disabled: u, baseStyles: i, isComplete: r, withoutBounce: n }) => {
                            const o = E()(
                                    Au.base,
                                    Au[`base__${e}`],
                                    u && Au.base__disabled,
                                    r && Au.base__finished,
                                    n && Au.base__withoutBounce,
                                ),
                                l = !u && !r;
                            return a().createElement(
                                'div',
                                { className: o, style: i, ref: t },
                                a().createElement('div', { className: Au.pattern }),
                                a().createElement('div', { className: Au.gradient }),
                                l && a().createElement(Eu, { size: e }),
                            );
                        },
                    );
                let Fu, pu;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(Fu || (Fu = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(pu || (pu = {})));
                const Du = 'ProgressBarDeltaGrow_base_7e',
                    fu = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Cu = 'ProgressBarDeltaGrow_glow_68',
                    Bu = (e) => (e ? { left: 0 } : { right: 0 }),
                    wu = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    vu = (e) => ({ transitionDuration: `${e}ms` }),
                    bu = (0, i.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: r,
                            size: n,
                            to: o,
                            onEndAnimation: l,
                            onChangeAnimationState: s,
                            className: d,
                        }) => {
                            const h = o < r,
                                c = (0, i.useState)(Fu.Idle),
                                m = c[0],
                                g = c[1],
                                A = m === Fu.End,
                                _ = m === Fu.Idle,
                                F = m === Fu.Grow,
                                p = m === Fu.Shrink,
                                D = (0, i.useCallback)(
                                    (e) => {
                                        (g(e), s && s(e));
                                    },
                                    [s],
                                ),
                                f = (0, i.useCallback)(
                                    (e, t) =>
                                        ut(() => {
                                            D(e);
                                        }, t),
                                    [D],
                                );
                            (0, i.useEffect)(() => {
                                if (!u)
                                    return _
                                        ? f(Fu.Grow, t)
                                        : F
                                          ? f(Fu.Shrink, e)
                                          : p
                                            ? f(Fu.End, e)
                                            : void (A && l && l());
                            }, [f, u, A, F, _, p, l, t, e]);
                            const C = (0, i.useMemo)(() => Object.assign({ width: '100%' }, vu(e), Bu(h)), [h, e]),
                                B = (0, i.useMemo)(() => Object.assign({ width: '0%' }, vu(e), Bu(h)), [h, e]),
                                w = (0, i.useMemo)(() => Object.assign({ width: '0%' }, wu(h, r), vu(e)), [r, h, e]),
                                v = (0, i.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - r)}%` }, wu(h, r), vu(e)),
                                    [r, h, o, e],
                                );
                            if (A) return null;
                            const b = E()(Du, d, h && 0 === o && fu);
                            return a().createElement(
                                'div',
                                { style: _ ? w : v, className: b },
                                a().createElement(
                                    'div',
                                    { style: p ? B : C, className: Cu },
                                    a().createElement(Eu, { size: n }),
                                ),
                            );
                        },
                    ),
                    Su = (0, i.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: r,
                            disabled: n,
                            isComplete: o,
                            animationSettings: l,
                            onEndAnimation: s,
                            onChangeAnimationState: d,
                        }) => {
                            const h = e < u,
                                c = (0, i.useState)(!1),
                                m = c[0],
                                g = c[1],
                                E = (0, i.useCallback)(
                                    (e) => {
                                        (e === Fu.Shrink && g(!0), d && d(e));
                                    },
                                    [d],
                                ),
                                A = (0, i.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                _ = (0, i.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${l.line.duration}ms` }),
                                    [l.line.duration, e],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(_u, {
                                    size: t,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: o,
                                    withoutBounce: h && 0 === e,
                                    baseStyles: m ? _ : A,
                                }),
                                u >= 0 &&
                                    a().createElement(bu, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        onChangeAnimationState: E,
                                        freezed: l.freezed,
                                        onEndAnimation: s,
                                        from: u,
                                        size: t,
                                        to: e,
                                        className: l.delta.className,
                                    }),
                            );
                        },
                    ),
                    xu = 'ProgressBarDeltaSimple_base_6c',
                    Ru = 'ProgressBarDeltaSimple_delta_99',
                    yu = (0, i.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: r,
                            size: n,
                            to: o,
                            onEndAnimation: l,
                            onChangeAnimationState: s,
                        }) => {
                            const d = o < r,
                                h = (0, i.useState)(pu.Idle),
                                c = h[0],
                                m = h[1],
                                g = c === pu.In,
                                E = c === pu.End,
                                A = c === pu.Idle,
                                _ = (0, i.useCallback)(
                                    (e) => {
                                        (m(e), s && s(e));
                                    },
                                    [s],
                                );
                            ((0, i.useEffect)(() => {
                                if (A && !u) {
                                    return ut(() => {
                                        _(pu.In);
                                    }, t);
                                }
                            }, [_, u, A, t]),
                                (0, i.useEffect)(() => {
                                    if (g) {
                                        return ut(() => {
                                            (l && l(), _(pu.End));
                                        }, e + t);
                                    }
                                }, [_, g, l, t, e]));
                            const F = (0, i.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [d ? 'left' : 'right']: '0',
                                    }),
                                    [d, t, e],
                                ),
                                p = (0, i.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [d ? 'left' : 'right']: '0',
                                    }),
                                    [d, t, e],
                                ),
                                D = (0, i.useMemo)(
                                    () => ({ width: `${Math.abs(r - o)}%`, left: `${d ? o : r}%` }),
                                    [r, d, o],
                                );
                            return E
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: xu, style: D },
                                      a().createElement(
                                          'div',
                                          { style: A ? F : p, className: Ru },
                                          a().createElement(Eu, { size: n }),
                                      ),
                                  );
                        },
                    ),
                    Tu = (0, i.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: r,
                            disabled: n,
                            isComplete: o,
                            animationSettings: l,
                            onChangeAnimationState: s,
                            onEndAnimation: d,
                        }) => {
                            const h = (0, i.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${l.line.duration}ms`,
                                    transitionDelay: `${l.line.delay}ms`,
                                }),
                                [l.line.delay, l.line.duration, e],
                            );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(_u, {
                                    size: t,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: o,
                                    baseStyles: h,
                                }),
                                u >= 0 &&
                                    a().createElement(yu, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        freezed: l.freezed,
                                        from: u,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: s,
                                        onEndAnimation: d,
                                    }),
                            );
                        },
                    ),
                    Lu = ['onComplete', 'onEndAnimation'];
                function Pu() {
                    return (
                        (Pu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        Pu.apply(this, arguments)
                    );
                }
                const Nu = (0, i.memo)((e) => {
                        let t = e.onComplete,
                            u = e.onEndAnimation,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    i,
                                    a = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) ((u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Lu);
                        const n = (0, i.useState)(!1),
                            o = n[0],
                            l = n[1],
                            s = (0, i.useCallback)(() => {
                                const e = 100 === r.to;
                                (e !== o && l(e), e && t && t(), u && u());
                            }, [o, t, u, r.to]);
                        switch (r.animationSettings.type) {
                            case cu.Simple:
                                return a().createElement(Tu, Pu({}, r, { onEndAnimation: s, isComplete: o }));
                            case cu.Growing:
                                return a().createElement(Su, Pu({}, r, { onEndAnimation: s, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    Iu = ({ size: e, value: t, lineRef: u, disabled: r, onComplete: n }) => {
                        const o = (0, i.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            l = 100 === t;
                        return (
                            (0, i.useEffect)(() => {
                                l && n && n();
                            }, [l, n]),
                            a().createElement(_u, { size: e, disabled: r, baseStyles: o, isComplete: l, lineRef: u })
                        );
                    },
                    Ou = ['onEndAnimation'];
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                const Uu = (0, i.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                i,
                                a = {},
                                r = Object.keys(e);
                            for (i = 0; i < r.length; i++) ((u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, Ou);
                    const r = (0, i.useRef)({}),
                        n = (0, i.useCallback)(() => {
                            ((r.current.from = void 0), t && t());
                        }, [t]),
                        o = 'number' == typeof r.current.from ? r.current.from : u.from;
                    return (
                        (r.current.from = o),
                        a().createElement(
                            Nu,
                            ku({}, u, {
                                onEndAnimation: n,
                                key: `${o}-${u.to}-${null == u ? void 0 : u.additionalKey}`,
                                from: o,
                            }),
                        )
                    );
                });
                function Mu() {
                    return (
                        (Mu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        Mu.apply(this, arguments)
                    );
                }
                const Hu = (0, i.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: u,
                            disabled: i,
                            deltaFrom: r,
                            additionalKey: n,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: s,
                            onComplete: d,
                        }) => {
                            if (r === t)
                                return a().createElement(Iu, {
                                    key: `${r}-${t}-${n}`,
                                    size: e,
                                    value: t,
                                    lineRef: u,
                                    disabled: i,
                                    onComplete: d,
                                });
                            const h = {
                                from: r,
                                to: t,
                                size: e,
                                additionalKey: n,
                                lineRef: u,
                                disabled: i,
                                animationSettings: o,
                                onComplete: d,
                                onEndAnimation: l,
                                onChangeAnimationState: s,
                            };
                            return o.withStack
                                ? a().createElement(Uu, h)
                                : a().createElement(Nu, Mu({ key: `${r}-${t}-${n}` }, h));
                        },
                    ),
                    Gu = (e) => {
                        var t, u, i, a, r, n, o, l, s, d, h, c, m, g, E, A, _, F, p, D;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (t = null == (u = e.bg) ? void 0 : u.height) ? t : '12rem',
                            '--progress-bg-height-small':
                                null != (i = null == (a = e.bg) ? void 0 : a.heightSmall) ? i : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (r = e.line.filter) ? r : 'none',
                            '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                            '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                            '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                            '--progress-pattern-size': null != (n = e.pattern.size) ? n : '3rem 10rem',
                            '--progress-pattern-border-size': null != (o = e.pattern.borderSize) ? o : '1rem',
                            '--progress-pattern-gradient':
                                null != (l = e.pattern.gradient)
                                    ? l
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                            '--progress-pattern-gradient-finished':
                                null != (s = e.pattern.gradientFinished)
                                    ? s
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                            '--progress-pattern-gradient-mixBlendMode':
                                null != (d = e.pattern.mixBlendMode) ? d : 'overlay',
                            '--progress-glow': `url('${e.glow}')`,
                            '--progress-glow-width':
                                null != (h = null == (c = e.glowSettings) ? void 0 : c.width) ? h : '60rem',
                            '--progress-glow-height':
                                null != (m = null == (g = e.glowSettings) ? void 0 : g.height) ? m : '100rem',
                            '--progress-glow-small-width':
                                null != (E = null == (A = e.glowSettings) ? void 0 : A.smallWidth) ? E : '44rem',
                            '--progress-glow-small-height':
                                null != (_ = null == (F = e.glowSettings) ? void 0 : F.smallHeight) ? _ : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (p = null == (D = e.glowSettings) ? void 0 : D.mixBlendMode) ? p : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
                    $u = (e, t, u) => {
                        if ('number' == typeof u) {
                            return (Pe(0, t, u) / t) * 100;
                        }
                        return e;
                    };
                const zu = {
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
                    Wu = {
                        freezed: !1,
                        withStack: !1,
                        type: cu.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ju = (0, i.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = zu,
                            size: u = hu.Default,
                            animationSettings: r = Wu,
                            disabled: n = !1,
                            withoutBackground: o = !1,
                            value: l,
                            deltaFrom: s,
                            additionalKey: d,
                            lineRef: h,
                            onChangeAnimationState: c,
                            onEndAnimation: m,
                            onComplete: g,
                            className: A,
                        }) => {
                            const _ = (function (e, t, u) {
                                return (0, i.useMemo)(() => {
                                    const i = (Pe(0, t, e) / t) * 100;
                                    return { value: i, deltaFrom: $u(i, t, u) };
                                }, [u, t, e]);
                            })(l, e, s);
                            return a().createElement(
                                'div',
                                { className: E()(du.base, A, du[`base__${u}`]), style: Gu(t) },
                                !o && a().createElement(mu, { size: u }),
                                a().createElement(Hu, {
                                    size: u,
                                    lineRef: h,
                                    disabled: n,
                                    value: _.value,
                                    deltaFrom: _.deltaFrom,
                                    additionalKey: d,
                                    animationSettings: r,
                                    onEndAnimation: m,
                                    onChangeAnimationState: c,
                                    onComplete: g,
                                }),
                            );
                        },
                    ),
                    qu = 'ActiveState_base_c4',
                    Yu = 'ActiveState_base__completed_11',
                    Vu = 'ActiveState_container_d5',
                    Xu = 'ActiveState_progressBarWrapper_4a',
                    Ku = 'ActiveState_progressBarBg_de',
                    Qu = 'ActiveState_progressBar_36',
                    Zu = 'ActiveState_counterBlock_29',
                    Ju = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ei() {
                    return (
                        (ei =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        ei.apply(this, arguments)
                    );
                }
                const ti = R.views.common.tooltip_window.simple_tooltip_content,
                    ui = (e) => {
                        let t = e.children,
                            u = e.body,
                            r = e.header,
                            n = e.note,
                            o = e.alert,
                            l = e.args,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    i,
                                    a = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) ((u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Ju);
                        const d = (0, i.useMemo)(() => {
                            const e = Object.assign({}, l, { body: u, header: r, note: n, alert: o });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [o, u, r, n, l]);
                        return a().createElement(
                            tt,
                            ei(
                                {
                                    contentId:
                                        ((h = null == l ? void 0 : l.hasHtmlContent),
                                        h ? ti.SimpleTooltipHtmlContent('resId') : ti.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: d,
                                },
                                s,
                            ),
                            t,
                        );
                        var h;
                    },
                    ii = R.strings.collections.footer.progressbar.tooltip,
                    ai = ({ children: e }) =>
                        a().createElement(ui, { header: ii.title(), body: ii.body(), note: ii.note() }, e),
                    ri = 'CounterBlock_base_f4',
                    ni = 'CounterBlock_text_82',
                    oi = 'CounterBlock_count_85',
                    li = 'CounterBlock_count__total_2b',
                    si = 'CounterBlock_infoIcon_a4',
                    di = (0, M.Pi)(() => {
                        const e = Me().model.root.get(),
                            t = e.receivedItemsCount,
                            u = e.maxItemsCount;
                        return a().createElement(
                            ai,
                            null,
                            a().createElement(
                                'div',
                                { className: ri },
                                a().createElement(Ot, {
                                    classMix: ni,
                                    text: R.strings.collections.footer.progressbar.activeState.receivedElements.text(),
                                    binding: {
                                        received: a().createElement('div', { className: oi }, t),
                                        total: a().createElement('div', { className: E()(oi, li) }, u),
                                    },
                                }),
                                a().createElement('div', { className: si }),
                            ),
                        );
                    }),
                    hi = ['children'];
                function ci() {
                    return (
                        (ci =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        ci.apply(this, arguments)
                    );
                }
                const mi = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                i,
                                a = {},
                                r = Object.keys(e);
                            for (i = 0; i < r.length; i++) ((u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, hi);
                    return a().createElement(
                        tt,
                        ci(
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
                function gi() {
                    return (
                        (gi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        gi.apply(this, arguments)
                    );
                }
                const Ei = ({ children: e, tooltipArgs: t, className: u }) => {
                        if (!t) return e;
                        const i = a().createElement('div', { className: u }, e);
                        if (t.header || t.body) return a().createElement(ui, t, i);
                        const r = t.contentId;
                        return r ? a().createElement(tt, gi({}, t, { contentId: r }), i) : a().createElement(mi, t, i);
                    },
                    Ai = {
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
                    _i = ({
                        name: e,
                        image: t,
                        isPeriodic: u = !1,
                        size: i = W.Big,
                        special: r,
                        value: n,
                        valueType: o,
                        title: l,
                        style: s,
                        className: d,
                        classNames: h,
                        tooltipArgs: c,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const g = ((e, t) => {
                                if (void 0 === t || !re.includes(e)) return null;
                                switch (t) {
                                    case q.BATTLE_BOOSTER:
                                    case q.BATTLE_BOOSTER_REPLACE:
                                        return Y.BATTLE_BOOSTER;
                                }
                            })(i, r),
                            A = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case q.BATTLE_BOOSTER:
                                        return V.BATTLE_BOOSTER;
                                    case q.BATTLE_BOOSTER_REPLACE:
                                        return V.BATTLE_BOOSTER_REPLACE;
                                    case q.BUILT_IN_EQUIPMENT:
                                        return V.BUILT_IN_EQUIPMENT;
                                    case q.EQUIPMENT_PLUS:
                                        return V.EQUIPMENT_PLUS;
                                    case q.EQUIPMENT_TROPHY_BASIC:
                                        return V.EQUIPMENT_TROPHY_BASIC;
                                    case q.EQUIPMENT_TROPHY_UPGRADED:
                                        return V.EQUIPMENT_TROPHY_UPGRADED;
                                    case q.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return V.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case q.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return V.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case q.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return V.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case q.PROGRESSION_STYLE_UPGRADED_1:
                                        return V.PROGRESSION_STYLE_UPGRADED_1;
                                    case q.PROGRESSION_STYLE_UPGRADED_2:
                                        return V.PROGRESSION_STYLE_UPGRADED_2;
                                    case q.PROGRESSION_STYLE_UPGRADED_3:
                                        return V.PROGRESSION_STYLE_UPGRADED_3;
                                    case q.PROGRESSION_STYLE_UPGRADED_4:
                                        return V.PROGRESSION_STYLE_UPGRADED_4;
                                    case q.PROGRESSION_STYLE_UPGRADED_5:
                                        return V.PROGRESSION_STYLE_UPGRADED_5;
                                    case q.PROGRESSION_STYLE_UPGRADED_6:
                                        return V.PROGRESSION_STYLE_UPGRADED_6;
                                    case q.ATTACHMENT_RARE:
                                        return V.ATTACHMENT_RARE;
                                    case q.ATTACHMENT_EPIC:
                                        return V.ATTACHMENT_EPIC;
                                    case q.ATTACHMENT_LEGENDARY:
                                        return V.ATTACHMENT_LEGENDARY;
                                }
                            })(r),
                            _ = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case j.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case j.CURRENCY:
                                    case j.NUMBER:
                                        return a().createElement(G, { format: 'integral', value: Number(e) });
                                    case j.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(n, o);
                        return a().createElement(
                            'div',
                            {
                                className: E()(Ai.base, Ai[`base__${i}`], K.includes(e) && Ai.base__normalize, d),
                                style: s,
                            },
                            a().createElement(
                                Ei,
                                { tooltipArgs: c, className: Ai.tooltipWrapper },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: E()(Ai.image, null == h ? void 0 : h.image) },
                                        g &&
                                            a().createElement('div', {
                                                className: E()(Ai.highlight, null == h ? void 0 : h.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${i}.${g}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            a().createElement('div', {
                                                className: E()(Ai.icon, null == h ? void 0 : h.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        A &&
                                            a().createElement('div', {
                                                className: E()(Ai.overlay, null == h ? void 0 : h.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${i}.${A}_overlay)`,
                                                },
                                            }),
                                    ),
                                    _ &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: E()(
                                                    Ai.info,
                                                    Ai[`info__${e}`],
                                                    o === j.MULTI && Ai.info__multi,
                                                    null == h ? void 0 : h.info,
                                                ),
                                            },
                                            _,
                                        ),
                                    l && a().createElement('div', { className: Ai.title }, l),
                                ),
                            ),
                            u &&
                                a().createElement(
                                    Ei,
                                    { tooltipArgs: m },
                                    a().createElement('div', {
                                        className: E()(Ai.timer, null == h ? void 0 : h.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Fi = 'Rewards_base_5d',
                    pi = 'Rewards_base__disabled_f4',
                    Di = 'Rewards_label_ce';
                function fi() {
                    return (
                        (fi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        fi.apply(this, arguments)
                    );
                }
                const Ci = (0, M.Pi)(({ requiredItemsCount: e, isReceived: t }) => {
                        var u;
                        const i = Me().model.computes.getRewardsByLevel(e),
                            r = t !== (null != (u = Ht(t)) ? u : t);
                        return a().createElement(
                            'div',
                            { className: E()(Fi, t && pi) },
                            i.map(
                                (e, t) => (
                                    r && Ke(R.sounds.collection_pb_reward()),
                                    a().createElement(
                                        _i,
                                        fi({}, e, {
                                            size: W.Small,
                                            image: e.getImage(W.Small),
                                            classNames: e.valueType === j.MULTI ? { info: Di } : void 0,
                                            key: t,
                                        }),
                                    )
                                ),
                            ),
                        );
                    }),
                    Bi = {
                        base: 'LevelContent_base_dd',
                        base__completed: 'LevelContent_base__completed_c2',
                        rewards: 'LevelContent_rewards_51',
                        base__justReceived: 'LevelContent_base__justReceived_3f',
                        brightnesIn: 'LevelContent_brightnesIn_4c',
                        brightnesOut: 'LevelContent_brightnesOut_27',
                        checkIconWrapper: 'LevelContent_checkIconWrapper_ed',
                        receivedIconBg: 'LevelContent_receivedIconBg_b0',
                        base__received: 'LevelContent_base__received_81',
                        fadeInBgStep1: 'LevelContent_fadeInBgStep1_70',
                        fadeInBgStep2: 'LevelContent_fadeInBgStep2_7f',
                        receivedIcon: 'LevelContent_receivedIcon_af',
                        fadeInScaleIcon: 'LevelContent_fadeInScaleIcon_ff',
                        point: 'LevelContent_point_0d',
                        point__top: 'LevelContent_point__top_b1',
                        point__bottom: 'LevelContent_point__bottom_e6',
                        number: 'LevelContent_number_ef',
                    },
                    wi = (0, M.Pi)(({ state: e, requiredItemsCount: t, position: u }) => {
                        const r = Me(),
                            n = r.controls,
                            o = r.model,
                            l = o.root.get().maxItemsCount,
                            s = e === oe.JustReceived,
                            d = o.computes.isProgressAnimationEnded();
                        return (
                            (0, i.useEffect)(() => {
                                if (s)
                                    return ut(() => {
                                        n.setRewardReceived(t);
                                    }, 500);
                            }, [n, s, t]),
                            a().createElement(
                                'div',
                                {
                                    className: E()(Bi.base, Bi[`base__${e}`], d && Bi.base__completed),
                                    style: { left: ((h = t), (c = l), (h / c) * 100) + '%' },
                                },
                                u === bi.Top &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(
                                            'div',
                                            { className: Bi.rewards },
                                            a().createElement(Ci, {
                                                requiredItemsCount: t,
                                                isReceived: e === oe.Received,
                                            }),
                                        ),
                                        a().createElement(
                                            'div',
                                            { className: Bi.checkIconWrapper },
                                            a().createElement('div', { className: Bi.receivedIconBg }),
                                            a().createElement('div', { className: Bi.receivedIcon }),
                                        ),
                                    ),
                                a().createElement('div', { className: E()(Bi.point, Bi[`point__${u}`]) }),
                                u === bi.Bottom && a().createElement('div', { className: Bi.number }, t),
                            )
                        );
                        var h, c;
                    }),
                    vi = {
                        base: 'ProgressScale_base_88',
                        base__bottom: 'ProgressScale_base__bottom_ee',
                        baseBottom: 'ProgressScale_baseBottom_dc',
                        base__completed: 'ProgressScale_base__completed_b0',
                        point: 'ProgressScale_point_31',
                        base__top: 'ProgressScale_base__top_0e',
                        zeroNumber: 'ProgressScale_zeroNumber_25',
                    };
                let bi;
                !(function (e) {
                    ((e.Top = 'top'), (e.Bottom = 'bottom'));
                })(bi || (bi = {}));
                const Si = (0, M.Pi)(({ position: e }) => {
                        const t = Me().model,
                            u = t.computes.levelInfo(),
                            i = t.computes.isProgressAnimationEnded();
                        return a().createElement(
                            'div',
                            { className: E()(vi.base, vi[`base__${e}`], i && vi.base__completed) },
                            e === bi.Bottom &&
                                a().createElement(
                                    'div',
                                    { className: vi.baseBottom },
                                    a().createElement('div', { className: vi.point }),
                                    a().createElement('div', { className: vi.zeroNumber }, 0),
                                ),
                            u.map(({ state: t, requiredItemsCount: u }, i) =>
                                a().createElement(wi, { state: t, requiredItemsCount: u, position: e, key: i }),
                            ),
                        );
                    }),
                    xi = Object.assign({}, Wu, {
                        delta: { duration: 1e3, delay: 2e3 },
                        line: { duration: 1e3, delay: 2e3 },
                    }),
                    Ri = (0, M.Pi)(() => {
                        const e = Me(),
                            t = e.model,
                            u = e.controls,
                            i = t.computes.getProgressParams(),
                            r = i.value,
                            n = i.deltaFrom,
                            o = i.maxItemsCount,
                            l = t.computes.isProgressAnimationEnded();
                        return a().createElement(
                            'div',
                            { className: E()(qu, l && Yu) },
                            a().createElement(
                                'div',
                                { className: Vu },
                                a().createElement(Si, { position: bi.Top }),
                                a().createElement(
                                    'div',
                                    { className: Xu },
                                    a().createElement('div', { className: Ku }),
                                    a().createElement(
                                        ai,
                                        null,
                                        a().createElement(
                                            'div',
                                            { className: Qu },
                                            a().createElement(ju, {
                                                value: r,
                                                deltaFrom: n,
                                                maxValue: o,
                                                onEndAnimation: u.setProgressItemsReceived,
                                                animationSettings: xi,
                                            }),
                                        ),
                                    ),
                                ),
                                a().createElement(Si, { position: bi.Bottom }),
                            ),
                            a().createElement('div', { className: Zu }, a().createElement(di, null)),
                        );
                    }),
                    yi = 'CompletedState_base_c8',
                    Ti = 'CompletedState_icon_07',
                    Li = 'CompletedState_base__animated_4c',
                    Pi = 'CompletedState_base__completed_f9',
                    Ni = 'CompletedState_glowWrapper_a6',
                    Ii = 'CompletedState_glow_b5',
                    Oi = 'CompletedState_title_3e',
                    ki = (0, M.Pi)(({ hasAnimation: e, isCompletedState: t }) =>
                        a().createElement(
                            'div',
                            { className: E()(yi, e && Li, t && Pi) },
                            a().createElement('div', { className: Ni }, a().createElement('div', { className: Ii })),
                            a().createElement('div', { className: Ti }),
                            a().createElement(
                                'div',
                                { className: Oi },
                                R.strings.collections.footer.collectionCompleted(),
                            ),
                        ),
                    );
                var Ui;
                !(function (e) {
                    ((e[(e.ActiveStatic = 0)] = 'ActiveStatic'),
                        (e[(e.ChangeAnimate = 1)] = 'ChangeAnimate'),
                        (e[(e.CompletedStatic = 2)] = 'CompletedStatic'));
                })(Ui || (Ui = {}));
                const Mi = (0, M.Pi)(() => {
                        var e, t;
                        const u = Me().model,
                            r = u.computes.isProgressAnimationEnded(),
                            n = null != (e = Ht(r)) ? e : r,
                            o = (0, i.useState)(r ? Ui.CompletedStatic : Ui.ActiveStatic),
                            l = o[0],
                            s = o[1];
                        (0, i.useEffect)(() => {
                            if (r !== n)
                                return (
                                    s(Ui.ChangeAnimate),
                                    Ke(R.sounds.collection_done()),
                                    ut(() => {
                                        s(Ui.CompletedStatic);
                                    }, 840)
                                );
                        }, [n, r]);
                        const d = [Ui.ActiveStatic, Ui.ChangeAnimate].includes(l),
                            h = [Ui.ChangeAnimate, Ui.CompletedStatic].includes(l),
                            c = u.computes.getProgressParams().value,
                            m = null != (t = Ht(c)) ? t : c;
                        return (
                            (0, i.useEffect)(() => {
                                m !== c && Ke(R.sounds.collection_progress_bar());
                            }, [m, c]),
                            a().createElement(
                                'div',
                                { className: lu },
                                h &&
                                    a().createElement(
                                        'div',
                                        { className: su },
                                        a().createElement(ki, {
                                            hasAnimation: l === Ui.ChangeAnimate,
                                            isCompletedState: l === Ui.CompletedStatic,
                                        }),
                                    ),
                                d && a().createElement(Ri, null),
                            )
                        );
                    }),
                    Hi = a().memo;
                const Gi = {
                        base: 'HorizontalTabs_base_92',
                        tab: 'HorizontalTabs_tab_ca',
                        tab__medium: 'HorizontalTabs_tab__medium_88',
                        tab__active: 'HorizontalTabs_tab__active_3e',
                        tab__nonInteractive: 'HorizontalTabs_tab__nonInteractive_ce',
                        state: 'HorizontalTabs_state_3d',
                        highlight: 'HorizontalTabs_highlight_9e',
                        border: 'HorizontalTabs_border_08',
                        border__left: 'HorizontalTabs_border__left_64',
                        border__right: 'HorizontalTabs_border__right_45',
                        divider: 'HorizontalTabs_divider_6f',
                        title: 'HorizontalTabs_title_10',
                        notification: 'HorizontalTabs_notification_89',
                        notification__symbol: 'HorizontalTabs_notification__symbol_8b',
                        notification__small: 'HorizontalTabs_notification__small_7c',
                        notification__large: 'HorizontalTabs_notification__large_a2',
                        notification__dot: 'HorizontalTabs_notification__dot_d7',
                        notification__medium: 'HorizontalTabs_notification__medium_19',
                    },
                    $i = { mouseEnter: 'highlight', click: 'play' },
                    zi = (e, { active: t, enableInteractiveActiveTab: u = !1 }) => !!u || e !== t,
                    Wi = Hi(function (e) {
                        const t = e.active,
                            u = e.tabs,
                            i = e.onClick,
                            r = e.onMouseEnter,
                            n = e.onMouseLeave,
                            o = e.className,
                            l = e.classNames,
                            s = e.sounds,
                            d = void 0 === s ? $i : s,
                            h = (t) => () => {
                                zi(t, e) && (d.click && Ke(d.click), null == i || i(t));
                            },
                            c = (t) => () => {
                                zi(t, e) && (d.mouseEnter && Ke(d.mouseEnter), null == r || r(t));
                            },
                            m = (t) => () => {
                                zi(t, e) && (d.mouseLeave && Ke(d.mouseLeave), null == n || n(t));
                            };
                        return a().createElement(
                            'div',
                            { className: E()(Gi.base, o) },
                            u.map(({ id: i, title: r, notification: n }, o) => {
                                var s;
                                return a().createElement(
                                    'div',
                                    {
                                        className: E()(
                                            Gi.tab,
                                            i === t && E()(Gi.tab__active, null == l ? void 0 : l.activeTab),
                                            !zi(i, e) && Gi.tab__nonInteractive,
                                            null == l ? void 0 : l.tab,
                                        ),
                                        key: i,
                                        onClick: h(i),
                                        onMouseEnter: c(i),
                                        onMouseLeave: m(i),
                                    },
                                    ((e, t) => !((e, t) => e.length - 1 === t)(e, t))(u, o) &&
                                        a().createElement('div', {
                                            className: E()(Gi.divider, null == l ? void 0 : l.divider),
                                        }),
                                    a().createElement(
                                        'div',
                                        { className: E()(Gi.state, null == l ? void 0 : l.state) },
                                        a().createElement('div', {
                                            className: E()(Gi.highlight, null == l ? void 0 : l.highlight),
                                        }),
                                        a().createElement('div', {
                                            className: E()(
                                                Gi.border,
                                                Gi.border__left,
                                                null == l ? void 0 : l.border,
                                                null == l ? void 0 : l.borderLeft,
                                            ),
                                        }),
                                        a().createElement('div', {
                                            className: E()(
                                                Gi.border,
                                                Gi.border__right,
                                                null == l ? void 0 : l.border,
                                                null == l ? void 0 : l.borderRight,
                                            ),
                                        }),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: E()(Gi.title, null == l ? void 0 : l.title) },
                                        r,
                                    ),
                                    void 0 !== n &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: E()(
                                                    Gi.notification,
                                                    Gi[`notification__${n.type}`],
                                                    Gi[`notification__${null != (s = n.size) ? s : 'medium'}`],
                                                    null == l ? void 0 : l.notification,
                                                ),
                                            },
                                            'dot' !== n.type && n.value,
                                        ),
                                );
                            }),
                        );
                    }),
                    ji = {
                        base: 'Header_base_b2',
                        fadeIn: 'Header_fadeIn_c6',
                        overhead: 'Header_overhead_10',
                        base__ultraSize: 'Header_base__ultraSize_3d',
                        title: 'Header_title_26',
                        seasonText: 'Header_seasonText_1d',
                        tabs: 'Header_tabs_b6',
                        slideUp: 'Header_slideUp_61',
                        fadeOut: 'Header_fadeOut_30',
                        raysAppearance: 'Header_raysAppearance_8d',
                        rotate: 'Header_rotate_9c',
                        slideUpWithScale: 'Header_slideUpWithScale_d8',
                    },
                    qi = R.strings.collections.header,
                    Yi = (0, M.Pi)(({ selectTab: e }) => {
                        const t = Me().model,
                            u = t.displayCollection.get(),
                            i = t.computes.getTabs(),
                            r = f(),
                            n = r.remScreenWidth,
                            o = r.remScreenHeight;
                        return a().createElement(
                            'div',
                            { className: E()(ji.base, ji[`base__${We(n, o)}`]) },
                            a().createElement('div', { className: ji.overhead }, qi.overhead()),
                            a().createElement(
                                'div',
                                { className: ji.title },
                                Le(R.strings, `collection_${u}.collection.name`),
                            ),
                            i && i.length > 1
                                ? a().createElement(Wi, {
                                      className: ji.tabs,
                                      active: u,
                                      tabs: i,
                                      onClick: (t) => e(t),
                                  })
                                : a().createElement(
                                      'div',
                                      { className: ji.seasonText },
                                      Le(R.strings, `collection_${u}.collection.season`),
                                  ),
                        );
                    }),
                    Vi = (0, M.Pi)(() => {
                        const e = Me(),
                            t = e.model,
                            u = e.controls,
                            r = t.root.get().isError,
                            n = (0, i.useState)(!1),
                            o = n[0],
                            l = n[1],
                            s = (0, i.useState)(!0),
                            d = s[0],
                            h = s[1],
                            c = t.displayCollection.get(),
                            m = (0, H.useSpring)({
                                from: { contentOpacity: 0 },
                                contentOpacity: o ? 0 : 1,
                                config: { duration: 300 },
                                onResolve: () => {
                                    l(!1);
                                },
                            }).contentOpacity;
                        var g;
                        return (
                            N(u.viewLoaded),
                            (g = u.close),
                            U(I.n.ESCAPE, g),
                            a().createElement(
                                'div',
                                { className: He },
                                a().createElement('div', { className: $e }),
                                c !== Oe &&
                                    !r &&
                                    a().createElement(
                                        H.animated.div,
                                        { style: { opacity: m.to({ output: [0, 1] }) }, key: c },
                                        a().createElement(
                                            Ye,
                                            { hasAnimation: d },
                                            a().createElement(
                                                'div',
                                                { className: Ge },
                                                a().createElement(tu, null),
                                                a().createElement(Mi, null),
                                            ),
                                        ),
                                    ),
                                r && a().createElement(ou, null),
                                a().createElement(Yi, {
                                    selectTab: (e) => {
                                        (l(!0), d && h(!1), u.selectTab(e));
                                    },
                                }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    L().render(
                        a().createElement(
                            Ue,
                            null,
                            a().createElement(y, { className: P }, a().createElement(Vi, null)),
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
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](u, u.exports, __webpack_require__), u.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, i) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, u, i] = deferred[l], r = !0, n = 0; n < t.length; n++)
                        (!1 & i || a >= i) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[n]))
                            ? t.splice(n--, 1)
                            : ((r = !1), i < a && (a = i));
                    if (r) {
                        deferred.splice(l--, 1);
                        var o = u();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            i = i || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > i; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, u, i];
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
        (__webpack_require__.j = 486),
        (() => {
            var e = { 486: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var i,
                        a,
                        [r, n, o] = u,
                        l = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (i in n) __webpack_require__.o(n, i) && (__webpack_require__.m[i] = n[i]);
                        if (o) var s = o(__webpack_require__);
                    }
                    for (t && t(u); l < r.length; l++)
                        ((a = r[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(s);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [314], () => __webpack_require__(264));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
