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
            70: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => lu });
                var n = {};
                (t.r(n),
                    t.d(n, { mouse: () => A, off: () => _, on: () => E, onResize: () => s, onScaleUpdated: () => c }));
                var r = {};
                (t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => C,
                        getSize: () => m,
                        graphicsQuality: () => B,
                        playSound: () => F,
                        setRTPC: () => D,
                    }));
                var a = {};
                (t.r(a), t.d(a, { getBgUrl: () => y, getTextureUrl: () => f }));
                var i = {};
                function o(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function l(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                (t.r(i),
                    t.d(i, {
                        addModelObserver: () => W,
                        addPreloadTexture: () => P,
                        arabic2roman: () => eu,
                        children: () => a,
                        displayStatus: () => w,
                        displayStatusIs: () => nu,
                        enableFullScreenModeSupported: () => iu,
                        events: () => x,
                        extraSize: () => ru,
                        forceTriggerMouseMove: () => Q,
                        freezeTextureBeforeResize: () => $,
                        getBrowserTexturePath: () => R,
                        getDisplayStatus: () => J,
                        getExternalPaddingsRem: () => tu,
                        getFontNames: () => uu,
                        getScale: () => U,
                        getSize: () => j,
                        getViewGlobalPosition: () => G,
                        initExternalPaddings: () => ou,
                        isEventHandled: () => Z,
                        isFocused: () => K,
                        pxToRem: () => z,
                        remToPx: () => q,
                        resize: () => V,
                        sendEvent: () => I,
                        setAnimateWindow: () => X,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => M,
                        setSidePaddingsRem: () => H,
                        whenTutorialReady: () => au,
                    }));
                const s = o('clientResized'),
                    c = o('self.onScaleUpdated'),
                    E = (u, e) => engine.on(u, e),
                    _ = (u, e) => engine.off(u, e),
                    d = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const A = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && l(!1);
                    }
                    function t() {
                        u.enabled && l(!0);
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
                            : l(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${e}`,
                                        i = d[e]((u) => t([u, 'outside']));
                                    function o(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        n(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(a, o),
                                                (u.listeners -= 1),
                                                n(),
                                                (r = !1));
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
                            u.enabled && l(!0);
                        },
                        disableOutside() {
                            u.enabled && l(!1);
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
                function m(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function C(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const B = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    g = {
                        toUpperCase: (u) => window.systemLocale.toUpperCase(u),
                        toLowerCase: (u) => window.systemLocale.toLowerCase(u),
                    },
                    p = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    h = Object.keys(p).reduce((u, e) => ((u[e] = () => F(p[e])), u), {}),
                    b = { play: Object.assign({}, h, { sound: F }), setRTPC: D };
                var v = t(690);
                function f(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function y(u, e, t) {
                    return `url(${f(u, e, t)})`;
                }
                const w = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    x = {
                        onTextureFrozen: o('self.onTextureFrozen'),
                        onTextureReady: o('self.onTextureReady'),
                        onDomBuilt: o('self.onDomBuilt'),
                        onLoaded: o('self.onLoaded'),
                        onDisplayChanged: o('self.onShowingStatusChanged'),
                        onFocusUpdated: o('self.onFocusChanged'),
                        children: {
                            onAdded: o('children.onAdded'),
                            onLoaded: o('children.onLoaded'),
                            onRemoved: o('children.onRemoved'),
                            onAttached: o('children.onAttached'),
                            onTextureReady: o('children.onTextureReady'),
                            onRequestPosition: o('children.requestPosition'),
                        },
                    },
                    k = ['args'];
                const T = 2,
                    L = 16,
                    O = 32,
                    S = 64,
                    N = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(u);
                                    for (n = 0; n < a.length; n++) ((t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                    return r;
                                })(e, k);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([u, e]) => {
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
                        var n;
                    },
                    I = {
                        close(u) {
                            N('popover' === u ? T : O);
                        },
                        minimize() {
                            N(S);
                        },
                        move(u) {
                            N(L, { isMouseEvent: !0, on: u });
                        },
                    };
                function P(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function M(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function R(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function W(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function H(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function j(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function V(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function G(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: q(e.x), y: q(e.y) };
                }
                function $() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function U() {
                    return viewEnv.getScale();
                }
                function z(u) {
                    return viewEnv.pxToRem(u);
                }
                function q(u) {
                    return viewEnv.remToPx(u);
                }
                function X(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function K() {
                    return viewEnv.isFocused();
                }
                function Y() {
                    return viewEnv.setEventHandled();
                }
                function Z() {
                    return viewEnv.isEventHandled();
                }
                function Q() {
                    viewEnv.forceTriggerMouseMove();
                }
                function J() {
                    return viewEnv.getShowingStatus();
                }
                const uu = (() => {
                        let u = [];
                        return () => (0 === u.length && (u = Object.keys(viewEnv.getFontsConfig())), u);
                    })(),
                    eu = v.cg;
                function tu() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const nu = Object.keys(w).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === w[e]), u), {}),
                    ru = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    au = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : x.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
                function iu() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function ou(u) {
                    function e() {
                        const e = viewEnv.getExternalPaddingsRem(),
                            t = e.top,
                            n = e.right,
                            r = e.bottom,
                            a = e.left;
                        (u.style.setProperty('--external-padding-top', `${t}rem`),
                            u.style.setProperty('--external-padding-right', `${n}rem`),
                            u.style.setProperty('--external-padding-bottom', `${r}rem`),
                            u.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (e(), engine.on('self.onPaddingsUpdated', () => e()));
                }
                const lu = { view: i, client: r, sound: b, intl: g };
            },
            521: (u, e, t) => {
                'use strict';
                let n, r;
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
                    })(r || (r = {})));
            },
            690: (u, e, t) => {
                'use strict';
                t.d(e, { HG: () => o, cg: () => a });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(u) {
                    let e = '';
                    for (let t = r.length - 1; t >= 0; t--) for (; u >= r[t]; ) ((e += n[t]), (u -= r[t]));
                    return e;
                }
                const i = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    o = (u) => (i ? `${u}` : a(u));
            },
            358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => a });
                var n = t(70);
                class r {
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
                        return (window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(u, e, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(u, t, r);
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(u, e);
                        });
                    }
                }
                r.__instance = void 0;
                const a = r;
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
                t.d(e, {
                    B3: () => l,
                    Z5: () => i.Z5,
                    B0: () => o,
                    wU: () => b,
                    ry: () => m,
                    Eu: () => C,
                    SW: () => p,
                    P3: () => h,
                });
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
                const r = n;
                var a = t(358);
                var i = t(613);
                let o;
                !(function (u) {
                    ((u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE'));
                })(o || (o = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    s = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(521),
                    d = t(70);
                const A = ['args'];
                function F(u, e, t, n, r, a, i) {
                    try {
                        var o = u[a](i),
                            l = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(l) : Promise.resolve(l).then(n, r);
                }
                const D = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    m = (function () {
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
                                    return new Promise(function (n, r) {
                                        var a = u.apply(e, t);
                                        function i(u) {
                                            F(a, n, r, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            F(a, n, r, i, o, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
                    B = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(u);
                                    for (n = 0; n < a.length; n++) ((t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                    return r;
                                })(e, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    g = () => B(o.CLOSE),
                    p = () => B(o.POP_OVER, { on: !1 }),
                    h = (u, e, t, n, r = R.invalid('resId'), a) => {
                        const i = d.O.view.getViewGlobalPosition(),
                            l = t.getBoundingClientRect(),
                            s = l.x,
                            c = l.y,
                            E = l.width,
                            _ = l.height,
                            A = {
                                x: d.O.view.pxToRem(s) + i.x,
                                y: d.O.view.pxToRem(c) + i.y,
                                width: d.O.view.pxToRem(E),
                                height: d.O.view.pxToRem(_),
                            };
                        B(o.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: u,
                            decoratorID: n || R.invalid('resId'),
                            targetID: r,
                            direction: e,
                            bbox: D(A),
                            on: !0,
                            args: a,
                        });
                    },
                    b = () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                    v = (u, e) => {
                        u.keyCode === _.n.ESCAPE && e();
                    };
                var f = t(572);
                const y = r.instance,
                    w = {
                        DataTracker: a.Z,
                        ViewModel: f.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: s,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (u) => B(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: p,
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            B(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: h,
                        addEscapeListener: (u) => {
                            const e = (e) => v(e, u);
                            return (
                                window.addEventListener('keydown', e),
                                () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            v(u, g);
                        },
                        handleViewEvent: B,
                        onBindingsReady: m,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: b,
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const r = Object.prototype.toString.call(e[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < r.length; e++) t[n].push({ value: u(r[e].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = w;
            },
            613: (u, e, t) => {
                'use strict';
                t.d(e, { Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e, t = 2) => systemLocale.getRealFormat(u, e, t),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    r = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
            },
            362: (u, e, t) => {
                'use strict';
                var n = t(363),
                    r = t.n(n);
                const a = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var i = t(70);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function s(u = i.O.client.getSize('rem')) {
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
                                r = (function (u, e) {
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
                        })(e, t, o),
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
                })(l || (l = {}));
                const c = s(),
                    E = (0, n.createContext)(c),
                    _ = ['children'];
                (0, n.memo)((u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(u);
                            for (n = 0; n < a.length; n++) ((t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                            return r;
                        })(u, _);
                    const r = (0, n.useContext)(E),
                        i = r.extraLarge,
                        o = r.large,
                        l = r.medium,
                        s = r.small,
                        c = r.extraSmall,
                        d = r.extraLargeWidth,
                        A = r.largeWidth,
                        F = r.mediumWidth,
                        D = r.smallWidth,
                        m = r.extraSmallWidth,
                        C = r.extraLargeHeight,
                        B = r.largeHeight,
                        g = r.mediumHeight,
                        p = r.smallHeight,
                        h = r.extraSmallHeight,
                        b = { extraLarge: C, large: B, medium: g, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return e;
                        if (t.large && o) return e;
                        if (t.medium && l) return e;
                        if (t.small && s) return e;
                        if (t.extraSmall && c) return e;
                    } else {
                        if (t.extraLargeWidth && d) return a(e, t, b);
                        if (t.largeWidth && A) return a(e, t, b);
                        if (t.mediumWidth && F) return a(e, t, b);
                        if (t.smallWidth && D) return a(e, t, b);
                        if (t.extraSmallWidth && m) return a(e, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return e;
                            if (t.largeHeight && B) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && p) return e;
                            if (t.extraSmallHeight && h) return e;
                        }
                    }
                    return null;
                });
                const d = ({ children: u }) => {
                    const e = (0, n.useState)(s),
                        t = e[0],
                        a = e[1],
                        o = (0, n.useState)(!1),
                        l = o[0],
                        c = o[1];
                    return (
                        (0, n.useLayoutEffect)(() => {
                            function u() {
                                a((u) => {
                                    const e = i.O.client.getSize('rem');
                                    return u.width === e.width && u.height === e.height ? u : s(e);
                                });
                            }
                            return (
                                u(),
                                c(!0),
                                i.O.client.events.on('clientResized', u),
                                i.O.client.events.on('self.onScaleUpdated', u),
                                () => {
                                    (i.O.client.events.off('clientResized', u),
                                        i.O.client.events.off('self.onScaleUpdated', u));
                                }
                            );
                        }, []),
                        r().createElement(E.Provider, { value: t }, l && u)
                    );
                };
                var A = t(483),
                    F = t.n(A),
                    D = t(926),
                    m = t.n(D);
                let C, B, g;
                (!(function (u) {
                    ((u[(u.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = o.small.width)] = 'Small'),
                        (u[(u.Medium = o.medium.width)] = 'Medium'),
                        (u[(u.Large = o.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                })(C || (C = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = o.small.width)] = 'Small'),
                            (u[(u.Medium = o.medium.width)] = 'Medium'),
                            (u[(u.Large = o.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                    })(B || (B = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = o.small.height)] = 'Small'),
                            (u[(u.Medium = o.medium.height)] = 'Medium'),
                            (u[(u.Large = o.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge'));
                    })(g || (g = {})));
                const p = () => {
                        const u = (0, n.useContext)(E),
                            e = u.width,
                            t = u.height,
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return C.ExtraLarge;
                                    case u.large:
                                        return C.Large;
                                    case u.medium:
                                        return C.Medium;
                                    case u.small:
                                        return C.Small;
                                    case u.extraSmall:
                                        return C.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), C.ExtraSmall);
                                }
                            })(u),
                            a = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return B.ExtraLarge;
                                    case u.largeWidth:
                                        return B.Large;
                                    case u.mediumWidth:
                                        return B.Medium;
                                    case u.smallWidth:
                                        return B.Small;
                                    case u.extraSmallWidth:
                                        return B.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), B.ExtraSmall);
                                }
                            })(u),
                            i = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return g.ExtraLarge;
                                    case u.largeHeight:
                                        return g.Large;
                                    case u.mediumHeight:
                                        return g.Medium;
                                    case u.smallHeight:
                                        return g.Small;
                                    case u.extraSmallHeight:
                                        return g.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), g.ExtraSmall);
                                }
                            })(u);
                        return { mediaSize: r, mediaWidth: a, mediaHeight: i, remScreenWidth: e, remScreenHeight: t };
                    },
                    h = ['children', 'className'];
                function b() {
                    return (
                        (b =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        b.apply(this, arguments)
                    );
                }
                const v = {
                        [B.ExtraSmall]: '',
                        [B.Small]: m().SMALL_WIDTH,
                        [B.Medium]: `${m().SMALL_WIDTH} ${m().MEDIUM_WIDTH}`,
                        [B.Large]: `${m().SMALL_WIDTH} ${m().MEDIUM_WIDTH} ${m().LARGE_WIDTH}`,
                        [B.ExtraLarge]: `${m().SMALL_WIDTH} ${m().MEDIUM_WIDTH} ${m().LARGE_WIDTH} ${m().EXTRA_LARGE_WIDTH}`,
                    },
                    f = {
                        [g.ExtraSmall]: '',
                        [g.Small]: m().SMALL_HEIGHT,
                        [g.Medium]: `${m().SMALL_HEIGHT} ${m().MEDIUM_HEIGHT}`,
                        [g.Large]: `${m().SMALL_HEIGHT} ${m().MEDIUM_HEIGHT} ${m().LARGE_HEIGHT}`,
                        [g.ExtraLarge]: `${m().SMALL_HEIGHT} ${m().MEDIUM_HEIGHT} ${m().LARGE_HEIGHT} ${m().EXTRA_LARGE_HEIGHT}`,
                    },
                    y = {
                        [C.ExtraSmall]: '',
                        [C.Small]: m().SMALL,
                        [C.Medium]: `${m().SMALL} ${m().MEDIUM}`,
                        [C.Large]: `${m().SMALL} ${m().MEDIUM} ${m().LARGE}`,
                        [C.ExtraLarge]: `${m().SMALL} ${m().MEDIUM} ${m().LARGE} ${m().EXTRA_LARGE}`,
                    },
                    w = (u) => {
                        let e = u.children,
                            t = u.className,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(u);
                                for (n = 0; n < a.length; n++) ((t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                return r;
                            })(u, h);
                        const a = p(),
                            i = a.mediaWidth,
                            o = a.mediaHeight,
                            l = a.mediaSize;
                        return r().createElement('div', b({ className: F()(t, v[i], f[o], y[l]) }, n), e);
                    },
                    x = ['children'];
                const k = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(u);
                            for (n = 0; n < a.length; n++) ((t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                            return r;
                        })(u, x);
                    return r().createElement(d, null, r().createElement(w, t, e));
                };
                var T = t(533),
                    L = t.n(T);
                const O = {
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
                    S = [
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
                function N() {
                    return (
                        (N =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        N.apply(this, arguments)
                    );
                }
                const I = (u) => {
                    let e = u.caption,
                        t = u.onClick,
                        a = u.goto,
                        o = u.classNames,
                        l = u.onMouseEnter,
                        s = u.onMouseLeave,
                        c = u.onMouseDown,
                        E = u.onMouseUp,
                        _ = u.side,
                        d = void 0 === _ ? 'left' : _,
                        A = u.type,
                        D = void 0 === A ? 'back' : A,
                        m = u.soundHover,
                        C = void 0 === m ? 'highlight' : m,
                        B = u.soundClick,
                        g = void 0 === B ? 'play' : B,
                        p = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(u);
                            for (n = 0; n < a.length; n++) ((t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                            return r;
                        })(u, S);
                    const h = (0, n.useCallback)(
                            (u) => {
                                (null == l || l(u), i.O.sound.play.sound(C));
                            },
                            [l, C],
                        ),
                        b = (0, n.useCallback)(
                            (u) => {
                                null == s || s(u);
                            },
                            [s],
                        ),
                        v = (0, n.useCallback)(
                            (u) => {
                                (null == c || c(u), i.O.sound.play.sound(g));
                            },
                            [c, g],
                        ),
                        f = (0, n.useCallback)(
                            (u) => {
                                null == E || E(u);
                            },
                            [E],
                        );
                    return r().createElement(
                        'div',
                        N(
                            {
                                className: F()(O.base, O[`base__${D}`], O[`base__${d}`], null == o ? void 0 : o.base),
                                onMouseEnter: h,
                                onMouseLeave: b,
                                onMouseDown: v,
                                onMouseUp: f,
                                onClick: t,
                            },
                            p,
                        ),
                        'info' !== D && r().createElement('div', { className: O.shine }),
                        r().createElement(
                            'div',
                            { className: F()(O.icon, O[`icon__${D}`], O[`icon__${d}`], null == o ? void 0 : o.icon) },
                            r().createElement('div', { className: F()(O.glow, null == o ? void 0 : o.glow) }),
                        ),
                        r().createElement(
                            'div',
                            { className: F()(O.caption, O[`caption__${D}`], null == o ? void 0 : o.caption) },
                            e,
                        ),
                        a && r().createElement('div', { className: F()(O.goto, null == o ? void 0 : o.goto) }, a),
                    );
                };
                var P = t(521),
                    M = t(916);
                const W = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function H(u = P.n.NONE, e = W, t = !1, r = !1) {
                    (0, n.useEffect)(() => {
                        if (u !== P.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (!r && i.O.view.isEventHandled()) return;
                                (i.O.view.setEventHandled(), e(n), t && n.stopPropagation());
                            }
                        }
                    }, [e, u, t, r]);
                }
                var j = t(515);
                let V, G, $;
                function U() {}
                (!(function (u) {
                    ((u.small = 'small'), (u.big = 'big'), (u.large = 'large'), (u.extraLarge = 'extraLarge'));
                })(V || (V = {})),
                    (function (u) {
                        ((u.credits = 'credits'),
                            (u.gold = 'gold'),
                            (u.crystal = 'crystal'),
                            (u.xp = 'xp'),
                            (u.freeXP = 'freeXP'),
                            (u.eliteXP = 'eliteXP'),
                            (u.equipCoin = 'equipCoin'));
                    })(G || (G = {})),
                    (function (u) {
                        ((u.Red = 'RedActionBG'), (u.Blue = 'BlueActionBG'));
                    })($ || ($ = {})));
                function z() {
                    return !1;
                }
                console.log;
                var q = t(174);
                function X(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return K(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return K(u, e);
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
                function K(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = new Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const Y = (u) => (0 === u ? window : window.subViews.get(u));
                const Z = () => (u, e) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: o, children: l, mocks: s }) {
                                const c = (0, n.useRef)([]),
                                    E = (t, n, r) => {
                                        var a;
                                        const o = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = Y,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? r.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = r.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const o = (u) => {
                                                    const r = t(e),
                                                        a = n.split('.').reduce((u, e) => u[e], r);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? a
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const l = 'string' == typeof a ? `${n}.${a}` : n,
                                                            s = i.O.view.addModelObserver(l, e, !0);
                                                        return (r.set(s, t), u && t(o(a)), s);
                                                    },
                                                    readByPath: o,
                                                    createCallback: (u, e) => {
                                                        const t = o(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = o(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = X(r.keys()); !(u = t()).done; ) a(u.value, e);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            l =
                                                'real' === t
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            s = (u) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(u)) : l.readByPath(u),
                                            E = (u) => c.current.push(u),
                                            _ = u({
                                                mode: t,
                                                readByPath: s,
                                                externalModel: l,
                                                observableModel: {
                                                    dict: (u) => {
                                                        const e = s(u),
                                                            n = q.LO.box(e, { equals: z });
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, q.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    array: (u, e) => {
                                                        const n = null != e ? e : s(u),
                                                            r = q.LO.box(n, { equals: z });
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, q.aD)((u) => r.set(u)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const n = null != e ? e : s(u),
                                                            r = q.LO.box(n, { equals: z });
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, q.aD)((u) => r.set(u)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const n = s(e);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (u, e) => ((u[e] = q.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    l.subscribe(
                                                                        (0, q.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                r[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = u,
                                                                a = Object.entries(r),
                                                                i = a.reduce(
                                                                    (u, [e, t]) => ((u[t] = q.LO.box(n[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    l.subscribe(
                                                                        (0, q.aD)((u) => {
                                                                            a.forEach(([e, t]) => {
                                                                                i[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            d = { mode: t, model: _, externalModel: l, cleanup: E };
                                        return {
                                            model: _,
                                            controls: 'mocks' === t && r ? r.controls(d) : e(d),
                                            externalModel: l,
                                            mode: t,
                                        };
                                    },
                                    _ = (0, n.useRef)(!1),
                                    d = (0, n.useState)(a),
                                    A = d[0],
                                    F = d[1],
                                    D = (0, n.useState)(() => E(a, o, s)),
                                    m = D[0],
                                    C = D[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        _.current ? C(E(A, o, s)) : (_.current = !0);
                                    }, [s, A, o]),
                                    (0, n.useEffect)(() => {
                                        F(a);
                                    }, [a]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (m.externalModel.dispose(), c.current.forEach((u) => u()));
                                        },
                                        [m],
                                    ),
                                    r().createElement(t.Provider, { value: m }, l)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    },
                    Q = Z()(
                        ({ observableModel: u }) =>
                            Object.assign(
                                {},
                                u.primitives(['gold', 'credits', 'crystals', 'freeExp', 'equipCoin', 'isWGMAvailable']),
                                {
                                    goldTooltip: u.object('goldTooltip'),
                                    creditsTooltip: u.object('creditsTooltip'),
                                    crystalsTooltip: u.object('crystalsTooltip'),
                                    freeExpTooltip: u.object('freeExpTooltip'),
                                    equipCoinTooltip: u.object('equipCoinTooltip'),
                                },
                            ),
                        U,
                    ),
                    J = Q[0],
                    uu = Q[1];
                const eu = ({ value: u, format: e = 'integral' }) => {
                        const t = (function (u) {
                                return 'gold' === u ? M.B3.GOLD : M.B3.INTEGRAL;
                            })(e),
                            n = M.Z5.getNumberFormat(u, t);
                        return void 0 !== u && void 0 !== n ? n : null;
                    },
                    tu = [
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
                function nu(u) {
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
                const ru = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: M.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    au = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            r = u.args,
                            a = u.onMouseEnter,
                            i = u.onMouseLeave,
                            o = u.onMouseDown,
                            l = u.onClick,
                            s = u.ignoreShowDelay,
                            c = void 0 !== s && s,
                            E = u.ignoreMouseClick,
                            _ = void 0 !== E && E,
                            d = u.decoratorId,
                            A = void 0 === d ? 0 : d,
                            F = u.isEnabled,
                            D = void 0 === F || F,
                            m = u.targetId,
                            C = void 0 === m ? 0 : m,
                            B = u.onShow,
                            g = u.onHide,
                            p = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(u);
                                for (n = 0; n < a.length; n++) ((t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                return r;
                            })(u, tu);
                        const h = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, n.useMemo)(
                                () =>
                                    C ||
                                    ((u = 1) => {
                                        const e = new Error().stack;
                                        let t,
                                            n = R.invalid('resId'),
                                            r = '';
                                        var a;
                                        return (
                                            e &&
                                                ((r =
                                                    (null == (a = e.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) ||
                                                    ''),
                                                (t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { callerUrl: r, caller: t, stack: e, resId: n }
                                        );
                                    })().resId,
                                [C],
                            ),
                            v = (0, n.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (ru(t, A, { isMouseEvent: !0, on: !0, arguments: nu(r) }, b),
                                    B && B(),
                                    (h.current.isVisible = !0));
                            }, [t, A, r, b, B]),
                            f = (0, n.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const u = h.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (h.current.timeoutId = 0)),
                                        ru(t, A, { on: !1 }, b),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, A, b, g]),
                            y = (0, n.useCallback)((u) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(h.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const u = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', y, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', y, { capture: !0 }),
                                        u && window.clearTimeout(u));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === D && f();
                            }, [D, f]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ));
                        return D
                            ? (0, n.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((w = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      (clearTimeout(h.current.timeoutId),
                                                      (h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      a && a(u),
                                                      w && w(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              (f(), null == i || i(e), null == u || u(e));
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              (!1 === _ && f(), null == l || l(e), null == u || u(e));
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              (!1 === _ && f(), null == o || o(e), null == u || u(e));
                                          })(e.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : e;
                        var w;
                    };
                let iu;
                !(function (u) {
                    ((u.backport = 'backport'), (u.normal = 'normal'), (u.absent = 'absent'));
                })(iu || (iu = {}));
                const ou = 'Waiting_waiting_48',
                    lu = 'Waiting_alertIcon_9d',
                    su = 'Waiting_frame1_c0',
                    cu = 'Waiting_frame2_bb',
                    Eu = 'Waiting_frame3_4c',
                    _u = (0, n.memo)(() =>
                        r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(
                                'span',
                                { className: ou },
                                r().createElement('span', { className: su }, '- '),
                                r().createElement('span', { className: cu }, '- '),
                                r().createElement('span', { className: Eu }, '- '),
                            ),
                            r().createElement('span', { className: lu }),
                        ),
                    ),
                    du = {
                        base: 'CurrencyItem_base_a5',
                        base__credits: 'CurrencyItem_base__credits_87',
                        base__gold: 'CurrencyItem_base__gold_83',
                        icon: 'CurrencyItem_icon_e3',
                        base__crystal: 'CurrencyItem_base__crystal_0b',
                        base__freeXP: 'CurrencyItem_base__freeXP_a0',
                        base__equipCoin: 'CurrencyItem_base__equipCoin_49',
                    };
                function Au() {
                    return (
                        (Au =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Au.apply(this, arguments)
                    );
                }
                const Fu = ({ value: u, currencyType: e, isWGMAvailable: t, tooltip: n, tooltipRootId: a }) => {
                        const i = e === G.gold ? 'gold' : 'integral',
                            o =
                                ((l = n.type),
                                (s = { currency: e }),
                                {
                                    isEnabled: l !== iu.absent,
                                    args: s,
                                    contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                    decoratorId:
                                        l === iu.normal
                                            ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                            : void 0,
                                    ignoreShowDelay: l === iu.backport,
                                    ignoreMouseClick: !0,
                                });
                        var l, s;
                        return r().createElement(
                            au,
                            Au({}, o, { targetId: a }),
                            r().createElement(
                                'span',
                                { className: F()(du.base, du[`base__${e}`]) },
                                r().createElement('div', { className: du.icon }),
                                t ? r().createElement(eu, { value: u, format: i }) : r().createElement(_u, null),
                            ),
                        );
                    },
                    Du = 'MoneyBalanceApp_base_6a',
                    mu = (0, j.Pi)(({ tooltipRootId: u, className: e }) => {
                        const t = uu().model,
                            n = t.isWGMAvailable.get(),
                            a = [
                                [t.crystals.get(), t.crystalsTooltip.get(), G.crystal],
                                [t.gold.get(), t.goldTooltip.get(), G.gold],
                                [t.credits.get(), t.creditsTooltip.get(), G.credits],
                                [t.freeExp.get(), t.freeExpTooltip.get(), G.freeXP],
                                [t.equipCoin.get(), t.equipCoinTooltip.get(), G.equipCoin],
                            ];
                        return r().createElement(
                            'div',
                            { className: F()(Du, e) },
                            a
                                .filter(([u]) => -1 !== u)
                                .map(([e, t, a]) =>
                                    r().createElement(Fu, {
                                        key: a,
                                        value: e,
                                        currencyType: a,
                                        isWGMAvailable: n,
                                        tooltip: t,
                                        tooltipRootId: u,
                                    }),
                                ),
                        );
                    }),
                    Cu = r().memo(function ({
                        rootId: u = R.views.dialogs.widgets.MoneyBalance('resId'),
                        className: e,
                    }) {
                        return r().createElement(
                            J,
                            { options: { rootId: u } },
                            r().createElement(mu, { tooltipRootId: u, className: e }),
                        );
                    });
                var Bu = t(946);
                const gu = Z()(
                        ({ observableModel: u }) => {
                            const e = Object.assign(
                                    {},
                                    u.primitives([
                                        'isRestore',
                                        'hasTradeInWidget',
                                        'hasTradeInVehiclesToSelect',
                                        'hasTradeInGoldConfirmation',
                                        'hasDisclaimer',
                                        'isBuyButtonEnabled',
                                        'isRentAvailable',
                                        'title',
                                        'rentButtonLabel',
                                        'buyButtonLabel',
                                    ]),
                                    {
                                        vehicle: u.object('vehicle'),
                                        tradeInVehicleToSell: u.object('tradeInVehicleToSell'),
                                        options: u.array('options'),
                                        totals: u.object('totals'),
                                        buyButtonTooltip: u.object('buyButtonTooltip'),
                                        totalsPrice: u.array('totals.price'),
                                    },
                                ),
                                t = (0, Bu.Om)(() => -1 !== e.tradeInVehicleToSell.get().vehicleCD);
                            return Object.assign({}, e, { computes: { isTradeInVehicleSelected: t } });
                        },
                        ({ externalModel: u }) => ({
                            close: u.createCallbackNoArgs('onCloseBtnClick'),
                            buy: u.createCallbackNoArgs('onBuyBtnClick'),
                            showLicenseInfo: u.createCallbackNoArgs('onDisclaimerClick'),
                            selectRentPackage: u.createCallbackNoArgs('onSelectRentPackage'),
                            selectTradeInVehicle: u.createCallbackNoArgs('onSelectTradeInVehicleToSell'),
                            clearTradeInVehicle: u.createCallbackNoArgs('onClearTradeInVehicleToSell'),
                            toggleOption: u.createCallback((u) => ({ name: u }), 'onOptionClick'),
                        }),
                    ),
                    pu = gu[0],
                    hu = gu[1],
                    bu = {
                        base: 'Currency_base_57',
                        icon: 'Currency_icon_c5',
                        base__small: 'Currency_base__small_af',
                        base__big: 'Currency_base__big_bc',
                        base__large: 'Currency_base__large_65',
                        base__extraLarge: 'Currency_base__extraLarge_4d',
                        'icon__credits-small': 'Currency_icon__credits-small_9b',
                        'icon__credits-big': 'Currency_icon__credits-big_96',
                        'icon__credits-large': 'Currency_icon__credits-large_ac',
                        'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                        'icon__gold-small': 'Currency_icon__gold-small_86',
                        'icon__gold-big': 'Currency_icon__gold-big_15',
                        'icon__gold-large': 'Currency_icon__gold-large_36',
                        'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                        'icon__crystal-small': 'Currency_icon__crystal-small_27',
                        'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                        'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                        'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                        'icon__xp-small': 'Currency_icon__xp-small_a7',
                        'icon__xp-big': 'Currency_icon__xp-big_97',
                        'icon__xp-large': 'Currency_icon__xp-large_6b',
                        'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                        'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                        'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                        'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                        'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                        'icon__eliteXP-small': 'Currency_icon__eliteXP-small_45',
                        'icon__eliteXP-big': 'Currency_icon__eliteXP-big_c0',
                        'icon__eliteXP-large': 'Currency_icon__eliteXP-large_1b',
                        'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_9b',
                        'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                        'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                        'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                        'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                        value: 'Currency_value_e1',
                        value__freeXP: 'Currency_value__freeXP_cb',
                        value__credits: 'Currency_value__credits_76',
                        value__gold: 'Currency_value__gold_dd',
                        value__xp: 'Currency_value__xp_b0',
                        value__crystal: 'Currency_value__crystal_19',
                        value__equipCoin: 'Currency_value__equipCoin_d0',
                        value__eliteXP: 'Currency_value__eliteXP_62',
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    },
                    vu = (0, n.memo)(
                        ({
                            isDiscount: u,
                            isInteractiveDiscount: e,
                            size: t,
                            type: n,
                            value: a,
                            discountValue: i,
                            showPlus: o,
                            isEnough: l = !0,
                            stockBackgroundName: s = $.Red,
                            className: c,
                            classNames: E,
                        }) =>
                            r().createElement(
                                'span',
                                { className: F()(bu.base, bu[`base__${t}`], c) },
                                r().createElement(
                                    'span',
                                    {
                                        className: F()(
                                            bu.value,
                                            bu[`value__${n}`],
                                            !l && bu.value__notEnough,
                                            null == E ? void 0 : E.value,
                                        ),
                                    },
                                    o && a > 0 && '+',
                                    r().createElement(eu, { value: a, format: n === G.gold ? 'gold' : 'integral' }),
                                ),
                                r().createElement('span', {
                                    className: F()(bu.icon, bu[`icon__${n}-${t}`], null == E ? void 0 : E.icon),
                                }),
                                u &&
                                    r().createElement(
                                        'span',
                                        {
                                            className: F()(
                                                bu.stock,
                                                i && bu.stock__indent,
                                                e && bu.stock__interactive,
                                                null == E ? void 0 : E.stock,
                                            ),
                                        },
                                        r().createElement('span', {
                                            className: bu.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${s})` },
                                        }),
                                        Boolean(i) && i,
                                    ),
                            ),
                    ),
                    fu = ['children'];
                function yu() {
                    return (
                        (yu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        yu.apply(this, arguments)
                    );
                }
                const wu = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(u);
                            for (n = 0; n < a.length; n++) ((t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                            return r;
                        })(u, fu);
                    return r().createElement(
                        au,
                        yu(
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
                };
                function xu(u, e) {
                    var t;
                    if (!(e >= u.length)) return Array.isArray(u) ? u[e] : null == (t = u[e]) ? void 0 : t.value;
                }
                const ku = xu;
                function Tu(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, n) => e(null == u ? void 0 : u.value, t, n));
                }
                const Lu = 'CompoundPrice_base_96',
                    Ou = 'CompoundPrice_base__withDiscount_9e',
                    Su = 'CompoundPrice_freePrice_83',
                    Nu = 'CompoundPrice_currencyWrapper_08',
                    Iu = 'CompoundPrice_currency_68',
                    Pu = 'CompoundPrice_currencyHitArea_45',
                    Mu = 'CompoundPrice_currencyHitArea__withDiscount_a5';
                function Ru() {
                    return (
                        (Ru =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Ru.apply(this, arguments)
                    );
                }
                const Wu = ({ prices: u, tooltipKey: e, size: t, className: n, classNames: a }) => {
                    const i = (function (u, e) {
                        if (Array.isArray(u)) return u.some(e);
                        for (let t = 0; t < u.length; t++) if (e(ku(u, t), t, u)) return !0;
                        return !1;
                    })(u, (u) => u.isDiscount);
                    return r().createElement(
                        'div',
                        { className: F()(Lu, i && Ou, n) },
                        0 === u.length
                            ? r().createElement('div', { className: Su }, R.strings.hangar.buyVehicleWindow.freePrice())
                            : Tu(u, (u, n) =>
                                  r().createElement(
                                      'div',
                                      { key: n, className: F()(Nu, null == a ? void 0 : a.currency) },
                                      r().createElement(vu, Ru({}, u, { size: t || u.size, className: Iu })),
                                      r().createElement(
                                          wu,
                                          {
                                              args: { tooltipId: 'actionPrice', tooltipKey: e, currency: u.type },
                                              isEnabled: u.isDiscount,
                                          },
                                          r().createElement('div', { className: F()(Pu, u.isDiscount && Mu) }),
                                      ),
                                  ),
                              ),
                    );
                };
                let Hu;
                function ju(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                !(function (u) {
                    ((u[(u.LEFT = 0)] = 'LEFT'),
                        (u[(u.WHEEL = 1)] = 'WHEEL'),
                        (u[(u.RIGHT = 2)] = 'RIGHT'),
                        (u[(u.FOURTH = 3)] = 'FOURTH'),
                        (u[(u.FIFTH = 4)] = 'FIFTH'));
                })(Hu || (Hu = {}));
                const Vu = {
                        playHighlight() {
                            ju('highlight');
                        },
                        playClick() {
                            ju('play');
                        },
                        playYes() {
                            ju('yes1');
                        },
                    },
                    Gu = {
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
                let $u, Uu;
                (!(function (u) {
                    ((u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost'));
                })($u || ($u = {})),
                    (function (u) {
                        ((u.extraSmall = 'extraSmall'),
                            (u.small = 'small'),
                            (u.medium = 'medium'),
                            (u.large = 'large'));
                    })(Uu || (Uu = {})));
                const zu = ({
                        children: u,
                        size: e,
                        disabled: t,
                        mixClass: a,
                        onMouseEnter: i,
                        onMouseMove: o,
                        onMouseDown: l,
                        onMouseUp: s,
                        onMouseLeave: c,
                        onClick: E,
                        isFocused: _ = !1,
                        type: d = $u.primary,
                        soundHover: A = 'highlight',
                        soundClick: D = 'play',
                    }) => {
                        const m = (0, n.useRef)(null),
                            C = (0, n.useState)(_),
                            B = C[0],
                            g = C[1],
                            p = (0, n.useState)(!1),
                            h = p[0],
                            b = p[1];
                        return (
                            (0, n.useEffect)(() => {
                                function u(u) {
                                    B && null !== m.current && !m.current.contains(u.target) && g(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', u),
                                    () => {
                                        document.removeEventListener('mousedown', u);
                                    }
                                );
                            }, [B]),
                            (0, n.useEffect)(() => {
                                g(_);
                            }, [_]),
                            r().createElement(
                                'div',
                                {
                                    ref: m,
                                    className: F()(
                                        Gu.base,
                                        Gu[`base__${d}`],
                                        t && Gu.base__disabled,
                                        e && Gu[`base__${e}`],
                                        B && Gu.base__focus,
                                        h && Gu.base__highlightActive,
                                        a,
                                    ),
                                    onMouseEnter: function (u) {
                                        t || (null !== A && ju(A), i && i(u));
                                    },
                                    onMouseMove: function (u) {
                                        o && o(u);
                                    },
                                    onMouseUp: function (u) {
                                        t || (s && s(u), b(!1));
                                    },
                                    onMouseDown: function (u) {
                                        if (t) return;
                                        const e = u.button === Hu.LEFT;
                                        (null !== D && e && ju(D),
                                            l && l(u),
                                            _ && (t || (m.current && (m.current.focus(), g(!0)))),
                                            e && b(!0));
                                    },
                                    onMouseLeave: function (u) {
                                        t || (c && c(u), b(!1));
                                    },
                                    onClick: function (u) {
                                        t || (E && E(u));
                                    },
                                },
                                d !== $u.ghost &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: Gu.back }),
                                        r().createElement('span', { className: Gu.texture }),
                                    ),
                                r().createElement(
                                    'span',
                                    { className: F()(Gu.state, Gu.state__default) },
                                    r().createElement('span', { className: Gu.stateDisabled }),
                                    r().createElement('span', { className: Gu.stateHighlightHover }),
                                    r().createElement('span', { className: Gu.stateHighlightActive }),
                                ),
                                r().createElement(
                                    'span',
                                    { className: Gu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    u,
                                ),
                            )
                        );
                    },
                    qu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Xu() {
                    return (
                        (Xu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Xu.apply(this, arguments)
                    );
                }
                const Ku = R.views.common.tooltip_window.simple_tooltip_content,
                    Yu = (u) => {
                        let e = u.children,
                            t = u.body,
                            a = u.header,
                            i = u.note,
                            o = u.alert,
                            l = u.args,
                            s = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(u);
                                for (n = 0; n < a.length; n++) ((t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                return r;
                            })(u, qu);
                        const c = (0, n.useMemo)(() => {
                            const u = Object.assign({}, l, { body: t, header: a, note: i, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, a, i, l]);
                        return r().createElement(
                            au,
                            Xu(
                                {
                                    contentId:
                                        ((E = null == l ? void 0 : l.hasHtmlContent),
                                        E ? Ku.SimpleTooltipHtmlContent('resId') : Ku.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                s,
                            ),
                            e,
                        );
                        var E;
                    },
                    Zu = (u) => {
                        (0, n.useEffect)(u, []);
                    },
                    Qu = {
                        base: 'PopoverDecorator_base_ed',
                        decorator: 'PopoverDecorator_decorator_d3',
                        arrow: 'PopoverDecorator_arrow_8a',
                        arrow__bottom: 'PopoverDecorator_arrow__bottom_c3',
                        arrow__top: 'PopoverDecorator_arrow__top_6e',
                        arrow__left: 'PopoverDecorator_arrow__left_7a',
                        arrow__right: 'PopoverDecorator_arrow__right_b6',
                        closeBtn: 'PopoverDecorator_closeBtn_32',
                        content: 'PopoverDecorator_content_f0',
                    };
                function Ju() {
                    const u = (0, n.useRef)(0);
                    var e;
                    return (
                        (e = () => {
                            window.cancelAnimationFrame(u.current);
                        }),
                        (0, n.useEffect)(() => e, []),
                        (0, n.useMemo)(
                            () => ({
                                run: (e) => {
                                    (window.cancelAnimationFrame(u.current),
                                        (u.current = window.requestAnimationFrame(() => {
                                            u.current = window.requestAnimationFrame(() => {
                                                ((u.current = 0), e());
                                            });
                                        })));
                                },
                                clear: () => {
                                    (window.cancelAnimationFrame(u.current), (u.current = 0));
                                },
                                get isRunning() {
                                    return 0 !== u.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                var ue;
                !(function (u) {
                    ((u[(u.Left = 0)] = 'Left'),
                        (u[(u.Right = 1)] = 'Right'),
                        (u[(u.Top = 2)] = 'Top'),
                        (u[(u.Bottom = 3)] = 'Bottom'));
                })(ue || (ue = {}));
                const ee = ['__left', '__right', '__top', '__bottom'],
                    te =
                        ((0, n.forwardRef)(
                            (
                                {
                                    children: u,
                                    disableAutoSizeUpdate: e,
                                    onOutsideClick: t,
                                    className: a,
                                    customStyles: o = {},
                                },
                                l,
                            ) => {
                                const s = (0, n.useRef)(null),
                                    c = (0, n.useRef)(null),
                                    E = (0, n.useRef)(null),
                                    _ = (0, n.useState)(window.decorator && window.decorator.directionType),
                                    d = _[0],
                                    A = _[1],
                                    D = (0, n.useCallback)(() => {
                                        (Vu.playClick(), i.O.view.sendEvent.close());
                                    }, []),
                                    m = (0, n.useCallback)(() => {
                                        Vu.playHighlight();
                                    }, []),
                                    C = F()(Qu.arrow, Qu[`arrow${ee[d]}`]);
                                Zu(
                                    () => (
                                        i.O.client.events.mouse.enableOutside(),
                                        i.O.client.events.mouse.down(([, u]) => {
                                            'outside' === u && (t ? t() : i.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const B = (0, n.useCallback)(
                                        (u) => {
                                            let e = u.target;
                                            do {
                                                if (e === s.current || e === E.current) return;
                                                e = e.parentNode;
                                            } while (e);
                                            const n = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const u = i.O.client.getMouseGlobalPosition(),
                                                    e = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    t =
                                                        u.x < n.boundX ||
                                                        u.x > n.boundX + n.boundWidth ||
                                                        u.y > n.boundY + n.boundHeight ||
                                                        u.y < n.boundY;
                                                if (e && !t) return;
                                            }
                                            t ? t() : i.O.view.sendEvent.close('popover');
                                        },
                                        [s, E, t],
                                    ),
                                    g = (0, n.useCallback)(() => {
                                        A(window.decorator.directionType);
                                    }, []),
                                    p = Ju(),
                                    h = (0, n.useCallback)(() => {
                                        const u = c.current;
                                        if (u)
                                            return (
                                                i.O.view.freezeTextureBeforeResize(),
                                                p.run(() => {
                                                    const e = u.scrollWidth,
                                                        t = u.scrollHeight;
                                                    (i.O.view.resize(e, t), g());
                                                })
                                            );
                                    }, [p, g]);
                                return (
                                    (0, n.useImperativeHandle)(
                                        l,
                                        () => ({ updateSize: h, updateDirection: g, elementRef: c }),
                                        [h, g],
                                    ),
                                    Zu(() => {
                                        i.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, n.useEffect)(() => {
                                        document.addEventListener('mousedown', B, { capture: !0 });
                                        const u = ((u) => {
                                            let e = !1;
                                            return {
                                                promise: new Promise((t, n) => {
                                                    u.then((u) => !e && t(u)).catch((u) => !e && n(u));
                                                }),
                                                cancel() {
                                                    e = !0;
                                                },
                                            };
                                        })((0, M.Eu)());
                                        return (
                                            !e && u.promise.then(() => h()),
                                            () => {
                                                (u.cancel(), document.removeEventListener('mousedown', B));
                                            }
                                        );
                                    }, [h, B, e]),
                                    r().createElement(
                                        'div',
                                        { className: F()(Qu.base, a), ref: c },
                                        r().createElement(
                                            'div',
                                            { className: Qu.decorator },
                                            r().createElement(
                                                'div',
                                                { className: Qu.content, ref: s },
                                                u,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    r().createElement(
                                                        Yu,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        r().createElement('div', {
                                                            className: Qu.closeBtn,
                                                            onClick: D,
                                                            onMouseEnter: m,
                                                            ref: E,
                                                        }),
                                                    ),
                                            ),
                                            r().createElement('div', { className: C, style: o.arrow }),
                                        ),
                                    )
                                );
                            },
                        ),
                        [
                            'contentId',
                            'decoratorId',
                            'direction',
                            'targetId',
                            'args',
                            'onClick',
                            'children',
                            'isEnabled',
                        ]);
                function ne() {
                    return (
                        (ne =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        ne.apply(this, arguments)
                    );
                }
                const re = (u) => {
                        let e = u.contentId,
                            t = u.decoratorId,
                            a = u.direction,
                            i = void 0 === a ? ue.Top : a,
                            o = u.targetId,
                            l = u.args,
                            s = u.onClick,
                            c = u.children,
                            E = u.isEnabled,
                            _ = void 0 === E || E,
                            d = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(u);
                                for (n = 0; n < a.length; n++) ((t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                return r;
                            })(u, te);
                        const A = (0, n.useRef)(null),
                            F = (0, n.useCallback)(() => {
                                if ((0, M.wU)()) return (0, M.SW)();
                                A.current && (0, M.P3)(e, i, A.current, t, o, l);
                            }, [e, i, l, t, o]);
                        return r().createElement(
                            'div',
                            ne(
                                {
                                    ref: A,
                                    onMouseDown:
                                        ((D = c.props.onClick),
                                        (u) => {
                                            _ && (F(), s && s(u), D && D(u));
                                        }),
                                },
                                d,
                            ),
                            c,
                        );
                        var D;
                    },
                    ae = ['children'];
                function ie() {
                    return (
                        (ie =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        ie.apply(this, arguments)
                    );
                }
                const oe = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(u);
                            for (n = 0; n < a.length; n++) ((t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                            return r;
                        })(u, ae);
                    return r().createElement(
                        re,
                        ie(
                            {
                                decoratorId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverWindow('resId'),
                                contentId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverContent('resId'),
                            },
                            t,
                        ),
                        e,
                    );
                };
                function le() {
                    return (
                        (le =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        le.apply(this, arguments)
                    );
                }
                const se = ({ children: u, tooltipArgs: e, className: t }) => {
                        if (!e) return u;
                        const n = r().createElement('div', { className: t }, u);
                        if (e.header || e.body) return r().createElement(Yu, e, n);
                        const a = e.contentId;
                        return a ? r().createElement(au, le({}, e, { contentId: a }), n) : r().createElement(wu, e, n);
                    },
                    ce = (u, e) => u.split(',').includes(e),
                    Ee = (u) => ({
                        vehicleName: u.name,
                        isElite: u.isPremium,
                        vehicleLvl: u.tier,
                        vehicleNation: u.nation,
                        vehicleShortName: u.name,
                        vehicleType: u.type,
                    }),
                    _e = (u) =>
                        u.tooltipId
                            ? { args: { tooltipId: u.tooltipId } }
                            : {
                                  header: u.header || void 0,
                                  body: u.body || void 0,
                                  isEnabled: Boolean(u.header || u.body),
                              },
                    de = 'BuyButton_base_cd',
                    Ae = (0, j.Pi)(() => {
                        const u = hu(),
                            e = u.model,
                            t = u.controls,
                            n = e.vehicle.get(),
                            a = e.buyButtonTooltip.get(),
                            i = e.isBuyButtonEnabled.get(),
                            o = e.computes.isTradeInVehicleSelected(),
                            l = i && e.hasTradeInGoldConfirmation.get() && o;
                        return r().createElement(
                            se,
                            { tooltipArgs: _e(a) },
                            r().createElement(
                                'div',
                                null,
                                r().createElement(
                                    oe,
                                    { args: { alias: 'VehicleSellConfirmationPopover' }, isEnabled: l },
                                    r().createElement(
                                        zu,
                                        {
                                            onClick: l ? void 0 : t.buy,
                                            type: ce(n.tags, 'premium') ? $u.main : $u.primary,
                                            size: Uu.medium,
                                            mixClass: de,
                                            disabled: !i,
                                        },
                                        e.buyButtonLabel.get(),
                                    ),
                                ),
                            ),
                        );
                    });
                var Fe = t(45);
                const De = {
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
                var me = t(281);
                let Ce;
                function Be(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                function ge(u) {
                    return u.replace(/-/g, '_');
                }
                function pe(u) {
                    return u[0].toUpperCase() + u.slice(1);
                }
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(Ce || (Ce = {}));
                const he = (u) => u.replace(/&nbsp;/g, ' '),
                    be = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    ve = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    fe = (u, e, t = Ce.left) => u.split(e).reduce(t === Ce.left ? be : ve, []),
                    ye = (() => {
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
                    we = ['zh_cn', 'zh_sg', 'zh_tw'],
                    xe = (u, e = Ce.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (we.includes(t)) return ye(u);
                        if ('ja' === t) {
                            return (0, me.D4)()
                                .parse(u)
                                .map((u) => he(u));
                        }
                        return ((u, e = Ce.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = he(u);
                            return (fe(r, /( )/, e).forEach((u) => (t = t.concat(fe(u, n, Ce.left)))), t);
                        })(u, e);
                    };
                let ke, Te, Le;
                (!(function (u) {
                    ((u[(u.Word = 0)] = 'Word'),
                        (u[(u.LineBreak = 1)] = 'LineBreak'),
                        (u[(u.NewLine = 2)] = 'NewLine'),
                        (u[(u.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (u[(u.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (u[(u.Binding = 5)] = 'Binding'));
                })(ke || (ke = {})),
                    (function (u) {
                        ((u.FlexStart = 'flex-start'), (u.Center = 'center'), (u.FlexEnd = 'flex-end'));
                    })(Te || (Te = {})),
                    (function (u) {
                        ((u.NBSP = ' '), (u.ZWNBSP = '\ufeff'), (u.NEW_LINE = '\n'));
                    })(Le || (Le = {})));
                const Oe = { [Le.NBSP]: ke.NoBreakSymbol, [Le.ZWNBSP]: ke.NoBreakSymbol, [Le.NEW_LINE]: ke.LineBreak },
                    Se = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    Ne = {
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
                    Ie = 'renderers_noBreakWrapper_10',
                    Pe = 'renderers_lineBreak_b5',
                    Me = 'renderers_newLine_bd',
                    Re = 'renderers_word_f3',
                    We = (u) => ({ color: `#${u}` }),
                    He = ({ elementList: u, textBlock: e, key: t }) => {
                        const n = e.colorTag;
                        return n
                            ? Ne[n]
                                ? r().createElement(
                                      'span',
                                      { key: t, 'data-block-type': e.blockType, className: F()(Re, Ne[n]) },
                                      u,
                                  )
                                : r().createElement(
                                      'span',
                                      { key: t, 'data-block-type': e.blockType, className: Re, style: We(n) },
                                      u,
                                  )
                            : r().createElement('span', { key: t, 'data-block-type': e.blockType, className: Re }, u);
                    },
                    je = {
                        [ke.Word]: He,
                        [ke.NoBreakSymbol]: He,
                        [ke.Binding]: ({ elementList: u, textBlock: e, key: t }) =>
                            r().createElement(
                                'span',
                                { key: t, 'data-block-type': e.blockType },
                                u.map((u) => r().createElement(r().Fragment, { key: t }, u)),
                            ),
                        [ke.LineBreak]: ({ key: u }) =>
                            r().createElement('span', { key: u, 'data-block-type': ke.LineBreak, className: Pe }),
                        [ke.NewLine]: ({ elementList: u, key: e }) =>
                            r().createElement('span', { key: e, 'data-block-type': ke.NewLine, className: Me }, u),
                        [ke.NoBreakWrapper]: ({ elementList: u, key: e }) =>
                            r().createElement(
                                'span',
                                { key: e, 'data-block-type': ke.NoBreakWrapper, className: Ie },
                                u,
                            ),
                    },
                    Ve = (u, e, t) => {
                        const n = [];
                        return (
                            u.childList.forEach((r, a) => {
                                const i = `${t}_${a}`;
                                if (((u) => void 0 !== u.childList)(r)) {
                                    const u = r,
                                        e = u.blockType,
                                        t = Ve(u, je[e], i);
                                    n.push(...t);
                                } else n.push(e({ elementList: [r], textBlock: u, key: i }));
                            }),
                            n
                        );
                    },
                    Ge = (u) => {
                        const e = [];
                        return (
                            u.forEach((u, t) => {
                                e.push(
                                    ...((u, e) => {
                                        const t = [],
                                            n = u.blockType,
                                            r = je[n],
                                            a = Ve(u, r, e);
                                        return (
                                            n === ke.NoBreakWrapper
                                                ? t.push(r({ elementList: a, textBlock: u, key: `${e}` }))
                                                : t.push(...a),
                                            t
                                        );
                                    })(u, t),
                                );
                            }),
                            e
                        );
                    },
                    $e = (u, e, t, n) => {
                        let r = e.exec(u),
                            a = 0;
                        for (; r; ) (a !== r.index && t(u.slice(a, r.index)), n(r), (a = e.lastIndex), (r = e.exec(u)));
                        a !== u.length && t(u.slice(a));
                    },
                    Ue = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    ze = (u) => {
                        const e = [];
                        return (
                            $e(
                                u,
                                /\S\s+/g,
                                (u) => {
                                    var t;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? e.push(...((t = u), t.match(Ue) || []))
                                        : e.push(...u.split(''));
                                },
                                (u) => {
                                    e.push(u[0]);
                                },
                            ),
                            e
                        );
                    },
                    qe = Se
                        ? (u) => {
                              const e = [];
                              return (
                                  $e(
                                      u,
                                      /[^a-zA-Z0-9]+/g,
                                      (u) => {
                                          e.push(u);
                                      },
                                      (u) => {
                                          e.push(...ze(u[0]));
                                      },
                                  ),
                                  e
                              );
                          }
                        : (u, e) => {
                              const t = /[\s\u002d]/g;
                              let n = t.exec(u);
                              if (!n) return [u];
                              const r = [];
                              let a = 0;
                              for (; n; ) {
                                  const i = e.justifyContent === Te.FlexEnd ? n.index : t.lastIndex;
                                  (r.push(u.slice(a, i)), (a = i), (n = t.exec(u)));
                              }
                              return (a !== u.length && r.push(u.slice(a)), r);
                          },
                    Xe = (u, e = '', t) => {
                        const n = [];
                        return (
                            $e(
                                u,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (u) => {
                                    n.push({ blockType: ke.Word, colorTag: e, childList: qe(u, t) });
                                },
                                (u) => {
                                    const t = u[0],
                                        r = Oe[t.charAt(0)];
                                    r === ke.LineBreak
                                        ? n.push(
                                              ...((u) => {
                                                  const e = [
                                                      {
                                                          blockType: ke.LineBreak,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < u.length - 1; t++)
                                                      e.push({
                                                          blockType: ke.NewLine,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      });
                                                  return e;
                                              })(t),
                                          )
                                        : n.push({ blockType: r, colorTag: e, childList: [t.replace(/\ufeff+/g, '')] });
                                },
                            ),
                            n
                        );
                    },
                    Ke = (u, e, t = '', n) => {
                        const r = [],
                            a = u.replace(/(.)(、|。|ー)/g, '$1\ufeff$2');
                        return (
                            $e(
                                a,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (u) => {
                                    r.push(...Xe(u, t, n));
                                },
                                (u) => {
                                    const a = u[1],
                                        i = void 0 === e[a] ? u[0] : e[a];
                                    'string' == typeof i || 'number' == typeof i
                                        ? r.push(...Xe(String(i), t, n))
                                        : r.push({ blockType: ke.Binding, colorTag: t, childList: [i] });
                                },
                            ),
                            r
                        );
                    },
                    Ye = (u, e) => {
                        if (!u) return [e];
                        const t = [],
                            n = Object.assign({}, e, { childList: e.childList.splice(0, 1) });
                        if (u.blockType === ke.NoBreakWrapper) (u.childList.push(n), t.push(u));
                        else {
                            const e = Object.assign({}, u, { childList: u.childList.splice(-1) });
                            (u.childList.length > 0 && t.push(u),
                                t.push({ blockType: ke.NoBreakWrapper, colorTag: '', childList: [e, n] }));
                        }
                        return (e.childList.length > 0 && t.push(e), t);
                    },
                    Ze = (u, e = {}, t) => {
                        if (!u) return [];
                        const n = ((u) => {
                            const e = [];
                            let t = !1;
                            return (
                                u.forEach((u) => {
                                    u.blockType === ke.NoBreakSymbol
                                        ? ((t = !0), e.push(...Ye(e.pop(), u)))
                                        : (t ? e.push(...Ye(e.pop(), u)) : e.push(u), (t = !1));
                                }),
                                e
                            );
                        })(
                            ((u, e, t) => {
                                const n = [];
                                return (
                                    $e(
                                        u,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (u) => {
                                            n.push(...Ke(u, e, '', t));
                                        },
                                        (u) => {
                                            n.push(...Ke(u[2] + u[3], e, u[1], t));
                                        },
                                    ),
                                    n
                                );
                            })(he(u).replace(/&zwnbsp;/g, '\ufeff'), e, t),
                        );
                        return Ge(n);
                    },
                    Qe = (u, e) => !u || u.offsetTop + u.offsetHeight > e,
                    Je = (u, e) => u.offsetLeft + u.offsetWidth - e,
                    ut = (u, e, t) => {
                        if (!u || !u.textContent) return [!1, 0];
                        if (u.offsetLeft > e) return [!1, 0];
                        const n = Je(u, e),
                            r = u.textContent.length,
                            a = u.offsetWidth / r,
                            i = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((e - u.offsetLeft) / a);
                            return n >= t ? [!0, t + i] : [!1, n];
                        }
                        const o = Math.max(t + i, 0);
                        return r < o ? [!1, 0] : [!0, o];
                    },
                    et = (u, e, t, n, a, i) => {
                        let o = -1,
                            l = null;
                        for (let s = t; s >= 0; s--) {
                            const t = u[s],
                                c = Number(u[s].getAttribute('data-block-type'));
                            if (c === ke.LineBreak || c === ke.NewLine || c === ke.Binding) continue;
                            const E = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const u = ut(t, n, a),
                                    c = u[0],
                                    _ = u[1];
                                if (!c) {
                                    _ > 0 && (a -= _);
                                    continue;
                                }
                                const d = E.slice(0, E.length - _) + i,
                                    A = e[s];
                                ((l = r().cloneElement(A, A.props, d)), (o = s));
                                break;
                            }
                            {
                                const u = t.children,
                                    c = e[s],
                                    _ = c.props.children,
                                    d = et(u, _, u.length - 1, n, a, i),
                                    A = d[0],
                                    F = d[1];
                                if (!(A < 0)) {
                                    const u = _.slice(0, A);
                                    ((l = r().cloneElement(c, c.props, u, F)), (o = s));
                                    break;
                                }
                                a -= E.length;
                            }
                        }
                        return [o, l];
                    },
                    tt = (u, e, t, n = '...') => {
                        const r = [...e],
                            a = u.current;
                        if (!a) return [r, !1];
                        const i = t.height,
                            o = t.width,
                            l = a.lastElementChild;
                        if (!Qe(l, i) && Je(l, o) <= 0) return [r, !1];
                        const s = a.children,
                            c = ((u, e) => {
                                let t = 0,
                                    n = u.length - 1;
                                for (; n - t >= 0; ) {
                                    const r = t + Math.ceil(0.5 * (n - t));
                                    Qe(u[r], e) ? (n = r - 1) : (t = r + 1);
                                }
                                return t - 1;
                            })(s, i);
                        if (c < 0) return [r, !1];
                        const E = et(s, r, c, o, n.length, n),
                            _ = E[0],
                            d = E[1];
                        return (d && (r.splice(_, 1, d), r.splice(_ + 1)), [r, !0]);
                    },
                    nt = r().memo(
                        ({
                            text: u,
                            classMix: e,
                            onSizeChanged: t,
                            binding: a,
                            isTooltipEnable: i = !1,
                            isTruncationAvailable: o = !1,
                            customTooltipArgs: l,
                            targetId: s,
                            justifyContent: c = Te.FlexStart,
                            alignContent: E = Te.FlexStart,
                            truncateIdentify: _ = '...',
                        }) => {
                            const d = (0, n.useRef)(null),
                                A = (0, n.useRef)({ height: 0, width: 0 }),
                                D = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                m = D[0],
                                C = D[1],
                                B = (0, n.useMemo)(() => Ze(u, a, { justifyContent: c }), [a, c, u]),
                                g = (0, n.useMemo)(() => {
                                    if (
                                        i &&
                                        m.isTruncated &&
                                        (!a || !Object.values(a).find((u) => 'object' == typeof u))
                                    )
                                        return {
                                            args: Object.assign({ text: u }, l, {
                                                stringifyKwargs: a ? JSON.stringify(a) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: s,
                                        };
                                }, [a, i, s, u, l, m.isTruncated]),
                                p = (0, n.useCallback)(
                                    (u) => {
                                        ((A.current.width = u.contentRect.width),
                                            (A.current.height = u.contentRect.height));
                                        const e = tt(d, B, A.current, _),
                                            n = e[0],
                                            r = e[1];
                                        (C({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), t && t(r));
                                    },
                                    [t, _, B],
                                ),
                                h = (0, n.useMemo)(() => ({ justifyContent: c, alignContent: E }), [E, c]);
                            return (
                                ((u, e, t = !0) => {
                                    const r = (0, n.useCallback)(
                                        (u) => {
                                            const t = u[0];
                                            e && e(t);
                                        },
                                        [e],
                                    );
                                    (0, n.useEffect)(() => {
                                        if (!u.current || !t) return;
                                        const e = new Fe.Z((u) => r(u));
                                        return (
                                            e.observe(u.current),
                                            () => {
                                                e.disconnect();
                                            }
                                        );
                                    }, [r, t, u]);
                                })(d, p, o),
                                r().createElement(
                                    'div',
                                    {
                                        className: F()(
                                            De.base,
                                            e,
                                            De.base__zeroPadding,
                                            o && De.base__isTruncationAvailable,
                                        ),
                                        style: h,
                                    },
                                    r().createElement('div', { className: De.unTruncated, ref: d }, B),
                                    r().createElement(
                                        se,
                                        {
                                            tooltipArgs: g,
                                            className: F()(
                                                De.tooltip,
                                                De[`tooltip__justify-${c}`],
                                                De[`tooltip__align-${E}`],
                                            ),
                                        },
                                        r().createElement(
                                            'div',
                                            {
                                                className: F()(
                                                    De.truncated,
                                                    !m.isTruncateFinished && o && De.truncated__hide,
                                                ),
                                                style: h,
                                            },
                                            m.isTruncateFinished && o ? m.elementList : B,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    rt = 'Disclaimer_base_1d',
                    at = 'Disclaimer_link_84',
                    it = 'Disclaimer_linkIcon_24',
                    ot = (0, j.Pi)(({ className: u }) => {
                        const e = hu().controls;
                        return r().createElement(
                            'div',
                            { className: F()(rt, u) },
                            r().createElement(nt, {
                                text: R.strings.hangar.buyVehicleWindow.disclaimer.text(),
                                binding: {
                                    link: r().createElement(
                                        'div',
                                        { onClick: e.showLicenseInfo, className: at },
                                        R.strings.hangar.buyVehicleWindow.disclaimer.button(),
                                        r().createElement('div', { className: it }),
                                    ),
                                },
                            }),
                        );
                    }),
                    lt = 'FormatText_base_d0',
                    st = ({ binding: u, text: e = '', classMix: t, alignment: a = Ce.left, formatWithBrackets: i }) => {
                        if (null === e) return (console.error("FormatText was supplied with 'null'"), null);
                        const o = i && u ? Be(e, u) : e;
                        return r().createElement(
                            n.Fragment,
                            null,
                            o.split('\n').map((e, i) =>
                                r().createElement(
                                    'div',
                                    { className: F()(lt, t), key: `${e}-${i}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : xe(u, e))))(
                                        e,
                                        a,
                                        u,
                                    ).map((u, e) => r().createElement(n.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    };
                let ct, Et, _t;
                (!(function (u) {
                    ((u.small = 'small'), (u.big = 'big'), (u.large = 'large'));
                })(ct || (ct = {})),
                    (function (u) {
                        ((u.credits = 'credits'),
                            (u.gold = 'gold'),
                            (u.crystal = 'crystal'),
                            (u.xp = 'xp'),
                            (u.freeXP = 'freeXP'),
                            (u.equipCoin = 'equipCoin'),
                            (u.eliteXP = 'eliteXP'));
                    })(Et || (Et = {})),
                    (function (u) {
                        ((u.Default = 'default'),
                            (u.Warning = 'warning'),
                            (u.Selected = 'selected'),
                            (u.Disabled = 'disabled'));
                    })(_t || (_t = {})));
                const dt = {
                        base: 'OptionCard_base_19',
                        iconWrapper: 'OptionCard_iconWrapper_57',
                        iconWrapper__selected: 'OptionCard_iconWrapper__selected_1c',
                        iconWrapper__default: 'OptionCard_iconWrapper__default_82',
                        iconWrapper__disabled: 'OptionCard_iconWrapper__disabled_02',
                        icon: 'OptionCard_icon_0b',
                        iconWrapper__warning: 'OptionCard_iconWrapper__warning_55',
                        warning: 'OptionCard_warning_78',
                        glow: 'OptionCard_glow_b3',
                        check: 'OptionCard_check_a9',
                        content: 'OptionCard_content_4d',
                        title: 'OptionCard_title_3f',
                        price: 'OptionCard_price_8e',
                    },
                    At = ({
                        optionState: u,
                        price: e,
                        title: t,
                        icon: a,
                        tooltip: i,
                        isPriceVisible: o,
                        className: l,
                        onClick: s,
                    }) => {
                        const c = (0, n.useCallback)(() => {
                                u !== _t.Disabled && Vu.playHighlight();
                            }, [u]),
                            E = (0, n.useCallback)(() => {
                                u !== _t.Disabled && (s(), Vu.playClick());
                            }, [u, s]);
                        return r().createElement(
                            'div',
                            { className: F()(dt.base, l), onMouseEnter: c },
                            r().createElement(
                                se,
                                { tooltipArgs: _e(i) },
                                r().createElement(
                                    'div',
                                    { className: F()(dt.iconWrapper, dt[`iconWrapper__${u}`]), onClick: E },
                                    r().createElement('div', {
                                        className: dt.icon,
                                        style: { backgroundImage: `url(${a})` },
                                    }),
                                    u === _t.Warning && r().createElement('div', { className: dt.warning }),
                                    u === _t.Selected &&
                                        r().createElement(
                                            r().Fragment,
                                            null,
                                            r().createElement('div', { className: dt.glow }),
                                            r().createElement('div', { className: dt.check }),
                                        ),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: dt.content },
                                r().createElement(st, { text: t, classMix: dt.title }),
                                o &&
                                    r().createElement(Wu, {
                                        tooltipKey: e.tooltipKey,
                                        prices: e.price,
                                        size: ct.small,
                                    }),
                            ),
                        );
                    },
                    Ft = 'OptionList_base_d1',
                    Dt = 'OptionList_option_8d';
                function mt() {
                    return (
                        (mt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        mt.apply(this, arguments)
                    );
                }
                const Ct = (0, j.Pi)(({ className: u }) => {
                        const e = hu(),
                            t = e.model,
                            n = e.controls;
                        return r().createElement(
                            'div',
                            { className: F()(Ft, u) },
                            Tu(t.options.get(), (u) =>
                                r().createElement(
                                    At,
                                    mt({ key: u.name }, u, { onClick: () => n.toggleOption(u.name), className: Dt }),
                                ),
                            ),
                        );
                    }),
                    Bt = 'RentButton_base_f9',
                    gt = 'RentButton_content_ab',
                    pt = 'RentButton_icon_12',
                    ht = 'RentButton_label_c7',
                    bt = (0, j.Pi)(({ className: u }) => {
                        const e = hu().model;
                        return r().createElement(
                            oe,
                            { args: { alias: 'RentalTermSelectionPopover' } },
                            r().createElement(
                                zu,
                                { type: $u.ghost, size: Uu.medium, mixClass: F()(Bt, u) },
                                r().createElement(
                                    'div',
                                    { className: gt },
                                    r().createElement('div', { className: pt }),
                                    r().createElement('div', { className: ht }, e.rentButtonLabel.get()),
                                ),
                            ),
                        );
                    }),
                    vt = 'SelectButton_base_79',
                    ft = 'SelectButton_content_cb',
                    yt = 'SelectButton_icon_07',
                    wt = 'SelectButton_label_ec',
                    xt = ({ onClick: u, isDisabled: e }) =>
                        r().createElement(
                            wu,
                            { args: { tooltipId: e ? 'tradeInInfoNotAvailable' : 'tradeInInfo' } },
                            r().createElement(
                                'div',
                                null,
                                r().createElement(
                                    zu,
                                    { mixClass: vt, type: $u.ghost, size: Uu.medium, onClick: u, disabled: e },
                                    r().createElement(
                                        'div',
                                        { className: ft },
                                        r().createElement('div', { className: yt }),
                                        r().createElement(
                                            'div',
                                            { className: wt },
                                            R.strings.hangar.buyVehicleWindow.tradeInBtnLabel(),
                                        ),
                                    ),
                                ),
                            ),
                        );
                var kt = t(690);
                const Tt = {
                    base: 'TankName_base_f1',
                    base__sizeMedium: 'TankName_base__sizeMedium_3a',
                    base__sizBig: 'TankName_base__sizBig_a9',
                    base__typeWhite: 'TankName_base__typeWhite_32',
                    base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                    base__typeWhiteOrange: 'TankName_base__typeWhiteOrange_ac',
                    base__typeColored: 'TankName_base__typeColored_bc',
                    level: 'TankName_level_bb',
                    type: 'TankName_type_3c',
                    type__extraSmall: 'TankName_type__extraSmall_80',
                    type__medium: 'TankName_type__medium_ff',
                    type__big: 'TankName_type__big_9a',
                    type__eliteExtraSmall: 'TankName_type__eliteExtraSmall_74',
                    type__eliteMedium: 'TankName_type__eliteMedium_10',
                    type__eliteBig: 'TankName_type__eliteBig_ac',
                    name: 'TankName_name_56',
                    premiumIGR: 'TankName_premiumIGR_25',
                };
                let Lt, Ot;
                (!(function (u) {
                    ((u.extraSmall = 'extraSmall'), (u.medium = 'medium'), (u.big = 'big'));
                })(Lt || (Lt = {})),
                    (function (u) {
                        ((u.colored = 'colored'),
                            (u.white = 'white'),
                            (u.whiteSpanish = 'whiteSpanish'),
                            (u.whiteOrange = 'whiteOrange'));
                    })(Ot || (Ot = {})));
                const St = ({
                        isElite: u,
                        vehicleName: e,
                        vehicleShortName: t,
                        vehicleType: n,
                        vehicleLvl: a,
                        tags: i = '',
                        size: o = Lt.extraSmall,
                        type: l = Ot.colored,
                        className: s,
                        classNames: c,
                        isShortName: E = !1,
                    }) => {
                        const _ = `${ge(n)}${u ? '_elite' : ''}`,
                            d = R.images.gui.maps.icons.vehicleTypes.big.$dyn(_);
                        return r().createElement(
                            'div',
                            { className: F()(Tt.base, Tt[`base__size${pe(o)}`], Tt[`base__type${pe(l)}`], s) },
                            r().createElement(
                                'div',
                                { className: F()(Tt.level, null == c ? void 0 : c.level) },
                                (0, kt.HG)(a),
                            ),
                            r().createElement('div', {
                                className: F()(
                                    Tt.type,
                                    u && Tt[`type__elite${pe(o)}`],
                                    Tt[`type__${o}`],
                                    null == c ? void 0 : c.typeIcon,
                                ),
                                style: n ? { backgroundImage: `url(${d})` } : void 0,
                            }),
                            ce(i, 'premiumIGR') && r().createElement('div', { className: Tt.premiumIGR }),
                            r().createElement(
                                'div',
                                { className: F()(Tt.name, null == c ? void 0 : c.name) },
                                E ? t : e,
                            ),
                        );
                    },
                    Nt = 'VehicleButton_base_c7',
                    It = 'VehicleButton_vehicleButton_e1',
                    Pt = 'VehicleButton_content_d0',
                    Mt = 'VehicleButton_tankName_44',
                    Rt = 'VehicleButton_nationFlag_fa',
                    Wt = 'VehicleButton_vehicleIcon_33',
                    Ht = 'VehicleButton_resetButton_03',
                    jt = 'VehicleButton_resetIcon_29';
                function Vt() {
                    return (
                        (Vt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Vt.apply(this, arguments)
                    );
                }
                const Gt = ({ onClick: u, onClear: e, vehicle: t }) => {
                        const n = R.images.gui.maps.icons.tradeIn.nations.$dyn(t.nation),
                            a = R.images.gui.maps.icons.vehicle.small.$dyn(`${t.nation}_${t.techName}`);
                        return r().createElement(
                            'div',
                            { className: Nt },
                            r().createElement(
                                wu,
                                { args: { tooltipId: 'selectedVehicleTradeOff' } },
                                r().createElement(
                                    zu,
                                    { onClick: u, mixClass: It, type: $u.ghost, size: Uu.medium },
                                    r().createElement(
                                        'div',
                                        { className: Pt },
                                        r().createElement('div', {
                                            className: Rt,
                                            style: { backgroundImage: `url(${n})` },
                                        }),
                                        r().createElement('div', {
                                            className: Wt,
                                            style: { backgroundImage: `url(${a})` },
                                        }),
                                        r().createElement(St, Vt({ className: Mt, type: Ot.whiteSpanish }, Ee(t))),
                                    ),
                                ),
                            ),
                            r().createElement(
                                zu,
                                { onClick: e, mixClass: Ht, type: $u.ghost, size: Uu.medium },
                                r().createElement('div', { className: jt }),
                            ),
                        );
                    },
                    $t = 'TradeIn_base_da',
                    Ut = (0, j.Pi)(({ className: u }) => {
                        const e = hu(),
                            t = e.model,
                            n = e.controls;
                        return r().createElement(
                            'div',
                            { className: F()($t, u) },
                            t.computes.isTradeInVehicleSelected()
                                ? r().createElement(Gt, {
                                      onClick: n.selectTradeInVehicle,
                                      onClear: n.clearTradeInVehicle,
                                      vehicle: t.tradeInVehicleToSell.get(),
                                  })
                                : r().createElement(xt, {
                                      onClick: n.selectTradeInVehicle,
                                      isDisabled: !t.hasTradeInVehiclesToSelect.get(),
                                  }),
                        );
                    }),
                    zt = 'Footer_base_ff',
                    qt = 'Footer_separator_f0',
                    Xt = 'Footer_separator__bottom_18',
                    Kt = 'Footer_options_60',
                    Yt = 'Footer_totalsWrapper_3c',
                    Zt = 'Footer_totals_ce',
                    Qt = 'Footer_totals__currencyAtBottom_cd',
                    Jt = 'Footer_totalsCurrency_3b',
                    un = 'Footer_actions_72',
                    en = 'Footer_rentButton_30',
                    tn = 'Footer_disclaimer_66',
                    nn = 'Footer_tradeInWrapper_c1',
                    rn = 'Footer_tradeIn_92',
                    an = (0, j.Pi)(() => {
                        const u = hu().model,
                            e = u.isRentAvailable.get(),
                            t = u.totalsPrice.get(),
                            n = e && 1 === t.length;
                        return r().createElement(
                            'div',
                            { className: zt },
                            r().createElement('div', { className: qt }),
                            r().createElement(Ct, { className: Kt }),
                            r().createElement(
                                'div',
                                { className: Yt },
                                r().createElement(Wu, {
                                    tooltipKey: u.totals.get().tooltipKey,
                                    prices: t,
                                    className: F()(Zt, n && Qt),
                                    classNames: { currency: Jt },
                                }),
                                r().createElement(
                                    'div',
                                    { className: un },
                                    e && r().createElement(bt, { className: en }),
                                    r().createElement(Ae, null),
                                ),
                            ),
                            r().createElement('div', { className: F()(qt, Xt) }),
                            u.hasDisclaimer.get() && r().createElement(ot, { className: tn }),
                            u.hasTradeInWidget.get() &&
                                r().createElement('div', { className: nn }, r().createElement(Ut, { className: rn })),
                        );
                    }),
                    on = 'Title_base_49',
                    ln = 'Title_label_a3',
                    sn = 'Title_vehicleWrapper_5d',
                    cn = 'Title_vehicleTooltipHitArea_ec',
                    En = 'Title_vehicle_d4';
                function _n() {
                    return (
                        (_n =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        _n.apply(this, arguments)
                    );
                }
                const dn = (0, j.Pi)(() => {
                        const u = hu().model,
                            e = u.vehicle.get(),
                            t = ge(e.type);
                        return r().createElement(
                            'div',
                            { className: on },
                            r().createElement('div', { className: ln }, u.title.get()),
                            r().createElement(
                                'div',
                                { className: sn },
                                r().createElement(
                                    St,
                                    _n({ size: Lt.big, type: Ot.whiteSpanish, className: En }, Ee(e)),
                                ),
                                r().createElement(
                                    Yu,
                                    {
                                        body: e.isPremium
                                            ? R.strings.menu.header.vehicleType.elite.$dyn(t)
                                            : R.strings.menu.header.vehicleType.$dyn(t),
                                    },
                                    r().createElement('div', { className: cn }),
                                ),
                            ),
                        );
                    }),
                    An = 'VehicleImage_base_6e',
                    Fn = R.images.gui.maps.shop.vehicles.c_600x450.empty_tank(),
                    Dn = r().memo(({ techName: u, className: e }) =>
                        r().createElement('div', {
                            className: F()(An, e),
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.shop.vehicles.c_600x450.$dyn(u) || Fn})`,
                            },
                        }),
                    ),
                    mn = 'BuyVehicleViewApp_base_b7',
                    Cn = 'BuyVehicleViewApp_background_e3',
                    Bn = 'BuyVehicleViewApp_topRight_d9',
                    gn = 'BuyVehicleViewApp_closeBtn_0b',
                    pn = 'BuyVehicleViewApp_flag_4e',
                    hn = 'BuyVehicleViewApp_wrapper_62',
                    bn = 'BuyVehicleViewApp_content_fc',
                    vn = 'BuyVehicleViewApp_vehicleImage_c9',
                    fn = (0, j.Pi)(() => {
                        const u = hu(),
                            e = u.model,
                            t = u.controls,
                            n = e.vehicle.get();
                        var a;
                        return (
                            (a = t.close),
                            H(P.n.ESCAPE, a),
                            r().createElement(
                                'div',
                                { className: mn },
                                r().createElement('div', { className: Cn }),
                                r().createElement(Cu, { className: Bn }),
                                r().createElement(
                                    'div',
                                    { className: gn },
                                    r().createElement(I, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: t.close,
                                    }),
                                ),
                                r().createElement('div', {
                                    className: pn,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.eventBoards.flagsOverlay.${n.nation})`,
                                    },
                                }),
                                r().createElement(
                                    'div',
                                    { className: hn },
                                    r().createElement(dn, null),
                                    r().createElement(
                                        'div',
                                        { className: bn },
                                        r().createElement(Dn, { techName: n.techName, className: vn }),
                                    ),
                                    r().createElement(an, null),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    L().render(
                        r().createElement(pu, null, r().createElement(k, null, r().createElement(fn, null))),
                        document.getElementById('root'),
                    );
                });
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
                var r = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [e, t, n] = deferred[l], a = !0, i = 0; i < e.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(l--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [e, t, n];
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
        (__webpack_require__.j = 435),
        (() => {
            var u = { 435: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        r,
                        [a, i, o] = t,
                        l = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var s = o(__webpack_require__);
                    }
                    for (e && e(t); l < a.length; l++)
                        ((r = a[l]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0));
                    return __webpack_require__.O(s);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [76], () => __webpack_require__(362));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
