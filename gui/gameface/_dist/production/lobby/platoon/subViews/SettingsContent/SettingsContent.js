(() => {
    'use strict';
    var __webpack_modules__ = {
            768: (u, e, t) => {
                t.d(e, { O: () => ou });
                var n = {};
                t.r(n),
                    t.d(n, { mouse: () => d, off: () => F, on: () => l, onResize: () => E, onScaleUpdated: () => c });
                var o = {};
                t.r(o),
                    t.d(o, {
                        events: () => n,
                        getMouseGlobalPosition: () => B,
                        getSize: () => C,
                        graphicsQuality: () => m,
                        playSound: () => _,
                        setRTPC: () => D,
                    });
                var r = {};
                t.r(r), t.d(r, { getBgUrl: () => g, getTextureUrl: () => p });
                var i = {};
                function a(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function s(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.r(i),
                    t.d(i, {
                        addModelObserver: () => V,
                        addPreloadTexture: () => R,
                        arabic2roman: () => uu,
                        children: () => r,
                        displayStatus: () => f,
                        displayStatusIs: () => eu,
                        events: () => y,
                        extraSize: () => tu,
                        forceTriggerMouseMove: () => Z,
                        freezeTextureBeforeResize: () => G,
                        getBrowserTexturePath: () => N,
                        getDisplayStatus: () => Q,
                        getFontNames: () => J,
                        getScale: () => z,
                        getSize: () => j,
                        getViewGlobalPosition: () => U,
                        isEventHandled: () => X,
                        isFocused: () => K,
                        pxToRem: () => $,
                        remToPx: () => W,
                        resize: () => H,
                        sendEvent: () => P,
                        setAnimateWindow: () => q,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => L,
                        setSidePaddingsRem: () => I,
                        whenTutorialReady: () => nu,
                    });
                const E = a('clientResized'),
                    c = a('self.onScaleUpdated'),
                    l = (u, e) => engine.on(u, e),
                    F = (u, e) => engine.off(u, e),
                    A = { down: a('mousedown'), up: a('mouseup'), move: a('mousemove') };
                const d = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && s(!1);
                    }
                    function t() {
                        u.enabled && s(!0);
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
                            : s(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let o = !0;
                                    const r = `mouse${e}`,
                                        i = A[e]((u) => t([u, 'outside']));
                                    function a(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, a),
                                        n(),
                                        () => {
                                            o &&
                                                (i(),
                                                window.removeEventListener(r, a),
                                                (u.listeners -= 1),
                                                n(),
                                                (o = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, o, {
                        disable() {
                            (u.enabled = !1), n();
                        },
                        enable() {
                            (u.enabled = !0), n();
                        },
                        enableOutside() {
                            u.enabled && s(!0);
                        },
                        disableOutside() {
                            u.enabled && s(!1);
                        },
                    });
                })();
                function _(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function D(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                function C(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function B(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const m = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    b = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    v = Object.keys(b).reduce((u, e) => ((u[e] = () => _(b[e])), u), {}),
                    h = { play: Object.assign({}, v, { sound: _ }), setRTPC: D };
                var w = t(690);
                function p(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function g(u, e, t) {
                    return `url(${p(u, e, t)})`;
                }
                const f = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    y = {
                        onTextureFrozen: a('self.onTextureFrozen'),
                        onTextureReady: a('self.onTextureReady'),
                        onDomBuilt: a('self.onDomBuilt'),
                        onLoaded: a('self.onLoaded'),
                        onDisplayChanged: a('self.onShowingStatusChanged'),
                        onFocusUpdated: a('self.onFocusChanged'),
                        children: {
                            onAdded: a('children.onAdded'),
                            onLoaded: a('children.onLoaded'),
                            onRemoved: a('children.onRemoved'),
                            onAttached: a('children.onAttached'),
                            onTextureReady: a('children.onTextureReady'),
                            onRequestPosition: a('children.requestPosition'),
                        },
                    },
                    k = ['args'];
                const O = 2,
                    T = 16,
                    x = 32,
                    M = 64,
                    S = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const o = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        o = {},
                                        r = Object.keys(u);
                                    for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (o[t] = u[t]);
                                    return o;
                                })(e, k);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((n = o),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    P = {
                        close(u) {
                            S('popover' === u ? O : x);
                        },
                        minimize() {
                            S(M);
                        },
                        move(u) {
                            S(T, { isMouseEvent: !0, on: u });
                        },
                    };
                function R(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function L(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function N(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function V(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function I(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function j(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function H(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function U(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: W(e.x), y: W(e.y) };
                }
                function G() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function z() {
                    return viewEnv.getScale();
                }
                function $(u) {
                    return viewEnv.pxToRem(u);
                }
                function W(u) {
                    return viewEnv.remToPx(u);
                }
                function q(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function K() {
                    return viewEnv.isFocused();
                }
                function Y() {
                    return viewEnv.setEventHandled();
                }
                function X() {
                    return viewEnv.isEventHandled();
                }
                function Z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Q() {
                    return viewEnv.getShowingStatus();
                }
                const J = (() => {
                        let u = [];
                        return () => (0 === u.length && (u = Object.keys(viewEnv.getFontsConfig())), u);
                    })(),
                    uu = w.cg,
                    eu = Object.keys(f).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === f[e]), u), {}),
                    tu = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    nu = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : y.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    ou = { view: i, client: o, sound: h };
            },
            521: (u, e, t) => {
                let n, o;
                t.d(e, { n: () => n }),
                    (function (u) {
                        (u[(u.NONE = -1)] = 'NONE'),
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
                            (u[(u.KEY_9 = 57)] = 'KEY_9');
                    })(n || (n = {})),
                    (function (u) {
                        (u.ALT = 'Alt'),
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
                            (u.SYMBOL_LOCK = 'SymbolLock');
                    })(o || (o = {}));
            },
            690: (u, e, t) => {
                t.d(e, { cg: () => r });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    o = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(u) {
                    let e = '';
                    for (let t = o.length - 1; t >= 0; t--) for (; u >= o[t]; ) (e += n[t]), (u -= o[t]);
                    return e;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            358: (u, e, t) => {
                t.d(e, { Z: () => r });
                var n = t(768);
                class o {
                    constructor() {
                        (this._callbacks = void 0),
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
                            (this._updateHandler = void 0);
                    }
                    static get instance() {
                        return window.__dataTracker || (window.__dataTracker = new o()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, o = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(u, t, o);
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
                o.__instance = void 0;
                const r = o;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(916);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(u) {
                        this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data);
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            916: (u, e, t) => {
                t.d(e, { Sw: () => r.Z, B0: () => a, ry: () => C, Eu: () => B });
                class n {
                    constructor() {
                        (this.entries = []),
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
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            n = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== n)),
                            this.removeMouseListener();
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
                const o = n;
                var r = t(358);
                var i = t(613);
                let a;
                !(function (u) {
                    (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                })(a || (a = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var F = t(521),
                    A = t(768);
                const d = ['args'];
                function _(u, e, t, n, o, r, i) {
                    try {
                        var a = u[r](i),
                            s = a.value;
                    } catch (u) {
                        return void t(u);
                    }
                    a.done ? e(s) : Promise.resolve(s).then(n, o);
                }
                const D = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
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
                                    return new Promise(function (n, o) {
                                        var r = u.apply(e, t);
                                        function i(u) {
                                            _(r, n, o, i, a, 'next', u);
                                        }
                                        function a(u) {
                                            _(r, n, o, i, a, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    B = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
                    m = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const o = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        o = {},
                                        r = Object.keys(u);
                                    for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (o[t] = u[t]);
                                    return o;
                                })(e, d);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((n = o),
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
                    b = () => m(a.CLOSE),
                    v = (u, e) => {
                        u.keyCode === F.n.ESCAPE && e();
                    };
                var h = t(572);
                const w = o.instance,
                    p = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: a,
                        NumberFormatType: s,
                        RealFormatType: E,
                        TimeFormatType: c,
                        DateFormatType: l,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (u) => m(a.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => m(a.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            m(a.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, o = R.invalid('resId'), r) => {
                            const i = A.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                E = s.x,
                                c = s.y,
                                l = s.width,
                                F = s.height,
                                d = {
                                    x: A.O.view.pxToRem(E) + i.x,
                                    y: A.O.view.pxToRem(c) + i.y,
                                    width: A.O.view.pxToRem(l),
                                    height: A.O.view.pxToRem(F),
                                };
                            m(a.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: o,
                                direction: e,
                                bbox: D(d),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => v(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            v(u, b);
                        },
                        handleViewEvent: m,
                        onBindingsReady: C,
                        onLayoutReady: B,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(a.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(a.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(a.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const o = Object.prototype.toString.call(e[n]);
                                    if (o.startsWith('[object CoherentArrayProxy]')) {
                                        const o = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < o.length; e++) t[n].push({ value: u(o[e].value) });
                                    } else
                                        o.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = p;
            },
            613: (u, e, t) => {
                t.d(e, { Ew: () => r, Z5: () => n, cy: () => o });
                const n = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    o = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            728: (u, e, t) => {
                var n = t(363),
                    o = t.n(n),
                    r = t(533),
                    i = t.n(r),
                    a = t(483),
                    s = t.n(a);
                const E = (u = 1) => {
                        const e = new Error().stack;
                        let t,
                            n = R.invalid('resId'),
                            o = '';
                        var r;
                        e &&
                            ((o = (null == (r = e.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                            (t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (n = window.subViews[t].id));
                        return { callerUrl: o, caller: t, stack: e, resId: n };
                    },
                    c = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    l = (u) => {
                        const e = (0, n.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    };
                var F = t(916);
                const A = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    d = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    _ = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const n = c(`${u}.${t}`, window);
                                return A(n) ? e(u, t, n) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    D = (u) => {
                        const e = ((u) => {
                                const e = E(),
                                    t = e.caller,
                                    n = e.resId,
                                    o = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: o, modelPath: d(o, u || ''), resId: n };
                            })(),
                            t = e.modelPrefix,
                            n = u.split('.');
                        if (n.length > 0) {
                            const u = [n[0]];
                            return (
                                n.reduce((e, n) => {
                                    const o = c(d(t, `${e}.${n}`), window);
                                    return A(o) ? (u.push(o.id), `${e}.${n}.value`) : (u.push(n), `${e}.${n}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    };
                const C = () => (window.injected || (window.injected = new Map()), window.injected);
                const B = F.Sw.instance;
                let m;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(m || (m = {}));
                const b = (u = 'model', e = m.Deep) => {
                    const t = (0, n.useState)(0),
                        o = (t[0], t[1]),
                        r = (0, n.useMemo)(() => E(), []),
                        i = r.callerUrl,
                        a = r.caller,
                        s = r.resId,
                        F = (0, n.useMemo)(() => {
                            const e = (function (u) {
                                return C().has(u);
                            })(i.replace('.js', '.html'));
                            return window.__feature && window.__feature !== a && !e ? `subViews.${a}.${u}` : u;
                        }, [i, a, u]),
                        d = (0, n.useState)(() =>
                            ((u) => {
                                const e = c(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return A(e) ? e.value : e;
                            })(_(F)),
                        ),
                        b = d[0],
                        v = d[1],
                        h = (0, n.useRef)(-1);
                    return (
                        l(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? m.Deep : m.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== m.None)
                            ) {
                                const t = (u) => {
                                        ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                        e === m.Deep
                                            ? (u === b && o((u) => u + 1), v(u))
                                            : v(Object.assign([], u));
                                    },
                                    n = D(u);
                                h.current = B.addCallback(n, t, s, e === m.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (e !== m.None)
                                return () => {
                                    B.removeCallback(h.current, s);
                                };
                        }, [s, e]),
                        b
                    );
                };
                let v;
                !(function (u) {
                    (u.voice = 'voice'), (u.tier = 'tier');
                })(v || (v = {}));
                var h = t(690);
                const w = [
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
                function p(u) {
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
                const g = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: F.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    f = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            o = u.args,
                            r = u.onMouseEnter,
                            i = u.onMouseLeave,
                            a = u.onMouseDown,
                            s = u.onClick,
                            c = u.ignoreShowDelay,
                            l = void 0 !== c && c,
                            F = u.ignoreMouseClick,
                            A = void 0 !== F && F,
                            d = u.decoratorId,
                            _ = void 0 === d ? 0 : d,
                            D = u.isEnabled,
                            C = void 0 === D || D,
                            B = u.targetId,
                            m = void 0 === B ? 0 : B,
                            b = u.onShow,
                            v = u.onHide,
                            h = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    o = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (o[t] = u[t]);
                                return o;
                            })(u, w);
                        const f = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, n.useMemo)(() => m || E().resId, [m]),
                            k = (0, n.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (g(t, _, { isMouseEvent: !0, on: !0, arguments: p(o) }, y),
                                    b && b(),
                                    (f.current.isVisible = !0));
                            }, [t, _, o, y, b]),
                            O = (0, n.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const u = f.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (f.current.timeoutId = 0)),
                                        g(t, _, { on: !1 }, y),
                                        f.current.isVisible && v && v(),
                                        (f.current.isVisible = !1);
                                }
                            }, [t, _, y, v]),
                            T = (0, n.useCallback)((u) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(f.current.prevTarget) && O();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const u = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', T, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', T, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === C && O();
                            }, [C, O]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', O),
                                    () => {
                                        window.removeEventListener('mouseleave', O), O();
                                    }
                                ),
                                [O],
                            );
                        return C
                            ? (0, n.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((f.current.timeoutId = window.setTimeout(k, l ? 100 : 400)),
                                                      r && r(u),
                                                      x && x(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              O(), null == i || i(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === A && O(), null == s || s(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === A && O(), null == a || a(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      h,
                                  ),
                              )
                            : e;
                        var x;
                    };
                function y(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const k = {
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
                let O, T;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(O || (O = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large');
                    })(T || (T = {}));
                const x = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: a,
                    soundHover: E,
                    soundClick: c,
                    onMouseEnter: l,
                    onMouseMove: F,
                    onMouseDown: A,
                    onMouseUp: d,
                    onMouseLeave: _,
                    onClick: D,
                }) => {
                    const C = (0, n.useRef)(null),
                        B = (0, n.useState)(t),
                        m = B[0],
                        b = B[1],
                        v = (0, n.useState)(!1),
                        h = v[0],
                        w = v[1];
                    return (
                        (0, n.useEffect)(() => {
                            function u(u) {
                                m && null !== C.current && !C.current.contains(u.target) && b(!1);
                            }
                            return (
                                document.addEventListener('mousedown', u),
                                () => {
                                    document.removeEventListener('mousedown', u);
                                }
                            );
                        }, [m]),
                        (0, n.useEffect)(() => {
                            b(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: C,
                                className: s()(
                                    k.base,
                                    k[`base__${r}`],
                                    i && k.base__disabled,
                                    e && k[`base__${e}`],
                                    m && k.base__focus,
                                    h && k.base__highlightActive,
                                    a,
                                ),
                                onMouseEnter: function (u) {
                                    i || (null !== E && y(E), l && l(u));
                                },
                                onMouseMove: function (u) {
                                    F && F(u);
                                },
                                onMouseUp: function (u) {
                                    i || (d && d(u), w(!1));
                                },
                                onMouseDown: function (u) {
                                    i ||
                                        (null !== c && y(c),
                                        A && A(u),
                                        t && (i || (C.current && (C.current.focus(), b(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (u) {
                                    i || (_ && _(u), w(!1));
                                },
                                onClick: function (u) {
                                    i || (D && D(u));
                                },
                            },
                            r !== O.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: k.back }),
                                    o().createElement('span', { className: k.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: s()(k.state, k.state__default) },
                                o().createElement('span', { className: k.stateDisabled }),
                                o().createElement('span', { className: k.stateHighlightHover }),
                                o().createElement('span', { className: k.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: k.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                x.defaultProps = { type: O.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const M = x,
                    S = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function P() {
                    return (
                        (P =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        P.apply(this, arguments)
                    );
                }
                const L = R.views.common.tooltip_window.simple_tooltip_content,
                    N = (u) => {
                        let e = u.children,
                            t = u.body,
                            r = u.header,
                            i = u.note,
                            a = u.alert,
                            s = u.args,
                            E = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    o = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (o[t] = u[t]);
                                return o;
                            })(u, S);
                        const c = (0, n.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: r, note: i, alert: a });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [a, t, r, i, s]);
                        return o().createElement(
                            f,
                            P(
                                {
                                    contentId:
                                        ((l = null == s ? void 0 : s.hasHtmlContent),
                                        l ? L.SimpleTooltipHtmlContent('resId') : L.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                E,
                            ),
                            e,
                        );
                        var l;
                    };
                function V() {
                    return (
                        (V =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        V.apply(this, arguments)
                    );
                }
                (0, n.memo)(
                    ({
                        caption: u,
                        isEnabled: e,
                        description: t,
                        children: r,
                        cButtonProps: i,
                        onClick: a,
                        className: s,
                    }) => {
                        const E = (0, n.useCallback)(() => a(), [a]);
                        return o().createElement(
                            N,
                            { isEnabled: !0, header: u, body: t },
                            o().createElement(
                                'div',
                                { className: s },
                                o().createElement(
                                    M,
                                    V({ type: O.primary, size: T.small, onClick: E, disabled: !e }, i),
                                    r || u,
                                ),
                            ),
                        );
                    },
                );
                const I = /<link.*?>/g,
                    j = /\.\.\//g,
                    H = /<script.*?>/g,
                    U = 'default.css',
                    G = (u) => {
                        const e = u.match(j);
                        return e && e.join('');
                    },
                    z = () => {
                        for (
                            var u = 0, e = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            u < e.length;
                            u++
                        ) {
                            const t = e[u];
                            if (!t.href.includes(U)) return t.href;
                        }
                        return '';
                    },
                    $ = (u) => {
                        const e = z(),
                            t = G(e);
                        let n,
                            o = u;
                        for (; null !== (n = H.exec(u)); ) {
                            const u = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (u) {
                                const e = t + u[2].replace(j, '');
                                o = o.replace(u[2], e);
                            }
                        }
                        return o;
                    },
                    W = () => {
                        const u = [];
                        let e = !1;
                        const t = () => {
                            if (!u.length) return void (e = !1);
                            const n = u.shift();
                            n && ((e = !0), n().then(() => t()));
                        };
                        return {
                            add: (n) => {
                                u.push(n), e || t();
                            },
                        };
                    },
                    q = 'SubView_base_df',
                    K = 'subViews.onChanged',
                    Y = W(),
                    X =
                        ((0, n.memo)(({ id: u, fallback: e, onLoadCallback: t, mixClass: r }) => {
                            const i = (0, n.useState)(''),
                                a = i[0],
                                E = i[1],
                                c = (0, n.useMemo)(() => ({ __html: $(a) }), [a]),
                                l = (0, n.useMemo)(() => window.subViews.addChildChangedCallback(u), [u]),
                                A = (0, n.useState)(!1),
                                d = A[0],
                                _ = A[1],
                                D = (0, n.useCallback)(
                                    (u) => {
                                        u.includes(l) &&
                                            (_(!0), engine.off(K, D), window.subViews.removeChildChangedCallback(l));
                                    },
                                    [l],
                                ),
                                C = (0, n.useCallback)((u) => {
                                    Y.add(
                                        () =>
                                            new Promise((e) => {
                                                E(u);
                                                const t = new MutationObserver(() => {
                                                        t.disconnect(), e();
                                                    }),
                                                    n = document.getElementById('root');
                                                n && t.observe(n, { childList: !0 });
                                            }),
                                    );
                                }, []);
                            (0, n.useEffect)(() => {
                                if (window.subViews.ids().includes(u)) {
                                    const e = window.subViews.get(u),
                                        t = e.path;
                                    let n;
                                    if ((n = t.split('/').pop()))
                                        return (
                                            (n = n.split('.')[0]),
                                            (window.subViews[n] = Object.assign({ id: u }, e)),
                                            engine.on(`subView:inject->${n}`, C),
                                            (({ path: u, name: e }) => {
                                                const t = new XMLHttpRequest();
                                                (t.onreadystatechange = () => {
                                                    4 === t.readyState &&
                                                        (200 === t.status
                                                            ? (0, F.Eu)().then(() => {
                                                                  console.info(`Sub view ${e} loaded: ${u}`),
                                                                      engine.TriggerEvent(
                                                                          `subView:inject->${e}`,
                                                                          t.responseText,
                                                                      );
                                                              })
                                                            : console.error(
                                                                  `subView: status: ${t.status} - can't get bundle`,
                                                              ));
                                                }),
                                                    t.open('GET', u),
                                                    t.send();
                                            })({ name: n, path: t }),
                                            () => {
                                                n && window.subViews[n] && delete window.subViews[n],
                                                    engine.trigger('subView:destroy', { viewName: n, viewId: u }),
                                                    window.__dataTracker &&
                                                        window.__dataTracker.clearViewCallbacks &&
                                                        window.__dataTracker.clearViewCallbacks(u),
                                                    engine.off(`subView:inject->${n}`, C),
                                                    console.info(`Sub view ${n} is destroyed: ${t}`);
                                            }
                                        );
                                    console.error("subView: can't get View component name");
                                } else engine.on(K, D);
                            }, [D, C, u, d]),
                                (0, n.useEffect)(
                                    () => () => {
                                        a &&
                                            ((u) => {
                                                const e = G(z());
                                                let t;
                                                for (; null !== (t = I.exec(u)); ) {
                                                    const u = t[0].match(/href="(.*?)"/);
                                                    if (u) {
                                                        const t = e + u[1].replace(j, ''),
                                                            n = document.head.querySelector(`[href="${t}"]`);
                                                        n && document.head.removeChild(n);
                                                    }
                                                }
                                            })(a);
                                    },
                                    [a],
                                );
                            const B = s()(q, r);
                            if (a) {
                                let e;
                                return (
                                    (e = document.getElementById('root')) && e.setAttribute('id', 'bugSubView'),
                                    ((u) => {
                                        let e;
                                        const t = z(),
                                            n = G(t);
                                        for (; null !== (e = I.exec(u)); ) {
                                            const u = e[0].match(/href="(.*?)"/);
                                            if (u && !u[1].includes(U) && n) {
                                                const e = n + u[1].replace(j, ''),
                                                    t = document.createElement('link');
                                                (t.href = e), (t.rel = 'stylesheet'), document.head.appendChild(t);
                                            }
                                        }
                                    })(a),
                                    t && t(u),
                                    o().createElement('div', { className: B, dangerouslySetInnerHTML: c })
                                );
                            }
                            return e ? o().createElement('div', { className: B }, o().createElement(e, null)) : null;
                        }),
                        'subViews.onChanged'),
                    Z = '.html',
                    Q = /^coui:\/\/gui\/.*/,
                    J = W(),
                    uu = (u) => {
                        const e = document.createElement('script');
                        (e.src = u), (e.defer = !0), document.head.appendChild(e);
                    };
                (0, n.memo)(({ id: u, bundleLevelPath: e = 3, mixClass: t, children: r }) => {
                    const i = (0, n.useRef)(null),
                        a = (0, n.useMemo)(() => window.subViews.addChildChangedCallback(u), [u]),
                        E = (0, n.useState)(!1),
                        c = E[0],
                        l = E[1],
                        F = (0, n.useState)(!0),
                        A = F[0],
                        d = F[1],
                        _ = (0, n.useCallback)(
                            (u) => {
                                u.includes(a) &&
                                    (l(!0), engine.off(X, _), window.subViews.removeChildChangedCallback(a));
                            },
                            [a],
                        ),
                        D = (0, n.useCallback)(
                            (u) => {
                                J.add(
                                    () =>
                                        new Promise((t) => {
                                            const n = new MutationObserver(() => {
                                                d(!1), n.disconnect(), t();
                                            });
                                            if (i.current) {
                                                const t = document.getElementById('root');
                                                t && t.setAttribute('id', 'bugSubView'),
                                                    i.current.setAttribute('id', 'root');
                                                const o = document.createElement('link');
                                                (o.href = u.replace(Z, '.css')),
                                                    (o.rel = 'stylesheet'),
                                                    document.head.appendChild(o),
                                                    Q.test(u) &&
                                                        uu(
                                                            u
                                                                .split('/')
                                                                .slice(0, -e)
                                                                .concat(['vendors.js'])
                                                                .join('/')
                                                                .replace('/production/', '/production/lib/'),
                                                        ),
                                                    uu(u.replace(Z, '.js')),
                                                    n.observe(i.current, { childList: !0 });
                                            }
                                        }),
                                );
                            },
                            [e],
                        );
                    return (
                        (0, n.useEffect)(() => {
                            if (window.subViews.ids().includes(u)) {
                                const e = window.subViews.get(u),
                                    t = e.path;
                                let n = t.split('/').pop();
                                if (n)
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: u }, e)),
                                        D(t),
                                        () => {
                                            n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: u }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(u),
                                                console.info(`Sub view ${n} is destroyed: ${t}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(X, _);
                        }, [_, D, u, c]),
                        o().createElement('div', { className: s()(q, t) }, A && r, o().createElement('div', { ref: i }))
                    );
                });
                let eu;
                !(function (u) {
                    (u.left = 'left'), (u.top = 'top'), (u.right = 'right'), (u.bottom = 'bottom');
                })(eu || (eu = {}));
                eu.right, eu.left;
                const tu = 'ToggleButton_base_b9',
                    nu = 'ToggleButton_content_85',
                    ou = 'ToggleButton_overlay_0a',
                    ru = 'ToggleButton_base__active_68',
                    iu = 'ToggleButton_indicator_85',
                    au = ['active', 'className', 'children', 'size'];
                function su() {
                    return (
                        (su =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        su.apply(this, arguments)
                    );
                }
                const Eu = (u) => {
                        let e = u.active,
                            t = u.className,
                            n = u.children,
                            r = u.size,
                            i = void 0 === r ? T.small : r,
                            a = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    o = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (o[t] = u[t]);
                                return o;
                            })(u, au);
                        const E = s()(tu, t, e && ru);
                        return o().createElement(
                            'div',
                            { className: E },
                            o().createElement(
                                M,
                                su({}, a, { type: 'secondary', size: i }),
                                o().createElement('span', { className: nu }, n),
                            ),
                            o().createElement('div', { className: ou }),
                            o().createElement('div', { className: iu }),
                        );
                    },
                    cu = ((0, n.memo)(Eu), { tier: 'TierButton_tier_e9' }),
                    lu = (u) => {
                        const e = u.tier,
                            t = u.isEnabled,
                            r = u.isSelected,
                            i = u.onClick,
                            a = (0, n.useCallback)(() => i({ tier: e }), [i, e]);
                        return o().createElement(
                            'div',
                            { className: cu.base },
                            o().createElement(
                                Eu,
                                { disabled: !t, onClick: a, active: r },
                                o().createElement('div', { className: cu.tier }, (0, h.cg)(e)),
                            ),
                        );
                    },
                    Fu = 'TiersSettings_filterText_db',
                    Au = 'TiersSettings_tiers_6f',
                    du = 'TiersSettings_tiers__firstLine_07';
                function _u() {
                    return (
                        (_u =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        _u.apply(this, arguments)
                    );
                }
                const Du = () => {
                    const u = b('model.tiersSettings').onSwitchTier,
                        e = b('model.tiersSettings.tierButtons');
                    return o().createElement(
                        o().Fragment,
                        null,
                        o().createElement('span', { className: Fu }, R.strings.platoon.settings.tiers()),
                        o().createElement(
                            'div',
                            { className: s()(Au, du) },
                            e
                                .slice(0, 5)
                                .map((e) => o().createElement(lu, _u({}, e.value, { onClick: u, key: e.value.tier }))),
                        ),
                        o().createElement(
                            'div',
                            { className: Au },
                            e
                                .slice(5)
                                .map((e) => o().createElement(lu, _u({}, e.value, { onClick: u, key: e.value.tier }))),
                        ),
                    );
                };
                let Cu, Bu, mu, bu;
                !(function (u) {
                    (u[(u.LEFT = 0)] = 'LEFT'),
                        (u[(u.WHEEL = 1)] = 'WHEEL'),
                        (u[(u.RIGHT = 2)] = 'RIGHT'),
                        (u[(u.FOURTH = 3)] = 'FOURTH'),
                        (u[(u.FIFTH = 4)] = 'FIFTH');
                })(Cu || (Cu = {})),
                    (function (u) {
                        (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large'), (u.extraLarge = 'extraLarge');
                    })(Bu || (Bu = {})),
                    (function (u) {
                        (u.primary = 'primary'), (u.main = 'main');
                    })(mu || (mu = {})),
                    (function (u) {
                        (u.Center = 'center'), (u.Bottom = 'bottom');
                    })(bu || (bu = {}));
                const vu = {
                        base: 'Checkbox_base_36',
                        base__disabled: 'Checkbox_base__disabled_08',
                        base__center: 'Checkbox_base__center_52',
                        base__bottom: 'Checkbox_base__bottom_28',
                        input: 'Checkbox_input_37',
                        base__mouseDown: 'Checkbox_base__mouseDown_45',
                        base__small: 'Checkbox_base__small_18',
                        base__medium: 'Checkbox_base__medium_12',
                        base__large: 'Checkbox_base__large_f7',
                        base__extraLarge: 'Checkbox_base__extraLarge_c9',
                        alertOverlay: 'Checkbox_alertOverlay_52',
                        base__alert: 'Checkbox_base__alert_b7',
                        blink: 'Checkbox_blink_5e',
                        base__checked: 'Checkbox_base__checked_a2',
                        inputHoverOverlay: 'Checkbox_inputHoverOverlay_36',
                        highlight: 'Checkbox_highlight_b8',
                        base__main: 'Checkbox_base__main_3a',
                        base__primary: 'Checkbox_base__primary_ab',
                        checkmark: 'Checkbox_checkmark_60',
                        fadeIn: 'Checkbox_fadeIn_1a',
                        label: 'Checkbox_label_bc',
                        labelContent: 'Checkbox_labelContent_64',
                    },
                    hu = [
                        'id',
                        'isChecked',
                        'isDisabled',
                        'isAlert',
                        'size',
                        'type',
                        'soundHover',
                        'soundClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onClick',
                        'onChange',
                        'onFocus',
                        'onBlur',
                        'text',
                        'contentStyles',
                        'children',
                        'alignment',
                    ];
                function wu() {
                    return (
                        (wu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        wu.apply(this, arguments)
                    );
                }
                const pu = (u) => {
                    let e = u.id,
                        t = u.isChecked,
                        r = void 0 !== t && t,
                        i = u.isDisabled,
                        a = void 0 !== i && i,
                        E = u.isAlert,
                        c = void 0 !== E && E,
                        l = u.size,
                        F = void 0 === l ? Bu.medium : l,
                        A = u.type,
                        d = void 0 === A ? mu.primary : A,
                        _ = u.soundHover,
                        D = void 0 === _ ? 'highlight' : _,
                        C = u.soundClick,
                        B = void 0 === C ? 'play' : C,
                        m = u.onMouseEnter,
                        b = u.onMouseLeave,
                        v = u.onMouseUp,
                        h = u.onMouseDown,
                        w = u.onClick,
                        p = u.onChange,
                        g = u.onFocus,
                        f = u.onBlur,
                        k = u.text,
                        O = u.contentStyles,
                        T = u.children,
                        x = u.alignment,
                        M = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                o = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (o[t] = u[t]);
                            return o;
                        })(u, hu);
                    const S = (0, n.useState)(!1),
                        P = S[0],
                        R = S[1],
                        L = (0, n.useState)(!1),
                        N = (L[0], L[1]),
                        V = (0, n.useCallback)(
                            (u) => {
                                a || (p && p(), w && w(u));
                            },
                            [a, p, w],
                        ),
                        I = (0, n.useCallback)(
                            (u) => {
                                const e = u.button === Cu.LEFT;
                                a || (e && R(!0), e && h && h(u), B && y(B));
                            },
                            [a, h, B],
                        ),
                        j = (0, n.useCallback)(
                            (u) => {
                                a || (R(!1), v && v(u));
                            },
                            [a, v],
                        ),
                        H = (0, n.useCallback)(
                            (u) => {
                                a || (m && m(u), D && y(D));
                            },
                            [a, m, D],
                        ),
                        U = (0, n.useCallback)(
                            (u) => {
                                a || (R(!1), b && b(u));
                            },
                            [a, b],
                        ),
                        G = (0, n.useCallback)(
                            (u) => {
                                a || (N(!0), g && g(u));
                            },
                            [a, g],
                        ),
                        z = (0, n.useCallback)(
                            (u) => {
                                a || (N(!1), f && f(u));
                            },
                            [a, f],
                        ),
                        $ = o().createElement(
                            'div',
                            { className: vu.label },
                            o().createElement(
                                'div',
                                { className: s()(vu.labelContent, 's-labelContent'), style: O },
                                k || T,
                            ),
                        );
                    return o().createElement(
                        'div',
                        wu(
                            {
                                id: e,
                                className: s()(vu.base, vu[`base__${F}`], vu[`base__${d}`], {
                                    [vu.base__checked]: r,
                                    [vu.base__disabled]: a,
                                    [vu.base__mouseDown]: P,
                                    [vu.base__alert]: c,
                                    [vu.base__center]: x === bu.Center,
                                    [vu.base__bottom]: x === bu.Bottom,
                                }),
                                onClick: V,
                                onMouseEnter: H,
                                onMouseLeave: U,
                                onMouseDown: I,
                                onMouseUp: j,
                                onFocus: G,
                                onBlur: z,
                            },
                            M,
                        ),
                        o().createElement(
                            'div',
                            { className: vu.input },
                            o().createElement('div', { className: vu.alertOverlay }),
                            o().createElement('div', { className: vu.inputHoverOverlay }),
                            o().createElement('div', { className: vu.highlight }),
                        ),
                        o().createElement('div', { className: vu.checkmark }),
                        ((k || T) && $) || null,
                    );
                };
                t(281);
                let gu;
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(gu || (gu = {}));
                (() => {
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
                })();
                var fu = t(613);
                Date.now(), fu.Ew.getRegionalDateTime, fu.Ew.getFormattedDateTime;
                t(768);
                F.Sw.instance;
                const yu = () => {
                        const u = b('model.voiceSettings'),
                            e = (0, n.useCallback)(() => u.switchVoiceChat(), [u]);
                        return o().createElement(pu, {
                            isChecked: u.isVoiceChatEnabled,
                            size: Bu.small,
                            type: mu.main,
                            onChange: e,
                            text: R.strings.platoon.settings.voice(),
                        });
                    },
                    ku = ({ filterType: u }) => {
                        switch (u) {
                            case v.tier:
                                return o().createElement(Du, null);
                            case v.voice:
                                return o().createElement(yu, null);
                        }
                    },
                    Ou = 'SettingsContent_base_4d',
                    Tu = 'SettingsContent_notLast_f8',
                    xu = () => {
                        const u = b('model.searchFilterTypes');
                        return o().createElement(
                            'div',
                            { className: Ou },
                            u.map((e, t) =>
                                o().createElement(
                                    'div',
                                    { key: e.value, className: s()(u.length - 1 !== t && Tu) },
                                    o().createElement(ku, { filterType: e.value }),
                                ),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    i().render(o().createElement(xu, null), document.getElementById('root'));
                });
            },
            363: (u) => {
                u.exports = React;
            },
            533: (u) => {
                u.exports = ReactDOM;
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return __webpack_modules__[u](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, n) => {
            if (!e) {
                var o = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, n] = deferred[s], r = !0, i = 0; i < e.length; i++)
                        (!1 & n || o >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((r = !1), n < o && (o = n));
                    if (r) {
                        deferred.splice(s--, 1);
                        var a = t();
                        void 0 !== a && (u = a);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, n];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return __webpack_require__.d(e, { a: e }), e;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 681),
        (() => {
            var u = { 681: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        o,
                        [r, i, a] = t,
                        s = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (a) var E = a(__webpack_require__);
                    }
                    for (e && e(t); s < r.length; s++)
                        (o = r[s]), __webpack_require__.o(u, o) && u[o] && u[o][0](), (u[o] = 0);
                    return __webpack_require__.O(E);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [720], () => __webpack_require__(728));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
