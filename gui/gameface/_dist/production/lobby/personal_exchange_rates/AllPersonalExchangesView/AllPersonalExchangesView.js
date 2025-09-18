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
            294: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => Eu });
                var r = {};
                (t.r(r),
                    t.d(r, { mouse: () => D, off: () => A, on: () => E, onResize: () => s, onScaleUpdated: () => c }));
                var n = {};
                (t.r(n),
                    t.d(n, {
                        events: () => r,
                        getMouseGlobalPosition: () => _,
                        getSize: () => C,
                        graphicsQuality: () => m,
                        playSound: () => d,
                        setRTPC: () => B,
                    }));
                var a = {};
                (t.r(a), t.d(a, { getBgUrl: () => y, getTextureUrl: () => x }));
                var o = {};
                function i(u) {
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
                (t.r(o),
                    t.d(o, {
                        addModelObserver: () => V,
                        addPreloadTexture: () => W,
                        arabic2roman: () => nu,
                        children: () => a,
                        displayStatus: () => L,
                        displayStatusIs: () => ou,
                        enableFullScreenModeSupported: () => su,
                        events: () => S,
                        extraSize: () => iu,
                        forceTriggerMouseMove: () => eu,
                        freezeTextureBeforeResize: () => q,
                        getBrowserTexturePath: () => z,
                        getDisplayStatus: () => tu,
                        getExternalPaddingsRem: () => au,
                        getFontNames: () => ru,
                        getScale: () => X,
                        getSize: () => G,
                        getViewGlobalPosition: () => j,
                        initExternalPaddings: () => cu,
                        isEventHandled: () => uu,
                        isFocused: () => Q,
                        pxToRem: () => K,
                        remToPx: () => Y,
                        resize: () => $,
                        sendEvent: () => H,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => J,
                        setInputPaddingsRem: () => I,
                        setSidePaddingsRem: () => U,
                        whenTutorialReady: () => lu,
                    }));
                const s = i('clientResized'),
                    c = i('self.onScaleUpdated'),
                    E = (u, e) => engine.on(u, e),
                    A = (u, e) => engine.off(u, e),
                    F = { down: i('mousedown'), up: i('mouseup'), move: i('mousemove') };
                const D = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && l(!1);
                    }
                    function t() {
                        u.enabled && l(!0);
                    }
                    function r() {
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
                    const n = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let n = !0;
                                    const a = `mouse${e}`,
                                        o = F[e]((u) => t([u, 'outside']));
                                    function i(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, i),
                                        r(),
                                        () => {
                                            n &&
                                                (o(),
                                                window.removeEventListener(a, i),
                                                (u.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            ((u.enabled = !1), r());
                        },
                        enable() {
                            ((u.enabled = !0), r());
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
                function B(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                function C(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function _(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const m = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    g = {
                        toUpperCase: (u) => window.systemLocale.toUpperCase(u),
                        toLowerCase: (u) => window.systemLocale.toLowerCase(u),
                    },
                    f = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    h = Object.keys(f).reduce((u, e) => ((u[e] = () => d(f[e])), u), {}),
                    v = { play: Object.assign({}, h, { sound: d }), setRTPC: B },
                    p = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    b = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function w(u) {
                    let e = '';
                    for (let t = b.length - 1; t >= 0; t--) for (; u >= b[t]; ) ((e += p[t]), (u -= b[t]));
                    return e;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function x(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function y(u, e, t) {
                    return `url(${x(u, e, t)})`;
                }
                const L = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    S = {
                        onTextureFrozen: i('self.onTextureFrozen'),
                        onTextureReady: i('self.onTextureReady'),
                        onDomBuilt: i('self.onDomBuilt'),
                        onLoaded: i('self.onLoaded'),
                        onDisplayChanged: i('self.onShowingStatusChanged'),
                        onFocusUpdated: i('self.onFocusChanged'),
                        children: {
                            onAdded: i('children.onAdded'),
                            onLoaded: i('children.onLoaded'),
                            onRemoved: i('children.onRemoved'),
                            onAttached: i('children.onAttached'),
                            onTextureReady: i('children.onTextureReady'),
                            onRequestPosition: i('children.requestPosition'),
                        },
                    },
                    M = ['args'];
                const T = 2,
                    O = 16,
                    P = 32,
                    k = 64,
                    N = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(e, M);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([u, e]) => {
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
                        var r;
                    },
                    H = {
                        close(u) {
                            N('popover' === u ? T : P);
                        },
                        minimize() {
                            N(k);
                        },
                        move(u) {
                            N(O, { isMouseEvent: !0, on: u });
                        },
                    };
                function W(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function I(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function z(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function V(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function U(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function G(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function $(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function j(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: Y(e.x), y: Y(e.y) };
                }
                function q() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function X() {
                    return viewEnv.getScale();
                }
                function K(u) {
                    return viewEnv.pxToRem(u);
                }
                function Y(u) {
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
                const ru = (() => {
                        let u = [];
                        return () => (0 === u.length && (u = Object.keys(viewEnv.getFontsConfig())), u);
                    })(),
                    nu = w;
                function au() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const ou = Object.keys(L).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === L[e]), u), {}),
                    iu = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    lu = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : S.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
                function su() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function cu(u) {
                    function e() {
                        const e = viewEnv.getExternalPaddingsRem(),
                            t = e.top,
                            r = e.right,
                            n = e.bottom,
                            a = e.left;
                        (u.style.setProperty('--external-padding-top', `${t}rem`),
                            u.style.setProperty('--external-padding-right', `${r}rem`),
                            u.style.setProperty('--external-padding-bottom', `${n}rem`),
                            u.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (e(), engine.on('self.onPaddingsUpdated', () => e()));
                }
                const Eu = { view: o, client: n, sound: v, intl: g };
            },
            521: (u, e, t) => {
                'use strict';
                let r, n;
                (t.d(e, { n: () => r }),
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
                    })(r || (r = {})),
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
                    })(n || (n = {})));
            },
            358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => a });
                var r = t(294);
                class n {
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
                        return (window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(u, e, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(u, t, n);
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
                            const r = this._callbacks[t];
                            void 0 !== r && r(u, e);
                        });
                    }
                }
                n.__instance = void 0;
                const a = n;
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
                t.d(e, { B3: () => l, Z5: () => o.Z5, ry: () => C });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let r = u.target;
                                    do {
                                        if (r === e) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(u, e) {
                        (this.addMouseListener(), this.entries.push({ container: u, callback: e }));
                    }
                    unregister(u, e) {
                        const t = u,
                            r = e;
                        ((this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== r)),
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
                r.__instance = void 0;
                const n = r;
                var a = t(358);
                var o = t(613);
                let i;
                !(function (u) {
                    ((u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE'));
                })(i || (i = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    s = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(521),
                    F = t(294);
                const D = ['args'];
                function d(u, e, t, r, n, a, o) {
                    try {
                        var i = u[a](o),
                            l = i.value;
                    } catch (u) {
                        return void t(u);
                    }
                    i.done ? e(l) : Promise.resolve(l).then(r, n);
                }
                const B = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
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
                                    return new Promise(function (r, n) {
                                        var a = u.apply(e, t);
                                        function o(u) {
                                            d(a, r, n, o, i, 'next', u);
                                        }
                                        function i(u) {
                                            d(a, r, n, o, i, 'throw', u);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    _ = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(e, D);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([u, e]) => {
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
                        var r;
                    },
                    m = () => _(i.CLOSE),
                    g = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var f = t(572);
                const h = n.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: f.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: s,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => _(i.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: m,
                        sendClosePopOverEvent: () => _(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            _(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, n = R.invalid('resId'), a) => {
                            const o = F.O.view.getViewGlobalPosition(),
                                l = t.getBoundingClientRect(),
                                s = l.x,
                                c = l.y,
                                E = l.width,
                                A = l.height,
                                D = {
                                    x: F.O.view.pxToRem(s) + o.x,
                                    y: F.O.view.pxToRem(c) + o.y,
                                    width: F.O.view.pxToRem(E),
                                    height: F.O.view.pxToRem(A),
                                };
                            _(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: B(D),
                                on: !0,
                                args: a,
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
                            g(u, m);
                        },
                        handleViewEvent: _,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    const n = Object.prototype.toString.call(e[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[r];
                                        t[r] = [];
                                        for (let e = 0; e < n.length; e++) t[r].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = u(e[r]))
                                            : (t[r] = e[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: h,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = v;
            },
            613: (u, e, t) => {
                'use strict';
                t.d(e, { Z5: () => r, cy: () => n });
                const r = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    n = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
            },
            991: (u, e, t) => {
                'use strict';
                var r = {};
                (t.r(r),
                    t.d(r, {
                        Area: () => Hu,
                        Bar: () => Pu,
                        DefaultScroll: () => Nu,
                        Direction: () => mu,
                        defaultSettings: () => gu,
                        useHorizontalScrollApi: () => hu,
                    }));
                var n = {};
                (t.r(n), t.d(n, { Area: () => te, Bar: () => Ju, Default: () => ee, useVerticalScrollApi: () => Wu }));
                var a = t(363),
                    o = t.n(a);
                const i = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var l = t(294);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function E(u = l.O.client.getSize('rem')) {
                    const e = u.width,
                        t = u.height;
                    return Object.assign(
                        { width: e, height: t },
                        (function (u, e, t) {
                            const r = (function (u, e) {
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
                                n = (function (u, e) {
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
                                a = Math.min(r, n);
                            return {
                                extraLarge: a === t.extraLarge.weight,
                                large: a === t.large.weight,
                                medium: a === t.medium.weight,
                                small: a === t.small.weight,
                                extraSmall: a === t.extraSmall.weight,
                                extraLargeWidth: r === t.extraLarge.weight,
                                largeWidth: r === t.large.weight,
                                mediumWidth: r === t.medium.weight,
                                smallWidth: r === t.small.weight,
                                extraSmallWidth: r === t.extraSmall.weight,
                                extraLargeHeight: n === t.extraLarge.weight,
                                largeHeight: n === t.large.weight,
                                mediumHeight: n === t.medium.weight,
                                smallHeight: n === t.small.weight,
                                extraSmallHeight: n === t.extraSmall.weight,
                            };
                        })(e, t, s),
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
                })(c || (c = {}));
                const A = E(),
                    F = (0, a.createContext)(A),
                    D = ['children'];
                (0, a.memo)((u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(u);
                            for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                            return n;
                        })(u, D);
                    const r = (0, a.useContext)(F),
                        n = r.extraLarge,
                        o = r.large,
                        l = r.medium,
                        s = r.small,
                        c = r.extraSmall,
                        E = r.extraLargeWidth,
                        A = r.largeWidth,
                        d = r.mediumWidth,
                        B = r.smallWidth,
                        C = r.extraSmallWidth,
                        _ = r.extraLargeHeight,
                        m = r.largeHeight,
                        g = r.mediumHeight,
                        f = r.smallHeight,
                        h = r.extraSmallHeight,
                        v = { extraLarge: _, large: m, medium: g, small: f, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && n) return e;
                        if (t.large && o) return e;
                        if (t.medium && l) return e;
                        if (t.small && s) return e;
                        if (t.extraSmall && c) return e;
                    } else {
                        if (t.extraLargeWidth && E) return i(e, t, v);
                        if (t.largeWidth && A) return i(e, t, v);
                        if (t.mediumWidth && d) return i(e, t, v);
                        if (t.smallWidth && B) return i(e, t, v);
                        if (t.extraSmallWidth && C) return i(e, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && _) return e;
                            if (t.largeHeight && m) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && f) return e;
                            if (t.extraSmallHeight && h) return e;
                        }
                    }
                    return null;
                });
                const d = ({ children: u }) => {
                    const e = (0, a.useState)(E),
                        t = e[0],
                        r = e[1],
                        n = (0, a.useState)(!1),
                        i = n[0],
                        s = n[1];
                    return (
                        (0, a.useLayoutEffect)(() => {
                            function u() {
                                r((u) => {
                                    const e = l.O.client.getSize('rem');
                                    return u.width === e.width && u.height === e.height ? u : E(e);
                                });
                            }
                            return (
                                u(),
                                s(!0),
                                l.O.client.events.on('clientResized', u),
                                l.O.client.events.on('self.onScaleUpdated', u),
                                () => {
                                    (l.O.client.events.off('clientResized', u),
                                        l.O.client.events.off('self.onScaleUpdated', u));
                                }
                            );
                        }, []),
                        o().createElement(F.Provider, { value: t }, i && u)
                    );
                };
                var B = t(483),
                    C = t.n(B),
                    _ = t(926),
                    m = t.n(_);
                let g, f, h;
                (!(function (u) {
                    ((u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = s.small.width)] = 'Small'),
                        (u[(u.Medium = s.medium.width)] = 'Medium'),
                        (u[(u.Large = s.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                })(g || (g = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.width)] = 'Small'),
                            (u[(u.Medium = s.medium.width)] = 'Medium'),
                            (u[(u.Large = s.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                    })(f || (f = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.height)] = 'Small'),
                            (u[(u.Medium = s.medium.height)] = 'Medium'),
                            (u[(u.Large = s.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge'));
                    })(h || (h = {})));
                const v = () => {
                        const u = (0, a.useContext)(F),
                            e = u.width,
                            t = u.height,
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return g.ExtraLarge;
                                    case u.large:
                                        return g.Large;
                                    case u.medium:
                                        return g.Medium;
                                    case u.small:
                                        return g.Small;
                                    case u.extraSmall:
                                        return g.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), g.ExtraSmall);
                                }
                            })(u),
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return f.ExtraLarge;
                                    case u.largeWidth:
                                        return f.Large;
                                    case u.mediumWidth:
                                        return f.Medium;
                                    case u.smallWidth:
                                        return f.Small;
                                    case u.extraSmallWidth:
                                        return f.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), f.ExtraSmall);
                                }
                            })(u),
                            o = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return h.ExtraLarge;
                                    case u.largeHeight:
                                        return h.Large;
                                    case u.mediumHeight:
                                        return h.Medium;
                                    case u.smallHeight:
                                        return h.Small;
                                    case u.extraSmallHeight:
                                        return h.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), h.ExtraSmall);
                                }
                            })(u);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: o, remScreenWidth: e, remScreenHeight: t };
                    },
                    p = ['children', 'className'];
                function b() {
                    return (
                        (b =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        b.apply(this, arguments)
                    );
                }
                const w = {
                        [f.ExtraSmall]: '',
                        [f.Small]: m().SMALL_WIDTH,
                        [f.Medium]: `${m().SMALL_WIDTH} ${m().MEDIUM_WIDTH}`,
                        [f.Large]: `${m().SMALL_WIDTH} ${m().MEDIUM_WIDTH} ${m().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${m().SMALL_WIDTH} ${m().MEDIUM_WIDTH} ${m().LARGE_WIDTH} ${m().EXTRA_LARGE_WIDTH}`,
                    },
                    x = {
                        [h.ExtraSmall]: '',
                        [h.Small]: m().SMALL_HEIGHT,
                        [h.Medium]: `${m().SMALL_HEIGHT} ${m().MEDIUM_HEIGHT}`,
                        [h.Large]: `${m().SMALL_HEIGHT} ${m().MEDIUM_HEIGHT} ${m().LARGE_HEIGHT}`,
                        [h.ExtraLarge]: `${m().SMALL_HEIGHT} ${m().MEDIUM_HEIGHT} ${m().LARGE_HEIGHT} ${m().EXTRA_LARGE_HEIGHT}`,
                    },
                    y = {
                        [g.ExtraSmall]: '',
                        [g.Small]: m().SMALL,
                        [g.Medium]: `${m().SMALL} ${m().MEDIUM}`,
                        [g.Large]: `${m().SMALL} ${m().MEDIUM} ${m().LARGE}`,
                        [g.ExtraLarge]: `${m().SMALL} ${m().MEDIUM} ${m().LARGE} ${m().EXTRA_LARGE}`,
                    },
                    L = (u) => {
                        let e = u.children,
                            t = u.className,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, p);
                        const n = v(),
                            a = n.mediaWidth,
                            i = n.mediaHeight,
                            l = n.mediaSize;
                        return o().createElement('div', b({ className: C()(t, w[a], x[i], y[l]) }, r), e);
                    },
                    S = ['children'];
                const M = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(u);
                            for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                            return n;
                        })(u, S);
                    return o().createElement(d, null, o().createElement(L, t, e));
                };
                var T = t(533),
                    O = t.n(T),
                    P = t(916);
                const k = ({ value: u, format: e = 'integral' }) => {
                        const t = (function (u) {
                                return 'gold' === u ? P.B3.GOLD : P.B3.INTEGRAL;
                            })(e),
                            r = P.Z5.getNumberFormat(u, t);
                        return void 0 !== u && void 0 !== r ? r : null;
                    },
                    N = {
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
                let H, W, I;
                (!(function (u) {
                    ((u.small = 'small'), (u.big = 'big'), (u.large = 'large'), (u.extraLarge = 'extraLarge'));
                })(H || (H = {})),
                    (function (u) {
                        ((u.credits = 'credits'),
                            (u.gold = 'gold'),
                            (u.crystal = 'crystal'),
                            (u.xp = 'xp'),
                            (u.freeXP = 'freeXP'),
                            (u.eliteXP = 'eliteXP'),
                            (u.equipCoin = 'equipCoin'));
                    })(W || (W = {})),
                    (function (u) {
                        ((u.Red = 'RedActionBG'), (u.Blue = 'BlueActionBG'));
                    })(I || (I = {})));
                const z = (0, a.memo)(
                    ({
                        isDiscount: u,
                        isInteractiveDiscount: e,
                        size: t,
                        type: r,
                        value: n,
                        discountValue: a,
                        showPlus: i,
                        isEnough: l = !0,
                        stockBackgroundName: s = I.Red,
                        className: c,
                        classNames: E,
                    }) =>
                        o().createElement(
                            'span',
                            { className: C()(N.base, N[`base__${t}`], c) },
                            o().createElement(
                                'span',
                                {
                                    className: C()(
                                        N.value,
                                        N[`value__${r}`],
                                        !l && N.value__notEnough,
                                        null == E ? void 0 : E.value,
                                    ),
                                },
                                i && n > 0 && '+',
                                o().createElement(k, { value: n, format: r === W.gold ? 'gold' : 'integral' }),
                            ),
                            o().createElement('span', {
                                className: C()(N.icon, N[`icon__${r}-${t}`], null == E ? void 0 : E.icon),
                            }),
                            u &&
                                o().createElement(
                                    'span',
                                    {
                                        className: C()(
                                            N.stock,
                                            a && N.stock__indent,
                                            e && N.stock__interactive,
                                            null == E ? void 0 : E.stock,
                                        ),
                                    },
                                    o().createElement('span', {
                                        className: N.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${s})` },
                                    }),
                                    Boolean(a) && a,
                                ),
                        ),
                );
                var V = t(281);
                let U;
                function G(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(U || (U = {}));
                const $ = (u) => u.replace(/&nbsp;/g, ' '),
                    j = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    q = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    X = (u, e, t = U.left) => u.split(e).reduce(t === U.left ? j : q, []),
                    K = (() => {
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
                    Y = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Z = (u, e = U.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Y.includes(t)) return K(u);
                        if ('ja' === t) {
                            return (0, V.D4)()
                                .parse(u)
                                .map((u) => $(u));
                        }
                        return ((u, e = U.left) => {
                            let t = [];
                            const r =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = $(u);
                            return (X(n, /( )/, e).forEach((u) => (t = t.concat(X(u, r, U.left)))), t);
                        })(u, e);
                    },
                    Q = 'FormatText_base_d0',
                    J = ({ binding: u, text: e = '', classMix: t, alignment: r = U.left, formatWithBrackets: n }) => {
                        if (null === e) return (console.error("FormatText was supplied with 'null'"), null);
                        const i = n && u ? G(e, u) : e;
                        return o().createElement(
                            a.Fragment,
                            null,
                            i.split('\n').map((e, n) =>
                                o().createElement(
                                    'div',
                                    { className: C()(Q, t), key: `${e}-${n}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : Z(u, e))))(
                                        e,
                                        r,
                                        u,
                                    ).map((u, e) => o().createElement(a.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    },
                    uu = {
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
                    eu = [
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
                function tu() {
                    return (
                        (tu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        tu.apply(this, arguments)
                    );
                }
                const ru = (u) => {
                    let e = u.caption,
                        t = u.onClick,
                        r = u.goto,
                        n = u.classNames,
                        i = u.onMouseEnter,
                        s = u.onMouseLeave,
                        c = u.onMouseDown,
                        E = u.onMouseUp,
                        A = u.side,
                        F = void 0 === A ? 'left' : A,
                        D = u.type,
                        d = void 0 === D ? 'back' : D,
                        B = u.soundHover,
                        _ = void 0 === B ? 'highlight' : B,
                        m = u.soundClick,
                        g = void 0 === m ? 'play' : m,
                        f = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(u);
                            for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                            return n;
                        })(u, eu);
                    const h = (0, a.useCallback)(
                            (u) => {
                                (null == i || i(u), l.O.sound.play.sound(_));
                            },
                            [i, _],
                        ),
                        v = (0, a.useCallback)(
                            (u) => {
                                null == s || s(u);
                            },
                            [s],
                        ),
                        p = (0, a.useCallback)(
                            (u) => {
                                (null == c || c(u), l.O.sound.play.sound(g));
                            },
                            [c, g],
                        ),
                        b = (0, a.useCallback)(
                            (u) => {
                                null == E || E(u);
                            },
                            [E],
                        );
                    return o().createElement(
                        'div',
                        tu(
                            {
                                className: C()(
                                    uu.base,
                                    uu[`base__${d}`],
                                    uu[`base__${F}`],
                                    null == n ? void 0 : n.base,
                                ),
                                onMouseEnter: h,
                                onMouseLeave: v,
                                onMouseDown: p,
                                onMouseUp: b,
                                onClick: t,
                            },
                            f,
                        ),
                        'info' !== d && o().createElement('div', { className: uu.shine }),
                        o().createElement(
                            'div',
                            {
                                className: C()(
                                    uu.icon,
                                    uu[`icon__${d}`],
                                    uu[`icon__${F}`],
                                    null == n ? void 0 : n.icon,
                                ),
                            },
                            o().createElement('div', { className: C()(uu.glow, null == n ? void 0 : n.glow) }),
                        ),
                        o().createElement(
                            'div',
                            { className: C()(uu.caption, uu[`caption__${d}`], null == n ? void 0 : n.caption) },
                            e,
                        ),
                        r && o().createElement('div', { className: C()(uu.goto, null == n ? void 0 : n.goto) }, r),
                    );
                };
                var nu = t(521);
                const au = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ou(u = nu.n.NONE, e = au, t = !1, r = !1) {
                    (0, a.useEffect)(() => {
                        if (u !== nu.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (!r && l.O.view.isEventHandled()) return;
                                (l.O.view.setEventHandled(), e(n), t && n.stopPropagation());
                            }
                        }
                    }, [e, u, t, r]);
                }
                var iu = t(515);
                const lu = (u) => {
                        let e,
                            t = null;
                        return (
                            (t = requestAnimationFrame(() => {
                                t = requestAnimationFrame(() => {
                                    ((t = null), (e = u()));
                                });
                            })),
                            () => {
                                ('function' == typeof e && e(), null !== t && cancelAnimationFrame(t));
                            }
                        );
                    },
                    su = (u, e, t) => (t < u ? u : t > e ? e : t),
                    cu = [];
                function Eu(u) {
                    const e = (0, a.useRef)(u);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            e.current = u;
                        }),
                        (0, a.useCallback)((...u) => (0, e.current)(...u), cu)
                    );
                }
                function Au(u, e, t = []) {
                    const r = (0, a.useRef)(0),
                        n = (0, a.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, a.useEffect)(() => n, [n]);
                    const o = (null != t ? t : []).concat([e]);
                    return [
                        (0, a.useCallback)((t) => {
                            ((r.current = window.setInterval(() => u(t, !0), e)), u(t, !1));
                        }, o),
                        n,
                    ];
                }
                function Fu(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                function Du(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return du(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return du(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var r = 0;
                        return function () {
                            return r >= u.length ? { done: !0 } : { done: !1, value: u[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function du(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const Bu = () => {
                    const u = (0, a.useMemo)(() => ({}), []),
                        e = (e) => (u[e] || (u[e] = new Map()), u[e]),
                        t = (u, t) => {
                            e(u).set(t, t);
                        },
                        r = (u, t) => {
                            e(u).delete(t);
                        },
                        n = (u, ...t) => {
                            for (var r, n = Du(e(u).values()); !(r = n()).done; ) {
                                (0, r.value)(...t);
                            }
                        };
                    return (0, a.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                };
                function Cu(u, e, t) {
                    const r = (0, a.useMemo)(
                        () =>
                            (function (u, e, t, r) {
                                let n,
                                    a = !1,
                                    o = 0;
                                function i() {
                                    n && clearTimeout(n);
                                }
                                function l(...l) {
                                    const s = this,
                                        c = Date.now() - o;
                                    function E() {
                                        ((o = Date.now()), t.apply(s, l));
                                    }
                                    a ||
                                        (r && !n && E(),
                                        i(),
                                        void 0 === r && c > u
                                            ? E()
                                            : !0 !== e &&
                                              (n = setTimeout(
                                                  r
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : E,
                                                  void 0 === r ? u - c : u,
                                              )));
                                }
                                return (
                                    'boolean' != typeof e && ((r = t), (t = e), (e = void 0)),
                                    (l.cancel = function () {
                                        (i(), (a = !0));
                                    }),
                                    l
                                );
                            })(t, u),
                        e,
                    );
                    return ((0, a.useEffect)(() => r.cancel, [r]), r);
                }
                var _u = t(30);
                let mu;
                !(function (u) {
                    ((u[(u.Next = -1)] = 'Next'), (u[(u.Prev = 1)] = 'Prev'));
                })(mu || (mu = {}));
                const gu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    fu = ({
                        getContainerSize: u,
                        getBounds: e,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        forceTriggerMouseMove: o,
                    }) => {
                        const i = (u, t) => {
                            const r = e(u),
                                n = r[0],
                                a = r[1];
                            return a <= n ? 0 : su(n, a, t);
                        };
                        return (l = {}) => {
                            const s = l.settings,
                                c = void 0 === s ? gu : s,
                                E = (0, a.useRef)(null),
                                A = (0, a.useRef)(null),
                                F = (0, a.useRef)(!1),
                                D = Bu(),
                                d = Cu(
                                    () => {
                                        o && o();
                                    },
                                    [],
                                    150,
                                ),
                                B = (0, _u.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (u) => {
                                        const e = E.current;
                                        e && (t(e, u), D.trigger('change', u), o && F.current && d());
                                    },
                                    onRest: (u) => D.trigger('rest', u),
                                    onStart: (u) => D.trigger('start', u),
                                    onPause: (u) => D.trigger('pause', u),
                                })),
                                C = B[0],
                                _ = B[1],
                                m = (0, a.useCallback)(
                                    (u, e, t) => {
                                        var r;
                                        const n = C.scrollPosition.get(),
                                            a = (null != (r = C.scrollPosition.goal) ? r : 0) - n;
                                        return i(u, e * t + a + n);
                                    },
                                    [C.scrollPosition],
                                ),
                                g = (0, a.useCallback)(
                                    (u, { immediate: e = !1, reset: t = !0 } = {}) => {
                                        const r = E.current;
                                        r &&
                                            _.start({
                                                scrollPosition: i(r, u),
                                                immediate: e,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(r, C.scrollPosition.get()) },
                                            });
                                    },
                                    [_, c.animationConfig, C.scrollPosition],
                                ),
                                f = (0, a.useCallback)(
                                    (u) => {
                                        const e = E.current,
                                            t = A.current;
                                        if (!e || !t) return;
                                        const r = ((u, e) => {
                                                switch (e.type) {
                                                    case 'proportional':
                                                        return n(u) / e.factor;
                                                    case 'fixed':
                                                        return e.value;
                                                }
                                            })(t, c.step),
                                            a = m(e, u, r);
                                        g(a);
                                    },
                                    [g, m, c.step],
                                ),
                                h = (0, a.useCallback)(
                                    (u) => {
                                        (0 !== u.deltaY && f(r(u)),
                                            E.current && D.trigger('mouseWheel', u, C.scrollPosition, e(E.current)));
                                    },
                                    [C.scrollPosition, f, D],
                                ),
                                v = ((u, e = []) => {
                                    const t = (0, a.useRef)(),
                                        r = (0, a.useCallback)((...e) => {
                                            (t.current && t.current(), (t.current = u(...e)));
                                        }, e);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        lu(() => {
                                            const u = E.current;
                                            u &&
                                                (g(i(u, C.scrollPosition.goal), { immediate: !0 }),
                                                D.trigger('resizeHandled'));
                                        }),
                                    [g, C.scrollPosition.goal],
                                ),
                                p = Eu(() => {
                                    const u = E.current;
                                    if (!u) return;
                                    const e = i(u, C.scrollPosition.goal);
                                    (e !== C.scrollPosition.goal && g(e, { immediate: !0 }),
                                        D.trigger('recalculateContent'));
                                });
                            ((0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', v),
                                    () => {
                                        window.removeEventListener('resize', v);
                                    }
                                ),
                                [v],
                            ),
                                (0, a.useEffect)(() => {
                                    const u = E.current;
                                    if (!u || !o) return;
                                    const e = () => {
                                            F.current = !0;
                                        },
                                        t = () => {
                                            F.current = !1;
                                        };
                                    return (
                                        u.addEventListener('mouseenter', e),
                                        u.addEventListener('mouseleave', t),
                                        () => {
                                            (u.removeEventListener('mouseenter', e),
                                                u.removeEventListener('mouseleave', t));
                                        }
                                    );
                                }, [E]));
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (A.current ? n(A.current) : void 0),
                                    getContainerSize: () => (E.current ? u(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? e(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: h,
                                    applyScroll: g,
                                    applyStepTo: f,
                                    contentRef: E,
                                    wrapperRef: A,
                                    scrollPosition: _,
                                    animationScroll: C,
                                    recalculateContent: p,
                                    events: { on: D.on, off: D.off },
                                }),
                                [C.scrollPosition, g, f, D.off, D.on, p, h, _, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    hu = fu({
                        getBounds: (u) => {
                            var e, t;
                            return [
                                0,
                                u.offsetWidth -
                                    (null != (e = null == (t = u.parentElement) ? void 0 : t.offsetWidth) ? e : 0),
                            ];
                        },
                        getContainerSize: (u) => u.offsetWidth,
                        getWrapperSize: (u) => u.offsetWidth,
                        setScrollPosition: (u, e) => {
                            u.style.transform = `translateX(-${e.value.scrollPosition}px)`;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? mu.Next : mu.Prev),
                        forceTriggerMouseMove: l.O.view.forceTriggerMouseMove,
                    }),
                    vu = 'HorizontalBar_base_49',
                    pu = 'HorizontalBar_base__active_5e',
                    bu = 'HorizontalBar_leftButton_5f',
                    wu = 'HorizontalBar_rightButton_03',
                    xu = 'HorizontalBar_track_0d',
                    yu = 'HorizontalBar_thumb_fd',
                    Lu = 'HorizontalBar_rail_32',
                    Su = 'disable',
                    Ru = { pending: !1, offset: 0 },
                    Mu = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    Tu = () => {},
                    Ou = (u, e) => Math.max(20, u.offsetWidth * e),
                    Pu = (0, a.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = Mu, onDrag: r = Tu }) => {
                        const n = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            A = u.stepTimeout || 100,
                            F = (0, a.useState)(Ru),
                            D = F[0],
                            d = F[1],
                            B = (0, a.useCallback)(
                                (u) => {
                                    (d(u),
                                        E.current &&
                                            r({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [r],
                            ),
                            _ = () => {
                                const e = c.current,
                                    t = E.current,
                                    r = u.getWrapperSize(),
                                    n = u.getContainerSize();
                                if (!(r && e && t && n)) return;
                                const a = u.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    l = su(0, 1, a / (n - r)),
                                    A = (e.offsetWidth - Ou(e, o)) * l;
                                ((t.style.transform = `translateX(${0 | A}px)`),
                                    ((u) => {
                                        if (i.current && s.current && c.current && E.current) {
                                            if (0 === u)
                                                return (
                                                    i.current.classList.add(Su),
                                                    void s.current.classList.remove(Su)
                                                );
                                            if (
                                                ((e = c.current),
                                                (t = E.current),
                                                u - (e.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(Su),
                                                    void s.current.classList.add(Su)
                                                );
                                            var e, t;
                                            (i.current.classList.remove(Su), s.current.classList.remove(Su));
                                        }
                                    })(A));
                            },
                            m = Eu(() => {
                                ((() => {
                                    const e = E.current,
                                        t = c.current,
                                        r = u.getWrapperSize(),
                                        a = u.getContainerSize();
                                    if (!(a && e && r && t)) return;
                                    const o = Math.min(1, r / a);
                                    ((e.style.width = `${Ou(t, o)}px`),
                                        (e.style.display = 'flex'),
                                        n.current &&
                                            (1 !== o ? n.current.classList.add(pu) : n.current.classList.remove(pu)));
                                })(),
                                    _());
                            });
                        ((0, a.useEffect)(() => lu(m)),
                            (0, a.useEffect)(
                                () =>
                                    lu(() => {
                                        const e = () => {
                                            _();
                                        };
                                        let t = Tu;
                                        const r = () => {
                                            (t(), (t = lu(m)));
                                        };
                                        return (
                                            u.events.on('recalculateContent', m),
                                            u.events.on('rest', e),
                                            u.events.on('change', e),
                                            u.events.on('resizeHandled', r),
                                            () => {
                                                (t(),
                                                    u.events.off('recalculateContent', m),
                                                    u.events.off('rest', e),
                                                    u.events.off('change', e),
                                                    u.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [u],
                            ),
                            (0, a.useEffect)(() => {
                                if (!D.pending) return;
                                const e = l.O.client.events.mouse.move(([e, t]) => {
                                        var n;
                                        const a = u.contentRef.current,
                                            o = u.wrapperRef.current;
                                        if (!a || !o) return;
                                        const i = c.current,
                                            l = E.current;
                                        if (!i || !l) return;
                                        if ('inside' === t && e.clientX < 0) return;
                                        const s = e.clientX - D.offset - i.getBoundingClientRect().x,
                                            A = (s / i.offsetWidth) * (null != (n = u.getContainerSize()) ? n : 0);
                                        (u.scrollPosition.start({
                                            scrollPosition: u.clampPosition(a, A),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: u.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: l, thumbOffset: s, contentOffset: A }));
                                    }),
                                    t = l.O.client.events.mouse.up(() => {
                                        (e(), B(Ru));
                                    });
                                return () => {
                                    (e(), t());
                                };
                            }, [u, D.offset, D.pending, r, B]));
                        const g = Au((e) => u.applyStepTo(e), A, [u]),
                            f = g[0],
                            h = g[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const v = (u) => {
                            u.target.classList.contains(Su) || Fu('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: C()(vu, e.base), ref: n, onWheel: u.handleMouseWheel },
                            o().createElement('div', {
                                className: C()(bu, e.leftButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(Su) || 0 !== u.button || (Fu('play'), f(mu.Next));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: v,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: C()(xu, e.track),
                                    onMouseDown: (e) => {
                                        const r = E.current;
                                        if (r && 0 === e.button)
                                            if ((Fu('play'), e.target === r))
                                                B({ pending: !0, offset: e.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((e) => {
                                                    const r = E.current,
                                                        n = u.contentRef.current;
                                                    if (!r || !n) return;
                                                    const a = t(u);
                                                    u.applyScroll(u.animationScroll.scrollPosition.get() + a * e);
                                                })(e.screenX > r.getBoundingClientRect().x ? mu.Prev : mu.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                o().createElement('div', { ref: E, className: C()(yu, e.thumb) }),
                                o().createElement('div', { className: C()(Lu, e.rail) }),
                            ),
                            o().createElement('div', {
                                className: C()(wu, e.rightButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(Su) || 0 !== u.button || (Fu('play'), f(mu.Prev));
                                },
                                onMouseUp: h,
                                ref: s,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    ku = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Nu = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: i,
                        scrollClassName: l,
                        getStepByRailClick: s,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const u = r || {};
                                return Object.assign({}, u, { base: C()(ku.base, u.base) });
                            }, [r]),
                            A = (0, a.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return o().createElement(
                            'div',
                            { className: C()(ku.defaultScroll, t), onWheel: e.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: C()(ku.defaultScrollArea, n) },
                                o().createElement(Hu, { className: l, api: A, classNames: i }, u),
                            ),
                            o().createElement(Pu, { getStepByRailClick: s, api: e, onDrag: c, classNames: E }),
                        );
                    },
                    Hu = ({ api: u, className: e, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => lu(u.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: C()(ku.base, e) },
                            o().createElement(
                                'div',
                                {
                                    className: C()(ku.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: u.handleMouseWheel,
                                    ref: u.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: C()(ku.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                ((Hu.Bar = Pu), (Hu.Default = Nu));
                const Wu = fu({
                        getBounds: (u) => [0, u.scrollHeight - u.offsetHeight],
                        getContainerSize: (u) => u.scrollHeight,
                        getWrapperSize: (u) => u.offsetHeight,
                        setScrollPosition: (u, e) => {
                            u.scrollTop = e.value.scrollPosition;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? mu.Next : mu.Prev),
                    }),
                    Iu = 'VerticalBar_base_f3',
                    zu = 'VerticalBar_base__active_72',
                    Vu = 'VerticalBar_topButton_d7',
                    Uu = 'VerticalBar_bottomButton_06',
                    Gu = 'VerticalBar_track_df',
                    $u = 'VerticalBar_thumb_32',
                    ju = 'VerticalBar_rail_43',
                    qu = 'disable',
                    Xu = () => {},
                    Ku = { pending: !1, offset: 0 },
                    Yu = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    Zu = (u, e) => {
                        u.contentRef.current && e(u.contentRef.current);
                    },
                    Qu = (u, e) => Math.max(20, u.offsetHeight * e),
                    Ju = (0, a.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = Yu, onDrag: r = Xu }) => {
                        const n = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            A = u.stepTimeout || 100,
                            F = (0, a.useState)(Ku),
                            D = F[0],
                            d = F[1],
                            B = (0, a.useCallback)(
                                (u) => {
                                    (d(u),
                                        E.current &&
                                            r({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: E.current }));
                                },
                                [r],
                            ),
                            _ = Eu(() => {
                                const e = E.current,
                                    t = c.current,
                                    r = u.getWrapperSize(),
                                    a = u.getContainerSize();
                                if (!(r && a && e && t)) return;
                                const o = Math.min(1, r / a);
                                return (
                                    (e.style.height = `${Qu(t, o)}px`),
                                    (e.style.display = 'flex'),
                                    n.current &&
                                        (1 !== o ? n.current.classList.add(zu) : n.current.classList.remove(zu)),
                                    o
                                );
                            }),
                            m = Eu(() => {
                                const e = c.current,
                                    t = E.current,
                                    r = u.getWrapperSize(),
                                    n = u.getContainerSize();
                                if (!(r && e && t && n)) return;
                                const a = u.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    l = su(0, 1, a / (n - r)),
                                    A = (e.offsetHeight - Qu(e, o)) * l;
                                ((t.style.transform = `translateY(${0 | A}px)`),
                                    ((u) => {
                                        if (i.current && s.current && c.current && E.current) {
                                            if (0 === Math.round(u))
                                                return (
                                                    i.current.classList.add(qu),
                                                    void s.current.classList.remove(qu)
                                                );
                                            if (
                                                ((e = c.current),
                                                (t = E.current),
                                                u - (e.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(qu),
                                                    void s.current.classList.add(qu)
                                                );
                                            var e, t;
                                            (i.current.classList.remove(qu), s.current.classList.remove(qu));
                                        }
                                    })(A));
                            }),
                            g = Eu(() => {
                                Zu(u, () => {
                                    (_(), m());
                                });
                            });
                        ((0, a.useEffect)(() => lu(g)),
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    Zu(u, () => {
                                        m();
                                    });
                                };
                                let t = Xu;
                                const r = () => {
                                    (t(), (t = lu(g)));
                                };
                                return (
                                    u.events.on('recalculateContent', g),
                                    u.events.on('rest', e),
                                    u.events.on('change', e),
                                    u.events.on('resizeHandled', r),
                                    () => {
                                        (t(),
                                            u.events.off('recalculateContent', g),
                                            u.events.off('rest', e),
                                            u.events.off('change', e),
                                            u.events.off('resizeHandled', r));
                                    }
                                );
                            }, [u]),
                            (0, a.useEffect)(() => {
                                if (!D.pending) return;
                                const e = l.O.client.events.mouse.up(() => {
                                        B(Ku);
                                    }),
                                    t = l.O.client.events.mouse.move(([e]) => {
                                        Zu(u, (t) => {
                                            const n = c.current,
                                                a = E.current,
                                                o = u.getContainerSize();
                                            if (!n || !a || !o) return;
                                            const i = e.screenY - D.offset - n.getBoundingClientRect().y,
                                                l = (i / n.offsetHeight) * o;
                                            (u.scrollPosition.start({
                                                scrollPosition: u.clampPosition(t, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: l }));
                                        });
                                    });
                                return () => {
                                    (e(), t());
                                };
                            }, [u, D.offset, D.pending, r, B]));
                        const f = Au((e) => u.applyStepTo(e), A, [u]),
                            h = f[0],
                            v = f[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const p = (u) => {
                            u.target.classList.contains(qu) || Fu('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: C()(Iu, e.base), ref: n, onWheel: u.handleMouseWheel },
                            o().createElement('div', {
                                className: C()(Vu, e.topButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(qu) || 0 !== u.button || (Fu('play'), h(mu.Next));
                                },
                                ref: i,
                                onMouseEnter: p,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: C()(Gu, e.track),
                                    onMouseDown: (e) => {
                                        const r = E.current;
                                        if (r && 0 === e.button)
                                            if ((Fu('play'), e.target === r))
                                                B({ pending: !0, offset: e.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((e) => {
                                                    E.current &&
                                                        Zu(u, (r) => {
                                                            if (!r) return;
                                                            const n = t(u),
                                                                a = u.clampPosition(r, r.scrollTop + n * e);
                                                            u.applyScroll(a);
                                                        });
                                                })(e.screenY > r.getBoundingClientRect().y ? mu.Prev : mu.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: p,
                                },
                                o().createElement('div', { ref: E, className: C()($u, e.thumb) }),
                                o().createElement('div', { className: C()(ju, e.rail) }),
                            ),
                            o().createElement('div', {
                                className: C()(Uu, e.bottomButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(qu) || 0 !== u.button || (Fu('play'), h(mu.Prev));
                                },
                                onMouseUp: v,
                                ref: s,
                                onMouseEnter: p,
                            }),
                        );
                    }),
                    ue = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ee = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: i,
                        scrollClassNames: l,
                        getStepByRailClick: s,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const u = r || {};
                                return Object.assign({}, u, { base: C()(ue.base, u.base) });
                            }, [r]),
                            A = (0, a.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return o().createElement(
                            'div',
                            { className: C()(ue.defaultScroll, t), onWheel: e.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: C()(ue.area, n) },
                                o().createElement(te, { className: i, classNames: l, api: A }, u),
                            ),
                            o().createElement(Ju, { getStepByRailClick: s, api: e, onDrag: c, classNames: E }),
                        );
                    },
                    te = ({ className: u, classNames: e, children: t, api: r }) => (
                        (0, a.useEffect)(() => lu(r.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: C()(ue.base, u), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: C()(ue.content, null == e ? void 0 : e.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                te.Default = ee;
                const re = { Vertical: n, Horizontal: r },
                    ne = ({
                        startRowIndex: u,
                        cellHeight: e,
                        paddingTop: t,
                        paddingBottom: r,
                        amount: n,
                        itemsAmountPerRow: a,
                        visibleRowsAmount: o,
                    }) => {
                        const i = Math.ceil(n / a) * e,
                            l = o * e,
                            s = u * e;
                        return { paddingTop: `${s + t}rem`, paddingBottom: `${Math.max(i - s - l, 0) + r}rem` };
                    },
                    ae = (u) => {
                        const e = u.className,
                            t = u.children,
                            r = u.itemsAmountPerRow,
                            n = u.visibleRowsAmount,
                            a = u.startRowIndex,
                            i = u.amount,
                            l = a * r,
                            s = Math.min(n * r, i - l);
                        return o().createElement(
                            'div',
                            { className: e, style: ne(u) },
                            ((u, e) => {
                                const t = [];
                                for (let r = 0; r < u; r++) t.push(e(r));
                                return t;
                            })(s, (u) => t(l + u)),
                        );
                    },
                    oe = 'VirtualGrid_base_52',
                    ie = ({
                        amount: u,
                        cellWidth: e,
                        cellHeight: t,
                        children: r,
                        api: n,
                        classNames: i,
                        preloadedRows: s = 1,
                        paddingTop: c = 0,
                        paddingBottom: E = 0,
                    }) => {
                        const A = n.scrollApi,
                            F = (0, a.useRef)(0),
                            D = (0, a.useState)(0),
                            d = D[0],
                            B = D[1],
                            _ = (0, a.useState)(null),
                            m = _[0],
                            g = _[1],
                            f = (0, a.useState)(null),
                            h = f[0],
                            v = f[1];
                        return (
                            (0, a.useEffect)(() => {
                                const e = (e) => {
                                    if (!m) return;
                                    const r = Math.floor((l.O.view.pxToRem(e.value.scrollPosition) - c) / t + 1),
                                        a = Math.ceil(u / m),
                                        o = Math.max(0, Math.min(r - s, a));
                                    (B(o), n.startRowIndexChanged(o));
                                };
                                return (A.events.on('change', e), () => A.events.off('change', e));
                            }, [n, A, t, c, m, u, s]),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                        if (A.contentRef.current) {
                                            const u = getComputedStyle(A.contentRef.current),
                                                r = A.contentRef.current.getBoundingClientRect(),
                                                a =
                                                    l.O.view.pxToRem(r.width) -
                                                    (parseFloat(u.paddingLeft) + parseFloat(u.paddingRight)),
                                                o = Math.floor(a / e),
                                                i = Math.ceil(l.O.view.pxToRem(r.height) / t) + 2 * s;
                                            ((F.current = o), g(o), v(i), n.layoutCalculated(o, i));
                                        }
                                    },
                                    r = () => {
                                        const e = F.current;
                                        (u(), n.scrollToIndex(d * e));
                                    };
                                return (
                                    A.events.on('recalculateContent', u),
                                    A.events.on('resizeHandled', r),
                                    () => {
                                        (A.events.off('recalculateContent', u), A.events.off('resizeHandled', r));
                                    }
                                );
                            }, [n, A, t, e, s, d]),
                            (0, a.useEffect)(() => {
                                const u = (u, e = !0) => {
                                    m && A.applyScroll(Math.floor(u / m) * t + c, { immediate: e });
                                };
                                return (n.events.on('scrollToIndex', u), () => n.events.off('scrollToIndex', u));
                            }, [n, t, m, c, A]),
                            o().createElement(
                                re.Vertical.Default,
                                {
                                    api: A,
                                    className: null == i ? void 0 : i.scroll,
                                    areaClassName: null == i ? void 0 : i.areaClassName,
                                    scrollClassName: null == i ? void 0 : i.scrollClassName,
                                    scrollClassNames: {
                                        content: null == i ? void 0 : i.content,
                                        wrapper: null == i ? void 0 : i.wrapper,
                                    },
                                },
                                null !== m &&
                                    null !== h &&
                                    o().createElement(
                                        ae,
                                        {
                                            className: C()(oe, null == i ? void 0 : i.inner),
                                            paddingBottom: E,
                                            paddingTop: c,
                                            amount: u,
                                            itemsAmountPerRow: m,
                                            visibleRowsAmount: h,
                                            startRowIndex: d,
                                            cellHeight: t,
                                        },
                                        r,
                                    ),
                            )
                        );
                    },
                    le = (u, e = P.B3.INTEGRAL) => P.Z5.getNumberFormat(u, e),
                    se = 'ExchangeRateListItem_base_fb',
                    ce = 'ExchangeRateListItem_title_38',
                    Ee = 'ExchangeRateListItem_limit_85',
                    Ae = 'ExchangeRateListItem_limitIcon_6b',
                    Fe = 'ExchangeRateListItem_limitIcon__credits_7b',
                    De = 'ExchangeRateListItem_limitIcon__freeXP_e4',
                    de = 'ExchangeRateListItem_limitDivider_47',
                    Be = 'ExchangeRateListItem_exceededValue_5b',
                    Ce = 'ExchangeRateListItem_rates_e8',
                    _e = 'ExchangeRateListItem_equal_9d',
                    me = ({
                        index: u,
                        amount: e,
                        wholeAmount: t,
                        rate: r,
                        currencyTypeFrom: n,
                        currencyTypeTo: a,
                        exceeded: i,
                    }) => {
                        const l = a === W.credits ? Fe : De,
                            s =
                                n === W.gold
                                    ? { from: r.goldRateValue, to: r.resourceRateValue }
                                    : { from: r.resourceRateValue, to: r.goldRateValue };
                        return o().createElement(
                            'div',
                            { className: se },
                            o().createElement(
                                'div',
                                { className: ce },
                                o().createElement(J, {
                                    text: R.strings.personal_exchange_rates.allPersonalExchanges.content.title(u + 1),
                                    binding: { index: u + 1 },
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: Ee },
                                o().createElement('div', { className: C()(Ae, l) }),
                                o().createElement('span', { className: C()(i && Be) }, le(e)),
                                o().createElement('span', { className: de }, '/'),
                                o().createElement('span', null, le(t)),
                            ),
                            o().createElement(
                                'div',
                                { className: Ce },
                                o().createElement(z, { size: 'small', type: n, value: s.from }),
                                o().createElement('span', { className: _e }, '='),
                                o().createElement(z, { size: 'small', type: a, value: s.to }),
                            ),
                        );
                    };
                function ge() {
                    return !1;
                }
                console.log;
                var fe = t(174);
                function he(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return ve(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return ve(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var r = 0;
                        return function () {
                            return r >= u.length ? { done: !0 } : { done: !1, value: u[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function ve(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const pe = (u) => (0 === u ? window : window.subViews.get(u));
                const be = ((u, e) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: n, children: i, mocks: s }) {
                                const c = (0, a.useRef)([]),
                                    E = (t, r, n) => {
                                        var a;
                                        const o = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = pe,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function a(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? n.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = n.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const o = (u) => {
                                                    const n = t(e),
                                                        a = r.split('.').reduce((u, e) => u[e], n);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? a
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const i = 'string' == typeof a ? `${r}.${a}` : r,
                                                            s = l.O.view.addModelObserver(i, e, !0);
                                                        return (n.set(s, t), u && t(o(a)), s);
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
                                                        for (var u, t = he(n.keys()); !(u = t()).done; ) a(u.value, e);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(r),
                                            i =
                                                'real' === t
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            s = (u) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(u)) : i.readByPath(u),
                                            E = (u) => c.current.push(u),
                                            A = u({
                                                mode: t,
                                                readByPath: s,
                                                externalModel: i,
                                                observableModel: {
                                                    dict: (u) => {
                                                        const e = s(u),
                                                            r = fe.LO.box(e, { equals: ge });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, fe.aD)((u) => r.set(u)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    array: (u, e) => {
                                                        const r = null != e ? e : s(u),
                                                            n = fe.LO.box(r, { equals: ge });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, fe.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const r = null != e ? e : s(u),
                                                            n = fe.LO.box(r, { equals: ge });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, fe.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const r = s(e);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (u, e) => ((u[e] = fe.LO.box(r[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, fe.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                n[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = u,
                                                                a = Object.entries(n),
                                                                o = a.reduce(
                                                                    (u, [e, t]) => ((u[t] = fe.LO.box(r[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, fe.aD)((u) => {
                                                                            a.forEach(([e, t]) => {
                                                                                o[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            F = { mode: t, model: A, externalModel: i, cleanup: E };
                                        return {
                                            model: A,
                                            controls: 'mocks' === t && n ? n.controls(F) : e(F),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    A = (0, a.useRef)(!1),
                                    F = (0, a.useState)(r),
                                    D = F[0],
                                    d = F[1],
                                    B = (0, a.useState)(() => E(r, n, s)),
                                    C = B[0],
                                    _ = B[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        A.current ? _(E(D, n, s)) : (A.current = !0);
                                    }, [s, D, n]),
                                    (0, a.useEffect)(() => {
                                        d(r);
                                    }, [r]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (C.externalModel.dispose(), c.current.forEach((u) => u()));
                                        },
                                        [C],
                                    ),
                                    o().createElement(t.Provider, { value: C }, i)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) => ({
                            root: u.object(),
                            defaultExchangeRate: u.object('defaultExchangeRate'),
                            commonExchangeRate: u.object('commonExchangeRate'),
                            discounts: u.array('discounts'),
                        }),
                        ({ externalModel: u }) => ({ close: u.createCallbackNoArgs('onClose') }),
                    ),
                    we = be[0],
                    xe = be[1],
                    ye = {
                        base: 'App_base_6f',
                        fadeIn: 'App_fadeIn_12',
                        background: 'App_background_48',
                        close: 'App_close_fc',
                        container: 'App_container_25',
                        gridWrapper: 'App_gridWrapper_1d',
                        header: 'App_header_bb',
                        units: 'App_units_13',
                        notification: 'App_notification_5c',
                        notificationIcon: 'App_notificationIcon_93',
                        divider: 'App_divider_be',
                        footer: 'App_footer_e8',
                        scroll: 'App_scroll_fc',
                        mr10: 'App_mr10_91',
                        rates: 'App_rates_bc',
                        equal: 'App_equal_12',
                    },
                    Le = R.strings.personal_exchange_rates.allPersonalExchanges,
                    Se = (0, iu.Pi)(() => {
                        const u = xe(),
                            e = u.model,
                            t = u.controls,
                            r = (() => {
                                const u = re.Vertical.useVerticalScrollApi(),
                                    e = Bu(),
                                    t = (0, a.useCallback)((u, t = !0) => e.trigger('scrollToIndex', u, t), [e]),
                                    r = (0, a.useCallback)((u, t) => e.trigger('layoutCalculated', u, t), [e]),
                                    n = (0, a.useCallback)((u) => e.trigger('startRowIndexChanged', u), [e]);
                                return (0, a.useMemo)(
                                    () => ({
                                        scrollToIndex: t,
                                        layoutCalculated: r,
                                        startRowIndexChanged: n,
                                        scrollApi: u,
                                        events: { off: e.off, on: e.on },
                                    }),
                                    [t, r, n, u, e.off, e.on],
                                );
                            })();
                        var n;
                        ((n = t.close), ou(nu.n.ESCAPE, n));
                        const i = e.root.get(),
                            l = i.currencyTypeFrom,
                            s = i.currencyTypeTo,
                            c = i.allDiscountsLimitsAmount,
                            E =
                                l === W.gold
                                    ? {
                                          from: e.defaultExchangeRate.get().goldRateValue,
                                          to: e.defaultExchangeRate.get().resourceRateValue,
                                      }
                                    : {
                                          from: e.defaultExchangeRate.get().resourceRateValue,
                                          to: e.defaultExchangeRate.get().goldRateValue,
                                      },
                            A =
                                l === W.gold
                                    ? {
                                          from: e.commonExchangeRate.get().goldRateValue,
                                          to: e.commonExchangeRate.get().resourceRateValue,
                                      }
                                    : {
                                          from: e.commonExchangeRate.get().resourceRateValue,
                                          to: e.commonExchangeRate.get().goldRateValue,
                                      };
                        return o().createElement(
                            'div',
                            { className: ye.base },
                            o().createElement('div', { className: ye.background }),
                            o().createElement(ru, {
                                caption: R.strings.menu.viewHeader.closeBtn.label(),
                                type: 'close',
                                side: 'right',
                                onClick: t.close,
                                classNames: { base: ye.close },
                            }),
                            o().createElement(
                                'div',
                                { className: C()(ye.container, ye.containerExceeded) },
                                o().createElement(
                                    'div',
                                    { className: ye.header },
                                    o().createElement(J, {
                                        text: Le.header.title(),
                                        binding: {
                                            value: o().createElement(
                                                'div',
                                                { className: ye.units },
                                                le(Math.max(c, 0)),
                                            ),
                                        },
                                    }),
                                    o().createElement(J, {
                                        text: Le.header.subTitle(),
                                        binding: {
                                            value: o().createElement(
                                                'div',
                                                { className: ye.units },
                                                le(e.discounts.get().length),
                                            ),
                                        },
                                    }),
                                ),
                                o().createElement('div', { className: ye.divider }),
                                o().createElement(
                                    'div',
                                    { className: ye.gridWrapper },
                                    o().createElement(
                                        ie,
                                        {
                                            amount: e.discounts.get().length,
                                            cellWidth: 350,
                                            cellHeight: 90,
                                            paddingTop: 20,
                                            paddingBottom: 20,
                                            api: r,
                                            classNames: { scroll: ye.scroll },
                                        },
                                        (u) => {
                                            var t;
                                            const r = e.discounts.get()[u].value,
                                                n = null == (t = e.discounts.get()[u + 1]) ? void 0 : t.value;
                                            return o().createElement(me, {
                                                key: u,
                                                index: u,
                                                rate: r.exchangeRate,
                                                amount: r.selectedAmountOfDiscount,
                                                wholeAmount: r.wholeAmountOfDiscount,
                                                exceeded: n
                                                    ? n.selectedAmountOfDiscount > 0
                                                    : r.selectedAmountOfDiscount > r.wholeAmountOfDiscount,
                                                currencyTypeFrom: l,
                                                currencyTypeTo: s,
                                            });
                                        },
                                    ),
                                ),
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: ye.divider }),
                                    o().createElement(
                                        'div',
                                        { className: ye.notification },
                                        o().createElement('div', { className: ye.notificationIcon }),
                                        o().createElement('div', null, Le.exceeded()),
                                    ),
                                ),
                                o().createElement('div', { className: ye.divider }),
                                o().createElement(
                                    'div',
                                    { className: ye.footer },
                                    o().createElement(
                                        'div',
                                        { className: ye.rates },
                                        o().createElement('div', { className: ye.mr10 }, Le.footer.title()),
                                        o().createElement(z, { size: 'small', type: l, value: A.from }),
                                        o().createElement('span', { className: ye.equal }, '='),
                                        o().createElement(z, { size: 'small', type: s, value: A.to }),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: ye.rates },
                                        o().createElement('div', { className: ye.mr10 }, Le.footer.subTitle()),
                                        o().createElement(z, { size: 'small', type: l, value: E.from }),
                                        o().createElement('span', { className: ye.equal }, '='),
                                        o().createElement(z, { size: 'small', type: s, value: E.to }),
                                    ),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    O().render(
                        o().createElement(M, null, o().createElement(we, null, o().createElement(Se, null))),
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
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var n = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [e, t, r] = deferred[l], a = !0, o = 0; o < e.length; o++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[o]))
                            ? e.splice(o--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(l--, 1);
                        var i = t();
                        void 0 !== i && (u = i);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [e, t, r];
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
        (__webpack_require__.j = 364),
        (() => {
            var u = { 364: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        n,
                        [a, o, i] = t,
                        l = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (i) var s = i(__webpack_require__);
                    }
                    for (e && e(t); l < a.length; l++)
                        ((n = a[l]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0));
                    return __webpack_require__.O(s);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [674], () => __webpack_require__(991));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
