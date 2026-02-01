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
            2472: (e, u, t) => {
                'use strict';
                function a(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => a });
            },
            9060: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => C });
                var a = {};
                (t.r(a),
                    t.d(a, { mouse: () => m, off: () => c, on: () => l, onResize: () => i, onScaleUpdated: () => o }));
                var r = {};
                (t.r(r),
                    t.d(r, {
                        events: () => a,
                        getMouseGlobalPosition: () => A,
                        getSize: () => g,
                        graphicsQuality: () => F,
                        playSound: () => E,
                        setRTPC: () => _,
                    }));
                var n = t(2472);
                function s(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const i = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    l = (e, u) => engine.on(e, u),
                    c = (e, u) => engine.off(e, u),
                    d = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    m = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && s(!1);
                        }
                        function t() {
                            e.enabled && s(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', t))
                                : s(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const n = `mouse${u}`,
                                            s = d[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, i),
                                            a(),
                                            () => {
                                                r &&
                                                    (s(),
                                                    window.removeEventListener(n, i),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (r = !1));
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
                                ((e.enabled = !1), a());
                            },
                            enable() {
                                ((e.enabled = !0), a());
                            },
                            enableOutside() {
                                e.enabled && s(!0);
                            },
                            disableOutside() {
                                e.enabled && s(!1);
                            },
                        });
                    })();
                function E(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function _(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                function g(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const F = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    D = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    p = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    f = Object.keys(p).reduce((e, u) => ((e[u] = () => E(p[u])), e), {}),
                    b = { play: Object.assign({}, f, { sound: E }), setRTPC: _ },
                    C = { view: t(2031), client: r, sound: b, intl: D };
            },
            2031: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => A,
                        addPreloadTexture: () => E,
                        arabic2roman: () => P,
                        children: () => a,
                        displayStatus: () => i,
                        displayStatusIs: () => I,
                        enableFullScreenModeSupported: () => M,
                        events: () => l,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => T,
                        freezeTextureBeforeResize: () => b,
                        getBrowserTexturePath: () => g,
                        getDisplayStatus: () => R,
                        getExternalPaddingsRem: () => x,
                        getFontNames: () => N,
                        getScale: () => C,
                        getSize: () => D,
                        getViewGlobalPosition: () => f,
                        initExternalPaddings: () => L,
                        isEventHandled: () => S,
                        isFocused: () => w,
                        pxToRem: () => B,
                        remToPx: () => h,
                        resize: () => p,
                        sendEvent: () => m,
                        setAnimateWindow: () => v,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => _,
                        setSidePaddingsRem: () => F,
                        whenTutorialReady: () => O,
                    }));
                var a = {};
                (t.r(a), t.d(a, { getBgUrl: () => s, getTextureUrl: () => n }));
                var r = t(9690);
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function s(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                const i = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
                var o = t(2472);
                const l = {
                        onTextureFrozen: (0, o.E)('self.onTextureFrozen'),
                        onTextureReady: (0, o.E)('self.onTextureReady'),
                        onDomBuilt: (0, o.E)('self.onDomBuilt'),
                        onLoaded: (0, o.E)('self.onLoaded'),
                        onDisplayChanged: (0, o.E)('self.onShowingStatusChanged'),
                        onFocusUpdated: (0, o.E)('self.onFocusChanged'),
                        children: {
                            onAdded: (0, o.E)('children.onAdded'),
                            onLoaded: (0, o.E)('children.onLoaded'),
                            onRemoved: (0, o.E)('children.onRemoved'),
                            onAttached: (0, o.E)('children.onAttached'),
                            onTextureReady: (0, o.E)('children.onTextureReady'),
                            onRequestPosition: (0, o.E)('children.requestPosition'),
                        },
                    },
                    c = ['args'],
                    d = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, c);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    m = {
                        close(e) {
                            d('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            d(64);
                        },
                        move(e) {
                            d(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function E(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function g(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function A(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function F(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function D(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function p(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function f(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: h(u.x), y: h(u.y) };
                }
                function b() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function C() {
                    return viewEnv.getScale();
                }
                function B(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function v(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function w() {
                    return viewEnv.isFocused();
                }
                function y() {
                    return viewEnv.setEventHandled();
                }
                function S() {
                    return viewEnv.isEventHandled();
                }
                function T() {
                    viewEnv.forceTriggerMouseMove();
                }
                function R() {
                    return viewEnv.getShowingStatus();
                }
                const N = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    P = r.cg;
                function x() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const I = Object.keys(i).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === i[u]), e), {}),
                    k = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    O = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : l.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function M() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function L(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            a = u.right,
                            r = u.bottom,
                            n = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${a}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${n}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
            },
            5521: (e, u, t) => {
                'use strict';
                let a, r;
                (t.d(u, { n: () => a }),
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
                    })(r || (r = {})));
            },
            9690: (e, u, t) => {
                'use strict';
                t.d(u, { HG: () => i, cg: () => n });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function n(e) {
                    let u = '';
                    for (let t = r.length - 1; t >= 0; t--) for (; e >= r[t]; ) ((u += a[t]), (e -= r[t]));
                    return u;
                }
                const s = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    i = (e) => (s ? `${e}` : n(e));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var a = t(9060);
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
                        const n = a.O.view.addModelObserver(e, t, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(n) : (this._views[t] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
                        });
                    }
                }
                r.__instance = void 0;
                const n = r;
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
                t.d(u, {
                    B3: () => l,
                    Gr: () => c,
                    Z5: () => s.Z5,
                    lf: () => d,
                    B0: () => i,
                    c9: () => p,
                    ry: () => D,
                });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let a = e.target;
                                    do {
                                        if (a === u) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            a = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== a)),
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
                const r = a;
                var n = t(1358),
                    s = t(8613);
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
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    _ = t(9060);
                const g = ['args'];
                function A(e, u, t, a, r, n, s) {
                    try {
                        var i = e[n](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(a, r);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                    return new Promise(function (a, r) {
                                        var n = e.apply(u, t);
                                        function s(e) {
                                            A(n, a, r, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(n, a, r, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    p = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    f = () => p(i.CLOSE),
                    b = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var C = t(7572);
                const B = r.instance,
                    h = {
                        DataTracker: n.Z,
                        ViewModel: C.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => p(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => p(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), n) => {
                            const s = _.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                m = o.height,
                                E = {
                                    x: _.O.view.pxToRem(l) + s.x,
                                    y: _.O.view.pxToRem(c) + s.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(m),
                                };
                            p(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: F(E),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => b(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, f);
                        },
                        handleViewEvent: p,
                        onBindingsReady: D,
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
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const r = Object.prototype.toString.call(u[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < r.length; u++) t[a].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: B,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = h;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => n, Z5: () => a, cy: () => r });
                const a = {
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
                    },
                    n = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            4048: (e, u, t) => {
                'use strict';
                var a = {};
                (t.r(a),
                    t.d(a, {
                        Area: () => Dr,
                        Bar: () => gr,
                        DefaultScroll: () => Fr,
                        Direction: () => nr,
                        defaultSettings: () => sr,
                        useHorizontalScrollApi: () => or,
                    }));
                var r = {};
                (t.r(r), t.d(r, { Area: () => Rr, Bar: () => yr, Default: () => Tr, useVerticalScrollApi: () => pr }));
                var n = t(7363),
                    s = t.n(n);
                const i = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var o = t(9060);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e = o.O.client.getSize('rem')) {
                    const u = e.width,
                        t = e.height;
                    return Object.assign(
                        { width: u, height: t },
                        (function (e, u, t) {
                            const a = (function (e, u) {
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
                                n = Math.min(a, r);
                            return {
                                extraLarge: n === t.extraLarge.weight,
                                large: n === t.large.weight,
                                medium: n === t.medium.weight,
                                small: n === t.small.weight,
                                extraSmall: n === t.extraSmall.weight,
                                extraLargeWidth: a === t.extraLarge.weight,
                                largeWidth: a === t.large.weight,
                                mediumWidth: a === t.medium.weight,
                                smallWidth: a === t.small.weight,
                                extraSmallWidth: a === t.extraSmall.weight,
                                extraLargeHeight: r === t.extraLarge.weight,
                                largeHeight: r === t.large.weight,
                                mediumHeight: r === t.medium.weight,
                                smallHeight: r === t.small.weight,
                                extraSmallHeight: r === t.extraSmall.weight,
                            };
                        })(u, t, l),
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
                const m = d(),
                    E = (0, n.createContext)(m),
                    _ = ['children'];
                (0, n.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, _);
                    const a = (0, n.useContext)(E),
                        r = a.extraLarge,
                        s = a.large,
                        o = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        d = a.extraLargeWidth,
                        m = a.largeWidth,
                        g = a.mediumWidth,
                        A = a.smallWidth,
                        F = a.extraSmallWidth,
                        D = a.extraLargeHeight,
                        p = a.largeHeight,
                        f = a.mediumHeight,
                        b = a.smallHeight,
                        C = a.extraSmallHeight,
                        B = { extraLarge: D, large: p, medium: f, small: b, extraSmall: C };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && s) return u;
                        if (t.medium && o) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return i(u, t, B);
                        if (t.largeWidth && m) return i(u, t, B);
                        if (t.mediumWidth && g) return i(u, t, B);
                        if (t.smallWidth && A) return i(u, t, B);
                        if (t.extraSmallWidth && F) return i(u, t, B);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && p) return u;
                            if (t.mediumHeight && f) return u;
                            if (t.smallHeight && b) return u;
                            if (t.extraSmallHeight && C) return u;
                        }
                    }
                    return null;
                });
                const g = ({ children: e }) => {
                    const u = (0, n.useState)(d),
                        t = u[0],
                        a = u[1],
                        r = (0, n.useState)(!1),
                        i = r[0],
                        l = r[1];
                    return (
                        (0, n.useLayoutEffect)(() => {
                            function e() {
                                a((e) => {
                                    const u = o.O.client.getSize('rem');
                                    return e.width === u.width && e.height === u.height ? e : d(u);
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
                        s().createElement(E.Provider, { value: t }, i && e)
                    );
                };
                var A = t(6483),
                    F = t.n(A),
                    D = t(926),
                    p = t.n(D);
                let f, b, C;
                (!(function (e) {
                    ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                })(f || (f = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'));
                    })(b || (b = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge'));
                    })(C || (C = {})));
                const B = () => {
                        const e = (0, n.useContext)(E),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return f.ExtraLarge;
                                    case e.large:
                                        return f.Large;
                                    case e.medium:
                                        return f.Medium;
                                    case e.small:
                                        return f.Small;
                                    case e.extraSmall:
                                        return f.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), f.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return b.ExtraLarge;
                                    case e.largeWidth:
                                        return b.Large;
                                    case e.mediumWidth:
                                        return b.Medium;
                                    case e.smallWidth:
                                        return b.Small;
                                    case e.extraSmallWidth:
                                        return b.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), b.ExtraSmall);
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return C.ExtraLarge;
                                    case e.largeHeight:
                                        return C.Large;
                                    case e.mediumHeight:
                                        return C.Medium;
                                    case e.smallHeight:
                                        return C.Small;
                                    case e.extraSmallHeight:
                                        return C.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), C.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    h = ['children', 'className'];
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                const w = {
                        [b.ExtraSmall]: '',
                        [b.Small]: p().SMALL_WIDTH,
                        [b.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [b.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    y = {
                        [C.ExtraSmall]: '',
                        [C.Small]: p().SMALL_HEIGHT,
                        [C.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [C.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [C.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    S = {
                        [f.ExtraSmall]: '',
                        [f.Small]: p().SMALL,
                        [f.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [f.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [f.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    T = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, h);
                        const r = B(),
                            n = r.mediaWidth,
                            i = r.mediaHeight,
                            o = r.mediaSize;
                        return s().createElement('div', v({ className: F()(t, w[n], y[i], S[o]) }, a), u);
                    },
                    N = ['children'],
                    P = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, N);
                        return s().createElement(g, null, s().createElement(T, t, u));
                    };
                var x = t(1533),
                    I = t.n(x);
                const k = {
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
                    O = [
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
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const L = (e) => {
                    let u = e.caption,
                        t = e.onClick,
                        a = e.goto,
                        r = e.classNames,
                        i = e.onMouseEnter,
                        l = e.onMouseLeave,
                        c = e.onMouseDown,
                        d = e.onMouseUp,
                        m = e.side,
                        E = void 0 === m ? 'left' : m,
                        _ = e.type,
                        g = void 0 === _ ? 'back' : _,
                        A = e.soundHover,
                        D = void 0 === A ? 'highlight' : A,
                        p = e.soundClick,
                        f = void 0 === p ? 'play' : p,
                        b = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, O);
                    const C = (0, n.useCallback)(
                            (e) => {
                                (null == i || i(e), o.O.sound.play.sound(D));
                            },
                            [i, D],
                        ),
                        B = (0, n.useCallback)(
                            (e) => {
                                null == l || l(e);
                            },
                            [l],
                        ),
                        h = (0, n.useCallback)(
                            (e) => {
                                (null == c || c(e), o.O.sound.play.sound(f));
                            },
                            [c, f],
                        ),
                        v = (0, n.useCallback)(
                            (e) => {
                                null == d || d(e);
                            },
                            [d],
                        );
                    return s().createElement(
                        'div',
                        M(
                            {
                                className: F()(k.base, k[`base__${g}`], k[`base__${E}`], null == r ? void 0 : r.base),
                                onMouseEnter: C,
                                onMouseLeave: B,
                                onMouseDown: h,
                                onMouseUp: v,
                                onClick: t,
                            },
                            b,
                        ),
                        'info' !== g && s().createElement('div', { className: k.shine }),
                        s().createElement(
                            'div',
                            { className: F()(k.icon, k[`icon__${g}`], k[`icon__${E}`], null == r ? void 0 : r.icon) },
                            s().createElement('div', { className: F()(k.glow, null == r ? void 0 : r.glow) }),
                        ),
                        s().createElement(
                            'div',
                            { className: F()(k.caption, k[`caption__${g}`], null == r ? void 0 : r.caption) },
                            u,
                        ),
                        a && s().createElement('div', { className: F()(k.goto, null == r ? void 0 : r.goto) }, a),
                    );
                };
                var U = t(5521),
                    G = t(9916);
                const H = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function $(e = U.n.NONE, u = H, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== U.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && o.O.view.isEventHandled()) return;
                                (o.O.view.setEventHandled(), u(r), t && r.stopPropagation());
                            }
                        }
                    }, [u, e, t, a]);
                }
                function W(e) {
                    $(U.n.ESCAPE, e);
                }
                var z = t(8515);
                const V = R.images.fun_random.gui.maps.icons.feature.asset_packs,
                    j = 'undefined';
                function q(e, u) {
                    return e
                        ? 'string' == typeof u
                            ? e.$dyn(u)
                            : u.reduce((e, u) => e.$dyn(u), e)
                        : (console.warn('FunRandom.combineRPaths: base folder empty: '), null);
                }
                function X(e, { poFileName: u, assetsPointer: t, isSubMode: a = !1 } = {}) {
                    const r = u ? R.strings.$dyn(u) : R.strings.fun_random;
                    if (!r || 'string' == typeof r) throw Error("Incorrect 'poFileName' argument");
                    const n = a ? 'sub_modes' : 'modes',
                        s = r.$dyn(n),
                        i = (t ? (null == s ? void 0 : s.$dyn(t)) : r) || (null == s ? void 0 : s.$dyn(j));
                    return e ? { staticTexts: q(r, e), dynamicTexts: q(i, e) } : { staticTexts: r, dynamicTexts: i };
                }
                function K(e, u) {
                    var t;
                    const a = u ? 'sub_modes' : 'modes',
                        r = V.$dyn(a);
                    return null != (t = r.$dyn(e)) ? t : r.$dyn(j);
                }
                const Y = ({ value: e, format: u = 'integral' }) => {
                    const t = (function (e) {
                            return 'gold' === e ? G.B3.GOLD : G.B3.INTEGRAL;
                        })(u),
                        a = G.Z5.getNumberFormat(e, t);
                    return void 0 !== e && void 0 !== a ? a : null;
                };
                let Z, Q, J, ee, ue, te, ae, re;
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
                })(Z || (Z = {})),
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
                    })(Q || (Q = {})),
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
                    })(J || (J = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(ee || (ee = {})),
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
                    })(ue || (ue = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(te || (te = {})),
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
                    })(ae || (ae = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(re || (re = {})));
                const ne = [Z.Attachment],
                    se = [
                        Z.Items,
                        Z.Equipment,
                        Z.Xp,
                        Z.XpFactor,
                        Z.Blueprints,
                        Z.BlueprintsAny,
                        Z.Goodies,
                        Z.Berths,
                        Z.Slots,
                        Z.Tokens,
                        Z.CrewSkins,
                        Z.CrewBooks,
                        Z.Customizations,
                        Z.CreditsFactor,
                        Z.TankmenXp,
                        Z.TankmenXpFactor,
                        Z.FreeXpFactor,
                        Z.BattleToken,
                        Z.LootBox,
                        Z.PremiumUniversal,
                        Z.NaturalCover,
                        Z.BpCoin,
                        Z.BattlePassSelectToken,
                        Z.BattlaPassFinalAchievement,
                        Z.BattleBadge,
                        Z.BattlePassTicket,
                        Z.BonusX5,
                        Z.CrewBonusX3,
                        Z.EpicSelectToken,
                        Z.Comp7TokenWeeklyReward,
                        Z.DeluxeGift,
                        Z.ModernizedDevicesT1Gift,
                        Z.ModernizedDevicesT2Gift,
                        Z.ModernizedDevicesT3Gift,
                        Z.BattleBoosterGift,
                        Z.OptionalDevice,
                        Z.Attachment,
                        Z.Stamp,
                        Z.WtEventLootbox,
                        Z.WtEventTicket,
                    ],
                    ie = [Z.Gold, Z.Credits, Z.Crystal, Z.FreeXp],
                    oe = [Z.BattlePassPoints, Z.EquipCoin],
                    le = [Z.PremiumPlus, Z.Premium],
                    ce = ['engravings', 'backgrounds'],
                    de = ['engraving', 'background'],
                    me = (e, u = J.Small) => {
                        const t = e.name,
                            a = e.type,
                            r = e.value,
                            n = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case J.S600x450:
                                        return 'c_600x450';
                                    case J.S400x300:
                                        return 'c_400x300';
                                    case J.S296x222:
                                        return 'c_296x222';
                                    case J.S232x174:
                                        return 'c_232x174';
                                    case J.Big:
                                        return 'c_80x80';
                                    case J.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}_${r}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${n}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                                return 'big' === u
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${n}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const a = ce[e];
                                    if (a) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(a),
                                            n = r.$dyn(t);
                                        return n ? `${n}` : `${r.$dyn(de[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, n);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${n}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${n}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${o}.${n}`;
                            case 'attachment':
                                return `R.images.gui.maps.vehicles.attachments.${u}.${n}`;
                            case 'statTracker':
                                return `R.images.gui.maps.vehicles.statTrackers.${u}.${n}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    Ee = (e, u, t) => {
                        const a = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            a,
                            t,
                        );
                    },
                    _e = [J.Small, J.Big],
                    ge = 'squad',
                    Ae = 'player',
                    Fe = 'damage',
                    De = 'frag',
                    pe = 'xp',
                    fe = 'tank';
                function be(e) {
                    return e;
                }
                function Ce() {
                    return !1;
                }
                console.log;
                var Be = t(9174);
                function he(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const ve = (e) => (0 === e ? window : window.subViews.get(e));
                function we(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const ye = we;
                function Se(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                function Te(e, u) {
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) if (u(ye(e, t), t, e)) return !0;
                    return !1;
                }
                function Re(e, u) {
                    for (let r = 0; r < e.length; r++) {
                        const n =
                            ((t = e[r]),
                            (a = void 0),
                            t && 'value' in t && null != (a = t.constructor) && a.name.includes('ArrayItem')
                                ? null == t
                                    ? void 0
                                    : t.value
                                : t);
                        if (u(n, r, e)) return n;
                    }
                    var t, a;
                }
                function Ne(e, u) {
                    for (let t = 0; t < e.length; t++) if (u(ye(e, t), t, e)) return t;
                }
                var Pe = t(3946);
                let xe;
                !(function (e) {
                    ((e[(e.DESCENDING = -1)] = 'DESCENDING'), (e[(e.ASCENDING = 1)] = 'ASCENDING'));
                })(xe || (xe = {}));
                const Ie = (e) => (u) => (t, a) => e.call(null, t, a) * u,
                    ke =
                        (...e) =>
                        (u, t) => {
                            for (let a = 0; a < e.length; a++) {
                                const r = e[a].call(null, u, t);
                                if (0 !== r) return r;
                            }
                            return 0;
                        },
                    Oe = (e, u) => {
                        const t = e.toUpperCase(),
                            a = u.toUpperCase();
                        return t === a ? 0 : t > a ? 1 : -1;
                    },
                    Me = (e) => (u, t) => {
                        const a = u[e],
                            r = t[e];
                        return 'string' == typeof a && 'string' == typeof r
                            ? Oe(a, r)
                            : 'number' == typeof a && 'number' == typeof r
                              ? a - r
                              : 0;
                    };
                let Le;
                !(function (e) {
                    ((e.Asc = 'ascending'), (e.Desc = 'descending'));
                })(Le || (Le = {}));
                const Ue = { [Le.Asc]: xe.ASCENDING, [Le.Desc]: xe.DESCENDING },
                    Ge = { heavyTank: 4, mediumTank: 3, 'AT-SPG': 2, lightTank: 1, SPG: 0 };
                function He({ userNames: e }, { userNames: u }) {
                    return Oe(e.userName, u.userName);
                }
                function $e(e) {
                    const u = Me(e);
                    return ({ efficiencyValues: e }, { efficiencyValues: t }) => u(e, t);
                }
                function We(e) {
                    const u = Me(e);
                    return ({ vehicle: e }, { vehicle: t }) => u(e, t);
                }
                const ze = {
                    [Fe]: Ie(ke($e('damageDealt'), He)),
                    [De]: Ie(ke($e('kills'), He)),
                    [pe]: Ie(ke($e('earnedXp'), He)),
                    [ge]: Ie(
                        ke(
                            (function (e) {
                                const u = Me('squadIndex');
                                return (e, t) => u(e, t);
                            })(),
                            He,
                        ),
                    ),
                    [fe]: Ie(
                        (
                            (e, ...u) =>
                            (t, a) => {
                                for (let r = 0; r < u.length; r++) {
                                    const n = e[r],
                                        s = (0 !== n ? n : xe.ASCENDING) * u[r].call(null, t, a);
                                    if (0 !== s) return s;
                                }
                                return 0;
                            }
                        )(
                            [0, 0, xe.DESCENDING, xe.DESCENDING],
                            We('tier'),
                            function (e, u) {
                                return (function (e, u) {
                                    const t = Ge[e],
                                        a = Ge[u];
                                    return t === a ? 0 : t > a ? 1 : -1;
                                })(e.vehicle.type, u.vehicle.type);
                            },
                            We('name'),
                            He,
                        ),
                    ),
                    [Ae]: Ie(He),
                };
                function Ve(e, u, t, a = ze, r = Ae) {
                    var n;
                    const s = Ue[t],
                        i = null != (n = a[u]) ? n : a[r];
                    return Se(e, be).sort(i(s));
                }
                const je = 'allies',
                    qe = 'enemies',
                    Xe = 'empty',
                    Ke = (0, n.createContext)(null),
                    Ye = (0, n.createContext)(null),
                    Ze = '1',
                    Qe = '2',
                    Je = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: r, mocks: i }) {
                                const l = (0, n.useRef)([]),
                                    c = (e, t, a) => {
                                        var r;
                                        const n = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ve,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function n(e, u = 0) {
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
                                                const s = (e) => {
                                                    const r = t(u),
                                                        n = a.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (t, n) => {
                                                        const i = 'string' == typeof n ? `${a}.${n}` : a,
                                                            l = o.O.view.addModelObserver(i, u, !0);
                                                        return (r.set(l, t), e && t(s(n)), l);
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
                                                        for (
                                                            var e,
                                                                t = (function (e, u) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (t) return (t = t.call(e)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (t = (function (e, u) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return he(e, u);
                                                                                var t = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        e.constructor &&
                                                                                        (t = e.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? he(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
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
                                                                })(r.keys());
                                                            !(e = t()).done;
                                                        )
                                                            n(e.value, u);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(t),
                                            s =
                                                'real' === e
                                                    ? n
                                                    : Object.assign({}, n, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            i = (u) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(u)) : s.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            d = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        userStatus: e.object('userStatus'),
                                                        user: e.object('userNames'),
                                                        killer: e.object('userStatus.killer'),
                                                        battleInfo: e.object('battleInfo'),
                                                        efficiency: e.array('efficiency'),
                                                        rewards: e.array('rewards'),
                                                        premiumPlus: e.object('premiumPlus'),
                                                        detailsColumns: e.array('teamStats.shownValueColumns'),
                                                        singleTeamMode: e.object('teamStats.isSingleTeamPostbattle'),
                                                        sortType: e.object('teamStats.sortingColumn'),
                                                        sortDirection: e.object('teamStats.sortingOrder'),
                                                        selectedTeam: Be.LO.box(Xe),
                                                        selectedPlayerId: Be.LO.box(-1),
                                                        currentTabId: Be.LO.box(Ze),
                                                        allies: e.array('teamStats.allies'),
                                                        enemies: e.array('teamStats.enemies'),
                                                        progressRewards: e.array('progress.rewards'),
                                                        stageRequiredCounters: e.array(
                                                            'progress.stageRequiredCounters',
                                                        ),
                                                        progress: e.object('progress'),
                                                        animationStatus: Be.LO.box(!0),
                                                    },
                                                    t = (0, Pe.Om)(() => {
                                                        const e = Te(
                                                                u.allies.get(),
                                                                (e) => void 0 !== e.squadIndex && e.squadIndex > 0,
                                                            ),
                                                            t = Te(
                                                                u.enemies.get(),
                                                                (e) => void 0 !== e.squadIndex && e.squadIndex > 0,
                                                            );
                                                        return e || t;
                                                    }),
                                                    a = (0, Pe.Om)(() => {
                                                        const e = u.sortType.get();
                                                        return e !== ge || t() ? e : pe;
                                                    }),
                                                    r = (0, Pe.Om)(() => {
                                                        const e = Re(u.allies.get(), (e) => e.isPersonal);
                                                        return e ? e.squadIndex : -1;
                                                    }),
                                                    n = (0, Pe.Om)((e, t) =>
                                                        Ve(u.enemies.get(), a(), u.sortDirection.get(), e, t),
                                                    ),
                                                    s = (0, Pe.Om)((e, t) =>
                                                        Ve(u.allies.get(), a(), u.sortDirection.get(), e, t),
                                                    ),
                                                    i = (0, Pe.Om)(() => {
                                                        const e = u.selectedTeam.get() === je,
                                                            t = u.selectedPlayerId.get();
                                                        return Re(
                                                            e ? u.allies.get() : u.enemies.get(),
                                                            (e) => e.playerIndex === t,
                                                        );
                                                    }),
                                                    o = (0, Pe.Om)(() =>
                                                        Re(
                                                            u.singleTeamMode.get() ? u.enemies.get() : u.allies.get(),
                                                            (e) => e.isPersonal,
                                                        ),
                                                    ),
                                                    l = (0, Pe.Om)((e) => {
                                                        const u = i();
                                                        return (
                                                            !!u &&
                                                            (function (e, u, t) {
                                                                if (Array.isArray(e)) return e.reduce(u, t);
                                                                let a = t;
                                                                for (let t = 0; t < e.length; t++)
                                                                    a = u(a, ye(e, t), t, e);
                                                                return a;
                                                            })(
                                                                u.detailedStatistics,
                                                                (e, u) => e + 1 + u.details.length,
                                                                0,
                                                            ) > e
                                                        );
                                                    }),
                                                    c = (0, Pe.Om)(
                                                        () =>
                                                            Se(u.progressRewards.get(), (e) => {
                                                                return {
                                                                    name: e.name,
                                                                    image: me(e),
                                                                    value: e.value,
                                                                    special: e.overlayType,
                                                                    valueType:
                                                                        ((u = e.name),
                                                                        se.includes(u)
                                                                            ? ee.MULTI
                                                                            : ie.includes(u)
                                                                              ? ee.CURRENCY
                                                                              : oe.includes(u)
                                                                                ? ee.NUMBER
                                                                                : le.includes(u)
                                                                                  ? ee.PREMIUM_PLUS
                                                                                  : ee.STRING),
                                                                    tooltipArgs: Ee(
                                                                        { tooltipId: e.tooltipId },
                                                                        Number(e.tooltipContentId),
                                                                    ),
                                                                };
                                                                var u;
                                                            }),
                                                        { equals: Ce },
                                                    ),
                                                    d = (0, Pe.Om)((e) => {
                                                        const t = u.progress.get(),
                                                            a = t.previousPoints;
                                                        let r = t.maximumPoints;
                                                        if (!1 === t.isInUnlimitedProgression) {
                                                            var n;
                                                            const t = u.stageRequiredCounters.get(),
                                                                a = we(t, e - 1),
                                                                s = null != (n = we(t, e - 2)) ? n : 0;
                                                            void 0 === a || a < 0
                                                                ? console.warn(
                                                                      `Progression stage's required points have a value ${a} for stage number ${e}`,
                                                                  )
                                                                : (r = a - s);
                                                        }
                                                        return {
                                                            previous: { value: r, deltaFrom: a, maxValue: r },
                                                            fromZeroToEnd: { value: r, deltaFrom: 0, maxValue: r },
                                                        };
                                                    }),
                                                    m = (0, Pe.Om)(() => {
                                                        const e = u.progress.get(),
                                                            t = e.maximumPoints,
                                                            a = e.currentPoints,
                                                            r = e.earnedPoints;
                                                        return {
                                                            current: {
                                                                value: a,
                                                                deltaFrom: a - r < 0 ? 0 : a - r,
                                                                maxValue: t,
                                                            },
                                                            withoutAnimation: { value: a, deltaFrom: a, maxValue: t },
                                                        };
                                                    });
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        personalSquadIndex: r,
                                                        enemiesSorted: n,
                                                        alliesSorted: s,
                                                        selectedPlayer: i,
                                                        currentPlayer: o,
                                                        hasDetailedInfoScroll: l,
                                                        hasSquads: t,
                                                        activeSortingType: a,
                                                        progressionValues: m,
                                                        progressionValuesWithStageMaximum: d,
                                                        rewards: c,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: i,
                                                externalModel: s,
                                                observableModel: {
                                                    dict: (u) => {
                                                        const t = i(u),
                                                            a = Be.LO.box(t, { equals: Ce });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, Be.aD)((e) => a.set(e)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    array: (u, t) => {
                                                        const a = null != t ? t : i(u),
                                                            r = Be.LO.box(a, { equals: Ce });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, Be.aD)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const a = null != t ? t : i(u),
                                                            r = Be.LO.box(a, { equals: Ce });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, Be.aD)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const a = i(t);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (e, u) => ((e[u] = Be.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, Be.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                r[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = u,
                                                                n = Object.entries(r),
                                                                i = n.reduce(
                                                                    (e, [u, t]) => ((e[t] = Be.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, Be.aD)((e) => {
                                                                            n.forEach(([u, t]) => {
                                                                                i[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            m = { mode: e, model: d, externalModel: s, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && a ? a.controls(m) : u(m),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    d = (0, n.useRef)(!1),
                                    m = (0, n.useState)(e),
                                    E = m[0],
                                    _ = m[1],
                                    g = (0, n.useState)(() => c(e, a, i)),
                                    A = g[0],
                                    F = g[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        d.current ? F(c(E, a, i)) : (d.current = !0);
                                    }, [i, E, a]),
                                    (0, n.useEffect)(() => {
                                        _(e);
                                    }, [e]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (A.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [A],
                                    ),
                                    s().createElement(t.Provider, { value: A }, r)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(
                        0,
                        ({
                            externalModel: e,
                            model: {
                                currentTabId: u,
                                sortType: t,
                                sortDirection: a,
                                selectedTeam: r,
                                selectedPlayerId: n,
                                animationStatus: s,
                            },
                        }) =>
                            Object.assign(
                                {
                                    closeWindow: e.createCallbackNoArgs('onClose'),
                                    riseRewards: e.createCallbackNoArgs('premiumPlus.onPremiumXpBonusApplied'),
                                    changeTab: e.createCallback((e) => ({ tabId: e }), 'onTabChanged'),
                                    saveStatsSorting: e.createCallback(
                                        (e, u) => ({ column: e, sortDirection: u }),
                                        'teamStats.onStatsSorted',
                                    ),
                                },
                                (function (e) {
                                    const u = {};
                                    for (const t in e)
                                        if (Object.prototype.hasOwnProperty.call(e, t)) {
                                            const a = e[t];
                                            u[t] = (0, Be.aD)(a);
                                        }
                                    return u;
                                })({
                                    updateTeamTableSelectedPlayer: (e, u) => {
                                        (r.set(e), n.set(u));
                                    },
                                    updateTeamTableSorting: (e, u) => {
                                        (t.set(e), a.set(u));
                                    },
                                    updateCurrentTabId: (e) => {
                                        u.set(e);
                                    },
                                    setAnimationEnabled: (e) => {
                                        s.set(e);
                                    },
                                }),
                            ),
                    ),
                    eu = Je[0],
                    uu = Je[1],
                    tu = {
                        base: 'App_base_e5',
                        background: 'App_background_63',
                        background__team: 'App_background__team_b0',
                        bgDarken: 'App_bgDarken_79',
                        bgDarken__personal: 'App_bgDarken__personal_f7',
                        bgGlow: 'App_bgGlow_c4',
                        bgGlow__tie: 'App_bgGlow__tie_f1',
                        bgGlow__win: 'App_bgGlow__win_9d',
                        bgGlow__lose: 'App_bgGlow__lose_a4',
                        closeButton: 'App_closeButton_7f',
                        wrapper: 'App_wrapper_9d',
                        content: 'App_content_90',
                        footer: 'App_footer_35',
                        navigation: 'App_navigation_ee',
                        navigationItem: 'App_navigationItem_19',
                    };
                function au(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const ru = {
                        playHighlight() {
                            au('highlight');
                        },
                        playClick() {
                            au('play');
                        },
                        playYes() {
                            au('yes1');
                        },
                    },
                    nu = {
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
                let su, iu;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(su || (su = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(iu || (iu = {})));
                const ou = ({
                    children: e,
                    size: u,
                    disabled: t,
                    mixClass: a,
                    onMouseEnter: r,
                    onMouseMove: i,
                    onMouseDown: o,
                    onMouseUp: l,
                    onMouseLeave: c,
                    onClick: d,
                    isFocused: m = !1,
                    type: E = su.primary,
                    soundHover: _ = 'highlight',
                    soundClick: g = 'play',
                }) => {
                    const A = (0, n.useRef)(null),
                        D = (0, n.useState)(m),
                        p = D[0],
                        f = D[1],
                        b = (0, n.useState)(!1),
                        C = b[0],
                        B = b[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                p && null !== A.current && !A.current.contains(e.target) && f(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [p]),
                        (0, n.useEffect)(() => {
                            f(m);
                        }, [m]),
                        s().createElement(
                            'div',
                            {
                                ref: A,
                                className: F()(
                                    nu.base,
                                    nu[`base__${E}`],
                                    t && nu.base__disabled,
                                    u && nu[`base__${u}`],
                                    p && nu.base__focus,
                                    C && nu.base__highlightActive,
                                    a,
                                ),
                                onMouseEnter: function (e) {
                                    t || (null !== _ && au(_), r && r(e));
                                },
                                onMouseMove: function (e) {
                                    i && i(e);
                                },
                                onMouseUp: function (e) {
                                    t || (l && l(e), B(!1));
                                },
                                onMouseDown: function (e) {
                                    t ||
                                        (null !== g && au(g),
                                        o && o(e),
                                        m && (t || (A.current && (A.current.focus(), f(!0)))),
                                        B(!0));
                                },
                                onMouseLeave: function (e) {
                                    t || (c && c(e), B(!1));
                                },
                                onClick: function (e) {
                                    t || (d && d(e));
                                },
                            },
                            E !== su.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: nu.back }),
                                    s().createElement('span', { className: nu.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: F()(nu.state, nu.state__default) },
                                s().createElement('span', { className: nu.stateDisabled }),
                                s().createElement('span', { className: nu.stateHighlightHover }),
                                s().createElement('span', { className: nu.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: nu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                let lu;
                !(function (e) {
                    ((e.DayMonthNumeric = 'dayMonthNumeric'),
                        (e.DayMonthFull = 'dayMonthFull'),
                        (e.DayMonthFullTime = 'dayMonthFullTime'),
                        (e.DayMonthAbbreviated = 'dayMonthAbbreviated'),
                        (e.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
                        (e.ShortDate = 'shortDate'),
                        (e.ShortTime = 'ShortTime'),
                        (e.ShortDateTime = 'ShortDateTime'),
                        (e.FullDate = 'fullDate'),
                        (e.FullTime = 'fullTime'),
                        (e.FullDateTime = 'fullDateTime'));
                })(lu || (lu = {}));
                var cu = t(1281);
                let du;
                function mu(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(du || (du = {}));
                const Eu = (e) => e.replace(/&nbsp;/g, ' '),
                    _u = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    gu = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Au = (e, u, t = du.left) => e.split(u).reduce(t === du.left ? _u : gu, []),
                    Fu = (() => {
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    Du = ['zh_cn', 'zh_sg', 'zh_tw'];
                var pu = t(8613);
                const fu = (Date.now(), pu.Ew.getRegionalDateTime),
                    bu = pu.Ew.getFormattedDateTime,
                    Cu = (0, n.memo)(({ datetime: e, format: u = lu.ShortDate, isConvertedToLocal: t = !0 }) =>
                        Object.values(lu).includes(u) ? fu(e, u, t) : bu(e, u, t),
                    ),
                    Bu = ({ binding: e, text: u = '', classMix: t, alignment: a = du.left, formatWithBrackets: r }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const i = r && e ? ((o = e), u.replace(/\{\w+\}/g, (e) => String(o[e.slice(1, -1)]))) : u;
                        var o;
                        return s().createElement(
                            n.Fragment,
                            null,
                            i.split('\n').map((u, r) =>
                                s().createElement(
                                    'div',
                                    { className: F()('FormatText_base_d0', t), key: `${u}-${r}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            t && e in t
                                                ? t[e]
                                                : ((e, u = du.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return Du.includes(t)
                                                          ? Fu(e)
                                                          : 'ja' === t
                                                            ? (0, cu.D4)()
                                                                  .parse(e)
                                                                  .map((e) => Eu(e))
                                                            : ((e, u = du.left) => {
                                                                  let t = [];
                                                                  const a =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      r = Eu(e);
                                                                  return (
                                                                      Au(r, /( )/, u).forEach(
                                                                          (e) => (t = t.concat(Au(e, a, du.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(e, u);
                                                  })(e, u),
                                        ))(u, a, e).map((e, u) =>
                                        s().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    };
                let hu;
                !(function (e) {
                    ((e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220'));
                })(hu || (hu = {}));
                const vu = [
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
                function wu(e) {
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
                const yu = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: G.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    Su = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            E = e.decoratorId,
                            _ = void 0 === E ? 0 : E,
                            g = e.isEnabled,
                            A = void 0 === g || g,
                            F = e.targetId,
                            D = void 0 === F ? 0 : F,
                            p = e.onShow,
                            f = e.onHide,
                            b = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, vu);
                        const C = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            B = (0, n.useMemo)(
                                () =>
                                    D ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            a = R.invalid('resId'),
                                            r = '';
                                        var n;
                                        return (
                                            u &&
                                                ((r =
                                                    (null == (n = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : n[0]) ||
                                                    ''),
                                                (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (a = window.subViews[t].id)),
                                            { callerUrl: r, caller: t, stack: u, resId: a }
                                        );
                                    })().resId,
                                [D],
                            ),
                            h = (0, n.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (yu(t, _, { isMouseEvent: !0, on: !0, arguments: wu(a) }, B),
                                    p && p(),
                                    (C.current.isVisible = !0));
                            }, [t, _, a, B, p]),
                            v = (0, n.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        yu(t, _, { on: !1 }, B),
                                        C.current.isVisible && f && f(),
                                        (C.current.isVisible = !1));
                                }
                            }, [t, _, B, f]),
                            w = (0, n.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(C.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = C.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === A && v();
                            }, [A, v]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        (window.removeEventListener('mouseleave', v), v());
                                    }
                                ),
                                [v],
                            ),
                            A
                                ? (0, n.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((y = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          (clearTimeout(C.current.timeoutId),
                                                          (C.current.timeoutId = window.setTimeout(h, c ? 100 : 400)),
                                                          r && r(e),
                                                          y && y(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (v(), null == s || s(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === m && v(), null == o || o(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === m && v(), null == i || i(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          b,
                                      ),
                                  )
                                : u
                        );
                        var y;
                    },
                    Tu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ru() {
                    return (
                        (Ru =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ru.apply(this, arguments)
                    );
                }
                const Nu = R.views.common.tooltip_window.simple_tooltip_content,
                    Pu = (e) => {
                        let u = e.children,
                            t = e.body,
                            a = e.header,
                            r = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Tu);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: a, note: r, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, a, r, o]);
                        return s().createElement(
                            Su,
                            Ru(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? Nu.SimpleTooltipHtmlContent('resId') : Nu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    },
                    xu = (e) => {
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
                    },
                    Iu = ['content', 'classMix', 'className'];
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                const Ou = (e) => {
                        let u = e.content,
                            t = e.classMix,
                            a = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Iu);
                        const i = (0, n.useRef)(null),
                            o = (0, n.useState)(!0),
                            l = o[0],
                            c = o[1];
                        return (
                            (0, n.useEffect)(() =>
                                xu(() => {
                                    const e = i.current;
                                    e && e.offsetWidth >= e.scrollWidth && c(!1);
                                }),
                            ),
                            s().createElement(
                                Pu,
                                { isEnabled: l, body: u },
                                s().createElement(
                                    'div',
                                    ku({}, r, { ref: i, className: F()('TextOverflow_base_3b', a, t) }),
                                    u,
                                ),
                            )
                        );
                    },
                    Mu = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    Lu = { [hu.default]: 'c_24x24', [hu.x48]: 'c_48x48', [hu.x80]: 'c_80x80', [hu.x220]: 'c_220x220' },
                    Uu = ({ badgeID: e, size: u = hu.default, className: t }) => {
                        const a = R.images.gui.maps.icons.library.badges.$dyn(Lu[u]);
                        return s().createElement('div', {
                            className: F()(Mu.base, Mu[`base__${u}`], t),
                            style: { backgroundImage: `url(${a.$dyn(`badge_${e}`)})` },
                        });
                    },
                    Gu = {
                        base: 'PlayerNickname_base_32',
                        userName: 'PlayerNickname_userName_cc',
                        igrIcon: 'PlayerNickname_igrIcon_34',
                        base__default: 'PlayerNickname_base__default_8d',
                        base__x48: 'PlayerNickname_base__x48_84',
                        suffixBadgeWrapper: 'PlayerNickname_suffixBadgeWrapper_cc',
                        suffixBadgeStripe: 'PlayerNickname_suffixBadgeStripe_8a',
                        base__inverted: 'PlayerNickname_base__inverted_34',
                        suffixBadge: 'PlayerNickname_suffixBadge_bd',
                        anonymizedIcon: 'PlayerNickname_anonymizedIcon_80',
                    },
                    Hu = (0, n.memo)(({ tooltipHeaderName: e }) => {
                        const u = (0, n.useMemo)(
                                () => mu(R.strings.tooltips.anonymizer.teamStats.header(), { name: e }),
                                [e],
                            ),
                            t = R.strings.tooltips.anonymizer.teamStats.body();
                        return s().createElement(
                            Pu,
                            { header: u, body: t },
                            s().createElement('div', { className: Gu.anonymizedIcon }),
                        );
                    });
                function $u() {
                    return (
                        ($u =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        $u.apply(this, arguments)
                    );
                }
                const Wu = { [hu.default]: 'c_64x24', [hu.x48]: 'c_68x28' },
                    zu = { [hu.default]: 'c_48x48', [hu.x48]: 'c_48x48' },
                    Vu = ({
                        userName: e,
                        clanAbbrev: u = '',
                        igrType: t = 0,
                        badge: a = { badgeID: '' },
                        suffixBadge: r = { badgeID: '' },
                        isInverted: i = !1,
                        isFakeNameVisible: o = !1,
                        isAnonymizerShown: l = !1,
                        hiddenUserName: c = '',
                        size: d = hu.default,
                        userNameClassName: m = '',
                        clanTagClassName: E = '',
                    }) => {
                        const _ = R.images.gui.maps.icons.library.badges.strips.$dyn(Wu[d]),
                            g = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${_.$dyn(`strip_${r.badgeID}`)})` }),
                                [r, _],
                            ),
                            A = R.images.gui.maps.icons.library.badges.$dyn(zu[d]),
                            D = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${A.$dyn(`badge_${r.badgeID}`)})` }),
                                [r, A],
                            ),
                            p = u ? `[${u}]` : '',
                            f = F()(Gu.base, Gu[`base__${d}`], i && Gu.base__inverted),
                            b = F()(Gu.userName, m),
                            C = F()(Gu.clanTag, E),
                            B = e !== c,
                            h = o ? `${c}${p}` : c,
                            v = Boolean(a.badgeID) && s().createElement(Uu, $u({ size: d }, a, { key: 'badge' })),
                            w = Date.now(),
                            y = [
                                v,
                                [
                                    s().createElement(
                                        'div',
                                        { className: b, key: 'userName' },
                                        s().createElement(Ou, { content: e, key: w }),
                                    ),
                                    !o && Boolean(p) && s().createElement('div', { className: C, key: 'clanTag' }, p),
                                ],
                                0 !== t && s().createElement('div', { className: Gu.igrIcon, key: 'igrType' }),
                                Boolean(r.badgeID) &&
                                    s().createElement(
                                        'div',
                                        { className: Gu.suffixBadgeWrapper, key: 'suffixBadge' },
                                        s().createElement('div', { className: Gu.suffixBadgeStripe, style: g }),
                                        s().createElement('div', { className: Gu.suffixBadge, style: D }),
                                    ),
                                l && B && s().createElement(Hu, { tooltipHeaderName: h, key: 'anonymizer' }),
                            ];
                        return s().createElement('div', { className: f }, i ? y.reverse() : y);
                    };
                let ju;
                var qu;
                (((qu = ju || (ju = {})).Base = '#ced9d9'),
                    (qu.Killed = '#8c8c7e'),
                    (qu.Highlighted = '#feab34'),
                    (qu.KilledHighlighted = '#b58136'),
                    (qu.TeamKiller = '#09e2ff'),
                    (qu.KilledTeamKiller = '#0c8fa0'),
                    (qu.DetailedInfoPlayerBase = '#f2f2f7'));
                const Xu = ['isTeamKiller'],
                    Ku = (e) => {
                        let u = e.isTeamKiller,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Xu);
                        return u
                            ? t.isKilled
                                ? ju.KilledTeamKiller
                                : ju.TeamKiller
                            : (({ isPersonal: e, isSameSquad: u, isKilled: t }) =>
                                  e || u ? (t ? ju.KilledHighlighted : ju.Highlighted) : t ? ju.Killed : ju.Base)(t);
                    },
                    Yu = ['isTeamKiller', 'isKilled', 'isPersonal', 'isSameSquad'],
                    Zu = (e) => {
                        let u = e.isTeamKiller,
                            t = e.isKilled,
                            a = e.isPersonal,
                            r = e.isSameSquad,
                            i = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Yu);
                        const o = Ku({ isTeamKiller: u, isKilled: t, isPersonal: a, isSameSquad: r }),
                            l = (0, n.useMemo)(() => ({ color: o }), [o]);
                        return s().createElement('div', { style: l }, s().createElement(Vu, i));
                    },
                    Qu = 'Footer_top_2c',
                    Ju = 'Footer_bottom_d1',
                    et = 'Footer_killer_b8',
                    ut = 'Footer_dot_be',
                    tt = R.strings.battle_results.common.vehicleState,
                    at = R.strings.fun_battle_results,
                    rt = (0, z.Pi)(() => {
                        const e = uu(),
                            u = e.model,
                            t = e.controls.closeWindow,
                            a = u.currentTabId.get() === Qe,
                            r = u.battleInfo.get(),
                            i = r.subModeAssetsPointer,
                            o = r.arenaName,
                            l = r.battleStartTime,
                            c = r.battleDuration,
                            d = r.finishReason,
                            m = u.userStatus.get(),
                            E = m.deathReason,
                            _ = m.isLeftBattle,
                            g = u.user.get(),
                            A = u.killer.get(),
                            D = !_ && g.isKilled,
                            p = X(null, { assetsPointer: i, isSubMode: !0 }).dynamicTexts;
                        return (
                            W(t),
                            s().createElement(
                                'div',
                                { className: F()('Footer_base_68', a && 'Footer_base__teams_44') },
                                s().createElement(
                                    'div',
                                    { className: 'Footer_left_2f' },
                                    s().createElement(
                                        'div',
                                        { className: Qu },
                                        p.capsUserName(),
                                        s().createElement('div', { className: ut }),
                                        systemLocale.toUpperCase(o),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: Ju },
                                        s().createElement('div', null, at.finish()),
                                        s().createElement(
                                            'div',
                                            { className: 'Footer_accent_a7' },
                                            s().createElement(Cu, { datetime: l + c, format: lu.ShortDateTime }),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'Footer_button_de' },
                                    s().createElement(
                                        ou,
                                        { type: su.primary, size: iu.medium, onClick: t },
                                        s().createElement(Bu, { text: at.continueBtn() }),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'Footer_right_cd' },
                                    s().createElement('div', { className: Qu }, systemLocale.toUpperCase(d)),
                                    s().createElement(
                                        'div',
                                        { className: Ju },
                                        D
                                            ? s().createElement(
                                                  'div',
                                                  { className: et },
                                                  tt.$dyn(`dead${E}`),
                                                  A.userName !== g.userName &&
                                                      s().createElement(
                                                          n.Fragment,
                                                          null,
                                                          s().createElement(Bu, {
                                                              text: R.strings.common.common.nbsp(),
                                                          }),
                                                          s().createElement(Zu, A),
                                                      ),
                                              )
                                            : s().createElement(
                                                  'div',
                                                  { className: et },
                                                  tt.$dyn(_ ? 'prematureLeave' : 'alive'),
                                              ),
                                        s().createElement('div', { className: ut }),
                                        s().createElement(
                                            'div',
                                            { className: 'Footer_player_5f' },
                                            s().createElement(Zu, g),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    nt = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let st, it;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(st || (st = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(it || (it = {})));
                const ot = ({ size: e = st.Default }) => {
                        const u = F()(nt.background, nt[`background__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    lt = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    ct = ({ size: e }) => {
                        const u = F()(lt.base, lt[`base__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    dt = {
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
                    mt = (0, n.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: r, withoutBounce: n }) => {
                            const i = F()(
                                    dt.base,
                                    dt[`base__${e}`],
                                    t && dt.base__disabled,
                                    r && dt.base__finished,
                                    n && dt.base__withoutBounce,
                                ),
                                o = !t && !r;
                            return s().createElement(
                                'div',
                                { className: i, style: a, ref: u },
                                s().createElement('div', { className: dt.pattern }),
                                s().createElement('div', { className: dt.gradient }),
                                o && s().createElement(ct, { size: e }),
                            );
                        },
                    ),
                    Et = (e, u) => {
                        let t;
                        const a = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(a));
                        };
                    };
                let _t, gt;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(_t || (_t = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(gt || (gt = {})));
                const At = (e) => (e ? { left: 0 } : { right: 0 }),
                    Ft = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    Dt = (e) => ({ transitionDuration: `${e}ms` }),
                    pt = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: r,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const d = i < a,
                                m = (0, n.useState)(_t.Idle),
                                E = m[0],
                                _ = m[1],
                                g = E === _t.End,
                                A = E === _t.Idle,
                                D = E === _t.Grow,
                                p = E === _t.Shrink,
                                f = (0, n.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                ),
                                b = (0, n.useCallback)(
                                    (e, u) =>
                                        Et(() => {
                                            f(e);
                                        }, u),
                                    [f],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return A
                                        ? b(_t.Grow, u)
                                        : D
                                          ? b(_t.Shrink, e)
                                          : p
                                            ? b(_t.End, e)
                                            : void (g && o && o());
                            }, [b, t, g, D, A, p, o, u, e]);
                            const C = (0, n.useMemo)(() => Object.assign({ width: '100%' }, Dt(e), At(d)), [d, e]),
                                B = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Dt(e), At(d)), [d, e]),
                                h = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Ft(d, a), Dt(e)), [a, d, e]),
                                v = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - a)}%` }, Ft(d, a), Dt(e)),
                                    [a, d, i, e],
                                );
                            if (g) return null;
                            const w = F()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                d && 0 === i && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return s().createElement(
                                'div',
                                { style: A ? h : v, className: w },
                                s().createElement(
                                    'div',
                                    { style: p ? B : C, className: 'ProgressBarDeltaGrow_glow_68' },
                                    s().createElement(ct, { size: r }),
                                ),
                            );
                        },
                    ),
                    ft = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: r,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < t,
                                m = (0, n.useState)(!1),
                                E = m[0],
                                _ = m[1],
                                g = (0, n.useCallback)(
                                    (e) => {
                                        (e === _t.Shrink && _(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                A = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                F = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(mt, {
                                    size: u,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: i,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: E ? F : A,
                                }),
                                t >= 0 &&
                                    s().createElement(pt, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: g,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    bt = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: r,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < a,
                                d = (0, n.useState)(gt.Idle),
                                m = d[0],
                                E = d[1],
                                _ = m === gt.In,
                                g = m === gt.End,
                                A = m === gt.Idle,
                                F = (0, n.useCallback)(
                                    (e) => {
                                        (E(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, n.useEffect)(() => {
                                if (A && !t)
                                    return Et(() => {
                                        F(gt.In);
                                    }, u);
                            }, [F, t, A, u]),
                                (0, n.useEffect)(() => {
                                    if (_)
                                        return Et(() => {
                                            (o && o(), F(gt.End));
                                        }, e + u);
                                }, [F, _, o, u, e]));
                            const D = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                p = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                f = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(a - i)}%`, left: `${c ? i : a}%` }),
                                    [a, c, i],
                                );
                            return g
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: f },
                                      s().createElement(
                                          'div',
                                          { style: A ? D : p, className: 'ProgressBarDeltaSimple_delta_99' },
                                          s().createElement(ct, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    Ct = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: r,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, n.useMemo)(
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
                                s().createElement(mt, {
                                    size: u,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: i,
                                    baseStyles: d,
                                }),
                                t >= 0 &&
                                    s().createElement(bt, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Bt = ['onComplete', 'onEndAnimation'];
                function ht() {
                    return (
                        (ht =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ht.apply(this, arguments)
                    );
                }
                const vt = (0, n.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Bt);
                        const r = (0, n.useState)(!1),
                            i = r[0],
                            o = r[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== i && o(e), e && u && u(), t && t());
                            }, [i, u, t, a.to]);
                        switch (a.animationSettings.type) {
                            case it.Simple:
                                return s().createElement(Ct, ht({}, a, { onEndAnimation: l, isComplete: i }));
                            case it.Growing:
                                return s().createElement(ft, ht({}, a, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    wt = ({ size: e, value: u, lineRef: t, disabled: a, onComplete: r }) => {
                        const i = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            o = 100 === u;
                        return (
                            (0, n.useEffect)(() => {
                                o && r && r();
                            }, [o, r]),
                            s().createElement(mt, { size: e, disabled: a, baseStyles: i, isComplete: o, lineRef: t })
                        );
                    },
                    yt = ['onEndAnimation'];
                function St() {
                    return (
                        (St =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        St.apply(this, arguments)
                    );
                }
                const Tt = (0, n.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, yt);
                    const a = (0, n.useRef)({}),
                        r = (0, n.useCallback)(() => {
                            ((a.current.from = void 0), u && u());
                        }, [u]),
                        i = 'number' == typeof a.current.from ? a.current.from : t.from;
                    return (
                        (a.current.from = i),
                        s().createElement(
                            vt,
                            St({}, t, {
                                onEndAnimation: r,
                                key: `${i}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                                from: i,
                            }),
                        )
                    );
                });
                function Rt() {
                    return (
                        (Rt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Rt.apply(this, arguments)
                    );
                }
                const Nt = (0, n.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: a,
                            deltaFrom: r,
                            additionalKey: n,
                            animationSettings: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (r === u)
                                return s().createElement(wt, {
                                    key: `${r}-${u}-${n}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: a,
                                    onComplete: c,
                                });
                            const d = {
                                from: r,
                                to: u,
                                size: e,
                                additionalKey: n,
                                lineRef: t,
                                disabled: a,
                                animationSettings: i,
                                onComplete: c,
                                onEndAnimation: o,
                                onChangeAnimationState: l,
                            };
                            return i.withStack
                                ? s().createElement(Tt, d)
                                : s().createElement(vt, Rt({ key: `${r}-${u}-${n}` }, d));
                        },
                    ),
                    Pt = (e) => {
                        var u, t, a, r, n, s, i, o, l, c, d, m, E, _, g, A, F, D, p, f;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (u = null == (t = e.bg) ? void 0 : t.height) ? u : '12rem',
                            '--progress-bg-height-small':
                                null != (a = null == (r = e.bg) ? void 0 : r.heightSmall) ? a : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (n = e.line.filter) ? n : 'none',
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
                                null != (d = null == (m = e.glowSettings) ? void 0 : m.width) ? d : '60rem',
                            '--progress-glow-height':
                                null != (E = null == (_ = e.glowSettings) ? void 0 : _.height) ? E : '100rem',
                            '--progress-glow-small-width':
                                null != (g = null == (A = e.glowSettings) ? void 0 : A.smallWidth) ? g : '44rem',
                            '--progress-glow-small-height':
                                null != (F = null == (D = e.glowSettings) ? void 0 : D.smallHeight) ? F : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (p = null == (f = e.glowSettings) ? void 0 : f.mixBlendMode) ? p : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
                    xt = (e, u, t) => (t < e ? e : t > u ? u : t),
                    It = (e, u, t) => ('number' == typeof t ? (xt(0, u, t) / u) * 100 : e),
                    kt = {
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
                    Ot = {
                        freezed: !1,
                        withStack: !1,
                        type: it.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Mt = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = kt,
                            size: t = st.Default,
                            animationSettings: a = Ot,
                            disabled: r = !1,
                            withoutBackground: i = !1,
                            value: o,
                            deltaFrom: l,
                            additionalKey: c,
                            lineRef: d,
                            onChangeAnimationState: m,
                            onEndAnimation: E,
                            onComplete: _,
                            className: g,
                        }) => {
                            const A = (function (e, u, t) {
                                return (0, n.useMemo)(() => {
                                    const a = (xt(0, u, e) / u) * 100;
                                    return { value: a, deltaFrom: It(a, u, t) };
                                }, [t, u, e]);
                            })(o, e, l);
                            return s().createElement(
                                'div',
                                { className: F()(nt.base, g, nt[`base__${t}`]), style: Pt(u) },
                                !i && s().createElement(ot, { size: t }),
                                s().createElement(Nt, {
                                    size: t,
                                    lineRef: d,
                                    disabled: r,
                                    value: A.value,
                                    deltaFrom: A.deltaFrom,
                                    additionalKey: c,
                                    animationSettings: a,
                                    onEndAnimation: E,
                                    onChangeAnimationState: m,
                                    onComplete: _,
                                }),
                            );
                        },
                    ),
                    Lt = {
                        blackReal: 'FormatTextWithColorTags_blackReal_3c',
                        whiteReal: 'FormatTextWithColorTags_whiteReal_8a',
                        white: 'FormatTextWithColorTags_white_16',
                        whiteOrange: 'FormatTextWithColorTags_whiteOrange_18',
                        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_10',
                        par: 'FormatTextWithColorTags_par_ca',
                        parSecondary: 'FormatTextWithColorTags_parSecondary_8d',
                        parTertiary: 'FormatTextWithColorTags_parTertiary_a3',
                        red: 'FormatTextWithColorTags_red_60',
                        redDark: 'FormatTextWithColorTags_redDark_03',
                        yellow: 'FormatTextWithColorTags_yellow_ad',
                        orange: 'FormatTextWithColorTags_orange_e4',
                        cream: 'FormatTextWithColorTags_cream_cd',
                        brown: 'FormatTextWithColorTags_brown_c8',
                        greenBright: 'FormatTextWithColorTags_greenBright_f0',
                        green: 'FormatTextWithColorTags_green_c5',
                        greenDark: 'FormatTextWithColorTags_greenDark_af',
                        blueBooster: 'FormatTextWithColorTags_blueBooster_ac',
                        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_6f',
                        cred: 'FormatTextWithColorTags_cred_4e',
                        gold: 'FormatTextWithColorTags_gold_90',
                        bond: 'FormatTextWithColorTags_bond_71',
                        prom: 'FormatTextWithColorTags_prom_dd',
                        parNoWidth: 'FormatTextWithColorTags_parNoWidth_5a',
                    },
                    Ut = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Gt = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Ht = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    $t = (0, n.memo)(({ text: e, binding: u, classMix: t }) => {
                        const a = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            r = (0, n.useMemo)(() => u || {}, [u]);
                        let i = Ut.exec(e),
                            o = e,
                            l = 0;
                        for (; i; ) {
                            const t = i[0],
                                n = Gt.exec(t),
                                c = Ht.exec(t),
                                d = i[1];
                            if (n && c) {
                                const e = n[0],
                                    i = e + l++ + e;
                                ((o = o.replace(t, `%(${i})`)),
                                    (r[i] = Lt[e]
                                        ? s().createElement(
                                              'span',
                                              { className: Lt[e] },
                                              s().createElement(Bu, { text: d, binding: u }),
                                          )
                                        : s().createElement(
                                              'span',
                                              { style: a(e) },
                                              s().createElement(Bu, { text: d, binding: u }),
                                          )));
                            }
                            i = Ut.exec(e);
                        }
                        return s().createElement(Bu, { text: o, classMix: t, binding: r });
                    });
                const Wt = {
                        freezed: !1,
                        withStack: !1,
                        type: it.Growing,
                        delta: { duration: 2e3, delay: 100 },
                        line: { duration: 2e3, delay: 100 },
                    },
                    zt = ['children'];
                function Vt() {
                    return (
                        (Vt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Vt.apply(this, arguments)
                    );
                }
                const jt = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, zt);
                    return s().createElement(
                        Su,
                        Vt(
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
                function qt() {
                    return (
                        (qt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        qt.apply(this, arguments)
                    );
                }
                const Xt = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const a = s().createElement('div', { className: t }, e);
                        if (u.header || u.body) return s().createElement(Pu, u, a);
                        const r = u.contentId;
                        return r ? s().createElement(Su, qt({}, u, { contentId: r }), a) : s().createElement(jt, u, a);
                    },
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
                    Yt = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = J.Big,
                        special: r,
                        value: n,
                        valueType: i,
                        title: o,
                        style: l,
                        className: c,
                        classNames: d,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: E,
                    }) => {
                        const _ = ((e, u) => {
                                if (void 0 === u || !_e.includes(e)) return null;
                                switch (u) {
                                    case ue.BATTLE_BOOSTER:
                                    case ue.BATTLE_BOOSTER_REPLACE:
                                        return te.BATTLE_BOOSTER;
                                }
                            })(a, r),
                            g = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ue.BATTLE_BOOSTER:
                                        return ae.BATTLE_BOOSTER;
                                    case ue.BATTLE_BOOSTER_REPLACE:
                                        return ae.BATTLE_BOOSTER_REPLACE;
                                    case ue.BUILT_IN_EQUIPMENT:
                                        return ae.BUILT_IN_EQUIPMENT;
                                    case ue.EQUIPMENT_PLUS:
                                        return ae.EQUIPMENT_PLUS;
                                    case ue.EQUIPMENT_TROPHY_BASIC:
                                        return ae.EQUIPMENT_TROPHY_BASIC;
                                    case ue.EQUIPMENT_TROPHY_UPGRADED:
                                        return ae.EQUIPMENT_TROPHY_UPGRADED;
                                    case ue.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ae.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ue.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ae.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ue.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ae.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ue.PROGRESSION_STYLE_UPGRADED_1:
                                        return ae.PROGRESSION_STYLE_UPGRADED_1;
                                    case ue.PROGRESSION_STYLE_UPGRADED_2:
                                        return ae.PROGRESSION_STYLE_UPGRADED_2;
                                    case ue.PROGRESSION_STYLE_UPGRADED_3:
                                        return ae.PROGRESSION_STYLE_UPGRADED_3;
                                    case ue.PROGRESSION_STYLE_UPGRADED_4:
                                        return ae.PROGRESSION_STYLE_UPGRADED_4;
                                    case ue.PROGRESSION_STYLE_UPGRADED_5:
                                        return ae.PROGRESSION_STYLE_UPGRADED_5;
                                    case ue.PROGRESSION_STYLE_UPGRADED_6:
                                        return ae.PROGRESSION_STYLE_UPGRADED_6;
                                    case ue.ATTACHMENT_RARE:
                                        return ae.ATTACHMENT_RARE;
                                    case ue.ATTACHMENT_EPIC:
                                        return ae.ATTACHMENT_EPIC;
                                    case ue.ATTACHMENT_LEGENDARY:
                                        return ae.ATTACHMENT_LEGENDARY;
                                }
                            })(r),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case ee.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case ee.CURRENCY:
                                    case ee.NUMBER:
                                        return s().createElement(Y, { format: 'integral', value: Number(e) });
                                    case ee.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(n, i);
                        return s().createElement(
                            'div',
                            {
                                className: F()(Kt.base, Kt[`base__${a}`], ne.includes(e) && Kt.base__normalize, c),
                                style: l,
                            },
                            s().createElement(
                                Xt,
                                { tooltipArgs: m, className: Kt.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: F()(Kt.image, null == d ? void 0 : d.image) },
                                        _ &&
                                            s().createElement('div', {
                                                className: F()(Kt.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${_}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: F()(Kt.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        g &&
                                            s().createElement('div', {
                                                className: F()(Kt.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${g}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: F()(
                                                    Kt.info,
                                                    Kt[`info__${e}`],
                                                    i === ee.MULTI && Kt.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            A,
                                        ),
                                    o && s().createElement('div', { className: Kt.title }, o),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    Xt,
                                    { tooltipArgs: E },
                                    s().createElement('div', {
                                        className: F()(Kt.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Zt = 'Rewards_checkmark_c6';
                function Qt() {
                    return (
                        (Qt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Qt.apply(this, arguments)
                    );
                }
                const Jt = ({
                        data: e,
                        size: u = J.Big,
                        count: t,
                        classMix: a,
                        rewardItemClassMix: r,
                        boxRewardTooltip: i,
                        boxRewardValue: o,
                    }) => {
                        const l = (0, n.useMemo)(
                                () => (t && t < e.length ? `R.images.gui.maps.icons.quests.bonuses.${u}.default` : ''),
                                [t, e.length, u],
                            ),
                            c =
                                o ||
                                mu(R.strings.tooltips.quests.awards.additional.bottom(), {
                                    count: e.length - (t || 0),
                                }),
                            d = F()('Rewards_base_86', a),
                            m = F()('Rewards_reward_3c', r);
                        return s().createElement(
                            'div',
                            { className: d },
                            l
                                ? s().createElement(
                                      s().Fragment,
                                      null,
                                      e
                                          .slice(0, t)
                                          .map((e, t) =>
                                              s().createElement(
                                                  'div',
                                                  { key: t, className: m },
                                                  s().createElement(Yt, Qt({ size: u }, e)),
                                                  s().createElement('div', { className: Zt }),
                                              ),
                                          ),
                                      s().createElement(
                                          'div',
                                          { className: m },
                                          s().createElement(Yt, {
                                              name: 'more',
                                              image: l,
                                              size: u,
                                              value: c,
                                              tooltipArgs: i,
                                              className: 'Rewards_item_cf',
                                              classNames: { image: 'Rewards_image_e9' },
                                          }),
                                          s().createElement('div', { className: Zt }),
                                      ),
                                  )
                                : e.map((e, t) =>
                                      s().createElement(
                                          'div',
                                          { key: t, className: m },
                                          s().createElement(Yt, Qt({ size: u }, e)),
                                          s().createElement('div', { className: Zt }),
                                      ),
                                  ),
                        );
                    },
                    ea = {
                        base: 'Progress_base_81',
                        title: 'Progress_title_be',
                        description: 'Progress_description_d5',
                        bar: 'Progress_bar_b5',
                        counter: 'Progress_counter_d1',
                        currentCount: 'Progress_currentCount_e3',
                        slash: 'Progress_slash_fe',
                        value: 'Progress_value_4f',
                        footer: 'Progress_footer_bd',
                        rewards: 'Progress_rewards_30',
                        header: 'Progress_header_16',
                        reward: 'Progress_reward_78',
                        infiniteIcon: 'Progress_infiniteIcon_4d',
                    },
                    ua = R.strings.fun_battle_results.progress,
                    ta = (0, z.Pi)(() => {
                        const e = uu(),
                            u = e.model,
                            t = e.controls,
                            a = u.progress.get(),
                            r = a.description,
                            i = a.assetsPointer,
                            l = a.currentStage,
                            c = a.maximumStage,
                            d = a.isInUnlimitedProgression,
                            m = a.previousStage,
                            E = a.earnedPoints,
                            _ = X(null, { assetsPointer: i }).dynamicTexts,
                            g = l !== m,
                            A = g
                                ? u.computes.progressionValuesWithStageMaximum(m).previous
                                : u.computes.progressionValues().current,
                            F = (function () {
                                const e = (0, n.useRef)(!0);
                                var u;
                                return (
                                    (u = () => {
                                        e.current = !1;
                                    }),
                                    (0, n.useEffect)(u, []),
                                    e.current
                                );
                            })(),
                            D = u.animationStatus.get(),
                            p = (0, n.useState)(D ? A : u.computes.progressionValues().withoutAnimation),
                            f = p[0],
                            b = p[1],
                            C = (0, n.useState)(g ? m : l),
                            B = C[0],
                            h = C[1];
                        return (
                            (0, n.useEffect)(() => {
                                if ((D && o.O.sound.play.sound('ev_fep_pb_start'), F)) return;
                                const e = (0, Be.EH)(() => {
                                    b(
                                        B < l
                                            ? u.computes.progressionValuesWithStageMaximum(B).fromZeroToEnd
                                            : u.computes.progressionValues().current,
                                    );
                                });
                                return () => e();
                            }, [l, u.computes, B, D, F]),
                            s().createElement(
                                'div',
                                { className: ea.base },
                                s().createElement(
                                    'div',
                                    { className: ea.header },
                                    s().createElement(
                                        'div',
                                        { className: ea.title },
                                        s().createElement($t, {
                                            text: d ? ua.unlimitedProgression.title() : ua.title(),
                                            binding: { modeName: _.userName(), done: D ? B : l, total: d ? '' : c },
                                        }),
                                    ),
                                    s().createElement('div', { className: ea.description }, r),
                                ),
                                s().createElement(
                                    'div',
                                    { className: ea.bar },
                                    s().createElement(Mt, {
                                        animationSettings: Wt,
                                        size: st.Default,
                                        deltaFrom: f.deltaFrom,
                                        value: f.value,
                                        maxValue: f.maxValue,
                                        additionalKey: B,
                                        onChangeAnimationState: (e) => {
                                            e === gt.End &&
                                                (o.O.sound.play.sound('ev_fep_pb_stop'),
                                                B < l ? h(B + 1) : t.setAnimationEnabled(!1));
                                        },
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: ea.footer },
                                    s().createElement(
                                        'div',
                                        { className: ea.counter },
                                        s().createElement('div', { className: ea.currentCount }, f.value),
                                        s().createElement(
                                            'div',
                                            { className: ea.slash },
                                            s().createElement(Bu, { text: R.strings.common.common.slash() }),
                                        ),
                                        s().createElement('div', { className: ea.total }, f.maxValue),
                                    ),
                                    s().createElement(Jt, {
                                        classMix: ea.rewards,
                                        data: u.computes.rewards(),
                                        size: J.Small,
                                        count: u.computes.rewards().length > 4 ? 3 : void 0,
                                        boxRewardTooltip: {
                                            contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                            args: { showCount: 4 },
                                        },
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: ea.value },
                                        E > 0 ? mu(R.strings.common.plusValue(), { value: E }) : E,
                                    ),
                                ),
                            )
                        );
                    });
                let aa;
                !(function (e) {
                    ((e.UNDEFINED = 'undefined'),
                        (e.MUL = 'mul'),
                        (e.ADD = 'add'),
                        (e.SUB = 'sub'),
                        (e.PROCENT = 'procent'),
                        (e.SHOW_NEGATIVE_IMPACT = 'showNegativeImpact'));
                })(aa || (aa = {}));
                const ra = {
                        base: 'Profit_base_51',
                        base__big: 'Profit_base__big_52',
                        base__large: 'Profit_base__large_70',
                        icon: 'Profit_icon_75',
                        'icon__tankmenXP-small': 'Profit_icon__tankmenXP-small_3f',
                        'icon__tankmenXP-big': 'Profit_icon__tankmenXP-big_a7',
                        'icon__tankmenXP-large': 'Profit_icon__tankmenXP-large_ef',
                        'icon__credits-small': 'Profit_icon__credits-small_5d',
                        base__small: 'Profit_base__small_4e',
                        'icon__credits-big': 'Profit_icon__credits-big_02',
                        'icon__credits-large': 'Profit_icon__credits-large_6b',
                        'icon__gold-small': 'Profit_icon__gold-small_87',
                        'icon__gold-big': 'Profit_icon__gold-big_d4',
                        'icon__gold-large': 'Profit_icon__gold-large_b8',
                        'icon__crystal-small': 'Profit_icon__crystal-small_8d',
                        'icon__crystal-big': 'Profit_icon__crystal-big_74',
                        'icon__crystal-large': 'Profit_icon__crystal-large_6f',
                        'icon__multyXp-small': 'Profit_icon__multyXp-small_34',
                        'icon__multyFreeXp-small': 'Profit_icon__multyFreeXp-small_cc',
                        'icon__xp-small': 'Profit_icon__xp-small_88',
                        'icon__xp-big': 'Profit_icon__xp-big_7f',
                        'icon__xp-large': 'Profit_icon__xp-large_37',
                        'icon__freeXP-small': 'Profit_icon__freeXP-small_26',
                        'icon__freeXP-big': 'Profit_icon__freeXP-big_36',
                        'icon__freeXP-large': 'Profit_icon__freeXP-large_b0',
                        value: 'Profit_value_c4',
                        value__notEnough: 'Profit_value__notEnough_0f',
                    },
                    na = (e, u) =>
                        (function (e, u) {
                            for (let t = 0; t < e.length; t++) if (ye(e, t) === u) return !0;
                            return !1;
                        })(u, e),
                    sa = ({ type: e, value: u, showPlus: t, size: a, modifiers: r = [] }) =>
                        s().createElement(
                            'span',
                            { className: F()(ra.base, ra[`base__${a}`]) },
                            s().createElement(
                                'span',
                                {
                                    className: F()(
                                        ra.value,
                                        ra[`value__${e}`],
                                        (u < 0 || na(aa.SHOW_NEGATIVE_IMPACT, r)) && ra.value__notEnough,
                                    ),
                                },
                                (t || na(aa.ADD, r)) && u > 0 && '+',
                                na(aa.MUL, r) && R.strings.common.multiplier(),
                                Number.isInteger(u) ? s().createElement(Y, { value: u }) : u,
                                na(aa.PROCENT, r) && R.strings.common.common.percent(),
                            ),
                            s().createElement('span', { className: F()(ra.icon, ra[`icon__${e}-${a}`]) }),
                        ),
                    ia = ({ type: e, value: u }) => {
                        const t = B();
                        return s().createElement(
                            Su,
                            {
                                contentId:
                                    R.views.fun_random.lobby.tooltips.FunRandomBattleResultsEconomicTooltipView(
                                        'resId',
                                    ),
                                args: { currencyType: e },
                            },
                            s().createElement(
                                'div',
                                { className: 'Reward_base_1a' },
                                s().createElement(sa, {
                                    type: e,
                                    value: u,
                                    size: [f.Large, f.ExtraLarge].includes(t.mediaSize) ? 'large' : 'big',
                                }),
                            ),
                        );
                    },
                    oa = { base: 'RewardList_base_bc' },
                    la = (0, z.Pi)(() => {
                        const e = uu().model.rewards.get();
                        return s().createElement(
                            'div',
                            { className: oa.base },
                            Se(e, (e, u) =>
                                s().createElement('div', { className: oa.item, key: u }, s().createElement(ia, e)),
                            ),
                        );
                    }),
                    ca = (e = 0, u = 1, t, a, r = !1) => {
                        const s = (0, n.useState)(e),
                            i = s[0],
                            o = s[1];
                        return (
                            (0, n.useEffect)(() => {
                                o(e);
                            }, [e]),
                            (0, n.useEffect)(() => {
                                const n = Date.now(),
                                    s = setInterval(() => {
                                        const u = e + (r ? 1 : -1) * Math.floor((Date.now() - n) / 1e3);
                                        void 0 !== t && (r ? u >= t : u <= t)
                                            ? (o(t), a && a(), clearInterval(s))
                                            : o(u);
                                    }, 1e3 * u);
                                return () => {
                                    clearInterval(s);
                                };
                            }, [e, u, t, a, r]),
                            i
                        );
                    },
                    da = ({
                        className: e,
                        hourFormat: u = R.strings.quests.general.countdown.timer_hrs(),
                        minuteFormat: t = R.strings.quests.general.countdown.timer_min(),
                        roundUpHours: a = !1,
                        startingSeconds: r = 0,
                        refreshRate: n = 1,
                        onFinish: i,
                        targetTime: o,
                        useTimeUpdateHook: l = ca,
                        isCountUp: c = !1,
                    }) => {
                        const d = l(r, n, o, i, c),
                            m = Math.abs(d) < 3600 ? t : u;
                        return s().createElement(
                            'span',
                            { className: e },
                            ((e, u, t) => {
                                const a = u < 0,
                                    r = Math.abs(u),
                                    n = Math.floor(r / 86400).toString(),
                                    s = Math.floor(r / 3600).toString(),
                                    i = Math.floor((r % 3600) / 60).toString(),
                                    o = Math.floor(r % 60).toString(),
                                    l = e
                                        .replace('%D', n.padStart(1, '0'))
                                        .replace('%HH', s.padStart(2, '0'))
                                        .replace('%H', t && Number(i) >= 30 ? (Number(s) + 1).toString() : s)
                                        .replace('%MM', i.padStart(2, '0'))
                                        .replace('%M', i.toString())
                                        .replace('%SS', o.padStart(2, '0'))
                                        .replace('%S', o);
                                return a ? `-${l}` : l;
                            })(m, d, a),
                        );
                    };
                let ma, Ea, _a, ga, Aa;
                var Fa, Da, pa;
                let fa;
                (!(function (e) {
                    ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                })(ma || (ma = {})),
                    (function (e) {
                        ((e[(e.Equipped = 0)] = 'Equipped'),
                            (e[(e.Locked = 1)] = 'Locked'),
                            (e[(e.Open = 2)] = 'Open'));
                    })(Ea || (Ea = {})),
                    ((pa = _a || (_a = {})).Engraving = 'engraving'),
                    (pa.Background = 'background'),
                    (pa.All = 'all'),
                    ((Da = ga || (ga = {})).Dedication = 'dedication'),
                    (Da.Skill = 'skill'),
                    (Da.RankedSkill = 'ranked_skill'),
                    (Da.Triumph = 'triumph'),
                    (Da.Medal = 'triumph_medal'),
                    (Da.Base = 'base'),
                    ((Fa = Aa || (Aa = {})).Dedication = 'dedication'),
                    (Fa.Triumph = 'triumph'),
                    (Fa.Season = 'season'),
                    Aa.Dedication,
                    ga.Dedication,
                    Aa.Triumph,
                    ga.Triumph,
                    Aa.Season,
                    ga.Skill,
                    ga.RankedSkill,
                    (function (e) {
                        ((e.NUMBER = 'NUMBER'), (e.PERCENTAGE = 'PERCENTAGE'));
                    })(fa || (fa = {})),
                    R.images.gui.maps.icons.dogtags,
                    R.strings.dogtags.component,
                    ma.Engraving,
                    ma.Background,
                    ma.Engraving,
                    ma.Background);
                const ba = (e, u = fa.NUMBER) => {
                    const t = G.Z5.getRealFormat(e, G.Gr.WO_ZERO_DIGITS).replace(/\s/g, ' ');
                    return u === fa.PERCENTAGE ? `${t} %` : t;
                };
                let Ca, Ba;
                (!(function (e) {
                    ((e[(e.NoRestriction = 0)] = 'NoRestriction'),
                        (e[(e.IsApplied = 1)] = 'IsApplied'),
                        (e[(e.InvalidBattleType = 2)] = 'InvalidBattleType'),
                        (e[(e.IsNotVictory = 3)] = 'IsNotVictory'),
                        (e[(e.DeprecatedResults = 4)] = 'DeprecatedResults'),
                        (e[(e.NoVehicle = 5)] = 'NoVehicle'),
                        (e[(e.NoCrew = 6)] = 'NoCrew'),
                        (e[(e.FasterEducationCrewNotActive = 7)] = 'FasterEducationCrewNotActive'),
                        (e[(e.FasterEducationCrewActive = 8)] = 'FasterEducationCrewActive'),
                        (e[(e.NotApplyingError = 9)] = 'NotApplyingError'));
                })(Ca || (Ca = {})),
                    (function (e) {
                        ((e[(e.PremiumInfo = 0)] = 'PremiumInfo'),
                            (e[(e.PremiumBonus = 1)] = 'PremiumBonus'),
                            (e[(e.PremiumEarnings = 2)] = 'PremiumEarnings'),
                            (e[(e.PremiumAdvertising = 3)] = 'PremiumAdvertising'),
                            (e[(e.PlusInfo = 4)] = 'PlusInfo'),
                            (e[(e.PlusEarnings = 5)] = 'PlusEarnings'),
                            (e[(e.PlusYouRock = 6)] = 'PlusYouRock'));
                    })(Ba || (Ba = {})));
                const ha = 'Upgrade_icon_32',
                    va = 'Upgrade_error_2b';
                let wa;
                !(function (e) {
                    ((e[(e.IsNotVictory = Ca.IsNotVictory)] = 'IsNotVictory'),
                        (e[(e.DeprecatedResults = Ca.DeprecatedResults)] = 'DeprecatedResults'),
                        (e[(e.NoVehicle = Ca.NoVehicle)] = 'NoVehicle'),
                        (e[(e.NoCrew = Ca.NoCrew)] = 'NoCrew'),
                        (e[(e.FasterEducationCrewNotActive = Ca.FasterEducationCrewNotActive)] =
                            'FasterEducationCrewNotActive'),
                        (e[(e.FasterEducationCrewActive = Ca.FasterEducationCrewActive)] =
                            'FasterEducationCrewActive'));
                })(wa || (wa = {}));
                const ya = R.strings.fun_battle_results.ribbon,
                    Sa = [Ca.IsApplied, Ca.NotApplyingError, Ca.IsNotVictory],
                    Ta = [Ca.IsApplied, Ca.NoRestriction],
                    Ra = (0, z.Pi)(() => {
                        const e = uu(),
                            u = e.model,
                            t = e.controls,
                            a = u.premiumPlus.get(),
                            r = a.nextBonusTime,
                            n = a.xpDiff,
                            i = a.restriction,
                            o = a.bonusMultiplier,
                            l = a.leftBonusCount,
                            c = a.isUndefinedLeftBonusCount,
                            d = !Sa.includes(i),
                            m = Ta.includes(i),
                            E = i === Ca.IsNotVictory,
                            _ = i === Ca.NoRestriction && (l > 0 || c),
                            g = () => {
                                _ && t.riseRewards();
                            };
                        return s().createElement(
                            'div',
                            { className: F()('Upgrade_base_25', _ && 'Upgrade_base__column_02') },
                            s().createElement('div', { className: 'Upgrade_highlight_44' }),
                            _ &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: 'Upgrade_flash_e0' }),
                                    s().createElement('div', {
                                        className: 'Upgrade_multiplier_81',
                                        style: {
                                            backgroundImage: `url(${R.images.fun_random.gui.maps.icons.feature.battle_results.ribbon.multiplaers.$dyn('x' + String(o))})`,
                                        },
                                    }),
                                ),
                            r > 0 && !E
                                ? s().createElement(
                                      'div',
                                      { className: 'Upgrade_timerWrapper_6a' },
                                      s().createElement('div', { className: 'Upgrade_timerText_27' }, ya.timeLeft()),
                                      s().createElement(
                                          'div',
                                          { className: F()('Upgrade_state_ee', 'Upgrade_state__timer_2d') },
                                          s().createElement('div', { className: F()(ha, 'Upgrade_icon__timer_eb') }),
                                          s().createElement(da, {
                                              startingSeconds: r,
                                              refreshRate: 1,
                                              targetTime: 0,
                                              hourFormat: '%HH:%MM:%SS',
                                              className: 'Upgrade_timer_06',
                                          }),
                                      ),
                                  )
                                : s().createElement(
                                      s().Fragment,
                                      null,
                                      (() => {
                                          switch (i) {
                                              case Ca.NotApplyingError:
                                                  return s().createElement(
                                                      'div',
                                                      { className: va },
                                                      s().createElement('div', {
                                                          className: F()(ha, 'Upgrade_icon__attention_a6'),
                                                      }),
                                                      s().createElement('span', null, ya.errorState()),
                                                  );
                                              case Ca.IsApplied:
                                                  return s().createElement(
                                                      s().Fragment,
                                                      null,
                                                      s().createElement('div', { className: 'Upgrade_accepter_0d' }),
                                                      s().createElement(
                                                          'div',
                                                          { className: 'Upgrade_applied_b3' },
                                                          ya.applied(),
                                                      ),
                                                  );
                                              case Ca.NoRestriction:
                                                  return s().createElement(
                                                      'div',
                                                      {
                                                          className: F()(
                                                              'Upgrade_button_d7',
                                                              d && 'Upgrade_button__cursor_eb',
                                                          ),
                                                          onClick: g,
                                                      },
                                                      s().createElement(
                                                          'div',
                                                          {
                                                              className: F()(
                                                                  'Upgrade_content_a5',
                                                                  'Upgrade_content__normal_7d',
                                                              ),
                                                          },
                                                          s().createElement(Bu, {
                                                              text: ya.expBonus(),
                                                              classMix: 'Upgrade_defaultState_a0',
                                                              binding: {
                                                                  count: ba(n),
                                                                  icon: s().createElement('img', {
                                                                      className: 'Upgrade_xpIcon_df',
                                                                      src: 'R.images.gui.maps.icons.library.XpIcon_1',
                                                                      alt: 'bubble',
                                                                  }),
                                                              },
                                                          }),
                                                      ),
                                                  );
                                              default:
                                                  return s().createElement(
                                                      'div',
                                                      { className: va },
                                                      s().createElement('div', {
                                                          className: F()(ha, 'Upgrade_icon__information_50'),
                                                      }),
                                                      s().createElement(
                                                          'span',
                                                          null,
                                                          R.strings.fun_battle_results.premiumBonus.$dyn(wa[i]),
                                                      ),
                                                  );
                                          }
                                      })(),
                                  ),
                            l >= 0 &&
                                m &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    !_ && s().createElement('div', { className: 'Upgrade_devider_63' }),
                                    s().createElement(
                                        'div',
                                        { className: 'Upgrade_usesLeft_a2' },
                                        s().createElement(Bu, {
                                            text: ya.usesLeft(),
                                            binding: {
                                                count: s().createElement(
                                                    'div',
                                                    { className: 'Upgrade_points_73' },
                                                    i === Ca.NotApplyingError || c ? R.strings.common.common.dash() : l,
                                                ),
                                            },
                                        }),
                                    ),
                                ),
                        );
                    }),
                    Na = {
                        base: 'Ribbon_base_51',
                        base__upgradable: 'Ribbon_base__upgradable_36',
                        ribbon: 'Ribbon_ribbon_03',
                        ribbon__win: 'Ribbon_ribbon__win_b4',
                        ribbon__prem: 'Ribbon_ribbon__prem_92',
                        ribbon__lose: 'Ribbon_ribbon__lose_0f',
                        ribbon__lose_prem: 'Ribbon_ribbon__lose_prem_97',
                        ribbon__draw: 'Ribbon_ribbon__draw_0e',
                        ribbon__draw_prem: 'Ribbon_ribbon__draw_prem_80',
                        upgrade: 'Ribbon_upgrade_13',
                        icon: 'Ribbon_icon_d4',
                        icon__1: 'Ribbon_icon__1_95',
                        icon__2: 'Ribbon_icon__2_71',
                        icon__3: 'Ribbon_icon__3_28',
                        icon__4: 'Ribbon_icon__4_f2',
                        icon__5: 'Ribbon_icon__5_30',
                    },
                    Pa = (0, z.Pi)(() => {
                        const e = uu().model,
                            u = e.battleInfo.get().winStatus,
                            t = e.premiumPlus.get(),
                            a = t.hasPremium,
                            r = t.isXpBonusEnabled,
                            n = 'win' === u;
                        return s().createElement(
                            'div',
                            { className: F()(Na.base, r && Na.base__upgradable) },
                            s().createElement('div', {
                                className: F()(
                                    Na.ribbon,
                                    n && (a ? Na.ribbon__prem : Na.ribbon__win),
                                    !n && (a ? Na.ribbon__lose_prem : Na.ribbon__lose),
                                ),
                            }),
                            s().createElement(la, null),
                            s().createElement('div', { className: Na.shadow }),
                            r && s().createElement('div', { className: Na.upgrade }, s().createElement(Ra, null)),
                        );
                    }),
                    xa = R.images.gui.maps.icons.vehicle;
                function Ia(e) {
                    const u = xa.c_420x307.$dyn(e.toLowerCase());
                    return u
                        ? { backgroundImage: `url(${u})` }
                        : { backgroundImage: `url(${xa.c_420x307.default_image()})` };
                }
                function ka(e, u) {
                    const t = xa.$dyn(
                        (function (e, u) {
                            return `${e}_${u}`.replace('-', '_');
                        })(u, e),
                    );
                    return t ? { backgroundImage: `url(${t})` } : { backgroundImage: `url(${xa.noImage()})` };
                }
                function Oa(e, u, t = '') {
                    var a;
                    return t && '' !== t ? (null != (a = null == e ? void 0 : e.$dyn(t)) ? a : u.$dyn(t)) : null;
                }
                function Ma(e, u, t = [], a, r) {
                    return u <= 0 && t.includes(e) ? Oa(a.empty, r.empty, e) : u;
                }
                const La = R.images.fun_random.gui.maps.icons.feature.battle_results.stat_list.big,
                    Ua = ({ paramType: e, value: u, assetsPointer: t }) => {
                        var a;
                        const r = X('efficiency', {
                                poFileName: 'fun_battle_results',
                                assetsPointer: t,
                                isSubMode: !0,
                            }),
                            i = r.staticTexts,
                            o = r.dynamicTexts,
                            l = null == (a = K(t, !0).battle_results) ? void 0 : a.stat_list.big,
                            c = (0, n.useContext)(Ye),
                            d = c.personalEfficiencyEmptyReplace,
                            m = c.statItemValueFormatter;
                        return s().createElement(
                            Su,
                            {
                                contentId: R.views.lobby.tooltips.BattleResultsStatsTooltipView('resId'),
                                args: { paramType: e },
                            },
                            s().createElement(
                                'div',
                                { className: 'StatItem_base_11' },
                                s().createElement('div', {
                                    className: 'StatItem_statImage_27',
                                    style: { backgroundImage: `url(${Oa(l, La, e)})` },
                                }),
                                s().createElement('div', { className: 'StatItem_statText_7b' }, m(e, u, d, o, i)),
                                s().createElement(
                                    'div',
                                    { className: 'StatItem_titleText_ed' },
                                    s().createElement(Bu, { classMix: 'StatItem_text_37', text: Oa(o, i, e) }),
                                ),
                            ),
                        );
                    };
                function Ga() {
                    return (
                        (Ga =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ga.apply(this, arguments)
                    );
                }
                const Ha = (0, z.Pi)(() => {
                        const e = uu().model,
                            u = e.efficiency.get(),
                            t = e.battleInfo.get().subModeAssetsPointer;
                        return s().createElement(
                            'div',
                            { className: 'StatList_base_58' },
                            Se(u, (e, u) =>
                                s().createElement(
                                    'div',
                                    { className: 'StatList_item_0e', key: u },
                                    s().createElement(Ua, Ga({}, e, { assetsPointer: t })),
                                ),
                            ),
                        );
                    }),
                    $a = {
                        base: 'PersonalTab_base_09',
                        content: 'PersonalTab_content_1f',
                        header: 'PersonalTab_header_6d',
                        ribbon: 'PersonalTab_ribbon_da',
                        statistics: 'PersonalTab_statistics_7d',
                        progress: 'PersonalTab_progress_ca',
                        title: 'PersonalTab_title_f9',
                    },
                    Wa = R.strings.fun_battle_results.result,
                    za = (0, z.Pi)(() => {
                        const e = uu().model,
                            u = e.battleInfo.get().winStatus,
                            t = e.efficiency.get(),
                            a = e.rewards.get(),
                            r = e.progress.get().hasProgress;
                        return s().createElement(
                            'div',
                            { className: $a.base },
                            s().createElement(
                                'div',
                                { className: $a.content },
                                s().createElement(
                                    'div',
                                    { className: F()($a.header, $a[`header__${u}`]) },
                                    s().createElement('div', { className: $a.title }, Wa.$dyn(u)),
                                ),
                                t.length >= 3 &&
                                    s().createElement('div', { className: $a.statistics }, s().createElement(Ha, null)),
                                a.length > 0 &&
                                    s().createElement('div', { className: $a.ribbon }, s().createElement(Pa, null)),
                                r && s().createElement('div', { className: $a.progress }, s().createElement(ta, null)),
                            ),
                        );
                    }),
                    Va = [];
                function ja(e) {
                    const u = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, u.current)(...e), Va)
                    );
                }
                const qa = (0, n.createContext)(null);
                function Xa() {
                    const e = (0, n.useContext)(qa);
                    if (null === e) throw new Error('You can use tabs hooks only with Tabs component');
                    return e;
                }
                const Ka = {
                    base: 'Switch_base_22',
                    base__inactive: 'Switch_base__inactive_ae',
                    base__active: 'Switch_base__active_17',
                    highlight: 'Switch_highlight_33',
                    border: 'Switch_border_3a',
                    border__left: 'Switch_border__left_b2',
                    border__right: 'Switch_border__right_93',
                    separator: 'Switch_separator_f2',
                    separator__left: 'Switch_separator__left_40',
                    separator__right: 'Switch_separator__right_bf',
                };
                function Ya() {
                    return (
                        (Ya =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ya.apply(this, arguments)
                    );
                }
                const Za = s().forwardRef(function (e, u) {
                        let t = Ya({}, e);
                        return s().createElement('div', Ya({ className: 'Switcher_base_2f', ref: u }, t));
                    }),
                    Qa = (e) => {
                        const u = e.active,
                            t = e.children,
                            a = e.onActiveChange,
                            r = (0, n.useState)(u),
                            i = r[0],
                            o = r[1],
                            l = ja((e) => {
                                null == a || a(e);
                            }),
                            c = (0, n.useMemo)(() => ({ active: i, change: o }), [i]);
                        return (
                            (0, n.useLayoutEffect)(() => {
                                o(u);
                            }, [u]),
                            (0, n.useEffect)(() => {
                                u !== i && a && l(i);
                            }, [i, u, l, a]),
                            s().createElement(qa.Provider, { value: c }, t)
                        );
                    };
                ((Qa.Switcher = Za),
                    (Qa.Switch = ({ tabId: e, children: u }) => {
                        const t = Xa();
                        return s().createElement(
                            'div',
                            {
                                className: F()(
                                    Ka.base,
                                    Ka['base__' + ((r = t.active === e), r ? 'active' : 'inactive')],
                                ),
                                onClick: () => t.change(e),
                            },
                            s().createElement('div', {
                                className: F()(
                                    Ka.separator,
                                    Ka['separator__' + ((a = t.active < e), a ? 'right' : 'left')],
                                ),
                            }),
                            t.active === e &&
                                s().createElement(
                                    n.Fragment,
                                    null,
                                    s().createElement('div', { className: Ka.highlight }),
                                    s().createElement('div', { className: F()(Ka.border, Ka.border__left) }),
                                    s().createElement('div', { className: F()(Ka.border, Ka.border__right) }),
                                ),
                            u,
                        );
                        var a, r;
                    }),
                    (Qa.Content = ({ children: e }) => {
                        const u = Xa();
                        return s().createElement(n.Fragment, { key: u.active }, e(u.active));
                    }));
                const Ja = 'LifeStatus_killer_4b',
                    er = R.strings.battle_results.common.vehicleState,
                    ur = ({ player: e }) => {
                        const u = e.userStatus,
                            t = u.isLeftBattle,
                            a = u.deathReason,
                            r = u.killer,
                            i = e.userNames,
                            o = i.userName,
                            l = i.isKilled,
                            c = t && e.isPersonal ? er.prematureLeave() : er.alive();
                        return s().createElement(
                            'div',
                            { className: 'LifeStatus_base_03' },
                            !t && l
                                ? s().createElement(
                                      'div',
                                      { className: Ja },
                                      er.$dyn(`dead${a}`),
                                      r.userName !== o &&
                                          s().createElement(
                                              n.Fragment,
                                              null,
                                              s().createElement(Bu, { text: R.strings.common.common.nbsp() }),
                                              s().createElement(Zu, r),
                                          ),
                                  )
                                : s().createElement('div', { className: Ja }, c),
                        );
                    };
                function tr(e, u, t = []) {
                    const a = (0, n.useRef)(0),
                        r = (0, n.useCallback)(() => window.clearInterval(a.current), t || []);
                    (0, n.useEffect)(() => r, [r]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, n.useCallback)((t) => {
                            ((a.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, s),
                        r,
                    ];
                }
                function ar(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                var rr = t(7030);
                let nr;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(nr || (nr = {}));
                const sr = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    ir = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: a,
                        getWrapperSize: r,
                        forceTriggerMouseMove: s,
                    }) => {
                        const i = (e, t) => {
                            const a = u(e),
                                r = a[0],
                                n = a[1];
                            return n <= r ? 0 : xt(r, n, t);
                        };
                        return (o = {}) => {
                            const l = o.settings,
                                c = void 0 === l ? sr : l,
                                d = (0, n.useRef)(null),
                                m = (0, n.useRef)(null),
                                E = (0, n.useRef)(!1),
                                _ = (() => {
                                    const e = (0, n.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        a = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (
                                                var a,
                                                    r = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return ar(e, u);
                                                                    var t = Object.prototype.toString
                                                                        .call(e)
                                                                        .slice(8, -1);
                                                                    return (
                                                                        'Object' === t &&
                                                                            e.constructor &&
                                                                            (t = e.constructor.name),
                                                                        'Map' === t || 'Set' === t
                                                                            ? Array.from(e)
                                                                            : 'Arguments' === t ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    t,
                                                                                )
                                                                              ? ar(e, u)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (u && e && 'number' == typeof e.length)
                                                        ) {
                                                            t && (e = t);
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
                                                    })(u(e).values());
                                                !(a = r()).done;
                                            )
                                                (0, a.value)(...t);
                                        };
                                    return (0, n.useMemo)(() => ({ on: t, off: a, trigger: r }), []);
                                })(),
                                g = (function (e, u, t) {
                                    const a = (0, n.useMemo)(
                                        () =>
                                            (function (e, u, t, a) {
                                                let r,
                                                    n = !1,
                                                    s = 0;
                                                function i() {
                                                    r && clearTimeout(r);
                                                }
                                                function o(...o) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function d() {
                                                        ((s = Date.now()), t.apply(l, o));
                                                    }
                                                    n ||
                                                        (a && !r && d(),
                                                        i(),
                                                        void 0 === a && c > e
                                                            ? d()
                                                            : !0 !== u &&
                                                              (r = setTimeout(
                                                                  a
                                                                      ? function () {
                                                                            r = void 0;
                                                                        }
                                                                      : d,
                                                                  void 0 === a ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((a = t), (t = u), (u = void 0)),
                                                    (o.cancel = function () {
                                                        (i(), (n = !0));
                                                    }),
                                                    o
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return ((0, n.useEffect)(() => a.cancel, [a]), a);
                                })(
                                    () => {
                                        s && s();
                                    },
                                    [],
                                    150,
                                ),
                                A = (0, rr.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), _.trigger('change', e), s && E.current && g());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                F = A[0],
                                D = A[1],
                                p = (0, n.useCallback)(
                                    (e, u, t) => {
                                        var a;
                                        const r = F.scrollPosition.get(),
                                            n = (null != (a = F.scrollPosition.goal) ? a : 0) - r;
                                        return i(e, u * t + n + r);
                                    },
                                    [F.scrollPosition],
                                ),
                                f = (0, n.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            D.start({
                                                scrollPosition: i(a, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(a, F.scrollPosition.get()) },
                                            });
                                    },
                                    [D, c.animationConfig, F.scrollPosition],
                                ),
                                b = (0, n.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const a = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            n = p(u, e, a);
                                        f(n);
                                    },
                                    [f, p, c.step],
                                ),
                                C = (0, n.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && b(a(e)),
                                            d.current && _.trigger('mouseWheel', e, F.scrollPosition, u(d.current)));
                                    },
                                    [F.scrollPosition, b, _],
                                ),
                                B = ((e, u = []) => {
                                    const t = (0, n.useRef)(),
                                        a = (0, n.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
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
                                        xu(() => {
                                            const e = d.current;
                                            e &&
                                                (f(i(e, F.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [f, F.scrollPosition.goal],
                                ),
                                h = ja(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = i(e, F.scrollPosition.goal);
                                    (u !== F.scrollPosition.goal && f(u, { immediate: !0 }),
                                        _.trigger('recalculateContent'));
                                });
                            return (
                                (0, n.useEffect)(
                                    () => (
                                        window.addEventListener('resize', B),
                                        () => {
                                            window.removeEventListener('resize', B);
                                        }
                                    ),
                                    [B],
                                ),
                                (0, n.useEffect)(() => {
                                    const e = d.current;
                                    if (!e || !s) return;
                                    const u = () => {
                                            E.current = !0;
                                        },
                                        t = () => {
                                            E.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', u),
                                        e.addEventListener('mouseleave', t),
                                        () => {
                                            (e.removeEventListener('mouseenter', u),
                                                e.removeEventListener('mouseleave', t));
                                        }
                                    );
                                }, [d]),
                                (0, n.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                        getContainerSize: () => (d.current ? e(d.current) : void 0),
                                        getBounds: () =>
                                            d.current
                                                ? u(d.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: c.step.clampedArrowStepTimeout,
                                        clampPosition: i,
                                        handleMouseWheel: C,
                                        applyScroll: f,
                                        applyStepTo: b,
                                        contentRef: d,
                                        wrapperRef: m,
                                        scrollPosition: D,
                                        animationScroll: F,
                                        recalculateContent: h,
                                        events: { on: _.on, off: _.off },
                                    }),
                                    [F.scrollPosition, f, b, _.off, _.on, h, C, D, c.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    or = ir({
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
                        getDirection: (e) => (e.deltaY > 1 ? nr.Next : nr.Prev),
                        forceTriggerMouseMove: o.O.view.forceTriggerMouseMove,
                    }),
                    lr = 'HorizontalBar_base__active_5e',
                    cr = 'disable',
                    dr = { pending: !1, offset: 0 },
                    mr = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Er = () => {},
                    _r = (e, u) => Math.max(20, e.offsetWidth * u),
                    gr = (0, n.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = mr, onDrag: a = Er }) => {
                        const r = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            m = e.stepTimeout || 100,
                            E = (0, n.useState)(dr),
                            _ = E[0],
                            g = E[1],
                            A = (0, n.useCallback)(
                                (e) => {
                                    (g(e),
                                        d.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [a],
                            ),
                            D = () => {
                                const u = c.current,
                                    t = d.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && u && t && r)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / r),
                                    o = xt(0, 1, n / (r - a)),
                                    m = (u.offsetWidth - _r(u, s)) * o;
                                ((t.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return (
                                                    i.current.classList.add(cr),
                                                    void l.current.classList.remove(cr)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(cr),
                                                    void l.current.classList.add(cr)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(cr), l.current.classList.remove(cr));
                                        }
                                    })(m));
                            },
                            p = ja(() => {
                                ((() => {
                                    const u = d.current,
                                        t = c.current,
                                        a = e.getWrapperSize(),
                                        n = e.getContainerSize();
                                    if (!(n && u && a && t)) return;
                                    const s = Math.min(1, a / n);
                                    ((u.style.width = `${_r(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 !== s ? r.current.classList.add(lr) : r.current.classList.remove(lr)));
                                })(),
                                    D());
                            });
                        ((0, n.useEffect)(() => xu(p)),
                            (0, n.useEffect)(
                                () =>
                                    xu(() => {
                                        const u = () => {
                                            D();
                                        };
                                        let t = Er;
                                        const a = () => {
                                            (t(), (t = xu(p)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', p),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', p),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', a));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, n.useEffect)(() => {
                                if (!_.pending) return;
                                const u = o.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const n = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!n || !s) return;
                                        const i = c.current,
                                            o = d.current;
                                        if (!i || !o) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - _.offset - i.getBoundingClientRect().x,
                                            m = (l / i.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: m }));
                                    }),
                                    t = o.O.client.events.mouse.up(() => {
                                        (u(), A(dr));
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, _.offset, _.pending, a, A]));
                        const f = tr((u) => e.applyStepTo(u), m, [e]),
                            b = f[0],
                            C = f[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const B = (e) => {
                            e.target.classList.contains(cr) || au('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: F()('HorizontalBar_base_49', u.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: F()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(cr) || 0 !== e.button || (au('play'), b(nr.Next));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: B,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: F()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const a = d.current;
                                        a &&
                                            0 === u.button &&
                                            (au('play'),
                                            u.target === a
                                                ? A({ pending: !0, offset: u.screenX - a.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const a = d.current,
                                                          r = e.contentRef.current;
                                                      if (!a || !r) return;
                                                      const n = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + n * u);
                                                  })(u.screenX > a.getBoundingClientRect().x ? nr.Prev : nr.Next));
                                    },
                                    ref: c,
                                    onMouseEnter: B,
                                },
                                s().createElement('div', { ref: d, className: F()('HorizontalBar_thumb_fd', u.thumb) }),
                                s().createElement('div', { className: F()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: F()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(cr) || 0 !== e.button || (au('play'), b(nr.Prev));
                                },
                                onMouseUp: C,
                                ref: l,
                                onMouseEnter: B,
                            }),
                        );
                    }),
                    Ar = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Fr = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: r,
                        classNames: i,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, n.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: F()(Ar.base, e.base) });
                            }, [a]),
                            m = (0, n.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: F()(Ar.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: F()(Ar.defaultScrollArea, r) },
                                s().createElement(Dr, { className: o, api: m, classNames: i }, e),
                            ),
                            s().createElement(gr, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    Dr = ({ api: e, className: u, classNames: t, children: a }) => (
                        (0, n.useEffect)(() => xu(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: F()(Ar.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: F()(Ar.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: F()(Ar.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                ((Dr.Bar = gr), (Dr.Default = Fr));
                const pr = ir({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? nr.Next : nr.Prev),
                    }),
                    fr = 'VerticalBar_base__active_72',
                    br = 'disable',
                    Cr = () => {},
                    Br = { pending: !1, offset: 0 },
                    hr = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    vr = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    wr = (e, u) => Math.max(20, e.offsetHeight * u),
                    yr = (0, n.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = hr, onDrag: a = Cr }) => {
                        const r = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            m = e.stepTimeout || 100,
                            E = (0, n.useState)(Br),
                            _ = E[0],
                            g = E[1],
                            A = (0, n.useCallback)(
                                (e) => {
                                    (g(e),
                                        d.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [a],
                            ),
                            D = ja(() => {
                                const u = d.current,
                                    t = c.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && n && u && t)) return;
                                const s = Math.min(1, a / n);
                                return (
                                    (u.style.height = `${wr(t, s)}px`),
                                    (u.style.display = 'flex'),
                                    r.current &&
                                        (1 !== s ? r.current.classList.add(fr) : r.current.classList.remove(fr)),
                                    s
                                );
                            }),
                            p = ja(() => {
                                const u = c.current,
                                    t = d.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && u && t && r)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / r),
                                    o = xt(0, 1, n / (r - a)),
                                    m = (u.offsetHeight - wr(u, s)) * o;
                                ((t.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    i.current.classList.add(br),
                                                    void l.current.classList.remove(br)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(br),
                                                    void l.current.classList.add(br)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(br), l.current.classList.remove(br));
                                        }
                                    })(m));
                            }),
                            f = ja(() => {
                                vr(e, () => {
                                    (D(), p());
                                });
                            });
                        ((0, n.useEffect)(() => xu(f)),
                            (0, n.useEffect)(() => {
                                const u = () => {
                                    vr(e, () => {
                                        p();
                                    });
                                };
                                let t = Cr;
                                const a = () => {
                                    (t(), (t = xu(f)));
                                };
                                return (
                                    e.events.on('recalculateContent', f),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', f),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', a));
                                    }
                                );
                            }, [e]),
                            (0, n.useEffect)(() => {
                                if (!_.pending) return;
                                const u = o.O.client.events.mouse.up(() => {
                                        A(Br);
                                    }),
                                    t = o.O.client.events.mouse.move(([u]) => {
                                        vr(e, (t) => {
                                            const r = c.current,
                                                n = d.current,
                                                s = e.getContainerSize();
                                            if (!r || !n || !s) return;
                                            const i = u.screenY - _.offset - r.getBoundingClientRect().y,
                                                o = (i / r.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: n, thumbOffset: i, contentOffset: o }));
                                        });
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, _.offset, _.pending, a, A]));
                        const b = tr((u) => e.applyStepTo(u), m, [e]),
                            C = b[0],
                            B = b[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', B, !0),
                                () => document.removeEventListener('mouseup', B, !0)
                            ),
                            [B],
                        );
                        const h = (e) => {
                            e.target.classList.contains(br) || au('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: F()('VerticalBar_base_f3', u.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: F()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(br) || 0 !== e.button || (au('play'), C(nr.Next));
                                },
                                ref: i,
                                onMouseEnter: h,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: F()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const a = d.current;
                                        var r;
                                        a &&
                                            0 === u.button &&
                                            (au('play'),
                                            u.target === a
                                                ? A({ pending: !0, offset: u.screenY - a.getBoundingClientRect().y })
                                                : ((r = u.screenY > a.getBoundingClientRect().y ? nr.Prev : nr.Next),
                                                  d.current &&
                                                      vr(e, (u) => {
                                                          if (!u) return;
                                                          const a = t(e),
                                                              n = e.clampPosition(u, u.scrollTop + a * r);
                                                          e.applyScroll(n);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: h,
                                },
                                s().createElement('div', { ref: d, className: F()('VerticalBar_thumb_32', u.thumb) }),
                                s().createElement('div', { className: F()('VerticalBar_rail_43', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: F()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(br) || 0 !== e.button || (au('play'), C(nr.Prev));
                                },
                                onMouseUp: B,
                                ref: l,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    Sr = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Tr = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: r,
                        scrollClassName: i,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, n.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: F()(Sr.base, e.base) });
                            }, [a]),
                            m = (0, n.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: F()(Sr.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: F()(Sr.area, r) },
                                s().createElement(Rr, { className: i, classNames: o, api: m }, e),
                            ),
                            s().createElement(yr, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    Rr = ({ className: e, classNames: u, children: t, api: a }) => (
                        (0, n.useEffect)(() => xu(a.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: F()(Sr.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: F()(Sr.content, null == u ? void 0 : u.content), ref: a.contentRef },
                                t,
                            ),
                        )
                    );
                Rr.Default = Tr;
                const Nr = { Vertical: r, Horizontal: a },
                    Pr = {
                        row: 'StatisticsInfoRow_row_6e',
                        row__subgroup: 'StatisticsInfoRow_row__subgroup_7c',
                        separator: 'StatisticsInfoRow_separator_1b',
                        description: 'StatisticsInfoRow_description_5e',
                        icon: 'StatisticsInfoRow_icon_98',
                    };
                let xr, Ir;
                (!(function (e) {
                    ((e[(e.Integer = 0)] = 'Integer'), (e[(e.Float = 1)] = 'Float'), (e[(e.Time = 2)] = 'Time'));
                })(xr || (xr = {})),
                    (function (e) {
                        ((e.Shots = 'shots'),
                            (e.Hits = 'hits'),
                            (e.ExplosionHits = 'explosionHits'),
                            (e.DamageDealt = 'damageDealt'),
                            (e.SniperDamageDealt = 'sniperDamageDealt'),
                            (e.DirectHitsReceived = 'directHitsReceived'),
                            (e.PiercingsReceived = 'piercingsReceived'),
                            (e.NoDamageDirectHitsReceived = 'noDamageDirectHitsReceived'),
                            (e.ExplosionHitsReceived = 'explosionHitsReceived'),
                            (e.DamageBlockedByArmor = 'damageBlockedByArmor'),
                            (e.TeamHitsDamage = 'teamHitsDamage'),
                            (e.Spotted = 'spotted'),
                            (e.DamagedKilled = 'damagedKilled'),
                            (e.DamageAssisted = 'damageAssisted'),
                            (e.DamageAssistedSelf = 'damageAssistedSelf'),
                            (e.StunDuration = 'stunDuration'),
                            (e.DamageAssistedStun = 'damageAssistedStun'),
                            (e.DamageAssistedStunSelf = 'damageAssistedStunSelf'),
                            (e.StunNum = 'stunNum'),
                            (e.CapturePointsVal = 'capturePointsVal'),
                            (e.Mileage = 'mileage'));
                    })(Ir || (Ir = {})));
                const kr = ({ label: e, value: u, paramValueType: t, isSubgroup: a = !1 }) => {
                        const r = Se(u, (e) =>
                                ((e, u) => {
                                    switch (e) {
                                        case xr.Integer:
                                            return G.Z5.getNumberFormat(u, G.B3.INTEGRAL);
                                        case xr.Float:
                                            return G.Z5.getRealFormat(u, G.Gr.FRACTIONAL);
                                        case xr.Time:
                                            return G.Z5.getTimeFormat(u, G.lf.SHORT_FORMAT);
                                        default:
                                            return u;
                                    }
                                })(t, e),
                            ).join(' / '),
                            n = F()(Pr.row, a && Pr.row__subgroup);
                        return s().createElement(
                            'div',
                            { className: n },
                            e,
                            s().createElement('span', { className: Pr.separator }),
                            s().createElement('span', { className: Pr.value }, r),
                        );
                    },
                    Or = { group__last: 'StatisticsInfoGroup_group__last_7a' };
                function Mr() {
                    return (
                        (Mr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Mr.apply(this, arguments)
                    );
                }
                const Lr = ({ item: e }) =>
                        s().createElement(
                            'div',
                            { className: Or.group },
                            s().createElement(kr, Mr({ isSubgroup: !1 }, e)),
                            e.details.length > 0 &&
                                Se(e.details, (e, u) => s().createElement(kr, Mr({ key: u, isSubgroup: !0 }, e))),
                        ),
                    Ur = (0, z.Pi)(() => {
                        const e = uu().model.computes.selectedPlayer();
                        return s().createElement(
                            'div',
                            { className: 'StatisticsInfoRows_base_cc' },
                            Se(e.detailedStatistics, (e, u) => s().createElement(Lr, { key: u, item: e })),
                        );
                    }),
                    Gr = { [ge]: 'platoon', [De]: 'kills', [pe]: 'xp', [fe]: 'vehicle', [Fe]: 'damage' },
                    Hr = { [De]: 'kills', [pe]: 'earnedXp', [Fe]: 'damageDealt' },
                    $r = [ge, Ae, Fe, De, pe, fe],
                    Wr = [ge, fe, Ae],
                    zr = {
                        tableWidth: [498, 770],
                        fixedCells: { [ge]: [34, 34], [Ae]: [178, 273], [fe]: [142, 283] },
                        configurableCells: [144, 180],
                        playerCellOffset: 16,
                    },
                    Vr = [f.Large, f.ExtraLarge],
                    jr = (0, z.Pi)(() => {
                        const e = uu().model,
                            u = pr(),
                            t = e.computes.hasDetailedInfoScroll(23);
                        return s().createElement(
                            'div',
                            { className: 'StatisticsInfo_base_d9' },
                            t
                                ? s().createElement(
                                      Nr.Vertical.Area.Default,
                                      { className: 'StatisticsInfo_content_e4', api: u },
                                      s().createElement(Ur, null),
                                  )
                                : s().createElement(Ur, null),
                        );
                    });
                var qr = t(9690);
                let Xr;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'), (e[(e.RIGHT = 1)] = 'RIGHT'));
                })(Xr || (Xr = {}));
                const Kr = (e, u) => {
                        const t = e.replace(':', '_').replace(/-/g, '_');
                        return {
                            maskImage: `url(${R.images.fun_random.gui.maps.icons.feature.battle_results.team_table.types.$dyn(t)})`,
                            backgroundColor: u,
                        };
                    },
                    Yr = (0, n.memo)(
                        ({
                            vehicleLevel: e,
                            vehicleType: u,
                            vehicleShortName: t,
                            userNames: a,
                            isPersonal: r = !1,
                            isSameSquad: n = !1,
                            killed: i = !1,
                            isIGR: o = !1,
                            alignment: l = Xr.RIGHT,
                        }) => {
                            const c = a.isTeamKiller,
                                d = Ku({ isTeamKiller: c, isKilled: i, isPersonal: r, isSameSquad: n }),
                                m = (0, qr.HG)(e);
                            return s().createElement(
                                'div',
                                { className: 'PlayerVehicleInfo_base_f3', style: { color: d } },
                                s().createElement(
                                    'div',
                                    {
                                        className: F()(
                                            'PlayerVehicleInfo_level_01',
                                            l === Xr.LEFT && 'PlayerVehicleInfo_level__left_b9',
                                        ),
                                    },
                                    m,
                                ),
                                s().createElement('div', { className: 'PlayerVehicleInfo_type_59', style: Kr(u, d) }),
                                s().createElement('div', { className: 'PlayerVehicleInfo_vehicleName_c1' }, t),
                                o && s().createElement('div', { className: 'PlayerVehicleInfo_igr_11' }),
                            );
                        },
                    );
                function Zr() {
                    return (
                        (Zr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Zr.apply(this, arguments)
                    );
                }
                const Qr = (0, z.Pi)(() => {
                        const e = uu(),
                            u = e.model,
                            t = e.controls,
                            a = u.computes.personalSquadIndex(),
                            r = u.computes.selectedPlayer(),
                            n = r.userNames,
                            i = r.squadIndex,
                            l = r.isPersonal,
                            c = r.vehicle,
                            d = n.isKilled,
                            m = c.tier,
                            E = c.type,
                            _ = c.name,
                            g = c.techName,
                            A = a === i && a > 0,
                            F = c.tags.indexOf('premiumIGR') > -1,
                            D = () => {
                                (o.O.sound.play.sound('play'), t.updateTeamTableSelectedPlayer(Xe, -1));
                            };
                        return (
                            $(U.n.ESCAPE, D),
                            s().createElement(
                                'div',
                                { className: 'DetailedStats_base_2d' },
                                s().createElement(
                                    'div',
                                    { className: 'DetailedStats_header_5e' },
                                    s().createElement('div', {
                                        className: 'DetailedStats_vehicleIcon_ef',
                                        style: Ia(g),
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: 'DetailedStats_vehicleInfo_f5' },
                                        s().createElement(
                                            'div',
                                            { className: 'DetailedStats_playerName_3c' },
                                            s().createElement(
                                                Zu,
                                                Zr({}, r.userNames, {
                                                    isTeamKiller: !1,
                                                    isAnonymizerShown: !0,
                                                    isKilled: d,
                                                    isSameSquad: A,
                                                }),
                                            ),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: 'DetailedStats_playerSummary_a1' },
                                            s().createElement(Yr, {
                                                vehicleLevel: m,
                                                vehicleType: E,
                                                vehicleShortName: _,
                                                userNames: n,
                                                alignment: Xr.LEFT,
                                                isIGR: F,
                                                isPersonal: l,
                                                killed: d,
                                            }),
                                            s().createElement(ur, { player: r }),
                                        ),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: 'DetailedStats_close_53', onClick: D },
                                        s().createElement(
                                            'div',
                                            { className: 'DetailedStats_closeText_f1' },
                                            R.strings.fun_battle_results.closeBtn(),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'DetailedStats_stats_97' },
                                    s().createElement(jr, null),
                                ),
                            )
                        );
                    }),
                    Jr = {
                        base: 'TeamTable_base_65',
                        hidden: 'TeamTable_hidden_1e',
                        head: 'TeamTable_head_11',
                        body: 'TeamTable_body_ac',
                        bodyWrapper: 'TeamTable_bodyWrapper_33',
                        bodyWrapper__shortened: 'TeamTable_bodyWrapper__shortened_9d',
                        content: 'TeamTable_content_41',
                        headRow: 'TeamTable_headRow_a4',
                        bodyRow: 'TeamTable_bodyRow_29',
                        bodyRow__isFirst: 'TeamTable_bodyRow__isFirst_cd',
                        bodyRow__isActive: 'TeamTable_bodyRow__isActive_9d',
                        bodyRow__nonSelectable: 'TeamTable_bodyRow__nonSelectable_43',
                        bodyRow__isKilled: 'TeamTable_bodyRow__isKilled_ed',
                        cell: 'TeamTable_cell_65',
                        headCell: 'TeamTable_headCell_b7',
                        cell__icon: 'TeamTable_cell__icon_28',
                        cell__vehicle: 'TeamTable_cell__vehicle_09',
                        headCell__sortDisabled: 'TeamTable_headCell__sortDisabled_bb',
                        headHover: 'TeamTable_headHover_58',
                        headCell__active: 'TeamTable_headCell__active_62',
                        headIcon: 'TeamTable_headIcon_37',
                        headDivider: 'TeamTable_headDivider_43',
                        glow: 'TeamTable_glow_19',
                        activeArrow: 'TeamTable_activeArrow_f6',
                        activeArrow__last: 'TeamTable_activeArrow__last_e4',
                    },
                    en = (0, z.Pi)(({ alias: e, shortened: u = !1 }) => {
                        const t = uu().model,
                            a = t.selectedPlayerId.get(),
                            r = t.selectedTeam.get() === e,
                            i = (0, n.useContext)(Ke),
                            o = i.comparatorsMap,
                            l = i.defaultColumn,
                            c = i.TableRowComponent,
                            d = e === je ? t.computes.alliesSorted(o, l) : t.computes.enemiesSorted(o, l);
                        return s().createElement(
                            'div',
                            { className: Jr.body },
                            s().createElement(
                                'div',
                                { className: F()(Jr.bodyWrapper, u && Jr.bodyWrapper__shortened) },
                                Se(d, (u, t) =>
                                    s().createElement(c, {
                                        key: t,
                                        player: u,
                                        selected: r && a === u.playerIndex,
                                        alias: e,
                                        isFirst: 0 === t,
                                    }),
                                ),
                            ),
                        );
                    }),
                    un = (0, z.Pi)(({ alias: e }) => {
                        const u = uu().model,
                            t = (e === je ? u.allies.get().length : u.enemies.get().length) > 15,
                            a = pr();
                        return s().createElement(
                            'div',
                            { className: Jr.body },
                            t
                                ? s().createElement(
                                      Nr.Vertical.Area.Default,
                                      { className: Jr.content, api: a },
                                      s().createElement(en, { alias: e }),
                                  )
                                : s().createElement(en, { alias: e, shortened: !0 }),
                        );
                    }),
                    tn = {
                        base: 'ActiveArrow_base_5b',
                        line: 'ActiveArrow_line_22',
                        arrow: 'ActiveArrow_arrow_80',
                        arrow__top: 'ActiveArrow_arrow__top_54',
                    },
                    an = (0, n.memo)(({ direction: e }) =>
                        s().createElement(
                            'div',
                            { className: tn.base },
                            s().createElement('div', { className: tn.line }),
                            s().createElement('div', { className: F()(tn.arrow, tn[`arrow__${e}`]) }),
                            s().createElement('div', { className: tn.line }),
                        ),
                    ),
                    rn = ({
                        className: e,
                        children: u,
                        onSort: t,
                        sortType: a,
                        tooltip: r,
                        reversed: n = !1,
                        active: i = !1,
                        last: l = !1,
                        sortDisabled: c = !1,
                        columnWidthSmall: d = 0,
                        columnWidthLarge: m = 0,
                    }) => {
                        const E = B().mediaSize;
                        return s().createElement(
                            Pu,
                            r,
                            s().createElement(
                                'div',
                                {
                                    className: F()(
                                        Jr.headCell,
                                        e,
                                        i && Jr.headCell__active,
                                        n && Jr.headCell__reverse,
                                        c && Jr.headCell__sortDisabled,
                                    ),
                                    style: { width: `${Vr.includes(E) ? m : d}rem` },
                                    onClick: () => {
                                        c || (o.O.sound.play.sound('play'), t(a));
                                    },
                                    onMouseEnter: () => o.O.sound.play.sound('highlight'),
                                },
                                u,
                                i &&
                                    s().createElement(
                                        'div',
                                        { className: F()(Jr.activeArrow, l && Jr.activeArrow__last) },
                                        s().createElement(an, { direction: n ? 'top' : 'bottom' }),
                                    ),
                            ),
                        );
                    };
                function nn(e, u = zr, t = 3) {
                    return u.fixedCells[e] ? u.fixedCells[e] : [u.configurableCells[0] / t, u.configurableCells[1] / t];
                }
                function sn(e, u = zr, t, a = 3) {
                    const r = nn(e, u, a);
                    return { width: `${Vr.includes(t) ? r[1] : r[0]}rem` };
                }
                function on(e, u, t) {
                    const a = t[u];
                    return a ? e[a] : -1;
                }
                const ln = R.strings.battle_results.team,
                    cn = R.images.fun_random.gui.maps.icons.feature.battle_results.team_table.header;
                function dn(e, u) {
                    var t, a;
                    const r = `${e}Header`,
                        n = null != (t = null == u || null == (a = u.team) ? void 0 : a.$dyn(r)) ? t : ln.$dyn(r);
                    return { header: null == n ? void 0 : n.$dyn('header'), body: null == n ? void 0 : n.$dyn('body') };
                }
                const mn = (0, z.Pi)(({ isAllies: e = !0, onSort: u }) => {
                        var t, a;
                        const r = uu().model,
                            i = r.battleInfo.get().subModeAssetsPointer,
                            o = r.detailsColumns.get(),
                            l = r.sortDirection.get(),
                            c = r.computes.activeSortingType(),
                            d = r.singleTeamMode.get(),
                            m = r.computes.hasSquads(),
                            E = l === Le.Asc,
                            _ = X(null, {
                                poFileName: 'fun_battle_results',
                                assetsPointer: i,
                                isSubMode: !0,
                            }).dynamicTexts,
                            g = null == (t = K(i, !0)) || null == (a = t.battle_results) ? void 0 : a.team_table.header,
                            A = (0, n.useContext)(Ke),
                            F = A.columnsOrder,
                            D = A.headerIconMapping,
                            p = A.tableCellsConfig;
                        return s().createElement(
                            'div',
                            { className: Jr.head },
                            s().createElement(
                                'div',
                                { className: Jr.headRow },
                                F.map((t, a, r) => {
                                    const n = Wr.findIndex((e) => e === t),
                                        i = Ne(o, (e) => e === t);
                                    if (-1 === n && (-1 === i || void 0 === i)) return;
                                    const l = t === Ae,
                                        A = d ? _.team.singleTeam() : ln.stats.$dyn(e ? 'ownTeam' : 'enemyTeam'),
                                        F = 0 === o.length ? 3 : o.length,
                                        f = l
                                            ? Jr.headCell__name
                                            : (function (e) {
                                                  switch (e) {
                                                      case fe:
                                                          return Jr.headCell__vehicle;
                                                      case ge:
                                                          return Jr.headCell__squad;
                                                      default:
                                                          return Jr.headCell__icon;
                                                  }
                                              })(t),
                                        b = !l && D[t],
                                        C = Oa(g, cn, b),
                                        B = nn(t, p, F);
                                    return s().createElement(
                                        rn,
                                        {
                                            key: t,
                                            className: f,
                                            active: c === t,
                                            reversed: E,
                                            last: a === r.length - 1,
                                            sortType: t,
                                            onSort: u,
                                            tooltip: dn(t, _),
                                            sortDisabled: t === ge && !m,
                                            columnWidthSmall: B[0],
                                            columnWidthLarge: B[1],
                                        },
                                        l
                                            ? s().createElement('span', { className: Jr.playerName }, A)
                                            : s().createElement('div', {
                                                  className: Jr.headIcon,
                                                  style: { backgroundImage: `url('${C}')` },
                                              }),
                                        s().createElement('div', { className: Jr.headHover }),
                                        a < r.length - 1 && s().createElement('div', { className: Jr.headDivider }),
                                    );
                                }),
                            ),
                        );
                    }),
                    En = (0, z.Pi)(({ onSort: e, alias: u = 'allies' }) => {
                        const t = uu().model.selectedTeam.get(),
                            a = t !== Xe && u !== t;
                        return s().createElement(
                            'div',
                            { className: a ? Jr.hidden : '' },
                            s().createElement(
                                'div',
                                { className: Jr.base },
                                s().createElement(mn, { isAllies: u === je, onSort: e }),
                                s().createElement(un, { alias: u }),
                            ),
                        );
                    }),
                    _n = (0, z.Pi)(() => {
                        const e = uu(),
                            u = e.model,
                            t = e.controls,
                            a = u.sortDirection.get(),
                            r = u.computes.activeSortingType(),
                            i = u.singleTeamMode.get(),
                            o = u.selectedTeam.get(),
                            l = o !== Xe,
                            c = o === je && u.allies.get().length <= 15,
                            d = (0, n.useContext)(Ke).tableCellsConfig,
                            m = (0, n.useCallback)(
                                (e) => {
                                    if (e === r) {
                                        const e = a === Le.Desc ? Le.Asc : Le.Desc;
                                        (t.saveStatsSorting(r, e), t.updateTeamTableSorting(r, e));
                                    } else (t.saveStatsSorting(e, Le.Desc), t.updateTeamTableSorting(e, Le.Desc));
                                },
                                [a, r, t],
                            );
                        return s().createElement(
                            'div',
                            {
                                className: 'TeamTab_base_d1',
                                style: {
                                    '--tableWidthSmall': `${d.tableWidth[0]}rem`,
                                    '--tableWidthLarge': `${d.tableWidth[1]}rem`,
                                },
                            },
                            s().createElement(
                                'div',
                                { className: F()('TeamTab_teams_3c', i && 'TeamTab_teams__single_49') },
                                s().createElement(En, { alias: i ? qe : je, onSort: m }),
                                l &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: F()(
                                                'TeamTab_detailsWrapper_83',
                                                c && 'TeamTab_detailsWrapper__extra_4a',
                                            ),
                                        },
                                        s().createElement(Qr, null),
                                    ),
                                !i && s().createElement(En, { alias: qe, onSort: m }),
                            ),
                        );
                    });
                let gn;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(gn || (gn = {}));
                const An = ({
                        children: e,
                        contentID: u,
                        decoratorID: t = 0,
                        targetId: a = 0,
                        args: r,
                        isEnabled: s = !0,
                        onMouseDown: i,
                    }) => {
                        const o = (0, n.useCallback)(() => {
                                ((0, G.c9)(G.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    ru.playYes());
                            }, [r, u, t, a]),
                            l = (0, n.useCallback)(() => {
                                (0, G.c9)(G.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, t, a]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    (i && i(e), ((e) => e.button === gn.RIGHT)(e) && o());
                                },
                                [i, o],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Fn = ['children'];
                function Dn() {
                    return (
                        (Dn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Dn.apply(this, arguments)
                    );
                }
                const pn = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Fn);
                        return s().createElement(
                            An,
                            Dn({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                            u,
                        );
                    },
                    fn = ({ squadIndex: e, currentSquadIndex: u }) =>
                        s().createElement(
                            'div',
                            {
                                className: F()(
                                    'TableRendererSquad_base_96',
                                    u === e && 'TableRendererSquad_base__highlighted_a0',
                                ),
                            },
                            e,
                        ),
                    bn = ({ vehicle: e, userNames: u, isPersonal: t = !1, isSameSquad: a = !1, killed: r = !1 }) => {
                        const n = e.techName,
                            i = e.name,
                            o = e.tier,
                            l = e.type,
                            c = e.nation,
                            d = e.tags.indexOf('premiumIGR') > -1;
                        return s().createElement(
                            'div',
                            { className: 'TableRendererVehicleInfo_base_1c' },
                            s().createElement('div', {
                                className: F()(
                                    'TableRendererVehicleInfo_vehicleImage_d3',
                                    r && 'TableRendererVehicleInfo_vehicleImage__isKilled_9d',
                                ),
                                style: ka(n, c),
                            }),
                            s().createElement(Yr, {
                                vehicleLevel: o,
                                vehicleType: l,
                                vehicleShortName: i,
                                userNames: u,
                                isPersonal: t,
                                isSameSquad: a,
                                isIGR: d,
                                killed: r,
                            }),
                        );
                    },
                    Cn = {
                        base: 'ActiveGlow_base_82',
                        base__active: 'ActiveGlow_base__active_ad',
                        activeGlow: 'ActiveGlow_activeGlow_a7',
                        activeGlow__left: 'ActiveGlow_activeGlow__left_34',
                        activeGlow__right: 'ActiveGlow_activeGlow__right_38',
                    },
                    Bn = 'left',
                    hn = ({ position: e = 'left', isActive: u = !1 }) =>
                        s().createElement(
                            'div',
                            { className: F()(Cn.base, u && Cn.base__active) },
                            s().createElement('div', { className: F()(Cn.activeGlow, Cn[`activeGlow__${e}`]) }),
                        ),
                    vn = ({ baseStyles: e, columnName: u, value: t, columnsCount: a, cellsConfig: r }) => {
                        const n = B().mediaSize;
                        return s().createElement(
                            'div',
                            { className: e, style: sn(u, r, n, a) },
                            s().createElement('div', { className: Jr.value }, t),
                        );
                    };
                function wn() {
                    return (
                        (wn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        wn.apply(this, arguments)
                    );
                }
                const yn = ({ userNames: e, isPersonal: u, isKilled: t, isSameSquad: a, cellsConfig: r }) => {
                    const n = B().mediaSize,
                        i = nn(Ae, r),
                        o = Vr.includes(n) ? i[1] : i[0];
                    return s().createElement(
                        'div',
                        { className: Jr.cell, style: { width: `${o}rem` } },
                        s().createElement(
                            'div',
                            {
                                style: {
                                    width: o - r.playerCellOffset + 'rem',
                                    marginLeft: `${r.playerCellOffset}rem`,
                                },
                            },
                            s().createElement(
                                Zu,
                                wn({}, e, { isAnonymizerShown: u, isPersonal: u, isKilled: t, isSameSquad: a }),
                            ),
                        ),
                    );
                };
                function Sn() {
                    return (
                        (Sn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Sn.apply(this, arguments)
                    );
                }
                const Tn = (0, z.Pi)(({ player: e, selected: u, alias: t, first: a = !1 }) => {
                        const r = uu(),
                            n = r.model,
                            i = r.controls,
                            l = n.selectedPlayerId.get(),
                            c = n.computes.personalSquadIndex(),
                            d = n.detailsColumns.get(),
                            m = e.userNames,
                            E = e.squadIndex,
                            _ = e.playerIndex,
                            g = e.isPersonal,
                            A = e.databaseID,
                            D = e.vehicle.vehicleCD,
                            p = m.isKilled,
                            f = m.isTeamKiller,
                            b = c === E && c > 0,
                            C = n.singleTeamMode.get(),
                            h = B().mediaSize,
                            v = F()(
                                Jr.bodyRow,
                                u && Jr.bodyRow__isActive,
                                C && Jr.bodyRow__nonSelectable,
                                a && Jr.bodyRow__isFirst,
                                p && Jr.bodyRow__isKilled,
                            ),
                            w = Ku({ isTeamKiller: f, isKilled: p, isPersonal: g, isSameSquad: b }),
                            y = 0 === d.length ? 3 : d.length;
                        return s().createElement(
                            pn,
                            { args: { databaseID: A, vehicleCD: D } },
                            s().createElement(
                                'div',
                                {
                                    className: v,
                                    style: { color: w },
                                    onClick: function () {
                                        if (C) return;
                                        o.O.sound.play.sound('yes1');
                                        const e = l === _;
                                        i.updateTeamTableSelectedPlayer(e ? Xe : t, e ? -1 : _);
                                    },
                                    onMouseEnter: function () {
                                        C || o.O.sound.play.sound('highlight');
                                    },
                                },
                                $r.map((u, t) => {
                                    const a = Wr.findIndex((e) => e === u),
                                        r = Ne(d, (e) => e === u);
                                    if (-1 !== a || (-1 !== r && void 0 !== r))
                                        switch (u) {
                                            case ge:
                                                return s().createElement(
                                                    'div',
                                                    {
                                                        className: F()(Jr.cell, Jr.cell__icon),
                                                        key: t,
                                                        style: sn(ge, zr, h),
                                                    },
                                                    e.squadIndex > 0 &&
                                                        s().createElement(fn, {
                                                            squadIndex: e.squadIndex,
                                                            currentSquadIndex: c,
                                                        }),
                                                );
                                            case Ae:
                                                return s().createElement(yn, {
                                                    key: t,
                                                    userNames: m,
                                                    isPersonal: g,
                                                    isKilled: p,
                                                    isSameSquad: b,
                                                    cellsConfig: zr,
                                                });
                                            case fe:
                                                return s().createElement(
                                                    'div',
                                                    {
                                                        className: F()(Jr.cell, Jr.cell__vehicle),
                                                        key: t,
                                                        style: sn(fe, zr, h),
                                                    },
                                                    s().createElement(bn, Sn({}, e, { isSameSquad: b, killed: p })),
                                                );
                                            default:
                                                return s().createElement(vn, {
                                                    key: t,
                                                    columnName: u,
                                                    baseStyles: F()(Jr.cell, Jr.cell__icon),
                                                    value: on(e.efficiencyValues, u, Hr),
                                                    columnsCount: y,
                                                    cellsConfig: zr,
                                                });
                                        }
                                }),
                                s().createElement(
                                    'div',
                                    { className: Jr.glow },
                                    s().createElement(hn, { position: t === qe ? Bn : 'right', isActive: u }),
                                ),
                            ),
                        );
                    }),
                    Rn = (0, z.Pi)(() => {
                        const e = uu(),
                            u = e.model,
                            t = e.controls,
                            a = t.closeWindow,
                            r = u.battleInfo.get(),
                            n = r.assetsPointer,
                            i = r.subModeAssetsPointer,
                            l = r.winStatus,
                            c = u.currentTabId.get();
                        W(a);
                        const d = X(null, {
                                assetsPointer: i,
                                isSubMode: !0,
                                poFileName: 'fun_battle_results',
                            }).dynamicTexts,
                            m = { personalEfficiencyEmptyReplace: [], statItemValueFormatter: Ma },
                            E = {
                                comparatorsMap: ze,
                                defaultColumn: Ae,
                                columnsOrder: $r,
                                headerIconMapping: Gr,
                                TableRowComponent: Tn,
                                tableCellsConfig: zr,
                            };
                        return s().createElement(
                            'div',
                            { className: tu.base },
                            s().createElement('div', {
                                className: F()(tu.background, c === Qe && tu.background__team),
                                style: { backgroundImage: `url('${K(n).library.battle_results_bg()}')` },
                            }),
                            s().createElement('div', {
                                className: F()(tu.bgDarken, c !== Qe && tu.bgDarken__personal),
                            }),
                            c === Qe && s().createElement('div', { className: F()(tu.bgGlow, tu[`bgGlow__${l}`]) }),
                            s().createElement(
                                'div',
                                { className: tu.closeButton },
                                s().createElement(L, {
                                    caption: R.strings.fun_battle_results.closeBtn(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: a,
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: tu.wrapper },
                                s().createElement(
                                    'div',
                                    { className: tu.content },
                                    s().createElement(
                                        Qa,
                                        {
                                            active: c,
                                            onActiveChange: (e) => {
                                                (o.O.sound.play.sound('yes1'),
                                                    t.updateCurrentTabId(e),
                                                    t.changeTab(Number(e)));
                                            },
                                        },
                                        s().createElement(
                                            'div',
                                            { className: tu.navigation },
                                            s().createElement(
                                                Qa.Switcher,
                                                null,
                                                s().createElement(
                                                    Qa.Switch,
                                                    { tabId: Ze },
                                                    s().createElement(
                                                        'div',
                                                        { className: tu.navigationItem },
                                                        d.navigation.battleResults(),
                                                    ),
                                                ),
                                                s().createElement('div', { className: tu.navigationSeparator }),
                                                s().createElement(
                                                    Qa.Switch,
                                                    { tabId: Qe },
                                                    s().createElement(
                                                        'div',
                                                        { className: tu.navigationItem },
                                                        d.navigation.teamEfficiency(),
                                                    ),
                                                ),
                                            ),
                                        ),
                                        s().createElement(Qa.Content, null, (e) => {
                                            switch (e) {
                                                case Ze:
                                                    return s().createElement(
                                                        Ye.Provider,
                                                        { value: m },
                                                        s().createElement(za, null),
                                                    );
                                                case Qe:
                                                    return s().createElement(
                                                        Ke.Provider,
                                                        { value: E },
                                                        s().createElement(_n, null),
                                                    );
                                                default:
                                                    return (console.error('Unreachable branch in tabs'), null);
                                            }
                                        }),
                                    ),
                                ),
                                s().createElement('div', { className: tu.footer }, s().createElement(rt, null)),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    I().render(
                        s().createElement(eu, null, s().createElement(P, null, s().createElement(Rn, null))),
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
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, a] = deferred[o], n = !0, s = 0; s < u.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, a];
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
        (__webpack_require__.j = 'lobby/feature/FunRandomBattleResultsView/FunRandomBattleResultsView'),
        (() => {
            var e = { 'lobby/feature/FunRandomBattleResultsView/FunRandomBattleResultsView': 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [n, s, i] = t,
                        o = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < n.length; o++)
                        ((r = n[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/fun_random.vendors'], () =>
        __webpack_require__(4048),
    );
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
