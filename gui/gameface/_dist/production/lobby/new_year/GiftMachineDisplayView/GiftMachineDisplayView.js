(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, u, t) => {
                (t.r(u),
                    t.d(u, { mouse: () => c, off: () => s, on: () => o, onResize: () => r, onScaleUpdated: () => i }));
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    o = (e, u) => engine.on(e, u),
                    s = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, a.R)(!0);
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
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${u}`,
                                        i = l[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(r, o),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
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
            5959: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => o,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = t(527),
                    a = t(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
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
                function a(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => a, G: () => n });
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
                t.d(u, { O: () => r });
                var n = t(5959),
                    a = t(514);
                const r = { view: t(7641), client: n, sound: a.ZP };
            },
            514: (e, u, t) => {
                t.d(u, { ZP: () => i });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    i = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            6112: (e, u, t) => {
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                t.d(u, { U: () => a });
                var n = t(2472);
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
            7641: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => R,
                        events: () => r.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => b,
                        getFontNames: () => h,
                        getScale: () => D,
                        getSize: () => m,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => f,
                        isFocused: () => g,
                        pxToRem: () => C,
                        remToPx: () => B,
                        resize: () => A,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => w,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => S,
                    }));
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    i = t(8566);
                const o = 15;
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, o);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function d(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, o);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function _(e = 'rem') {
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
                function g() {
                    return viewEnv.isFocused();
                }
                function w() {
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
                const h = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    R = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    y = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                t.d(u, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    i = 32,
                    o = 64,
                    s = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? a : i);
                        },
                        minimize() {
                            s(o);
                        },
                        move(e) {
                            s(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                let n, a;
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
                    })(a || (a = {})));
            },
            1358: (e, u, t) => {
                t.d(u, { Z: () => r });
                var n = t(3138);
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
                    addCallback(e, u, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, t, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                a.__instance = void 0;
                const r = a;
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
                t.d(u, {
                    B3: () => s,
                    Z5: () => i.Z5,
                    B0: () => o,
                    wU: () => f,
                    ry: () => D,
                    Eu: () => C,
                    SW: () => g,
                    P3: () => w,
                });
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
                const a = n;
                var r = t(1358);
                var i = t(8613);
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
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    m = t(3138);
                const A = ['args'];
                function _(e, u, t, n, a, r, i) {
                    try {
                        var o = e[r](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(n, a);
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(u, t);
                                        function i(e) {
                                            _(r, n, a, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            _(r, n, a, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, A);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    p = () => B(o.CLOSE),
                    g = () => B(o.POP_OVER, { on: !1 }),
                    w = (e, u, t, n, a = R.invalid('resId'), r) => {
                        const i = m.O.view.getViewGlobalPosition(),
                            s = t.getBoundingClientRect(),
                            l = s.x,
                            c = s.y,
                            d = s.width,
                            E = s.height,
                            A = {
                                x: m.O.view.pxToRem(l) + i.x,
                                y: m.O.view.pxToRem(c) + i.y,
                                width: m.O.view.pxToRem(d),
                                height: m.O.view.pxToRem(E),
                            };
                        B(o.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: a,
                            direction: u,
                            bbox: F(A),
                            on: !0,
                            args: r,
                        });
                    },
                    f = () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                    v = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var b = t(7572);
                const h = a.instance,
                    y = {
                        DataTracker: r.Z,
                        ViewModel: b.Z,
                        ViewEventType: o,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => B(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: g,
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: w,
                        addEscapeListener: (e) => {
                            const u = (u) => v(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            v(e, p);
                        },
                        handleViewEvent: B,
                        onBindingsReady: D,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: f,
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const a = Object.prototype.toString.call(u[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < a.length; u++) t[n].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: h,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = y;
            },
            8613: (e, u, t) => {
                t.d(u, { Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
            },
            7125: (e, u, t) => {
                var n = t(6179),
                    a = t.n(n),
                    r = t(493),
                    i = t.n(r);
                const o = (e) => {
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
                var s = t(3138),
                    l = t(3403);
                function c() {}
                function d() {
                    return !1;
                }
                console.log;
                var E = t(9174);
                function m(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return A(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? A(e, u)
                                          : void 0
                                );
                            }
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
                function A(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const _ = (e) => (0 === e ? window : window.subViews.get(e));
                const F = () => (e, u) => {
                    const t = (0, n.createContext)({});
                    return [
                        function ({ mode: r = 'real', options: i, children: o, mocks: l }) {
                            const c = (0, n.useRef)([]),
                                A = (t, n, a) => {
                                    var r;
                                    const i = (function ({
                                            initializer: e = !0,
                                            rootId: u = 0,
                                            getRoot: t = _,
                                            context: n = 'model',
                                        } = {}) {
                                            const a = new Map();
                                            function r(e, u = 0) {
                                                viewEnv.removeDataChangedCallback(e, u)
                                                    ? a.delete(e)
                                                    : console.error("Can't remove callback by id:", e);
                                            }
                                            engine.whenReady.then(() => {
                                                engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                    t.forEach((u) => {
                                                        const t = a.get(u);
                                                        void 0 !== t && t(e);
                                                    });
                                                });
                                            });
                                            const i = (e) => {
                                                const a = t(u),
                                                    r = n.split('.').reduce((e, u) => e[u], a);
                                                return 'string' != typeof e || 0 === e.length
                                                    ? r
                                                    : e.split('.').reduce((e, u) => {
                                                          const t = e[u];
                                                          return 'function' == typeof t ? t.bind(e) : t;
                                                      }, r);
                                            };
                                            return {
                                                subscribe: (t, r) => {
                                                    const o = 'string' == typeof r ? `${n}.${r}` : n,
                                                        l = s.O.view.addModelObserver(o, u, !0);
                                                    return (a.set(l, t), e && t(i(r)), l);
                                                },
                                                readByPath: i,
                                                createCallback: (e, u) => {
                                                    const t = i(u);
                                                    return (...u) => {
                                                        t(e(...u));
                                                    };
                                                },
                                                createCallbackNoArgs: (e) => {
                                                    const u = i(e);
                                                    return () => {
                                                        u();
                                                    };
                                                },
                                                dispose: function () {
                                                    for (var e, t = m(a.keys()); !(e = t()).done; ) r(e.value, u);
                                                },
                                                unsubscribe: r,
                                            };
                                        })(n),
                                        o =
                                            'real' === t
                                                ? i
                                                : Object.assign({}, i, {
                                                      readByPath:
                                                          null != (r = null == a ? void 0 : a.getter) ? r : () => {},
                                                  }),
                                        l = (e) =>
                                            'mocks' === t ? (null == a ? void 0 : a.getter(e)) : o.readByPath(e),
                                        A = (e) => c.current.push(e),
                                        F = e({
                                            mode: t,
                                            readByPath: l,
                                            externalModel: o,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const n = null != u ? u : l(e),
                                                        a = E.LO.box(n, { equals: d });
                                                    return (
                                                        'real' === t &&
                                                            o.subscribe(
                                                                (0, E.aD)((e) => a.set(e)),
                                                                e,
                                                            ),
                                                        a
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const n = null != u ? u : l(e),
                                                        a = E.LO.box(n, { equals: d });
                                                    return (
                                                        'real' === t &&
                                                            o.subscribe(
                                                                (0, E.aD)((e) => a.set(e)),
                                                                e,
                                                            ),
                                                        a
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = l(u);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, u) => ((e[u] = E.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, E.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            a[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = e,
                                                            r = Object.entries(a),
                                                            i = r.reduce(
                                                                (e, [u, t]) => ((e[t] = E.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, E.aD)((e) => {
                                                                        r.forEach(([u, t]) => {
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
                                            cleanup: A,
                                        }),
                                        D = { mode: t, model: F, externalModel: o, cleanup: A };
                                    return {
                                        model: F,
                                        controls: 'mocks' === t && a ? a.controls(D) : u(D),
                                        externalModel: o,
                                        mode: t,
                                    };
                                },
                                F = (0, n.useRef)(!1),
                                D = (0, n.useState)(r),
                                C = D[0],
                                B = D[1],
                                p = (0, n.useState)(() => A(r, i, l)),
                                g = p[0],
                                w = p[1];
                            return (
                                (0, n.useEffect)(() => {
                                    F.current ? w(A(C, i, l)) : (F.current = !0);
                                }, [l, C, i]),
                                (0, n.useEffect)(() => {
                                    B(r);
                                }, [r]),
                                (0, n.useEffect)(
                                    () => () => {
                                        (g.externalModel.dispose(), c.current.forEach((e) => e()));
                                    },
                                    [g],
                                ),
                                a().createElement(t.Provider, { value: g }, o)
                            );
                        },
                        () => (0, n.useContext)(t),
                    ];
                };
                var D = t(3946);
                let C;
                function B(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                !(function (e) {
                    ((e.Idle = 'idle'),
                        (e.Reward = 'reward'),
                        (e.RewardPrequel = 'rewardPrequel'),
                        (e.SpecialReward = 'specialReward'),
                        (e.SpecialRewardPrequel = 'specialRewardPrequel'),
                        (e.SpecialRewardPreview = 'specialRewardPreview'),
                        (e.SkipRewardPrequel = 'skipRewardPrequel'),
                        (e.SkipSpecialRewardPrequel = 'skipSpecialRewardPrequel'),
                        (e.SkipRareRewardPrequel = 'skipRareRewardPrequel'),
                        (e.RareRewardPrequel = 'rareRewardPrequel'),
                        (e.RareReward = 'rareReward'),
                        (e.Error = 'error'),
                        (e.BuyTokens = 'buyTokens'));
                })(C || (C = {}));
                const p = B;
                function g(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function w(e, u) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        const n = g(e[t]);
                        if (u(n, t, e)) return n;
                    }
                }
                function f(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let n = t;
                    for (let t = 0; t < e.length; t++) {
                        n = u(n, p(e, t), t, e);
                    }
                    return n;
                }
                (C.Reward,
                    C.RewardPrequel,
                    C.SkipRewardPrequel,
                    C.RareReward,
                    C.RareRewardPrequel,
                    C.SkipRareRewardPrequel,
                    C.SpecialReward,
                    C.SpecialRewardPrequel,
                    C.SkipSpecialRewardPrequel,
                    C.SpecialRewardPreview,
                    C.Error);
                const v = [C.RewardPrequel, C.RareRewardPrequel, C.SpecialRewardPrequel],
                    b = [C.SkipRewardPrequel, C.SkipRareRewardPrequel, C.SkipSpecialRewardPrequel],
                    h = [C.Reward, C.RareReward, C.SpecialReward, C.Error],
                    y = [C.Reward, C.RareReward, C.SpecialReward],
                    S = { type: '', value: -1 },
                    T = F()(
                        ({ observableModel: e, readByPath: u }) => {
                            const t = {
                                    root: e.object(),
                                    currentResource: E.LO.box(
                                        f(u('resources'), (e, u) => (u.value > e.value ? u : e), S).type,
                                    ),
                                    tokenCount: E.LO.box(1),
                                    tokenPrice: e.array('tokenPrice'),
                                    resources: e.array('resources'),
                                    vehiclePreview: e.object('vehiclePreview'),
                                    vehicleInfo: e.object('vehiclePreview.vehicleInfo'),
                                },
                                n = (0, D.Om)(() => {
                                    const e = t.root.get(),
                                        u = e.isMaxAtmosphereLevel,
                                        n = e.isGuestQuestsCompleted;
                                    return u && n;
                                }),
                                a = (0, D.Om)(() => {
                                    return (
                                        (e = t.resources.get()),
                                        (u = (e) => e.type),
                                        Array.isArray(e)
                                            ? e.map(u)
                                            : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n))
                                    );
                                    var e, u;
                                }),
                                r = (0, D.Om)(() => {
                                    var e;
                                    const u = w(t.tokenPrice.get(), (e) => e.type === t.currentResource.get());
                                    return (null != (e = null == u ? void 0 : u.value) ? e : 0) * t.tokenCount.get();
                                }),
                                i = (0, D.Om)(() => {
                                    var e, u;
                                    const n =
                                        null !=
                                        (e =
                                            null ==
                                            (u = w(t.resources.get(), (e) => e.type === t.currentResource.get()))
                                                ? void 0
                                                : u.value)
                                            ? e
                                            : 0;
                                    return r() <= n;
                                }),
                                o = (0, D.Om)(() => ({ resourceType: t.currentResource.get(), price: r() })),
                                s = (0, D.Om)(() => h.includes(t.root.get().machineState)),
                                l = (0, D.Om)(() => v.includes(t.root.get().machineState)),
                                c = (0, D.Om)(() => b.includes(t.root.get().machineState)),
                                d = (0, D.Om)(() => t.root.get().machineState === C.SpecialRewardPreview),
                                m = (0, D.Om)(() => {
                                    const e = t.root.get(),
                                        u = e.isCameraSwitching,
                                        n = e.isInRequest,
                                        a = e.isWaitRequest;
                                    return l() || c() || s() || d() || u || n || a;
                                }),
                                A = (0, D.Om)(() => t.root.get().tokenCount > 0),
                                _ = (0, D.Om)(
                                    () => t.root.get().isNeededShowHint && A() && y.includes(t.root.get().machineState),
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    isPurchaseAvailable: n,
                                    isCloseVisible: s,
                                    isAnimState: l,
                                    isSkippingAnimState: c,
                                    isOnSpecialReward: d,
                                    canClose: m,
                                    hasTokens: A,
                                    resourcesTypes: a,
                                    totalPrice: r,
                                    isEnoughResources: i,
                                    getLackResourcesTooltipArgs: o,
                                    isHintVisible: _,
                                },
                                constants: { MIN_TOKEN_COUNT: 1, MAX_TOKEN_COUNT: 9999 },
                            });
                        },
                        ({ externalModel: e, model: { currentResource: u, tokenCount: t, vehiclePreview: n } }) =>
                            Object.assign(
                                {
                                    goToBuyTokens: e.createCallbackNoArgs('onGoToBuyTokens'),
                                    goToIdle: e.createCallbackNoArgs('onGoToIdle'),
                                    onSkipAnimation: e.createCallbackNoArgs('onSkipAnimation'),
                                    goToChallengeGuest: e.createCallbackNoArgs('onGoToChallengeGuest'),
                                    goToVillage: e.createCallbackNoArgs('onGoToVillage'),
                                },
                                (function (e) {
                                    const u = {};
                                    for (const t in e)
                                        if (Object.prototype.hasOwnProperty.call(e, t)) {
                                            const n = e[t];
                                            u[t] = (0, E.aD)(n);
                                        }
                                    return u;
                                })({ changeResourceType: (e) => u.set(e), changeTokenCount: (e) => t.set(e) }),
                                {
                                    buyTokens: e.createCallback(
                                        () => ({ resource: u.get(), amount: t.get() }),
                                        'onBuyTokens',
                                    ),
                                    onMoveSpace: e.createCallback((e) => e, 'onMoveSpace'),
                                    onMouseOver3dScene: e.createCallback((e) => e, 'onMouseOver3dScene'),
                                    backFromVehiclePreview: e.createCallbackNoArgs('onBackFromVehiclePreview'),
                                    goToHangar: e.createCallback(
                                        () => ({ vehIntCD: n.get().vehIntCD }),
                                        'onGoToHangar',
                                    ),
                                    hintClose: e.createCallbackNoArgs('onHintClose'),
                                },
                            ),
                    ),
                    P =
                        (T[0],
                        T[1],
                        F()(
                            ({ observableModel: e }) => {
                                const u = { root: e.object(), reward: e.object('reward') },
                                    t = (0, D.Om)(() => u.root.get().machineState),
                                    n = (0, D.Om)(() => {
                                        const e = u.reward.get();
                                        return Object.assign({}, e, { value: e.value.replace('x', '') });
                                    });
                                return Object.assign({}, u, {
                                    computes: {
                                        machineState: t,
                                        getReward: n,
                                        hasCoins: (0, D.Om)(() => u.root.get().tokenCount > 0),
                                        isAnimationRestart: (0, D.Om)(() => v.includes(t())),
                                    },
                                });
                            },
                            ({ externalModel: e }) => ({
                                onRewardAnimationEnd: e.createCallbackNoArgs('onRewardAnimationEnd'),
                            }),
                        )),
                    O = P[0],
                    k = P[1];
                var x = t(6112);
                const I = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    N = [
                        'src',
                        'className',
                        'autoplay',
                        'style',
                        'loop',
                        'isPrebufferKeyframes',
                        'keyframesNameConfig',
                        'onClick',
                    ];
                function L() {
                    return (
                        (L = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        L.apply(null, arguments)
                    );
                }
                const M = (0, n.forwardRef)(function (e, u) {
                        let t = e.src,
                            r = e.className,
                            i = e.autoplay,
                            l = void 0 !== i && i,
                            d = e.style,
                            E = e.loop,
                            m = void 0 !== E && E,
                            A = e.isPrebufferKeyframes,
                            _ = e.keyframesNameConfig,
                            F = e.onClick,
                            D = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, N);
                        const C = u,
                            B = (0, n.useRef)(null);
                        return (
                            I(() =>
                                s.O.view.events.onDisplayChanged((e, u) => {
                                    var t, n;
                                    u === x.W.hidden && (null == (t = B.current) || t.pause());
                                    u === x.W.shown && (null == (n = B.current) || n.play());
                                }),
                            ),
                            (0, n.useEffect)(
                                () =>
                                    o(() => {
                                        const e = B.current;
                                        if (!C || !e || !A)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const u = e.cohGetKeyframeTimestamps();
                                        u.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              u.map((u) => {
                                                  null == e || e.cohPrebufferKeyframe(u);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [A, C],
                            ),
                            (0, n.useEffect)(() => {
                                if (C && B.current) {
                                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: c },
                                        u = () => {
                                            let u = 0;
                                            const t = (function (e) {
                                                    let u = 0;
                                                    return [
                                                        function t() {
                                                            (e(), (u = requestAnimationFrame(t)));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(u);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (B.current) {
                                                        const t = B.current,
                                                            n = t.currentTime,
                                                            a = t.duration;
                                                        if (
                                                            (u !== n &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: n, duration: a }),
                                                                ),
                                                                (u = n)),
                                                            B.current.paused || !C || !A)
                                                        )
                                                            return;
                                                        const r = B.current.cohGetKeyframeTimestamps();
                                                        r.forEach((u, t) => {
                                                            n > r[t] - 0.02 &&
                                                                n < r[t] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const n = Object.keys(null != _ ? _ : {})[t];
                                                                    return e({
                                                                        time: u,
                                                                        name: `${_ ? n : `Point_${t}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                n = t[0],
                                                a = t[1];
                                            return (n(), a);
                                        };
                                    e.changeTimeLoop = u();
                                    const t = (u) => (
                                            e.changeTimeHandlers.push(u),
                                            () => {
                                                const t = e.changeTimeHandlers,
                                                    n = t.indexOf(u);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(n, 1);
                                            }
                                        ),
                                        n = (u) => (
                                            e.changeKeyframeHandlers.push(u),
                                            () => {
                                                const t = e.changeKeyframeHandlers,
                                                    n = t.indexOf(u);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : t.splice(n, 1);
                                            }
                                        ),
                                        a = () => {
                                            var e;
                                            return null == (e = B.current) ? void 0 : e.currentTime;
                                        },
                                        r = () => {
                                            var e;
                                            return null == (e = B.current) ? void 0 : e.duration;
                                        },
                                        i = (e) => {
                                            var u, t, n;
                                            B.current &&
                                                (B.current.currentTime =
                                                    ((u = 0),
                                                    (t = B.current.duration),
                                                    (n = e) < u ? u : n > t ? t : n));
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = B.current) ? void 0 : e.play();
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = B.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            (s(), i(0));
                                        },
                                        d = () => {
                                            var e, u;
                                            return null !=
                                                (e = null == (u = B.current) ? void 0 : u.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        E = (e) => {
                                            (i(e), o());
                                        },
                                        m = (e) => {
                                            (i(e), s());
                                        },
                                        F = () => {
                                            ((e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop());
                                        },
                                        D = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = B.current) || t.addEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = B.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        },
                                        p = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = B.current) || t.removeEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = B.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        };
                                    return (
                                        (C.current = {
                                            on: D,
                                            off: p,
                                            play: o,
                                            pause: s,
                                            stop: l,
                                            cleanup: F,
                                            getCurrentTime: a,
                                            getDuration: r,
                                            getCachedKeyframes: d,
                                            goToAndPlay: E,
                                            goToAndStop: m,
                                            setCurrentTime: i,
                                            domRef: B.current,
                                            onChangeTime: t,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            (F(), (C.current = null));
                                        }
                                    );
                                }
                            }, [_, C, A]),
                            (0, n.useEffect)(() => {
                                B.current && l && B.current.play();
                            }, [l, m]),
                            (0, n.useEffect)(() => {
                                if (B.current)
                                    return () => {
                                        B.current && B.current.pause();
                                    };
                            }, []),
                            a().createElement(
                                'video',
                                L({ src: t, className: r, style: d, loop: m, ref: B, onClick: F }, D),
                            )
                        );
                    }),
                    U = (0, n.memo)(M),
                    G = Math.pow(255, 3),
                    q = (e) => {
                        I(() => {
                            const u = viewEnv.enterUniprofRegion(
                                `FE: ${e}`,
                                ((e) => {
                                    const u = e.split('').reduce((e, u) => 0 | ((e << 5) - e + u.charCodeAt(0)), 0);
                                    return Math.floor(Math.abs(u % G));
                                })(e),
                            );
                            return () => {
                                viewEnv.exitUniprofRegion(u);
                            };
                        });
                    };
                var H = t(6483),
                    W = t.n(H);
                const V = 'Balance_base_e9',
                    $ = 'Balance_coin_18',
                    z = 'Balance_count_77',
                    Y = 'Balance_count__zero_c2',
                    j = (0, l.Pi)(() => {
                        const e = k().model.root.get().tokenCount;
                        return a().createElement(
                            'div',
                            { className: V },
                            a().createElement('div', { className: $ }),
                            a().createElement('div', { className: W()(z, 0 === e && Y) }, e),
                        );
                    }),
                    X = 'Error_base_8c',
                    K = 'Error_video_87',
                    Q = 'Error_balance_47',
                    Z = 'Error_border_12',
                    J = 'Error_secondBorder_e4',
                    ee = 'Error_inner_e9',
                    ue = 'Error_label_42',
                    te = 'Error_content_d6',
                    ne = 'Error_text_11',
                    ae = R.strings.ny.giftMachine,
                    re = () => (
                        q('Error'),
                        a().createElement(
                            'div',
                            { className: X },
                            a().createElement(U, {
                                className: K,
                                src: R.videos.new_year.gift_machine.error(),
                                loop: !0,
                                autoplay: !0,
                            }),
                            a().createElement('div', { className: Q }, a().createElement(j, null)),
                            a().createElement(
                                'div',
                                { className: te },
                                a().createElement('div', { className: ue }, ae.error()),
                                a().createElement(
                                    'div',
                                    { className: ee },
                                    a().createElement('div', { className: Z }),
                                    a().createElement('div', { className: J }),
                                    a().createElement('div', { className: ne }, ae.errorType()),
                                    a().createElement('div', { className: ne }, ae.retry()),
                                ),
                            ),
                        )
                    ),
                    ie = {
                        linear: (e) => e,
                        easeInQuad: (e) => e * e,
                        easeOutQuad: (e) => e * (2 - e),
                        easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1),
                        easeInCubic: (e) => e * e * e,
                        easeOutCubic: (e) => --e * e * e + 1,
                        easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                        easeInQuart: (e) => e * e * e * e,
                        easeOutQuart: (e) => 1 - --e * e * e * e,
                        easeInOutQuart: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e),
                        easeInQuint: (e) => e * e * e * e * e,
                        easeOutQuint: (e) => 1 + --e * e * e * e * e,
                        easeInOutQuint: (e) => (e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e),
                        easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
                        easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                        easeInOutCirc(e) {
                            const u = Math.sqrt,
                                t = Math.pow;
                            return e < 0.5 ? (1 - u(1 - t(2 * e, 2))) / 2 : (u(1 - t(-2 * e + 2, 2)) + 1) / 2;
                        },
                        easeOutBack(e) {
                            const u = 1.70158;
                            return 1 + 2.70158 * Math.pow(e - 1, 3) + u * Math.pow(e - 1, 2);
                        },
                        bezier: (e, u, t, n) => (a) =>
                            (1 - a) * (1 - a) * (1 - a) * e +
                            3 * (1 - a) * (1 - a) * a * u +
                            3 * (1 - a) * a * a * t +
                            a * a * a * n,
                    };
                var oe = t(7030);
                const se = 'GiftsText_base_58',
                    le = { duration: 800, easing: ie.easeInOutCubic },
                    ce = ({ isVisible: e, text: u }) => {
                        const t = (0, oe.useSpring)(() => ({
                                config: le,
                                from: { opacity: 0, transform: 'translateY(20rem)' },
                            })),
                            r = t[0],
                            i = t[1];
                        return (
                            (0, n.useEffect)(() => {
                                e
                                    ? i.start({
                                          from: { opacity: 0, transform: 'translateY(20rem)' },
                                          to: { opacity: 1, transform: 'translateY(0rem)' },
                                          delay: 1400,
                                      })
                                    : i.start({ to: { opacity: 0 }, delay: 0 });
                            }, [e, i]),
                            a().createElement(oe.animated.div, { style: r, className: se }, u)
                        );
                    },
                    de = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(n));
                        };
                    },
                    Ee = (e, u = []) => {
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
                    },
                    me = [];
                function Ae(e) {
                    const u = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, u.current)(...e), me)
                    );
                }
                function _e(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const Fe = {
                    playHighlight() {
                        _e('highlight');
                    },
                    playClick() {
                        _e('play');
                    },
                    playYes() {
                        _e('yes1');
                    },
                };
                let De, Ce;
                (!(function (e) {
                    ((e.Logo = 'logo'),
                        (e.Tokens = 'tokens'),
                        (e.Button = 'button'),
                        (e.Gifts = 'gifts'),
                        (e.End = 'end'));
                })(De || (De = {})),
                    (function (e) {
                        ((e.VideoStart = 'videoStart'),
                            (e.RewardAppear = 'rewardAppear'),
                            (e.VideoHide = 'videoHide'),
                            (e.VideoEnd = 'videoEnd'));
                    })(Ce || (Ce = {})));
                const Be = (e, u) => {
                        (0, n.useEffect)(() => {
                            const t = e.current;
                            if (t) {
                                const e = () => (null == u ? void 0 : u());
                                return (
                                    t.on('playing', e),
                                    () => {
                                        t.off('playing', e);
                                    }
                                );
                            }
                        }, [u, e]);
                    },
                    pe = (e) => {
                        const u = (0, n.useState)(0),
                            t = u[0],
                            a = u[1];
                        return (
                            (0, n.useEffect)(() => {
                                var u;
                                null == (u = e.current) ||
                                    u.onChangeTime((e) => {
                                        a(e.currentTime);
                                    });
                            }, [e]),
                            t
                        );
                    },
                    ge = (e, u, t) => {
                        const a = pe(e),
                            r = (0, n.useState)(0),
                            i = r[0],
                            o = r[1],
                            s = (0, n.useRef)(0);
                        (0, n.useEffect)(() => {
                            const e = u[i];
                            a >= s.current + e.duration && (o(i + 1), (s.current += e.duration));
                        }, [a, i, u]);
                        const l = Ae(() => {
                            t && _e(t);
                        });
                        Be(e, l);
                        const c = Ee(
                            () =>
                                de(() => {
                                    (o(0), (s.current = 0), l());
                                }, 0),
                            [l],
                        );
                        return (
                            (0, n.useEffect)(() => {
                                const u = e.current;
                                if (u)
                                    return (
                                        u.on('seeked', c),
                                        () => {
                                            u.off('seeked', c);
                                        }
                                    );
                            }, [c, e]),
                            u[i].name
                        );
                    },
                    we = ({
                        playerRef: e,
                        isAnimationRestart: u,
                        rewardAppearTime: t,
                        effectsPlayerRef: a,
                        sound: r,
                    }) => {
                        const i = (0, n.useState)(Ce.VideoStart),
                            o = i[0],
                            s = i[1],
                            l = Ae(() => {
                                r && _e(r);
                            });
                        (Be(e, l),
                            (0, n.useEffect)(() => {
                                var u, t;
                                if (o === Ce.VideoStart)
                                    (null == (u = e.current) || u.stop(), null == (t = e.current) || t.play());
                                else if (o === Ce.RewardAppear) {
                                    var n, r;
                                    (null == a || null == (n = a.current) || n.stop(),
                                        null == a || null == (r = a.current) || r.play());
                                } else if (o === Ce.VideoEnd) {
                                    var i;
                                    null == a || null == (i = a.current) || i.pause();
                                }
                            }, [o, a, e]));
                        const c = pe(e);
                        return (
                            (0, n.useEffect)(() => {
                                c >= t && s(Ce.RewardAppear);
                            }, [c, t, s]),
                            (0, n.useEffect)(() => {
                                u && s(Ce.VideoStart);
                            }, [u]),
                            [o, s]
                        );
                    },
                    fe = 'IdleAnimation_base_84',
                    ve = 'IdleAnimation_video_be',
                    be = 'IdleAnimation_content_cb',
                    he = 'IdleAnimation_tokensText_32',
                    Re = 'IdleAnimation_giftsText_d4',
                    ye = 'IdleAnimation_balance_cf',
                    Se = 'TokensText_base_b4',
                    Te = { duration: 600, easing: ie.easeInOutCubic },
                    Pe = R.strings.ny.giftMachine.idleAnimation,
                    Oe = ({ isVisible: e }) => {
                        const u = (0, oe.useSpring)(() => ({
                                config: Te,
                                from: { opacity: 0, transform: 'translateY(0)' },
                            })),
                            t = u[0],
                            r = u[1];
                        return (
                            (0, n.useEffect)(() => {
                                e
                                    ? r.start({ to: { opacity: 1, transform: 'translateY(0)' }, delay: 1400 })
                                    : r.start({ to: { opacity: 0, transform: 'translateY(20rem)' }, delay: 200 });
                            }, [e, r]),
                            a().createElement(oe.animated.div, { style: t, className: Se }, Pe.tokens())
                        );
                    },
                    ke = [
                        { name: De.Logo, duration: 2 },
                        { name: De.Tokens, duration: 5.5 },
                        { name: De.Gifts, duration: 5 },
                        { name: De.End, duration: 5 },
                    ],
                    xe = R.strings.ny.giftMachine.idleAnimation,
                    Ie = (0, n.memo)(function () {
                        const e = (0, n.useRef)(null),
                            u = ge(e, ke, R.sounds.hangar_newyear_vendor_idle());
                        return (
                            q('IdleAnimation'),
                            a().createElement(
                                'div',
                                { className: fe },
                                a().createElement(U, {
                                    src: R.videos.new_year.gift_machine.idle(),
                                    className: ve,
                                    autoplay: !0,
                                    loop: !0,
                                    ref: e,
                                }),
                                a().createElement(
                                    'div',
                                    { className: be },
                                    a().createElement(
                                        'div',
                                        { className: he },
                                        a().createElement(Oe, { isVisible: u === De.Tokens }),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: Re },
                                        a().createElement(ce, { isVisible: u === De.Gifts, text: xe.gifts() }),
                                    ),
                                    a().createElement('div', { className: ye }, a().createElement(j, null)),
                                ),
                            )
                        );
                    }),
                    Ne = 'Balance_base_ae',
                    Le = 'Balance_coin_3a',
                    Me = 'Balance_count_f7',
                    Ue = 'Balance_count__zero_a8',
                    Ge = { duration: 600, easing: ie.easeInOutCubic },
                    qe = (0, l.Pi)(({ isVisible: e }) => {
                        const u = k().model.root.get().tokenCount,
                            t = (0, oe.useSpring)(() => ({ config: Ge, from: { opacity: 0 } })),
                            r = t[0],
                            i = t[1];
                        return (
                            (0, n.useEffect)(() => {
                                e
                                    ? i.start({ to: { opacity: 1 }, delay: 250 })
                                    : i.start({ to: { opacity: 0 }, delay: 350 });
                            }, [e, i]),
                            a().createElement(
                                oe.animated.div,
                                { style: r, className: Ne },
                                a().createElement('div', { className: Le }),
                                a().createElement('div', { className: W()(Me, 0 === u && Ue) }, u),
                            )
                        );
                    }),
                    He = 'ButtonText_base_9a',
                    We = { duration: 800, easing: ie.easeInOutCubic },
                    Ve = R.strings.ny.giftMachine.idleAnimationWithCoins,
                    $e = ({ isVisible: e }) => {
                        const u = (0, oe.useSpring)(() => ({
                                config: We,
                                from: { opacity: 0, transform: 'translateY(20rem)' },
                            })),
                            t = u[0],
                            r = u[1];
                        return (
                            (0, n.useEffect)(() => {
                                e
                                    ? r.start({
                                          from: { opacity: 0, transform: 'translateY(20rem)' },
                                          to: { opacity: 1, transform: 'translateY(0)' },
                                          delay: 1200,
                                      })
                                    : r.start({ to: { opacity: 0 }, delay: 0 });
                            }, [e, r]),
                            a().createElement(oe.animated.div, { style: t, className: He }, Ve.button())
                        );
                    },
                    ze = {
                        base: 'IdleAnimationWithCoins_base_a2',
                        video: 'IdleAnimationWithCoins_video_36',
                        content: 'IdleAnimationWithCoins_content_75',
                        tokens: 'IdleAnimationWithCoins_tokens_90',
                        balance: 'IdleAnimationWithCoins_balance_55',
                        pressButtonText: 'IdleAnimationWithCoins_pressButtonText_e4',
                        rewardAppear: 'IdleAnimationWithCoins_rewardAppear_5e',
                        specialRewardAppear: 'IdleAnimationWithCoins_specialRewardAppear_36',
                        fadeOut: 'IdleAnimationWithCoins_fadeOut_32',
                        fadeIn: 'IdleAnimationWithCoins_fadeIn_eb',
                    },
                    Ye = 'Tokens_base_7e',
                    je = 'Tokens_count_e7',
                    Xe = { duration: 600, easing: ie.easeInOutCubic },
                    Ke = (0, l.Pi)(({ isVisible: e }) => {
                        const u = k().model.root.get().tokenCount,
                            t = (0, oe.useSpring)(() => ({
                                config: Xe,
                                from: { opacity: 0, transform: 'translateY(15rem)' },
                            })),
                            r = t[0],
                            i = t[1];
                        return (
                            (0, n.useEffect)(() => {
                                e
                                    ? i.start({ to: { opacity: 1, transform: 'translateY(15rem)' }, delay: 1200 })
                                    : i.start({ to: { opacity: 0, transform: 'translateY(35rem)' }, delay: 0 });
                            }, [i, e]),
                            a().createElement(
                                'div',
                                { className: Ye },
                                a().createElement(oe.animated.div, { style: r, className: je }, u),
                            )
                        );
                    }),
                    Qe = [
                        { name: De.Logo, duration: 2.2 },
                        { name: De.Tokens, duration: 5.6 },
                        { name: De.Button, duration: 5 },
                        { name: De.End, duration: 5 },
                    ],
                    Ze = (0, n.memo)(function () {
                        const e = (0, n.useRef)(null),
                            u = ge(e, Qe, R.sounds.hangar_newyear_vendor_idle_has_coin());
                        return (
                            q('IdleAnimationWithCoins'),
                            a().createElement(
                                'div',
                                { className: W()(ze.base, ze[`base__${u}`]) },
                                a().createElement(U, {
                                    src: R.videos.new_year.gift_machine.idle_has_coins(),
                                    className: ze.video,
                                    autoplay: !0,
                                    loop: !0,
                                    ref: e,
                                }),
                                a().createElement(
                                    'div',
                                    { className: ze.content },
                                    a().createElement(
                                        'div',
                                        { className: ze.tokens },
                                        a().createElement(Ke, { isVisible: u === De.Tokens }),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: ze.pressButtonText },
                                        a().createElement($e, { isVisible: u === De.Button }),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: ze.balance },
                                    a().createElement(qe, { isVisible: !0 }),
                                ),
                            )
                        );
                    });
                var Je = t(1281);
                let eu;
                function uu(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function tu(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                function nu(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(eu || (eu = {}));
                const au = (e) => e.replace(/&nbsp;/g, ' '),
                    ru = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    iu = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    ou = (e, u, t = eu.left) => e.split(u).reduce(t === eu.left ? ru : iu, []),
                    su = (() => {
                        const e = new RegExp(
                            /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                .source +
                                '|' +
                                /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                    .source +
                                '|' +
                                /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source +
                                '|' +
                                /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source,
                            'gum',
                        );
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    lu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    cu = (e, u = eu.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (lu.includes(t)) return su(e);
                        if ('ja' === t) {
                            return (0, Je.D4)()
                                .parse(e)
                                .map((e) => au(e));
                        }
                        return ((e, u = eu.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = au(e);
                            return (ou(a, /( )/, u).forEach((e) => (t = t.concat(ou(e, n, eu.left)))), t);
                        })(e, u);
                    };
                let du, Eu, mu, Au, _u, Fu, Du, Cu;
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
                        (e.Entitlements = 'entitlements'),
                        (e.PremiumUniversal = 'premium_universal'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Crystal = 'crystal'),
                        (e.FreeXp = 'freeXP'),
                        (e.Premium = 'premium'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.BattlePassPoints = 'battlePassPoints'),
                        (e.BattlePassSelectToken = 'battlePassSelectToken'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.NewYearGuestD = 'ny_dog'),
                        (e.EquipCoin = 'equipCoin'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.LootBox = 'lootBox'),
                        (e.BrCoin = 'brcoin'));
                })(du || (du = {})),
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
                    })(Eu || (Eu = {})),
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
                    })(mu || (mu = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Au || (Au = {})),
                    (function (e) {
                        ((e.BATTLE_BOOSTER = 'battleBooster'),
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
                    })(_u || (_u = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Fu || (Fu = {})),
                    (function (e) {
                        ((e.BATTLE_BOOSTER = 'battleBooster'),
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
                    })(Du || (Du = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(Cu || (Cu = {})));
                var Bu = t(9916);
                class pu extends a().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = Bu.B3.GOLD;
                        else e = Bu.B3.INTEGRAL;
                        const u = Bu.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                pu.defaultProps = { format: 'integral' };
                const gu = [
                        du.Items,
                        du.Equipment,
                        du.Xp,
                        du.XpFactor,
                        du.Blueprints,
                        du.BlueprintsAny,
                        du.Goodies,
                        du.Berths,
                        du.Slots,
                        du.Tokens,
                        du.CrewSkins,
                        du.CrewBooks,
                        du.Customizations,
                        du.CreditsFactor,
                        du.TankmenXp,
                        du.TankmenXpFactor,
                        du.FreeXpFactor,
                        du.BattleToken,
                        du.Entitlements,
                        du.PremiumUniversal,
                        du.NaturalCover,
                        du.BpCoin,
                        du.BattlePassSelectToken,
                        du.BattlaPassFinalAchievement,
                        du.BattleBadge,
                        du.BonusX5,
                        du.CrewBonusX3,
                        du.NewYearInvoice,
                        du.EpicSelectToken,
                        du.Comp7TokenWeeklyReward,
                        du.DeluxeGift,
                        du.BattleBoosterGift,
                        du.OptionalDevice,
                    ],
                    wu = [du.Gold, du.Credits, du.Crystal, du.FreeXp],
                    fu = [du.BattlePassPoints, du.EquipCoin],
                    vu = [du.PremiumPlus, du.Premium],
                    bu = ['engravings', 'backgrounds'],
                    hu = ['engraving', 'background'],
                    Ru = (e, u = mu.Small) => {
                        const t = e.name,
                            n = e.type,
                            a = e.value,
                            r = e.icon,
                            i = e.item,
                            o = e.dogTagType,
                            s = ((e) => {
                                switch (e) {
                                    case mu.S600x450:
                                        return 'c_600x450';
                                    case mu.S400x300:
                                        return 'c_400x300';
                                    case mu.S296x222:
                                        return 'c_296x222';
                                    case mu.S232x174:
                                        return 'c_232x174';
                                    case mu.Big:
                                        return 'c_80x80';
                                    case mu.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${r}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}`;
                            case 'entitlements':
                                return 'big' === u
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${r}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = bu[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            r = a.$dyn(t);
                                        return r ? `${r}` : `${a.$dyn(hu[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, u, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${s}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${s}.${r}`;
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
                            case 'premiumTank_rent':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles_rent`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${s}.${r}`;
                            case 'newYearSlot':
                                return `R.images.gui.maps.icons.newYear.rewards.${u}.slot`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    yu = [mu.Small, mu.Big],
                    Su = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case Au.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case Au.CURRENCY:
                            case Au.NUMBER:
                                return a().createElement(pu, { format: 'integral', value: Number(e) });
                            case Au.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
                let Tu, Pu, Ou, ku, xu, Iu, Nu;
                (!(function (e) {
                    ((e.Undefined = 'undefined'),
                        (e.NewYear = 'NewYear'),
                        (e.Christmas = 'Christmas'),
                        (e.Fairytale = 'Fairytale'),
                        (e.Oriental = 'Oriental'),
                        (e.Soviet = 'soviet'),
                        (e.TraditionalWestern = 'traditionalWestern'),
                        (e.ModernWestern = 'modernWestern'),
                        (e.Asian = 'asian'),
                        (e.Mega = 'Mega'),
                        (e.GiftSystem = 'GiftSystem'),
                        (e.Cat = 'Cat'),
                        (e.Atm = 'Atm'),
                        (e.Gift2 = 'Gift2'),
                        (e.Bro = 'Bro'),
                        (e.Dog = 'Dog'),
                        (e.Surprise = 'Surprise'));
                })(Tu || (Tu = {})),
                    (function (e) {
                        ((e.Crystal = 'ny_crystal'),
                            (e.Emerald = 'ny_emerald'),
                            (e.Amber = 'ny_amber'),
                            (e.Iron = 'ny_iron'),
                            (e.AnyResource = 'anyResource'));
                    })(Pu || (Pu = {})),
                    (function (e) {
                        ((e.XP = 'xpFactor'),
                            (e.TankmenXP = 'tankmenXPFactor'),
                            (e.FreeXp = 'freeXPFactor'),
                            (e.Credits = 'creditsFactor'));
                    })(Ou || (Ou = {})),
                    (function (e) {
                        ((e.NewYear = 'NewYear'),
                            (e.Christmas = 'Christmas'),
                            (e.Fairytale = 'Fairytale'),
                            (e.Oriental = 'Oriental'));
                    })(ku || (ku = {})),
                    (function (e) {
                        ((e.Level1 = 'level1'), (e.Level2 = 'level2'), (e.Level3 = 'level3'), (e.Level4 = 'level4'));
                    })(xu || (xu = {})),
                    (function (e) {
                        ((e.Zero = 'zero'), (e.Number = 'number'), (e.Default = 'default'));
                    })(Iu || (Iu = {})),
                    (function (e) {
                        ((e.Undefined = 'undefined'),
                            (e.ToEvent = 'toEvent'),
                            (e.ToGuestD = 'toGuestD'),
                            (e.ToGuestC = 'toGuestC'),
                            (e.ToMarkertplace = 'toMarkertplace'),
                            (e.ToGiftmachine = 'toGiftmachine'),
                            (e.ToRewards = 'toRewards'));
                    })(Nu || (Nu = {})));
                let Lu, Mu, Uu, Gu, qu;
                (!(function (e) {
                    ((e.Small = 'small'),
                        (e.Big = 'big'),
                        (e.S180x135 = 's180x135'),
                        (e.S232x174 = 's232x174'),
                        (e.S296x222 = 's296x222'),
                        (e.S360x270 = 's360x270'),
                        (e.S400x300 = 's400x300'),
                        (e.S600x450 = 's600x450'));
                })(Lu || (Lu = {})),
                    (function (e) {
                        ((e.None = 'noAnimation'),
                            (e.Default = 'defaultAnimation'),
                            (e.OnlyButton = 'onlyButtonAnimation'),
                            (e.OnlyText = 'onlyTextAnimation'));
                    })(Mu || (Mu = {})),
                    (function (e) {
                        ((e.Default = 'default'), (e.Big = 'Big'));
                    })(Uu || (Uu = {})),
                    (function (e) {
                        ((e.GiftMachineToken = 'battleToken'),
                            (e.Tman = 'tmanToken'),
                            (e.AchievementReward = 'dossier_achievement'),
                            (e.Customizations = 'customizations'),
                            (e.VariadicDiscount = 'variadicDiscount'),
                            (e.AddcEconomicBonuses = 'addcEconomicBonuses'),
                            (e.Vehicles = 'vehicles'),
                            (e.MarketplaceToken = 'ny_marketplace'),
                            (e.RandomBooklet = 'randomNyBooklet'),
                            (e.RandomGuide = 'randomNyGuide'),
                            (e.RandomDecoration = 'randomNyToy'),
                            (e.RandomInstruction = 'randomNyInstruction'),
                            (e.RandomCrewInstruction = 'randomNyCrewInstruction'),
                            (e.EquipCoin = 'equipCoin'));
                    })(Gu || (Gu = {})),
                    (function (e) {
                        ((e.CelebrityAction = 'questTokenAnim'),
                            (e.Story = 'questTokenStory'),
                            (e.Decoration = 'questTokenDecoration'));
                    })(qu || (qu = {})));
                const Hu = ['ko', 'no'],
                    Wu = R.strings.settings.LANGUAGE_CODE(),
                    Vu = [
                        Gu.Tman,
                        Gu.GiftMachineToken,
                        Gu.AddcEconomicBonuses,
                        Gu.AchievementReward,
                        Gu.Vehicles,
                        Gu.EquipCoin,
                    ],
                    $u = [qu.CelebrityAction, qu.Story, qu.Decoration],
                    zu = (qu.CelebrityAction, qu.Story, [Gu.Vehicles, Gu.AchievementReward]),
                    Yu =
                        (Gu.RandomBooklet,
                        Gu.RandomGuide,
                        Gu.RandomDecoration,
                        Gu.RandomInstruction,
                        Gu.RandomCrewInstruction,
                        [du.Credits, du.Gold, du.FreeXp]),
                    ju = (Pu.Iron, Pu.Crystal, Pu.Emerald, Pu.Amber, (e) => e === du.Vehicles),
                    Xu = (e) => Yu.includes(e),
                    Ku = (e) => e === du.EquipCoin,
                    Qu = (e, u) => {
                        const t = 'R.images.gui.maps.icons';
                        return `${e === Gu.AddcEconomicBonuses || e === du.EquipCoin ? `${t}.newYear.rewards` : e === Gu.AchievementReward ? `${t}.achievement` : e === Gu.Vehicles ? 'R.images.gui.maps.shop.vehicles' : e === du.CrewBooks ? 'R.images.gui.maps.icons.crewBooks.books' : `${t}.quests.bonuses`}.${(() => {
                            if (e === du.EquipCoin) return u;
                            switch (u) {
                                case Lu.Small:
                                case Lu.Big:
                                    return 'big';
                                default:
                                    return ((t = e), zu.includes(t) ? u.replace('s', 'c_') : u);
                            }
                            var t;
                        })()}`;
                    },
                    Zu = [Lu.S360x270, Lu.S400x300, Lu.S600x450],
                    Ju = (e, u, t) => {
                        const n = e.name,
                            a = Zu.includes(u) || ((e) => Vu.includes(e))(n);
                        if (a) {
                            const a = Qu(n, u),
                                r = (({ name: e, icon: u, bigIcon: t, userName: n }) => {
                                    switch (e) {
                                        case Gu.Tman:
                                            return t;
                                        case Gu.Customizations:
                                            return u;
                                        case Gu.Vehicles:
                                            return nu(n);
                                        default:
                                            return u || e;
                                    }
                                })(e);
                            '' === r && console.warn('empty icon');
                            return `${a}.${r}${t ? '_pixelated' : ''}`;
                        }
                        return Ru(e, u.toString());
                    },
                    et = (e) => {
                        switch (e) {
                            case Gu.Tman:
                            case Gu.GiftMachineToken:
                            case Gu.AddcEconomicBonuses:
                            case Gu.RandomBooklet:
                            case Gu.RandomGuide:
                            case Gu.RandomDecoration:
                            case Gu.RandomInstruction:
                            case Gu.RandomCrewInstruction:
                                return Au.MULTI;
                            default:
                                return (
                                    (u = e),
                                    gu.includes(u)
                                        ? Au.MULTI
                                        : wu.includes(u)
                                          ? Au.CURRENCY
                                          : fu.includes(u)
                                            ? Au.NUMBER
                                            : vu.includes(u)
                                              ? Au.PREMIUM_PLUS
                                              : Au.STRING
                                );
                        }
                        var u;
                    },
                    ut = () => {},
                    tt = (e, u, t) =>
                        u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                            ? (u.extraLargeHeight && t.extraLarge) ||
                              (u.largeHeight && t.large) ||
                              (u.mediumHeight && t.medium) ||
                              (u.smallHeight && t.small) ||
                              (u.extraSmallHeight && t.extraSmall)
                                ? e
                                : null
                            : e;
                var nt;
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
                })(nt || (nt = {}));
                const at = s.O.client.getSize('rem'),
                    rt = at.width,
                    it = at.height,
                    ot = Object.assign(
                        { width: rt, height: it },
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
                                a = (function (e, u) {
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
                        })(rt, it, {
                            extraLarge: { weight: 4, width: 2560, height: 1440 },
                            large: { weight: 3, width: 1920, height: 1080 },
                            medium: { weight: 2, width: 1600, height: 900 },
                            small: { weight: 1, width: 1366, height: 768 },
                            extraSmall: { weight: 0, width: 1024, height: 768 },
                        }),
                    ),
                    st = (0, n.createContext)(ot),
                    lt = ['children'];
                const ct = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, lt);
                    const a = (0, n.useContext)(st),
                        r = a.extraLarge,
                        i = a.large,
                        o = a.medium,
                        s = a.small,
                        l = a.extraSmall,
                        c = a.extraLargeWidth,
                        d = a.largeWidth,
                        E = a.mediumWidth,
                        m = a.smallWidth,
                        A = a.extraSmallWidth,
                        _ = a.extraLargeHeight,
                        F = a.largeHeight,
                        D = a.mediumHeight,
                        C = a.smallHeight,
                        B = a.extraSmallHeight,
                        p = { extraLarge: _, large: F, medium: D, small: C, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && i) return u;
                        if (t.medium && o) return u;
                        if (t.small && s) return u;
                        if (t.extraSmall && l) return u;
                    } else {
                        if (t.extraLargeWidth && c) return tt(u, t, p);
                        if (t.largeWidth && d) return tt(u, t, p);
                        if (t.mediumWidth && E) return tt(u, t, p);
                        if (t.smallWidth && m) return tt(u, t, p);
                        if (t.extraSmallWidth && A) return tt(u, t, p);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && _) return u;
                            if (t.largeHeight && F) return u;
                            if (t.mediumHeight && D) return u;
                            if (t.smallHeight && C) return u;
                            if (t.extraSmallHeight && B) return u;
                        }
                    }
                    return null;
                };
                ct.defaultProps = {
                    extraLarge: !1,
                    large: !1,
                    medium: !1,
                    small: !1,
                    extraSmall: !1,
                    extraLargeWidth: !1,
                    largeWidth: !1,
                    mediumWidth: !1,
                    smallWidth: !1,
                    extraSmallWidth: !1,
                    extraLargeHeight: !1,
                    largeHeight: !1,
                    mediumHeight: !1,
                    smallHeight: !1,
                    extraSmallHeight: !1,
                };
                (0, n.memo)(ct);
                let dt, Et;
                (!(function (e) {
                    ((e.ExtraSmall = 'extraSmall'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.ExtraLarge = 'extraLarge'));
                })(dt || (dt = {})),
                    (function (e) {
                        ((e.Ru = 'RU'),
                            (e.Eu = 'EU'),
                            (e.Na = 'NA'),
                            (e.Asia = 'ASIA'),
                            (e.Cn = 'CN'),
                            (e.Kr = 'KR'),
                            (e.Ct = 'CT'),
                            (e.St = 'ST'),
                            (e.QA = 'QA'),
                            (e.Dev = 'DEV'),
                            (e.Sb = 'SB'));
                    })(Et || (Et = {})));
                const mt = () => {},
                    At = [
                        'width',
                        'height',
                        'getSrcByFrame',
                        'frameCount',
                        'onAnimate',
                        'frameTime',
                        'initialFrameIndex',
                        'loop',
                        'state',
                        'onAnimationComplete',
                    ];
                function _t() {
                    return (
                        (_t = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        _t.apply(null, arguments)
                    );
                }
                const Ft = (0, n.memo)((e) => {
                        let u = e.width,
                            t = e.height,
                            r = e.getSrcByFrame,
                            i = e.frameCount,
                            o = e.onAnimate,
                            s = void 0 === o ? mt : o,
                            l = e.frameTime,
                            c = void 0 === l ? 33 : l,
                            d = e.initialFrameIndex,
                            E = void 0 === d ? 0 : d,
                            m = e.loop,
                            A = void 0 === m || m,
                            _ = e.state,
                            F = void 0 === _ ? 'play' : _,
                            D = e.onAnimationComplete,
                            C = void 0 === D ? mt : D,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, At);
                        const p = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = p.current;
                                if (!e) return;
                                const n = i - 1,
                                    a = e.getContext('2d'),
                                    o = (n) => {
                                        (a.clearRect(0, 0, e.width, e.height), a.drawImage(n, 0, 0, u, t));
                                    };
                                if ('stop' === F) {
                                    const e = r(0),
                                        u = new Image();
                                    u.src = e;
                                    const t = () => o(u);
                                    return (u.addEventListener('load', t), () => u.removeEventListener('load', t));
                                }
                                const l = ((e, u) => {
                                        const t = [];
                                        for (let n = 0; n < e; n++) {
                                            const e = new Image();
                                            ((e.src = u(n)), t.push(e));
                                        }
                                        return t;
                                    })(i, r),
                                    d = ((e, u = 0) => {
                                        let t = u;
                                        return () => {
                                            const u = t;
                                            return ((t += 1), t > e && (t = 0), u);
                                        };
                                    })(n, E),
                                    m = setInterval(() => {
                                        const e = d(),
                                            u = l[e];
                                        (o(l[e]), s(e, u), e === n && (C(), A || clearInterval(m)));
                                    }, c);
                                return () => clearInterval(m);
                            }, [i, c, r, t, E, A, s, C, F, u]),
                            a().createElement('canvas', _t({}, B, { width: u, height: t, ref: p }))
                        );
                    }),
                    Dt = {
                        base: 'Convertation_base_86',
                        bumpStars: 'Convertation_bumpStars_9e',
                        bumpParticles: 'Convertation_bumpParticles_18',
                        particlesCanvas: 'Convertation_particlesCanvas_97',
                        bump: 'Convertation_bump_5e',
                        bumpRays: 'Convertation_bumpRays_c0',
                        twirlyCanvas: 'Convertation_twirlyCanvas_65',
                        base__start: 'Convertation_base__start_e7',
                        base__bump: 'Convertation_base__bump_26',
                        base__end: 'Convertation_base__end_8c',
                        reward: 'Convertation_reward_7e',
                        rewardFrom: 'Convertation_rewardFrom_0b',
                        rewardTo: 'Convertation_rewardTo_92',
                        star: 'Convertation_star_06',
                        star__one: 'Convertation_star__one_d7',
                        star__second: 'Convertation_star__second_9e',
                        star__third: 'Convertation_star__third_11',
                    },
                    Ct = ['children'],
                    Bt = ['children'];
                function pt(e, u) {
                    if (null == e) return {};
                    var t = {};
                    for (var n in e)
                        if ({}.hasOwnProperty.call(e, n)) {
                            if (u.indexOf(n) >= 0) continue;
                            t[n] = e[n];
                        }
                    return t;
                }
                function gt() {
                    return (
                        (gt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        gt.apply(null, arguments)
                    );
                }
                const wt = {
                        idle: { state: 'idle', nextState: 'start', timeout: 400 },
                        start: { state: 'start', nextState: 'bump', timeout: 960 },
                        bump: { state: 'bump', nextState: 'end', timeout: 33 },
                        end: { state: 'end', stop: !0 },
                    },
                    ft = { width: 250, height: 250 },
                    vt = () => {},
                    bt = (e) =>
                        `R.images.gui.maps.icons.sequence.convert_twirly.twirly_convertation_${e.toString().padStart(5, '0')}`,
                    ht = ({
                        children: [e, u],
                        className: t,
                        classNames: r = {},
                        onAnimate: i = vt,
                        animationSettings: o = wt,
                        getSrcByFrameTwirly: s = bt,
                        size: l = ft,
                        drawSize: c = ft,
                        isConvertationStart: d = !0,
                        initAnimationState: E = 'idle',
                    }) => {
                        const m = ((e, u, t = !0) => {
                            const a = (0, n.useState)(e[u]),
                                r = a[0],
                                i = a[1],
                                o = (0, n.useRef)(ut),
                                s = (0, n.useCallback)(() => {
                                    r.stop ||
                                        (o.current(),
                                        (o.current = de(() => {
                                            i(e[null == r ? void 0 : r.nextState]);
                                        }, r.timeout)));
                                }, [r, e]);
                            return (
                                (0, n.useEffect)(() => (t && s(), () => o.current()), [t, s]),
                                {
                                    step: r,
                                    setStep: (0, n.useCallback)(
                                        (u) => {
                                            i(e[u]);
                                        },
                                        [e],
                                    ),
                                    next: s,
                                }
                            );
                        })(o, E, d).step.state;
                        return (
                            (0, n.useEffect)(() => {
                                i(m);
                            }, [m, i]),
                            a().createElement(
                                'div',
                                {
                                    className: W()(Dt.base, Dt[`base__${m}`], t),
                                    style: {
                                        width: 'number' == typeof l.width ? `${l.width}rem` : l.width,
                                        height: 'number' == typeof l.height ? `${l.height}rem` : l.height,
                                    },
                                },
                                a().createElement(
                                    'div',
                                    { className: W()(Dt.bumpStars, r.bumpStars) },
                                    a().createElement('div', { className: W()(Dt.star, Dt.star__one, r.star) }),
                                    a().createElement('div', { className: W()(Dt.star, Dt.star__second, r.star) }),
                                    a().createElement('div', { className: W()(Dt.star, Dt.star__third, r.star) }),
                                ),
                                a().createElement('div', { className: W()(Dt.bump, r.bump) }),
                                a().createElement('div', { className: W()(Dt.bumpRays, r.bumpRays) }),
                                a().createElement(
                                    'div',
                                    { className: W()(Dt.reward, r.reward) },
                                    ('idle' === m || 'start' === m) &&
                                        a().createElement('div', { className: W()(Dt.rewardFrom, r.rewardFrom) }, e),
                                    ('end' === m || 'bump' === m) &&
                                        a().createElement('div', { className: W()(Dt.rewardTo, r.rewardTo) }, u),
                                ),
                                ('start' === m || 'bump' === m) &&
                                    a().createElement(
                                        Ft,
                                        gt({}, c, {
                                            className: W()(Dt.twirlyCanvas, r.twirlyCanvas),
                                            frameCount: 60,
                                            frameTime: 16,
                                            getSrcByFrame: s,
                                        }),
                                    ),
                                a().createElement('div', { className: W()(Dt.bumpParticles, r.bumpParticles) }),
                            )
                        );
                    },
                    Rt =
                        ((0, n.memo)(ht, (e, u) => {
                            e.children;
                            const t = pt(e, Ct),
                                n = (u.children, pt(u, Bt));
                            return (
                                (a = t),
                                (r = n),
                                Object.keys(a).length === Object.keys(r).length &&
                                    Object.keys(a).every(
                                        (e) => Object.prototype.hasOwnProperty.call(r, e) && a[e] === r[e],
                                    )
                            );
                            var a, r;
                        }),
                        [
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
                        ]);
                function yt(e) {
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
                const St = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Bu.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Tt = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            o = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            m = e.decoratorId,
                            A = void 0 === m ? 0 : m,
                            _ = e.isEnabled,
                            F = void 0 === _ || _,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            B = e.onShow,
                            p = e.onHide,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Rt);
                        const w = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, n.useMemo)(
                                () =>
                                    C ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [C],
                            ),
                            v = (0, n.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (St(t, A, { isMouseEvent: !0, on: !0, arguments: yt(a) }, f),
                                    B && B(),
                                    (w.current.isVisible = !0));
                            }, [t, A, a, f, B]),
                            b = (0, n.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        St(t, A, { on: !1 }, f),
                                        w.current.isVisible && p && p(),
                                        (w.current.isVisible = !1));
                                }
                            }, [t, A, f, p]),
                            h = (0, n.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', h, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', h, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && b();
                            }, [F, b]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        (window.removeEventListener('mouseleave', b), b());
                                    }
                                ),
                                [b],
                            ));
                        return F
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (b(), null == i || i(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === E && b(), null == s || s(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === E && b(), null == o || o(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      g,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    Pt = ['children'];
                function Ot() {
                    return (
                        (Ot = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ot.apply(null, arguments)
                    );
                }
                const kt = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Pt);
                        return a().createElement(
                            Tt,
                            Ot(
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
                    xt = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function It() {
                    return (
                        (It = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        It.apply(null, arguments)
                    );
                }
                const Nt = R.views.common.tooltip_window.simple_tooltip_content,
                    Lt = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            i = e.note,
                            o = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, xt);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: r, note: i, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, r, i, s]);
                        return a().createElement(
                            Tt,
                            It(
                                {
                                    contentId:
                                        ((d = null == s ? void 0 : s.hasHtmlContent),
                                        d ? Nt.SimpleTooltipHtmlContent('resId') : Nt.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    };
                function Mt() {
                    return (
                        (Mt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Mt.apply(null, arguments)
                    );
                }
                const Ut = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = a().createElement('div', { className: t }, e);
                        if (u.header || u.body) return a().createElement(Lt, u, n);
                        const r = u.contentId;
                        return r ? a().createElement(Tt, Mt({}, u, { contentId: r }), n) : a().createElement(kt, u, n);
                    },
                    Gt = {
                        base: 'CommonReward_base_c0',
                        base__small: 'CommonReward_base__small_cb',
                        base__big: 'CommonReward_base__big_4c',
                        base__s180x135: 'CommonReward_base__s180x135_11',
                        base__s232x174: 'CommonReward_base__s232x174_60',
                        base__s296x222: 'CommonReward_base__s296x222_06',
                        base__s360x270: 'CommonReward_base__s360x270_9a',
                        base__s400x300: 'CommonReward_base__s400x300_02',
                        base__s600x450: 'CommonReward_base__s600x450_8c',
                        base__flex: 'CommonReward_base__flex_0e',
                        bonusIcon: 'CommonReward_bonusIcon_a5',
                        compensationIcon: 'CommonReward_compensationIcon_d9',
                        info: 'CommonReward_info_37',
                        info__hidden: 'CommonReward_info__hidden_1b',
                        info__credits: 'CommonReward_info__credits_4b',
                        info__gold: 'CommonReward_info__gold_73',
                        info__crystal: 'CommonReward_info__crystal_f8',
                        info__premiumTank: 'CommonReward_info__premiumTank_a6',
                        info__style_3d: 'CommonReward_info__style_3d_7c',
                        info__multi: 'CommonReward_info__multi_64',
                    },
                    qt = R.strings.settings.LANGUAGE_CODE(),
                    Ht = ({
                        name: e,
                        image: u,
                        value: t,
                        valueType: n,
                        isCompensation: r,
                        tooltipId: i,
                        tooltipContentId: o,
                        tooltipDecoratorId: s,
                        size: l = Lu.Big,
                        isLabelHidden: c = !1,
                        isFlexable: d = !1,
                        classNames: E,
                        tooltipArgs: m,
                    }) => {
                        const A = ((e, u, t) => {
                                const n = u && { contentId: u };
                                return Object.assign(
                                    {
                                        args: e,
                                        isEnabled: Boolean((e && e.tooltipId) || u),
                                        ignoreMouseClick: !0,
                                        ignoreShowDelay: !u,
                                    },
                                    n,
                                    t,
                                );
                            })(Object.assign({ tooltipId: i, value: t }, m), Number(o), {
                                decoratorId: s,
                                ignoreMouseClick: !1,
                            }),
                            _ = Su(t, n);
                        return a().createElement(
                            Ut,
                            { tooltipArgs: A, className: W()(Gt.base, Gt[`base__${l}`], d && Gt.base__flex) },
                            a().createElement(
                                a().Fragment,
                                null,
                                a().createElement('div', {
                                    className: Gt.bonusIcon,
                                    style: { backgroundImage: `url(${u})` },
                                }),
                                _ &&
                                    a().createElement(
                                        'div',
                                        {
                                            lang: qt,
                                            className: W()(
                                                Gt.info,
                                                c && Gt.info__hidden,
                                                Gt[`info__${e}`],
                                                Gt[`info__${n}`],
                                                null == E ? void 0 : E.info,
                                            ),
                                        },
                                        _,
                                    ),
                                r && a().createElement('div', { className: Gt.compensationIcon }),
                            ),
                        );
                    },
                    Wt = { width: 180, height: 180 },
                    Vt = Object.assign({}, wt, { idle: Object.assign({}, wt.idle, { timeout: 0 }) }),
                    $t = (e, u) => ('vehicles' === e.name ? Ru(e, u.toString()) : Ju(e, u)),
                    zt = ({
                        className: e,
                        bonusModel: u,
                        size: t,
                        playAnimation: n = !0,
                        isShowCompensation: r = !0,
                        animationSize: i = Wt,
                        animationSettings: o = Vt,
                    }) => {
                        const s = Ee((e) => {
                                'start' === e && _e('gui_gift_system_newyear_reward_transform');
                            }, []),
                            l = u.compensatedItem,
                            c = r ? 'idle' : 'end';
                        return a().createElement(
                            ht,
                            {
                                className: e,
                                animationSettings: o,
                                onAnimate: s,
                                isConvertationStart: n,
                                initAnimationState: c,
                                size: i,
                            },
                            [
                                a().createElement(Ht, {
                                    key: 1,
                                    name: l.name,
                                    image: $t(l, t),
                                    value: l.value,
                                    valueType: et(l.name),
                                    size: t,
                                }),
                                a().createElement(Ht, {
                                    key: 2,
                                    name: u.name,
                                    image: Ju(u, t),
                                    value: u.value,
                                    valueType: et(u.name),
                                    isCompensation: u.isCompensation,
                                    tooltipId: u.tooltipId,
                                    tooltipContentId: u.tooltipContentId,
                                    tooltipDecoratorId:
                                        R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    size: t,
                                }),
                            ],
                        );
                    },
                    Yt = {
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
                function jt() {
                    const e = (0, n.useRef)(0);
                    var u;
                    return (
                        (u = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, n.useEffect)(() => u, []),
                        (0, n.useMemo)(
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
                }
                var Xt;
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(Xt || (Xt = {}));
                const Kt = ['__left', '__right', '__top', '__bottom'],
                    Qt =
                        ((0, n.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: u, onOutsideClick: t, customStyles: r = {} }, i) => {
                                const o = (0, n.useRef)(null),
                                    l = (0, n.useRef)(null),
                                    c = (0, n.useRef)(null),
                                    d = (0, n.useState)(window.decorator && window.decorator.directionType),
                                    E = d[0],
                                    m = d[1],
                                    A = (0, n.useCallback)(() => {
                                        (Fe.playClick(), s.O.view.sendEvent.close());
                                    }, []),
                                    _ = (0, n.useCallback)(() => {
                                        Fe.playHighlight();
                                    }, []),
                                    F = W()(Yt.arrow, Yt[`arrow${Kt[E]}`]);
                                I(
                                    () => (
                                        s.O.client.events.mouse.enableOutside(),
                                        s.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (t ? t() : s.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const D = (0, n.useCallback)(
                                        (e) => {
                                            let u = e.target;
                                            do {
                                                if (u === o.current || u === c.current) return;
                                                u = u.parentNode;
                                            } while (u);
                                            const n = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = s.O.client.getMouseGlobalPosition(),
                                                    u = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    t =
                                                        e.x < n.boundX ||
                                                        e.x > n.boundX + n.boundWidth ||
                                                        e.y > n.boundY + n.boundHeight ||
                                                        e.y < n.boundY;
                                                if (u && !t) return;
                                            }
                                            t ? t() : s.O.view.sendEvent.close('popover');
                                        },
                                        [o, c, t],
                                    ),
                                    C = jt(),
                                    B = (0, n.useCallback)(() => {
                                        const e = l.current;
                                        if (e)
                                            return (
                                                s.O.view.freezeTextureBeforeResize(),
                                                C.run(() => {
                                                    const u = e.scrollWidth,
                                                        t = e.scrollHeight;
                                                    (s.O.view.resize(u, t), m(window.decorator.directionType));
                                                })
                                            );
                                    }, [C]);
                                return (
                                    (0, n.useImperativeHandle)(i, () => ({ updateSize: B })),
                                    I(() => {
                                        s.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, n.useEffect)(() => {
                                        document.addEventListener('mousedown', D, { capture: !0 });
                                        const e = ((e) => {
                                            let u = !1;
                                            return {
                                                promise: new Promise((t, n) => {
                                                    e.then((e) => !u && t(e)).catch((e) => !u && n(e));
                                                }),
                                                cancel() {
                                                    u = !0;
                                                },
                                            };
                                        })((0, Bu.Eu)());
                                        return (
                                            !u && e.promise.then(() => B()),
                                            () => {
                                                (e.cancel(), document.removeEventListener('mousedown', D));
                                            }
                                        );
                                    }, [B, D, u]),
                                    a().createElement(
                                        'div',
                                        { className: Yt.base, ref: l },
                                        a().createElement(
                                            'div',
                                            { className: Yt.decorator },
                                            a().createElement(
                                                'div',
                                                { className: Yt.content, ref: o },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    a().createElement(
                                                        Lt,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        a().createElement('div', {
                                                            className: Yt.closeBtn,
                                                            onClick: A,
                                                            onMouseEnter: _,
                                                            ref: c,
                                                        }),
                                                    ),
                                            ),
                                            a().createElement('div', { className: F, style: r.arrow }),
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
                function Zt() {
                    return (
                        (Zt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Zt.apply(null, arguments)
                    );
                }
                const Jt = (e) => {
                        let u = e.contentId,
                            t = e.decoratorId,
                            r = e.direction,
                            i = void 0 === r ? Xt.Top : r,
                            o = e.targetId,
                            s = e.args,
                            l = e.onClick,
                            c = e.children,
                            d = e.isEnabled,
                            E = void 0 === d || d,
                            m = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Qt);
                        const A = (0, n.useRef)(null),
                            _ = (0, n.useCallback)(() => {
                                if ((0, Bu.wU)()) return (0, Bu.SW)();
                                A.current && (0, Bu.P3)(u, i, A.current, t, o, s);
                            }, [u, i, s, t, o]);
                        return a().createElement(
                            'div',
                            Zt(
                                {
                                    ref: A,
                                    onMouseDown:
                                        ((F = c.props.onClick),
                                        (e) => {
                                            E && (_(), l && l(e), F && F(e));
                                        }),
                                },
                                m,
                            ),
                            c,
                        );
                        var F;
                    },
                    en = ['children'];
                function un() {
                    return (
                        (un = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        un.apply(null, arguments)
                    );
                }
                const tn = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, en);
                        return a().createElement(
                            Jt,
                            un(
                                {
                                    decoratorId:
                                        R.views.common.pop_over_window.backport_pop_over.BackportPopOverWindow('resId'),
                                    contentId:
                                        R.views.common.pop_over_window.backport_pop_over.BackportPopOverContent(
                                            'resId',
                                        ),
                                },
                                t,
                            ),
                            u,
                        );
                    },
                    nn = {
                        base: 'DiscountReward_base_86',
                        base__progressionReward: 'DiscountReward_base__progressionReward_49',
                        base__currentProgressionCompleted: 'DiscountReward_base__currentProgressionCompleted_04',
                        base__applied: 'DiscountReward_base__applied_fd',
                        base__flex: 'DiscountReward_base__flex_0d',
                        discountReward: 'DiscountReward_discountReward_5a',
                        base__small: 'DiscountReward_base__small_74',
                        base__big: 'DiscountReward_base__big_02',
                        base__s180x135: 'DiscountReward_base__s180x135_18',
                        base__s232x174: 'DiscountReward_base__s232x174_39',
                        base__s296x222: 'DiscountReward_base__s296x222_e9',
                        icon: 'DiscountReward_icon_ba',
                        vehicleLevel: 'DiscountReward_vehicleLevel_0b',
                        discountAmount: 'DiscountReward_discountAmount_cc',
                    },
                    an = (0, n.memo)(
                        ({
                            bonus: e,
                            options: u,
                            size: t = Lu.Small,
                            className: r,
                            isCurrentProgressionCompleted: i,
                            isProgressionReward: o,
                            isFlexable: s,
                        }) => {
                            const l = e.level,
                                c = e.discount,
                                d = e.selectedVehicle,
                                E = e.variadicID,
                                m = u || {},
                                A = m.disabled,
                                _ = m.isPopoverOpened,
                                F = `${Qu(Gu.VariadicDiscount, t)}.${Gu.VariadicDiscount}`,
                                D = Hu.includes(Wu) ? l : R.strings.roman_numerals.$dyn(`n_${l}`),
                                C = (0, n.useState)(!1),
                                B = C[0],
                                p = C[1],
                                g = (0, n.useState)(!1),
                                w = g[0],
                                f = g[1],
                                v = !d && !w,
                                b = { variadicID: E, discount: c, isCurrentProgressionCompleted: i },
                                h = { popoverId: 'NYSelectVehicleForDiscountPopover', variadicID: E },
                                y = {
                                    backgroundImage: `url('${d ? R.images.gui.maps.icons.vehicle.$dyn(((S = d), S.replace(/:|-/g, '_'))) : F}')`,
                                };
                            var S;
                            const T = (0, n.useCallback)(() => {
                                    A || f(!0);
                                }, [A]),
                                P = (0, n.useCallback)(() => {
                                    v && i && !_ && (_e(R.sounds.hangar_newyear_slot_over()), p(!0));
                                }, [v, i, _]),
                                O = (0, n.useCallback)(() => {
                                    B && (_e(R.sounds.hangar_newyear_slot_over_off()), p(!1));
                                }, [B]);
                            var k, x;
                            ((0, n.useEffect)(() => {
                                !v && B && (_e(R.sounds.hangar_newyear_slot_over_off()), p(!1));
                            }, [v, B]),
                                (k = () => {
                                    !_ && w && f(!1);
                                }),
                                (x = [_, w]),
                                (0, n.useEffect)(() => {
                                    let e = null;
                                    return (
                                        (e = requestAnimationFrame(() => {
                                            e = requestAnimationFrame(() => {
                                                ((e = null), k());
                                            });
                                        })),
                                        () => {
                                            null !== e && cancelAnimationFrame(e);
                                        }
                                    );
                                }, x));
                            const I = W()(
                                    nn.base,
                                    nn[`base__${t}`],
                                    A && nn.base__disabled,
                                    d && nn.base__applied,
                                    i && nn.base__currentProgressionCompleted,
                                    o && nn.base__progressionReward,
                                    s && nn.base__flex,
                                    r,
                                ),
                                N = a().createElement(
                                    Tt,
                                    {
                                        contentId: R.views.lobby.new_year.tooltips.NyDiscountRewardTooltip('resId'),
                                        args: b,
                                    },
                                    a().createElement(
                                        'div',
                                        { className: I, onMouseEnter: P, onMouseLeave: O, onClick: T },
                                        a().createElement(
                                            'div',
                                            { className: nn.discountReward },
                                            a().createElement('div', { className: nn.icon, style: y }),
                                            a().createElement('div', { className: nn.vehicleLevel }, D),
                                            a().createElement(
                                                'div',
                                                { className: nn.discountAmount },
                                                o
                                                    ? R.strings.common.common.percent()
                                                    : tu(R.strings.ny.percentageValue.withMinus(), { value: c }),
                                            ),
                                        ),
                                    ),
                                );
                            return A || d || !i ? N : a().createElement(tn, { args: h }, N);
                        },
                    ),
                    rn = 'ActivityReward_base_50',
                    on = 'ActivityReward_base__animated_b8',
                    sn = 'ActivityReward_base__completed_02',
                    ln = 'ActivityReward_base__flex_24',
                    cn = 'ActivityReward_inner_39',
                    dn = 'ActivityReward_icon_21',
                    En = 'ActivityReward_iconPlay_02',
                    mn = R.strings.ny.activityReward.tooltip,
                    An = ({ name: e, icon: u, isClickable: t, isNew: n, isFlexable: r }) => {
                        const i = ((e) => {
                            switch (e) {
                                case qu.CelebrityAction:
                                    return 'action';
                                case qu.Story:
                                    return 'story';
                                case qu.Decoration:
                                    return 'decoration';
                                default:
                                    return e;
                            }
                        })(e);
                        return a().createElement(
                            Lt,
                            { header: mn.header.$dyn(i), body: mn.body.$dyn(i) },
                            a().createElement(
                                'div',
                                { className: W()(rn, t && sn, t && n && on, r && ln) },
                                a().createElement(
                                    'div',
                                    { className: cn },
                                    a().createElement('div', {
                                        className: dn,
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.newYear.rewards.activity.$dyn(u)})`,
                                        },
                                    }),
                                    e === qu.CelebrityAction && a().createElement('div', { className: En }),
                                ),
                            ),
                        );
                    },
                    _n = { base: 'AttachmentReward_base_a0', glow: 'AttachmentReward_glow_5c' },
                    Fn = (e, u) =>
                        R.images.gui.maps.vehicles.attachments.$dyn(u).$dyn(e) ||
                        `R.images.gui.maps.icons.quests.bonuses.${u}.attachment`,
                    Dn = ({
                        name: e,
                        iconName: u,
                        tooltipId: t,
                        rarity: n,
                        value: r,
                        tooltipContentId: i,
                        size: o = Lu.Small,
                        isFlexable: s,
                        withGlowAndSign: l = !0,
                        classNames: c,
                    }) =>
                        a().createElement(
                            'div',
                            { className: W()(_n.base, _n[`base__${o}`]) },
                            a().createElement('div', {
                                className: _n.glow,
                                style: l
                                    ? {
                                          backgroundImage: `url(R.images.gui.maps.icons.customization.rarity.glowWithSign.${o}.${n})`,
                                      }
                                    : {},
                            }),
                            a().createElement(Ht, {
                                name: e,
                                image: Fn(u, o),
                                valueType: et(e),
                                value: r,
                                tooltipId: t,
                                tooltipContentId: i,
                                size: o,
                                isFlexable: s,
                                classNames: c,
                            }),
                        ),
                    Cn = {
                        base: 'ItemReward_base_34',
                        overlay: 'ItemReward_overlay_47',
                        base__small: 'ItemReward_base__small_38',
                        base__big: 'ItemReward_base__big_a6',
                        base__s180x135: 'ItemReward_base__s180x135_ff',
                        base__s232x174: 'ItemReward_base__s232x174_61',
                        base__s296x222: 'ItemReward_base__s296x222_64',
                        base__s400x300: 'ItemReward_base__s400x300_c4',
                        base__s600x450: 'ItemReward_base__s600x450_fe',
                        highlight: 'ItemReward_highlight_21',
                    },
                    Bn = ({
                        bonusModel: e,
                        size: u,
                        isLabelHidden: t,
                        isFlexable: n,
                        classNames: r,
                        tooltipArgs: i,
                    }) => {
                        const o = ((e, u) => {
                                if (void 0 === u || !yu.includes(e)) return null;
                                switch (u) {
                                    case _u.BATTLE_BOOSTER:
                                    case _u.BATTLE_BOOSTER_REPLACE:
                                        return Fu.BATTLE_BOOSTER;
                                }
                            })(u, e.overlayType),
                            s = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case _u.BATTLE_BOOSTER:
                                        return Du.BATTLE_BOOSTER;
                                    case _u.BATTLE_BOOSTER_REPLACE:
                                        return Du.BATTLE_BOOSTER_REPLACE;
                                    case _u.BUILT_IN_EQUIPMENT:
                                        return Du.BUILT_IN_EQUIPMENT;
                                    case _u.EQUIPMENT_PLUS:
                                        return Du.EQUIPMENT_PLUS;
                                    case _u.EQUIPMENT_TROPHY_BASIC:
                                        return Du.EQUIPMENT_TROPHY_BASIC;
                                    case _u.EQUIPMENT_TROPHY_UPGRADED:
                                        return Du.EQUIPMENT_TROPHY_UPGRADED;
                                    case _u.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Du.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case _u.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Du.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case _u.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Du.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case _u.PROGRESSION_STYLE_UPGRADED_1:
                                        return Du.PROGRESSION_STYLE_UPGRADED_1;
                                    case _u.PROGRESSION_STYLE_UPGRADED_2:
                                        return Du.PROGRESSION_STYLE_UPGRADED_2;
                                    case _u.PROGRESSION_STYLE_UPGRADED_3:
                                        return Du.PROGRESSION_STYLE_UPGRADED_3;
                                    case _u.PROGRESSION_STYLE_UPGRADED_4:
                                        return Du.PROGRESSION_STYLE_UPGRADED_4;
                                    case _u.PROGRESSION_STYLE_UPGRADED_5:
                                        return Du.PROGRESSION_STYLE_UPGRADED_5;
                                    case _u.PROGRESSION_STYLE_UPGRADED_6:
                                        return Du.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(e.overlayType);
                        return a().createElement(
                            'div',
                            { className: W()(Cn.base, Cn[`base__${u}`]) },
                            o &&
                                a().createElement('div', {
                                    className: Cn.highlight,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.${o}_highlight)`,
                                    },
                                }),
                            a().createElement(Ht, {
                                name: e.name,
                                image: Ju(e, u),
                                value: e.value,
                                valueType: et(e.name),
                                isCompensation: e.isCompensation,
                                tooltipId: e.tooltipId,
                                tooltipContentId: e.tooltipContentId,
                                tooltipArgs: i,
                                size: u,
                                isLabelHidden: t,
                                isFlexable: n,
                                classNames: r,
                            }),
                            s &&
                                a().createElement('div', {
                                    className: Cn.overlay,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.${s}_overlay)`,
                                    },
                                }),
                        );
                    },
                    pn = {
                        base: 'ModernizedEquipmentReward_base_d8',
                        equipmentGlow: 'ModernizedEquipmentReward_equipmentGlow_05',
                        base__small: 'ModernizedEquipmentReward_base__small_36',
                        base__big: 'ModernizedEquipmentReward_base__big_09',
                        base__s180x135: 'ModernizedEquipmentReward_base__s180x135_ba',
                        base__s232x174: 'ModernizedEquipmentReward_base__s232x174_02',
                        base__s296x222: 'ModernizedEquipmentReward_base__s296x222_5f',
                        base__flex: 'ModernizedEquipmentReward_base__flex_8a',
                    },
                    gn = ({
                        name: e,
                        tooltipId: u,
                        image: t,
                        overlayType: n,
                        value: r,
                        tooltipContentId: i,
                        size: o = Lu.Big,
                        isFlexable: s,
                        classNames: l,
                    }) =>
                        a().createElement(
                            'div',
                            { className: W()(pn.base, pn[`base__${o}`], s && pn.base__flex) },
                            a().createElement('div', {
                                className: pn.equipmentGlow,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${o}.${n}_overlay)`,
                                },
                            }),
                            a().createElement(Ht, {
                                name: e,
                                image: t,
                                valueType: et(e),
                                value: r,
                                tooltipId: u,
                                tooltipContentId: i,
                                size: o,
                                classNames: l,
                                isFlexable: s,
                            }),
                        ),
                    wn = {
                        base: 'PremiumReward_base_16',
                        base__small: 'PremiumReward_base__small_21',
                        base__big: 'PremiumReward_base__big_08',
                        base__s180x135: 'PremiumReward_base__s180x135_68',
                        base__s232x174: 'PremiumReward_base__s232x174_8f',
                        base__s296x222: 'PremiumReward_base__s296x222_4b',
                        base__s360x270: 'PremiumReward_base__s360x270_75',
                        base__s400x300: 'PremiumReward_base__s400x300_92',
                        base__s600x450: 'PremiumReward_base__s600x450_d2',
                        base__flex: 'PremiumReward_base__flex_e2',
                        icon: 'PremiumReward_icon_e2',
                        info: 'PremiumReward_info_13',
                    },
                    fn = R.strings.ny.lootBoxAutoOpen.reward.premiumPlus,
                    vn = fn.label(),
                    bn = fn.tooltip.header(),
                    hn = fn.tooltip.body(),
                    Rn = ({ value: e, size: u = Lu.Big, isFlexable: t = !1, classNames: n }) => {
                        const r = tu(vn, { quantity: e }),
                            i = tu(bn, { quantity: e });
                        return a().createElement(
                            Lt,
                            { header: i, body: hn },
                            a().createElement(
                                'div',
                                {
                                    className: W()(wn.base, wn[`base__${u}`], t && wn.base__flex),
                                    lang: R.strings.settings.LANGUAGE_CODE(),
                                },
                                a().createElement('div', {
                                    className: wn.icon,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.premium_plus_1)`,
                                    },
                                }),
                                Number(e) > 1 &&
                                    a().createElement(
                                        'div',
                                        { className: W()(wn.info, null == n ? void 0 : n.info) },
                                        r,
                                    ),
                            ),
                        );
                    },
                    yn = {
                        base: 'ToyReward_base_1d',
                        base__large: 'ToyReward_base__large_c7',
                        base__flex: 'ToyReward_base__flex_3e',
                        label: 'ToyReward_label_f7',
                        image: 'ToyReward_image_46',
                        counter: 'ToyReward_counter_85',
                    };
                let Sn;
                !(function (e) {
                    ((e.Medium = 'medium'), (e.Large = 'large'));
                })(Sn || (Sn = {}));
                const Tn = R.views.lobby.new_year.tooltips,
                    Pn = ({
                        image: e,
                        bigImage: u,
                        value: t,
                        size: n = Sn.Medium,
                        toyID: r,
                        isFlexable: i,
                        classNames: o,
                    }) => {
                        const s = Su(t, Au.MULTI);
                        return a().createElement(
                            Tt,
                            { ignoreShowDelay: !0, contentId: Tn.NyDecorationTooltip('resId'), args: { toyID: r } },
                            a().createElement(
                                'div',
                                {
                                    className: W()(yn.base, i && yn.base__flex, yn[`base__${n}`]),
                                    lang: R.strings.settings.LANGUAGE_CODE(),
                                },
                                a().createElement(
                                    'div',
                                    {
                                        className: yn.image,
                                        style: { backgroundImage: `url(${n === Sn.Medium ? e : u})` },
                                    },
                                    s &&
                                        a().createElement(
                                            'div',
                                            { className: W()(yn.counter, null == o ? void 0 : o.counter) },
                                            s,
                                        ),
                                ),
                            ),
                        );
                    },
                    On = 'FormatText_base_d0',
                    kn = ({ binding: e, text: u = '', classMix: t, alignment: r = eu.left, formatWithBrackets: i }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const o = i && e ? uu(u, e) : u;
                        return a().createElement(
                            n.Fragment,
                            null,
                            o.split('\n').map((u, i) =>
                                a().createElement(
                                    'div',
                                    { className: W()(On, t), key: `${u}-${i}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : cu(e, u))))(
                                        u,
                                        r,
                                        e,
                                    ).map((e, u) => a().createElement(n.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    xn = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    In = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const Nn = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Ln = (e) =>
                        Nn
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = In.length - 1; t >= 0; t--)
                                      for (; e >= In[t]; ) ((u += xn[t]), (e -= In[t]));
                                  return u;
                              })(e),
                    Mn = {
                        base: 'VehicleReward_base_a9',
                        vehicleInfo: 'VehicleReward_vehicleInfo_3e',
                        base__s360x270: 'VehicleReward_base__s360x270_be',
                        base__s400x300: 'VehicleReward_base__s400x300_67',
                        base__s600x450: 'VehicleReward_base__s600x450_f0',
                        base__withRent: 'VehicleReward_base__withRent_a4',
                        base__dark: 'VehicleReward_base__dark_af',
                        typeContainer: 'VehicleReward_typeContainer_19',
                        type: 'VehicleReward_type_90',
                        rent: 'VehicleReward_rent_6b',
                        rent__hidden: 'VehicleReward_rent__hidden_34',
                        clockIcon: 'VehicleReward_clockIcon_46',
                    },
                    Un = ['vehicleInfo', 'rentDays', 'rentBattles', 'size', 'theme', 'classNames'];
                function Gn() {
                    return (
                        (Gn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Gn.apply(null, arguments)
                    );
                }
                const qn = R.strings.ny.giftMachine,
                    Hn = R.images.gui.maps.icons.newYear.tank_types;
                let Wn;
                !(function (e) {
                    ((e.Light = 'light'), (e.Dark = 'dark'));
                })(Wn || (Wn = {}));
                const Vn = (e) => {
                    let u = e.vehicleInfo,
                        t = e.rentDays,
                        n = void 0 === t ? 0 : t,
                        r = e.rentBattles,
                        i = void 0 === r ? 0 : r,
                        o = e.size,
                        s = void 0 === o ? Lu.S180x135 : o,
                        l = e.theme,
                        c = void 0 === l ? Wn.Light : l,
                        d = e.classNames,
                        E = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, Un);
                    const m = u.vehicleLvl,
                        A = u.vehicleName,
                        _ = u.vehicleType,
                        F = (c === Wn.Light ? Hn.white_elite : Hn.blue_elite).$dyn(`${nu(_)}`),
                        D = n > 0 || i > 0;
                    return a().createElement(
                        'div',
                        {
                            className: W()(Mn.base, Mn[`base__${s}`], Mn[`base__${c}`], D && Mn.base__withRent),
                            lang: R.strings.settings.LANGUAGE_CODE(),
                        },
                        a().createElement(Ht, Gn({ size: s, isLabelHidden: !0 }, E)),
                        n > 0 &&
                            a().createElement(kn, {
                                text: qn.rentDays(),
                                binding: { clockIcon: a().createElement('span', { className: Mn.clockIcon }), days: n },
                                classMix: W()(Mn.rent, null == d ? void 0 : d.rent),
                            }),
                        i > 0 &&
                            a().createElement(kn, {
                                text: qn.rentBattles(),
                                binding: {
                                    clockIcon: a().createElement('span', { className: Mn.clockIcon }),
                                    battles: i,
                                },
                                classMix: W()(Mn.rent, null == d ? void 0 : d.rent),
                            }),
                        a().createElement(
                            'div',
                            { className: W()(Mn.vehicleInfo, null == d ? void 0 : d.info) },
                            Ln(m),
                            a().createElement(
                                'div',
                                { className: Mn.typeContainer },
                                a().createElement('div', {
                                    className: Mn.type,
                                    style: { backgroundImage: `url('${F}')` },
                                }),
                            ),
                            A,
                        ),
                    );
                };
                function $n() {
                    return (
                        ($n = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        $n.apply(null, arguments)
                    );
                }
                const zn = ({
                        bonusModel: e,
                        options: u,
                        size: t = Lu.Big,
                        toyRewardOptions: n = {},
                        isProgressionReward: r,
                        isCurrentProgressionCompleted: i,
                        compensationRewardOptions: o = {},
                        activityRewardOptions: s = {},
                        vehicleRewardOptions: l = {},
                        isLabelHidden: c,
                        isFlexable: d = !1,
                        isPixelatedImage: E,
                        level: m,
                        classNames: A,
                        tooltipArgs: _,
                    }) => {
                        return ((e) => 'item' in e && e.item && e.item.startsWith('modernized'))(e)
                            ? a().createElement(
                                  gn,
                                  $n({}, e, { image: Ju(e, t, E), size: t, classNames: A, isFlexable: d }),
                              )
                            : 'ny25Toys' === e.name
                              ? a().createElement(
                                    Pn,
                                    $n(
                                        {
                                            image: e.icon,
                                            bigImage: e.bigIcon,
                                            toyID: e.toyID,
                                            value: e.value,
                                            isFlexable: d,
                                        },
                                        n,
                                    ),
                                )
                              : ((e) => 'variadicDiscount' === e.name)(e)
                                ? a().createElement(an, {
                                      rewardLevel: m,
                                      bonus: e,
                                      options: u,
                                      size: t,
                                      className: null == A ? void 0 : A.discountReward,
                                      isProgressionReward: r,
                                      isCurrentProgressionCompleted: i,
                                      isFlexable: d,
                                  })
                                : ((e) => 'premium_plus' === e.name)(e)
                                  ? a().createElement(Rn, $n({}, e, { size: t, isFlexable: d, classNames: A }))
                                  : e.isCompensation
                                    ? a().createElement(zt, $n({ bonusModel: e, size: t }, o))
                                    : ((F = e.name),
                                      $u.includes(F)
                                          ? a().createElement(An, $n({}, e, s, { isFlexable: d }))
                                          : ju(e.name)
                                            ? a().createElement(Vn, $n({ image: Ju(e, t, E), size: t }, e, l))
                                            : ((e) => e === du.Items)(e.name)
                                              ? a().createElement(Bn, {
                                                    bonusModel: e,
                                                    size: t,
                                                    classNames: A,
                                                    tooltipArgs: _,
                                                    isLabelHidden: c,
                                                    isFlexable: d,
                                                })
                                              : ((e) => 'icon' in e && 'attachment' === e.icon)(e)
                                                ? a().createElement(
                                                      Dn,
                                                      $n({}, e, { size: t, classNames: A, isFlexable: d }),
                                                  )
                                                : a().createElement(Ht, {
                                                      name: e.name,
                                                      image: Ju(e, t, E),
                                                      value: e.value,
                                                      valueType: et(e.name),
                                                      isCompensation: e.isCompensation,
                                                      tooltipId: e.tooltipId,
                                                      tooltipContentId: e.tooltipContentId,
                                                      tooltipArgs: _,
                                                      size: t,
                                                      isLabelHidden: c,
                                                      isFlexable: d,
                                                      classNames: A,
                                                  }));
                        var F;
                    },
                    Yn = 'ObtainedReward_base_bf',
                    jn = 'ObtainedReward_reward_e2',
                    Xn = 'ObtainedReward_rewardInfo_da',
                    Kn = 'ObtainedReward_rewardInfo__currency_4e',
                    Qn = 'ObtainedReward_rewardInfo__components_63',
                    Zn = 'ObtainedReward_additionalLabel_b8',
                    Jn = (0, l.Pi)(({ classNames: e, vehicleRewardOptions: u }) => {
                        const t = k().model.computes.getReward(),
                            n = !(ju(t.name) || Xu(t.name) || Ku(t.name));
                        return a().createElement(
                            'div',
                            { className: Yn },
                            a().createElement(
                                'div',
                                { className: jn },
                                a().createElement(zn, {
                                    bonusModel: t,
                                    size: Lu.S296x222,
                                    classNames: {
                                        info: W()(
                                            Xn,
                                            Xu(t.name) && Kn,
                                            Ku(t.name) && Qn,
                                            null == e ? void 0 : e.rewardInfo,
                                        ),
                                    },
                                    vehicleRewardOptions: Object.assign(
                                        {
                                            classNames: {
                                                rent: null == e ? void 0 : e.info,
                                                info: null == e ? void 0 : e.info,
                                            },
                                        },
                                        u,
                                    ),
                                }),
                                n &&
                                    a().createElement(
                                        'div',
                                        { className: W()(Zn, null == e ? void 0 : e.info) },
                                        au(t.userName),
                                    ),
                            ),
                        );
                    }),
                    ea = 'AnimatedTokenCount_base_7c',
                    ua = 'AnimatedTokenCount_count_22',
                    ta = 'AnimatedTokenCount_count__next_31',
                    na = 'AnimatedTokenCount_count__zero_20',
                    aa = [C.SkipRewardPrequel, C.SkipRareRewardPrequel, C.SkipSpecialRewardPrequel],
                    ra = (0, l.Pi)(() => {
                        const e = k().model,
                            u = e.computes.isAnimationRestart(),
                            t = e.root.get(),
                            r = t.tokenCount,
                            i = t.machineState,
                            o = aa.includes(i),
                            s = (0, n.useState)(r),
                            l = s[0],
                            c = s[1],
                            d = l + 1,
                            E = (0, oe.useSpring)(() => ({
                                config: { duration: 400, delay: 800, easing: ie.easeInQuart },
                                from: { transform: 'translateY(0%)' },
                                onRest: () => {
                                    D.start({ to: { transform: 'scale(0.5)', opacity: 0 }, delay: 400 });
                                },
                            })),
                            m = E[0],
                            A = E[1],
                            _ = (0, oe.useSpring)(() => ({
                                config: { duration: 350, easing: ie.easeInOutCubic },
                                from: { transform: 'scale(0.5)', opacity: 0 },
                                onStart: () => {
                                    A.start({
                                        from: { transform: 'translateY(0%)' },
                                        to: { transform: 'translateY(100%)' },
                                        delay: 800,
                                    });
                                },
                            })),
                            F = _[0],
                            D = _[1];
                        return (
                            (0, n.useEffect)(() => {
                                u &&
                                    (D.start({ to: { transform: 'scale(1)', opacity: 1 }, delay: 1100 }),
                                    A.start({ from: { transform: 'translateY(0%)' } }),
                                    c(r));
                            }, [D, A, u, r]),
                            (0, n.useEffect)(() => {
                                o && D.start({ to: { transform: 'scale(0.5)', opacity: 0 }, immediate: !0 });
                            }, [D, o]),
                            a().createElement(
                                oe.animated.div,
                                { style: F, className: ea },
                                a().createElement(oe.animated.div, { style: m, className: ua }, d),
                                a().createElement(
                                    oe.animated.div,
                                    { style: m, className: W()(ua, ta, 0 === l && na) },
                                    l,
                                ),
                            )
                        );
                    }),
                    ia = 'Balance_base_35',
                    oa = 'Balance_coin_ce',
                    sa = 'Balance_count_23',
                    la = 'Balance_count__zero_be',
                    ca = { duration: 600, easing: ie.easeInOutCubic },
                    da = ({ isVisible: e, tokenCount: u }) => {
                        const t = (0, oe.useSpring)(() => ({ config: ca, from: { opacity: 0 } })),
                            r = t[0],
                            i = t[1];
                        return (
                            (0, n.useEffect)(() => {
                                e
                                    ? i.start({ to: { opacity: 1 }, delay: 250 })
                                    : i.start({ to: { opacity: 0 }, immediate: !0 });
                            }, [e, i]),
                            a().createElement(
                                oe.animated.div,
                                { style: r, className: ia },
                                a().createElement('div', { className: oa }),
                                a().createElement('div', { className: W()(sa, 0 === u && la) }, u),
                            )
                        );
                    },
                    Ea = {
                        base: 'RewardAnimation_base_5a',
                        videoWrapper: 'RewardAnimation_videoWrapper_a0',
                        video: 'RewardAnimation_video_5f',
                        balance: 'RewardAnimation_balance_b4',
                        token: 'RewardAnimation_token_7d',
                        particles: 'RewardAnimation_particles_19',
                        effects: 'RewardAnimation_effects_b5',
                        effects__show: 'RewardAnimation_effects__show_aa',
                        reward: 'RewardAnimation_reward_0a',
                        base__videoHide: 'RewardAnimation_base__videoHide_57',
                        base__rewardAppear: 'RewardAnimation_base__rewardAppear_8b',
                        base__videoEnd: 'RewardAnimation_base__videoEnd_7e',
                        rewardAppear: 'RewardAnimation_rewardAppear_1f',
                        rewardInfo: 'RewardAnimation_rewardInfo_60',
                        fadeIn: 'RewardAnimation_fadeIn_71',
                        info: 'RewardAnimation_info_24',
                        specialRewardAppear: 'RewardAnimation_specialRewardAppear_72',
                        fadeOut: 'RewardAnimation_fadeOut_d7',
                        slideInFadeIn: 'RewardAnimation_slideInFadeIn_6e',
                        fadeInWithScale: 'RewardAnimation_fadeInWithScale_38',
                        slideUp: 'RewardAnimation_slideUp_2d',
                        scale: 'RewardAnimation_scale_49',
                        spin: 'RewardAnimation_spin_03',
                        blink: 'RewardAnimation_blink_ea',
                        slideInNotification: 'RewardAnimation_slideInNotification_10',
                    },
                    ma = [C.SkipRewardPrequel, C.SkipRareRewardPrequel, C.SkipSpecialRewardPrequel],
                    Aa = (0, l.Pi)(() => {
                        const e = k(),
                            u = e.model,
                            t = e.controls,
                            r = u.root.get().tokenCount,
                            i = u.computes.machineState(),
                            o = u.computes.isAnimationRestart(),
                            s = ma.includes(i),
                            l = i === C.Reward || i === C.RareReward,
                            c = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            E = we({
                                playerRef: c,
                                isAnimationRestart: o,
                                rewardAppearTime: 4,
                                effectsPlayerRef: d,
                                sound: R.sounds.hangar_newyear_vendor_reward(),
                            }),
                            m = E[0],
                            A = E[1];
                        (0, n.useEffect)(() => {
                            var e;
                            s && (null == (e = c.current) || e.goToAndPlay(9));
                        }, [s, c]);
                        return (
                            q('RewardAnimation'),
                            a().createElement(
                                'div',
                                { className: W()(Ea.base, Ea[`base__${m}`]) },
                                a().createElement(
                                    'div',
                                    { className: Ea.videoWrapper },
                                    a().createElement(U, {
                                        className: Ea.video,
                                        src: R.videos.new_year.gift_machine.reward(),
                                        ref: c,
                                        isPrebufferKeyframes: !0,
                                        onEnded: () => {
                                            m !== Ce.VideoEnd && (A(Ce.VideoEnd), t.onRewardAnimationEnd());
                                        },
                                    }),
                                ),
                                a().createElement('div', { className: Ea.token }, a().createElement(ra, null)),
                                a().createElement(
                                    'div',
                                    { className: Ea.balance },
                                    a().createElement(da, { isVisible: l, tokenCount: r }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Ea.reward },
                                    a().createElement(Jn, { classNames: { info: Ea.info, rewardInfo: Ea.rewardInfo } }),
                                ),
                                a().createElement(U, {
                                    className: Ea.particles,
                                    src: R.videos.new_year.gift_machine.second_particles(),
                                    loop: !0,
                                    autoplay: !0,
                                }),
                                a().createElement(U, {
                                    className: W()(Ea.effects, m === Ce.RewardAppear && Ea.effects__show),
                                    src: R.videos.new_year.gift_machine.particles(),
                                    ref: d,
                                }),
                            )
                        );
                    }),
                    _a = (0, l.Pi)(() => {
                        const e = k(),
                            u = e.model,
                            t = e.controls,
                            r = u.root.get().tokenCount,
                            i = u.computes.machineState(),
                            o = u.computes.isAnimationRestart(),
                            s = ma.includes(i),
                            l = i === C.Reward || i === C.RareReward,
                            c = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            E = we({
                                playerRef: c,
                                isAnimationRestart: o,
                                rewardAppearTime: 4,
                                effectsPlayerRef: d,
                                sound: R.sounds.hangar_newyear_vendor_special_reward(),
                            }),
                            m = E[0],
                            A = E[1];
                        (0, n.useEffect)(() => {
                            var e;
                            s && (null == (e = c.current) || e.goToAndPlay(9));
                        }, [s, c]);
                        return (
                            q('RareRewardAnimation'),
                            a().createElement(
                                'div',
                                { className: W()(Ea.base, Ea[`base__${m}`]) },
                                a().createElement(
                                    'div',
                                    { className: Ea.videoWrapper },
                                    a().createElement(U, {
                                        className: Ea.video,
                                        src: R.videos.new_year.gift_machine.special_reward(),
                                        ref: c,
                                        isPrebufferKeyframes: !0,
                                        onEnded: () => {
                                            m !== Ce.VideoEnd && (A(Ce.VideoEnd), t.onRewardAnimationEnd());
                                        },
                                    }),
                                ),
                                a().createElement('div', { className: Ea.token }, a().createElement(ra, null)),
                                a().createElement(
                                    'div',
                                    { className: Ea.balance },
                                    a().createElement(da, { isVisible: l, tokenCount: r }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Ea.reward },
                                    a().createElement(Jn, { classNames: { info: Ea.info, rewardInfo: Ea.rewardInfo } }),
                                ),
                                a().createElement(U, {
                                    className: Ea.particles,
                                    src: R.videos.new_year.gift_machine.second_particles(),
                                    loop: !0,
                                    autoplay: !0,
                                }),
                                a().createElement(U, {
                                    className: W()(Ea.effects, m === Ce.RewardAppear && Ea.effects__show),
                                    src: R.videos.new_year.gift_machine.particles(),
                                    ref: d,
                                }),
                            )
                        );
                    }),
                    Fa = 'AnimatedTokenCount_base_db',
                    Da = 'AnimatedTokenCount_count_04',
                    Ca = 'AnimatedTokenCount_count__next_d4',
                    Ba = 'AnimatedTokenCount_count__zero_f5',
                    pa = (0, l.Pi)(() => {
                        const e = k().model,
                            u = e.computes.isAnimationRestart(),
                            t = e.root.get(),
                            r = t.tokenCount,
                            i = t.machineState,
                            o = i === C.SkipRewardPrequel || i === C.SkipSpecialRewardPrequel,
                            s = (0, n.useState)(r),
                            l = s[0],
                            c = s[1],
                            d = l + 1,
                            E = (0, oe.useSpring)(() => ({
                                config: { duration: 950, easing: ie.easeInOutCubic },
                                from: { transform: 'translateY(0%)', opacity: 1 },
                            })),
                            m = E[0],
                            A = E[1],
                            _ = (0, oe.useSpring)(() => ({
                                config: { duration: 1200, delay: 400, easing: ie.easeInOutCubic },
                                from: { transform: 'translateY(0%)' },
                                to: { transform: 'translateY(-100%)' },
                                onStart: () => A.start({ from: { transform: 'translateY(0rem)', opacity: 1 } }),
                                onRest: () => A.start({ to: { transform: 'translateY(-100rem)' }, delay: 1e3 }),
                            })),
                            F = _[0],
                            D = _[1];
                        return (
                            (0, n.useEffect)(() => {
                                u &&
                                    (D.start({
                                        from: { transform: 'translateY(0%)' },
                                        to: { transform: 'translateY(-100%)' },
                                    }),
                                    c(r));
                            }, [l, D, u, r]),
                            (0, n.useEffect)(() => {
                                o && A.start({ to: { opacity: 0 }, immediate: !0 });
                            }, [A, o]),
                            a().createElement(
                                oe.animated.div,
                                { style: m, className: Fa },
                                a().createElement(oe.animated.div, { style: F, className: Da }, d),
                                a().createElement(
                                    oe.animated.div,
                                    { style: F, className: W()(Da, Ca, 0 === l && Ba) },
                                    l,
                                ),
                            )
                        );
                    }),
                    ga = {
                        base: 'SpecialRewardAnimation_base_fc',
                        videoWrapper: 'SpecialRewardAnimation_videoWrapper_d0',
                        base__videoHide: 'SpecialRewardAnimation_base__videoHide_86',
                        base__videoEnd: 'SpecialRewardAnimation_base__videoEnd_c1',
                        fadeOut: 'SpecialRewardAnimation_fadeOut_f9',
                        video: 'SpecialRewardAnimation_video_78',
                        snow: 'SpecialRewardAnimation_snow_c7',
                        base__rewardAppear: 'SpecialRewardAnimation_base__rewardAppear_13',
                        animatedTokenCount: 'SpecialRewardAnimation_animatedTokenCount_91',
                        reward: 'SpecialRewardAnimation_reward_35',
                        specialRewardAppear: 'SpecialRewardAnimation_specialRewardAppear_f6',
                        rewardInfo: 'SpecialRewardAnimation_rewardInfo_8d',
                        fadeIn: 'SpecialRewardAnimation_fadeIn_01',
                        rewardAppear: 'SpecialRewardAnimation_rewardAppear_44',
                    },
                    wa = 7.65 - 0.1,
                    fa = (0, l.Pi)(function () {
                        const e = k(),
                            u = e.model,
                            t = e.controls,
                            r = u.root.get().machineState,
                            i = u.computes.isAnimationRestart(),
                            o = r === C.SkipSpecialRewardPrequel,
                            s = (0, n.useRef)(),
                            l = we({
                                playerRef: s,
                                isAnimationRestart: i,
                                rewardAppearTime: 7.65,
                                sound: R.sounds.hangar_newyear_vendor_special_reward(),
                            }),
                            c = l[0],
                            d = l[1];
                        (0, n.useEffect)(() => {
                            var e;
                            o && (null == (e = s.current) || e.setCurrentTime(wa));
                        }, [o, s]);
                        const E = Ee(
                            () => (
                                t.onRewardAnimationEnd(),
                                de(() => {
                                    d(Ce.VideoHide);
                                }, 3e3)
                            ),
                            [t, d],
                        );
                        return (
                            q('SpecialRewardAnimation'),
                            a().createElement(
                                'div',
                                { className: W()(ga.base, ga[`base__${c}`]) },
                                a().createElement(
                                    'div',
                                    { className: ga.videoWrapper },
                                    a().createElement(U, {
                                        className: ga.video,
                                        src: R.videos.new_year.gift_machine.special_reward(),
                                        ref: s,
                                        onEnded: E,
                                    }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: ga.animatedTokenCount },
                                    a().createElement(pa, null),
                                ),
                                a().createElement(
                                    'div',
                                    { className: ga.reward },
                                    a().createElement(Jn, {
                                        classNames: { info: ga.rewardInfo },
                                        vehicleRewardOptions: { theme: c === Ce.RewardAppear ? Wn.Dark : Wn.Light },
                                    }),
                                ),
                            )
                        );
                    }),
                    va = (0, n.memo)(function ({ machineState: e, hasCoins: u }) {
                        switch (e) {
                            case C.Idle:
                            case C.BuyTokens:
                                return u ? a().createElement(Ze, null) : a().createElement(Ie, null);
                            case C.Reward:
                            case C.RewardPrequel:
                            case C.SkipRewardPrequel:
                                return a().createElement(Aa, null);
                            case C.RareReward:
                            case C.RareRewardPrequel:
                            case C.SkipRareRewardPrequel:
                                return a().createElement(_a, null);
                            case C.SpecialReward:
                            case C.SpecialRewardPrequel:
                            case C.SpecialRewardPreview:
                            case C.SkipSpecialRewardPrequel:
                                return a().createElement(fa, null);
                            case C.Error:
                                return a().createElement(re, null);
                            default:
                                return (console.error('Unknown machineState ', e), null);
                        }
                    }),
                    ba = 'AnimationSwitch_base_34',
                    ha = (0, l.Pi)(() => {
                        const e = k().model.computes,
                            u = e.machineState(),
                            t = e.hasCoins();
                        return a().createElement(
                            'div',
                            { className: ba },
                            a().createElement(va, { machineState: u, hasCoins: t }),
                        );
                    }),
                    Ra = 'MachineScreen_base_d3',
                    ya = 'MachineScreen_vignette_fd',
                    Sa = () =>
                        a().createElement(
                            'div',
                            { className: Ra },
                            a().createElement(ha, null),
                            a().createElement('div', { className: ya }),
                        ),
                    Ta = 'App_base_ec',
                    Pa = () => {
                        const e = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(
                                () =>
                                    o(() => {
                                        const u = e.current;
                                        u && s.O.view.resize(u.scrollWidth, u.scrollHeight);
                                    }),
                                [e],
                            ),
                            a().createElement(
                                'div',
                                { ref: e, className: Ta, lang: R.strings.settings.LANGUAGE_CODE() },
                                a().createElement(Sa, null),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    i().render(
                        a().createElement(O, null, a().createElement(Pa, null)),
                        document.getElementById('root'),
                    );
                });
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
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], r = !0, i = 0; i < u.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
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
        (__webpack_require__.j = 9794),
        (() => {
            var e = { 9794: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < r.length; s++)
                        ((a = r[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [8360], () => __webpack_require__(7125));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
