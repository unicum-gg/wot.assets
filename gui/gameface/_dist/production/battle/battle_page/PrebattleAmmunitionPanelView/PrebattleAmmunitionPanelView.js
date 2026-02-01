(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, u) => {
                (u.r(t),
                    u.d(t, { mouse: () => c, off: () => o, on: () => s, onResize: () => i, onScaleUpdated: () => r }));
                var n = u(2472),
                    a = u(1176);
                const i = (0, n.E)('clientResized'),
                    r = (0, n.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    o = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
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
                    const i = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${t}`,
                                        r = l[t]((e) => u([e, 'outside']));
                                    function s(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        n(),
                                        () => {
                                            a &&
                                                (r(),
                                                window.removeEventListener(i, s),
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
                    return Object.assign({}, i, {
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
                (u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => i,
                        graphicsQuality: () => s,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = u(527),
                    a = u(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2493: (e, t, u) => {
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
                u.d(t, { O: () => r });
                var n = u(5959),
                    a = u(7698),
                    i = u(514);
                const r = { view: u(7641), client: n, sound: i.ZP, intl: a.N };
            },
            7698: (e, t, u) => {
                u.d(t, { N: () => n });
                const n = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, u) => {
                u.d(t, { ZP: () => r });
                var n = u(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, n.playSound)(a[t])), e), {}),
                    r = { play: Object.assign({}, i, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, u) => {
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function a(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                (u.r(t), u.d(t, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            6112: (e, t, u) => {
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
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
                (u.r(t),
                    u.d(t, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => o,
                        arabic2roman: () => w,
                        children: () => a,
                        displayStatus: () => i.W,
                        displayStatusIs: () => x,
                        enableFullScreenModeSupported: () => k,
                        events: () => r.U,
                        extraSize: () => I,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => S,
                        getExternalPaddingsRem: () => y,
                        getFontNames: () => B,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => b,
                        initExternalPaddings: () => O,
                        isEventHandled: () => C,
                        isFocused: () => f,
                        pxToRem: () => A,
                        remToPx: () => h,
                        resize: () => E,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => F,
                        setEventHandled: () => D,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => T,
                    }));
                var n = u(9690),
                    a = u(3722),
                    i = u(6112),
                    r = u(6538),
                    s = u(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function _(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function b(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function A(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function F(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function D() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const B = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    w = n.cg;
                function y() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const x = Object.keys(i.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === i.W[t]), e),
                        {},
                    ),
                    I = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function k() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function O(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            u = t.top,
                            n = t.right,
                            a = t.bottom,
                            i = t.left;
                        (e.style.setProperty('--external-padding-top', `${u}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${a}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            8566: (e, t, u) => {
                u.d(t, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    i = 16,
                    r = 32,
                    s = 64,
                    o = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                    return a;
                                })(t, n);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((a = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? a : r);
                        },
                        minimize() {
                            o(s);
                        },
                        move(e) {
                            o(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, u) => {
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
                u.d(t, { cg: () => i });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function i(e) {
                    let t = '';
                    for (let u = a.length - 1; u >= 0; u--) for (; e >= a[u]; ) ((t += n[u]), (e -= a[u]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            1358: (e, t, u) => {
                u.d(t, { Z: () => i });
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
                        const i = n.O.view.addModelObserver(e, u, a);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(i) : (this._views[u] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                const i = a;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
                u.d(t, { Sw: () => i.Z, B0: () => s, c9: () => A, ry: () => p });
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
                var i = u(1358);
                var r = u(8613);
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
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = u(5521),
                    m = u(3138);
                const E = ['args'];
                function b(e, t, u, n, a, i, r) {
                    try {
                        var s = e[i](r),
                            o = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(o) : Promise.resolve(o).then(n, a);
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
                                        var i = e.apply(t, u);
                                        function r(e) {
                                            b(i, n, a, r, s, 'next', e);
                                        }
                                        function s(e) {
                                            b(i, n, a, r, s, 'throw', e);
                                        }
                                        r(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    A = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                    return a;
                                })(t, E);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    h = () => A(s.CLOSE),
                    F = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var f = u(7572);
                const D = a.instance,
                    C = {
                        DataTracker: i.Z,
                        ViewModel: f.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => A(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => A(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            A(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, a = R.invalid('resId'), i) => {
                            const r = m.O.view.getViewGlobalPosition(),
                                o = u.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + r.x,
                                    y: m.O.view.pxToRem(c) + r.y,
                                    width: m.O.view.pxToRem(_),
                                    height: m.O.view.pxToRem(d),
                                };
                            A(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: g(E),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => F(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            F(e, h);
                        },
                        handleViewEvent: A,
                        onBindingsReady: p,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
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
                        SystemLocale: r.Z5,
                        UserLocale: r.cy,
                    };
                window.ViewEnvHelper = C;
            },
            8613: (e, t, u) => {
                u.d(t, { Ew: () => i, Z5: () => n, cy: () => a });
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
                    i = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            7386: (e, t, u) => {
                var n = u(7363),
                    a = u.n(n),
                    i = u(1533),
                    r = u.n(i);
                function s() {
                    return !1;
                }
                console.log;
                var o = u(9174),
                    l = u(3138);
                function c(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return _(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return _(e, t);
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
                function _(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const d = (e) => (0 === e ? window : window.subViews.get(e));
                function m(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                function E(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                const b = E;
                function g(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function p(e, t) {
                    return (function (e, t, u) {
                        const n = [];
                        for (let a = 0; a < e.length; a++) {
                            const i = b(e, a);
                            t(i, a, e) && n.push(u(i, a, e));
                        }
                        return n;
                    })(e, m, t);
                }
                function A(e, t, u) {
                    if (Array.isArray(e)) return e.reduce(t, u);
                    let n = u;
                    for (let u = 0; u < e.length; u++) {
                        n = t(n, b(e, u), u, e);
                    }
                    return n;
                }
                var h = u(3946);
                let F;
                !(function (e) {
                    ((e.Hangar = 'hangar'),
                        (e.Setup = 'setup'),
                        (e.Compare = 'compare'),
                        (e.Battle = 'battle'),
                        (e.Respawn = 'respawn'),
                        (e.Prebattle = 'prebattle'));
                })(F || (F = {}));
                const f = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    D = (e) => e === F.Battle || e === F.Prebattle,
                    C = (e) => D(e) || e === F.Respawn;
                var v = u(6483),
                    S = u.n(v);
                const B = [];
                var w = u(5521),
                    y = u(9916);
                const x = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function I(e = w.n.NONE, t = x, u = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== w.n.NONE)
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
                function T(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const k = {
                        playHighlight() {
                            T('highlight');
                        },
                        playClick() {
                            T('play');
                        },
                        playYes() {
                            T('yes1');
                        },
                    },
                    O = (e, t, u) =>
                        t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                            ? (t.extraLargeHeight && u.extraLarge) ||
                              (t.largeHeight && u.large) ||
                              (t.mediumHeight && u.medium) ||
                              (t.smallHeight && u.small) ||
                              (t.extraSmallHeight && u.extraSmall)
                                ? e
                                : null
                            : e,
                    L = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var N;
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
                })(N || (N = {}));
                const P = (function (e = l.O.client.getSize('rem')) {
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
                                    i = Math.min(n, a);
                                return {
                                    extraLarge: i === u.extraLarge.weight,
                                    large: i === u.large.weight,
                                    medium: i === u.medium.weight,
                                    small: i === u.small.weight,
                                    extraSmall: i === u.extraSmall.weight,
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
                            })(t, u, L),
                        );
                    })(),
                    M = (0, n.createContext)(P),
                    $ = ['children'];
                (0, n.memo)((e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, $);
                    const a = (0, n.useContext)(M),
                        i = a.extraLarge,
                        r = a.large,
                        s = a.medium,
                        o = a.small,
                        l = a.extraSmall,
                        c = a.extraLargeWidth,
                        _ = a.largeWidth,
                        d = a.mediumWidth,
                        m = a.smallWidth,
                        E = a.extraSmallWidth,
                        b = a.extraLargeHeight,
                        g = a.largeHeight,
                        p = a.mediumHeight,
                        A = a.smallHeight,
                        h = a.extraSmallHeight,
                        F = { extraLarge: b, large: g, medium: p, small: A, extraSmall: h };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && i) return t;
                        if (u.large && r) return t;
                        if (u.medium && s) return t;
                        if (u.small && o) return t;
                        if (u.extraSmall && l) return t;
                    } else {
                        if (u.extraLargeWidth && c) return O(t, u, F);
                        if (u.largeWidth && _) return O(t, u, F);
                        if (u.mediumWidth && d) return O(t, u, F);
                        if (u.smallWidth && m) return O(t, u, F);
                        if (u.extraSmallWidth && E) return O(t, u, F);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && b) return t;
                            if (u.largeHeight && g) return t;
                            if (u.mediumHeight && p) return t;
                            if (u.smallHeight && A) return t;
                            if (u.extraSmallHeight && h) return t;
                        }
                    }
                    return null;
                });
                let H;
                !(function (e) {
                    ((e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge'));
                })(H || (H = {}));
                const z = 'setup-content';
                function j(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return G(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return G(e, t);
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
                function G(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const W = (e, t = []) => {
                        const u = document.getElementById('root');
                        u && (u.style.cursor = e ? 'grabbing' : 'default');
                        for (var n, a = j(t); !(n = a()).done; ) {
                            const t = n.value,
                                u = document.getElementById(t);
                            u && (u.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    U = (e, t, u) => {
                        let n = '',
                            a = 8e3;
                        for (var i, r = j(u); !(i = r()).done; ) {
                            const e = i.value,
                                u = Math.abs(e.centerX - t);
                            u < a && ((n = e.id), (a = u));
                        }
                        return n;
                    },
                    q = (e, t) => {
                        const u = t.find((t) => t.id === e);
                        return u ? u.centerX : 0;
                    };
                let X, V;
                (!(function (e) {
                    ((e.Waiting = 'waiting'), (e.Active = 'active'), (e.InEffect = 'in'), (e.Rollback = 'rollback'));
                })(X || (X = {})),
                    (function (e) {
                        ((e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit'));
                    })(V || (V = {})));
                const K = (e) => `panel-${e}-section`,
                    Y = (e, t) => {
                        const u = K(e),
                            n = t.filter((e) => e !== u);
                        return { selfId: u, blockOnGrabIds: [z, ...n] };
                    },
                    Z = ({ baseId: e, slotsLength: t, handleSwap: u, setIsExitBlocked: a, syncInitiator: i }) => {
                        const r = ((e, t, u) => {
                                const a = (0, n.useRef)([]),
                                    i = (0, n.useRef)({ dragId: '', dropId: '', prevPotentialDropId: '' }),
                                    r = (0, n.useState)({ activeDragId: '', potentialDropId: '' }),
                                    s = r[0],
                                    o = r[1],
                                    l = (0, n.useCallback)((e) => {
                                        i.current.dropId ||
                                            i.current.prevPotentialDropId ||
                                            ((i.current.prevPotentialDropId = e),
                                            o({ activeDragId: e, potentialDropId: e }));
                                    }, []),
                                    c = (0, n.useCallback)((e, t) => {
                                        if (a.current) {
                                            const u = U(0, t, a.current);
                                            u !== i.current.prevPotentialDropId &&
                                                ((i.current.prevPotentialDropId = u),
                                                o({ activeDragId: e, potentialDropId: u }));
                                        }
                                    }, []),
                                    _ = (0, n.useCallback)((e, t) => {
                                        if (a.current && t) {
                                            const u = i.current,
                                                n = U(0, t, a.current);
                                            ((u.dropId = n),
                                                (u.dragId = e),
                                                (u.prevPotentialDropId = ''),
                                                o({ activeDragId: e, potentialDropId: '' }),
                                                n !== e && T('cons_equipment_swipe'));
                                        }
                                    }, []),
                                    d = (0, n.useCallback)(() => {
                                        const e = i.current,
                                            t = e.dragId,
                                            u = e.dropId,
                                            n = e.prevPotentialDropId;
                                        (t || u || n) &&
                                            ((i.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                                            o({ activeDragId: '', potentialDropId: '' }));
                                    }, []),
                                    m = (0, n.useCallback)(
                                        (e) => {
                                            const t = i.current.dropId;
                                            t && t !== e ? u(e, t) : d();
                                        },
                                        [d, u],
                                    ),
                                    E = (0, n.useCallback)((e, t) => {
                                        const u = a.current.find((t) => t.id === e);
                                        u && t && (u.centerX = t);
                                    }, []),
                                    b = (0, n.useCallback)(
                                        (e, t) => {
                                            const u = t.dragId,
                                                n = t.currentCenterX;
                                            switch (e) {
                                                case V.Ready:
                                                    return E(u, n);
                                                case V.DragStart:
                                                    return l(u);
                                                case V.Drag:
                                                    return c(u, n);
                                                case V.Drop:
                                                    return _(u, n);
                                                case V.DropExit:
                                                    return m(u);
                                                default:
                                                    return void console.warn('Unknown grabber action', e);
                                            }
                                        },
                                        [l, c, _, m, E],
                                    );
                                return (
                                    (0, n.useEffect)(() => {
                                        if (e !== a.current.length) {
                                            const u = new Array(e).fill(null);
                                            a.current = u.map((e, u) => ({ id: `${t}-${u}`, centerX: 0 }));
                                        }
                                    }, [e, t]),
                                    {
                                        dragState: s,
                                        handleGrabberAction: b,
                                        getForceCenterX: (0, n.useCallback)((e) => {
                                            const t = i.current,
                                                u = t.dragId,
                                                n = t.dropId;
                                            return e === u ? q(n, a.current) : e === n ? q(u, a.current) : 0;
                                        }, []),
                                        resetDragResults: d,
                                    }
                                );
                            })(t, e, u),
                            s = r.dragState,
                            o = r.handleGrabberAction,
                            l = r.getForceCenterX,
                            c = r.resetDragResults,
                            _ = (0, n.useCallback)(
                                (e, t) => {
                                    if (a)
                                        switch (e) {
                                            case V.DragStart:
                                            case V.Drag:
                                                a(!0);
                                                break;
                                            default:
                                                a(!1);
                                        }
                                    o(e, t);
                                },
                                [o, a],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                a && a(!1);
                            }, [a]),
                            (0, n.useEffect)(() => c, [i, c]),
                            { handleGrabberAction: _, dragState: s, getForceCenterX: l }
                        );
                    },
                    Q = ((e, t) => {
                        const u = (0, n.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: r, children: _, mocks: m }) {
                                const E = (0, n.useRef)([]),
                                    b = (u, n, a) => {
                                        var i;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = d,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function i(e, t = 0) {
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
                                                const r = (e) => {
                                                    const a = u(t),
                                                        i = n.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (u, i) => {
                                                        const s = 'string' == typeof i ? `${n}.${i}` : n,
                                                            o = l.O.view.addModelObserver(s, t, !0);
                                                        return (a.set(o, u), e && u(r(i)), o);
                                                    },
                                                    readByPath: r,
                                                    createCallback: (e, t) => {
                                                        const u = r(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = r(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, u = c(a.keys()); !(e = u()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            _ =
                                                'real' === u
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (i = null == a ? void 0 : a.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            m = (e) =>
                                                'mocks' === u ? (null == a ? void 0 : a.getter(e)) : _.readByPath(e),
                                            b = (e) => E.current.push(e),
                                            g = e({
                                                mode: u,
                                                readByPath: m,
                                                externalModel: _,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const t = m(e),
                                                            n = o.LO.box(t, { equals: s });
                                                        return (
                                                            'real' === u &&
                                                                _.subscribe(
                                                                    (0, o.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    array: (e, t) => {
                                                        const n = null != t ? t : m(e),
                                                            a = o.LO.box(n, { equals: s });
                                                        return (
                                                            'real' === u &&
                                                                _.subscribe(
                                                                    (0, o.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : m(e),
                                                            a = o.LO.box(n, { equals: s });
                                                        return (
                                                            'real' === u &&
                                                                _.subscribe(
                                                                    (0, o.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = m(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = o.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    _.subscribe(
                                                                        (0, o.aD)((t) => {
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
                                                                i = Object.entries(a),
                                                                r = i.reduce(
                                                                    (e, [t, u]) => ((e[u] = o.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    _.subscribe(
                                                                        (0, o.aD)((e) => {
                                                                            i.forEach(([t, u]) => {
                                                                                r[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: b,
                                            }),
                                            p = { mode: u, model: g, externalModel: _, cleanup: b };
                                        return {
                                            model: g,
                                            controls: 'mocks' === u && a ? a.controls(p) : t(p),
                                            externalModel: _,
                                            mode: u,
                                        };
                                    },
                                    g = (0, n.useRef)(!1),
                                    p = (0, n.useState)(i),
                                    A = p[0],
                                    h = p[1],
                                    F = (0, n.useState)(() => b(i, r, m)),
                                    f = F[0],
                                    D = F[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        g.current ? D(b(A, r, m)) : (g.current = !0);
                                    }, [m, A, r]),
                                    (0, n.useEffect)(() => {
                                        h(i);
                                    }, [i]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (f.externalModel.dispose(), E.current.forEach((e) => e()));
                                        },
                                        [f],
                                    ),
                                    a().createElement(u.Provider, { value: f }, _)
                                );
                            },
                            () => (0, n.useContext)(u),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    ammunitionPanel: e.object('ammunitionPanel'),
                                    roleSkillSlot: e.object('roleSkillSlot'),
                                    vehicleInfo: e.object('vehicleInfo'),
                                    sectionGroups: e.array('ammunitionPanel.sectionGroups'),
                                    lastSlotAction: e.object('lastSlotAction'),
                                },
                                u = (0, h.Om)(() => t.sectionGroups.get().length),
                                n = (0, h.Om)(
                                    (e) => {
                                        const u = E(t.sectionGroups.get(), e);
                                        if (!u) throw Error(`No ammunition section group found with index: ${e}`);
                                        return Object.assign({}, u, {
                                            sections: g(u.sections, (e) =>
                                                Object.assign({}, e, {
                                                    slots: g(e.slots, (e) => Object.assign({}, e)),
                                                }),
                                            ),
                                            setupSelector: Object.assign({}, u.setupSelector, {
                                                states: g(u.setupSelector.states, (e) => e),
                                            }),
                                        });
                                    },
                                    { equals: s },
                                ),
                                a = (0, h.Om)(() => A(t.sectionGroups.get(), (e, t) => e + t.sections.length, 0)),
                                i = (0, h.Om)((e) => n(e).sections.length),
                                r = (0, h.Om)(
                                    (e, t) => {
                                        const u = E(n(e).sections, t);
                                        if (!u) throw Error(`No ammunition section found with index: ${t}`);
                                        return u;
                                    },
                                    { equals: s },
                                ),
                                o = (0, h.Om)((e, t) => r(e, t).slots.length),
                                l = (0, h.Om)(
                                    (e, t) =>
                                        (function (e, t) {
                                            if (Array.isArray(e)) return e.filter(t);
                                            const u = [];
                                            for (let a = 0; a < e.length; a++) {
                                                var n;
                                                const i = null == (n = e[a]) ? void 0 : n.value;
                                                t(i, a, e) && u.push(i);
                                            }
                                            return u;
                                        })(r(e, t).slots, (e) => Boolean(e) && !f(e)).length,
                                ),
                                c = (0, h.Om)((e, t) =>
                                    (function (e, t) {
                                        if (Array.isArray(e)) return e.some(t);
                                        for (let u = 0; u < e.length; u++) if (t(b(e, u), u, e)) return !0;
                                        return !1;
                                    })(r(e, t).slots, (e) => e.intCD > 0),
                                ),
                                _ = (0, h.Om)(
                                    (e, t, u) => {
                                        const n = E(r(e, t).slots, u);
                                        if (!n) throw Error(`No ammunition slot found with index: ${u}`);
                                        return n;
                                    },
                                    { equals: s },
                                ),
                                d = (0, h.Om)((e) => p(n(e).sections, (e) => K(e.type)), { equals: s }),
                                m = (0, h.Om)(
                                    (e, t, u) => {
                                        const n = _(e, t, u);
                                        if (!n) throw Error(`No ammunition slot found with index: ${u}`);
                                        if (!n.specializations) throw Error('Selected slot have no specializations');
                                        return Object.assign({}, n.specializations, {
                                            specializations: g(n.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        });
                                    },
                                    { equals: s },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    groups: { length: u, group: n },
                                    sections: { allSectionsLength: a, length: i, section: r, IDs: d },
                                    slots: { length: o, filteredLength: l, slot: _, existFilled: c },
                                    specializations: m,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            sectionSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionSelect',
                            ),
                            dragDropSwap: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onDragDropSwap',
                            ),
                            slotClear: e.createCallback((e) => Object.assign({}, e), 'ammunitionPanel.onSlotClear'),
                            sectionResized: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionResized',
                            ),
                            changeSetupIndex: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onChangeSetupIndex',
                            ),
                            specializationSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSpecializationSelect',
                            ),
                            escKeyDown: e.createCallbackNoArgs('onEscKeyDown'),
                        }),
                    ),
                    J = Q[0],
                    ee = Q[1];
                let te;
                !(function (e) {
                    ((e[(e.BattleLoading = 0)] = 'BattleLoading'),
                        (e[(e.PreBattle = 1)] = 'PreBattle'),
                        (e[(e.PreBattleNotConfirmed = 2)] = 'PreBattleNotConfirmed'));
                })(te || (te = {}));
                var ue = u(3403);
                const ne = 'App_base_5f',
                    ae = 'App_base__loading_98',
                    ie = 'App_content_f3',
                    re = (e) => {
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
                    },
                    se = (e) => {
                        (0, n.useEffect)(() => e, []);
                    };
                const oe = (0, n.createContext)(null);
                u(1281);
                let le;
                function ce(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function _e(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(le || (le = {}));
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
                function de(e, t, u) {
                    const a = (0, n.useContext)(M);
                    let i = Object.entries(a).filter(([e, t]) => !0 === t && e in N);
                    return (
                        u && (i = i.filter((e) => u.includes(e[0]))),
                        e.reduce((e, u) => {
                            const n = i.map((e) =>
                                S()(t[((e, t) => e + '__' + t)(u, e[0])], t[((e, t) => e + _e(t))(u, e[0])]),
                            );
                            return ((e[u] = S()(t[u], ...n)), e);
                        }, {})
                    );
                }
                const me = (e, t, u, a = []) => {
                        const i = ((e, t = []) => {
                            const u = (0, n.useRef)(),
                                a = (0, n.useCallback)((...t) => {
                                    (u.current && u.current(), (u.current = e(...t)));
                                }, t);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        u.current && u.current();
                                    },
                                    [a],
                                ),
                                a
                            );
                        })(
                            () =>
                                re(() =>
                                    re(() => {
                                        if (e.current) {
                                            const u = e.current.getBoundingClientRect(),
                                                n = {
                                                    width: l.O.view.pxToRem(u.width),
                                                    height: l.O.view.pxToRem(u.height),
                                                    offsetX: l.O.view.pxToRem(u.left),
                                                    offsetY: l.O.view.pxToRem(u.top),
                                                };
                                            (window.tutorialApi.updateComponents(), t(n));
                                        }
                                    }),
                                ),
                            [t, e],
                        );
                        return (
                            (0, n.useEffect)(() => {
                                i();
                            }, [i, ...a]),
                            (0, n.useEffect)(() => {
                                if (u)
                                    return (
                                        engine.on('clientResized', i),
                                        () => {
                                            engine.off('clientResized', i);
                                        }
                                    );
                            }, [u, i]),
                            i
                        );
                    },
                    Ee = {
                        base: 'AmmoPanel_base_8d',
                        base__locked: 'AmmoPanel_base__locked_f8',
                        base__disabled: 'AmmoPanel_base__disabled_13',
                        base__hidden: 'AmmoPanel_base__hidden_14',
                        border: 'AmmoPanel_border_e6',
                        border__hidden: 'AmmoPanel_border__hidden_b1',
                        roleSkillSlot: 'AmmoPanel_roleSkillSlot_20',
                        roleSkillSlot__battle: 'AmmoPanel_roleSkillSlot__battle_b0',
                        roleSkillSlot__small: 'AmmoPanel_roleSkillSlot__small_a1',
                        roleSkillSlot__extraSmall: 'AmmoPanel_roleSkillSlot__extraSmall_a9',
                        roleSkillSlot__prebattle: 'AmmoPanel_roleSkillSlot__prebattle_b5',
                    },
                    be = 'Border_base_f9',
                    ge = 'Border_border_83',
                    pe = 'Border_wrapper_17',
                    Ae = 'Border_active_e8',
                    he = (0, n.memo)(({ slotOffset: e, slotWidth: t, onAnimationEnd: u }) => {
                        const i = (0, n.useRef)(null),
                            r = (0, n.useRef)(!1);
                        (0, n.useEffect)(() => {
                            r.current = !0;
                        }, [e, t]);
                        const s = (0, n.useCallback)(() => {
                            (r.current && u(), (r.current = !1));
                        }, [u]);
                        (0, n.useEffect)(() => {
                            const e = i.current;
                            return (
                                e && e.addEventListener('transitionend', s),
                                () => {
                                    e && e.removeEventListener('transitionend', s);
                                }
                            );
                        }, [s]);
                        const o = (0, n.useMemo)(() => ({ left: e }), [e]),
                            l = (0, n.useMemo)(() => ({ width: t }), [t]);
                        return a().createElement(
                            'div',
                            { className: be },
                            a().createElement(
                                'div',
                                { ref: i, className: ge, style: o },
                                a().createElement(
                                    'div',
                                    { className: pe },
                                    a().createElement('div', { className: Ae, style: l }),
                                ),
                            ),
                        );
                    }),
                    Fe = (e, t) => {
                        const u = [];
                        for (let n = 0; n < e; n++) u.push(t(n));
                        return u;
                    },
                    fe = (e = 1) => {
                        const t = new Error().stack;
                        let u,
                            n = R.invalid('resId'),
                            a = '';
                        var i;
                        t &&
                            ((a = (null == (i = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : i[0]) || ''),
                            (u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== u &&
                                window.subViews[u] &&
                                (n = window.subViews[u].id));
                        return { callerUrl: a, caller: u, stack: t, resId: n };
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
                function Ce(e) {
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
                const ve = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: y.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    Se = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            i = e.onMouseEnter,
                            r = e.onMouseLeave,
                            s = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            m = e.decoratorId,
                            E = void 0 === m ? 0 : m,
                            b = e.isEnabled,
                            g = void 0 === b || b,
                            p = e.targetId,
                            A = void 0 === p ? 0 : p,
                            h = e.onShow,
                            F = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, De);
                        const D = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, n.useMemo)(() => A || fe().resId, [A]),
                            v = (0, n.useCallback)(() => {
                                (D.current.isVisible && D.current.timeoutId) ||
                                    (ve(u, E, { isMouseEvent: !0, on: !0, arguments: Ce(a) }, C),
                                    h && h(),
                                    (D.current.isVisible = !0));
                            }, [u, E, a, C, h]),
                            S = (0, n.useCallback)(() => {
                                if (D.current.isVisible || D.current.timeoutId) {
                                    const e = D.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (D.current.timeoutId = 0)),
                                        ve(u, E, { on: !1 }, C),
                                        D.current.isVisible && F && F(),
                                        (D.current.isVisible = !1));
                                }
                            }, [u, E, C, F]),
                            B = (0, n.useCallback)((e) => {
                                D.current.isVisible &&
                                    ((D.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (D.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(D.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = D.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', B, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', B, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === g && S();
                            }, [g, S]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ));
                        return g
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((w = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(D.current.timeoutId),
                                                      (D.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      i && i(e),
                                                      w && w(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (S(), null == r || r(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === d && S(), null == o || o(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === d && S(), null == s || s(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : t;
                        var w;
                    },
                    Be = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function we() {
                    return (
                        (we =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        we.apply(this, arguments)
                    );
                }
                const ye = R.views.common.tooltip_window.simple_tooltip_content,
                    xe = (e) => {
                        let t = e.children,
                            u = e.body,
                            i = e.header,
                            r = e.note,
                            s = e.alert,
                            o = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Be);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: u, header: i, note: r, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, u, i, r, o]);
                        return a().createElement(
                            Se,
                            we(
                                {
                                    contentId:
                                        ((_ = null == o ? void 0 : o.hasHtmlContent),
                                        _ ? ye.SimpleTooltipHtmlContent('resId') : ye.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var _;
                    };
                let Ie;
                !(function (e) {
                    ((e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING'));
                })(Ie || (Ie = {}));
                const Te = 'SwitchButton_base_23',
                    ke = 'SwitchButton_base__active_31',
                    Oe = 'SwitchButton_base__warning_71',
                    Re = 'SwitchButton_buttonBack_ce',
                    Le = 'SwitchButton_buttonBackHovered_45',
                    Ne = 'SwitchButton_base__hovered_b4',
                    Pe = 'SwitchButton_buttonGlow_4c',
                    Me = 'SwitchButton_buttonIcon_d3',
                    $e = 'SwitchButton_buttonWarning_3f',
                    He = 'SwitchButton_number_8a',
                    ze = ({ id: e, state: t, currentIndex: u, isHovered: i }) => {
                        const r = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.gui.maps.icons.tanksetup.panel.indexes.$dyn(`setup_${e + 1}`)}')`,
                                }),
                                [e],
                            ),
                            s = e === u,
                            o = !s && t === Ie.WARNING;
                        return a().createElement(
                            'div',
                            { className: S()(Te, { [ke]: s, [Oe]: o, [Ne]: i }) },
                            a().createElement('div', { className: Re }),
                            a().createElement('div', { className: Le }),
                            a().createElement('div', { className: Me }),
                            a().createElement('div', { className: Pe }),
                            a().createElement('div', { className: $e }),
                            a().createElement('div', { style: r, className: He }),
                        );
                    },
                    je = 'SwitchEquipment_base_1a',
                    Ge = 'SwitchEquipment_base__disabled_73',
                    We = 'SwitchEquipment_cover_b3',
                    Ue = ({ onClick: e, totalCount: t, currentIndex: u, states: i, isDisabled: r, groupId: s }) => {
                        const o = (0, n.useRef)(null),
                            l = (0, n.useState)(!1),
                            c = l[0],
                            _ = l[1],
                            d = (u + 1) % t,
                            m = (0, n.useCallback)(() => {
                                r || e({ groupId: s, currentIndex: d });
                            }, [s, r, d, e]),
                            E = (0, n.useCallback)(() => {
                                r || (_(!0), k.playHighlight());
                            }, [r]),
                            g = (0, n.useCallback)(() => {
                                r || _(!1);
                            }, [r]),
                            p = S()(je, r && Ge);
                        return a().createElement(
                            'div',
                            {
                                id: `switch-equipment-group-${s}`,
                                className: p,
                                onClick: m,
                                onMouseEnter: E,
                                onMouseLeave: g,
                                ref: o,
                            },
                            Array.from({ length: t }, (e, t) =>
                                a().createElement(ze, { key: t, id: t, state: b(i, t), currentIndex: u, isHovered: c }),
                            ),
                            r && a().createElement('div', { className: We }),
                        );
                    };
                var qe = u(2558),
                    Xe = u(8934);
                const Ve = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    Ke = 'up',
                    Ye = 'down',
                    Ze = ({ children: e, index: t, setSetupSwitching: u, disabled: i = !1 }) => {
                        const r = (0, n.useRef)(1 - t),
                            s = (0, n.useMemo)(() => {
                                const e = ((u = t), (n = r.current), u === n ? '' : u > n ? Ye : Ke);
                                var u, n;
                                const a = e && _e(e);
                                return i ? {} : { enter: Ve[`base__enter${a}`], exit: Ve[`base__exit${a}`] };
                            }, [t, i]);
                        return (
                            (r.current = t),
                            a().createElement(
                                qe.Z,
                                { className: Ve.base },
                                a().createElement(
                                    Xe.Z,
                                    {
                                        timeout: 300,
                                        key: t,
                                        classNames: s,
                                        onEnter: () => u(!0),
                                        onExited: () => u(!1),
                                    },
                                    e,
                                ),
                            )
                        );
                    },
                    Qe = 'shells',
                    Je = 'battleAbilities',
                    et = 'toggleShells',
                    tt = 'toggleCamouflage',
                    ut = {
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
                    nt = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function at() {
                    return (
                        (at =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        at.apply(this, arguments)
                    );
                }
                const it = (e) => {
                        let t = e.value,
                            u = e.isEmpty,
                            n = e.className,
                            i = e.size,
                            r = void 0 === i ? 'normal' : i,
                            s = e.fadeInAnimation,
                            o = void 0 !== s && s,
                            l = e.hide,
                            c = void 0 !== l && l,
                            _ = e.maximumNumber,
                            d = void 0 === _ ? 99 : _,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, nt);
                        const E = u ? null : t,
                            b = 'string' == typeof E;
                        if ((E && !b && E < 0) || 0 === E) return null;
                        const g = E && !b && E > d,
                            p = S()(
                                ut.base,
                                ut[`base__${r}`],
                                o && ut.base__animated,
                                c && ut.base__hidden,
                                !E && ut.base__pattern,
                                u && ut.base__empty,
                                n,
                            );
                        return a().createElement(
                            'div',
                            at({ className: p }, m),
                            a().createElement('div', { className: ut.bg }),
                            a().createElement('div', { className: ut.pattern }),
                            a().createElement(
                                'div',
                                { className: S()(ut.value, b && ut.value__text) },
                                g ? d : E,
                                g && a().createElement('span', { className: ut.plus }, '+'),
                            ),
                        );
                    },
                    rt = 'TopLabel_base_7f',
                    st = 'TopLabel_base__ready_00',
                    ot = 'TopLabel_text_d0',
                    lt = 'TopLabel_text__hangar_36',
                    ct = 'TopLabel_text__shown_25',
                    _t = 'TopLabel_text__hidden_79',
                    dt = 'TopLabel_text__truncated_29',
                    mt = (0, n.memo)(({ panelType: e, text: t, parentRef: u, isTruncated: i = !1, show: r = !1 }) => {
                        const s = (0, n.useRef)(!1),
                            o = (0, n.useState)(!1),
                            l = o[0],
                            c = o[1];
                        (0, n.useEffect)(() => {
                            u || (r && !s.current && (s.current = !0), c(r));
                        }, [r, u]);
                        const _ = (0, n.useCallback)(() => {
                                ((s.current = !0), c(!0));
                            }, []),
                            d = (0, n.useCallback)(() => {
                                c(!1);
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = u && u.current;
                                if (e)
                                    return (
                                        e.addEventListener('mouseenter', _),
                                        e.addEventListener('mouseleave', d),
                                        () => {
                                            (e.removeEventListener('mouseenter', _),
                                                e.removeEventListener('mouseleave', d));
                                        }
                                    );
                            }, [u, _, d]),
                            a().createElement(
                                'div',
                                { className: S()(rt, s.current && st) },
                                a().createElement(
                                    'div',
                                    { className: S()(ot, e !== F.Setup && lt, i && dt, r && l ? ct : _t) },
                                    t,
                                ),
                            )
                        );
                    }),
                    Et = 'notUsableSection',
                    bt = 'Section_base_8a',
                    gt = 'Section_label_73',
                    pt = 'Section_counter_8a',
                    At = 'SlotDivider_base_60',
                    ht = () => a().createElement('div', { className: At }),
                    Ft = ({ wrapper: e, children: t, when: u, withProps: n }) =>
                        u ? a().createElement(e, n, t) : a().createElement(a().Fragment, null, t),
                    ft = {
                        base: 'Container_base_9a',
                        base__grabbing: 'Container_base__grabbing_73',
                        base__hangar: 'Container_base__hangar_ab',
                        base__setup: 'Container_base__setup_1c',
                        base__compare: 'Container_base__compare_0b',
                        base__selected: 'Container_base__selected_17',
                        base__dragIn: 'Container_base__dragIn_a6',
                        base__dragInActive: 'Container_base__dragInActive_e5',
                        base__toggle: 'Container_base__toggle_94',
                        base__disabled: 'Container_base__disabled_22',
                    },
                    Dt = ({
                        activeDragId: e,
                        slotType: t,
                        isSelected: u,
                        isBorderActive: n,
                        children: i,
                        panelType: r,
                        isDisabled: s,
                        isPotentialDrop: o,
                        onClick: l,
                    }) => {
                        const c = S()(
                            ft.base,
                            !e && ft[`base__${r}`],
                            t && ft[`base__${t}`],
                            u && !o && !n && ft.base__selected,
                            o && ft['base__dragIn' + (u ? 'Active' : '')],
                            s && ft.base__disabled,
                        );
                        return a().createElement('div', { className: c, onClick: l }, i);
                    },
                    Ct = {
                        base: 'Bonus_base_dd',
                        base__fitting: 'Bonus_base__fitting_d1',
                        icon: 'Bonus_icon_3b',
                        icon__battleBooster: 'Bonus_icon__battleBooster_66',
                        icon__battleBoosterReplace: 'Bonus_icon__battleBoosterReplace_8d',
                        icon__equipmentPlus: 'Bonus_icon__equipmentPlus_48',
                        icon__builtInEquipment: 'Bonus_icon__builtInEquipment_77',
                        icon__equipmentModernized: 'Bonus_icon__equipmentModernized_76',
                        icon__equipmentTrophyBasic: 'Bonus_icon__equipmentTrophyBasic_a4',
                        icon__equipmentTrophyUpgraded: 'Bonus_icon__equipmentTrophyUpgraded_6d',
                    },
                    vt = a().memo(({ isTemporary: e, overlayType: t, overlaySource: u }) => {
                        const i = S()(Ct.base, e && Ct.base__fitting),
                            r = S()(Ct.icon, Ct[`icon__${t}`]),
                            s = (0, n.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]);
                        return a().createElement(
                            'div',
                            { className: i },
                            a().createElement('div', { className: r, style: s }),
                        );
                    }),
                    St = {
                        base: 'Level_base_57',
                        base__level1: 'Level_base__level1_c4',
                        base__level2: 'Level_base__level2_9c',
                        base__level3: 'Level_base__level3_39',
                        base__level4: 'Level_base__level4_e3',
                        base__level5: 'Level_base__level5_ea',
                        base__level6: 'Level_base__level6_5d',
                        base__level7: 'Level_base__level7_03',
                        base__level8: 'Level_base__level8_b5',
                        base__level9: 'Level_base__level9_d6',
                        base__level10: 'Level_base__level10_89',
                    },
                    Bt = ({ level: e }) => {
                        const t = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            u = S()(St.base, St[`base__level${e}`]);
                        return a().createElement('div', { style: t, className: u });
                    },
                    wt = 'Inside_image_e5',
                    yt = 'Inside_image__fitting_11',
                    xt = 'Inside_warning_e4',
                    It = 'Inside_change_5a',
                    Tt = ({
                        level: e,
                        overlayType: t,
                        isTemporary: u,
                        withAttention: i,
                        imageSource: r,
                        isIncompatible: s,
                    }) => {
                        const o = (0, n.useMemo)(() => {
                                const u = 'equipmentModernized' === t ? `${t}_${e}_overlay` : `${t}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(u);
                            }, [t, e]),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${r})` }), [r]),
                            c = !o && Boolean(t) && e;
                        return a().createElement(
                            'div',
                            null,
                            c && a().createElement(Bt, { level: e }),
                            a().createElement('div', { className: S()(wt, (u || i) && yt), style: l }),
                            i && a().createElement('div', { className: xt }),
                            s && a().createElement('div', { className: It }),
                            o && a().createElement(vt, { isTemporary: u, overlaySource: o, overlayType: t }),
                        );
                    };
                let kt, Ot, Rt;
                (!(function (e) {
                    ((e[(e.ExtraSmall = L.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = L.small.width)] = 'Small'),
                        (e[(e.Medium = L.medium.width)] = 'Medium'),
                        (e[(e.Large = L.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = L.extraLarge.width)] = 'ExtraLarge'));
                })(kt || (kt = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = L.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = L.small.width)] = 'Small'),
                            (e[(e.Medium = L.medium.width)] = 'Medium'),
                            (e[(e.Large = L.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = L.extraLarge.width)] = 'ExtraLarge'));
                    })(Ot || (Ot = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = L.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = L.small.height)] = 'Small'),
                            (e[(e.Medium = L.medium.height)] = 'Medium'),
                            (e[(e.Large = L.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = L.extraLarge.height)] = 'ExtraLarge'));
                    })(Rt || (Rt = {})));
                const Lt = () => {
                        const e = (0, n.useContext)(M),
                            t = e.width,
                            u = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return kt.ExtraLarge;
                                    case e.large:
                                        return kt.Large;
                                    case e.medium:
                                        return kt.Medium;
                                    case e.small:
                                        return kt.Small;
                                    case e.extraSmall:
                                        return kt.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), kt.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return Ot.ExtraLarge;
                                    case e.largeWidth:
                                        return Ot.Large;
                                    case e.mediumWidth:
                                        return Ot.Medium;
                                    case e.smallWidth:
                                        return Ot.Small;
                                    case e.extraSmallWidth:
                                        return Ot.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Ot.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return Rt.ExtraLarge;
                                    case e.largeHeight:
                                        return Rt.Large;
                                    case e.mediumHeight:
                                        return Rt.Medium;
                                    case e.smallHeight:
                                        return Rt.Small;
                                    case e.extraSmallHeight:
                                        return Rt.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Rt.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: r, remScreenWidth: t, remScreenHeight: u };
                    },
                    Nt = 'Grabber_base_cf',
                    Pt = 'Grabber_base__enabled_b0',
                    Mt = 'Grabber_base__waitingUpdate_1d',
                    $t = 'Grabber_base__updating_f1',
                    Ht = 'Grabber_base__active_71',
                    zt = 'Grabber_base__exit_1f',
                    jt = 'Grabber_base__showAnimation_d9',
                    Gt = ({
                        children: e,
                        id: t,
                        containerRef: u,
                        isEnabled: i = !0,
                        onClick: r,
                        forceCenterX: s,
                        isUpdateAvailable: o,
                        handleAction: c,
                        blockOnGrabIds: _ = [],
                    }) => {
                        const d = Lt().mediaSize,
                            m = (0, n.useRef)({
                                actualX: 0,
                                clickCenterOffset: 0,
                                dropCenterX: 0,
                                grabActivationPassed: !1,
                                isDragActive: !1,
                                id: t,
                            }),
                            E = (0, n.useRef)({
                                isValid: !1,
                                startX: 0,
                                startCenterX: 0,
                                minXRestriction: 0,
                                maxXRestriction: 8e3,
                            }),
                            b = (0, n.useRef)(null),
                            g = (0, n.useState)(!1),
                            p = g[0],
                            A = g[1],
                            h = (0, n.useState)(0),
                            F = h[0],
                            f = h[1],
                            D = (function () {
                                const e = (0, n.useRef)(0);
                                return (
                                    se(() => {
                                        window.cancelAnimationFrame(e.current);
                                    }),
                                    (0, n.useMemo)(
                                        () => ({
                                            run: (t) => {
                                                (window.cancelAnimationFrame(e.current),
                                                    (e.current = window.requestAnimationFrame(() => {
                                                        e.current = window.requestAnimationFrame(() => {
                                                            ((e.current = 0), t());
                                                        });
                                                    })));
                                            },
                                            clear: () => {
                                                (window.cancelAnimationFrame(e.current), (e.current = 0));
                                            },
                                            get isRunning() {
                                                return 0 !== e.current;
                                            },
                                        }),
                                        [],
                                    )
                                );
                            })(),
                            C = 0 !== s && i,
                            v = s ? s - E.current.startCenterX : F;
                        (0, n.useEffect)(() => {
                            if (((E.current.isValid = !1), t))
                                return re(() => {
                                    const e = b.current,
                                        n = u.current;
                                    if (n && e) {
                                        const u = e.getBoundingClientRect(),
                                            a = n.getBoundingClientRect(),
                                            i = u.left + 0.5 * u.width;
                                        ((E.current = {
                                            isValid: !0,
                                            minXRestriction: a.left,
                                            maxXRestriction: a.left + a.width,
                                            startX: u.left,
                                            startCenterX: i,
                                        }),
                                            c(V.Ready, { dragId: t, currentCenterX: i }));
                                    }
                                });
                        }, [d]);
                        const y = (0, n.useCallback)(
                                (e) => {
                                    ((m.current.isDragActive = e),
                                        A(e),
                                        m.current.grabActivationPassed && !e && W(!1, _));
                                },
                                [_],
                            ),
                            x = (0, n.useCallback)(() => {
                                (c(V.DragStart, { dragId: m.current.id }),
                                    (m.current.grabActivationPassed = !0),
                                    W(!0, _));
                            }, [c, _]),
                            T = (0, n.useCallback)((e) => {
                                const t = m.current,
                                    u = E.current,
                                    n = u.startX,
                                    a = u.startCenterX,
                                    i = u.minXRestriction,
                                    r = u.maxXRestriction,
                                    s = a - n,
                                    o = e - t.clickCenterOffset;
                                t.dropCenterX = ((e, t, u, n) => {
                                    const a = u + t,
                                        i = n - t;
                                    return e < a ? a : e > i ? i : e;
                                })(o, s, i, r);
                            }, []),
                            k = (0, n.useCallback)(
                                (e) => {
                                    const t = m.current,
                                        u = E.current;
                                    0 === e.button &&
                                        !t.isDragActive &&
                                        u.isValid &&
                                        i &&
                                        !o &&
                                        b.current &&
                                        ((t.actualX = e.clientX),
                                        (t.clickCenterOffset = t.actualX - u.startCenterX),
                                        y(!0));
                                },
                                [i, o, y],
                            ),
                            O = (0, n.useCallback)(() => {
                                !r || (i && E.current.isValid) || r();
                            }, [i, r]);
                        (I(
                            p ? w.n.ESCAPE : w.n.NONE,
                            (function (e) {
                                const t = (0, n.useRef)(e);
                                return (
                                    (0, n.useLayoutEffect)(() => {
                                        t.current = e;
                                    }),
                                    (0, n.useCallback)((...e) => (0, t.current)(...e), B)
                                );
                            })(() => y(!1)),
                        ),
                            (0, n.useEffect)(() => {
                                i && s && f(0);
                            }, [s, i]));
                        const R = !p && m.current.grabActivationPassed;
                        ((0, n.useLayoutEffect)(() => {
                            m.current.id = t;
                        }, [t]),
                            (0, n.useEffect)(() => {
                                if (R) {
                                    const e = m.current;
                                    (c(V.Drop, { dragId: e.id, currentCenterX: e.dropCenterX }),
                                        s === e.dropCenterX &&
                                            ((e.grabActivationPassed = !1),
                                            D.run(() => c(V.DropExit, { dragId: e.id }))));
                                }
                            }, [R, D, s, c]),
                            (0, n.useEffect)(() => {
                                if (i && p && m.current.id) {
                                    const e = l.O.client.events.mouse.up(([e, t]) => {
                                            if ('outside' === t) return y(!1);
                                            const u = m.current,
                                                n = e.clientX;
                                            (n === u.actualX && 0 === e.button && !m.current.grabActivationPassed
                                                ? r && r()
                                                : m.current.grabActivationPassed && T(n),
                                                m.current.isDragActive && y(!1));
                                        }),
                                        t = l.O.client.events.mouse.move(([e]) => {
                                            const t = m.current;
                                            if ((0 === e.clientX && 0 === e.clientY) || !t.isDragActive) return;
                                            const u = e.clientX,
                                                n = t.grabActivationPassed;
                                            (!n && x(),
                                                u !== t.actualX &&
                                                    ((t.actualX = u),
                                                    T(u),
                                                    n && c(V.Drag, { dragId: t.id, currentCenterX: t.dropCenterX }),
                                                    f(t.dropCenterX - E.current.startCenterX)));
                                        });
                                    return () => {
                                        (t(), e());
                                    };
                                }
                            }, [x, c, p, i, r, y, T]));
                        const L = i ? S()(Nt, Pt, p && Ht, R && zt, C && Mt, s && $t) : S()(Nt, s && jt);
                        return a().createElement(
                            'div',
                            {
                                id: t,
                                ref: b,
                                onClick: O,
                                onMouseDown: k,
                                onTransitionEnd: (e) => {
                                    const t = m.current;
                                    e.target === b.current &&
                                        t.grabActivationPassed &&
                                        ((t.grabActivationPassed = !1), D.run(() => c(V.DropExit, { dragId: t.id })));
                                },
                                className: L,
                                style: { left: v },
                            },
                            e,
                        );
                    };
                let Wt;
                !(function (e) {
                    ((e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next'));
                })(Wt || (Wt = {}));
                const Ut = 'KeyLabel_base_ec',
                    qt = 'KeyLabel_base__current_c2',
                    Xt = 'KeyLabel_base__next_fa',
                    Vt = ({ text: e, show: t, panelType: u, shellState: n, className: i }) => {
                        if (!e) return null;
                        const r = 'KEY_NONE' === e ? '..' : String(R.strings.readable_key_names.$dyn(e));
                        return a().createElement(
                            'div',
                            { className: S()(Ut, n === Wt.Current && qt, n === Wt.Next && Xt, i) },
                            a().createElement(mt, { isTruncated: !0, text: r, show: t, panelType: u }),
                        );
                    },
                    Kt = ['children'];
                function Yt() {
                    return (
                        (Yt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Yt.apply(this, arguments)
                    );
                }
                const Zt = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Kt);
                        return a().createElement(
                            Se,
                            Yt(
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
                    Qt = ({ children: e, slotType: t, slotId: u, panelType: i, isEnabled: r = !0 }) => {
                        const s = (0, n.useMemo)(() => ({ slotType: t, slotId: u }), [t, u]);
                        return a().createElement(
                            Zt,
                            {
                                isEnabled: r,
                                args: s,
                                decoratorId: [F.Battle, F.Prebattle].includes(i)
                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                    : 0,
                            },
                            a().createElement('div', null, e),
                        );
                    },
                    Jt = 'Close_base_f3',
                    eu = 'Close_base__invisible_0e',
                    tu = 'Close_base__shown_a2',
                    uu = 'Close_base__hover_6d',
                    nu = 'Close_base__down_2b',
                    au = (0, n.memo)(
                        ({ id: e, show: t = !0, onClick: u, soundHover: i = 'highlight', soundClick: r = 'play' }) => {
                            const s = (0, n.useState)(!1),
                                o = s[0],
                                l = s[1],
                                c = (0, n.useState)(!1),
                                _ = c[0],
                                d = c[1],
                                m = (0, n.useState)(!1),
                                E = m[0],
                                b = m[1],
                                g = (0, n.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                p = (0, n.useCallback)(() => {
                                    (d(!0), i && T(i));
                                }, [i]),
                                A = (0, n.useCallback)(() => {
                                    (l(!1), d(!1));
                                }, []),
                                h = (0, n.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && (l(!0), r && T(r));
                                    },
                                    [t, r],
                                ),
                                F = (0, n.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && u && u();
                                    },
                                    [t, u],
                                );
                            (0, n.useEffect)(
                                () =>
                                    re(() => {
                                        b(!0);
                                    }),
                                [],
                            );
                            const f = S()(Jt, !E && eu, E && t && tu, o && nu, _ && uu);
                            return a().createElement('div', {
                                id: e,
                                onMouseOver: p,
                                onMouseLeave: A,
                                onMouseDown: h,
                                onMouseUp: F,
                                className: f,
                                onClick: g,
                            });
                        },
                    ),
                    iu = 'Slot_base_3a',
                    ru = 'Slot_label_e6',
                    su = 'Slot_close_bb',
                    ou = 'Slot_disabled_5d',
                    lu = 'Slot_shadow_a7',
                    cu = 'Slot_category_2c';
                let _u;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(_u || (_u = {}));
                const du = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: a = 0,
                        args: i,
                        isEnabled: r = !0,
                        onMouseDown: s,
                    }) => {
                        const o = (0, n.useCallback)(() => {
                                ((0, y.c9)(y.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: i,
                                }),
                                    k.playYes());
                            }, [i, t, u, a]),
                            l = (0, n.useCallback)(() => {
                                (0, y.c9)(y.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, u, a]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    (s && s(e), ((e) => e.button === _u.RIGHT)(e) && o());
                                },
                                [s, o],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === r && l();
                            }, [r, l]),
                            r ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    mu = ['children'];
                function Eu() {
                    return (
                        (Eu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Eu.apply(this, arguments)
                    );
                }
                const bu = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, mu);
                    return a().createElement(
                        du,
                        Eu({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                function gu() {
                    const e = (0, n.useRef)(0);
                    return (
                        se(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, n.useMemo)(
                            () => ({
                                run: (t, u) => {
                                    (window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            ((e.current = 0), t());
                                        }, u)));
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
                }
                const pu = 'select',
                    Au = 'undo',
                    hu = 'swap',
                    Fu = 'demount',
                    fu = 'demount_from_setups',
                    Du = 'destroy',
                    Cu = 1600;
                let vu;
                !(function (e) {
                    ((e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount'));
                })(vu || (vu = {}));
                const Su = { [hu]: 200, [Au]: 250, [pu]: 250, [Du]: 1400, [Fu]: Cu, [fu]: Cu, demount_from_setup: Cu },
                    Bu = 'BackEffects_shine_f6',
                    wu = 'BackEffects_sparks_55',
                    yu = 'BackEffects_nut_79',
                    xu = 'BackEffects_wrench_5a',
                    Iu = { enterActive: 'BackEffects_shine__enterActive_54' },
                    Tu = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    ku = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    Ou = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    Ru = [Fu, fu],
                    Lu = a().memo(({ in: e, actionType: t }) =>
                        a().createElement(
                            a().Fragment,
                            null,
                            a().createElement(
                                Xe.Z,
                                { in: e, timeout: 200, classNames: Iu },
                                a().createElement('div', { className: Bu }),
                            ),
                            a().createElement(
                                Xe.Z,
                                { in: e, timeout: 400, classNames: Tu },
                                a().createElement('div', { className: wu }),
                            ),
                            Ru.includes(t) &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        Xe.Z,
                                        { in: e, timeout: 600, classNames: ku },
                                        a().createElement('div', { className: yu }),
                                    ),
                                    a().createElement(
                                        Xe.Z,
                                        { in: e, timeout: 600, classNames: Ou },
                                        a().createElement('div', { className: xu }),
                                    ),
                                ),
                        ),
                    ),
                    Nu = 'ColorMask_base_60',
                    Pu = 'ColorMask_base__enterActive_62',
                    Mu = ({ inProp: e, maskImage: t }) =>
                        a().createElement(
                            Xe.Z,
                            { in: e, timeout: 1200, classNames: { enterActive: Pu } },
                            a().createElement('div', { className: Nu, style: { maskImage: `url(${t})` } }),
                        ),
                    $u = {
                        base__exitLeft: 'SlotTransitions_base__exitLeft_d8',
                        'animation-left': 'SlotTransitions_animation-left_27',
                        base__exitLeftFade: 'SlotTransitions_base__exitLeftFade_53',
                        'animation-fade': 'SlotTransitions_animation-fade_ce',
                        base__enterRight: 'SlotTransitions_base__enterRight_bb',
                        'animation-right': 'SlotTransitions_animation-right_31',
                        base__enterRightFade: 'SlotTransitions_base__enterRightFade_63',
                        base__exitRight: 'SlotTransitions_base__exitRight_b9',
                        base__enterLeft: 'SlotTransitions_base__enterLeft_e9',
                        base__exitRightSwap: 'SlotTransitions_base__exitRightSwap_64',
                        'animation-right-long': 'SlotTransitions_animation-right-long_bd',
                        base__enterRightSwap: 'SlotTransitions_base__enterRightSwap_5e',
                        base__enterLeftSwap: 'SlotTransitions_base__enterLeftSwap_da',
                        'animation-left-long': 'SlotTransitions_animation-left-long_ec',
                        base__exitLeftSwap: 'SlotTransitions_base__exitLeftSwap_c3',
                        base__exitFade: 'SlotTransitions_base__exitFade_4c',
                        base__enterFade: 'SlotTransitions_base__enterFade_77',
                        base: 'SlotTransitions_base_6d',
                        base__enter: 'SlotTransitions_base__enter_54',
                        base__enterFitting: 'SlotTransitions_base__enterFitting_c7',
                        baseShells__exitLeft: 'SlotTransitions_baseShells__exitLeft_1e',
                        'animation-left-shells': 'SlotTransitions_animation-left-shells_0d',
                        baseShells__enterRight: 'SlotTransitions_baseShells__enterRight_66',
                        'animation-right-shells': 'SlotTransitions_animation-right-shells_7c',
                        baseShells__exitRight: 'SlotTransitions_baseShells__exitRight_e4',
                        baseShells__enterLeft: 'SlotTransitions_baseShells__enterLeft_94',
                        baseShells__exitRightSwap: 'SlotTransitions_baseShells__exitRightSwap_fd',
                        'animation-right-long-shells': 'SlotTransitions_animation-right-long-shells_41',
                        baseShells__enterRightSwap: 'SlotTransitions_baseShells__enterRightSwap_41',
                        baseShells__enterLeftSwap: 'SlotTransitions_baseShells__enterLeftSwap_19',
                        'animation-left-long-shells': 'SlotTransitions_animation-left-long-shells_00',
                        baseShells__exitLeftSwap: 'SlotTransitions_baseShells__exitLeftSwap_04',
                        baseShells__exitFade: 'SlotTransitions_baseShells__exitFade_1b',
                        baseShells__enterFade: 'SlotTransitions_baseShells__enterFade_72',
                        baseOptDevices__exitLeft: 'SlotTransitions_baseOptDevices__exitLeft_fe',
                        baseOptDevices__exitLeftFade: 'SlotTransitions_baseOptDevices__exitLeftFade_8a',
                        baseOptDevices__enterRight: 'SlotTransitions_baseOptDevices__enterRight_5d',
                        baseOptDevices__enterRightFade: 'SlotTransitions_baseOptDevices__enterRightFade_2c',
                        baseOptDevices__exitRight: 'SlotTransitions_baseOptDevices__exitRight_72',
                        baseOptDevices__enterLeft: 'SlotTransitions_baseOptDevices__enterLeft_0f',
                        baseOptDevices__exitRightSwap: 'SlotTransitions_baseOptDevices__exitRightSwap_09',
                        baseOptDevices__enterRightSwap: 'SlotTransitions_baseOptDevices__enterRightSwap_04',
                        baseOptDevices__enterLeftSwap: 'SlotTransitions_baseOptDevices__enterLeftSwap_52',
                        baseOptDevices__exitLeftSwap: 'SlotTransitions_baseOptDevices__exitLeftSwap_e9',
                        baseOptDevices__enterFitting: 'SlotTransitions_baseOptDevices__enterFitting_8b',
                        'animation-fitting': 'SlotTransitions_animation-fitting_24',
                        baseOptDevices__exitFittingRemove: 'SlotTransitions_baseOptDevices__exitFittingRemove_fc',
                        'animation-fitting-remove': 'SlotTransitions_animation-fitting-remove_e0',
                        baseOptDevices__exitActiveFitting: 'SlotTransitions_baseOptDevices__exitActiveFitting_d0',
                        baseOptDevices__exitDestroy: 'SlotTransitions_baseOptDevices__exitDestroy_c9',
                        'animation-destroy': 'SlotTransitions_animation-destroy_12',
                        baseOptDevices__enterDestroy: 'SlotTransitions_baseOptDevices__enterDestroy_19',
                        baseOptDevices__exitDemount: 'SlotTransitions_baseOptDevices__exitDemount_e3',
                        'animation-bright-up': 'SlotTransitions_animation-bright-up_8e',
                        'animation-demount': 'SlotTransitions_animation-demount_d8',
                        baseOptDevices__enterDemount: 'SlotTransitions_baseOptDevices__enterDemount_8a',
                        baseOptDevices__exitFade: 'SlotTransitions_baseOptDevices__exitFade_10',
                        baseOptDevices__enterFade: 'SlotTransitions_baseOptDevices__enterFade_cf',
                        baseOptDevices__enterDemountFade: 'SlotTransitions_baseOptDevices__enterDemountFade_57',
                        baseConsumables__exitLeft: 'SlotTransitions_baseConsumables__exitLeft_d9',
                        baseConsumables__exitLeftFade: 'SlotTransitions_baseConsumables__exitLeftFade_4f',
                        baseConsumables__enterRight: 'SlotTransitions_baseConsumables__enterRight_02',
                        baseConsumables__enterRightFade: 'SlotTransitions_baseConsumables__enterRightFade_c6',
                        baseConsumables__exitRight: 'SlotTransitions_baseConsumables__exitRight_39',
                        baseConsumables__enterLeft: 'SlotTransitions_baseConsumables__enterLeft_97',
                        baseConsumables__exitRightSwap: 'SlotTransitions_baseConsumables__exitRightSwap_8a',
                        baseConsumables__enterRightSwap: 'SlotTransitions_baseConsumables__enterRightSwap_28',
                        baseConsumables__enterLeftSwap: 'SlotTransitions_baseConsumables__enterLeftSwap_8e',
                        baseConsumables__exitLeftSwap: 'SlotTransitions_baseConsumables__exitLeftSwap_0e',
                        baseConsumables__enterFitting: 'SlotTransitions_baseConsumables__enterFitting_13',
                        baseConsumables__exitFittingRemove: 'SlotTransitions_baseConsumables__exitFittingRemove_01',
                        baseConsumables__exitActiveFitting: 'SlotTransitions_baseConsumables__exitActiveFitting_10',
                        baseConsumables__exitFade: 'SlotTransitions_baseConsumables__exitFade_5b',
                        baseConsumables__enterFade: 'SlotTransitions_baseConsumables__enterFade_bd',
                        baseBattleAbilities__exitLeft: 'SlotTransitions_baseBattleAbilities__exitLeft_52',
                        baseBattleAbilities__exitLeftFade: 'SlotTransitions_baseBattleAbilities__exitLeftFade_a9',
                        baseBattleAbilities__enterRight: 'SlotTransitions_baseBattleAbilities__enterRight_7b',
                        baseBattleAbilities__enterRightFade: 'SlotTransitions_baseBattleAbilities__enterRightFade_d3',
                        baseBattleAbilities__exitRight: 'SlotTransitions_baseBattleAbilities__exitRight_fc',
                        baseBattleAbilities__enterLeft: 'SlotTransitions_baseBattleAbilities__enterLeft_97',
                        baseBattleAbilities__exitRightSwap: 'SlotTransitions_baseBattleAbilities__exitRightSwap_7d',
                        baseBattleAbilities__enterRightSwap: 'SlotTransitions_baseBattleAbilities__enterRightSwap_e5',
                        baseBattleAbilities__enterLeftSwap: 'SlotTransitions_baseBattleAbilities__enterLeftSwap_ca',
                        baseBattleAbilities__exitLeftSwap: 'SlotTransitions_baseBattleAbilities__exitLeftSwap_c0',
                        baseBattleAbilities__enterFitting: 'SlotTransitions_baseBattleAbilities__enterFitting_de',
                        baseBattleAbilities__exitFittingRemove:
                            'SlotTransitions_baseBattleAbilities__exitFittingRemove_bc',
                        baseBattleAbilities__exitActiveFitting:
                            'SlotTransitions_baseBattleAbilities__exitActiveFitting_3d',
                        baseBattleAbilities__exitFade: 'SlotTransitions_baseBattleAbilities__exitFade_21',
                        baseBattleAbilities__enterFade: 'SlotTransitions_baseBattleAbilities__enterFade_15',
                        baseBattleBoosters__enterFitting: 'SlotTransitions_baseBattleBoosters__enterFitting_56',
                        baseBattleBoosters__exitFittingRemove:
                            'SlotTransitions_baseBattleBoosters__exitFittingRemove_e5',
                        baseBattleBoosters__exitActiveFitting:
                            'SlotTransitions_baseBattleBoosters__exitActiveFitting_f1',
                    },
                    Hu = { enter: $u.base__enter, exit: $u.base__enter },
                    zu = (0, ue.Pi)(
                        ({
                            children: e,
                            slotIndex: t,
                            uniqueKey: u,
                            slotType: i,
                            isEmpty: r = !1,
                            imageSource: s,
                            itemInstalledSetupIndex: o,
                        }) => {
                            const l = ee().model.lastSlotAction.get(),
                                c = l.leftID,
                                _ = l.rightID,
                                d = l.leftIntCD,
                                m = l.rightIntCD,
                                E = l.actionType,
                                b = l.intCD,
                                g = (0, n.useState)(!0),
                                p = g[0],
                                A = g[1],
                                h = (0, n.useState)(!0),
                                F = h[0],
                                f = h[1],
                                D = (0, n.useState)(s),
                                C = D[0],
                                v = D[1],
                                S = (0, n.useState)(u),
                                B = S[0],
                                w = S[1],
                                y = (0, n.useState)(o),
                                x = y[0],
                                I = y[1],
                                T = gu(),
                                k = gu(),
                                O = (b === u || b === B) && x !== o && [Du, Fu, fu].includes(E),
                                R = -1 === d || -1 === m,
                                L = i ? `base${i[0].toUpperCase() + i.slice(1)}` : 'base',
                                N = Su[E] || 0;
                            (0, n.useEffect)(() => {
                                r || v(s);
                            }, [r, s]);
                            const P = (0, n.useCallback)(
                                    (e) => {
                                        const u = Object.assign({}, Hu);
                                        switch (E) {
                                            case hu: {
                                                const e = c === t ? vu.RIGHT : vu.LEFT,
                                                    n = _ - c != 1 ? vu.SWAP : '';
                                                ((u.enterDone = $u[`${L}__enter${e}${n}`]),
                                                    (u.exit = $u[`${L}__exit${e}${n}`]),
                                                    R &&
                                                        (r
                                                            ? (u.enterDone = $u[`${L}__enter${vu.FADE}`])
                                                            : (u.exit = $u[`${L}__exit${vu.FADE}`])));
                                                break;
                                            }
                                            case Du:
                                                ((u.enterDone = $u[`${L}__enter${vu.DESTROY}`]),
                                                    (u.exit = $u[`${L}__exit${vu.DESTROY}`]),
                                                    T.run(() => A(!0), 900),
                                                    f(!0));
                                                break;
                                            case fu:
                                            case Fu:
                                                ((u.enter = $u[`${L}__enter${vu.DEMOUNT}${vu.FADE}`]),
                                                    (u.exit = $u[`${L}__exit${vu.DEMOUNT}`]),
                                                    T.run(() => A(!0), 900));
                                                break;
                                            case pu:
                                            case Au:
                                                if (i !== Qe) {
                                                    const e = E === pu ? vu.FITTING : vu.FITTING_REMOVE;
                                                    ((u.enter = $u[`${L}__enter${e}`]),
                                                        (u.exit = $u[`${L}__exit${e}`]),
                                                        (u.exitActive = $u[`${L}__exitActive${vu.FITTING}`]));
                                                } else
                                                    ((u.enterDone = $u[`${L}__enter${vu.FADE}`]),
                                                        (u.exit = $u[`${L}__exit${vu.FADE}`]));
                                                break;
                                            default:
                                                return e;
                                        }
                                        return a().cloneElement(e, { classNames: u, timeout: N });
                                    },
                                    [E, N, c, t, _, L, R, r, T, i],
                                ),
                                M = (0, n.useCallback)(
                                    (e) => {
                                        k.run(() => {
                                            ((e.className = ''), e.classList.add($u.base), w(u), I(o));
                                        }, N);
                                    },
                                    [k, N, u, o],
                                ),
                                $ = (0, n.useCallback)(() => {
                                    (A(!1), f(!1));
                                }, []);
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(
                                    qe.Z,
                                    { component: null, childFactory: P },
                                    a().createElement(
                                        Xe.Z,
                                        {
                                            key: u,
                                            timeout: N,
                                            classNames: Hu,
                                            onEntered: M,
                                            onExiting: $,
                                            unmountOnExit: !0,
                                        },
                                        a().createElement('div', { className: $u.base }, e),
                                    ),
                                ),
                                O &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(Lu, { in: p, actionType: E }),
                                        a().createElement(Mu, { inProp: F, maskImage: C }),
                                    ),
                            );
                        },
                    ),
                    ju = (0, ue.Pi)(
                        ({
                            intCD: e,
                            id: t,
                            itemInstalledSetupIdx: u,
                            isMountedMoreThanOne: i,
                            isInstalled: r,
                            isDisabled: s,
                            imageSource: o,
                            isEmpty: l,
                            slotIndex: c,
                            slotType: _,
                            contextMenuDisabled: d,
                            isSetupSwitching: m,
                            children: E,
                        }) => {
                            const b = ee().model.root.get().vehicleCD,
                                g = (0, n.useState)(!0),
                                p = g[0],
                                A = g[1],
                                h = gu();
                            (0, n.useEffect)(() => {
                                (A(!1), h.run(() => A(!0), 100));
                            }, [b]);
                            const F = (0, n.useMemo)(
                                () => ({
                                    intCD: e,
                                    slotType: _,
                                    installedSlotId: t,
                                    isMounted: r,
                                    fieldType: 1,
                                    itemInstalledSetupIdx: u,
                                    itemInstalledSetupSlotIdx: t,
                                    isMountedMoreThanOne: i,
                                }),
                                [e, _, t, u, r, i],
                            );
                            return p
                                ? a().createElement(
                                      zu,
                                      {
                                          uniqueKey: e,
                                          isEmpty: l,
                                          slotIndex: c,
                                          slotType: _,
                                          imageSource: o,
                                          itemInstalledSetupIndex: u,
                                      },
                                      a().createElement(
                                          bu,
                                          { isEnabled: !(m || d || s || l), args: F },
                                          a().createElement('div', null, E),
                                      ),
                                  )
                                : a().createElement('div', null, E);
                        },
                    ),
                    Gu = (0, ue.Pi)(
                        ({
                            slotType: e,
                            slotIndex: t,
                            level: u,
                            isSelected: i,
                            isSetupSwitching: r,
                            isSectionSelected: s,
                            onActiveSlotChanged: o,
                            onSlotSelected: l,
                            onActiveSlotRefChanged: c,
                            onSlotClear: _,
                            panelType: d,
                            isDisabled: m = !1,
                            isBorderActive: E,
                            isIncompatible: b = !1,
                            grabberId: g,
                            containerRef: p,
                            activeDragId: A,
                            handleGrabberAction: h,
                            forceLeftUpdate: f,
                            potentialDropId: v,
                            blockOnGrabIds: S,
                            contextMenuDisabled: B,
                            groupIndex: w,
                            sectionIndex: y,
                        }) => {
                            const x = ee().model.computes.slots.slot(w, y, t),
                                I = x.imageSource,
                                T = x.isInstalled,
                                O = x.itemInstalledSetupIdx,
                                R = x.isMountedMoreThanOne,
                                L = x.overlayType,
                                N = x.keyName,
                                P = x.categoryImgSource,
                                M = x.withAttention,
                                $ = x.id,
                                H = x.intCD,
                                z = d === F.Setup,
                                j = !C(d),
                                G = !D(d),
                                W = d === F.Compare,
                                U = z && s && j,
                                q = (0, n.useRef)(!1),
                                X = (0, n.useRef)(null),
                                V = -1 === H;
                            ((0, n.useEffect)(() => {
                                if (!q.current && s && i)
                                    return re(() => {
                                        (o && o(X, e, $), (q.current = !0));
                                    });
                                q.current = !0;
                            }, [$, s, i, o, e]),
                                (0, n.useEffect)(() => {
                                    i && c(X);
                                }, [i, c]));
                            const K = ((e) => {
                                    const t = (0, n.useRef)(-1),
                                        u = (0, n.useCallback)(
                                            (u) => {
                                                if (-1 === t.current) {
                                                    const n = e(u);
                                                    n &&
                                                        (t.current = window.setTimeout(() => {
                                                            t.current = -1;
                                                        }, n));
                                                }
                                            },
                                            [e],
                                        );
                                    return ((0, n.useEffect)(() => () => clearTimeout(t.current), []), u);
                                })((0, n.useCallback)(() => (!i && j && !r && l(e, $), 500), [$, j, i, r, l, e])),
                                Y = (0, n.useCallback)(() => {
                                    m || K('');
                                }, [K, m]),
                                Z = (0, n.useCallback)(() => {
                                    G && !i && !A && !m && k.playHighlight();
                                }, [i, A, m, G]);
                            (0, n.useEffect)(() => {
                                v && k.playHighlight();
                            }, [v]);
                            const Q = (0, n.useCallback)(() => {
                                    null == _ || _($, e);
                                }, [$, _, e]),
                                J = z && !T,
                                te = Boolean(g && v === g),
                                ue = g && (U || W),
                                ne = `${e}-slot-${$}`,
                                ae = P && P.length > 0,
                                ie = ae ? { backgroundImage: `url(${P})` } : {},
                                se = {
                                    id: g,
                                    containerRef: p,
                                    isEnabled: !V,
                                    onClick: Y,
                                    isUpdateAvailable: Boolean(A),
                                    handleAction: h,
                                    forceCenterX: f,
                                    blockOnGrabIds: S,
                                },
                                oe = {
                                    isEmpty: V,
                                    intCD: H,
                                    slotType: e,
                                    slotIndex: t,
                                    imageSource: I,
                                    isDisabled: m,
                                    isInstalled: T,
                                    id: $,
                                    itemInstalledSetupIdx: O,
                                    isMountedMoreThanOne: R,
                                    contextMenuDisabled: B,
                                    isSetupSwitching: r,
                                };
                            return a().createElement(
                                'div',
                                { className: iu, onMouseEnter: Z, id: ne },
                                (s || W) &&
                                    !T &&
                                    a().createElement(
                                        'div',
                                        { className: su },
                                        a().createElement(au, { id: `close-${ne}`, show: !A, onClick: Q }),
                                    ),
                                a().createElement(
                                    Qt,
                                    { slotType: e, slotId: $, isEnabled: !A, panelType: d },
                                    a().createElement(
                                        'div',
                                        { ref: X },
                                        a().createElement(
                                            Dt,
                                            {
                                                activeDragId: A,
                                                slotType: e,
                                                isSelected: i,
                                                isBorderActive: Boolean(E),
                                                panelType: d,
                                                isDisabled: m,
                                                isPotentialDrop: te,
                                                onClick: ue ? void 0 : Y,
                                            },
                                            j &&
                                                a().createElement(
                                                    'div',
                                                    { className: ru },
                                                    a().createElement(Vt, { text: N, show: Boolean(s), panelType: d }),
                                                ),
                                            a().createElement(
                                                Ft,
                                                { when: Boolean(ue), wrapper: Gt, withProps: se },
                                                a().createElement(
                                                    Ft,
                                                    { when: j, wrapper: ju, withProps: oe },
                                                    a().createElement(Tt, {
                                                        imageSource: I,
                                                        isIncompatible: b,
                                                        overlayType: L,
                                                        level: u,
                                                        isTemporary: J,
                                                        withAttention: M,
                                                    }),
                                                ),
                                            ),
                                            ae &&
                                                a().createElement(
                                                    a().Fragment,
                                                    null,
                                                    a().createElement('span', { className: lu }),
                                                    a().createElement('span', { className: cu, style: ie }),
                                                ),
                                            m && a().createElement('div', { className: ou }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Wu = 'BattleAbilitySlot_base_74',
                    Uu = 'BattleAbilitySlot_rank_01',
                    qu = ['rank'];
                const Xu = (e) => {
                        let t = e.rank,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, qu);
                        return a().createElement(
                            'div',
                            { className: Wu },
                            a().createElement(Gu, u),
                            t && a().createElement('div', { className: Uu, style: { backgroundImage: `url(${t})` } }),
                        );
                    },
                    Vu = {
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
                let Ku, Yu;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Ku || (Ku = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(Yu || (Yu = {})));
                const Zu = ({
                        children: e,
                        size: t,
                        disabled: u,
                        mixClass: i,
                        onMouseEnter: r,
                        onMouseMove: s,
                        onMouseDown: o,
                        onMouseUp: l,
                        onMouseLeave: c,
                        onClick: _,
                        isFocused: d = !1,
                        type: m = Ku.primary,
                        soundHover: E = 'highlight',
                        soundClick: b = 'play',
                    }) => {
                        const g = (0, n.useRef)(null),
                            p = (0, n.useState)(d),
                            A = p[0],
                            h = p[1],
                            F = (0, n.useState)(!1),
                            f = F[0],
                            D = F[1];
                        return (
                            (0, n.useEffect)(() => {
                                function e(e) {
                                    A && null !== g.current && !g.current.contains(e.target) && h(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [A]),
                            (0, n.useEffect)(() => {
                                h(d);
                            }, [d]),
                            a().createElement(
                                'div',
                                {
                                    ref: g,
                                    className: S()(
                                        Vu.base,
                                        Vu[`base__${m}`],
                                        u && Vu.base__disabled,
                                        t && Vu[`base__${t}`],
                                        A && Vu.base__focus,
                                        f && Vu.base__highlightActive,
                                        i,
                                    ),
                                    onMouseEnter: function (e) {
                                        u || (null !== E && T(E), r && r(e));
                                    },
                                    onMouseMove: function (e) {
                                        s && s(e);
                                    },
                                    onMouseUp: function (e) {
                                        u || (l && l(e), D(!1));
                                    },
                                    onMouseDown: function (e) {
                                        u ||
                                            (null !== b && T(b),
                                            o && o(e),
                                            d && (u || (g.current && (g.current.focus(), h(!0)))),
                                            D(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        u || (c && c(e), D(!1));
                                    },
                                    onClick: function (e) {
                                        u || (_ && _(e));
                                    },
                                },
                                m !== Ku.ghost &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('div', { className: Vu.back }),
                                        a().createElement('span', { className: Vu.texture }),
                                    ),
                                a().createElement(
                                    'span',
                                    { className: S()(Vu.state, Vu.state__default) },
                                    a().createElement('span', { className: Vu.stateDisabled }),
                                    a().createElement('span', { className: Vu.stateHighlightHover }),
                                    a().createElement('span', { className: Vu.stateHighlightActive }),
                                ),
                                a().createElement(
                                    'span',
                                    { className: Vu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    },
                    Qu = {
                        base: 'Specialization_base_ec',
                        base__tiny: 'Specialization_base__tiny_fe',
                        base__small: 'Specialization_base__small_a3',
                        base__medium: 'Specialization_base__medium_85',
                        base__large: 'Specialization_base__large_07',
                        base__huge: 'Specialization_base__huge_33',
                        base__setup: 'Specialization_base__setup_5e',
                        base__correct: 'Specialization_base__correct_4c',
                        glow: 'Specialization_glow_f0',
                        icon: 'Specialization_icon_3a',
                        icon__tiny: 'Specialization_icon__tiny_05',
                        icon__small: 'Specialization_icon__small_cf',
                        icon__medium: 'Specialization_icon__medium_ed',
                        icon__large: 'Specialization_icon__large_98',
                        icon__huge: 'Specialization_icon__huge_f7',
                        specializationWrapper: 'Specialization_specializationWrapper_bf',
                        specializationButton: 'Specialization_specializationButton_45',
                    },
                    Ju = ({
                        name: e,
                        isCorrect: t,
                        isSpecializationActive: u = !0,
                        isDynamic: i,
                        mediaSize: r,
                        isClickable: s,
                        onSpecializationClick: o,
                        index: l,
                    }) => {
                        const c = r !== H.None,
                            _ = (0, n.useCallback)(() => {
                                s && u && o && o(l);
                            }, [l, s, u, o]),
                            d = (0, n.useMemo)(() => {
                                let u = '';
                                c && (u = (r === H.Large || r === H.Huge ? H.Large : H.Medium) + '_');
                                const n = `${u}${e}_${t ? 'on' : 'off'}`,
                                    a = R.images.gui.maps.icons.specialization.$dyn(n);
                                return a && { backgroundImage: `url(${a})` };
                            }, [e, t, r, c]),
                            m = (0, n.useMemo)(
                                () => ({ spec: e, isDyn: i, isClickable: s, tooltip: 'hangarSlotSpec' }),
                                [e, i, s],
                            );
                        if (!d) return null;
                        const E = S()(
                                `specialization-${e}`,
                                Qu.base,
                                c && Qu[`base__${r}`],
                                u && Qu.base__setup,
                                t && Qu.base__correct,
                            ),
                            b = S()(Qu.icon, c && Qu[`icon__${r}`]),
                            g = c ? '' : Qu.specializationWrapper,
                            p = a().createElement(
                                'div',
                                { key: e, className: E },
                                a().createElement('div', { className: Qu.glow }),
                                a().createElement('div', { className: b, style: d }),
                            );
                        return a().createElement(
                            Zt,
                            { args: m },
                            s && u
                                ? a().createElement(
                                      Zu,
                                      { size: Yu.small, type: Ku.ghost, mixClass: Qu.specializationButton, onClick: _ },
                                      p,
                                  )
                                : a().createElement('div', { className: g }, p),
                        );
                    },
                    en = 'Specializations_base_ab';
                function tn() {
                    return (
                        (tn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        tn.apply(this, arguments)
                    );
                }
                const un = ({
                        specializations: e,
                        isSpecializationActive: t = !0,
                        isDynamic: u,
                        mediaSize: n = H.None,
                        activeSpecsMask: i,
                        onSpecializationClick: r,
                    }) =>
                        e.length
                            ? a().createElement(
                                  'div',
                                  { className: en, key: i },
                                  g(e, (e, i) =>
                                      a().createElement(
                                          Ju,
                                          tn({ index: i, key: e.name }, e, {
                                              isSpecializationActive: t,
                                              isDynamic: u,
                                              mediaSize: n,
                                              onSpecializationClick: r,
                                          }),
                                      ),
                                  ),
                              )
                            : null,
                    nn = 'OptDeviceSlot_base_14',
                    an = 'OptDeviceSlot_specializations_c3',
                    rn = ['groupIndex', 'sectionIndex', 'slotIndex', 'activeSpecsMask', 'isChangeSetupIndex'];
                function sn() {
                    return (
                        (sn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        sn.apply(this, arguments)
                    );
                }
                const on = (0, ue.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            n = e.slotIndex,
                            i = e.activeSpecsMask,
                            r = e.isChangeSetupIndex,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, rn);
                        const o = ee(),
                            l = o.controls,
                            c = o.model.computes.specializations(t, u, n),
                            _ = c.specializations.length,
                            d = s.panelType === F.Setup || s.panelType === F.Compare,
                            m = !C(s.panelType),
                            E = c.isDynamic;
                        return a().createElement(
                            'div',
                            { className: S()(nn, _ && !E && !r && 'specializationsSlot') },
                            m &&
                                a().createElement(
                                    'div',
                                    { className: an },
                                    a().createElement(un, {
                                        specializations: c.specializations,
                                        isDynamic: E,
                                        activeSpecsMask: i,
                                        isSpecializationActive: d,
                                        onSpecializationClick: (e) => {
                                            l.specializationSelect({ slotId: s.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            a().createElement(Gu, sn({}, s, { groupIndex: t, sectionIndex: u, slotIndex: n })),
                        );
                    }),
                    ln = {
                        base: 'ToggleCamouflageSlot_base_17',
                        base__grabbing: 'ToggleCamouflageSlot_base__grabbing_79',
                        base__hangar: 'ToggleCamouflageSlot_base__hangar_e7',
                        base__setup: 'ToggleCamouflageSlot_base__setup_44',
                        base__compare: 'ToggleCamouflageSlot_base__compare_0d',
                        base__selected: 'ToggleCamouflageSlot_base__selected_0c',
                        base__dragIn: 'ToggleCamouflageSlot_base__dragIn_68',
                        base__dragInActive: 'ToggleCamouflageSlot_base__dragInActive_b1',
                        base__toggle: 'ToggleCamouflageSlot_base__toggle_fc',
                        base__disabled: 'ToggleCamouflageSlot_base__disabled_1e',
                        image: 'ToggleCamouflageSlot_image_ee',
                        glow: 'ToggleCamouflageSlot_glow_45',
                        toggle: 'ToggleCamouflageSlot_toggle_c2',
                    },
                    cn = ({ id: e, isSelected: t, isLocked: u, onSlotSelected: i, panelType: r }) => {
                        const s = tt,
                            o = (0, n.useCallback)(() => {
                                i(s, e);
                            }, [e, i, s]),
                            l = S()(ln.base, ln[`base__${r}`], u && ln.base__disabled, t && ln.base__toggle),
                            c = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: 'url(R.images.gui.maps.icons.quests.bonuses.small.camouflage)',
                                }),
                                [],
                            ),
                            _ = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            ),
                            d = `toggle-camouflage-slot-${e}`;
                        return a().createElement(
                            Qt,
                            { slotType: s, slotId: e, panelType: r },
                            a().createElement(
                                'div',
                                { id: d, className: l, onClick: o, onMouseEnter: k.playHighlight },
                                t && a().createElement('div', { className: ln.glow }),
                                a().createElement('div', { className: ln.image, style: c }),
                                a().createElement('div', { className: ln.toggle, style: _ }),
                            ),
                        );
                    },
                    _n = ['groupIndex', 'sectionIndex', 'slotIndex', 'sectionType'];
                function dn() {
                    return (
                        (dn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        dn.apply(this, arguments)
                    );
                }
                const mn = (0, ue.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            n = e.slotIndex,
                            i = e.sectionType,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, _n);
                        const s = ee().model,
                            o = s.computes.slots.slot(t, u, n),
                            l = s.ammunitionPanel.get(),
                            c = l.selectedSection,
                            _ = l.selectedSlot,
                            d = (c === i ? _ : -1) === o.id;
                        switch (i) {
                            case 'optDevices': {
                                const e = o;
                                return a().createElement(
                                    on,
                                    dn({}, e, r, { groupIndex: t, sectionIndex: u, slotIndex: n, isSelected: d }),
                                );
                            }
                            case tt: {
                                const e = o;
                                return a().createElement(
                                    cn,
                                    dn({}, r, e, { groupIndex: t, sectionIndex: u, slotIndex: n }),
                                );
                            }
                            case Je: {
                                const e = o;
                                return a().createElement(
                                    Xu,
                                    dn({}, r, e, { groupIndex: t, sectionIndex: u, slotIndex: n, isSelected: d }),
                                );
                            }
                            default:
                                return a().createElement(
                                    Gu,
                                    dn({}, r, { isSelected: d, groupIndex: t, sectionIndex: u, slotIndex: n }),
                                );
                        }
                    }),
                    En = 'Slots_base_27',
                    bn = [
                        'groupIndex',
                        'sectionIndex',
                        'sectionType',
                        'onActiveSlotChanged',
                        'isDisabled',
                        'blockOnGrabIds',
                        'isChangeSetupIndex',
                        'setIsExitBlocked',
                    ];
                function gn() {
                    return (
                        (gn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        gn.apply(this, arguments)
                    );
                }
                const pn = (0, ue.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            i = e.sectionType,
                            r = e.onActiveSlotChanged,
                            s = e.isDisabled,
                            o = e.blockOnGrabIds,
                            l = e.isChangeSetupIndex,
                            c = e.setIsExitBlocked,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, bn);
                        const d = (0, n.useRef)(null),
                            m = (0, n.useRef)(null),
                            E = ee(),
                            b = E.model,
                            g = E.controls,
                            p = b.computes.slots.length(t, u),
                            A = b.ammunitionPanel.get(),
                            h = A.selectedSection,
                            F = A.selectedSlot,
                            f = A.syncInitiator,
                            D = (0, n.useCallback)(
                                (e, t) => {
                                    g.dragDropSwap({
                                        sectionType: i,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(t[t.length - 1]),
                                    });
                                },
                                [g, i],
                            ),
                            C = h === i,
                            v = i === Je,
                            B = C ? F : -1,
                            w = `${i}-${p}slots`,
                            y = Z({ baseId: w, slotsLength: p, handleSwap: D, setIsExitBlocked: c, syncInitiator: f }),
                            x = y.handleGrabberAction,
                            I = y.dragState,
                            T = y.getForceCenterX;
                        (0, n.useEffect)(() => {
                            C && -1 !== B && d.current && r(d, h, B);
                        }, [r, C, h, B]);
                        const O = (e, t) => {
                                if ((s || k.playClick(), 'number' != typeof t))
                                    return console.warn('selectedSlot is not a number');
                                g.sectionSelect({ selectedSlot: t, selectedSection: e });
                            },
                            R = (e) => {
                                d.current = e ? e.current : null;
                            },
                            L = (e, t) => {
                                g.slotClear({ slotId: e, sectionType: t });
                            };
                        return a().createElement(
                            'div',
                            { id: w, ref: m, className: S()(En, i) },
                            Fe(p, (e) => {
                                const c = !v && p > 1 ? `${w}-${e}` : '';
                                return a().createElement(
                                    n.Fragment,
                                    { key: `slot ${t}-${u}-${e}` },
                                    e > 0 && a().createElement(ht, null),
                                    a().createElement(
                                        mn,
                                        gn(
                                            {
                                                groupIndex: t,
                                                sectionIndex: u,
                                                slotIndex: e,
                                                sectionType: i,
                                                isSectionSelected: C,
                                                isDisabled: s,
                                                contextMenuDisabled: v,
                                                slotType: i,
                                                onActiveSlotChanged: r,
                                                onSlotSelected: O,
                                                onActiveSlotRefChanged: R,
                                                onSlotClear: L,
                                                grabberId: c,
                                                containerRef: m,
                                                forceLeftUpdate: T(c),
                                                activeDragId: I.activeDragId,
                                                handleGrabberAction: x,
                                                potentialDropId: I.potentialDropId,
                                                blockOnGrabIds: o,
                                                isSetupSwitching: l,
                                                isChangeSetupIndex: l,
                                            },
                                            _,
                                        ),
                                    ),
                                );
                            }),
                        );
                    }),
                    An = [
                        'groupIndex',
                        'sectionIndex',
                        'type',
                        'newItemsCount',
                        'panelType',
                        'sectionsIds',
                        'isSetupSwitching',
                        'classMix',
                    ];
                function hn() {
                    return (
                        (hn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        hn.apply(this, arguments)
                    );
                }
                const Fn = (0, ue.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            i = e.type,
                            r = e.newItemsCount,
                            s = e.panelType,
                            o = e.sectionsIds,
                            l = e.isSetupSwitching,
                            c = e.classMix,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, An);
                        const d = ee().model,
                            m = (0, n.useRef)(null),
                            E = d.ammunitionPanel.get(),
                            b = E.selectedSection,
                            g = E.syncInitiator,
                            p = d.computes.slots.length(t, u),
                            A = d.computes.slots.existFilled(t, u),
                            h = b === i,
                            f = Y(i, o),
                            D = f.selfId,
                            C = f.blockOnGrabIds,
                            v = p > 0 && s !== F.Compare && s !== F.Battle && s !== F.Respawn,
                            B = R.strings.tank_setup.section.$dyn(i);
                        if ('string' != typeof B)
                            throw new Error(`No top label text for section type ${i} or it's not a string`);
                        return a().createElement(
                            'div',
                            {
                                id: l ? Et : D,
                                ref: m,
                                className: S()(
                                    bt,
                                    c,
                                    h && 'sectionSelected',
                                    p > 1 && 'multiSlot',
                                    g >= 0 && A && 'existFilledSlots',
                                ),
                            },
                            v &&
                                a().createElement(
                                    'div',
                                    { className: gt },
                                    a().createElement(mt, { text: B, parentRef: m, show: !h, panelType: s }),
                                ),
                            a().createElement(
                                pn,
                                hn(
                                    { groupIndex: t, sectionIndex: u, sectionType: i, panelType: s, blockOnGrabIds: C },
                                    _,
                                ),
                            ),
                            Boolean(r) &&
                                a().createElement(
                                    'div',
                                    { className: pt },
                                    a().createElement(it, { value: r, size: 'small', fadeInAnimation: !0 }),
                                ),
                        );
                    }),
                    fn = 'Count_base_e4',
                    Dn = 'Count_base__zero_64',
                    Cn = ({ count: e }) => {
                        const t = S()(fn, !e && Dn);
                        return a().createElement('div', { className: t }, e);
                    },
                    vn = {
                        base: 'ShellsSlot_base_05',
                        base__grabbing: 'ShellsSlot_base__grabbing_2f',
                        shell: 'ShellsSlot_shell_ab',
                        shell__grabbing: 'ShellsSlot_shell__grabbing_98',
                        shell__active: 'ShellsSlot_shell__active_7e',
                        shell__potential: 'ShellsSlot_shell__potential_30',
                        label: 'ShellsSlot_label_da',
                        image: 'ShellsSlot_image_3f',
                        infinity: 'ShellsSlot_infinity_19',
                    },
                    Sn = ({
                        id: e,
                        itemInstalledSetupIdx: t,
                        isMountedMoreThanOne: u,
                        imageSource: i,
                        count: r,
                        isInfinity: s,
                        isSelected: o,
                        keyName: l,
                        panelType: c,
                        intCD: _,
                        slotIndex: d,
                        grabberId: m,
                        isSetupSwitching: E,
                        containerRef: b,
                        activeDragId: g,
                        handleGrabberAction: p,
                        forceLeftUpdate: A,
                        potentialDropId: h,
                        blockOnGrabIds: f,
                        shellState: D,
                        isDisabled: v,
                    }) => {
                        const B = !C(c),
                            w = (0, n.useMemo)(() => ({ backgroundImage: `url(${i})` }), [i]),
                            y = m && m === h,
                            x = m && m === g,
                            I = (0, n.useMemo)(() => {
                                const n = { slotType: Qe, slotId: e, fieldType: 1, intCD: _ };
                                return [
                                    n,
                                    Object.assign({}, n, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: t,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: u,
                                    }),
                                ];
                            }, [_, e, t, u]),
                            T = I[0],
                            k = I[1],
                            O = (0, n.useMemo)(
                                () => ({
                                    id: m,
                                    containerRef: b,
                                    isEnabled: Boolean(m) && o,
                                    isUpdateAvailable: Boolean(g),
                                    handleAction: p,
                                    forceCenterX: A,
                                    blockOnGrabIds: f,
                                }),
                                [g, f, b, A, m, p, o],
                            ),
                            L = (0, n.useMemo)(
                                () => ({ slotIndex: d, uniqueKey: _, slotType: Qe, imageSource: null }),
                                [_, d],
                            );
                        return a().createElement(
                            bu,
                            { isEnabled: B && !E && !v, args: k },
                            a().createElement(
                                Zt,
                                {
                                    args: T,
                                    decoratorId: [F.Battle, F.Prebattle].includes(c)
                                        ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                        : 0,
                                    isEnabled: !g,
                                },
                                a().createElement(
                                    'div',
                                    { id: `shell-slot-${d}`, className: vn.base },
                                    l &&
                                        a().createElement(
                                            'div',
                                            { className: vn.label },
                                            a().createElement(Vt, {
                                                text: l,
                                                show: o || c === F.Battle || c === F.Respawn,
                                                shellState: D,
                                                panelType: c,
                                                className: S()(
                                                    0 === d && vn.topLabel__first,
                                                    2 === d && vn.topLabel__last,
                                                ),
                                            }),
                                        ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: S()(
                                                vn.shell,
                                                !g && B && !v && vn.shell__active,
                                                x && vn.shell__grabbing,
                                                !x && y && vn.shell__potential,
                                            ),
                                        },
                                        a().createElement(
                                            Ft,
                                            { when: B, wrapper: Gt, withProps: O },
                                            a().createElement(
                                                Ft,
                                                { when: B, wrapper: zu, withProps: L },
                                                a().createElement('div', { className: vn.image, style: w }),
                                                !s && a().createElement(Cn, { count: r }),
                                                s && a().createElement('div', { className: vn.infinity }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Bn = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    wn = ({ id: e, isSelected: t, imageSource: u, onSlotSelected: i, panelType: r }) => {
                        const s = (0, n.useCallback)(() => {
                                !t && i(e);
                            }, [e, t, i]),
                            o = S()(Bn.slot, !t && Bn.slot__active, Bn.slot__compare),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]),
                            c = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            );
                        return a().createElement(
                            Qt,
                            { slotType: et, slotId: e, panelType: r },
                            a().createElement(
                                'div',
                                { className: Bn.base },
                                a().createElement(
                                    'div',
                                    { className: o, onClick: s, id: `shell-slot-${e}` },
                                    t && a().createElement('div', { className: Bn.glow }),
                                    a().createElement('div', { className: Bn.image, style: l }),
                                    a().createElement('div', { className: Bn.toggle, style: c }),
                                ),
                            ),
                        );
                    },
                    yn = 'ShellContainer_base_46',
                    xn = 'ShellContainer_base__compressed_13',
                    In = [
                        'groupIndex',
                        'sectionIndex',
                        'slotIndex',
                        'isCompare',
                        'handleSlotSelected',
                        'baseId',
                        'grabber',
                        'panelType',
                    ];
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
                const kn = (0, ue.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            n = e.slotIndex,
                            i = e.isCompare,
                            r = e.handleSlotSelected,
                            s = e.baseId,
                            o = e.grabber,
                            l = e.panelType,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, In);
                        const _ = o.handleGrabberAction,
                            d = o.dragState,
                            m = o.getForceCenterX,
                            E = ee().model,
                            b = E.computes.slots.length(t, u),
                            g = E.computes.slots.slot(t, u, n),
                            p = !i && b > 1 ? `${s}-${g.id}` : '';
                        return f(g)
                            ? null
                            : a().createElement(
                                  'div',
                                  { key: g.id, className: S()(yn, !i && 0 !== n && xn) },
                                  i
                                      ? a().createElement(wn, Tn({}, g, { onSlotSelected: r, panelType: l }))
                                      : a().createElement(
                                            Sn,
                                            Tn(
                                                {},
                                                g,
                                                {
                                                    slotIndex: n,
                                                    grabberId: p,
                                                    forceLeftUpdate: m(p),
                                                    activeDragId: d.activeDragId,
                                                    handleGrabberAction: _,
                                                    potentialDropId: d.potentialDropId,
                                                    panelType: l,
                                                },
                                                c,
                                            ),
                                        ),
                              );
                    }),
                    On = 'Shells_base_f9',
                    Rn = (0, ue.Pi)(
                        ({
                            panelType: e,
                            onSelected: t,
                            isCompare: u,
                            isSelected: i,
                            syncInitiator: r,
                            blockOnGrabIds: s,
                            isDisabled: o,
                            isSetupSwitching: l,
                            setIsExitBlocked: c,
                            groupIndex: _,
                            sectionIndex: d,
                        }) => {
                            const m = ee(),
                                E = m.model,
                                b = m.controls,
                                g = E.computes.slots.length(_, d),
                                p = (0, n.useRef)(!1),
                                A = (0, n.useRef)(null),
                                h = u ? et : Qe,
                                f = `${h}-${g}shells`,
                                C = !D(e),
                                v = (0, n.useCallback)(
                                    (e) => {
                                        (b.sectionSelect({ selectedSlot: e, selectedSection: h }), C && k.playClick());
                                    },
                                    [b, h, C],
                                ),
                                S = (0, n.useCallback)(() => {
                                    i || u || o || l || v(0);
                                }, [i, u, l, o, v]),
                                B = (0, n.useCallback)(
                                    (e, t) => {
                                        b.dragDropSwap({
                                            sectionType: h,
                                            dragId: Number(e[e.length - 1]),
                                            dropId: Number(t[t.length - 1]),
                                        });
                                    },
                                    [b, h],
                                ),
                                w = Z({
                                    baseId: f,
                                    slotsLength: g,
                                    handleSwap: B,
                                    setIsExitBlocked: c,
                                    syncInitiator: r,
                                });
                            return (
                                (0, n.useEffect)(
                                    () =>
                                        re(() => {
                                            p.current = !0;
                                        }),
                                    [],
                                ),
                                (0, n.useEffect)(() => {
                                    if (i && e === F.Setup) {
                                        if (!p.current)
                                            return re(() => {
                                                t();
                                            });
                                        t();
                                    }
                                }, [i, e, t]),
                                a().createElement(
                                    'div',
                                    {
                                        id: f,
                                        ref: A,
                                        className: On,
                                        onClick: S,
                                        onMouseEnter: () => {
                                            !o && C && k.playHighlight();
                                        },
                                    },
                                    Fe(g, (t) =>
                                        a().createElement(kn, {
                                            key: `${_} ${d} ${t}`,
                                            groupIndex: _,
                                            sectionIndex: d,
                                            slotIndex: t,
                                            isCompare: u,
                                            containerRef: A,
                                            handleSlotSelected: v,
                                            panelType: e,
                                            blockOnGrabIds: s,
                                            isSelected: i,
                                            isDisabled: o,
                                            isSetupSwitching: l,
                                            grabber: w,
                                            baseId: f,
                                        }),
                                    ),
                                )
                            );
                        },
                    ),
                    Ln = {
                        base: 'ShellsSection_base_08',
                        base__grabbing: 'ShellsSection_base__grabbing_2e',
                        base__hangar: 'ShellsSection_base__hangar_24',
                        base__setup: 'ShellsSection_base__setup_c8',
                        base__compare: 'ShellsSection_base__compare_e3',
                        base__selected: 'ShellsSection_base__selected_fd',
                        base__dragIn: 'ShellsSection_base__dragIn_39',
                        base__dragInActive: 'ShellsSection_base__dragInActive_96',
                        base__toggle: 'ShellsSection_base__toggle_bd',
                        base__disabled: 'ShellsSection_base__disabled_7e',
                        label: 'ShellsSection_label_38',
                        attention: 'ShellsSection_attention_7e',
                        blinking: 'ShellsSection_blinking_57',
                        border: 'ShellsSection_border_0d',
                        border__double: 'ShellsSection_border__double_a1',
                        border__triple: 'ShellsSection_border__triple_f2',
                        counter: 'ShellsSection_counter_74',
                        disabled: 'ShellsSection_disabled_c2',
                    },
                    Nn = [F.Hangar, F.Battle, F.Prebattle, F.Respawn],
                    Pn = (0, ue.Pi)(
                        ({
                            type: e,
                            sectionsIds: t,
                            panelType: u,
                            onActiveSlotChanged: i,
                            isDisabled: r,
                            isBorderActive: s,
                            classMix: o,
                            isSetupSwitching: l,
                            setIsExitBlocked: c,
                            newItemsCount: _,
                            groupIndex: d,
                            sectionIndex: m,
                        }) => {
                            const E = ee().model,
                                b = E.ammunitionPanel.get(),
                                g = b.ammoNotFull,
                                p = b.selectedSection,
                                A = b.syncInitiator,
                                h = (0, n.useRef)(null),
                                f = u === F.Compare,
                                D = p === e,
                                C = (0, n.useCallback)(() => {
                                    i(h, p, 0);
                                }, [i, p]),
                                v = Y(e, t),
                                B = v.selfId,
                                w = v.blockOnGrabIds,
                                y = ((e) => Nn.includes(e))(u) && !r && g,
                                x = E.computes.slots.filteredLength(d, m),
                                I = !f && u !== F.Battle && u !== F.Respawn;
                            return a().createElement(
                                'div',
                                {
                                    id: l ? Et : B,
                                    className: S()(
                                        Ln.base,
                                        o,
                                        Ln[`base__${u}`],
                                        !s && D && Ln.base__selected,
                                        f && Ln.base__compare,
                                        r && Ln.base__disabled,
                                    ),
                                    ref: h,
                                },
                                y && a().createElement('div', { className: Ln.attention }),
                                I &&
                                    a().createElement(
                                        'div',
                                        { className: Ln.label },
                                        a().createElement(mt, {
                                            text: R.strings.tank_setup.section.shells(),
                                            parentRef: h,
                                            show: !D,
                                            panelType: u,
                                        }),
                                    ),
                                y &&
                                    a().createElement('div', {
                                        className: S()(
                                            Ln.border,
                                            2 === x && Ln.border__double,
                                            3 === x && Ln.border__triple,
                                        ),
                                    }),
                                a().createElement(Rn, {
                                    groupIndex: d,
                                    sectionIndex: m,
                                    panelType: u,
                                    onSelected: C,
                                    isSelected: D,
                                    isCompare: f,
                                    syncInitiator: A,
                                    blockOnGrabIds: w,
                                    isDisabled: r,
                                    isSetupSwitching: l,
                                    setIsExitBlocked: c,
                                }),
                                Boolean(_) &&
                                    a().createElement(
                                        'div',
                                        { className: Ln.counter },
                                        a().createElement(it, { value: _, size: 'small', fadeInAnimation: !0 }),
                                    ),
                                r && a().createElement('div', { className: Ln.disabled }),
                            );
                        },
                    ),
                    Mn = {
                        base: 'Sections_base_13',
                        section: 'Sections_section_35',
                        section__battle: 'Sections_section__battle_d3',
                        section__small: 'Sections_section__small_73',
                        section__extraSmall: 'Sections_section__extraSmall_5f',
                        section__first: 'Sections_section__first_e2',
                    };
                function $n() {
                    return (
                        ($n =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        $n.apply(this, arguments)
                    );
                }
                const Hn = (0, ue.Pi)(
                        ({
                            groupIndex: e,
                            panelType: t,
                            isDisabled: u = !1,
                            onActiveSlotChanged: n,
                            isBorderActive: i,
                            isChangeSetupIndex: r,
                            setIsExitBlocked: s,
                        }) => {
                            const o = ee().model,
                                l = de(['section'], Mn),
                                c = o.computes.sections.IDs(e),
                                _ = {
                                    panelType: t,
                                    isDisabled: u,
                                    onActiveSlotChanged: n,
                                    isBorderActive: i,
                                    sectionsIds: c,
                                    isChangeSetupIndex: r,
                                    setIsExitBlocked: s,
                                };
                            return a().createElement(
                                'div',
                                { className: Mn.base },
                                Fe(o.computes.sections.length(e), (u) => {
                                    const n = o.computes.sections.section(e, u);
                                    if (!n.slots || !n.slots.length) return null;
                                    const i = S()(
                                        l.section,
                                        0 !== u && C(t) && Mn.section__battle,
                                        0 === u && Mn.section__first,
                                    );
                                    if (n.type === Qe || n.type === et) {
                                        const t = n;
                                        return a().createElement(
                                            Pn,
                                            $n({}, t, _, {
                                                groupIndex: e,
                                                sectionIndex: u,
                                                isSetupSwitching: r,
                                                key: `${n.name}${e}${n.slots.length}`,
                                                classMix: i,
                                            }),
                                        );
                                    }
                                    return a().createElement(
                                        Fn,
                                        $n({}, n, _, {
                                            groupIndex: e,
                                            sectionIndex: u,
                                            isSetupSwitching: r,
                                            key: `${n.name}${e}${n.slots.length}`,
                                            classMix: i,
                                        }),
                                    );
                                }),
                            );
                        },
                    ),
                    zn = 'KeyboardKey_base_57',
                    jn = 'KeyboardKey_back_43',
                    Gn = a().memo(({ text: e }) =>
                        a().createElement('div', { className: zn }, a().createElement('div', { className: jn }, e)),
                    ),
                    Wn = 'SetupSwitchHotkey_base_4c',
                    Un = 'SetupSwitchHotkey_hotKeyWrapper_8d',
                    qn = 'SetupSwitchHotkey_plusWrapper_f0',
                    Xn = 'SetupSwitchHotkey_plus_f0',
                    Vn = 'SetupSwitchHotkey_plus__horizontal_e0',
                    Kn = 'SetupSwitchHotkey_plus__vertical_5b',
                    Yn = a().memo(({ hotKeys: e }) =>
                        a().createElement(
                            'div',
                            { className: Wn },
                            e.map((e, t) => {
                                if (!e) return null;
                                const u = e.value;
                                return 0 === t
                                    ? a().createElement(Gn, { key: t, text: u })
                                    : a().createElement(
                                          'div',
                                          { key: t, className: Un },
                                          a().createElement(
                                              'div',
                                              { className: qn },
                                              a().createElement('div', { className: `${Xn} ${Vn}` }),
                                              a().createElement('div', { className: `${Xn} ${Kn}` }),
                                          ),
                                          a().createElement(Gn, { text: u }),
                                      );
                            }),
                        ),
                    ),
                    Zn = {
                        base: 'Group_base_70',
                        wrapper: 'Group_wrapper_07',
                        switch: 'Group_switch_ff',
                        switch__battle: 'Group_switch__battle_c0',
                        switch__small: 'Group_switch__small_5e',
                        switch__extraSmall: 'Group_switch__extraSmall_ec',
                        prebattleSwitchIndicator: 'Group_prebattleSwitchIndicator_2e',
                        hint: 'Group_hint_99',
                        hint__disabled: 'Group_hint__disabled_6a',
                    };
                function Qn() {
                    return (
                        (Qn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Qn.apply(this, arguments)
                    );
                }
                const Jn = R.strings.tank_setup.tooltips.prebattleSwitchIndicator,
                    ea = (e) => e.setupSelector.hotKeys,
                    ta = (0, ue.Pi)(
                        ({
                            groupIndex: e,
                            sectionProps: t,
                            isSetupSwitching: u,
                            setSetupSwitching: n,
                            handleSetupSwitching: i,
                        }) => {
                            const r = de(['switch'], Zn),
                                s = ee().model,
                                o = s.root.get().isDisabled,
                                l = s.computes.groups.group(e);
                            return a().createElement(
                                'div',
                                { key: l.groupId, className: Zn.base },
                                a().createElement(
                                    'div',
                                    { className: Zn.wrapper },
                                    a().createElement(
                                        Ze,
                                        ((e, t) => ({ index: e.currentIndex, setSetupSwitching: t }))(l, n),
                                        a().createElement(Hn, Qn({}, t, { groupIndex: e, isChangeSetupIndex: u })),
                                    ),
                                    l.setupSelector.isSwitchEnabled &&
                                        a().createElement(
                                            'div',
                                            { className: S()(r.switch, D(t.panelType) && Zn.switch__battle) },
                                            a().createElement(Ue, {
                                                states: l.setupSelector.states,
                                                onClick: i,
                                                totalCount: l.totalCount,
                                                currentIndex: l.currentIndex,
                                                groupId: l.groupId,
                                                isDisabled: t.isDisabled,
                                            }),
                                            l.setupSelector.isPrebattleSwitchDisabled &&
                                                a().createElement(
                                                    xe,
                                                    {
                                                        header: Jn.title(),
                                                        body: String(Jn.desc.$dyn(`c_${l.groupId}`)),
                                                    },
                                                    a().createElement('div', {
                                                        className: Zn.prebattleSwitchIndicator,
                                                    }),
                                                ),
                                        ),
                                ),
                                ((c = l),
                                ((_ = t.panelType) === F.Battle || _ === F.Respawn) &&
                                    c.setupSelector.isSwitchEnabled &&
                                    ea(c) &&
                                    a().createElement(
                                        'div',
                                        { className: S()(Zn.hint, o && Zn.hint__disabled) },
                                        a().createElement(Yn, { hotKeys: ea(l) }),
                                    )),
                            );
                            var c, _;
                        },
                    ),
                    ua = 'Groups_base_de',
                    na = (0, ue.Pi)(
                        ({ sectionProps: e, isSetupSwitching: t, isReady: u, setSetupSwitching: i, children: r }) => {
                            const s = ee(),
                                o = s.model,
                                l = s.controls,
                                c = o.vehicleInfo.get(),
                                _ = l.changeSetupIndex,
                                d = null == c ? void 0 : c.vehicleName;
                            ((0, n.useEffect)(() => {
                                (e.panelType !== F.Hangar && e.panelType !== F.Setup) || !u || i(!1);
                            }, [u, e.panelType, i]),
                                (0, n.useEffect)(() => {
                                    e.panelType === F.Respawn && i(!1);
                                }, [d, e.panelType, i]));
                            const m = (0, n.useCallback)(
                                (t) => {
                                    (e.panelType === F.Respawn && i(!0), _(t));
                                },
                                [_, e.panelType, i],
                            );
                            return a().createElement(
                                'div',
                                { className: ua },
                                Fe(o.computes.groups.length(), (u) =>
                                    a().createElement(ta, {
                                        key: `group-${u}`,
                                        sectionProps: e,
                                        groupIndex: u,
                                        isSetupSwitching: t,
                                        setSetupSwitching: i,
                                        handleSetupSwitching: m,
                                    }),
                                ),
                                r,
                            );
                        },
                    );
                function aa() {
                    return (
                        (aa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        aa.apply(this, arguments)
                    );
                }
                const ia = ({ children: e, tooltipArgs: t, className: u }) => {
                        if (!t) return e;
                        const n = a().createElement('div', { className: u }, e);
                        if (t.header || t.body) return a().createElement(xe, t, n);
                        const i = t.contentId;
                        return i ? a().createElement(Se, aa({}, t, { contentId: i }), n) : a().createElement(Zt, t, n);
                    },
                    ra = 'RoleSkillSlot_base_c4',
                    sa = 'RoleSkillSlot_icon_79',
                    oa = ({ roleSkill: e, tooltipId: t, tooltipHeader: u, tooltipBody: i, className: r }) => {
                        const s = (0, n.useMemo)(
                            () => ({
                                args: { tooltipId: t, roleSkill: e, header: u, body: i, hasHtmlContent: !0 },
                                header: u,
                                body: i,
                                ignoreShowDelay: !0,
                            }),
                            [e, u, i, t],
                        );
                        return a().createElement(
                            ia,
                            { tooltipArgs: s, className: S()(ra, r) },
                            a().createElement('div', {
                                className: sa,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    la = 'SlotGlow_base_40',
                    ca = 'SlotGlow_glow_a9',
                    _a = 'SlotGlow_glow__initialized_8d',
                    da = 'SlotGlow_glow__shown_f2',
                    ma = 'SlotGlow_glow__hidden_94',
                    Ea = (0, n.memo)(({ slotOffset: e, slotWidth: t, isAnimationRunning: u }) => {
                        const i = (0, n.useState)({ offset: e, slotWidth: t }),
                            r = i[0],
                            s = i[1],
                            o = (0, n.useRef)({ initialized: !1, offset: e, slotWidth: t });
                        ((0, n.useEffect)(() => {
                            let u = o.current.initialized;
                            (!u && e && ((u = !0), s({ offset: e, slotWidth: t })),
                                (o.current = { initialized: u, offset: e, slotWidth: t }));
                        }, [e, t]),
                            (0, n.useEffect)(() => {
                                u || s(o.current);
                            }, [u]));
                        const c = (0, n.useMemo)(() => {
                                const e = r.slotWidth + 25;
                                return { left: r.offset, width: e, backgroundSize: `${l.O.view.pxToRem(e)}rem 100%` };
                            }, [r.offset, r.slotWidth]),
                            _ = !u && r.offset === o.current.offset,
                            d = S()(ca, o.current.initialized && _a, _ ? da : ma);
                        return a().createElement(
                            'div',
                            { className: la },
                            a().createElement('div', { className: d, style: c }),
                        );
                    }),
                    ba = (0, ue.Pi)(
                        ({
                            show: e = !0,
                            isReady: t = !0,
                            panelType: u,
                            isDisabled: i = !1,
                            onResize: r,
                            setIsExitBlocked: s,
                        }) => {
                            const o = ee(),
                                l = o.model,
                                c = o.controls,
                                _ = l.ammunitionPanel.get(),
                                d = _.isSetupSwitchInProgress,
                                m = _.syncInitiator,
                                E = l.roleSkillSlot.get(),
                                b = (0, n.useState)(!1),
                                g = b[0],
                                p = b[1],
                                A = (0, n.useRef)(!1),
                                h = (0, n.useState)({ slotWidth: 0, slotOffset: 0 }),
                                f = h[0],
                                D = h[1],
                                C = (0, n.useState)(!1),
                                v = C[0],
                                B = C[1],
                                w = (0, n.useRef)(null),
                                y = (0, n.useContext)(oe),
                                x = (0, n.useRef)({
                                    element: null,
                                    generation: 0,
                                    slotIndex: null,
                                    sectionIndex: null,
                                }),
                                I = (0, n.useCallback)(
                                    (e, t) => {
                                        if (g || d || u !== F.Hangar) return;
                                        const n = t || { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                        (c.sectionResized(Object.assign({ sectionType: e }, n)),
                                            y && (y.freeze(), y.resize()));
                                    },
                                    [g, d, u, c, y],
                                ),
                                T = (0, n.useCallback)(
                                    (e) => {
                                        I('main', e);
                                    },
                                    [I],
                                );
                            (me(w, T, !0, [m]), (0, n.useEffect)(() => () => T(), [T]));
                            const k = (0, n.useCallback)(() => {
                                    B(!1);
                                }, []),
                                O = (0, n.useCallback)(() => {
                                    if (x.current.element && w.current) {
                                        const e = x.current.element.getBoundingClientRect(),
                                            t = w.current.getBoundingClientRect();
                                        D({ slotWidth: e.width, slotOffset: e.left - t.left + 0.5 * e.width });
                                    }
                                }, []),
                                R = (0, n.useCallback)(
                                    (e, t, u) => {
                                        if (e.current && w.current) {
                                            const n = ((e, t, u) =>
                                                e !== u.current.slotIndex || t !== u.current.sectionIndex)(u, t, x);
                                            ((x.current.element = e.current),
                                                (x.current.slotIndex = u),
                                                (x.current.sectionIndex = t),
                                                A.current && n ? B(!0) : (A.current = !0),
                                                x.current.generation && O());
                                        }
                                    },
                                    [O],
                                ),
                                L = (0, n.useCallback)(
                                    () =>
                                        re(() => {
                                            ((x.current.generation += 1), O());
                                        }),
                                    [x, O],
                                );
                            ((0, n.useEffect)(() => re(L), [L]),
                                (0, n.useEffect)(
                                    () => (
                                        engine.on('clientResized', L),
                                        () => {
                                            engine.off('clientResized', L);
                                        }
                                    ),
                                    [L],
                                ));
                            const N = f.slotWidth,
                                P = f.slotOffset,
                                M = S()(Ee.base, !t && Ee.base__locked, !e && Ee.base__hidden, i && Ee.base__disabled),
                                $ = S()(Ee.border, !v && Ee.border__hidden),
                                H = u === F.Setup || u === F.Compare,
                                z = {
                                    panelType: u,
                                    isDisabled: i,
                                    onActiveSlotChanged: R,
                                    isBorderActive: v,
                                    setIsExitBlocked: s,
                                };
                            (0, n.useEffect)(() => {
                                null == r || r();
                            }, [r, E.roleSkill]);
                            const j = de(['roleSkillSlot'], Ee);
                            return a().createElement(
                                'div',
                                { ref: w, className: M },
                                H &&
                                    a().createElement(Ea, {
                                        key: x.current.generation,
                                        slotOffset: P,
                                        slotWidth: N,
                                        isAnimationRunning: v,
                                    }),
                                a().createElement(
                                    na,
                                    { isSetupSwitching: d || g, sectionProps: z, isReady: t, setSetupSwitching: p },
                                    E.roleSkill &&
                                        a().createElement(oa, {
                                            roleSkill: E.roleSkill,
                                            tooltipId: E.tooltipId,
                                            tooltipHeader: E.tooltipHeader,
                                            tooltipBody: E.tooltipBody,
                                            className: S()(
                                                Ee.roleSkillSlot,
                                                Ee[`roleSkillSlot__${u}`],
                                                j.roleSkillSlot,
                                            ),
                                        }),
                                ),
                                H &&
                                    a().createElement(
                                        'div',
                                        { className: $ },
                                        a().createElement(he, { slotWidth: N, slotOffset: P, onAnimationEnd: k }),
                                    ),
                            );
                        },
                    ),
                    ga = 'Content_base_51',
                    pa = (0, ue.Pi)(() => {
                        const e = ee().model.root.get(),
                            t = e.isDisabled,
                            u = e.isReady,
                            i = e.state,
                            r = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(
                                () =>
                                    re(() => {
                                        const e = r.current;
                                        if (e) {
                                            const t = e.firstElementChild.getBoundingClientRect(),
                                                u = l.O.view.getSize('rem'),
                                                n = u.width,
                                                a = u.height,
                                                i = viewEnv.pxToRem(t.width),
                                                r = viewEnv.pxToRem(t.y);
                                            l.O.view.setSidePaddingsRem({
                                                left: (n - i) / 2,
                                                top: r,
                                                right: (n - i) / 2,
                                                bottom: a - (r + 54),
                                            });
                                        }
                                    }),
                                [i, u],
                            ),
                            a().createElement(
                                'div',
                                { className: ga, ref: r },
                                a().createElement(ba, {
                                    panelType: i === te.PreBattleNotConfirmed ? F.Prebattle : F.Battle,
                                    isDisabled: t,
                                    isReady: u,
                                }),
                            )
                        );
                    }),
                    Aa = 'Footer_base_51',
                    ha = 'Footer_title_28',
                    Fa = () =>
                        a().createElement(
                            'div',
                            { className: Aa },
                            a().createElement(
                                'span',
                                { className: ha },
                                R.strings.ingame_gui.prebattleAmmunitionPanel.footer(),
                            ),
                        );
                var fa = u(8613);
                const Da = 60;
                (Date.now(), fa.Ew.getRegionalDateTime, fa.Ew.getFormattedDateTime);
                const Ca = () => {},
                    va = (e = 0, t, u = 0, a = Ca) => {
                        const i = (0, n.useState)(e),
                            r = i[0],
                            s = i[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    s(e);
                                    const n = Date.now(),
                                        i = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - n) / 1e3);
                                                null !== u && t <= u ? (s(u), a && a(), clearInterval(i)) : s(t);
                                            },
                                            1e3 * (t || (e > 120 ? Da : 1)),
                                        );
                                    return () => {
                                        clearInterval(i);
                                    };
                                }
                            }, [e, t, u, a]),
                            r
                        );
                    },
                    Sa = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    Ba = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    wa = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    ya = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    xa = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const n = Sa(`${e}.${u}`, window);
                                return wa(n) ? t(e, u, n) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    Ia = (e) => {
                        const t = ((e) => {
                                const t = fe(),
                                    u = t.caller,
                                    n = t.resId,
                                    a = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: a, modelPath: ya(a, e || ''), resId: n };
                            })(),
                            u = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const a = Sa(ya(u, `${t}.${n}`), window);
                                    return wa(a) ? (e.push(a.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
                const Ta = () => (window.injected || (window.injected = new Map()), window.injected);
                const ka = y.Sw.instance;
                let Oa;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(Oa || (Oa = {}));
                const Ra = (e = 'model', t = Oa.Deep) => {
                        const u = (0, n.useState)(0),
                            a = (u[0], u[1]),
                            i = (0, n.useMemo)(() => fe(), []),
                            r = i.callerUrl,
                            s = i.caller,
                            o = i.resId,
                            l = (0, n.useMemo)(() => {
                                const t = (function (e) {
                                    return Ta().has(e);
                                })(r.replace('.js', '.html'));
                                return window.__feature && window.__feature !== s && !t ? `subViews.${s}.${e}` : e;
                            }, [r, s, e]),
                            c = (0, n.useState)(() =>
                                ((e) => {
                                    const t = Sa(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return wa(t) ? t.value : t;
                                })(xa(l)),
                            ),
                            _ = c[0],
                            d = c[1],
                            m = (0, n.useRef)(-1);
                        return (
                            Ba(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? Oa.Deep : Oa.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== Oa.None)
                                ) {
                                    const u = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === Oa.Deep
                                                ? (e === _ && a((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        n = Ia(e);
                                    m.current = ka.addCallback(n, u, o, t === Oa.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (t !== Oa.None)
                                    return () => {
                                        ka.removeCallback(m.current, o);
                                    };
                            }, [o, t]),
                            _
                        );
                    },
                    La = (y.Sw.instance, va),
                    Na = 'Header_base_70',
                    Pa = 'Header_title_f3',
                    Ma = 'Header_base__loading_c9',
                    $a = R.strings.ingame_gui.prebattleAmmunitionPanel,
                    Ha = () => {
                        const e = Ra('model'),
                            t = e.state,
                            u = e.timeTillBattleStart,
                            i = e.isDisabled,
                            r = S()(Na, t === te.BattleLoading && Ma),
                            s = La(u),
                            o = s >= 0,
                            l = (0, n.useMemo)(() => ({ seconds: Math.floor(s) }), [s]);
                        const c =
                            t === te.BattleLoading
                                ? i
                                    ? $a.currentSetup()
                                    : o
                                      ? ce($a.loadingTimer(), l)
                                      : $a.waitinForPlayers()
                                : $a.header();
                        return a().createElement(
                            'div',
                            { className: r },
                            a().createElement('span', { className: Pa }, c),
                        );
                    },
                    za = (0, ue.Pi)(() => {
                        const e = ee().model.root.get().state;
                        return a().createElement(
                            'div',
                            { className: S()(ne, e === te.BattleLoading && ae) },
                            e !== te.PreBattleNotConfirmed && a().createElement(Ha, null),
                            a().createElement('div', { className: ie }, a().createElement(pa, null)),
                            e === te.PreBattle && a().createElement(Fa, null),
                        );
                    });
                engine.whenReady.then(() => {
                    r().render(
                        a().createElement(J, null, a().createElement(za, null)),
                        document.getElementById('root'),
                    );
                });
            },
            7363: (e) => {
                e.exports = React;
            },
            1533: (e) => {
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
                    for (var [t, u, n] = deferred[o], i = !0, r = 0; r < t.length; r++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[r]))
                            ? t.splice(r--, 1)
                            : ((i = !1), n < a && (a = n));
                    if (i) {
                        deferred.splice(o--, 1);
                        var s = u();
                        void 0 !== s && (e = s);
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
        (__webpack_require__.j = 421),
        (() => {
            var e = { 421: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [i, r, s] = u,
                        o = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (n in r) __webpack_require__.o(r, n) && (__webpack_require__.m[n] = r[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(u); o < i.length; o++)
                        ((a = i[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [532], () => __webpack_require__(7386));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
