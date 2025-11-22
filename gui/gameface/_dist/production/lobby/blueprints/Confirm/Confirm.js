(() => {
    'use strict';
    var __webpack_modules__ = {
            294: (u, e, t) => {
                t.d(e, { O: () => cu });
                var n = {};
                (t.r(n),
                    t.d(n, { mouse: () => D, off: () => A, on: () => c, onResize: () => s, onScaleUpdated: () => E }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => _,
                        getSize: () => B,
                        graphicsQuality: () => C,
                        playSound: () => d,
                        setRTPC: () => m,
                    }));
                var r = {};
                (t.r(r), t.d(r, { getBgUrl: () => y, getTextureUrl: () => x }));
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
                        addModelObserver: () => U,
                        addPreloadTexture: () => H,
                        arabic2roman: () => au,
                        children: () => r,
                        displayStatus: () => S,
                        displayStatusIs: () => iu,
                        enableFullScreenModeSupported: () => su,
                        events: () => k,
                        extraSize: () => ou,
                        forceTriggerMouseMove: () => eu,
                        freezeTextureBeforeResize: () => K,
                        getBrowserTexturePath: () => W,
                        getDisplayStatus: () => tu,
                        getExternalPaddingsRem: () => ru,
                        getFontNames: () => nu,
                        getScale: () => q,
                        getSize: () => $,
                        getViewGlobalPosition: () => z,
                        initExternalPaddings: () => Eu,
                        isEventHandled: () => uu,
                        isFocused: () => Q,
                        pxToRem: () => Y,
                        remToPx: () => X,
                        resize: () => G,
                        sendEvent: () => I,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => J,
                        setInputPaddingsRem: () => V,
                        setSidePaddingsRem: () => j,
                        whenTutorialReady: () => lu,
                    }));
                const s = o('clientResized'),
                    E = o('self.onScaleUpdated'),
                    c = (u, e) => engine.on(u, e),
                    A = (u, e) => engine.off(u, e),
                    F = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const D = (function () {
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
                    const a = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${e}`,
                                        i = F[e]((u) => t([u, 'outside']));
                                    function o(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            a &&
                                                (i(),
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
                    return Object.assign({}, a, {
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
                function d(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function m(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                function B(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function _(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const C = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    g = {
                        toUpperCase: (u) => window.systemLocale.toUpperCase(u),
                        toLowerCase: (u) => window.systemLocale.toLowerCase(u),
                    },
                    p = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    h = Object.keys(p).reduce((u, e) => ((u[e] = () => d(p[e])), u), {}),
                    v = { play: Object.assign({}, h, { sound: d }), setRTPC: m },
                    b = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    w = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function f(u) {
                    let e = '';
                    for (let t = w.length - 1; t >= 0; t--) for (; u >= w[t]; ) ((e += b[t]), (u -= w[t]));
                    return e;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function x(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function y(u, e, t) {
                    return `url(${x(u, e, t)})`;
                }
                const S = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    k = {
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
                    O = ['args'];
                const T = 2,
                    N = 16,
                    M = 32,
                    P = 64,
                    L = (u, e) => {
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
                                })(e, O);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((n = a),
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
                    I = {
                        close(u) {
                            L('popover' === u ? T : M);
                        },
                        minimize() {
                            L(P);
                        },
                        move(u) {
                            L(N, { isMouseEvent: !0, on: u });
                        },
                    };
                function H(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function V(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function W(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function U(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function j(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function $(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function G(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function z(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: X(e.x), y: X(e.y) };
                }
                function K() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function q() {
                    return viewEnv.getScale();
                }
                function Y(u) {
                    return viewEnv.pxToRem(u);
                }
                function X(u) {
                    return viewEnv.remToPx(u);
                }
                function Z(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function Q() {
                    return viewEnv.isFocused();
                }
                function J() {
                    return viewEnv.setEventHandled();
                }
                function uu() {
                    return viewEnv.isEventHandled();
                }
                function eu() {
                    viewEnv.forceTriggerMouseMove();
                }
                function tu() {
                    return viewEnv.getShowingStatus();
                }
                const nu = (() => {
                        let u = [];
                        return () => (0 === u.length && (u = Object.keys(viewEnv.getFontsConfig())), u);
                    })(),
                    au = f;
                function ru() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const iu = Object.keys(S).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === S[e]), u), {}),
                    ou = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    lu = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : k.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
                function su() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function Eu(u) {
                    function e() {
                        const e = viewEnv.getExternalPaddingsRem(),
                            t = e.top,
                            n = e.right,
                            a = e.bottom,
                            r = e.left;
                        (u.style.setProperty('--external-padding-top', `${t}rem`),
                            u.style.setProperty('--external-padding-right', `${n}rem`),
                            u.style.setProperty('--external-padding-bottom', `${a}rem`),
                            u.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (e(), engine.on('self.onPaddingsUpdated', () => e()));
                }
                const cu = { view: i, client: a, sound: v, intl: g };
            },
            521: (u, e, t) => {
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
            358: (u, e, t) => {
                t.d(e, { Z: () => r });
                var n = t(294);
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
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
                t.d(e, { Sw: () => r.Z, B0: () => o, ry: () => B, Sy: () => C });
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
                var r = t(358);
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
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(521),
                    F = t(294);
                const D = ['args'];
                function d(u, e, t, n, a, r, i) {
                    try {
                        var o = u[r](i),
                            l = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(l) : Promise.resolve(l).then(n, a);
                }
                const m = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    B = (function () {
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
                                        function i(u) {
                                            d(r, n, a, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            d(r, n, a, i, o, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    _ = (u, e) => {
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
                    C = () => _(o.CLOSE),
                    g = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var p = t(572);
                const h = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: p.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: s,
                        TimeFormatType: E,
                        DateFormatType: c,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (u) => _(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => _(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            _(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, a = R.invalid('resId'), r) => {
                            const i = F.O.view.getViewGlobalPosition(),
                                l = t.getBoundingClientRect(),
                                s = l.x,
                                E = l.y,
                                c = l.width,
                                A = l.height,
                                D = {
                                    x: F.O.view.pxToRem(s) + i.x,
                                    y: F.O.view.pxToRem(E) + i.y,
                                    width: F.O.view.pxToRem(c),
                                    height: F.O.view.pxToRem(A),
                                };
                            _(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: e,
                                bbox: m(D),
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
                            g(u, C);
                        },
                        handleViewEvent: _,
                        onBindingsReady: B,
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
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = v;
            },
            613: (u, e, t) => {
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
            477: (u, e, t) => {
                const n = React;
                var a = t.n(n);
                const r = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var i = t(294);
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
                                a = (function (u, e) {
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
                const E = s(),
                    c = (0, n.createContext)(E),
                    A = ['children'];
                (0, n.memo)((u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                            return a;
                        })(u, A);
                    const a = (0, n.useContext)(c),
                        i = a.extraLarge,
                        o = a.large,
                        l = a.medium,
                        s = a.small,
                        E = a.extraSmall,
                        F = a.extraLargeWidth,
                        D = a.largeWidth,
                        d = a.mediumWidth,
                        m = a.smallWidth,
                        B = a.extraSmallWidth,
                        _ = a.extraLargeHeight,
                        C = a.largeHeight,
                        g = a.mediumHeight,
                        p = a.smallHeight,
                        h = a.extraSmallHeight,
                        v = { extraLarge: _, large: C, medium: g, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return e;
                        if (t.large && o) return e;
                        if (t.medium && l) return e;
                        if (t.small && s) return e;
                        if (t.extraSmall && E) return e;
                    } else {
                        if (t.extraLargeWidth && F) return r(e, t, v);
                        if (t.largeWidth && D) return r(e, t, v);
                        if (t.mediumWidth && d) return r(e, t, v);
                        if (t.smallWidth && m) return r(e, t, v);
                        if (t.extraSmallWidth && B) return r(e, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && _) return e;
                            if (t.largeHeight && C) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && p) return e;
                            if (t.extraSmallHeight && h) return e;
                        }
                    }
                    return null;
                });
                const F = ({ children: u }) => {
                        const e = (0, n.useState)(s),
                            t = e[0],
                            r = e[1],
                            o = (0, n.useState)(!1),
                            l = o[0],
                            E = o[1];
                        return (
                            (0, n.useLayoutEffect)(() => {
                                function u() {
                                    r((u) => {
                                        const e = i.O.client.getSize('rem');
                                        return u.width === e.width && u.height === e.height ? u : s(e);
                                    });
                                }
                                return (
                                    u(),
                                    E(!0),
                                    i.O.client.events.on('clientResized', u),
                                    i.O.client.events.on('self.onScaleUpdated', u),
                                    () => {
                                        (i.O.client.events.off('clientResized', u),
                                            i.O.client.events.off('self.onScaleUpdated', u));
                                    }
                                );
                            }, []),
                            a().createElement(c.Provider, { value: t }, l && u)
                        );
                    },
                    D = ReactDOM;
                var d = t.n(D),
                    m = t(797);
                let B;
                function _(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(B || (B = {}));
                const C = (u) => u.replace(/&nbsp;/g, ' '),
                    g = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    p = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    h = (u, e, t = B.left) => u.split(e).reduce(t === B.left ? g : p, []),
                    v = (() => {
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
                    b = ['zh_cn', 'zh_sg', 'zh_tw'],
                    w = (u, e = B.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (b.includes(t)) return v(u);
                        if ('ja' === t) {
                            return (0, m.D4)()
                                .parse(u)
                                .map((u) => C(u));
                        }
                        return ((u, e = B.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = C(u);
                            return (h(a, /( )/, e).forEach((u) => (t = t.concat(h(u, n, B.left)))), t);
                        })(u, e);
                    };
                var f = t(916),
                    x = t(613);
                (Date.now(), x.Ew.getRegionalDateTime, x.Ew.getFormattedDateTime);
                const y = (u = 1) => {
                        const e = new Error().stack;
                        let t,
                            n = R.invalid('resId'),
                            a = '';
                        var r;
                        e &&
                            ((a = (null == (r = e.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                            (t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (n = window.subViews[t].id));
                        return { callerUrl: a, caller: t, stack: e, resId: n };
                    },
                    S = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    k = (u) => {
                        const e = (0, n.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    O = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    T = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    N = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const n = S(`${u}.${t}`, window);
                                return O(n) ? e(u, t, n) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    M = (u) => {
                        const e = ((u) => {
                                const e = y(),
                                    t = e.caller,
                                    n = e.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: T(a, u || ''), resId: n };
                            })(),
                            t = e.modelPrefix,
                            n = u.split('.');
                        if (n.length > 0) {
                            const u = [n[0]];
                            return (
                                n.reduce((e, n) => {
                                    const a = S(T(t, `${e}.${n}`), window);
                                    return O(a) ? (u.push(a.id), `${e}.${n}.value`) : (u.push(n), `${e}.${n}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    };
                const P = () => (window.injected || (window.injected = new Map()), window.injected);
                const L = f.Sw.instance;
                let I;
                !(function (u) {
                    ((u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep'));
                })(I || (I = {}));
                const H = (u = 'model', e = I.Deep) => {
                    const t = (0, n.useState)(0),
                        a = (t[0], t[1]),
                        r = (0, n.useMemo)(() => y(), []),
                        i = r.callerUrl,
                        o = r.caller,
                        l = r.resId,
                        s = (0, n.useMemo)(() => {
                            const e = (function (u) {
                                return P().has(u);
                            })(i.replace('.js', '.html'));
                            return window.__feature && window.__feature !== o && !e ? `subViews.${o}.${u}` : u;
                        }, [i, o, u]),
                        E = (0, n.useState)(() =>
                            ((u) => {
                                const e = S(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return O(e) ? e.value : e;
                            })(N(s)),
                        ),
                        c = E[0],
                        A = E[1],
                        F = (0, n.useRef)(-1);
                    return (
                        k(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? I.Deep : I.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== I.None)
                            ) {
                                const t = (u) => {
                                        ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                        e === I.Deep
                                            ? (u === c && a((u) => u + 1), A(u))
                                            : A(Object.assign([], u));
                                    },
                                    n = M(u);
                                F.current = L.addCallback(n, t, l, e === I.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (e !== I.None)
                                return () => {
                                    L.removeCallback(F.current, l);
                                };
                        }, [l, e]),
                        c
                    );
                };
                f.Sw.instance;
                var V = t(521);
                const W = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function U(u = V.n.NONE, e = W, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (u !== V.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (!a && i.O.view.isEventHandled()) return;
                                (i.O.view.setEventHandled(), e(n), t && n.stopPropagation());
                            }
                        }
                    }, [e, u, t, a]);
                }
                function j() {
                    !(function (u = V.n.ESCAPE) {
                        U(u, f.Sy, !0);
                    })(V.n.ESCAPE);
                }
                var $ = t(483),
                    G = t.n($);
                const z = {
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
                    K = [
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
                function q() {
                    return (
                        (q =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        q.apply(this, arguments)
                    );
                }
                const Y = (u) => {
                        let e = u.caption,
                            t = u.onClick,
                            r = u.goto,
                            o = u.classNames,
                            l = u.onMouseEnter,
                            s = u.onMouseLeave,
                            E = u.onMouseDown,
                            c = u.onMouseUp,
                            A = u.side,
                            F = void 0 === A ? 'left' : A,
                            D = u.type,
                            d = void 0 === D ? 'back' : D,
                            m = u.soundHover,
                            B = void 0 === m ? 'highlight' : m,
                            _ = u.soundClick,
                            C = void 0 === _ ? 'play' : _,
                            g = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, K);
                        const p = (0, n.useCallback)(
                                (u) => {
                                    (null == l || l(u), i.O.sound.play.sound(B));
                                },
                                [l, B],
                            ),
                            h = (0, n.useCallback)(
                                (u) => {
                                    null == s || s(u);
                                },
                                [s],
                            ),
                            v = (0, n.useCallback)(
                                (u) => {
                                    (null == E || E(u), i.O.sound.play.sound(C));
                                },
                                [E, C],
                            ),
                            b = (0, n.useCallback)(
                                (u) => {
                                    null == c || c(u);
                                },
                                [c],
                            );
                        return a().createElement(
                            'div',
                            q(
                                {
                                    className: G()(
                                        z.base,
                                        z[`base__${d}`],
                                        z[`base__${F}`],
                                        null == o ? void 0 : o.base,
                                    ),
                                    onMouseEnter: p,
                                    onMouseLeave: h,
                                    onMouseDown: v,
                                    onMouseUp: b,
                                    onClick: t,
                                },
                                g,
                            ),
                            'info' !== d && a().createElement('div', { className: z.shine }),
                            a().createElement(
                                'div',
                                {
                                    className: G()(
                                        z.icon,
                                        z[`icon__${d}`],
                                        z[`icon__${F}`],
                                        null == o ? void 0 : o.icon,
                                    ),
                                },
                                a().createElement('div', { className: G()(z.glow, null == o ? void 0 : o.glow) }),
                            ),
                            a().createElement(
                                'div',
                                { className: G()(z.caption, z[`caption__${d}`], null == o ? void 0 : o.caption) },
                                e,
                            ),
                            r && a().createElement('div', { className: G()(z.goto, null == o ? void 0 : o.goto) }, r),
                        );
                    },
                    X = [
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
                function Z(u) {
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
                const Q = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: f.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    J = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            a = u.args,
                            r = u.onMouseEnter,
                            i = u.onMouseLeave,
                            o = u.onMouseDown,
                            l = u.onClick,
                            s = u.ignoreShowDelay,
                            E = void 0 !== s && s,
                            c = u.ignoreMouseClick,
                            A = void 0 !== c && c,
                            F = u.decoratorId,
                            D = void 0 === F ? 0 : F,
                            d = u.isEnabled,
                            m = void 0 === d || d,
                            B = u.targetId,
                            _ = void 0 === B ? 0 : B,
                            C = u.onShow,
                            g = u.onHide,
                            p = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, X);
                        const h = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, n.useMemo)(() => _ || y().resId, [_]),
                            b = (0, n.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Q(t, D, { isMouseEvent: !0, on: !0, arguments: Z(a) }, v),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, D, a, v, C]),
                            w = (0, n.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const u = h.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (h.current.timeoutId = 0)),
                                        Q(t, D, { on: !1 }, v),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, D, v, g]),
                            f = (0, n.useCallback)((u) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(h.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const u = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', f, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', f, { capture: !0 }),
                                        u && window.clearTimeout(u));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === m && w();
                            }, [m, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        (window.removeEventListener('mouseleave', w), w());
                                    }
                                ),
                                [w],
                            ));
                        return m
                            ? (0, n.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      (clearTimeout(h.current.timeoutId),
                                                      (h.current.timeoutId = window.setTimeout(b, E ? 100 : 400)),
                                                      r && r(u),
                                                      x && x(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              (w(), null == i || i(e), null == u || u(e));
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              (!1 === A && w(), null == l || l(e), null == u || u(e));
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              (!1 === A && w(), null == o || o(e), null == u || u(e));
                                          })(e.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : e;
                        var x;
                    },
                    uu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function eu() {
                    return (
                        (eu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        eu.apply(this, arguments)
                    );
                }
                const tu = R.views.common.tooltip_window.simple_tooltip_content,
                    nu = (u) => {
                        let e = u.children,
                            t = u.body,
                            r = u.header,
                            i = u.note,
                            o = u.alert,
                            l = u.args,
                            s = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, uu);
                        const E = (0, n.useMemo)(() => {
                            const u = Object.assign({}, l, { body: t, header: r, note: i, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, r, i, l]);
                        return a().createElement(
                            J,
                            eu(
                                {
                                    contentId:
                                        ((c = null == l ? void 0 : l.hasHtmlContent),
                                        c ? tu.SimpleTooltipHtmlContent('resId') : tu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                s,
                            ),
                            e,
                        );
                        var c;
                    };
                function au(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
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
                    iu = {
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
                let ou, lu;
                (!(function (u) {
                    ((u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost'));
                })(ou || (ou = {})),
                    (function (u) {
                        ((u.extraSmall = 'extraSmall'),
                            (u.small = 'small'),
                            (u.medium = 'medium'),
                            (u.large = 'large'));
                    })(lu || (lu = {})));
                const su = ({
                    children: u,
                    size: e,
                    disabled: t,
                    mixClass: r,
                    onMouseEnter: i,
                    onMouseMove: o,
                    onMouseDown: l,
                    onMouseUp: s,
                    onMouseLeave: E,
                    onClick: c,
                    isFocused: A = !1,
                    type: F = ou.primary,
                    soundHover: D = 'highlight',
                    soundClick: d = 'play',
                }) => {
                    const m = (0, n.useRef)(null),
                        B = (0, n.useState)(A),
                        _ = B[0],
                        C = B[1],
                        g = (0, n.useState)(!1),
                        p = g[0],
                        h = g[1];
                    return (
                        (0, n.useEffect)(() => {
                            function u(u) {
                                _ && null !== m.current && !m.current.contains(u.target) && C(!1);
                            }
                            return (
                                document.addEventListener('mousedown', u),
                                () => {
                                    document.removeEventListener('mousedown', u);
                                }
                            );
                        }, [_]),
                        (0, n.useEffect)(() => {
                            C(A);
                        }, [A]),
                        a().createElement(
                            'div',
                            {
                                ref: m,
                                className: G()(
                                    iu.base,
                                    iu[`base__${F}`],
                                    t && iu.base__disabled,
                                    e && iu[`base__${e}`],
                                    _ && iu.base__focus,
                                    p && iu.base__highlightActive,
                                    r,
                                ),
                                onMouseEnter: function (u) {
                                    t || (null !== D && au(D), i && i(u));
                                },
                                onMouseMove: function (u) {
                                    o && o(u);
                                },
                                onMouseUp: function (u) {
                                    t || (s && s(u), h(!1));
                                },
                                onMouseDown: function (u) {
                                    t ||
                                        (null !== d && au(d),
                                        l && l(u),
                                        A && (t || (m.current && (m.current.focus(), C(!0)))),
                                        h(!0));
                                },
                                onMouseLeave: function (u) {
                                    t || (E && E(u), h(!1));
                                },
                                onClick: function (u) {
                                    t || (c && c(u));
                                },
                            },
                            F !== ou.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: iu.back }),
                                    a().createElement('span', { className: iu.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: G()(iu.state, iu.state__default) },
                                a().createElement('span', { className: iu.stateDisabled }),
                                a().createElement('span', { className: iu.stateHighlightHover }),
                                a().createElement('span', { className: iu.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: iu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                function Eu(u, e) {
                    const t = ((u) =>
                        u.reduce((u, { value: e }) => (void 0 !== e.name && (u[e.name] = e.value), u), {}))(e);
                    return (
                        (n = t),
                        u.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                            const e = 0 === u.indexOf('%') ? 2 : 1;
                            return String(n[u.slice(e, -e)]);
                        })
                    );
                    var n;
                }
                const cu = 'DialogTemplate_base_2b',
                    Au = 'DialogTemplate_top_e2',
                    Fu = 'DialogTemplate_topButton_3f',
                    Du = 'DialogTemplate_view_f7',
                    du = 'DialogTemplate_view__show_63',
                    mu = 'DialogTemplate_title_13',
                    Bu = 'DialogTemplate_content_9a',
                    _u = 'DialogTemplate_divider_7d',
                    Cu = 'DialogTemplate_footer_a5',
                    gu = 'DialogTemplate_buttons_34',
                    pu = 'DialogTemplate_buttons__indent_ce',
                    hu = 'DialogTemplate_buttonsItem_6f',
                    vu = 'DialogTemplate_button_b3';
                class bu extends a().PureComponent {
                    constructor(...u) {
                        (super(...u),
                            (this.handleAcceptClicked = () => {
                                this.props.onAcceptClicked();
                            }),
                            (this.handleCancelClicked = () => {
                                this.props.onCancelClicked();
                            }),
                            (this.handleKeyDown = (u) => {
                                u.keyCode !== V.n.ENTER || u.altKey || (u.preventDefault(), this.handleAcceptClicked());
                            }));
                    }
                    get title() {
                        const u = this.props,
                            e = u.titleBody,
                            t = u.titleArgs;
                        return e ? Eu(e, t) : '';
                    }
                    componentDidMount() {
                        window.addEventListener('keydown', this.handleKeyDown);
                    }
                    componentWillUnmount() {
                        document.removeEventListener('keydown', this.handleKeyDown);
                    }
                    render() {
                        const u = this.props,
                            e = u.footer,
                            t = u.isAcceptDisabled;
                        return a().createElement(
                            'div',
                            { className: cu },
                            a().createElement(
                                'div',
                                { className: Au },
                                a().createElement(
                                    'div',
                                    { className: Fu },
                                    a().createElement(Y, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: this.handleCancelClicked,
                                    }),
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: G()(Du, du) },
                                a().createElement('h1', { className: mu }, C(this.title)),
                                a().createElement('div', { className: Bu }, this.props.children),
                                a().createElement('div', { className: _u }),
                                e && a().createElement('footer', { className: Cu }, e),
                                a().createElement(
                                    'div',
                                    { className: G()(gu, !e && pu) },
                                    a().createElement(
                                        nu,
                                        {
                                            body: R.strings.tooltips.blueprints.conversionView.confirm.notEnoughFragments(),
                                            isEnabled: t,
                                        },
                                        a().createElement(
                                            'div',
                                            { className: hu },
                                            a().createElement(
                                                su,
                                                {
                                                    type: 'primaryGreen',
                                                    mixClass: vu,
                                                    size: lu.medium,
                                                    onClick: this.handleAcceptClicked,
                                                    disabled: t,
                                                },
                                                this.props.acceptButtonText,
                                            ),
                                        ),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: hu },
                                        a().createElement(
                                            su,
                                            {
                                                mixClass: vu,
                                                type: ou.secondary,
                                                size: lu.medium,
                                                onClick: this.handleCancelClicked,
                                                soundClick: 'cancelcloseno',
                                            },
                                            this.props.cancelButtonText,
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }
                }
                const wu = 'ConfirmApp_storage_be',
                    fu = 'ConfirmApp_selector_bf';
                const xu = {
                        base: 'IntelligenceAmount_base_e3',
                        box: 'IntelligenceAmount_box_51',
                        countText: 'IntelligenceAmount_countText_b9',
                        countText__disabled: 'IntelligenceAmount_countText__disabled_f3',
                        totalCountText: 'IntelligenceAmount_totalCountText_6f',
                        icon: 'IntelligenceAmount_icon_bc',
                    },
                    yu = () => {
                        const u = H('model'),
                            e = u.count,
                            t = u.totalCount,
                            n = u.usedAdditionalPrice.some((u) => u.value.notEnough),
                            r = G()(xu.countText, (n || e < 1) && xu.countText__disabled);
                        return a().createElement(
                            'div',
                            { className: xu.base },
                            a().createElement('span', { className: xu.bg }),
                            a().createElement('div', { className: xu.icon }),
                            a().createElement(
                                'div',
                                { className: xu.box },
                                a().createElement('span', { className: r }, `${e} `),
                                a().createElement('span', { className: xu.totalCountText }, `/ ${t}`),
                            ),
                        );
                    },
                    Su = (u, e, t, n) => {
                        e > t || e < n || (e > u ? au('cons_ammo_roll_plus') : e < u && au('cons_ammo_roll_minus'));
                    };
                let ku, Ou;
                (!(function (u) {
                    ((u.small = 'small'), (u.normal = 'normal'));
                })(ku || (ku = {})),
                    (function (u) {
                        u.moveProgress = 'moveProgress';
                    })(Ou || (Ou = {})));
                const Tu = {
                        bgImageBase: '#ffffff19',
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: { bgImageBase: '#ffb266', bgImageDisabled: '#ffffff33', bgImageFinished: '#c5ff51a6' },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: { color: 'rgba(249,249,249,0.17)', shadow: '0 0 1rem 0 #ffffff33' },
                    },
                    Nu = {
                        base: 'EditableProgress_base_a0',
                        base__small: 'EditableProgress_base__small_41',
                        glow: 'EditableProgress_glow_5c',
                        glow__left: 'EditableProgress_glow__left_6b',
                        glow__right: 'EditableProgress_glow__right_c9',
                        base__disabled: 'EditableProgress_base__disabled_e6',
                        base__finished: 'EditableProgress_base__finished_2e',
                        picker: 'EditableProgress_picker_4a',
                        progressBar: 'EditableProgress_progressBar_24',
                        line: 'EditableProgress_line_b3',
                        pattern: 'EditableProgress_pattern_81',
                        delta: 'EditableProgress_delta_2d',
                        gradient: 'EditableProgress_gradient_2c',
                    },
                    Mu = ({
                        size: u = ku.normal,
                        value: e,
                        availableMaximum: t,
                        maximum: r,
                        picker: i,
                        allowSlide: o,
                        theme: l = Tu,
                    }) => {
                        const s = G()(Nu.progressBar, Nu.base, Nu[`base__${u}`]),
                            E = (0, n.useMemo)(() => ({ width: (e / r) * 100 + '%' }), [e, r]),
                            c = (0, n.useMemo)(() => ({ width: (t / r) * 100 + '%' }), [t, r]),
                            A = G()(Nu.glow, Nu.glow__right),
                            F = G()(Nu.picker, 0 === t),
                            D = {
                                '--progress-base': l.bgImageBase,
                                '--progress-line-base': l.line.bgColorBase,
                                '--progress-line-disabled': l.line.bgColorDisabled,
                                '--progress-line-finished': l.line.bgColorFinished,
                                '--progress-pattern-base': l.pattern.bgImageBase,
                                '--progress-pattern-disabled': l.pattern.bgImageDisabled,
                                '--progress-pattern-finished': l.pattern.bgImageFinished,
                                '--progress-glow': `url('${l.glow}')`,
                                '--progress-glow-small': `url('${l.glowSmall}')`,
                                '--progress-delta-color': l.delta.color,
                                '--progress-delta-shadow': l.delta.shadow,
                            };
                        return a().createElement(
                            'div',
                            { className: s, style: D },
                            a().createElement(
                                'div',
                                { className: Nu.delta, style: c },
                                !o && a().createElement('div', { className: A }),
                            ),
                            a().createElement(
                                'div',
                                { className: Nu.line, style: E },
                                a().createElement('div', { className: Nu.pattern }),
                                a().createElement('div', { className: Nu.gradient }),
                                i && a().createElement('div', { className: F }, i),
                            ),
                        );
                    },
                    Pu = 'SlideControl_base_b2',
                    Lu = 'SlideControl_image_30',
                    Iu = 'SlideControl_image__hover_05',
                    Ru = 'SlideControl_image__active_b2',
                    Hu = ({ parentId: u, isActive: e, isHovered: t, isDisabled: n }) => {
                        const r = G()(Lu, t && !n && Iu, e && Ru);
                        return a().createElement(
                            'div',
                            { id: `${u}-slide-control`, className: Pu },
                            a().createElement('div', { className: r }),
                        );
                    },
                    Vu = 'Slider_base_d5',
                    Wu = 'Slider_base__disabled_56',
                    Uu = 'Slider_slideArea_dc',
                    ju = 'Slider_editor_b3',
                    $u = 'Slider_editor__active_a7',
                    Gu = 'Slider_editor__minus_fb',
                    zu = 'Slider_editor__plus_6c',
                    Ku = {
                        base: 'StepEditor_base_5f',
                        base__enabled: 'StepEditor_base__enabled_f8',
                        base__minusOff: 'StepEditor_base__minusOff_b2',
                        base__minusOn: 'StepEditor_base__minusOn_69',
                        base__plusOff: 'StepEditor_base__plusOff_45',
                        base__plusOn: 'StepEditor_base__plusOn_35',
                    },
                    qu = ({ parentId: u, type: e, isEnabled: t, onClick: n }) => {
                        const r = G()(Ku.base, t && Ku.base__enabled, Ku[`base__${e}${t ? 'On' : 'Off'}`]);
                        return a().createElement('div', { id: `${u}-step-editor-${e}`, className: r, onClick: n });
                    },
                    Yu = ({
                        parentId: u,
                        currentValue: e,
                        maximum: t,
                        sliderMaximum: r,
                        sliderMinimum: i = 0,
                        isDisabled: o = !1,
                        onUpdates: l,
                        withStepEditors: s = !0,
                        stepCount: E = 1,
                    }) => {
                        const c = (0, n.useRef)(null),
                            A = (0, n.useRef)({ down: !1, move: !1, over: !1 }),
                            F = (0, n.useRef)({ currentValue: e, maximum: t, sliderMaximum: r, sliderMinimum: i }),
                            D = (0, n.useState)(e),
                            d = D[0],
                            m = D[1],
                            B = (0, n.useState)(!1),
                            _ = B[0],
                            C = B[1],
                            g = (0, n.useState)(!1),
                            p = g[0],
                            h = g[1],
                            v = (0, n.useCallback)(
                                (u) => {
                                    let e = u ? 1 : -1,
                                        t = F.current.currentValue;
                                    if (E > 1) {
                                        e *= E;
                                        const u = t % E;
                                        e < 0 && u ? (t -= u) : (t += e - u);
                                    } else t += e;
                                    return t;
                                },
                                [E],
                            ),
                            b = (0, n.useCallback)(
                                (u, e) => {
                                    if (!c.current) return 0;
                                    const t = c.current.getBoundingClientRect(),
                                        n = F.current.maximum,
                                        a = t.width / n,
                                        r = u - t.left,
                                        i = Math.floor(a > 0 ? r / a : r);
                                    if (i > n) return n;
                                    if (i <= 0) return 0;
                                    if (E > 1) {
                                        let u = i - (i % E);
                                        const t = i - u;
                                        return (
                                            t > 0 && ((e && i > F.current.currentValue) || t > 0.5 * E) && (u += E),
                                            u
                                        );
                                    }
                                    return i;
                                },
                                [E],
                            ),
                            w = (0, n.useCallback)(
                                (u) => {
                                    const e = F.current,
                                        t = e.sliderMaximum,
                                        n = e.sliderMinimum;
                                    (u < n ? (u = n) : u > t && (u = t),
                                        F.current.currentValue !== u &&
                                            (m(u), (F.current.currentValue = u), l && l(u)));
                                },
                                [l],
                            ),
                            f = e < r,
                            x = e > 0,
                            y = (0, n.useCallback)(() => {
                                if (f && A.current.over) {
                                    const u = v(!0);
                                    w(u);
                                }
                            }, [f, v, w]),
                            S = (0, n.useCallback)(() => {
                                if (x && A.current.over) {
                                    const u = v(!1);
                                    w(u);
                                }
                            }, [x, v, w]),
                            k = (0, n.useCallback)(() => {
                                ((A.current.down = !1), h(!1));
                            }, []),
                            O = (0, n.useCallback)(
                                (u) => {
                                    if (!(0 === u.clientX && 0 === u.clientY) && A.current.down) {
                                        A.current.move = !0;
                                        const e = b(u.clientX);
                                        w(e);
                                    }
                                },
                                [b, w],
                            );
                        (U(V.n.ARROW_UP, y),
                            U(V.n.ARROW_DOWN, S),
                            (0, n.useEffect)(() => {
                                F.current.maximum = t;
                            }, [t]),
                            (0, n.useEffect)(() => {
                                if (p)
                                    return (
                                        document.addEventListener('mouseup', k),
                                        document.addEventListener('mousemove', O),
                                        () => {
                                            (document.removeEventListener('mouseup', k),
                                                document.removeEventListener('mousemove', O));
                                        }
                                    );
                            }, [p, O, k]),
                            (0, n.useEffect)(() => {
                                ((F.current.sliderMaximum = r), (F.current.sliderMinimum = i));
                            }, [r, i]),
                            (0, n.useEffect)(() => {
                                e !== F.current.currentValue && ((F.current.currentValue = e), m(e));
                            }, [e]));
                        const T = (0, n.useCallback)(
                                (u) => {
                                    o || 0 !== u.button || ((A.current.down = !0), h(!0));
                                },
                                [o],
                            ),
                            N = (0, n.useCallback)(
                                (u) => {
                                    if (o || 0 !== u.button) return;
                                    const e = b(u.clientX, !A.current.move),
                                        t = F.current,
                                        n = t.currentValue,
                                        a = t.sliderMaximum,
                                        r = t.sliderMinimum;
                                    (w(e), Su(n, e, a, r), (A.current.move = !1));
                                },
                                [b, o, w],
                            ),
                            M = (0, n.useCallback)(() => {
                                ((A.current.over = !0), C(!0), au('highlight'));
                            }, []),
                            P = (0, n.useCallback)(() => {
                                ((A.current.over = !1), C(!1));
                            }, []),
                            L = (0, n.useCallback)(
                                (u) => {
                                    const e = F.current,
                                        t = e.currentValue,
                                        n = e.sliderMaximum,
                                        a = e.sliderMinimum,
                                        r = v(u.deltaY > 0);
                                    (w(r), Su(t, r, n, a));
                                },
                                [v, w],
                            );
                        return a().createElement(
                            'div',
                            { ref: c, onMouseEnter: M, onMouseLeave: P, onWheel: L, className: G()(Vu, o && Wu) },
                            s &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: G()(ju, Gu, _ && $u) },
                                        a().createElement(qu, { parentId: u, type: 'minus', isEnabled: x, onClick: S }),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: G()(ju, zu, _ && $u) },
                                        a().createElement(qu, { parentId: u, type: 'plus', isEnabled: f, onClick: y }),
                                    ),
                                ),
                            a().createElement(
                                'div',
                                { id: `${u}-progress-wrapper`, onClick: N, onMouseDown: T, className: Uu },
                                a().createElement(Mu, {
                                    allowSlide: !0,
                                    maximum: t,
                                    value: d,
                                    availableMaximum: o ? 0 : r,
                                    picker: a().createElement(Hu, {
                                        parentId: u,
                                        isActive: p,
                                        isHovered: _,
                                        isDisabled: o,
                                    }),
                                }),
                            ),
                        );
                    },
                    Xu = 'MultipleSelectorItem_base_6a',
                    Zu = 'MultipleSelectorItem_count_07',
                    Qu = 'MultipleSelectorItem_countText_c1',
                    Ju = 'MultipleSelectorItem_countText__notEnough_5a',
                    ue = 'MultipleSelectorItem_countText__disabled_57',
                    ee = 'MultipleSelectorItem_icon_a2',
                    te = 'MultipleSelectorItem_icon__disabled_58',
                    ne = 'MultipleSelectorItem_slider_39';
                function ae() {
                    return (
                        (ae =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        ae.apply(this, arguments)
                    );
                }
                const re = ({
                        totalCount: u,
                        count: e,
                        index: t,
                        additionalPriceOption: r,
                        usedAdditionalPrice: i,
                    }) => {
                        const o = H('model').onSliderShift,
                            l = r.notEnough,
                            s = (0, n.useCallback)(
                                (u) => {
                                    !l && o({ index: t, newCount: u });
                                },
                                [t, l, o],
                            ),
                            E = (0, n.useMemo)(() => ({ backgroundImage: `url(${r.iconBig})` }), [r.iconBig]),
                            c = (0, n.useMemo)(() => {
                                const e = Number(i.value),
                                    t = Number(r.value);
                                return { currentValue: e, maximum: t * u, stepCount: t };
                            }, [i.value, r.value, u]),
                            A = G()(Qu, i.notEnough && Ju, l && ue),
                            F = G()(ee, l && te);
                        return a().createElement(
                            nu,
                            {
                                body: R.strings.tooltips.blueprints.conversionView.icon.notEnoughFragments(),
                                isEnabled: i.notEnough || l,
                            },
                            a().createElement(
                                'div',
                                { className: Xu },
                                a().createElement(
                                    'div',
                                    { className: ne },
                                    a().createElement(
                                        Yu,
                                        ae({ parentId: `${t}-slider` }, c, {
                                            sliderMaximum: Number(i.value) + (u - e) * Number(r.value),
                                            onUpdates: s,
                                            isDisabled: l,
                                            withStepEditors: !l,
                                        }),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Zu },
                                    a().createElement('span', { className: A }, i.value),
                                ),
                                a().createElement('div', { className: F, style: E }),
                            ),
                        );
                    },
                    ie = 'MultipleSelector_base_eb',
                    oe = 'MultipleSelector_item_ec',
                    le = () => {
                        const u = H('model'),
                            e = u.totalCount,
                            t = u.count,
                            n = u.additionalPriceOptions,
                            r = u.usedAdditionalPrice;
                        return a().createElement(
                            'div',
                            { className: ie },
                            n.map(({ value: u }, n) =>
                                a().createElement(
                                    'div',
                                    { className: oe, key: n },
                                    a().createElement(re, {
                                        totalCount: e,
                                        count: t,
                                        index: n,
                                        additionalPriceOption: u,
                                        usedAdditionalPrice: r[n].value,
                                    }),
                                ),
                            ),
                        );
                    },
                    se = 'SelectorItem_base_6d',
                    Ee = 'SelectorItem_base__disabled_80',
                    ce = 'SelectorItem_bg_49',
                    Ae = 'SelectorItem_selected_fc',
                    Fe = 'SelectorItem_disabled_e0',
                    De = 'SelectorItem_check_a6',
                    de = 'SelectorItem_count_4d',
                    me = 'SelectorItem_countText_58',
                    Be = 'SelectorItem_countText__disabled_70',
                    _e = 'SelectorItem_icon_1b',
                    Ce = ({ index: u, isSelected: e, onClick: t, notEnough: n, icon: r, iconBig: i, value: o }) => {
                        const l = n || e;
                        return a().createElement(
                            'div',
                            {
                                className: G()(se, l && Ee),
                                onClick: () => {
                                    l || t(r, u);
                                },
                                onMouseEnter: () => {
                                    l || ru.playHighlight();
                                },
                            },
                            a().createElement('span', { className: ce }),
                            e && a().createElement('span', { className: Ae }),
                            a().createElement('div', { className: _e, style: { backgroundImage: `url(${i})` } }),
                            e && a().createElement('span', { className: De }),
                            n &&
                                a().createElement(
                                    nu,
                                    { body: R.strings.tooltips.blueprints.conversionView.icon.notEnoughFragments() },
                                    a().createElement('span', { className: Fe }),
                                ),
                            a().createElement(
                                'div',
                                { className: de },
                                a().createElement('span', { className: G()(me, n && Be) }, o),
                            ),
                        );
                    },
                    ge = 'SingleSelector_base_4e',
                    pe = 'SingleSelector_item_83';
                function he() {
                    return (
                        (he =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        he.apply(this, arguments)
                    );
                }
                const ve = () => {
                        const u = H('model'),
                            e = u.additionalPriceOptions,
                            t = u.usedAdditionalPrice,
                            r = u.onSelectItem,
                            i = Array.from(t).findIndex((u) =>
                                Boolean(Number(u.value.value) > 0 && !u.value.notEnough),
                            ),
                            o = (0, n.useCallback)(
                                (u, e) => {
                                    e !== i && (ru.playClick(), r({ selectedItem: e }));
                                },
                                [r, i],
                            );
                        return a().createElement(
                            'div',
                            { className: ge },
                            e.map(({ value: u }, e) =>
                                a().createElement(
                                    'div',
                                    { className: pe, key: u.type + e },
                                    a().createElement(Ce, he({}, u, { index: e, isSelected: i === e, onClick: o })),
                                ),
                            ),
                        );
                    },
                    be = {
                        base: 'Selector_base_28',
                        base__multiple: 'Selector_base__multiple_09',
                        boxHorizontal: 'Selector_boxHorizontal_80',
                        boxVertical: 'Selector_boxVertical_b8',
                        header: 'Selector_header_fb',
                        singleSelector: 'Selector_singleSelector_e2',
                        multipleSelector: 'Selector_multipleSelector_0a',
                        intelligenceAmount: 'Selector_intelligenceAmount_7c',
                        intelligenceAmount__extraSmall: 'Selector_intelligenceAmount__extraSmall_02',
                        divider: 'Selector_divider_76',
                    },
                    we = 'FormatText_base_d0',
                    fe = ({ binding: u, text: e = '', classMix: t, alignment: r = B.left, formatWithBrackets: i }) => {
                        if (null === e) return (console.error("FormatText was supplied with 'null'"), null);
                        const o = i && u ? _(e, u) : e;
                        return a().createElement(
                            n.Fragment,
                            null,
                            o.split('\n').map((e, i) =>
                                a().createElement(
                                    'div',
                                    { className: G()(we, t), key: `${e}-${i}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : w(u, e))))(
                                        e,
                                        r,
                                        u,
                                    ).map((u, e) => a().createElement(n.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    },
                    xe = 'SelectorHeader_title_07',
                    ye = 'SelectorHeader_description_87',
                    Se = 'SelectorHeader_text_2d',
                    ke = 'SelectorHeader_allianceText_b3',
                    Oe = 'SelectorHeader_icon_59',
                    Te = 'SelectorHeader_iconUrl_1d',
                    Ne = R.strings.blueprints.conversionView.topMessage,
                    Me = () => {
                        const u = H('model'),
                            e = u.titleBody,
                            t = u.titleArgs,
                            r = u.allianceName,
                            i = u.totalCount,
                            o = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.blueprints.fragment.conversion.white.$dyn(r)})`,
                                }),
                                [r],
                            ),
                            l = (0, n.useMemo)(
                                () => ({
                                    allianceIcon: a().createElement(
                                        'div',
                                        { className: Oe },
                                        a().createElement('span', { className: Te, style: o }),
                                    ),
                                    allianceName: a().createElement(
                                        'span',
                                        { className: ke },
                                        R.strings.blueprints.conversionView.alliance.name.$dyn(r),
                                    ),
                                    allianceNations: a().createElement(
                                        'span',
                                        { className: ke },
                                        R.strings.blueprints.conversionView.alliance.nations.$dyn(r),
                                    ),
                                }),
                                [r, o],
                            ),
                            s = i > 1 ? Ne.multi() : Ne.single();
                        return a().createElement(
                            'div',
                            null,
                            a().createElement('h1', { className: xe }, C(e ? Eu(e, t) : '')),
                            a().createElement(
                                J,
                                {
                                    contentId:
                                        R.views.lobby.blueprints.tooltips.BlueprintsAlliancesTooltipView('resId'),
                                },
                                a().createElement(
                                    'div',
                                    { className: ye },
                                    a().createElement(fe, { classMix: Se, text: s, binding: l }),
                                ),
                            ),
                        );
                    },
                    Pe = () => {
                        const u = H('model').totalCount,
                            e = (function (u, e, t) {
                                const a = (0, n.useContext)(c);
                                let r = Object.entries(a).filter(([u, e]) => !0 === e && u in l);
                                return (
                                    t && (r = r.filter((u) => t.includes(u[0]))),
                                    u.reduce((u, t) => {
                                        const n = r.map((u) =>
                                            G()(
                                                e[((u, e) => u + '__' + e)(t, u[0])],
                                                e[
                                                    ((u, e) => {
                                                        return u + ((t = e)[0].toUpperCase() + t.slice(1));
                                                        var t;
                                                    })(t, u[0])
                                                ],
                                            ),
                                        );
                                        return ((u[t] = G()(e[t], ...n)), u);
                                    }, {})
                                );
                            })(['intelligenceAmount'], be),
                            t = u > 1,
                            r = G()(be.base, t && be.base__multiple);
                        return a().createElement(
                            'div',
                            { className: r },
                            t &&
                                a().createElement(
                                    'div',
                                    { className: e.intelligenceAmount },
                                    a().createElement(yu, null),
                                ),
                            a().createElement('div', { className: be.header }, a().createElement(Me, null)),
                            t
                                ? a().createElement(
                                      'div',
                                      { className: be.multipleSelector },
                                      a().createElement('div', { className: be.divider }),
                                      a().createElement(le, null),
                                  )
                                : a().createElement(
                                      'div',
                                      { className: be.singleSelector },
                                      a().createElement(ve, null),
                                  ),
                        );
                    },
                    Le = ['children'];
                function Ie() {
                    return (
                        (Ie =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Ie.apply(this, arguments)
                    );
                }
                const Re = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) ((t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]));
                                return a;
                            })(u, Le);
                        return a().createElement(
                            J,
                            Ie(
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
                    },
                    He = 'StorageItem_base_47',
                    Ve = 'StorageItem_price_1a',
                    We = 'StorageItem_icon_f0',
                    Ue = ({ icon: u, value: e }) => {
                        const t = (0, n.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]);
                        return a().createElement(
                            'div',
                            { className: He },
                            a().createElement('div', { className: We, style: t }),
                            a().createElement('span', { className: Ve }, e),
                        );
                    },
                    je = {
                        base: 'Storage_base_cf',
                        delim: 'Storage_delim_b8',
                        corner: 'Storage_corner_fc',
                        fill: 'Storage_fill_87',
                        icon: 'Storage_icon_fc',
                        iconUrl: 'Storage_iconUrl_dc',
                        label: 'Storage_label_5e',
                        intelligenceBlock: 'Storage_intelligenceBlock_e0',
                        intelligenceBlockLabel: 'Storage_intelligenceBlockLabel_0b',
                        nationalBlock: 'Storage_nationalBlock_7b',
                        storageItemGeom: 'Storage_storageItemGeom_0f',
                    },
                    $e = () => {
                        const u = H('model.fragmentsBalance'),
                            e = u.currency,
                            t = u.intelligenceBalance,
                            r = t.fragmentCD,
                            i = u.allianceName.replace(/-/g, '_');
                        const o = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.blueprints.fragment.conversion.gray.$dyn(i)})`,
                                }),
                                [i],
                            ),
                            l = (0, n.useMemo)(
                                () => ({
                                    allianceIcon: a().createElement(
                                        'div',
                                        { className: je.icon },
                                        a().createElement('span', { className: je.iconUrl, style: o }),
                                    ),
                                    allianceName: a().createElement(
                                        'span',
                                        { className: je.text },
                                        R.strings.blueprints.blueprintsBalance.alliance.$dyn(i),
                                    ),
                                }),
                                [i, o],
                            ),
                            s = (0, n.useMemo)(() => ({ tooltipId: 'TOOLTIP_BLUEPRINT', itemCD: r }), [r]),
                            E = G()(je.label, je.intelligenceBlockLabel);
                        return a().createElement(
                            a().Fragment,
                            null,
                            a().createElement('div', { className: je.corner }),
                            a().createElement(
                                'div',
                                { className: je.base },
                                a().createElement('div', { className: je.fill }),
                                a().createElement(
                                    Re,
                                    { args: s },
                                    a().createElement(
                                        'span',
                                        { className: je.intelligenceBlock },
                                        a().createElement(
                                            'span',
                                            { className: E },
                                            R.strings.blueprints.blueprintsBalance.intelligenceBlueprints(),
                                        ),
                                        a().createElement(
                                            'div',
                                            { className: je.storageItemGeom },
                                            a().createElement(Ue, t),
                                        ),
                                    ),
                                ),
                                a().createElement('div', { className: je.delim }),
                                a().createElement(
                                    J,
                                    {
                                        contentId:
                                            R.views.lobby.blueprints.tooltips.BlueprintsAlliancesTooltipView('resId'),
                                    },
                                    a().createElement(
                                        'span',
                                        { className: je.nationalBlock },
                                        a().createElement(fe, {
                                            classMix: je.label,
                                            text: R.strings.blueprints.blueprintsBalance.allianceLabel.conversionView(),
                                            binding: l,
                                        }),
                                        e.items.map(({ value: u }, e) =>
                                            a().createElement(
                                                'div',
                                                { className: je.storageItemGeom, key: e },
                                                a().createElement(Ue, u),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Ge = 'AdditionalItem_base_3a',
                    ze = 'AdditionalItem_price_d2',
                    Ke = 'AdditionalItem_price__notEnough_1a',
                    qe = 'AdditionalItem_icon_80',
                    Ye = 'AdditionalItem_plusIcon_ea',
                    Xe = (0, n.memo)(({ icon: u, value: e, notEnough: t, itemCD: r, tooltipId: i }) => {
                        const o = (0, n.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]),
                            l = (0, n.useMemo)(() => ({ tooltipId: i, itemCD: r }), [i, r]);
                        return a().createElement(
                            'div',
                            { className: Ge },
                            a().createElement('div', { className: Ye }),
                            a().createElement(
                                Re,
                                { args: l, isEnabled: !0 },
                                a().createElement(
                                    'span',
                                    null,
                                    a().createElement('span', { className: G()(ze, t && Ke) }, e),
                                    a().createElement('div', { className: qe, style: o }),
                                ),
                            ),
                        );
                    }),
                    Ze = 'TotalPrice_base_46',
                    Qe = 'TotalPrice_label_17',
                    Je = 'TotalPrice_price_92',
                    ut = 'TotalPrice_icon_ae';
                function et() {
                    return (
                        (et =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        et.apply(this, arguments)
                    );
                }
                const tt = R.strings.blueprints.conversionView.totalPrice,
                    nt = () => {
                        const u = H('model'),
                            e = u.count,
                            t = u.usedAdditionalPrice,
                            r = u.usedMainPrice,
                            i = e > 1 ? tt.multiple() : tt.single(),
                            o = e < 1,
                            l = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.blueprints.fragment.special.intelligence()})`,
                                }),
                                [],
                            ),
                            s = (0, n.useMemo)(() => ({ tooltipId: r.tooltipId, itemCD: r.itemCD }), [r]);
                        return a().createElement(
                            'div',
                            null,
                            o
                                ? a().createElement('div', { className: Ze })
                                : a().createElement(
                                      'div',
                                      { className: Ze },
                                      a().createElement('span', { className: Qe }, i),
                                      a().createElement(
                                          Re,
                                          { args: s, isEnabled: !0 },
                                          a().createElement(
                                              'span',
                                              null,
                                              a().createElement('span', { className: Je }, r.value),
                                              a().createElement('div', { className: ut, style: l }),
                                          ),
                                      ),
                                      t.map(
                                          ({ value: u }, e) =>
                                              u.value > 0 && a().createElement(Xe, et({}, u, { key: e })),
                                      ),
                                  ),
                        );
                    };
                function at() {
                    return (
                        (at =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        at.apply(this, arguments)
                    );
                }
                const rt = () => {
                    const u = H('model');
                    if (u.totalCount > 1) {
                        const e = u.usedAdditionalPrice.some((u) => u.value.notEnough);
                        u.isAcceptDisabled = e || u.count < 1;
                    }
                    return (
                        j(),
                        a().createElement(
                            a().Fragment,
                            null,
                            a().createElement('div', { className: wu }, a().createElement($e, null)),
                            a().createElement(
                                bu,
                                at({}, u, { titleBody: '', footer: a().createElement(nt, null) }),
                                a().createElement('div', { className: fu }, a().createElement(Pe, null)),
                            ),
                        )
                    );
                };
                engine.whenReady.then(() => {
                    d().render(
                        a().createElement(F, null, a().createElement(rt, null)),
                        document.getElementById('root'),
                    );
                });
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
                for (l = 0; l < deferred.length; l++) {
                    for (var [e, t, n] = deferred[l], r = !0, i = 0; i < e.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
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
        (__webpack_require__.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (__webpack_require__.r = (u) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 }));
        }),
        (() => {
            var u = { 903: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        a,
                        [r, i, o] = t,
                        l = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var s = o(__webpack_require__);
                    }
                    for (e && e(t); l < r.length; l++)
                        ((a = r[l]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0));
                    return __webpack_require__.O(s);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [589], () => __webpack_require__(477));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
