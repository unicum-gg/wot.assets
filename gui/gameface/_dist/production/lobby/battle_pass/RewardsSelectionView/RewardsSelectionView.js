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
                    t.d(u, { mouse: () => c, off: () => s, on: () => i, onResize: () => a, onScaleUpdated: () => o }));
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    s = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, r.R)(!0);
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
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${u}`,
                                        o = l[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, i),
                                        n(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(a, i),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            ((e.enabled = !1), n());
                        },
                        enable() {
                            ((e.enabled = !0), n());
                        },
                        enableOutside() {
                            e.enabled && (0, r.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, r.R)(!1);
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
                        getSize: () => a,
                        graphicsQuality: () => i,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var n = t(527),
                    r = t(2493);
                function a(e = 'px') {
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
                function r(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => r, G: () => n });
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
                    r = t(7698),
                    a = t(514);
                const o = { view: t(7641), client: n, sound: a.ZP, intl: r.N };
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
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, n.playSound)(r[u])), e), {}),
                    o = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var n = t(2472);
                const r = {
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
                        addModelObserver: () => d,
                        addPreloadTexture: () => s,
                        arabic2roman: () => y,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => T,
                        enableFullScreenModeSupported: () => L,
                        events: () => o.U,
                        extraSize: () => R,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => b,
                        getExternalPaddingsRem: () => S,
                        getFontNames: () => w,
                        getScale: () => g,
                        getSize: () => _,
                        getViewGlobalPosition: () => A,
                        initExternalPaddings: () => M,
                        isEventHandled: () => f,
                        isFocused: () => p,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => x,
                    }));
                var n = t(9690),
                    r = t(3722),
                    a = t(6112),
                    o = t(6538),
                    i = t(8566);
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
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function f() {
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
                    y = n.cg;
                function S() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const T = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    R = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function L() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function M(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            n = u.right,
                            r = u.bottom,
                            a = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    o = 32,
                    i = 64,
                    s = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, u]) => {
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
                        var r;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? r : o);
                        },
                        minimize() {
                            s(i);
                        },
                        move(e) {
                            s(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let n, r;
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
                    })(r || (r = {})));
            },
            9690: (e, u, t) => {
                'use strict';
                t.d(u, { cg: () => a });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let u = '';
                    for (let t = r.length - 1; t >= 0; t--) for (; e >= r[t]; ) ((u += n[t]), (e -= r[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(3138);
                class r {
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
                        return (window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                r.__instance = void 0;
                const a = r;
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
                t.d(u, { B0: () => i, ry: () => g });
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
                const r = n;
                var a = t(1358);
                var o = t(8613);
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
                var E = t(5521),
                    _ = t(3138);
                const m = ['args'];
                function A(e, u, t, n, r, a, o) {
                    try {
                        var i = e[a](o),
                            s = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(s) : Promise.resolve(s).then(n, r);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function o(e) {
                                            A(a, n, r, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(a, n, r, o, i, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, m);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    B = () => D(i.CLOSE),
                    C = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var p = t(7572);
                const h = r.instance,
                    f = {
                        DataTracker: a.Z,
                        ViewModel: p.Z,
                        ViewEventType: i,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => D(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => D(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const o = _.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                d = s.width,
                                E = s.height,
                                m = {
                                    x: _.O.view.pxToRem(l) + o.x,
                                    y: _.O.view.pxToRem(c) + o.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(E),
                                };
                            D(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: F(m),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => C(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, B);
                        },
                        handleViewEvent: D,
                        onBindingsReady: g,
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
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: h,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = f;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
            },
            2507: (e, u, t) => {
                'use strict';
                var n = {};
                (t.r(n),
                    t.d(n, {
                        Area: () => mu,
                        Bar: () => du,
                        DefaultScroll: () => _u,
                        Direction: () => Xe,
                        defaultSettings: () => Ke,
                        useHorizontalScrollApi: () => Qe,
                    }));
                var r = {};
                (t.r(r), t.d(r, { Area: () => Lu, Bar: () => Tu, Default: () => xu, useVerticalScrollApi: () => Au }));
                var a = t(7363),
                    o = t.n(a),
                    i = t(1533),
                    s = t.n(i),
                    l = t(6483),
                    c = t.n(l),
                    d = t(3138);
                const E = {
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
                    _ = [
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
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const A = (e) => {
                        let u = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            r = e.classNames,
                            i = e.onMouseEnter,
                            s = e.onMouseLeave,
                            l = e.onMouseDown,
                            A = e.onMouseUp,
                            F = e.side,
                            g = void 0 === F ? 'left' : F,
                            D = e.type,
                            B = void 0 === D ? 'back' : D,
                            C = e.soundHover,
                            p = void 0 === C ? 'highlight' : C,
                            h = e.soundClick,
                            f = void 0 === h ? 'play' : h,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, _);
                        const b = (0, a.useCallback)(
                                (e) => {
                                    (null == i || i(e), d.O.sound.play.sound(p));
                                },
                                [i, p],
                            ),
                            w = (0, a.useCallback)(
                                (e) => {
                                    null == s || s(e);
                                },
                                [s],
                            ),
                            y = (0, a.useCallback)(
                                (e) => {
                                    (null == l || l(e), d.O.sound.play.sound(f));
                                },
                                [l, f],
                            ),
                            S = (0, a.useCallback)(
                                (e) => {
                                    null == A || A(e);
                                },
                                [A],
                            );
                        return o().createElement(
                            'div',
                            m(
                                {
                                    className: c()(
                                        E.base,
                                        E[`base__${B}`],
                                        E[`base__${g}`],
                                        null == r ? void 0 : r.base,
                                    ),
                                    onMouseEnter: b,
                                    onMouseLeave: w,
                                    onMouseDown: y,
                                    onMouseUp: S,
                                    onClick: t,
                                },
                                v,
                            ),
                            'info' !== B && o().createElement('div', { className: E.shine }),
                            o().createElement(
                                'div',
                                {
                                    className: c()(
                                        E.icon,
                                        E[`icon__${B}`],
                                        E[`icon__${g}`],
                                        null == r ? void 0 : r.icon,
                                    ),
                                },
                                o().createElement('div', { className: c()(E.glow, null == r ? void 0 : r.glow) }),
                            ),
                            o().createElement(
                                'div',
                                { className: c()(E.caption, E[`caption__${B}`], null == r ? void 0 : r.caption) },
                                u,
                            ),
                            n && o().createElement('div', { className: c()(E.goto, null == r ? void 0 : r.goto) }, n),
                        );
                    },
                    F = (e) => {
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
                var g = t(5521),
                    D = t(9916);
                const B = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function C(e = g.n.NONE, u = B, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== g.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && d.O.view.isEventHandled()) return;
                                (d.O.view.setEventHandled(), u(r), t && r.stopPropagation());
                            }
                        }
                    }, [u, e, t, n]);
                }
                const p = (e) => {
                    (0, a.useEffect)(() => e, []);
                };
                var h = t(3403);
                let f, v, b, w;
                (!(function (e) {
                    ((e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium'));
                })(f || (f = {})),
                    (function (e) {
                        ((e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen'));
                    })(v || (v = {})),
                    (function (e) {
                        ((e.AwaitSeason = 'awaitSeason'),
                            (e.Bought = 'bought'),
                            (e.Free = 'free'),
                            (e.Completed = 'completed'),
                            (e.CompletedRightNow = 'completedRightNow'),
                            (e.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                            (e.NoVehiclesBase = 'noVehiclesBase'),
                            (e.ChapterNotChosen = 'chapterNotChosen'));
                    })(b || (b = {})),
                    (function (e) {
                        ((e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay'));
                    })(w || (w = {})));
                const y = (e, u, t = '') => {
                    const n = t.length > 0 ? `_${t}` : t,
                        r = e.$dyn(`c_${u}${n}`),
                        a = String(u).slice(-1),
                        o = e.$dyn(`default_${a}${n}`);
                    return r || o;
                };
                function S() {
                    return !1;
                }
                console.log;
                var T = t(9174);
                function x(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return L(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return L(e, u);
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
                function L(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const M = (e) => (0 === e ? window : window.subViews.get(e));
                const P = () => (e, u) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: n = 'real', options: r, children: i, mocks: s }) {
                            const l = (0, a.useRef)([]),
                                c = (t, n, r) => {
                                    var a;
                                    const o = (function ({
                                            initializer: e = !0,
                                            rootId: u = 0,
                                            getRoot: t = M,
                                            context: n = 'model',
                                        } = {}) {
                                            const r = new Map();
                                            function a(e, u = 0) {
                                                viewEnv.removeDataChangedCallback(e, u)
                                                    ? r.delete(e)
                                                    : console.error("Can't remove callback by id:", e);
                                            }
                                            engine.whenReady.then(() => {
                                                engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                    t.forEach((u) => {
                                                        const t = r.get(u);
                                                        void 0 !== t && t(e);
                                                    });
                                                });
                                            });
                                            const o = (e) => {
                                                const r = t(u),
                                                    a = n.split('.').reduce((e, u) => e[u], r);
                                                return 'string' != typeof e || 0 === e.length
                                                    ? a
                                                    : e.split('.').reduce((e, u) => {
                                                          const t = e[u];
                                                          return 'function' == typeof t ? t.bind(e) : t;
                                                      }, a);
                                            };
                                            return {
                                                subscribe: (t, a) => {
                                                    const i = 'string' == typeof a ? `${n}.${a}` : n,
                                                        s = d.O.view.addModelObserver(i, u, !0);
                                                    return (r.set(s, t), e && t(o(a)), s);
                                                },
                                                readByPath: o,
                                                createCallback: (e, u) => {
                                                    const t = o(u);
                                                    return (...u) => {
                                                        t(e(...u));
                                                    };
                                                },
                                                createCallbackNoArgs: (e) => {
                                                    const u = o(e);
                                                    return () => {
                                                        u();
                                                    };
                                                },
                                                dispose: function () {
                                                    for (var e, t = x(r.keys()); !(e = t()).done; ) a(e.value, u);
                                                },
                                                unsubscribe: a,
                                            };
                                        })(n),
                                        i =
                                            'real' === t
                                                ? o
                                                : Object.assign({}, o, {
                                                      readByPath:
                                                          null != (a = null == r ? void 0 : r.getter) ? a : () => {},
                                                  }),
                                        s = (e) =>
                                            'mocks' === t ? (null == r ? void 0 : r.getter(e)) : i.readByPath(e),
                                        c = (e) => l.current.push(e),
                                        E = e({
                                            mode: t,
                                            readByPath: s,
                                            externalModel: i,
                                            observableModel: {
                                                dict: (e) => {
                                                    const u = s(e),
                                                        n = T.LO.box(u, { equals: S });
                                                    return (
                                                        'real' === t &&
                                                            i.subscribe(
                                                                (0, T.aD)((e) => n.set(e)),
                                                                e,
                                                            ),
                                                        n
                                                    );
                                                },
                                                array: (e, u) => {
                                                    const n = null != u ? u : s(e),
                                                        r = T.LO.box(n, { equals: S });
                                                    return (
                                                        'real' === t &&
                                                            i.subscribe(
                                                                (0, T.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const n = null != u ? u : s(e),
                                                        r = T.LO.box(n, { equals: S });
                                                    return (
                                                        'real' === t &&
                                                            i.subscribe(
                                                                (0, T.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = s(u);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, u) => ((e[u] = T.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, T.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            r[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                    {
                                                        const r = e,
                                                            a = Object.entries(r),
                                                            o = a.reduce(
                                                                (e, [u, t]) => ((e[t] = T.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, T.aD)((e) => {
                                                                        a.forEach(([u, t]) => {
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
                                            cleanup: c,
                                        }),
                                        _ = { mode: t, model: E, externalModel: i, cleanup: c };
                                    return {
                                        model: E,
                                        controls: 'mocks' === t && r ? r.controls(_) : u(_),
                                        externalModel: i,
                                        mode: t,
                                    };
                                },
                                E = (0, a.useRef)(!1),
                                _ = (0, a.useState)(n),
                                m = _[0],
                                A = _[1],
                                F = (0, a.useState)(() => c(n, r, s)),
                                g = F[0],
                                D = F[1];
                            return (
                                (0, a.useEffect)(() => {
                                    E.current ? D(c(m, r, s)) : (E.current = !0);
                                }, [s, m, r]),
                                (0, a.useEffect)(() => {
                                    A(n);
                                }, [n]),
                                (0, a.useEffect)(
                                    () => () => {
                                        (g.externalModel.dispose(), l.current.forEach((e) => e()));
                                    },
                                    [g],
                                ),
                                o().createElement(t.Provider, { value: g }, i)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
                function k(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const O = k;
                function N(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let n = t;
                    for (let t = 0; t < e.length; t++) {
                        n = u(n, O(e, t), t, e);
                    }
                    return n;
                }
                var I = t(3946);
                let H;
                !(function (e) {
                    ((e.None = 'none'), (e.Accepting = 'accepting'));
                })(H || (H = {}));
                const U = P()(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    tabs: e.array('tabs'),
                                    rewards: e.array('rewards'),
                                    animationState: T.LO.box(H.None),
                                },
                                t = (0, I.Om)((e) => O(u.tabs.get(), e), { equals: S }),
                                n = (0, I.Om)((e) => O(u.rewards.get(), e), { equals: S }),
                                r = (0, I.Om)(() => N(u.tabs.get(), (e, u) => e + u.limit, 0));
                            return Object.assign({}, u, {
                                computes: { tabByIndex: t, rewardByIndex: n, rewardsToClaimTotal: r },
                            });
                        },
                        ({ externalModel: e, model: u }) => {
                            const t = (0, T.aD)((e) => u.animationState.set(e));
                            return {
                                close: e.createCallbackNoArgs('onCloseClick'),
                                submit: e.createCallbackNoArgs('onOkClick'),
                                reduceReward: e.createCallback((e) => ({ type: e }), 'onRewardReduce'),
                                addReward: e.createCallback((e) => ({ type: e }), 'onRewardAdd'),
                                openTab: e.createCallback((e) => ({ type: e }), 'onTabClick'),
                                setAnimationState: t,
                            };
                        },
                    ),
                    W = U[0],
                    G = U[1],
                    z = (e, u, t) =>
                        u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                            ? (u.extraLargeHeight && t.extraLarge) ||
                              (u.largeHeight && t.large) ||
                              (u.mediumHeight && t.medium) ||
                              (u.smallHeight && t.small) ||
                              (u.extraSmallHeight && t.extraSmall)
                                ? e
                                : null
                            : e,
                    $ = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var j;
                function V(e = d.O.client.getSize('rem')) {
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
                                r = (function (e, u) {
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
                                a = Math.min(n, r);
                            return {
                                extraLarge: a === t.extraLarge.weight,
                                large: a === t.large.weight,
                                medium: a === t.medium.weight,
                                small: a === t.small.weight,
                                extraSmall: a === t.extraSmall.weight,
                                extraLargeWidth: n === t.extraLarge.weight,
                                largeWidth: n === t.large.weight,
                                mediumWidth: n === t.medium.weight,
                                smallWidth: n === t.small.weight,
                                extraSmallWidth: n === t.extraSmall.weight,
                                extraLargeHeight: r === t.extraLarge.weight,
                                largeHeight: r === t.large.weight,
                                mediumHeight: r === t.medium.weight,
                                smallHeight: r === t.small.weight,
                                extraSmallHeight: r === t.extraSmall.weight,
                            };
                        })(u, t, $),
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
                })(j || (j = {}));
                const q = V(),
                    Y = (0, a.createContext)(q),
                    X = ['children'];
                (0, a.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, X);
                    const n = (0, a.useContext)(Y),
                        r = n.extraLarge,
                        o = n.large,
                        i = n.medium,
                        s = n.small,
                        l = n.extraSmall,
                        c = n.extraLargeWidth,
                        d = n.largeWidth,
                        E = n.mediumWidth,
                        _ = n.smallWidth,
                        m = n.extraSmallWidth,
                        A = n.extraLargeHeight,
                        F = n.largeHeight,
                        g = n.mediumHeight,
                        D = n.smallHeight,
                        B = n.extraSmallHeight,
                        C = { extraLarge: A, large: F, medium: g, small: D, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && o) return u;
                        if (t.medium && i) return u;
                        if (t.small && s) return u;
                        if (t.extraSmall && l) return u;
                    } else {
                        if (t.extraLargeWidth && c) return z(u, t, C);
                        if (t.largeWidth && d) return z(u, t, C);
                        if (t.mediumWidth && E) return z(u, t, C);
                        if (t.smallWidth && _) return z(u, t, C);
                        if (t.extraSmallWidth && m) return z(u, t, C);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && A) return u;
                            if (t.largeHeight && F) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && D) return u;
                            if (t.extraSmallHeight && B) return u;
                        }
                    }
                    return null;
                });
                const K = ({ children: e }) => {
                    const u = (0, a.useState)(V),
                        t = u[0],
                        n = u[1],
                        r = (0, a.useState)(!1),
                        i = r[0],
                        s = r[1];
                    return (
                        (0, a.useLayoutEffect)(() => {
                            function e() {
                                n((e) => {
                                    const u = d.O.client.getSize('rem');
                                    return e.width === u.width && e.height === u.height ? e : V(u);
                                });
                            }
                            return (
                                e(),
                                s(!0),
                                d.O.client.events.on('clientResized', e),
                                d.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (d.O.client.events.off('clientResized', e),
                                        d.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        o().createElement(Y.Provider, { value: t }, i && e)
                    );
                };
                var Z = t(926),
                    Q = t.n(Z);
                let J, ee, ue;
                (!(function (e) {
                    ((e[(e.ExtraSmall = $.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = $.small.width)] = 'Small'),
                        (e[(e.Medium = $.medium.width)] = 'Medium'),
                        (e[(e.Large = $.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = $.extraLarge.width)] = 'ExtraLarge'));
                })(J || (J = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = $.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = $.small.width)] = 'Small'),
                            (e[(e.Medium = $.medium.width)] = 'Medium'),
                            (e[(e.Large = $.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = $.extraLarge.width)] = 'ExtraLarge'));
                    })(ee || (ee = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = $.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = $.small.height)] = 'Small'),
                            (e[(e.Medium = $.medium.height)] = 'Medium'),
                            (e[(e.Large = $.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = $.extraLarge.height)] = 'ExtraLarge'));
                    })(ue || (ue = {})));
                const te = () => {
                        const e = (0, a.useContext)(Y),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return J.ExtraLarge;
                                    case e.large:
                                        return J.Large;
                                    case e.medium:
                                        return J.Medium;
                                    case e.small:
                                        return J.Small;
                                    case e.extraSmall:
                                        return J.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), J.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return ee.ExtraLarge;
                                    case e.largeWidth:
                                        return ee.Large;
                                    case e.mediumWidth:
                                        return ee.Medium;
                                    case e.smallWidth:
                                        return ee.Small;
                                    case e.extraSmallWidth:
                                        return ee.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), ee.ExtraSmall);
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return ue.ExtraLarge;
                                    case e.largeHeight:
                                        return ue.Large;
                                    case e.mediumHeight:
                                        return ue.Medium;
                                    case e.smallHeight:
                                        return ue.Small;
                                    case e.extraSmallHeight:
                                        return ue.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), ue.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    ne = ['children', 'className'];
                function re() {
                    return (
                        (re =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        re.apply(this, arguments)
                    );
                }
                const ae = {
                        [ee.ExtraSmall]: '',
                        [ee.Small]: Q().SMALL_WIDTH,
                        [ee.Medium]: `${Q().SMALL_WIDTH} ${Q().MEDIUM_WIDTH}`,
                        [ee.Large]: `${Q().SMALL_WIDTH} ${Q().MEDIUM_WIDTH} ${Q().LARGE_WIDTH}`,
                        [ee.ExtraLarge]: `${Q().SMALL_WIDTH} ${Q().MEDIUM_WIDTH} ${Q().LARGE_WIDTH} ${Q().EXTRA_LARGE_WIDTH}`,
                    },
                    oe = {
                        [ue.ExtraSmall]: '',
                        [ue.Small]: Q().SMALL_HEIGHT,
                        [ue.Medium]: `${Q().SMALL_HEIGHT} ${Q().MEDIUM_HEIGHT}`,
                        [ue.Large]: `${Q().SMALL_HEIGHT} ${Q().MEDIUM_HEIGHT} ${Q().LARGE_HEIGHT}`,
                        [ue.ExtraLarge]: `${Q().SMALL_HEIGHT} ${Q().MEDIUM_HEIGHT} ${Q().LARGE_HEIGHT} ${Q().EXTRA_LARGE_HEIGHT}`,
                    },
                    ie = {
                        [J.ExtraSmall]: '',
                        [J.Small]: Q().SMALL,
                        [J.Medium]: `${Q().SMALL} ${Q().MEDIUM}`,
                        [J.Large]: `${Q().SMALL} ${Q().MEDIUM} ${Q().LARGE}`,
                        [J.ExtraLarge]: `${Q().SMALL} ${Q().MEDIUM} ${Q().LARGE} ${Q().EXTRA_LARGE}`,
                    },
                    se = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, ne);
                        const r = te(),
                            a = r.mediaWidth,
                            i = r.mediaHeight,
                            s = r.mediaSize;
                        return o().createElement('div', re({ className: c()(t, ae[a], oe[i], ie[s]) }, n), u);
                    },
                    le = ['children'];
                const ce = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, le);
                        return o().createElement(K, null, o().createElement(se, t, u));
                    },
                    de = (e, u) => {
                        const t = [];
                        for (let n = 0; n < e; n++) t.push(u(n));
                        return t;
                    };
                let Ee, _e, me, Ae, Fe, ge, De, Be;
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
                })(Ee || (Ee = {})),
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
                    })(_e || (_e = {})),
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
                    })(me || (me = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Ae || (Ae = {})),
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
                    })(Fe || (Fe = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(ge || (ge = {})),
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
                    })(De || (De = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(Be || (Be = {})));
                Ee.Attachment;
                const Ce = [
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
                function pe(e) {
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
                const he = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: D.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    fe = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            i = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            _ = e.decoratorId,
                            m = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            g = e.targetId,
                            D = void 0 === g ? 0 : g,
                            B = e.onShow,
                            C = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Ce);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, a.useMemo)(
                                () =>
                                    D ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId'),
                                            r = '';
                                        var a;
                                        return (
                                            u &&
                                                ((r =
                                                    (null == (a = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) ||
                                                    ''),
                                                (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { callerUrl: r, caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [D],
                            ),
                            v = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (he(t, m, { isMouseEvent: !0, on: !0, arguments: pe(n) }, f),
                                    B && B(),
                                    (h.current.isVisible = !0));
                            }, [t, m, n, f, B]),
                            b = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        he(t, m, { on: !1 }, f),
                                        h.current.isVisible && C && C(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, m, f, C]),
                            w = (0, a.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        ((0, a.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && b();
                            }, [F, b]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        (window.removeEventListener('mouseleave', b), b());
                                    }
                                ),
                                [b],
                            ));
                        return F
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(h.current.timeoutId),
                                                      (h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (b(), null == o || o(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === E && b(), null == s || s(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === E && b(), null == i || i(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    ve = ['children'];
                function be() {
                    return (
                        (be =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        be.apply(this, arguments)
                    );
                }
                const we = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, ve);
                    return o().createElement(
                        fe,
                        be(
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
                t(1281);
                let ye;
                function Se(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(ye || (ye = {}));
                const Te = (e) => e.replace(/&nbsp;/g, ' ');
                (() => {
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
                })();
                function Re(e) {
                    const u = e.match(/(?:_(?:t|tier))?(\d+)\b/);
                    return u ? parseInt(u[1], 10) : null;
                }
                let xe;
                function Le(e) {
                    return e.includes('delux')
                        ? xe.Deluxe
                        : e.includes('modernized')
                          ? xe.Modernized
                          : e.includes(xe.Trophy)
                            ? xe.Trophy
                            : e.toLowerCase().endsWith(xe.BattleBooster.toLowerCase())
                              ? xe.BattleBooster
                              : xe.None;
                }
                function Me(e, u) {
                    return u && u !== xe.None ? u : e;
                }
                !(function (e) {
                    ((e.None = 'none'),
                        (e.Trophy = 'trophy'),
                        (e.Deluxe = 'deluxe'),
                        (e.Modernized = 'modernized_device'),
                        (e.BattleBooster = 'battleBooster'));
                })(xe || (xe = {}));
                const Pe = (e, u = me.Small, t) => {
                    if (t === xe.Modernized) {
                        const t = Re(e);
                        if (t) return `R.images.gui.maps.icons.quests.bonuses.${u}.modernized_devices_t${t}_gift`;
                    }
                    return `R.images.gui.maps.icons.quests.bonuses.${u}.${Me(e, t)}_gift`;
                };
                function ke(e, u) {
                    if (u === xe.Modernized) {
                        const u = Re(e);
                        if (u)
                            return `R.images.gui.maps.icons.selectableReward.reward.optDeviceType.modernized_devices_t${u}`;
                    }
                    return R.images.gui.maps.icons.selectableReward.reward.optDeviceType.$dyn(u);
                }
                const Oe = (e, u = 's180x135', t = 'R.images.gui.maps.icons.selectableReward.reward') =>
                        `${t}.${u}.${e}`,
                    Ne = {
                        base: 'Category_base_01',
                        glow: 'Category_glow_8a',
                        glow__show: 'Category_glow__show_c1',
                        title: 'Category_title_e6',
                        base__selected: 'Category_base__selected_75',
                        imageContainer: 'Category_imageContainer_a0',
                        image: 'Category_image_12',
                        base__completed: 'Category_base__completed_fb',
                        base__accepting: 'Category_base__accepting_71',
                        blink: 'Category_blink_4f',
                        check: 'Category_check_13',
                        counter: 'Category_counter_1f',
                        slideUp: 'Category_slideUp_bf',
                        show: 'Category_show_c1',
                    },
                    Ie = R.strings.selectable_reward.tabs,
                    He = (0, h.Pi)(({ index: e, className: u, classNames: t }) => {
                        const n = te().mediaSize,
                            r = G(),
                            a = r.model,
                            i = r.controls,
                            s = a.animationState.get(),
                            l = a.computes.tabByIndex(e),
                            E = l.count === l.limit,
                            _ = a.root.get().selectedTab === l.type,
                            m = n >= J.Medium ? me.Big : me.Small,
                            A = Le(l.type);
                        return o().createElement(
                            'div',
                            {
                                className: c()(
                                    Ne.base,
                                    E && Ne.base__completed,
                                    _ ? Ne.base__selected : l.count && Ne[`base__${s}`],
                                    u,
                                ),
                                onClick: () => {
                                    (d.O.sound.play.sound('bp_click'), i.openTab(l.type));
                                },
                                onMouseEnter: () => d.O.sound.play.sound('bp_highlight'),
                            },
                            o().createElement('div', { className: c()(Ne.glow, _ && Ne.glow__show) }),
                            o().createElement(
                                'div',
                                { className: c()(Ne.title, null == t ? void 0 : t.title) },
                                Se(
                                    ((e, u) => {
                                        const t = e.match(/^offer:([^:]+):/);
                                        return t
                                            ? `${R.strings.selectable_reward.tabs.items.$dyn(t[1])}`
                                            : `${R.strings.selectable_reward.tabs.items.$dyn(Me(e, u))}`;
                                    })(l.type, A),
                                    { equipmentType: R.strings.selectable_reward.tabs.items.$dyn(A) },
                                ),
                            ),
                            o().createElement(
                                we,
                                { args: { type: l.type } },
                                o().createElement(
                                    'div',
                                    { className: Ne.imageContainer },
                                    o().createElement('div', {
                                        className: Ne.image,
                                        style: { backgroundImage: `url(${Pe(l.type, m, A)})` },
                                    }),
                                    o().createElement('div', { className: Ne.check }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: Ne.counter },
                                Se(Ie.counter(), { count: l.count, limit: l.limit }),
                            ),
                        );
                    }),
                    Ue = (e, u, t) => (t < e ? e : t > u ? u : t),
                    We = [];
                function Ge(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), We)
                    );
                }
                function ze(e, u, t = []) {
                    const n = (0, a.useRef)(0),
                        r = (0, a.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, a.useEffect)(() => r, [r]);
                    const o = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            ((n.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, o),
                        r,
                    ];
                }
                function $e(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                function je(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Ve(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Ve(e, u);
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
                function Ve(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function qe(e, u, t) {
                    const n = (0, a.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let r,
                                    a = !1,
                                    o = 0;
                                function i() {
                                    r && clearTimeout(r);
                                }
                                function s(...s) {
                                    const l = this,
                                        c = Date.now() - o;
                                    function d() {
                                        ((o = Date.now()), t.apply(l, s));
                                    }
                                    a ||
                                        (n && !r && d(),
                                        i(),
                                        void 0 === n && c > e
                                            ? d()
                                            : !0 !== u &&
                                              (r = setTimeout(
                                                  n
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : d,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                    (s.cancel = function () {
                                        (i(), (a = !0));
                                    }),
                                    s
                                );
                            })(t, e),
                        u,
                    );
                    return ((0, a.useEffect)(() => n.cancel, [n]), n);
                }
                var Ye = t(7030);
                let Xe;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Xe || (Xe = {}));
                const Ke = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Ze = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        forceTriggerMouseMove: o,
                    }) => {
                        const i = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : Ue(r, a, t);
                        };
                        return (s = {}) => {
                            const l = s.settings,
                                c = void 0 === l ? Ke : l,
                                d = (0, a.useRef)(null),
                                E = (0, a.useRef)(null),
                                _ = (0, a.useRef)(!1),
                                m = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (var n, r = je(u(e).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                A = qe(
                                    () => {
                                        o && o();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, Ye.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), m.trigger('change', e), o && _.current && A());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                D = g[0],
                                B = g[1],
                                C = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = D.scrollPosition.get(),
                                            a = (null != (n = D.scrollPosition.goal) ? n : 0) - r;
                                        return i(e, u * t + a + r);
                                    },
                                    [D.scrollPosition],
                                ),
                                p = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            B.start({
                                                scrollPosition: i(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(n, D.scrollPosition.get()) },
                                            });
                                    },
                                    [B, c.animationConfig, D.scrollPosition],
                                ),
                                h = (0, a.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = E.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            a = C(u, e, n);
                                        p(a);
                                    },
                                    [p, C, c.step],
                                ),
                                f = (0, a.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && h(n(e)),
                                            d.current && m.trigger('mouseWheel', e, D.scrollPosition, u(d.current)));
                                    },
                                    [D.scrollPosition, h, m],
                                ),
                                v = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        n = (0, a.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        F(() => {
                                            const e = d.current;
                                            e &&
                                                (p(i(e, D.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [p, D.scrollPosition.goal],
                                ),
                                b = Ge(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = i(e, D.scrollPosition.goal);
                                    (u !== D.scrollPosition.goal && p(u, { immediate: !0 }),
                                        m.trigger('recalculateContent'));
                                });
                            ((0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', v),
                                    () => {
                                        window.removeEventListener('resize', v);
                                    }
                                ),
                                [v],
                            ),
                                (0, a.useEffect)(() => {
                                    const e = d.current;
                                    if (!e || !o) return;
                                    const u = () => {
                                            _.current = !0;
                                        },
                                        t = () => {
                                            _.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', u),
                                        e.addEventListener('mouseleave', t),
                                        () => {
                                            (e.removeEventListener('mouseenter', u),
                                                e.removeEventListener('mouseleave', t));
                                        }
                                    );
                                }, [d]));
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (E.current ? r(E.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? u(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: f,
                                    applyScroll: p,
                                    applyStepTo: h,
                                    contentRef: d,
                                    wrapperRef: E,
                                    scrollPosition: B,
                                    animationScroll: D,
                                    recalculateContent: b,
                                    events: { on: m.on, off: m.off },
                                }),
                                [D.scrollPosition, p, h, m.off, m.on, b, f, B, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Qe = Ze({
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
                        getDirection: (e) => (e.deltaY > 1 ? Xe.Next : Xe.Prev),
                        forceTriggerMouseMove: d.O.view.forceTriggerMouseMove,
                    }),
                    Je = 'HorizontalBar_base_49',
                    eu = 'HorizontalBar_base__active_5e',
                    uu = 'HorizontalBar_leftButton_5f',
                    tu = 'HorizontalBar_rightButton_03',
                    nu = 'HorizontalBar_track_0d',
                    ru = 'HorizontalBar_thumb_fd',
                    au = 'HorizontalBar_rail_32',
                    ou = 'disable',
                    iu = { pending: !1, offset: 0 },
                    su = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    lu = () => {},
                    cu = (e, u) => Math.max(20, e.offsetWidth * u),
                    du = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = su, onDrag: n = lu }) => {
                        const r = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, a.useState)(iu),
                            A = m[0],
                            g = m[1],
                            D = (0, a.useCallback)(
                                (e) => {
                                    (g(e),
                                        E.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [n],
                            ),
                            B = () => {
                                const u = l.current,
                                    t = E.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    c = Ue(0, 1, a / (r - n)),
                                    d = (u.offsetWidth - cu(u, o)) * c;
                                ((t.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (i.current && s.current && l.current && E.current) {
                                            if (0 === e)
                                                return (
                                                    i.current.classList.add(ou),
                                                    void s.current.classList.remove(ou)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = E.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(ou),
                                                    void s.current.classList.add(ou)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(ou), s.current.classList.remove(ou));
                                        }
                                    })(d));
                            },
                            C = Ge(() => {
                                ((() => {
                                    const u = E.current,
                                        t = l.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const o = Math.min(1, n / a);
                                    ((u.style.width = `${cu(t, o)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 !== o ? r.current.classList.add(eu) : r.current.classList.remove(eu)));
                                })(),
                                    B());
                            });
                        ((0, a.useEffect)(() => F(C)),
                            (0, a.useEffect)(
                                () =>
                                    F(() => {
                                        const u = () => {
                                            B();
                                        };
                                        let t = lu;
                                        const n = () => {
                                            (t(), (t = F(C)));
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
                            (0, a.useEffect)(() => {
                                if (!A.pending) return;
                                const u = d.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!a || !o) return;
                                        const i = l.current,
                                            s = E.current;
                                        if (!i || !s) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const c = u.clientX - A.offset - i.getBoundingClientRect().x,
                                            d = (c / i.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, d),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: c, contentOffset: d }));
                                    }),
                                    t = d.O.client.events.mouse.up(() => {
                                        (u(), D(iu));
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, A.offset, A.pending, n, D]));
                        const p = ze((u) => e.applyStepTo(u), _, [e]),
                            h = p[0],
                            f = p[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const v = (e) => {
                            e.target.classList.contains(ou) || $e('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: c()(Je, u.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: c()(uu, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ou) || 0 !== e.button || ($e('play'), h(Xe.Next));
                                },
                                onMouseUp: f,
                                ref: i,
                                onMouseEnter: v,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: c()(nu, u.track),
                                    onMouseDown: (u) => {
                                        const n = E.current;
                                        if (n && 0 === u.button)
                                            if (($e('play'), u.target === n))
                                                D({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = E.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? Xe.Prev : Xe.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: v,
                                },
                                o().createElement('div', { ref: E, className: c()(ru, u.thumb) }),
                                o().createElement('div', { className: c()(au, u.rail) }),
                            ),
                            o().createElement('div', {
                                className: c()(tu, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ou) || 0 !== e.button || ($e('play'), h(Xe.Prev));
                                },
                                onMouseUp: f,
                                ref: s,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Eu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    _u = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: i,
                        scrollClassName: s,
                        getStepByRailClick: l,
                        onDrag: d,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: c()(Eu.base, e.base) });
                            }, [n]),
                            _ = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: c()(Eu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(Eu.defaultScrollArea, r) },
                                o().createElement(mu, { className: s, api: _, classNames: i }, e),
                            ),
                            o().createElement(du, { getStepByRailClick: l, api: u, onDrag: d, classNames: E }),
                        );
                    },
                    mu = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => F(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: c()(Eu.base, u) },
                            o().createElement(
                                'div',
                                {
                                    className: c()(Eu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: c()(Eu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ((mu.Bar = du), (mu.Default = _u));
                const Au = Ze({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Xe.Next : Xe.Prev),
                    }),
                    Fu = 'VerticalBar_base_f3',
                    gu = 'VerticalBar_base__active_72',
                    Du = 'VerticalBar_topButton_d7',
                    Bu = 'VerticalBar_bottomButton_06',
                    Cu = 'VerticalBar_track_df',
                    pu = 'VerticalBar_thumb_32',
                    hu = 'VerticalBar_rail_43',
                    fu = 'disable',
                    vu = () => {},
                    bu = { pending: !1, offset: 0 },
                    wu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    yu = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Su = (e, u) => Math.max(20, e.offsetHeight * u),
                    Tu = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = wu, onDrag: n = vu }) => {
                        const r = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, a.useState)(bu),
                            A = m[0],
                            g = m[1],
                            D = (0, a.useCallback)(
                                (e) => {
                                    (g(e),
                                        E.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [n],
                            ),
                            B = Ge(() => {
                                const u = E.current,
                                    t = l.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && u && t)) return;
                                const o = Math.min(1, n / a);
                                return (
                                    (u.style.height = `${Su(t, o)}px`),
                                    (u.style.display = 'flex'),
                                    r.current &&
                                        (1 !== o ? r.current.classList.add(gu) : r.current.classList.remove(gu)),
                                    o
                                );
                            }),
                            C = Ge(() => {
                                const u = l.current,
                                    t = E.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    c = Ue(0, 1, a / (r - n)),
                                    d = (u.offsetHeight - Su(u, o)) * c;
                                ((t.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (i.current && s.current && l.current && E.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    i.current.classList.add(fu),
                                                    void s.current.classList.remove(fu)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = E.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(fu),
                                                    void s.current.classList.add(fu)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(fu), s.current.classList.remove(fu));
                                        }
                                    })(d));
                            }),
                            p = Ge(() => {
                                yu(e, () => {
                                    (B(), C());
                                });
                            });
                        ((0, a.useEffect)(() => F(p)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    yu(e, () => {
                                        C();
                                    });
                                };
                                let t = vu;
                                const n = () => {
                                    (t(), (t = F(p)));
                                };
                                return (
                                    e.events.on('recalculateContent', p),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', p),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!A.pending) return;
                                const u = d.O.client.events.mouse.up(() => {
                                        D(bu);
                                    }),
                                    t = d.O.client.events.mouse.move(([u]) => {
                                        yu(e, (t) => {
                                            const r = l.current,
                                                a = E.current,
                                                o = e.getContainerSize();
                                            if (!r || !a || !o) return;
                                            const i = u.screenY - A.offset - r.getBoundingClientRect().y,
                                                s = (i / r.offsetHeight) * o;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: s }));
                                        });
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, A.offset, A.pending, n, D]));
                        const h = ze((u) => e.applyStepTo(u), _, [e]),
                            f = h[0],
                            v = h[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const b = (e) => {
                            e.target.classList.contains(fu) || $e('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: c()(Fu, u.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: c()(Du, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(fu) || 0 !== e.button || ($e('play'), f(Xe.Next));
                                },
                                ref: i,
                                onMouseEnter: b,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: c()(Cu, u.track),
                                    onMouseDown: (u) => {
                                        const n = E.current;
                                        if (n && 0 === u.button)
                                            if (($e('play'), u.target === n))
                                                D({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    E.current &&
                                                        yu(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? Xe.Prev : Xe.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: b,
                                },
                                o().createElement('div', { ref: E, className: c()(pu, u.thumb) }),
                                o().createElement('div', { className: c()(hu, u.rail) }),
                            ),
                            o().createElement('div', {
                                className: c()(Bu, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(fu) || 0 !== e.button || ($e('play'), f(Xe.Prev));
                                },
                                onMouseUp: v,
                                ref: s,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    Ru = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    xu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: i,
                        scrollClassNames: s,
                        getStepByRailClick: l,
                        onDrag: d,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: c()(Ru.base, e.base) });
                            }, [n]),
                            _ = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: c()(Ru.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(Ru.area, r) },
                                o().createElement(Lu, { className: i, classNames: s, api: _ }, e),
                            ),
                            o().createElement(Tu, { getStepByRailClick: l, api: u, onDrag: d, classNames: E }),
                        );
                    },
                    Lu = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, a.useEffect)(() => F(n.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: c()(Ru.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(Ru.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                Lu.Default = xu;
                const Mu = { Vertical: r, Horizontal: n },
                    Pu = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                const Ou = R.views.common.tooltip_window.simple_tooltip_content,
                    Nu = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            i = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Pu);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: n, note: r, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, n, r, s]);
                        return o().createElement(
                            fe,
                            ku(
                                {
                                    contentId:
                                        ((d = null == s ? void 0 : s.hasHtmlContent),
                                        d ? Ou.SimpleTooltipHtmlContent('resId') : Ou.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    },
                    Iu = 'state_normal',
                    Hu = 'state_limited',
                    Uu = {
                        base: 'Reward_base_fc',
                        base__selected: 'Reward_base__selected_6d',
                        reward: 'Reward_reward_3f',
                        image: 'Reward_image_5e',
                        base__stateReceived: 'Reward_base__stateReceived_ff',
                        base__stateLimited: 'Reward_base__stateLimited_6e',
                        base__accepting: 'Reward_base__accepting_9d',
                        blink: 'Reward_blink_2d',
                        optDeviceType: 'Reward_optDeviceType_7f',
                        disabled: 'Reward_disabled_31',
                        packSize: 'Reward_packSize_63',
                        label: 'Reward_label_e6',
                        storage: 'Reward_storage_0b',
                        storage__hidden: 'Reward_storage__hidden_0a',
                        storageIcon: 'Reward_storageIcon_45',
                        countText: 'Reward_countText_61',
                        select: 'Reward_select_89',
                        state: 'Reward_state_19',
                        stateText: 'Reward_stateText_4b',
                        stateIcon: 'Reward_stateIcon_c6',
                        glow: 'Reward_glow_dc',
                        base__stateNormal: 'Reward_base__stateNormal_99',
                        slideUp: 'Reward_slideUp_f1',
                        show: 'Reward_show_0f',
                    },
                    Wu = {
                        base: 'SelectButton_base_1c',
                        base__plus: 'SelectButton_base__plus_01',
                        base__disabled: 'SelectButton_base__disabled_f4',
                        base__minus: 'SelectButton_base__minus_13',
                    };
                let Gu;
                !(function (e) {
                    ((e.Plus = 'plus'), (e.Minus = 'minus'));
                })(Gu || (Gu = {}));
                const zu = ({ type: e = Gu.Plus, isEnabled: u = !0, onClick: t }) =>
                        o().createElement('div', {
                            className: c()(Wu.base, Wu[`base__${e}`], !u && Wu.base__disabled),
                            onClick: (e) => {
                                (e.stopPropagation(), u && t(e));
                            },
                        }),
                    $u = R.strings.selectable_reward.reward,
                    ju = (0, h.Pi)(({ index: e }) => {
                        const u = G(),
                            t = u.model,
                            n = u.controls,
                            r = t.animationState.get(),
                            a = t.computes.rewardByIndex(e),
                            i = a.type,
                            s = a.count,
                            l = a.state,
                            E = a.storageCount,
                            _ = a.packSize,
                            m = n.addReward,
                            A = n.reduceReward,
                            F = s > 0 && 'state_received' !== l,
                            g = r === H.Accepting && F,
                            D = Le(i);
                        return o().createElement(
                            'div',
                            {
                                className: c()(
                                    Uu.base,
                                    F && Uu.base__selected,
                                    g && Uu.base__accepting,
                                    Uu[`base__${((B = l), B.replace(/_\w/g, (e) => e[1].toUpperCase()))}`],
                                ),
                                onClick: () => {
                                    l === Iu
                                        ? (d.O.sound.play.sound('bp_click'), m(i))
                                        : l === Hu && d.O.sound.play.sound('bp_click_limit');
                                },
                                onMouseEnter: () => d.O.sound.play.sound('bp_highlight'),
                            },
                            o().createElement(
                                'div',
                                { className: c()(Uu.storage, E <= 0 && Uu.storage__hidden) },
                                o().createElement('div', { className: Uu.storageIcon }),
                                E,
                            ),
                            o().createElement(
                                we,
                                { args: { type: i } },
                                o().createElement(
                                    'div',
                                    { className: Uu.reward },
                                    o().createElement('div', {
                                        className: Uu.image,
                                        style: { backgroundImage: `url(${Oe(i)})` },
                                    }),
                                    D !== xe.None &&
                                        o().createElement('div', {
                                            className: Uu.optDeviceType,
                                            style: { backgroundImage: `url(${ke(i, D)})` },
                                        }),
                                    !F &&
                                        l !== Iu &&
                                        o().createElement('div', {
                                            className: Uu.disabled,
                                            style: { maskImage: `url(${Oe(i)})` },
                                        }),
                                    _ > 1 &&
                                        o().createElement(
                                            'div',
                                            { className: Uu.packSize },
                                            Se($u.packSizeCount(), { packSize: _ }),
                                        ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: Uu.label },
                                ((e) => {
                                    var u;
                                    const t = e.split('_')[1],
                                        n = t && R.strings.blueprints.nations.$dyn(t),
                                        r = null == (u = R.strings.artefacts.$dyn(e)) ? void 0 : u.$dyn('name');
                                    return (
                                        n ||
                                        (r && 'string' == typeof r
                                            ? Te(r)
                                            : void console.error('title for reward is not provided'))
                                    );
                                })(i),
                            ),
                            F || l === Iu
                                ? o().createElement(
                                      o().Fragment,
                                      null,
                                      o().createElement('span', { className: Uu.countText }, s),
                                      o().createElement(
                                          'div',
                                          { className: Uu.select },
                                          o().createElement(zu, {
                                              type: Gu.Minus,
                                              isEnabled: F,
                                              onClick: () => {
                                                  (d.O.sound.play.sound('bp_click_minus'), A(i));
                                              },
                                          }),
                                          o().createElement(zu, {
                                              type: Gu.Plus,
                                              isEnabled: l === Iu,
                                              onClick: () => {
                                                  l === Iu && (d.O.sound.play.sound('bp_click_plus'), m(i));
                                              },
                                          }),
                                      ),
                                  )
                                : o().createElement(
                                      Nu,
                                      l === Hu && 0 === s
                                          ? {
                                                header: $u.tooltip.state_limited.header(),
                                                body: $u.tooltip.state_limited.body(),
                                            }
                                          : { isEnabled: !1 },
                                      o().createElement(
                                          'div',
                                          { className: Uu.state },
                                          o().createElement('div', { className: Uu.stateText }, $u.$dyn(l)),
                                          o().createElement('div', { className: Uu.stateIcon }),
                                      ),
                                  ),
                            o().createElement('div', { className: Uu.glow }),
                        );
                        var B;
                    }),
                    Vu = 'ContentGrid_base_59',
                    qu = 'ContentGrid_scrollArea_e0',
                    Yu = 'ContentGrid_scrollAreaInner_ba',
                    Xu = 'ContentGrid_reward_68',
                    Ku = {
                        base: 'Lip_base_57',
                        base__top: 'Lip_base__top_11',
                        base__bottom: 'Lip_base__bottom_a5',
                        base__show: 'Lip_base__show_65',
                    };
                let Zu;
                !(function (e) {
                    ((e.Top = 'top'), (e.Bottom = 'bottom'));
                })(Zu || (Zu = {}));
                const Qu = ({ position: e, visible: u }) =>
                        o().createElement('div', { className: c()(Ku.base, Ku[`base__${e}`], u && Ku.base__show) }),
                    Ju = (0, h.Pi)(({ className: e }) => {
                        const u = G().model,
                            t = u.root.get().selectedTab,
                            n = u.rewards.get(),
                            r = Au(),
                            i = (0, a.useState)('default'),
                            s = i[0],
                            l = i[1],
                            d = Ge(() => {
                                const e = r.getBounds(),
                                    u = e[0],
                                    t = e[1],
                                    n = r.animationScroll.scrollPosition.goal,
                                    a = r.getContainerSize(),
                                    o = r.getWrapperSize();
                                if (a && o)
                                    if (a !== o)
                                        switch (n) {
                                            case u:
                                                l('start');
                                                break;
                                            case t:
                                                l('end');
                                                break;
                                            default:
                                                l('default');
                                        }
                                    else l('hidden');
                            });
                        return (
                            (0, a.useEffect)(
                                () => (
                                    r.events.on('change', d),
                                    r.events.on('recalculateContent', d),
                                    r.events.on('resizeHandled', d),
                                    () => {
                                        (r.events.off('change', d),
                                            r.events.off('recalculateContent', d),
                                            r.events.off('resizeHandled', d));
                                    }
                                ),
                                [r.events, d],
                            ),
                            (0, a.useEffect)(
                                () =>
                                    F(() => {
                                        r.applyScroll(0);
                                    }),
                                [r, t],
                            ),
                            o().createElement(
                                'div',
                                { className: c()(Vu, e) },
                                o().createElement(
                                    Mu.Vertical.Area.Default,
                                    { api: r, key: 'area', className: qu },
                                    o().createElement(
                                        'div',
                                        { className: Yu },
                                        de(n.length, (e) =>
                                            o().createElement(
                                                'div',
                                                { key: e, className: Xu },
                                                o().createElement(ju, { index: e }),
                                            ),
                                        ),
                                    ),
                                ),
                                'hidden' !== s &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(Qu, { position: Zu.Top, visible: 'start' !== s }),
                                        o().createElement(Qu, { position: Zu.Bottom, visible: 'end' !== s }),
                                    ),
                            )
                        );
                    }),
                    et = {
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
                let ut, tt;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(ut || (ut = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(tt || (tt = {})));
                const nt = ({
                    children: e,
                    size: u,
                    disabled: t,
                    mixClass: n,
                    onMouseEnter: r,
                    onMouseMove: i,
                    onMouseDown: s,
                    onMouseUp: l,
                    onMouseLeave: d,
                    onClick: E,
                    isFocused: _ = !1,
                    type: m = ut.primary,
                    soundHover: A = 'highlight',
                    soundClick: F = 'play',
                }) => {
                    const g = (0, a.useRef)(null),
                        D = (0, a.useState)(_),
                        B = D[0],
                        C = D[1],
                        p = (0, a.useState)(!1),
                        h = p[0],
                        f = p[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                B && null !== g.current && !g.current.contains(e.target) && C(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [B]),
                        (0, a.useEffect)(() => {
                            C(_);
                        }, [_]),
                        o().createElement(
                            'div',
                            {
                                ref: g,
                                className: c()(
                                    et.base,
                                    et[`base__${m}`],
                                    t && et.base__disabled,
                                    u && et[`base__${u}`],
                                    B && et.base__focus,
                                    h && et.base__highlightActive,
                                    n,
                                ),
                                onMouseEnter: function (e) {
                                    t || (null !== A && $e(A), r && r(e));
                                },
                                onMouseMove: function (e) {
                                    i && i(e);
                                },
                                onMouseUp: function (e) {
                                    t || (l && l(e), f(!1));
                                },
                                onMouseDown: function (e) {
                                    t ||
                                        (null !== F && $e(F),
                                        s && s(e),
                                        _ && (t || (g.current && (g.current.focus(), C(!0)))),
                                        f(!0));
                                },
                                onMouseLeave: function (e) {
                                    t || (d && d(e), f(!1));
                                },
                                onClick: function (e) {
                                    t || (E && E(e));
                                },
                            },
                            m !== ut.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: et.back }),
                                    o().createElement('span', { className: et.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: c()(et.state, et.state__default) },
                                o().createElement('span', { className: et.stateDisabled }),
                                o().createElement('span', { className: et.stateHighlightHover }),
                                o().createElement('span', { className: et.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: et.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                const rt = 'Footer_base_78',
                    at = 'Footer_description_7a',
                    ot = 'Footer_selectRewards_b0',
                    it = 'Footer_rewardsSelected_06',
                    st = 'Footer_rewardsSelectedCount_af',
                    lt = 'Footer_rewardsSelectedIcon_83',
                    ct = 'Footer_buttons_10',
                    dt = 'Footer_cButton_fe',
                    Et = (0, h.Pi)(({ buttonsSize: e, classNames: u }) => {
                        const t = G(),
                            n = t.model,
                            r = t.controls,
                            i = n.root.get().totalRewardCount,
                            s = i > 0,
                            l = te().mediaSize,
                            d = null != e ? e : ((e) => (e > J.Small ? tt.medium : tt.small))(l),
                            E = c()(dt, null == u ? void 0 : u.button),
                            _ = (function () {
                                const e = (0, a.useRef)(0);
                                return (
                                    p(() => {
                                        window.clearTimeout(e.current);
                                    }),
                                    (0, a.useMemo)(
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
                            })(),
                            m = n.computes.rewardsToClaimTotal();
                        return o().createElement(
                            'div',
                            { className: rt },
                            o().createElement(
                                'div',
                                { className: at },
                                s
                                    ? o().createElement(
                                          'div',
                                          { className: it },
                                          R.strings.selectable_reward.footer.rewardsSelected(),
                                          o().createElement('span', { className: st }, i),
                                          o().createElement(
                                              fe,
                                              {
                                                  contentId:
                                                      R.views.lobby.common.tooltips.SelectedRewardsTooltipView('resId'),
                                              },
                                              o().createElement('div', { className: lt }),
                                          ),
                                      )
                                    : o().createElement(
                                          'div',
                                          { className: ot },
                                          1 === n.tabs.get().length
                                              ? R.strings.selectable_reward.footer.singleCategory.selectRewards(m)
                                              : R.strings.selectable_reward.footer.multipleCategories.selectRewards(m),
                                      ),
                            ),
                            o().createElement(
                                'div',
                                { className: ct },
                                o().createElement(
                                    nt,
                                    {
                                        size: d,
                                        type: ut.primary,
                                        disabled: !s,
                                        mixClass: E,
                                        onClick: () => {
                                            (r.setAnimationState(H.Accepting), _.run(r.submit, 600));
                                        },
                                    },
                                    R.strings.selectable_reward.footer.okBtn.label(),
                                ),
                                o().createElement(
                                    nt,
                                    { size: d, type: ut.secondary, mixClass: E, onClick: r.close },
                                    R.strings.selectable_reward.footer.closeBtn.label(),
                                ),
                            ),
                        );
                    }),
                    _t = {
                        base: 'Content_base_8e',
                        base__accepting: 'Content_base__accepting_d1',
                        heading: 'Content_heading_b3',
                        slideUp: 'Content_slideUp_84',
                        title: 'Content_title_aa',
                        subTitle: 'Content_subTitle_61',
                        wrapper: 'Content_wrapper_b8',
                        show: 'Content_show_00',
                        wrapper__shown: 'Content_wrapper__shown_e4',
                        categories: 'Content_categories_54',
                        footer: 'Content_footer_ec',
                        base__windowed: 'Content_base__windowed_4a',
                        blink: 'Content_blink_95',
                    },
                    mt = (0, h.Pi)(({ title: e, subTitle: u, classNames: t, buttonsSize: n }) => {
                        const r = (0, a.useState)(!1),
                            i = r[0],
                            s = r[1],
                            l = G().model,
                            d = l.tabs.get(),
                            E = l.animationState.get();
                        return (
                            (0, a.useEffect)(() => {
                                if (!i)
                                    return ((e, u) => {
                                        let t;
                                        const n = setTimeout(() => {
                                            t = e();
                                        }, u);
                                        return () => {
                                            ('function' == typeof t && t(), clearTimeout(n));
                                        };
                                    })(() => {
                                        s(!0);
                                    }, 600);
                            }, [i]),
                            o().createElement(
                                'div',
                                { className: c()(_t.base, _t[`base__${E}`]) },
                                o().createElement(
                                    'div',
                                    { className: c()(_t.heading, null == t ? void 0 : t.heading) },
                                    o().createElement(
                                        'div',
                                        { className: c()(_t.title, null == t ? void 0 : t.title) },
                                        e,
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: c()(_t.subTitle, null == t ? void 0 : t.subTitle) },
                                        u,
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: c()(_t.wrapper, i && _t.wrapper__shown) },
                                    o().createElement(
                                        'div',
                                        { className: _t.categories },
                                        de(d.length, (e) =>
                                            o().createElement(He, {
                                                key: e,
                                                index: e,
                                                className: null == t ? void 0 : t.category,
                                                classNames: { title: null == t ? void 0 : t.categoryTitle },
                                            }),
                                        ),
                                    ),
                                    o().createElement(Ju, { className: null == t ? void 0 : t.contentGrid }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: c()(_t.footer, null == t ? void 0 : t.footer) },
                                    o().createElement(Et, {
                                        buttonsSize: n,
                                        classNames: null == t ? void 0 : t.footerClassNames,
                                    }),
                                ),
                            )
                        );
                    }),
                    At = 'Error_base_71',
                    Ft = 'Error_image_a8',
                    gt = 'Error_title_49',
                    Dt = 'Error_description_4f',
                    Bt = 'Error_footer_2d',
                    Ct = 'Error_button_4d',
                    pt = R.strings.selectable_reward.error,
                    ht = (0, h.Pi)(() => {
                        const e = G().controls;
                        return o().createElement(
                            'div',
                            { className: At },
                            o().createElement('div', { className: Ft }),
                            o().createElement('div', { className: gt }, pt.title()),
                            o().createElement('div', { className: Dt }, pt.description()),
                            o().createElement(
                                'div',
                                { className: Bt },
                                o().createElement(
                                    nt,
                                    { mixClass: Ct, type: ut.primary, size: tt.medium, onClick: e.close },
                                    pt.button(),
                                ),
                            ),
                        );
                    }),
                    ft = 'RewardSelection_base_0f',
                    vt = (0, h.Pi)(({ title: e, subTitle: u, classNames: t, buttonsSize: n }) => {
                        const r = G().model.tabs.get();
                        return o().createElement(
                            ce,
                            { className: ft },
                            r.length > 0
                                ? o().createElement(mt, { title: e, subTitle: u, classNames: t, buttonsSize: n })
                                : o().createElement(ht, null),
                        );
                    }),
                    bt = ({ title: e, subTitle: u, modelProviderContext: t }) =>
                        o().createElement(
                            W,
                            { options: { context: t } },
                            o().createElement(vt, { title: e, subTitle: u }),
                        ),
                    wt = P()(
                        ({ observableModel: e }) => {
                            const u = { root: e.object() };
                            return Object.assign({}, u);
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('selectableRewardModel.onCloseClick'),
                        }),
                    ),
                    yt = wt[0],
                    St = wt[1],
                    Tt = 'App_base_5a',
                    Rt = 'App_base__hide_88',
                    xt = 'App_content_cc',
                    Lt = 'App_background_c3',
                    Mt = 'App_backgroundBlur_8d',
                    Pt = 'App_shadow_18',
                    kt = 'App_close_9c',
                    Ot = R.strings.battle_pass.rewardChoice,
                    Nt = (e, u) =>
                        u
                            ? {
                                  backgroundImage: `url(${y(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, e)})`,
                              }
                            : ((e) => {
                                  const u = R.images.gui.maps.icons.battlePass.backgrounds;
                                  return e
                                      ? { backgroundImage: `url(${y(u.progression, e)})` }
                                      : { backgroundImage: `url(${u.$dyn('common')})` };
                              })(),
                    It = (0, h.Pi)(() => {
                        const e = St(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get(),
                            r = n.chapterID,
                            i = n.level,
                            s = Boolean(i),
                            l = (0, a.useState)(!1),
                            E = l[0],
                            _ = l[1],
                            m = (0, a.useState)(!1),
                            D = m[0],
                            B = m[1],
                            h = (0, a.useCallback)(() => {
                                if ((d.O.view.setEventHandled(), D)) return;
                                B(!0);
                                const e = setTimeout(t.close, 800);
                                return () => clearTimeout(e);
                            }, [t.close, D]);
                        var f;
                        (p(() => h),
                            (f = h),
                            C(g.n.ESCAPE, f),
                            (0, a.useEffect)(
                                () =>
                                    F(() => {
                                        _(!0);
                                    }),
                                [],
                            ));
                        const v = Nt(r, s);
                        return o().createElement(
                            'div',
                            { className: c()(Tt, D && Rt) },
                            o().createElement(
                                'div',
                                { className: Lt, style: v },
                                o().createElement('div', { className: Mt }),
                            ),
                            o().createElement('div', { className: Pt }),
                            E &&
                                o().createElement(
                                    'div',
                                    { className: xt },
                                    o().createElement(
                                        'div',
                                        { className: kt },
                                        o().createElement(A, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: h,
                                        }),
                                    ),
                                    o().createElement(bt, {
                                        modelProviderContext: 'model.selectableRewardModel',
                                        title: Ot.title(),
                                        subTitle: Ot.subTitle(),
                                    }),
                                ),
                        );
                    });
                engine.whenReady.then(() => {
                    s().render(
                        o().createElement(yt, null, o().createElement(It, null)),
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
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], a = !0, o = 0; o < u.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
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
        (__webpack_require__.j = 2016),
        (() => {
            var e = { 2016: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, o, i] = t,
                        s = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); s < a.length; s++)
                        ((r = a[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(2507));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
