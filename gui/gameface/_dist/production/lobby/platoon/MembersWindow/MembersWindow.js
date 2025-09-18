(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, u, t) => {
                (t.r(u),
                    t.d(u, { mouse: () => c, off: () => i, on: () => s, onResize: () => o, onScaleUpdated: () => a }));
                var n = t(2472),
                    r = t(1176);
                const o = (0, n.E)('clientResized'),
                    a = (0, n.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    i = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
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
                                            a = l[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(o, s),
                                            n(),
                                            () => {
                                                r &&
                                                    (a(),
                                                    window.removeEventListener(o, s),
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
                        getMouseGlobalPosition: () => a,
                        getSize: () => o,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var n = t(527),
                    r = t(2493);
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
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
                t.d(u, { O: () => a });
                var n = t(5959),
                    r = t(7698),
                    o = t(514);
                const a = { view: t(7641), client: n, sound: o.ZP, intl: r.N };
            },
            7698: (e, u, t) => {
                t.d(u, { N: () => n });
                const n = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, u, t) => {
                t.d(u, { ZP: () => a });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    o = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, n.playSound)(r[u])), e), {}),
                    a = { play: Object.assign({}, o, { sound: n.playSound }), setRTPC: n.setRTPC };
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
                        addPreloadTexture: () => i,
                        arabic2roman: () => y,
                        children: () => r,
                        displayStatus: () => o.W,
                        displayStatusIs: () => k,
                        enableFullScreenModeSupported: () => M,
                        events: () => a.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => w,
                        getExternalPaddingsRem: () => N,
                        getFontNames: () => h,
                        getScale: () => D,
                        getSize: () => m,
                        getViewGlobalPosition: () => A,
                        initExternalPaddings: () => T,
                        isEventHandled: () => g,
                        isFocused: () => b,
                        pxToRem: () => C,
                        remToPx: () => B,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => P,
                    }));
                var n = t(9690),
                    r = t(3722),
                    o = t(6112),
                    a = t(6538),
                    s = t(8566);
                function i(e) {
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
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function C(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function g() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const h = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    y = n.cg;
                function N() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const k = Object.keys(o.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === o.W[u]), e),
                        {},
                    ),
                    S = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    P = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function M() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function T(e) {
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
                t.d(u, { qP: () => o });
                const n = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const o = u.args,
                                a = (function (e, u) {
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
                                      Object.assign({ __Type: t, type: e }, a, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    o = {
                        close(e) {
                            r('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(e) {
                            r(16, { isMouseEvent: !0, on: e });
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
                t.d(u, { c1: () => v, Sw: () => o.Z, B0: () => s, c9: () => p, ry: () => C, Eu: () => B });
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
                var o = t(1358),
                    a = t(8613);
                let s;
                var i;
                (((i = s || (s = {}))[(i.UNDEFINED = 0)] = 'UNDEFINED'),
                    (i[(i.TOOLTIP = 1)] = 'TOOLTIP'),
                    (i[(i.POP_OVER = 2)] = 'POP_OVER'),
                    (i[(i.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (i[(i.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (i[(i.MOVE = 16)] = 'MOVE'),
                    (i[(i.CLOSE = 32)] = 'CLOSE'),
                    (i[(i.MINIMIZE = 64)] = 'MINIMIZE'));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    _ = t(3138);
                const A = ['args'];
                function F(e, u, t, n, r, o, a) {
                    try {
                        var s = e[o](a),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(n, r);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
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
                                        function a(e) {
                                            F(o, n, r, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            F(o, n, r, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    p = (e, u) => {
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
                    b = () => p(s.CLOSE),
                    f = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var g = t(7572);
                const v = r.instance,
                    w = {
                        DataTracker: o.Z,
                        ViewModel: g.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: d,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => p(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => p(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), o) => {
                            const a = _.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                d = i.height,
                                m = {
                                    x: _.O.view.pxToRem(l) + a.x,
                                    y: _.O.view.pxToRem(c) + a.y,
                                    width: _.O.view.pxToRem(E),
                                    height: _.O.view.pxToRem(d),
                                };
                            p(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: D(m),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => f(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, b);
                        },
                        handleViewEvent: p,
                        onBindingsReady: C,
                        onLayoutReady: B,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
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
                        ClickOutsideManager: v,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = w;
            },
            8613: (e, u, t) => {
                t.d(u, { Ew: () => o, Z5: () => n, cy: () => r });
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
                    },
                    o = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            159: (e, u, t) => {
                var n = {};
                (t.r(n),
                    t.d(n, {
                        Area: () => fu,
                        Bar: () => Bu,
                        DefaultScroll: () => bu,
                        Direction: () => lu,
                        defaultSettings: () => cu,
                        useHorizontalScrollApi: () => du,
                    }));
                var r = {};
                (t.r(r), t.d(r, { Area: () => Ou, Bar: () => Pu, Default: () => Tu, useVerticalScrollApi: () => gu }));
                var o = t(6483),
                    a = t.n(o),
                    s = t(3138),
                    i = t(7363),
                    l = t.n(i);
                const c = ['children'],
                    E = l().createContext(null),
                    d = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, c);
                        return l().createElement(E.Provider, { value: t }, u);
                    };
                function m(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const _ = {
                        playHighlight() {
                            m('highlight');
                        },
                        playClick() {
                            m('play');
                        },
                        playYes() {
                            m('yes1');
                        },
                    },
                    A = {
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
                let F, D;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(F || (F = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(D || (D = {})));
                const C = ({
                        children: e,
                        size: u,
                        disabled: t,
                        mixClass: n,
                        onMouseEnter: r,
                        onMouseMove: o,
                        onMouseDown: s,
                        onMouseUp: c,
                        onMouseLeave: E,
                        onClick: d,
                        isFocused: _ = !1,
                        type: D = F.primary,
                        soundHover: C = 'highlight',
                        soundClick: B = 'play',
                    }) => {
                        const p = (0, i.useRef)(null),
                            b = (0, i.useState)(_),
                            f = b[0],
                            g = b[1],
                            v = (0, i.useState)(!1),
                            w = v[0],
                            h = v[1];
                        return (
                            (0, i.useEffect)(() => {
                                function e(e) {
                                    f && null !== p.current && !p.current.contains(e.target) && g(!1);
                                }
                                return (
                                    document.addEventListener('mousedown', e),
                                    () => {
                                        document.removeEventListener('mousedown', e);
                                    }
                                );
                            }, [f]),
                            (0, i.useEffect)(() => {
                                g(_);
                            }, [_]),
                            l().createElement(
                                'div',
                                {
                                    ref: p,
                                    className: a()(
                                        A.base,
                                        A[`base__${D}`],
                                        t && A.base__disabled,
                                        u && A[`base__${u}`],
                                        f && A.base__focus,
                                        w && A.base__highlightActive,
                                        n,
                                    ),
                                    onMouseEnter: function (e) {
                                        t || (null !== C && m(C), r && r(e));
                                    },
                                    onMouseMove: function (e) {
                                        o && o(e);
                                    },
                                    onMouseUp: function (e) {
                                        t || (c && c(e), h(!1));
                                    },
                                    onMouseDown: function (e) {
                                        t ||
                                            (null !== B && m(B),
                                            s && s(e),
                                            _ && (t || (p.current && (p.current.focus(), g(!0)))),
                                            h(!0));
                                    },
                                    onMouseLeave: function (e) {
                                        t || (E && E(e), h(!1));
                                    },
                                    onClick: function (e) {
                                        t || (d && d(e));
                                    },
                                },
                                D !== F.ghost &&
                                    l().createElement(
                                        l().Fragment,
                                        null,
                                        l().createElement('div', { className: A.back }),
                                        l().createElement('span', { className: A.texture }),
                                    ),
                                l().createElement(
                                    'span',
                                    { className: a()(A.state, A.state__default) },
                                    l().createElement('span', { className: A.stateDisabled }),
                                    l().createElement('span', { className: A.stateHighlightHover }),
                                    l().createElement('span', { className: A.stateHighlightActive }),
                                ),
                                l().createElement(
                                    'span',
                                    { className: A.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    },
                    B = {
                        base: 'Button_base_8d',
                        base__close: 'Button_base__close_b1',
                        base__minimize: 'Button_base__minimize_f7',
                    };
                let p;
                !(function (e) {
                    ((e.Minimize = 'minimize'), (e.Close = 'close'));
                })(p || (p = {}));
                const b = ({ onClick: e, type: u }) => {
                        const t = (0, i.useCallback)(() => {
                                _.playHighlight();
                            }, []),
                            n = (0, i.useCallback)((e) => e.stopPropagation(), []),
                            r = a()(B.base, B[`base__${u}`]);
                        return l().createElement('div', { className: r, onClick: e, onMouseEnter: t, onMouseDown: n });
                    },
                    f = (e = 1) => {
                        const u = new Error().stack;
                        let t,
                            n = R.invalid('resId'),
                            r = '';
                        var o;
                        return (
                            u &&
                                ((r = (null == (o = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : o[0]) || ''),
                                (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (n = window.subViews[t].id)),
                            { callerUrl: r, caller: t, stack: u, resId: n }
                        );
                    };
                var g = t(9916);
                const v = [
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
                function w(e) {
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
                const h = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: g.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    y = (e) => {
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
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            B = e.onShow,
                            p = e.onHide,
                            b = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, v);
                        const g = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, i.useMemo)(() => C || f().resId, [C]),
                            N = (0, i.useCallback)(() => {
                                (g.current.isVisible && g.current.timeoutId) ||
                                    (h(t, _, { isMouseEvent: !0, on: !0, arguments: w(n) }, y),
                                    B && B(),
                                    (g.current.isVisible = !0));
                            }, [t, _, n, y, B]),
                            k = (0, i.useCallback)(() => {
                                if (g.current.isVisible || g.current.timeoutId) {
                                    const e = g.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (g.current.timeoutId = 0)),
                                        h(t, _, { on: !1 }, y),
                                        g.current.isVisible && p && p(),
                                        (g.current.isVisible = !1));
                                }
                            }, [t, _, y, p]),
                            S = (0, i.useCallback)((e) => {
                                g.current.isVisible &&
                                    ((g.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (g.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(g.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        return (
                            (0, i.useEffect)(() => {
                                const e = g.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', S, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', S, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, i.useEffect)(() => {
                                !1 === F && k();
                            }, [F, k]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        (window.removeEventListener('mouseleave', k), k());
                                    }
                                ),
                                [k],
                            ),
                            F
                                ? (0, i.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((P = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          (clearTimeout(g.current.timeoutId),
                                                          (g.current.timeoutId = window.setTimeout(N, c ? 100 : 400)),
                                                          r && r(e),
                                                          P && P(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (k(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === d && k(), null == s || s(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === d && k(), null == a || a(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          b,
                                      ),
                                  )
                                : u
                        );
                        var P;
                    },
                    N = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function k() {
                    return (
                        (k =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        k.apply(this, arguments)
                    );
                }
                const S = R.views.common.tooltip_window.simple_tooltip_content,
                    P = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            o = e.alert,
                            a = e.args,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, N);
                        const c = (0, i.useMemo)(() => {
                            const e = Object.assign({}, a, { body: t, header: n, note: r, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, n, r, a]);
                        return l().createElement(
                            y,
                            k(
                                {
                                    contentId:
                                        ((E = null == a ? void 0 : a.hasHtmlContent),
                                        E ? S.SimpleTooltipHtmlContent('resId') : S.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                s,
                            ),
                            u,
                        );
                        var E;
                    },
                    M = 'Info_base_7b',
                    T = ({ tooltipHeader: e, tooltipBody: u, tooltipContentId: t }) =>
                        t
                            ? l().createElement(y, { contentId: t }, l().createElement('div', { className: M }))
                            : l().createElement(
                                  P,
                                  { isEnabled: !0, header: e, body: u },
                                  l().createElement('div', { className: M }),
                              ),
                    O = ({ title: e, infoTooltipHeader: u, infoTooltipBody: t, tooltipContentId: n }) => {
                        const r = Boolean(u && t) || void 0 !== n;
                        return l().createElement(
                            'div',
                            { className: 'Title_base_44' },
                            e,
                            r && l().createElement(T, { tooltipContentId: n, tooltipHeader: u, tooltipBody: t }),
                        );
                    },
                    x = ({
                        title: e,
                        showMinimizeBtn: u,
                        onMinimize: t,
                        onClose: n,
                        onReload: r,
                        tooltipContentId: o,
                        infoTooltipHeader: c,
                        infoTooltipBody: E,
                    }) => {
                        const d = (0, i.useState)(!1),
                            m = d[0],
                            A = d[1],
                            F = (0, i.useCallback)((e) => {
                                const u = () => {
                                    (s.O.view.sendEvent.move(!1), A(!1), document.removeEventListener('mouseup', u));
                                };
                                0 === e.button &&
                                    (s.O.view.sendEvent.move(!0), A(!0), document.addEventListener('mouseup', u));
                            }, []);
                        return l().createElement(
                            'div',
                            { className: a()('Header_base_ff', m && 'Header_base__grabbing_dc'), onMouseDown: F },
                            l().createElement(O, {
                                title: e,
                                tooltipContentId: o,
                                infoTooltipBody: E,
                                infoTooltipHeader: c,
                            }),
                            r &&
                                l().createElement(
                                    C,
                                    {
                                        mixClass: 'Header_reloadButton_19',
                                        onClick: (e) => {
                                            (_.playClick(), null == r || r(e));
                                        },
                                    },
                                    l().createElement('div', {
                                        className: a()('Header_icon_6e', 'Header_icon__reload_c2'),
                                    }),
                                ),
                            u &&
                                l().createElement(b, {
                                    type: p.Minimize,
                                    onClick: (e) => {
                                        (_.playClick(), t ? t(e) : s.O.view.sendEvent.minimize());
                                    },
                                }),
                            l().createElement(b, {
                                type: p.Close,
                                onClick: (e) => {
                                    (_.playClick(), n ? n(e) : s.O.view.sendEvent.close());
                                },
                            }),
                        );
                    },
                    I = l().forwardRef(
                        (
                            {
                                title: e,
                                showMinimizeBtn: u,
                                onClose: t,
                                onReload: n,
                                onMinimize: r,
                                onFocusChange: o,
                                tooltipContentId: c,
                                infoTooltipHeader: E,
                                infoTooltipBody: m,
                                className: _,
                                children: A,
                            },
                            F,
                        ) => {
                            const D = (0, i.useRef)(null),
                                C = (0, i.useRef)(null),
                                B = (0, i.useState)(!0),
                                p = B[0],
                                b = B[1],
                                f = (function () {
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
                                                                (u(), (e.current = 0));
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
                                g = () => {
                                    f.run(() => {
                                        w();
                                    });
                                },
                                v = () => {
                                    window.requestAnimationFrame(() => {
                                        w();
                                    });
                                },
                                w = () => {
                                    const e = D.current,
                                        u = C.current;
                                    if (!e || !u) return;
                                    const t = s.O.view.pxToRem(e.offsetWidth),
                                        n = s.O.view.pxToRem(e.offsetHeight);
                                    ((u.style.width = `${t}rem`), (u.style.height = `${n}rem`));
                                    const r = t + 10 + 26,
                                        o = 28 + n + 5 + 26;
                                    (s.O.view.setInputPaddingsRem(13), s.O.view.resize(r, o, 'rem'));
                                };
                            var h;
                            return (
                                (h = () => (
                                    g(),
                                    window.addEventListener('resize', v),
                                    () => window.removeEventListener('resize', v)
                                )),
                                (0, i.useEffect)(h, []),
                                (0, i.useEffect)(
                                    () =>
                                        s.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && p
                                                ? (b(!1), null == o || o(!1))
                                                : 'inside' !== e || p || (b(!0), null == o || o(!0));
                                        }),
                                    [p, o],
                                ),
                                l().createElement(
                                    d,
                                    { updateSizes: g },
                                    l().createElement(
                                        'div',
                                        {
                                            className: a()('WindowDecorator_base_6a', _),
                                            style: { '--outer-shadow-width': '13rem' },
                                            ref: F,
                                        },
                                        l().createElement('div', {
                                            className: a()(
                                                'WindowDecorator_frame_b5',
                                                p && 'WindowDecorator_frame__focused_af',
                                            ),
                                        }),
                                        l().createElement(x, {
                                            title: e,
                                            tooltipContentId: c,
                                            infoTooltipHeader: E,
                                            infoTooltipBody: m,
                                            onClose: t,
                                            onMinimize: r,
                                            onReload: n,
                                            showMinimizeBtn: u,
                                        }),
                                        l().createElement(
                                            'div',
                                            { className: 'WindowDecorator_container_1d', ref: C },
                                            l().createElement('div', {
                                                className: 'WindowDecorator_contentDecorations_be',
                                            }),
                                            l().createElement(
                                                'div',
                                                { className: 'WindowDecorator_content_0b', ref: D },
                                                A,
                                            ),
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                var L = t(5521);
                const z = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function H(e = L.n.NONE, u = z, t = !1, n = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== L.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && s.O.view.isEventHandled()) return;
                                (s.O.view.setEventHandled(), u(r), t && r.stopPropagation());
                            }
                        }
                    }, [u, e, t, n]);
                }
                const V = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    W = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    $ = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    j = g.Sw.instance;
                let U;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(U || (U = {}));
                const G = (e = 'model', u = U.Deep) => {
                        const t = (0, i.useState)(0),
                            n = (t[0], t[1]),
                            r = (0, i.useMemo)(() => f(), []),
                            o = r.callerUrl,
                            a = r.caller,
                            s = r.resId,
                            l = (0, i.useMemo)(() => {
                                const u = (function (e) {
                                    return (window.injected || (window.injected = new Map()), window.injected).has(e);
                                })(o.replace('.js', '.html'));
                                return window.__feature && window.__feature !== a && !u ? `subViews.${a}.${e}` : e;
                            }, [o, a, e]),
                            c = (0, i.useState)(() =>
                                ((e) => {
                                    const u = V(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return W(u) ? u.value : u;
                                })(
                                    ((e) =>
                                        ((e, u) =>
                                            e.split('.').reduce((e, u) => {
                                                const t = V(`${e}.${u}`, window);
                                                return W(t) ? ((e, u) => `${e}.${u}.value`)(e, u) : `${e}.${u}`;
                                            }))(e))(l),
                                ),
                            ),
                            E = c[0],
                            d = c[1],
                            m = (0, i.useRef)(-1);
                        return (
                            ((e) => {
                                const u = (0, i.useRef)(!1);
                                u.current || (e(), (u.current = !0));
                            })(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? U.Deep : U.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== U.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === U.Deep
                                                ? (e === E && n((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        r = ((e) => {
                                            const u = ((e) => {
                                                    const u = f(),
                                                        t = u.caller,
                                                        n = u.resId,
                                                        r =
                                                            window.__feature && window.__feature !== t && t
                                                                ? `subViews.${t}`
                                                                : '';
                                                    return { modelPrefix: r, modelPath: $(r, ''), resId: n };
                                                })(),
                                                t = u.modelPrefix,
                                                n = e.split('.');
                                            if (n.length > 0) {
                                                const e = [n[0]];
                                                return (
                                                    n.reduce((u, n) => {
                                                        const r = V($(t, `${u}.${n}`), window);
                                                        return W(r)
                                                            ? (e.push(r.id), `${u}.${n}.value`)
                                                            : (e.push(n), `${u}.${n}`);
                                                    }),
                                                    e.reduce((e, u) => e + '.' + u)
                                                );
                                            }
                                            return '';
                                        })(e);
                                    m.current = j.addCallback(r, t, s, u === U.Deep);
                                }
                            }),
                            (0, i.useEffect)(() => {
                                if (u !== U.None)
                                    return () => {
                                        j.removeCallback(m.current, s);
                                    };
                            }, [s, u]),
                            E
                        );
                    },
                    q = (e) => ({ backgroundImage: `url('${e}')` }),
                    K = () => {
                        const e = (0, i.useMemo)(() => q(R.images.gui.maps.icons.platoon.common.info()), []);
                        return l().createElement(
                            y,
                            { isEnabled: !0, contentId: R.views.lobby.premacc.tooltips.SquadBonusTooltip('resId') },
                            l().createElement('div', { className: 'BonusInfoIcon_bonusInfoIcon_3d', style: e }),
                        );
                    };
                function Y() {
                    return (
                        (Y =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Y.apply(this, arguments)
                    );
                }
                const X = (0, i.memo)(
                        ({
                            caption: e,
                            isEnabled: u,
                            description: t,
                            children: n,
                            cButtonProps: r,
                            onClick: o,
                            className: a,
                        }) => {
                            const s = (0, i.useCallback)(() => o(), [o]);
                            return l().createElement(
                                P,
                                { isEnabled: !0, header: e, body: t },
                                l().createElement(
                                    'div',
                                    { className: a },
                                    l().createElement(
                                        C,
                                        Y({ type: F.primary, size: D.small, onClick: s, disabled: !u }, r),
                                        n || e,
                                    ),
                                ),
                            );
                        },
                    ),
                    Z = /<link.*?>/g,
                    J = /\.\.\//g,
                    Q = /<script.*?>/g,
                    ee = 'default.css',
                    ue = (e) => {
                        const u = e.match(J);
                        return u && u.join('');
                    },
                    te = () => {
                        for (
                            var e = 0, u = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < u.length;
                            e++
                        ) {
                            const t = u[e];
                            if (!t.href.includes(ee)) return t.href;
                        }
                        return '';
                    },
                    ne = (e) => {
                        const u = te(),
                            t = ue(u);
                        let n,
                            r = e;
                        for (; null !== (n = Q.exec(e)); ) {
                            const e = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const u = t + e[2].replace(J, '');
                                r = r.replace(e[2], u);
                            }
                        }
                        return r;
                    },
                    re = () => {
                        const e = [];
                        let u = !1;
                        const t = () => {
                            if (!e.length) return void (u = !1);
                            const n = e.shift();
                            n && ((u = !0), n().then(() => t()));
                        };
                        return {
                            add: (n) => {
                                (e.push(n), u || t());
                            },
                        };
                    },
                    oe = 'SubView_base_df',
                    ae = 'subViews.onChanged',
                    se = re(),
                    ie = (0, i.memo)(({ id: e, fallback: u, onLoadCallback: t, mixClass: n }) => {
                        const r = (0, i.useState)(''),
                            o = r[0],
                            s = r[1],
                            c = (0, i.useMemo)(() => ({ __html: ne(o) }), [o]),
                            E = (0, i.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            d = (0, i.useState)(!1),
                            m = d[0],
                            _ = d[1],
                            A = (0, i.useCallback)(
                                (e) => {
                                    e.includes(E) &&
                                        (_(!0), engine.off(ae, A), window.subViews.removeChildChangedCallback(E));
                                },
                                [E],
                            ),
                            F = (0, i.useCallback)((e) => {
                                se.add(
                                    () =>
                                        new Promise((u) => {
                                            s(e);
                                            const t = new MutationObserver(() => {
                                                    (t.disconnect(), u());
                                                }),
                                                n = document.getElementById('root');
                                            n && t.observe(n, { childList: !0 });
                                        }),
                                );
                            }, []);
                        ((0, i.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const u = window.subViews.get(e),
                                    t = u.path;
                                let n;
                                if ((n = t.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, u)),
                                        engine.on(`subView:inject->${n}`, F),
                                        (({ path: e, name: u }) => {
                                            const t = new XMLHttpRequest();
                                            ((t.onreadystatechange = () => {
                                                4 === t.readyState &&
                                                    (200 === t.status
                                                        ? (0, g.Eu)().then(() => {
                                                              (console.info(`Sub view ${u} loaded: ${e}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${u}`,
                                                                      t.responseText,
                                                                  ));
                                                          })
                                                        : console.error(
                                                              `subView: status: ${t.status} - can't get bundle`,
                                                          ));
                                            }),
                                                t.open('GET', e),
                                                t.send());
                                        })({ name: n, path: t }),
                                        () => {
                                            (n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                engine.off(`subView:inject->${n}`, F),
                                                console.info(`Sub view ${n} is destroyed: ${t}`));
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(ae, A);
                        }, [A, F, e, m]),
                            (0, i.useEffect)(
                                () => () => {
                                    o &&
                                        ((e) => {
                                            const u = ue(te());
                                            let t;
                                            for (; null !== (t = Z.exec(e)); ) {
                                                const e = t[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const t = u + e[1].replace(J, ''),
                                                        n = document.head.querySelector(`[href="${t}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(o);
                                },
                                [o],
                            ));
                        const D = a()(oe, n);
                        if (o) {
                            let u;
                            return (
                                (u = document.getElementById('root')) && u.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let u;
                                    const t = te(),
                                        n = ue(t);
                                    for (; null !== (u = Z.exec(e)); ) {
                                        const e = u[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(ee) && n) {
                                            const u = n + e[1].replace(J, ''),
                                                t = document.createElement('link');
                                            ((t.href = u), (t.rel = 'stylesheet'), document.head.appendChild(t));
                                        }
                                    }
                                })(o),
                                t && t(e),
                                l().createElement('div', { className: D, dangerouslySetInnerHTML: c })
                            );
                        }
                        return u ? l().createElement('div', { className: D }, l().createElement(u, null)) : null;
                    }),
                    le = 'subViews.onChanged',
                    ce = '.html',
                    Ee = /^coui:\/\/gui\/.*/,
                    de = re(),
                    me = (e) => {
                        const u = document.createElement('script');
                        ((u.src = e), (u.defer = !0), document.head.appendChild(u));
                    },
                    _e = (0, i.memo)(({ id: e, bundleLevelPath: u = 3, mixClass: t, children: n }) => {
                        const r = (0, i.useRef)(null),
                            o = (0, i.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            s = (0, i.useState)(!1),
                            c = s[0],
                            E = s[1],
                            d = (0, i.useState)(!0),
                            m = d[0],
                            _ = d[1],
                            A = (0, i.useCallback)(
                                (e) => {
                                    e.includes(o) &&
                                        (E(!0), engine.off(le, A), window.subViews.removeChildChangedCallback(o));
                                },
                                [o],
                            ),
                            F = (0, i.useCallback)(
                                (e) => {
                                    de.add(
                                        () =>
                                            new Promise((t) => {
                                                const n = new MutationObserver(() => {
                                                    (_(!1), n.disconnect(), t());
                                                });
                                                if (r.current) {
                                                    const t = document.getElementById('root');
                                                    (t && t.setAttribute('id', 'bugSubView'),
                                                        r.current.setAttribute('id', 'root'));
                                                    const o = document.createElement('link');
                                                    ((o.href = e.replace(ce, '.css')),
                                                        (o.rel = 'stylesheet'),
                                                        document.head.appendChild(o),
                                                        Ee.test(e) &&
                                                            me(
                                                                e
                                                                    .split('/')
                                                                    .slice(0, -u)
                                                                    .concat(['vendors.js'])
                                                                    .join('/')
                                                                    .replace('/production/', '/production/lib/'),
                                                            ),
                                                        me(e.replace(ce, '.js')),
                                                        n.observe(r.current, { childList: !0 }));
                                                }
                                            }),
                                    );
                                },
                                [u],
                            );
                        return (
                            (0, i.useEffect)(() => {
                                if (window.subViews.ids().includes(e)) {
                                    const u = window.subViews.get(e),
                                        t = u.path;
                                    let n = t.split('/').pop();
                                    if (n)
                                        return (
                                            (n = n.split('.')[0]),
                                            (window.subViews[n] = Object.assign({ id: e }, u)),
                                            F(t),
                                            () => {
                                                (n && window.subViews[n] && delete window.subViews[n],
                                                    engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                    window.__dataTracker &&
                                                        window.__dataTracker.clearViewCallbacks &&
                                                        window.__dataTracker.clearViewCallbacks(e),
                                                    console.info(`Sub view ${n} is destroyed: ${t}`));
                                            }
                                        );
                                    console.error("subView: can't get View component name");
                                } else engine.on(le, A);
                            }, [A, F, e, c]),
                            l().createElement(
                                'div',
                                { className: a()(oe, t) },
                                m && n,
                                l().createElement('div', { ref: r }),
                            )
                        );
                    });
                let Ae;
                !(function (e) {
                    ((e.left = 'left'), (e.top = 'top'), (e.right = 'right'), (e.bottom = 'bottom'));
                })(Ae || (Ae = {}));
                const Fe = [Ae.right, Ae.left],
                    De = ({ position: e }) => {
                        const u = String(R.images.gui.maps.icons.platoon.common.separator.$dyn(e));
                        return l().createElement(
                            'div',
                            {
                                className: a()(
                                    'Separator_base_98',
                                    Fe.includes(e) ? 'Separator_base__vertical_9d' : 'Separator_base__horizontal_34',
                                ),
                            },
                            l().createElement('div', { className: 'Separator_image_5b', style: q(u) }),
                        );
                    },
                    Ce = {
                        base: 'ToggleButton_base_b9',
                        content: 'ToggleButton_content_85',
                        overlay: 'ToggleButton_overlay_0a',
                        base__active: 'ToggleButton_base__active_68',
                        indicator: 'ToggleButton_indicator_85',
                        button: 'ToggleButton_button_4f',
                    },
                    Be = ['active', 'className', 'children', 'size', 'mixClass'];
                function pe() {
                    return (
                        (pe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        pe.apply(this, arguments)
                    );
                }
                const be = (e) => {
                        let u = e.active,
                            t = e.className,
                            n = e.children,
                            r = e.size,
                            o = void 0 === r ? D.small : r,
                            s = e.mixClass,
                            i = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Be);
                        const c = a()(Ce.base, t, u && Ce.base__active);
                        return l().createElement(
                            'div',
                            { className: c },
                            l().createElement(
                                C,
                                pe({}, i, { type: 'secondary', size: o, mixClass: Ce[`${s}`] }),
                                l().createElement('span', { className: Ce.content }, n),
                            ),
                            l().createElement('div', { className: Ce.overlay }),
                            l().createElement('div', { className: Ce.indicator }),
                        );
                    },
                    fe = ((0, i.memo)(be), { contentId: R.views.lobby.platoon.AlertTooltip('resId'), isEnabled: !0 }),
                    ge = (0, i.createContext)(null),
                    ve = () => {
                        const e = (0, i.useContext)(ge);
                        return (
                            null !== e &&
                                console.info(
                                    'useDependencies hook was called with data from MembersWindowDIContext.Provider',
                                ),
                            e
                        );
                    };
                function we() {
                    return (
                        (we =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        we.apply(this, arguments)
                    );
                }
                const he = () => {
                        var e;
                        const u = G().shouldShowFindPlayersButton,
                            t = G('model.btnInviteFriends'),
                            n = G('model.btnFindPlayers'),
                            r = ve(),
                            o = null != (e = null == r ? void 0 : r.subViewComponent) ? e : ie;
                        return l().createElement(
                            l().Fragment,
                            null,
                            u &&
                                l().createElement(
                                    'div',
                                    { className: 'CommanderControls_left_98' },
                                    l().createElement(
                                        y,
                                        ((e, u, t, n = !0) =>
                                            e && n
                                                ? fe
                                                : ((e, u, t) => ({
                                                      contentId:
                                                          R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                                              'resId',
                                                          ),
                                                      decoratorId:
                                                          R.views.common.tooltip_window.tooltip_window.TooltipWindow(
                                                              'resId',
                                                          ),
                                                      args: { header: e, body: u },
                                                      isEnabled: t,
                                                  }))(u, t, n))(!n.isEnabled, n.caption, n.description, n.hasTooltip),
                                        l().createElement(
                                            'div',
                                            null,
                                            l().createElement(
                                                C,
                                                {
                                                    type: n.isLight ? F.primary : F.secondary,
                                                    size: D.small,
                                                    onClick: n.isEnabled
                                                        ? () => {
                                                              (n.onClick(),
                                                                  n.soundClickName &&
                                                                      s.O.sound.play.sound(n.soundClickName));
                                                          }
                                                        : void 0,
                                                    disabled: !n.isEnabled,
                                                    mixClass: 'CommanderControls_findPlayers_c1',
                                                },
                                                n.caption,
                                            ),
                                        ),
                                    ),
                                    l().createElement(o, {
                                        id: R.views.lobby.platoon.subViews.TiersLimit('resId'),
                                        mixClass: 'CommanderControls_tiersLimit_2c',
                                    }),
                                ),
                            l().createElement(X, we({}, t, { cButtonProps: { type: F.secondary } })),
                        );
                    },
                    ye = () => {
                        const e = G('model.btnSwitchReady'),
                            u = e.onClick,
                            t = e.caption,
                            n = e.description,
                            r = e.tooltipHeader,
                            o = e.isRed,
                            s = e.isEnabled,
                            c = G(),
                            E = c.footerMessage,
                            d = c.isFooterMessageGrey,
                            m = a()('Footer_message_3d', !d && 'Footer_message__alert_64'),
                            _ = (0, i.useCallback)(() => u(), [u]),
                            A = o ? F.primaryRed : F.primary;
                        return l().createElement(
                            'div',
                            { className: 'Footer_base_d0' },
                            l().createElement('div', { className: m }, E),
                            l().createElement(
                                P,
                                { header: r, body: n },
                                l().createElement(C, { onClick: _, size: D.small, type: A, disabled: !s }, t),
                            ),
                        );
                    },
                    Ne = ({ currency: e, amount: u }) => {
                        const t = R.images.gui.maps.icons.platoon.members_window.currencies.$dyn(e),
                            n = (0, i.useMemo)(() => q(t), [t]);
                        return l().createElement(
                            'div',
                            { className: 'Bonus_base_96' },
                            l().createElement('div', { className: 'Bonus_currencyImage_16', style: n }),
                            l().createElement('span', { className: 'Bonus_caption_7e' }, `+${u}%`),
                        );
                    },
                    ke = () => {
                        const e = G('model.header.bonuses');
                        return 0 === e.length
                            ? null
                            : l().createElement(
                                  'div',
                                  { className: 'Bonuses_base_6f' },
                                  e
                                      .filter((e) => e)
                                      .map(({ value: e }) =>
                                          l().createElement(Ne, {
                                              currency: e.currency,
                                              amount: e.amount,
                                              key: e.currency,
                                          }),
                                      ),
                              );
                    };
                var Se = t(7948);
                let Pe;
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(Pe || (Pe = {}));
                const Me = (e) => e.replace(/&nbsp;/g, ' '),
                    Te = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Oe = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    xe = (e, u, t = Pe.left) => e.split(u).reduce(t === Pe.left ? Te : Oe, []),
                    Re = (() => {
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
                    Ie = ['zh_cn', 'zh_sg', 'zh_tw'];
                var Le = t(8613);
                (Date.now(), Le.Ew.getRegionalDateTime, Le.Ew.getFormattedDateTime);
                const ze =
                        (g.Sw.instance,
                        (e, u) => {
                            const t = (0, i.useRef)();
                            return (
                                (0, i.useEffect)(() => {
                                    (u && !u(e)) || (t.current = e);
                                }, [u, e]),
                                t.current
                            );
                        }),
                    He = ({ binding: e, text: u = '', classMix: t, alignment: n = Pe.left, formatWithBrackets: r }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const o = r && e ? ((s = e), u.replace(/\{\w+\}/g, (e) => String(s[e.slice(1, -1)]))) : u;
                        var s;
                        return l().createElement(
                            i.Fragment,
                            null,
                            o.split('\n').map((u, r) =>
                                l().createElement(
                                    'div',
                                    { className: a()('FormatText_base_d0', t), key: `${u}-${r}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            t && e in t
                                                ? t[e]
                                                : ((e, u = Pe.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return Ie.includes(t)
                                                          ? Re(e)
                                                          : 'ja' === t
                                                            ? (0, Se.loadDefaultJapaneseParser)()
                                                                  .parse(e)
                                                                  .map((e) => Me(e))
                                                            : ((e, u = Pe.left) => {
                                                                  let t = [];
                                                                  const n =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      r = Me(e);
                                                                  return (
                                                                      xe(r, /( )/, u).forEach(
                                                                          (e) => (t = t.concat(xe(e, n, Pe.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(e, u);
                                                  })(e, u),
                                        ))(u, n, e).map((e, u) =>
                                        l().createElement(i.Fragment, { key: `${u}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    Ve = () => {
                        const e = G('model.header.noBonusPlaceholder'),
                            u = e.text,
                            t = e.icon,
                            n = t && q(t);
                        return i.createElement(
                            i.Fragment,
                            null,
                            u &&
                                i.createElement(
                                    'div',
                                    { className: 'NoBonus_textContainer_ef' },
                                    i.createElement(He, {
                                        text: u,
                                        classMix: 'NoBonus_textMix_ff',
                                        alignment: Pe.right,
                                    }),
                                ),
                            n && i.createElement('div', { style: n, className: 'NoBonus_icon_69' }),
                        );
                    },
                    We = (e, u) => {
                        const t = Array.isArray(e) ? e : [e];
                        return !u && t.length > 1 ? t.slice(0, 1) : t;
                    },
                    $e = ['children'];
                function je() {
                    return (
                        (je =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        je.apply(this, arguments)
                    );
                }
                const Ue = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, $e);
                    return l().createElement(
                        y,
                        je(
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
                function Ge() {
                    return (
                        (Ge =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ge.apply(this, arguments)
                    );
                }
                const qe = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = l().createElement('div', { className: t }, e);
                        if (u.header || u.body) return l().createElement(P, u, n);
                        const r = u.contentId;
                        return r ? l().createElement(y, Ge({}, u, { contentId: r }), n) : l().createElement(Ue, u, n);
                    },
                    Ke = (e) => {
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
                    Ye = [];
                function Xe(e) {
                    const u = (0, i.useRef)(e);
                    return (
                        (0, i.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, i.useCallback)((...e) => (0, u.current)(...e), Ye)
                    );
                }
                let Ze, Je;
                (!(function (e) {
                    ((e.Basic = 'basic'),
                        (e.Disabled = 'disabled'),
                        (e.Focused = 'focused'),
                        (e.Alert = 'alert'),
                        (e.Selected = 'selected'));
                })(Ze || (Ze = {})),
                    (function (e) {
                        ((e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium'));
                    })(Je || (Je = {})));
                const Qe = ['content', 'classMix', 'className'];
                function eu() {
                    return (
                        (eu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        eu.apply(this, arguments)
                    );
                }
                const uu = (e) => {
                        let u = e.content,
                            t = e.classMix,
                            n = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Qe);
                        const o = (0, i.useRef)(null),
                            s = (0, i.useState)(!0),
                            c = s[0],
                            E = s[1];
                        return (
                            (0, i.useEffect)(() =>
                                Ke(() => {
                                    const e = o.current;
                                    e && e.offsetWidth >= e.scrollWidth && E(!1);
                                }),
                            ),
                            l().createElement(
                                P,
                                { isEnabled: c, body: u },
                                l().createElement(
                                    'div',
                                    eu({}, r, { ref: o, className: a()('TextOverflow_base_3b', n, t) }),
                                    u,
                                ),
                            )
                        );
                    },
                    tu = {
                        base: 'DropDownControl_base_46',
                        base__extraSmall: 'DropDownControl_base__extraSmall_a3',
                        base__small: 'DropDownControl_base__small_22',
                        base__medium: 'DropDownControl_base__medium_09',
                        base__disabled: 'DropDownControl_base__disabled_37',
                        base__focused: 'DropDownControl_base__focused_63',
                        base__selected: 'DropDownControl_base__selected_46',
                        stateHighlight: 'DropDownControl_stateHighlight_16',
                        base__over: 'DropDownControl_base__over_e7',
                        base__down: 'DropDownControl_base__down_1c',
                        base__open: 'DropDownControl_base__open_e3',
                        label: 'DropDownControl_label_12',
                        label__extraSmall: 'DropDownControl_label__extraSmall_3d',
                        label__small: 'DropDownControl_label__small_e7',
                        label__medium: 'DropDownControl_label__medium_0b',
                        label__placeholder: 'DropDownControl_label__placeholder_98',
                        button: 'DropDownControl_button_cb',
                        button__extraSmall: 'DropDownControl_button__extraSmall_d2',
                        button__small: 'DropDownControl_button__small_b5',
                        button__medium: 'DropDownControl_button__medium_14',
                        gradient: 'DropDownControl_gradient_b5',
                        disabled: 'DropDownControl_disabled_4e',
                        arrow: 'DropDownControl_arrow_de',
                        arrow__extraSmall: 'DropDownControl_arrow__extraSmall_eb',
                        arrow__small: 'DropDownControl_arrow__small_77',
                        arrow__medium: 'DropDownControl_arrow__medium_3d',
                        alert: 'DropDownControl_alert_75',
                        blink: 'DropDownControl_blink_68',
                    };
                let nu;
                !(function (e) {
                    ((e.Out = 'out'), (e.Over = 'over'), (e.Down = 'down'));
                })(nu || (nu = {}));
                const ru = (0, i.memo)(
                        ({
                            parentId: e,
                            variant: u = Ze.Basic,
                            size: t = Je.Medium,
                            isOpen: n,
                            placeholder: r = R.strings.common.dropdown.placeholder.select(),
                            label: o = '',
                            classMix: s,
                            onClick: c,
                            soundHover: E,
                            soundClick: d,
                            customControl: _,
                        }) => {
                            const A = (0, i.useState)(nu.Out),
                                F = A[0],
                                D = A[1],
                                C = (0, i.useState)(!1),
                                B = C[0],
                                p = C[1],
                                b = u === Ze.Disabled,
                                f = b || u === Ze.Basic,
                                g = (0, i.useCallback)(() => {
                                    b || (D(nu.Over), E && m(E));
                                }, [b, E]),
                                v = (0, i.useCallback)(() => D(nu.Out), []);
                            return (
                                (0, i.useEffect)(() => {
                                    f || p(!1);
                                }, [u, f]),
                                (0, i.useEffect)(() => {
                                    b && v();
                                }, [b, v]),
                                l().createElement(
                                    'div',
                                    {
                                        id: e ? `${e}_control` : void 0,
                                        className: a()(
                                            tu.base,
                                            n && tu.base__open,
                                            tu[`base__${F}`],
                                            (f || !B) && tu[`base__${u}`],
                                            s,
                                        ),
                                        onMouseEnter: g,
                                        onMouseUp: () => {
                                            (!b && D(nu.Over), !f && p(!0));
                                        },
                                        onMouseDown: () => {
                                            b || (D(nu.Down), d && m(d));
                                        },
                                        onMouseLeave: v,
                                        onClick: c,
                                    },
                                    l().createElement('div', { className: tu.stateHighlight }),
                                    !B && u === Ze.Alert && l().createElement('div', { className: tu.alert }),
                                    l().createElement(
                                        'div',
                                        { className: a()(tu.label, tu[`label__${t}`], !o && tu.label__placeholder) },
                                        _ || l().createElement(uu, { content: o || r }),
                                    ),
                                    l().createElement(
                                        'div',
                                        { className: a()(tu.button, tu[`button__${t}`]) },
                                        l().createElement('div', { className: a()(tu.arrow, tu[`arrow__${t}`]) }),
                                        l().createElement('div', { className: tu.gradient }),
                                        b && l().createElement('div', { className: tu.disabled }),
                                    ),
                                )
                            );
                        },
                    ),
                    ou = (e, u, t) => (t < e ? e : t > u ? u : t);
                function au(e, u, t = []) {
                    const n = (0, i.useRef)(0),
                        r = (0, i.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, i.useEffect)(() => r, [r]);
                    const o = (null != t ? t : []).concat([u]);
                    return [
                        (0, i.useCallback)((t) => {
                            ((n.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, o),
                        r,
                    ];
                }
                function su(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                var iu = t(8552);
                let lu;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(lu || (lu = {}));
                const cu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Eu = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        forceTriggerMouseMove: o,
                    }) => {
                        const a = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                o = n[1];
                            return o <= r ? 0 : ou(r, o, t);
                        };
                        return (s = {}) => {
                            const l = s.settings,
                                c = void 0 === l ? cu : l,
                                E = (0, i.useRef)(null),
                                d = (0, i.useRef)(null),
                                m = (0, i.useRef)(!1),
                                _ = (() => {
                                    const e = (0, i.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (
                                                var n,
                                                    r = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return su(e, u);
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
                                                                              ? su(e, u)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (u && e && 'number' == typeof e.length)
                                                        ) {
                                                            t && (e = t);
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
                                                    })(u(e).values());
                                                !(n = r()).done;

                                            )
                                                (0, n.value)(...t);
                                        };
                                    return (0, i.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                A = (function (e, u, t) {
                                    const n = (0, i.useMemo)(
                                        () =>
                                            (function (e, u, t, n) {
                                                let r,
                                                    o = !1,
                                                    a = 0;
                                                function s() {
                                                    r && clearTimeout(r);
                                                }
                                                function i(...i) {
                                                    const l = this,
                                                        c = Date.now() - a;
                                                    function E() {
                                                        ((a = Date.now()), t.apply(l, i));
                                                    }
                                                    o ||
                                                        (n && !r && E(),
                                                        s(),
                                                        void 0 === n && c > e
                                                            ? E()
                                                            : !0 !== u &&
                                                              (r = setTimeout(
                                                                  n
                                                                      ? function () {
                                                                            r = void 0;
                                                                        }
                                                                      : E,
                                                                  void 0 === n ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                                    (i.cancel = function () {
                                                        (s(), (o = !0));
                                                    }),
                                                    i
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return ((0, i.useEffect)(() => n.cancel, [n]), n);
                                })(
                                    () => {
                                        o && o();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, iu.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), _.trigger('change', e), o && m.current && A());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                D = F[0],
                                C = F[1],
                                B = (0, i.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = D.scrollPosition.get(),
                                            o = (null != (n = D.scrollPosition.goal) ? n : 0) - r;
                                        return a(e, u * t + o + r);
                                    },
                                    [D.scrollPosition],
                                ),
                                p = (0, i.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = E.current;
                                        n &&
                                            C.start({
                                                scrollPosition: a(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: a(n, D.scrollPosition.get()) },
                                            });
                                    },
                                    [C, c.animationConfig, D.scrollPosition],
                                ),
                                b = (0, i.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = d.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            o = B(u, e, n);
                                        p(o);
                                    },
                                    [p, B, c.step],
                                ),
                                f = (0, i.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && b(n(e)),
                                            E.current && _.trigger('mouseWheel', e, D.scrollPosition, u(E.current)));
                                    },
                                    [D.scrollPosition, b, _],
                                ),
                                g = ((e, u = []) => {
                                    const t = (0, i.useRef)(),
                                        n = (0, i.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, i.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        Ke(() => {
                                            const e = E.current;
                                            e &&
                                                (p(a(e, D.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [p, D.scrollPosition.goal],
                                ),
                                v = Xe(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = a(e, D.scrollPosition.goal);
                                    (u !== D.scrollPosition.goal && p(u, { immediate: !0 }),
                                        _.trigger('recalculateContent'));
                                });
                            return (
                                (0, i.useEffect)(
                                    () => (
                                        window.addEventListener('resize', g),
                                        () => {
                                            window.removeEventListener('resize', g);
                                        }
                                    ),
                                    [g],
                                ),
                                (0, i.useEffect)(() => {
                                    const e = E.current;
                                    if (!e || !o) return;
                                    const u = () => {
                                            m.current = !0;
                                        },
                                        t = () => {
                                            m.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', u),
                                        e.addEventListener('mouseleave', t),
                                        () => {
                                            (e.removeEventListener('mouseenter', u),
                                                e.removeEventListener('mouseleave', t));
                                        }
                                    );
                                }, [E]),
                                (0, i.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (d.current ? r(d.current) : void 0),
                                        getContainerSize: () => (E.current ? e(E.current) : void 0),
                                        getBounds: () =>
                                            E.current
                                                ? u(E.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: c.step.clampedArrowStepTimeout,
                                        clampPosition: a,
                                        handleMouseWheel: f,
                                        applyScroll: p,
                                        applyStepTo: b,
                                        contentRef: E,
                                        wrapperRef: d,
                                        scrollPosition: C,
                                        animationScroll: D,
                                        recalculateContent: v,
                                        events: { on: _.on, off: _.off },
                                    }),
                                    [D.scrollPosition, p, b, _.off, _.on, v, f, C, c.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    du = Eu({
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
                        getDirection: (e) => (e.deltaY > 1 ? lu.Next : lu.Prev),
                        forceTriggerMouseMove: s.O.view.forceTriggerMouseMove,
                    }),
                    mu = 'HorizontalBar_base__active_5e',
                    _u = 'disable',
                    Au = { pending: !1, offset: 0 },
                    Fu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Du = () => {},
                    Cu = (e, u) => Math.max(20, e.offsetWidth * u),
                    Bu = (0, i.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Fu, onDrag: n = Du }) => {
                        const r = (0, i.useRef)(null),
                            o = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            E = (0, i.useRef)(null),
                            d = (0, i.useRef)(null),
                            _ = e.stepTimeout || 100,
                            A = (0, i.useState)(Au),
                            F = A[0],
                            D = A[1],
                            C = (0, i.useCallback)(
                                (e) => {
                                    (D(e),
                                        d.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [n],
                            ),
                            B = () => {
                                const u = E.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    i = ou(0, 1, a / (r - n)),
                                    l = (u.offsetWidth - Cu(u, s)) * i;
                                ((t.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (o.current && c.current && E.current && d.current) {
                                            if (0 === e)
                                                return (
                                                    o.current.classList.add(_u),
                                                    void c.current.classList.remove(_u)
                                                );
                                            if (
                                                ((u = E.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(_u),
                                                    void c.current.classList.add(_u)
                                                );
                                            var u, t;
                                            (o.current.classList.remove(_u), c.current.classList.remove(_u));
                                        }
                                    })(l));
                            },
                            p = Xe(() => {
                                ((() => {
                                    const u = d.current,
                                        t = E.current,
                                        n = e.getWrapperSize(),
                                        o = e.getContainerSize();
                                    if (!(o && u && n && t)) return;
                                    const a = Math.min(1, n / o);
                                    ((u.style.width = `${Cu(t, a)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 !== a ? r.current.classList.add(mu) : r.current.classList.remove(mu)));
                                })(),
                                    B());
                            });
                        ((0, i.useEffect)(() => Ke(p)),
                            (0, i.useEffect)(
                                () =>
                                    Ke(() => {
                                        const u = () => {
                                            B();
                                        };
                                        let t = Du;
                                        const n = () => {
                                            (t(), (t = Ke(p)));
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
                                    }),
                                [e],
                            ),
                            (0, i.useEffect)(() => {
                                if (!F.pending) return;
                                const u = s.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const o = e.contentRef.current,
                                            a = e.wrapperRef.current;
                                        if (!o || !a) return;
                                        const s = E.current,
                                            i = d.current;
                                        if (!s || !i) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - F.offset - s.getBoundingClientRect().x,
                                            c = (l / s.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(o, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: c }));
                                    }),
                                    t = s.O.client.events.mouse.up(() => {
                                        (u(), C(Au));
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, F.offset, F.pending, n, C]));
                        const b = au((u) => e.applyStepTo(u), _, [e]),
                            f = b[0],
                            g = b[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', g, !0),
                                () => document.removeEventListener('mouseup', g, !0)
                            ),
                            [g],
                        );
                        const v = (e) => {
                            e.target.classList.contains(_u) || m('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: a()('HorizontalBar_base_49', u.base), ref: r, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: a()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(_u) || 0 !== e.button || (m('play'), f(lu.Next));
                                },
                                onMouseUp: g,
                                ref: o,
                                onMouseEnter: v,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: a()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        n &&
                                            0 === u.button &&
                                            (m('play'),
                                            u.target === n
                                                ? C({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const n = d.current,
                                                          r = e.contentRef.current;
                                                      if (!n || !r) return;
                                                      const o = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + o * u);
                                                  })(u.screenX > n.getBoundingClientRect().x ? lu.Prev : lu.Next));
                                    },
                                    ref: E,
                                    onMouseEnter: v,
                                },
                                l().createElement('div', { ref: d, className: a()('HorizontalBar_thumb_fd', u.thumb) }),
                                l().createElement('div', { className: a()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            l().createElement('div', {
                                className: a()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(_u) || 0 !== e.button || (m('play'), f(lu.Prev));
                                },
                                onMouseUp: g,
                                ref: c,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    pu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    bu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: o,
                        scrollClassName: s,
                        getStepByRailClick: c,
                        onDrag: E,
                    }) => {
                        const d = (0, i.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: a()(pu.base, e.base) });
                            }, [n]),
                            m = (0, i.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return l().createElement(
                            'div',
                            { className: a()(pu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: a()(pu.defaultScrollArea, r) },
                                l().createElement(fu, { className: s, api: m, classNames: o }, e),
                            ),
                            l().createElement(Bu, { getStepByRailClick: c, api: u, onDrag: E, classNames: d }),
                        );
                    },
                    fu = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, i.useEffect)(() => Ke(e.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: a()(pu.base, u) },
                            l().createElement(
                                'div',
                                {
                                    className: a()(pu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                l().createElement(
                                    'div',
                                    { className: a()(pu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ((fu.Bar = Bu), (fu.Default = bu));
                const gu = Eu({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? lu.Next : lu.Prev),
                    }),
                    vu = 'VerticalBar_base__active_72',
                    wu = 'disable',
                    hu = () => {},
                    yu = { pending: !1, offset: 0 },
                    Nu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    ku = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Su = (e, u) => Math.max(20, e.offsetHeight * u),
                    Pu = (0, i.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Nu, onDrag: n = hu }) => {
                        const r = (0, i.useRef)(null),
                            o = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            E = (0, i.useRef)(null),
                            d = (0, i.useRef)(null),
                            _ = e.stepTimeout || 100,
                            A = (0, i.useState)(yu),
                            F = A[0],
                            D = A[1],
                            C = (0, i.useCallback)(
                                (e) => {
                                    (D(e),
                                        d.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [n],
                            ),
                            B = Xe(() => {
                                const u = d.current,
                                    t = E.current,
                                    n = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(n && o && u && t)) return;
                                const a = Math.min(1, n / o);
                                return (
                                    (u.style.height = `${Su(t, a)}px`),
                                    (u.style.display = 'flex'),
                                    r.current &&
                                        (1 !== a ? r.current.classList.add(vu) : r.current.classList.remove(vu)),
                                    a
                                );
                            }),
                            p = Xe(() => {
                                const u = E.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    i = ou(0, 1, a / (r - n)),
                                    l = (u.offsetHeight - Su(u, s)) * i;
                                ((t.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (o.current && c.current && E.current && d.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    o.current.classList.add(wu),
                                                    void c.current.classList.remove(wu)
                                                );
                                            if (
                                                ((u = E.current),
                                                (t = d.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    o.current.classList.remove(wu),
                                                    void c.current.classList.add(wu)
                                                );
                                            var u, t;
                                            (o.current.classList.remove(wu), c.current.classList.remove(wu));
                                        }
                                    })(l));
                            }),
                            b = Xe(() => {
                                ku(e, () => {
                                    (B(), p());
                                });
                            });
                        ((0, i.useEffect)(() => Ke(b)),
                            (0, i.useEffect)(() => {
                                const u = () => {
                                    ku(e, () => {
                                        p();
                                    });
                                };
                                let t = hu;
                                const n = () => {
                                    (t(), (t = Ke(b)));
                                };
                                return (
                                    e.events.on('recalculateContent', b),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', b),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, i.useEffect)(() => {
                                if (!F.pending) return;
                                const u = s.O.client.events.mouse.up(() => {
                                        C(yu);
                                    }),
                                    t = s.O.client.events.mouse.move(([u]) => {
                                        ku(e, (t) => {
                                            const r = E.current,
                                                o = d.current,
                                                a = e.getContainerSize();
                                            if (!r || !o || !a) return;
                                            const s = u.screenY - F.offset - r.getBoundingClientRect().y,
                                                i = (s / r.offsetHeight) * a;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: o, thumbOffset: s, contentOffset: i }));
                                        });
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, F.offset, F.pending, n, C]));
                        const f = au((u) => e.applyStepTo(u), _, [e]),
                            g = f[0],
                            v = f[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const w = (e) => {
                            e.target.classList.contains(wu) || m('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: a()('VerticalBar_base_f3', u.base), ref: r, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: a()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(wu) || 0 !== e.button || (m('play'), g(lu.Next));
                                },
                                ref: o,
                                onMouseEnter: w,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: a()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        var r;
                                        n &&
                                            0 === u.button &&
                                            (m('play'),
                                            u.target === n
                                                ? C({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y })
                                                : ((r = u.screenY > n.getBoundingClientRect().y ? lu.Prev : lu.Next),
                                                  d.current &&
                                                      ku(e, (u) => {
                                                          if (!u) return;
                                                          const n = t(e),
                                                              o = e.clampPosition(u, u.scrollTop + n * r);
                                                          e.applyScroll(o);
                                                      })));
                                    },
                                    ref: E,
                                    onMouseEnter: w,
                                },
                                l().createElement('div', { ref: d, className: a()('VerticalBar_thumb_32', u.thumb) }),
                                l().createElement('div', { className: a()('VerticalBar_rail_43', u.rail) }),
                            ),
                            l().createElement('div', {
                                className: a()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(wu) || 0 !== e.button || (m('play'), g(lu.Prev));
                                },
                                onMouseUp: v,
                                ref: c,
                                onMouseEnter: w,
                            }),
                        );
                    }),
                    Mu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Tu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: o,
                        scrollClassNames: s,
                        getStepByRailClick: c,
                        onDrag: E,
                    }) => {
                        const d = (0, i.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: a()(Mu.base, e.base) });
                            }, [n]),
                            m = (0, i.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return l().createElement(
                            'div',
                            { className: a()(Mu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: a()(Mu.area, r) },
                                l().createElement(Ou, { className: o, classNames: s, api: m }, e),
                            ),
                            l().createElement(Pu, { getStepByRailClick: c, api: u, onDrag: E, classNames: d }),
                        );
                    },
                    Ou = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, i.useEffect)(() => Ke(n.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: a()(Mu.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: a()(Mu.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                Ou.Default = Tu;
                const xu = { Vertical: r, Horizontal: n },
                    Ru = { base: 'VerticalAutoScroll_barBase_93' },
                    Iu = { content: 'VerticalAutoScroll_content_47' },
                    Lu = ({
                        children: e,
                        isEnabled: u = !0,
                        selectedItemId: t,
                        scrollAreaKey: n = 'scrollArea',
                        withCompleteTrigger: r = !1,
                        containerClasses: o,
                    }) => {
                        const s = (0, i.useState)(!1),
                            c = s[0],
                            E = s[1],
                            d = (0, i.useState)(!1),
                            m = d[0],
                            _ = d[1],
                            A = (0, i.useRef)(null),
                            F = (0, i.useRef)(null),
                            D = gu(),
                            C = Xe(() => {
                                E(!0);
                            }),
                            B = (0, i.useCallback)(() => {
                                E(!1);
                            }, []),
                            p = (0, i.useCallback)(() => {
                                const e = F.current,
                                    u = A.current;
                                if (e && D && u) {
                                    const t = e.offsetTop + 0.5 * (e.offsetHeight - u.offsetHeight);
                                    (r && D.events.on('rest', C), D.applyScroll(t));
                                }
                            }, [C, D, r]);
                        ((0, i.useEffect)(
                            () => () => {
                                D.events.off('rest', C);
                            },
                            [C, D.events, r],
                        ),
                            (0, i.useEffect)(() => {
                                if (u && null !== t) return Ke(p);
                            }, [n, p, t, u]),
                            (0, i.useEffect)(() => {
                                const e = () => {
                                    const e = D.getContainerSize(),
                                        u = D.getWrapperSize();
                                    e && u && _(e > u);
                                };
                                return (
                                    D.events.on('recalculateContent', e),
                                    () => {
                                        D.events.off('recalculateContent', e);
                                    }
                                );
                            }, [m, D]));
                        const b = {
                                scrollContainerRef: A,
                                selectedItemRef: F,
                                selectedItemId: t,
                                isScrollComplete: c,
                                scrollbarActive: m,
                                onScrollAnimationComplete: B,
                            },
                            f = (0, i.cloneElement)(e, b);
                        return l().createElement(
                            'div',
                            { className: a()('VerticalAutoScroll_base_db', o), ref: A },
                            l().createElement(xu.Vertical.Area, { api: D, key: n, classNames: Iu }, f),
                            l().createElement(xu.Vertical.Bar, { api: D, classNames: Ru }),
                        );
                    },
                    zu = {
                        base: 'DropDownItem_base_5e',
                        base__extraSmall: 'DropDownItem_base__extraSmall_5a',
                        base__small: 'DropDownItem_base__small_d6',
                        base__medium: 'DropDownItem_base__medium_e4',
                        base__selected: 'DropDownItem_base__selected_8e',
                        base__disabled: 'DropDownItem_base__disabled_21',
                    },
                    Hu = ['size', 'classMix', 'onClick', 'itemRenderer'],
                    Vu = (0, i.memo)((e) => {
                        let u = e.size,
                            t = e.classMix,
                            n = e.onClick,
                            r = e.itemRenderer,
                            o = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Hu);
                        const s = o.id,
                            c = o.isSelected,
                            E = o.isDisabled,
                            d = o.label,
                            _ = o.soundHover,
                            A = o.soundClick,
                            F = (0, i.useCallback)(
                                (e) => {
                                    E || (n && n(e, s));
                                },
                                [s, E, n],
                            ),
                            D = (0, i.useCallback)(() => {
                                E || (_ && m(_));
                            }, [E, _]),
                            C = (0, i.useCallback)(() => {
                                E || (A && m(A));
                            }, [E, A]),
                            B = a()(zu.base, u && zu[`base__${u}`], c && zu.base__selected, E && zu.base__disabled, t);
                        return l().createElement(
                            'div',
                            { className: B, onMouseEnter: D, onMouseDown: C, onClick: F },
                            r ? r(o) : d,
                        );
                    }),
                    Wu = { base__withScroll: 'DropDownItems_base__withScroll_19' };
                function $u() {
                    return (
                        ($u =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        $u.apply(this, arguments)
                    );
                }
                const ju = ({
                        size: e,
                        items: u,
                        selectedIds: t,
                        selectedItemId: n,
                        selectedItemRef: r,
                        onClick: o,
                        parentId: s,
                        soundHover: i,
                        soundClick: c,
                        itemClassMix: E,
                        itemRenderer: d,
                        scrollbarActive: m,
                    }) =>
                        l().createElement(
                            'div',
                            { className: a()(Wu.base, m && Wu.base__withScroll) },
                            u.map((u) => {
                                const a = `${s}_${u.id}`;
                                return l().createElement(
                                    'div',
                                    { id: s ? a : void 0, key: a, ref: u.id === n ? r : null },
                                    l().createElement(
                                        Vu,
                                        $u({ size: e, soundHover: i, soundClick: c, classMix: E, itemRenderer: d }, u, {
                                            onClick: o,
                                            isSelected: t.includes(u.id),
                                        }),
                                    ),
                                );
                            }),
                        ),
                    Uu = {
                        base: 'DropDownList_base_62',
                        base__extraSmall: 'DropDownList_base__extraSmall_60',
                        base__small: 'DropDownList_base__small_0c',
                        base__medium: 'DropDownList_base__medium_99',
                    },
                    Gu = ({
                        parentId: e,
                        size: u = Je.Medium,
                        items: t,
                        selectedIds: n,
                        isOpen: r,
                        autoScroll: o,
                        classMix: s,
                        itemClassMix: c,
                        itemRenderer: E,
                        onClick: d,
                        soundHover: m,
                        soundClick: _,
                    }) => {
                        const A = (0, i.useState)(null),
                            F = A[0],
                            D = A[1],
                            C = ze(r);
                        (0, i.useEffect)(() => {
                            if (r && !C) {
                                const e = ((e, u) => {
                                    if (!u.length) return null;
                                    const t = e.find((e) => u.includes(e.id));
                                    return t ? t.id : null;
                                })(t, n);
                                null !== e && D(e);
                            }
                            r || D(null);
                        }, [r, t, n, C]);
                        const B = e ? `${e}_list` : void 0;
                        return l().createElement(
                            'div',
                            { id: B, className: a()(Uu.base, Uu[`base__${u}`], s) },
                            l().createElement(
                                Lu,
                                { selectedItemId: F, isEnabled: o },
                                l().createElement(ju, {
                                    parentId: e,
                                    items: t,
                                    size: u,
                                    selectedIds: n,
                                    onClick: d,
                                    soundHover: m,
                                    soundClick: _,
                                    itemClassMix: c,
                                    itemRenderer: E,
                                }),
                            ),
                        );
                    },
                    qu = {
                        base: 'PureDropDown_base_fc',
                        base__extraSmall: 'PureDropDown_base__extraSmall_31',
                        base__small: 'PureDropDown_base__small_a6',
                        base__medium: 'PureDropDown_base__medium_05',
                        control__down: 'PureDropDown_control__down_18',
                        list: 'PureDropDown_list_28',
                        list__up: 'PureDropDown_list__up_a1',
                        list__down: 'PureDropDown_list__down_c4',
                        list__under: 'PureDropDown_list__under_64',
                        list__above: 'PureDropDown_list__above_c8',
                    },
                    Ku = (0, i.memo)(
                        ({
                            componentId: e,
                            containerRef: u,
                            items: t,
                            selected: n = [],
                            variant: r = Ze.Basic,
                            size: o = Je.Medium,
                            multiple: s = !1,
                            autoScroll: c = !0,
                            placeholder: E,
                            classMix: d,
                            className: m,
                            controlRenderer: _,
                            itemRenderer: A,
                            open: F,
                            tooltipArgs: D,
                            onChanges: C,
                            onOpen: B,
                            onClose: p,
                            onClick: b,
                            onClickOutside: f,
                            onMouseEnter: v,
                            onMouseDown: w,
                            onMouseUp: h,
                            onMouseLeave: y,
                            soundHover: N = 'highlight',
                            soundClick: k = 'play',
                            soundItemHover: S,
                            soundItemClick: P,
                        }) => {
                            const M = (0, i.useRef)(null),
                                T = (0, i.useRef)(null),
                                O = (0, i.useRef)({ open: !1, listAbove: !1 }),
                                x = (0, i.useState)(!1),
                                R = x[0],
                                I = x[1],
                                z = (0, i.useState)(!1),
                                V = z[0],
                                W = z[1],
                                $ = We(n, s),
                                j = r !== Ze.Disabled,
                                U = void 0 === F,
                                G = Boolean(U ? R : F),
                                q = Xe(() => {
                                    O.current.open && ((O.current.open = !1), I(!1), null == p || p());
                                });
                            H(G ? L.n.ESCAPE : L.n.NONE, q, G);
                            const K = Xe(() => {
                                (null == f || f(), U && (I(!1), (O.current.open = !1), null == p || p()));
                            });
                            ((0, i.useEffect)(() => {
                                const e = M.current;
                                if (e && G)
                                    return (
                                        g.c1.register(e, K),
                                        () => {
                                            g.c1.unregister(e, K);
                                        }
                                    );
                            }, [G, K]),
                                (0, i.useEffect)(() => {
                                    void 0 !== F && (O.current.open = F);
                                }, [F]));
                            const Y = (0, i.useCallback)(() => {
                                if (!M.current || !T.current) return;
                                const e = u && u.current,
                                    t = e ? e.getBoundingClientRect().bottom : window.innerHeight,
                                    n =
                                        M.current.getBoundingClientRect().bottom +
                                            T.current.getBoundingClientRect().height >
                                        t;
                                n !== O.current.listAbove && ((O.current.listAbove = n), W(n));
                            }, [u]);
                            (0, i.useEffect)(() => Ke(() => Ke(Y)), [Y, o, t.length]);
                            const X = (0, i.useCallback)(
                                    (e) => {
                                        const u = $.findIndex((u) => u === e) > -1;
                                        let t = [];
                                        ((t = s ? (u ? $.filter((u) => u !== e) : [e, ...$]) : u ? [] : [e]),
                                            null == C || C(t));
                                    },
                                    [s, C, $],
                                ),
                                Z = (0, i.useCallback)(() => {
                                    U &&
                                        ((O.current.open = !O.current.open),
                                        I(O.current.open),
                                        O.current.open ? null == B || B() : null == p || p());
                                }, [U, B, p]),
                                J = (0, i.useCallback)(
                                    (e) => {
                                        (j && Z(), null == b || b(e));
                                    },
                                    [j, b, Z],
                                ),
                                Q = (0, i.useCallback)(
                                    (e, u) => {
                                        (null == b || b(e, u), X(u), s || Z());
                                    },
                                    [b, s, Z, X],
                                ),
                                ee = (0, i.useMemo)(
                                    () =>
                                        t
                                            .filter((e) => $.includes(e.id))
                                            .map((e) => e.label)
                                            .join(', '),
                                    [t, $],
                                ),
                                ue = (0, i.useMemo)(() => t.filter((e) => $.includes(e.id)), [t, $]),
                                te = _ ? _(ue) : void 0;
                            return l().createElement(
                                'div',
                                {
                                    id: e,
                                    ref: M,
                                    className: a()(qu.base, qu[`base__${o}`], m, null == d ? void 0 : d.base),
                                    onMouseEnter: v,
                                    onMouseUp: h,
                                    onMouseDown: w,
                                    onMouseLeave: y,
                                },
                                l().createElement(
                                    'div',
                                    { className: a()(qu.control, G && qu.control__down) },
                                    l().createElement(
                                        qe,
                                        { tooltipArgs: D },
                                        l().createElement(ru, {
                                            parentId: e,
                                            size: o,
                                            variant: r,
                                            isOpen: G,
                                            placeholder: E,
                                            label: ee,
                                            classMix: d && d.control,
                                            onClick: J,
                                            soundHover: N,
                                            soundClick: k,
                                            customControl: te,
                                        }),
                                    ),
                                ),
                                l().createElement(
                                    'div',
                                    {
                                        ref: T,
                                        className: a()(
                                            qu.list,
                                            G ? qu.list__down : qu.list__up,
                                            V ? qu.list__above : qu.list__under,
                                        ),
                                    },
                                    l().createElement(Gu, {
                                        parentId: e,
                                        size: o,
                                        items: t,
                                        selectedIds: $,
                                        isOpen: G,
                                        autoScroll: c,
                                        classMix: d && d.list,
                                        itemClassMix: d && d.item,
                                        itemRenderer: A,
                                        onClick: Q,
                                        soundHover: S || N,
                                        soundClick: P || k,
                                    }),
                                ),
                            );
                        },
                    ),
                    Yu = ['items', 'selected', 'multiple', 'onChanges'];
                function Xu() {
                    return (
                        (Xu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Xu.apply(this, arguments)
                    );
                }
                const Zu = (e) => {
                        let u = e.items,
                            t = e.selected,
                            n = void 0 === t ? [] : t,
                            r = e.multiple,
                            o = void 0 !== r && r,
                            a = e.onChanges,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Yu);
                        const c = (0, i.useMemo)(() => We(n, o), [JSON.stringify(n), o]),
                            E = (0, i.useState)(c),
                            d = E[0],
                            m = E[1],
                            _ = (0, i.useCallback)(
                                (e) => {
                                    0 !== e.length && (m(e), null == a || a(u.filter((u) => e.includes(u.id))));
                                },
                                [u, a],
                            ),
                            A = ze(c);
                        return (
                            (0, i.useEffect)(() => {
                                var e, u;
                                ((e = A || []), (u = c), JSON.stringify(e) !== JSON.stringify(u) && m(c));
                            }, [A, c]),
                            l().createElement(Ku, Xu({ onChanges: _, items: u, selected: d, multiple: o }, s))
                        );
                    },
                    Ju = ['modelPath', 'pure'];
                function Qu() {
                    return (
                        (Qu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Qu.apply(this, arguments)
                    );
                }
                const et = (0, i.memo)((e) => {
                        let u = e.modelPath,
                            t = e.pure,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Ju);
                        const r = G(u),
                            o = r.onChange,
                            a = r.multiple,
                            s = G(`${u}.items`),
                            c = G(`${u}.selected`),
                            E = s.map(({ value: e }) => e),
                            d = c.map(({ value: e }) => e),
                            m = (0, i.useCallback)(
                                (e) => {
                                    const u = e ? e.map(({ id: e }) => e).join(', ') : '';
                                    o({ selectedIds: u });
                                },
                                [o],
                            ),
                            _ = (0, i.useCallback)(
                                (e) => {
                                    o({ selectedIds: e ? e.join(', ') : '' });
                                },
                                [o],
                            );
                        return t
                            ? l().createElement(Ku, Qu({ items: E, selected: d, multiple: a, onChanges: _ }, n))
                            : l().createElement(Zu, Qu({ items: E, selected: d, multiple: a, onChanges: m }, n));
                    }),
                    ut = (e) => {
                        var u;
                        const t = null == (u = e.meta) ? void 0 : u.tooltipText;
                        return l().createElement(
                            P,
                            { isEnabled: t, body: t },
                            l().createElement('span', null, e.label),
                        );
                    },
                    tt = () => {
                        const e = G('model.header.memberCountDropdown'),
                            u = e.isDisabled,
                            t = e.tooltipText,
                            n = { body: t };
                        return l().createElement(
                            l().Fragment,
                            null,
                            l().createElement(et, {
                                modelPath: 'model.header.memberCountDropdown',
                                classMix: {
                                    base: 'DropDown_memberCountDropdown_67',
                                    item: 'DropDown_memberCountDropdownItem_f5',
                                },
                                size: Je.Small,
                                itemRenderer: ut,
                                variant: u ? Ze.Disabled : Ze.Basic,
                                tooltipArgs: t ? n : void 0,
                                pure: !0,
                            }),
                            l().createElement(
                                'div',
                                { className: 'DropDown_memberCountDescription_8a' },
                                R.strings.platoon.membersWindow.memberCountDropdown.description(),
                            ),
                        );
                    };
                function nt() {
                    return (
                        (nt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        nt.apply(this, arguments)
                    );
                }
                const rt = () => {
                    var e;
                    const u = G('model.header.btnLeavePlatoon'),
                        t = G('model.header.btnMuteAll'),
                        n = G('model.header'),
                        r = n.backgroundImage,
                        o = n.showNoBonusPlaceholder,
                        s = n.showInfoIcon,
                        c = ve(),
                        E = null != (e = null == c ? void 0 : c.hasDropDown) && e,
                        d = (0, i.useCallback)(() => {
                            (u.onClick(), m(R.sounds.gui_platoon_2_leave()));
                        }, [u]),
                        _ = (0, i.useCallback)(() => t.onClick(), [t]);
                    return l().createElement(
                        'div',
                        { className: a()('Header_base_26', E && 'Header_base__wide_be'), style: q(r) },
                        l().createElement(
                            'div',
                            { className: 'Header_buttonContainer_84' },
                            l().createElement(
                                'div',
                                { className: 'Header_topLeftButtonsWrapper_75' },
                                l().createElement(
                                    X,
                                    nt({}, u, {
                                        onClick: d,
                                        cButtonProps: { type: F.secondary },
                                        className: 'Header_leavePlatoonButton_e4',
                                    }),
                                ),
                                t.isVisible &&
                                    l().createElement(
                                        P,
                                        { header: t.tooltipHeader, body: t.tooltipBody },
                                        l().createElement(
                                            'div',
                                            { className: 'Header_muteButtonContainer_7e' },
                                            l().createElement(
                                                be,
                                                { onClick: _, active: t.isSelected },
                                                l().createElement('div', { className: 'Header_muteIcon_54' }),
                                            ),
                                        ),
                                    ),
                            ),
                            E &&
                                l().createElement(
                                    'div',
                                    { className: 'Header_dropdowns_f3' },
                                    l().createElement(tt, null),
                                ),
                        ),
                        o ? l().createElement(Ve, null) : l().createElement(ke, null),
                        s && l().createElement(K, null),
                    );
                };
                let ot;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(ot || (ot = {}));
                const at = ({
                        children: e,
                        contentID: u,
                        decoratorID: t = 0,
                        targetId: n = 0,
                        args: r,
                        isEnabled: o = !0,
                        onMouseDown: a,
                    }) => {
                        const s = (0, i.useCallback)(() => {
                                ((0, g.c9)(g.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: n,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    _.playYes());
                            }, [r, u, t, n]),
                            l = (0, i.useCallback)(() => {
                                (0, g.c9)(g.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: n,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, t, n]),
                            c = (0, i.useCallback)(
                                (e) => {
                                    (a && a(e), ((e) => e.button === ot.RIGHT)(e) && s());
                                },
                                [a, s],
                            );
                        return (
                            (0, i.useEffect)(() => {
                                !1 === o && l();
                            }, [o, l]),
                            o ? (0, i.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    st = ['children'];
                function it() {
                    return (
                        (it =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        it.apply(this, arguments)
                    );
                }
                const lt = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, st);
                        return l().createElement(
                            at,
                            it({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                            u,
                        );
                    },
                    ct = ({ slotLabelElements: e }) => {
                        const u = (0, i.useMemo)(() => (e) => ('' === e ? {} : JSON.parse(e)), []);
                        return l().createElement(
                            l().Fragment,
                            null,
                            e.map(({ value: e }, t) =>
                                l().createElement(
                                    'div',
                                    { key: e.content + t, style: u(e.styleJson) },
                                    l().createElement(He, { text: e.content, classMix: 'SlotLabel_formattedText_e8' }),
                                ),
                            ),
                        );
                    },
                    Et = {
                        base: 'NoPlayer_base_e9',
                        base__disabled: 'NoPlayer_base__disabled_11',
                        central: 'NoPlayer_central_20',
                        image: 'NoPlayer_image_2b',
                        image__disabled: 'NoPlayer_image__disabled_47',
                        image__empty: 'NoPlayer_image__empty_99',
                        image__spinner: 'NoPlayer_image__spinner_92',
                        spinner: 'NoPlayer_spinner_f8',
                        footer: 'NoPlayer_footer_1b',
                    };
                let dt;
                !(function (e) {
                    ((e.spinner = 'spinner'), (e.disabled = 'disabled'), (e.empty = 'empty'));
                })(dt || (dt = {}));
                const mt = ({ text: e, type: u, slotLabelElements: t }) => {
                    const n = a()(Et.base, u === dt.disabled && Et.base__disabled),
                        r = a()(Et.image, Et[`image__${u}`]);
                    return l().createElement(
                        'div',
                        { className: n },
                        l().createElement(
                            'div',
                            { className: Et.central },
                            l().createElement('div', { className: r }),
                            e,
                        ),
                        l().createElement(
                            'div',
                            { className: Et.footer },
                            t.length > 0 && l().createElement(ct, { slotLabelElements: t }),
                        ),
                    );
                };
                let _t, At;
                (!(function (e) {
                    ((e.Squad = 'squad'),
                        (e.Event = 'event'),
                        (e.Comp7 = 'comp7'),
                        (e.BattleRoyal = 'battle_royal'),
                        (e.Epic = 'epic'),
                        (e.MapBox = 'mapbox'));
                })(_t || (_t = {})),
                    (function (e) {
                        ((e[(e.None = 0)] = 'None'), (e[(e.ModeOffline = 1)] = 'ModeOffline'));
                    })(At || (At = {})));
                const Ft = ({ rating: e }) =>
                        l().createElement(
                            'div',
                            { className: 'WTRInfo_wtr_5e' },
                            l().createElement('div', { className: 'WTRInfo_wtrIcon_a9' }),
                            l().createElement('span', { className: 'WTRInfo_wtrValue_80' }, e),
                        ),
                    Dt = (e) => e.replace('-', '_'),
                    Ct = (e, u) =>
                        String(
                            u
                                ? R.images.gui.maps.icons.vehicleTypes.elite.$dyn(Dt(e))
                                : R.images.gui.maps.icons.vehicleTypes.$dyn(Dt(e)),
                        ),
                    Bt = (e, u) => String(R.images.gui.maps.icons.vehicle.c_420x307.$dyn(Dt(u).toLowerCase())),
                    pt = (e, u) =>
                        String(R.images.gui.maps.icons.battleRoyale.vehicles.c_210x153.$dyn(Dt(u).toLowerCase())),
                    bt = () => {
                        const e = R.strings.platoon.members.card.muted.caption(),
                            u = R.strings.platoon.members.card.muted.description();
                        return l().createElement(
                            P,
                            { header: e, body: u },
                            l().createElement('div', { className: 'MutedIcon_base_d2' }),
                        );
                    };
                let ft;
                !(function (e) {
                    ((e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220'));
                })(ft || (ft = {}));
                const gt = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    vt = { [ft.default]: 'c_24x24', [ft.x48]: 'c_48x48', [ft.x80]: 'c_80x80', [ft.x220]: 'c_220x220' },
                    wt = ({ badgeID: e, size: u = ft.default, className: t }) => {
                        const n = R.images.gui.maps.icons.library.badges.$dyn(vt[u]);
                        return l().createElement('div', {
                            className: a()(gt.base, gt[`base__${u}`], t),
                            style: { backgroundImage: `url(${n.$dyn(`badge_${e}`)})` },
                        });
                    },
                    ht = {
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
                    yt = (0, i.memo)(({ tooltipHeaderName: e }) => {
                        const u = (0, i.useMemo)(() => {
                                return (
                                    (u = R.strings.tooltips.anonymizer.teamStats.header()),
                                    (t = { name: e }),
                                    u.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                        const u = 0 === e.indexOf('%') ? 2 : 1;
                                        return String(t[e.slice(u, -u)]);
                                    })
                                );
                                var u, t;
                            }, [e]),
                            t = R.strings.tooltips.anonymizer.teamStats.body();
                        return l().createElement(
                            P,
                            { header: u, body: t },
                            l().createElement('div', { className: ht.anonymizedIcon }),
                        );
                    });
                function Nt() {
                    return (
                        (Nt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Nt.apply(this, arguments)
                    );
                }
                const kt = { [ft.default]: 'c_64x24', [ft.x48]: 'c_68x28' },
                    St = { [ft.default]: 'c_48x48', [ft.x48]: 'c_48x48' },
                    Pt = ({
                        userName: e,
                        clanAbbrev: u = '',
                        igrType: t = 0,
                        badge: n = { badgeID: '' },
                        suffixBadge: r = { badgeID: '' },
                        isInverted: o = !1,
                        isFakeNameVisible: s = !1,
                        isAnonymizerShown: c = !1,
                        hiddenUserName: E = '',
                        size: d = ft.default,
                        userNameClassName: m = '',
                        clanTagClassName: _ = '',
                    }) => {
                        const A = R.images.gui.maps.icons.library.badges.strips.$dyn(kt[d]),
                            F = (0, i.useMemo)(
                                () => ({ backgroundImage: `url(${A.$dyn(`strip_${r.badgeID}`)})` }),
                                [r, A],
                            ),
                            D = R.images.gui.maps.icons.library.badges.$dyn(St[d]),
                            C = (0, i.useMemo)(
                                () => ({ backgroundImage: `url(${D.$dyn(`badge_${r.badgeID}`)})` }),
                                [r, D],
                            ),
                            B = u ? `[${u}]` : '',
                            p = a()(ht.base, ht[`base__${d}`], o && ht.base__inverted),
                            b = a()(ht.userName, m),
                            f = a()(ht.clanTag, _),
                            g = e !== E,
                            v = s ? `${E}${B}` : E,
                            w = Boolean(n.badgeID) && l().createElement(wt, Nt({ size: d }, n, { key: 'badge' })),
                            h = Date.now(),
                            y = [
                                w,
                                [
                                    l().createElement(
                                        'div',
                                        { className: b, key: 'userName' },
                                        l().createElement(uu, { content: e, key: h }),
                                    ),
                                    !s && Boolean(B) && l().createElement('div', { className: f, key: 'clanTag' }, B),
                                ],
                                0 !== t && l().createElement('div', { className: ht.igrIcon, key: 'igrType' }),
                                Boolean(r.badgeID) &&
                                    l().createElement(
                                        'div',
                                        { className: ht.suffixBadgeWrapper, key: 'suffixBadge' },
                                        l().createElement('div', { className: ht.suffixBadgeStripe, style: F }),
                                        l().createElement('div', { className: ht.suffixBadge, style: C }),
                                    ),
                                c && g && l().createElement(yt, { tooltipHeaderName: v, key: 'anonymizer' }),
                            ];
                        return l().createElement('div', { className: p }, o ? y.reverse() : y);
                    },
                    Mt = { badgeID: '' },
                    Tt = ({ name: e, badgeID: u, clanTag: t, color: n, className: r }) => {
                        const o = (0, i.useMemo)(() => ({ badgeID: u || '' }), [u]),
                            a = (0, i.useMemo)(() => ({ color: n }), [n]);
                        return l().createElement(
                            'div',
                            { style: a, className: r },
                            l().createElement(Pt, {
                                userName: e,
                                badge: o,
                                suffixBadge: Mt,
                                clanAbbrev: t,
                                userNameClassName: 'PlayerName_userName_c9',
                            }),
                        );
                    };
                let Ot;
                !(function (e) {
                    ((e.IRON = 'iron'),
                        (e.BRONZE = 'bronze'),
                        (e.SILVER = 'silver'),
                        (e.GOLD = 'gold'),
                        (e.ENAMEL = 'enamel'),
                        (e.MAXIMUM = 'prestige'),
                        (e.UNDEFINED = 'undefined'));
                })(Ot || (Ot = {}));
                var xt = t(9690);
                const Rt = {
                        base: 'PrestigeProgressTab_base_7c',
                        icon: 'PrestigeProgressTab_icon_0a',
                        base__left: 'PrestigeProgressTab_base__left_55',
                        level: 'PrestigeProgressTab_level_ba',
                        base__right: 'PrestigeProgressTab_base__right_5d',
                        base__iron: 'PrestigeProgressTab_base__iron_03',
                        base__bronze: 'PrestigeProgressTab_base__bronze_b8',
                        base__silver: 'PrestigeProgressTab_base__silver_ef',
                        base__gold: 'PrestigeProgressTab_base__gold_b6',
                        base__enamel: 'PrestigeProgressTab_base__enamel_39',
                    },
                    It = R.strings.prestige.tooltip.tab,
                    Lt = R.images.gui.maps.icons.prestige.tab,
                    zt = (e) => {
                        return e.type === Ot.MAXIMUM
                            ? Lt.prestige()
                            : Lt.$dyn(e.type)
                                  .$dyn((u = e.level) < 10 ? 'short' : u < 100 ? 'medium' : 'long')
                                  .$dyn(`c_${e.grade}`);
                        var u;
                    },
                    Ht = ({ emblem: e, direction: u = 'right', isTooltipEnabled: t = !1 }) =>
                        e.type === Ot.UNDEFINED
                            ? null
                            : l().createElement(
                                  P,
                                  { header: It.header(), body: It.body(), isEnabled: t },
                                  l().createElement(
                                      'div',
                                      { className: a()(Rt.base, Rt[`base__${e.type}`], Rt[`base__${u}`]) },
                                      l().createElement('div', {
                                          className: Rt.icon,
                                          style: { backgroundImage: `url(${zt(e)})` },
                                      }),
                                      e.type !== Ot.MAXIMUM &&
                                          l().createElement('div', { className: Rt.level }, e.level),
                                  ),
                              ),
                    Vt = {
                        base: 'VehicleDescription_base_1b',
                        vehicleType: 'VehicleDescription_vehicleType_a1',
                        vehicleType__elite: 'VehicleDescription_vehicleType__elite_71',
                        prestigeTab__short: 'VehicleDescription_prestigeTab__short_c8',
                        prestigeTab__medium: 'VehicleDescription_prestigeTab__medium_37',
                        prestigeTab__long: 'VehicleDescription_prestigeTab__long_dd',
                    },
                    Wt = ({
                        type: e,
                        isPremium: u,
                        name: t,
                        tier: n,
                        className: r,
                        prebattleType: o,
                        isPrestigeAvailable: s,
                        prestigeEmblem: i,
                    }) => {
                        const c = s && i.type !== Ot.UNDEFINED;
                        return l().createElement(
                            'div',
                            { className: a()(Vt.base, r) },
                            o !== _t.BattleRoyal && (0, xt.cg)(n),
                            l().createElement('div', {
                                className: a()(Vt.vehicleType, u && Vt.vehicleType__elite),
                                style: q(Ct(e, u)),
                            }),
                            t,
                            c &&
                                l().createElement(
                                    'div',
                                    {
                                        className: a()(
                                            Vt.prestigeTab,
                                            ((E = i),
                                            E.type === Ot.MAXIMUM
                                                ? Vt.prestigeTab__medium
                                                : E.level < 10
                                                  ? Vt.prestigeTab__short
                                                  : E.level < 100
                                                    ? Vt.prestigeTab__medium
                                                    : Vt.prestigeTab__long),
                                        ),
                                    },
                                    l().createElement(Ht, { emblem: i, isTooltipEnabled: !0 }),
                                ),
                        );
                        var E;
                    },
                    $t = (0, i.memo)(({ src: e, className: u, autoPlay: t = !1, loop: n = !1 }) => {
                        const r = (0, i.useRef)(null);
                        return (
                            (0, i.useEffect)(() => {
                                engine.on('clientMinimized', (e) => {
                                    r.current && (e ? r.current.pause() : r.current.play());
                                });
                            }, []),
                            l().createElement('video', { ref: r, className: u, src: e, autoPlay: t, loop: n })
                        );
                    });
                $t.displayName = 'Video';
                const jt = ({ visible: e }) => {
                        const u = a()(
                            'VoiceAnimation_talkingAnimation_c4',
                            e && 'VoiceAnimation_talkingAnimation__visible_18',
                        );
                        return l().createElement($t, {
                            src: R.videos.platoon.VoiceChat(),
                            autoPlay: !0,
                            loop: !0,
                            className: u,
                        });
                    },
                    Ut = ({ estimatedTime: e }) =>
                        l().createElement(
                            l().Fragment,
                            null,
                            l().createElement('div', null, R.strings.platoon.members.card.searching()),
                            l().createElement('span', null, '(', e, ')'),
                        ),
                    Gt = (e, u, t, n) => {
                        let r = R.images.gui.maps.icons.platoon.members_window.tall_slot.cards;
                        if (n && n !== _t.Squad) {
                            const e = r.$dyn(n.toString());
                            e && (r = e);
                        }
                        let o = null;
                        return (
                            (o = e
                                ? r.$dyn('in_battle')
                                : u
                                  ? t
                                      ? r.$dyn('ready_player')
                                      : r.$dyn('ready')
                                  : t
                                    ? r.$dyn('not_ready_player')
                                    : r.$dyn('not_ready')),
                            o || Gt(e, u, t)
                        );
                    },
                    qt = 'Player_flagImage_60';
                function Kt() {
                    return (
                        (Kt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Kt.apply(this, arguments)
                    );
                }
                const Yt = ({ player: e, isInBattle: u, infoText: t, prebattleType: n }) => {
                        const r = a()('Player_readiness_a4', e.isReady && !u && 'Player_readiness__isReady_25'),
                            o = n === _t.BattleRoyal ? pt : Bt,
                            s = e.isReady ? o(e.vehicle.nation, e.vehicle.techName) : '',
                            c = e.isReady
                                ? String(R.images.gui.maps.icons.platoon.members_window.tall_slot.flags.whiteTiger())
                                : '',
                            E = (0, i.useMemo)(
                                () => Gt(u, e.isReady, e.isCurrentUser, n),
                                [u, e.isReady, e.isCurrentUser, n],
                            ),
                            d = a()(
                                'Player_topping_06',
                                e.isCommander ? 'Player_topping__isCommander_95' : 'Player_topping__isPlayer_08',
                            );
                        return l().createElement(
                            'div',
                            { className: 'Player_base_a0', style: q(E) },
                            l().createElement(
                                'div',
                                { className: d },
                                l().createElement('div', { className: 'Player_toppingBack_ff' }),
                                e.isPrem && l().createElement('div', { className: 'Player_toppingPremiumIcon_b1' }),
                                l().createElement(jt, { visible: e.voice.isSpeaking }),
                                l().createElement('div', { className: 'Player_toppingPlayerIcon_2b' }),
                            ),
                            !u &&
                                e.isReady &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement('div', { className: qt, style: q(c) }),
                                    l().createElement('div', { className: 'Player_vehicleImage_84', style: q(s) }),
                                ),
                            e.isIgnored &&
                                l().createElement('div', {
                                    className: qt,
                                    style: q(R.images.gui.maps.icons.platoon.members_window.tall_slot.cards.ignored()),
                                }),
                            l().createElement(
                                'div',
                                { className: 'Player_mutedContainer_c2' },
                                e.voice.isMutedByUser && l().createElement(bt, null),
                            ),
                            l().createElement(
                                'div',
                                { className: 'Player_name_65' },
                                l().createElement(Tt, e.commonData),
                            ),
                            '' !== e.commonData.rating && l().createElement(Ft, { rating: e.commonData.rating }),
                            l().createElement(
                                'div',
                                { className: 'Player_footer_27' },
                                e.isReady && !u
                                    ? l().createElement(
                                          Wt,
                                          Kt({}, e.vehicle, {
                                              prebattleType: n,
                                              isPrestigeAvailable: e.isPrestigeAvailable,
                                              prestigeEmblem: e.prestigeEmblem,
                                          }),
                                      )
                                    : t,
                            ),
                            l().createElement('div', { className: r }),
                        );
                    },
                    Xt = (e) => {
                        const u = (0, i.useMemo)(
                            () =>
                                e.isEmpty
                                    ? ((e) =>
                                          e.isDisabled
                                              ? {
                                                    text: R.strings.platoon.members.card.disabled(),
                                                    type: dt.disabled,
                                                    slotLabelElements: e.slotLabelElements,
                                                }
                                              : e.isSearching
                                                ? {
                                                      text: l().createElement(Ut, { estimatedTime: e.estimatedTime }),
                                                      type: dt.spinner,
                                                      slotLabelElements: e.slotLabelElements,
                                                  }
                                                : {
                                                      text: R.strings.platoon.members.card.empty(),
                                                      type: dt.empty,
                                                      slotLabelElements: e.slotLabelElements,
                                                  })(e)
                                    : {
                                          isInBattle: e.isInBattle,
                                          player: e.player,
                                          infoText: e.infoText,
                                          prebattleType: e.prebattleType,
                                      },
                            [e],
                        );
                        return (0, i.useMemo)(() => (e) => void 0 !== e.isInBattle, [])(u)
                            ? l().createElement(Yt, u)
                            : l().createElement(mt, u);
                    };
                function Zt() {
                    return (
                        (Zt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Zt.apply(this, arguments)
                    );
                }
                const Jt = ({ slot: e, isShort: u }) => {
                        const t = e.player.commonData.name,
                            n = (0, i.useMemo)(() => ({ userName: t }), [t]),
                            r = l().createElement(
                                'div',
                                { className: a()(u && 'SlotContainer_base__short_4d') },
                                l().createElement(Xt, Zt({ key: e.slotId }, e)),
                            );
                        return e.player.isCurrentUser || e.isEmpty
                            ? r
                            : l().createElement(lt, { args: n, key: e.slotId }, r);
                    },
                    Qt = () => {
                        const e = G(),
                            u = e.isHorizontal,
                            t = e.isShort,
                            n = G('model.slots'),
                            r = a()(
                                'Slots_base_c6',
                                u && 'Slots_base__isHorizontal_7c',
                                u && t && 'Slots_base__isHorizontal__short_7c',
                            );
                        return l().createElement(
                            'div',
                            { className: r },
                            n.map((e) =>
                                l().createElement(Jt, {
                                    slot: e.value,
                                    isHorizontal: u,
                                    isShort: t,
                                    key: e.value.slotId,
                                }),
                            ),
                        );
                    };
                var en = t(1533),
                    un = t.n(en);
                const tn = () => {
                    const e = G(),
                        u = e.canMinimize,
                        t = e.isCommander,
                        n = e.isHorizontal,
                        r = e.isShort,
                        o = e.onClosed,
                        s = e.onMinimized,
                        c = e.onFocusChange,
                        E = e.windowTooltipHeader,
                        d = e.windowTooltipBody,
                        m = e.rawTitle,
                        _ = e.shouldShowFindPlayersButton,
                        A = a()(
                            'MembersWindow_base_11',
                            n
                                ? [
                                      'MembersWindow_base__isHorizontal_06',
                                      r && 'MembersWindow_base__isHorizontal__short_13',
                                  ]
                                : 'MembersWindow_base__isVertical_93',
                        ),
                        F = a()(
                            'MembersWindow_commanderControls_00',
                            !_ && 'MembersWindow_commanderControls__center_39',
                        ),
                        D = (0, i.useCallback)(() => o(), [o]),
                        C = (0, i.useCallback)(() => s(), [s]),
                        B = (0, i.useCallback)(
                            (e) => {
                                c({ isFocused: e });
                            },
                            [c],
                        );
                    return (
                        H(L.n.ESCAPE, () => D()),
                        l().createElement(
                            I,
                            {
                                showMinimizeBtn: u,
                                title: m,
                                infoTooltipHeader: E,
                                infoTooltipBody: d,
                                onClose: D,
                                onMinimize: C,
                                onFocusChange: B,
                            },
                            l().createElement(
                                'div',
                                { className: A },
                                l().createElement(
                                    'div',
                                    { className: 'MembersWindow_platoon_11' },
                                    l().createElement(rt, null),
                                    l().createElement(De, { position: Ae.top }),
                                    l().createElement(Qt, null),
                                    l().createElement('div', { className: F }, t && l().createElement(he, null)),
                                    l().createElement(De, { position: Ae.bottom }),
                                    l().createElement(ye, null),
                                ),
                                l().createElement(De, { position: Ae.left }),
                                l().createElement(_e, {
                                    id: R.views.lobby.platoon.subViews.Chat('resId'),
                                    mixClass: 'MembersWindow_chatContainer_3e',
                                }),
                            ),
                        )
                    );
                };
                engine.whenReady.then(() => {
                    (un().render(l().createElement(tn, null), document.getElementById('root')),
                        m(R.sounds.gui_platoon_2_created()));
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
        return (__webpack_modules__[e].call(t.exports, t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], o = !0, a = 0; a < u.length; a++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[a]))
                            ? u.splice(a--, 1)
                            : ((o = !1), n < r && (r = n));
                    if (o) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, n];
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
        (() => {
            var e = { 'lobby/platoon/MembersWindow/MembersWindow': 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [o, a, s] = t,
                        i = 0;
                    if (o.some((u) => 0 !== e[u])) {
                        for (n in a) __webpack_require__.o(a, n) && (__webpack_require__.m[n] = a[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); i < o.length; i++)
                        ((r = o[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/white_tiger.vendors'], () =>
        __webpack_require__(159),
    );
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
