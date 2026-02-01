(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (u, e, t) => {
                (t.r(e),
                    t.d(e, { mouse: () => l, off: () => i, on: () => o, onResize: () => r, onScaleUpdated: () => s }));
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    o = (u, e) => engine.on(u, e),
                    i = (u, e) => engine.off(u, e),
                    c = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    l = (function () {
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
                                            s = c[e]((u) => t([u, 'outside']));
                                        function o(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, o),
                                            n(),
                                            () => {
                                                a &&
                                                    (s(),
                                                    window.removeEventListener(r, o),
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
            5959: (u, e, t) => {
                (t.r(e),
                    t.d(e, {
                        events: () => n,
                        getMouseGlobalPosition: () => s,
                        getSize: () => r,
                        graphicsQuality: () => o,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = t(527),
                    a = t(2493);
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                function n(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => n });
            },
            2493: (u, e, t) => {
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
            2472: (u, e, t) => {
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
            3138: (u, e, t) => {
                t.d(e, { O: () => r });
                var n = t(5959),
                    a = t(514);
                const r = { view: t(7641), client: n, sound: a.ZP };
            },
            514: (u, e, t) => {
                t.d(e, { ZP: () => s });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((u, e) => ((u[e] = () => (0, n.playSound)(a[e])), u), {}),
                    s = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (u, e, t) => {
                function n(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function a(u, e, t) {
                    return `url(${n(u, e, t)})`;
                }
                (t.r(e), t.d(e, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            6112: (u, e, t) => {
                t.d(e, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                t.d(e, { U: () => a });
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
            7641: (u, e, t) => {
                (t.r(e),
                    t.d(e, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => i,
                        arabic2roman: () => y,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => M,
                        events: () => s.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => m,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => w,
                        getFontNames: () => f,
                        getScale: () => _,
                        getSize: () => d,
                        getViewGlobalPosition: () => D,
                        isEventHandled: () => h,
                        isFocused: () => g,
                        pxToRem: () => C,
                        remToPx: () => B,
                        resize: () => F,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => O,
                    }));
                var n = t(9690),
                    a = t(3722),
                    r = t(6112),
                    s = t(6538),
                    o = t(8566);
                function i(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function c(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function l(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function E(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function A(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function d(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function D(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function m() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function _() {
                    return viewEnv.getScale();
                }
                function C(u) {
                    return viewEnv.pxToRem(u);
                }
                function B(u) {
                    return viewEnv.remToPx(u);
                }
                function p(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const f = (() => {
                        let u = [];
                        return () => (0 === u.length && (u = Object.keys(viewEnv.getFontsConfig())), u);
                    })(),
                    y = n.cg,
                    M = Object.keys(r.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === r.W[e]), u),
                        {},
                    ),
                    k = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    O = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : s.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                t.d(e, { qP: () => r });
                const n = ['args'],
                    a = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                s = (function (u, e) {
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
                                      Object.assign({ __Type: t, type: u }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    r = {
                        close(u) {
                            a('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            a(64);
                        },
                        move(u) {
                            a(16, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            5521: (u, e, t) => {
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
            9690: (u, e, t) => {
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
            1358: (u, e, t) => {
                t.d(e, { Z: () => r });
                var n = t(3138);
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
            9916: (u, e, t) => {
                t.d(e, { Sw: () => r.Z, B0: () => o, ry: () => C });
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
                var r = t(1358),
                    s = t(8613);
                let o;
                var i;
                (((i = o || (o = {}))[(i.UNDEFINED = 0)] = 'UNDEFINED'),
                    (i[(i.TOOLTIP = 1)] = 'TOOLTIP'),
                    (i[(i.POP_OVER = 2)] = 'POP_OVER'),
                    (i[(i.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (i[(i.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (i[(i.MOVE = 16)] = 'MOVE'),
                    (i[(i.CLOSE = 32)] = 'CLOSE'),
                    (i[(i.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    F = t(3138);
                const D = ['args'];
                function m(u, e, t, n, a, r, s) {
                    try {
                        var o = u[r](s),
                            i = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(i) : Promise.resolve(i).then(n, a);
                }
                const _ = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    C = (function () {
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
                                        function s(u) {
                                            m(r, n, a, s, o, 'next', u);
                                        }
                                        function o(u) {
                                            m(r, n, a, s, o, 'throw', u);
                                        }
                                        s(void 0);
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
                                })(e, D);
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
                    p = () => B(o.CLOSE),
                    g = (u, e) => {
                        u.keyCode === d.n.ESCAPE && e();
                    };
                var b = t(7572);
                const h = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: b.Z,
                        ViewEventType: o,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: E,
                        DateFormatType: A,
                        makeGlobalBoundingBox: _,
                        sendMoveEvent: (u) => B(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => B(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            B(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, a = R.invalid('resId'), r) => {
                            const s = F.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                c = i.x,
                                l = i.y,
                                E = i.width,
                                A = i.height,
                                d = {
                                    x: F.O.view.pxToRem(c) + s.x,
                                    y: F.O.view.pxToRem(l) + s.y,
                                    width: F.O.view.pxToRem(E),
                                    height: F.O.view.pxToRem(A),
                                };
                            B(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: e,
                                bbox: _(d),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => g(e, u);
                            return (
                                window.addEventListener('keydown', e),
                                () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            g(u, p);
                        },
                        handleViewEvent: B,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
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
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (u, e, t) => {
                t.d(e, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
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
            5043: (u, e, t) => {
                var n = t(3138),
                    a = t(1281);
                let r;
                function s(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(r || (r = {}));
                const o = (u) => u.replace(/&nbsp;/g, ' '),
                    i = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    c = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    l = (u, e, t = r.left) => u.split(e).reduce(t === r.left ? i : c, []),
                    E = (() => {
                        const u = new RegExp(
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
                        return (e) =>
                            e
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(u);
                    })(),
                    A = ['zh_cn', 'zh_sg', 'zh_tw'];
                var d = t(9916),
                    F = t(8613);
                const D = 3600;
                (Date.now(), F.Ew.getRegionalDateTime, F.Ew.getFormattedDateTime);
                var m = t(7363),
                    _ = t.n(m);
                const C = () => {},
                    B = (u = 1) => {
                        const e = new Error().stack;
                        let t,
                            n = R.invalid('resId'),
                            a = '';
                        var r;
                        return (
                            e &&
                                ((a = (null == (r = e.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                                (t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (n = window.subViews[t].id)),
                            { callerUrl: a, caller: t, stack: e, resId: n }
                        );
                    },
                    p = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    g = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    b = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    h = d.Sw.instance;
                let v;
                !(function (u) {
                    ((u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep'));
                })(v || (v = {}));
                const w = (u = 'model', e = v.Deep) => {
                        const t = (0, m.useState)(0),
                            n = (t[0], t[1]),
                            a = (0, m.useMemo)(() => B(), []),
                            r = a.callerUrl,
                            s = a.caller,
                            o = a.resId,
                            i = (0, m.useMemo)(() => {
                                const e = (function (u) {
                                    return (window.injected || (window.injected = new Map()), window.injected).has(u);
                                })(r.replace('.js', '.html'));
                                return window.__feature && window.__feature !== s && !e ? `subViews.${s}.${u}` : u;
                            }, [r, s, u]),
                            c = (0, m.useState)(() =>
                                ((u) => {
                                    const e = p(u, window);
                                    for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                    return g(e) ? e.value : e;
                                })(
                                    ((u) =>
                                        ((u, e) =>
                                            u.split('.').reduce((u, e) => {
                                                const t = p(`${u}.${e}`, window);
                                                return g(t) ? ((u, e) => `${u}.${e}.value`)(u, e) : `${u}.${e}`;
                                            }))(u))(i),
                                ),
                            ),
                            l = c[0],
                            E = c[1],
                            A = (0, m.useRef)(-1);
                        return (
                            ((u) => {
                                const e = (0, m.useRef)(!1);
                                e.current || (u(), (e.current = !0));
                            })(() => {
                                if (
                                    ('boolean' == typeof e &&
                                        ((e = e ? v.Deep : v.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    e !== v.None)
                                ) {
                                    const t = (u) => {
                                            ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                            e === v.Deep
                                                ? (u === l && n((u) => u + 1), E(u))
                                                : E(Object.assign([], u));
                                        },
                                        a = ((u) => {
                                            const e = ((u) => {
                                                    const e = B(),
                                                        t = e.caller,
                                                        n = e.resId,
                                                        a =
                                                            window.__feature && window.__feature !== t && t
                                                                ? `subViews.${t}`
                                                                : '';
                                                    return { modelPrefix: a, modelPath: b(a, ''), resId: n };
                                                })(),
                                                t = e.modelPrefix,
                                                n = u.split('.');
                                            if (n.length > 0) {
                                                const u = [n[0]];
                                                return (
                                                    n.reduce((e, n) => {
                                                        const a = p(b(t, `${e}.${n}`), window);
                                                        return g(a)
                                                            ? (u.push(a.id), `${e}.${n}.value`)
                                                            : (u.push(n), `${e}.${n}`);
                                                    }),
                                                    u.reduce((u, e) => u + '.' + e)
                                                );
                                            }
                                            return '';
                                        })(u);
                                    A.current = h.addCallback(a, t, o, e === v.Deep);
                                }
                            }),
                            (0, m.useEffect)(() => {
                                if (e !== v.None)
                                    return () => {
                                        h.removeCallback(A.current, o);
                                    };
                            }, [o, e]),
                            l
                        );
                    },
                    f =
                        (d.Sw.instance,
                        (u = 0, e, t = 0, n = C) => {
                            const a = (0, m.useState)(u),
                                r = a[0],
                                s = a[1];
                            return (
                                (0, m.useEffect)(() => {
                                    if (u > 0) {
                                        s(u);
                                        const a = Date.now(),
                                            r = setInterval(
                                                () => {
                                                    const e = u - Math.floor((Date.now() - a) / 1e3);
                                                    null !== t && e <= t ? (s(t), n && n(), clearInterval(r)) : s(e);
                                                },
                                                1e3 * (e || (u > 120 ? 60 : 1)),
                                            );
                                        return () => {
                                            clearInterval(r);
                                        };
                                    }
                                }, [u, e, t, n]),
                                r
                            );
                        });
                var y = t(1533),
                    M = t.n(y),
                    k = t(6483),
                    O = t.n(k);
                let S, I, T, P, N;
                var x, Q, L;
                (((L = S || (S = {})).Init = 'init'),
                    (L.Appear = 'appear'),
                    (L.ForceComplete = 'force-complete'),
                    (L.Complete = 'complete'),
                    (L.ForceDisappear = 'force-disappear'),
                    (L.Disappear = 'disappear'),
                    ((Q = I || (I = {})).Micro = 'micro'),
                    (Q.Mini = 'mini'),
                    (Q.Normal = 'normal'),
                    (function (u) {
                        ((u[(u.Micro = 155)] = 'Micro'),
                            (u[(u.Mini = 270)] = 'Mini'),
                            (u[(u.Normal = 365)] = 'Normal'));
                    })(T || (T = {})),
                    (function (u) {
                        ((u[(u.Mini = 65)] = 'Mini'), (u[(u.Normal = 186)] = 'Normal'));
                    })(P || (P = {})),
                    ((x = N || (N = {}))[(x.None = 0)] = 'None'),
                    (x[(x.List = 1)] = 'List'),
                    (x[(x.Bonus = 2)] = 'Bonus'));
                _().Component;
                const $ = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
                let z, j;
                (!(function (u) {
                    ((u.Small = 'small'), (u.Medium = 'medium'), (u.Default = 'medium'));
                })(z || (z = {})),
                    (function (u) {
                        ((u[(u.Simple = 0)] = 'Simple'), (u[(u.Growing = 1)] = 'Growing'));
                    })(j || (j = {})));
                const q = ({ size: u = z.Default }) => {
                        const e = O()($.background, $[`background__${u}`]);
                        return _().createElement('div', { className: e });
                    },
                    V = (u, e) => {
                        let t;
                        const n = setTimeout(() => {
                            t = u();
                        }, e);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(n));
                        };
                    };
                let U, W;
                (!(function (u) {
                    ((u.Idle = 'Idle'), (u.Grow = 'Grow'), (u.Shrink = 'Shrink'), (u.End = 'End'));
                })(U || (U = {})),
                    (function (u) {
                        ((u.Idle = 'Idle'), (u.In = 'In'), (u.End = 'End'));
                    })(W || (W = {})));
                const G = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    H = ({ size: u }) => {
                        const e = O()(G.base, G[`base__${u}`]);
                        return _().createElement('div', { className: e });
                    },
                    K = (0, m.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: n,
                            size: a,
                            to: r,
                            onEndAnimation: s,
                            onChangeAnimationState: o,
                        }) => {
                            const i = r < n,
                                c = (0, m.useState)(W.Idle),
                                l = c[0],
                                E = c[1],
                                A = l === W.In,
                                d = l === W.End,
                                F = l === W.Idle,
                                D = (0, m.useCallback)(
                                    (u) => {
                                        (E(u), o && o(u));
                                    },
                                    [o],
                                );
                            ((0, m.useEffect)(() => {
                                if (F && !t)
                                    return V(() => {
                                        D(W.In);
                                    }, e);
                            }, [D, t, F, e]),
                                (0, m.useEffect)(() => {
                                    if (A)
                                        return V(() => {
                                            (s && s(), D(W.End));
                                        }, u + e);
                                }, [D, A, s, e, u]));
                            const C = (0, m.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [i ? 'left' : 'right']: '0',
                                    }),
                                    [i, e, u],
                                ),
                                B = (0, m.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [i ? 'left' : 'right']: '0',
                                    }),
                                    [i, e, u],
                                ),
                                p = (0, m.useMemo)(
                                    () => ({ width: `${Math.abs(n - r)}%`, left: `${i ? r : n}%` }),
                                    [n, i, r],
                                );
                            return d
                                ? null
                                : _().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: p },
                                      _().createElement(
                                          'div',
                                          { style: F ? C : B, className: 'ProgressBarDeltaSimple_delta_99' },
                                          _().createElement(H, { size: a }),
                                      ),
                                  );
                        },
                    ),
                    Y = {
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
                    Z = (0, m.memo)(
                        ({ size: u, lineRef: e, disabled: t, baseStyles: n, isComplete: a, withoutBounce: r }) => {
                            const s = O()(
                                    Y.base,
                                    Y[`base__${u}`],
                                    t && Y.base__disabled,
                                    a && Y.base__finished,
                                    r && Y.base__withoutBounce,
                                ),
                                o = !t && !a;
                            return _().createElement(
                                'div',
                                { className: s, style: n, ref: e },
                                _().createElement('div', { className: Y.pattern }),
                                _().createElement('div', { className: Y.gradient }),
                                o && _().createElement(H, { size: u }),
                            );
                        },
                    ),
                    X = (0, m.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: n,
                            disabled: a,
                            isComplete: r,
                            animationSettings: s,
                            onChangeAnimationState: o,
                            onEndAnimation: i,
                        }) => {
                            const c = (0, m.useMemo)(
                                () => ({
                                    width: `${u}%`,
                                    transitionDuration: `${s.line.duration}ms`,
                                    transitionDelay: `${s.line.delay}ms`,
                                }),
                                [s.line.delay, s.line.duration, u],
                            );
                            return _().createElement(
                                _().Fragment,
                                null,
                                _().createElement(Z, {
                                    size: e,
                                    lineRef: n,
                                    disabled: a,
                                    isComplete: r,
                                    baseStyles: c,
                                }),
                                t >= 0 &&
                                    _().createElement(K, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        freezed: s.freezed,
                                        from: t,
                                        size: e,
                                        to: u,
                                        onChangeAnimationState: o,
                                        onEndAnimation: i,
                                    }),
                            );
                        },
                    ),
                    J = (u) => (u ? { left: 0 } : { right: 0 }),
                    uu = (u, e) => (u ? { right: 100 - e + '%' } : { left: `${e}%` }),
                    eu = (u) => ({ transitionDuration: `${u}ms` }),
                    tu = (0, m.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: n,
                            size: a,
                            to: r,
                            onEndAnimation: s,
                            onChangeAnimationState: o,
                            className: i,
                        }) => {
                            const c = r < n,
                                l = (0, m.useState)(U.Idle),
                                E = l[0],
                                A = l[1],
                                d = E === U.End,
                                F = E === U.Idle,
                                D = E === U.Grow,
                                C = E === U.Shrink,
                                B = (0, m.useCallback)(
                                    (u) => {
                                        (A(u), o && o(u));
                                    },
                                    [o],
                                ),
                                p = (0, m.useCallback)(
                                    (u, e) =>
                                        V(() => {
                                            B(u);
                                        }, e),
                                    [B],
                                );
                            (0, m.useEffect)(() => {
                                if (!t)
                                    return F
                                        ? p(U.Grow, e)
                                        : D
                                          ? p(U.Shrink, u)
                                          : C
                                            ? p(U.End, u)
                                            : void (d && s && s());
                            }, [p, t, d, D, F, C, s, e, u]);
                            const g = (0, m.useMemo)(() => Object.assign({ width: '100%' }, eu(u), J(c)), [c, u]),
                                b = (0, m.useMemo)(() => Object.assign({ width: '0%' }, eu(u), J(c)), [c, u]),
                                h = (0, m.useMemo)(() => Object.assign({ width: '0%' }, uu(c, n), eu(u)), [n, c, u]),
                                v = (0, m.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(r - n)}%` }, uu(c, n), eu(u)),
                                    [n, c, r, u],
                                );
                            if (d) return null;
                            const w = O()(
                                'ProgressBarDeltaGrow_base_7e',
                                i,
                                c && 0 === r && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return _().createElement(
                                'div',
                                { style: F ? h : v, className: w },
                                _().createElement(
                                    'div',
                                    { style: C ? b : g, className: 'ProgressBarDeltaGrow_glow_68' },
                                    _().createElement(H, { size: a }),
                                ),
                            );
                        },
                    ),
                    nu = (0, m.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: n,
                            disabled: a,
                            isComplete: r,
                            animationSettings: s,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                        }) => {
                            const c = u < t,
                                l = (0, m.useState)(!1),
                                E = l[0],
                                A = l[1],
                                d = (0, m.useCallback)(
                                    (u) => {
                                        (u === U.Shrink && A(!0), i && i(u));
                                    },
                                    [i],
                                ),
                                F = (0, m.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                D = (0, m.useMemo)(
                                    () => ({ width: `${u}%`, transitionDuration: `${s.line.duration}ms` }),
                                    [s.line.duration, u],
                                );
                            return _().createElement(
                                _().Fragment,
                                null,
                                _().createElement(Z, {
                                    size: e,
                                    lineRef: n,
                                    disabled: a,
                                    isComplete: r,
                                    withoutBounce: c && 0 === u,
                                    baseStyles: E ? D : F,
                                }),
                                t >= 0 &&
                                    _().createElement(tu, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        onChangeAnimationState: d,
                                        freezed: s.freezed,
                                        onEndAnimation: o,
                                        from: t,
                                        size: e,
                                        to: u,
                                        className: s.delta.className,
                                    }),
                            );
                        },
                    ),
                    au = ['onComplete', 'onEndAnimation'];
                function ru() {
                    return (
                        (ru =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        ru.apply(this, arguments)
                    );
                }
                const su = (0, m.memo)((u) => {
                        let e = u.onComplete,
                            t = u.onEndAnimation,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, au);
                        const a = (0, m.useState)(!1),
                            r = a[0],
                            s = a[1],
                            o = (0, m.useCallback)(() => {
                                const u = 100 === n.to;
                                (u !== r && s(u), u && e && e(), t && t());
                            }, [r, e, t, n.to]);
                        switch (n.animationSettings.type) {
                            case j.Simple:
                                return _().createElement(X, ru({}, n, { onEndAnimation: o, isComplete: r }));
                            case j.Growing:
                                return _().createElement(nu, ru({}, n, { onEndAnimation: o, isComplete: r }));
                            default:
                                return null;
                        }
                    }),
                    ou = ({ size: u, value: e, lineRef: t, disabled: n, onComplete: a }) => {
                        const r = (0, m.useMemo)(() => ({ width: `${e}%`, transitionProperty: 'none' }), [e]),
                            s = 100 === e;
                        return (
                            (0, m.useEffect)(() => {
                                s && a && a();
                            }, [s, a]),
                            _().createElement(Z, { size: u, disabled: n, baseStyles: r, isComplete: s, lineRef: t })
                        );
                    },
                    iu = ['onEndAnimation'];
                function cu() {
                    return (
                        (cu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        cu.apply(this, arguments)
                    );
                }
                const lu = (0, m.memo)((u) => {
                    let e = u.onEndAnimation,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                            return a;
                        })(u, iu);
                    const n = (0, m.useRef)({}),
                        a = (0, m.useCallback)(() => {
                            ((n.current.from = void 0), e && e());
                        }, [e]),
                        r = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = r),
                        _().createElement(
                            su,
                            cu({}, t, {
                                onEndAnimation: a,
                                key: `${r}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                                from: r,
                            }),
                        )
                    );
                });
                function Eu() {
                    return (
                        (Eu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Eu.apply(this, arguments)
                    );
                }
                const Au = (0, m.memo)(
                        ({
                            size: u,
                            value: e,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: a,
                            additionalKey: r,
                            animationSettings: s,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: c,
                        }) => {
                            if (a === e)
                                return _().createElement(ou, {
                                    key: `${a}-${e}-${r}`,
                                    size: u,
                                    value: e,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: c,
                                });
                            const l = {
                                from: a,
                                to: e,
                                size: u,
                                additionalKey: r,
                                lineRef: t,
                                disabled: n,
                                animationSettings: s,
                                onComplete: c,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return s.withStack
                                ? _().createElement(lu, l)
                                : _().createElement(su, Eu({ key: `${a}-${e}-${r}` }, l));
                        },
                    ),
                    du = (u) => ({
                        '--progress-base': `url(${u.bgImageBase})`,
                        '--progress-line-base': u.line.bgColorBase,
                        '--progress-line-disabled': u.line.bgColorDisabled,
                        '--progress-line-finished': u.line.bgColorFinished,
                        '--progress-pattern-base': `url(${u.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${u.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${u.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${u.glow}')`,
                        '--progress-glow-small': `url('${u.glowSmall}')`,
                        '--progress-delta-color': u.delta.color,
                        '--progress-delta-shadow': u.delta.shadow,
                    }),
                    Fu = (u, e, t) => (t < u ? u : t > e ? e : t),
                    Du = (u, e, t) => ('number' == typeof t ? (Fu(0, e, t) / e) * 100 : u),
                    mu = {
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
                    _u = {
                        freezed: !1,
                        withStack: !1,
                        type: j.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Cu = (0, m.memo)(
                        ({
                            maxValue: u = 100,
                            theme: e = mu,
                            size: t = z.Default,
                            animationSettings: n = _u,
                            disabled: a = !1,
                            withoutBackground: r = !1,
                            value: s,
                            deltaFrom: o,
                            additionalKey: i,
                            lineRef: c,
                            onChangeAnimationState: l,
                            onEndAnimation: E,
                            onComplete: A,
                        }) => {
                            const d = ((u, e, t) =>
                                (0, m.useMemo)(() => {
                                    const n = (Fu(0, e, u) / e) * 100;
                                    return { value: n, deltaFrom: Du(n, e, t) };
                                }, [t, e, u]))(s, u, o);
                            return _().createElement(
                                'div',
                                { className: O()($.base, $[`base__${t}`]), style: du(e) },
                                !r && _().createElement(q, { size: t }),
                                _().createElement(Au, {
                                    size: t,
                                    lineRef: c,
                                    disabled: a,
                                    value: d.value,
                                    deltaFrom: d.deltaFrom,
                                    additionalKey: i,
                                    animationSettings: n,
                                    onEndAnimation: E,
                                    onChangeAnimationState: l,
                                    onComplete: A,
                                }),
                            );
                        },
                    ),
                    Bu = ({ className: u, count: e, delay: t }) => {
                        const n = (0, m.useState)(1),
                            a = n[0],
                            r = n[1];
                        return (
                            (0, m.useEffect)(() => {
                                const u = setInterval(() => {
                                    r((u) => (u <= e ? u + 1 : 1));
                                }, t);
                                return () => {
                                    clearInterval(u);
                                };
                            }),
                            _().createElement('span', { className: u }, '. '.repeat(a))
                        );
                    },
                    pu = ({
                        startValue: u,
                        hourFormat: e = R.strings.quests.general.countdown.timer_hrs(),
                        minuteFormat: t = R.strings.quests.general.countdown.timer_min(),
                        roundUpHours: n = !1,
                        pendingDotCount: a = 5,
                        className: r,
                    }) => {
                        const s = f(u, u > 3660 ? 60 : 1);
                        return _().createElement(
                            'div',
                            { className: r },
                            s > 0
                                ? ((u, e, t, n) =>
                                      ((u, e, t) => {
                                          const n = Math.floor(e / 3600).toString(),
                                              a = Math.floor((e % 3600) / 60).toString(),
                                              r = Math.floor(e % 60).toString();
                                          return u
                                              .replace('%HH', n.padStart(2, '0'))
                                              .replace('%H', t && Number(a) >= 30 ? (Number(n) + 1).toString() : n)
                                              .replace('%MM', a.padStart(2, '0'))
                                              .replace('%M', a.toString())
                                              .replace('%SS', r.padStart(2, '0'))
                                              .replace('%S', r);
                                      })(u < D ? t : e, u, n))(s, e, t, n)
                                : _().createElement(Bu, { count: a, delay: 500 }),
                        );
                    },
                    gu = ({ countdown: u, noIcon: e }) =>
                        _().createElement(
                            'div',
                            { className: 'Countdown_base_6c' },
                            !e && _().createElement('div', { className: 'Countdown_icon_cb' }),
                            _().createElement(
                                'div',
                                { className: 'Countdown_time_96' },
                                _().createElement(pu, {
                                    startValue: u,
                                    hourFormat: R.strings.quests.general.countdown.timer_hrs_only(),
                                    roundUpHours: !0,
                                }),
                            ),
                        ),
                    bu = [
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
                function hu(u) {
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
                const vu = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: d.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    wu = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            a = u.onMouseEnter,
                            r = u.onMouseLeave,
                            s = u.onMouseDown,
                            o = u.onClick,
                            i = u.ignoreShowDelay,
                            c = void 0 !== i && i,
                            l = u.ignoreMouseClick,
                            E = void 0 !== l && l,
                            A = u.decoratorId,
                            d = void 0 === A ? 0 : A,
                            F = u.isEnabled,
                            D = void 0 === F || F,
                            _ = u.targetId,
                            C = void 0 === _ ? 0 : _,
                            p = u.onShow,
                            g = u.onHide,
                            b = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, bu);
                        const h = (0, m.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, m.useMemo)(() => C || B().resId, [C]),
                            w = (0, m.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (vu(t, d, { isMouseEvent: !0, on: !0, arguments: hu(n) }, v),
                                    p && p(),
                                    (h.current.isVisible = !0));
                            }, [t, d, n, v, p]),
                            f = (0, m.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const u = h.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (h.current.timeoutId = 0)),
                                        vu(t, d, { on: !1 }, v),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, d, v, g]),
                            y = (0, m.useCallback)((u) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(h.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, m.useEffect)(() => {
                                const u = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', y, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', y, { capture: !0 }),
                                            u && window.clearTimeout(u));
                                    }
                                );
                            }, []),
                            (0, m.useEffect)(() => {
                                !1 === D && f();
                            }, [D, f]),
                            (0, m.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ),
                            D
                                ? (0, m.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((M = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(w, c ? 100 : 400)),
                                                          a && a(u),
                                                          M && M(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  (f(), null == r || r(e), null == u || u(e));
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  (!1 === E && f(), null == o || o(e), null == u || u(e));
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  (!1 === E && f(), null == s || s(e), null == u || u(e));
                                              })(e.props.onMouseDown),
                                          },
                                          b,
                                      ),
                                  )
                                : e
                        );
                        var M;
                    };
                class fu extends _().Component {
                    constructor(u) {
                        (super(u),
                            (this.APPEAR_DURATION = 0),
                            (this.COMPLETE_DURATION = 0),
                            (this.DISAPPEAR_DURATION = 0),
                            (this.CARD_POSITION_DELAY = 0),
                            (this.state = { animateAppear: !1, animateComplete: !1, animateDisappear: !1 }),
                            (this.tooltipArgs = {}),
                            (this.animationTimeout = null),
                            (this.positionTimeout = null),
                            (this.componentDidMount = () => {
                                this.props.animateDisappear && !this.state.animateDisappear
                                    ? this.nextAnimation(S.ForceDisappear)
                                    : this.nextAnimation(S.Init);
                            }),
                            (this.componentDidUpdate = (u) => {
                                u !== this.props &&
                                    (this.props.animateComplete && !this.state.animateComplete
                                        ? this.nextAnimation(S.ForceComplete)
                                        : this.props.animateDisappear &&
                                          !this.state.animateDisappear &&
                                          this.nextAnimation(S.ForceDisappear),
                                    u.animateDisappear &&
                                        !this.props.animateDisappear &&
                                        this.setState(
                                            { animateAppear: !1, animateComplete: !1, animateDisappear: !1 },
                                            () => {
                                                this.nextAnimation(S.Init);
                                            },
                                        ));
                            }),
                            (this.componentWillUnmount = () => {
                                this.clearTimeouts();
                            }),
                            (this.scheduleAnimationEvent = (u, e) => {
                                this.animationTimeout = window.setTimeout(() => {
                                    this.nextAnimation(u);
                                }, e);
                            }),
                            (this.clearTimeouts = () => {
                                (null !== this.animationTimeout &&
                                    (window.clearTimeout(this.animationTimeout), (this.animationTimeout = null)),
                                    null !== this.positionTimeout &&
                                        (window.clearTimeout(this.positionTimeout), (this.positionTimeout = null)));
                            }),
                            (this.nextAnimation = (u) => {
                                const e = this.props,
                                    t = e.onAnimationEvent,
                                    n = e.position;
                                (this.clearTimeouts(), t && t(u, n));
                                const a = n * this.CARD_POSITION_DELAY;
                                switch (u) {
                                    case S.Init:
                                        ((this.positionTimeout = window.setTimeout(() => {
                                            this.setState({ animateAppear: !0 });
                                        }, a)),
                                            this.scheduleAnimationEvent(S.Appear, a + this.APPEAR_DURATION));
                                        break;
                                    case S.Appear:
                                    case S.ForceComplete:
                                        this.props.animateComplete &&
                                            (this.setState({ animateComplete: !0, animateAppear: !0 }),
                                            this.scheduleAnimationEvent(S.Complete, a + this.COMPLETE_DURATION));
                                        break;
                                    case S.Complete:
                                    case S.ForceDisappear:
                                        if (this.props.animateDisappear) {
                                            (this.setState({ animateDisappear: !0 }),
                                                this.scheduleAnimationEvent(S.Disappear, this.DISAPPEAR_DURATION));
                                            break;
                                        }
                                }
                            }),
                            (this.tooltipArgs = { missionId: u.quest.id }));
                    }
                    renderCard() {
                        return _().createElement('div', null);
                    }
                    render() {
                        return _().createElement(
                            wu,
                            {
                                contentId: R.views.lobby.missions.DailyQuestsTooltip('resId'),
                                args: this.tooltipArgs,
                                isEnabled: !0,
                            },
                            this.renderCard(),
                        );
                    }
                }
                fu.defaultProps = { position: 1, maxPosition: 1 };
                const yu = fu,
                    Mu = Object.assign({}, _u, {
                        line: Object.assign({}, _u.line, { delay: 1e3 }),
                        delta: Object.assign({}, _u.delta, { delay: 1e3 }),
                    }),
                    ku = class extends yu {
                        constructor(...u) {
                            (super(...u),
                                (this.APPEAR_DURATION = 800),
                                (this.COMPLETE_DURATION = 2500),
                                (this.DISAPPEAR_DURATION = 400),
                                (this.CARD_POSITION_DELAY = 100));
                        }
                        renderCard() {
                            const u = this.props,
                                e = u.position,
                                t = u.maxPosition,
                                n = u.quest,
                                a = u.animateComplete,
                                r = u.bonus,
                                s = u.countdown,
                                o = u.onClick,
                                i = u.onMouseEnter,
                                c = u.innerRef,
                                l = u.disableProgressbarDelta,
                                E = this.state,
                                A = E.animateAppear,
                                d = E.animateComplete,
                                F = E.animateDisappear,
                                D = n.description,
                                m = n.currentProgress,
                                C = n.earned,
                                B = n.icon,
                                p = n.completed,
                                g = n.totalProgress,
                                b = `${systemLocale.toUpperCase(D[0])}${D.slice(1)}`,
                                h = g > 0,
                                v = { transform: F ? `translateY(${60 * (t - e + 1) * 1.5}rem)` : void 0 };
                            return _().createElement(
                                'div',
                                {
                                    className: O()(
                                        'QuestCard_base_01',
                                        'QuestCard_base__appearStart_dd',
                                        { QuestCard_base__complete_b5: p, QuestCard_base__bonus_f0: r },
                                        { QuestCard_base__appearEnd_d5: A, QuestCard_base__disappearEnd_34: F },
                                    ),
                                    style: v,
                                    onClick: o,
                                    onMouseEnter: i,
                                    ref: c,
                                },
                                _().createElement(
                                    'div',
                                    { className: 'QuestCard_border_00' },
                                    _().createElement('div', {
                                        className: O()(
                                            'QuestCard_border_bg_cb',
                                            'QuestCard_border_bg__appearStart_07',
                                            { QuestCard_border_bg__appearEnd_6e: A },
                                        ),
                                    }),
                                ),
                                _().createElement(
                                    'div',
                                    { className: O()('QuestCard_complete_97', { QuestCard_complete__blink_78: d }) },
                                    _().createElement('div', {
                                        className: O()(
                                            'QuestCard_complete_bg_89',
                                            'QuestCard_complete_bg__completeStart_68',
                                            { QuestCard_complete_bg__completeEnd_dd: d },
                                        ),
                                    }),
                                ),
                                _().createElement('div', { className: 'QuestCard_hoverBg_62' }),
                                _().createElement(
                                    'div',
                                    { className: 'QuestCard_icon_7e' },
                                    _().createElement('div', {
                                        className: O()(
                                            'QuestCard_icon_img_d7',
                                            { QuestCard_icon_img__check_2e: p },
                                            {
                                                QuestCard_icon__completeStart_af: a && p,
                                                QuestCard_icon__completeEnd_e0: d,
                                            },
                                        ),
                                        style: p ? void 0 : Nu(B),
                                    }),
                                ),
                                _().createElement(
                                    'div',
                                    { className: 'QuestCard_content_3e' },
                                    _().createElement(
                                        'div',
                                        {
                                            className: O()('QuestCard_description_6a', {
                                                QuestCard_description_pad_right_b6: s,
                                            }),
                                        },
                                        Lu(b, g ? 35 : 70),
                                    ),
                                    h &&
                                        _().createElement(
                                            _().Fragment,
                                            null,
                                            _().createElement(
                                                'div',
                                                {
                                                    className: O()('QuestCard_progressCounter_3f', {
                                                        QuestCard_progressCounterComplete_86: p,
                                                    }),
                                                },
                                                _().createElement(
                                                    'span',
                                                    { className: 'QuestCard_progressCounter_current_af' },
                                                    m,
                                                ),
                                                _().createElement(
                                                    'span',
                                                    { className: 'QuestCard_progressCounter_separator_6b' },
                                                    '/',
                                                ),
                                                _().createElement(
                                                    'span',
                                                    { className: 'QuestCard_progressCounter_total_50' },
                                                    g,
                                                ),
                                            ),
                                            _().createElement(
                                                'div',
                                                { className: 'QuestCard_progressBar_26' },
                                                _().createElement(Cu, {
                                                    animationSettings: Mu,
                                                    size: z.Small,
                                                    value: m,
                                                    deltaFrom: l ? void 0 : m - C,
                                                    maxValue: g,
                                                }),
                                            ),
                                        ),
                                ),
                                !p &&
                                    s &&
                                    _().createElement(
                                        'div',
                                        { className: 'QuestCard_countdown_1a' },
                                        _().createElement(gu, { countdown: s }),
                                    ),
                            );
                        }
                    },
                    Ou = {
                        base__appearStart: 'IconQuestCardMini_base__appearStart_b2',
                        base__appearEnd: 'IconQuestCardMini_base__appearEnd_75',
                        base__disappearStart: 'IconQuestCardMini_base__disappearStart_cb',
                        border_bg__appearStart: 'IconQuestCardMini_border_bg__appearStart_34',
                        border_bg__appearEnd: 'IconQuestCardMini_border_bg__appearEnd_81',
                        complete__blink: 'IconQuestCardMini_complete__blink_31',
                        'bg-blink': 'IconQuestCardMini_bg-blink_e4',
                        complete_bg__completeStart: 'IconQuestCardMini_complete_bg__completeStart_e2',
                        complete_bg__completeEnd: 'IconQuestCardMini_complete_bg__completeEnd_d2',
                        check__completeStart: 'IconQuestCardMini_check__completeStart_4e',
                        check__completeEnd: 'IconQuestCardMini_check__completeEnd_0d',
                        base: 'IconQuestCardMini_base_8a',
                        hoverBg: 'IconQuestCardMini_hoverBg_18',
                        base__complete: 'IconQuestCardMini_base__complete_c2',
                        base__bonus: 'IconQuestCardMini_base__bonus_df',
                        border: 'IconQuestCardMini_border_d2',
                        border_bg: 'IconQuestCardMini_border_bg_47',
                        icon: 'IconQuestCardMini_icon_f7',
                        check: 'IconQuestCardMini_check_66',
                        complete: 'IconQuestCardMini_complete_4a',
                        complete_bg: 'IconQuestCardMini_complete_bg_30',
                    },
                    Su = {
                        base__appearStart: 'IconQuestCardMicro_base__appearStart_4e',
                        base__appearEnd: 'IconQuestCardMicro_base__appearEnd_1f',
                        base__disappearStart: 'IconQuestCardMicro_base__disappearStart_b0',
                        border_bg__appearStart: 'IconQuestCardMicro_border_bg__appearStart_f9',
                        border_bg__appearEnd: 'IconQuestCardMicro_border_bg__appearEnd_2a',
                        complete__blink: 'IconQuestCardMicro_complete__blink_25',
                        'bg-blink': 'IconQuestCardMicro_bg-blink_bc',
                        complete_bg__completeStart: 'IconQuestCardMicro_complete_bg__completeStart_9a',
                        complete_bg__completeEnd: 'IconQuestCardMicro_complete_bg__completeEnd_3c',
                        check__completeStart: 'IconQuestCardMicro_check__completeStart_d4',
                        check__completeEnd: 'IconQuestCardMicro_check__completeEnd_df',
                        base: 'IconQuestCardMicro_base_a6',
                        hoverBg: 'IconQuestCardMicro_hoverBg_60',
                        base__complete: 'IconQuestCardMicro_base__complete_b2',
                        base__bonus: 'IconQuestCardMicro_base__bonus_ea',
                        border: 'IconQuestCardMicro_border_b6',
                        border_bg: 'IconQuestCardMicro_border_bg_03',
                        icon: 'IconQuestCardMicro_icon_2a',
                        check: 'IconQuestCardMicro_check_3a',
                        complete: 'IconQuestCardMicro_complete_8d',
                        complete_bg: 'IconQuestCardMicro_complete_bg_94',
                    };
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
                class Iu extends yu {
                    constructor(...u) {
                        (super(...u),
                            (this.APPEAR_DURATION = 300),
                            (this.COMPLETE_DURATION = 2500),
                            (this.DISAPPEAR_DURATION = 300),
                            (this.CARD_POSITION_DELAY = 100));
                    }
                    renderCard() {
                        const u = this.props,
                            e = u.position,
                            t = u.quest,
                            n = u.animateComplete,
                            a = u.bonus,
                            r = u.countdown,
                            s = u.onClick,
                            o = u.onMouseEnter,
                            i = u.micro,
                            c = u.innerRef,
                            l = this.state,
                            E = l.animateAppear,
                            A = l.animateComplete,
                            d = l.animateDisappear,
                            F = t.icon,
                            D = t.completed,
                            m = { transform: d ? `translateX(${-60 * e}rem)` : void 0 },
                            C = i ? Su : Ou;
                        return _().createElement(
                            'div',
                            {
                                className: O()(
                                    C.base,
                                    C.base__appearStart,
                                    { [C.base__complete]: D, [C.base__bonus]: a },
                                    { [C.base__appearEnd]: E, [C.base__disappearStart]: d },
                                ),
                                style: m,
                                onClick: s,
                                onMouseEnter: o,
                                ref: c,
                            },
                            _().createElement('div', { className: C.hoverBg }),
                            _().createElement(
                                'div',
                                { className: C.border },
                                _().createElement('div', {
                                    className: O()(C.border_bg, C.border_bg__appearStart, {
                                        [C.border_bg__appearEnd]: E,
                                    }),
                                }),
                            ),
                            _().createElement(
                                'div',
                                { className: O()(C.complete, { [C.complete__blink]: A }) },
                                _().createElement('div', {
                                    className: O()(C.complete_bg, C.complete_bg__completeStart, {
                                        [C.complete_bg__completeEnd]: A,
                                    }),
                                }),
                            ),
                            _().createElement('div', { className: C.icon, style: Nu(F) }),
                            D &&
                                _().createElement('div', {
                                    className: O()(C.check, { [C.check__completeStart]: n, [C.check__completeEnd]: A }),
                                }),
                            !D && r && _().createElement(gu, { countdown: r, noIcon: !0 }),
                        );
                    }
                }
                const Tu = Iu,
                    Pu = (u) => _().createElement(Iu, Ru({}, u, { micro: !0 })),
                    Nu = (u) => ({
                        backgroundImage: `url(${R.images.gui.maps.icons.missions.icons.$dyn(`c_32_${u}_silver`)})`,
                    }),
                    xu = (u) => u.every((u) => u.value.completed),
                    Qu = (u) => (u === I.Normal ? ku : u === I.Micro ? Pu : (I.Mini, Tu)),
                    Lu = (u, e) => (u.length > e ? u.slice(0, e).split(' ').slice(0, -1).join(' ') + '…' : u),
                    $u = (u) => u.map((u) => u.value.currentProgress).join('-');
                var zu = t(3403);
                function ju() {
                    return !1;
                }
                console.log;
                var qu = t(9174);
                function Vu(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = new Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const Uu = (u) => (0 === u ? window : window.subViews.get(u)),
                    Wu = ((u, e) => {
                        const t = (0, m.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: a, children: r, mocks: s }) {
                                const o = (0, m.useRef)([]),
                                    i = (u, t, a) => {
                                        var r;
                                        const s = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = Uu,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function s(u, e = 0) {
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
                                                    const n = t(e),
                                                        r = a.split('.').reduce((u, e) => u[e], n);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? r
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, s) => {
                                                        const i = 'string' == typeof s ? `${a}.${s}` : a,
                                                            c = n.O.view.addModelObserver(i, e, !0);
                                                        return (r.set(c, t), u && t(o(s)), c);
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
                                                        for (
                                                            var u,
                                                                t = (function (u, e) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            u[Symbol.iterator]) ||
                                                                        u['@@iterator'];
                                                                    if (t) return (t = t.call(u)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(u) ||
                                                                        (t = (function (u, e) {
                                                                            if (u) {
                                                                                if ('string' == typeof u)
                                                                                    return Vu(u, e);
                                                                                var t = Object.prototype.toString
                                                                                    .call(u)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        u.constructor &&
                                                                                        (t = u.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(u)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? Vu(u, e)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(u)) ||
                                                                        (e && u && 'number' == typeof u.length)
                                                                    ) {
                                                                        t && (u = t);
                                                                        var n = 0;
                                                                        return function () {
                                                                            return n >= u.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: u[n++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(r.keys());
                                                            !(u = t()).done;
                                                        )
                                                            s(u.value, e);
                                                    },
                                                    unsubscribe: s,
                                                };
                                            })(t),
                                            i =
                                                'real' === u
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === u ? (null == a ? void 0 : a.getter(e)) : i.readByPath(e),
                                            l = (u) => o.current.push(u),
                                            E = (({ observableModel: u }) => {
                                                const e = {
                                                    root: u.object(),
                                                    comp7WidgetQuest: u.object('comp7WidgetQuest'),
                                                    animationParams: qu.LO.box({ isVisible: !0, delay: 0 }),
                                                };
                                                return Object.assign({}, e);
                                            })({
                                                mode: u,
                                                readByPath: c,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : c(e),
                                                            a = qu.LO.box(n, { equals: ju });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, qu.aD)((u) => a.set(u)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : c(e),
                                                            a = qu.LO.box(n, { equals: ju });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, qu.aD)((u) => a.set(u)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = c(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (u, e) => ((u[e] = qu.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, qu.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(u[e]);
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
                                                                s = r.reduce(
                                                                    (u, [e, t]) => ((u[t] = qu.LO.box(n[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, qu.aD)((u) => {
                                                                            r.forEach(([e, t]) => {
                                                                                s[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: l,
                                            }),
                                            A = { mode: u, model: E, externalModel: i, cleanup: l };
                                        return {
                                            model: E,
                                            controls: 'mocks' === u && a ? a.controls(A) : e(A),
                                            externalModel: i,
                                            mode: u,
                                        };
                                    },
                                    c = (0, m.useRef)(!1),
                                    l = (0, m.useState)(u),
                                    E = l[0],
                                    A = l[1],
                                    d = (0, m.useState)(() => i(u, a, s)),
                                    F = d[0],
                                    D = d[1];
                                return (
                                    (0, m.useEffect)(() => {
                                        c.current ? D(i(E, a, s)) : (c.current = !0);
                                    }, [s, E, a]),
                                    (0, m.useEffect)(() => {
                                        A(u);
                                    }, [u]),
                                    (0, m.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), o.current.forEach((u) => u()));
                                        },
                                        [F],
                                    ),
                                    _().createElement(t.Provider, { value: F }, r)
                                );
                            },
                            () => (0, m.useContext)(t),
                        ];
                    })(0, ({ externalModel: u, model: e }) => ({
                        onComp7QuestClick: u.createCallbackNoArgs('comp7WidgetQuest.onClick'),
                        onViewLoaded: u.createCallbackNoArgs('comp7WidgetQuest.onViewLoaded'),
                        setAnimationParams: (0, qu.aD)((u, t) => e.animationParams.set({ isVisible: u, delay: t })),
                    })),
                    Gu = Wu[0],
                    Hu = Wu[1];
                let Ku, Yu, Zu, Xu, Ju, ue;
                (!(function (u) {
                    ((u.Active = 'active'), (u.Waiting = 'waiting'), (u.Reward = 'reward'), (u.Hide = 'hide'));
                })(Ku || (Ku = {})),
                    (function (u) {
                        ((u.Init = 'init'),
                            (u.Appear = 'appear'),
                            (u.ForceComplete = 'force-complete'),
                            (u.Complete = 'complete'),
                            (u.ForceDisappear = 'force-disappear'),
                            (u.Disappear = 'disappear'));
                    })(Yu || (Yu = {})),
                    (function (u) {
                        ((u.Micro = 'micro'), (u.Mini = 'mini'), (u.Normal = 'normal'));
                    })(Zu || (Zu = {})),
                    (function (u) {
                        ((u[(u.Micro = 155)] = 'Micro'),
                            (u[(u.Mini = 270)] = 'Mini'),
                            (u[(u.Normal = 365)] = 'Normal'));
                    })(Xu || (Xu = {})),
                    (function (u) {
                        ((u[(u.Mini = 65)] = 'Mini'), (u[(u.Normal = 186)] = 'Normal'));
                    })(Ju || (Ju = {})),
                    (function (u) {
                        ((u[(u.None = 0)] = 'None'),
                            (u[(u.List = 1)] = 'List'),
                            (u[(u.Bonus = 2)] = 'Bonus'),
                            (u[(u.Comp7Only = 3)] = 'Comp7Only'));
                    })(ue || (ue = {})));
                const ee = ({
                    binding: u,
                    text: e = '',
                    classMix: t,
                    alignment: n = r.left,
                    formatWithBrackets: i,
                }) => {
                    if (null === e) return (console.error("FormatText was supplied with 'null'"), null);
                    const c = i && u ? s(e, u) : e;
                    return _().createElement(
                        m.Fragment,
                        null,
                        c.split('\n').map((e, s) =>
                            _().createElement(
                                'div',
                                { className: O()('FormatText_base_d0', t), key: `${e}-${s}` },
                                ((u, e, t) =>
                                    u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                        t && u in t
                                            ? t[u]
                                            : ((u, e = r.left) => {
                                                  const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                  return A.includes(t)
                                                      ? E(u)
                                                      : 'ja' === t
                                                        ? (0, a.D4)()
                                                              .parse(u)
                                                              .map((u) => o(u))
                                                        : ((u, e = r.left) => {
                                                              let t = [];
                                                              const n =
                                                                      /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                  a = o(u);
                                                              return (
                                                                  l(a, /( )/, e).forEach(
                                                                      (u) => (t = t.concat(l(u, n, r.left))),
                                                                  ),
                                                                  t
                                                              );
                                                          })(u, e);
                                              })(u, e),
                                    ))(e, n, u).map((u, e) => _().createElement(m.Fragment, { key: `${e}-${u}` }, u)),
                            ),
                        ),
                    );
                };
                var te = t(7030);
                const ne = {
                        linear: (u) => u,
                        easeInQuad: (u) => u * u,
                        easeOutQuad: (u) => u * (2 - u),
                        easeInOutQuad: (u) => (u < 0.5 ? 2 * u * u : (4 - 2 * u) * u - 1),
                        easeInCubic: (u) => u * u * u,
                        easeOutCubic: (u) => --u * u * u + 1,
                        easeInOutCubic: (u) => (u < 0.5 ? 4 * u * u * u : (u - 1) * (2 * u - 2) * (2 * u - 2) + 1),
                        easeInQuart: (u) => u * u * u * u,
                        easeOutQuart: (u) => 1 - --u * u * u * u,
                        easeInOutQuart: (u) => (u < 0.5 ? 8 * u * u * u * u : 1 - 8 * --u * u * u * u),
                        easeInQuint: (u) => u * u * u * u * u,
                        easeOutQuint: (u) => 1 + --u * u * u * u * u,
                        easeInOutQuint: (u) => (u < 0.5 ? 16 * u * u * u * u * u : 1 + 16 * --u * u * u * u * u),
                        easeInCirc: (u) => 1 - Math.sqrt(1 - Math.pow(u, 2)),
                        easeOutCirc: (u) => Math.sqrt(1 - Math.pow(u - 1, 2)),
                        easeInOutCirc(u) {
                            const e = Math.sqrt,
                                t = Math.pow;
                            return u < 0.5 ? (1 - e(1 - t(2 * u, 2))) / 2 : (e(1 - t(-2 * u + 2, 2)) + 1) / 2;
                        },
                        easeOutBack: (u) => 1 + 2.70158 * Math.pow(u - 1, 3) + 1.70158 * Math.pow(u - 1, 2),
                        bezier: (u, e, t, n) => (a) =>
                            (1 - a) * (1 - a) * (1 - a) * u +
                            3 * (1 - a) * (1 - a) * a * e +
                            3 * (1 - a) * a * a * t +
                            a * a * a * n,
                    },
                    ae = {
                        base__appearStart: 'Backgrounds_base__appearStart_95',
                        base__appearEnd: 'Backgrounds_base__appearEnd_8b',
                        base__disappearEnd: 'Backgrounds_base__disappearEnd_ba',
                        border_bg__appearStart: 'Backgrounds_border_bg__appearStart_04',
                        border_bg__appearEnd: 'Backgrounds_border_bg__appearEnd_0c',
                        complete__blink: 'Backgrounds_complete__blink_a3',
                        'bg-blink': 'Backgrounds_bg-blink_6c',
                        complete_bg__completeStart: 'Backgrounds_complete_bg__completeStart_e9',
                        complete_bg__completeEnd: 'Backgrounds_complete_bg__completeEnd_36',
                        icon__completeStart: 'Backgrounds_icon__completeStart_5d',
                        icon__completeEnd: 'Backgrounds_icon__completeEnd_3a',
                        base: 'Backgrounds_base_68',
                        base__mini: 'Backgrounds_base__mini_82',
                        complete: 'Backgrounds_complete_f2',
                        base__completed: 'Backgrounds_base__completed_71',
                        completeBg: 'Backgrounds_completeBg_46',
                        border: 'Backgrounds_border_3e',
                        borderBg: 'Backgrounds_borderBg_d1',
                    },
                    re = {
                        hiddenPosition: 'translate(0rem, -60rem)',
                        visiblePosition: 'translate(0rem, 60rem)',
                        easing: ne.bezier(0, 0.4, 0.8, 1),
                        delay: 500,
                        firstAppearDelay: 700,
                    },
                    se = {
                        hiddenPosition: 'translate(-350rem, 0rem)',
                        visiblePosition: 'translate(0rem, 0rem)',
                        easing: ne.bezier(0, 0.8, 0.8, 1),
                        delay: 0,
                        firstAppearDelay: 0,
                    },
                    oe = { [Zu.Mini]: re, [Zu.Micro]: re, [Zu.Normal]: se },
                    ie = ({ isQuestCompleted: u, isVisible: e, questCardType: t, isFirstAppear: n }) => {
                        const a = oe[t],
                            r = a.hiddenPosition,
                            s = a.visiblePosition,
                            o = a.easing,
                            i = a.firstAppearDelay,
                            c = a.delay,
                            l = (0, te.useSpring)({
                                from: { opacity: 1, transform: r },
                                opacity: e ? 0 : 1,
                                transform: e ? s : r,
                                delay: n ? i : c,
                                config: { duration: e ? 750 : 0, easing: o },
                            });
                        return _().createElement(
                            'div',
                            { className: O()(ae.base, ae[`base__${t}`], u && ae.base__completed) },
                            _().createElement(
                                'div',
                                { className: ae.complete },
                                _().createElement('div', { className: ae.completeBg }),
                            ),
                            _().createElement(
                                'div',
                                { className: ae.border },
                                _().createElement(te.animated.div, { className: ae.borderBg, style: l }),
                            ),
                        );
                    },
                    ce = {
                        base: 'Comp7QuestCard_base_f6',
                        base__mini: 'Comp7QuestCard_base__mini_90',
                        hoverBg: 'Comp7QuestCard_hoverBg_52',
                        inner: 'Comp7QuestCard_inner_52',
                        questsCounter: 'Comp7QuestCard_questsCounter_6b',
                        questsCounter__current: 'Comp7QuestCard_questsCounter__current_68',
                        counterIcon: 'Comp7QuestCard_counterIcon_39',
                        check: 'Comp7QuestCard_check_95',
                    },
                    le = { [Ku.Active]: 'active', [Ku.Waiting]: 'waiting', [Ku.Reward]: 'reward', [Ku.Hide]: 'hide' };
                let Ee, Ae;
                (!(function (u) {
                    ((u.Timer = 'timer'), (u.Countdown = 'countdown'), (u.Cooldown = 'cooldown'), (u.None = 'none'));
                })(Ee || (Ee = {})),
                    (function (u) {
                        ((u.Description = 'description'),
                            (u.Short = 'short'),
                            (u.Long = 'long'),
                            (u.Extended = 'extended'));
                    })(Ae || (Ae = {})));
                const de = (u) => u.toString().padStart(2, '0'),
                    Fe = R.images.gui.maps.icons.components.countdown,
                    De = (u, e) => {
                        const t = 2 === e ? Fe.big : Fe;
                        switch (u) {
                            case Ee.Timer:
                                return t.clock();
                            case Ee.Countdown:
                                return t.hourglass();
                            case Ee.Cooldown:
                                return t.lock();
                        }
                    },
                    me = (0, m.memo)(
                        ({
                            duration: u,
                            icon: e = Ee.Timer,
                            style: t = Ae.Description,
                            onTimeReached: a,
                            refreshRate: r,
                            className: o = '',
                            classNames: i = {},
                        }) => {
                            const c = null != r ? r : t !== Ae.Description ? 1 : void 0,
                                l = f(u, c),
                                E = (() => {
                                    const u = (0, m.useState)(n.O.view.getScale()),
                                        e = u[0],
                                        t = u[1];
                                    return (
                                        (0, m.useEffect)(() => {
                                            const u = () => {
                                                t(n.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', u),
                                                () => {
                                                    window.removeEventListener('resize', u);
                                                }
                                            );
                                        }, []),
                                        e
                                    );
                                })();
                            a && a[l] && a[l]();
                            const A = ((u, e) => {
                                switch (e) {
                                    case Ae.Description:
                                        return ((u, e = !0) =>
                                            u.days > 7 && e
                                                ? s(R.strings.common.duration.days(), { days: u.days })
                                                : u.days >= 1
                                                  ? 0 === u.hours
                                                      ? s(R.strings.common.duration.days(), { days: u.days })
                                                      : `${s(R.strings.common.duration.days(), { days: u.days })} ${s(R.strings.common.duration.hours(), { hours: u.hours })}`
                                                  : u.hours >= 1
                                                    ? 0 === u.minutes
                                                        ? s(R.strings.common.duration.hours(), { hours: u.hours })
                                                        : `${s(R.strings.common.duration.hours(), { hours: u.hours })} ${s(R.strings.common.duration.minutes(), { minutes: u.minutes })}`
                                                    : s(R.strings.common.duration.minutes(), {
                                                          minutes: u.minutes || 1,
                                                      }))(u);
                                    case Ae.Short:
                                        return `${de(u.minutes)}:${de(u.seconds)}`;
                                    case Ae.Long:
                                        return `${de(u.hours)}:${de(u.minutes)}:${de(u.seconds)}`;
                                    case Ae.Extended:
                                        return `${s(R.strings.common.duration.days(), { days: u.days })} | ${de(u.hours)}:${de(u.minutes)}:${de(u.seconds)}`;
                                }
                            })(
                                (function (u = 0) {
                                    let e = u;
                                    const t = Math.trunc(e / 86400);
                                    e -= 86400 * t;
                                    const n = Math.trunc(e / D);
                                    e -= n * D;
                                    const a = Math.trunc(e / 60);
                                    return ((e -= 60 * a), { days: t, hours: n, minutes: a, seconds: e });
                                })(l),
                                t,
                            );
                            return _().createElement(
                                'div',
                                { className: O()('Countdown_base_fe', o) },
                                e !== Ee.None &&
                                    _().createElement('div', {
                                        className: O()('Countdown_icon_8b', i.icon),
                                        style: { backgroundImage: `url('${De(e, E)}')` },
                                    }),
                                _().createElement('div', { className: O()('Countdown_description_8d', i.text) }, A),
                            );
                        },
                    ),
                    _e = ({ className: u, classNames: e }) =>
                        _().createElement(
                            'div',
                            { className: O()('Reward_base_fc', u) },
                            _().createElement('div', {
                                className: O()('Reward_shine_0a', null == e ? void 0 : e.shine),
                            }),
                            _().createElement('div', { className: 'Reward_reward_40' }),
                        );
                const Ce = (u, e) => window.getComputedStyle(u, null).getPropertyValue(e),
                    Be = (u) => {
                        if (u.start >= u.end - 1) return u.start;
                        const e = Math.floor((u.start + u.end) / 2),
                            t = u.words.slice(0, e).join(' '),
                            n = Math.ceil(
                                ((u, e, t) => {
                                    const n = t.getContext('2d');
                                    return n
                                        ? ((n.font = `${Ce((a = e), 'font-weight')} ${Ce(a, 'font-size')} ${Ce(a, 'font-family')}`),
                                          n.measureText(u).width)
                                        : 0;
                                    var a;
                                })(t, u.element, u.canvas) / u.element.getBoundingClientRect().width,
                            );
                        return Be(n <= 1 ? Object.assign({}, u, { start: e }) : Object.assign({}, u, { end: e }));
                    },
                    pe = ['text', 'lines', 'className', 'onChange'];
                function ge() {
                    return (
                        (ge =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        ge.apply(this, arguments)
                    );
                }
                const be = (0, m.forwardRef)(function (u, e) {
                        let t = u.text,
                            n = u.lines,
                            a = u.className,
                            r = u.onChange,
                            s = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, pe);
                        const o = (0, m.useRef)(null),
                            i = (0, m.useRef)(null),
                            c = (0, m.useState)(!1),
                            l = c[0],
                            E = c[1],
                            A = (0, m.useState)([]),
                            d = A[0],
                            F = A[1],
                            D = (0, m.useState)(0),
                            C = D[0],
                            B = D[1],
                            p = (function () {
                                const u = (0, m.useRef)(0);
                                var e;
                                return (
                                    (e = () => {
                                        window.cancelAnimationFrame(u.current);
                                    }),
                                    (0, m.useEffect)(() => e, []),
                                    (0, m.useMemo)(
                                        () => ({
                                            run: (e) => {
                                                (window.cancelAnimationFrame(u.current),
                                                    (u.current = window.requestAnimationFrame(() => {
                                                        u.current = window.requestAnimationFrame(() => {
                                                            (e(), (u.current = 0));
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
                            })(),
                            g = (0, m.useMemo)(() => document.createElement('canvas'), []),
                            b = (0, m.useCallback)(
                                () => (i.current ? i.current.getBoundingClientRect().height : 0),
                                [],
                            ),
                            h = (0, m.useCallback)(
                                (u) => {
                                    const e = b();
                                    return u && e ? Math.round(u.scrollHeight / e) : 0;
                                },
                                [b],
                            ),
                            v = (0, m.useCallback)(() => {
                                if (h(o.current) <= n) return E(!1);
                                E(!0);
                                const u = t.split(' '),
                                    e = Array.from(new Array(n)).reduce((e, t, a) => {
                                        if (!o.current) return e;
                                        const r = e.reduce((u, e) => u + e.length, 0),
                                            s = u.slice(r);
                                        if (a === n - 1) return (e.push(s), e);
                                        const i = Be({
                                            start: 0,
                                            end: s.length,
                                            words: s,
                                            element: o.current,
                                            canvas: g,
                                        });
                                        return (e.push(s.slice(0, i)), e);
                                    }, []);
                                F(e);
                            }, [g, h, n, t]),
                            w = (0, m.useCallback)(() => {
                                p.run(() => {
                                    (B(b() * n), v());
                                });
                            }, [b, n, p, v]);
                        var f, y;
                        return (
                            (0, m.useEffect)(w, [w]),
                            (f = w),
                            (y = [w]),
                            (0, m.useEffect)(
                                () => (
                                    window.addEventListener('resize', f),
                                    () => window.removeEventListener('resize', f)
                                ),
                                y,
                            ),
                            (0, m.useEffect)(() => {
                                null == r || r(l);
                            }, [r, l]),
                            _().createElement(
                                'div',
                                ge({}, s, {
                                    ref: e,
                                    className: O()(
                                        'MultilineOverflow_base_d9',
                                        a,
                                        l && 'MultilineOverflow_base__truncated_a1',
                                    ),
                                }),
                                _().createElement(
                                    'div',
                                    { ref: o, className: 'MultilineOverflow_text_ce', style: { maxHeight: `${C}rem` } },
                                    t,
                                ),
                                _().createElement(
                                    'div',
                                    { className: 'MultilineOverflow_truncatedContent_da' },
                                    d.map((u, e) =>
                                        _().createElement(
                                            'div',
                                            { key: e, className: 'MultilineOverflow_line_51' },
                                            u.join(' '),
                                        ),
                                    ),
                                ),
                                _().createElement(
                                    'div',
                                    { ref: i, className: 'MultilineOverflow_singleLine_bb' },
                                    R.strings.common.common.dot(),
                                ),
                            )
                        );
                    }),
                    he = 'MainContent_base_a4',
                    ve = 'MainContent_description_76',
                    we = (0, zu.Pi)(({ description: u, totalProgress: e, isCompleted: t }) => {
                        const n = Hu().model.comp7WidgetQuest.get(),
                            a = n.currentProgress,
                            r = n.earned,
                            s = (0, m.useRef)(a);
                        return _().createElement(
                            'div',
                            { className: he },
                            0 === e
                                ? _().createElement(be, { text: u, lines: 2, className: ve })
                                : _().createElement(
                                      'div',
                                      { className: O()(ve, 'MainContent_description__truncatedLine_64') },
                                      u,
                                  ),
                            e > 0 &&
                                _().createElement(
                                    _().Fragment,
                                    null,
                                    _().createElement(ee, {
                                        classMix: 'MainContent_progressCounter_75',
                                        text: R.strings.quests.dailyQuests.comp7.progressCounter(),
                                        binding: {
                                            current: _().createElement(
                                                'div',
                                                { className: 'MainContent_currentProgress_a3' },
                                                t ? e : a,
                                            ),
                                            separator: _().createElement(
                                                'div',
                                                { className: 'MainContent_separator_dd' },
                                                R.strings.common.common.slash(),
                                            ),
                                            total: e,
                                        },
                                    }),
                                    _().createElement(
                                        'div',
                                        { className: 'MainContent_progressBar_9a' },
                                        _().createElement(Cu, {
                                            animationSettings: _u,
                                            size: z.Small,
                                            value: t ? e : a,
                                            deltaFrom: t ? s.current : a - r,
                                            maxValue: e,
                                        }),
                                    ),
                                ),
                        );
                    }),
                    fe = ({ timeLeftToNewQuests: u, state: e, description: t, totalProgress: n, isCompleted: a }) => {
                        switch (e) {
                            case Ku.Active:
                                return _().createElement(we, { description: t, totalProgress: n, isCompleted: a });
                            case Ku.Waiting:
                                return _().createElement(
                                    'div',
                                    { className: O()(he, 'MainContent_base__waiting_74') },
                                    _().createElement(ee, {
                                        text: R.strings.quests.dailyQuests.comp7.nextTasks(),
                                        classMix: ve,
                                        binding: {
                                            countdown: _().createElement(me, {
                                                duration: u,
                                                classNames: { icon: 'MainContent_countdownIcon_25' },
                                                refreshRate: 1,
                                            }),
                                        },
                                    }),
                                );
                            case Ku.Reward:
                                return _().createElement(
                                    'div',
                                    { className: O()(he, 'MainContent_base__reward_5b') },
                                    _().createElement(ee, {
                                        text: R.strings.quests.dailyQuests.comp7.reward(),
                                        classMix: ve,
                                    }),
                                    _().createElement(_e, null),
                                );
                            default:
                                return null;
                        }
                    },
                    ye = 'QuestIcon_checkIcon_ff',
                    Me = 'QuestIcon_icon_78',
                    ke = ({ state: u, isCompleted: e, icon: t, isMiniCard: n }) => {
                        switch (u) {
                            case Ku.Active:
                                return e && !n
                                    ? _().createElement('div', { className: ye })
                                    : _().createElement('div', { className: Me, style: Nu(t) });
                            case Ku.Waiting:
                                return _().createElement('div', {
                                    className: O()(
                                        Me,
                                        n ? 'QuestIcon_icon__waitingMini_dd' : 'QuestIcon_icon__waiting_cb',
                                    ),
                                });
                            case Ku.Reward:
                                return n
                                    ? _().createElement(_e, {
                                          className: Me,
                                          classNames: { shine: 'QuestIcon_shine_9d' },
                                      })
                                    : _().createElement('div', { className: ye });
                            default:
                                return null;
                        }
                    },
                    Oe = (0, zu.Pi)(({ cardType: u, updateInputArea: e, className: t }) => {
                        const a = Hu(),
                            r = a.model,
                            s = a.controls,
                            o = r.animationParams.get(),
                            i = o.isVisible,
                            c = o.delay,
                            l = r.comp7WidgetQuest.get(),
                            E = (0, m.useState)(l),
                            A = E[0],
                            d = E[1],
                            F = u === Zu.Mini,
                            D = A.state,
                            C = A.icon,
                            B = A.description,
                            p = A.totalProgress,
                            g = A.questsCompleted,
                            b = A.totalQuestsCount,
                            h = A.id !== l.id || l.completed,
                            v = F ? 400 : 0,
                            w = F ? 'translate(0rem, 65rem)' : 'translate(-50rem, 0rem)',
                            f = (0, m.useRef)(!0),
                            y = (0, te.useSpring)({
                                from: { opacity: 1, transform: w },
                                opacity: i ? 1 : 0,
                                transform: i ? 'translate(0rem, 0rem)' : w,
                                delay: f.current ? v : c,
                                config: { duration: 300 },
                                onRest: () => {
                                    (f.current && (s.onViewLoaded(), (f.current = !1)),
                                        d(Object.assign({}, l)),
                                        s.setAnimationParams(!0, 300));
                                },
                            });
                        return (
                            (0, m.useEffect)(() => {
                                f.current || s.setAnimationParams(!1, 2300);
                            }, [s, f, F, h, l.state]),
                            D === Ku.Hide
                                ? (e(), null)
                                : _().createElement(
                                      wu,
                                      { contentId: R.views.comp7.lobby.tooltips.WeeklyQuestTooltip('resId') },
                                      _().createElement(
                                          te.animated.div,
                                          {
                                              className: O()(ce.base, ce[`base__${le[D]}`], ce[`base__${u}`], t),
                                              onMouseEnter: n.O.sound.play.highlight,
                                              onClick: () => {
                                                  (n.O.sound.play.click(), s.onComp7QuestClick());
                                              },
                                              style: y,
                                          },
                                          _().createElement('div', { className: ce.hoverBg }),
                                          _().createElement(
                                              'div',
                                              { className: ce.inner },
                                              _().createElement(ie, {
                                                  isVisible: i,
                                                  isQuestCompleted: h,
                                                  questCardType: u,
                                                  isFirstAppear: f.current,
                                              }),
                                              _().createElement(ke, {
                                                  icon: C,
                                                  state: D,
                                                  isMiniCard: F,
                                                  isCompleted: h,
                                              }),
                                              u === Zu.Normal &&
                                                  _().createElement(
                                                      _().Fragment,
                                                      null,
                                                      _().createElement(fe, {
                                                          timeLeftToNewQuests: l.timeLeftToNewQuests,
                                                          state: D,
                                                          description: B,
                                                          totalProgress: p,
                                                          isCompleted: h,
                                                      }),
                                                      D !== Ku.Reward &&
                                                          _().createElement(
                                                              'div',
                                                              { className: ce.questsCounter },
                                                              _().createElement('div', { className: ce.counterIcon }),
                                                              _().createElement(ee, {
                                                                  text: R.strings.quests.dailyQuests.comp7.questsCounter(),
                                                                  binding: {
                                                                      current: _().createElement(
                                                                          'div',
                                                                          { className: ce.questsCounter__current },
                                                                          g,
                                                                      ),
                                                                      total: b,
                                                                  },
                                                              }),
                                                          ),
                                                  ),
                                              h && F && _().createElement('div', { className: O()(ce.check) }),
                                          ),
                                      ),
                                  )
                        );
                    });
                class Se extends _().Component {
                    constructor(...u) {
                        (super(...u),
                            (this.state = { animateDisappear: !1 }),
                            (this.appearFinishedCount = 0),
                            (this.indicateCompleteFinishedQuests = Array.from(
                                Array(this.props.quests.length),
                                () => !1,
                            )),
                            (this.disappearFinishedCount = 0),
                            (this.currentProgressHash = ''),
                            (this.handleAnimationEvent = (u, e) => {
                                const t = this.props,
                                    n = t.quests,
                                    a = t.indicateCompleteQuests,
                                    r = t.onAnimationEvent;
                                var s, o;
                                (u === Yu.Appear &&
                                    (this.appearFinishedCount++,
                                    this.appearFinishedCount > n.length && (this.appearFinishedCount = 1),
                                    this.appearFinishedCount === n.length && r(u)),
                                    u === Yu.Complete &&
                                        ((this.indicateCompleteFinishedQuests[e - 1] = !0),
                                        xu(n) &&
                                            ((s = a),
                                            (o = this.indicateCompleteFinishedQuests),
                                            s.every((u, e) => !u.value || o[e])) &&
                                            (r(u), this.setState({ animateDisappear: !0 }))),
                                    u === Yu.Disappear &&
                                        (this.disappearFinishedCount++,
                                        this.disappearFinishedCount === n.length && r(u)));
                            }));
                    }
                    componentDidUpdate(u) {
                        (this.props.animateDisappear !== u.animateDisappear &&
                            this.setState({ animateDisappear: this.props.animateDisappear }),
                            (this.currentProgressHash = $u(this.props.quests)));
                    }
                    render() {
                        const u = this.props,
                            e = u.quests,
                            t = u.indicateCompleteQuests,
                            n = u.cardType,
                            a = u.innerRef,
                            r = u.onClick,
                            s = u.onMouseEnter,
                            o = this.state.animateDisappear,
                            i = Qu(n),
                            c = n === Zu.Micro || n === Zu.Mini;
                        return _().createElement(
                            'div',
                            { className: O()('QuestList_base_4a', { QuestList_base__horizontal_ea: c }), ref: a },
                            e.map((u, n) =>
                                _().createElement(i, {
                                    position: n + 1,
                                    maxPosition: e.length,
                                    key: u.value.id,
                                    quest: u.value,
                                    onAnimationEvent: this.handleAnimationEvent,
                                    animateComplete: !this.indicateCompleteFinishedQuests[n] && t[n].value,
                                    animateDisappear: o,
                                    onClick: r,
                                    onMouseEnter: s,
                                    disableProgressbarDelta: this.currentProgressHash === $u(this.props.quests),
                                }),
                            ),
                        );
                    }
                }
                const Re = {
                        base: 'Widget_base_d2',
                        base__mini: 'Widget_base__mini_d2',
                        hitArea: 'Widget_hitArea_dc',
                        comp7QuestCard: 'Widget_comp7QuestCard_90',
                    },
                    Ie = () => {
                        n.O.sound.play.highlight();
                    },
                    Te = (0, zu.Pi)(
                        ({
                            quests: u,
                            visible: e,
                            onQuestClick: t,
                            indicateCompleteQuests: a,
                            countdown: r,
                            onDisappear: s,
                        }) => {
                            const o = Hu(),
                                i = o.model,
                                c = o.controls,
                                l = i.comp7WidgetQuest.get().state,
                                E = l !== Ku.Hide && i.animationParams.get().isVisible,
                                A = u.slice(0, 3),
                                d = a.slice(0, 3),
                                F = u[3] && u[3].value,
                                D = xu(A),
                                C = ((u) => u.reduce((u, e) => (e.value ? u + 1 : u), 0))(d),
                                B = (0, m.useState)(
                                    (({
                                        allStandardQuestsComplete: u,
                                        standardQuestsToBeIndicatedComplete: e,
                                        bonusQuest: t,
                                        visible: n,
                                        comp7CardState: a,
                                    }) => {
                                        if (n) {
                                            if (!u || e > 0) return ue.List;
                                            if (t && !t.completed) return ue.Bonus;
                                            if (a !== Ku.Hide) return ue.Comp7Only;
                                        }
                                        return ue.None;
                                    })({
                                        allStandardQuestsComplete: D,
                                        standardQuestsToBeIndicatedComplete: C,
                                        bonusQuest: F,
                                        visible: e,
                                        comp7CardState: l,
                                    }),
                                ),
                                p = B[0],
                                g = B[1],
                                b = (0, m.useRef)(null),
                                h = (0, m.useCallback)(() => {
                                    setTimeout(() => {
                                        if (b.current) {
                                            const u = b.current.getBoundingClientRect();
                                            viewEnv.setInputArea(
                                                viewEnv.pxToRem(u.x),
                                                viewEnv.pxToRem(u.y),
                                                viewEnv.pxToRem(u.width),
                                                viewEnv.pxToRem(u.height),
                                            );
                                        }
                                    }, 1e3);
                                }, [b]),
                                v = (0, m.useCallback)(
                                    (u) => {
                                        e
                                            ? (E && u === Yu.Complete && c.setAnimationParams(!1, 0),
                                              u === Yu.Disappear && (g(ue.Bonus), h()),
                                              u === Yu.Appear && h())
                                            : s();
                                    },
                                    [e, c, h, s, E],
                                ),
                                w = (0, m.useCallback)(
                                    (u) => {
                                        (E && u === Yu.Complete && c.setAnimationParams(!1, 0),
                                            u === Yu.Appear && h(),
                                            u === Yu.Disappear && e && (l === Ku.Hide ? s() : (g(ue.Comp7Only), h())));
                                    },
                                    [e, c, h, l, E, s],
                                ),
                                f = (0, m.useCallback)(() => {
                                    (n.O.sound.play.sound(R.sounds.play()), t());
                                }, [t]);
                            ((0, m.useEffect)(() => {
                                e &&
                                    (C > 0
                                        ? D
                                            ? n.O.sound.play.sound(R.sounds.dq_widget_bonus_reveal())
                                            : n.O.sound.play.sound(R.sounds.dq_widget_quest_complete())
                                        : F && F.completed
                                          ? n.O.sound.play.sound(R.sounds.dq_widget_bonus_complete())
                                          : n.O.sound.play.sound(R.sounds.dq_widget_slide_in()));
                            }, [e, C, D, F]),
                                (0, m.useEffect)(() => {
                                    e && !D && g(ue.List);
                                }, [e, D]));
                            const y =
                                    ((k = (() => {
                                        const u = n.O.view.getSize('rem'),
                                            e = (0, m.useState)({ height: u.height, width: u.width }),
                                            t = e[0],
                                            a = e[1];
                                        return (
                                            (0, m.useEffect)(() => {
                                                const u = (u) => {
                                                    a(u);
                                                };
                                                return (
                                                    engine.on('screenResized', u),
                                                    () => {
                                                        engine.off('screenResized', u);
                                                    }
                                                );
                                            }, []),
                                            t
                                        );
                                    })().width),
                                    k <= T.Micro ? I.Micro : k <= T.Mini ? I.Mini : k <= T.Normal ? I.Normal : I.Micro),
                                M = Qu(y);
                            var k;
                            return _().createElement(
                                'div',
                                { className: O()(Re.base, Re[`base__${y}`]) },
                                _().createElement(
                                    'div',
                                    { className: Re.hitArea, ref: b },
                                    y === Zu.Normal && _().createElement(Oe, { cardType: y, updateInputArea: h }),
                                    p === ue.List &&
                                        _().createElement(Se, {
                                            quests: A,
                                            indicateCompleteQuests: d,
                                            cardType: y,
                                            animateDisappear: !e,
                                            onClick: f,
                                            onMouseEnter: Ie,
                                            onAnimationEvent: v,
                                        }),
                                    p === ue.Bonus &&
                                        F &&
                                        _().createElement(M, {
                                            bonus: !0,
                                            quest: F,
                                            countdown: r,
                                            animateComplete: F.completed,
                                            animateDisappear: F.completed || !e,
                                            onClick: f,
                                            onMouseEnter: Ie,
                                            onAnimationEvent: w,
                                        }),
                                    y === Zu.Mini &&
                                        _().createElement(Oe, {
                                            cardType: y,
                                            updateInputArea: h,
                                            className: Re.comp7QuestCard,
                                        }),
                                ),
                            );
                        },
                    );
                n.O.view.extraSize.set(0, 0);
                const Pe = () => {
                    const u = w();
                    return _().createElement(Te, u);
                };
                engine.whenReady.then(() => {
                    M().render(
                        _().createElement(Gu, null, _().createElement(Pe, null)),
                        document.getElementById('root'),
                    );
                });
            },
            7363: (u) => {
                u.exports = React;
            },
            1533: (u) => {
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
                    for (var [e, t, n] = deferred[i], r = !0, s = 0; s < e.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[s]))
                            ? e.splice(s--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
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
        (__webpack_require__.j = 'lobby/DailyQuestsWidget/DailyQuestsWidget'),
        (() => {
            var u = { 'lobby/DailyQuestsWidget/DailyQuestsWidget': 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        a,
                        [r, s, o] = t,
                        i = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var c = o(__webpack_require__);
                    }
                    for (e && e(t); i < r.length; i++)
                        ((a = r[i]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0));
                    return __webpack_require__.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/comp7.vendors'], () => __webpack_require__(5043));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
