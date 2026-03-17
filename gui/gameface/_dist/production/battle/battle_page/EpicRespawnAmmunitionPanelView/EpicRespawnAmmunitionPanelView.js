(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, u) => {
                (u.r(t),
                    u.d(t, { mouse: () => c, off: () => o, on: () => r, onResize: () => i, onScaleUpdated: () => s }));
                var n = u(2472),
                    a = u(1176);
                const i = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    r = (e, t) => engine.on(e, t),
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
                                        s = l[t]((e) => u([e, 'outside']));
                                    function r(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, r),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(i, r),
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
                        getMouseGlobalPosition: () => s,
                        getSize: () => i,
                        graphicsQuality: () => r,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = u(527),
                    a = u(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const r = {
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
                u.d(t, { O: () => s });
                var n = u(5959),
                    a = u(7698),
                    i = u(514);
                const s = { view: u(7641), client: n, sound: i.ZP, intl: a.N };
            },
            7698: (e, t, u) => {
                u.d(t, { N: () => n });
                const n = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, u) => {
                u.d(t, { ZP: () => s });
                var n = u(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, n.playSound)(a[t])), e), {}),
                    s = { play: Object.assign({}, i, { sound: n.playSound }), setRTPC: n.setRTPC };
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
                        events: () => s.U,
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
                        isFocused: () => D,
                        pxToRem: () => A,
                        remToPx: () => h,
                        resize: () => E,
                        sendEvent: () => r.qP,
                        setAnimateWindow: () => F,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => T,
                    }));
                var n = u(9690),
                    a = u(3722),
                    i = u(6112),
                    s = u(6538),
                    r = u(8566);
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
                function D() {
                    return viewEnv.isFocused();
                }
                function f() {
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
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
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
                    s = 32,
                    r = 64,
                    o = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                s = (function (e, t) {
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
                                      Object.assign({ __Type: u, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? a : s);
                        },
                        minimize() {
                            o(r);
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
                u.d(t, { HG: () => r, cg: () => i });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function i(e) {
                    let t = '';
                    for (let u = a.length - 1; u >= 0; u--) for (; e >= a[u]; ) ((t += n[u]), (e -= a[u]));
                    return t;
                }
                const s = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    r = (e) => (s ? `${e}` : i(e));
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
                u.d(t, { Sw: () => i.Z, B0: () => r, c9: () => A, ry: () => p });
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
                var s = u(8613);
                let r;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(r || (r = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = u(5521),
                    m = u(3138);
                const E = ['args'];
                function b(e, t, u, n, a, i, s) {
                    try {
                        var r = e[i](s),
                            o = r.value;
                    } catch (e) {
                        return void u(e);
                    }
                    r.done ? t(o) : Promise.resolve(o).then(n, a);
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
                                        function s(e) {
                                            b(i, n, a, s, r, 'next', e);
                                        }
                                        function r(e) {
                                            b(i, n, a, s, r, 'throw', e);
                                        }
                                        s(void 0);
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
                    h = () => A(r.CLOSE),
                    F = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var D = u(7572);
                const f = a.instance,
                    C = {
                        DataTracker: i.Z,
                        ViewModel: D.Z,
                        ViewEventType: r,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => A(r.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => A(r.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            A(r.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, a = R.invalid('resId'), i) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                o = u.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + s.x,
                                    y: m.O.view.pxToRem(c) + s.y,
                                    width: m.O.view.pxToRem(_),
                                    height: m.O.view.pxToRem(d),
                                };
                            A(r.POP_OVER, {
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(r.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(r.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(r.POP_OVER),
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
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = C;
            },
            8613: (e, t, u) => {
                u.d(t, { Ew: () => i, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t, u = 2) => systemLocale.getRealFormat(e, t, u),
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
            4907: (e, t, u) => {
                var n = u(7363),
                    a = u.n(n),
                    i = u(1533),
                    s = u.n(i);
                function r() {
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
                const D = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    f = (e) => e === F.Battle || e === F.Prebattle,
                    C = (e) => f(e) || e === F.Respawn;
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
                    N = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var L;
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
                })(L || (L = {}));
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
                            })(t, u, N),
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
                        s = a.large,
                        r = a.medium,
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
                        if (u.large && s) return t;
                        if (u.medium && r) return t;
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
                let z;
                !(function (e) {
                    ((e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge'));
                })(z || (z = {}));
                const H = 'setup-content';
                function G(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return j(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return j(e, t);
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
                function j(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const W = (e, t = []) => {
                        const u = document.getElementById('root');
                        u && (u.style.cursor = e ? 'grabbing' : 'default');
                        for (var n, a = G(t); !(n = a()).done; ) {
                            const t = n.value,
                                u = document.getElementById(t);
                            u && (u.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    U = (e, t, u) => {
                        let n = '',
                            a = 8e3;
                        for (var i, s = G(u); !(i = s()).done; ) {
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
                        return { selfId: u, blockOnGrabIds: [H, ...n] };
                    },
                    Z = ({ baseId: e, slotsLength: t, handleSwap: u, setIsExitBlocked: a, syncInitiator: i }) => {
                        const s = ((e, t, u) => {
                                const a = (0, n.useRef)([]),
                                    i = (0, n.useRef)({ dragId: '', dropId: '', prevPotentialDropId: '' }),
                                    s = (0, n.useState)({ activeDragId: '', potentialDropId: '' }),
                                    r = s[0],
                                    o = s[1],
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
                                        dragState: r,
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
                            r = s.dragState,
                            o = s.handleGrabberAction,
                            l = s.getForceCenterX,
                            c = s.resetDragResults,
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
                            { handleGrabberAction: _, dragState: r, getForceCenterX: l }
                        );
                    },
                    Q = ((e, t) => {
                        const u = (0, n.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: s, children: _, mocks: m }) {
                                const E = (0, n.useRef)([]),
                                    b = (u, n, a) => {
                                        var i;
                                        const s = (function ({
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
                                                const s = (e) => {
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
                                                        const r = 'string' == typeof i ? `${n}.${i}` : n,
                                                            o = l.O.view.addModelObserver(r, t, !0);
                                                        return (a.set(o, u), e && u(s(i)), o);
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
                                                        for (var e, u = c(a.keys()); !(e = u()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            _ =
                                                'real' === u
                                                    ? s
                                                    : Object.assign({}, s, {
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
                                                            n = o.LO.box(t, { equals: r });
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
                                                            a = o.LO.box(n, { equals: r });
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
                                                            a = o.LO.box(n, { equals: r });
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
                                                                s = i.reduce(
                                                                    (e, [t, u]) => ((e[u] = o.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    _.subscribe(
                                                                        (0, o.aD)((e) => {
                                                                            i.forEach(([t, u]) => {
                                                                                s[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
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
                                    F = (0, n.useState)(() => b(i, s, m)),
                                    D = F[0],
                                    f = F[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        g.current ? f(b(A, s, m)) : (g.current = !0);
                                    }, [m, A, s]),
                                    (0, n.useEffect)(() => {
                                        h(i);
                                    }, [i]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (D.externalModel.dispose(), E.current.forEach((e) => e()));
                                        },
                                        [D],
                                    ),
                                    a().createElement(u.Provider, { value: D }, _)
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
                                    { equals: r },
                                ),
                                a = (0, h.Om)(() => A(t.sectionGroups.get(), (e, t) => e + t.sections.length, 0)),
                                i = (0, h.Om)((e) => n(e).sections.length),
                                s = (0, h.Om)(
                                    (e, t) => {
                                        const u = E(n(e).sections, t);
                                        if (!u) throw Error(`No ammunition section found with index: ${t}`);
                                        return u;
                                    },
                                    { equals: r },
                                ),
                                o = (0, h.Om)((e, t) => s(e, t).slots.length),
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
                                        })(s(e, t).slots, (e) => Boolean(e) && !D(e)).length,
                                ),
                                c = (0, h.Om)((e, t) =>
                                    (function (e, t) {
                                        if (Array.isArray(e)) return e.some(t);
                                        for (let u = 0; u < e.length; u++) if (t(b(e, u), u, e)) return !0;
                                        return !1;
                                    })(s(e, t).slots, (e) => e.intCD > 0),
                                ),
                                _ = (0, h.Om)(
                                    (e, t, u) => {
                                        const n = E(s(e, t).slots, u);
                                        if (!n) throw Error(`No ammunition slot found with index: ${u}`);
                                        return n;
                                    },
                                    { equals: r },
                                ),
                                d = (0, h.Om)((e) => p(n(e).sections, (e) => K(e.type)), { equals: r }),
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
                                    { equals: r },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    groups: { length: u, group: n },
                                    sections: { allSectionsLength: a, length: i, section: s, IDs: d },
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
                    ee = Q[1],
                    te = 'App_base_55';
                var ue = u(3403);
                const ne = (e) => {
                    (0, n.useEffect)(() => e, []);
                };
                const ae = (0, n.createContext)(null);
                const ie = (e) => {
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
                u(1281);
                let se;
                function re(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(se || (se = {}));
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
                function oe(e, t, u) {
                    const a = (0, n.useContext)(M);
                    let i = Object.entries(a).filter(([e, t]) => !0 === t && e in L);
                    return (
                        u && (i = i.filter((e) => u.includes(e[0]))),
                        e.reduce((e, u) => {
                            const n = i.map((e) =>
                                S()(t[((e, t) => e + '__' + t)(u, e[0])], t[((e, t) => e + re(t))(u, e[0])]),
                            );
                            return ((e[u] = S()(t[u], ...n)), e);
                        }, {})
                    );
                }
                const le = (e, t, u, a = []) => {
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
                                ie(() =>
                                    ie(() => {
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
                    ce = {
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
                    _e = 'Border_base_f9',
                    de = 'Border_border_83',
                    me = 'Border_wrapper_17',
                    Ee = 'Border_active_e8',
                    be = (0, n.memo)(({ slotOffset: e, slotWidth: t, onAnimationEnd: u }) => {
                        const i = (0, n.useRef)(null),
                            s = (0, n.useRef)(!1);
                        (0, n.useEffect)(() => {
                            s.current = !0;
                        }, [e, t]);
                        const r = (0, n.useCallback)(() => {
                            (s.current && u(), (s.current = !1));
                        }, [u]);
                        (0, n.useEffect)(() => {
                            const e = i.current;
                            return (
                                e && e.addEventListener('transitionend', r),
                                () => {
                                    e && e.removeEventListener('transitionend', r);
                                }
                            );
                        }, [r]);
                        const o = (0, n.useMemo)(() => ({ left: e }), [e]),
                            l = (0, n.useMemo)(() => ({ width: t }), [t]);
                        return a().createElement(
                            'div',
                            { className: _e },
                            a().createElement(
                                'div',
                                { ref: i, className: de, style: o },
                                a().createElement(
                                    'div',
                                    { className: me },
                                    a().createElement('div', { className: Ee, style: l }),
                                ),
                            ),
                        );
                    }),
                    ge = (e, t) => {
                        const u = [];
                        for (let n = 0; n < e; n++) u.push(t(n));
                        return u;
                    },
                    pe = (e = 1) => {
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
                    Ae = [
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
                function he(e) {
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
                const Fe = (e, t, u = {}, n = 0) => {
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
                    De = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            i = e.onMouseEnter,
                            s = e.onMouseLeave,
                            r = e.onMouseDown,
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
                            D = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Ae);
                        const f = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, n.useMemo)(() => A || pe().resId, [A]),
                            v = (0, n.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (Fe(u, E, { isMouseEvent: !0, on: !0, arguments: he(a) }, C),
                                    h && h(),
                                    (f.current.isVisible = !0));
                            }, [u, E, a, C, h]),
                            S = (0, n.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        Fe(u, E, { on: !1 }, C),
                                        f.current.isVisible && F && F(),
                                        (f.current.isVisible = !1));
                                }
                            }, [u, E, C, F]),
                            B = (0, n.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(f.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = f.current.hideTimerId;
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
                                                      (clearTimeout(f.current.timeoutId),
                                                      (f.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      i && i(e),
                                                      w && w(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (S(), null == s || s(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === d && S(), null == o || o(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === d && S(), null == r || r(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      D,
                                  ),
                              )
                            : t;
                        var w;
                    },
                    fe = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ce() {
                    return (
                        (Ce =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ce.apply(this, arguments)
                    );
                }
                const ve = R.views.common.tooltip_window.simple_tooltip_content,
                    Se = (e) => {
                        let t = e.children,
                            u = e.body,
                            i = e.header,
                            s = e.note,
                            r = e.alert,
                            o = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, fe);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: u, header: i, note: s, alert: r });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [r, u, i, s, o]);
                        return a().createElement(
                            De,
                            Ce(
                                {
                                    contentId:
                                        ((_ = null == o ? void 0 : o.hasHtmlContent),
                                        _ ? ve.SimpleTooltipHtmlContent('resId') : ve.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var _;
                    };
                let Be;
                !(function (e) {
                    ((e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING'));
                })(Be || (Be = {}));
                const we = 'SwitchButton_base_23',
                    ye = 'SwitchButton_base__active_31',
                    xe = 'SwitchButton_base__warning_71',
                    Ie = 'SwitchButton_buttonBack_ce',
                    Te = 'SwitchButton_buttonBackHovered_45',
                    ke = 'SwitchButton_base__hovered_b4',
                    Oe = 'SwitchButton_buttonGlow_4c',
                    Re = 'SwitchButton_buttonIcon_d3',
                    Ne = 'SwitchButton_buttonWarning_3f',
                    Le = 'SwitchButton_number_8a',
                    Pe = ({ id: e, state: t, currentIndex: u, isHovered: i }) => {
                        const s = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.gui.maps.icons.tanksetup.panel.indexes.$dyn(`setup_${e + 1}`)}')`,
                                }),
                                [e],
                            ),
                            r = e === u,
                            o = !r && t === Be.WARNING;
                        return a().createElement(
                            'div',
                            { className: S()(we, { [ye]: r, [xe]: o, [ke]: i }) },
                            a().createElement('div', { className: Ie }),
                            a().createElement('div', { className: Te }),
                            a().createElement('div', { className: Re }),
                            a().createElement('div', { className: Oe }),
                            a().createElement('div', { className: Ne }),
                            a().createElement('div', { style: s, className: Le }),
                        );
                    },
                    Me = 'SwitchEquipment_base_1a',
                    $e = 'SwitchEquipment_base__disabled_73',
                    ze = 'SwitchEquipment_cover_b3',
                    He = ({ onClick: e, totalCount: t, currentIndex: u, states: i, isDisabled: s, groupId: r }) => {
                        const o = (0, n.useRef)(null),
                            l = (0, n.useState)(!1),
                            c = l[0],
                            _ = l[1],
                            d = (u + 1) % t,
                            m = (0, n.useCallback)(() => {
                                s || e({ groupId: r, currentIndex: d });
                            }, [r, s, d, e]),
                            E = (0, n.useCallback)(() => {
                                s || (_(!0), k.playHighlight());
                            }, [s]),
                            g = (0, n.useCallback)(() => {
                                s || _(!1);
                            }, [s]),
                            p = S()(Me, s && $e);
                        return a().createElement(
                            'div',
                            {
                                id: `switch-equipment-group-${r}`,
                                className: p,
                                onClick: m,
                                onMouseEnter: E,
                                onMouseLeave: g,
                                ref: o,
                            },
                            Array.from({ length: t }, (e, t) =>
                                a().createElement(Pe, { key: t, id: t, state: b(i, t), currentIndex: u, isHovered: c }),
                            ),
                            s && a().createElement('div', { className: ze }),
                        );
                    };
                var Ge = u(2558),
                    je = u(8934);
                const We = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    Ue = 'up',
                    qe = 'down',
                    Xe = ({ children: e, index: t, setSetupSwitching: u, disabled: i = !1 }) => {
                        const s = (0, n.useRef)(1 - t),
                            r = (0, n.useMemo)(() => {
                                const e = ((u = t), (n = s.current), u === n ? '' : u > n ? qe : Ue);
                                var u, n;
                                const a = e && re(e);
                                return i ? {} : { enter: We[`base__enter${a}`], exit: We[`base__exit${a}`] };
                            }, [t, i]);
                        return (
                            (s.current = t),
                            a().createElement(
                                Ge.Z,
                                { className: We.base },
                                a().createElement(
                                    je.Z,
                                    {
                                        timeout: 300,
                                        key: t,
                                        classNames: r,
                                        onEnter: () => u(!0),
                                        onExited: () => u(!1),
                                    },
                                    e,
                                ),
                            )
                        );
                    },
                    Ve = 'shells',
                    Ke = 'battleAbilities',
                    Ye = 'toggleShells',
                    Ze = 'toggleCamouflage',
                    Qe = {
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
                    Je = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function et() {
                    return (
                        (et =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        et.apply(this, arguments)
                    );
                }
                const tt = (e) => {
                        let t = e.value,
                            u = e.isEmpty,
                            n = void 0 !== u && u,
                            i = e.className,
                            s = e.size,
                            r = void 0 === s ? 'normal' : s,
                            o = e.fadeInAnimation,
                            l = void 0 !== o && o,
                            c = e.hide,
                            _ = void 0 !== c && c,
                            d = e.maximumNumber,
                            m = void 0 === d ? 99 : d,
                            E = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Je);
                        const b = n ? null : t,
                            g = 'string' == typeof b;
                        if ((b && !g && b < 0) || 0 === b) return null;
                        const p = b && !g && b > m,
                            A = S()(
                                Qe.base,
                                Qe[`base__${r}`],
                                l && Qe.base__animated,
                                _ && Qe.base__hidden,
                                !b && Qe.base__pattern,
                                n && Qe.base__empty,
                                i,
                            );
                        return a().createElement(
                            'div',
                            et({ className: A }, E),
                            a().createElement('div', { className: Qe.bg }),
                            a().createElement('div', { className: Qe.pattern }),
                            a().createElement(
                                'div',
                                { className: S()(Qe.value, g && Qe.value__text) },
                                p ? m : b,
                                p && a().createElement('span', { className: Qe.plus }, '+'),
                            ),
                        );
                    },
                    ut = 'TopLabel_base_7f',
                    nt = 'TopLabel_base__ready_00',
                    at = 'TopLabel_text_d0',
                    it = 'TopLabel_text__hangar_36',
                    st = 'TopLabel_text__shown_25',
                    rt = 'TopLabel_text__hidden_79',
                    ot = 'TopLabel_text__truncated_29',
                    lt = (0, n.memo)(({ panelType: e, text: t, parentRef: u, isTruncated: i = !1, show: s = !1 }) => {
                        const r = (0, n.useRef)(!1),
                            o = (0, n.useState)(!1),
                            l = o[0],
                            c = o[1];
                        (0, n.useEffect)(() => {
                            u || (s && !r.current && (r.current = !0), c(s));
                        }, [s, u]);
                        const _ = (0, n.useCallback)(() => {
                                ((r.current = !0), c(!0));
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
                                { className: S()(ut, r.current && nt) },
                                a().createElement(
                                    'div',
                                    { className: S()(at, e !== F.Setup && it, i && ot, s && l ? st : rt) },
                                    t,
                                ),
                            )
                        );
                    }),
                    ct = 'notUsableSection',
                    _t = 'Section_base_8a',
                    dt = 'Section_label_73',
                    mt = 'Section_counter_8a',
                    Et = 'SlotDivider_base_60',
                    bt = () => a().createElement('div', { className: Et }),
                    gt = ({ wrapper: e, children: t, when: u, withProps: n }) =>
                        u ? a().createElement(e, n, t) : a().createElement(a().Fragment, null, t),
                    pt = {
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
                    At = ({
                        activeDragId: e,
                        slotType: t,
                        isSelected: u,
                        isBorderActive: n,
                        children: i,
                        panelType: s,
                        isDisabled: r,
                        isPotentialDrop: o,
                        onClick: l,
                    }) => {
                        const c = S()(
                            pt.base,
                            !e && pt[`base__${s}`],
                            t && pt[`base__${t}`],
                            u && !o && !n && pt.base__selected,
                            o && pt['base__dragIn' + (u ? 'Active' : '')],
                            r && pt.base__disabled,
                        );
                        return a().createElement('div', { className: c, onClick: l }, i);
                    },
                    ht = {
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
                    Ft = a().memo(({ isTemporary: e, overlayType: t, overlaySource: u }) => {
                        const i = S()(ht.base, e && ht.base__fitting),
                            s = S()(ht.icon, ht[`icon__${t}`]),
                            r = (0, n.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]);
                        return a().createElement(
                            'div',
                            { className: i },
                            a().createElement('div', { className: s, style: r }),
                        );
                    }),
                    Dt = {
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
                    ft = ({ level: e }) => {
                        const t = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            u = S()(Dt.base, Dt[`base__level${e}`]);
                        return a().createElement('div', { style: t, className: u });
                    },
                    Ct = 'Inside_image_e5',
                    vt = 'Inside_image__fitting_11',
                    St = 'Inside_warning_e4',
                    Bt = 'Inside_change_5a',
                    wt = ({
                        level: e,
                        overlayType: t,
                        isTemporary: u,
                        withAttention: i,
                        imageSource: s,
                        isIncompatible: r,
                    }) => {
                        const o = (0, n.useMemo)(() => {
                                const u = 'equipmentModernized' === t ? `${t}_${e}_overlay` : `${t}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(u);
                            }, [t, e]),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${s})` }), [s]),
                            c = !o && Boolean(t) && e;
                        return a().createElement(
                            'div',
                            null,
                            c && a().createElement(ft, { level: e }),
                            a().createElement('div', { className: S()(Ct, (u || i) && vt), style: l }),
                            i && a().createElement('div', { className: St }),
                            r && a().createElement('div', { className: Bt }),
                            o && a().createElement(Ft, { isTemporary: u, overlaySource: o, overlayType: t }),
                        );
                    };
                let yt, xt, It;
                (!(function (e) {
                    ((e[(e.ExtraSmall = N.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = N.small.width)] = 'Small'),
                        (e[(e.Medium = N.medium.width)] = 'Medium'),
                        (e[(e.Large = N.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = N.extraLarge.width)] = 'ExtraLarge'));
                })(yt || (yt = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = N.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = N.small.width)] = 'Small'),
                            (e[(e.Medium = N.medium.width)] = 'Medium'),
                            (e[(e.Large = N.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = N.extraLarge.width)] = 'ExtraLarge'));
                    })(xt || (xt = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = N.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = N.small.height)] = 'Small'),
                            (e[(e.Medium = N.medium.height)] = 'Medium'),
                            (e[(e.Large = N.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = N.extraLarge.height)] = 'ExtraLarge'));
                    })(It || (It = {})));
                const Tt = () => {
                        const e = (0, n.useContext)(M),
                            t = e.width,
                            u = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return yt.ExtraLarge;
                                    case e.large:
                                        return yt.Large;
                                    case e.medium:
                                        return yt.Medium;
                                    case e.small:
                                        return yt.Small;
                                    case e.extraSmall:
                                        return yt.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), yt.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return xt.ExtraLarge;
                                    case e.largeWidth:
                                        return xt.Large;
                                    case e.mediumWidth:
                                        return xt.Medium;
                                    case e.smallWidth:
                                        return xt.Small;
                                    case e.extraSmallWidth:
                                        return xt.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), xt.ExtraSmall);
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return It.ExtraLarge;
                                    case e.largeHeight:
                                        return It.Large;
                                    case e.mediumHeight:
                                        return It.Medium;
                                    case e.smallHeight:
                                        return It.Small;
                                    case e.extraSmallHeight:
                                        return It.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), It.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: s, remScreenWidth: t, remScreenHeight: u };
                    },
                    kt = 'Grabber_base_cf',
                    Ot = 'Grabber_base__enabled_b0',
                    Rt = 'Grabber_base__waitingUpdate_1d',
                    Nt = 'Grabber_base__updating_f1',
                    Lt = 'Grabber_base__active_71',
                    Pt = 'Grabber_base__exit_1f',
                    Mt = 'Grabber_base__showAnimation_d9',
                    $t = ({
                        children: e,
                        id: t,
                        containerRef: u,
                        isEnabled: i = !0,
                        onClick: s,
                        forceCenterX: r,
                        isUpdateAvailable: o,
                        handleAction: c,
                        blockOnGrabIds: _ = [],
                    }) => {
                        const d = Tt().mediaSize,
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
                            D = h[1],
                            f = (function () {
                                const e = (0, n.useRef)(0);
                                return (
                                    ne(() => {
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
                            C = 0 !== r && i,
                            v = r ? r - E.current.startCenterX : F;
                        (0, n.useEffect)(() => {
                            if (((E.current.isValid = !1), t))
                                return ie(() => {
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
                                    s = u.maxXRestriction,
                                    r = a - n,
                                    o = e - t.clickCenterOffset;
                                t.dropCenterX = ((e, t, u, n) => {
                                    const a = u + t,
                                        i = n - t;
                                    return e < a ? a : e > i ? i : e;
                                })(o, r, i, s);
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
                                !s || (i && E.current.isValid) || s();
                            }, [i, s]);
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
                                i && r && D(0);
                            }, [r, i]));
                        const R = !p && m.current.grabActivationPassed;
                        ((0, n.useLayoutEffect)(() => {
                            m.current.id = t;
                        }, [t]),
                            (0, n.useEffect)(() => {
                                if (R) {
                                    const e = m.current;
                                    (c(V.Drop, { dragId: e.id, currentCenterX: e.dropCenterX }),
                                        r === e.dropCenterX &&
                                            ((e.grabActivationPassed = !1),
                                            f.run(() => c(V.DropExit, { dragId: e.id }))));
                                }
                            }, [R, f, r, c]),
                            (0, n.useEffect)(() => {
                                if (i && p && m.current.id) {
                                    const e = l.O.client.events.mouse.up(([e, t]) => {
                                            if ('outside' === t) return y(!1);
                                            const u = m.current,
                                                n = e.clientX;
                                            (n === u.actualX && 0 === e.button && !m.current.grabActivationPassed
                                                ? s && s()
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
                                                    D(t.dropCenterX - E.current.startCenterX)));
                                        });
                                    return () => {
                                        (t(), e());
                                    };
                                }
                            }, [x, c, p, i, s, y, T]));
                        const N = i ? S()(kt, Ot, p && Lt, R && Pt, C && Rt, r && Nt) : S()(kt, r && Mt);
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
                                        ((t.grabActivationPassed = !1), f.run(() => c(V.DropExit, { dragId: t.id })));
                                },
                                className: N,
                                style: { left: v },
                            },
                            e,
                        );
                    };
                let zt;
                !(function (e) {
                    ((e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next'));
                })(zt || (zt = {}));
                const Ht = 'KeyLabel_base_ec',
                    Gt = 'KeyLabel_base__current_c2',
                    jt = 'KeyLabel_base__next_fa',
                    Wt = ({ text: e, show: t, panelType: u, shellState: n, className: i }) => {
                        if (!e) return null;
                        const s = 'KEY_NONE' === e ? '..' : String(R.strings.readable_key_names.$dyn(e));
                        return a().createElement(
                            'div',
                            { className: S()(Ht, n === zt.Current && Gt, n === zt.Next && jt, i) },
                            a().createElement(lt, { isTruncated: !0, text: s, show: t, panelType: u }),
                        );
                    },
                    Ut = ['children'];
                function qt() {
                    return (
                        (qt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        qt.apply(this, arguments)
                    );
                }
                const Xt = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Ut);
                        return a().createElement(
                            De,
                            qt(
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
                    Vt = ({ children: e, slotType: t, slotId: u, panelType: i, isEnabled: s = !0 }) => {
                        const r = (0, n.useMemo)(() => ({ slotType: t, slotId: u }), [t, u]);
                        return a().createElement(
                            Xt,
                            {
                                isEnabled: s,
                                args: r,
                                decoratorId: [F.Battle, F.Prebattle].includes(i)
                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                    : 0,
                            },
                            a().createElement('div', null, e),
                        );
                    },
                    Kt = 'Close_base_f3',
                    Yt = 'Close_base__invisible_0e',
                    Zt = 'Close_base__shown_a2',
                    Qt = 'Close_base__hover_6d',
                    Jt = 'Close_base__down_2b',
                    eu = (0, n.memo)(
                        ({ id: e, show: t = !0, onClick: u, soundHover: i = 'highlight', soundClick: s = 'play' }) => {
                            const r = (0, n.useState)(!1),
                                o = r[0],
                                l = r[1],
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
                                        t && 0 === e.button && (l(!0), s && T(s));
                                    },
                                    [t, s],
                                ),
                                F = (0, n.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && u && u();
                                    },
                                    [t, u],
                                );
                            (0, n.useEffect)(
                                () =>
                                    ie(() => {
                                        b(!0);
                                    }),
                                [],
                            );
                            const D = S()(Kt, !E && Yt, E && t && Zt, o && Jt, _ && Qt);
                            return a().createElement('div', {
                                id: e,
                                onMouseOver: p,
                                onMouseLeave: A,
                                onMouseDown: h,
                                onMouseUp: F,
                                className: D,
                                onClick: g,
                            });
                        },
                    ),
                    tu = 'Slot_base_3a',
                    uu = 'Slot_label_e6',
                    nu = 'Slot_close_bb',
                    au = 'Slot_disabled_5d',
                    iu = 'Slot_shadow_a7',
                    su = 'Slot_category_2c';
                let ru;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(ru || (ru = {}));
                const ou = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: a = 0,
                        args: i,
                        isEnabled: s = !0,
                        onMouseDown: r,
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
                                    (r && r(e), ((e) => e.button === ru.RIGHT)(e) && o());
                                },
                                [r, o],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    lu = ['children'];
                function cu() {
                    return (
                        (cu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        cu.apply(this, arguments)
                    );
                }
                const _u = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, lu);
                    return a().createElement(
                        ou,
                        cu({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                function du() {
                    const e = (0, n.useRef)(0);
                    return (
                        ne(() => {
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
                const mu = 'select',
                    Eu = 'undo',
                    bu = 'swap',
                    gu = 'demount',
                    pu = 'demount_from_setups',
                    Au = 'destroy',
                    hu = 1600;
                let Fu;
                !(function (e) {
                    ((e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount'));
                })(Fu || (Fu = {}));
                const Du = { [bu]: 200, [Eu]: 250, [mu]: 250, [Au]: 1400, [gu]: hu, [pu]: hu, demount_from_setup: hu },
                    fu = 'BackEffects_shine_f6',
                    Cu = 'BackEffects_sparks_55',
                    vu = 'BackEffects_nut_79',
                    Su = 'BackEffects_wrench_5a',
                    Bu = { enterActive: 'BackEffects_shine__enterActive_54' },
                    wu = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    yu = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    xu = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    Iu = [gu, pu],
                    Tu = a().memo(({ in: e, actionType: t }) =>
                        a().createElement(
                            a().Fragment,
                            null,
                            a().createElement(
                                je.Z,
                                { in: e, timeout: 200, classNames: Bu },
                                a().createElement('div', { className: fu }),
                            ),
                            a().createElement(
                                je.Z,
                                { in: e, timeout: 400, classNames: wu },
                                a().createElement('div', { className: Cu }),
                            ),
                            Iu.includes(t) &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        je.Z,
                                        { in: e, timeout: 600, classNames: yu },
                                        a().createElement('div', { className: vu }),
                                    ),
                                    a().createElement(
                                        je.Z,
                                        { in: e, timeout: 600, classNames: xu },
                                        a().createElement('div', { className: Su }),
                                    ),
                                ),
                        ),
                    ),
                    ku = 'ColorMask_base_60',
                    Ou = 'ColorMask_base__enterActive_62',
                    Ru = ({ inProp: e, maskImage: t }) =>
                        a().createElement(
                            je.Z,
                            { in: e, timeout: 1200, classNames: { enterActive: Ou } },
                            a().createElement('div', { className: ku, style: { maskImage: `url(${t})` } }),
                        ),
                    Nu = {
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
                    Lu = { enter: Nu.base__enter, exit: Nu.base__enter },
                    Pu = (0, ue.Pi)(
                        ({
                            children: e,
                            slotIndex: t,
                            uniqueKey: u,
                            slotType: i,
                            isEmpty: s = !1,
                            imageSource: r,
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
                                D = h[1],
                                f = (0, n.useState)(r),
                                C = f[0],
                                v = f[1],
                                S = (0, n.useState)(u),
                                B = S[0],
                                w = S[1],
                                y = (0, n.useState)(o),
                                x = y[0],
                                I = y[1],
                                T = du(),
                                k = du(),
                                O = (b === u || b === B) && x !== o && [Au, gu, pu].includes(E),
                                R = -1 === d || -1 === m,
                                N = i ? `base${i[0].toUpperCase() + i.slice(1)}` : 'base',
                                L = Du[E] || 0;
                            (0, n.useEffect)(() => {
                                s || v(r);
                            }, [s, r]);
                            const P = (0, n.useCallback)(
                                    (e) => {
                                        const u = Object.assign({}, Lu);
                                        switch (E) {
                                            case bu: {
                                                const e = c === t ? Fu.RIGHT : Fu.LEFT,
                                                    n = _ - c != 1 ? Fu.SWAP : '';
                                                ((u.enterDone = Nu[`${N}__enter${e}${n}`]),
                                                    (u.exit = Nu[`${N}__exit${e}${n}`]),
                                                    R &&
                                                        (s
                                                            ? (u.enterDone = Nu[`${N}__enter${Fu.FADE}`])
                                                            : (u.exit = Nu[`${N}__exit${Fu.FADE}`])));
                                                break;
                                            }
                                            case Au:
                                                ((u.enterDone = Nu[`${N}__enter${Fu.DESTROY}`]),
                                                    (u.exit = Nu[`${N}__exit${Fu.DESTROY}`]),
                                                    T.run(() => A(!0), 900),
                                                    D(!0));
                                                break;
                                            case pu:
                                            case gu:
                                                ((u.enter = Nu[`${N}__enter${Fu.DEMOUNT}${Fu.FADE}`]),
                                                    (u.exit = Nu[`${N}__exit${Fu.DEMOUNT}`]),
                                                    T.run(() => A(!0), 900));
                                                break;
                                            case mu:
                                            case Eu:
                                                if (i !== Ve) {
                                                    const e = E === mu ? Fu.FITTING : Fu.FITTING_REMOVE;
                                                    ((u.enter = Nu[`${N}__enter${e}`]),
                                                        (u.exit = Nu[`${N}__exit${e}`]),
                                                        (u.exitActive = Nu[`${N}__exitActive${Fu.FITTING}`]));
                                                } else
                                                    ((u.enterDone = Nu[`${N}__enter${Fu.FADE}`]),
                                                        (u.exit = Nu[`${N}__exit${Fu.FADE}`]));
                                                break;
                                            default:
                                                return e;
                                        }
                                        return a().cloneElement(e, { classNames: u, timeout: L });
                                    },
                                    [E, L, c, t, _, N, R, s, T, i],
                                ),
                                M = (0, n.useCallback)(
                                    (e) => {
                                        k.run(() => {
                                            ((e.className = ''), e.classList.add(Nu.base), w(u), I(o));
                                        }, L);
                                    },
                                    [k, L, u, o],
                                ),
                                $ = (0, n.useCallback)(() => {
                                    (A(!1), D(!1));
                                }, []);
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(
                                    Ge.Z,
                                    { component: null, childFactory: P },
                                    a().createElement(
                                        je.Z,
                                        {
                                            key: u,
                                            timeout: L,
                                            classNames: Lu,
                                            onEntered: M,
                                            onExiting: $,
                                            unmountOnExit: !0,
                                        },
                                        a().createElement('div', { className: Nu.base }, e),
                                    ),
                                ),
                                O &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(Tu, { in: p, actionType: E }),
                                        a().createElement(Ru, { inProp: F, maskImage: C }),
                                    ),
                            );
                        },
                    ),
                    Mu = (0, ue.Pi)(
                        ({
                            intCD: e,
                            id: t,
                            itemInstalledSetupIdx: u,
                            isMountedMoreThanOne: i,
                            isInstalled: s,
                            isDisabled: r,
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
                                h = du();
                            (0, n.useEffect)(() => {
                                (A(!1), h.run(() => A(!0), 100));
                            }, [b]);
                            const F = (0, n.useMemo)(
                                () => ({
                                    intCD: e,
                                    slotType: _,
                                    installedSlotId: t,
                                    isMounted: s,
                                    fieldType: 1,
                                    itemInstalledSetupIdx: u,
                                    itemInstalledSetupSlotIdx: t,
                                    isMountedMoreThanOne: i,
                                }),
                                [e, _, t, u, s, i],
                            );
                            return p
                                ? a().createElement(
                                      Pu,
                                      {
                                          uniqueKey: e,
                                          isEmpty: l,
                                          slotIndex: c,
                                          slotType: _,
                                          imageSource: o,
                                          itemInstalledSetupIndex: u,
                                      },
                                      a().createElement(
                                          _u,
                                          { isEnabled: !(m || d || r || l), args: F },
                                          a().createElement('div', null, E),
                                      ),
                                  )
                                : a().createElement('div', null, E);
                        },
                    ),
                    $u = (0, ue.Pi)(
                        ({
                            slotType: e,
                            slotIndex: t,
                            level: u,
                            isSelected: i,
                            isSetupSwitching: s,
                            isSectionSelected: r,
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
                            forceLeftUpdate: D,
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
                                N = x.overlayType,
                                L = x.keyName,
                                P = x.categoryImgSource,
                                M = x.withAttention,
                                $ = x.id,
                                z = x.intCD,
                                H = d === F.Setup,
                                G = !C(d),
                                j = !f(d),
                                W = d === F.Compare,
                                U = H && r && G,
                                q = (0, n.useRef)(!1),
                                X = (0, n.useRef)(null),
                                V = -1 === z;
                            ((0, n.useEffect)(() => {
                                if (!q.current && r && i)
                                    return ie(() => {
                                        (o && o(X, e, $), (q.current = !0));
                                    });
                                q.current = !0;
                            }, [$, r, i, o, e]),
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
                                })((0, n.useCallback)(() => (!i && G && !s && l(e, $), 500), [$, G, i, s, l, e])),
                                Y = (0, n.useCallback)(() => {
                                    m || K('');
                                }, [K, m]),
                                Z = (0, n.useCallback)(() => {
                                    j && !i && !A && !m && k.playHighlight();
                                }, [i, A, m, j]);
                            (0, n.useEffect)(() => {
                                v && k.playHighlight();
                            }, [v]);
                            const Q = (0, n.useCallback)(() => {
                                    null == _ || _($, e);
                                }, [$, _, e]),
                                J = H && !T,
                                te = Boolean(g && v === g),
                                ue = g && (U || W),
                                ne = `${e}-slot-${$}`,
                                ae = P && P.length > 0,
                                se = ae ? { backgroundImage: `url(${P})` } : {},
                                re = {
                                    id: g,
                                    containerRef: p,
                                    isEnabled: !V,
                                    onClick: Y,
                                    isUpdateAvailable: Boolean(A),
                                    handleAction: h,
                                    forceCenterX: D,
                                    blockOnGrabIds: S,
                                },
                                oe = {
                                    isEmpty: V,
                                    intCD: z,
                                    slotType: e,
                                    slotIndex: t,
                                    imageSource: I,
                                    isDisabled: m,
                                    isInstalled: T,
                                    id: $,
                                    itemInstalledSetupIdx: O,
                                    isMountedMoreThanOne: R,
                                    contextMenuDisabled: B,
                                    isSetupSwitching: s,
                                };
                            return a().createElement(
                                'div',
                                { className: tu, onMouseEnter: Z, id: ne },
                                (r || W) &&
                                    !T &&
                                    a().createElement(
                                        'div',
                                        { className: nu },
                                        a().createElement(eu, { id: `close-${ne}`, show: !A, onClick: Q }),
                                    ),
                                a().createElement(
                                    Vt,
                                    { slotType: e, slotId: $, isEnabled: !A, panelType: d },
                                    a().createElement(
                                        'div',
                                        { ref: X },
                                        a().createElement(
                                            At,
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
                                            G &&
                                                a().createElement(
                                                    'div',
                                                    { className: uu },
                                                    a().createElement(Wt, { text: L, show: Boolean(r), panelType: d }),
                                                ),
                                            a().createElement(
                                                gt,
                                                { when: Boolean(ue), wrapper: $t, withProps: re },
                                                a().createElement(
                                                    gt,
                                                    { when: G, wrapper: Mu, withProps: oe },
                                                    a().createElement(wt, {
                                                        imageSource: I,
                                                        isIncompatible: b,
                                                        overlayType: N,
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
                                                    a().createElement('span', { className: iu }),
                                                    a().createElement('span', { className: su, style: se }),
                                                ),
                                            m && a().createElement('div', { className: au }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    zu = 'BattleAbilitySlot_base_74',
                    Hu = 'BattleAbilitySlot_rank_01',
                    Gu = ['rank'];
                const ju = (e) => {
                        let t = e.rank,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Gu);
                        return a().createElement(
                            'div',
                            { className: zu },
                            a().createElement($u, u),
                            t && a().createElement('div', { className: Hu, style: { backgroundImage: `url(${t})` } }),
                        );
                    },
                    Wu = {
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
                let Uu, qu;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Uu || (Uu = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(qu || (qu = {})));
                const Xu = ({
                        children: e,
                        size: t,
                        disabled: u,
                        mixClass: i,
                        onMouseEnter: s,
                        onMouseMove: r,
                        onMouseDown: o,
                        onMouseUp: l,
                        onMouseLeave: c,
                        onClick: _,
                        isFocused: d = !1,
                        type: m = Uu.primary,
                        soundHover: E = 'highlight',
                        soundClick: b = 'play',
                    }) => {
                        const g = (0, n.useRef)(null),
                            p = (0, n.useState)(d),
                            A = p[0],
                            h = p[1],
                            F = (0, n.useState)(!1),
                            D = F[0],
                            f = F[1];
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
                                        Wu.base,
                                        Wu[`base__${m}`],
                                        u && Wu.base__disabled,
                                        t && Wu[`base__${t}`],
                                        A && Wu.base__focus,
                                        D && Wu.base__highlightActive,
                                        i,
                                    ),
                                    onMouseEnter: function (e) {
                                        u || (null !== E && T(E), s && s(e));
                                    },
                                    onMouseMove: function (e) {
                                        r && r(e);
                                    },
                                    onMouseUp: function (e) {
                                        u || (l && l(e), f(!1));
                                    },
                                    onMouseDown: function (e) {
                                        if (u) return;
                                        const t = e.button === ru.LEFT;
                                        (null !== b && t && T(b),
                                            o && o(e),
                                            d && (u || (g.current && (g.current.focus(), h(!0)))),
                                            t && f(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        u || (c && c(e), f(!1));
                                    },
                                    onClick: function (e) {
                                        u || (_ && _(e));
                                    },
                                },
                                m !== Uu.ghost &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('div', { className: Wu.back }),
                                        a().createElement('span', { className: Wu.texture }),
                                    ),
                                a().createElement(
                                    'span',
                                    { className: S()(Wu.state, Wu.state__default) },
                                    a().createElement('span', { className: Wu.stateDisabled }),
                                    a().createElement('span', { className: Wu.stateHighlightHover }),
                                    a().createElement('span', { className: Wu.stateHighlightActive }),
                                ),
                                a().createElement(
                                    'span',
                                    { className: Wu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    },
                    Vu = {
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
                    Ku = ({
                        name: e,
                        isCorrect: t,
                        isSpecializationActive: u = !0,
                        isDynamic: i,
                        mediaSize: s,
                        isClickable: r,
                        onSpecializationClick: o,
                        index: l,
                    }) => {
                        const c = s !== z.None,
                            _ = (0, n.useCallback)(() => {
                                r && u && o && o(l);
                            }, [l, r, u, o]),
                            d = (0, n.useMemo)(() => {
                                let u = '';
                                c && (u = (s === z.Large || s === z.Huge ? z.Large : z.Medium) + '_');
                                const n = `${u}${e}_${t ? 'on' : 'off'}`,
                                    a = R.images.gui.maps.icons.specialization.$dyn(n);
                                return a && { backgroundImage: `url(${a})` };
                            }, [e, t, s, c]),
                            m = (0, n.useMemo)(
                                () => ({ spec: e, isDyn: i, isClickable: r, tooltip: 'hangarSlotSpec' }),
                                [e, i, r],
                            );
                        if (!d) return null;
                        const E = S()(
                                `specialization-${e}`,
                                Vu.base,
                                c && Vu[`base__${s}`],
                                u && Vu.base__setup,
                                t && Vu.base__correct,
                            ),
                            b = S()(Vu.icon, c && Vu[`icon__${s}`]),
                            g = c ? '' : Vu.specializationWrapper,
                            p = a().createElement(
                                'div',
                                { key: e, className: E },
                                a().createElement('div', { className: Vu.glow }),
                                a().createElement('div', { className: b, style: d }),
                            );
                        return a().createElement(
                            Xt,
                            { args: m },
                            r && u
                                ? a().createElement(
                                      Xu,
                                      { size: qu.small, type: Uu.ghost, mixClass: Vu.specializationButton, onClick: _ },
                                      p,
                                  )
                                : a().createElement('div', { className: g }, p),
                        );
                    },
                    Yu = 'Specializations_base_ab';
                function Zu() {
                    return (
                        (Zu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Zu.apply(this, arguments)
                    );
                }
                const Qu = ({
                        specializations: e,
                        isSpecializationActive: t = !0,
                        isDynamic: u,
                        mediaSize: n = z.None,
                        activeSpecsMask: i,
                        onSpecializationClick: s,
                    }) =>
                        e.length
                            ? a().createElement(
                                  'div',
                                  { className: Yu, key: i },
                                  g(e, (e, i) =>
                                      a().createElement(
                                          Ku,
                                          Zu({ index: i, key: e.name }, e, {
                                              isSpecializationActive: t,
                                              isDynamic: u,
                                              mediaSize: n,
                                              onSpecializationClick: s,
                                          }),
                                      ),
                                  ),
                              )
                            : null,
                    Ju = 'OptDeviceSlot_base_14',
                    en = 'OptDeviceSlot_specializations_c3',
                    tn = ['groupIndex', 'sectionIndex', 'slotIndex', 'activeSpecsMask', 'isChangeSetupIndex'];
                function un() {
                    return (
                        (un =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        un.apply(this, arguments)
                    );
                }
                const nn = (0, ue.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            n = e.slotIndex,
                            i = e.activeSpecsMask,
                            s = e.isChangeSetupIndex,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, tn);
                        const o = ee(),
                            l = o.controls,
                            c = o.model.computes.specializations(t, u, n),
                            _ = c.specializations.length,
                            d = r.panelType === F.Setup || r.panelType === F.Compare,
                            m = !C(r.panelType),
                            E = c.isDynamic;
                        return a().createElement(
                            'div',
                            { className: S()(Ju, _ && !E && !s && 'specializationsSlot') },
                            m &&
                                a().createElement(
                                    'div',
                                    { className: en },
                                    a().createElement(Qu, {
                                        specializations: c.specializations,
                                        isDynamic: E,
                                        activeSpecsMask: i,
                                        isSpecializationActive: d,
                                        onSpecializationClick: (e) => {
                                            l.specializationSelect({ slotId: r.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            a().createElement($u, un({}, r, { groupIndex: t, sectionIndex: u, slotIndex: n })),
                        );
                    }),
                    an = {
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
                    sn = ({ id: e, isSelected: t, isLocked: u, onSlotSelected: i, panelType: s }) => {
                        const r = Ze,
                            o = (0, n.useCallback)(() => {
                                i(r, e);
                            }, [e, i, r]),
                            l = S()(an.base, an[`base__${s}`], u && an.base__disabled, t && an.base__toggle),
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
                            Vt,
                            { slotType: r, slotId: e, panelType: s },
                            a().createElement(
                                'div',
                                { id: d, className: l, onClick: o, onMouseEnter: k.playHighlight },
                                t && a().createElement('div', { className: an.glow }),
                                a().createElement('div', { className: an.image, style: c }),
                                a().createElement('div', { className: an.toggle, style: _ }),
                            ),
                        );
                    },
                    rn = ['groupIndex', 'sectionIndex', 'slotIndex', 'sectionType'];
                function on() {
                    return (
                        (on =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        on.apply(this, arguments)
                    );
                }
                const ln = (0, ue.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            n = e.slotIndex,
                            i = e.sectionType,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, rn);
                        const r = ee().model,
                            o = r.computes.slots.slot(t, u, n),
                            l = r.ammunitionPanel.get(),
                            c = l.selectedSection,
                            _ = l.selectedSlot,
                            d = (c === i ? _ : -1) === o.id;
                        switch (i) {
                            case 'optDevices': {
                                const e = o;
                                return a().createElement(
                                    nn,
                                    on({}, e, s, { groupIndex: t, sectionIndex: u, slotIndex: n, isSelected: d }),
                                );
                            }
                            case Ze: {
                                const e = o;
                                return a().createElement(
                                    sn,
                                    on({}, s, e, { groupIndex: t, sectionIndex: u, slotIndex: n }),
                                );
                            }
                            case Ke: {
                                const e = o;
                                return a().createElement(
                                    ju,
                                    on({}, s, e, { groupIndex: t, sectionIndex: u, slotIndex: n, isSelected: d }),
                                );
                            }
                            default:
                                return a().createElement(
                                    $u,
                                    on({}, s, { isSelected: d, groupIndex: t, sectionIndex: u, slotIndex: n }),
                                );
                        }
                    }),
                    cn = 'Slots_base_27',
                    _n = [
                        'groupIndex',
                        'sectionIndex',
                        'sectionType',
                        'onActiveSlotChanged',
                        'isDisabled',
                        'blockOnGrabIds',
                        'isChangeSetupIndex',
                        'setIsExitBlocked',
                    ];
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
                            i = e.sectionType,
                            s = e.onActiveSlotChanged,
                            r = e.isDisabled,
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
                            })(e, _n);
                        const d = (0, n.useRef)(null),
                            m = (0, n.useRef)(null),
                            E = ee(),
                            b = E.model,
                            g = E.controls,
                            p = b.computes.slots.length(t, u),
                            A = b.ammunitionPanel.get(),
                            h = A.selectedSection,
                            F = A.selectedSlot,
                            D = A.syncInitiator,
                            f = (0, n.useCallback)(
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
                            v = i === Ke,
                            B = C ? F : -1,
                            w = `${i}-${p}slots`,
                            y = Z({ baseId: w, slotsLength: p, handleSwap: f, setIsExitBlocked: c, syncInitiator: D }),
                            x = y.handleGrabberAction,
                            I = y.dragState,
                            T = y.getForceCenterX;
                        (0, n.useEffect)(() => {
                            C && -1 !== B && d.current && s(d, h, B);
                        }, [s, C, h, B]);
                        const O = (e, t) => {
                                if ((r || k.playClick(), 'number' != typeof t))
                                    return console.warn('selectedSlot is not a number');
                                g.sectionSelect({ selectedSlot: t, selectedSection: e });
                            },
                            R = (e) => {
                                d.current = e ? e.current : null;
                            },
                            N = (e, t) => {
                                g.slotClear({ slotId: e, sectionType: t });
                            };
                        return a().createElement(
                            'div',
                            { id: w, ref: m, className: S()(cn, i) },
                            ge(p, (e) => {
                                const c = !v && p > 1 ? `${w}-${e}` : '';
                                return a().createElement(
                                    n.Fragment,
                                    { key: `slot ${t}-${u}-${e}` },
                                    e > 0 && a().createElement(bt, null),
                                    a().createElement(
                                        ln,
                                        dn(
                                            {
                                                groupIndex: t,
                                                sectionIndex: u,
                                                slotIndex: e,
                                                sectionType: i,
                                                isSectionSelected: C,
                                                isDisabled: r,
                                                contextMenuDisabled: v,
                                                slotType: i,
                                                onActiveSlotChanged: s,
                                                onSlotSelected: O,
                                                onActiveSlotRefChanged: R,
                                                onSlotClear: N,
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
                    En = [
                        'groupIndex',
                        'sectionIndex',
                        'type',
                        'newItemsCount',
                        'panelType',
                        'sectionsIds',
                        'isSetupSwitching',
                        'classMix',
                    ];
                function bn() {
                    return (
                        (bn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        bn.apply(this, arguments)
                    );
                }
                const gn = (0, ue.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            i = e.type,
                            s = e.newItemsCount,
                            r = e.panelType,
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
                            })(e, En);
                        const d = ee().model,
                            m = (0, n.useRef)(null),
                            E = d.ammunitionPanel.get(),
                            b = E.selectedSection,
                            g = E.syncInitiator,
                            p = d.computes.slots.length(t, u),
                            A = d.computes.slots.existFilled(t, u),
                            h = b === i,
                            D = Y(i, o),
                            f = D.selfId,
                            C = D.blockOnGrabIds,
                            v = p > 0 && r !== F.Compare && r !== F.Battle && r !== F.Respawn,
                            B = R.strings.tank_setup.section.$dyn(i);
                        if ('string' != typeof B)
                            throw new Error(`No top label text for section type ${i} or it's not a string`);
                        return a().createElement(
                            'div',
                            {
                                id: l ? ct : f,
                                ref: m,
                                className: S()(
                                    _t,
                                    c,
                                    h && 'sectionSelected',
                                    p > 1 && 'multiSlot',
                                    g >= 0 && A && 'existFilledSlots',
                                ),
                            },
                            v &&
                                a().createElement(
                                    'div',
                                    { className: dt },
                                    a().createElement(lt, { text: B, parentRef: m, show: !h, panelType: r }),
                                ),
                            a().createElement(
                                mn,
                                bn(
                                    { groupIndex: t, sectionIndex: u, sectionType: i, panelType: r, blockOnGrabIds: C },
                                    _,
                                ),
                            ),
                            Boolean(s) &&
                                a().createElement(
                                    'div',
                                    { className: mt },
                                    a().createElement(tt, { value: s, size: 'small', fadeInAnimation: !0 }),
                                ),
                        );
                    }),
                    pn = 'Count_base_e4',
                    An = 'Count_base__zero_64',
                    hn = ({ count: e }) => {
                        const t = S()(pn, !e && An);
                        return a().createElement('div', { className: t }, e);
                    },
                    Fn = {
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
                    Dn = ({
                        id: e,
                        itemInstalledSetupIdx: t,
                        isMountedMoreThanOne: u,
                        imageSource: i,
                        count: s,
                        isInfinity: r,
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
                        blockOnGrabIds: D,
                        shellState: f,
                        isDisabled: v,
                    }) => {
                        const B = !C(c),
                            w = (0, n.useMemo)(() => ({ backgroundImage: `url(${i})` }), [i]),
                            y = m && m === h,
                            x = m && m === g,
                            I = (0, n.useMemo)(() => {
                                const n = { slotType: Ve, slotId: e, fieldType: 1, intCD: _ };
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
                                    blockOnGrabIds: D,
                                }),
                                [g, D, b, A, m, p, o],
                            ),
                            N = (0, n.useMemo)(
                                () => ({ slotIndex: d, uniqueKey: _, slotType: Ve, imageSource: null }),
                                [_, d],
                            );
                        return a().createElement(
                            _u,
                            { isEnabled: B && !E && !v, args: k },
                            a().createElement(
                                Xt,
                                {
                                    args: T,
                                    decoratorId: [F.Battle, F.Prebattle].includes(c)
                                        ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                        : 0,
                                    isEnabled: !g,
                                },
                                a().createElement(
                                    'div',
                                    { id: `shell-slot-${d}`, className: Fn.base },
                                    l &&
                                        a().createElement(
                                            'div',
                                            { className: Fn.label },
                                            a().createElement(Wt, {
                                                text: l,
                                                show: o || c === F.Battle || c === F.Respawn,
                                                shellState: f,
                                                panelType: c,
                                                className: S()(
                                                    0 === d && Fn.topLabel__first,
                                                    2 === d && Fn.topLabel__last,
                                                ),
                                            }),
                                        ),
                                    a().createElement(
                                        'div',
                                        {
                                            className: S()(
                                                Fn.shell,
                                                !g && B && !v && Fn.shell__active,
                                                x && Fn.shell__grabbing,
                                                !x && y && Fn.shell__potential,
                                            ),
                                        },
                                        a().createElement(
                                            gt,
                                            { when: B, wrapper: $t, withProps: O },
                                            a().createElement(
                                                gt,
                                                { when: B, wrapper: Pu, withProps: N },
                                                a().createElement('div', { className: Fn.image, style: w }),
                                                !r && a().createElement(hn, { count: s }),
                                                r && a().createElement('div', { className: Fn.infinity }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    fn = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    Cn = ({ id: e, isSelected: t, imageSource: u, onSlotSelected: i, panelType: s }) => {
                        const r = (0, n.useCallback)(() => {
                                !t && i(e);
                            }, [e, t, i]),
                            o = S()(fn.slot, !t && fn.slot__active, fn.slot__compare),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]),
                            c = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            );
                        return a().createElement(
                            Vt,
                            { slotType: Ye, slotId: e, panelType: s },
                            a().createElement(
                                'div',
                                { className: fn.base },
                                a().createElement(
                                    'div',
                                    { className: o, onClick: r, id: `shell-slot-${e}` },
                                    t && a().createElement('div', { className: fn.glow }),
                                    a().createElement('div', { className: fn.image, style: l }),
                                    a().createElement('div', { className: fn.toggle, style: c }),
                                ),
                            ),
                        );
                    },
                    vn = 'ShellContainer_base_46',
                    Sn = 'ShellContainer_base__compressed_13',
                    Bn = [
                        'groupIndex',
                        'sectionIndex',
                        'slotIndex',
                        'isCompare',
                        'handleSlotSelected',
                        'baseId',
                        'grabber',
                        'panelType',
                    ];
                function wn() {
                    return (
                        (wn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        wn.apply(this, arguments)
                    );
                }
                const yn = (0, ue.Pi)((e) => {
                        let t = e.groupIndex,
                            u = e.sectionIndex,
                            n = e.slotIndex,
                            i = e.isCompare,
                            s = e.handleSlotSelected,
                            r = e.baseId,
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
                            })(e, Bn);
                        const _ = o.handleGrabberAction,
                            d = o.dragState,
                            m = o.getForceCenterX,
                            E = ee().model,
                            b = E.computes.slots.length(t, u),
                            g = E.computes.slots.slot(t, u, n),
                            p = !i && b > 1 ? `${r}-${g.id}` : '';
                        return D(g)
                            ? null
                            : a().createElement(
                                  'div',
                                  { key: g.id, className: S()(vn, !i && 0 !== n && Sn) },
                                  i
                                      ? a().createElement(Cn, wn({}, g, { onSlotSelected: s, panelType: l }))
                                      : a().createElement(
                                            Dn,
                                            wn(
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
                    xn = 'Shells_base_f9',
                    In = (0, ue.Pi)(
                        ({
                            panelType: e,
                            onSelected: t,
                            isCompare: u,
                            isSelected: i,
                            syncInitiator: s,
                            blockOnGrabIds: r,
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
                                h = u ? Ye : Ve,
                                D = `${h}-${g}shells`,
                                C = !f(e),
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
                                    baseId: D,
                                    slotsLength: g,
                                    handleSwap: B,
                                    setIsExitBlocked: c,
                                    syncInitiator: s,
                                });
                            return (
                                (0, n.useEffect)(
                                    () =>
                                        ie(() => {
                                            p.current = !0;
                                        }),
                                    [],
                                ),
                                (0, n.useEffect)(() => {
                                    if (i && e === F.Setup) {
                                        if (!p.current)
                                            return ie(() => {
                                                t();
                                            });
                                        t();
                                    }
                                }, [i, e, t]),
                                a().createElement(
                                    'div',
                                    {
                                        id: D,
                                        ref: A,
                                        className: xn,
                                        onClick: S,
                                        onMouseEnter: () => {
                                            !o && C && k.playHighlight();
                                        },
                                    },
                                    ge(g, (t) =>
                                        a().createElement(yn, {
                                            key: `${_} ${d} ${t}`,
                                            groupIndex: _,
                                            sectionIndex: d,
                                            slotIndex: t,
                                            isCompare: u,
                                            containerRef: A,
                                            handleSlotSelected: v,
                                            panelType: e,
                                            blockOnGrabIds: r,
                                            isSelected: i,
                                            isDisabled: o,
                                            isSetupSwitching: l,
                                            grabber: w,
                                            baseId: D,
                                        }),
                                    ),
                                )
                            );
                        },
                    ),
                    Tn = {
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
                    kn = [F.Hangar, F.Battle, F.Prebattle, F.Respawn],
                    On = (0, ue.Pi)(
                        ({
                            type: e,
                            sectionsIds: t,
                            panelType: u,
                            onActiveSlotChanged: i,
                            isDisabled: s,
                            isBorderActive: r,
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
                                D = u === F.Compare,
                                f = p === e,
                                C = (0, n.useCallback)(() => {
                                    i(h, p, 0);
                                }, [i, p]),
                                v = Y(e, t),
                                B = v.selfId,
                                w = v.blockOnGrabIds,
                                y = ((e) => kn.includes(e))(u) && !s && g,
                                x = E.computes.slots.filteredLength(d, m),
                                I = !D && u !== F.Battle && u !== F.Respawn;
                            return a().createElement(
                                'div',
                                {
                                    id: l ? ct : B,
                                    className: S()(
                                        Tn.base,
                                        o,
                                        Tn[`base__${u}`],
                                        !r && f && Tn.base__selected,
                                        D && Tn.base__compare,
                                        s && Tn.base__disabled,
                                    ),
                                    ref: h,
                                },
                                y && a().createElement('div', { className: Tn.attention }),
                                I &&
                                    a().createElement(
                                        'div',
                                        { className: Tn.label },
                                        a().createElement(lt, {
                                            text: R.strings.tank_setup.section.shells(),
                                            parentRef: h,
                                            show: !f,
                                            panelType: u,
                                        }),
                                    ),
                                y &&
                                    a().createElement('div', {
                                        className: S()(
                                            Tn.border,
                                            2 === x && Tn.border__double,
                                            3 === x && Tn.border__triple,
                                        ),
                                    }),
                                a().createElement(In, {
                                    groupIndex: d,
                                    sectionIndex: m,
                                    panelType: u,
                                    onSelected: C,
                                    isSelected: f,
                                    isCompare: D,
                                    syncInitiator: A,
                                    blockOnGrabIds: w,
                                    isDisabled: s,
                                    isSetupSwitching: l,
                                    setIsExitBlocked: c,
                                }),
                                Boolean(_) &&
                                    a().createElement(
                                        'div',
                                        { className: Tn.counter },
                                        a().createElement(tt, { value: _, size: 'small', fadeInAnimation: !0 }),
                                    ),
                                s && a().createElement('div', { className: Tn.disabled }),
                            );
                        },
                    ),
                    Rn = {
                        base: 'Sections_base_13',
                        section: 'Sections_section_35',
                        section__battle: 'Sections_section__battle_d3',
                        section__small: 'Sections_section__small_73',
                        section__extraSmall: 'Sections_section__extraSmall_5f',
                        section__first: 'Sections_section__first_e2',
                    };
                function Nn() {
                    return (
                        (Nn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Nn.apply(this, arguments)
                    );
                }
                const Ln = (0, ue.Pi)(
                        ({
                            groupIndex: e,
                            panelType: t,
                            isDisabled: u = !1,
                            onActiveSlotChanged: n,
                            isBorderActive: i,
                            isChangeSetupIndex: s,
                            setIsExitBlocked: r,
                        }) => {
                            const o = ee().model,
                                l = oe(['section'], Rn),
                                c = o.computes.sections.IDs(e),
                                _ = {
                                    panelType: t,
                                    isDisabled: u,
                                    onActiveSlotChanged: n,
                                    isBorderActive: i,
                                    sectionsIds: c,
                                    isChangeSetupIndex: s,
                                    setIsExitBlocked: r,
                                };
                            return a().createElement(
                                'div',
                                { className: Rn.base },
                                ge(o.computes.sections.length(e), (u) => {
                                    const n = o.computes.sections.section(e, u);
                                    if (!n.slots || !n.slots.length) return null;
                                    const i = S()(
                                        l.section,
                                        0 !== u && C(t) && Rn.section__battle,
                                        0 === u && Rn.section__first,
                                    );
                                    if (n.type === Ve || n.type === Ye) {
                                        const t = n;
                                        return a().createElement(
                                            On,
                                            Nn({}, t, _, {
                                                groupIndex: e,
                                                sectionIndex: u,
                                                isSetupSwitching: s,
                                                key: `${n.name}${e}${n.slots.length}`,
                                                classMix: i,
                                            }),
                                        );
                                    }
                                    return a().createElement(
                                        gn,
                                        Nn({}, n, _, {
                                            groupIndex: e,
                                            sectionIndex: u,
                                            isSetupSwitching: s,
                                            key: `${n.name}${e}${n.slots.length}`,
                                            classMix: i,
                                        }),
                                    );
                                }),
                            );
                        },
                    ),
                    Pn = 'KeyboardKey_base_57',
                    Mn = 'KeyboardKey_back_43',
                    $n = a().memo(({ text: e }) =>
                        a().createElement('div', { className: Pn }, a().createElement('div', { className: Mn }, e)),
                    ),
                    zn = 'SetupSwitchHotkey_base_4c',
                    Hn = 'SetupSwitchHotkey_hotKeyWrapper_8d',
                    Gn = 'SetupSwitchHotkey_plusWrapper_f0',
                    jn = 'SetupSwitchHotkey_plus_f0',
                    Wn = 'SetupSwitchHotkey_plus__horizontal_e0',
                    Un = 'SetupSwitchHotkey_plus__vertical_5b',
                    qn = a().memo(({ hotKeys: e }) =>
                        a().createElement(
                            'div',
                            { className: zn },
                            e.map((e, t) => {
                                if (!e) return null;
                                const u = e.value;
                                return 0 === t
                                    ? a().createElement($n, { key: t, text: u })
                                    : a().createElement(
                                          'div',
                                          { key: t, className: Hn },
                                          a().createElement(
                                              'div',
                                              { className: Gn },
                                              a().createElement('div', { className: `${jn} ${Wn}` }),
                                              a().createElement('div', { className: `${jn} ${Un}` }),
                                          ),
                                          a().createElement($n, { text: u }),
                                      );
                            }),
                        ),
                    ),
                    Xn = {
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
                const Kn = R.strings.tank_setup.tooltips.prebattleSwitchIndicator,
                    Yn = (e) => e.setupSelector.hotKeys,
                    Zn = (0, ue.Pi)(
                        ({
                            groupIndex: e,
                            sectionProps: t,
                            isSetupSwitching: u,
                            setSetupSwitching: n,
                            handleSetupSwitching: i,
                        }) => {
                            const s = oe(['switch'], Xn),
                                r = ee().model,
                                o = r.root.get().isDisabled,
                                l = r.computes.groups.group(e);
                            return a().createElement(
                                'div',
                                { key: l.groupId, className: Xn.base },
                                a().createElement(
                                    'div',
                                    { className: Xn.wrapper },
                                    a().createElement(
                                        Xe,
                                        ((e, t) => ({ index: e.currentIndex, setSetupSwitching: t }))(l, n),
                                        a().createElement(Ln, Vn({}, t, { groupIndex: e, isChangeSetupIndex: u })),
                                    ),
                                    l.setupSelector.isSwitchEnabled &&
                                        a().createElement(
                                            'div',
                                            { className: S()(s.switch, f(t.panelType) && Xn.switch__battle) },
                                            a().createElement(He, {
                                                states: l.setupSelector.states,
                                                onClick: i,
                                                totalCount: l.totalCount,
                                                currentIndex: l.currentIndex,
                                                groupId: l.groupId,
                                                isDisabled: t.isDisabled,
                                            }),
                                            l.setupSelector.isPrebattleSwitchDisabled &&
                                                a().createElement(
                                                    Se,
                                                    {
                                                        header: Kn.title(),
                                                        body: String(Kn.desc.$dyn(`c_${l.groupId}`)),
                                                    },
                                                    a().createElement('div', {
                                                        className: Xn.prebattleSwitchIndicator,
                                                    }),
                                                ),
                                        ),
                                ),
                                ((c = l),
                                ((_ = t.panelType) === F.Battle || _ === F.Respawn) &&
                                    c.setupSelector.isSwitchEnabled &&
                                    Yn(c) &&
                                    a().createElement(
                                        'div',
                                        { className: S()(Xn.hint, o && Xn.hint__disabled) },
                                        a().createElement(qn, { hotKeys: Yn(l) }),
                                    )),
                            );
                            var c, _;
                        },
                    ),
                    Qn = 'Groups_base_de',
                    Jn = (0, ue.Pi)(
                        ({ sectionProps: e, isSetupSwitching: t, isReady: u, setSetupSwitching: i, children: s }) => {
                            const r = ee(),
                                o = r.model,
                                l = r.controls,
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
                                { className: Qn },
                                ge(o.computes.groups.length(), (u) =>
                                    a().createElement(Zn, {
                                        key: `group-${u}`,
                                        sectionProps: e,
                                        groupIndex: u,
                                        isSetupSwitching: t,
                                        setSetupSwitching: i,
                                        handleSetupSwitching: m,
                                    }),
                                ),
                                s,
                            );
                        },
                    );
                function ea() {
                    return (
                        (ea =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ea.apply(this, arguments)
                    );
                }
                const ta = ({ children: e, tooltipArgs: t, className: u }) => {
                        if (!t) return e;
                        const n = a().createElement('div', { className: u }, e);
                        if (t.header || t.body) return a().createElement(Se, t, n);
                        const i = t.contentId;
                        return i ? a().createElement(De, ea({}, t, { contentId: i }), n) : a().createElement(Xt, t, n);
                    },
                    ua = 'RoleSkillSlot_base_c4',
                    na = 'RoleSkillSlot_icon_79',
                    aa = ({ roleSkill: e, tooltipId: t, tooltipHeader: u, tooltipBody: i, className: s }) => {
                        const r = (0, n.useMemo)(
                            () => ({
                                args: { tooltipId: t, roleSkill: e, header: u, body: i, hasHtmlContent: !0 },
                                header: u,
                                body: i,
                                ignoreShowDelay: !0,
                            }),
                            [e, u, i, t],
                        );
                        return a().createElement(
                            ta,
                            { tooltipArgs: r, className: S()(ua, s) },
                            a().createElement('div', {
                                className: na,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    ia = 'SlotGlow_base_40',
                    sa = 'SlotGlow_glow_a9',
                    ra = 'SlotGlow_glow__initialized_8d',
                    oa = 'SlotGlow_glow__shown_f2',
                    la = 'SlotGlow_glow__hidden_94',
                    ca = (0, n.memo)(({ slotOffset: e, slotWidth: t, isAnimationRunning: u }) => {
                        const i = (0, n.useState)({ offset: e, slotWidth: t }),
                            s = i[0],
                            r = i[1],
                            o = (0, n.useRef)({ initialized: !1, offset: e, slotWidth: t });
                        ((0, n.useEffect)(() => {
                            let u = o.current.initialized;
                            (!u && e && ((u = !0), r({ offset: e, slotWidth: t })),
                                (o.current = { initialized: u, offset: e, slotWidth: t }));
                        }, [e, t]),
                            (0, n.useEffect)(() => {
                                u || r(o.current);
                            }, [u]));
                        const c = (0, n.useMemo)(() => {
                                const e = s.slotWidth + 25;
                                return { left: s.offset, width: e, backgroundSize: `${l.O.view.pxToRem(e)}rem 100%` };
                            }, [s.offset, s.slotWidth]),
                            _ = !u && s.offset === o.current.offset,
                            d = S()(sa, o.current.initialized && ra, _ ? oa : la);
                        return a().createElement(
                            'div',
                            { className: ia },
                            a().createElement('div', { className: d, style: c }),
                        );
                    }),
                    _a = (0, ue.Pi)(
                        ({
                            show: e = !0,
                            isReady: t = !0,
                            panelType: u,
                            isDisabled: i = !1,
                            onResize: s,
                            setIsExitBlocked: r,
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
                                D = h[0],
                                f = h[1],
                                C = (0, n.useState)(!1),
                                v = C[0],
                                B = C[1],
                                w = (0, n.useRef)(null),
                                y = (0, n.useContext)(ae),
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
                            (le(w, T, !0, [m]), (0, n.useEffect)(() => () => T(), [T]));
                            const k = (0, n.useCallback)(() => {
                                    B(!1);
                                }, []),
                                O = (0, n.useCallback)(() => {
                                    if (x.current.element && w.current) {
                                        const e = x.current.element.getBoundingClientRect(),
                                            t = w.current.getBoundingClientRect();
                                        f({ slotWidth: e.width, slotOffset: e.left - t.left + 0.5 * e.width });
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
                                N = (0, n.useCallback)(
                                    () =>
                                        ie(() => {
                                            ((x.current.generation += 1), O());
                                        }),
                                    [x, O],
                                );
                            ((0, n.useEffect)(() => ie(N), [N]),
                                (0, n.useEffect)(
                                    () => (
                                        engine.on('clientResized', N),
                                        () => {
                                            engine.off('clientResized', N);
                                        }
                                    ),
                                    [N],
                                ));
                            const L = D.slotWidth,
                                P = D.slotOffset,
                                M = S()(ce.base, !t && ce.base__locked, !e && ce.base__hidden, i && ce.base__disabled),
                                $ = S()(ce.border, !v && ce.border__hidden),
                                z = u === F.Setup || u === F.Compare,
                                H = {
                                    panelType: u,
                                    isDisabled: i,
                                    onActiveSlotChanged: R,
                                    isBorderActive: v,
                                    setIsExitBlocked: r,
                                };
                            (0, n.useEffect)(() => {
                                null == s || s();
                            }, [s, E.roleSkill]);
                            const G = oe(['roleSkillSlot'], ce);
                            return a().createElement(
                                'div',
                                { ref: w, className: M },
                                z &&
                                    a().createElement(ca, {
                                        key: x.current.generation,
                                        slotOffset: P,
                                        slotWidth: L,
                                        isAnimationRunning: v,
                                    }),
                                a().createElement(
                                    Jn,
                                    { isSetupSwitching: d || g, sectionProps: H, isReady: t, setSetupSwitching: p },
                                    E.roleSkill &&
                                        a().createElement(aa, {
                                            roleSkill: E.roleSkill,
                                            tooltipId: E.tooltipId,
                                            tooltipHeader: E.tooltipHeader,
                                            tooltipBody: E.tooltipBody,
                                            className: S()(
                                                ce.roleSkillSlot,
                                                ce[`roleSkillSlot__${u}`],
                                                G.roleSkillSlot,
                                            ),
                                        }),
                                ),
                                z &&
                                    a().createElement(
                                        'div',
                                        { className: $ },
                                        a().createElement(be, { slotWidth: L, slotOffset: P, onAnimationEnd: k }),
                                    ),
                            );
                        },
                    ),
                    da = 'Content_base_1a',
                    ma = (0, ue.Pi)(() => {
                        const e = ee(),
                            t = e.model,
                            u = e.controls,
                            n = t.root.get(),
                            i = n.isDisabled,
                            s = n.isReady,
                            r = u.escKeyDown;
                        return (
                            I(w.n.ESCAPE, r),
                            a().createElement(
                                'div',
                                { className: da },
                                a().createElement(_a, { panelType: F.Respawn, isDisabled: i, isReady: s }),
                            )
                        );
                    });
                var Ea = u(8613);
                (Date.now(), Ea.Ew.getRegionalDateTime, Ea.Ew.getFormattedDateTime);
                const ba = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    ga = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    pa = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    Aa = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    ha = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const n = ba(`${e}.${u}`, window);
                                return pa(n) ? t(e, u, n) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    Fa = (e) => {
                        const t = ((e) => {
                                const t = pe(),
                                    u = t.caller,
                                    n = t.resId,
                                    a = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: a, modelPath: Aa(a, e || ''), resId: n };
                            })(),
                            u = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const a = ba(Aa(u, `${t}.${n}`), window);
                                    return pa(a) ? (e.push(a.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
                const Da = () => (window.injected || (window.injected = new Map()), window.injected);
                const fa = y.Sw.instance;
                let Ca;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(Ca || (Ca = {}));
                const va = (e = 'model', t = Ca.Deep) => {
                    const u = (0, n.useState)(0),
                        a = (u[0], u[1]),
                        i = (0, n.useMemo)(() => pe(), []),
                        s = i.callerUrl,
                        r = i.caller,
                        o = i.resId,
                        l = (0, n.useMemo)(() => {
                            const t = (function (e) {
                                return Da().has(e);
                            })(s.replace('.js', '.html'));
                            return window.__feature && window.__feature !== r && !t ? `subViews.${r}.${e}` : e;
                        }, [s, r, e]),
                        c = (0, n.useState)(() =>
                            ((e) => {
                                const t = ba(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return pa(t) ? t.value : t;
                            })(ha(l)),
                        ),
                        _ = c[0],
                        d = c[1],
                        m = (0, n.useRef)(-1);
                    return (
                        ga(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? Ca.Deep : Ca.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== Ca.None)
                            ) {
                                const u = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === Ca.Deep
                                            ? (e === _ && a((e) => e + 1), d(e))
                                            : d(Object.assign([], e));
                                    },
                                    n = Fa(e);
                                m.current = fa.addCallback(n, u, o, t === Ca.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (t !== Ca.None)
                                return () => {
                                    fa.removeCallback(m.current, o);
                                };
                        }, [o, t]),
                        _
                    );
                };
                y.Sw.instance;
                var Sa = u(9690);
                const Ba = (e, t) => e.split(',').includes(t),
                    wa = {
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
                let ya, xa;
                (!(function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big'));
                })(ya || (ya = {})),
                    (function (e) {
                        ((e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange'));
                    })(xa || (xa = {})));
                const Ia = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: u,
                        vehicleType: n,
                        vehicleLvl: i,
                        tags: s = '',
                        size: r = ya.extraSmall,
                        type: o = xa.colored,
                        className: l,
                        classNames: c,
                        isShortName: _ = !1,
                    }) => {
                        const d = `${((m = n), m.replace(/-/g, '_'))}${e ? '_elite' : ''}`;
                        var m;
                        const E = R.images.gui.maps.icons.vehicleTypes.big.$dyn(d);
                        return a().createElement(
                            'div',
                            { className: S()(wa.base, wa[`base__size${re(r)}`], wa[`base__type${re(o)}`], l) },
                            a().createElement(
                                'div',
                                { className: S()(wa.level, null == c ? void 0 : c.level) },
                                (0, Sa.HG)(i),
                            ),
                            a().createElement('div', {
                                className: S()(
                                    wa.type,
                                    e && wa[`type__elite${re(r)}`],
                                    wa[`type__${r}`],
                                    null == c ? void 0 : c.typeIcon,
                                ),
                                style: n ? { backgroundImage: `url(${E})` } : void 0,
                            }),
                            Ba(s, 'premiumIGR') && a().createElement('div', { className: wa.premiumIGR }),
                            a().createElement(
                                'div',
                                { className: S()(wa.name, null == c ? void 0 : c.name) },
                                _ ? u : t,
                            ),
                        );
                    },
                    Ta = 'Header_base_bc';
                function ka() {
                    return (
                        (ka =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ka.apply(this, arguments)
                    );
                }
                const Oa = () => {
                        const e = va('model.vehicleInfo');
                        return a().createElement(
                            'div',
                            { className: Ta },
                            a().createElement(Ia, ka({}, e, { size: ya.medium, type: xa.white })),
                        );
                    },
                    Ra = () =>
                        a().createElement(
                            'div',
                            { className: te },
                            a().createElement(J, null, a().createElement(Oa, null), a().createElement(ma, null)),
                        );
                engine.whenReady.then(() => {
                    s().render(a().createElement(Ra, null), document.getElementById('root'));
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
                    for (var [t, u, n] = deferred[o], i = !0, s = 0; s < t.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((i = !1), n < a && (a = n));
                    if (i) {
                        deferred.splice(o--, 1);
                        var r = u();
                        void 0 !== r && (e = r);
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
        (__webpack_require__.j = 876),
        (() => {
            var e = { 876: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [i, s, r] = u,
                        o = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (r) var l = r(__webpack_require__);
                    }
                    for (t && t(u); o < i.length; o++)
                        ((a = i[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [532], () => __webpack_require__(4907));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
