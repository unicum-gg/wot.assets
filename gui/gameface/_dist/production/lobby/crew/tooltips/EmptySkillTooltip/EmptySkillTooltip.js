(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, u, t) => {
                (t.r(u),
                    t.d(u, { mouse: () => c, off: () => s, on: () => a, onResize: () => o, onScaleUpdated: () => i }));
                var n = t(2472),
                    r = t(1176);
                const o = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    a = (e, u) => engine.on(e, u),
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
                    const o = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const o = `mouse${u}`,
                                        i = l[u]((e) => t([e, 'outside']));
                                    function a(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, a),
                                        n(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(o, a),
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
                    return Object.assign({}, o, {
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
                (t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => o,
                        graphicsQuality: () => a,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var n = t(527),
                    r = t(2493);
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const a = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2493: (e, u, t) => {
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
                t.d(u, { O: () => i });
                var n = t(5959),
                    r = t(7698),
                    o = t(514);
                const i = { view: t(7641), client: n, sound: o.ZP, intl: r.N };
            },
            7698: (e, u, t) => {
                t.d(u, { N: () => n });
                const n = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, u, t) => {
                t.d(u, { ZP: () => i });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    o = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, n.playSound)(r[u])), e), {}),
                    i = { play: Object.assign({}, o, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n }));
            },
            6112: (e, u, t) => {
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
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
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => s,
                        arabic2roman: () => y,
                        children: () => r,
                        displayStatus: () => o.W,
                        displayStatusIs: () => x,
                        enableFullScreenModeSupported: () => O,
                        events: () => i.U,
                        extraSize: () => P,
                        forceTriggerMouseMove: () => h,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => v,
                        getExternalPaddingsRem: () => k,
                        getFontNames: () => w,
                        getScale: () => m,
                        getSize: () => _,
                        getViewGlobalPosition: () => F,
                        initExternalPaddings: () => S,
                        isEventHandled: () => f,
                        isFocused: () => p,
                        pxToRem: () => B,
                        remToPx: () => C,
                        resize: () => A,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => T,
                    }));
                var n = t(9690),
                    r = t(3722),
                    o = t(6112),
                    i = t(6538),
                    a = t(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function E(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function F(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: C(u.x), y: C(u.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function m() {
                    return viewEnv.getScale();
                }
                function B(e) {
                    return viewEnv.pxToRem(e);
                }
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function g(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function h() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    y = n.cg;
                function k() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const x = Object.keys(o.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === o.W[u]), e),
                        {},
                    ),
                    P = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function O() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function S(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            n = u.right,
                            r = u.bottom,
                            o = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${o}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
            },
            8566: (e, u, t) => {
                t.d(u, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    o = 16,
                    i = 32,
                    a = 64,
                    s = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const o = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, n);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((r = o),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? r : i);
                        },
                        minimize() {
                            s(a);
                        },
                        move(e) {
                            s(o, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
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
                t.d(u, { cg: () => o });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function o(e) {
                    let u = '';
                    for (let t = r.length - 1; t >= 0; t--) for (; e >= r[t]; ) ((u += n[t]), (e -= r[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            1358: (e, u, t) => {
                t.d(u, { Z: () => o });
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
                        const o = n.O.view.addModelObserver(e, t, r);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(o) : (this._views[t] = [o])))
                                : console.error("Can't add callback for model:", e),
                            o
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
                const o = r;
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
            9916: (e, u, t) => {
                t.d(u, { B3: () => s, Z5: () => i.Z5, B0: () => a, ry: () => m });
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
                var o = t(1358);
                var i = t(8613);
                let a;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(a || (a = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    _ = t(3138);
                const A = ['args'];
                function F(e, u, t, n, r, o, i) {
                    try {
                        var a = e[o](i),
                            s = a.value;
                    } catch (e) {
                        return void t(e);
                    }
                    a.done ? u(s) : Promise.resolve(s).then(n, r);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    m = (function () {
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
                                        var o = e.apply(u, t);
                                        function i(e) {
                                            F(o, n, r, i, a, 'next', e);
                                        }
                                        function a(e) {
                                            F(o, n, r, i, a, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    C = () => B(a.CLOSE),
                    g = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var p = t(7572);
                const b = r.instance,
                    f = {
                        DataTracker: o.Z,
                        ViewModel: p.Z,
                        ViewEventType: a,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => B(a.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => B(a.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(a.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), o) => {
                            const i = _.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                E = s.width,
                                d = s.height,
                                A = {
                                    x: _.O.view.pxToRem(l) + i.x,
                                    y: _.O.view.pxToRem(c) + i.y,
                                    width: _.O.view.pxToRem(E),
                                    height: _.O.view.pxToRem(d),
                                };
                            B(a.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: D(A),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => g(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, C);
                        },
                        handleViewEvent: B,
                        onBindingsReady: m,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(a.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(a.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(a.POP_OVER),
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
                        ClickOutsideManager: b,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = f;
            },
            8613: (e, u, t) => {
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
            4831: (e, u, t) => {
                var n = t(6483),
                    r = t.n(n),
                    o = t(3138),
                    i = t(7363),
                    a = t.n(i);
                function s() {
                    const e = (0, i.useRef)(0);
                    var u;
                    return (
                        (u = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, i.useEffect)(() => u, []),
                        (0, i.useMemo)(
                            () => ({
                                run: (u) => {
                                    (window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                ((e.current = 0), u());
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
                }
                const l = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    c = ['children', 'className', 'theme'];
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                const d = a().forwardRef(function (e, u) {
                    let t = e.children,
                        n = e.className,
                        d = e.theme,
                        _ = void 0 === d ? 'default' : d,
                        A = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, c);
                    const F = s(),
                        D = a().useRef(null);
                    var m;
                    return (
                        (m = () => {
                            F.run(() => {
                                const e = D.current;
                                if (!e) return;
                                const u = e.scrollWidth,
                                    t = e.scrollHeight;
                                o.O.view.resize(u, t);
                                const n = window.getComputedStyle(e);
                                o.O.view.setSidePaddingsRem({
                                    left: parseInt(n.getPropertyValue('padding-left'), 10),
                                    top: parseInt(n.getPropertyValue('padding-top'), 10),
                                    right: parseInt(n.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(n.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, i.useEffect)(m, []),
                        a().createElement(
                            'div',
                            E({}, A, {
                                className: r()(l.base, l[`base__theme-${_}`], n),
                                ref: function (e) {
                                    ((D.current = e), 'function' == typeof u ? u(e) : u && (u.current = e));
                                },
                            }),
                            a().createElement('div', { className: l.decorator }, t),
                        )
                    );
                });
                var _ = t(1533),
                    A = t.n(_),
                    F = t(3403);
                function D() {}
                function m() {
                    return !1;
                }
                console.log;
                var B = t(9174);
                function C(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return g(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return g(e, u);
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
                function g(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const p = (e) => (0 === e ? window : window.subViews.get(e));
                const b = ((e, u) => {
                        const t = (0, i.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: r, children: s, mocks: l }) {
                                const c = (0, i.useRef)([]),
                                    E = (t, n, r) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = p,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function i(e, u = 0) {
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
                                                const a = (e) => {
                                                    const r = t(u),
                                                        o = n.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? o
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, o);
                                                };
                                                return {
                                                    subscribe: (t, i) => {
                                                        const s = 'string' == typeof i ? `${n}.${i}` : n,
                                                            l = o.O.view.addModelObserver(s, u, !0);
                                                        return (r.set(l, t), e && t(a(i)), l);
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, u) => {
                                                        const t = a(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = a(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = C(r.keys()); !(e = t()).done; ) i(e.value, u);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            s =
                                                'real' === t
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == r ? void 0 : r.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : s.readByPath(e),
                                            E = (e) => c.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const u = l(e),
                                                            n = B.LO.box(u, { equals: m });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, B.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = B.LO.box(n, { equals: m });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, B.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = B.LO.box(n, { equals: m });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, B.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = B.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, B.aD)((u) => {
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
                                                                o = Object.entries(r),
                                                                i = o.reduce(
                                                                    (e, [u, t]) => ((e[t] = B.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, B.aD)((e) => {
                                                                            o.forEach(([u, t]) => {
                                                                                i[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            _ = { mode: t, model: d, externalModel: s, cleanup: E };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && r ? r.controls(_) : u(_),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    d = (0, i.useRef)(!1),
                                    _ = (0, i.useState)(n),
                                    A = _[0],
                                    F = _[1],
                                    D = (0, i.useState)(() => E(n, r, l)),
                                    g = D[0],
                                    b = D[1];
                                return (
                                    (0, i.useEffect)(() => {
                                        d.current ? b(E(A, r, l)) : (d.current = !0);
                                    }, [l, A, r]),
                                    (0, i.useEffect)(() => {
                                        F(n);
                                    }, [n]),
                                    (0, i.useEffect)(
                                        () => () => {
                                            (g.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [g],
                                    ),
                                    a().createElement(t.Provider, { value: g }, s)
                                );
                            },
                            () => (0, i.useContext)(t),
                        ];
                    })(({ observableModel: e }) => {
                        const u = Object.assign(
                            { skillProgression: e.object('skillProgression') },
                            e.primitives(['isZeroSkill']),
                        );
                        return Object.assign({}, u);
                    }, D),
                    f = b[0],
                    h = b[1];
                var v = t(9916);
                const w = ({ value: e, format: u = 'integral' }) => {
                        const t = (function (e) {
                                return 'gold' === e ? v.B3.GOLD : v.B3.INTEGRAL;
                            })(u),
                            n = v.Z5.getNumberFormat(e, t);
                        return void 0 !== e && void 0 !== n ? n : null;
                    },
                    y = {
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
                    };
                let k, x, P;
                (!(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(k || (k = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(x || (x = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(P || (P = {})));
                const T = (0, i.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: u,
                            size: t,
                            type: n,
                            value: o,
                            discountValue: i,
                            showPlus: s,
                            isEnough: l = !0,
                            stockBackgroundName: c = P.Red,
                            className: E,
                            classNames: d,
                        }) =>
                            a().createElement(
                                'span',
                                { className: r()(y.base, y[`base__${t}`], E) },
                                a().createElement(
                                    'span',
                                    {
                                        className: r()(
                                            y.value,
                                            y[`value__${n}`],
                                            !l && y.value__notEnough,
                                            null == d ? void 0 : d.value,
                                        ),
                                    },
                                    s && o > 0 && '+',
                                    a().createElement(w, { value: o, format: n === x.gold ? 'gold' : 'integral' }),
                                ),
                                a().createElement('span', {
                                    className: r()(y.icon, y[`icon__${n}-${t}`], null == d ? void 0 : d.icon),
                                }),
                                e &&
                                    a().createElement(
                                        'span',
                                        {
                                            className: r()(
                                                y.stock,
                                                i && y.stock__indent,
                                                u && y.stock__interactive,
                                                null == d ? void 0 : d.stock,
                                            ),
                                        },
                                        a().createElement('span', {
                                            className: y.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${c})` },
                                        }),
                                        Boolean(i) && i,
                                    ),
                            ),
                    ),
                    O = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let S, L;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(S || (S = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(L || (L = {})));
                const N = ({ size: e = S.Default }) => {
                        const u = r()(O.background, O[`background__${e}`]);
                        return a().createElement('div', { className: u });
                    },
                    M = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    I = ({ size: e }) => {
                        const u = r()(M.base, M[`base__${e}`]);
                        return a().createElement('div', { className: u });
                    },
                    j = {
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
                    V = (0, i.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: o, withoutBounce: i }) => {
                            const s = r()(
                                    j.base,
                                    j[`base__${e}`],
                                    t && j.base__disabled,
                                    o && j.base__finished,
                                    i && j.base__withoutBounce,
                                ),
                                l = !t && !o;
                            return a().createElement(
                                'div',
                                { className: s, style: n, ref: u },
                                a().createElement('div', { className: j.pattern }),
                                a().createElement('div', { className: j.gradient }),
                                l && a().createElement(I, { size: e }),
                            );
                        },
                    ),
                    z = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(n));
                        };
                    };
                let $, W;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })($ || ($ = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(W || (W = {})));
                const G = 'ProgressBarDeltaGrow_base_7e',
                    q = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    U = 'ProgressBarDeltaGrow_glow_68',
                    K = (e) => (e ? { left: 0 } : { right: 0 }),
                    X = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    H = (e) => ({ transitionDuration: `${e}ms` }),
                    Z = (0, i.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: o,
                            to: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                            className: E,
                        }) => {
                            const d = s < n,
                                _ = (0, i.useState)($.Idle),
                                A = _[0],
                                F = _[1],
                                D = A === $.End,
                                m = A === $.Idle,
                                B = A === $.Grow,
                                C = A === $.Shrink,
                                g = (0, i.useCallback)(
                                    (e) => {
                                        (F(e), c && c(e));
                                    },
                                    [c],
                                ),
                                p = (0, i.useCallback)(
                                    (e, u) =>
                                        z(() => {
                                            g(e);
                                        }, u),
                                    [g],
                                );
                            (0, i.useEffect)(() => {
                                if (!t)
                                    return m
                                        ? p($.Grow, u)
                                        : B
                                          ? p($.Shrink, e)
                                          : C
                                            ? p($.End, e)
                                            : void (D && l && l());
                            }, [p, t, D, B, m, C, l, u, e]);
                            const b = (0, i.useMemo)(() => Object.assign({ width: '100%' }, H(e), K(d)), [d, e]),
                                f = (0, i.useMemo)(() => Object.assign({ width: '0%' }, H(e), K(d)), [d, e]),
                                h = (0, i.useMemo)(() => Object.assign({ width: '0%' }, X(d, n), H(e)), [n, d, e]),
                                v = (0, i.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - n)}%` }, X(d, n), H(e)),
                                    [n, d, s, e],
                                );
                            if (D) return null;
                            const w = r()(G, E, d && 0 === s && q);
                            return a().createElement(
                                'div',
                                { style: m ? h : v, className: w },
                                a().createElement(
                                    'div',
                                    { style: C ? f : b, className: U },
                                    a().createElement(I, { size: o }),
                                ),
                            );
                        },
                    ),
                    Y = (0, i.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: r,
                            isComplete: o,
                            animationSettings: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const E = e < t,
                                d = (0, i.useState)(!1),
                                _ = d[0],
                                A = d[1],
                                F = (0, i.useCallback)(
                                    (e) => {
                                        (e === $.Shrink && A(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                D = (0, i.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                m = (0, i.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${s.line.duration}ms` }),
                                    [s.line.duration, e],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(V, {
                                    size: u,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: o,
                                    withoutBounce: E && 0 === e,
                                    baseStyles: _ ? m : D,
                                }),
                                t >= 0 &&
                                    a().createElement(Z, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        onChangeAnimationState: F,
                                        freezed: s.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: s.delta.className,
                                    }),
                            );
                        },
                    ),
                    Q = 'ProgressBarDeltaSimple_base_6c',
                    J = 'ProgressBarDeltaSimple_delta_99',
                    ee = (0, i.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: r,
                            to: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < n,
                                E = (0, i.useState)(W.Idle),
                                d = E[0],
                                _ = E[1],
                                A = d === W.In,
                                F = d === W.End,
                                D = d === W.Idle,
                                m = (0, i.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, i.useEffect)(() => {
                                if (D && !t) {
                                    return z(() => {
                                        m(W.In);
                                    }, u);
                                }
                            }, [m, t, D, u]),
                                (0, i.useEffect)(() => {
                                    if (A) {
                                        return z(() => {
                                            (s && s(), m(W.End));
                                        }, e + u);
                                    }
                                }, [m, A, s, u, e]));
                            const B = (0, i.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                C = (0, i.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                g = (0, i.useMemo)(
                                    () => ({ width: `${Math.abs(n - o)}%`, left: `${c ? o : n}%` }),
                                    [n, c, o],
                                );
                            return F
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: Q, style: g },
                                      a().createElement(
                                          'div',
                                          { style: D ? B : C, className: J },
                                          a().createElement(I, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    ue = (0, i.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: r,
                            isComplete: o,
                            animationSettings: s,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const E = (0, i.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${s.line.duration}ms`,
                                    transitionDelay: `${s.line.delay}ms`,
                                }),
                                [s.line.delay, s.line.duration, e],
                            );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(V, {
                                    size: u,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: o,
                                    baseStyles: E,
                                }),
                                t >= 0 &&
                                    a().createElement(ee, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        freezed: s.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    te = ['onComplete', 'onEndAnimation'];
                function ne() {
                    return (
                        (ne =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ne.apply(this, arguments)
                    );
                }
                const re = (0, i.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, te);
                        const r = (0, i.useState)(!1),
                            o = r[0],
                            s = r[1],
                            l = (0, i.useCallback)(() => {
                                const e = 100 === n.to;
                                (e !== o && s(e), e && u && u(), t && t());
                            }, [o, u, t, n.to]);
                        switch (n.animationSettings.type) {
                            case L.Simple:
                                return a().createElement(ue, ne({}, n, { onEndAnimation: l, isComplete: o }));
                            case L.Growing:
                                return a().createElement(Y, ne({}, n, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    oe = ({ size: e, value: u, lineRef: t, disabled: n, onComplete: r }) => {
                        const o = (0, i.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            s = 100 === u;
                        return (
                            (0, i.useEffect)(() => {
                                s && r && r();
                            }, [s, r]),
                            a().createElement(V, { size: e, disabled: n, baseStyles: o, isComplete: s, lineRef: t })
                        );
                    },
                    ie = ['onEndAnimation'];
                function ae() {
                    return (
                        (ae =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ae.apply(this, arguments)
                    );
                }
                const se = (0, i.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, ie);
                    const n = (0, i.useRef)({}),
                        r = (0, i.useCallback)(() => {
                            ((n.current.from = void 0), u && u());
                        }, [u]),
                        o = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = o),
                        a().createElement(
                            re,
                            ae({}, t, {
                                onEndAnimation: r,
                                key: `${o}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                                from: o,
                            }),
                        )
                    );
                });
                function le() {
                    return (
                        (le =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        le.apply(this, arguments)
                    );
                }
                const ce = (0, i.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: r,
                            additionalKey: o,
                            animationSettings: i,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (r === u)
                                return a().createElement(oe, {
                                    key: `${r}-${u}-${o}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: c,
                                });
                            const E = {
                                from: r,
                                to: u,
                                size: e,
                                additionalKey: o,
                                lineRef: t,
                                disabled: n,
                                animationSettings: i,
                                onComplete: c,
                                onEndAnimation: s,
                                onChangeAnimationState: l,
                            };
                            return i.withStack
                                ? a().createElement(se, E)
                                : a().createElement(re, le({ key: `${r}-${u}-${o}` }, E));
                        },
                    ),
                    Ee = (e) => {
                        var u, t, n, r, o, i, a, s, l, c, E, d, _, A, F, D, m, B, C, g;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (u = null == (t = e.bg) ? void 0 : t.height) ? u : '12rem',
                            '--progress-bg-height-small':
                                null != (n = null == (r = e.bg) ? void 0 : r.heightSmall) ? n : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (o = e.line.filter) ? o : 'none',
                            '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                            '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                            '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                            '--progress-pattern-size': null != (i = e.pattern.size) ? i : '3rem 10rem',
                            '--progress-pattern-border-size': null != (a = e.pattern.borderSize) ? a : '1rem',
                            '--progress-pattern-gradient':
                                null != (s = e.pattern.gradient)
                                    ? s
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                            '--progress-pattern-gradient-finished':
                                null != (l = e.pattern.gradientFinished)
                                    ? l
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                            '--progress-pattern-gradient-mixBlendMode':
                                null != (c = e.pattern.mixBlendMode) ? c : 'overlay',
                            '--progress-glow': `url('${e.glow}')`,
                            '--progress-glow-width':
                                null != (E = null == (d = e.glowSettings) ? void 0 : d.width) ? E : '60rem',
                            '--progress-glow-height':
                                null != (_ = null == (A = e.glowSettings) ? void 0 : A.height) ? _ : '100rem',
                            '--progress-glow-small-width':
                                null != (F = null == (D = e.glowSettings) ? void 0 : D.smallWidth) ? F : '44rem',
                            '--progress-glow-small-height':
                                null != (m = null == (B = e.glowSettings) ? void 0 : B.smallHeight) ? m : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (C = null == (g = e.glowSettings) ? void 0 : g.mixBlendMode) ? C : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
                    de = (e, u, t) => (t < e ? e : t > u ? u : t),
                    _e = (e, u, t) => {
                        if ('number' == typeof t) {
                            return (de(0, u, t) / u) * 100;
                        }
                        return e;
                    };
                const Ae = {
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
                    Fe = {
                        freezed: !1,
                        withStack: !1,
                        type: L.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    De = (0, i.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Ae,
                            size: t = S.Default,
                            animationSettings: n = Fe,
                            disabled: o = !1,
                            withoutBackground: s = !1,
                            value: l,
                            deltaFrom: c,
                            additionalKey: E,
                            lineRef: d,
                            onChangeAnimationState: _,
                            onEndAnimation: A,
                            onComplete: F,
                            className: D,
                        }) => {
                            const m = (function (e, u, t) {
                                return (0, i.useMemo)(() => {
                                    const n = (de(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: _e(n, u, t) };
                                }, [t, u, e]);
                            })(l, e, c);
                            return a().createElement(
                                'div',
                                { className: r()(O.base, D, O[`base__${t}`]), style: Ee(u) },
                                !s && a().createElement(N, { size: t }),
                                a().createElement(ce, {
                                    size: t,
                                    lineRef: d,
                                    disabled: o,
                                    value: m.value,
                                    deltaFrom: m.deltaFrom,
                                    additionalKey: E,
                                    animationSettings: n,
                                    onEndAnimation: A,
                                    onChangeAnimationState: _,
                                    onComplete: F,
                                }),
                            );
                        },
                    );
                t(1281);
                let me;
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(me || (me = {}));
                const Be = (e) => e.replace(/&nbsp;/g, ' '),
                    Ce =
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
                                (u = R.strings.common.percentValue()),
                                (t = { value: e }),
                                u.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]))
                            );
                            var u, t;
                        }),
                    ge = [
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
                const be = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: v.B0.TOOLTIP,
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
                            a = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            _ = e.decoratorId,
                            A = void 0 === _ ? 0 : _,
                            F = e.isEnabled,
                            D = void 0 === F || F,
                            m = e.targetId,
                            B = void 0 === m ? 0 : m,
                            C = e.onShow,
                            g = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, ge);
                        const b = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, i.useMemo)(
                                () =>
                                    B ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId'),
                                            r = '';
                                        var o;
                                        return (
                                            u &&
                                                ((r =
                                                    (null == (o = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : o[0]) ||
                                                    ''),
                                                (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { callerUrl: r, caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [B],
                            ),
                            h = (0, i.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (be(t, A, { isMouseEvent: !0, on: !0, arguments: pe(n) }, f),
                                    C && C(),
                                    (b.current.isVisible = !0));
                            }, [t, A, n, f, C]),
                            v = (0, i.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const e = b.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (b.current.timeoutId = 0)),
                                        be(t, A, { on: !1 }, f),
                                        b.current.isVisible && g && g(),
                                        (b.current.isVisible = !1));
                                }
                            }, [t, A, f, g]),
                            w = (0, i.useCallback)((e) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(b.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        ((0, i.useEffect)(() => {
                            const e = b.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === D && v();
                            }, [D, v]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        (window.removeEventListener('mouseleave', v), v());
                                    }
                                ),
                                [v],
                            ));
                        return D
                            ? (0, i.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(b.current.timeoutId),
                                                      (b.current.timeoutId = window.setTimeout(h, c ? 100 : 400)),
                                                      r && r(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (v(), null == o || o(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === d && v(), null == s || s(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === d && v(), null == a || a(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    he = ['children'];
                function ve() {
                    return (
                        (ve =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ve.apply(this, arguments)
                    );
                }
                const we = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, he);
                        return a().createElement(
                            fe,
                            ve(
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
                    },
                    ye = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ke() {
                    return (
                        (ke =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ke.apply(this, arguments)
                    );
                }
                const xe = R.views.common.tooltip_window.simple_tooltip_content,
                    Pe = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            o = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, ye);
                        const c = (0, i.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: n, note: r, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, n, r, s]);
                        return a().createElement(
                            fe,
                            ke(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? xe.SimpleTooltipHtmlContent('resId') : xe.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
                function Te() {
                    return (
                        (Te =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Te.apply(this, arguments)
                    );
                }
                const Oe = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = a().createElement('div', { className: t }, e);
                    if (u.header || u.body) return a().createElement(Pe, u, n);
                    const r = u.contentId;
                    return r ? a().createElement(fe, Te({}, u, { contentId: r }), n) : a().createElement(we, u, n);
                };
                var Se = t(8045);
                const Le = {
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
                let Re, Ne, Me;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(Re || (Re = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(Ne || (Ne = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(Me || (Me = {})));
                const Ie = { [Me.NBSP]: Re.NoBreakSymbol, [Me.ZWNBSP]: Re.NoBreakSymbol, [Me.NEW_LINE]: Re.LineBreak },
                    je = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    Ve = {
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
                    ze = 'renderers_noBreakWrapper_10',
                    $e = 'renderers_lineBreak_b5',
                    We = 'renderers_newLine_bd',
                    Ge = 'renderers_word_f3',
                    qe = (e) => ({ color: `#${e}` }),
                    Ue = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? Ve[n]
                                ? a().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: r()(Ge, Ve[n]) },
                                      e,
                                  )
                                : a().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: Ge, style: qe(n) },
                                      e,
                                  )
                            : a().createElement('span', { key: t, 'data-block-type': u.blockType, className: Ge }, e);
                    },
                    Ke = {
                        [Re.Word]: Ue,
                        [Re.NoBreakSymbol]: Ue,
                        [Re.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            a().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => a().createElement(a().Fragment, { key: t }, e)),
                            ),
                        [Re.LineBreak]: ({ key: e }) =>
                            a().createElement('span', { key: e, 'data-block-type': Re.LineBreak, className: $e }),
                        [Re.NewLine]: ({ elementList: e, key: u }) =>
                            a().createElement('span', { key: u, 'data-block-type': Re.NewLine, className: We }, e),
                        [Re.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            a().createElement(
                                'span',
                                { key: u, 'data-block-type': Re.NoBreakWrapper, className: ze },
                                e,
                            ),
                    },
                    Xe = (e, u, t) => {
                        const n = [];
                        return (
                            e.childList.forEach((r, o) => {
                                const i = `${t}_${o}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        u = e.blockType,
                                        t = Xe(e, Ke[u], i);
                                    n.push(...t);
                                } else n.push(u({ elementList: [r], textBlock: e, key: i }));
                            }),
                            n
                        );
                    },
                    He = (e) => {
                        const u = [];
                        return (
                            e.forEach((e, t) => {
                                u.push(
                                    ...((e, u) => {
                                        const t = [],
                                            n = e.blockType,
                                            r = Ke[n],
                                            o = Xe(e, r, u);
                                        return (
                                            n === Re.NoBreakWrapper
                                                ? t.push(r({ elementList: o, textBlock: e, key: `${u}` }))
                                                : t.push(...o),
                                            t
                                        );
                                    })(e, t),
                                );
                            }),
                            u
                        );
                    },
                    Ze = (e, u, t, n) => {
                        let r = u.exec(e),
                            o = 0;
                        for (; r; ) (o !== r.index && t(e.slice(o, r.index)), n(r), (o = u.lastIndex), (r = u.exec(e)));
                        o !== e.length && t(e.slice(o));
                    },
                    Ye = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    Qe = (e) => {
                        const u = [];
                        return (
                            Ze(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var t;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? u.push(...((t = e), t.match(Ye) || []))
                                        : u.push(...e.split(''));
                                },
                                (e) => {
                                    u.push(e[0]);
                                },
                            ),
                            u
                        );
                    },
                    Je = je
                        ? (e) => {
                              const u = [];
                              return (
                                  Ze(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          u.push(e);
                                      },
                                      (e) => {
                                          u.push(...Qe(e[0]));
                                      },
                                  ),
                                  u
                              );
                          }
                        : (e, u) => {
                              const t = /[\s\u002d]/g;
                              let n = t.exec(e);
                              if (!n) return [e];
                              const r = [];
                              let o = 0;
                              for (; n; ) {
                                  const i = u.justifyContent === Ne.FlexEnd ? n.index : t.lastIndex;
                                  (r.push(e.slice(o, i)), (o = i), (n = t.exec(e)));
                              }
                              return (o !== e.length && r.push(e.slice(o)), r);
                          },
                    eu = (e, u = '', t) => {
                        const n = [];
                        return (
                            Ze(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: Re.Word, colorTag: u, childList: Je(e, t) });
                                },
                                (e) => {
                                    const t = e[0],
                                        r = Ie[t.charAt(0)];
                                    r === Re.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: Re.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: Re.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(t),
                                          )
                                        : n.push({ blockType: r, colorTag: u, childList: [t.replace(/\ufeff+/g, '')] });
                                },
                            ),
                            n
                        );
                    },
                    uu = (e, u, t = '', n) => {
                        const r = [],
                            o = e.replace(/(.)(、|。|ー)/g, '$1\ufeff$2');
                        return (
                            Ze(
                                o,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...eu(e, t, n));
                                },
                                (e) => {
                                    const o = e[1],
                                        i = void 0 === u[o] ? e[0] : u[o];
                                    'string' == typeof i || 'number' == typeof i
                                        ? r.push(...eu(String(i), t, n))
                                        : r.push({ blockType: Re.Binding, colorTag: t, childList: [i] });
                                },
                            ),
                            r
                        );
                    },
                    tu = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === Re.NoBreakWrapper) (e.childList.push(n), t.push(e));
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && t.push(e),
                                t.push({ blockType: Re.NoBreakWrapper, colorTag: '', childList: [u, n] }));
                        }
                        return (u.childList.length > 0 && t.push(u), t);
                    },
                    nu = (e, u = {}, t) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Re.NoBreakSymbol
                                        ? ((t = !0), u.push(...tu(u.pop(), e)))
                                        : (t ? u.push(...tu(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u, t) => {
                                const n = [];
                                return (
                                    Ze(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...uu(e, u, '', t));
                                        },
                                        (e) => {
                                            n.push(...uu(e[2] + e[3], u, e[1], t));
                                        },
                                    ),
                                    n
                                );
                            })(Be(e).replace(/&zwnbsp;/g, '\ufeff'), u, t),
                        );
                        return He(n);
                    },
                    ru = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    ou = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    iu = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = ou(e, u),
                            r = e.textContent.length,
                            o = e.offsetWidth / r,
                            i = Math.ceil(n / o);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / o);
                            return n >= t ? [!0, t + i] : [!1, n];
                        }
                        const a = Math.max(t + i, 0);
                        return r < a ? [!1, 0] : [!0, a];
                    },
                    au = (e, u, t, n, r, o) => {
                        let i = -1,
                            s = null;
                        for (let l = t; l >= 0; l--) {
                            const t = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === Re.LineBreak || c === Re.NewLine || c === Re.Binding) continue;
                            const E = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = iu(t, n, r),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (r -= d);
                                    continue;
                                }
                                const _ = E.slice(0, E.length - d) + o,
                                    A = u[l];
                                ((s = a().cloneElement(A, A.props, _)), (i = l));
                                break;
                            }
                            {
                                const e = t.children,
                                    c = u[l],
                                    d = c.props.children,
                                    _ = au(e, d, e.length - 1, n, r, o),
                                    A = _[0],
                                    F = _[1];
                                if (!(A < 0)) {
                                    const e = d.slice(0, A);
                                    ((s = a().cloneElement(c, c.props, e, F)), (i = l));
                                    break;
                                }
                                r -= E.length;
                            }
                        }
                        return [i, s];
                    },
                    su = (e, u, t, n = '...') => {
                        const r = [...u],
                            o = e.current;
                        if (!o) return [r, !1];
                        const i = t.height,
                            a = t.width,
                            s = o.lastElementChild;
                        if (!ru(s, i) && ou(s, a) <= 0) return [r, !1];
                        const l = o.children,
                            c = ((e, u) => {
                                let t = 0,
                                    n = e.length - 1;
                                for (; n - t >= 0; ) {
                                    const r = t + Math.ceil(0.5 * (n - t));
                                    ru(e[r], u) ? (n = r - 1) : (t = r + 1);
                                }
                                return t - 1;
                            })(l, i);
                        if (c < 0) return [r, !1];
                        const E = au(l, r, c, a, n.length, n),
                            d = E[0],
                            _ = E[1];
                        return (_ && (r.splice(d, 1, _), r.splice(d + 1)), [r, !0]);
                    },
                    lu = a().memo(
                        ({
                            text: e,
                            classMix: u,
                            onSizeChanged: t,
                            binding: n,
                            isTooltipEnable: o = !1,
                            isTruncationAvailable: s = !1,
                            customTooltipArgs: l,
                            targetId: c,
                            justifyContent: E = Ne.FlexStart,
                            alignContent: d = Ne.FlexStart,
                            truncateIdentify: _ = '...',
                        }) => {
                            const A = (0, i.useRef)(null),
                                F = (0, i.useRef)({ height: 0, width: 0 }),
                                D = (0, i.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                m = D[0],
                                B = D[1],
                                C = (0, i.useMemo)(() => nu(e, n, { justifyContent: E }), [n, E, e]),
                                g = (0, i.useMemo)(() => {
                                    if (
                                        o &&
                                        m.isTruncated &&
                                        (!n || !Object.values(n).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, l, {
                                                stringifyKwargs: n ? JSON.stringify(n) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: c,
                                        };
                                }, [n, o, c, e, l, m.isTruncated]),
                                p = (0, i.useCallback)(
                                    (e) => {
                                        ((F.current.width = e.contentRect.width),
                                            (F.current.height = e.contentRect.height));
                                        const u = su(A, C, F.current, _),
                                            n = u[0],
                                            r = u[1];
                                        (B({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), t && t(r));
                                    },
                                    [t, _, C],
                                ),
                                b = (0, i.useMemo)(() => ({ justifyContent: E, alignContent: d }), [d, E]);
                            return (
                                ((e, u, t = !0) => {
                                    const n = (0, i.useCallback)(
                                        (e) => {
                                            const t = e[0];
                                            u && u(t);
                                        },
                                        [u],
                                    );
                                    (0, i.useEffect)(() => {
                                        if (!e.current || !t) return;
                                        const u = new Se.Z((e) => n(e));
                                        return (
                                            u.observe(e.current),
                                            () => {
                                                u.disconnect();
                                            }
                                        );
                                    }, [n, t, e]);
                                })(A, p, s),
                                a().createElement(
                                    'div',
                                    {
                                        className: r()(
                                            Le.base,
                                            u,
                                            Le.base__zeroPadding,
                                            s && Le.base__isTruncationAvailable,
                                        ),
                                        style: b,
                                    },
                                    a().createElement('div', { className: Le.unTruncated, ref: A }, C),
                                    a().createElement(
                                        Oe,
                                        {
                                            tooltipArgs: g,
                                            className: r()(
                                                Le.tooltip,
                                                Le[`tooltip__justify-${E}`],
                                                Le[`tooltip__align-${d}`],
                                            ),
                                        },
                                        a().createElement(
                                            'div',
                                            {
                                                className: r()(
                                                    Le.truncated,
                                                    !m.isTruncateFinished && s && Le.truncated__hide,
                                                ),
                                                style: b,
                                            },
                                            m.isTruncateFinished && s ? m.elementList : C,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    cu = {
                        progressSection: 'SkillProgression_progressSection_a7',
                        discount: 'SkillProgression_discount_1a',
                        progressSection__available: 'SkillProgression_progressSection__available_93',
                        progressValues: 'SkillProgression_progressValues_ef',
                        percents: 'SkillProgression_percents_1d',
                        percents__full: 'SkillProgression_percents__full_65',
                        xpValues: 'SkillProgression_xpValues_42',
                        currentValue: 'SkillProgression_currentValue_1a',
                        discountValue: 'SkillProgression_discountValue_7f',
                        discountCrossLine: 'SkillProgression_discountCrossLine_7f',
                        totalValue: 'SkillProgression_totalValue_6c',
                        totalValue__withDiscount: 'SkillProgression_totalValue__withDiscount_27',
                        discountLabel: 'SkillProgression_discountLabel_e2',
                        infoIcon: 'SkillProgression_infoIcon_2c',
                    },
                    Eu = R.strings.crew.matrix,
                    du = (0, i.memo)(
                        ({
                            currentXpValue: e,
                            totalXpValue: u,
                            skillProgress: t,
                            discountValue: n,
                            zeroSkillsCount: o,
                            isLocked: i,
                            isMaxSkillLevel: s,
                        }) => {
                            const l = n !== u;
                            return a().createElement(
                                'div',
                                { className: cu.base },
                                a().createElement(
                                    'div',
                                    { className: r()(cu.progressSection, !i && cu.progressSection__available) },
                                    a().createElement(
                                        'div',
                                        { className: cu.progressValues },
                                        a().createElement(
                                            'div',
                                            { className: s ? cu.percents__full : cu.percents },
                                            Ce(t),
                                        ),
                                        a().createElement(lu, {
                                            text: Eu.skills.counters(),
                                            binding: {
                                                currentCount: a().createElement(
                                                    'div',
                                                    { className: cu.currentValue },
                                                    v.Z5.getNumberFormat(e, v.B3.INTEGRAL),
                                                ),
                                                totalCount: a().createElement(
                                                    'div',
                                                    { className: cu.xpValues },
                                                    l &&
                                                        a().createElement(
                                                            'div',
                                                            { className: cu.discountValue },
                                                            v.Z5.getNumberFormat(u, v.B3.INTEGRAL),
                                                            a().createElement('div', {
                                                                className: cu.discountCrossLine,
                                                            }),
                                                        ),
                                                    a().createElement(T, {
                                                        type: x.xp,
                                                        size: k.small,
                                                        value: l ? n : u,
                                                        classNames: {
                                                            value: r()(cu.totalValue, l && cu.totalValue__withDiscount),
                                                        },
                                                    }),
                                                ),
                                            },
                                        }),
                                    ),
                                    a().createElement(De, { value: t }),
                                ),
                                l &&
                                    a().createElement(
                                        'div',
                                        { className: cu.discount },
                                        a().createElement('div', { className: cu.infoIcon }),
                                        a().createElement(
                                            'div',
                                            { className: cu.discountLabel },
                                            Eu.skillTooltip.main.available.discountLabel.$num(o),
                                        ),
                                    ),
                            );
                        },
                    ),
                    _u = 'NormalSkill_header_e3',
                    Au = 'NormalSkill_description_c5',
                    Fu = R.strings.crew.matrix.skillTooltip.main,
                    Du = (0, i.memo)(({ skillProgressionData: e }) =>
                        a().createElement(
                            a().Fragment,
                            null,
                            a().createElement(
                                'div',
                                { className: _u },
                                e.isLocked ? Fu.unavailable.header() : Fu.available.header(),
                            ),
                            e.isLocked && a().createElement('div', { className: Au }, Fu.unavailable.text()),
                            a().createElement(du, e),
                        ),
                    ),
                    mu = 'ZeroSkill_header_4a',
                    Bu = 'ZeroSkill_description_21',
                    Cu = 'ZeroSkill_icon_02',
                    gu = 'ZeroSkill_title_1a',
                    pu = () =>
                        a().createElement(
                            a().Fragment,
                            null,
                            a().createElement(
                                'div',
                                { className: mu },
                                a().createElement('div', { className: Cu }),
                                a().createElement(
                                    'div',
                                    { className: gu },
                                    R.strings.crew.matrix.skillTooltip.zero.header(),
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: Bu },
                                a().createElement('div', null, R.strings.crew.matrix.skillTooltip.zero.text()),
                            ),
                        ),
                    bu = 'EmptySkillTooltipApp_base_eb',
                    fu = (0, F.Pi)(() => {
                        const e = h().model;
                        return a().createElement(
                            'div',
                            { className: bu },
                            e.isZeroSkill.get()
                                ? a().createElement(pu, null)
                                : a().createElement(Du, { skillProgressionData: e.skillProgression.get() }),
                        );
                    });
                engine.whenReady.then(() => {
                    A().render(
                        a().createElement(d, null, a().createElement(f, null, a().createElement(fu, null))),
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
                    for (var [u, t, n] = deferred[s], o = !0, i = 0; i < u.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((o = !1), n < r && (r = n));
                    if (o) {
                        deferred.splice(s--, 1);
                        var a = t();
                        void 0 !== a && (e = a);
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
        (__webpack_require__.j = 4037),
        (() => {
            var e = { 4037: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [o, i, a] = t,
                        s = 0;
                    if (o.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (a) var l = a(__webpack_require__);
                    }
                    for (u && u(t); s < o.length; s++)
                        ((r = o[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(4831));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
